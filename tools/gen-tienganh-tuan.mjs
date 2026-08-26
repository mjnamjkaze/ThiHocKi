/* ============================================================================
   gen-tienganh-tuan.mjs — sinh mục "TIẾNG ANH THEO TUẦN"

   Chạy:  node tools/gen-tienganh-tuan.mjs
   Xuất:  web/assets/ta/*.svg          (hình vẽ bằng code, không dùng ảnh stock)
          web/data-tienganh-tuan.js    (mục mới cho lớp 2)

   Mỗi TUẦN = 4 bài × 10 câu, đủ 5 kiểu luyện tập:
     · chọn từ đúng cho ảnh   (trắc nghiệm, phương án là chữ hoặc là ảnh)
     · nối ảnh với từ         (type: 'match')
     · gõ từ                  (type: 'type')
     · ghép câu               (type: 'order')
     · đọc hiểu               (q.read = đoạn văn đặt trên câu hỏi)

   Thêm tuần mới = thêm một khối vào mảng WEEKS ở cuối file rồi chạy lại script.
   ========================================================================== */
'use strict';

import fs from 'fs';
import path from 'path';
import { roomSVG, yardSVG, houseSVG, cardSVG, compostSVG } from './ta-art.mjs';

const ASSETS = 'web/assets/ta';
const TA = 'assets/ta/';
fs.rmSync(ASSETS, { recursive: true, force: true });
fs.mkdirSync(ASSETS, { recursive: true });

let assetCount = 0;
function save(name, content) {
  fs.writeFileSync(path.join(ASSETS, name + '.svg'), content);
  assetCount++;
  return TA + name + '.svg';
}

/* ─────────────────────────────── HÌNH VẼ ─────────────────────────────────
   Đặt tên theo nội dung để câu hỏi đọc ra là hiểu hình vẽ gì.              */
const BED = ['🛏️', '🧸'];
const KIT = ['🍳', '🥘', '🧂'];

const IMG = {
  bedroom:     save('bedroom',      roomSVG({ items: BED })),
  kitchen:     save('kitchen',      roomSVG({ items: KIT })),
  yard:        save('yard',         yardSVG({ items: ['⚽'] })),
  house:       save('house',        houseSVG({})),

  houseAmy:    save('house_amy',    houseSVG({ tag: 'Amy' })),
  kitchenMom:  save('kitchen_mom',  roomSVG({ items: KIT, tag: 'Mom' })),
  kitchenAmy:  save('kitchen_amy',  roomSVG({ items: KIT, tag: 'Amy' })),
  bedAmy:      save('bedroom_amy',  roomSVG({ items: BED, tag: 'Amy' })),
  bedLaura:    save('bedroom_laura',roomSVG({ items: BED, tag: 'Laura' })),
  bedBrother:  save('bedroom_bro',  roomSVG({ items: BED, tag: 'my brother' })),

  cooking:     save('cooking',      roomSVG({ items: ['👩‍🍳', '🍳'] })),
  reading:     save('reading',      roomSVG({ items: ['👧', '📖'] })),
  kicking:     save('kicking',      yardSVG({ items: ['👦', '⚽'] })),

  compostQ:    save('compost_q',    compostSVG({ label: false })),

  cardBall:    save('card_ball',    cardSVG({ emoji: '⚽' })),
  cardBook:    save('card_book',    cardSVG({ emoji: '📖' })),
  cardBed:     save('card_bed',     cardSVG({ emoji: '🛏️' })),
  cardPan:     save('card_pan',     cardSVG({ emoji: '🍳' })),
  cardPizza:   save('card_pizza',   cardSVG({ emoji: '🍕' })),
};

/* ─────────────────────── trợ giúp viết câu hỏi ──────────────────────────
   o()   4 phương án bằng chữ         · oi()  4 phương án bằng ảnh
   m()   nối ảnh với từ: nhận các cặp [ảnh, từ] theo đúng thứ tự ảnh hiển
         thị, tự xáo cột từ bằng hoán vị cố định (chạy lại luôn ra y hệt)
         rồi tính sẵn chuỗi đáp án '2,0,3,1'.
   ord() ghép câu: nhận câu đúng + thứ tự xáo thẻ từ.                      */
const o = (a, b, c, d) => [a, b, c, d];
const oi = (a, b, c, d) => [a, b, c, d];

