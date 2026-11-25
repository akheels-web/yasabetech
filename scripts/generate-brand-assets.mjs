import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const [logoArg] = process.argv.slice(2);
if (!logoArg) {
  console.error('Usage: node scripts/generate-brand-assets.mjs "path/to/misyatech.png"');
  process.exit(1);
}

const SOURCE_LOGO = path.resolve(logoArg);
const PUBLIC_DIR = path.resolve("public");
const APP_DIR = path.resolve("src/app");

async function generateBrandAssets() {
  const { data: srcData, info: srcInfo } = await sharp(SOURCE_LOGO)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = srcInfo.width;
  const h = srcInfo.height;

  // 1. Tight bounding box of visible pixels
  let minX = w;
  let maxX = 0;
  let minY = h;
  let maxY = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const a = srcData[idx + 3];
      const r = srcData[idx];
      const g = srcData[idx + 1];
      const b = srcData[idx + 2];
      const isVisible = a > 10 && !(r > 248 && g > 248 && b > 248);
      if (isVisible) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  const pad = 8;
  const cropLeft = Math.max(0, minX - pad);
  const cropTop = Math.max(0, minY - pad);
  const cropWidth = Math.min(w - cropLeft, maxX - minX + 1 + pad * 2);
  const cropHeight = Math.min(h - cropTop, maxY - minY + 1 + pad * 2);

  const cropped = await sharp(SOURCE_LOGO)
    .extract({ left: cropLeft, top: cropTop, width: cropWidth, height: cropHeight })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const cw = cropped.info.width;
  const ch = cropped.info.height;

  // Clean away near-white matte fringe if any
  const lightBuf = Buffer.from(cropped.data);
  for (let i = 0; i < lightBuf.length; i += 4) {
    if (
      lightBuf[i + 3] <= 10 ||
      (lightBuf[i] > 248 && lightBuf[i + 1] > 248 && lightBuf[i + 2] > 248)
    ) {
      lightBuf[i + 3] = 0;
    }
  }

  // Export public/logo.webp (960px wide)
  const targetWidth = 960;
  const targetHeight = Math.round((ch / cw) * targetWidth);

  await sharp(lightBuf, { raw: { width: cw, height: ch, channels: 4 } })
    .resize(targetWidth, targetHeight, { fit: "fill" })
    .webp({ quality: 96 })
    .toFile(path.join(PUBLIC_DIR, "logo.webp"));

  // 2. Connected-component segmentation of alpha > 10 pixels to cleanly separate
  // the rightmost folded "A" ribbon and the cyan "i" dot from the navy "MiSY" letters.
  const totalPixels = cw * ch;
  const compId = new Int32Array(totalPixels);
  const components = []; // { id, minX, maxX, minY, maxY, count, avgB, avgG }
  const queue = new Int32Array(totalPixels);

  let nextId = 1;
  for (let y = 0; y < ch; y++) {
    for (let x = 0; x < cw; x++) {
      const p = y * cw + x;
      if (compId[p] !== 0 || lightBuf[p * 4 + 3] <= 10) continue;

      const id = nextId++;
      let head = 0;
      let tail = 0;
      queue[tail++] = p;
      compId[p] = id;

      let cMinX = x;
      let cMaxX = x;
      let cMinY = y;
      let cMaxY = y;
      let sumB = 0;
      let sumG = 0;
      let count = 0;

      while (head < tail) {
        const cur = queue[head++];
        const cx = cur % cw;
        const cy = (cur - cx) / cw;
        const i = cur * 4;
        sumG += lightBuf[i + 1];
        sumB += lightBuf[i + 2];
        count++;

        if (cx < cMinX) cMinX = cx;
        if (cx > cMaxX) cMaxX = cx;
        if (cy < cMinY) cMinY = cy;
        if (cy > cMaxY) cMaxY = cy;

        // 4-connected neighbors
        if (cx > 0 && compId[cur - 1] === 0 && lightBuf[(cur - 1) * 4 + 3] > 10) {
          compId[cur - 1] = id;
          queue[tail++] = cur - 1;
        }
        if (cx + 1 < cw && compId[cur + 1] === 0 && lightBuf[(cur + 1) * 4 + 3] > 10) {
          compId[cur + 1] = id;
          queue[tail++] = cur + 1;
        }
        if (cy > 0 && compId[cur - cw] === 0 && lightBuf[(cur - cw) * 4 + 3] > 10) {
          compId[cur - cw] = id;
          queue[tail++] = cur - cw;
        }
        if (cy + 1 < ch && compId[cur + cw] === 0 && lightBuf[(cur + cw) * 4 + 3] > 10) {
          compId[cur + cw] = id;
          queue[tail++] = cur + cw;
        }
      }

      components.push({
        id,
        minX: cMinX,
        maxX: cMaxX,
        minY: cMinY,
        maxY: cMaxY,
        count,
        avgG: sumG / count,
        avgB: sumB / count,
      });
    }
  }

  // Filter major glyph components (count > 500)
  const major = components.filter((c) => c.count > 500).sort((a, b) => a.maxX - b.maxX);
  // Rightmost major component is the folded "A" ribbon
  const ribbonComp = major[major.length - 1];
  // Any small/vibrant cyan component (avgG > 140 && avgB > 180) is the i-dot (or ribbon)
  const keepOriginalIds = new Set(
    components
      .filter((c) => c.id === ribbonComp.id || (c.avgG > 140 && c.avgB > 180))
      .map((c) => c.id),
  );

  // 3. Build public/logo-dark.webp: recolor non-cyan/non-ribbon components ("MiSY") to #F8FAFC
  const darkBuf = Buffer.from(lightBuf);
  for (let p = 0; p < totalPixels; p++) {
    const cid = compId[p];
    if (cid === 0 || keepOriginalIds.has(cid)) continue;
    const i = p * 4;
    darkBuf[i] = 248;
    darkBuf[i + 1] = 250;
    darkBuf[i + 2] = 252;
  }

  await sharp(darkBuf, { raw: { width: cw, height: ch, channels: 4 } })
    .resize(targetWidth, targetHeight, { fit: "fill" })
    .webp({ quality: 96 })
    .toFile(path.join(PUBLIC_DIR, "logo-dark.webp"));

  // 4. Extract ONLY pixels belonging to the folded "A" ribbon component
  const emblemBuf = Buffer.alloc(totalPixels * 4);
  for (let p = 0; p < totalPixels; p++) {
    if (compId[p] !== ribbonComp.id) continue;
    const i = p * 4;
    emblemBuf[i] = lightBuf[i];
    emblemBuf[i + 1] = lightBuf[i + 1];
    emblemBuf[i + 2] = lightBuf[i + 2];
    emblemBuf[i + 3] = lightBuf[i + 3];
  }

  const emblemCrop = await sharp(emblemBuf, { raw: { width: cw, height: ch, channels: 4 } })
    .extract({
      left: ribbonComp.minX,
      top: ribbonComp.minY,
      width: ribbonComp.maxX - ribbonComp.minX + 1,
      height: ribbonComp.maxY - ribbonComp.minY + 1,
    })
    .resize(356, 356, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  // Deep Navy rounded tile with subtle sky-blue inner border
  const tileSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
    <defs>
      <linearGradient id="tile-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#050E1E" />
        <stop offset="100%" stop-color="#0D1F3C" />
      </linearGradient>
    </defs>
    <rect width="512" height="512" rx="112" fill="url(#tile-bg)" />
    <rect x="20" y="20" width="472" height="472" rx="94" fill="none" stroke="#38BDF8" stroke-opacity="0.28" stroke-width="3" />
  </svg>`;

  const composedBuf = await sharp(Buffer.from(tileSvg))
    .composite([{ input: emblemCrop, gravity: "center" }])
    .png()
    .toBuffer();

  const iconBase = sharp(composedBuf);

  // 5. Write all icon & favicon variants
  await iconBase.clone().resize(512, 512).webp({ quality: 94 }).toFile(path.join(PUBLIC_DIR, "icon.webp"));
  await iconBase.clone().resize(512, 512).png().toFile(path.join(APP_DIR, "icon.png"));
  await iconBase.clone().resize(180, 180).png().toFile(path.join(APP_DIR, "apple-icon.png"));
  await iconBase.clone().resize(512, 512).png().toFile(path.join(PUBLIC_DIR, "icon-512.png"));
  await iconBase.clone().resize(192, 192).png().toFile(path.join(PUBLIC_DIR, "icon-192.png"));
  await iconBase.clone().resize(180, 180).png().toFile(path.join(PUBLIC_DIR, "apple-touch-icon.png"));
  await iconBase.clone().resize(32, 32).png().toFile(path.join(PUBLIC_DIR, "favicon-32x32.png"));
  await iconBase.clone().resize(16, 16).png().toFile(path.join(PUBLIC_DIR, "favicon-16x16.png"));

  const icoSizes = [16, 32, 48];
  const pngBuffers = [];
  for (const s of icoSizes) {
    const buf = await iconBase.clone().resize(s, s).png().toBuffer();
    pngBuffers.push({ size: s, buf });
  }

  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0);
  icoHeader.writeUInt16LE(1, 2);
  icoHeader.writeUInt16LE(icoSizes.length, 4);

  let icoOffset = 6 + 16 * icoSizes.length;
  const icoEntries = [];
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(item.size, 0);
    entry.writeUInt8(item.size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(item.buf.length, 8);
    entry.writeUInt32LE(icoOffset, 12);
    icoEntries.push(entry);
    icoOffset += item.buf.length;
  }

  const icoBuffer = Buffer.concat([icoHeader, ...icoEntries, ...pngBuffers.map((p) => p.buf)]);
  await fs.writeFile(path.join(APP_DIR, "favicon.ico"), icoBuffer);
  await fs.writeFile(path.join(PUBLIC_DIR, "favicon.ico"), icoBuffer);

  console.log(
    JSON.stringify({
      source: { w, h, cropWidth, cropHeight },
      logo: { width: targetWidth, height: targetHeight },
      majorComponents: major.length,
      ribbonBounds: {
        width: ribbonComp.maxX - ribbonComp.minX + 1,
        height: ribbonComp.maxY - ribbonComp.minY + 1,
      },
    }),
  );
}

generateBrandAssets().catch((err) => {
  console.error(err);
  process.exit(1);
});
