/* ============================================================================
   gen-tuduy-tt.mjs — sinh bộ đề "TOÁN TƯ DUY 12 DẠNG" cho lớp 2 và lớp 3.

   Chạy:  node tools/gen-tuduy-tt.mjs
   Xuất:  web/assets/ttd2/*.svg , web/assets/ttd3/*.svg   (hình vẽ bằng code)
          web/data-ttd2.js , web/data-ttd3.js             (mỗi lớp 12 dạng × 20 câu)

   12 DẠNG TƯ DUY (mỗi dạng 20 câu, mỗi lớp 240 câu):
     1  🔢 Number Sense        — cảm nhận, so sánh, phân tích số
     2  🧩 Pattern & Sequence  — tìm quy luật
     3  ❓ Missing Number      — suy ngược tìm số chưa biết
     4  ⚖️ Logic & Deduction   — suy luận từ điều kiện
     5  ➕ Mental Math         — tìm cách tính thông minh
     6  🔄 Transformation      — nhìn sự thay đổi và quy luật
     7  📐 Spatial / Visual    — tư duy không gian
     8  🧮 Combinatorics       — đếm cách, liệt kê khả năng
     9  🧠 Classification      — phân loại, tìm điểm chung / khác
     10 📊 Data & Graph        — đọc bảng, biểu đồ, suy luận
     11 📝 Word Problem        — chuyển tình huống thành mô hình
     12 🏆 Non-routine         — bài toán không có công thức rõ ràng

   Mức độ: HSG cấp trường / cấp huyện Việt Nam (không bê nguyên đề olympic quốc tế).
   Lớp 2: số trong phạm vi 1000, bảng nhân chia 2–9. Lớp 3: mở rộng tới 100 000,
   nhân/chia nâng cao. Mọi câu có hình đều lấy ĐÁP ÁN TỪ CHÍNH DỮ LIỆU vẽ ra hình
   nên hình và lời giải không bao giờ lệch nhau.
   ========================================================================== */
'use strict';

import fs from 'fs';
import path from 'path';
import { seqSVG, gridFigSVG, triFanSVG, shapeMixSVG, pictoSVG, tableSVG } from './hinh-art.mjs';
import { barModelSVG, balanceSVG } from './nc2-art.mjs';
import {
  stripSVG, numLineSVG, machineSVG, barChartSVG, comboSVG, oddOneSVG,
  diceSVG, colStacksSVG, numGridSVG, placeValueSVG, arrowChainSVG,
} from './tt-art.mjs';

/* ── RNG tất định (mulberry32): chạy lại luôn ra kết quả y hệt ────────────── */
function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ── trộn đáp án theo seed cố định ──────────────────────────────────────── */
let ansSeed = 7;
function mk(correct, distractors) {
  const seen = new Set([String(correct)]);
  const ds = [];
  const push = (d) => {
    const s = String(d);
    if (!seen.has(s) && s !== 'undefined' && s !== 'NaN') { seen.add(s); ds.push(s); }
  };
  for (const d of distractors) { if (ds.length < 3) push(d); }
  // lưới an toàn: nếu đáp án là số, tự sinh thêm phương án nhiễu gần đúng
  const num = Number(correct);
  if (ds.length < 3 && String(correct).trim() !== '' && Number.isFinite(num) && String(num) === String(correct).trim()) {
    for (const delta of [1, -1, 2, -2, 10, -10, 3, -3, 5, -5, 20, -20]) {
      if (ds.length >= 3) break;
      if (num + delta >= 0) push(num + delta);
    }
  }
  if (ds.length < 3) throw new Error('Thiếu phương án nhiễu cho: ' + correct + ' | ' + JSON.stringify(distractors));
  const pos = ansSeed % 4;
  ansSeed = (ansSeed * 7 + 5) % 101;
  const arr = ds.slice();
  arr.splice(pos, 0, String(correct));
  return { opts: arr, ans: 'ABCD'[pos] };
}

const uniq = (arr) => Array.from(new Set(arr));

/* ══════════════════════════════════════════════════════════════════════════
   Định nghĩa 12 dạng. Mỗi hàm gen(ctx) trả về đúng 20 câu.
   ctx = { g (2|3), save(name, svg)→path, R() số ngẫu nhiên, ri(min,max) }
   ══════════════════════════════════════════════════════════════════════════ */

const DANGS = [];
const dang = (key, title, gen) => DANGS.push({ key, title, gen });

/* ─────────────────────── DẠNG 1 · NUMBER SENSE 🔢 ─────────────────────────── */
dang('numbersense', 'Dạng 1 · Cảm nhận số (Number Sense)', (ctx) => {
  const { g, save, ri } = ctx, out = [];
  // 1) khối trăm-chục-đơn vị → đọc số (hình)
  for (let i = 0; i < 4; i++) {
    const h = ri(1, 5), t = ri(1, 8), o = ri(1, 9), v = h * 100 + t * 10 + o;
    out.push({ img: save(`ns-pv${i}`, placeValueSVG(h, t, o)),
      text: 'Các khối trong hình biểu diễn số nào? (mỗi tấm = 1 trăm, mỗi thanh = 1 chục, mỗi ô nhỏ = 1 đơn vị)',
      ...mk(v, [h * 100 + o * 10 + t, (h + 1) * 100 + t * 10 + o, h * 100 + t * 10 + (o + 1 > 9 ? o - 1 : o + 1)]),
      why: `Có ${h} trăm, ${t} chục và ${o} đơn vị nên số đó là ${v}.` });
  }
  // 2) tia số (hình)
  for (let i = 0; i < 4; i++) {
    const step = [2, 5, 10, 100][i], start = i < 2 ? 0 : (g === 3 ? ri(1, 5) * (step === 100 ? 100 : 100) : 0);
    const base = step * ri(2, 6);
    const q = base;
    out.push({ img: save(`ns-nl${i}`, numLineSVG(0, step * (Math.floor(q / step) + 3), step, { q })),
      text: 'Trên tia số, vạch có dấu <b>?</b> ứng với số nào?',
      ...mk(q, [q + step, q - step, q + 2 * step]),
      why: `Các vạch cách đều nhau ${step} đơn vị nên vạch có dấu ? là số ${q}.` });
  }
  // 3) so sánh — số lớn nhất / bé nhất (chữ)
  for (let i = 0; i < 4; i++) {
    const hi = g === 3 ? 90000 : 900, lo = g === 3 ? 10000 : 100;
    const nums = uniq([ri(lo, hi), ri(lo, hi), ri(lo, hi), ri(lo, hi)]);
    while (nums.length < 4) nums.push(ri(lo, hi));
    const askMax = i % 2 === 0, best = askMax ? Math.max(...nums) : Math.min(...nums);
    out.push({ text: `Trong các số ${nums.join(' ; ')}, số <b>${askMax ? 'lớn nhất' : 'bé nhất'}</b> là:`,
      ...mk(best, nums.filter((n) => n !== best)),
      why: `So sánh bốn số, số ${askMax ? 'lớn nhất' : 'bé nhất'} là ${best}.` });
  }
  // 4) cấu tạo số (chữ)
  for (let i = 0; i < 4; i++) {
    if (g === 3) {
      const ng = ri(1, 9), tr = ri(0, 9), ch = ri(0, 9), dv = ri(0, 9), v = ng * 1000 + tr * 100 + ch * 10 + dv;
      out.push({ text: `Số gồm ${ng} nghìn, ${tr} trăm, ${ch} chục và ${dv} đơn vị được viết là:`,
        ...mk(v, [ng * 1000 + ch * 100 + tr * 10 + dv, v + 1000, v - 100 >= 0 ? v - 100 : v + 200]),
        why: `${ng} nghìn ${tr} trăm ${ch} chục ${dv} đơn vị viết là ${v}.` });
    } else {
      const h = ri(1, 9), t = ri(0, 9), o = ri(0, 9), v = h * 100 + t * 10 + o;
      out.push({ text: `Số gồm ${h} trăm, ${t} chục và ${o} đơn vị được viết là:`,
        ...mk(v, [h * 100 + o * 10 + t, v + 100, h * 10 + t]),
        why: `${h} trăm ${t} chục ${o} đơn vị viết là ${v}.` });
    }
  }
  // 5) lập số lớn nhất / bé nhất từ các chữ số (chữ)
  for (let i = 0; i < 4; i++) {
    const ds = uniq([ri(1, 9), ri(1, 9), ri(0, 9)]);
    while (ds.length < 3) ds.push(ri(1, 9));
    const asc = ds.slice().sort((a, b) => a - b), desc = ds.slice().sort((a, b) => b - a);
    const askMax = i % 2 === 0;
    const big = desc[0] * 100 + desc[1] * 10 + desc[2];
    const nzTweak = asc.slice(); if (nzTweak[0] === 0) { nzTweak[0] = nzTweak[1]; nzTweak[1] = 0; }
    const small = nzTweak[0] * 100 + nzTweak[1] * 10 + nzTweak[2];
    const val = askMax ? big : small;
    out.push({ text: `Từ ba chữ số ${ds.join(', ')}, hãy lập số có ba chữ số (các chữ số khác nhau) <b>${askMax ? 'lớn nhất' : 'bé nhất'}</b>. Số đó là:`,
      ...mk(val, [askMax ? small : big, val + (askMax ? -9 : 9), desc[0] * 100 + desc[2] * 10 + desc[1]]),
      why: askMax
        ? `Xếp các chữ số từ lớn đến bé: ${desc.join(' > ')} → số lớn nhất là ${big}.`
        : `Chữ số hàng trăm phải khác 0 và nhỏ nhất có thể; số bé nhất là ${small}.` });
  }
  return out;
});

