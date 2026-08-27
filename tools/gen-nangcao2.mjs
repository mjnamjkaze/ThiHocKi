/* ============================================================================
   gen-nangcao2.mjs — sinh bộ đề "TOÁN NÂNG CAO LỚP 2 — TUYỂN CHỌN"

   Chạy:  node tools/gen-nangcao2.mjs
   Xuất:  web/assets/nc2/*.svg      (hình vẽ bằng code, không dùng ảnh stock)
          web/data-nangcao2.js      (12 đề × 10 câu, thêm môn mới cho lớp 2)

   NGUỒN THAM KHẢO (dạng bài — toàn bộ câu hỏi đều được biên soạn lại, đổi số
   liệu và tình huống, có lời giải chi tiết):
     · "500 bài toán có lời văn lớp 2" — VietJack: 10 dạng toán có lời văn
       (thêm vào · bớt đi · nhiều hơn · ít hơn · hai bước tính · phép nhân ·
        phép chia · gấp lên nhiều lần · đo lường · tổng hợp).
       https://vietjack.com/bai-tap-cuoi-tuan-lop-2/500-bai-toan-co-loi-giai-van-lop-2.jsp
     · "Tuyển chọn các bài toán nâng cao lớp 2" (bản lưu hành trên mạng, dạng bài
       đối chiếu thêm với Monkey, VnDoc, KiddiHub, Giáo viên Việt Nam): số và cấu
       tạo số · sơ đồ đoạn thẳng · tính ngược từ cuối · suy luận · hình học.
     · Cấu trúc câu trắc nghiệm bám đề kiểm tra Toán 2 học kì 2 nâng cao (VietJack).

   Mức độ: HSG cấp trường / cấp huyện, bám chương trình lớp 2 — phạm vi 1000,
   bảng nhân chia 2–9 (riêng × 2 và : 2 được vượt ra ngoài bảng), đo lường,
   thời gian, hình học phẳng cơ bản. Không đưa dạng olympic quốc tế vào.

   Vì sao sinh bằng script: mọi câu có hình đều lấy ĐÁP ÁN TỪ CHÍNH DỮ LIỆU vẽ
   ra hình (số vật trong rổ, số đo trên thước, mệnh giá tờ tiền, giờ trên mặt
   đồng hồ, độ dài từng đoạn trên sơ đồ) nên hình và lời giải không bao giờ lệch
   nhau. Tỉ lệ câu có hình được in ra ở cuối — giữ trong khoảng 25–40%.
   ========================================================================== */
'use strict';

import fs from 'fs';
import path from 'path';
import {
  sceneSVG, shapeMixSVG, gridFigSVG, triFanSVG,
  rulerSVG, moneySVG, pictoSVG, seqSVG, tableSVG,
} from './hinh-art.mjs';
import { clockSVG } from './vio-art.mjs';
import { barModelSVG, balanceSVG, polylineSVG, treeRowSVG } from './nc2-art.mjs';

const ASSETS = 'web/assets/nc2';
const NC = 'assets/nc2/';
fs.rmSync(ASSETS, { recursive: true, force: true });
fs.mkdirSync(ASSETS, { recursive: true });

let assetCount = 0;
function save(name, content) {
  fs.writeFileSync(path.join(ASSETS, name + '.svg'), content);
  assetCount++;
  return NC + name + '.svg';
}

/* ── trộn đáp án theo seed cố định: chạy lại luôn ra kết quả y hệt ────────── */
let seed = 3;
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
const Q = (o) => o;

const EX = [];
function de(id, title, questions) {
  questions.forEach((q, i) => { q.name = q.name || `Câu ${i + 1}`; q.pts = 1; });
  EX.push({ id, title, time: 25, questions });
}

/* ══════════════ ĐỀ 1 · BÀI TOÁN THÊM VÀO — PHÉP CỘNG ══════════════════════ */
const S1 = 'Thêm vào';
de(1601, 'Đề 1 · Bài toán thêm vào — phép cộng', [
  Q({
    sec: S1, img: save('e1q1', sceneSVG([
      { emoji: '🍊', n: 14, label: 'Rổ A', cols: 5 }, { op: '+' },
      { emoji: '🍊', n: 18, label: 'Rổ B', cols: 6 },
    ])),
    text: 'Đếm số quả cam trong hình. Hỏi cả hai rổ có tất cả bao nhiêu quả cam?',
    ...opts4('32 quả', ['30 quả', '34 quả', '4 quả']),
    why: 'Rổ A có 14 quả, rổ B có 18 quả. Tất cả có: 14 + 18 = 32 (quả cam).',
  }),
  Q({
    sec: S1,
    text: 'Hoà có 45 con tem, anh cho Hoà thêm 27 con tem nữa. Hỏi Hoà có tất cả bao nhiêu con tem?',
    ...opts4('72 con tem', ['62 con tem', '73 con tem', '18 con tem']),
    why: 'Số tem Hoà có tất cả là: 45 + 27 = 72 (con tem).',
  }),
  Q({
    sec: S1, img: save('e1q3', barModelSVG([
      { label: 'Lớp 2A', segs: [{ v: 26, t: '26 bạn' }] },
      { label: 'Lớp 2B', segs: [{ v: 26, t: '26 bạn' }, { v: 8, t: '8 bạn', k: 'd' }] },
    ], { brace: '? bạn', title: 'Số học sinh của hai lớp' })),
    text: 'Nhìn sơ đồ: lớp 2A có 26 bạn, lớp 2B nhiều hơn lớp 2A 8 bạn. Hỏi <b>cả hai lớp</b> có bao nhiêu bạn?',
    ...opts4('60 bạn', ['34 bạn', '52 bạn', '44 bạn']),
    why: 'Lớp 2B có: 26 + 8 = 34 (bạn). Cả hai lớp có: 26 + 34 = 60 (bạn).',
  }),
  Q({
    sec: S1,
    text: 'Sau khi được mẹ cho thêm 18 quyển vở, Mai có tất cả 50 quyển vở. Hỏi <b>lúc đầu</b> Mai có bao nhiêu quyển vở?',
    ...opts4('32 quyển', ['68 quyển', '42 quyển', '22 quyển']),
    why: 'Lấy số vở lúc sau trừ đi số vở được cho thêm: 50 − 18 = 32 (quyển vở).',
  }),
  Q({
    sec: S1,
    text: 'Thùng thứ nhất đựng 24 lít dầu, thùng thứ hai đựng 18 lít, thùng thứ ba đựng 25 lít. Hỏi cả ba thùng đựng bao nhiêu lít dầu?',
    ...opts4('67 lít', ['57 lít', '66 lít', '42 lít']),
    why: 'Cả ba thùng đựng: 24 + 18 + 25 = 67 (lít dầu).',
  }),
  Q({
    sec: S1,
    text: 'Tính nhanh: <b>17 + 25 + 3 + 15</b>',
    ...opts4('60', ['50', '70', '58']),
    why: 'Ghép các số cho tròn chục: (17 + 3) + (25 + 15) = 20 + 40 = 60.',
  }),
  Q({
    sec: S1, img: save('e1q7', seqSVG([2, 5, 9, 14, '?'])),
    text: 'Tìm số thích hợp thay cho dấu <b>?</b> trong dãy số bên.',
    ...opts4('20', ['19', '21', '18']),
    why: 'Khoảng cách giữa hai số liền nhau tăng dần: 2 + 3 = 5; 5 + 4 = 9; 9 + 5 = 14. Vậy số tiếp theo là: 14 + 6 = 20.',
  }),
  Q({
    sec: S1,
    text: 'Tính tổng của <b>số lớn nhất có hai chữ số</b> và <b>số liền sau của 45</b>.',
    ...opts4('145', ['144', '135', '146']),
    why: 'Số lớn nhất có hai chữ số là 99. Số liền sau của 45 là 46. Tổng là: 99 + 46 = 145.',
  }),
  Q({
    sec: S1,
    text: 'Một cửa hàng buổi sáng bán được 128 chiếc bánh, buổi chiều bán được 145 chiếc bánh. Hỏi cả ngày cửa hàng bán được bao nhiêu chiếc bánh?',
    ...opts4('273 chiếc', ['263 chiếc', '283 chiếc', '17 chiếc']),
    why: 'Cả ngày cửa hàng bán được: 128 + 145 = 273 (chiếc bánh).',
  }),
  Q({
    sec: S1,
    text: 'Tìm <b>x</b>, biết: <b>x − 26 = 39</b>',
    ...opts4('x = 65', ['x = 13', 'x = 55', 'x = 66']),
    why: 'x là số bị trừ nên x = 39 + 26 = 65. Thử lại: 65 − 26 = 39, đúng.',
  }),
]);

