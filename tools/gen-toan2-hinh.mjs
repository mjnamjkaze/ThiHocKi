/* ============================================================================
   gen-toan2-hinh.mjs — sinh bộ đề "TOÁN LỚP 2 QUA HÌNH ẢNH"

   Chạy:  node tools/gen-toan2-hinh.mjs
   Xuất:  web/assets/hinh2/*.svg     (hình vẽ bằng code, không dùng ảnh stock)
          web/data-toan2-hinh.js     (12 đề × 10 câu, thêm môn mới cho lớp 2)

   Vì sao sinh bằng script: mọi câu hỏi có hình đều lấy ĐÁP ÁN TỪ CHÍNH DỮ LIỆU
   vẽ ra hình (số vật trong rổ, số đo trên thước, mệnh giá tờ tiền, giờ trên mặt
   đồng hồ) nên hình và lời giải không bao giờ lệch nhau.

   Tỉ lệ câu có hình được in ra ở cuối — giữ trong khoảng 25–40% tổng số câu.
   Mức độ: chương trình lớp 2 (phạm vi 1000, bảng nhân chia 2–9; riêng × 2 và : 2
   được vượt ra ngoài phạm vi bảng), không đưa dạng olympic quốc tế vào.
   ========================================================================== */
'use strict';

import fs from 'fs';
import path from 'path';
import {
  sceneSVG, shapesRowSVG, shapeMixSVG, gridFigSVG, triFanSVG,
  rulerSVG, moneySVG, pictoSVG, seqSVG, tableSVG,
} from './hinh-art.mjs';
import { clockSVG } from './vio-art.mjs';

const ASSETS = 'web/assets/hinh2';
const HI = 'assets/hinh2/';
fs.rmSync(ASSETS, { recursive: true, force: true });
fs.mkdirSync(ASSETS, { recursive: true });

let assetCount = 0;
function save(name, content) {
  fs.writeFileSync(path.join(ASSETS, name + '.svg'), content);
  assetCount++;
  return HI + name + '.svg';
}

/* ── trộn đáp án theo seed cố định: chạy lại luôn ra kết quả y hệt ────────── */
let seed = 5;
function opts4(correct, distractors) {
  const seen = new Set([String(correct)]);
  const ds = [];
  for (const d of distractors) {
    const s = String(d);
    if (!seen.has(s)) { seen.add(s); ds.push(s); }
    if (ds.length === 3) break;
  }
  if (ds.length < 3) throw new Error('Thiếu phương án nhiễu cho đáp án: ' + correct);
  const pos = seed % 4;
  seed = (seed * 7 + 5) % 101;
  const arr = ds.slice();
  arr.splice(pos, 0, String(correct));
  return { opts: arr, ans: 'ABCD'[pos] };
}
/* 4 phương án là HÌNH (dạng "chọn hình đúng") */
function optsImg(paths, correctIdx) {
  return { optImgs: paths, ans: 'ABCD'[correctIdx] };
}
const Q = (o) => o;
/* viết thường chữ cái đầu, giữ nguyên phần sau (để 'Nhóm A' → 'nhóm A') */
const low = (s) => s.charAt(0).toLowerCase() + s.slice(1);

/* ══════════════════════════════ CÁC DẠNG CÂU CÓ HÌNH ═══════════════════════ */

/* 1. ĐẾM ĐỒ VẬT — gộp hai nhóm nhìn thấy trong hình */
function qGop(sec, name, id, { emoji, a, b, unit, la, lb, cols }) {
  const tong = a + b;
  const img = save(id, sceneSVG([
    { emoji, n: a, label: la, cols }, { op: '+' }, { emoji, n: b, label: lb, cols },
  ]));
  const { opts, ans } = opts4(tong, [tong + 1, tong - 1, a - b > 0 ? a - b : tong + 2, tong + 10]);
  return Q({
    sec, name, pts: 1, img,
    text: `Đếm số ${unit} trong hình. Hỏi cả hai ${low(la)} và ${low(lb)} có tất cả bao nhiêu ${unit}?`,
    opts, ans,
    why: `${la} có ${a} ${unit}, ${lb} có ${b} ${unit}. Tất cả là: ${a} + ${b} = ${tong} (${unit}).`,
  });
}

/* 2. THÊM ĐỒ VẬT — hình cho số ban đầu và số được thêm */
function qThem(sec, name, id, { emoji, a, b, unit, story, la, lb, cols }) {
  const tong = a + b;
  const img = save(id, sceneSVG([
    { emoji, n: a, label: la || 'Ban đầu', cols }, { op: '+' }, { emoji, n: b, label: lb || 'Thêm vào', cols },
  ]));
  const { opts, ans } = opts4(tong, [a - b > 0 ? a - b : tong + 2, tong + 1, tong - 1, tong + 10]);
  return Q({
    sec, name, pts: 1, img,
    text: `${story} Hỏi sau khi thêm thì có tất cả bao nhiêu ${unit}?`,
    opts, ans,
    why: `Ban đầu có ${a} ${unit}, thêm ${b} ${unit} nữa. Tất cả là: ${a} + ${b} = ${tong} (${unit}).`,
  });
}

/* 3. BỚT ĐỒ VẬT — các vật bị lấy đi được gạch chéo ngay trên hình */
function qBot(sec, name, id, { emoji, a, b, unit, story, cols }) {
  const conlai = a - b;
  const cross = [];
  for (let i = a - b; i < a; i++) cross.push(i);
  const img = save(id, sceneSVG([{ emoji, n: a, label: 'Lúc đầu', cols: cols || 5, cross }]));
  const { opts, ans } = opts4(conlai, [a + b, conlai + 1, conlai - 1, b]);
  return Q({
    sec, name, pts: 1, img,
    text: `${story} Số ${unit} bị lấy đi đã được gạch chéo trong hình. Hỏi còn lại bao nhiêu ${unit}?`,
    opts, ans,
    why: `Lúc đầu có ${a} ${unit}, lấy đi ${b} ${unit}. Còn lại: ${a} − ${b} = ${conlai} (${unit}).`,
  });
}

/* 4. SO SÁNH HAI NHÓM */
function qSoSanh(sec, name, id, { ea, eb, a, b, la, lb, unit, hoi, hoiText, whyNhom }) {
  const img = save(id, sceneSVG([{ emoji: ea, n: a, label: la }, { emoji: eb, n: b, label: lb }], { gap: 40 }));
  if (hoi === 'nhom') {
    const correct = a > b ? la : b > a ? lb : 'Hai nhóm bằng nhau';
    const { opts, ans } = opts4(correct, [la, lb, 'Hai nhóm bằng nhau', 'Không so sánh được']);
    return Q({
      sec, name, pts: 1, img,
      text: hoiText || `Nhìn hình dưới đây, nhóm nào có nhiều ${unit} hơn?`,
      opts, ans,
      why: whyNhom || (`${la} có ${a} ${unit}, ${lb} có ${b} ${unit}. `
        + (a === b ? `Vì ${a} = ${b} nên hai nhóm bằng nhau.` : `Vì ${Math.max(a, b)} > ${Math.min(a, b)} nên ${low(correct)} nhiều hơn.`)),
    });
  }
  const d = Math.abs(a - b);
  const nhieu = a > b ? la : lb, it = a > b ? lb : la;
  const { opts, ans } = opts4(`${d} ${unit}`, [`${d + 1} ${unit}`, `${a + b} ${unit}`, `${d - 1} ${unit}`, `${d + 2} ${unit}`]);
  return Q({
    sec, name, pts: 1, img,
    text: `Đếm hai nhóm trong hình. Hỏi ${low(nhieu)} nhiều hơn ${low(it)} bao nhiêu ${unit}?`,
    opts, ans,
    why: `${la} có ${a} ${unit}, ${lb} có ${b} ${unit}. ${Math.max(a, b)} − ${Math.min(a, b)} = ${d}, nên ${low(nhieu)} nhiều hơn ${d} ${unit}.`,
  });
}

/* 5. NHÓM / CHIA ĐỀU — g nhóm, mỗi nhóm p vật */
function qNhom(sec, name, id, { emoji, g, p, unit, ten, hoi, moTa }) {
  const parts = [];
  for (let i = 0; i < g; i++) parts.push({ emoji, n: p, label: `${ten} ${i + 1}`, cols: Math.min(p, 3), size: 30 });
  const img = save(id, sceneSVG(parts, { gap: 16 }));
  const tong = g * p;
  if (hoi === 'moinhom') {
    const { opts, ans } = opts4(`${p} ${unit}`, [`${p + 1} ${unit}`, `${tong} ${unit}`, `${p - 1} ${unit}`, `${g} ${unit}`]);
    return Q({
      sec, name, pts: 1, img,
      text: `Có ${tong} ${unit} được chia đều vào ${g} ${low(ten)} như hình. Hỏi mỗi ${low(ten)} có bao nhiêu ${unit}?`,
      opts, ans,
      why: `Chia đều ${tong} ${unit} vào ${g} ${low(ten)}: ${tong} : ${g} = ${p} (${unit}). Đếm trên hình mỗi ${low(ten)} đúng ${p} ${unit}.`,
    });
  }
  const { opts, ans } = opts4(`${tong} ${unit}`, [`${tong + p} ${unit}`, `${g + p} ${unit}`, `${tong - p} ${unit}`, `${tong + 1} ${unit}`]);
  return Q({
    sec, name, pts: 1, img,
    text: `Trong hình có ${g} ${low(moTa || ten)}, mỗi ${low(ten)} có ${p} ${unit}. Hỏi có tất cả bao nhiêu ${unit}?`,
    opts, ans,
    why: `Mỗi ${low(ten)} ${p} ${unit}, có ${g} ${low(ten)} nên tất cả: ${p} × ${g} = ${tong} (${unit}).`,
  });
}