/* ─────────────────────── DẠNG 2 · PATTERN & SEQUENCE 🧩 ────────────────────── */
dang('pattern', 'Dạng 2 · Tìm quy luật (Pattern & Sequence)', (ctx) => {
  const { g, save, ri } = ctx, out = [];
  const EMO = ['🔴', '🔵', '🟡', '🟢', '⭐', '❤️', '🔺', '⬛'];
  // 1) quy luật hình lặp (hình + đáp án emoji)
  for (let i = 0; i < 5; i++) {
    const period = 2 + (i % 3); // 2..4
    const pat = [];
    const used = [];
    for (let k = 0; k < period; k++) used.push(EMO[(i * 3 + k) % EMO.length]);
    for (let k = 0; k < 6; k++) pat.push(used[k % period]);
    const answer = pat[6 % period];
    const cells = pat.slice(0, 6).concat(['?']);
    const distract = EMO.filter((e) => e !== answer).slice(0, 3);
    out.push({ img: save(`pt-emo${i}`, stripSVG(cells)),
      text: 'Hình nào thích hợp điền vào ô có dấu <b>?</b> để tiếp tục quy luật?',
      ...mk(answer, distract),
      why: `Dãy lặp lại theo nhóm ${used.join(' ')} (chu kì ${period}). Ô thứ 7 lặp lại ${answer}.` });
  }
  // 2) dãy số cộng đều (hình)
  for (let i = 0; i < 5; i++) {
    const d = [2, 3, 4, 5, g === 3 ? 25 : 10][i], start = ri(1, 6) * (g === 3 ? 3 : 1);
    const seq = [start, start + d, start + 2 * d, start + 3 * d, start + 4 * d];
    const qi = 4; const answer = seq[qi];
    const cells = seq.map((v, k) => (k === qi ? '?' : v));
    out.push({ img: save(`pt-add${i}`, stripSVG(cells)),
      text: 'Số nào thích hợp điền vào ô có dấu <b>?</b>?',
      ...mk(answer, [answer + d, answer - d, answer + 1]),
      why: `Mỗi số hơn số liền trước ${d} đơn vị. Số cần tìm là ${seq[qi - 1]} + ${d} = ${answer}.` });
  }
  // 3) dãy số tăng dần khoảng cách (hình)
  for (let i = 0; i < 5; i++) {
    const start = ri(1, 5), d0 = ri(1, 3);
    const seq = [start];
    for (let k = 1; k < 5; k++) seq.push(seq[k - 1] + d0 + (k - 1));
    const answer = seq[4];
    const cells = seq.map((v, k) => (k === 4 ? '?' : v));
    out.push({ img: save(`pt-grow${i}`, stripSVG(cells)),
      text: 'Quan sát khoảng cách giữa các số rồi tìm số điền vào ô <b>?</b>.',
      ...mk(answer, [answer + 1, answer - 1, seq[3] + (d0 + 2)]),
      why: `Khoảng cách tăng dần ${d0}, ${d0 + 1}, ${d0 + 2}, ${d0 + 3}. Số cuối là ${seq[3]} + ${d0 + 3} = ${answer}.` });
  }
  // 4) dãy nhân đôi / theo bội (hình)
  for (let i = 0; i < 5; i++) {
    const start = [1, 2, 3, 1, 2][i], mul = 2;
    const seq = [start, start * 2, start * 4, start * 8, start * 16];
    const answer = seq[3];
    const cells = seq.map((v, k) => (k === 3 ? '?' : v));
    out.push({ img: save(`pt-mul${i}`, stripSVG(cells)),
      text: 'Mỗi số được tạo ra từ số liền trước theo một quy luật. Tìm số ở ô <b>?</b>.',
      ...mk(answer, [answer + 2, answer - 2, seq[2] + seq[1]]),
      why: `Mỗi số gấp đôi số liền trước. Số cần tìm là ${seq[2]} × 2 = ${answer}.` });
  }
  return out;
});

/* ─────────────────────── DẠNG 3 · MISSING NUMBER ❓ ───────────────────────── */
dang('missing', 'Dạng 3 · Số còn thiếu (Missing Number)', (ctx) => {
  const { g, save, ri } = ctx, out = [];
  // 1) chuỗi mũi tên cộng đều (hình)
  for (let i = 0; i < 5; i++) {
    const d = [3, 4, 6, 5, g === 3 ? 15 : 7][i], start = ri(2, 9) * (g === 3 ? 2 : 1);
    const seq = [start, start + d, start + 2 * d, start + 3 * d];
    const cells = [seq[0], '?', seq[2], seq[3]];
    const answer = seq[1];
    out.push({ img: save(`mi-arr${i}`, arrowChainSVG(cells, `+${d}`)),
      text: 'Tìm số còn thiếu ở ô <b>?</b> trong dãy.',
      ...mk(answer, [answer + d, answer - d, answer + 1]),
      why: `Mỗi mũi tên là + ${d}. Số cần tìm là ${seq[0]} + ${d} = ${answer}.` });
  }
  // 2) phương án cộng/trừ có ô trống (chữ)
  for (let i = 0; i < 5; i++) {
    const a = ri(15, g === 3 ? 400 : 60), b = ri(15, g === 3 ? 400 : 60), c = a + b;
    const findFirst = i % 2 === 0;
    out.push({ text: findFirst ? `Tìm số thích hợp: <b>? + ${b} = ${c}</b>` : `Tìm số thích hợp: <b>${a} + ? = ${c}</b>`,
      ...mk(findFirst ? a : b, [c, findFirst ? a + 10 : b + 10, Math.abs((findFirst ? a : b) - 9)]),
      why: findFirst ? `Số cần tìm = ${c} − ${b} = ${a}.` : `Số cần tìm = ${c} − ${a} = ${b}.` });
  }
  // 3) ô trống trong dãy đếm cách quãng (hình)
  for (let i = 0; i < 5; i++) {
    const d = [2, 5, 10, 3, 4][i], start = ri(1, 5) * d;
    const seq = [start, start + d, start + 2 * d, start + 3 * d, start + 4 * d];
    const qi = 2; const answer = seq[qi];
    const cells = seq.map((v, k) => (k === qi ? '?' : v));
    out.push({ img: save(`mi-seq${i}`, seqSVG(cells, { note: `Đếm thêm ${d} mỗi bước` })),
      text: 'Điền số còn thiếu vào ô <b>?</b>.',
      ...mk(answer, [answer + d, answer - d, answer + 2]),
      why: `Dãy đếm thêm ${d}: số ở ô trống là ${seq[qi - 1]} + ${d} = ${answer}.` });
  }
  // 4) tìm thừa số / số bị chia còn thiếu (chữ)
  for (let i = 0; i < 5; i++) {
    const b = ri(2, 9), q = ri(2, 9), c = b * q;
    const kind = i % 3;
    if (kind === 0) out.push({ text: `Tìm số thích hợp: <b>? × ${b} = ${c}</b>`, ...mk(q, [c, q + 1, b]), why: `Số cần tìm = ${c} : ${b} = ${q}.` });
    else if (kind === 1) out.push({ text: `Tìm số thích hợp: <b>${b} × ? = ${c}</b>`, ...mk(q, [c, q + 2, Math.max(1, q - 1)]), why: `Số cần tìm = ${c} : ${b} = ${q}.` });
    else out.push({ text: `Tìm số thích hợp: <b>? : ${b} = ${q}</b>`, ...mk(c, [q, b, c + b]), why: `Số bị chia = ${q} × ${b} = ${c}.` });
  }
  return out;
});

