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

// Dấu kết thúc mảng, chấp nhận cả xuống dòng kiểu LF lẫn CRLF (git trên Windows
// hay đổi qua lại nên không thể tìm chuỗi cứng '\n];\n').
const marker = /\r?\n\];\r?\n/g;
let at = -1, m;
while ((m = marker.exec(src)) !== null) at = m.index;
if (at < 0) { console.error(`Không tìm thấy dấu kết thúc mảng trong ${target}`); process.exit(1); }

const eol = src.includes('\r\n') ? '\r\n' : '\n';
const body = piece.split(/\r?\n/).join(eol);
src = src.slice(0, at) + eol + eol + body + eol + src.slice(at);
fs.writeFileSync(target, src);
console.log(`✓ đã chèn ${frag} vào ${path.relative(ROOT, target)}`);