const PERM = [[2, 0, 3, 1], [1, 3, 0, 2], [3, 1, 2, 0], [0, 2, 1, 3]];
let permI = 0;
function m(pairs) {
  const p = PERM[permI++ % PERM.length];
  const right = p.map(k => pairs[k][1]);              // cột từ sau khi xáo
  const ans = pairs.map((_, i) => right.indexOf(pairs[i][1])).join(',');
  return { left: pairs.map(x => x[0]), right, ans };
}
function ord(sentence, shuffle) {
  const words = sentence.split(' ');
  return { tokens: shuffle.map(k => words[k]), ans: sentence };
}

/* ═══════════════════════════════ TUẦN 1 ═══════════════════════════════════
   Language Lab — "It's Her House": Whose …? / It's …'s
   Từ vựng: bedroom · kitchen · house · brother · sister · cooking · reading ·
            kicking · yard · ball · compost

   QUY TẮC: mọi chữ HỌC SINH ĐỌC (text · opts · why · hint · read · title) đều
   viết bằng TIẾNG ANH, không kèm bản dịch tiếng Việt — để học sinh tự dịch.
   Câu nào trước đây hỏi "… nghĩa là gì?" thì đổi thành câu hỏi tiếng Anh
   tương đương, hoặc dựa vào hình để không cần tiếng Việt vẫn hiểu đề.       */

const READ1 = `<b>Amy's house</b><br>
This is Amy's house. It has a big yard. Amy's brother is kicking a ball in the yard.
Amy's mom is cooking in the kitchen. Amy is reading a book in her bedroom.
Her sister is putting fruit peels in the compost.`;

