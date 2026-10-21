// Generates the 1200×630 Open Graph image from the rebuilt WATS seal.
// Usage: npm run build:assets
const path = require('path');
const sharp = require('sharp');

const root = path.join(__dirname, '..');
const svg = path.join(root, 'public/brand/wats-seal.svg');
const out = path.join(root, 'public/og-image.png');

(async () => {
  const seal = await sharp(svg, { density: 300 }).resize({ height: 600 }).png().toBuffer();
  await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#111111' } })
    .composite([{ input: seal, gravity: 'center' }])
    .png({ compressionLevel: 9 })
    .toFile(out);
  console.log('wrote', out);
})();