/* 6. BÀI TOÁN HAI BƯỚC — hình chỉ cho trạng thái ban đầu */
function qHaiBuoc(sec, name, id, { emoji, a, them, bot, unit, story, cols, label }) {
  const img = save(id, sceneSVG([{ emoji, n: a, label: label || 'Lúc đầu', cols: cols || 5 }]));
  const kq = a + them - bot;
  const { opts, ans } = opts4(kq, [a + them + bot, a - them + bot, kq + 1, kq - 1]);
  return Q({
    sec, name, pts: 1, img,
    text: `${story} Hỏi cuối cùng còn bao nhiêu ${unit}?`,
    opts, ans,
    why: `Đếm trên hình lúc đầu có ${a} ${unit}. Sau khi thêm: ${a} + ${them} = ${a + them} (${unit}). Sau khi bớt: ${a + them} − ${bot} = ${kq} (${unit}).`,
  });
}

/* 7. ĐẾM HÌNH HỌC trong một khung nhiều hình */
const TEN_HINH = { vuong: 'hình vuông', cn: 'hình chữ nhật', tg: 'hình tam giác', tron: 'hình tròn', tugiac: 'hình tứ giác', doanthang: 'đoạn thẳng' };
function qDemHinh(sec, name, id, { list, kind, cols }) {
  const img = save(id, shapeMixSVG(list, { cols: cols || 5 }));
  const n = list.filter((k) => k === kind).length;
  const { opts, ans } = opts4(`${n} hình`, [`${n + 1} hình`, `${n - 1} hình`, `${list.length} hình`, `${n + 2} hình`]);
  return Q({
    sec, name, pts: 1, img,
    text: `Trong hình dưới đây có bao nhiêu ${TEN_HINH[kind]}?`,
    opts, ans,
    why: `Đếm lần lượt các ${TEN_HINH[kind]} trong khung, ta được ${n} hình (cả khung có ${list.length} hình các loại).`,
  });
}

/* 8. ĐO ĐỘ DÀI trên thước kẻ */
function qDoDai(sec, name, id, { from, to, kind, vat, ten, label }) {
  const goi = ten || vat.toLowerCase();
  const img = save(id, rulerSVG(from, to, { kind, label }));
  const len = to - from;
  const { opts, ans } = opts4(`${len} cm`, [`${to} cm`, `${len + 1} cm`, `${len - 1} cm`, `${len + 2} cm`]);
  return Q({
    sec, name, pts: 1, img,
    text: `${vat} được đặt sát thước kẻ như hình. Hỏi ${goi} dài bao nhiêu xăng-ti-mét?`,
    opts, ans,
    why: from === 0
      ? `Một đầu đặt đúng vạch 0, đầu kia ở vạch ${to} nên ${goi} dài ${len} cm.`
      : `Đầu bên trái ở vạch ${from}, đầu bên phải ở vạch ${to}. Độ dài là: ${to} − ${from} = ${len} (cm).`,
  });
}

/* 9. TIỀN VIỆT NAM */
const sum = (a) => a.reduce((t, v) => t + v, 0);
function qTien(sec, name, id, { notes, hoi, gia, label, mon }) {
  const tong = sum(notes);
  const coTien = notes.length === 1 ? `Nam có một tờ ${notes[0]} đồng` : `Nam có: ${notes.join(' + ')} = ${tong} (đồng)`;
  const img = save(id, moneySVG(notes, { label: label || 'Số tiền Nam có' }));
  if (hoi === 'conlai') {
    const kq = tong - gia;
    const { opts, ans } = opts4(`${kq} đồng`, [`${tong} đồng`, `${kq + 1000} đồng`, `${gia} đồng`, `${kq - 1000} đồng`]);
    return Q({
      sec, name, pts: 1, img,
      text: `Nam có số tiền như hình. Nam mua ${mon} hết ${gia} đồng. Hỏi Nam còn lại bao nhiêu tiền?`,
      opts, ans,
      why: `${coTien}. Còn lại: ${tong} − ${gia} = ${kq} (đồng).`,
    });
  }
  if (hoi === 'thieu') {
    const kq = gia - tong;
    const { opts, ans } = opts4(`${kq} đồng`, [`${gia + tong} đồng`, `${kq + 1000} đồng`, `${tong} đồng`, `${kq + 2000} đồng`]);
    return Q({
      sec, name, pts: 1, img,
      text: `Nam có số tiền như hình. Nam muốn mua ${mon} giá ${gia} đồng. Hỏi Nam cần thêm bao nhiêu tiền nữa?`,
      opts, ans,
      why: `${coTien}. Cần thêm: ${gia} − ${tong} = ${kq} (đồng).`,
    });
  }
  const { opts, ans } = opts4(`${tong} đồng`, [`${tong + 1000} đồng`, `${tong - 1000} đồng`, `${tong + 2000} đồng`, `${tong + 5000} đồng`]);
  return Q({
    sec, name, pts: 1, img,
    text: 'Trong hình có các tờ tiền dưới đây. Hỏi tất cả là bao nhiêu tiền?',
    opts, ans,
    why: `Cộng mệnh giá các tờ tiền: ${notes.join(' + ')} = ${tong} (đồng).`,
  });
}

/* 10. XEM ĐỒNG HỒ */
const gio = (h, m) => (m === 0 ? `${h} giờ` : `${h} giờ ${m} phút`);
function qDongHo(sec, name, id, { h, m, sau, story }) {
  const img = save(id, clockSVG(h, m));
  if (sau) {
    let t = (h % 12) * 60 + m + sau;
    const hh = Math.floor((t % 720) / 60) || 12, mm = t % 60;
    const { opts, ans } = opts4(gio(hh, mm), [gio(h, m), gio(hh + 1 > 12 ? 1 : hh + 1, mm), gio(hh, (mm + 15) % 60), gio(hh, (mm + 30) % 60)]);
    return Q({
      sec, name, pts: 1, img,
      text: `${story} Đồng hồ đang chỉ như hình. Sau ${sau} phút nữa thì là mấy giờ?`,
      opts, ans,
      why: `Đồng hồ chỉ ${gio(h, m)}. Thêm ${sau} phút nữa được ${gio(hh, mm)}.`,
    });
  }
  const { opts, ans } = opts4(gio(h, m), [gio(h === 12 ? 1 : h + 1, m), gio(h, (m + 5) % 60), gio(h, (m + 30) % 60), gio(h === 1 ? 12 : h - 1, m)]);
  return Q({
    sec, name, pts: 1, img,
    text: 'Đồng hồ trong hình chỉ mấy giờ?',
    opts, ans,
    why: `Kim ngắn (kim giờ) đã qua số ${h}, kim dài (kim phút) chỉ ${m === 0 ? 'đúng số 12 nên được 0 phút' : 'số ' + m / 5 + ' nên được ' + m + ' phút'}. Đồng hồ chỉ ${gio(h, m)}.`,
  });
}

