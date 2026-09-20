/* ============================================================================
   gen-tienganh45-art.mjs — sinh hình minh hoạ cho Tiếng Anh lớp 4 và lớp 5.

   Chạy:  node tools/gen-tienganh45-art.mjs
   Xuất:  web/assets/ta4/*.svg  ·  web/assets/ta5/*.svg      (vẽ bằng code)
          và CHÈN trường  img:  vào đúng câu hỏi trong
          web/data-tienganh4.js  ·  web/data-tienganh5.js

   Dùng chung bộ vẽ tools/ta23-art.mjs và đúng cú pháp spec như
   tools/gen-tienganh23-art.mjs — xem chú thích ở file đó.
   Chạy lại bao nhiêu lần cũng cho kết quả như nhau.
   ========================================================================== */
'use strict';

import fs from 'fs';
import path from 'path';
import {
  picSVG, countSVG, blankSVG, placeSVG, compareSVG, twoSVG,
  weatherSVG, clockSVG, tableSVG, wordsSVG, bookSVG, beeSVG,
} from './ta23-art.mjs';

/* ───────────────────────── LỚP 4 — 52 đề ───────────────────────── */
const MAP4 = {
  /* ══ phần gốc: từ vựng và ngữ pháp giao tiếp ══ */
  6601: { 4: 'hello|pic:👋', 10: 'subjects|table:Subject|Day;Maths|Monday;English|Tuesday;Art|Friday' },
  6602: { 1: 'grandma|pic:👵', 2: 'uncle|pic:👨', 3: 'aunt|pic:👩', 5: 'dog|pic:🐕' },
  6603: { 1: 'maths|pic:🔢', 2: 'art|pic:🎨', 3: 'science|pic:🔬', 4: 'pe|pic:⚽',
          5: 'music|pic:🎵', 10: 'timetable|table:Day|Lesson 1|Lesson 2;Monday|Maths|Art;Tuesday|English|PE' },
  6604: { 1: 'clock3|clock:3', 2: 'clock730|clock:7:30', 5: 'week|table:Day;Monday;Tuesday;Wednesday;Thursday;Friday' },
  6605: { 1: 'read|pic:📖', 2: 'swim|pic:🏊', 3: 'sing|pic:🎤', 5: 'football|pic:⚽', 8: 'dance|pic:💃' },
  6606: { 1: 'swim', 3: 'bike|pic:🚲', 5: 'cook|pic:🍳' },
  6607: { 1: 'apple|pic:🍎', 2: 'milk|pic:🥛', 3: 'rice|pic:🍚', 5: 'carrot|pic:🥕', 8: 'juice|pic:🧃' },
  6608: { 1: 'sunny|weather:☀️', 2: 'rainy|weather:🌧️:☂️', 3: 'snowy|weather:❄️',
          5: 'coat|pic:🧥', 8: 'shoes|pic:👟' },
  6609: { 1: 'on|place:on', 2: 'in|place:in', 3: 'under|place:under', 5: 'behind|place:behind',
          8: 'between|place:between' },
  6610: { 4: 'two_books|count:📕:2', 8: 'big_small|compare:🐘:🐭' },
  7601: { 1: 'cow|pic:🐄', 2: 'bird|pic:🐦', 3: 'fish|pic:🐟', 5: 'tiger|pic:🐯', 8: 'elephant|pic:🐘' },
  7602: { 1: 'doctor|pic:🩺', 2: 'farmer|pic:🌾', 3: 'pilot|pic:✈️', 5: 'teacher|pic:👩‍🏫', 8: 'baker|pic:🍞' },
  7603: { 1: 'eyes|pic:👀', 2: 'ear|pic:👂', 3: 'nose|pic:👃', 5: 'hand|pic:✋', 8: 'leg|pic:🦵' },
  7604: { 1: 'house|pic:🏠', 2: 'kitchen|pic:🍽️', 3: 'bed|pic:🛏️', 5: 'bath|pic:🛁' },
  7605: { 1: 'football', 2: 'swim', 3: 'tennis|pic:🎾', 5: 'run|pic:🏃', 8: 'basketball|pic:🏀' },
  7606: { 1: 'bus|pic:🚌', 2: 'bike', 3: 'plane|pic:✈️', 5: 'train|pic:🚆', 8: 'boat|pic:⛵' },
  7607: { 1: 'one_cat|count:🐱:1', 3: 'three_apples|count:🍎:3', 6: 'five_books|count:📕:5' },
  7608: { 1: 'clock3', 5: 'house' },
  7609: { 1: 'week' },
  7610: { 1: 'two_books', 5: 'three_apples' },
  7611: { 1: 'on', 2: 'in', 3: 'under', 5: 'above|place:above', 8: 'nextto|place:nextto' },
  7612: { 1: 'triangle|pic:🔺', 2: 'square|pic:⬜', 3: 'circle|pic:⭕', 5: 'sunny', 8: 'rainbow|pic:🌈' },
  7613: { 1: 'clock7|clock:7', 3: 'brush|pic:🪥', 5: 'bus', 8: 'sleep|pic:😴' },
  7614: { 1: 'family|count:🧍:4' },
  7615: { 1: 'school|pic:🏫' },
  7616: { 1: 'puppy|pic:🐕' },
  7617: { 1: 'rice', 3: 'apple', 5: 'milk' },
  7618: { 1: 'sunny', 3: 'snowy', 5: 'rainy' },
  7619: { 1: 'coat', 3: 'shoes', 5: 'shop|pic:🏪' },
  7620: { 4: 'family', 8: 'big_small' },
  /* ══ phần bổ sung: chính tả · từ vựng · dấu câu · đọc hiểu · viết · thư viện ══ */
  9801: { 1: 'island|pic:🏝️', 3: 'climb|pic:🧗', 5: 'knife|pic:🔪' },
  9802: { 1: 'stories|pic:📚', 2: 'shelf|pic:🗄️', 3: 'five_potatoes|count:🥔:5', 4: 'geese|count:🦢:3',
          10: 'three_deer|count:🦌:3' },
  9803: { 1: 'butterfly|pic:🦋', 5: 'playground|pic:🛝', 8: 'newspaper|pic:📰', 9: 'airport|pic:✈️' },
  9804: { 4: 'disagree|pic:🙅', 9: 'submarine|pic:🚢' },
  9805: { 4: 'painter|pic:🎨', 7: 'dictionary|pic:📖' },
  9806: { 1: 'big_small', 8: 'gift|pic:🎁' },
  9807: { 9: 'arrive_depart|two:🛬:🛫:arrive:depart' },
  9809: { 10: 'water|pic:💧' },
  9810: { 10: 'crossing|pic:🚸' },
  9811: { 3: 'nurse|pic:👩‍⚕️' },
  9812: { 5: 'shout|pic:📣' },
  9813: { 6: 'chocolates|pic:🍫', 7: 'trousers|pic:👖' },
  9814: { 1: 'gate|pic:🚪' },
  9815: { 9: 'torch|pic:🔦' },
  9816: { 1: 'rice_field|two:🌾:🍚:the field:the bowl',
          8: 'rice_steps|table:Step|What farmers do;1|soak the seeds;2|plant the shoots;3|flood the field;4|harvest and dry' },
  9817: { 1: 'rainy', 3: 'basket|pic:🧺', 10: 'trophy|pic:🏆' },
  9818: { 1: 'fox|pic:🦊', 4: 'rocket|pic:🚀', 6: 'contents|table:Contents|Page;Volcanoes|4;Rivers|12;Deserts|20',
          10: 'chart|table:Animal|Legs;ant|6;dog|4;bird|2' },
  9819: { 4: 'process|table:The writing process;1 plan;2 draft;3 revise;4 edit;5 publish' },
  9820: { 1: 'book|book', 2: 'guide|table:garden — giant;page 212', 4: 'thesaurus|pic:📗',
          5: 'shelves|table:Call number|Subject;500|Science;700|Art;900|History', 10: 'library|pic:📚' },
  9821: { 1: 'cinema|pic:🎬', 2: 'market|pic:🛒', 4: 'grandma', 5: 'party|pic:🎉' },
  9822: { 2: 'clouds|weather:☁️:🌧️', 5: 'helmet|pic:🚲', 6: 'water', 8: 'swim' },
};