/* ─────────────────────── DẠNG 4 · LOGIC & DEDUCTION ⚖️ ─────────────────────── */
dang('logic', 'Dạng 4 · Suy luận (Logic & Deduction)', (ctx) => {
  const { g, save, ri } = ctx, out = [];
  const FRUIT = [['🍎', 'quả táo'], ['🍊', 'quả cam'], ['🍐', 'quả lê'], ['🍋', 'quả chanh']];
  // 1) cân thăng bằng — tìm khối lượng 1 vật (hình)
  for (let i = 0; i < 6; i++) {
    const n = [2, 3, 2, 3, 4, 3][i], each = ri(2, g === 3 ? 9 : 6);
    const total = n * each;
    const [emo, ten] = FRUIT[i % 4];
    // chia total thành các quả cân đẹp
    const weights = [];
    let rem = total; const parts = Math.min(3, Math.max(1, Math.round(total / 5)));
    for (let k = 0; k < parts - 1; k++) { const w = Math.max(1, Math.round(rem / (parts - k))); weights.push(w); rem -= w; }
    weights.push(rem);
    out.push({ img: save(`lg-bal${i}`, balanceSVG({ emoji: emo, n, cap: `${n} ${ten} giống nhau` }, weights)),
      text: `Cân thăng bằng. Biết ${n} ${ten} nặng bằng nhau. Hỏi <b>một ${ten}</b> nặng bao nhiêu ki-lô-gam?`,
      ...mk(`${each} kg`, [`${total} kg`, `${each + 1} kg`, `${each - 1} kg`, `${each + 2} kg`, `${n} kg`]),
      why: `Tổng các quả cân là ${weights.join(' + ')} = ${total} kg cho ${n} ${ten}. Một ${ten} nặng ${total} : ${n} = ${each} kg.` });
  }
  // 2) suy luận thứ tự cao/thấp, nặng/nhẹ (chữ)
  const names = ['An', 'Bình', 'Cường', 'Dung', 'Hoa', 'Khôi', 'Lan', 'Minh'];
  for (let i = 0; i < 4; i++) {
    const a = names[i], b = names[i + 1], c = names[i + 2];
    const askTall = i % 2 === 0;
    out.push({ text: `${a} cao hơn ${b}, ${b} cao hơn ${c}. Hỏi bạn nào <b>${askTall ? 'cao nhất' : 'thấp nhất'}</b>?`,
      ...mk(askTall ? a : c, [askTall ? c : a, b, 'Không xác định được']),
      why: `Xếp theo chiều cao: ${a} > ${b} > ${c}. Vậy ${askTall ? a + ' cao nhất' : c + ' thấp nhất'}.` });
  }
  // 3) suy luận vị trí hàng (chữ)
  for (let i = 0; i < 4; i++) {
    const a = names[i], b = names[i + 1], c = names[i + 2];
    out.push({ text: `Ba bạn ${a}, ${b}, ${c} xếp thành một hàng. ${a} đứng trước ${b}, ${c} đứng sau ${b}. Hỏi bạn nào đứng <b>giữa</b>?`,
      ...mk(b, [a, c, 'Không xác định được']),
      why: `Thứ tự hàng là ${a} – ${b} – ${c}, nên ${b} đứng giữa.` });
  }
  // 4) suy luận "ai nuôi con gì" đơn giản (chữ)
  for (let i = 0; i < 4; i++) {
    const [x, y, z] = [names[i], names[(i + 2) % 8], names[(i + 4) % 8]];
    out.push({ text: `${x}, ${y}, ${z} mỗi bạn nuôi một con vật khác nhau: chó, mèo, cá. ${x} không nuôi chó cũng không nuôi mèo. ${y} nuôi mèo. Hỏi ${x} nuôi con gì?`,
      ...mk('Cá', ['Chó', 'Mèo', 'Không biết']),
      why: `${x} không nuôi chó, không nuôi mèo nên ${x} nuôi cá. (${y} nuôi mèo, còn ${z} nuôi chó.)` });
  }
  // 5) so sánh giá bắc cầu (chữ)
  for (let i = 0; i < 2; i++) {
    const A = ['Bút', 'Vở'][i], B = ['Thước', 'Tẩy'][i], C = ['Kẹo', 'Bánh'][i];
    out.push({ text: `${A} đắt hơn ${B}, ${B} đắt hơn ${C}. Hỏi trong ba thứ, thứ nào <b>rẻ nhất</b>?`,
      ...mk(C, [A, B, 'Không xác định được']),
      why: `Xếp theo giá: ${A} > ${B} > ${C}. Vậy ${C} rẻ nhất.` });
  }
  return out;
});