/* 11. BIỂU ĐỒ TRANH */
function qBieuDo(sec, name, id, { rows, unit, per, unitName, title, hoi, ai, rowWord }) {
  const hang = rowWord || 'hàng';
  const img = save(id, pictoSVG(rows, { unit, per, unitName, title }));
  const val = (r) => r.n * per;
  if (hoi === 'nhieunhat') {
    const best = rows.reduce((a, b) => (val(b) > val(a) ? b : a));
    const { opts, ans } = opts4(best.label,
      rows.filter((r) => r !== best).map((r) => r.label).concat([`Cả ${rows.length} ${hang} bằng nhau`]));
    return Q({
      sec, name, pts: 1, img,
      text: `Nhìn biểu đồ tranh dưới đây, ${hang} nào có nhiều ${unitName} nhất?`,
      opts, ans,
      why: rows.map((r) => `${r.label}: ${r.n} ${unit} = ${val(r)} ${unitName}`).join('; ') + `. Nhiều nhất là ${best.label}.`,
    });
  }
  if (hoi === 'mot') {
    const row = rows.find((r) => r.label === ai);
    const v = val(row);
    const { opts, ans } = opts4(`${v} ${unitName}`, [`${row.n} ${unitName}`, `${v + per} ${unitName}`, `${v - per} ${unitName}`, `${v + 1} ${unitName}`]);
    return Q({
      sec, name, pts: 1, img,
      text: `Nhìn biểu đồ tranh dưới đây, ${ai} có bao nhiêu ${unitName}?`,
      opts, ans,
      why: `Hàng ${ai} có ${row.n} ${unit}, mỗi ${unit} ứng với ${per} ${unitName} nên có: ${per} × ${row.n} = ${v} (${unitName}).`,
    });
  }
  if (hoi === 'hieu') {
    const [r1x, r2x] = rows;
    const d = Math.abs(val(r1x) - val(r2x));
    const nhieu = val(r1x) > val(r2x) ? r1x : r2x, it = val(r1x) > val(r2x) ? r2x : r1x;
    const { opts, ans } = opts4(`${d} ${unitName}`, [`${d + per} ${unitName}`, `${val(r1x) + val(r2x)} ${unitName}`, `${Math.abs(r1x.n - r2x.n)} ${unitName}`, `${d + 1} ${unitName}`]);
    return Q({
      sec, name, pts: 1, img,
      text: `Nhìn biểu đồ tranh dưới đây, ${nhieu.label} nhiều hơn ${it.label} bao nhiêu ${unitName}?`,
      opts, ans,
      why: `${nhieu.label}: ${nhieu.n} ${unit} = ${val(nhieu)} ${unitName}; ${it.label}: ${it.n} ${unit} = ${val(it)} ${unitName}. Nhiều hơn: ${val(nhieu)} − ${val(it)} = ${d} (${unitName}).`,
    });
  }
  const tong = rows.reduce((t, r) => t + val(r), 0);
  const { opts, ans } = opts4(`${tong} ${unitName}`, [
    `${tong + per} ${unitName}`, `${rows.reduce((t, r) => t + r.n, 0)} ${unitName}`,
    `${tong - per} ${unitName}`, `${tong + 1} ${unitName}`, `${tong - 1} ${unitName}`, `${tong + 2} ${unitName}`,
  ]);
  return Q({
    sec, name, pts: 1, img,
    text: `Nhìn biểu đồ tranh dưới đây, cả ${rows.length} ${hang} có tất cả bao nhiêu ${unitName}?`,
    opts, ans,
    why: rows.map((r) => `${r.label} ${val(r)}`).join(' + ') + ` = ${tong} (${unitName}).`,
  });
}

/* 12. TÌM SỐ CÒN THIẾU trong dãy ô */
function qDaySo(sec, name, id, { cells, idx, why, note }) {
  const shown = cells.map((v, i) => (i === idx ? '?' : v));
  const img = save(id, seqSVG(shown, { note }));
  const c = cells[idx];
  const { opts, ans } = opts4(c, [c + 1, c - 1, c + 2, c - 2]);
  return Q({ sec, name, pts: 1, img, text: 'Tìm số thích hợp thay cho dấu ? trong dãy ô dưới đây.', opts, ans, why });
}

/* 13. TÌM SỐ TRONG BẢNG */
function qBang(sec, name, id, { head, vals, idx, text, why }) {
  const shown = vals.map((v, i) => (i === idx ? '?' : v));
  const img = save(id, tableSVG(head, shown));
  const c = vals[idx];
  const { opts, ans } = opts4(c, [c + 1, c - 1, c + 2, c + 10]);
  return Q({ sec, name, pts: 1, img, text, opts, ans, why });
}

/* 14. CHỌN HÌNH ĐÚNG — bốn phương án đều là hình */
function qChonHinh(sec, name, id, { emoji, counts, correct, text, why, cols }) {
  const paths = counts.map((n, i) => save(`${id}${'abcd'[i]}`, sceneSVG([{ emoji, n, cols: cols || 4, size: 32 }])));
  const { optImgs, ans } = optsImg(paths, counts.indexOf(correct));
  return Q({ sec, name, pts: 1, img: undefined, text, optImgs, ans, why });
}

/* ══════════════════════════════════ CÁC ĐỀ ═════════════════════════════════ */
const EX = [];
const de = (id, title, questions) => EX.push({ id, title, time: 25, questions });

/* ─────────────────── ĐỀ 1 · Đếm đồ vật – gộp hai nhóm ───────────────────── */
const S1 = 'Đếm đồ vật';
de(1301, 'Đề 1 · Đếm đồ vật — gộp hai nhóm', [
  qGop(S1, 'Câu 1', 'e1q1', { emoji: '🍎', a: 12, b: 5, unit: 'quả táo', la: 'Rổ đỏ', lb: 'Rổ vàng' }),
  Q({
    sec: S1, name: 'Câu 2', pts: 1,
    text: 'Trên cây có 8 con chim đang đậu, có thêm 6 con nữa bay đến. Hỏi trên cây có tất cả bao nhiêu con chim?',
    ...opts4('14 con', ['12 con', '2 con', '15 con']),
    why: 'Trên cây có tất cả: 8 + 6 = 14 (con chim).',
  }),
  qThem(S1, 'Câu 3', 'e1q3', {
    emoji: '🍬', a: 9, b: 7, unit: 'cái kẹo', la: 'Trong hộp', lb: 'Mẹ cho thêm',
    story: 'Trong hộp của Na có một số cái kẹo, mẹ cho thêm Na một số cái nữa như hình.',
  }),
  Q({
    sec: S1, name: 'Câu 4', pts: 1,
    text: 'Lan có 24 cái kẹo, Hùng có 18 cái kẹo. Hỏi cả hai bạn có tất cả bao nhiêu cái kẹo?',
    ...opts4('42 cái', ['32 cái', '6 cái', '43 cái']),
    why: 'Cả hai bạn có: 24 + 18 = 42 (cái kẹo).',
  }),
  qBot(S1, 'Câu 5', 'e1q5', {
    emoji: '🐟', a: 15, b: 4, unit: 'con cá', cols: 5,
    story: 'Trong bể có một đàn cá, bố vớt ra 4 con.',
  }),
  Q({
    sec: S1, name: 'Câu 6', pts: 1,
    text: 'Trong hộp có 30 chiếc bút chì, cô giáo lấy ra 12 chiếc phát cho các bạn. Hỏi trong hộp còn lại bao nhiêu chiếc bút chì?',
    ...opts4('18 chiếc', ['42 chiếc', '22 chiếc', '17 chiếc']),
    why: 'Trong hộp còn lại: 30 − 12 = 18 (chiếc bút chì).',
  }),
  qNhom(S1, 'Câu 7', 'e1q7', { emoji: '📚', g: 3, p: 4, unit: 'quyển sách', ten: 'Chồng', moTa: 'chồng sách', hoi: 'tong' }),
  Q({
    sec: S1, name: 'Câu 8', pts: 1,
    text: 'Tổng <b>5 + 5 + 5 + 5</b> bằng bao nhiêu?',
    ...opts4('20', ['15', '25', '45']),
    why: 'Số 5 được lấy 4 lần nên 5 + 5 + 5 + 5 = 5 × 4 = 20.',
  }),
  Q({
    sec: S1, name: 'Câu 9', pts: 1,
    text: 'Số gồm <b>7 chục và 6 đơn vị</b> là số nào?',
    ...opts4('76', ['67', '706', '13']),
    why: '7 chục là 70, thêm 6 đơn vị được 70 + 6 = 76.',
  }),
  Q({
    sec: S1, name: 'Câu 10', pts: 1,
    text: 'Nhà bác Ba có 26 con vịt, bác mua thêm 14 con nữa. Hỏi nhà bác Ba có tất cả bao nhiêu con vịt?',
    ...opts4('40 con', ['30 con', '12 con', '41 con']),
    why: 'Nhà bác Ba có tất cả: 26 + 14 = 40 (con vịt).',
  }),
]);