const WEEKS = [{
  week: 1,
  lesson: "Language Lab — It's Her House",
  exams: [
/* ───────────────────────────── Bài 1 · Từ vựng ────────────────────────── */
{
  id: 1401, title: 'Week 1 · Part 1 — Picture words', time: 15,
  questions: [
    { sec: 'Rooms', text: '<b>Which room is this?</b>', img: IMG.bedroom,
      opts: o('kitchen', 'bedroom', 'yard', 'house'), ans: 'B',
      why: 'There is a <b>bed</b> in the room, so it is a <b>bedroom</b>.' },

    { sec: 'Rooms', text: '<b>Which room is this?</b>', img: IMG.kitchen,
      opts: o('bedroom', 'yard', 'kitchen', 'ball'), ans: 'C',
      why: 'There is a pan and a pot for cooking, so it is a <b>kitchen</b>.' },

    { sec: 'Places', text: '<b>Which place is this?</b>', img: IMG.yard,
      opts: o('the yard', 'the kitchen', 'the bedroom', 'the compost'), ans: 'A',
      why: 'Grass, a fence and a tree outside the house make a <b>yard</b>.' },

    { sec: 'Places', text: '<b>What is this?</b>', img: IMG.house,
      opts: o('a yard', 'a kitchen', 'a ball', 'a house'), ans: 'D',
      why: 'It has a roof, a door and windows, so it is a <b>house</b>.' },

    { sec: 'Words', optImgs: true, text: '<b>Which picture shows a ball?</b>',
      opts: oi(IMG.cardBook, IMG.cardBall, IMG.cardBed, IMG.cardPan), ans: 'B',
      why: 'Picture B is a <b>ball</b>. The others are a book, a bed and a pan.' },

    { sec: 'Words', optImgs: true, text: '<b>Which picture shows the compost?</b>',
      opts: oi(IMG.kitchen, IMG.yard, IMG.compostQ, IMG.bedroom), ans: 'C',
      why: 'The <b>compost</b> is the bin with fruit and vegetable peels in it. They turn into food for the plants.' },

    { sec: 'Family', text: '<b>Nam is a boy. He is Amy’s ______.</b>',
      opts: o('sister', 'brother', 'mom', 'friend'), ans: 'B',
      why: 'A boy in your family is your <b>brother</b>. A girl is your <b>sister</b>.' },

    { sec: 'Family', text: '<b>Mai is a girl. She is Amy’s ______.</b>',
      opts: o('sister', 'dad', 'brother', 'teacher'), ans: 'A',
      why: 'A girl in your family is your <b>sister</b>.' },

    { sec: 'Rooms', text: '<b>We cook food in the ______.</b>',
      opts: o('bedroom', 'yard', 'ball', 'kitchen'), ans: 'D',
      why: 'We <b>cook</b> in the <b>kitchen</b>.' },

    { sec: 'Rooms', text: '<b>We sleep in the ______.</b>',
      opts: o('bedroom', 'kitchen', 'compost', 'yard'), ans: 'A',
      why: 'We <b>sleep</b> in the <b>bedroom</b>.' },
  ],
},

/* ──────────────────── Bài 2 · Nối ảnh với từ & gõ từ ───────────────────── */
{
  id: 1402, title: 'Week 1 · Part 2 — Match & spell', time: 15,
  questions: [
    { sec: 'Matching', type: 'match', text: '<b>Match each picture with the right word.</b>',
      ...m([[IMG.bedroom, 'bedroom'], [IMG.kitchen, 'kitchen'], [IMG.yard, 'yard'], [IMG.house, 'house']]),
      why: 'A bed goes with <b>bedroom</b>, a pan and a pot go with <b>kitchen</b>, grass and a fence go with <b>yard</b>, and a roof with a door goes with <b>house</b>.' },

    { sec: 'Matching', type: 'match', text: '<b>Match each picture with the right word.</b>',
      ...m([[IMG.cooking, 'cooking'], [IMG.reading, 'reading'], [IMG.kicking, 'kicking'], [IMG.compostQ, 'compost']]),
      why: 'Standing at the pan is <b>cooking</b>, holding a book is <b>reading</b>, playing football is <b>kicking</b>, and the bin of peels is the <b>compost</b>.' },

    { sec: 'Spelling', type: 'type', text: '<b>Write the name of this room.</b>',
      img: IMG.kitchen, ans: 'kitchen', hint: 'k _ _ _ _ _ _',
      why: 'The room with a pan and a pot for cooking is the <b>kitchen</b> — 7 letters.' },

    { sec: 'Spelling', type: 'type', text: '<b>Write the name of this room.</b>',
      img: IMG.bedroom, ans: 'bedroom', hint: 'b _ _ _ _ _ _',
      why: '<b>bedroom</b> = bed + room, the room where you sleep.' },

    { sec: 'Spelling', type: 'type', text: '<b>Write the name of this place.</b>',
      img: IMG.yard, ans: 'yard', hint: 'y _ _ _',
      why: 'The piece of grass next to a house is a <b>yard</b> — 4 letters.' },

    { sec: 'Spelling', type: 'type', text: '<b>Write this word in English.</b>',
      img: IMG.cardBall, ans: 'ball', hint: 'b _ _ _',
      why: 'You kick it and it is round: a <b>ball</b>.' },

    { sec: 'Vocabulary', type: 'type', text: '<b>A girl in your family is your ______.</b>',
      ans: 'sister', hint: 's _ _ _ _ _',
      why: 'A girl in your family is your <b>sister</b>.' },

    { sec: 'Vocabulary', type: 'type', text: '<b>A boy in your family is your ______.</b>',
      ans: 'brother', hint: 'b _ _ _ _ _ _',
      why: 'A boy in your family is your <b>brother</b>.' },

    { sec: 'Spelling', type: 'type', text: '<b>We put fruit peels in it to feed the plants. What is it?</b>',
      img: IMG.compostQ, ans: 'compost', hint: 'c _ _ _ _ _ _',
      why: 'Peels go into the <b>compost</b> and slowly turn into food for the plants.' },

    { sec: 'Spelling', type: 'type', text: '<b>Write this word in English.</b>',
      img: IMG.house, ans: 'house', alts: ['a house'], hint: 'h _ _ _ _',
      why: 'A building with a roof, a door and windows is a <b>house</b>.' },
  ],
},

/* ─────────────── Bài 3 · Mẫu câu Whose …? — It's …'s ──────────────────── */
{
  id: 1403, title: "Week 1 · Part 3 — Whose…? · It's …'s", time: 15,
  questions: [
    { sec: 'Whose', text: '<b>Look at the name on the house. Whose is it?</b>', img: IMG.houseAmy,
      opts: o("It's Laura's house.", "It's my house.", "It's Amy's house.", "It's Mom's house."), ans: 'C',
      why: 'The name tag says <b>Amy</b>, so we say <b>It’s Amy’s house.</b> Add <b>’s</b> after the name to show who it belongs to.' },

    { sec: 'Whose', text: '<b>Whose kitchen is this?</b>', img: IMG.kitchenMom,
      opts: o("It's Mom's.", "It's Amy's.", "It's my brother's.", "It's Laura's."), ans: 'A',
      why: 'The tag in the kitchen says <b>Mom</b>, so we answer <b>It’s Mom’s.</b> — we do not have to say “kitchen” again.' },

    { sec: 'Sentence', type: 'order', img: IMG.houseAmy,
      text: '<b>Look at the picture. Put the words in order to answer:</b> Whose house is it?',
      ...ord("It's Amy's house.", [2, 0, 1]),
      why: '<b>It’s</b> + <b>Amy’s</b> + <b>house.</b> The owner comes BEFORE the thing.' },

    { sec: 'Sentence', type: 'order', img: IMG.bedBrother,
      text: '<b>Look at the picture. Put the words in order to answer:</b> Whose bedroom is it?',
      ...ord("It's my brother's bedroom.", [3, 1, 0, 2]),
      why: 'It’s + my brother’s + bedroom. The <b>’s</b> goes after <b>brother</b> because the room belongs to him.' },

    { sec: 'Sentence', type: 'order', img: IMG.cardPizza,
      text: '<b>Put the words in order to make a question about the owner.</b>',
      ...ord('Whose pizza is it?', [1, 3, 0, 2]),
      why: 'A question about the owner starts with <b>Whose</b> + the thing + <b>is it?</b> → <b>Whose pizza is it?</b>' },

    { sec: 'Sentence', type: 'order',
      text: '<b>The pizza belongs to Laura. Put the words in order to answer:</b> Whose pizza is it?',
      ...ord("It's Laura's pizza.", [1, 2, 0]),
      why: 'It’s + Laura’s + pizza. This answers the question “Whose pizza is it?”.' },

    { sec: 'Meaning', text: '<b>Which question asks about the owner?</b>',
      opts: o('What is it?', 'Whose is it?', 'Where is it?', 'How big is it?'), ans: 'B',
      why: '<b>Whose</b> asks WHO something belongs to. <b>What</b> asks for the thing and <b>Where</b> asks for the place.' },

    { sec: 'Grammar', text: '<b>Which sentence is CORRECT?</b>',
      opts: o("It's Amy house.", "It's house Amy.", "It's Amy's house.", "It's the Amy house."), ans: 'C',
      why: 'To show the house belongs to Amy, add <b>’s</b> after her name: <b>Amy’s house</b>.' },

    { sec: 'Grammar', text: '<b>“Whose bedroom is this?” Which answer is best?</b>',
      opts: o("It's a bedroom.", 'Yes, it is.', "It's very big.", "It's my sister's."), ans: 'D',
      why: 'A <b>Whose…?</b> question asks for the owner, so the answer names a person: <b>It’s my sister’s.</b>' },

    { sec: 'Grammar', type: 'type', text: '<b>Write the missing word:</b> ______ ball is it? — It’s Amy’s.',
      ans: 'whose', hint: 'w _ _ _ _',
      why: 'Use <b>Whose</b> to ask who something belongs to: Whose ball is it?' },
  ],
},

/* ───────────────────── Bài 4 · Đọc hiểu & ôn tập tuần ──────────────────── */
{
  id: 1404, title: 'Week 1 · Part 4 — Reading & review', time: 15,
  questions: [
    { sec: 'Reading', read: READ1, text: '<b>Whose house is it?</b>',
      opts: o("It's Laura's house.", "It's Amy's house.", "It's her brother's house.", "It's Mom's house."), ans: 'B',
      why: 'The first line says: “This is <b>Amy’s house</b>.”' },

    { sec: 'Reading', read: READ1, text: '<b>Where is Amy?</b>',
      opts: o('In the kitchen.', 'In the yard.', 'In her bedroom.', 'At school.'), ans: 'C',
      why: 'The text says: “Amy is reading a book <b>in her bedroom</b>.”' },

    { sec: 'Reading', read: READ1, text: "<b>What is Amy's brother doing?</b>",
      opts: o('He is reading.', 'He is cooking.', 'He is sleeping.', 'He is kicking a ball.'), ans: 'D',
      why: 'The text says: “Amy’s brother is <b>kicking a ball</b> in the yard.”' },

    { sec: 'Reading', read: READ1, text: '<b>Who is cooking?</b>',
      opts: o("Amy's mom.", 'Amy.', "Amy's sister.", "Amy's brother."), ans: 'A',
      why: 'The text says: “<b>Amy’s mom</b> is cooking in the kitchen.”' },

    { sec: 'Reading', read: READ1, text: '<b>What does her sister put in the compost?</b>',
      opts: o('A ball.', 'A book.', 'Fruit peels.', 'A pizza.'), ans: 'C',
      why: 'The text says: “Her sister is putting <b>fruit peels</b> in the compost.”' },

    { sec: 'Reading', read: READ1, type: 'type',
      text: '<b>Read the text again. Fill in one word:</b> Amy is ______ a book in her bedroom.',
      ans: 'reading', hint: 'r _ _ _ _ _ _',
      why: 'The text says “Amy is <b>reading</b> a book…”. read → <b>reading</b>.' },

    { sec: 'Actions', text: '<b>What is Mom doing?</b>', img: IMG.cooking,
      opts: o('She is reading.', 'She is cooking.', 'She is kicking.', 'She is sleeping.'), ans: 'B',
      why: 'She is standing at the pan in the kitchen, so <b>She is cooking.</b> (cook → cooking)' },

    { sec: 'Actions', type: 'order', img: IMG.kicking,
      text: '<b>Look at the picture. Put the words in order.</b>',
      ...ord('He is kicking the ball.', [2, 4, 0, 3, 1]),
      why: 'The boy is playing football in the yard: <b>He is kicking the ball.</b>' },

    { sec: 'Whose', optImgs: true, text: "<b>Which picture shows Amy's bedroom? Look at the name tags too.</b>",
      opts: oi(IMG.bedLaura, IMG.kitchenAmy, IMG.bedAmy, IMG.yard), ans: 'C',
      why: 'It must be BOTH a <b>bedroom</b> (it has a bed) and tagged <b>Amy</b>. Picture B is Amy’s kitchen and picture A is Laura’s bedroom.' },

    { sec: 'Whose', type: 'type', text: '<b>Look at the name tag. Fill in one word:</b> It’s ______ kitchen.',
      img: IMG.kitchenMom, ans: "Mom's", alts: ["mom's", "my mom's", "mother's"], hint: "M _ _ ’ _",
      why: 'Add <b>’s</b> after the owner: <b>Mom’s</b> → It’s <b>Mom’s</b> kitchen.' },
  ],
},
  ],
}];