/* ───────────────────────── LỚP 5 — 50 đề ───────────────────────── */
const MAP5 = {
  /* ══ phần gốc ══ */
  6901: { 1: 'clock6|clock:6', 2: 'brush|pic:🪥', 3: 'breakfast|pic:🍚', 5: 'school|pic:🏫',
          7: 'homework|pic:📝', 8: 'sleep|pic:😴', 10: 'clock730|clock:7:30' },
  6902: { 1: 'read|pic:📖', 2: 'cook|pic:🍳', 3: 'run|pic:🏃', 5: 'write|pic:✍️',
          7: 'sing|pic:🎤', 9: 'swim|pic:🏊' },
  6903: { 1: 'market|pic:🛒', 3: 'cinema|pic:🎬', 5: 'letter|pic:✉️', 8: 'party|pic:🎉' },
  6904: { 1: 'week|table:Day;Monday;Tuesday;Wednesday;Thursday;Friday', 5: 'week',
          8: 'calendar|table:Plan|When;visit Hue|Saturday;swim|Sunday' },
  6905: { 1: 'eleph_dog|compare:🐘:🐕', 3: 'tall_short|two:🦒:🐕:taller:shorter',
          5: 'bike_car|two:🚲:🚗:a bicycle:a car', 8: 'mountain|pic:🏔️' },
  6906: { 1: 'headache|pic:🤕', 2: 'tooth|pic:🦷', 3: 'fever|pic:🌡️', 5: 'doctor|pic:🩺',
          8: 'medicine|pic:💊' },
  6907: { 1: 'pilot|pic:✈️', 2: 'nurse|pic:👩‍⚕️', 3: 'farmer|pic:🌾', 5: 'teacher|pic:👩‍🏫',
          8: 'baker|pic:🍞' },
  6908: { 1: 'lights|pic:🚦', 2: 'between|place:between', 3: 'bridge|pic:🌉',
          5: 'map|pic:🗺️', 8: 'behind|place:behind' },
  6909: { 1: 'plane|pic:✈️', 3: 'beach|pic:🏖️', 5: 'calendar', 8: 'globe|pic:🌏' },
  6910: { 2: 'clock3|clock:3', 4: 'clock730', 8: 'eleph_dog' },
  8201: { 1: 'clock6', 3: 'bus|pic:🚌', 5: 'breakfast', 8: 'homework' },
  8202: { 1: 'rain|weather:🌧️:☂️', 4: 'read', 7: 'cook' },
  8203: { 1: 'football|pic:⚽', 3: 'beach', 5: 'market', 8: 'party' },
  8204: { 1: 'book|pic:📕', 3: 'market', 5: 'letter', 8: 'run' },
  8205: { 1: 'clouds|weather:☁️:🌧️', 5: 'globe' },
  8206: { 1: 'calendar', 5: 'beach', 8: 'plane' },
  8207: { 1: 'eleph_dog', 3: 'tall_short', 5: 'bike_car', 8: 'sunny|weather:☀️' },
  8208: { 1: 'trophy|pic:🏆', 3: 'mountain', 5: 'globe' },
  8209: { 1: 'turtle|pic:🐢', 3: 'run', 5: 'sing', 8: 'quiet|pic:🤫' },
  8210: { 1: 'clock3', 3: 'on|place:on', 5: 'week', 8: 'in|place:in' },
  8211: { 1: 'flag|pic:🚩', 3: 'globe', 5: 'map', 8: 'plane' },
  8212: { 1: 'rice|pic:🍚', 3: 'soup|pic:🍲', 5: 'table_set|pic:🍽️', 8: 'juice|pic:🧃' },
  8213: { 1: 'shop|pic:🏪', 3: 'library|pic:📚', 5: 'cinema', 8: 'lights' },
  8214: { 1: 'happy|pic:😀', 3: 'sad|pic:😢', 5: 'angry|pic:😠', 8: 'tired|pic:😴' },
  8215: { 1: 'doctor', 3: 'medicine', 5: 'fever', 8: 'tooth' },
  8216: { 1: 'question|pic:❓', 5: 'clock3' },
  8217: { 1: 'family|count:🧍:4', 5: 'doctor', 9: 'family' },
  8218: { 1: 'beach', 5: 'plane' },
  8219: { 1: 'school', 5: 'homework' },
  8220: { 2: 'book', 6: 'eleph_dog', 9: 'week' },
  /* ══ phần bổ sung ══ */
  9901: { 9: 'spellrule|table:i before e … except after c;believe;receive' },
  9902: { 2: 'transport|pic:🚚', 3: 'telephone|pic:📞', 10: 'port|pic:⚓' },
  9903: { 1: 'angry|pic:😠', 3: 'warm_hot|table:least → most;warm;hot;boiling', 6: 'salt|pic:🧂' },
  9904: { 9: 'up_down|two:⬆️:⬇️:ascend:descend' },
  9905: { 4: 'whose|pic:🎒' },
  9906: { 5: 'table_set|pic:🍽️', 10: 'match|pic:⚽' },
  9907: { 4: 'rain', 6: 'cake|pic:🍰', 7: 'mouse|pic:🐭', 9: 'stars|pic:✨' },
  9908: { 10: 'marks|table:Mark|Job;.|ends a statement;?|ends a question;!|shows strong feeling' },
  9909: { 3: 'grandma|pic:👵' },
  9910: { 8: 'glasses|pic:👓' },
  9911: { 2: 'team|count:🧍:5' },
  9913: { 4: 'boiling|pic:🌡️', 7: 'beach' },
  9914: { 1: 'helmet|pic:🚲', 5: 'danger|pic:⚡', 10: 'bird|pic:🕊️' },
  9915: { 1: 'turtle_bag|two:🐢:🛍️:a turtle:a plastic bag',
          10: 'breakdown|table:Item|Years to break down;paper bag|1;plastic bottle|450;fishing line|600' },
  9916: { 4: 'dragon|pic:🐉', 7: 'cinema', 9: 'news|pic:📰' },
  9917: { 1: 'thermometer|pic:🌡️', 7: 'juice|pic:🧃' },
  9918: { 3: 'share|pic:🍡', 5: 'bin|pic:🗑️', 7: 'river|pic:🏞️' },
  9919: { 2: 'process|table:The writing process;1 prewriting;2 drafting;3 revising;4 editing;5 publishing',
          5: 'race|table:RACE;R restate the question;A answer it;C cite evidence;E explain' },
  9920: { 1: 'email|pic:✉️', 8: 'dewey|table:Call number|Subject;500|Science;700|Art;900|History',
          9: 'thesaurus|pic:📗', 10: 'atlas|pic:🗺️' },
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
  for (const [name, spec] of specs) fs.writeFileSync(path.join(dir, name + '.svg'), draw(spec));

  const byExam = {};
  for (const [examId, qs] of Object.entries(map)) {
    byExam[examId] = {};
    for (const [qn, v] of Object.entries(qs)) {
      const name = v.includes('|') ? v.slice(0, v.indexOf('|')) : v;
      if (!specs.has(name)) throw new Error(`đề ${examId} câu ${qn}: chưa khai báo hình "${name}"`);
      byExam[examId][qn] = name;
    }
  }

  const lines = fs.readFileSync(dataFile, 'utf8').split('\n');
  let examId = null, qn = 0, added = 0;
  const out = lines.map((line) => {
    const m = /^\s*id:\s*(\d+),\s*title:/.exec(line);
    if (m) { examId = m[1]; qn = 0; return line; }
    if (!/^\s*\{\s*sec:/.test(line)) return line;
    qn++;
    let l = line.replace(/\s*img:\s*A \+ '[^']*',/, '');
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

const r4 = build(4, MAP4, 'web/data-tienganh4.js');
const r5 = build(5, MAP5, 'web/data-tienganh5.js');
console.log(`Tiếng Anh 4: ${r4.files} hình → ${r4.added} câu có hình`);
console.log(`Tiếng Anh 5: ${r5.files} hình → ${r5.added} câu có hình`);