/* ────────────────────────── ĐỀ 2 · Thêm và bớt ──────────────────────────── */
const S2 = 'Thêm – bớt';
de(1302, 'Đề 2 · Thêm vào — bớt đi', [
  qThem(S2, 'Câu 1', 'e2q1', {
    emoji: '🎈', a: 14, b: 6, unit: 'quả bóng bay', la: 'Đang có', lb: 'Bơm thêm',
    story: 'Chú hề đang cầm một chùm bóng bay, chú bơm thêm mấy quả nữa như hình.',
  }),
  qBot(S2, 'Câu 2', 'e2q2', {
    emoji: '🍪', a: 18, b: 7, unit: 'cái bánh', cols: 6,
    story: 'Trên khay có một đĩa bánh, các bạn đã ăn hết 7 cái.',
  }),
  Q({
    sec: S2, name: 'Câu 3', pts: 1,
    text: 'Thư viện có 45 quyển truyện, đã cho các lớp mượn 15 quyển. Hỏi thư viện còn lại bao nhiêu quyển truyện?',
    ...opts4('30 quyển', ['60 quyển', '40 quyển', '35 quyển']),
    why: 'Thư viện còn lại: 45 − 15 = 30 (quyển truyện).',
  }),
  qBot(S2, 'Câu 4', 'e2q4', {
    emoji: '🌸', a: 20, b: 8, unit: 'bông hoa', cols: 5,
    story: 'Trong lọ có một bó hoa, mẹ lấy ra 8 bông để cắm sang lọ khác.',
  }),
  Q({
    sec: S2, name: 'Câu 5', pts: 1,
    text: 'Số nào cộng với 8 thì được 23?',
    ...opts4('15', ['31', '16', '14']),
    why: 'Số đó là: 23 − 8 = 15. Thử lại: 15 + 8 = 23, đúng.',
  }),
  qThem(S2, 'Câu 6', 'e2q6', {
    emoji: '🐤', a: 16, b: 9, unit: 'con gà con', la: 'Trong chuồng', lb: 'Mới nở thêm', cols: 4,
    story: 'Trong chuồng đang có mấy con gà con, hôm nay có thêm mấy con mới nở như hình.',
  }),
  Q({
    sec: S2, name: 'Câu 7', pts: 1,
    text: 'Tính: <b>47 − 9 = ?</b>',
    ...opts4('38', ['56', '48', '39']),
    why: '47 − 9 = 47 − 7 − 2 = 40 − 2 = 38.',
  }),
  Q({
    sec: S2, name: 'Câu 8', pts: 1,
    text: 'Tìm <b>x</b>, biết: <b>x − 14 = 26</b>',
    ...opts4('x = 40', ['x = 12', 'x = 30', 'x = 41']),
    why: 'Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 26 + 14 = 40.',
  }),
  Q({
    sec: S2, name: 'Câu 9', pts: 1,
    text: 'Hà có 32 cái kẹo, Hà cho em 8 cái. Hỏi Hà còn lại bao nhiêu cái kẹo?',
    ...opts4('24 cái', ['40 cái', '26 cái', '23 cái']),
    why: 'Hà còn lại: 32 − 8 = 24 (cái kẹo).',
  }),
  Q({
    sec: S2, name: 'Câu 10', pts: 1,
    text: 'Bể cá có 18 con cá, bố thả thêm 12 con nữa. Hỏi bể có tất cả bao nhiêu con cá?',
    ...opts4('30 con', ['6 con', '20 con', '31 con']),
    why: 'Bể có tất cả: 18 + 12 = 30 (con cá).',
  }),
]);

/* ─────────────────── ĐỀ 3 · So sánh nhiều hơn – ít hơn ──────────────────── */
const S3 = 'So sánh';
de(1303, 'Đề 3 · Nhiều hơn — ít hơn', [
  qSoSanh(S3, 'Câu 1', 'e3q1', { ea: '🍊', eb: '🍊', a: 9, b: 6, la: 'Nhóm A', lb: 'Nhóm B', unit: 'quả cam', hoi: 'hieu' }),
  qSoSanh(S3, 'Câu 2', 'e3q2', { ea: '⚽', eb: '🏀', a: 7, b: 11, la: 'Bóng đá', lb: 'Bóng rổ', unit: 'quả bóng', hoi: 'nhom' }),
  Q({
    sec: S3, name: 'Câu 3', pts: 1,
    text: 'An có 25 viên bi. Bình có nhiều hơn An 7 viên bi. Hỏi Bình có bao nhiêu viên bi?',
    ...opts4('32 viên', ['18 viên', '33 viên', '27 viên']),
    why: 'Bình có: 25 + 7 = 32 (viên bi).',
  }),
  qSoSanh(S3, 'Câu 4', 'e3q4', {
    ea: '🌸', eb: '🦋', a: 12, b: 12, la: 'Hoa', lb: 'Bướm', unit: 'vật', hoi: 'nhom',
    hoiText: 'Đếm số hoa và số bướm trong hình. Hỏi nhóm nào nhiều hơn?',
    whyNhom: 'Trong hình có 12 bông hoa và 12 con bướm. Vì 12 = 12 nên số hoa và số bướm bằng nhau.',
  }),
  Q({
    sec: S3, name: 'Câu 5', pts: 1,
    text: 'Lớp 2A có 32 bạn. Lớp 2B có ít hơn lớp 2A 5 bạn. Hỏi lớp 2B có bao nhiêu bạn?',
    ...opts4('27 bạn', ['37 bạn', '28 bạn', '26 bạn']),
    why: 'Lớp 2B có: 32 − 5 = 27 (bạn).',
  }),
  qSoSanh(S3, 'Câu 6', 'e3q6', { ea: '🍎', eb: '🍐', a: 15, b: 8, la: 'Số táo', lb: 'Số lê', unit: 'quả', hoi: 'hieu' }),
  Q({
    sec: S3, name: 'Câu 7', pts: 1,
    text: 'Trong hai số <b>46</b> và <b>64</b>, số nào lớn hơn?',
    ...opts4('64', ['46', 'Hai số bằng nhau', 'Không so sánh được']),
    why: 'Hai số đều có hai chữ số. So chữ số hàng chục: 6 > 4 nên 64 > 46.',
  }),
  Q({
    sec: S3, name: 'Câu 8', pts: 1,
    text: 'Hùng cao 105 cm, Nam thấp hơn Hùng 8 cm. Hỏi Nam cao bao nhiêu xăng-ti-mét?',
    ...opts4('97 cm', ['113 cm', '98 cm', '96 cm']),
    why: 'Nam cao: 105 − 8 = 97 (cm).',
  }),
  Q({
    sec: S3, name: 'Câu 9', pts: 1,
    text: 'Điền dấu thích hợp vào chỗ chấm: <b>38 + 5 … 45</b>',
    ...opts4('<', ['>', '=', 'Không điền được']),
    why: '38 + 5 = 43. Vì 43 < 45 nên điền dấu <.',
  }),
  Q({
    sec: S3, name: 'Câu 10', pts: 1,
    text: 'Con vịt nặng 3 kg, con ngỗng nặng gấp đôi con vịt. Hỏi con ngỗng nặng bao nhiêu ki-lô-gam?',
    ...opts4('6 kg', ['5 kg', '9 kg', '1 kg']),
    why: 'Gấp đôi nghĩa là nhân với 2. Con ngỗng nặng: 3 × 2 = 6 (kg).',
  }),
]);

/* ──────────────────── ĐỀ 4 · Chia đều – nhóm bằng nhau ──────────────────── */
const S4 = 'Chia đều';
de(1304, 'Đề 4 · Chia đều — nhóm bằng nhau', [
  qNhom(S4, 'Câu 1', 'e4q1', { emoji: '🍊', g: 3, p: 4, unit: 'quả cam', ten: 'Rổ', hoi: 'tong' }),
  qNhom(S4, 'Câu 2', 'e4q2', { emoji: '🍬', g: 3, p: 4, unit: 'cái kẹo', ten: 'Túi', hoi: 'moinhom' }),
  Q({
    sec: S4, name: 'Câu 3', pts: 1,
    text: 'Tính: <b>18 : 2 = ?</b>',
    ...opts4('9', ['8', '16', '20']),
    why: '18 : 2 = 9 vì 9 × 2 = 18.',
  }),
  qNhom(S4, 'Câu 4', 'e4q4', { emoji: '🍪', g: 4, p: 5, unit: 'cái bánh', ten: 'Đĩa', hoi: 'tong' }),
  qNhom(S4, 'Câu 5', 'e4q5', { emoji: '🎈', g: 5, p: 3, unit: 'quả bóng bay', ten: 'Chùm', hoi: 'moinhom' }),
  Q({
    sec: S4, name: 'Câu 6', pts: 1,
    text: 'Có 20 học sinh xếp thành 4 hàng bằng nhau. Hỏi mỗi hàng có bao nhiêu học sinh?',
    ...opts4('5 học sinh', ['4 học sinh', '16 học sinh', '6 học sinh']),
    why: 'Mỗi hàng có: 20 : 4 = 5 (học sinh).',
  }),
  Q({
    sec: S4, name: 'Câu 7', pts: 1,
    text: 'Tính: <b>5 × 7 = ?</b>',
    ...opts4('35', ['30', '12', '40']),
    why: '5 × 7 = 35 (theo bảng nhân 5).',
  }),
  Q({
    sec: S4, name: 'Câu 8', pts: 1,
    text: 'Mẹ chia đều 24 cái bánh vào 6 hộp. Hỏi mỗi hộp có bao nhiêu cái bánh?',
    ...opts4('4 cái', ['6 cái', '18 cái', '3 cái']),
    why: 'Mỗi hộp có: 24 : 6 = 4 (cái bánh).',
  }),
  Q({
    sec: S4, name: 'Câu 9', pts: 1,
    text: 'Mỗi chiếc xe ô tô có 4 bánh xe. Hỏi 8 chiếc xe như thế có bao nhiêu bánh xe?',
    ...opts4('32 bánh', ['12 bánh', '24 bánh', '36 bánh']),
    why: 'Số bánh xe là: 4 × 8 = 32 (bánh xe).',
  }),
  Q({
    sec: S4, name: 'Câu 10', pts: 1,
    text: 'Có 36 quả cam, xếp mỗi túi 9 quả. Hỏi xếp được bao nhiêu túi như thế?',
    ...opts4('4 túi', ['5 túi', '27 túi', '6 túi']),
    why: 'Số túi xếp được là: 36 : 9 = 4 (túi).',
  }),
]);

