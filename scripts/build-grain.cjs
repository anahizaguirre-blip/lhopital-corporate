// Generates the 64×64 grain tile used over the door photos (cheaper than a live SVG filter).
// Usage: node scripts/build-grain.cjs
const path = require('path');
const sharp = require('sharp');

const size = 64;
const buf = Buffer.alloc(size * size * 4);
let seed = 7;
const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
for (let i = 0; i < size * size; i++) {
  const v = Math.round(rand() * 255);
  buf[i * 4] = v;
  buf[i * 4 + 1] = v;
  buf[i * 4 + 2] = v;
  buf[i * 4 + 3] = Math.round(40 + rand() * 60);
}
sharp(buf, { raw: { width: size, height: size, channels: 4 } })
  .png({ compressionLevel: 9 })
  .toFile(path.join(__dirname, '../public/textures/grain.png'))
  .then((info) => console.log('grain', info.size, 'bytes'));