/* ═══════════════════════ xuất ra file dữ liệu ════════════════════════════ */
const q = (s) => "'" + String(s).replace(/\s*\n\s*/g, ' ').replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
const arr = (a) => '[' + a.map(q).join(', ') + ']';

/* Đoạn văn đọc hiểu dùng lại cho nhiều câu → cắt ra thành hằng số riêng,
   file dữ liệu không phải lặp lại cả đoạn ở từng câu. */
const READS = [];
function readVar(text) {
  let i = READS.indexOf(text);
  if (i < 0) { READS.push(text); i = READS.length - 1; }
  return `READ${i + 1}`;
}

function fmtQ(x, i) {
  const L = [`      sec: ${q(x.sec)}, name: ${q('Question ' + (i + 1))}, pts: 1`];
  if (x.type) L.push(`type: ${q(x.type)}`);
  let s = `    {\n${L.join(', ')},\n      text: ${q(x.text)},\n`;
  if (x.read) s += `      read: ${readVar(x.read)},\n`;
  if (x.img) s += `      img: ${q(x.img)},\n`;
  if (x.opts) {
    s += x.optImgs
      ? `      optImgs: true,\n      opts: oimg(${x.opts.map(q).join(', ')}),\n`
      : `      opts: o4(${x.opts.map(q).join(', ')}),\n`;
  }
  if (x.tokens) s += `      tokens: ${arr(x.tokens)},\n`;
  if (x.left) s += `      left: ${arr(x.left)},\n      right: ${arr(x.right)},\n`;
  if (x.alts) s += `      alts: ${arr(x.alts)},\n`;
  if (x.hint) s += `      hint: ${q(x.hint)},\n`;
  s += `      ans: ${q(x.ans)}, why: ${q(x.why)},\n    },`;
  return s;
}