/* ───────────────────────── ĐỀ 5 · Bài toán hai bước ─────────────────────── */
const S5 = 'Hai bước tính';
de(1305, 'Đề 5 · Bài toán giải bằng hai bước', [
  qHaiBuoc(S5, 'Câu 1', 'e5q1', {
    emoji: '🐟', a: 15, them: 7, bot: 5, unit: 'con cá', label: 'Trong bể',
    story: 'Trong bể có một đàn cá như hình. Bố thả thêm 7 con, sau đó vớt ra 5 con.',
  }),
  Q({
    sec: S5, name: 'Câu 2', pts: 1,
    text: 'Thư viện có 42 quyển vở, đã cho đi 15 quyển rồi mua thêm 20 quyển. Hỏi thư viện có bao nhiêu quyển vở?',
    ...opts4('47 quyển', ['77 quyển', '37 quyển', '46 quyển']),
    why: 'Sau khi cho đi: 42 − 15 = 27 (quyển). Sau khi mua thêm: 27 + 20 = 47 (quyển vở).',
  }),
  qHaiBuoc(S5, 'Câu 3', 'e5q3', {
    emoji: '🍬', a: 20, them: 9, bot: 6, unit: 'cái kẹo', label: 'Na có',
    story: 'Na có một số kẹo như hình. Mẹ cho Na thêm 9 cái, sau đó Na cho bạn 6 cái.',
  }),
  Q({
    sec: S5, name: 'Câu 4', pts: 1,
    text: 'Hùng có 18 viên bi, Nam có nhiều hơn Hùng 5 viên bi. Hỏi cả hai bạn có tất cả bao nhiêu viên bi?',
    ...opts4('41 viên', ['23 viên', '36 viên', '31 viên']),
    why: 'Nam có: 18 + 5 = 23 (viên bi). Cả hai bạn có: 18 + 23 = 41 (viên bi).',
  }),
  qHaiBuoc(S5, 'Câu 5', 'e5q5', {
    emoji: '🎈', a: 12, them: 6, bot: 3, unit: 'quả bóng bay', label: 'Đang cầm', cols: 6,
    story: 'Chị Lan đang cầm một chùm bóng như hình. Chị mua thêm 6 quả, sau đó có 3 quả bị bay mất.',
  }),
  Q({
    sec: S5, name: 'Câu 6', pts: 1,
    text: 'Mẹ mua 3 hộp bánh, mỗi hộp 6 cái. Cả nhà ăn hết 5 cái. Hỏi còn lại bao nhiêu cái bánh?',
    ...opts4('13 cái', ['18 cái', '23 cái', '14 cái']),
    why: 'Số bánh mẹ mua: 6 × 3 = 18 (cái). Còn lại: 18 − 5 = 13 (cái bánh).',
  }),
  Q({
    sec: S5, name: 'Câu 7', pts: 1,
    text: 'Tính: <b>50 − 20 − 15 = ?</b>',
    ...opts4('15', ['45', '25', '10']),
    why: 'Tính từ trái sang phải: 50 − 20 = 30; 30 − 15 = 15.',
  }),
  (() => {
    const img = save('e5q8', sceneSVG([
      { emoji: '🍪', n: 7, label: 'Đĩa 1', cols: 4, size: 30 },
      { emoji: '🍪', n: 7, label: 'Đĩa 2', cols: 4, size: 30 },
      { emoji: '🍪', n: 7, label: 'Đĩa 3', cols: 4, size: 30 },
    ], { gap: 16 }));
    const { opts, ans } = opts4('15 cái', ['21 cái', '14 cái', '16 cái']);
    return Q({
      sec: S5, name: 'Câu 8', pts: 1, img,
      text: 'Trong hình có 3 đĩa bánh, mỗi đĩa 7 cái. Các bạn ăn hết 6 cái. Hỏi còn lại bao nhiêu cái bánh?',
      opts, ans,
      why: 'Số bánh có tất cả: 7 × 3 = 21 (cái). Còn lại: 21 − 6 = 15 (cái bánh).',
    });
  })(),
  Q({
    sec: S5, name: 'Câu 9', pts: 1,
    text: 'Trên xe buýt có 28 người. Đến bến, 9 người xuống xe và 6 người lên xe. Hỏi trên xe có bao nhiêu người?',
    ...opts4('25 người', ['43 người', '19 người', '31 người']),
    why: 'Sau khi 9 người xuống: 28 − 9 = 19 (người). Sau khi 6 người lên: 19 + 6 = 25 (người).',
  }),
  Q({
    sec: S5, name: 'Câu 10', pts: 1,
    text: 'Tính: <b>2 × 8 + 4 = ?</b>',
    ...opts4('20', ['24', '14', '16']),
    why: 'Làm phép nhân trước: 2 × 8 = 16. Sau đó: 16 + 4 = 20.',
  }),
]);

/* ──────────────────────────── ĐỀ 6 · Hình học ───────────────────────────── */
const S6 = 'Nhận biết hình';
de(1306, 'Đề 6 · Nhận biết và đếm hình', [
  qDemHinh(S6, 'Câu 1', 'e6q1', { list: ['tg', 'vuong', 'tg', 'tron', 'tg', 'cn', 'tg', 'tron', 'vuong', 'tg'], kind: 'tg' }),
  (() => {
    const list = ['tron', 'cn', 'tg', 'vuong'];
    const img = save('e6q2', shapesRowSVG(list));
    const { opts, ans } = opts4('Hình B', ['Hình A', 'Hình C', 'Hình D']);
    return Q({
      sec: S6, name: 'Câu 2', pts: 1, img,
      text: 'Trong bốn hình dưới đây, hình nào là <b>hình chữ nhật</b>?',
      opts, ans,
      why: 'Hình A là hình tròn, hình B là hình chữ nhật, hình C là hình tam giác, hình D là hình vuông.',
    });
  })(),
  (() => {
    const img = save('e6q3', gridFigSVG(2, 2));
    const { opts, ans } = opts4('5 hình', ['4 hình', '6 hình', '8 hình']);
    return Q({
      sec: S6, name: 'Câu 3', pts: 1, img,
      text: 'Trong hình dưới đây có bao nhiêu <b>hình vuông</b>?',
      opts, ans,
      why: 'Có 4 hình vuông nhỏ và 1 hình vuông lớn bao ngoài. Tất cả: 4 + 1 = 5 (hình vuông).',
    });
  })(),
  (() => {
    const img = save('e6q4', triFanSVG(3));
    const { opts, ans } = opts4('6 hình', ['3 hình', '4 hình', '5 hình']);
    return Q({
      sec: S6, name: 'Câu 4', pts: 1, img,
      text: 'Trong hình dưới đây có bao nhiêu <b>hình tam giác</b>?',
      opts, ans,
      why: 'Có 3 tam giác nhỏ; ghép 2 tam giác nhỏ liền nhau được 2 tam giác; cả hình lớn là 1 tam giác nữa. Tất cả: 3 + 2 + 1 = 6 (hình tam giác).',
    });
  })(),
  Q({
    sec: S6, name: 'Câu 5', pts: 1,
    text: 'Hình tam giác có mấy cạnh?',
    ...opts4('3 cạnh', ['2 cạnh', '4 cạnh', '5 cạnh']),
    why: 'Hình tam giác có 3 cạnh và 3 đỉnh.',
  }),
  Q({
    sec: S6, name: 'Câu 6', pts: 1,
    text: 'Trong các hình sau, hình nào có <b>4 cạnh bằng nhau</b>?',
    ...opts4('Hình vuông', ['Hình tam giác', 'Hình chữ nhật', 'Hình tròn']),
    why: 'Hình vuông có 4 cạnh và 4 cạnh đều bằng nhau. Hình chữ nhật cũng có 4 cạnh nhưng chỉ hai cạnh đối diện mới bằng nhau.',
  }),
  Q({
    sec: S6, name: 'Câu 7', pts: 1,
    text: 'Hình chữ nhật có mấy góc vuông?',
    ...opts4('4 góc vuông', ['2 góc vuông', '3 góc vuông', '1 góc vuông']),
    why: 'Hình chữ nhật có 4 đỉnh và cả 4 góc đều là góc vuông.',
  }),
  Q({
    sec: S6, name: 'Câu 8', pts: 1,
    text: 'Một đường gấp khúc gồm ba đoạn thẳng dài 4 cm, 5 cm và 6 cm. Hỏi đường gấp khúc đó dài bao nhiêu xăng-ti-mét?',
    ...opts4('15 cm', ['14 cm', '16 cm', '10 cm']),
    why: 'Độ dài đường gấp khúc bằng tổng độ dài các đoạn thẳng: 4 + 5 + 6 = 15 (cm).',
  }),
  Q({
    sec: S6, name: 'Câu 9', pts: 1,
    text: 'Tính chu vi hình tam giác có ba cạnh dài 5 cm, 6 cm và 7 cm.',
    ...opts4('18 cm', ['17 cm', '19 cm', '13 cm']),
    why: 'Chu vi hình tam giác bằng tổng độ dài ba cạnh: 5 + 6 + 7 = 18 (cm).',
  }),
  Q({
    sec: S6, name: 'Câu 10', pts: 1,
    text: 'Tính chu vi hình tứ giác có bốn cạnh đều dài 6 cm.',
    ...opts4('24 cm', ['12 cm', '18 cm', '30 cm']),
    why: 'Bốn cạnh đều bằng 6 cm nên chu vi là: 6 × 4 = 24 (cm).',
  }),
]);

