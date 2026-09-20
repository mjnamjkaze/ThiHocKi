/* ============================================================================
   gen-tienganh23-art.mjs — sinh hình minh hoạ cho Tiếng Anh lớp 2 và lớp 3.

   Chạy:  node tools/gen-tienganh23-art.mjs
   Xuất:  web/assets/ta2/*.svg  ·  web/assets/ta3/*.svg      (vẽ bằng code)
          và CHÈN trường  img:  vào đúng câu hỏi trong
          web/data-tienganh2.js  ·  web/data-tienganh3.js

   Chạy lại bao nhiêu lần cũng cho kết quả như nhau: script gỡ hết img: cũ của
   hai môn này trước khi chèn lại theo bảng MAP2 / MAP3 bên dưới.

   BẢNG MAP: { <id đề> : { <số thứ tự câu 1-10> : '<tên hình>|<cách vẽ>' } }
   Ghi 'tên hình' không kèm '|…' nghĩa là dùng lại hình đã khai báo trước đó.

   Cách vẽ (spec):
     pic:<emoji>              thẻ tranh một vật / một hành động
     count:<emoji>:<n>        n vật xếp hàng — đếm được
     blank:<mẫu>:<emoji>      từ khuyết "c __ t" kèm tranh gợi ý
     place:<on|in|under|behind|nextto|between|above>   vị trí đồ vật
     compare:<a>:<b>          hai vật to/nhỏ cạnh nhau
     two:<a>:<b>:<nhãn a>:<nhãn b>                     hai cảnh cạnh nhau
     weather:<emoji>[:<emoji phụ>]                     khung trời
     clock:<giờ>[:<phút>]     mặt đồng hồ
     table:<tiêu đề|ô|ô>;<hàng>;…                      bảng dữ liệu
     words:<từ>,<từ>,…        dãy thẻ từ (xếp thứ tự ABC)
     book                     bìa sách có nhãn ①②③
     bee                      sơ đồ con ong (đếm chân, cánh)
   ========================================================================== */
'use strict';

import fs from 'fs';
import path from 'path';
import {
  picSVG, countSVG, blankSVG, placeSVG, compareSVG, twoSVG,
  weatherSVG, clockSVG, tableSVG, wordsSVG, bookSVG, beeSVG,
} from './ta23-art.mjs';

