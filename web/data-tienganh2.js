// TIẾNG ANH — LỚP 2 (GDPT 2018)
// 32 đề × 10 câu = 320 câu. Mỗi câu 1 điểm — thang 10 — 20 phút mỗi đề.
//
// QUY TẮC: môn Tiếng Anh KHÔNG kèm bản dịch tiếng Việt. Mọi phần text · opts · why · sec ·
// name · title viết bằng tiếng Anh; dùng emoji làm hình gợi nghĩa để học sinh tự hiểu.
//
// KHUNG NỘI DUNG — bám đủ các phần của chương trình Class 2 (wayground.com/en/class-2-worksheets):
//   • Phonics ................ short vowels · long vowels & silent e · digraphs · blends & rhyming
//   • Spelling & sight words . chính tả và từ nhìn-đọc thường gặp
//   • Language & Vocabulary .. family · school things · animals · food & drink · colours & shapes ·
//                              body & clothes · weather, days & months
//   • Grammar and Mechanics .. nouns · proper nouns & capital letters · punctuation · to be ·
//                              have got · present continuous · present simple · pronouns ·
//                              adjectives · articles · prepositions · contractions · sentence types
//   • Reading ................ reading comprehension (fiction & non-fiction) · sequencing
//   • Writing ................ sentence building · word order · capitals & dates · opinion writing
//   • Library Skills ......... parts of a book · ABC order · fiction vs non-fiction

// Reading passages — repeated at the top of every question so pupils can always look back.
const R2A = '📖 <i>Mai is eight years old. She has a dog. His name is Bo. Bo is white and brown. Every Saturday, Mai and her brother take Bo to the park. Bo runs and plays with a ball there. At home Bo eats rice and meat, and then he sleeps. Mai loves Bo very much.</i><br><br>';

const R2B = '📖 <i>The Sun is a big star in the sky. It is very hot. The Sun gives us light and heat. We see the Sun in the day, and we do not see it at night. Plants need sunlight and water to grow. We must never look straight at the Sun because it can hurt our eyes. On a very sunny day we wear a hat.</i><br><br>';

