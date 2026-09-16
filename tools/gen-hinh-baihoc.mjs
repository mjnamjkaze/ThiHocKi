// SINH TỰ ĐỘNG bộ "Toán qua hình — Bài học" cho lớp 2, 3, 4, 5.
//   node tools/gen-hinh-baihoc.mjs
// Tạo:  web/data-hinhb{2,3,4,5}.js  +  web/assets/hinhb{2,3,4,5}/*.svg  +  web/_preview_hinhb.html
//
// Mỗi khối 10 đề × 10 câu = 100 câu, TẤT CẢ đều có hình SVG (hình đề hoặc 4 phương án là hình).
// Mỗi đề bám một (cụm) bài học của SGK Toán GDPT 2018 (Kết nối tri thức) mà bộ "Toán qua hình"
// đợt 1 (gen-toan2-hinh.mjs / gen-hinh345.mjs) chưa đụng tới. Danh mục dạng câu nằm ở đầu mỗi
// module tools/hinhb-q{2,3,4,5}.mjs; bộ vẽ chung ở tools/hinhb-art.mjs.
// Hình vẽ bằng code, đáp án lấy thẳng từ dữ liệu vẽ hình nên hình và lời giải KHÔNG BAO GIỜ lệch nhau.
// (Đây là file sinh tự động — sửa nội dung trong các module rồi chạy lại, đừng sửa data-hinhb*.js.)

import fs from 'node:fs';
import path from 'node:path';
import { WEB, STATE, resetPos } from './hinhb-art.mjs';

const IDBASE = { 2: 9501, 3: 9511, 4: 9521, 5: 9531 };
const MODS = { 2: './hinhb-q2.mjs', 3: './hinhb-q3.mjs', 4: './hinhb-q4.mjs', 5: './hinhb-q5.mjs' };

function checkQ(q, where) {
  if (!q.img && !q.optImgs) throw new Error(`${where}: câu không có hình`);
  if (!/^[ABCD]$/.test(q.ans)) throw new Error(`${where}: ans sai`);
  if (q.optImgs) { if (q.optImgs.length !== 4) throw new Error(`${where}: optImgs ≠ 4`); }
  else { if (!q.opts || q.opts.length !== 4 || new Set(q.opts).size !== 4) throw new Error(`${where}: phương án trùng/thiếu: ${JSON.stringify(q.opts)}`); }
  if (!q.text || !q.why || !q.sec) throw new Error(`${where}: thiếu text/why/sec`);
}

function buildGrade(g, mod) {
  const exams = [];
  if (mod.PLAN.length !== 10) throw new Error(`Lớp ${g}: cần đúng 10 đề`);
  mod.PLAN.forEach((de, ei) => {
    if (de.q.length !== 10) throw new Error(`Lớp ${g} ${de.title}: cần đúng 10 câu (có ${de.q.length})`);
    resetPos();
    const qs = de.q.map(([fn, arg], qi) => {
      const key = `d${ei + 1}c${qi + 1}`;
      const q = fn(key, arg);
      checkQ(q, `Lớp ${g} ${de.title} câu ${qi + 1}`);
      return { ...q, name: `Câu ${qi + 1}`, pts: 1 };
    });
    exams.push({ id: IDBASE[g] + ei, title: de.title, time: 25, questions: qs });
  });
  return exams;
}