/* ══════════════ ĐỀ 2 · BÀI TOÁN BỚT ĐI — PHÉP TRỪ ═════════════════════════ */
const S2 = 'Bớt đi';
de(1602, 'Đề 2 · Bài toán bớt đi — phép trừ', [
  Q({
    sec: S2, img: save('e2q1', sceneSVG([
      { emoji: '🧁', n: 15, label: 'Đĩa bánh lúc đầu', cols: 5, cross: [0, 1, 2, 3, 4, 5] },
    ])),
    text: 'Trên đĩa có một số chiếc bánh, những chiếc <b>bị gạch chéo</b> là bánh đã được ăn. Hỏi trên đĩa còn lại bao nhiêu chiếc bánh?',
    ...opts4('9 chiếc', ['6 chiếc', '10 chiếc', '21 chiếc']),
    why: 'Đĩa có 15 chiếc bánh, đã ăn 6 chiếc (6 chiếc bị gạch chéo). Còn lại: 15 − 6 = 9 (chiếc bánh).',
  }),
  Q({
    sec: S2,
    text: 'Cửa hàng có 84 chiếc mũ, đã bán được 47 chiếc. Hỏi cửa hàng còn lại bao nhiêu chiếc mũ?',
    ...opts4('37 chiếc', ['43 chiếc', '131 chiếc', '33 chiếc']),
    why: 'Số mũ còn lại là: 84 − 47 = 37 (chiếc mũ).',
  }),
  Q({
    sec: S2,
    text: 'Trong một phép trừ, số bị trừ là 72 và hiệu là 35. Tìm <b>số trừ</b>.',
    ...opts4('37', ['107', '47', '35']),
    why: 'Số trừ = số bị trừ − hiệu = 72 − 35 = 37. Thử lại: 72 − 37 = 35, đúng.',
  }),
  Q({
    sec: S2, img: save('e2q4', rulerSVG(2, 11, { kind: 'doanthang', label: 'Đoạn thẳng AB đặt trên thước kẻ' })),
    text: 'Đọc trên thước kẻ và cho biết đoạn thẳng AB dài bao nhiêu xăng-ti-mét?',
    ...opts4('9 cm', ['11 cm', '8 cm', '13 cm']),
    why: 'Đầu A ở vạch 2 cm, đầu B ở vạch 11 cm. Đoạn thẳng AB dài: 11 − 2 = 9 (cm).',
  }),
  Q({
    sec: S2,
    text: 'Mai có một số quyển truyện. Mai cho em 8 quyển thì Mai còn lại 24 quyển. Hỏi <b>lúc đầu</b> Mai có bao nhiêu quyển truyện?',
    ...opts4('32 quyển', ['16 quyển', '30 quyển', '34 quyển']),
    why: 'Đi ngược từ cuối: lấy số truyện còn lại cộng với số truyện đã cho: 24 + 8 = 32 (quyển truyện).',
  }),
  Q({
    sec: S2,
    text: 'Hiệu của hai số là 18. Nếu <b>giữ nguyên số bị trừ</b> và <b>bớt số trừ đi 5 đơn vị</b> thì hiệu mới bằng bao nhiêu?',
    ...opts4('23', ['13', '18', '90']),
    why: 'Số trừ bớt đi bao nhiêu thì hiệu tăng thêm bấy nhiêu. Hiệu mới là: 18 + 5 = 23.',
  }),
  Q({
    sec: S2,
    text: 'Tính nhanh: <b>100 − 36 − 24</b>',
    ...opts4('40', ['30', '50', '88']),
    why: 'Trừ liên tiếp hai số thì bằng trừ đi tổng của chúng: 36 + 24 = 60, nên 100 − 60 = 40.',
  }),
  Q({
    sec: S2,
    text: 'Một bao gạo nặng 50 kg. Người ta lấy ra 2 lần, mỗi lần 15 kg. Hỏi trong bao còn lại bao nhiêu ki-lô-gam gạo?',
    ...opts4('20 kg', ['35 kg', '30 kg', '25 kg']),
    why: 'Hai lần lấy ra tất cả: 15 + 15 = 30 (kg). Trong bao còn lại: 50 − 30 = 20 (kg gạo).',
  }),
  Q({
    sec: S2, img: save('e2q9', barModelSVG([
      { label: 'Sợi dây', segs: [{ v: 18, t: 'cắt đi 18 dm', k: 'd' }, { v: 27, t: '? dm', k: 'q' }], tot: '45 dm' },
    ], { title: 'Sợi dây dài 45 dm' })),
    text: 'Nhìn sơ đồ: sợi dây dài 45 dm, người ta cắt đi 18 dm. Hỏi sợi dây còn lại dài bao nhiêu đề-xi-mét?',
    ...opts4('27 dm', ['37 dm', '63 dm', '23 dm']),
    why: 'Phần dây còn lại dài: 45 − 18 = 27 (dm).',
  }),
  Q({
    sec: S2,
    text: 'Tìm <b>x</b>, biết: <b>85 − x = 47</b>',
    ...opts4('x = 38', ['x = 132', 'x = 42', 'x = 48']),
    why: 'x là số trừ nên x = 85 − 47 = 38. Thử lại: 85 − 38 = 47, đúng.',
  }),
]);

/* ══════════════ ĐỀ 3 · NHIỀU HƠN — ÍT HƠN ═════════════════════════════════ */
const S3 = 'Nhiều hơn – ít hơn';
de(1603, 'Đề 3 · Bài toán nhiều hơn — ít hơn', [
  Q({
    sec: S3, img: save('e3q1', sceneSVG([
      { emoji: '🦆', n: 12, label: 'Đàn vịt', cols: 4 },
      { emoji: '🐔', n: 8, label: 'Đàn gà', cols: 4 },
    ])),
    text: 'Đếm trong hình. Hỏi đàn vịt nhiều hơn đàn gà bao nhiêu con?',
    ...opts4('4 con', ['3 con', '5 con', '20 con']),
    why: 'Đàn vịt có 12 con, đàn gà có 8 con. Đàn vịt nhiều hơn: 12 − 8 = 4 (con).',
  }),
  Q({
    sec: S3,
    text: 'Lan có 27 chiếc nhãn vở, Huệ có ít hơn Lan 9 chiếc. Hỏi Huệ có bao nhiêu chiếc nhãn vở?',
    ...opts4('18 chiếc', ['36 chiếc', '17 chiếc', '19 chiếc']),
    why: 'Số nhãn vở của Huệ là: 27 − 9 = 18 (chiếc).',
  }),
  Q({
    sec: S3,
    text: 'Nam cao 118 cm, Bắc thấp hơn Nam 6 cm. Hỏi Bắc cao bao nhiêu xăng-ti-mét?',
    ...opts4('112 cm', ['124 cm', '111 cm', '108 cm']),
    why: 'Bắc thấp hơn Nam nên lấy chiều cao của Nam trừ đi 6: 118 − 6 = 112 (cm).',
  }),
  Q({
    sec: S3, img: save('e3q4', barModelSVG([
      { label: 'Thùng 1', segs: [{ v: 19, t: '?' }, { v: 8, t: '8 lít', k: 'd' }] },
      { label: 'Thùng 2', segs: [{ v: 19, t: '?' }] },
    ], { brace: '46 lít', title: 'Hai thùng có tất cả 46 lít nước' })),
    text: 'Hai thùng có tất cả 46 lít nước, thùng 1 nhiều hơn thùng 2 là 8 lít. Hỏi <b>thùng 1</b> có bao nhiêu lít nước?',
    ...opts4('27 lít', ['19 lít', '38 lít', '23 lít']),
    why: 'Nếu bớt 8 lít ở thùng 1 thì hai thùng bằng nhau và còn: 46 − 8 = 38 (lít). Thùng 2 có: 38 : 2 = 19 (lít). Thùng 1 có: 19 + 8 = 27 (lít nước).',
  }),
  Q({
    sec: S3,
    text: 'Anh hơn em 4 tuổi. Hỏi khi em 9 tuổi thì anh bao nhiêu tuổi?',
    ...opts4('13 tuổi', ['5 tuổi', '36 tuổi', '14 tuổi']),
    why: 'Hiệu số tuổi của hai anh em luôn không đổi là 4 tuổi. Khi em 9 tuổi thì anh: 9 + 4 = 13 (tuổi).',
  }),
  Q({
    sec: S3,
    text: 'Trong vườn có 40 cây bưởi, số cây cam ít hơn số cây bưởi 15 cây. Hỏi trong vườn có tất cả bao nhiêu cây?',
    ...opts4('65 cây', ['55 cây', '25 cây', '95 cây']),
    why: 'Số cây cam là: 40 − 15 = 25 (cây). Cả vườn có: 40 + 25 = 65 (cây).',
  }),
  Q({
    sec: S3, img: save('e3q7', pictoSVG([
      { label: 'Tổ 1', n: 5 }, { label: 'Tổ 2', n: 8 }, { label: 'Tổ 3', n: 6 },
    ], { unit: '⭐', per: 1, unitName: 'bạn', title: 'Số bạn đạt điểm 10 của mỗi tổ' })),
    text: 'Đọc biểu đồ tranh bên. Tổ nào có nhiều bạn đạt điểm 10 nhất và nhiều hơn tổ ít nhất bao nhiêu bạn?',
    ...opts4('Tổ 2, nhiều hơn 3 bạn', ['Tổ 2, nhiều hơn 2 bạn', 'Tổ 3, nhiều hơn 3 bạn', 'Tổ 1, nhiều hơn 3 bạn']),
    why: 'Đếm số ⭐: tổ 1 có 5 bạn, tổ 2 có 8 bạn, tổ 3 có 6 bạn. Tổ 2 nhiều nhất, tổ 1 ít nhất. Tổ 2 nhiều hơn tổ 1: 8 − 5 = 3 (bạn).',
  }),
  Q({
    sec: S3,
    text: 'Hoa có 24 viên kẹo. Hoa cho Bình 6 viên thì <b>số kẹo của hai bạn bằng nhau</b>. Hỏi lúc đầu Bình có bao nhiêu viên kẹo?',
    ...opts4('12 viên', ['18 viên', '30 viên', '6 viên']),
    why: 'Sau khi cho, Hoa còn: 24 − 6 = 18 (viên) và Bình cũng có 18 viên. Lúc đầu Bình có: 18 − 6 = 12 (viên kẹo).',
  }),
  Q({
    sec: S3,
    text: 'Trong vườn số gà nhiều hơn số vịt 12 con. Nếu mua thêm 5 con vịt nữa thì số gà nhiều hơn số vịt bao nhiêu con?',
    ...opts4('7 con', ['17 con', '12 con', '5 con']),
    why: 'Số vịt tăng thêm 5 con nên phần gà nhiều hơn giảm đi 5 con: 12 − 5 = 7 (con).',
  }),
  Q({
    sec: S3,
    text: 'Bao ngô nặng 35 kg, bao gạo nhẹ hơn bao ngô 8 kg. Hỏi cả hai bao nặng bao nhiêu ki-lô-gam?',
    ...opts4('62 kg', ['70 kg', '27 kg', '78 kg']),
    why: 'Bao gạo nặng: 35 − 8 = 27 (kg). Cả hai bao nặng: 35 + 27 = 62 (kg).',
  }),
]);