const EX = WEEKS.flatMap(w => w.exams);
const fmtExam = (e) =>
  `{\n  id: ${e.id}, title: ${q(e.title)}, time: ${e.time},\n  questions: [\n`
  + e.questions.map(fmtQ).join('\n') + `\n  ],\n},`;

const nQ = EX.reduce((t, e) => t + e.questions.length, 0);
const nImg = EX.reduce((t, e) => t + e.questions.filter(x => x.img || x.optImgs || x.left).length, 0);
const pct = Math.round(nImg / nQ * 100);
const kinds = {};
for (const e of EX) for (const x of e.questions) kinds[x.type || 'mcq'] = (kinds[x.type || 'mcq'] || 0) + 1;

const HEAD = `// TIẾNG ANH THEO TUẦN — ${WEEKS.length} tuần × 4 bài × 10 câu = ${nQ} câu (${nImg} câu có hình, ${pct}%).
// SINH TỰ ĐỘNG bởi tools/gen-tienganh-tuan.mjs — sửa nội dung trong script rồi chạy lại:
//     node tools/gen-tienganh-tuan.mjs
//
// Mỗi tuần học một bài, chia thành 4 phần: từ vựng qua tranh → nối ảnh & gõ từ →
// mẫu câu (ghép câu) → đọc hiểu và ôn tập. Kiểu câu hỏi: ${Object.entries(kinds).map(([k, v]) => k + ' ' + v).join(' · ')}.
//
// Các kiểu bài 'type' (gõ từ) · 'order' (ghép câu) · 'match' (nối ảnh với từ) do
// web/app.js xử lý — xem phần "CHẤM BÀI — dùng chung cho mọi kiểu câu hỏi".
// Toàn bộ hình vẽ bằng code trong tools/ta-art.mjs (assets/ta/): tên chủ sở hữu
// nằm trên BIỂN TÊN trong hình nên câu hỏi "Whose …?" luôn có đủ dữ kiện.
`;