/* ───────────────────────────── ĐỀ 7 · Đo độ dài ─────────────────────────── */
const S7 = 'Đo độ dài';
de(1307, 'Đề 7 · Đo độ dài bằng thước kẻ', [
  qDoDai(S7, 'Câu 1', 'e7q1', { from: 0, to: 9, kind: 'pencil', vat: 'Chiếc bút chì' }),
  qDoDai(S7, 'Câu 2', 'e7q2', { from: 0, to: 12, kind: 'ribbon', vat: 'Dải ruy băng' }),
  qDoDai(S7, 'Câu 3', 'e7q3', { from: 2, to: 9, kind: 'doanthang', vat: 'Đoạn thẳng AB', ten: 'đoạn thẳng AB' }),
  Q({
    sec: S7, name: 'Câu 4', pts: 1,
    text: '<b>1 m</b> bằng bao nhiêu xăng-ti-mét?',
    ...opts4('100 cm', ['10 cm', '1000 cm', '50 cm']),
    why: '1 m = 100 cm.',
  }),
  qDoDai(S7, 'Câu 5', 'e7q5', { from: 3, to: 11, kind: 'bar', vat: 'Thanh gỗ' }),
  Q({
    sec: S7, name: 'Câu 6', pts: 1,
    text: 'Tính: <b>25 cm + 17 cm = ?</b>',
    ...opts4('42 cm', ['32 cm', '8 cm', '43 cm']),
    why: '25 + 17 = 42, nên kết quả là 42 cm.',
  }),
  Q({
    sec: S7, name: 'Câu 7', pts: 1,
    text: 'Băng giấy dài 10 cm, em cắt bớt đi 3 cm. Hỏi băng giấy còn lại dài bao nhiêu xăng-ti-mét?',
    ...opts4('7 cm', ['13 cm', '6 cm', '8 cm']),
    why: 'Băng giấy còn lại dài: 10 − 3 = 7 (cm).',
  }),
  Q({
    sec: S7, name: 'Câu 8', pts: 1,
    text: 'Sợi dây dài 45 cm, cắt đi 18 cm. Hỏi sợi dây còn lại dài bao nhiêu xăng-ti-mét?',
    ...opts4('27 cm', ['63 cm', '37 cm', '26 cm']),
    why: 'Sợi dây còn lại dài: 45 − 18 = 27 (cm).',
  }),
  Q({
    sec: S7, name: 'Câu 9', pts: 1,
    text: 'Cái bàn cao 8 dm. Hỏi cái bàn cao bao nhiêu xăng-ti-mét?',
    ...opts4('80 cm', ['8 cm', '18 cm', '800 cm']),
    why: '1 dm = 10 cm nên 8 dm = 10 × 8 = 80 (cm).',
  }),
  Q({
    sec: S7, name: 'Câu 10', pts: 1,
    text: 'Chiếc bút chì mới thường dài khoảng bao nhiêu?',
    ...opts4('17 cm', ['17 m', '17 dm', '17 mm']),
    why: 'Bút chì dài khoảng 17 cm — bằng khoảng một gang tay của em; 17 m hay 17 dm thì quá dài.',
  }),
]);

/* ──────────────────────────── ĐỀ 8 · Tiền Việt Nam ──────────────────────── */
const S8 = 'Tiền Việt Nam';
de(1308, 'Đề 8 · Tiền Việt Nam', [
  qTien(S8, 'Câu 1', 'e8q1', { notes: [5000, 2000, 1000], hoi: 'tong', label: 'Số tiền trong ví' }),
  Q({
    sec: S8, name: 'Câu 2', pts: 1,
    text: 'Lan có 3 tờ tiền loại 5000 đồng. Hỏi Lan có tất cả bao nhiêu tiền?',
    ...opts4('15000 đồng', ['8000 đồng', '10000 đồng', '20000 đồng']),
    why: 'Lan có: 5000 × 3 = 15000 (đồng).',
  }),
  Q({
    sec: S8, name: 'Câu 3', pts: 1,
    text: 'Mẹ đưa Nam 20000 đồng để đi chợ. Nam mua rau hết 12000 đồng. Hỏi Nam còn lại bao nhiêu tiền?',
    ...opts4('8000 đồng', ['32000 đồng', '12000 đồng', '9000 đồng']),
    why: 'Nam còn lại: 20000 − 12000 = 8000 (đồng).',
  }),
  Q({
    sec: S8, name: 'Câu 4', pts: 1,
    text: 'Nam mua một chiếc bút hết 7000 đồng và đưa cho cô bán hàng tờ 10000 đồng. Hỏi cô trả lại Nam bao nhiêu tiền?',
    ...opts4('3000 đồng', ['17000 đồng', '2000 đồng', '4000 đồng']),
    why: 'Cô trả lại: 10000 − 7000 = 3000 (đồng).',
  }),
  qTien(S8, 'Câu 5', 'e8q5', { notes: [1000, 1000, 2000, 5000], hoi: 'conlai', gia: 6000, mon: 'một quyển vở' }),
  Q({
    sec: S8, name: 'Câu 6', pts: 1,
    text: 'Hai tờ 5000 đồng đổi được mấy tờ 2000 đồng?',
    ...opts4('5 tờ', ['2 tờ', '4 tờ', '10 tờ']),
    why: 'Hai tờ 5000 đồng là 10000 đồng. Ta có 2000 + 2000 + 2000 + 2000 + 2000 = 10000, nên đổi được 5 tờ 2000 đồng.',
  }),
  qTien(S8, 'Câu 7', 'e8q7', { notes: [50000], hoi: 'conlai', gia: 32000, mon: 'một quyển sách', label: 'Nam có một tờ tiền' }),
  Q({
    sec: S8, name: 'Câu 8', pts: 1,
    text: 'Mỗi quyển vở giá 6000 đồng. Hỏi mua 3 quyển vở như thế hết bao nhiêu tiền?',
    ...opts4('18000 đồng', ['9000 đồng', '12000 đồng', '24000 đồng']),
    why: 'Số tiền phải trả là: 6000 × 3 = 18000 (đồng).',
  }),
  qTien(S8, 'Câu 9', 'e8q9', { notes: [10000, 5000], hoi: 'thieu', gia: 20000, mon: 'một hộp bút màu' }),
  Q({
    sec: S8, name: 'Câu 10', pts: 1,
    text: 'Em có 2 tờ tiền loại 2000 đồng và 1 tờ 1000 đồng. Hỏi em có tất cả bao nhiêu tiền?',
    ...opts4('5000 đồng', ['3000 đồng', '4000 đồng', '6000 đồng']),
    why: 'Em có: 2000 + 2000 + 1000 = 5000 (đồng).',
  }),
]);

