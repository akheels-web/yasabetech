import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const [logoPath, iconPath] = process.argv.slice(2);
if (!logoPath || !iconPath) {
  console.error('Usage: node scripts/generate-brand-assets.mjs "path/to/logo.png" "path/to/icon.png"');
  process.exit(1);
}
const UPLOADED_LOGO = path.resolve(logoPath);
const UPLOADED_ICON = path.resolve(iconPath);

const PUBLIC_DIR = path.resolve("public");
const APP_DIR = path.resolve("src/app");

async function generateAssets() {
  console.log("Starting brand asset generation...");

  // 1. Process Full Logo
  console.log("Processing full logo...");
  const rawLogo = await sharp(UPLOADED_LOGO).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { data: dLogo, info: iLogo } = rawLogo;

  // Accurate bounding box with threshold
  let minX = iLogo.width, maxX = 0, minY = iLogo.height, maxY = 0;
  for (let y = 0; y < iLogo.height; y++) {
    for (let x = 0; x < iLogo.width; x++) {
      const idx = (y * iLogo.width + x) * 4;
      const diff = Math.max(255 - dLogo[idx], 255 - dLogo[idx + 1], 255 - dLogo[idx + 2]);
      if (diff > 15) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  const padX = 16;
  const padY = 16;
  const cropLeft = Math.max(0, minX - padX);
  const cropTop = Math.max(0, minY - padY);
  const cropWidth = Math.min(iLogo.width - cropLeft, (maxX - minX + 1) + padX * 2);
  const cropHeight = Math.min(iLogo.height - cropTop, (maxY - minY + 1) + padY * 2);

  console.log(`Cropping logo to ${cropWidth}x${cropHeight} from (${cropLeft}, ${cropTop})...`);

  const croppedLogo = await sharp(UPLOADED_LOGO)
    .extract({ left: cropLeft, top: cropTop, width: cropWidth, height: cropHeight })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { data: cd, info: ci } = croppedLogo;
  const outBuf = Buffer.alloc(cd.length);

  for (let i = 0; i < cd.length; i += 4) {
    const r = cd[i], g = cd[i + 1], b = cd[i + 2];
    const maxDiff = Math.max(255 - r, 255 - g, 255 - b);

    if (maxDiff <= 4) {
      // Pure transparent background
      outBuf[i] = 255;
      outBuf[i + 1] = 255;
      outBuf[i + 2] = 255;
      outBuf[i + 3] = 0;
    } else {
      // Smooth alpha extraction against white
      const alpha = Math.min(1, Math.max(0, (maxDiff - 4) / 180));
      const aFloat = Math.max(0.01, alpha);
      const fgR = Math.min(255, Math.max(0, Math.round((r - (1 - aFloat) * 255) / aFloat)));
      const fgG = Math.min(255, Math.max(0, Math.round((g - (1 - aFloat) * 255) / aFloat)));
      const fgB = Math.min(255, Math.max(0, Math.round((b - (1 - aFloat) * 255) / aFloat)));

      outBuf[i] = fgR;
      outBuf[i + 1] = fgG;
      outBuf[i + 2] = fgB;
      outBuf[i + 3] = Math.round(alpha * 255);
    }
  }

  const logoSharp = sharp(outBuf, { raw: { width: ci.width, height: ci.height, channels: 4 } });

  // Save public/logo.png and public/logo.webp
  await logoSharp.clone().png({ quality: 100, compressionLevel: 9 }).toFile(path.join(PUBLIC_DIR, "logo.png"));
  await logoSharp.clone().webp({ quality: 96, lossless: false }).toFile(path.join(PUBLIC_DIR, "logo.webp"));
  console.log(`Saved public/logo.png and public/logo.webp (${ci.width}x${ci.height})`);

  // 2. Process Icon & Favicon from Image 2
  console.log("Processing brand icon from Image 2...");
  // Mark bbox: minX: 94, maxX: 940, minY: 211, maxY: 815
  // Center is ~517, ~513
  const squareSize = 920;
  const iconLeft = Math.round(517 - squareSize / 2); // 57
  const iconTop = Math.round(513 - squareSize / 2);  // 53

  const iconBase = sharp(UPLOADED_ICON).extract({
    left: iconLeft,
    top: iconTop,
    width: squareSize,
    height: squareSize
  });

  // Save icons in multiple sizes
  await iconBase.clone().resize(512, 512).png().toFile(path.join(PUBLIC_DIR, "icon-512.png"));
  await iconBase.clone().resize(192, 192).png().toFile(path.join(PUBLIC_DIR, "icon-192.png"));
  await iconBase.clone().resize(512, 512).png().toFile(path.join(PUBLIC_DIR, "icon.png"));
  await iconBase.clone().resize(512, 512).png().toFile(path.join(APP_DIR, "icon.png"));

  // Apple touch icon 180x180
  await iconBase.clone().resize(180, 180).png().toFile(path.join(PUBLIC_DIR, "apple-touch-icon.png"));
  await iconBase.clone().resize(180, 180).png().toFile(path.join(APP_DIR, "apple-icon.png"));

  // Favicons
  await iconBase.clone().resize(32, 32).png().toFile(path.join(PUBLIC_DIR, "favicon-32x32.png"));
  await iconBase.clone().resize(16, 16).png().toFile(path.join(PUBLIC_DIR, "favicon-16x16.png"));

  // Multi-resolution ICO: 16x16, 32x32, 48x48
  const icoSizes = [16, 32, 48];
  const pngBuffers = [];
  for (const s of icoSizes) {
    const b = await iconBase.clone().resize(s, s).png().toBuffer();
    pngBuffers.push({ size: s, buf: b });
  }

  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0); // reserved
  icoHeader.writeUInt16LE(1, 2); // ICO type = 1
  icoHeader.writeUInt16LE(icoSizes.length, 4); // count

  let icoOffset = 6 + 16 * icoSizes.length;
  const icoEntries = [];
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(item.size, 0); // width
    entry.writeUInt8(item.size, 1); // height
    entry.writeUInt8(0, 2); // colors
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // planes
    entry.writeUInt16LE(32, 6); // bpp
    entry.writeUInt32LE(item.buf.length, 8); // size
    entry.writeUInt32LE(icoOffset, 12); // offset
    icoEntries.push(entry);
    icoOffset += item.buf.length;
  }

  const icoBuffer = Buffer.concat([icoHeader, ...icoEntries, ...pngBuffers.map(p => p.buf)]);
  await fs.writeFile(path.join(APP_DIR, "favicon.ico"), icoBuffer);
  await fs.writeFile(path.join(PUBLIC_DIR, "favicon.ico"), icoBuffer);

  console.log("Saved favicon.ico to src/app/ and public/ successfully!");
  console.log("All brand assets generated successfully!");
}

generateAssets().catch(err => {
  console.error(err);
  process.exit(1);
});
