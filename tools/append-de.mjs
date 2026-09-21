// Chèn các đề mới vào cuối mảng <BANK>_EXAMS của web/data-<bank>.js.
//   node tools/append-de.mjs <bank> <file-manh-de.js>
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const [bank, frag] = process.argv.slice(2);
if (!bank || !frag) { console.error('Dùng: node tools/append-de.mjs <bank> <fragment.js>'); process.exit(1); }

const target = path.join(ROOT, 'web', `data-${bank}.js`);
let src = fs.readFileSync(target, 'utf8');
const piece = fs.readFileSync(frag, 'utf8').trim();

const marker = '\n];\n';
const at = src.lastIndexOf(marker);
if (at < 0) { console.error(`Không tìm thấy dấu kết thúc mảng trong ${target}`); process.exit(1); }

src = src.slice(0, at + 1) + '\n' + piece + '\n' + src.slice(at + 1);
fs.writeFileSync(target, src);
console.log(`✓ đã chèn ${frag} vào ${path.relative(ROOT, target)}`);