/* ──────────────────────── ĐỀ 9 · Đồng hồ và thời gian ───────────────────── */
const S9 = 'Đồng hồ';
de(1309, 'Đề 9 · Xem đồng hồ và tính thời gian', [
  qDongHo(S9, 'Câu 1', 'e9q1', { h: 7, m: 0 }),
  qDongHo(S9, 'Câu 2', 'e9q2', { h: 9, m: 30 }),
  qDongHo(S9, 'Câu 3', 'e9q3', { h: 3, m: 15 }),
  Q({
    sec: S9, name: 'Câu 4', pts: 1,
    text: '<b>1 giờ</b> bằng bao nhiêu phút?',
    ...opts4('60 phút', ['30 phút', '100 phút', '24 phút']),
    why: '1 giờ = 60 phút.',
  }),
  qDongHo(S9, 'Câu 5', 'e9q5', { h: 5, m: 45 }),
  Q({
    sec: S9, name: 'Câu 6', pts: 1,
    text: 'Nam học ở trường từ 7 giờ sáng đến 11 giờ sáng. Hỏi Nam học trong bao nhiêu giờ?',
    ...opts4('4 giờ', ['3 giờ', '5 giờ', '18 giờ']),
    why: 'Từ 7 giờ đến 11 giờ là: 11 − 7 = 4 (giờ).',
  }),
  Q({
    sec: S9, name: 'Câu 7', pts: 1,
    text: 'Đồng hồ đang chỉ 8 giờ. Hỏi sau 30 phút nữa thì là mấy giờ?',
    ...opts4('8 giờ 30 phút', ['9 giờ', '8 giờ 15 phút', '7 giờ 30 phút']),
    why: '8 giờ thêm 30 phút nữa là 8 giờ 30 phút (còn gọi là 8 giờ rưỡi).',
  }),
  Q({
    sec: S9, name: 'Câu 8', pts: 1,
    text: 'Một ngày có bao nhiêu giờ?',
    ...opts4('24 giờ', ['12 giờ', '60 giờ', '7 giờ']),
    why: 'Một ngày (một ngày đêm) có 24 giờ.',
  }),
  Q({
    sec: S9, name: 'Câu 9', pts: 1,
    text: 'Hôm nay là thứ Ba. Hỏi 3 ngày nữa là thứ mấy?',
    ...opts4('Thứ Sáu', ['Thứ Năm', 'Thứ Bảy', 'Thứ Tư']),
    why: 'Sau thứ Ba là thứ Tư (1 ngày), thứ Năm (2 ngày), thứ Sáu (3 ngày).',
  }),
  Q({
    sec: S9, name: 'Câu 10', pts: 1,
    text: 'Bộ phim bắt đầu lúc 19 giờ và kéo dài 2 giờ. Hỏi phim kết thúc lúc mấy giờ?',
    ...opts4('21 giờ', ['20 giờ', '22 giờ', '17 giờ']),
    why: 'Phim kết thúc lúc: 19 + 2 = 21 (giờ), tức là 9 giờ tối.',
  }),
]);

/* ────────────────────────── ĐỀ 10 · Biểu đồ tranh ───────────────────────── */
const S10 = 'Biểu đồ tranh';
de(1310, 'Đề 10 · Đọc biểu đồ tranh', [
  qBieuDo(S10, 'Câu 1', 'e10q1', {
    rows: [{ label: 'Tổ 1', n: 6 }, { label: 'Tổ 2', n: 8 }, { label: 'Tổ 3', n: 5 }],
    unit: '⭐', per: 1, unitName: 'bông hoa điểm tốt', title: 'Số bông hoa điểm tốt của ba tổ', hoi: 'nhieunhat', rowWord: 'tổ',
  }),
  qBieuDo(S10, 'Câu 2', 'e10q2', {
    rows: [{ label: 'Lớp 2A', n: 5 }, { label: 'Lớp 2B', n: 7 }],
    unit: '👦', per: 2, unitName: 'bạn', title: 'Số bạn tham gia trồng cây', hoi: 'mot', ai: 'Lớp 2B',
  }),
  qBieuDo(S10, 'Câu 3', 'e10q3', {
    rows: [{ label: 'Thứ Hai', n: 4 }, { label: 'Thứ Ba', n: 6 }],
    unit: '🍎', per: 5, unitName: 'quả táo', title: 'Số táo cửa hàng bán được', hoi: 'hieu',
  }),
  Q({
    sec: S10, name: 'Câu 4', pts: 1,
    text: 'Trong một biểu đồ tranh, mỗi hình ⭐ ứng với 2 bạn. Hỏi 6 hình ⭐ ứng với bao nhiêu bạn?',
    ...opts4('12 bạn', ['6 bạn', '8 bạn', '10 bạn']),
    why: 'Mỗi ⭐ là 2 bạn nên 6 ⭐ là: 2 × 6 = 12 (bạn).',
  }),
  qBieuDo(S10, 'Câu 5', 'e10q5', {
    rows: [{ label: 'Nam', n: 3 }, { label: 'Bình', n: 5 }, { label: 'Hà', n: 4 }],
    unit: '⚽', per: 2, unitName: 'quả bóng', title: 'Số quả bóng của ba bạn', hoi: 'tong', rowWord: 'bạn',
  }),
  Q({
    sec: S10, name: 'Câu 6', pts: 1,
    text: 'Tổ 1 được 6 bông hoa điểm tốt, tổ 2 được 8 bông. Hỏi cả hai tổ được bao nhiêu bông hoa?',
    ...opts4('14 bông', ['2 bông', '13 bông', '15 bông']),
    why: 'Cả hai tổ được: 6 + 8 = 14 (bông hoa).',
  }),
  Q({
    sec: S10, name: 'Câu 7', pts: 1,
    text: 'Trong lớp có 7 bạn thích bóng đá, 4 bạn thích cầu lông và 3 bạn thích cờ vua. Hỏi cả ba nhóm có bao nhiêu bạn?',
    ...opts4('14 bạn', ['11 bạn', '13 bạn', '15 bạn']),
    why: 'Cả ba nhóm có: 7 + 4 + 3 = 14 (bạn).',
  }),
  Q({
    sec: S10, name: 'Câu 8', pts: 1,
    text: 'Mỗi hình 🍎 trong biểu đồ ứng với 5 quả táo. Hỏi 4 hình 🍎 ứng với bao nhiêu quả táo?',
    ...opts4('20 quả', ['9 quả', '15 quả', '25 quả']),
    why: 'Mỗi 🍎 là 5 quả nên 4 hình là: 5 × 4 = 20 (quả táo).',
  }),
  Q({
    sec: S10, name: 'Câu 9', pts: 1,
    text: 'Lớp 2A có 18 bạn thích bóng đá, lớp 2B có 12 bạn thích bóng đá. Hỏi lớp 2A nhiều hơn lớp 2B bao nhiêu bạn?',
    ...opts4('6 bạn', ['30 bạn', '5 bạn', '4 bạn']),
    why: 'Lớp 2A nhiều hơn: 18 − 12 = 6 (bạn).',
  }),
  Q({
    sec: S10, name: 'Câu 10', pts: 1,
    text: 'Ba tổ trồng được số cây lần lượt là 8 cây, 9 cây và 7 cây. Hỏi cả ba tổ trồng được bao nhiêu cây?',
    ...opts4('24 cây', ['23 cây', '25 cây', '17 cây']),
    why: 'Cả ba tổ trồng được: 8 + 9 + 7 = 24 (cây).',
  }),
]);

/* ───────────────────────── ĐỀ 11 · Tìm số còn thiếu ─────────────────────── */
const S11 = 'Tìm số còn thiếu';
de(1311, 'Đề 11 · Tìm số còn thiếu', [
  qDaySo(S11, 'Câu 1', 'e11q1', {
    cells: [2, 4, 6, 8, 10], idx: 3, note: 'Dãy số đếm thêm 2',
    why: 'Dãy số đếm thêm 2: 2; 4; 6; 8; 10. Số còn thiếu là 8.',
  }),
  qDaySo(S11, 'Câu 2', 'e11q2', {
    cells: [5, 10, 15, 20, 25], idx: 4, note: 'Dãy số đếm thêm 5',
    why: 'Dãy số đếm thêm 5: 5; 10; 15; 20; 25. Số còn thiếu là 25.',
  }),
  qBang(S11, 'Câu 3', 'e11q3', {
    head: ['Bi của An', 'Bi của Bình', 'Cả hai bạn'], vals: [12, 15, 27], idx: 2,
    text: 'Nhìn bảng dưới đây, tìm số thích hợp thay cho dấu ?',
    why: 'Cả hai bạn có: 12 + 15 = 27 (viên bi).',
  }),
  Q({
    sec: S11, name: 'Câu 4', pts: 1,
    text: 'Số liền sau của <b>số lớn nhất có hai chữ số</b> là số nào?',
    ...opts4('100', ['99', '98', '90']),
    why: 'Số lớn nhất có hai chữ số là 99. Số liền sau của 99 là 100.',
  }),
  qBang(S11, 'Câu 5', 'e11q5', {
    head: ['Thứ Hai', 'Thứ Ba', 'Thứ Tư'], vals: [8, 10, 12], idx: 1,
    text: 'Mỗi ngày Nam đọc nhiều hơn hôm trước 2 trang sách. Nhìn bảng, tìm số trang Nam đọc ngày thứ Ba.',
    why: 'Mỗi ngày đọc thêm 2 trang: thứ Hai 8 trang, thứ Ba 8 + 2 = 10 trang, thứ Tư 10 + 2 = 12 trang.',
  }),
  Q({
    sec: S11, name: 'Câu 6', pts: 1,
    text: 'Điền số thích hợp vào chỗ chấm: <b>36 + … = 50</b>',
    ...opts4('14', ['24', '86', '13']),
    why: 'Số cần điền là: 50 − 36 = 14. Thử lại: 36 + 14 = 50, đúng.',
  }),
  Q({
    sec: S11, name: 'Câu 7', pts: 1,
    text: 'Điền số thích hợp vào chỗ chấm: <b>… × 4 = 28</b>',
    ...opts4('7', ['6', '8', '24']),
    why: 'Vì 7 × 4 = 28 nên số cần điền là 7.',
  }),
  Q({
    sec: S11, name: 'Câu 8', pts: 1,
    text: 'Số nào còn thiếu trong dãy: <b>3; 6; 9; …; 15</b>?',
    ...opts4('12', ['11', '13', '10']),
    why: 'Dãy số đếm thêm 3: 3; 6; 9; 12; 15. Số còn thiếu là 12.',
  }),
  Q({
    sec: S11, name: 'Câu 9', pts: 1,
    text: 'Tìm <b>x</b>, biết: <b>x : 5 = 6</b>',
    ...opts4('x = 30', ['x = 11', 'x = 1', 'x = 25']),
    why: 'Muốn tìm số bị chia ta lấy thương nhân với số chia: x = 6 × 5 = 30.',
  }),
  Q({
    sec: S11, name: 'Câu 10', pts: 1,
    text: 'Cho dãy số: <b>100; 90; 80; …</b> Số tiếp theo của dãy là số nào?',
    ...opts4('70', ['60', '75', '90']),
    why: 'Dãy số bớt dần 10 đơn vị: 100; 90; 80; 70.',
  }),
]);