/* ══════════════ ĐỀ 4 · BÀI TOÁN GIẢI BẰNG HAI PHÉP TÍNH ═══════════════════ */
const S4 = 'Hai bước tính';
de(1604, 'Đề 4 · Bài toán giải bằng hai phép tính', [
  Q({
    sec: S4, img: save('e4q1', sceneSVG([
      { emoji: '🍪', n: 6, label: 'Đĩa 1', cols: 3 },
      { emoji: '🍪', n: 6, label: 'Đĩa 2', cols: 3 },
      { emoji: '🍪', n: 6, label: 'Đĩa 3', cols: 3 }, { op: '+' },
      { emoji: '🍪', n: 5, label: 'Mẹ làm thêm', cols: 3 },
    ])),
    text: 'Nhìn hình: mỗi đĩa có số bánh bằng nhau, mẹ làm thêm một số bánh nữa. Hỏi có tất cả bao nhiêu chiếc bánh?',
    ...opts4('23 chiếc', ['18 chiếc', '22 chiếc', '11 chiếc']),
    why: 'Ba đĩa có: 6 × 3 = 18 (chiếc bánh). Thêm 5 chiếc mẹ làm nữa: 18 + 5 = 23 (chiếc bánh).',
  }),
  Q({
    sec: S4,
    text: 'Mẹ mua 45 quả trứng, mẹ làm bánh hết 12 quả, sau đó mẹ mua thêm 20 quả nữa. Hỏi mẹ có bao nhiêu quả trứng?',
    ...opts4('53 quả', ['77 quả', '13 quả', '57 quả']),
    why: 'Sau khi làm bánh còn: 45 − 12 = 33 (quả). Mua thêm 20 quả: 33 + 20 = 53 (quả trứng).',
  }),
  Q({
    sec: S4,
    text: 'Lớp 2A có 32 học sinh, trong đó có 15 bạn nữ. Hỏi số bạn nam nhiều hơn số bạn nữ bao nhiêu bạn?',
    ...opts4('2 bạn', ['17 bạn', '3 bạn', '47 bạn']),
    why: 'Số bạn nam là: 32 − 15 = 17 (bạn). Số bạn nam nhiều hơn số bạn nữ: 17 − 15 = 2 (bạn).',
  }),
  Q({
    sec: S4, img: save('e4q4', barModelSVG([
      { label: 'Lớp 2A', segs: [{ v: 26, t: '26 cây' }] },
      { label: 'Lớp 2B', segs: [{ v: 22, t: '? cây', k: 'q' }] },
    ], { brace: '48 cây', title: 'Hai lớp trồng được tất cả 48 cây' })),
    text: 'Nhìn sơ đồ: hai lớp trồng được 48 cây, lớp 2A trồng 26 cây. Hỏi lớp 2B trồng <b>ít hơn</b> lớp 2A bao nhiêu cây?',
    ...opts4('4 cây', ['22 cây', '2 cây', '6 cây']),
    why: 'Lớp 2B trồng được: 48 − 26 = 22 (cây). Lớp 2B trồng ít hơn lớp 2A: 26 − 22 = 4 (cây).',
  }),
  Q({
    sec: S4,
    text: 'An có 5 túi kẹo, mỗi túi 8 viên. An cho bạn 12 viên. Hỏi An còn lại bao nhiêu viên kẹo?',
    ...opts4('28 viên', ['40 viên', '32 viên', '25 viên']),
    why: 'An có tất cả: 8 × 5 = 40 (viên kẹo). Sau khi cho bạn, An còn: 40 − 12 = 28 (viên kẹo).',
  }),
  Q({
    sec: S4,
    text: 'Một cửa hàng có 60 kg gạo. Buổi sáng bán 18 kg, buổi chiều bán 24 kg. Hỏi cửa hàng còn lại bao nhiêu ki-lô-gam gạo?',
    ...opts4('18 kg', ['42 kg', '22 kg', '36 kg']),
    why: 'Cả hai buổi bán được: 18 + 24 = 42 (kg). Cửa hàng còn lại: 60 − 42 = 18 (kg gạo).',
  }),
  Q({
    sec: S4, img: save('e4q7', tableSVG(['An', 'Bình', 'Cường'], [12, '?', 9])),
    text: 'Bảng bên cho biết số bút của ba bạn. Biết cả ba bạn có tất cả <b>35 chiếc bút</b>. Hỏi Bình có bao nhiêu chiếc bút?',
    ...opts4('14 chiếc', ['21 chiếc', '13 chiếc', '11 chiếc']),
    why: 'An và Cường có: 12 + 9 = 21 (chiếc bút). Bình có: 35 − 21 = 14 (chiếc bút).',
  }),
  Q({
    sec: S4,
    text: 'Hà gấp được 18 ngôi sao, sau đó Hà gấp thêm được số ngôi sao <b>gấp 2 lần</b> lúc đầu. Hỏi Hà gấp được tất cả bao nhiêu ngôi sao?',
    ...opts4('54 ngôi sao', ['36 ngôi sao', '20 ngôi sao', '27 ngôi sao']),
    why: 'Số ngôi sao gấp thêm là: 18 × 2 = 36 (ngôi sao). Tất cả có: 18 + 36 = 54 (ngôi sao).',
  }),
  Q({
    sec: S4,
    text: 'Thùng thứ nhất có 27 lít dầu, thùng thứ hai có ít hơn thùng thứ nhất 9 lít. Hỏi cả hai thùng có bao nhiêu lít dầu?',
    ...opts4('45 lít', ['36 lít', '63 lít', '18 lít']),
    why: 'Thùng thứ hai có: 27 − 9 = 18 (lít). Cả hai thùng có: 27 + 18 = 45 (lít dầu).',
  }),
  Q({
    sec: S4,
    text: 'Có 36 học sinh xếp thành 4 hàng đều nhau. Hỏi <b>2 hàng</b> có bao nhiêu học sinh?',
    ...opts4('18 học sinh', ['9 học sinh', '32 học sinh', '20 học sinh']),
    why: 'Mỗi hàng có: 36 : 4 = 9 (học sinh). Hai hàng có: 9 × 2 = 18 (học sinh).',
  }),
]);