/* ─────────────────────── DẠNG 5 · MENTAL MATH ➕ ──────────────────────────── */
dang('mental', 'Dạng 5 · Tính nhanh thông minh (Mental Math)', (ctx) => {
  const { g, save, ri } = ctx, out = [];
  // 1) ghép cho tròn chục (hình chuỗi tách số)
  for (let i = 0; i < 4; i++) {
    const a = ri(11, 19), b = ri(21, 29), cpl = 10 - (a % 10), d = 10 - ((a + b) % 10 || 10);
    const c = ri(1, 9), extra = cpl; // build a + c + b + (10-c%..)
    const p1 = a, p2 = 10 - (a % 10), p3 = ri(21, 39);
    const nums = [a, p2, p3];
    const sum = nums.reduce((s, n) => s + n, 0);
    out.push({ img: save(`me-round${i}`, arrowChainSVG([a, a + p2, sum], '', { rules: [`+${p2}`, `+${p3}`] })),
      text: `Tính nhanh: <b>${nums.join(' + ')}</b>`,
      ...mk(sum, [sum + 10, sum - 10, sum + 1]),
      why: `Ghép ${a} + ${p2} = ${a + p2} (tròn chục) rồi cộng ${p3}: ${a + p2} + ${p3} = ${sum}.` });
  }
  // 2) tính nhanh nhóm 4 số (chữ)
  for (let i = 0; i < 4; i++) {
    const x = ri(11, 28), y = ri(2, 9), z = ri(31, 48), w = 10 - (x % 10) + Math.floor(y / 10) * 0;
    const a = x, b = 10 - (a % 10 || 10) || 10, c = z, d = 10 - (c % 10 || 10) || 10;
    const nums = [a, b, c, d];
    const sum = nums.reduce((s, n) => s + n, 0);
    out.push({ text: `Tính nhanh bằng cách ghép cho tròn chục: <b>${nums.join(' + ')}</b>`,
      ...mk(sum, [sum + 10, sum - 1, sum + 9]),
      why: `(${a} + ${b}) + (${c} + ${d}) = ${a + b} + ${c + d} = ${sum}.` });
  }
  // 3) mẹo nhân (chữ)
  const mulTricks = [
    ['25 × 4', 100, '25 × 4 = 100 (một phần tư của 400).'],
    ['5 × 8', 40, '5 × 8 = 40. Mẹo: 5 × số chẵn = (số chẵn : 2) × 10 = 4 × 10 = 40.'],
    ['9 × 6', 54, '9 × 6 = 10 × 6 − 6 = 60 − 6 = 54.'],
    ['9 × 8', 72, '9 × 8 = 10 × 8 − 8 = 80 − 8 = 72.'],
    ['50 × 6', 300, '50 × 6 = 5 × 6 × 10 = 30 × 10 = 300.'],
    ['2 × 49', 98, '2 × 49 = 2 × 50 − 2 = 100 − 2 = 98.'],
  ];
  for (let i = 0; i < 6; i++) {
    const [expr, val, why] = mulTricks[i];
    out.push({ text: `Tính nhanh: <b>${expr}</b>`, ...mk(val, [val + 10, val - 10, val + 2]), why });
  }
  // 4) cộng/trừ bù trừ với số gần tròn trăm (chữ)
  for (let i = 0; i < 4; i++) {
    const base = [99, 98, 199, g === 3 ? 999 : 98][i], add = ri(23, 68);
    const round = base + 1 >= 100 ? Math.round((base + 1) / 100) * 100 : base + 1;
    const sum = base + add;
    out.push({ text: `Tính nhanh: <b>${base} + ${add}</b>`,
      ...mk(sum, [sum + 10, sum - 1, base + add + 1]),
      why: `Xem ${base} ≈ ${base + 1}: (${base + 1} + ${add}) − 1 = ${base + 1 + add} − 1 = ${sum}.` });
  }
  // 5) so sánh nhanh không cần tính hết (chữ)
  for (let i = 0; i < 2; i++) {
    const a1 = ri(20, 50), b1 = ri(20, 50), k = ri(2, 9);
    const left = `${a1} + ${b1}`, right = `${a1} + ${b1 + k}`;
    out.push({ text: `Không cần tính kết quả, hãy so sánh: <b>${left}</b> ... <b>${right}</b>. Dấu thích hợp là:`,
      ...mk('<', ['>', '=', 'Không so sánh được']),
      why: `Hai tổng cùng có ${a1}, nhưng ${b1 + k} > ${b1} nên ${left} < ${right}.` });
  }
  return out;
});

/* ─────────────────────── DẠNG 6 · TRANSFORMATION 🔄 ───────────────────────── */
dang('transform', 'Dạng 6 · Máy biến đổi (Transformation)', (ctx) => {
  const { g, save, ri } = ctx, out = [];
  const rules = [
    (x, k) => x + k, (x, k) => x + k, (x, k) => x * 2, (x, k) => x * k,
  ];
  // 1) máy +k (hình)
  for (let i = 0; i < 5; i++) {
    const k = [3, 4, 5, 6, g === 3 ? 12 : 7][i];
    const ins = [2, 5, 8].map((x) => x + i);
    const ex = ins.map((x) => [x, x + k]);
    const query = 10 + i, answer = query + k;
    out.push({ img: save(`tf-add${i}`, machineSVG(ex, query, { title: 'Máy cộng bí ẩn' })),
      text: 'Quan sát máy biến đổi số. Nếu đưa vào số cuối cùng thì máy cho ra số nào?',
      ...mk(answer, [answer + 1, answer - k, query]),
      why: `Máy luôn cộng thêm ${k} (${ins[0]} → ${ins[0] + k}, ...). Vậy ${query} → ${query} + ${k} = ${answer}.` });
  }
  // 2) máy ×2 / ×k (hình)
  for (let i = 0; i < 5; i++) {
    const k = [2, 2, 3, 3, g === 3 ? 4 : 2][i];
    const ins = [2, 3, 4].map((x) => x + i);
    const ex = ins.map((x) => [x, x * k]);
    const query = 6 + i, answer = query * k;
    out.push({ img: save(`tf-mul${i}`, machineSVG(ex, query, { title: 'Máy nhân bí ẩn' })),
      text: 'Máy biến đổi mỗi số vào thành số ra. Số cuối cùng cho ra kết quả nào?',
      ...mk(answer, [answer + k, query + k, answer - 1]),
      why: `Mỗi số ra gấp ${k} lần số vào (${ins[0]} → ${ins[0] * k}, ...). Vậy ${query} → ${query} × ${k} = ${answer}.` });
  }
  // 3) máy hai bước ×2 rồi +1, hoặc +k rồi ×2 (hình)
  for (let i = 0; i < 5; i++) {
    const k = [1, 2, 3, 1, 2][i];
    const fn = (x) => x * 2 + k;
    const ins = [1, 2, 3].map((x) => x + i);
    const ex = ins.map((x) => [x, fn(x)]);
    const query = 5 + i, answer = fn(query);
    out.push({ img: save(`tf-two${i}`, machineSVG(ex, query, { title: 'Máy hai bước' })),
      text: 'Tìm quy luật của máy rồi cho biết số ra ứng với số vào cuối cùng.',
      ...mk(answer, [answer + 2, query * 2, answer - k]),
      why: `Máy làm: nhân 2 rồi cộng ${k} (${ins[0]} → ${fn(ins[0])}, ...). Vậy ${query} → ${query} × 2 + ${k} = ${answer}.` });
  }
  // 4) tìm số VÀO khi biết số RA (suy ngược) (hình)
  for (let i = 0; i < 5; i++) {
    const k = [4, 5, 6, 3, g === 3 ? 10 : 8][i];
    const ins = [2, 4, 6].map((x) => x + i);
    const ex = ins.map((x) => [x, x + k]);
    const outVal = 20 + i, answer = outVal - k;
    // hiển thị máy +k, dòng cuối biết SỐ RA, hỏi ngược số vào
    out.push({ img: save(`tf-rev${i}`, machineSVG(ex, ['?', outVal], { title: 'Máy cộng bí ẩn' })),
      text: `Máy hoạt động theo quy luật như các ví dụ. Muốn máy cho ra số <b>${outVal}</b> thì phải đưa vào số nào?`,
      ...mk(answer, [outVal, answer + k, answer - 1]),
      why: `Máy cộng thêm ${k}. Để ra ${outVal} thì số vào là ${outVal} − ${k} = ${answer}.` });
  }
  return out;
});