/* ────────────────────── ĐỀ 12 · Chọn hình đúng – tổng hợp ───────────────── */
const S12 = 'Tổng hợp';
de(1312, 'Đề 12 · Chọn hình đúng — tổng hợp', [
  qChonHinh(S12, 'Câu 1', 'e12q1', {
    emoji: '⚽', counts: [6, 8, 7, 9], correct: 8,
    text: 'Hình nào dưới đây có đúng <b>8 quả bóng</b>?',
    why: 'Đếm số bóng ở mỗi hình: hình A có 6 quả, hình B có 8 quả, hình C có 7 quả, hình D có 9 quả. Hình B có đúng 8 quả bóng.',
  }),
  qChonHinh(S12, 'Câu 2', 'e12q2', {
    emoji: '🍬', counts: [10, 12, 11, 14], correct: 12,
    text: 'Hình nào dưới đây có số kẹo <b>nhiều hơn 10 cái là 2 cái</b>?',
    why: 'Nhiều hơn 10 cái là 2 cái nghĩa là có 10 + 2 = 12 (cái kẹo). Đếm các hình: A có 10, B có 12, C có 11, D có 14. Vậy chọn hình B.',
  }),
  qGop(S12, 'Câu 3', 'e12q3', { emoji: '🥕', a: 11, b: 9, unit: 'củ cà rốt', la: 'Luống 1', lb: 'Luống 2', cols: 4 }),
  qTien(S12, 'Câu 4', 'e12q4', { notes: [10000, 2000, 1000], hoi: 'tong', label: 'Số tiền của Hà' }),
  Q({
    sec: S12, name: 'Câu 5', pts: 1,
    text: 'Nam ngủ dậy lúc 6 giờ sáng và đi học lúc 7 giờ sáng. Hỏi từ lúc ngủ dậy đến lúc đi học là bao lâu?',
    ...opts4('1 giờ', ['2 giờ', '30 phút', '13 giờ']),
    why: 'Từ 6 giờ đến 7 giờ là: 7 − 6 = 1 (giờ).',
  }),
  Q({
    sec: S12, name: 'Câu 6', pts: 1,
    text: 'Tính: <b>36 + 27 = ?</b>',
    ...opts4('63', ['53', '64', '62']),
    why: '36 + 27 = 36 + 20 + 7 = 56 + 7 = 63.',
  }),
  Q({
    sec: S12, name: 'Câu 7', pts: 1,
    text: 'Có 28 quả trứng xếp đều vào các vỉ, mỗi vỉ 7 quả. Hỏi xếp được mấy vỉ?',
    ...opts4('4 vỉ', ['3 vỉ', '5 vỉ', '21 vỉ']),
    why: 'Số vỉ xếp được là: 28 : 7 = 4 (vỉ).',
  }),
  Q({
    sec: S12, name: 'Câu 8', pts: 1,
    text: 'Mẹ hái được 40 quả cam, mẹ biếu bà 12 quả và cho hàng xóm 8 quả. Hỏi mẹ còn lại bao nhiêu quả cam?',
    ...opts4('20 quả', ['28 quả', '60 quả', '18 quả']),
    why: 'Mẹ cho đi tất cả: 12 + 8 = 20 (quả). Mẹ còn lại: 40 − 20 = 20 (quả cam).',
  }),
  Q({
    sec: S12, name: 'Câu 9', pts: 1,
    text: 'Số lớn nhất có hai chữ số là số nào?',
    ...opts4('99', ['90', '100', '89']),
    why: 'Số lớn nhất có hai chữ số là 99.',
  }),
  Q({
    sec: S12, name: 'Câu 10', pts: 1,
    text: 'Một đàn gà có 9 con gà mái, số gà trống gấp 2 lần số gà mái. Hỏi đàn gà có bao nhiêu con gà trống?',
    ...opts4('18 con', ['11 con', '7 con', '20 con']),
    why: 'Gấp 2 lần nghĩa là nhân với 2. Số gà trống là: 9 × 2 = 18 (con).',
  }),
]);

/* ══════════════════════════════ XUẤT FILE ══════════════════════════════════ */
const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
function fmtQ(q) {
  const img = q.img ? `, img: '${q.img}'` : '';
  const opts = q.optImgs
    ? `opts: [${q.optImgs.map((p, i) => `{ k: '${'ABCD'[i]}', img: '${p}' }`).join(', ')}]`
    : `opts: o4('${q.opts.map(esc).join("', '")}')`;
  return `    { sec: '${esc(q.sec)}', name: '${esc(q.name)}', pts: ${q.pts},\n`
       + `      text: '${esc(q.text)}'${img},\n`
       + `      ${opts}, ans: '${q.ans}',\n`
       + `      why: '${esc(q.why)}' },`;
}
function fmtExam(e) {
  const total = e.questions.reduce((t, q) => t + q.pts, 0);
  if (Math.abs(total - 10) > 0.001) throw new Error(`Đề "${e.title}" có tổng điểm ${total} (phải là 10)`);
  e.questions.forEach((q) => {
    if (!q.optImgs && new Set(q.opts).size !== 4) throw new Error(`Đề "${e.title}" · ${q.name}: phương án bị trùng`);
  });
  return `{\n  id: ${e.id}, title: '${esc(e.title)}', time: ${e.time},\n  questions: [\n${e.questions.map(fmtQ).join('\n')}\n  ],\n},`;
}

const nQ = EX.reduce((t, e) => t + e.questions.length, 0);
const nImg = EX.reduce((t, e) => t + e.questions.filter((q) => q.img || q.optImgs).length, 0);
const pct = Math.round(nImg / nQ * 100);

const HEAD = `// TOÁN LỚP 2 QUA HÌNH ẢNH — ${EX.length} đề × 10 câu = ${nQ} câu (${nImg} câu có hình, ${pct}%).
// SINH TỰ ĐỘNG bởi tools/gen-toan2-hinh.mjs — sửa nội dung trong script rồi chạy lại:
//     node tools/gen-toan2-hinh.mjs
//
// Bộ đề luyện đọc – hiểu hình: đếm đồ vật · thêm bớt · so sánh hai nhóm · chia đều ·
// bài toán hai bước · nhận biết và đếm hình · đo độ dài trên thước · tiền Việt Nam ·
// xem đồng hồ · biểu đồ tranh · tìm số còn thiếu · chọn hình đúng.
//
// Mức độ bám chương trình lớp 2: phạm vi 1000, bảng nhân chia 2–9 (riêng × 2 và : 2
// được vượt ngoài bảng), đo lường, thời gian, hình học phẳng cơ bản.
// Toàn bộ hình vẽ bằng code trong tools/hinh-art.mjs (assets/hinh2/) — đáp án lấy
// thẳng từ dữ liệu vẽ ra hình nên hình và lời giải không bao giờ lệch nhau.
`;

fs.mkdirSync(ASSETS, { recursive: true });
const body = `${HEAD}
const TOAN2_HINH = [
${EX.map(fmtExam).join('\n')}
];

// Chèn môn "Toán 2 qua hình" ngay sau môn HSG Toán lớp 2
{
  const i = SUBJECTS.findIndex(s => s.id === 'hsg2');
  SUBJECTS.splice(i < 0 ? 2 : i + 1, 0, {
    id: 'hinh2', name: 'Toán qua hình', short: 'Toán 2 qua hình', icon: '🖼️', grade: 2,
    exams: TOAN2_HINH, ready: true,
    heroTitle: 'Toán lớp 2 qua hình ảnh — ${EX.length} chuyên đề',
    heroMeta: '📚 ${EX.length} đề &nbsp;•&nbsp; ${nQ} câu &nbsp;•&nbsp; ⏱ 25 phút mỗi đề &nbsp;•&nbsp; ${nImg} câu có hình minh hoạ (${pct}%)',
  });
}
`;
fs.writeFileSync('web/data-toan2-hinh.js', body);
console.log(`web/data-toan2-hinh.js: ${EX.length} đề · ${nQ} câu · ${nImg} câu có hình (${pct}%) · ${assetCount} hình SVG`);
