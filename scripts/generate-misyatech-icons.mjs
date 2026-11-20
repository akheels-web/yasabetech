import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const PUBLIC_DIR = path.resolve("public");
const IMAGES_DIR = path.resolve("public/images");
const APP_DIR = path.resolve("src/app");

// Architectural interlocking "M" emblem on Deep Navy (#07142B) rounded tile
// with Royal Cobalt (#2563EB) and Sky Light Blue (#38BDF8 / #7DD3FC) facets.
const ICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#050E1E" />
      <stop offset="100%" stop-color="#0D1F3C" />
    </linearGradient>
    <linearGradient id="cobalt" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#3B82F6" />
      <stop offset="100%" stop-color="#1D4ED8" />
    </linearGradient>
    <linearGradient id="sky" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0%" stop-color="#38BDF8" />
      <stop offset="100%" stop-color="#7DD3FC" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="112" fill="url(#bg)" />
  <rect x="24" y="24" width="464" height="464" rx="92" fill="none" stroke="#7DD3FC" stroke-opacity="0.28" stroke-width="3" />
  <path d="M114 382 V146 L256 286 L256 352 L166 262 V382 Z" fill="url(#cobalt)" />
  <path d="M398 382 V146 L256 286 L256 352 L346 262 V382 Z" fill="url(#sky)" />
  <polygon points="256,112 282,138 256,164 230,138" fill="#BAE6FD" />
</svg>`;

const HORIZONTAL_LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 140">
  <defs>
    <linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#050E1E" />
      <stop offset="100%" stop-color="#0D1F3C" />
    </linearGradient>
    <linearGradient id="cobalt2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#3B82F6" />
      <stop offset="100%" stop-color="#1D4ED8" />
    </linearGradient>
    <linearGradient id="sky2" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0%" stop-color="#38BDF8" />
      <stop offset="100%" stop-color="#7DD3FC" />
    </linearGradient>
  </defs>
  <rect x="8" y="14" width="112" height="112" rx="26" fill="url(#bg2)" />
  <rect x="14" y="20" width="100" height="100" rx="20" fill="none" stroke="#7DD3FC" stroke-opacity="0.35" stroke-width="1.5" />
  <path d="M32 98 V44 L64 76 L64 91 L44 71 V98 Z" fill="url(#cobalt2)" />
  <path d="M96 98 V44 L64 76 L64 91 L84 71 V98 Z" fill="url(#sky2)" />
  <polygon points="64,34 71,41 64,48 57,41" fill="#BAE6FD" />
  <text x="142" y="79" font-family="Segoe UI, Arial, sans-serif" font-size="48" font-weight="700" letter-spacing="4" fill="#07142B">MISYATECH</text>
  <text x="144" y="109" font-family="Segoe UI, Arial, sans-serif" font-size="15" font-weight="600" letter-spacing="5" fill="#1D4ED8">OMAN · DUBAI · ENTERPRISE IT</text>
</svg>`;

async function buildIcons() {
  const iconSvgBuf = Buffer.from(ICON_SVG);
  const logoSvgBuf = Buffer.from(HORIZONTAL_LOGO_SVG);

  await sharp(iconSvgBuf).resize(512, 512).png().toFile(path.join(APP_DIR, "icon.png"));
  await sharp(iconSvgBuf).resize(180, 180).png().toFile(path.join(APP_DIR, "apple-icon.png"));
  await sharp(iconSvgBuf).resize(512, 512).png().toFile(path.join(PUBLIC_DIR, "icon-512.png"));
  await sharp(iconSvgBuf).resize(192, 192).png().toFile(path.join(PUBLIC_DIR, "icon-192.png"));
  await sharp(iconSvgBuf).resize(180, 180).png().toFile(path.join(PUBLIC_DIR, "apple-touch-icon.png"));
  await sharp(iconSvgBuf).resize(32, 32).png().toFile(path.join(PUBLIC_DIR, "favicon-32x32.png"));
  await sharp(iconSvgBuf).resize(16, 16).png().toFile(path.join(PUBLIC_DIR, "favicon-16x16.png"));

  await sharp(iconSvgBuf).resize(512, 512).webp({ quality: 92 }).toFile(path.join(PUBLIC_DIR, "icon.webp"));
  await sharp(logoSvgBuf).resize(680, 140).webp({ quality: 95 }).toFile(path.join(PUBLIC_DIR, "logo.webp"));

  const icoSizes = [16, 32, 48];
  const pngBuffers = [];
  for (const s of icoSizes) {
    const buf = await sharp(iconSvgBuf).resize(s, s).png().toBuffer();
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

  const ogSrc = path.join(IMAGES_DIR, "workspace-hero.webp");
  await sharp(ogSrc)
    .resize(1200, 630, { fit: "cover", position: "center" })
    .webp({ quality: 86, effort: 6 })
    .toFile(path.join(IMAGES_DIR, "og-misyatech.webp"));

  for (const stale of ["logo.png", "icon.png"]) {
    try {
      await fs.unlink(path.join(PUBLIC_DIR, stale));
    } catch {
      // Ignore if absent
    }
  }

  console.log("Generated Navy & Light Blue Misyatech icons and WebP assets.");
}

buildIcons().catch((err) => {
  console.error(err);
  process.exit(1);
});
