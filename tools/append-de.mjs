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

// Chèn ĐÚNG VỊ TRÍ theo id, không phải cứ nối vào cuối. Nhiều agent chạy song
// song nên các mảnh đề có thể về không đúng thứ tự; checker lại lấy vị trí
// trong mảng làm số đề, nên sai thứ tự là sai hết số đề.
const firstId = Number((piece.match(/\bid:\s*(\d+)/) || [])[1]);
if (!Number.isFinite(firstId)) { console.error(`${frag}: không đọc được id của đề đầu tiên`); process.exit(1); }

let insertAt = at;                       // mặc định: cuối mảng
let insertBefore = null;
const examStart = /(\r?\n)\{\r?\n\s*id:\s*(\d+)/g;
let e;
while ((e = examStart.exec(src)) !== null) {
  if (e.index >= at) break;              // đã qua khỏi mảng
  if (Number(e[2]) > firstId) { insertAt = e.index; insertBefore = Number(e[2]); break; }
}

// Chèn trước một đề khác thì phải kèm dòng comment tiêu đề ngay phía trên nó.
if (insertBefore !== null) {
  const head = src.slice(0, insertAt);
  const cmt = head.lastIndexOf('/* ═');
  if (cmt > 0 && head.slice(cmt).split(/\r?\n/).length <= 2) insertAt = cmt - eol.length;
}

src = src.slice(0, insertAt) + eol + eol + body + src.slice(insertAt);
fs.writeFileSync(target, src);
const where = insertBefore === null ? 'cuối mảng' : `trước đề id ${insertBefore}`;
console.log(`✓ đã chèn ${path.basename(frag)} (id đầu ${firstId}) vào ${path.relative(ROOT, target)} — ${where}`);