const jsStr = s => JSON.stringify(s);
function serialize(g, exams, hero) {
  const NAME = `HINHB${g}`;
  const nQ = exams.reduce((t, e) => t + e.questions.length, 0);
  let s = `// TOÁN LỚP ${g} QUA HÌNH — BÀI HỌC · ${exams.length} đề × 10 câu = ${nQ} câu, 100% câu có hình SVG.\n`;
  s += `// SINH TỰ ĐỘNG bởi tools/gen-hinh-baihoc.mjs (module tools/hinhb-q${g}.mjs) — sửa trong script rồi chạy lại:\n`;
  s += `//     node tools/gen-hinh-baihoc.mjs\n`;
  s += `// ${hero.intro}\n`;
  s += `// Hình vẽ bằng code (assets/hinhb${g}/), đáp án lấy thẳng từ dữ liệu vẽ hình nên không bao giờ lệch.\n\n`;
  s += `const ${NAME}_EXAMS = [\n`;
  for (const ex of exams) {
    s += `{\n  id: ${ex.id}, title: ${jsStr(ex.title)}, time: ${ex.time},\n  questions: [\n`;
    for (const q of ex.questions) {
      const opts = q.optImgs
        ? `opts: [${q.optImgs.map((p, i) => `{ k: '${'ABCD'[i]}', img: ${jsStr(p)} }`).join(', ')}]`
        : `opts: o4(${q.opts.map(jsStr).join(', ')})`;
      const imgPart = q.img ? `, img: ${jsStr(q.img)}` : '';
      s += `    { sec: ${jsStr(q.sec)}, name: ${jsStr(q.name)}, pts: 1, text: ${jsStr(q.text)}${imgPart}, ${opts}, ans: ${jsStr(q.ans)}, why: ${jsStr(q.why)} },\n`;
    }
    s += `  ],\n},\n`;
  }
  s += `];\n\n`;
  s += `SUBJECTS.push({\n  id: 'hinhb${g}', name: 'Toán qua hình — Bài học', short: 'Bài học hình ${g}', icon: '🧩', grade: ${g},\n`;
  s += `  exams: ${NAME}_EXAMS, ready: true,\n`;
  s += `  heroTitle: ${jsStr(hero.title)},\n`;
  s += `  heroMeta: '📚 ${exams.length} đề &nbsp;•&nbsp; ${nQ} câu &nbsp;•&nbsp; 🖼️ 100% câu có hình &nbsp;•&nbsp; ⏱ 25 phút mỗi đề',\n});\n`;
  return s;
}

const only = process.argv.slice(2).map(Number).filter(Boolean);
const grades = only.length ? only : [2, 3, 4, 5];
const report = [];
for (const g of grades) {
  // xoá hình cũ của khối để không sót file mồ côi
  const dir = path.join(WEB, 'assets', `hinhb${g}`);
  if (fs.existsSync(dir)) for (const f of fs.readdirSync(dir)) fs.unlinkSync(path.join(dir, f));
  const before = STATE.assetCount;
  const mod = await import(MODS[g]);
  const exams = buildGrade(g, mod);
  fs.writeFileSync(path.join(WEB, `data-hinhb${g}.js`), serialize(g, exams, mod.HERO), 'utf8');
  const nQ = exams.reduce((t, e) => t + e.questions.length, 0);
  const nOptImg = exams.reduce((t, e) => t + e.questions.filter(q => q.optImgs).length, 0);
  const dist = { A: 0, B: 0, C: 0, D: 0 }; exams.forEach(e => e.questions.forEach(q => dist[q.ans]++));
  report.push(`hinhb${g}: ${exams.length} đề · ${nQ} câu · ${STATE.assetCount - before} SVG (${nOptImg} câu phương án là hình) · đáp án A${dist.A} B${dist.B} C${dist.C} D${dist.D}`);
}

// trang xem nhanh toàn bộ hình (dev, bị gitignore)
const prev = `<!doctype html><meta charset=utf-8><title>Toán qua hình — Bài học · assets</title><style>body{font:14px system-ui;background:#fafafa;margin:16px}h1{font-size:18px}.g{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}figure{margin:0;background:#fff;border:1px solid #ddd;border-radius:8px;padding:8px}img{width:100%;height:180px;object-fit:contain}figcaption{font-size:11px;color:#666;text-align:center;margin-top:4px}</style><h1>Toán qua hình — Bài học · ${STATE.preview.length} hình</h1><div class=g>${STATE.preview.map(p => `<figure><img src="${p}"><figcaption>${p.replace('assets/', '')}</figcaption></figure>`).join('\n')}</div>`;
fs.writeFileSync(path.join(WEB, '_preview_hinhb.html'), prev, 'utf8');

console.log('Đã sinh:');
report.forEach(r => console.log('  ' + r));
console.log(`Tổng SVG đã ghi: ${STATE.assetCount}`);