/* ══════════════ ĐỀ 5 · PHÉP NHÂN TRONG ĐỜI SỐNG ═══════════════════════════ */
const S5 = 'Phép nhân';
de(1605, 'Đề 5 · Phép nhân trong đời sống', [
  Q({
    sec: S5, img: save('e5q1', sceneSVG([
      { emoji: '🍐', n: 5, label: 'Rổ 1', cols: 5 }, { emoji: '🍐', n: 5, label: 'Rổ 2', cols: 5 },
      { emoji: '🍐', n: 5, label: 'Rổ 3', cols: 5 }, { emoji: '🍐', n: 5, label: 'Rổ 4', cols: 5 },
    ])),
    text: 'Nhìn hình, các rổ có số quả lê bằng nhau. Hỏi cả 4 rổ có bao nhiêu quả lê?',
    ...opts4('20 quả', ['9 quả', '16 quả', '25 quả']),
    why: 'Mỗi rổ có 5 quả, có 4 rổ nên tất cả có: 5 × 4 = 20 (quả lê).',
  }),
  Q({
    sec: S5,
    text: 'Mỗi bàn học có 2 học sinh ngồi. Hỏi 9 bàn học như thế có bao nhiêu học sinh?',
    ...opts4('18 học sinh', ['11 học sinh', '20 học sinh', '7 học sinh']),
    why: 'Số học sinh là: 2 × 9 = 18 (học sinh).',
  }),
  Q({
    sec: S5,
    text: 'Mỗi tuần lễ có 7 ngày. Hỏi 6 tuần lễ có bao nhiêu ngày?',
    ...opts4('42 ngày', ['13 ngày', '36 ngày', '48 ngày']),
    why: 'Số ngày của 6 tuần lễ là: 7 × 6 = 42 (ngày).',
  }),
  Q({
    sec: S5, img: save('e5q4', gridFigSVG(4, 3)),
    text: 'Hình chữ nhật bên được chia thành các ô vuông nhỏ bằng nhau. Hỏi có tất cả bao nhiêu ô vuông nhỏ?',
    ...opts4('12 ô', ['7 ô', '10 ô', '16 ô']),
    why: 'Hình có 3 hàng, mỗi hàng 4 ô vuông nhỏ. Số ô vuông nhỏ là: 4 × 3 = 12 (ô).',
  }),
  Q({
    sec: S5,
    text: 'Trong sân có 8 con gà và 1 con chó. Hỏi tất cả có bao nhiêu cái chân?',
    ...opts4('20 cái chân', ['16 cái chân', '18 cái chân', '36 cái chân']),
    why: 'Mỗi con gà có 2 chân nên 8 con gà có: 2 × 8 = 16 (cái chân). Con chó có 4 chân. Tất cả có: 16 + 4 = 20 (cái chân).',
  }),
  Q({
    sec: S5,
    text: 'Tính nhanh: <b>5 × 6 + 5 × 4</b>',
    ...opts4('50', ['30', '45', '54']),
    why: 'Lấy 5 nhân với 6 nhóm rồi cộng thêm 5 nhân với 4 nhóm thì được 5 nhân với 10 nhóm: 5 × 10 = 50.',
  }),
  Q({
    sec: S5,
    text: 'Mỗi hộp có 6 chiếc bánh. Mẹ mua 5 hộp rồi cả nhà ăn hết 7 chiếc. Hỏi còn lại bao nhiêu chiếc bánh?',
    ...opts4('23 chiếc', ['30 chiếc', '18 chiếc', '13 chiếc']),
    why: 'Mẹ mua tất cả: 6 × 5 = 30 (chiếc bánh). Ăn hết 7 chiếc nên còn lại: 30 − 7 = 23 (chiếc bánh).',
  }),
  Q({
    sec: S5, img: save('e5q8', seqSVG([3, 6, 9, '?', 15])),
    text: 'Tìm số thích hợp thay cho dấu <b>?</b> trong dãy số bên.',
    ...opts4('12', ['10', '11', '13']),
    why: 'Dãy gồm các số 3 × 1; 3 × 2; 3 × 3; … nên số phải tìm là: 3 × 4 = 12.',
  }),
  Q({
    sec: S5,
    text: 'Số nào nhân với 4 thì được 32?',
    ...opts4('8', ['7', '9', '28']),
    why: 'Vì 8 × 4 = 32 nên số cần tìm là 8. Có thể tìm bằng phép chia: 32 : 4 = 8.',
  }),
  Q({
    sec: S5,
    text: 'Một chiếc xe đạp có 2 bánh xe, một chiếc xe ba bánh có 3 bánh xe. Hỏi 4 chiếc xe đạp và 3 chiếc xe ba bánh có tất cả bao nhiêu bánh xe?',
    ...opts4('17 bánh xe', ['14 bánh xe', '12 bánh xe', '20 bánh xe']),
    why: '4 chiếc xe đạp có: 2 × 4 = 8 (bánh xe). 3 chiếc xe ba bánh có: 3 × 3 = 9 (bánh xe). Tất cả có: 8 + 9 = 17 (bánh xe).',
  }),
]);

/* ══════════════ ĐỀ 6 · PHÉP CHIA — CHIA ĐỀU, CHIA THEO NHÓM ═══════════════ */
const S6 = 'Phép chia';
de(1606, 'Đề 6 · Phép chia — chia đều và chia theo nhóm', [
  Q({
    sec: S6, img: save('e6q1', sceneSVG([
      { emoji: '🍎', n: 18, label: 'Cả rổ táo', cols: 6 },
    ])),
    text: 'Đếm số quả táo trong rổ rồi chia đều số táo đó vào 3 chiếc đĩa. Hỏi mỗi đĩa có bao nhiêu quả táo?',
    ...opts4('6 quả', ['5 quả', '9 quả', '15 quả']),
    why: 'Rổ có 18 quả táo. Chia đều vào 3 đĩa, mỗi đĩa có: 18 : 3 = 6 (quả táo).',
  }),
  Q({
    sec: S6,
    text: 'Có 24 học sinh xếp thành các hàng, mỗi hàng 4 bạn. Hỏi xếp được bao nhiêu hàng?',
    ...opts4('6 hàng', ['4 hàng', '8 hàng', '20 hàng']),
    why: 'Số hàng xếp được là: 24 : 4 = 6 (hàng).',
  }),
  Q({
    sec: S6,
    text: 'Có 35 quả cam chia đều vào 5 rổ. Hỏi mỗi rổ có bao nhiêu quả cam?',
    ...opts4('7 quả', ['6 quả', '8 quả', '30 quả']),
    why: 'Mỗi rổ có: 35 : 5 = 7 (quả cam).',
  }),
  Q({
    sec: S6,
    text: 'Mẹ có 20 chiếc kẹo chia đều cho 4 anh em, sau đó mỗi người ăn hết 2 chiếc. Hỏi mỗi người còn lại bao nhiêu chiếc kẹo?',
    ...opts4('3 chiếc', ['5 chiếc', '2 chiếc', '18 chiếc']),
    why: 'Mỗi người được chia: 20 : 4 = 5 (chiếc kẹo). Sau khi ăn 2 chiếc, mỗi người còn: 5 − 2 = 3 (chiếc kẹo).',
  }),
  Q({
    sec: S6, img: save('e6q5', gridFigSVG(5, 4, { unit: 48 })),
    text: 'Hình bên cho biết cách xếp 20 chiếc bánh, <b>mỗi ô vuông là một chiếc bánh</b>. Hỏi mỗi hàng có bao nhiêu chiếc bánh?',
    ...opts4('5 chiếc', ['4 chiếc', '6 chiếc', '16 chiếc']),
    why: 'Nhìn hình thấy bánh được xếp thành 4 hàng. Mỗi hàng có: 20 : 4 = 5 (chiếc bánh).',
  }),
  Q({
    sec: S6,
    text: 'Trong một phép chia, số bị chia là 42 và số chia là 6. Tìm <b>thương</b>.',
    ...opts4('7', ['8', '36', '6']),
    why: 'Thương là: 42 : 6 = 7.',
  }),
  Q({
    sec: S6,
    text: 'Có 30 quyển vở. Nếu chia cho mỗi bạn 5 quyển thì được 6 bạn. Hỏi nếu chia cho mỗi bạn 6 quyển thì được bao nhiêu bạn?',
    ...opts4('5 bạn', ['6 bạn', '7 bạn', '4 bạn']),
    why: 'Mỗi bạn nhận nhiều vở hơn thì số bạn được chia sẽ ít đi. Số bạn là: 30 : 6 = 5 (bạn).',
  }),
  Q({
    sec: S6,
    text: 'Số 18 chia cho số nào thì được 6?',
    ...opts4('3', ['2', '4', '12']),
    why: 'Vì 18 : 3 = 6 nên số cần tìm là 3.',
  }),
  Q({
    sec: S6,
    text: 'Một sợi dây dài 36 dm được cắt thành các đoạn, mỗi đoạn dài 4 dm. Hỏi phải cắt <b>bao nhiêu lần</b>?',
    ...opts4('8 lần', ['9 lần', '4 lần', '10 lần']),
    why: 'Số đoạn dây cắt được là: 36 : 4 = 9 (đoạn). Cắt được 9 đoạn thì chỉ cần cắt: 9 − 1 = 8 (lần), vì nhát cắt cuối cùng đã tách xong hai đoạn.',
  }),
  Q({
    sec: S6,
    text: 'Có 25 quả trứng xếp vào các vỉ, mỗi vỉ 6 quả. Hỏi xếp đầy được mấy vỉ và còn thừa mấy quả?',
    ...opts4('4 vỉ, thừa 1 quả', ['4 vỉ, thừa 2 quả', '5 vỉ, thừa 1 quả', '3 vỉ, thừa 7 quả']),
    why: 'Ta có 6 × 4 = 24 và 25 − 24 = 1. Vậy xếp đầy được 4 vỉ và còn thừa 1 quả trứng.',
  }),
]);