const TA2_EXAMS = [

/* ═══════════ TEST 1 — PHONICS: SHORT VOWELS ═══════════ */
{
  id: 9601, title: 'Test 1 · Phonics: short vowels', time: 20,
  questions: [
    { sec: 'Phonics', name: 'Question 1', pts: 1, img: A + 'ta2/cat.svg', text: 'Which word has the short <b>a</b> sound as in <b>cat</b> 🐱?', opts: o4('cake', 'map', 'cane', 'cape'), ans: 'B', why: '<b>map</b> has the same short <b>a</b> sound as cat.' },
    { sec: 'Phonics', name: 'Question 2', pts: 1, img: A + 'ta2/bed.svg', text: 'Which word has the same vowel sound as <b>bed</b> 🛏️?', opts: o4('bee', 'bead', 'pen', 'be'), ans: 'C', why: '<b>pen</b> has the short <b>e</b> sound, like bed.' },
    { sec: 'Phonics', name: 'Question 3', pts: 1, img: A + 'ta2/pig.svg', text: 'Which word has the short <b>i</b> sound as in <b>pig</b> 🐷?', opts: o4('pin', 'pine', 'pie', 'pile'), ans: 'A', why: '<b>pin</b> has the short <b>i</b> sound, like pig.' },
    { sec: 'Phonics', name: 'Question 4', pts: 1, img: A + 'ta2/dog.svg', text: 'Which word has the short <b>o</b> sound as in <b>dog</b> 🐶?', opts: o4('go', 'boat', 'box', 'bone'), ans: 'C', why: '<b>box</b> has the short <b>o</b> sound, like dog.' },
    { sec: 'Phonics', name: 'Question 5', pts: 1, img: A + 'ta2/sun.svg', text: 'Which word has the short <b>u</b> sound as in <b>sun</b> ☀️?', opts: o4('cube', 'blue', 'tube', 'cup'), ans: 'D', why: '<b>cup</b> has the short <b>u</b> sound, like sun.' },
    { sec: 'Phonics', name: 'Question 6', pts: 1, img: A + 'ta2/blank_cat.svg', text: 'Which letter finishes the word? A small pet that says "meow": <b>c __ t</b> 🐱', opts: o4('a', 'e', 'i', 'o'), ans: 'A', why: 'c + <b>a</b> + t makes the word <b>cat</b>.' },
    { sec: 'Phonics', name: 'Question 7', pts: 1, img: A + 'ta2/kite.svg', text: 'Which word does NOT have a short vowel sound?', opts: o4('hat', 'ten', 'hop', 'kite'), ans: 'D', why: '<b>kite</b> has a long <b>i</b> sound; the others are short.' },
    { sec: 'Phonics', name: 'Question 8', pts: 1, text: 'In <b>big</b> and <b>dig</b>, the middle sound is ______.', opts: o4('long i', 'short i', 'long e', 'short e'), ans: 'B', why: 'Both words have the <b>short i</b> sound.' },
    { sec: 'Phonics', name: 'Question 9', pts: 1, text: 'Choose the word with the short <b>e</b> sound.', opts: o4('neat', 'need', 'net', 'knee'), ans: 'C', why: '<b>net</b> has the short <b>e</b> sound; the others are long.' },
    { sec: 'Rhyming', name: 'Question 10', pts: 1, img: A + 'ta2/hop.svg', text: 'Which word rhymes with <b>hop</b>?', opts: o4('hope', 'tap', 'top', 'tip'), ans: 'C', why: 'hop and <b>top</b> end with the same sound: -op.' },
  ],
},

/* ═══════════ TEST 2 — PHONICS: LONG VOWELS AND SILENT E ═══════════ */
{
  id: 9602, title: 'Test 2 · Phonics: long vowels and silent e', time: 20,
  questions: [
    { sec: 'Silent e', name: 'Question 1', pts: 1, text: 'Add a silent <b>e</b> to <b>cap</b> and you get ______.', opts: o4('cape', 'capp', 'cop', 'cup'), ans: 'A', why: 'cap + e = <b>cape</b>. The silent e makes the a say its name.' },
    { sec: 'Silent e', name: 'Question 2', pts: 1, img: A + 'ta2/kite.svg', text: 'Add a silent <b>e</b> to <b>kit</b> and you get ______.', opts: o4('kot', 'kite', 'kut', 'kat'), ans: 'B', why: 'kit + e = <b>kite</b> 🪁.' },
    { sec: 'Long vowels', name: 'Question 3', pts: 1, img: A + 'ta2/hat.svg', text: 'Which word has a long <b>a</b> sound?', opts: o4('hat', 'hate', 'ham', 'hand'), ans: 'B', why: 'In <b>hate</b> the silent e makes a long <b>a</b>.' },
    { sec: 'Long vowels', name: 'Question 4', pts: 1, text: 'Which word has a long <b>i</b> sound?', opts: o4('pin', 'pig', 'pine', 'pit'), ans: 'C', why: 'In <b>pine</b> the silent e makes a long <b>i</b>.' },
    { sec: 'Long vowels', name: 'Question 5', pts: 1, img: A + 'ta2/home.svg', text: 'Which word has a long <b>o</b> sound?', opts: o4('hot', 'hop', 'hom', 'home'), ans: 'D', why: 'In <b>home</b> the silent e makes a long <b>o</b> 🏠.' },
    { sec: 'Long vowels', name: 'Question 6', pts: 1, img: A + 'ta2/cube.svg', text: 'Which word has a long <b>u</b> sound?', opts: o4('cut', 'cub', 'cube', 'cup'), ans: 'C', why: 'In <b>cube</b> the silent e makes a long <b>u</b>.' },
    { sec: 'Silent e', name: 'Question 7', pts: 1, img: A + 'ta2/cake.svg', text: 'The letter <b>e</b> at the end of <b>cake</b> 🎂 is ______.', opts: o4('loud', 'silent', 'a consonant', 'said twice'), ans: 'B', why: 'We do not say it — it is a <b>silent</b> e.' },
    { sec: 'Long vowels', name: 'Question 8', pts: 1, img: A + 'ta2/tree.svg', text: 'Which word has a long <b>e</b> sound as in <b>see</b> 👀?', opts: o4('set', 'bed', 'tree', 'ten'), ans: 'C', why: '<b>tree</b> 🌳 has the long <b>e</b> sound.' },
    { sec: 'Long vowels', name: 'Question 9', pts: 1, text: 'Which pair are BOTH long-vowel words?', opts: o4('cat and pig', 'hop and cup', 'cake and bike', 'pen and hat'), ans: 'C', why: '<b>cake</b> and <b>bike</b> both have a silent e and a long vowel.' },
    { sec: 'Long vowels', name: 'Question 10', pts: 1, img: A + 'ta2/rope.svg', text: '<b>rope</b> and <b>note</b> both have the ______ sound.', opts: o4('short o', 'long o', 'short a', 'long e'), ans: 'B', why: 'Both words have a <b>long o</b> because of the silent e.' },
  ],
},

/* ═══════════ TEST 3 — PHONICS: DIGRAPHS sh · ch · th · wh ═══════════ */
{
  id: 9603, title: 'Test 3 · Phonics: sh, ch, th, wh', time: 20,
  questions: [
    { sec: 'Digraphs', name: 'Question 1', pts: 1, img: A + 'ta2/ship.svg', text: 'Finish the word: <b>___ip</b> — a big boat on the sea 🚢', opts: o4('sh', 'ch', 'th', 'wh'), ans: 'A', why: 'sh + ip = <b>ship</b>.' },
    { sec: 'Digraphs', name: 'Question 2', pts: 1, img: A + 'ta2/chair.svg', text: 'Finish the word: <b>___air</b> — you sit on it 🪑', opts: o4('sh', 'ch', 'th', 'wh'), ans: 'B', why: 'ch + air = <b>chair</b>.' },
    { sec: 'Digraphs', name: 'Question 3', pts: 1, img: A + 'ta2/three.svg', text: 'Finish the word: <b>___ree</b> — the number 3 ✋', opts: o4('sh', 'ch', 'th', 'wh'), ans: 'C', why: 'th + ree = <b>three</b>.' },
    { sec: 'Digraphs', name: 'Question 4', pts: 1, img: A + 'ta2/whale.svg', text: 'Finish the word: <b>___ale</b> — a very big animal in the sea 🐋', opts: o4('sh', 'ch', 'th', 'wh'), ans: 'D', why: 'wh + ale = <b>whale</b>.' },
    { sec: 'Digraphs', name: 'Question 5', pts: 1, img: A + 'ta2/sheep.svg', text: 'Which word BEGINS with <b>sh</b>?', opts: o4('cheese', 'sheep', 'this', 'when'), ans: 'B', why: '<b>sheep</b> 🐑 begins with sh.' },
    { sec: 'Digraphs', name: 'Question 6', pts: 1, img: A + 'ta2/watch.svg', text: 'Which word ENDS with <b>ch</b>?', opts: o4('fish', 'bath', 'watch', 'wish'), ans: 'C', why: '<b>watch</b> ⌚ ends with ch.' },
    { sec: 'Digraphs', name: 'Question 7', pts: 1, text: 'Which word BEGINS with <b>th</b>?', opts: o4('thin', 'shin', 'chin', 'win'), ans: 'A', why: '<b>thin</b> begins with th.' },
    { sec: 'Digraphs', name: 'Question 8', pts: 1, img: A + 'ta2/brush.svg', text: 'Finish the word: <b>bru___</b> — you clean your teeth with it 🪥', opts: o4('th', 'ch', 'sh', 'wh'), ans: 'C', why: 'bru + sh = <b>brush</b>.' },
    { sec: 'Digraphs', name: 'Question 9', pts: 1, text: 'Which word has <b>wh</b>?', opts: o4('wait', 'white', 'want', 'wall'), ans: 'B', why: '<b>white</b> begins with wh.' },
    { sec: 'Digraphs', name: 'Question 10', pts: 1, img: A + 'ta2/chick.svg', text: 'Finish the word: <b>___ick</b> — a baby hen 🐥', opts: o4('sh', 'th', 'ch', 'wh'), ans: 'C', why: 'ch + ick = <b>chick</b>.' },
  ],
},

/* ═══════════ TEST 4 — PHONICS: BLENDS AND RHYMING WORDS ═══════════ */
{
  id: 9604, title: 'Test 4 · Phonics: blends and rhyming words', time: 20,
  questions: [
    { sec: 'Blends', name: 'Question 1', pts: 1, img: A + 'ta2/flag.svg', text: 'Finish the word: <b>___ag</b> — a country shows it 🚩', opts: o4('fl', 'gr', 'st', 'sw'), ans: 'A', why: 'fl + ag = <b>flag</b>.' },
    { sec: 'Blends', name: 'Question 2', pts: 1, img: A + 'ta2/green.svg', text: 'Finish the word: <b>___een</b> — the colour of grass 🌿', opts: o4('bl', 'gr', 'st', 'sn'), ans: 'B', why: 'gr + een = <b>green</b>.' },
    { sec: 'Blends', name: 'Question 3', pts: 1, img: A + 'ta2/star.svg', text: 'Finish the word: <b>___ar</b> — it shines in the sky at night ⭐', opts: o4('st', 'fl', 'cl', 'dr'), ans: 'A', why: 'st + ar = <b>star</b>.' },
    { sec: 'Blends', name: 'Question 4', pts: 1, img: A + 'ta2/swim.svg', text: 'Finish the word: <b>___im</b> — you do this in a pool 🏊', opts: o4('sl', 'sw', 'sp', 'sk'), ans: 'B', why: 'sw + im = <b>swim</b>.' },
    { sec: 'Blends', name: 'Question 5', pts: 1, img: A + 'ta2/hand.svg', text: 'Which word ENDS with the blend <b>nd</b>?', opts: o4('hand', 'ham', 'hat', 'has'), ans: 'A', why: '<b>hand</b> ✋ ends with the blend nd.' },
    { sec: 'Rhyming', name: 'Question 6', pts: 1, text: 'Which word rhymes with <b>cat</b>?', opts: o4('cut', 'hat', 'cot', 'kit'), ans: 'B', why: 'cat and <b>hat</b> both end with -at.' },
    { sec: 'Rhyming', name: 'Question 7', pts: 1, img: A + 'ta2/bee.svg', text: 'Which word rhymes with <b>tree</b>?', opts: o4('try', 'tray', 'bee', 'toe'), ans: 'C', why: 'tree and <b>bee</b> 🐝 end with the same sound.' },
    { sec: 'Rhyming', name: 'Question 8', pts: 1, text: 'Which word rhymes with <b>night</b>?', opts: o4('light', 'note', 'net', 'neat'), ans: 'A', why: 'night and <b>light</b> both end with -ight.' },
    { sec: 'Rhyming', name: 'Question 9', pts: 1, text: 'Which word does NOT rhyme with <b>sing</b>?', opts: o4('king', 'ring', 'wing', 'song'), ans: 'D', why: '<b>song</b> ends with -ong, not -ing.' },
    { sec: 'Blends', name: 'Question 10', pts: 1, img: A + 'ta2/clock.svg', text: 'Finish the word: <b>___ock</b> — it tells the time 🕐', opts: o4('cl', 'bl', 'fl', 'sl'), ans: 'A', why: 'cl + ock = <b>clock</b>.' },
  ],
},

/* ═══════════ TEST 5 — SPELLING AND SIGHT WORDS ═══════════ */
{
  id: 9605, title: 'Test 5 · Spelling and sight words', time: 20,
  questions: [
    { sec: 'Spelling', name: 'Question 1', pts: 1, text: 'Choose the correct spelling.', opts: o4('becuase', 'because', 'becuse', 'bicause'), ans: 'B', why: 'The correct spelling is <b>because</b>.' },
    { sec: 'Spelling', name: 'Question 2', pts: 1, text: 'Choose the correct spelling.', opts: o4('freind', 'frend', 'friend', 'frien'), ans: 'C', why: 'The correct spelling is <b>friend</b>.' },
    { sec: 'Spelling', name: 'Question 3', pts: 1, img: A + 'ta2/school.svg', text: 'Choose the correct spelling.', opts: o4('scool', 'school', 'skool', 'shool'), ans: 'B', why: 'The correct spelling is <b>school</b> 🏫.' },
    { sec: 'Spelling', name: 'Question 4', pts: 1, img: A + 'ta2/teacher.svg', text: 'Choose the correct spelling.', opts: o4('teacher', 'techer', 'teecher', 'teachar'), ans: 'A', why: 'The correct spelling is <b>teacher</b> 👩‍🏫.' },
    { sec: 'Sight words', name: 'Question 5', pts: 1, text: '"I ______ to school every day."', opts: o4('go', 'goes', 'going', 'gone'), ans: 'A', why: 'With <b>I</b> we say <b>go</b>.' },
    { sec: 'Sight words', name: 'Question 6', pts: 1, text: '"______ are my books." 📚📚', opts: o4('This', 'These', 'That', 'It'), ans: 'B', why: 'For more than one thing near us we use <b>These</b>.' },
    { sec: 'Spelling', name: 'Question 7', pts: 1, img: A + 'ta2/eight.svg', text: 'Choose the correct spelling of the number <b>8</b>.', opts: o4('eght', 'eight', 'eigth', 'aight'), ans: 'B', why: 'The number 8 is spelled <b>eight</b>.' },
    { sec: 'Spelling', name: 'Question 8', pts: 1, text: 'Choose the correct spelling.', opts: o4('beatiful', 'beautifull', 'beautiful', 'beutiful'), ans: 'C', why: 'The correct spelling is <b>beautiful</b>.' },
    { sec: 'Sight words', name: 'Question 9', pts: 1, text: '"Thank ______ very much."', opts: o4('yu', 'you', 'yuo', 'yoo'), ans: 'B', why: 'We write <b>you</b>.' },
    { sec: 'Spelling', name: 'Question 10', pts: 1, img: A + 'ta2/week.svg', text: 'Choose the correct spelling of the day after Monday.', opts: o4('Tuesday', 'Tusday', 'Teusday', 'Tuseday'), ans: 'A', why: 'The day after Monday is <b>Tuesday</b>.' },
  ],
},

/* ═══════════ TEST 6 — VOCABULARY: MY FAMILY ═══════════ */
{
  id: 9606, title: 'Test 6 · Vocabulary: my family', time: 20,
  questions: [
    { sec: 'Family', name: 'Question 1', pts: 1, img: A + 'ta2/grandpa.svg', text: 'My father’s father is my ______. 👴', opts: o4('grandfather', 'uncle', 'brother', 'cousin'), ans: 'A', why: 'Your father’s father is your <b>grandfather</b>.' },
    { sec: 'Family', name: 'Question 2', pts: 1, text: 'My mother and my father are my ______.', opts: o4('cousins', 'parents', 'friends', 'teachers'), ans: 'B', why: 'Mother and father together are your <b>parents</b>.' },
    { sec: 'Family', name: 'Question 3', pts: 1, text: 'My aunt’s son is my ______.', opts: o4('brother', 'cousin', 'uncle', 'father'), ans: 'B', why: 'The child of your aunt or uncle is your <b>cousin</b>.' },
    { sec: 'Family', name: 'Question 4', pts: 1, text: 'A girl child in a family is a ______.', opts: o4('son', 'daughter', 'father', 'uncle'), ans: 'B', why: 'A girl child is a <b>daughter</b>.' },
    { sec: 'Family', name: 'Question 5', pts: 1, text: '"I have one brother and one sister. We are three ______."', opts: o4('parents', 'children', 'uncles', 'aunts'), ans: 'B', why: 'Sons and daughters in a family are the <b>children</b>.' },
    { sec: 'Family', name: 'Question 6', pts: 1, text: 'Which word is a family word?', opts: o4('apple', 'table', 'uncle', 'green'), ans: 'C', why: '<b>uncle</b> is a person in a family.' },
    { sec: 'Family', name: 'Question 7', pts: 1, img: A + 'ta2/grandma.svg', text: 'My grandmother is my mother’s ______. 👵', opts: o4('mother', 'sister', 'daughter', 'aunt'), ans: 'A', why: 'Your grandmother is your mother’s <b>mother</b>.' },
    { sec: 'Family', name: 'Question 8', pts: 1, img: A + 'ta2/photo.svg', text: 'A picture of all my family is a family ______. 📷', opts: o4('chair', 'shoe', 'photo', 'pencil'), ans: 'C', why: 'We call it a family <b>photo</b>.' },
    { sec: 'Family', name: 'Question 9', pts: 1, img: A + 'ta2/four_people.svg', text: '"How many people are there in your family?" – "There ______ four."', opts: o4('is', 'are', 'am', 'be'), ans: 'B', why: 'With <b>four</b> (more than one) we say There <b>are</b>.' },
    { sec: 'Family', name: 'Question 10', pts: 1, img: A + 'ta2/boy.svg', text: 'My parents’ other child is a boy. He is my ______.', opts: o4('brother', 'sister', 'cousin', 'uncle'), ans: 'A', why: 'A boy with the same parents is your <b>brother</b>.' },
  ],
},

/* ═══════════ TEST 7 — VOCABULARY: SCHOOL THINGS ═══════════ */
{
  id: 9607, title: 'Test 7 · Vocabulary: school things', time: 20,
  questions: [
    { sec: 'School things', name: 'Question 1', pts: 1, img: A + 'ta2/pencil.svg', text: 'You write with a ______. ✏️', opts: o4('shoe', 'pencil', 'cup', 'bed'), ans: 'B', why: 'We write with a <b>pencil</b> or a pen.' },
    { sec: 'School things', name: 'Question 2', pts: 1, text: 'You take a mistake away with a ______.', opts: o4('ruler', 'rubber', 'book', 'bag'), ans: 'B', why: 'A <b>rubber</b> (eraser) takes pencil marks away.' },
    { sec: 'School things', name: 'Question 3', pts: 1, img: A + 'ta2/ruler.svg', text: 'You draw a straight line with a ______. 📏', opts: o4('ruler', 'glue', 'chair', 'rubber'), ans: 'A', why: 'A <b>ruler</b> helps you draw a straight line.' },
    { sec: 'School things', name: 'Question 4', pts: 1, img: A + 'ta2/schoolbag.svg', text: 'You carry your books in a ______. 🎒', opts: o4('cap', 'box', 'school bag', 'cup'), ans: 'C', why: 'We carry books in a <b>school bag</b>.' },
    { sec: 'School things', name: 'Question 5', pts: 1, text: 'The teacher writes on the ______.', opts: o4('floor', 'board', 'window', 'door'), ans: 'B', why: 'The teacher writes on the <b>board</b>.' },
    { sec: 'School things', name: 'Question 6', pts: 1, img: A + 'ta2/chair.svg', text: 'You sit on a ______ at school. 🪑', opts: o4('cloud', 'plate', 'spoon', 'chair'), ans: 'D', why: 'We sit on a <b>chair</b>.' },
    { sec: 'School things', name: 'Question 7', pts: 1, text: 'You make your pencil sharp with a ______.', opts: o4('sharpener', 'sandwich', 'shampoo', 'shelf'), ans: 'A', why: 'A <b>sharpener</b> makes a pencil sharp.' },
    { sec: 'School things', name: 'Question 8', pts: 1, text: 'You keep your pens and pencils in a pencil ______.', opts: o4('car', 'case', 'cake', 'coat'), ans: 'B', why: 'We keep them in a pencil <b>case</b>.' },
    { sec: 'School things', name: 'Question 9', pts: 1, img: A + 'ta2/three_pencils.svg', text: 'How many pencils are there? ✏️✏️✏️', opts: o4('two', 'three', 'four', 'five'), ans: 'B', why: 'There are <b>three</b> pencils.' },
    { sec: 'School things', name: 'Question 10', pts: 1, img: A + 'ta2/pan.svg', text: 'Which one is NOT a school thing?', opts: o4('notebook', 'sharpener', 'ruler', 'saucepan'), ans: 'D', why: 'A <b>saucepan</b> 🍳 is for cooking, not for school.' },
  ],
},

/* ═══════════ TEST 8 — VOCABULARY: ANIMALS ═══════════ */
{
  id: 9608, title: 'Test 8 · Vocabulary: animals', time: 20,
  questions: [
    { sec: 'Animals', name: 'Question 1', pts: 1, img: A + 'ta2/cow.svg', text: 'Which animal says "moo" and gives us milk? 🐄', opts: o4('a cow', 'a cat', 'a duck', 'a bird'), ans: 'A', why: 'A <b>cow</b> says moo and gives milk.' },
    { sec: 'Animals', name: 'Question 2', pts: 1, img: A + 'ta2/bird.svg', text: 'Which animal can fly? 🐦', opts: o4('a fish', 'a bird', 'a dog', 'a cow'), ans: 'B', why: 'A <b>bird</b> has wings and can fly.' },
    { sec: 'Animals', name: 'Question 3', pts: 1, img: A + 'ta2/fish.svg', text: 'Which animal lives in water? 🐟', opts: o4('a cat', 'a hen', 'a fish', 'a horse'), ans: 'C', why: 'A <b>fish</b> lives in water.' },
    { sec: 'Animals', name: 'Question 4', pts: 1, img: A + 'ta2/kitten.svg', text: 'A baby cat is a ______. 🐱', opts: o4('puppy', 'calf', 'chick', 'kitten'), ans: 'D', why: 'A baby cat is a <b>kitten</b>.' },
    { sec: 'Animals', name: 'Question 5', pts: 1, img: A + 'ta2/puppy.svg', text: 'A baby dog is a ______. 🐶', opts: o4('puppy', 'kitten', 'chick', 'lamb'), ans: 'A', why: 'A baby dog is a <b>puppy</b>.' },
    { sec: 'Animals', name: 'Question 6', pts: 1, img: A + 'ta2/duck.svg', text: 'Which animal is a farm animal?', opts: o4('a lion', 'a tiger', 'a duck', 'an elephant'), ans: 'C', why: 'A <b>duck</b> 🦆 lives on a farm; the others are wild.' },
    { sec: 'Animals', name: 'Question 7', pts: 1, img: A + 'ta2/tiger.svg', text: 'Which animal is a wild animal?', opts: o4('a hen', 'a tiger', 'a cow', 'a pig'), ans: 'B', why: 'A <b>tiger</b> 🐯 is a wild animal.' },
    { sec: 'Animals', name: 'Question 8', pts: 1, text: 'How many legs does a dog have?', opts: o4('two', 'three', 'four', 'six'), ans: 'C', why: 'A dog has <b>four</b> legs.' },
    { sec: 'Animals', name: 'Question 9', pts: 1, img: A + 'ta2/elephant.svg', text: 'Which animal is very big and has a long nose? 🐘', opts: o4('a mouse', 'an elephant', 'a rabbit', 'a frog'), ans: 'B', why: 'An <b>elephant</b> is big and has a long nose (a trunk).' },
    { sec: 'Animals', name: 'Question 10', pts: 1, img: A + 'ta2/two_cats.svg', text: '"I have got two ______ at home." (more than one cat)', opts: o4('cat', 'cats', 'cates', 'catses'), ans: 'B', why: 'For more than one cat we write <b>cats</b>.' },
  ],
},

/* ═══════════ TEST 9 — VOCABULARY: FOOD AND DRINK ═══════════ */
{
  id: 9609, title: 'Test 9 · Vocabulary: food and drink', time: 20,
  questions: [
    { sec: 'Food', name: 'Question 1', pts: 1, img: A + 'ta2/apple.svg', text: 'Which one is a fruit? 🍎', opts: o4('bread', 'an apple', 'rice', 'milk'), ans: 'B', why: 'An <b>apple</b> is a fruit.' },
    { sec: 'Food', name: 'Question 2', pts: 1, img: A + 'ta2/milk.svg', text: 'Which one is a drink? 🥛', opts: o4('milk', 'cake', 'fish', 'egg'), ans: 'A', why: 'We drink <b>milk</b>.' },
    { sec: 'Food', name: 'Question 3', pts: 1, img: A + 'ta2/carrot.svg', text: 'Which one is a vegetable? 🥕', opts: o4('banana', 'carrot', 'orange', 'candy'), ans: 'B', why: 'A <b>carrot</b> is a vegetable.' },
    { sec: 'Food', name: 'Question 4', pts: 1, text: 'We eat breakfast in the ______.', opts: o4('evening', 'night', 'morning', 'afternoon'), ans: 'C', why: 'Breakfast is the meal in the <b>morning</b>.' },
    { sec: 'Food', name: 'Question 5', pts: 1, img: A + 'ta2/rice.svg', text: '"I’m hungry. Can I have some ______?" 🍚', opts: o4('rice', 'shoes', 'books', 'chairs'), ans: 'A', why: '<b>rice</b> is food; the others are not.' },
    { sec: 'Food', name: 'Question 6', pts: 1, img: A + 'ta2/water.svg', text: '"I’m thirsty. I want some ______." 💧', opts: o4('bread', 'water', 'meat', 'soup'), ans: 'B', why: 'When you are thirsty you drink <b>water</b>.' },
    { sec: 'Food', name: 'Question 7', pts: 1, text: 'Which word is NOT food or drink?', opts: o4('juice', 'noodles', 'pencil', 'cheese'), ans: 'C', why: 'A <b>pencil</b> is not food.' },
    { sec: 'Food', name: 'Question 8', pts: 1, img: A + 'ta2/two_bananas.svg', text: '"Do you like ______?" – "Yes, I do. They are sweet." 🍌🍌', opts: o4('banana', 'bananas', 'bananaes', 'a bananas'), ans: 'B', why: 'We use the plural <b>bananas</b> to talk about them in general.' },
    { sec: 'Food', name: 'Question 9', pts: 1, img: A + 'ta2/banana.svg', text: 'A yellow fruit that monkeys like is a ______. 🍌', opts: o4('banana', 'tomato', 'potato', 'lemon'), ans: 'A', why: 'A <b>banana</b> is yellow and monkeys like it.' },
    { sec: 'Food', name: 'Question 10', pts: 1, img: A + 'ta2/juice.svg', text: '"______ you like some juice?" – "Yes, please."', opts: o4('Are', 'Would', 'Is', 'Does'), ans: 'B', why: 'We offer with <b>Would you like…?</b>' },
  ],
},

/* ═══════════ TEST 10 — VOCABULARY: COLOURS AND SHAPES ═══════════ */
{
  id: 9610, title: 'Test 10 · Vocabulary: colours and shapes', time: 20,
  questions: [
    { sec: 'Colours', name: 'Question 1', pts: 1, img: A + 'ta2/sunny.svg', text: 'The sky on a sunny day is ______. ☀️', opts: o4('blue', 'brown', 'black', 'purple'), ans: 'A', why: 'A sunny sky is <b>blue</b>.' },
    { sec: 'Colours', name: 'Question 2', pts: 1, img: A + 'ta2/green.svg', text: 'Grass and leaves are ______. 🌿', opts: o4('red', 'green', 'pink', 'grey'), ans: 'B', why: 'Grass is <b>green</b>.' },
    { sec: 'Colours', name: 'Question 3', pts: 1, img: A + 'ta2/snow.svg', text: 'Snow is ______. ❄️', opts: o4('black', 'orange', 'white', 'blue'), ans: 'C', why: 'Snow is <b>white</b>.' },
    { sec: 'Colours', name: 'Question 4', pts: 1, img: A + 'ta2/orange_c.svg', text: 'Mix red and yellow and you get ______.', opts: o4('green', 'purple', 'blue', 'orange'), ans: 'D', why: 'Red + yellow = <b>orange</b> 🟠.' },
    { sec: 'Shapes', name: 'Question 5', pts: 1, img: A + 'ta2/triangle.svg', text: 'A shape with three sides is a ______. 🔺', opts: o4('triangle', 'circle', 'square', 'star'), ans: 'A', why: 'A <b>triangle</b> has three sides.' },
    { sec: 'Shapes', name: 'Question 6', pts: 1, img: A + 'ta2/square.svg', text: 'A shape with four equal sides is a ______. ⬜', opts: o4('circle', 'square', 'triangle', 'heart'), ans: 'B', why: 'A <b>square</b> has four equal sides.' },
    { sec: 'Shapes', name: 'Question 7', pts: 1, img: A + 'ta2/circle.svg', text: 'A shape with no corners is a ______. ⭕', opts: o4('square', 'triangle', 'circle', 'rectangle'), ans: 'C', why: 'A <b>circle</b> is round and has no corners.' },
    { sec: 'Shapes', name: 'Question 8', pts: 1, img: A + 'ta2/rectangle.svg', text: 'How many sides does a rectangle have?', opts: o4('three', 'five', 'six', 'four'), ans: 'D', why: 'A rectangle has <b>four</b> sides.' },
    { sec: 'Colours', name: 'Question 9', pts: 1, text: '"______ colour is your bag?" – "It’s red."', opts: o4('What', 'Who', 'Where', 'When'), ans: 'A', why: 'We ask <b>What colour…?</b>' },
    { sec: 'Colours', name: 'Question 10', pts: 1, img: A + 'ta2/shoes.svg', text: '"My shoes ______ black."', opts: o4('is', 'am', 'are', 'be'), ans: 'C', why: '<b>shoes</b> is plural, so we use <b>are</b>.' },
  ],
},

/* ═══════════ TEST 11 — VOCABULARY: BODY AND CLOTHES ═══════════ */
{
  id: 9611, title: 'Test 11 · Vocabulary: body and clothes', time: 20,
  questions: [
    { sec: 'Body', name: 'Question 1', pts: 1, img: A + 'ta2/eyes.svg', text: 'We see with our ______. 👀', opts: o4('ears', 'eyes', 'nose', 'mouth'), ans: 'B', why: 'We see with our <b>eyes</b>.' },
    { sec: 'Body', name: 'Question 2', pts: 1, img: A + 'ta2/ear.svg', text: 'We hear with our ______. 👂', opts: o4('ears', 'hands', 'feet', 'hair'), ans: 'A', why: 'We hear with our <b>ears</b>.' },
    { sec: 'Body', name: 'Question 3', pts: 1, img: A + 'ta2/nose.svg', text: 'We smell with our ______. 👃', opts: o4('eyes', 'ears', 'nose', 'legs'), ans: 'C', why: 'We smell with our <b>nose</b>.' },
    { sec: 'Body', name: 'Question 4', pts: 1, img: A + 'ta2/leg.svg', text: 'We walk with our ______. 🦵', opts: o4('arms', 'ears', 'eyes', 'legs'), ans: 'D', why: 'We walk with our <b>legs</b>.' },
    { sec: 'Body', name: 'Question 5', pts: 1, img: A + 'ta2/two_hands.svg', text: 'How many fingers are there on two hands? ✋✋', opts: o4('ten', 'five', 'eight', 'twelve'), ans: 'A', why: 'Five and five make <b>ten</b>.' },
    { sec: 'Clothes', name: 'Question 6', pts: 1, img: A + 'ta2/shoes.svg', text: 'We wear ______ on our feet. 👟', opts: o4('a hat', 'shoes', 'gloves', 'a scarf'), ans: 'B', why: 'We wear <b>shoes</b> on our feet.' },
    { sec: 'Clothes', name: 'Question 7', pts: 1, img: A + 'ta2/cap.svg', text: 'We wear a ______ on our head. 🧢', opts: o4('sock', 'shoe', 'cap', 'shirt'), ans: 'C', why: 'We wear a <b>cap</b> on our head.' },
    { sec: 'Clothes', name: 'Question 8', pts: 1, img: A + 'ta2/coat.svg', text: 'When it is cold we wear a ______. 🧥', opts: o4('coat', 'swimsuit', 'sandal', 'skirt'), ans: 'A', why: 'A <b>coat</b> keeps us warm.' },
    { sec: 'Clothes', name: 'Question 9', pts: 1, text: '"I ______ a blue T-shirt today."', opts: o4('am wear', 'wearing', 'am wearing', 'wears'), ans: 'C', why: 'For now we say <b>am wearing</b> (present continuous).' },
    { sec: 'Clothes', name: 'Question 10', pts: 1, img: A + 'ta2/trousers.svg', text: 'Which word is a clothes word?', opts: o4('trousers', 'tiger', 'table', 'tomato'), ans: 'A', why: '<b>trousers</b> 👖 are clothes.' },
  ],
},

/* ═══════════ TEST 12 — VOCABULARY: WEATHER, DAYS AND MONTHS ═══════════ */
{
  id: 9612, title: 'Test 12 · Vocabulary: weather, days and months', time: 20,
  questions: [
    { sec: 'Weather', name: 'Question 1', pts: 1, img: A + 'ta2/sunny.svg', text: '"How is the weather?" – "It’s ______." ☀️', opts: o4('sunny', 'rainy', 'snowy', 'windy'), ans: 'A', why: 'With the sun ☀️ we say it is <b>sunny</b>.' },
    { sec: 'Weather', name: 'Question 2', pts: 1, img: A + 'ta2/rainy.svg', text: '"It’s ______. Take your umbrella!" 🌧️', opts: o4('sunny', 'rainy', 'hot', 'dry'), ans: 'B', why: 'We need an umbrella when it is <b>rainy</b>.' },
    { sec: 'Weather', name: 'Question 3', pts: 1, img: A + 'ta2/snow.svg', text: 'In winter it is often ______. ❄️', opts: o4('hot', 'warm', 'cold', 'sunny'), ans: 'C', why: 'Winter is usually <b>cold</b>.' },
    { sec: 'Days', name: 'Question 4', pts: 1, img: A + 'ta2/week7.svg', text: 'What day comes after Friday?', opts: o4('Thursday', 'Sunday', 'Monday', 'Saturday'), ans: 'D', why: 'After Friday comes <b>Saturday</b>.' },
    { sec: 'Days', name: 'Question 5', pts: 1, img: A + 'ta2/week7.svg', text: 'How many days are there in a week?', opts: o4('seven', 'five', 'ten', 'twelve'), ans: 'A', why: 'A week has <b>seven</b> days.' },
    { sec: 'Days', name: 'Question 6', pts: 1, img: A + 'ta2/week7.svg', text: 'Which two days are the weekend?', opts: o4('Monday and Tuesday', 'Saturday and Sunday', 'Wednesday and Thursday', 'Friday and Monday'), ans: 'B', why: 'The weekend is <b>Saturday and Sunday</b>.' },
    { sec: 'Months', name: 'Question 7', pts: 1, img: A + 'ta2/months.svg', text: 'Which is the first month of the year?', opts: o4('March', 'June', 'January', 'December'), ans: 'C', why: 'The first month is <b>January</b>.' },
    { sec: 'Months', name: 'Question 8', pts: 1, text: 'How many months are there in a year?', opts: o4('ten', 'eleven', 'seven', 'twelve'), ans: 'D', why: 'A year has <b>twelve</b> months.' },
    { sec: 'Months', name: 'Question 9', pts: 1, img: A + 'ta2/months.svg', text: 'Which month comes after May?', opts: o4('June', 'April', 'July', 'March'), ans: 'A', why: 'After May comes <b>June</b>.' },
    { sec: 'Weather', name: 'Question 10', pts: 1, text: 'Days and months always start with a ______ letter.', opts: o4('small', 'capital', 'red', 'silent'), ans: 'B', why: 'Monday, January… always begin with a <b>capital</b> letter.' },
  ],
},

/* ═══════════ TEST 13 — GRAMMAR: NOUNS (ONE AND MANY) ═══════════ */
{
  id: 9613, title: 'Test 13 · Grammar: nouns, one and many', time: 20,
  questions: [
    { sec: 'Nouns', name: 'Question 1', pts: 1, img: A + 'ta2/two_books.svg', text: 'One book, two ______. 📚', opts: o4('books', 'bookes', 'bookies', 'book'), ans: 'A', why: 'We add <b>-s</b>: one book → two <b>books</b>.' },
    { sec: 'Nouns', name: 'Question 2', pts: 1, text: 'One box, two ______.', opts: o4('boxs', 'boxes', 'boxies', 'box'), ans: 'B', why: 'After <b>-x</b> we add <b>-es</b>: <b>boxes</b>.' },
    { sec: 'Nouns', name: 'Question 3', pts: 1, img: A + 'ta2/two_babies.svg', text: 'One baby, two ______. 👶', opts: o4('babys', 'babyes', 'babies', 'baby'), ans: 'C', why: 'Consonant + y → we change y to <b>-ies</b>: <b>babies</b>.' },
    { sec: 'Nouns', name: 'Question 4', pts: 1, text: 'One child, three ______.', opts: o4('childs', 'childes', 'childrens', 'children'), ans: 'D', why: '<b>child</b> has an irregular plural: <b>children</b>.' },
    { sec: 'Nouns', name: 'Question 5', pts: 1, img: A + 'ta2/foot.svg', text: 'One foot, two ______. 🦶', opts: o4('feet', 'foots', 'footes', 'feets'), ans: 'A', why: 'foot → <b>feet</b> (irregular).' },
    { sec: 'Nouns', name: 'Question 6', pts: 1, text: 'Which word is a noun (a thing)?', opts: o4('run', 'table', 'happy', 'quickly'), ans: 'B', why: 'A <b>table</b> is a thing, so it is a noun.' },
    { sec: 'Nouns', name: 'Question 7', pts: 1, text: 'Which sentence is correct?', opts: o4('I have two dog.', 'I have two dogs.', 'I have two doges.', 'I have two dogses.'), ans: 'B', why: 'After <b>two</b> we need the plural: <b>dogs</b>.' },
    { sec: 'Nouns', name: 'Question 8', pts: 1, text: 'One man, two ______.', opts: o4('mans', 'manes', 'men', 'mens'), ans: 'C', why: 'man → <b>men</b> (irregular).' },
    { sec: 'Nouns', name: 'Question 9', pts: 1, img: A + 'ta2/tooth.svg', text: 'One tooth, many ______. 🦷', opts: o4('tooths', 'toothes', 'teeths', 'teeth'), ans: 'D', why: 'tooth → <b>teeth</b> (irregular).' },
    { sec: 'Nouns', name: 'Question 10', pts: 1, img: A + 'ta2/watch.svg', text: 'One watch, two ______. ⌚', opts: o4('watches', 'watchs', 'watchies', 'watch'), ans: 'A', why: 'After <b>-ch</b> we add <b>-es</b>: <b>watches</b>.' },
  ],
},

/* ═══════════ TEST 14 — MECHANICS: PROPER NOUNS AND CAPITAL LETTERS ═══════════ */
{
  id: 9614, title: 'Test 14 · Capital letters and proper nouns', time: 20,
  questions: [
    { sec: 'Capitals', name: 'Question 1', pts: 1, text: 'Which sentence is written correctly?', opts: o4('my name is nam.', 'My name is Nam.', 'my Name is nam.', 'MY name is nam.'), ans: 'B', why: 'A sentence starts with a capital, and a person’s name takes a capital: <b>My name is Nam.</b>' },
    { sec: 'Capitals', name: 'Question 2', pts: 1, text: 'Which word must always have a capital letter?', opts: o4('city', 'dog', 'Ha Noi', 'school'), ans: 'C', why: '<b>Ha Noi</b> is the name of a city, so it is a proper noun.' },
    { sec: 'Capitals', name: 'Question 3', pts: 1, text: 'Choose the correct sentence.', opts: o4('I go to school on monday.', 'i go to school on Monday.', 'I go to school on Monday.', 'i go to school on monday.'), ans: 'C', why: '<b>I</b> and the day <b>Monday</b> both take capitals.' },
    { sec: 'Capitals', name: 'Question 4', pts: 1, text: 'The word <b>I</b> is written with ______.', opts: o4('a small letter', 'a capital letter', 'two letters', 'a full stop'), ans: 'B', why: 'We always write <b>I</b> with a capital letter.' },
    { sec: 'Proper nouns', name: 'Question 5', pts: 1, text: 'Which one is a proper noun?', opts: o4('teacher', 'Miss Lan', 'book', 'bag'), ans: 'B', why: '<b>Miss Lan</b> is a person’s name.' },
    { sec: 'Proper nouns', name: 'Question 6', pts: 1, text: 'Which one is NOT a proper noun?', opts: o4('Vietnam', 'January', 'river', 'Mekong'), ans: 'C', why: '<b>river</b> is a common noun; the others are names.' },
    { sec: 'Capitals', name: 'Question 7', pts: 1, img: A + 'ta2/months.svg', text: 'Choose the correct way to write the month.', opts: o4('april', 'April', 'APril', 'aPril'), ans: 'B', why: 'Months take a capital letter: <b>April</b>.' },
    { sec: 'Capitals', name: 'Question 8', pts: 1, text: 'Which sentence is correct?', opts: o4('we live in Hue.', 'We live in hue.', 'we live in hue.', 'We live in Hue.'), ans: 'D', why: 'Start the sentence with a capital and write the city name <b>Hue</b> with a capital.' },
    { sec: 'Capitals', name: 'Question 9', pts: 1, text: 'Where do we always use a capital letter?', opts: o4('at the start of a sentence', 'in the middle of a word', 'after every letter', 'never'), ans: 'A', why: 'Every sentence begins with a capital letter.' },
    { sec: 'Proper nouns', name: 'Question 10', pts: 1, text: 'Which group is all proper nouns?', opts: o4('dog, cat, bird', 'Nam, Lan, Tom', 'red, blue, green', 'run, jump, swim'), ans: 'B', why: '<b>Nam, Lan, Tom</b> are all names of people.' },
  ],
},

/* ═══════════ TEST 15 — MECHANICS: PUNCTUATION ═══════════ */
{
  id: 9615, title: 'Test 15 · Punctuation: . ? !', time: 20,
  questions: [
    { sec: 'Punctuation', name: 'Question 1', pts: 1, text: 'Which mark do we put at the end of a question?', opts: o4('.', '?', '!', ','), ans: 'B', why: 'A question ends with a question mark <b>?</b>' },
    { sec: 'Punctuation', name: 'Question 2', pts: 1, text: 'Choose the correct sentence.', opts: o4('What is your name.', 'What is your name!', 'What is your name?', 'What is your name,'), ans: 'C', why: 'This is a question, so it needs a <b>?</b>' },
    { sec: 'Punctuation', name: 'Question 3', pts: 1, text: 'Choose the correct sentence.', opts: o4('I like cats?', 'I like cats.', 'I like cats,', 'I like cats'), ans: 'B', why: 'A telling sentence ends with a full stop <b>.</b>' },
    { sec: 'Punctuation', name: 'Question 4', pts: 1, text: 'Which mark shows a strong feeling, like "Help ___"?', opts: o4(',', '.', '?', '!'), ans: 'D', why: 'An exclamation mark <b>!</b> shows a strong feeling.' },
    { sec: 'Punctuation', name: 'Question 5', pts: 1, text: 'Choose the correct sentence.', opts: o4('Wow, what a big cake!', 'Wow what a big cake', 'wow, what a big cake?', 'Wow. what a big cake.'), ans: 'A', why: 'It starts with a capital, uses a comma and ends with <b>!</b>' },
    { sec: 'Punctuation', name: 'Question 6', pts: 1, text: 'What do we call this mark: <b>.</b>', opts: o4('a comma', 'a full stop', 'a question mark', 'an apostrophe'), ans: 'B', why: 'The mark <b>.</b> is a full stop (a period).' },
    { sec: 'Punctuation', name: 'Question 7', pts: 1, text: 'Where do we need a comma? "I like apples ___ bananas and milk."', opts: o4('after "I"', 'after "like"', 'after "apples"', 'nowhere'), ans: 'C', why: 'In a list we put a comma between the items: apples<b>,</b> bananas and milk.' },
    { sec: 'Punctuation', name: 'Question 8', pts: 1, text: 'Choose the correct sentence.', opts: o4('Where do you live.', 'Where do you live!', 'where do you live?', 'Where do you live?'), ans: 'D', why: 'A capital <b>W</b> at the start and a <b>?</b> at the end.' },
    { sec: 'Punctuation', name: 'Question 9', pts: 1, text: '"Is this your book ___"', opts: o4('?', '.', '!', ','), ans: 'A', why: 'It is a question, so we use <b>?</b>' },
    { sec: 'Punctuation', name: 'Question 10', pts: 1, img: A + 'ta2/three_stops.svg', text: 'How many sentences are here? "I am Nam. I am eight. I like football."', opts: o4('one', 'two', 'three', 'four'), ans: 'C', why: 'There are <b>three</b> full stops, so there are three sentences.' },
  ],
},

/* ═══════════ TEST 16 — GRAMMAR: THE VERB TO BE ═══════════ */
{
  id: 9616, title: 'Test 16 · Grammar: am, is, are', time: 20,
  questions: [
    { sec: 'To be', name: 'Question 1', pts: 1, text: '"I ______ a pupil."', opts: o4('am', 'is', 'are', 'be'), ans: 'A', why: 'With <b>I</b> we use <b>am</b>.' },
    { sec: 'To be', name: 'Question 2', pts: 1, text: '"He ______ my brother."', opts: o4('am', 'is', 'are', 'be'), ans: 'B', why: 'With <b>he</b> we use <b>is</b>.' },
    { sec: 'To be', name: 'Question 3', pts: 1, text: '"They ______ my friends."', opts: o4('am', 'is', 'are', 'be'), ans: 'C', why: 'With <b>they</b> we use <b>are</b>.' },
    { sec: 'To be', name: 'Question 4', pts: 1, img: A + 'ta2/on.svg', text: '"The cat ______ on the mat." 🐱', opts: o4('am', 'are', 'be', 'is'), ans: 'D', why: '<b>The cat</b> is one thing (it), so we use <b>is</b>.' },
    { sec: 'To be', name: 'Question 5', pts: 1, text: '"My books ______ on the desk."', opts: o4('are', 'is', 'am', 'be'), ans: 'A', why: '<b>books</b> is plural, so we use <b>are</b>.' },
    { sec: 'To be', name: 'Question 6', pts: 1, text: '"______ you happy?" – "Yes, I am."', opts: o4('Is', 'Are', 'Am', 'Do'), ans: 'B', why: 'With <b>you</b> we ask <b>Are you…?</b>' },
    { sec: 'To be', name: 'Question 7', pts: 1, text: '"She ______ not at home."', opts: o4('am', 'are', 'is', 'be'), ans: 'C', why: 'With <b>she</b> we use <b>is</b> not.' },
    { sec: 'To be', name: 'Question 8', pts: 1, img: A + 'ta2/bird.svg', text: '"There ______ a bird in the tree." 🐦', opts: o4('are', 'am', 'be', 'is'), ans: 'D', why: 'One bird → There <b>is</b>.' },
    { sec: 'To be', name: 'Question 9', pts: 1, img: A + 'ta2/five_apples.svg', text: '"There ______ five apples on the table." 🍎', opts: o4('are', 'is', 'am', 'be'), ans: 'A', why: 'Five apples (plural) → There <b>are</b>.' },
    { sec: 'To be', name: 'Question 10', pts: 1, text: 'Which sentence is correct?', opts: o4('We is students.', 'We are students.', 'We am students.', 'We be students.'), ans: 'B', why: 'With <b>we</b> we use <b>are</b>.' },
  ],
},

/* ═══════════ TEST 17 — GRAMMAR: HAVE GOT AND HAS GOT ═══════════ */
{
  id: 9617, title: 'Test 17 · Grammar: have got and has got', time: 20,
  questions: [
    { sec: 'Have got', name: 'Question 1', pts: 1, img: A + 'ta2/schoolbag.svg', text: '"I ______ got a new bag." 🎒', opts: o4('have', 'has', 'is', 'am'), ans: 'A', why: 'With <b>I</b> we use <b>have</b> got.' },
    { sec: 'Have got', name: 'Question 2', pts: 1, text: '"She ______ got a red pen."', opts: o4('have', 'has', 'are', 'am'), ans: 'B', why: 'With <b>she</b> we use <b>has</b> got.' },
    { sec: 'Have got', name: 'Question 3', pts: 1, text: '"They ______ got two cats." 🐱🐱', opts: o4('has', 'is', 'have', 'am'), ans: 'C', why: 'With <b>they</b> we use <b>have</b> got.' },
    { sec: 'Have got', name: 'Question 4', pts: 1, img: A + 'ta2/bike.svg', text: '"My brother ______ got a bike." 🚲', opts: o4('have', 'are', 'am', 'has'), ans: 'D', why: '<b>My brother</b> is one person (he), so <b>has</b> got.' },
    { sec: 'Have got', name: 'Question 5', pts: 1, text: '"______ you got a ruler?" – "Yes, I have."', opts: o4('Have', 'Has', 'Are', 'Is'), ans: 'A', why: 'With <b>you</b> we ask <b>Have you got…?</b>' },
    { sec: 'Have got', name: 'Question 6', pts: 1, text: '"______ he got a sister?" – "No, he hasn’t."', opts: o4('Have', 'Has', 'Is', 'Do'), ans: 'B', why: 'With <b>he</b> we ask <b>Has he got…?</b>' },
    { sec: 'Have got', name: 'Question 7', pts: 1, text: '"I haven’t ______ any money."', opts: o4('get', 'gets', 'got', 'getting'), ans: 'C', why: 'The form is <b>haven’t got</b>.' },
    { sec: 'Have got', name: 'Question 8', pts: 1, img: A + 'ta2/puppy.svg', text: '"A cat ______ got four legs."', opts: o4('have', 'are', 'am', 'has'), ans: 'D', why: 'A cat = it, so we use <b>has</b> got.' },
    { sec: 'Have got', name: 'Question 9', pts: 1, text: 'Which sentence is correct?', opts: o4('We have got a big garden.', 'We has got a big garden.', 'We got have a big garden.', 'We is got a big garden.'), ans: 'A', why: 'With <b>we</b> we use <b>have got</b>.' },
    { sec: 'Have got', name: 'Question 10', pts: 1, img: A + 'ta2/shoes.svg', text: '"My friends ______ got new shoes."', opts: o4('has', 'have', 'is', 'was'), ans: 'B', why: '<b>My friends</b> is plural (they), so <b>have</b> got.' },
  ],
},

/* ═══════════ TEST 18 — GRAMMAR: PRESENT CONTINUOUS ═══════════ */
{
  id: 9618, title: 'Test 18 · Grammar: present continuous', time: 20,
  questions: [
    { sec: 'Present continuous', name: 'Question 1', pts: 1, img: A + 'ta2/sleep.svg', text: '"Look! The baby ______ sleeping." 👶', opts: o4('is', 'are', 'am', 'be'), ans: 'A', why: 'The baby = it, so we use <b>is</b> sleeping.' },
    { sec: 'Present continuous', name: 'Question 2', pts: 1, img: A + 'ta2/football.svg', text: '"The children ______ playing football." ⚽', opts: o4('is', 'are', 'am', 'be'), ans: 'B', why: '<b>children</b> is plural (they), so we use <b>are</b>.' },
    { sec: 'Present continuous', name: 'Question 3', pts: 1, img: A + 'ta2/read.svg', text: '"I ______ reading a book now." 📖', opts: o4('is', 'are', 'am', 'be'), ans: 'C', why: 'With <b>I</b> we use <b>am</b> reading.' },
    { sec: 'Present continuous', name: 'Question 4', pts: 1, img: A + 'ta2/sing.svg', text: '"She is ______ a song." 🎵', opts: o4('sing', 'sings', 'sang', 'singing'), ans: 'D', why: 'After is/am/are we add <b>-ing</b>: <b>singing</b>.' },
    { sec: 'Present continuous', name: 'Question 5', pts: 1, img: A + 'ta2/walk.svg', text: '"We are ______ to school."', opts: o4('walking', 'walk', 'walks', 'walked'), ans: 'A', why: 'After <b>are</b> we use <b>walking</b>.' },
    { sec: 'Present continuous', name: 'Question 6', pts: 1, text: '"What ______ you doing?" – "I’m eating."', opts: o4('is', 'are', 'am', 'do'), ans: 'B', why: 'With <b>you</b> we ask <b>What are you doing?</b>' },
    { sec: 'Present continuous', name: 'Question 7', pts: 1, img: A + 'ta2/run.svg', text: 'run → ______ing', opts: o4('runing', 'runnning', 'running', 'runeing'), ans: 'C', why: 'We double the <b>n</b>: <b>running</b> 🏃.' },
    { sec: 'Present continuous', name: 'Question 8', pts: 1, img: A + 'ta2/write.svg', text: 'write → ______', opts: o4('writeing', 'writting', 'writes', 'writing'), ans: 'D', why: 'We drop the silent e: <b>writing</b> ✍️.' },
    { sec: 'Present continuous', name: 'Question 9', pts: 1, img: A + 'ta2/cook.svg', text: '"My mother is ______ dinner now." 🍳', opts: o4('cooking', 'cook', 'cooks', 'cooked'), ans: 'A', why: 'After <b>is</b> we use <b>cooking</b>.' },
    { sec: 'Present continuous', name: 'Question 10', pts: 1, img: A + 'ta2/swim.svg', text: 'Which sentence is correct?', opts: o4('He are swimming.', 'He is swimming.', 'He am swimming.', 'He be swimming.'), ans: 'B', why: 'With <b>he</b> we use <b>is</b> swimming 🏊.' },
  ],
},

/* ═══════════ TEST 19 — GRAMMAR: PRESENT SIMPLE ═══════════ */
{
  id: 9619, title: 'Test 19 · Grammar: present simple', time: 20,
  questions: [
    { sec: 'Present simple', name: 'Question 1', pts: 1, img: A + 'ta2/milk.svg', text: '"I ______ milk every morning." 🥛', opts: o4('drink', 'drinks', 'drinking', 'drank'), ans: 'A', why: 'With <b>I</b> we use the plain verb <b>drink</b>.' },
    { sec: 'Present simple', name: 'Question 2', pts: 1, img: A + 'ta2/football.svg', text: '"He ______ football on Sunday." ⚽', opts: o4('play', 'plays', 'playing', 'played'), ans: 'B', why: 'With <b>he</b> we add <b>-s</b>: <b>plays</b>.' },
    { sec: 'Present simple', name: 'Question 3', pts: 1, img: A + 'ta2/music.svg', text: '"My sister ______ to music." 🎧', opts: o4('listen', 'listening', 'listens', 'listened'), ans: 'C', why: '<b>My sister</b> = she, so we add <b>-s</b>: listens.' },
    { sec: 'Present simple', name: 'Question 4', pts: 1, text: '"We ______ in Ha Noi."', opts: o4('lives', 'living', 'lived', 'live'), ans: 'D', why: 'With <b>we</b> we use the plain verb <b>live</b>.' },
    { sec: 'Present simple', name: 'Question 5', pts: 1, img: A + 'ta2/icecream.svg', text: '"______ you like ice cream?" – "Yes, I do." 🍦', opts: o4('Do', 'Does', 'Is', 'Are'), ans: 'A', why: 'With <b>you</b> we ask with <b>Do</b>.' },
    { sec: 'Present simple', name: 'Question 6', pts: 1, text: '"______ she go to school by bus?"', opts: o4('Do', 'Does', 'Is', 'Are'), ans: 'B', why: 'With <b>she</b> we ask with <b>Does</b>.' },
    { sec: 'Present simple', name: 'Question 7', pts: 1, text: '"He ______ not like fish."', opts: o4('do', 'is', 'does', 'are'), ans: 'C', why: 'With <b>he</b> the negative is <b>does not</b> (doesn’t).' },
    { sec: 'Present simple', name: 'Question 8', pts: 1, text: 'go → he ______', opts: o4('gos', 'goe', 'going', 'goes'), ans: 'D', why: 'After <b>o</b> we add <b>-es</b>: he <b>goes</b>.' },
    { sec: 'Present simple', name: 'Question 9', pts: 1, text: 'study → she ______', opts: o4('studies', 'studys', 'studyes', 'studing'), ans: 'A', why: 'Consonant + y → <b>-ies</b>: she <b>studies</b>.' },
    { sec: 'Present simple', name: 'Question 10', pts: 1, img: A + 'ta2/shop.svg', text: 'Which sentence is correct?', opts: o4('My father work in a shop.', 'My father works in a shop.', 'My father working in a shop.', 'My father are work in a shop.'), ans: 'B', why: '<b>My father</b> = he, so the verb takes <b>-s</b>: works.' },
  ],
},

/* ═══════════ TEST 20 — GRAMMAR: PRONOUNS AND POSSESSIVES ═══════════ */
{
  id: 9620, title: 'Test 20 · Grammar: pronouns and possessives', time: 20,
  questions: [
    { sec: 'Pronouns', name: 'Question 1', pts: 1, text: '"Nam is my friend. ______ is eight."', opts: o4('He', 'She', 'It', 'They'), ans: 'A', why: 'Nam is a boy, so we use <b>He</b>.' },
    { sec: 'Pronouns', name: 'Question 2', pts: 1, text: '"Lan is my sister. ______ likes cats."', opts: o4('He', 'She', 'It', 'We'), ans: 'B', why: 'Lan is a girl, so we use <b>She</b>.' },
    { sec: 'Pronouns', name: 'Question 3', pts: 1, img: A + 'ta2/puppy.svg', text: '"This is my dog. ______ is very big." 🐕', opts: o4('She', 'He', 'It', 'They'), ans: 'C', why: 'For an animal or a thing we use <b>It</b>.' },
    { sec: 'Pronouns', name: 'Question 4', pts: 1, text: '"Tom and Mai are here. ______ are my friends."', opts: o4('He', 'She', 'It', 'They'), ans: 'D', why: 'For two people we use <b>They</b>.' },
    { sec: 'Possessives', name: 'Question 5', pts: 1, text: '"This is my brother. ______ name is Minh."', opts: o4('His', 'Her', 'Its', 'Their'), ans: 'A', why: 'Minh is a boy, so we use <b>His</b> name.' },
    { sec: 'Possessives', name: 'Question 6', pts: 1, img: A + 'ta2/schoolbag.svg', text: '"That is Mai. ______ bag is pink."', opts: o4('His', 'Her', 'Its', 'Our'), ans: 'B', why: 'Mai is a girl, so we use <b>Her</b> bag.' },
    { sec: 'Possessives', name: 'Question 7', pts: 1, text: '"We are pupils. This is ______ classroom."', opts: o4('their', 'your', 'our', 'his'), ans: 'C', why: 'With <b>we</b> we use <b>our</b>.' },
    { sec: 'Possessives', name: 'Question 8', pts: 1, text: '"Tom and Lan have a cat. ______ cat is white."', opts: o4('Our', 'His', 'Her', 'Their'), ans: 'D', why: 'The cat belongs to both, so we use <b>Their</b>.' },
    { sec: 'Possessives', name: 'Question 9', pts: 1, text: '"This book is ______." (it belongs to me)', opts: o4('mine', 'my', 'me', 'I'), ans: 'A', why: 'After <b>is</b> and with no noun we use <b>mine</b>.' },
    { sec: 'Pronouns', name: 'Question 10', pts: 1, text: '"Can you help ______, please?" (help me)', opts: o4('I', 'me', 'my', 'mine'), ans: 'B', why: 'After the verb <b>help</b> we use <b>me</b>.' },
  ],
},

/* ═══════════ TEST 21 — GRAMMAR: ADJECTIVES ═══════════ */
{
  id: 9621, title: 'Test 21 · Grammar: adjectives', time: 20,
  questions: [
    { sec: 'Adjectives', name: 'Question 1', pts: 1, text: 'Which word is an adjective (it describes)?', opts: o4('big', 'run', 'table', 'quickly'), ans: 'A', why: '<b>big</b> tells us about a thing, so it is an adjective.' },
    { sec: 'Adjectives', name: 'Question 2', pts: 1, img: A + 'ta2/big_small.svg', text: '"An elephant is very ______." 🐘', opts: o4('small', 'big', 'thin', 'short'), ans: 'B', why: 'An elephant is <b>big</b>.' },
    { sec: 'Adjectives', name: 'Question 3', pts: 1, img: A + 'ta2/hot_cold.svg', text: 'The opposite of <b>hot</b> is ______. 🔥❄️', opts: o4('warm', 'dry', 'cold', 'wet'), ans: 'C', why: 'The opposite of hot is <b>cold</b>.' },
    { sec: 'Adjectives', name: 'Question 4', pts: 1, img: A + 'ta2/happy_sad.svg', text: 'The opposite of <b>happy</b> is ______. 😀😢', opts: o4('nice', 'kind', 'funny', 'sad'), ans: 'D', why: 'The opposite of happy is <b>sad</b>.' },
    { sec: 'Adjectives', name: 'Question 5', pts: 1, text: 'Which sentence is correct?', opts: o4('I have a red car.', 'I have a car red.', 'I have red a car.', 'I have car a red.'), ans: 'A', why: 'In English the adjective goes BEFORE the noun: a <b>red car</b>.' },
    { sec: 'Adjectives', name: 'Question 6', pts: 1, img: A + 'ta2/tea.svg', text: '"The tea is ______. Don’t drink it now!" ☕', opts: o4('cold', 'hot', 'old', 'new'), ans: 'B', why: 'We wait when the tea is <b>hot</b>.' },
    { sec: 'Adjectives', name: 'Question 7', pts: 1, text: 'The opposite of <b>long</b> is ______.', opts: o4('tall', 'big', 'short', 'wide'), ans: 'C', why: 'The opposite of long is <b>short</b>.' },
    { sec: 'Adjectives', name: 'Question 8', pts: 1, img: A + 'ta2/old_young.svg', text: '"My grandfather is ______, and my baby sister is young."', opts: o4('new', 'nice', 'tall', 'old'), ans: 'D', why: 'The opposite of young is <b>old</b>.' },
    { sec: 'Adjectives', name: 'Question 9', pts: 1, img: A + 'ta2/cake.svg', text: 'Which word can describe a cake? 🎂', opts: o4('sweet', 'read', 'jump', 'sit'), ans: 'A', why: 'A cake can be <b>sweet</b>.' },
    { sec: 'Adjectives', name: 'Question 10', pts: 1, text: 'Which sentence uses an adjective?', opts: o4('She runs fast.', 'She has a new bike.', 'She goes home.', 'She is reading.'), ans: 'B', why: '<b>new</b> describes the bike, so it is an adjective.' },
  ],
},

/* ═══════════ TEST 22 — GRAMMAR: A, AN AND THE ═══════════ */
{
  id: 9622, title: 'Test 22 · Grammar: a, an and the', time: 20,
  questions: [
    { sec: 'Articles', name: 'Question 1', pts: 1, img: A + 'ta2/apple.svg', text: '"I have ______ apple." 🍎', opts: o4('an', 'a', 'the', 'some'), ans: 'A', why: '<b>apple</b> begins with a vowel sound, so we use <b>an</b>.' },
    { sec: 'Articles', name: 'Question 2', pts: 1, text: '"She has ______ book." 📕', opts: o4('an', 'a', 'some', 'any'), ans: 'B', why: '<b>book</b> begins with a consonant sound, so we use <b>a</b>.' },
    { sec: 'Articles', name: 'Question 3', pts: 1, img: A + 'ta2/egg.svg', text: '"There is ______ egg on the plate." 🥚', opts: o4('a', 'the', 'an', 'any'), ans: 'C', why: '<b>egg</b> begins with a vowel sound → <b>an</b>.' },
    { sec: 'Articles', name: 'Question 4', pts: 1, img: A + 'ta2/moon.svg', text: '"Look at ______ moon tonight!" 🌙', opts: o4('a', 'an', 'some', 'the'), ans: 'D', why: 'There is only one moon, so we say <b>the</b> moon.' },
    { sec: 'Articles', name: 'Question 5', pts: 1, text: '"He is ______ teacher." 👨‍🏫', opts: o4('a', 'an', 'the', 'some'), ans: 'A', why: '<b>teacher</b> begins with a consonant sound → <b>a</b>.' },
    { sec: 'Articles', name: 'Question 6', pts: 1, img: A + 'ta2/umbrella.svg', text: '"I see ______ umbrella." ☂️', opts: o4('a', 'an', 'the', 'any'), ans: 'B', why: '<b>umbrella</b> begins with a vowel sound → <b>an</b>.' },
    { sec: 'Articles', name: 'Question 7', pts: 1, text: '"I have a cat. ______ cat is black." 🐈‍⬛', opts: o4('A', 'An', 'The', 'Some'), ans: 'C', why: 'We already know which cat, so we say <b>The</b> cat.' },
    { sec: 'Articles', name: 'Question 8', pts: 1, text: '"My father is ______ engineer."', opts: o4('a', 'the', 'some', 'an'), ans: 'D', why: '<b>engineer</b> begins with a vowel sound → <b>an</b>.' },
    { sec: 'Articles', name: 'Question 9', pts: 1, img: A + 'ta2/orange_f.svg', text: '"Would you like ______ orange?" 🍊', opts: o4('an', 'a', 'the', 'any'), ans: 'A', why: '<b>orange</b> begins with a vowel sound → <b>an</b>.' },
    { sec: 'Articles', name: 'Question 10', pts: 1, img: A + 'ta2/icecream.svg', text: 'Which sentence is correct?', opts: o4('I want a ice cream.', 'I want an ice cream.', 'I want an cake.', 'I want a apple.'), ans: 'B', why: '<b>ice cream</b> begins with a vowel sound, so we use <b>an</b> 🍦.' },
  ],
},

/* ═══════════ TEST 23 — GRAMMAR: PREPOSITIONS OF PLACE ═══════════ */
{
  id: 9623, title: 'Test 23 · Grammar: prepositions of place', time: 20,
  questions: [
    { sec: 'Prepositions', name: 'Question 1', pts: 1, img: A + 'ta2/on.svg', text: '"The book is ______ the table." (on top of it) 📕', opts: o4('on', 'in', 'under', 'behind'), ans: 'A', why: 'On top of something = <b>on</b>.' },
    { sec: 'Prepositions', name: 'Question 2', pts: 1, img: A + 'ta2/in.svg', text: '"The pen is ______ the box." (inside it)', opts: o4('on', 'in', 'under', 'next to'), ans: 'B', why: 'Inside something = <b>in</b>.' },
    { sec: 'Prepositions', name: 'Question 3', pts: 1, img: A + 'ta2/under.svg', text: '"The cat is ______ the chair." (below it) 🐱🪑', opts: o4('on', 'in', 'under', 'above'), ans: 'C', why: 'Below something = <b>under</b>.' },
    { sec: 'Prepositions', name: 'Question 4', pts: 1, img: A + 'ta2/behind.svg', text: '"The ball is ______ the door." (we cannot see it) ⚽🚪', opts: o4('on', 'in', 'under', 'behind'), ans: 'D', why: 'At the back of something = <b>behind</b>.' },
    { sec: 'Prepositions', name: 'Question 5', pts: 1, img: A + 'ta2/nextto.svg', text: '"Lan sits ______ to me." (very close, at my side)', opts: o4('next', 'on', 'in', 'under'), ans: 'A', why: 'At my side = <b>next to</b>.' },
    { sec: 'Prepositions', name: 'Question 6', pts: 1, text: '"The bird is ______ the tree." 🐦🌳', opts: o4('under', 'in', 'behind', 'between'), ans: 'B', why: 'A bird sits <b>in</b> a tree.' },
    { sec: 'Prepositions', name: 'Question 7', pts: 1, img: A + 'ta2/between.svg', text: '"The school is ______ the park and the shop."', opts: o4('on', 'under', 'between', 'in'), ans: 'C', why: 'With two places on each side we use <b>between</b>.' },
    { sec: 'Prepositions', name: 'Question 8', pts: 1, text: '"I live ______ Ha Noi."', opts: o4('on', 'at', 'under', 'in'), ans: 'D', why: 'For a city we use <b>in</b>: in Ha Noi.' },
    { sec: 'Prepositions', name: 'Question 9', pts: 1, img: A + 'ta2/picture.svg', text: '"The picture is ______ the wall." 🖼️', opts: o4('on', 'in', 'under', 'between'), ans: 'A', why: 'A picture hangs <b>on</b> the wall.' },
    { sec: 'Prepositions', name: 'Question 10', pts: 1, text: '"Where is my bag?" – "It’s ______ your desk."', opts: o4('of', 'on', 'to', 'by the'), ans: 'B', why: 'We say it is <b>on</b> your desk.' },
  ],
},

/* ═══════════ TEST 24 — MECHANICS: CONTRACTIONS ═══════════ */
{
  id: 9624, title: 'Test 24 · Contractions (I’m, isn’t, don’t)', time: 20,
  questions: [
    { sec: 'Contractions', name: 'Question 1', pts: 1, text: '<b>I am</b> is short for ______.', opts: o4('I’m', 'Im', 'I’am', 'Iam'), ans: 'A', why: 'I am → <b>I’m</b>. The apostrophe takes the place of <b>a</b>.' },
    { sec: 'Contractions', name: 'Question 2', pts: 1, text: '<b>is not</b> is short for ______.', opts: o4('isnt', 'isn’t', 'is’nt', 'inst'), ans: 'B', why: 'is not → <b>isn’t</b>.' },
    { sec: 'Contractions', name: 'Question 3', pts: 1, text: '<b>do not</b> is short for ______.', opts: o4('dont', 'do’nt', 'don’t', 'dno’t'), ans: 'C', why: 'do not → <b>don’t</b>.' },
    { sec: 'Contractions', name: 'Question 4', pts: 1, text: '<b>she is</b> is short for ______.', opts: o4('shes', 'sh’es', 'she’s not', 'she’s'), ans: 'D', why: 'she is → <b>she’s</b>.' },
    { sec: 'Contractions', name: 'Question 5', pts: 1, text: '<b>they are</b> is short for ______.', opts: o4('they’re', 'theyre', 'they’er', 'their'), ans: 'A', why: 'they are → <b>they’re</b>.' },
    { sec: 'Contractions', name: 'Question 6', pts: 1, text: '<b>cannot</b> is short for ______.', opts: o4('cant', 'can’t', 'ca’nt', 'can not’t'), ans: 'B', why: 'cannot → <b>can’t</b>.' },
    { sec: 'Contractions', name: 'Question 7', pts: 1, text: '<b>it is</b> is short for ______.', opts: o4('its', 'it’is', 'it’s', 'i’ts'), ans: 'C', why: 'it is → <b>it’s</b> (with an apostrophe).' },
    { sec: 'Contractions', name: 'Question 8', pts: 1, text: '<b>we are</b> is short for ______.', opts: o4('wer’e', 'weare', 'were', 'we’re'), ans: 'D', why: 'we are → <b>we’re</b>.' },
    { sec: 'Contractions', name: 'Question 9', pts: 1, text: 'What does the apostrophe <b>’</b> show in a contraction?', opts: o4('a missing letter', 'the end of a sentence', 'a question', 'a new word'), ans: 'A', why: 'The apostrophe shows where a <b>letter is missing</b>.' },
    { sec: 'Contractions', name: 'Question 10', pts: 1, text: '"______ my best friend." (He is)', opts: o4('Hes', 'He’s', 'His', 'He’is'), ans: 'B', why: 'He is → <b>He’s</b>.' },
  ],
},

/* ═══════════ TEST 25 — SENTENCES: TYPES AND QUESTION WORDS ═══════════ */
{
  id: 9625, title: 'Test 25 · Types of sentences and question words', time: 20,
  questions: [
    { sec: 'Question words', name: 'Question 1', pts: 1, text: '"______ is your teacher?" – "Miss Lan."', opts: o4('Who', 'What', 'Where', 'When'), ans: 'A', why: 'We ask about a person with <b>Who</b>.' },
    { sec: 'Question words', name: 'Question 2', pts: 1, text: '"______ do you live?" – "In Ha Noi."', opts: o4('Who', 'Where', 'What', 'Why'), ans: 'B', why: 'We ask about a place with <b>Where</b>.' },
    { sec: 'Question words', name: 'Question 3', pts: 1, text: '"______ old are you?" – "I’m eight."', opts: o4('What', 'Who', 'How', 'When'), ans: 'C', why: 'We ask about age with <b>How old…?</b>' },
    { sec: 'Question words', name: 'Question 4', pts: 1, text: '"______ is your birthday?" – "In May."', opts: o4('Who', 'Where', 'What', 'When'), ans: 'D', why: 'We ask about time with <b>When</b>.' },
    { sec: 'Question words', name: 'Question 5', pts: 1, text: '"______ many books have you got?" – "Five."', opts: o4('How', 'What', 'Who', 'Where'), ans: 'A', why: 'We count with <b>How many…?</b>' },
    { sec: 'Sentence types', name: 'Question 6', pts: 1, text: 'Which sentence ASKS something?', opts: o4('I like milk.', 'Do you like milk?', 'I don’t like milk.', 'Milk is white.'), ans: 'B', why: 'A question ends with a <b>?</b>' },
    { sec: 'Sentence types', name: 'Question 7', pts: 1, text: 'Which sentence TELLS us something?', opts: o4('Are you happy?', 'Where is Tom?', 'My cat is black.', 'How old are you?'), ans: 'C', why: 'A telling sentence ends with a full stop.' },
    { sec: 'Sentence types', name: 'Question 8', pts: 1, text: 'Which sentence TELLS you to do something?', opts: o4('I close the door.', 'The door is open.', 'Is the door open?', 'Close the door, please.'), ans: 'D', why: 'An order or request begins with the verb: <b>Close the door</b>.' },
    { sec: 'Sentence types', name: 'Question 9', pts: 1, text: 'Which one is NOT a complete sentence?', opts: o4('The big red', 'I am here.', 'She sings.', 'We play.'), ans: 'A', why: '"The big red" has no verb and no full idea.' },
    { sec: 'Question words', name: 'Question 10', pts: 1, text: '"______ are you sad?" – "Because I lost my pen."', opts: o4('Who', 'Why', 'Where', 'What'), ans: 'B', why: 'We ask for a reason with <b>Why</b>, and answer with <b>Because…</b>' },
  ],
},

/* ═══════════ TEST 26 — READING: A STORY (MAI AND HER DOG) ═══════════ */
{
  id: 9626, title: 'Test 26 · Reading: Mai and her dog', time: 20,
  questions: [
    { sec: 'Reading', name: 'Question 1', pts: 1, img: A + 'ta2/dog_park.svg', text: R2A + 'What is the dog’s name?', opts: o4('Mai', 'Bo', 'Tom', 'Lan'), ans: 'B', why: 'The text says her dog is called <b>Bo</b>.' },
    { sec: 'Reading', name: 'Question 2', pts: 1, text: R2A + 'How old is Mai?', opts: o4('seven', 'six', 'nine', 'eight'), ans: 'D', why: 'The text says Mai is <b>eight</b>.' },
    { sec: 'Reading', name: 'Question 3', pts: 1, text: R2A + 'What colour is Bo?', opts: o4('white and brown', 'black', 'grey', 'yellow'), ans: 'A', why: 'The text says Bo is <b>white and brown</b>.' },
    { sec: 'Reading', name: 'Question 4', pts: 1, text: R2A + 'Where do they go on Saturday?', opts: o4('to school', 'to the park', 'to the shop', 'to the sea'), ans: 'B', why: 'Every Saturday they go <b>to the park</b>.' },
    { sec: 'Reading', name: 'Question 5', pts: 1, text: R2A + 'What does Bo like to do in the park?', opts: o4('sleep', 'eat', 'run and play with a ball', 'read'), ans: 'C', why: 'The text says Bo <b>runs and plays with a ball</b>.' },
    { sec: 'Reading', name: 'Question 6', pts: 1, text: R2A + 'Who goes to the park with Mai?', opts: o4('her teacher', 'her friend', 'nobody', 'her brother'), ans: 'D', why: 'The text says her <b>brother</b> goes with her.' },
    { sec: 'Reading', name: 'Question 7', pts: 1, text: R2A + 'What does Bo eat after the park?', opts: o4('rice and meat', 'cake', 'fruit', 'bread'), ans: 'A', why: 'At home Bo eats <b>rice and meat</b>.' },
    { sec: 'Reading', name: 'Question 8', pts: 1, text: R2A + 'How does Mai feel about Bo?', opts: o4('She is afraid of him.', 'She loves him.', 'She does not like him.', 'She never sees him.'), ans: 'B', why: 'The text says Mai <b>loves</b> Bo very much.' },
    { sec: 'Sequencing', name: 'Question 9', pts: 1, text: R2A + 'What happens FIRST on Saturday?', opts: o4('Bo eats rice.', 'Bo sleeps.', 'They go to the park.', 'Mai does her homework.'), ans: 'C', why: 'They go to the park first, and Bo eats <b>after</b> that.' },
    { sec: 'Sequencing', name: 'Question 10', pts: 1, text: R2A + 'What does Bo do LAST?', opts: o4('He sleeps.', 'He runs.', 'He plays with a ball.', 'He goes to the park.'), ans: 'A', why: 'The text ends: then Bo <b>sleeps</b>.' },
  ],
},

/* ═══════════ TEST 27 — READING: NON-FICTION (THE SUN) ═══════════ */
{
  id: 9627, title: 'Test 27 · Reading: the Sun (non-fiction)', time: 20,
  questions: [
    { sec: 'Reading', name: 'Question 1', pts: 1, img: A + 'ta2/sunny.svg', text: R2B + 'What is this text about?', opts: o4('the Moon', 'the Sun', 'the rain', 'a dog'), ans: 'B', why: 'The whole text tells us about <b>the Sun</b>.' },
    { sec: 'Reading', name: 'Question 2', pts: 1, text: R2B + 'The Sun is a big ______.', opts: o4('star', 'cloud', 'tree', 'moon'), ans: 'A', why: 'The text says the Sun is a big <b>star</b>.' },
    { sec: 'Reading', name: 'Question 3', pts: 1, text: R2B + 'What does the Sun give us?', opts: o4('rain and snow', 'books and pens', 'light and heat', 'milk and rice'), ans: 'C', why: 'The Sun gives us <b>light and heat</b>.' },
    { sec: 'Reading', name: 'Question 4', pts: 1, text: R2B + 'When can we see the Sun?', opts: o4('at night', 'never', 'only in winter', 'in the day'), ans: 'D', why: 'We see the Sun <b>in the day</b>.' },
    { sec: 'Reading', name: 'Question 5', pts: 1, text: R2B + 'What do plants need to grow?', opts: o4('sunlight and water', 'shoes', 'books', 'snow'), ans: 'A', why: 'The text says plants need <b>sunlight and water</b>.' },
    { sec: 'Reading', name: 'Question 6', pts: 1, text: R2B + 'Why must we NOT look straight at the Sun?', opts: o4('It is too small.', 'It can hurt our eyes.', 'It is too dark.', 'It is cold.'), ans: 'B', why: 'The text warns that it <b>can hurt our eyes</b>.' },
    { sec: 'Reading', name: 'Question 7', pts: 1, text: R2B + 'What should we wear on a very sunny day?', opts: o4('a coat', 'gloves', 'a hat', 'boots'), ans: 'C', why: 'The text says we should wear <b>a hat</b> 👒.' },
    { sec: 'Reading', name: 'Question 8', pts: 1, text: R2B + 'Is this text a story or true information?', opts: o4('a funny story', 'a poem', 'a song', 'true information'), ans: 'D', why: 'It gives facts, so it is <b>true information</b> (non-fiction).' },
    { sec: 'Reading', name: 'Question 9', pts: 1, text: R2B + 'The Sun is very ______.', opts: o4('hot', 'cold', 'wet', 'small'), ans: 'A', why: 'The text says the Sun is very <b>hot</b>.' },
    { sec: 'Reading', name: 'Question 10', pts: 1, text: R2B + 'Which is a good title for this text?', opts: o4('My Dog Bo', 'Our Sun', 'A Rainy Day', 'My School Bag'), ans: 'B', why: 'The text is all about the Sun, so <b>Our Sun</b> fits best.' },
  ],
},

/* ═══════════ TEST 28 — WRITING: SENTENCE BUILDING AND WORD ORDER ═══════════ */
{
  id: 9628, title: 'Test 28 · Writing: building sentences', time: 20,
  questions: [
    { sec: 'Word order', name: 'Question 1', pts: 1, text: 'Put the words in order: <b>school / I / to / go</b>', opts: o4('I go to school.', 'Go I to school.', 'To school I go.', 'School I go to.'), ans: 'A', why: 'English order is subject + verb + place: <b>I go to school.</b>' },
    { sec: 'Word order', name: 'Question 2', pts: 1, text: 'Put the words in order: <b>cat / a / have / I</b>', opts: o4('A cat I have.', 'I have a cat.', 'Have I a cat.', 'Cat a I have.'), ans: 'B', why: 'Subject + verb + object: <b>I have a cat.</b> 🐱' },
    { sec: 'Word order', name: 'Question 3', pts: 1, text: 'Put the words in order: <b>is / name / Nam / my</b>', opts: o4('Name my is Nam.', 'Is my name Nam.', 'My name is Nam.', 'Nam my name is.'), ans: 'C', why: 'The correct sentence is <b>My name is Nam.</b>' },
    { sec: 'Word order', name: 'Question 4', pts: 1, text: 'Put the words in order: <b>playing / are / football / they</b>', opts: o4('Playing they are football.', 'Football are playing they.', 'Are they playing football.', 'They are playing football.'), ans: 'D', why: 'Subject + are + verb-ing + object: <b>They are playing football.</b> ⚽' },
    { sec: 'Sentences', name: 'Question 5', pts: 1, text: 'Which group of words is a complete sentence?', opts: o4('The dog barks.', 'In the big garden', 'My new red', 'Under the table'), ans: 'A', why: 'A sentence needs a subject and a verb: <b>The dog barks.</b>' },
    { sec: 'Sentences', name: 'Question 6', pts: 1, text: 'What is missing? "my sister is six years old"', opts: o4('nothing', 'a capital letter and a full stop', 'a question mark', 'a comma'), ans: 'B', why: 'It needs a capital <b>M</b> at the start and a <b>.</b> at the end.' },
    { sec: 'Sentences', name: 'Question 7', pts: 1, text: 'Join the two sentences: "I like cats. I like dogs."', opts: o4('I like cats but dogs.', 'I like cats or dogs.', 'I like cats and dogs.', 'I like cats because dogs.'), ans: 'C', why: 'We join two things we like with <b>and</b>.' },
    { sec: 'Sentences', name: 'Question 8', pts: 1, text: 'Finish the sentence: "Every morning I ______."', opts: o4('the breakfast', 'happy and', 'very red', 'eat breakfast'), ans: 'D', why: 'A sentence needs a verb: <b>eat breakfast</b>.' },
    { sec: 'Word order', name: 'Question 9', pts: 1, text: 'Put the words in order: <b>like / you / do / ice cream</b>', opts: o4('Do you like ice cream?', 'You do like ice cream?', 'Like you do ice cream?', 'Ice cream you do like?'), ans: 'A', why: 'A question begins with <b>Do</b>: Do you like ice cream? 🍦' },
    { sec: 'Sentences', name: 'Question 10', pts: 1, text: 'Which sentence is written correctly?', opts: o4('the sky is blue', 'The sky is blue', 'The sky is blue.', 'the Sky is Blue.'), ans: 'C', why: 'It needs a capital at the start AND a full stop at the end.' },
  ],
},

/* ═══════════ TEST 29 — WRITING: DATES AND OPINION WRITING ═══════════ */
{
  id: 9629, title: 'Test 29 · Writing: dates and opinions', time: 20,
  questions: [
    { sec: 'Writing dates', name: 'Question 1', pts: 1, img: A + 'ta2/calendar.svg', text: 'Which date is written correctly?', opts: o4('5 may 2026', 'May 5, 2026', 'may 5, 2026', '5 MAY, 2026'), ans: 'B', why: 'The month takes a capital letter: <b>May 5, 2026</b>.' },
    { sec: 'Writing dates', name: 'Question 2', pts: 1, text: 'Which day is written correctly?', opts: o4('Monday', 'monday', 'MonDay', 'mondaY'), ans: 'A', why: 'Days always begin with a capital: <b>Monday</b>.' },
    { sec: 'Writing dates', name: 'Question 3', pts: 1, text: '"My birthday is ______ March."', opts: o4('at', 'on', 'in', 'to'), ans: 'C', why: 'With a month we use <b>in</b>: in March.' },
    { sec: 'Writing dates', name: 'Question 4', pts: 1, text: '"We go to school ______ Monday."', opts: o4('in', 'at', 'to', 'on'), ans: 'D', why: 'With a day we use <b>on</b>: on Monday.' },
    { sec: 'Opinion writing', name: 'Question 5', pts: 1, img: A + 'ta2/icecream.svg', text: 'Which sentence gives an OPINION (what you think)?', opts: o4('Ice cream is the best food.', 'Ice cream is cold.', 'Ice cream is a food.', 'I have ice cream.'), ans: 'A', why: '"The <b>best</b>" is what someone thinks, so it is an opinion 🍦.' },
    { sec: 'Opinion writing', name: 'Question 6', pts: 1, text: 'Which sentence is a FACT (it is true for everyone)?', opts: o4('Dogs are nicer than cats.', 'A dog has four legs.', 'Dogs are boring.', 'I love dogs most.'), ans: 'B', why: 'Every dog has four legs, so it is a <b>fact</b>.' },
    { sec: 'Opinion writing', name: 'Question 7', pts: 1, text: 'Which words help you give an opinion?', opts: o4('There are', 'It has', 'I think', 'It is made of'), ans: 'C', why: 'We start an opinion with <b>I think…</b>' },
    { sec: 'Opinion writing', name: 'Question 8', pts: 1, text: 'After "I like football ______" we should write a reason.', opts: o4('and', 'but', 'or', 'because'), ans: 'D', why: 'We give a reason with <b>because</b>.' },
    { sec: 'Opinion writing', name: 'Question 9', pts: 1, text: 'Finish the opinion: "My favourite colour is blue because ______."', opts: o4('it makes me happy', 'blue is a colour', 'I have a bag', 'the sky'), ans: 'A', why: 'A reason tells WHY: <b>it makes me happy</b>.' },
    { sec: 'Writing dates', name: 'Question 10', pts: 1, text: 'Tet is ______ January or February.', opts: o4('on', 'in', 'at', 'of'), ans: 'B', why: 'With months we use <b>in</b>.' },
  ],
},

/* ═══════════ TEST 30 — LIBRARY SKILLS: BOOKS AND ABC ORDER ═══════════ */
{
  id: 9630, title: 'Test 30 · Library skills: books and ABC order', time: 20,
  questions: [
    { sec: 'Parts of a book', name: 'Question 1', pts: 1, img: A + 'ta2/book.svg', text: 'The NAME of a book is called the ______. 📕', opts: o4('title', 'page', 'cover', 'word'), ans: 'A', why: 'The name of a book is its <b>title</b>.' },
    { sec: 'Parts of a book', name: 'Question 2', pts: 1, img: A + 'ta2/book.svg', text: 'The person who WRITES a book is the ______.', opts: o4('reader', 'author', 'teacher', 'printer'), ans: 'B', why: 'The writer of a book is the <b>author</b>.' },
    { sec: 'Parts of a book', name: 'Question 3', pts: 1, img: A + 'ta2/book.svg', text: 'The person who DRAWS the pictures in a book is the ______. 🎨', opts: o4('author', 'singer', 'illustrator', 'librarian'), ans: 'C', why: 'The artist of a book is the <b>illustrator</b>.' },
    { sec: 'Parts of a book', name: 'Question 4', pts: 1, img: A + 'ta2/contents.svg', text: 'Which part of a book shows you the chapters and their page numbers?', opts: o4('the cover', 'the title', 'the picture', 'the contents page'), ans: 'D', why: 'The <b>contents page</b> lists the parts and their pages.' },
    { sec: 'ABC order', name: 'Question 5', pts: 1, text: 'Which word comes FIRST in ABC order?', opts: o4('apple', 'cat', 'dog', 'bird'), ans: 'A', why: '<b>apple</b> begins with <b>a</b>, the first letter.' },
    { sec: 'ABC order', name: 'Question 6', pts: 1, text: 'Which word comes LAST in ABC order?', opts: o4('milk', 'zebra', 'fish', 'apple'), ans: 'B', why: '<b>zebra</b> begins with <b>z</b>, the last letter.' },
    { sec: 'ABC order', name: 'Question 7', pts: 1, img: A + 'ta2/abc_smr.svg', text: 'Put in ABC order: <b>sun · rain · moon</b>', opts: o4('sun, rain, moon', 'rain, moon, sun', 'moon, rain, sun', 'moon, sun, rain'), ans: 'C', why: 'm before r before s: <b>moon, rain, sun</b>.' },
    { sec: 'ABC order', name: 'Question 8', pts: 1, text: 'Which word comes first: <b>cat</b> or <b>car</b>?', opts: o4('cat', 'they are the same', 'neither', 'car'), ans: 'D', why: 'Both start with <b>ca</b>; then <b>r</b> comes before <b>t</b>, so <b>car</b> is first.' },
    { sec: 'Genres', name: 'Question 9', pts: 1, img: A + 'ta2/elephant.svg', text: 'A book with a true story about real animals is ______.', opts: o4('non-fiction', 'fiction', 'a poem', 'a song'), ans: 'A', why: 'True information books are <b>non-fiction</b>.' },
    { sec: 'Genres', name: 'Question 10', pts: 1, img: A + 'ta2/dragon.svg', text: 'A book about a talking dragon who saves a castle is ______. 🐉', opts: o4('non-fiction', 'fiction', 'a dictionary', 'a map'), ans: 'B', why: 'A made-up story is <b>fiction</b>.' },
  ],
},


/* ═══════════ TEST 31 — VOCABULARY: SAME AND OPPOSITE ═══════════ */
{
  id: 9631, title: 'Test 31 · Words that mean the same and the opposite', time: 20,
  questions: [
    { sec: 'Synonyms', name: 'Question 1', pts: 1, text: 'Which word means the SAME as <b>big</b>?', opts: o4('large', 'small', 'thin', 'short'), ans: 'A', why: '<b>large</b> means the same as big.' },
    { sec: 'Synonyms', name: 'Question 2', pts: 1, text: 'Which word means the SAME as <b>happy</b>? 😀', opts: o4('sad', 'glad', 'angry', 'tired'), ans: 'B', why: '<b>glad</b> means the same as happy.' },
    { sec: 'Synonyms', name: 'Question 3', pts: 1, text: 'Which word means the SAME as <b>little</b>?', opts: o4('tall', 'long', 'small', 'wide'), ans: 'C', why: '<b>small</b> means the same as little.' },
    { sec: 'Synonyms', name: 'Question 4', pts: 1, text: 'Which word means the SAME as <b>fast</b>? 🏃', opts: o4('slow', 'late', 'heavy', 'quick'), ans: 'D', why: '<b>quick</b> means the same as fast.' },
    { sec: 'Antonyms', name: 'Question 5', pts: 1, text: 'What is the OPPOSITE of <b>hot</b>? 🔥', opts: o4('cold', 'warm', 'dry', 'sunny'), ans: 'A', why: 'The opposite of hot is <b>cold</b>.' },
    { sec: 'Antonyms', name: 'Question 6', pts: 1, text: 'What is the OPPOSITE of <b>day</b>? ☀️', opts: o4('morning', 'night', 'noon', 'week'), ans: 'B', why: 'The opposite of day is <b>night</b> 🌙.' },
    { sec: 'Antonyms', name: 'Question 7', pts: 1, text: 'What is the OPPOSITE of <b>open</b>?', opts: o4('push', 'pull', 'shut', 'turn'), ans: 'C', why: 'The opposite of open is <b>shut</b> (close).' },
    { sec: 'Antonyms', name: 'Question 8', pts: 1, text: 'What is the OPPOSITE of <b>old</b>? 👴', opts: o4('tall', 'kind', 'big', 'young'), ans: 'D', why: 'The opposite of old is <b>young</b> 👶.' },
    { sec: 'Antonyms', name: 'Question 9', pts: 1, text: 'What is the OPPOSITE of <b>up</b>? ⬆️', opts: o4('down', 'over', 'near', 'out'), ans: 'A', why: 'The opposite of up is <b>down</b> ⬇️.' },
    { sec: 'Synonyms', name: 'Question 10', pts: 1, text: 'Which two words mean the SAME?', opts: o4('big and small', 'nice and kind', 'hot and cold', 'up and down'), ans: 'B', why: '<b>nice</b> and <b>kind</b> mean the same; the others are opposites.' },
  ],
},

/* ═══════════ TEST 32 — GRAMMAR: JOINING WORDS ═══════════ */
{
  id: 9632, title: 'Test 32 · Joining words (and, but, or, because)', time: 20,
  questions: [
    { sec: 'Conjunctions', name: 'Question 1', pts: 1, text: '"I like cats ______ dogs." (I like both) 🐱🐶', opts: o4('and', 'but', 'or', 'because'), ans: 'A', why: 'We add two things with <b>and</b>.' },
    { sec: 'Conjunctions', name: 'Question 2', pts: 1, text: '"The bag is small ______ heavy." (a surprise)', opts: o4('and', 'but', 'or', 'so'), ans: 'B', why: 'We show a surprise with <b>but</b>.' },
    { sec: 'Conjunctions', name: 'Question 3', pts: 1, text: '"Do you want milk ______ juice?" (choose one) 🥛', opts: o4('and', 'but', 'or', 'because'), ans: 'C', why: 'We give a choice with <b>or</b>.' },
    { sec: 'Conjunctions', name: 'Question 4', pts: 1, text: '"I am happy ______ it is my birthday." (the reason) 🎂', opts: o4('and', 'but', 'or', 'because'), ans: 'D', why: '<b>because</b> tells us why.' },
    { sec: 'Conjunctions', name: 'Question 5', pts: 1, text: '"It was raining, ______ we stayed inside." (what happened next) 🌧️', opts: o4('so', 'or', 'but', 'because'), ans: 'A', why: '<b>so</b> tells us the result.' },
    { sec: 'Conjunctions', name: 'Question 6', pts: 1, text: 'Join them: "I have a pen. I have a ruler."', opts: o4('I have a pen but a ruler.', 'I have a pen and a ruler.', 'I have a pen or a ruler.', 'I have a pen because a ruler.'), ans: 'B', why: 'Two things we have → <b>and</b>.' },
    { sec: 'Conjunctions', name: 'Question 7', pts: 1, text: 'Join them: "Nam is tired. Nam keeps playing."', opts: o4('Nam is tired and keeps playing.', 'Nam is tired or keeps playing.', 'Nam is tired but keeps playing.', 'Nam is tired because keeps playing.'), ans: 'C', why: 'It is a surprise, so we use <b>but</b>.' },
    { sec: 'Conjunctions', name: 'Question 8', pts: 1, text: '"I put on my coat ______ it was cold." 🧥', opts: o4('and', 'or', 'but', 'because'), ans: 'D', why: 'The cold is the reason → <b>because</b>.' },
    { sec: 'Conjunctions', name: 'Question 9', pts: 1, text: 'Which word is a joining word?', opts: o4('and', 'blue', 'run', 'table'), ans: 'A', why: '<b>and</b> joins two parts of a sentence.' },
    { sec: 'Conjunctions', name: 'Question 10', pts: 1, text: '"We can go to the park ______ to the zoo, not both." 🦁', opts: o4('and', 'or', 'because', 'so'), ans: 'B', why: 'Only one of the two → <b>or</b>.' },
  ],
},

];

SUBJECTS.push({
  id: 'tienganh2', name: 'Tiếng Anh', short: 'Tiếng Anh 2', icon: '🔤', grade: 2,
  exams: TA2_EXAMS, ready: true,
  heroTitle: 'Tiếng Anh lớp 2 — phonics, từ vựng, ngữ pháp, đọc hiểu, viết câu và kĩ năng thư viện',
  heroMeta: '📚 32 đề &nbsp;•&nbsp; 320 câu &nbsp;•&nbsp; ⏱ 20 phút mỗi đề &nbsp;•&nbsp; đủ 8 phần, không kèm bản dịch',
});