/* ─────────────────────── DẠNG 7 · SPATIAL / VISUAL 📐 ─────────────────────── */
dang('spatial', 'Dạng 7 · Tư duy không gian (Spatial / Visual)', (ctx) => {
  const { g, save, ri } = ctx, out = [];
  // 1) đếm ô vuông nhỏ trong lưới (hình)
  for (let i = 0; i < 5; i++) {
    const c = ri(3, 5), r = ri(2, 4), n = c * r;
    out.push({ img: save(`sp-grid${i}`, gridFigSVG(c, r)),
      text: 'Hình chữ nhật lớn được chia thành các ô vuông nhỏ bằng nhau. Có tất cả bao nhiêu <b>ô vuông nhỏ</b>?',
      ...mk(n, [n + c, n - r, c + r]),
      why: `Có ${r} hàng, mỗi hàng ${c} ô nên có ${c} × ${r} = ${n} ô vuông nhỏ.` });
  }
  // 2) đếm số khối lập phương xếp chồng (hình)
  for (let i = 0; i < 5; i++) {
    const hs = [ri(1, 4), ri(1, 4), ri(1, 4), ri(1, 3)];
    const n = hs.reduce((s, h) => s + h, 0);
    out.push({ img: save(`sp-cube${i}`, colStacksSVG(hs)),
      text: 'Các khối lập phương giống nhau được xếp thành những cột như hình. Có tất cả bao nhiêu <b>khối</b>?',
      ...mk(n, [n + 1, n - 1, Math.max(...hs) * hs.length]),
      why: `Đếm theo từng cột: ${hs.join(' + ')} = ${n} khối.` });
  }
  // 3) đếm hình tam giác trong "quạt" tam giác (hình)
  for (let i = 0; i < 5; i++) {
    const k = ri(2, 4), total = k * (k + 1) / 2;
    out.push({ img: save(`sp-tri${i}`, triFanSVG(k)),
      text: 'Đếm xem trong hình có tất cả bao nhiêu <b>hình tam giác</b> (kể cả tam giác lớn ghép từ nhiều tam giác nhỏ).',
      ...mk(total, [k, total + 1, total - 1]),
      why: `Có ${k} tam giác nhỏ và các tam giác lớn ghép lại; tổng cộng ${k}×(${k}+1):2 = ${total} tam giác.` });
  }
  // 4) đếm một loại hình trong hình hỗn hợp (hình)
  const KINDS = [['tg', 'tam giác'], ['vuong', 'hình vuông'], ['tron', 'hình tròn'], ['cn', 'hình chữ nhật'], ['tg', 'tam giác']];
  for (let i = 0; i < 5; i++) {
    const [k, ten] = KINDS[i];
    const cnt = ri(2, 4);
    const others = ['tron', 'vuong', 'tg', 'cn', 'tugiac'].filter((x) => x !== k);
    const list = [];
    for (let j = 0; j < cnt; j++) list.push(k);
    for (let j = 0; j < 4; j++) list.push(others[j % others.length]);
    // trộn tất định
    for (let j = list.length - 1; j > 0; j--) { const s = (i * 7 + j * 3) % (j + 1); [list[j], list[s]] = [list[s], list[j]]; }
    out.push({ img: save(`sp-mix${i}`, shapeMixSVG(list)),
      text: `Trong hình có tất cả bao nhiêu <b>${ten}</b>?`,
      ...mk(cnt, [cnt + 1, cnt + 2, Math.max(1, cnt - 1)]),
      why: `Đếm riêng các ${ten} trong hình được ${cnt} hình.` });
  }
  return out;
});

/* ─────────────────────── DẠNG 8 · COMBINATORICS 🧮 ────────────────────────── */
dang('combi', 'Dạng 8 · Đếm số cách (Combinatorics)', (ctx) => {
  const { g, save, ri } = ctx, out = [];
  const TOPS = ['👕', '👚', '🧥'], BOTS = ['👖', '🩳', '👗', '👘'];
  // 1) ghép áo với quần (hình bảng)
  for (let i = 0; i < 5; i++) {
    const nT = 2 + (i % 2), nB = 2 + ((i + 1) % 3);
    const tops = TOPS.slice(0, nT), bots = BOTS.slice(0, nB), n = nT * nB;
    out.push({ img: save(`cb-grid${i}`, comboSVG(tops, bots, { title: 'Các cách phối đồ' })),
      text: `Có ${nT} chiếc áo và ${nB} chiếc quần/váy khác nhau. Mỗi bộ gồm 1 áo và 1 quần/váy. Có bao nhiêu <b>bộ khác nhau</b>?`,
      ...mk(n, [nT + nB, n + 1, n - nB]),
      why: `Mỗi áo ghép được với ${nB} quần/váy nên có ${nT} × ${nB} = ${n} bộ.` });
  }
  // 2) số có hai chữ số lập từ tập chữ số (chữ)
  for (let i = 0; i < 5; i++) {
    const ds = uniq([ri(1, 9), ri(1, 9), ri(1, 9)]);
    while (ds.length < 3) ds.push(ri(1, 9));
    const distinct = i % 2 === 0; // chữ số khác nhau?
    const n = distinct ? ds.length * (ds.length - 1) : ds.length * ds.length;
    out.push({ text: `Từ các chữ số ${ds.join(', ')} lập được bao nhiêu số có <b>hai chữ số</b> ${distinct ? 'mà hai chữ số <b>khác nhau</b>' : '(các chữ số có thể lặp lại)'}?`,
      ...mk(n, [n + 1, n - 1, ds.length + ds.length]),
      why: distinct
        ? `Chữ số hàng chục có ${ds.length} cách, hàng đơn vị còn ${ds.length - 1} cách: ${ds.length} × ${ds.length - 1} = ${n} số.`
        : `Mỗi hàng có ${ds.length} cách chọn: ${ds.length} × ${ds.length} = ${n} số.` });
  }
  // 3) bắt tay / trận đấu vòng tròn (chữ)
  for (let i = 0; i < 5; i++) {
    const n = 4 + i, shakes = n * (n - 1) / 2;
    const isMatch = i % 2 === 1;
    out.push({ text: isMatch
      ? `Có ${n} đội bóng thi đấu vòng tròn, hai đội bất kì đấu với nhau đúng <b>một trận</b>. Có tất cả bao nhiêu trận đấu?`
      : `Có ${n} bạn gặp nhau, mỗi hai bạn bắt tay nhau đúng <b>một lần</b>. Có tất cả bao nhiêu cái bắt tay?`,
      ...mk(shakes, [n * (n - 1), shakes + n, n * 2]),
      why: `Mỗi ${isMatch ? 'đội' : 'bạn'} gặp ${n - 1} ${isMatch ? 'đội' : 'bạn'} khác, mỗi cặp tính một lần: (${n} − 1) + (${n} − 2) + … + 1 = ${shakes}.` });
  }
  // 4) chọn đường đi trên lưới đơn giản (chữ)
  for (let i = 0; i < 5; i++) {
    const paths = [2, 3, 3, 4, 6][i];
    const desc = [
      'Từ nhà đến trường có 2 con đường, từ trường đến sân bóng có 1 con đường. Có mấy cách đi từ nhà đến sân bóng qua trường?',
      'Từ A đến B có 3 con đường, từ B đến C có 1 con đường. Có mấy cách đi từ A đến C qua B?',
      'Từ nhà tới hồ có 3 lối, mỗi lối chỉ đi được một mình nó. Nam muốn đi tới hồ rồi về theo <b>lối khác</b> lúc đi thì có mấy cách chọn lối đi?',
      'Có 2 chiếc mũ và 2 đôi giày. Chọn 1 mũ và 1 đôi giày thì có mấy cách?',
      'Có 2 loại bánh và 3 loại nước. Chọn 1 bánh và 1 nước thì có mấy cách?',
    ][i];
    const ans = [2, 3, 6, 4, 6][i];
    out.push({ text: desc, ...mk(ans, [ans + 1, ans - 1, ans + 2]),
      why: [
        '2 con đường đầu × 1 con đường sau = 2 cách.',
        '3 × 1 = 3 cách.',
        'Lối đi chọn 1 trong 3 (3 cách), lối về phải khác nên còn 2 cách: 3 × 2 = 6 cách.',
        '2 mũ × 2 đôi giày = 4 cách.',
        '2 bánh × 3 nước = 6 cách.',
      ][i] });
  }
  return out;
});