/* ══════════════ ĐỀ 7 · GẤP MẤY LẦN — CHIA THÀNH PHẦN BẰNG NHAU ═══════════ */
const S7 = 'Gấp – chia phần';
de(1607, 'Đề 7 · Gấp mấy lần — chia thành phần bằng nhau', [
  Q({
    sec: S7,
    text: 'Số bé là 6, số lớn gấp 3 lần số bé. Hỏi số lớn là số nào?',
    ...opts4('18', ['9', '2', '36']),
    why: 'Gấp 3 lần nghĩa là nhân với 3. Số lớn là: 6 × 3 = 18.',
  }),
  Q({
    sec: S7, img: save('e7q2', barModelSVG([
      { label: 'Đoạn AB', segs: [{ v: 4, t: '4 cm' }] },
      { label: 'Đoạn CD', segs: [{ v: 4, t: '4 cm' }, { v: 4, t: '4 cm' }, { v: 4, t: '4 cm' }, { v: 4, t: '4 cm' }], tot: '? cm' },
    ], { title: 'Đoạn CD gấp 4 lần đoạn AB', barW: 380 })),
    text: 'Nhìn sơ đồ: đoạn thẳng AB dài 4 cm, đoạn thẳng CD gấp 4 lần đoạn AB. Hỏi đoạn CD dài bao nhiêu xăng-ti-mét?',
    ...opts4('16 cm', ['8 cm', '12 cm', '20 cm']),
    why: 'Đoạn CD dài: 4 × 4 = 16 (cm).',
  }),
  Q({
    sec: S7,
    text: 'Số 24 gấp mấy lần số 8?',
    ...opts4('3 lần', ['4 lần', '2 lần', '16 lần']),
    why: 'Ta lấy 24 : 8 = 3. Vậy 24 gấp 3 lần 8.',
  }),
  Q({
    sec: S7,
    text: 'Mẹ 32 tuổi, con 8 tuổi. Hỏi tuổi mẹ gấp mấy lần tuổi con?',
    ...opts4('4 lần', ['3 lần', '5 lần', '24 lần']),
    why: 'Tuổi mẹ gấp tuổi con số lần là: 32 : 8 = 4 (lần).',
  }),
  Q({
    sec: S7,
    text: 'Một nửa của 18 là số nào?',
    ...opts4('9', ['6', '36', '8']),
    why: 'Một nửa của một số là số đó chia cho 2: 18 : 2 = 9.',
  }),
  Q({
    sec: S7,
    text: 'Số nào gấp 5 lần thì được 45?',
    ...opts4('9', ['8', '40', '50']),
    why: 'Số cần tìm là: 45 : 5 = 9. Thử lại: 9 × 5 = 45, đúng.',
  }),
  Q({
    sec: S7, img: save('e7q7', sceneSVG([
      { emoji: '🦋', n: 3, label: 'Nhóm 1', cols: 3 },
      { emoji: '🦋', n: 9, label: 'Nhóm 2', cols: 3 },
    ])),
    text: 'Đếm số con bướm ở hai nhóm trong hình. Hỏi số bướm ở nhóm 2 gấp mấy lần số bướm ở nhóm 1?',
    ...opts4('3 lần', ['2 lần', '6 lần', '4 lần']),
    why: 'Nhóm 1 có 3 con, nhóm 2 có 9 con. Ta lấy 9 : 3 = 3. Vậy nhóm 2 gấp 3 lần nhóm 1.',
  }),
  Q({
    sec: S7,
    text: 'Hà có 7 bông hoa, Mai có số hoa gấp đôi số hoa của Hà. Hỏi cả hai bạn có bao nhiêu bông hoa?',
    ...opts4('21 bông', ['14 bông', '17 bông', '28 bông']),
    why: 'Mai có: 7 × 2 = 14 (bông hoa). Cả hai bạn có: 7 + 14 = 21 (bông hoa).',
  }),
  Q({
    sec: S7,
    text: 'Gấp số 6 lên 4 lần rồi bớt đi 9 thì được số nào?',
    ...opts4('15', ['24', '19', '21']),
    why: 'Gấp 6 lên 4 lần được: 6 × 4 = 24. Bớt đi 9 được: 24 − 9 = 15.',
  }),
  Q({
    sec: S7,
    text: 'Chia 40 quả bóng thành 5 phần bằng nhau. Hỏi mỗi phần có bao nhiêu quả bóng?',
    ...opts4('8 quả', ['7 quả', '9 quả', '35 quả']),
    why: 'Mỗi phần có: 40 : 5 = 8 (quả bóng).',
  }),
]);

/* ══════════════ ĐỀ 8 · ĐO ĐỘ DÀI: CM · DM · M ════════════════════════════ */
const S8 = 'Đo độ dài';
de(1608, 'Đề 8 · Đơn vị đo độ dài — xăng-ti-mét, đề-xi-mét, mét', [
  Q({
    sec: S8, img: save('e8q1', rulerSVG(0, 12, { label: 'Chiếc bút chì đặt trên thước kẻ' })),
    text: 'Đọc trên thước kẻ và cho biết chiếc bút chì dài bao nhiêu xăng-ti-mét?',
    ...opts4('12 cm', ['11 cm', '13 cm', '10 cm']),
    why: 'Bút chì bắt đầu ở vạch 0 và kết thúc ở vạch 12 nên bút chì dài 12 cm.',
  }),
  Q({
    sec: S8,
    text: '1 dm bằng bao nhiêu xăng-ti-mét?',
    ...opts4('10 cm', ['1 cm', '100 cm', '20 cm']),
    why: '1 dm = 10 cm.',
  }),
  Q({
    sec: S8,
    text: 'Tính: <b>35 cm + 27 cm = ?</b>',
    ...opts4('62 cm', ['52 cm', '63 cm', '8 cm']),
    why: '35 + 27 = 62, nên 35 cm + 27 cm = 62 cm.',
  }),
  Q({
    sec: S8,
    text: '1 m bằng bao nhiêu đề-xi-mét?',
    ...opts4('10 dm', ['100 dm', '1 dm', '20 dm']),
    why: '1 m = 100 cm mà 1 dm = 10 cm, nên 1 m = 10 dm.',
  }),
  Q({
    sec: S8, img: save('e8q5', rulerSVG(3, 14, { kind: 'ribbon', label: 'Băng giấy đặt trên thước kẻ' })),
    text: 'Đọc trên thước kẻ và cho biết băng giấy dài bao nhiêu xăng-ti-mét?',
    ...opts4('11 cm', ['14 cm', '10 cm', '17 cm']),
    why: 'Băng giấy bắt đầu ở vạch 3 cm và kết thúc ở vạch 14 cm. Băng giấy dài: 14 − 3 = 11 (cm).',
  }),
  Q({
    sec: S8,
    text: 'Đoạn thẳng AB dài 3 dm, đoạn thẳng BC dài 25 cm. Hỏi đoạn thẳng AB dài hơn đoạn thẳng BC bao nhiêu xăng-ti-mét?',
    ...opts4('5 cm', ['22 cm', '2 cm', '28 cm']),
    why: 'Đổi 3 dm = 30 cm. Đoạn AB dài hơn đoạn BC: 30 − 25 = 5 (cm).',
  }),
  Q({
    sec: S8, img: save('e8q7', polylineSVG(
      [[60, 240], [230, 70], [430, 240], [560, 150]],
      ['12 cm', '18 cm', '9 cm'], { names: ['A', 'B', 'C', 'D'] },
    )),
    text: 'Tính độ dài đường gấp khúc <b>ABCD</b> trong hình bên.',
    ...opts4('39 cm', ['30 cm', '21 cm', '38 cm']),
    why: 'Độ dài đường gấp khúc bằng tổng độ dài các đoạn thẳng: 12 + 18 + 9 = 39 (cm).',
  }),
  Q({
    sec: S8,
    text: 'Băng giấy thứ nhất dài 8 dm, băng giấy thứ hai ngắn hơn băng giấy thứ nhất 25 cm. Hỏi băng giấy thứ hai dài bao nhiêu xăng-ti-mét?',
    ...opts4('55 cm', ['65 cm', '17 cm', '105 cm']),
    why: 'Đổi 8 dm = 80 cm. Băng giấy thứ hai dài: 80 − 25 = 55 (cm).',
  }),
  Q({
    sec: S8,
    text: 'Cây bút dài 15 cm, quyển vở dài hơn cây bút 9 cm. Hỏi quyển vở dài bao nhiêu xăng-ti-mét?',
    ...opts4('24 cm', ['6 cm', '23 cm', '25 cm']),
    why: 'Quyển vở dài: 15 + 9 = 24 (cm).',
  }),
  Q({
    sec: S8,
    text: 'Điền dấu thích hợp vào chỗ chấm: <b>5 dm … 45 cm</b>',
    ...opts4('&gt;', ['&lt;', '=', 'Không so sánh được']),
    why: 'Đổi 5 dm = 50 cm. Vì 50 cm > 45 cm nên 5 dm > 45 cm.',
  }),
]);