/* ─────────────────────────── LỚP 2 ─────────────────────────── */
const MAP2 = {
  9601: { 1: 'cat|pic:🐱', 2: 'bed|pic:🛏️', 3: 'pig|pic:🐷', 4: 'dog|pic:🐶', 5: 'sun|pic:☀️',
          6: 'blank_cat|blank:c __ t:🐱', 7: 'kite|pic:🪁', 10: 'hop|pic:🐰' },
  9602: { 2: 'kite', 3: 'hat|pic:👒', 5: 'home|pic:🏠', 6: 'cube|pic:🧊', 7: 'cake|pic:🎂',
          8: 'tree|pic:🌳', 10: 'rope|pic:🪢' },
  9603: { 1: 'ship|pic:🚢', 2: 'chair|pic:🪑', 3: 'three|count:⭐:3', 4: 'whale|pic:🐋',
          5: 'sheep|pic:🐑', 6: 'watch|pic:⌚', 8: 'brush|pic:🪥', 10: 'chick|pic:🐥' },
  9604: { 1: 'flag|pic:🚩', 2: 'green|pic:🌿', 3: 'star|pic:⭐', 4: 'swim|pic:🏊',
          5: 'hand|pic:✋', 7: 'bee|pic:🐝', 10: 'clock|pic:🕐' },
  9605: { 3: 'school|pic:🏫', 4: 'teacher|pic:👩‍🏫', 7: 'eight|count:🍎:8',
          10: 'week|table:Day|Lesson;Monday|Maths;Tuesday|English;Wednesday|Art' },
  9606: { 1: 'grandpa|pic:👴', 7: 'grandma|pic:👵', 8: 'photo|pic:📷',
          9: 'four_people|count:🧍:4', 10: 'boy|pic:👦' },
  9607: { 1: 'pencil|pic:✏️', 3: 'ruler|pic:📏', 4: 'schoolbag|pic:🎒', 6: 'chair',
          9: 'three_pencils|count:✏️:3', 10: 'pan|pic:🍳' },
  9608: { 1: 'cow|pic:🐄', 2: 'bird|pic:🐦', 3: 'fish|pic:🐟', 4: 'kitten|pic:🐈',
          5: 'puppy|pic:🐕', 6: 'duck|pic:🦆', 7: 'tiger|pic:🐯', 9: 'elephant|pic:🐘',
          10: 'two_cats|count:🐱:2' },
  9609: { 1: 'apple|pic:🍎', 2: 'milk|pic:🥛', 3: 'carrot|pic:🥕', 5: 'rice|pic:🍚',
          6: 'water|pic:💧', 8: 'two_bananas|count:🍌:2', 9: 'banana|pic:🍌', 10: 'juice|pic:🧃' },
  9610: { 1: 'sunny|weather:☀️', 2: 'green', 3: 'snow|weather:❄️', 4: 'orange_c|pic:🟠',
          5: 'triangle|pic:🔺', 6: 'square|pic:⬜', 7: 'circle|pic:⭕', 8: 'rectangle|pic:🟧',
          10: 'shoes|pic:👟' },
  9611: { 1: 'eyes|pic:👀', 2: 'ear|pic:👂', 3: 'nose|pic:👃', 4: 'leg|pic:🦵',
          5: 'two_hands|count:✋:2', 6: 'shoes', 7: 'cap|pic:🧢', 8: 'coat|pic:🧥',
          10: 'trousers|pic:👖' },
  9612: { 1: 'sunny', 2: 'rainy|weather:🌧️:☂️', 3: 'snow',
          4: 'week7|table:Day;Monday;Tuesday;Wednesday;Thursday;Friday;Saturday;Sunday',
          5: 'week7', 6: 'week7',
          7: 'months|table:Month;January;February;March;April', 9: 'months' },
  9613: { 1: 'two_books|count:📕:2', 3: 'two_babies|count:👶:2', 5: 'foot|pic:🦶',
          9: 'tooth|pic:🦷', 10: 'watch' },
  9614: { 7: 'months' },
  9615: { 10: 'three_stops|words:I am Nam.,I am eight.,I like football.' },
  9616: { 4: 'on|place:on', 8: 'bird', 9: 'five_apples|count:🍎:5' },
  9617: { 1: 'schoolbag', 4: 'bike|pic:🚲', 8: 'puppy', 10: 'shoes' },
  9618: { 1: 'sleep|pic:😴', 2: 'football|pic:⚽', 3: 'read|pic:📖', 4: 'sing|pic:🎤',
          5: 'walk|pic:🚶', 7: 'run|pic:🏃', 8: 'write|pic:✍️', 9: 'cook|pic:🍳',
          10: 'swim' },
  9619: { 1: 'milk', 2: 'football', 3: 'music|pic:🎧', 5: 'icecream|pic:🍦', 10: 'shop|pic:🏪' },
  9620: { 3: 'puppy', 6: 'schoolbag' },
  9621: { 2: 'big_small|compare:🐘:🐭', 3: 'hot_cold|two:🔥:❄️:hot:cold',
          4: 'happy_sad|two:😀:😢:happy:sad', 6: 'tea|pic:☕',
          8: 'old_young|two:👴:👶:old:young', 9: 'cake' },
  9622: { 1: 'apple', 3: 'egg|pic:🥚', 4: 'moon|pic:🌙', 6: 'umbrella|pic:☂️',
          9: 'orange_f|pic:🍊', 10: 'icecream' },
  9623: { 1: 'on', 2: 'in|place:in', 3: 'under|place:under', 4: 'behind|place:behind',
          5: 'nextto|place:nextto', 7: 'between|place:between', 9: 'picture|pic:🖼️' },
  9626: { 1: 'dog_park|two:🐕:🌳:Bo:the park' },
  9627: { 1: 'sunny' },
  9629: { 1: 'calendar|table:May 2026;Mon 4|Tue 5|Wed 6;Thu 7|Fri 8|Sat 9', 5: 'icecream' },
  9630: { 1: 'book|book', 2: 'book', 3: 'book',
          4: 'contents|table:Contents|Page;Animals|3;Plants|9;Water|15',
          7: 'abc_smr|words:sun,rain,moon', 9: 'elephant', 10: 'dragon|pic:🐉' },
};

