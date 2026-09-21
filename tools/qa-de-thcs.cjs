// Soát sâu hơn checker mặc định: kí tự điều khiển lọt vào do escape sai, lệnh
// LaTeX viết thiếu dấu gạch chéo, $ lẻ không khép cặp, câu trùng GIỮA các đề,
// và số còn bị tách nhóm nghìn.
const fs = require('fs'), vm = require('vm'), path = require('path');

const banks = process.argv.slice(2);
let problems = 0;

for (const bank of banks) {
  const file = path.join('web', `data-${bank}.js`);
  if (!fs.existsSync(file)) continue;
  const sandbox = {
    SUBJECTS: [],
    o4: (a, b, c, d) => [{ k: 'A', t: a }, { k: 'B', t: b }, { k: 'C', t: c }, { k: 'D', t: d }],
    console,
  };
  vm.runInNewContext(fs.readFileSync(file, 'utf8'), sandbox, { filename: file });
  const meta = sandbox.SUBJECTS[sandbox.SUBJECTS.length - 1];
  const seen = new Map();
  let ctrl = 0, badTex = 0, oddDollar = 0, spaced = 0, dupAcross = 0;

  meta.exams.forEach(exam => {
    exam.questions.forEach(q => {
      const parts = [q.text, q.why, ...q.opts.map(o => o.t)];
      const all = parts.join(' \u0001 ');

      // kí tự điều khiển (form-feed, backspace, vertical tab) = dấu hiệu \f \b \v bị JS nuốt
      if (/[\f\b\v]/.test(all)) { ctrl++; if (ctrl <= 3) console.log(`  [ctrl] ${exam.title} / ${q.name}`); }

      // lệnh LaTeX phổ biến mà thiếu dấu gạch chéo ngược ở đầu
      if (/(?<!\\)\b(frac|cdot|circ|sqrt|le|ge|mathbb)\{/.test(all)) {
        badTex++; if (badTex <= 3) console.log(`  [tex ] ${exam.title} / ${q.name}`);
      }

      // số $ phải chẵn trong từng phần
      for (const p of parts) {
        const n = (String(p).match(/\$/g) || []).length;
        if (n % 2 !== 0) { oddDollar++; if (oddDollar <= 3) console.log(`  [$   ] ${exam.title} / ${q.name}: ${String(p).slice(0, 70)}`); break; }
      }

      // số còn bị tách nhóm nghìn
      if (/(?<![\d,])\d{1,3}(?:[  ]\d{3})+(?!\d)/.test(all)) {
        spaced++; if (spaced <= 3) console.log(`  [num ] ${exam.title} / ${q.name}`);
      }

      // câu trùng hệt giữa các đề khác nhau
      const key = (String(q.text) + '||' + q.opts.map(o => o.t).join('|')).replace(/\s+/g, ' ').trim().toLowerCase();
      if (key.length > 40) {
        if (seen.has(key)) {
          dupAcross++;
          if (dupAcross <= 5) console.log(`  [dup ] ${seen.get(key)}  ==  ${exam.title} / ${q.name}`);
        } else seen.set(key, `${exam.title} / ${q.name}`);
      }
    });
  });

  const bad = ctrl + badTex + oddDollar + spaced + dupAcross;
  problems += bad;
  const line = `${bank}: ${meta.exams.length} đề — ctrl ${ctrl} · latex ${badTex} · $ lẻ ${oddDollar} · số tách nhóm ${spaced} · câu trùng hệt giữa các đề ${dupAcross}`;
  console.log((bad === 0 ? '✓ ' : '✗ ') + line);
}

console.log(problems === 0 ? '\n✓ Không phát hiện vấn đề.' : `\n✗ Tổng cộng ${problems} chỗ cần xem lại.`);
process.exit(problems === 0 ? 0 : 1);