/* ─────────────────────── DẠNG 9 · CLASSIFICATION 🧠 ───────────────────────── */
dang('classify', 'Dạng 9 · Phân loại (Classification)', (ctx) => {
  const { g, save, ri } = ctx, out = [];
  // 1) tìm vật khác nhóm (hình)
  const GROUPS = [
    { same: ['🍎', '🍊', '🍐'], odd: '🚗', why: 'Táo, cam, lê là quả; ô tô là phương tiện — khác nhóm.' },
    { same: ['🐶', '🐱', '🐰'], odd: '🌳', why: 'Chó, mèo, thỏ là con vật; cây không phải con vật.' },
    { same: ['🚗', '🚌', '🚲'], odd: '🍌', why: 'Ô tô, xe buýt, xe đạp là phương tiện; chuối là quả.' },
    { same: ['⚽', '🏀', '🎾'], odd: '📗', why: 'Bóng đá, bóng rổ, tennis là quả bóng; quyển sách không phải bóng.' },
    { same: ['🌸', '🌼', '🌷'], odd: '🐟', why: 'Hoa; cá không phải hoa.' },
    { same: ['✏️', '🖊️', '📏'], odd: '🍕', why: 'Bút chì, bút mực, thước là dụng cụ học tập; pizza là món ăn.' },
    { same: ['🍓', '🍇', '🍑'], odd: '🚌', why: 'Dâu, nho, đào là quả; xe buýt là phương tiện.' },
    { same: ['🐝', '🦋', '🐞'], odd: '🐘', why: 'Ong, bướm, bọ rùa là côn trùng nhỏ; voi là thú lớn.' },
  ];
  for (let i = 0; i < 8; i++) {
    const gr = GROUPS[i];
    const items = gr.same.concat([gr.odd]);
    // trộn tất định để vị trí odd thay đổi
    const order = [0, 1, 2, 3];
    for (let j = order.length - 1; j > 0; j--) { const s = (i * 5 + j * 2) % (j + 1); [order[j], order[s]] = [order[s], order[j]]; }
    const shown = order.map((k) => items[k]);
    const oddPos = order.indexOf(3);
    out.push({ img: save(`cl-odd${i}`, oddOneSVG(shown)),
      text: 'Vật nào <b>khác nhóm</b> với ba vật còn lại?',
      ...mk('ABCD'[oddPos], ['ABCD'[(oddPos + 1) % 4], 'ABCD'[(oddPos + 2) % 4], 'ABCD'[(oddPos + 3) % 4]]),
      why: gr.why + ` Vậy chọn ${'ABCD'[oddPos]}.` });
  }
  // 2) số khác nhóm (chữ)
  for (let i = 0; i < 8; i++) {
    const kind = i % 3;
    let nums, odd, why;
    if (kind === 0) { // ba số chẵn + một số lẻ
      nums = [ri(1, 9) * 2, ri(1, 9) * 2, ri(1, 9) * 2, ri(1, 9) * 2 + 1];
      odd = nums[3]; why = 'Ba số kia đều là số chẵn, chỉ có số này là số lẻ.';
    } else if (kind === 1) { // bội của 5 + một số không
      nums = [ri(1, 9) * 5, ri(1, 9) * 5, ri(1, 9) * 5, ri(2, 9) * 5 + ri(1, 4)];
      odd = nums[3]; why = 'Ba số kia đều chia hết cho 5 (tận cùng 0 hoặc 5), số này thì không.';
    } else { // ba số tròn chục + một số không tròn chục
      nums = [ri(1, 9) * 10, ri(1, 9) * 10, ri(1, 9) * 10, ri(1, 9) * 10 + ri(1, 9)];
      odd = nums[3]; why = 'Ba số kia là số tròn chục, số này không tròn chục.';
    }
    nums = uniq(nums); while (nums.length < 4) nums.push(odd + nums.length);
    out.push({ text: `Số nào <b>khác nhóm</b> với ba số còn lại: ${nums.join(' ; ')}?`,
      ...mk(odd, nums.filter((n) => n !== odd)), why });
  }
  // 3) hình khác nhóm (chữ mô tả) (chữ)
  const SHAPEQ = [
    { opts: ['Hình vuông', 'Hình chữ nhật', 'Hình tam giác', 'Hình tròn'], odd: 'Hình tròn', why: 'Ba hình kia có cạnh thẳng và có góc; hình tròn không có cạnh, không có góc.' },
    { opts: ['Hình tam giác', 'Hình vuông', 'Hình tròn', 'Hình chữ nhật'], odd: 'Hình tam giác', why: 'Vuông, tròn, chữ nhật thường được coi cùng nhóm ở đây vì có 4 cạnh (vuông, chữ nhật) — nhưng tam giác chỉ có 3 cạnh, ít cạnh nhất.' },
    { opts: ['Số 12', 'Số 20', 'Số 35', 'Số 40'], odd: 'Số 35', why: '12, 20, 40 là số chẵn; 35 là số lẻ.' },
    { opts: ['Con gà', 'Con vịt', 'Con chim', 'Con cá'], odd: 'Con cá', why: 'Gà, vịt, chim có cánh (là loài chim/gia cầm); cá sống dưới nước, có vây.' },
  ];
  for (let i = 0; i < 4; i++) {
    const q = SHAPEQ[i];
    out.push({ text: 'Vật (hoặc hình) nào <b>khác nhóm</b> với ba lựa chọn còn lại?',
      ...mk(q.odd, q.opts.filter((o) => o !== q.odd)), why: q.why });
  }
  return out;
});

/* ─────────────────────── DẠNG 10 · DATA & GRAPH 📊 ────────────────────────── */
dang('data', 'Dạng 10 · Đọc bảng, biểu đồ (Data & Graph)', (ctx) => {
  const { g, save, ri } = ctx, out = [];
  const NAMES = ['Lan', 'Bình', 'An', 'Hoa', 'Khôi', 'Mai'];
  // 1) biểu đồ cột — đọc trực tiếp / nhiều nhất / ít nhất (hình)
  for (let i = 0; i < 8; i++) {
    const rows = NAMES.slice(0, 4).map((label) => ({ label, n: ri(2, 10) }));
    const kind = i % 4;
    if (kind === 0) {
      const most = rows.reduce((a, b) => (b.n > a.n ? b : a));
      out.push({ img: save(`da-bar${i}`, barChartSVG(rows, { title: 'Số quyển sách đã đọc' })),
        text: 'Bạn nào đọc được <b>nhiều sách nhất</b>?',
        ...mk(most.label, rows.filter((r) => r !== most).map((r) => r.label)),
        why: `Cột cao nhất là của ${most.label} (${most.n} quyển).` });
    } else if (kind === 1) {
      const least = rows.reduce((a, b) => (b.n < a.n ? b : a));
      out.push({ img: save(`da-bar${i}`, barChartSVG(rows, { title: 'Số quyển sách đã đọc' })),
        text: 'Bạn nào đọc được <b>ít sách nhất</b>?',
        ...mk(least.label, rows.filter((r) => r !== least).map((r) => r.label)),
        why: `Cột thấp nhất là của ${least.label} (${least.n} quyển).` });
    } else if (kind === 2) {
      const total = rows.reduce((s, r) => s + r.n, 0);
      out.push({ img: save(`da-bar${i}`, barChartSVG(rows, { title: 'Số quyển sách đã đọc' })),
        text: 'Cả bốn bạn đọc được <b>tất cả</b> bao nhiêu quyển sách?',
        ...mk(total, [total + 2, total - 2, total + 1]),
        why: `Cộng số sách của bốn bạn: ${rows.map((r) => r.n).join(' + ')} = ${total} quyển.` });
    } else {
      const a = rows[0], b = rows[1], diff = Math.abs(a.n - b.n);
      out.push({ img: save(`da-bar${i}`, barChartSVG(rows, { title: 'Số quyển sách đã đọc' })),
        text: `Bạn ${a.label} đọc <b>nhiều hơn</b> (hoặc ít hơn) bạn ${b.label} bao nhiêu quyển?`,
        ...mk(diff, [diff + 1, diff + 2, a.n + b.n]),
        why: `Chênh lệch là ${Math.max(a.n, b.n)} − ${Math.min(a.n, b.n)} = ${diff} quyển.` });
    }
  }
  // 2) biểu đồ tranh (mỗi biểu tượng = k đơn vị) (hình)
  for (let i = 0; i < 6; i++) {
    const per = [1, 2, 5, 2, 3, 10][i];
    const rows = NAMES.slice(0, 3).map((label) => ({ label, n: ri(2, 6) }));
    const target = rows[0], real = target.n * per;
    out.push({ img: save(`da-pic${i}`, pictoSVG(rows, { title: 'Số huy chương của mỗi lớp', unit: '⭐', per, unitName: 'huy chương' })),
      text: `Mỗi ⭐ ứng với ${per} huy chương. Lớp <b>${target.label}</b> có bao nhiêu huy chương?`,
      ...mk(real, [target.n, real + per, real - per]),
      why: `Lớp ${target.label} có ${target.n} ngôi sao, mỗi sao ${per} huy chương: ${target.n} × ${per} = ${real} huy chương.` });
  }
  // 3) đọc bảng số liệu (hình)
  for (let i = 0; i < 6; i++) {
    const days = ['T2', 'T3', 'T4', 'T5'];
    const vals = days.map(() => ri(3, 12));
    const kind = i % 2;
    if (kind === 0) {
      const total = vals.reduce((s, v) => s + v, 0);
      out.push({ img: save(`da-tab${i}`, tableSVG(days, vals, {})),
        text: 'Bảng ghi số cốc nước bán được mỗi ngày. Cả bốn ngày bán được <b>tất cả</b> bao nhiêu cốc?',
        ...mk(total, [total + 3, total - 3, total + 1]),
        why: `Cộng số cốc bốn ngày: ${vals.join(' + ')} = ${total} cốc.` });
    } else {
      const mx = Math.max(...vals), day = days[vals.indexOf(mx)];
      out.push({ img: save(`da-tab${i}`, tableSVG(days, vals, {})),
        text: 'Bảng ghi số cốc nước bán được mỗi ngày. <b>Ngày nào</b> bán được nhiều cốc nhất?',
        ...mk(day, days.filter((d) => d !== day)),
        why: `Số lớn nhất trong bảng là ${mx} (ngày ${day}).` });
    }
  }
  return out;
});