/* ─────────────────────────── LỚP 3 ─────────────────────────── */
const MAP3 = {
  9701: { 1: 'knee|pic:🦵', 2: 'write|pic:✍️', 3: 'lamb|pic:🐑', 4: 'hour|pic:⏰',
          5: 'knife|pic:🔪', 6: 'watch|pic:⌚' },
  9702: { 1: 'two_chairs|count:🪑:2', 2: 'three_buses|count:🚌:3', 3: 'city|pic:🏙️',
          4: 'leaf|pic:🍃', 5: 'two_knives|count:🔪:2', 6: 'mouse|pic:🐭',
          8: 'five_tomatoes|count:🍅:5', 10: 'three_sheep|count:🐑:3' },
  9703: { 5: 'swim|pic:🏊', 9: 'run|pic:🏃', 10: 'dance|pic:💃' },
  9704: { 1: 'elephant|pic:🐘', 2: 'pencil|pic:✏️', 3: 'butterfly|pic:🦋', 4: 'bread|pic:🍞',
          5: 'sunflower|pic:🌻', 6: 'rainbow|pic:🌈', 7: 'toothbrush|pic:🪥',
          8: 'football|pic:⚽', 10: 'computer|pic:💻' },
  9705: { 1: 'sad|pic:😢', 7: 'unlock|pic:🔓' },
  9706: { 3: 'teacher|pic:👩‍🏫', 4: 'singer|pic:🎤', 5: 'snail|pic:🐌', 7: 'wet|pic:💧',
          8: 'night_sky|pic:🌌' },
  9707: { 1: 'big_small|compare:🐘:🐭', 2: 'happy|pic:😀', 3: 'run', 7: 'shout|pic:📣',
          9: 'eyes|pic:👀', 10: 'cold|pic:❄️' },
  9708: { 2: 'heavy_light|two:🪨:🪶:heavy:light', 3: 'clock_late|clock:8:15',
          4: 'empty_full|two:🫗:🥛:empty:full', 7: 'noisy|pic:🔊' },
  9709: { 1: 'two_cats|count:🐱:2', 4: 'ear|pic:👂', 8: 'wind|pic:🌬️', 9: 'shirt|pic:👕' },
  9710: { 3: 'soup|pic:🍲', 7: 'trophy|pic:🏆', 10: 'rain|weather:🌧️:☂️' },
  9711: { 1: 'maths|pic:🔢', 2: 'art|pic:🎨', 3: 'football', 4: 'plant|pic:🌱',
          6: 'library|pic:📚',
          8: 'timetable|table:Day|Lesson 1|Lesson 2;Monday|Maths|Art;Tuesday|English|PE;Friday|English|Science',
          9: 'timetable', 10: 'clock7|clock:7' },
  9712: { 1: 'doctor|pic:🩺', 2: 'farmer|pic:🌾', 3: 'pilot|pic:✈️', 4: 'bread',
          5: 'letter|pic:✉️', 6: 'cinema|pic:🎬', 7: 'medicine|pic:💊',
          9: 'lights|pic:🚦', 10: 'between|place:between' },
  9713: { 1: 'headache|pic:🤕', 2: 'tooth|pic:🦷', 5: 'carrot|pic:🥕',
          7: 'four_eggs|count:🥚:4', 8: 'heart|pic:❤️', 9: 'tongue|pic:👅', 10: 'wash|pic:🧼' },
  9714: { 4: 'water|pic:💧', 5: 'pencil' },
  9716: { 1: 'motorbike|pic:🛵', 3: 'toothbrush', 4: 'football', 8: 'sunrise|pic:🌅' },
  9717: { 1: 'piano|pic:🎹', 8: 'rain', 10: 'tv|pic:📺' },
  9718: { 1: 'market|pic:🛒', 2: 'letter', 4: 'party|pic:🎉', 8: 'rice|pic:🍚' },
  9719: { 1: 'grandma|pic:👵', 2: 'clouds|weather:☁️:🌧️', 9: 'zoo|pic:🦁', 10: 'bike|pic:🚲' },
  9720: { 1: 'eleph_dog|compare:🐘:🐕', 3: 'hot|pic:🔥', 4: 'tall_short|two:🦒:🐕:tall:short',
          8: 'same_tall|two:🧍:🧍:Nam:his brother', 9: 'bike_car|two:🚲:🚗:a bicycle:a car',
          10: 'months|table:Month|Days;January|31;February|28;March|31' },
  9721: { 3: 'turtle|pic:🐢', 7: 'baby|pic:👶' },
  9722: { 3: 'clock730|clock:7:30', 6: 'above|place:above', 8: 'bridge|pic:🌉',
          9: 'behind|place:behind',
          10: 'hours|table:School day;from 7 a.m.;to 4 p.m.' },
  9723: { 3: 'tea|pic:☕', 4: 'rain', 8: 'umbrella|pic:☂️' },
  9724: { 2: 'guitar|pic:🎸', 4: 'milk|pic:🥛', 5: 'five_apples|count:🍎:5',
          7: 'money|pic:💰', 9: 'salt|pic:🧂' },
  9725: { 3: 'book|book' },
  9728: { 1: 'kite|two:🪁:🌳:the kite:the tall tree' },
  9729: { 1: 'bee|bee', 2: 'bee', 7: 'bee',
          8: 'contents|table:Contents|Page;Bees|4;Ants|11;Butterflies|18',
          9: 'glossary|table:Glossary;colony = a big group of bees;nectar = sweet juice in a flower' },
  9730: { 6: 'index|table:Index|Page;honey|4;nest|12;wings|7',
          7: 'book', 8: 'abc_vww|words:water,village,window',
          9: 'guide|table:farm — fish;page 34', 10: 'volcano|pic:🌋' },
};