/* ══════════════ ĐỀ 9 · KI-LÔ-GAM, LÍT VÀ TIỀN VIỆT NAM ═══════════════════ */
const S9 = 'Đo lường & tiền';
de(1609, 'Đề 9 · Ki-lô-gam, lít và tiền Việt Nam', [
  Q({
    sec: S9, img: save('e9q1', moneySVG([5000, 2000, 1000], { label: 'Số tiền của Nam' })),
    text: 'Nam có các tờ tiền như hình bên. Hỏi Nam có tất cả bao nhiêu đồng?',
    ...opts4('8000 đồng', ['7000 đồng', '8500 đồng', '6000 đồng']),
    why: 'Nam có: 5000 + 2000 + 1000 = 8000 (đồng).',
  }),
  Q({
    sec: S9,
    text: 'Bao gạo nặng 25 kg, bao ngô nặng 18 kg. Hỏi cả hai bao nặng bao nhiêu ki-lô-gam?',
    ...opts4('43 kg', ['33 kg', '7 kg', '44 kg']),
    why: 'Cả hai bao nặng: 25 + 18 = 43 (kg).',
  }),
  Q({
    sec: S9, img: save('e9q3', balanceSVG({ emoji: '🍉', n: 1, cap: '1 quả dưa hấu' }, [2, 2, 2])),
    text: 'Cân ở hình bên đang thăng bằng. Hỏi quả dưa hấu nặng bao nhiêu ki-lô-gam?',
    ...opts4('6 kg', ['2 kg', '3 kg', '5 kg']),
    why: 'Quả dưa hấu cân bằng với 3 quả cân loại 2 kg nên nặng: 2 × 3 = 6 (kg).',
  }),
  Q({
    sec: S9,
    text: 'Một can đựng 10 lít nước. Mẹ dùng hết 4 lít rồi đổ thêm vào can 3 lít. Hỏi trong can có bao nhiêu lít nước?',
    ...opts4('9 lít', ['11 lít', '3 lít', '17 lít']),
    why: 'Sau khi dùng, trong can còn: 10 − 4 = 6 (lít). Đổ thêm 3 lít: 6 + 3 = 9 (lít nước).',
  }),
  Q({
    sec: S9, img: save('e9q5', moneySVG([10000], { label: 'Số tiền Hà đưa cô bán hàng' })),
    text: 'Hà đưa cô bán hàng tờ tiền như hình bên để mua một cây bút giá <b>7000 đồng</b>. Hỏi cô bán hàng phải trả lại Hà bao nhiêu tiền?',
    ...opts4('3000 đồng', ['2000 đồng', '17000 đồng', '4000 đồng']),
    why: 'Hà đưa tờ 10000 đồng. Cô bán hàng trả lại: 10000 − 7000 = 3000 (đồng).',
  }),
  Q({
    sec: S9,
    text: 'Mỗi túi đường nặng 2 kg. Hỏi 5 túi đường như thế nặng bao nhiêu ki-lô-gam?',
    ...opts4('10 kg', ['7 kg', '12 kg', '25 kg']),
    why: 'Năm túi đường nặng: 2 × 5 = 10 (kg).',
  }),
  Q({
    sec: S9,
    text: 'Một quyển vở giá 5000 đồng. Hỏi mua 4 quyển vở như thế hết bao nhiêu tiền?',
    ...opts4('20000 đồng', ['9000 đồng', '15000 đồng', '25000 đồng']),
    why: 'Mua 4 quyển vở hết: 5000 × 4 = 20000 (đồng).',
  }),
  Q({
    sec: S9,
    text: 'Hà có 20000 đồng. Hà mua một que kem giá 8000 đồng và một chiếc bánh giá 9000 đồng. Hỏi Hà còn lại bao nhiêu tiền?',
    ...opts4('3000 đồng', ['1000 đồng', '12000 đồng', '17000 đồng']),
    why: 'Hà đã tiêu hết: 8000 + 9000 = 17000 (đồng). Hà còn lại: 20000 − 17000 = 3000 (đồng).',
  }),
  Q({
    sec: S9,
    text: 'Một thùng có 20 lít nước mắm, chia đều vào 4 chiếc can. Hỏi mỗi can có bao nhiêu lít nước mắm?',
    ...opts4('5 lít', ['4 lít', '16 lít', '6 lít']),
    why: 'Mỗi can có: 20 : 4 = 5 (lít nước mắm).',
  }),
  Q({
    sec: S9,
    text: 'Con lợn nặng 45 kg, con bê nặng hơn con lợn 27 kg. Hỏi con bê nặng bao nhiêu ki-lô-gam?',
    ...opts4('72 kg', ['18 kg', '62 kg', '73 kg']),
    why: 'Con bê nặng: 45 + 27 = 72 (kg).',
  }),
]);