/* ─────────────────────── DẠNG 11 · WORD PROBLEM 📝 ────────────────────────── */
dang('word', 'Dạng 11 · Toán có lời văn (Word Problem)', (ctx) => {
  const { g, save, ri } = ctx, out = [];
  // 1) nhiều hơn — sơ đồ đoạn thẳng (hình)
  for (let i = 0; i < 4; i++) {
    const a = ri(12, g === 3 ? 80 : 40), d = ri(5, 20), b = a + d, tot = a + b;
    out.push({ img: save(`wo-more${i}`, barModelSVG([
      { label: 'Anh', segs: [{ v: a, t: `${a}` }] },
      { label: 'Em', segs: [{ v: a, t: `${a}` }, { v: d, t: `${d}`, k: 'd' }] },
    ], { brace: '? cái', title: 'Số kẹo của hai anh em' })),
      text: `Anh có ${a} cái kẹo, em có nhiều hơn anh ${d} cái. Hỏi <b>cả hai anh em</b> có bao nhiêu cái kẹo?`,
      ...mk(tot, [a + a, b, tot + d]),
      why: `Em có ${a} + ${d} = ${b} cái. Cả hai có ${a} + ${b} = ${tot} cái kẹo.` });
  }
  // 2) gấp một số lần — sơ đồ (hình)
  for (let i = 0; i < 4; i++) {
    const a = ri(4, g === 3 ? 12 : 9), k = ri(2, 4), b = a * k, tot = a + b;
    const segs = []; for (let j = 0; j < k; j++) segs.push({ v: a, t: `${a}`, k: j === 0 ? 'b' : 'd' });
    out.push({ img: save(`wo-times${i}`, barModelSVG([
      { label: 'Gà', segs: [{ v: a, t: `${a}` }] },
      { label: 'Vịt', segs },
    ], { brace: '? con', title: 'Số gà và số vịt' })),
      text: `Nhà bạn Lan có ${a} con gà, số vịt gấp ${k} lần số gà. Hỏi nhà Lan có <b>tất cả</b> bao nhiêu con gà và vịt?`,
      ...mk(tot, [b, a + k, tot + a]),
      why: `Số vịt là ${a} × ${k} = ${b} con. Cả gà và vịt: ${a} + ${b} = ${tot} con.` });
  }
  // 3) hai bước tính (chữ)
  for (let i = 0; i < 4; i++) {
    const box = ri(3, 9), per = ri(2, 9), sold = ri(2, box * per - 1);
    const total = box * per, left = total - sold;
    out.push({ text: `Có ${box} hộp bút, mỗi hộp ${per} chiếc. Người ta đã bán ${sold} chiếc. Hỏi còn lại bao nhiêu chiếc bút?`,
      ...mk(left, [total, left + sold, total + sold]),
      why: `Tổng số bút: ${box} × ${per} = ${total} chiếc. Còn lại: ${total} − ${sold} = ${left} chiếc.` });
  }
  // 4) chia đều (chữ)
  for (let i = 0; i < 4; i++) {
    const each = ri(2, 9), groups = ri(2, 9), total = each * groups;
    out.push({ text: `Có ${total} chiếc bánh chia đều vào ${groups} đĩa. Hỏi <b>mỗi đĩa</b> có bao nhiêu chiếc bánh?`,
      ...mk(each, [each + 1, groups, total - groups]),
      why: `Mỗi đĩa có ${total} : ${groups} = ${each} chiếc bánh.` });
  }
  // 4 câu còn lại: tính ngược đơn giản (chữ)
  for (let i = 0; i < 4; i++) {
    const start = ri(10, 40), add = ri(5, 20), sub = ri(3, 15);
    const end = start + add - sub;
    out.push({ text: `Một bạn nghĩ ra một số, cộng thêm ${add} rồi bớt đi ${sub} thì được ${end}. Hỏi bạn đã nghĩ ra số nào?`,
      ...mk(start, [end, start + add, Math.abs(start - sub)]),
      why: `Tính ngược: ${end} + ${sub} − ${add} = ${end + sub} − ${add} = ${start}.` });
  }
  return out;
});