/* ═══════════════════════ vẽ hình theo spec ═══════════════════════ */
function draw(spec) {
  const p = spec.split(':');
  switch (p[0]) {
    case 'pic':     return picSVG(p[1]);
    case 'count':   return countSVG(p[1], Number(p[2]));
    case 'blank':   return blankSVG(p[1], p[2]);
    case 'place':   return placeSVG(p[1]);
    case 'compare': return compareSVG(p[1], p[2]);
    case 'two':     return twoSVG(p[1], p[2], p[3], p[4]);
    case 'weather': return weatherSVG(p[1], p[2]);
    case 'clock':   return clockSVG(Number(p[1]), Number(p[2] || 0));
    case 'words':   return wordsSVG(p[1].split(','));
    case 'book':    return bookSVG();
    case 'bee':     return beeSVG();
    case 'table': {
      const parts = spec.slice(6).split(';');
      const head = parts[0].split('|');
      const rows = parts.slice(1).map((r) => r.split('|'));
      const cols = Math.max(head.length, ...rows.map((r) => r.length));
      const pad = (r) => { while (r.length < cols) r.push(''); return r; };
      return tableSVG(rows.map(pad), pad(head));
    }
    default: throw new Error('unknown spec: ' + spec);
  }
}

/* ═══════════════════ sinh file + vá vào data file ════════════════ */
function build(grade, map, dataFile) {
  const dir = `web/assets/ta${grade}`;
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });

  // 1. gom tên hình → spec, kiểm tra mâu thuẫn
  const specs = new Map();
  for (const [examId, qs] of Object.entries(map)) {
    for (const [qn, v] of Object.entries(qs)) {
      const i = v.indexOf('|');
      if (i < 0) continue;
      const name = v.slice(0, i), spec = v.slice(i + 1);
      if (specs.has(name) && specs.get(name) !== spec)
        throw new Error(`hình "${name}" khai báo hai kiểu khác nhau (đề ${examId} câu ${qn})`);
      specs.set(name, spec);
    }
  }
  // 2. vẽ ra file
  for (const [name, spec] of specs) fs.writeFileSync(path.join(dir, name + '.svg'), draw(spec));

  // 3. bảng tra: examId → { số câu → tên hình }
  const byExam = {};
  for (const [examId, qs] of Object.entries(map)) {
    byExam[examId] = {};
    for (const [qn, v] of Object.entries(qs)) {
      const name = v.includes('|') ? v.slice(0, v.indexOf('|')) : v;
      if (!specs.has(name)) throw new Error(`đề ${examId} câu ${qn}: chưa khai báo hình "${name}"`);
      byExam[examId][qn] = name;
    }
  }

  // 4. vá vào data file — mỗi câu hỏi nằm gọn trên MỘT dòng
  const lines = fs.readFileSync(dataFile, 'utf8').split('\n');
  let examId = null, qn = 0, added = 0;
  const out = lines.map((line) => {
    const m = /^\s*id:\s*(\d+),\s*title:/.exec(line);
    if (m) { examId = m[1]; qn = 0; return line; }
    if (!/^\s*\{\s*sec:/.test(line)) return line;
    qn++;
    let l = line.replace(/\s*img:\s*A \+ '[^']*',/, '');      // gỡ img: cũ
    const name = byExam[examId] && byExam[examId][qn];
    if (!name) return l;
    const at = l.indexOf('pts: 1,');
    if (at < 0) throw new Error(`đề ${examId} câu ${qn}: không tìm thấy "pts: 1,"`);
    added++;
    return l.slice(0, at + 7) + ` img: A + 'ta${grade}/${name}.svg',` + l.slice(at + 7);
  });
  fs.writeFileSync(dataFile, out.join('\n'));
  return { files: specs.size, added };
}

const r2 = build(2, MAP2, 'web/data-tienganh2.js');
const r3 = build(3, MAP3, 'web/data-tienganh3.js');
console.log(`Tiếng Anh 2: ${r2.files} hình → ${r2.added} câu có hình`);
console.log(`Tiếng Anh 3: ${r3.files} hình → ${r3.added} câu có hình`);