const WEEKLIST = WEEKS.map(w => `Week ${w.week}: ${w.lesson}`).join(' · ');

// phải chạy TRƯỚC khi ghép chuỗi: fmtQ vừa xuất câu hỏi vừa gom các đoạn đọc
const examsSrc = EX.map(fmtExam).join('\n');

const body = `${HEAD}
// phương án là ẢNH (chọn từ đúng cho ảnh)
const oimg = (a, b, c, d) => [{ k: 'A', img: a }, { k: 'B', img: b }, { k: 'C', img: c }, { k: 'D', img: d }];

${READS.map((t, i) => `const READ${i + 1} = ${q(t)};`).join('\n')}

const TA_TUAN = [
${examsSrc}
];

SUBJECTS.push({
  id: 'ta-tuan', name: 'Tiếng Anh theo tuần', short: 'Tiếng Anh tuần', icon: '🗣️', grade: 2,
  exams: TA_TUAN, ready: true,
  heroTitle: ${q('Tiếng Anh theo tuần — ' + WEEKLIST)},
  heroMeta: '📚 ${EX.length} bài &nbsp;•&nbsp; ${nQ} câu &nbsp;•&nbsp; ⏱ 15 phút mỗi bài &nbsp;•&nbsp; nhìn tranh · nối ảnh · gõ từ · ghép câu · đọc hiểu',
});
`;

fs.writeFileSync('web/data-tienganh-tuan.js', body);

/* Trang xem nhanh toàn bộ hình (chỉ dùng lúc phát triển, đã bị .gitignore bỏ qua) */
const files = fs.readdirSync(ASSETS).sort();
fs.writeFileSync('web/_preview_ta.html',
  `<!doctype html><meta charset=utf-8><title>Tiếng Anh theo tuần — assets</title>`
  + `<style>body{font:14px system-ui;background:#fafafa;margin:16px}h1{font-size:18px}`
  + `.g{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}`
  + `figure{margin:0;background:#fff;border:1px solid #ddd;border-radius:8px;padding:8px}`
  + `img{width:100%;height:190px;object-fit:contain}`
  + `figcaption{font-size:11px;color:#666;text-align:center;margin-top:4px}</style>`
  + `<h1>Tiếng Anh theo tuần — ${files.length} hình</h1><div class=g>`
  + files.map(f => `<figure><img src="${TA}${f}"><figcaption>${f}</figcaption></figure>`).join('\n')
  + `</div>\n`);

console.log(`web/data-tienganh-tuan.js: ${EX.length} bài · ${nQ} câu · ${nImg} câu có hình (${pct}%) · ${assetCount} hình SVG`);
console.log('xem nhanh hình: web/_preview_ta.html');
console.log('kiểu bài:', Object.entries(kinds).map(([k, v]) => `${k}=${v}`).join(', '));