/* ══════════════ ĐỀ 10 · THỜI GIAN: ĐỒNG HỒ, NGÀY, THÁNG ══════════════════ */
const S10 = 'Thời gian';
de(1610, 'Đề 10 · Thời gian — đồng hồ, ngày, tháng', [
  Q({
    sec: S10, img: save('e10q1', clockSVG(8, 30)),
    text: 'Đồng hồ bên chỉ mấy giờ?',
    ...opts4('8 giờ 30 phút', ['6 giờ 40 phút', '8 giờ 6 phút', '7 giờ 30 phút']),
    why: 'Kim dài chỉ số 6 nên là 30 phút; kim ngắn đã đi qua số 8 nên là 8 giờ. Đồng hồ chỉ 8 giờ 30 phút.',
  }),
  Q({
    sec: S10, img: save('e10q2', clockSVG(3, 15)),
    text: 'Đồng hồ bên chỉ mấy giờ?',
    ...opts4('3 giờ 15 phút', ['3 giờ 3 phút', '15 giờ 3 phút', '4 giờ 15 phút']),
    why: 'Kim dài chỉ số 3 nên là 15 phút; kim ngắn vừa qua số 3 nên là 3 giờ. Đồng hồ chỉ 3 giờ 15 phút.',
  }),
  Q({
    sec: S10,
    text: 'Hôm nay là <b>thứ Ba ngày 12</b>. Hỏi Chủ nhật của tuần này là ngày mấy?',
    ...opts4('Ngày 17', ['Ngày 16', 'Ngày 18', 'Ngày 19']),
    why: 'Đếm tiếp: thứ Tư 13, thứ Năm 14, thứ Sáu 15, thứ Bảy 16, Chủ nhật 17. Vậy Chủ nhật là ngày 17.',
  }),
  Q({
    sec: S10,
    text: 'Một năm có bao nhiêu tháng có <b>31 ngày</b>?',
    ...opts4('7 tháng', ['6 tháng', '5 tháng', '8 tháng']),
    why: 'Các tháng có 31 ngày là: tháng 1, 3, 5, 7, 8, 10 và 12 — tất cả 7 tháng. Bốn tháng 4, 6, 9, 11 có 30 ngày, còn tháng 2 có 28 hoặc 29 ngày.',
  }),
  Q({
    sec: S10,
    text: 'Nam học ở trường từ 7 giờ sáng đến 11 giờ trưa. Hỏi Nam học ở trường trong bao lâu?',
    ...opts4('4 giờ', ['3 giờ', '5 giờ', '18 giờ']),
    why: 'Thời gian Nam học là: 11 − 7 = 4 (giờ).',
  }),
  Q({
    sec: S10, img: save('e10q6', clockSVG(8, 45)),
    text: 'Đồng hồ bên chỉ 8 giờ 45 phút. Giờ đó còn được đọc theo cách nào dưới đây?',
    ...opts4('9 giờ kém 15 phút', ['8 giờ kém 15 phút', '9 giờ kém 45 phút', '7 giờ kém 15 phút']),
    why: 'Từ 8 giờ 45 phút đến 9 giờ còn thiếu 15 phút nên đọc là 9 giờ kém 15 phút.',
  }),
  Q({
    sec: S10,
    text: 'Đồng hồ điện tử chỉ <b>20 giờ</b>. Hỏi lúc đó là mấy giờ tối?',
    ...opts4('8 giờ tối', ['10 giờ tối', '6 giờ tối', '9 giờ tối']),
    why: 'Buổi chiều tối lấy số giờ trừ đi 12: 20 − 12 = 8. Vậy 20 giờ là 8 giờ tối.',
  }),
  Q({
    sec: S10,
    text: 'Ngày 30 tháng 4 là <b>thứ Sáu</b>. Hỏi ngày 1 tháng 5 là thứ mấy?',
    ...opts4('Thứ Bảy', ['Chủ nhật', 'Thứ Năm', 'Thứ Hai']),
    why: 'Tháng 4 có 30 ngày nên ngày 1 tháng 5 là ngày liền sau ngày 30 tháng 4. Ngay sau thứ Sáu là thứ Bảy.',
  }),
  Q({
    sec: S10,
    text: 'Trong các tháng 1, tháng 4, tháng 7 và tháng 12, tháng nào có <b>30 ngày</b>?',
    ...opts4('Tháng 4', ['Tháng 1', 'Tháng 7', 'Tháng 12']),
    why: 'Các tháng 1, 7, 12 đều có 31 ngày, chỉ tháng 4 có 30 ngày.',
  }),
  Q({
    sec: S10,
    text: 'Bé ngủ trưa lúc 12 giờ và tỉnh dậy lúc 2 giờ chiều. Hỏi bé đã ngủ trong bao lâu?',
    ...opts4('2 giờ', ['1 giờ', '10 giờ', '3 giờ']),
    why: '2 giờ chiều chính là 14 giờ. Bé ngủ: 14 − 12 = 2 (giờ).',
  }),
]);

/* ══════════════ ĐỀ 11 · HÌNH HỌC: ĐẾM HÌNH — CHU VI ══════════════════════ */
const S11 = 'Hình học';
de(1611, 'Đề 11 · Hình học — đếm hình, chu vi, đường gấp khúc', [
  Q({
    sec: S11, img: save('e11q1', gridFigSVG(3, 1)),
    text: 'Hình bên có tất cả bao nhiêu <b>hình chữ nhật</b>?',
    ...opts4('6 hình', ['3 hình', '4 hình', '5 hình']),
    why: 'Có 3 hình chữ nhật nhỏ; ghép 2 ô liền nhau được 2 hình; ghép cả 3 ô được 1 hình. Tất cả có: 3 + 2 + 1 = 6 (hình chữ nhật).',
  }),
  Q({
    sec: S11, img: save('e11q2', triFanSVG(3)),
    text: 'Hình bên có tất cả bao nhiêu <b>hình tam giác</b>?',
    ...opts4('6 hình', ['3 hình', '4 hình', '5 hình']),
    why: 'Có 3 tam giác nhỏ; ghép 2 tam giác nhỏ liền nhau được 2 hình; cả hình lớn là 1 hình. Tất cả có: 3 + 2 + 1 = 6 (hình tam giác).',
  }),
  Q({
    sec: S11, img: save('e11q3', shapeMixSVG(['tg', 'vuong', 'tg', 'tron', 'cn', 'tg', 'tg', 'vuong', 'tron', 'tg'])),
    text: 'Đếm trong hình bên xem có bao nhiêu <b>hình tam giác</b>?',
    ...opts4('5 hình', ['4 hình', '6 hình', '3 hình']),
    why: 'Đếm lần lượt các hình tam giác (hình có 3 cạnh) trong khung: có tất cả 5 hình tam giác.',
  }),
  Q({
    sec: S11,
    text: 'Tính chu vi hình tam giác có độ dài ba cạnh lần lượt là 12 cm, 15 cm và 20 cm.',
    ...opts4('47 cm', ['37 cm', '45 cm', '27 cm']),
    why: 'Chu vi hình tam giác bằng tổng độ dài ba cạnh: 12 + 15 + 20 = 47 (cm).',
  }),
  Q({
    sec: S11, img: save('e11q5', polylineSVG(
      [[70, 80], [230, 240], [420, 90], [570, 230]],
      ['15 cm', '20 cm', '18 cm'], { names: ['M', 'N', 'P', 'Q'] },
    )),
    text: 'Tính độ dài đường gấp khúc <b>MNPQ</b> trong hình bên.',
    ...opts4('53 cm', ['35 cm', '43 cm', '38 cm']),
    why: 'Độ dài đường gấp khúc MNPQ là: 15 + 20 + 18 = 53 (cm).',
  }),
  Q({
    sec: S11,
    text: 'Một hình vuông có cạnh dài 6 cm. Tính chu vi hình vuông đó.',
    ...opts4('24 cm', ['12 cm', '18 cm', '36 cm']),
    why: 'Hình vuông có 4 cạnh bằng nhau nên chu vi là: 6 × 4 = 24 (cm).',
  }),
  Q({
    sec: S11,
    text: 'Trên một đường thẳng có 4 điểm A, B, C, D. Hỏi có tất cả bao nhiêu đoạn thẳng?',
    ...opts4('6 đoạn thẳng', ['4 đoạn thẳng', '3 đoạn thẳng', '8 đoạn thẳng']),
    why: 'Từ A có 3 đoạn: AB, AC, AD. Từ B có thêm 2 đoạn: BC, BD. Từ C có thêm 1 đoạn: CD. Tất cả có: 3 + 2 + 1 = 6 (đoạn thẳng).',
  }),
  Q({
    sec: S11, img: save('e11q8', gridFigSVG(2, 2)),
    text: 'Hình bên có tất cả bao nhiêu <b>hình vuông</b>?',
    ...opts4('5 hình', ['4 hình', '6 hình', '2 hình']),
    why: 'Có 4 hình vuông nhỏ và cả hình lớn cũng là một hình vuông. Tất cả có: 4 + 1 = 5 (hình vuông).',
  }),
  Q({
    sec: S11,
    text: 'Tính chu vi hình tứ giác có độ dài các cạnh là 5 cm, 7 cm, 9 cm và 10 cm.',
    ...opts4('31 cm', ['21 cm', '30 cm', '32 cm']),
    why: 'Chu vi hình tứ giác bằng tổng độ dài bốn cạnh: 5 + 7 + 9 + 10 = 31 (cm).',
  }),
  Q({
    sec: S11,
    text: 'Một hình tam giác có ba cạnh <b>bằng nhau</b> và chu vi là 21 cm. Hỏi mỗi cạnh dài bao nhiêu xăng-ti-mét?',
    ...opts4('7 cm', ['3 cm', '9 cm', '63 cm']),
    why: 'Ba cạnh bằng nhau nên mỗi cạnh dài: 21 : 3 = 7 (cm).',
  }),
]);