/* ─────────────────────── DẠNG 12 · NON-ROUTINE 🏆 ─────────────────────────── */
dang('nonroutine', 'Dạng 12 · Bài toán khó (Non-routine)', (ctx) => {
  const { g, save, ri } = ctx, out = [];
  // 1) ma phương 3×3 thiếu một ô (hình)
  const BASE = [[2, 7, 6], [9, 5, 1], [4, 3, 8]]; // magic sum 15
  for (let i = 0; i < 4; i++) {
    const add = ri(0, g === 3 ? 20 : 5), mul = g === 3 ? [1, 1, 2, 1][i] : 1;
    const M = BASE.map((row) => row.map((v) => v * mul + add));
    const sum = M[0].reduce((s, v) => s + v, 0);
    const qr = i % 3, qc = (i * 2 + 1) % 3, answer = M[qr][qc];
    const shown = M.map((row, r) => row.map((v, c) => (r === qr && c === qc ? '?' : v)));
    out.push({ img: save(`nr-magic${i}`, numGridSVG(shown, { title: 'Tổng mỗi hàng, mỗi cột đều bằng nhau' })),
      text: 'Trong bảng, tổng ba số ở mỗi hàng, mỗi cột đều bằng nhau. Tìm số ở ô có dấu <b>?</b>.',
      ...mk(answer, [answer + mul, answer - mul, sum]),
      why: `Tổng mỗi hàng là ${sum}. Lấy ${sum} trừ hai số đã biết cùng hàng/cột để tìm ô còn thiếu: ${answer}.` });
  }
  // 2) tổng số chấm trên xúc xắc (hình)
  for (let i = 0; i < 4; i++) {
    const vals = [ri(1, 6), ri(1, 6), ri(1, 6)];
    const sum = vals.reduce((s, v) => s + v, 0);
    out.push({ img: save(`nr-dice${i}`, diceSVG(vals)),
      text: 'Đếm tổng số chấm trên các mặt xúc xắc.',
      ...mk(sum, [sum + 1, sum - 1, sum + 2]),
      why: `Cộng số chấm: ${vals.join(' + ')} = ${sum} chấm.` });
  }
  // 3) bài toán con gà con chó — đếm chân (chữ)
  for (let i = 0; i < 4; i++) {
    const chickens = ri(2, 6), dogs = ri(2, 6);
    const heads = chickens + dogs, legs = chickens * 2 + dogs * 4;
    out.push({ text: `Trong sân có ${chickens} con gà và ${dogs} con chó. Hỏi tất cả có bao nhiêu <b>cái chân</b>?`,
      ...mk(legs, [heads, legs + 2, chickens * 4 + dogs * 2]),
      why: `Gà 2 chân: ${chickens} × 2 = ${chickens * 2}. Chó 4 chân: ${dogs} × 4 = ${dogs * 4}. Tất cả: ${chickens * 2} + ${dogs * 4} = ${legs} chân.` });
  }
  // 4) trồng cây hai đầu đường (chữ)
  for (let i = 0; i < 4; i++) {
    const gap = [2, 3, 5, 4][i], seg = gap * ri(3, 6), trees = seg / gap + 1;
    out.push({ text: `Người ta trồng cây dọc một đoạn đường dài ${seg} m, hai cây liền nhau cách nhau ${gap} m, trồng cả ở <b>hai đầu</b> đường. Hỏi cần bao nhiêu cây?`,
      ...mk(trees, [trees - 1, trees + 1, seg / gap]),
      why: `Số khoảng cách là ${seg} : ${gap} = ${seg / gap}. Trồng cả hai đầu nên số cây = số khoảng + 1 = ${trees} cây.` });
  }
  // 5) tuổi (chữ) — 4 câu
  for (let i = 0; i < 4; i++) {
    const now = ri(6, 10), diff = ri(20, 30);
    const dad = now + diff;
    const kind = i % 2;
    if (kind === 0) {
      out.push({ text: `Năm nay con ${now} tuổi, bố hơn con ${diff} tuổi. Hỏi <b>bố</b> năm nay bao nhiêu tuổi?`,
        ...mk(dad, [now * 2, diff, dad + 2]),
        why: `Tuổi bố = ${now} + ${diff} = ${dad} tuổi.` });
    } else {
      const after = ri(3, 6);
      out.push({ text: `Năm nay con ${now} tuổi. Hỏi <b>sau ${after} năm nữa</b> con bao nhiêu tuổi?`,
        ...mk(now + after, [now, after, now + after + 1]),
        why: `Sau ${after} năm, tuổi con là ${now} + ${after} = ${now + after} tuổi.` });
    }
  }
  return out;
});

/* ══════════════════════════════ SINH DỮ LIỆU ══════════════════════════════ */
function buildGrade(g) {
  const dir = `web/assets/ttd${g}`;
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
  let assetCount = 0;
  const R = rng(g === 2 ? 20240201 : 30240301);
  const ri = (min, max) => min + Math.floor(R() * (max - min + 1));

  const exams = [];
  let baseId = g === 2 ? 3200 : 3300;
  DANGS.forEach((D, di) => {
    let qi = 0;
    const ctx = {
      g, R, ri,
      save(name, content) {
        fs.writeFileSync(path.join(dir, `d${di + 1}_${name}.svg`), content);
        assetCount++;
        return `assets/ttd${g}/d${di + 1}_${name}.svg`;
      },
    };
    const questions = D.gen(ctx);
    if (questions.length !== 20) throw new Error(`${D.key} (lớp ${g}) sinh ${questions.length} câu, phải là 20`);
    questions.forEach((q, k) => {
      q.sec = D.title;
      q.name = `Câu ${k + 1}`;
      q.pts = 0.5;
      if (new Set(q.opts).size !== 4) throw new Error(`${D.key} lớp ${g} câu ${k + 1}: phương án trùng: ${JSON.stringify(q.opts)}`);
      if (!q.opts.includes(q.opts['ABCD'.indexOf(q.ans)])) throw new Error('ans lỗi');
    });
    exams.push({ id: baseId + di + 1, title: D.title, time: 25, questions });
  });
  return { exams, assetCount, dir };
}

/* ── xuất file JS ─────────────────────────────────────────────────────────── */
const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
function fmtQ(q) {
  const img = q.img ? `, img: '${q.img}'` : '';
  return `    { sec: '${esc(q.sec)}', name: '${esc(q.name)}', pts: ${q.pts},\n`
       + `      text: '${esc(q.text)}'${img},\n`
       + `      opts: o4('${q.opts.map(esc).join("', '")}'), ans: '${q.ans}',\n`
       + `      why: '${esc(q.why)}' },`;
}
function fmtExam(e) {
  return `{\n  id: ${e.id}, title: '${esc(e.title)}', time: ${e.time},\n  questions: [\n${e.questions.map(fmtQ).join('\n')}\n  ],\n},`;
}

function writeGrade(g) {
  const { exams, assetCount } = buildGrade(g);
  const nQ = exams.reduce((t, e) => t + e.questions.length, 0);
  const nImg = exams.reduce((t, e) => t + e.questions.filter((q) => q.img).length, 0);
  const pct = Math.round(nImg / nQ * 100);
  const VAR = `TTD${g}`;
  const HEAD = `// TOÁN TƯ DUY 12 DẠNG — LỚP ${g} · ${exams.length} dạng × 20 câu = ${nQ} câu (${nImg} câu có hình, ${pct}%).
// SINH TỰ ĐỘNG bởi tools/gen-tuduy-tt.mjs — sửa nội dung trong script rồi chạy lại:
//     node tools/gen-tuduy-tt.mjs
//
// 12 dạng tư duy: Number Sense · Pattern & Sequence · Missing Number · Logic &
// Deduction · Mental Math · Transformation · Spatial/Visual · Combinatorics ·
// Classification · Data & Graph · Word Problem · Non-routine. Mức độ HSG cấp
// trường / cấp huyện, bám chương trình lớp ${g}. Hình vẽ bằng code (tools/tt-art.mjs
// + hinh-art.mjs + nc2-art.mjs), đáp án lấy thẳng từ dữ liệu vẽ ra hình.
`;
  const body = `${HEAD}
const ${VAR} = [
${exams.map(fmtExam).join('\n')}
];

// Chèn môn "Toán tư duy 12 dạng" cho lớp ${g}
SUBJECTS.push({
  id: 'ttd${g}', name: 'Tư duy 12 dạng', short: 'Tư duy ${g}', icon: '💡', grade: ${g},
  exams: ${VAR}, ready: true,
  heroTitle: 'Toán tư duy 12 dạng — lớp ${g}',
  heroMeta: '📚 ${exams.length} dạng &nbsp;•&nbsp; ${nQ} câu &nbsp;•&nbsp; ⏱ 25 phút mỗi đề &nbsp;•&nbsp; ${nImg} câu có hình (${pct}%) &nbsp;•&nbsp; lời giải chi tiết',
});
`;
  fs.writeFileSync(`web/data-ttd${g}.js`, body);
  console.log(`web/data-ttd${g}.js: ${exams.length} dạng · ${nQ} câu · ${nImg} câu có hình (${pct}%) · ${assetCount} hình SVG`);
}

writeGrade(2);
writeGrade(3);