/* ══════════════ ĐỀ 12 · TỔNG HỢP NÂNG CAO ════════════════════════════════ */
const S12 = 'Tổng hợp nâng cao';
de(1612, 'Đề 12 · Tổng hợp nâng cao — tuyển chọn', [
  Q({
    sec: S12,
    text: 'Tính nhanh: <b>25 + 18 + 75 + 2</b>',
    ...opts4('120', ['110', '100', '118']),
    why: 'Ghép các số cho tròn trăm, tròn chục: (25 + 75) + (18 + 2) = 100 + 20 = 120.',
  }),
  Q({
    sec: S12, img: save('e12q2', seqSVG([1, 3, 6, 10, '?'])),
    text: 'Tìm số thích hợp thay cho dấu <b>?</b> trong dãy số bên.',
    ...opts4('15', ['14', '16', '13']),
    why: 'Khoảng cách giữa hai số liền nhau tăng dần: 1 + 2 = 3; 3 + 3 = 6; 6 + 4 = 10. Vậy số phải tìm là: 10 + 5 = 15.',
  }),
  Q({
    sec: S12,
    text: 'Có bao nhiêu số có hai chữ số mà <b>chữ số hàng đơn vị là 5</b>?',
    ...opts4('9 số', ['10 số', '8 số', '5 số']),
    why: 'Các số đó là 15; 25; 35; 45; 55; 65; 75; 85; 95 (không có số 05 vì đó không phải số có hai chữ số). Vậy có 9 số.',
  }),
  Q({
    sec: S12, img: save('e12q4', treeRowSVG(18, 3)),
    text: 'Người ta trồng cây dọc một đoạn đường như hình bên: mỗi vạch trồng một cây, trồng cả ở hai đầu đường. Hỏi trồng được bao nhiêu cây?',
    ...opts4('7 cây', ['6 cây', '8 cây', '9 cây']),
    why: 'Đoạn đường dài 18 m, cây cách cây 3 m nên có: 18 : 3 = 6 (khoảng). Trồng cả hai đầu nên số cây nhiều hơn số khoảng 1 cây: 6 + 1 = 7 (cây).',
  }),
  Q({
    sec: S12,
    text: 'Bác thợ cưa một khúc gỗ thành 5 đoạn bằng nhau, mỗi lần cưa hết 4 phút. Hỏi bác cưa xong khúc gỗ đó hết bao nhiêu phút?',
    ...opts4('16 phút', ['20 phút', '12 phút', '24 phút']),
    why: 'Cưa thành 5 đoạn thì chỉ cần cưa: 5 − 1 = 4 (lần). Thời gian cưa là: 4 × 4 = 16 (phút).',
  }),
  Q({
    sec: S12, img: save('e12q6', balanceSVG({ emoji: '🎃', n: 1, cap: '1 quả bí' }, [5, 5, 2])),
    text: 'Cân ở hình bên đang thăng bằng. Hỏi quả bí nặng bao nhiêu ki-lô-gam?',
    ...opts4('12 kg', ['10 kg', '7 kg', '15 kg']),
    why: 'Quả bí cân bằng với hai quả cân 5 kg và một quả cân 2 kg: 5 + 5 + 2 = 12 (kg).',
  }),
  Q({
    sec: S12,
    text: 'Ba bạn An, Bình, Cường xếp thành một hàng. An đứng trước Bình, Cường đứng sau Bình. Hỏi bạn nào đứng <b>giữa</b>?',
    ...opts4('Bạn Bình', ['Bạn An', 'Bạn Cường', 'Không xác định được']),
    why: 'An đứng trước Bình và Cường đứng sau Bình nên thứ tự hàng là An – Bình – Cường. Vậy Bình đứng giữa.',
  }),
  Q({
    sec: S12,
    text: 'Có 5 bạn gặp nhau, mỗi bạn đều bắt tay với tất cả các bạn còn lại, hai bạn chỉ bắt tay nhau <b>một lần</b>. Hỏi có tất cả bao nhiêu cái bắt tay?',
    ...opts4('10 cái bắt tay', ['5 cái bắt tay', '20 cái bắt tay', '15 cái bắt tay']),
    why: 'Bạn thứ nhất bắt tay 4 bạn còn lại; bạn thứ hai bắt tay thêm 3 bạn; bạn thứ ba thêm 2 bạn; bạn thứ tư thêm 1 bạn. Tất cả có: 4 + 3 + 2 + 1 = 10 (cái bắt tay).',
  }),
  Q({
    sec: S12,
    text: 'Bạn Minh nghĩ ra một số, đem cộng với 15 rồi bớt đi 8 thì được 27. Hỏi Minh đã nghĩ ra số nào?',
    ...opts4('20', ['34', '50', '4']),
    why: 'Tính ngược từ cuối: trước khi bớt 8 là 27 + 8 = 35; trước khi cộng 15 là 35 − 15 = 20. Vậy số Minh nghĩ là 20.',
  }),
  Q({
    sec: S12,
    text: 'Tìm <b>x</b>, biết: <b>x × 4 = 36</b>',
    ...opts4('x = 9', ['x = 8', 'x = 32', 'x = 40']),
    why: 'x là thừa số chưa biết nên x = 36 : 4 = 9. Thử lại: 9 × 4 = 36, đúng.',
  }),
]);

/* ══════════════════════════════ XUẤT FILE ══════════════════════════════════ */
const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
function fmtQ(q) {
  const img = q.img ? `, img: '${q.img}'` : '';
  return `    { sec: '${esc(q.sec)}', name: '${esc(q.name)}', pts: ${q.pts},\n`
       + `      text: '${esc(q.text)}'${img},\n`
       + `      opts: o4('${q.opts.map(esc).join("', '")}'), ans: '${q.ans}',\n`
       + `      why: '${esc(q.why)}' },`;
}
function fmtExam(e) {
  const total = e.questions.reduce((t, q) => t + q.pts, 0);
  if (Math.abs(total - 10) > 0.001) throw new Error(`Đề "${e.title}" có tổng điểm ${total} (phải là 10)`);
  e.questions.forEach((q) => {
    if (new Set(q.opts).size !== 4) throw new Error(`Đề "${e.title}" · ${q.name}: phương án bị trùng`);
  });
  return `{\n  id: ${e.id}, title: '${esc(e.title)}', time: ${e.time},\n  questions: [\n${e.questions.map(fmtQ).join('\n')}\n  ],\n},`;
}

const nQ = EX.reduce((t, e) => t + e.questions.length, 0);
const nImg = EX.reduce((t, e) => t + e.questions.filter((q) => q.img).length, 0);
const pct = Math.round(nImg / nQ * 100);

const HEAD = `// TOÁN NÂNG CAO LỚP 2 — TUYỂN CHỌN · ${EX.length} đề × 10 câu = ${nQ} câu (${nImg} câu có hình, ${pct}%).
// SINH TỰ ĐỘNG bởi tools/gen-nangcao2.mjs — sửa nội dung trong script rồi chạy lại:
//     node tools/gen-nangcao2.mjs
//
// Nguồn tham khảo DẠNG BÀI (toàn bộ câu hỏi đều được biên soạn lại, đổi số liệu và
// tình huống, có lời giải chi tiết):
//   • "500 bài toán có lời văn lớp 2" — VietJack: 10 dạng toán có lời văn
//     (thêm vào · bớt đi · nhiều hơn · ít hơn · hai bước tính · nhân · chia ·
//      gấp lên nhiều lần · đo lường · tổng hợp).
//   • "Tuyển chọn các bài toán nâng cao lớp 2" (đối chiếu thêm Monkey, VnDoc,
//     KiddiHub, Giáo viên Việt Nam): cấu tạo số · sơ đồ đoạn thẳng · tính ngược
//     từ cuối · trồng cây – cưa gỗ · suy luận · hình học.
//
// Mức độ: HSG cấp trường / cấp huyện, bám chương trình lớp 2 — phạm vi 1000,
// bảng nhân chia 2–9 (riêng × 2 và : 2 được vượt ngoài bảng), đo lường, thời gian,
// hình học phẳng cơ bản. Hình vẽ bằng code (tools/hinh-art.mjs + tools/nc2-art.mjs),
// đáp án lấy thẳng từ dữ liệu vẽ ra hình nên hình và lời giải không bao giờ lệch nhau.
`;

const body = `${HEAD}
const NANGCAO2 = [
${EX.map(fmtExam).join('\n')}
];

// Chèn môn "Toán nâng cao lớp 2" ngay sau môn Toán 2 qua hình
{
  const i = SUBJECTS.findIndex(s => s.id === 'hinh2');
  SUBJECTS.splice(i < 0 ? 3 : i + 1, 0, {
    id: 'nc2', name: 'Toán nâng cao', short: 'Nâng cao 2', icon: '🥇', grade: 2,
    exams: NANGCAO2, ready: true,
    heroTitle: 'Toán nâng cao lớp 2 — tuyển chọn ${EX.length} chuyên đề',
    heroMeta: '📚 ${EX.length} đề &nbsp;•&nbsp; ${nQ} câu &nbsp;•&nbsp; ⏱ 25 phút mỗi đề &nbsp;•&nbsp; ${nImg} câu có hình (${pct}%) &nbsp;•&nbsp; lời giải chi tiết',
  });
}
`;
fs.writeFileSync('web/data-nangcao2.js', body);
console.log(`web/data-nangcao2.js: ${EX.length} đề · ${nQ} câu · ${nImg} câu có hình (${pct}%) · ${assetCount} hình SVG`);
