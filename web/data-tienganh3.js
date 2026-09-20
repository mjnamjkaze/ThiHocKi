// TIẾNG ANH — LỚP 3 (GDPT 2018)
// 30 đề × 10 câu = 300 câu. Mỗi câu 1 điểm — thang 10 — 25 phút mỗi đề.
//
// QUY TẮC: môn Tiếng Anh KHÔNG kèm bản dịch tiếng Việt. Mọi phần text · opts · why · sec ·
// name · title viết bằng tiếng Anh; dùng emoji làm hình gợi nghĩa để học sinh tự hiểu.
//
// KHUNG NỘI DUNG — bám đủ các phần của chương trình Class 3 (wayground.com/en/class-3-worksheets):
//   • Phonics & Spelling ..... silent letters · plurals · -ed/-ing endings
//   • Language & Vocabulary .. syllables & compound words · prefixes · suffixes · synonyms ·
//                              antonyms · homophones · context clues · chủ đề trường lớp,
//                              nghề nghiệp & nơi chốn, thức ăn & sức khoẻ
//   • Grammar and Mechanics .. nouns · pronouns · present simple · present continuous ·
//                              past simple · future · adjectives & comparison · adverbs ·
//                              prepositions · conjunctions · articles & quantifiers ·
//                              capitalization · commas, apostrophes & quotation marks ·
//                              sentence types, fragments & run-ons
//   • Reading ................ fiction comprehension · non-fiction, main idea & text features
//   • Writing & Library Skills paragraph structure · writing process · parts of a book ·
//                              dictionary and ABC order

// Reading passages — repeated at the top of every question so pupils can always look back.
const R3A = '📖 <i><b>The Lost Kite</b><br>Last Sunday, Minh and his sister Ha flew a red kite in the field near their house. The wind was strong and the kite flew very high. Suddenly the string broke and the kite landed in a tall tree. Minh was sad, but Ha had an idea. She ran home and came back with their neighbour, Mr Hung. He brought a long bamboo pole and carefully lifted the kite down. Minh thanked him and gave him a big smile. The next day, Minh and Ha made a new, stronger string for the kite.</i><br><br>';

const R3B = '📖 <i><b>Bees</b><br>Bees are small insects with six legs and two pairs of wings. Most bees live together in a group called a colony. They fly from flower to flower to collect nectar, and they use it to make honey. While they do this, they also carry pollen between flowers. This helps plants make seeds and fruit, so farmers need bees for their crops. Some people are afraid of bees, but bees only sting when they feel in danger.</i><br><br>';

const TA3_EXAMS = [

/* ═══════════ TEST 1 — SPELLING: SILENT LETTERS AND TRICKY WORDS ═══════════ */
{
  id: 9701, title: 'Test 1 · Spelling: silent letters and tricky words', time: 25,
  questions: [
    { sec: 'Silent letters', name: 'Question 1', pts: 1, img: A + 'ta3/knee.svg', text: 'Which letter is SILENT in <b>knee</b>? 🦵', opts: o4('k', 'n', 'e', 'none'), ans: 'A', why: 'In <b>knee</b> we do not say the <b>k</b>.' },
    { sec: 'Silent letters', name: 'Question 2', pts: 1, img: A + 'ta3/write.svg', text: 'Which letter is SILENT in <b>write</b>? ✍️', opts: o4('t', 'w', 'r', 'i'), ans: 'B', why: 'In <b>write</b> we do not say the <b>w</b>.' },
    { sec: 'Silent letters', name: 'Question 3', pts: 1, img: A + 'ta3/lamb.svg', text: 'Which letter is SILENT in <b>lamb</b>? 🐑', opts: o4('l', 'a', 'b', 'm'), ans: 'C', why: 'In <b>lamb</b> we do not say the final <b>b</b>.' },
    { sec: 'Silent letters', name: 'Question 4', pts: 1, img: A + 'ta3/hour.svg', text: 'Which letter is SILENT in <b>hour</b>? ⏰', opts: o4('o', 'u', 'r', 'h'), ans: 'D', why: 'In <b>hour</b> we do not say the <b>h</b>.' },
    { sec: 'Spelling', name: 'Question 5', pts: 1, img: A + 'ta3/knife.svg', text: 'Choose the correct spelling.', opts: o4('knife', 'nife', 'knive', 'knaif'), ans: 'A', why: 'The correct spelling is <b>knife</b> 🔪 — the k is silent.' },
    { sec: 'Spelling', name: 'Question 6', pts: 1, img: A + 'ta3/watch.svg', text: 'Choose the correct spelling.', opts: o4('wach', 'watch', 'wattch', 'woch'), ans: 'B', why: 'The correct spelling is <b>watch</b> ⌚.' },
    { sec: 'Spelling', name: 'Question 7', pts: 1, text: 'Choose the correct spelling.', opts: o4('diffrent', 'diferent', 'different', 'differant'), ans: 'C', why: 'The correct spelling is <b>different</b> — two f’s and -ent.' },
    { sec: 'Spelling', name: 'Question 8', pts: 1, text: 'Choose the correct spelling.', opts: o4('anser', 'answar', 'ansewr', 'answer'), ans: 'D', why: 'The correct spelling is <b>answer</b> — the w is silent.' },
    { sec: 'Spelling', name: 'Question 9', pts: 1, text: 'Choose the correct spelling.', opts: o4('favourite', 'faverite', 'favrite', 'favourit'), ans: 'A', why: 'The correct spelling is <b>favourite</b>.' },
    { sec: 'Spelling', name: 'Question 10', pts: 1, text: 'Choose the correct spelling.', opts: o4('Wendsday', 'Wednesday', 'Wensday', 'Wedensday'), ans: 'B', why: 'The correct spelling is <b>Wednesday</b> — the first d is silent.' },
  ],
},

/* ═══════════ TEST 2 — SPELLING: PLURALS ═══════════ */
{
  id: 9702, title: 'Test 2 · Spelling: making plurals', time: 25,
  questions: [
    { sec: 'Plurals', name: 'Question 1', pts: 1, img: A + 'ta3/two_chairs.svg', text: 'one chair → two ______ 🪑', opts: o4('chairs', 'chaires', 'chairies', 'chair'), ans: 'A', why: 'Most nouns just add <b>-s</b>: <b>chairs</b>.' },
    { sec: 'Plurals', name: 'Question 2', pts: 1, img: A + 'ta3/three_buses.svg', text: 'one bus → three ______ 🚌', opts: o4('buss', 'buses', 'busies', 'bus'), ans: 'B', why: 'After <b>-s</b> we add <b>-es</b>: <b>buses</b>.' },
    { sec: 'Plurals', name: 'Question 3', pts: 1, img: A + 'ta3/city.svg', text: 'one city → many ______ 🏙️', opts: o4('citys', 'cityes', 'cities', 'cityies'), ans: 'C', why: 'Consonant + y → change y to i and add -es: <b>cities</b>.' },
    { sec: 'Plurals', name: 'Question 4', pts: 1, img: A + 'ta3/leaf.svg', text: 'one leaf → many ______ 🍃', opts: o4('leafs', 'leafes', 'leafies', 'leaves'), ans: 'D', why: '-f often changes to <b>-ves</b>: <b>leaves</b>.' },
    { sec: 'Plurals', name: 'Question 5', pts: 1, img: A + 'ta3/two_knives.svg', text: 'one knife → two ______ 🔪', opts: o4('knives', 'knifes', 'knifves', 'knife'), ans: 'A', why: 'knife → <b>knives</b>.' },
    { sec: 'Plurals', name: 'Question 6', pts: 1, img: A + 'ta3/mouse.svg', text: 'one mouse → two ______ 🐭', opts: o4('mouses', 'mice', 'mices', 'mouse'), ans: 'B', why: 'mouse → <b>mice</b> (irregular).' },
    { sec: 'Plurals', name: 'Question 7', pts: 1, text: 'one boy → four ______', opts: o4('boies', 'boyes', 'boys', 'boyies'), ans: 'C', why: 'Vowel + y → just add <b>-s</b>: <b>boys</b>.' },
    { sec: 'Plurals', name: 'Question 8', pts: 1, img: A + 'ta3/five_tomatoes.svg', text: 'one tomato → five ______ 🍅', opts: o4('tomatos', 'tomatoies', 'tomato', 'tomatoes'), ans: 'D', why: 'After <b>-o</b> here we add <b>-es</b>: <b>tomatoes</b>.' },
    { sec: 'Plurals', name: 'Question 9', pts: 1, text: 'Which word is ALREADY plural?', opts: o4('people', 'person', 'child', 'woman'), ans: 'A', why: '<b>people</b> means more than one person.' },
    { sec: 'Plurals', name: 'Question 10', pts: 1, img: A + 'ta3/three_sheep.svg', text: 'Which sentence is correct?', opts: o4('There are three sheeps.', 'There are three sheep.', 'There are three sheepes.', 'There is three sheep.'), ans: 'B', why: '<b>sheep</b> 🐑 is the same in singular and plural, and we need <b>are</b>.' },
  ],
},

/* ═══════════ TEST 3 — SPELLING: ADDING -ED AND -ING ═══════════ */
{
  id: 9703, title: 'Test 3 · Spelling: adding -ed and -ing', time: 25,
  questions: [
    { sec: 'Word endings', name: 'Question 1', pts: 1, text: 'play + ed = ______', opts: o4('played', 'plaied', 'playd', 'playeed'), ans: 'A', why: 'Vowel + y → just add -ed: <b>played</b>.' },
    { sec: 'Word endings', name: 'Question 2', pts: 1, text: 'stop + ed = ______', opts: o4('stoped', 'stopped', 'stopeed', 'stopd'), ans: 'B', why: 'Short vowel + one consonant → double it: <b>stopped</b>.' },
    { sec: 'Word endings', name: 'Question 3', pts: 1, text: 'like + ed = ______', opts: o4('likeed', 'likded', 'liked', 'likked'), ans: 'C', why: 'We drop the silent e and add -d: <b>liked</b>.' },
    { sec: 'Word endings', name: 'Question 4', pts: 1, text: 'study + ed = ______', opts: o4('studyed', 'studdied', 'studyd', 'studied'), ans: 'D', why: 'Consonant + y → change y to i: <b>studied</b>.' },
    { sec: 'Word endings', name: 'Question 5', pts: 1, img: A + 'ta3/swim.svg', text: 'swim + ing = ______ 🏊', opts: o4('swimming', 'swiming', 'swimeing', 'swimmming'), ans: 'A', why: 'We double the m: <b>swimming</b>.' },
    { sec: 'Word endings', name: 'Question 6', pts: 1, text: 'make + ing = ______', opts: o4('makeing', 'making', 'makking', 'makinng'), ans: 'B', why: 'We drop the silent e: <b>making</b>.' },
    { sec: 'Word endings', name: 'Question 7', pts: 1, text: 'carry + ing = ______', opts: o4('carring', 'carriing', 'carrying', 'carreing'), ans: 'C', why: 'Before -ing the y stays: <b>carrying</b>.' },
    { sec: 'Word endings', name: 'Question 8', pts: 1, text: 'watch + ed = ______', opts: o4('watchd', 'watchied', 'watchhed', 'watched'), ans: 'D', why: 'We simply add -ed: <b>watched</b>.' },
    { sec: 'Word endings', name: 'Question 9', pts: 1, img: A + 'ta3/run.svg', text: 'Which word is spelled correctly?', opts: o4('running', 'runing', 'runnning', 'runeing'), ans: 'A', why: 'run + ing doubles the n: <b>running</b> 🏃.' },
    { sec: 'Word endings', name: 'Question 10', pts: 1, img: A + 'ta3/dance.svg', text: 'Which word is spelled correctly?', opts: o4('dansed', 'danced', 'danceed', 'dancced'), ans: 'B', why: 'dance + ed drops the e: <b>danced</b> 💃.' },
  ],
},

/* ═══════════ TEST 4 — WORD STUDY: SYLLABLES AND COMPOUND WORDS ═══════════ */
{
  id: 9704, title: 'Test 4 · Syllables and compound words', time: 25,
  questions: [
    { sec: 'Syllables', name: 'Question 1', pts: 1, img: A + 'ta3/elephant.svg', text: 'How many syllables are there in <b>elephant</b>? 🐘', opts: o4('three', 'two', 'four', 'one'), ans: 'A', why: 'el·e·phant = <b>three</b> syllables.' },
    { sec: 'Syllables', name: 'Question 2', pts: 1, img: A + 'ta3/pencil.svg', text: 'How many syllables are there in <b>pencil</b>? ✏️', opts: o4('one', 'two', 'three', 'four'), ans: 'B', why: 'pen·cil = <b>two</b> syllables.' },
    { sec: 'Syllables', name: 'Question 3', pts: 1, img: A + 'ta3/butterfly.svg', text: 'How many syllables are there in <b>butterfly</b>? 🦋', opts: o4('two', 'four', 'three', 'one'), ans: 'C', why: 'but·ter·fly = <b>three</b> syllables.' },
    { sec: 'Syllables', name: 'Question 4', pts: 1, img: A + 'ta3/bread.svg', text: 'Which word has only ONE syllable?', opts: o4('table', 'water', 'garden', 'bread'), ans: 'D', why: '<b>bread</b> 🍞 is one beat; the others are two.' },
    { sec: 'Compound words', name: 'Question 5', pts: 1, img: A + 'ta3/sunflower.svg', text: 'sun + flower = ______ 🌻', opts: o4('sunflower', 'flowersun', 'sunnyflower', 'sun flower'), ans: 'A', why: 'Two words joined make the compound word <b>sunflower</b>.' },
    { sec: 'Compound words', name: 'Question 6', pts: 1, img: A + 'ta3/rainbow.svg', text: 'rain + bow = ______ 🌈', opts: o4('bowrain', 'rainbow', 'rainybow', 'rainnbow'), ans: 'B', why: 'rain + bow = <b>rainbow</b>.' },
    { sec: 'Compound words', name: 'Question 7', pts: 1, img: A + 'ta3/toothbrush.svg', text: 'Which one is a compound word?', opts: o4('happy', 'window', 'toothbrush', 'pencil'), ans: 'C', why: '<b>toothbrush</b> 🪥 is tooth + brush.' },
    { sec: 'Compound words', name: 'Question 8', pts: 1, img: A + 'ta3/football.svg', text: 'Which two words make <b>football</b>? ⚽', opts: o4('fall + ball', 'foot + bell', 'fort + ball', 'foot + ball'), ans: 'D', why: '<b>foot</b> + <b>ball</b> = football.' },
    { sec: 'Compound words', name: 'Question 9', pts: 1, text: 'Which one is NOT a compound word?', opts: o4('beautiful', 'bedroom', 'classroom', 'playground'), ans: 'A', why: '<b>beautiful</b> is one word with a suffix, not two words joined.' },
    { sec: 'Syllables', name: 'Question 10', pts: 1, img: A + 'ta3/computer.svg', text: 'How many syllables are there in <b>computer</b>? 💻', opts: o4('two', 'three', 'four', 'one'), ans: 'B', why: 'com·pu·ter = <b>three</b> syllables.' },
  ],
},

/* ═══════════ TEST 5 — WORD STUDY: PREFIXES ═══════════ */
{
  id: 9705, title: 'Test 5 · Prefixes (un-, re-, dis-, pre-)', time: 25,
  questions: [
    { sec: 'Prefixes', name: 'Question 1', pts: 1, img: A + 'ta3/sad.svg', text: 'What does <b>un-</b> mean in <b>unhappy</b>?', opts: o4('not', 'again', 'before', 'very'), ans: 'A', why: '<b>un-</b> means <b>not</b>: unhappy = not happy 😢.' },
    { sec: 'Prefixes', name: 'Question 2', pts: 1, text: 'What does <b>re-</b> mean in <b>rewrite</b>?', opts: o4('not', 'again', 'before', 'after'), ans: 'B', why: '<b>re-</b> means <b>again</b>: rewrite = write again.' },
    { sec: 'Prefixes', name: 'Question 3', pts: 1, text: 'What does <b>pre-</b> mean in <b>preview</b>?', opts: o4('again', 'not', 'before', 'under'), ans: 'C', why: '<b>pre-</b> means <b>before</b>: preview = look at before.' },
    { sec: 'Prefixes', name: 'Question 4', pts: 1, text: 'The opposite of <b>agree</b> is ______.', opts: o4('reagree', 'unagree', 'preagree', 'disagree'), ans: 'D', why: 'We use <b>dis-</b>: <b>disagree</b>.' },
    { sec: 'Prefixes', name: 'Question 5', pts: 1, text: 'The opposite of <b>kind</b> is ______.', opts: o4('unkind', 'rekind', 'dekind', 'prekind'), ans: 'A', why: 'We use <b>un-</b>: <b>unkind</b>.' },
    { sec: 'Prefixes', name: 'Question 6', pts: 1, text: '"Please ______ the box." (open it again)', opts: o4('unopen', 'reopen', 'preopen', 'disopen'), ans: 'B', why: 'open again = <b>reopen</b>.' },
    { sec: 'Prefixes', name: 'Question 7', pts: 1, img: A + 'ta3/unlock.svg', text: 'What does <b>unlock</b> mean? 🔓', opts: o4('lock again', 'lock before', 'open a lock', 'lock twice'), ans: 'C', why: 'un- takes the action away: unlock = <b>open a lock</b>.' },
    { sec: 'Prefixes', name: 'Question 8', pts: 1, text: 'Which word has a prefix?', opts: o4('happy', 'runner', 'teacher', 'unusual'), ans: 'D', why: '<b>unusual</b> = un + usual. The others have suffixes or none.' },
    { sec: 'Prefixes', name: 'Question 9', pts: 1, text: '"I ______ my homework because it was wrong." (do it again)', opts: o4('redid', 'undid', 'disdid', 'predid'), ans: 'A', why: 'do again = <b>redo</b> → past: <b>redid</b>.' },
    { sec: 'Prefixes', name: 'Question 10', pts: 1, text: 'The opposite of <b>appear</b> is ______.', opts: o4('unappear', 'disappear', 'reappear', 'preappear'), ans: 'B', why: 'The opposite of appear is <b>disappear</b>.' },
  ],
},

/* ═══════════ TEST 6 — WORD STUDY: SUFFIXES ═══════════ */
{
  id: 9706, title: 'Test 6 · Suffixes (-ful, -less, -ly, -er)', time: 25,
  questions: [
    { sec: 'Suffixes', name: 'Question 1', pts: 1, text: 'What does <b>-ful</b> mean in <b>helpful</b>?', opts: o4('full of', 'without', 'again', 'not'), ans: 'A', why: '<b>-ful</b> means <b>full of</b>: helpful = full of help.' },
    { sec: 'Suffixes', name: 'Question 2', pts: 1, text: 'What does <b>-less</b> mean in <b>careless</b>?', opts: o4('full of', 'without', 'before', 'more'), ans: 'B', why: '<b>-less</b> means <b>without</b>: careless = without care.' },
    { sec: 'Suffixes', name: 'Question 3', pts: 1, img: A + 'ta3/teacher.svg', text: 'A person who teaches is a ______. 👩‍🏫', opts: o4('teachful', 'teachly', 'teacher', 'teachless'), ans: 'C', why: '<b>-er</b> makes the person who does it: <b>teacher</b>.' },
    { sec: 'Suffixes', name: 'Question 4', pts: 1, img: A + 'ta3/singer.svg', text: 'A person who sings is a ______. 🎤', opts: o4('singly', 'singful', 'singless', 'singer'), ans: 'D', why: 'sing + er = <b>singer</b>.' },
    { sec: 'Suffixes', name: 'Question 5', pts: 1, img: A + 'ta3/snail.svg', text: 'slow + ly = ______', opts: o4('slowly', 'slowely', 'slowlly', 'slowily'), ans: 'A', why: 'We just add -ly: <b>slowly</b> 🐌.' },
    { sec: 'Suffixes', name: 'Question 6', pts: 1, text: 'happy + ly = ______', opts: o4('happyly', 'happily', 'happly', 'happyily'), ans: 'B', why: 'Consonant + y → change y to i: <b>happily</b>.' },
    { sec: 'Suffixes', name: 'Question 7', pts: 1, img: A + 'ta3/wet.svg', text: '"Be ______! The floor is wet." 💧', opts: o4('careless', 'carely', 'careful', 'carer'), ans: 'C', why: 'We want the person to take care: <b>careful</b>.' },
    { sec: 'Suffixes', name: 'Question 8', pts: 1, img: A + 'ta3/night_sky.svg', text: '"The sky is ______ tonight — I can see no stars."', opts: o4('starful', 'starly', 'starer', 'starless'), ans: 'D', why: 'without stars = <b>starless</b>.' },
    { sec: 'Suffixes', name: 'Question 9', pts: 1, text: 'Which word has a suffix?', opts: o4('painter', 'unlock', 'rewrite', 'disagree'), ans: 'A', why: '<b>painter</b> = paint + er. The others begin with prefixes.' },
    { sec: 'Suffixes', name: 'Question 10', pts: 1, text: 'beauty + ful = ______', opts: o4('beautyful', 'beautiful', 'beautifull', 'beautieful'), ans: 'B', why: 'y changes to i: <b>beautiful</b>.' },
  ],
},

/* ═══════════ TEST 7 — VOCABULARY: SYNONYMS ═══════════ */
{
  id: 9707, title: 'Test 7 · Vocabulary: synonyms', time: 25,
  questions: [
    { sec: 'Synonyms', name: 'Question 1', pts: 1, img: A + 'ta3/big_small.svg', text: 'Which word means the SAME as <b>big</b>?', opts: o4('large', 'small', 'thin', 'short'), ans: 'A', why: '<b>large</b> means the same as big.' },
    { sec: 'Synonyms', name: 'Question 2', pts: 1, img: A + 'ta3/happy.svg', text: 'Which word means the SAME as <b>happy</b>? 😀', opts: o4('angry', 'glad', 'tired', 'sad'), ans: 'B', why: '<b>glad</b> means the same as happy.' },
    { sec: 'Synonyms', name: 'Question 3', pts: 1, img: A + 'ta3/run.svg', text: 'Which word means the SAME as <b>fast</b>? 🏃', opts: o4('slow', 'late', 'quick', 'heavy'), ans: 'C', why: '<b>quick</b> means the same as fast.' },
    { sec: 'Synonyms', name: 'Question 4', pts: 1, text: 'Which word means the SAME as <b>begin</b>?', opts: o4('finish', 'stop', 'close', 'start'), ans: 'D', why: '<b>start</b> means the same as begin.' },
    { sec: 'Synonyms', name: 'Question 5', pts: 1, text: 'Which word means the SAME as <b>little</b>?', opts: o4('small', 'tall', 'long', 'wide'), ans: 'A', why: '<b>small</b> means the same as little.' },
    { sec: 'Synonyms', name: 'Question 6', pts: 1, text: 'Which word means the SAME as <b>nice</b>?', opts: o4('rude', 'kind', 'cold', 'loud'), ans: 'B', why: '<b>kind</b> means the same as nice.' },
    { sec: 'Synonyms', name: 'Question 7', pts: 1, img: A + 'ta3/shout.svg', text: 'Which word means the SAME as <b>shout</b>? 📣', opts: o4('whisper', 'sleep', 'yell', 'walk'), ans: 'C', why: '<b>yell</b> means the same as shout.' },
    { sec: 'Synonyms', name: 'Question 8', pts: 1, text: 'What is a <b>synonym</b>?', opts: o4('a word with the opposite meaning', 'a word that sounds the same', 'a very long word', 'a word with the same meaning'), ans: 'D', why: 'A synonym is a word with <b>the same meaning</b>.' },
    { sec: 'Synonyms', name: 'Question 9', pts: 1, img: A + 'ta3/eyes.svg', text: 'Which word means the SAME as <b>look</b>? 👀', opts: o4('see', 'hear', 'smell', 'touch'), ans: 'A', why: '<b>see</b> is close in meaning to look.' },
    { sec: 'Synonyms', name: 'Question 10', pts: 1, img: A + 'ta3/cold.svg', text: 'Which word means the SAME as <b>cold</b>? ❄️', opts: o4('hot', 'chilly', 'warm', 'dry'), ans: 'B', why: '<b>chilly</b> means the same as cold.' },
  ],
},

/* ═══════════ TEST 8 — VOCABULARY: ANTONYMS ═══════════ */
{
  id: 9708, title: 'Test 8 · Vocabulary: antonyms', time: 25,
  questions: [
    { sec: 'Antonyms', name: 'Question 1', pts: 1, text: 'What is the OPPOSITE of <b>open</b>?', opts: o4('close', 'push', 'turn', 'lift'), ans: 'A', why: 'The opposite of open is <b>close</b>.' },
    { sec: 'Antonyms', name: 'Question 2', pts: 1, img: A + 'ta3/heavy_light.svg', text: 'What is the OPPOSITE of <b>heavy</b>?', opts: o4('hard', 'light', 'full', 'wide'), ans: 'B', why: 'The opposite of heavy is <b>light</b>.' },
    { sec: 'Antonyms', name: 'Question 3', pts: 1, img: A + 'ta3/clock_late.svg', text: 'What is the OPPOSITE of <b>early</b>? ⏰', opts: o4('soon', 'fast', 'late', 'now'), ans: 'C', why: 'The opposite of early is <b>late</b>.' },
    { sec: 'Antonyms', name: 'Question 4', pts: 1, img: A + 'ta3/empty_full.svg', text: 'What is the OPPOSITE of <b>empty</b>?', opts: o4('dry', 'clean', 'open', 'full'), ans: 'D', why: 'The opposite of empty is <b>full</b>.' },
    { sec: 'Antonyms', name: 'Question 5', pts: 1, text: 'What is the OPPOSITE of <b>remember</b>?', opts: o4('forget', 'think', 'learn', 'know'), ans: 'A', why: 'The opposite of remember is <b>forget</b>.' },
    { sec: 'Antonyms', name: 'Question 6', pts: 1, text: 'What is the OPPOSITE of <b>brave</b>?', opts: o4('strong', 'afraid', 'kind', 'proud'), ans: 'B', why: 'The opposite of brave is <b>afraid</b>.' },
    { sec: 'Antonyms', name: 'Question 7', pts: 1, img: A + 'ta3/noisy.svg', text: 'What is the OPPOSITE of <b>noisy</b>? 🔊', opts: o4('busy', 'happy', 'quiet', 'clean'), ans: 'C', why: 'The opposite of noisy is <b>quiet</b>.' },
    { sec: 'Antonyms', name: 'Question 8', pts: 1, text: 'What is the OPPOSITE of <b>difficult</b>?', opts: o4('long', 'slow', 'heavy', 'easy'), ans: 'D', why: 'The opposite of difficult is <b>easy</b>.' },
    { sec: 'Antonyms', name: 'Question 9', pts: 1, text: 'What is an <b>antonym</b>?', opts: o4('a word with the opposite meaning', 'a word with the same meaning', 'a word that sounds the same', 'a compound word'), ans: 'A', why: 'An antonym is a word with <b>the opposite meaning</b>.' },
    { sec: 'Antonyms', name: 'Question 10', pts: 1, text: 'What is the OPPOSITE of <b>arrive</b>?', opts: o4('come', 'leave', 'stay', 'wait'), ans: 'B', why: 'The opposite of arrive is <b>leave</b>.' },
  ],
},

/* ═══════════ TEST 9 — VOCABULARY: HOMOPHONES ═══════════ */
{
  id: 9709, title: 'Test 9 · Vocabulary: homophones', time: 25,
  questions: [
    { sec: 'Homophones', name: 'Question 1', pts: 1, img: A + 'ta3/two_cats.svg', text: '"I have ______ cats." (the number 2)', opts: o4('two', 'to', 'too', 'tow'), ans: 'A', why: 'The number 2 is <b>two</b>.' },
    { sec: 'Homophones', name: 'Question 2', pts: 1, text: '"I go ______ school every day."', opts: o4('two', 'to', 'too', 'toe'), ans: 'B', why: 'We go <b>to</b> a place.' },
    { sec: 'Homophones', name: 'Question 3', pts: 1, text: '"I am tired, and my sister is tired ______." (also)', opts: o4('to', 'two', 'too', 'tow'), ans: 'C', why: '<b>too</b> means also.' },
    { sec: 'Homophones', name: 'Question 4', pts: 1, img: A + 'ta3/ear.svg', text: '"I can ______ a bird singing." 👂', opts: o4('here', 'hair', 'her', 'hear'), ans: 'D', why: 'We <b>hear</b> with our ears.' },
    { sec: 'Homophones', name: 'Question 5', pts: 1, text: '"Come ______, please!" (to this place)', opts: o4('here', 'hear', 'hair', 'her'), ans: 'A', why: '<b>here</b> means in this place.' },
    { sec: 'Homophones', name: 'Question 6', pts: 1, text: '"______ bags are on the desk." (they own them)', opts: o4('There', 'Their', 'They’re', 'Theirs'), ans: 'B', why: '<b>Their</b> shows who the bags belong to.' },
    { sec: 'Homophones', name: 'Question 7', pts: 1, text: '"Look! ______ is a cat in the garden." 🐱', opts: o4('Their', 'They’re', 'There', 'Theirs'), ans: 'C', why: 'We start with <b>There is…</b>' },
    { sec: 'Homophones', name: 'Question 8', pts: 1, img: A + 'ta3/wind.svg', text: '"The wind ______ very hard yesterday."', opts: o4('blue', 'bleu', 'bloo', 'blew'), ans: 'D', why: 'The past of blow is <b>blew</b>; <i>blue</i> is a colour.' },
    { sec: 'Homophones', name: 'Question 9', pts: 1, img: A + 'ta3/shirt.svg', text: '"I ______ a new shirt today." (put it on my body)', opts: o4('wear', 'where', 'were', 'ware'), ans: 'A', why: 'We <b>wear</b> clothes 👕.' },
    { sec: 'Homophones', name: 'Question 10', pts: 1, text: 'What are <b>homophones</b>?', opts: o4('words with the same meaning', 'words that sound the same but are written differently', 'words with prefixes', 'words with many syllables'), ans: 'B', why: 'Homophones <b>sound the same</b> but have different spellings and meanings.' },
  ],
},

/* ═══════════ TEST 10 — VOCABULARY: CONTEXT CLUES ═══════════ */
{
  id: 9710, title: 'Test 10 · Vocabulary: context clues', time: 25,
  questions: [
    { sec: 'Context clues', name: 'Question 1', pts: 1, text: '"The room was <b>enormous</b> — twenty people could sit in it." What does <b>enormous</b> mean?', opts: o4('very big', 'very small', 'very dark', 'very old'), ans: 'A', why: 'Twenty people can sit in it, so it must be <b>very big</b>.' },
    { sec: 'Context clues', name: 'Question 2', pts: 1, text: '"Nam was <b>exhausted</b> after running ten kilometres." What does <b>exhausted</b> mean?', opts: o4('happy', 'very tired', 'hungry', 'angry'), ans: 'B', why: 'After running so far he is <b>very tired</b>.' },
    { sec: 'Context clues', name: 'Question 3', pts: 1, img: A + 'ta3/soup.svg', text: '"The soup was <b>delicious</b>, so we ate it all." What does <b>delicious</b> mean?', opts: o4('cold', 'salty', 'very tasty', 'burnt'), ans: 'C', why: 'They ate it all, so it was <b>very tasty</b> 🍲.' },
    { sec: 'Context clues', name: 'Question 4', pts: 1, text: '"Do not touch that dog — it looks <b>fierce</b>." What does <b>fierce</b> mean?', opts: o4('friendly', 'sleepy', 'small', 'angry and dangerous'), ans: 'D', why: 'We are told not to touch it, so it is <b>angry and dangerous</b>.' },
    { sec: 'Context clues', name: 'Question 5', pts: 1, text: '"Ha spoke in a <b>whisper</b> so nobody could hear her." A <b>whisper</b> is ______.', opts: o4('a very quiet voice', 'a loud shout', 'a song', 'a long story'), ans: 'A', why: 'Nobody could hear her, so it is <b>a very quiet voice</b>.' },
    { sec: 'Context clues', name: 'Question 6', pts: 1, text: '"The old bridge was <b>fragile</b>, so only one person crossed at a time." <b>Fragile</b> means ______.', opts: o4('very strong', 'easy to break', 'very long', 'very new'), ans: 'B', why: 'Only one person could cross, so it was <b>easy to break</b>.' },
    { sec: 'Context clues', name: 'Question 7', pts: 1, img: A + 'ta3/trophy.svg', text: '"She was <b>delighted</b> when she won the prize." 🏆 <b>Delighted</b> means ______.', opts: o4('sad', 'afraid', 'very happy', 'bored'), ans: 'C', why: 'Winning a prize makes you <b>very happy</b>.' },
    { sec: 'Context clues', name: 'Question 8', pts: 1, text: '"The path was <b>narrow</b>, so we walked one behind the other." <b>Narrow</b> means ______.', opts: o4('very wide', 'very wet', 'very long', 'not wide'), ans: 'D', why: 'They walked one behind the other, so the path was <b>not wide</b>.' },
    { sec: 'Context clues', name: 'Question 9', pts: 1, text: 'When you meet a new word while reading, what should you do FIRST?', opts: o4('look at the other words around it', 'skip the whole page', 'close the book', 'change the word'), ans: 'A', why: 'The words around it — the context — help you guess the meaning.' },
    { sec: 'Context clues', name: 'Question 10', pts: 1, img: A + 'ta3/rain.svg', text: '"The sky was <b>gloomy</b> and grey, and rain began to fall." 🌧️ <b>Gloomy</b> means ______.', opts: o4('bright', 'dark and sad', 'hot', 'clean'), ans: 'B', why: 'Grey sky and rain tell us it means <b>dark and sad</b>.' },
  ],
},

/* ═══════════ TEST 11 — VOCABULARY: SCHOOL, SUBJECTS AND TIMETABLE ═══════════ */
{
  id: 9711, title: 'Test 11 · School, subjects and timetable', time: 25,
  questions: [
    { sec: 'School', name: 'Question 1', pts: 1, img: A + 'ta3/maths.svg', text: 'In which subject do you learn about numbers? 🔢', opts: o4('Maths', 'Music', 'Art', 'English'), ans: 'A', why: 'We learn about numbers in <b>Maths</b>.' },
    { sec: 'School', name: 'Question 2', pts: 1, img: A + 'ta3/art.svg', text: 'In which subject do you draw and paint? 🎨', opts: o4('Science', 'Art', 'Maths', 'PE'), ans: 'B', why: 'We draw and paint in <b>Art</b>.' },
    { sec: 'School', name: 'Question 3', pts: 1, img: A + 'ta3/football.svg', text: 'In which subject do you run and play sports? ⚽', opts: o4('Music', 'History', 'PE', 'English'), ans: 'C', why: '<b>PE</b> means Physical Education — sport.' },
    { sec: 'School', name: 'Question 4', pts: 1, img: A + 'ta3/plant.svg', text: 'In which subject do you learn about plants and animals? 🌱', opts: o4('Art', 'Music', 'Maths', 'Science'), ans: 'D', why: 'We learn about plants and animals in <b>Science</b>.' },
    { sec: 'School', name: 'Question 5', pts: 1, text: 'The room where you have lessons is the ______.', opts: o4('classroom', 'kitchen', 'garage', 'bedroom'), ans: 'A', why: 'Lessons happen in the <b>classroom</b>.' },
    { sec: 'School', name: 'Question 6', pts: 1, img: A + 'ta3/library.svg', text: 'The place where you borrow books at school is the ______. 📚', opts: o4('canteen', 'library', 'office', 'gym'), ans: 'B', why: 'We borrow books at the <b>library</b>.' },
    { sec: 'School', name: 'Question 7', pts: 1, text: 'The short rest between lessons is called the ______.', opts: o4('homework', 'lesson', 'break', 'timetable'), ans: 'C', why: 'The rest between lessons is the <b>break</b>.' },
    { sec: 'School', name: 'Question 8', pts: 1, img: A + 'ta3/timetable.svg', text: 'The list that shows your lessons for each day is the ______.', opts: o4('dictionary', 'notebook', 'diary', 'timetable'), ans: 'D', why: 'A <b>timetable</b> shows the lessons for each day.' },
    { sec: 'School', name: 'Question 9', pts: 1, img: A + 'ta3/timetable.svg', text: '"We have English ______ Tuesday and Friday."', opts: o4('on', 'in', 'at', 'to'), ans: 'A', why: 'With days we use <b>on</b>.' },
    { sec: 'School', name: 'Question 10', pts: 1, img: A + 'ta3/clock7.svg', text: '"School starts ______ seven o’clock." 🕖', opts: o4('on', 'at', 'in', 'of'), ans: 'B', why: 'With a clock time we use <b>at</b>.' },
  ],
},

/* ═══════════ TEST 12 — VOCABULARY: JOBS, PLACES AND DIRECTIONS ═══════════ */
{
  id: 9712, title: 'Test 12 · Jobs, places in town and directions', time: 25,
  questions: [
    { sec: 'Jobs', name: 'Question 1', pts: 1, img: A + 'ta3/doctor.svg', text: 'A person who helps sick people in a hospital is a ______. 🩺', opts: o4('doctor', 'farmer', 'driver', 'baker'), ans: 'A', why: 'A <b>doctor</b> helps sick people.' },
    { sec: 'Jobs', name: 'Question 2', pts: 1, img: A + 'ta3/farmer.svg', text: 'A person who grows rice and vegetables is a ______. 🌾', opts: o4('pilot', 'farmer', 'nurse', 'waiter'), ans: 'B', why: 'A <b>farmer</b> works on a farm.' },
    { sec: 'Jobs', name: 'Question 3', pts: 1, img: A + 'ta3/pilot.svg', text: 'A person who flies a plane is a ______. ✈️', opts: o4('driver', 'sailor', 'pilot', 'cook'), ans: 'C', why: 'A <b>pilot</b> flies a plane.' },
    { sec: 'Jobs', name: 'Question 4', pts: 1, img: A + 'ta3/bread.svg', text: 'A person who makes bread and cakes is a ______. 🍞', opts: o4('butcher', 'painter', 'builder', 'baker'), ans: 'D', why: 'A <b>baker</b> makes bread and cakes.' },
    { sec: 'Places', name: 'Question 5', pts: 1, img: A + 'ta3/letter.svg', text: 'You post a letter at the ______. ✉️', opts: o4('post office', 'bank', 'cinema', 'museum'), ans: 'A', why: 'We post letters at the <b>post office</b>.' },
    { sec: 'Places', name: 'Question 6', pts: 1, img: A + 'ta3/cinema.svg', text: 'You watch a film at the ______. 🎬', opts: o4('library', 'cinema', 'market', 'hospital'), ans: 'B', why: 'We watch films at the <b>cinema</b>.' },
    { sec: 'Places', name: 'Question 7', pts: 1, img: A + 'ta3/medicine.svg', text: 'You buy medicine at the ______. 💊', opts: o4('bakery', 'bank', 'pharmacy', 'station'), ans: 'C', why: 'We buy medicine at the <b>pharmacy</b>.' },
    { sec: 'Directions', name: 'Question 8', pts: 1, text: '"Go ______ ahead and you will see the park."', opts: o4('turn', 'left', 'right', 'straight'), ans: 'D', why: 'We say <b>go straight ahead</b>.' },
    { sec: 'Directions', name: 'Question 9', pts: 1, img: A + 'ta3/lights.svg', text: '"______ left at the traffic lights." 🚦', opts: o4('Turn', 'Go', 'Cross', 'Walk'), ans: 'A', why: 'We say <b>Turn left</b>.' },
    { sec: 'Directions', name: 'Question 10', pts: 1, img: A + 'ta3/between.svg', text: '"The bank is ______ the supermarket and the school."', opts: o4('next', 'between', 'behind', 'under'), ans: 'B', why: 'With two places on each side we use <b>between</b>.' },
  ],
},

/* ═══════════ TEST 13 — VOCABULARY: FOOD, HEALTH AND THE BODY ═══════════ */
{
  id: 9713, title: 'Test 13 · Food, health and the body', time: 25,
  questions: [
    { sec: 'Health', name: 'Question 1', pts: 1, img: A + 'ta3/headache.svg', text: '"I have a ______. My head hurts." 🤕', opts: o4('headache', 'toothache', 'stomach ache', 'cold'), ans: 'A', why: 'Pain in the head is a <b>headache</b>.' },
    { sec: 'Health', name: 'Question 2', pts: 1, img: A + 'ta3/tooth.svg', text: '"I have a ______. I should go to the dentist." 🦷', opts: o4('headache', 'toothache', 'cough', 'fever'), ans: 'B', why: 'Pain in a tooth is a <b>toothache</b>.' },
    { sec: 'Health', name: 'Question 3', pts: 1, text: '"He is very hot and ill. He has a ______."', opts: o4('cold', 'cut', 'fever', 'bruise'), ans: 'C', why: 'A high body heat is a <b>fever</b>.' },
    { sec: 'Health', name: 'Question 4', pts: 1, text: 'What should you do to stay healthy?', opts: o4('eat only sweets', 'sleep two hours', 'never wash', 'eat fruit and exercise'), ans: 'D', why: 'We stay healthy when we <b>eat fruit and exercise</b> 🍎.' },
    { sec: 'Food', name: 'Question 5', pts: 1, img: A + 'ta3/carrot.svg', text: 'Which group is all vegetables? 🥕', opts: o4('carrot, cabbage, onion', 'apple, banana, mango', 'beef, pork, chicken', 'milk, juice, water'), ans: 'A', why: 'Carrot, cabbage and onion are all <b>vegetables</b>.' },
    { sec: 'Food', name: 'Question 6', pts: 1, text: '"How ______ sugar do you want?"', opts: o4('many', 'much', 'lots', 'number'), ans: 'B', why: 'Sugar cannot be counted, so we use <b>How much</b>.' },
    { sec: 'Food', name: 'Question 7', pts: 1, img: A + 'ta3/four_eggs.svg', text: '"How ______ eggs are there?" 🥚', opts: o4('much', 'a lot', 'many', 'any'), ans: 'C', why: 'Eggs can be counted, so we use <b>How many</b>.' },
    { sec: 'Body', name: 'Question 8', pts: 1, img: A + 'ta3/heart.svg', text: 'Your heart is inside your ______. ❤️', opts: o4('foot', 'hand', 'ear', 'chest'), ans: 'D', why: 'The heart is inside the <b>chest</b>.' },
    { sec: 'Body', name: 'Question 9', pts: 1, img: A + 'ta3/tongue.svg', text: 'We use our ______ to taste food. 👅', opts: o4('tongue', 'nose', 'ear', 'elbow'), ans: 'A', why: 'We taste with our <b>tongue</b>.' },
    { sec: 'Health', name: 'Question 10', pts: 1, img: A + 'ta3/wash.svg', text: '"You should ______ your hands before you eat." 🧼', opts: o4('paint', 'wash', 'hide', 'count'), ans: 'B', why: 'We <b>wash</b> our hands before eating.' },
  ],
},

/* ═══════════ TEST 14 — GRAMMAR: NOUNS ═══════════ */
{
  id: 9714, title: 'Test 14 · Grammar: nouns', time: 25,
  questions: [
    { sec: 'Nouns', name: 'Question 1', pts: 1, text: 'Which word is a noun?', opts: o4('garden', 'quickly', 'jump', 'beautiful'), ans: 'A', why: 'A <b>garden</b> is a place, so it is a noun.' },
    { sec: 'Nouns', name: 'Question 2', pts: 1, text: 'Which one is a PROPER noun?', opts: o4('river', 'Mekong', 'water', 'boat'), ans: 'B', why: '<b>Mekong</b> is the name of one special river.' },
    { sec: 'Nouns', name: 'Question 3', pts: 1, text: 'Which one is a COMMON noun?', opts: o4('Ha Noi', 'Lan', 'city', 'April'), ans: 'C', why: '<b>city</b> is a general word, not a name.' },
    { sec: 'Nouns', name: 'Question 4', pts: 1, img: A + 'ta3/water.svg', text: 'Which noun CANNOT be counted?', opts: o4('book', 'chair', 'apple', 'water'), ans: 'D', why: 'We cannot say "two waters" — <b>water</b> is uncountable 💧.' },
    { sec: 'Nouns', name: 'Question 5', pts: 1, img: A + 'ta3/pencil.svg', text: 'Which noun CAN be counted?', opts: o4('pencil', 'rice', 'milk', 'sugar'), ans: 'A', why: 'We can say one pencil, two pencils — <b>pencil</b> is countable.' },
    { sec: 'Nouns', name: 'Question 6', pts: 1, text: '"This is ______ book." (it belongs to Lan)', opts: o4('Lan book', 'Lan’s', 'Lans', 'Lans’'), ans: 'B', why: 'We show belonging with <b>’s</b>: Lan’s book.' },
    { sec: 'Nouns', name: 'Question 7', pts: 1, text: '"These are the ______ bags." (they belong to the boys)', opts: o4('boy’s', 'boys’s', 'boys’', 'boys'), ans: 'C', why: 'A plural ending in -s takes just an apostrophe: <b>boys’</b>.' },
    { sec: 'Nouns', name: 'Question 8', pts: 1, text: 'Which group are ALL nouns?', opts: o4('run, sing, walk', 'happy, sad, kind', 'slowly, quickly, well', 'teacher, school, book'), ans: 'D', why: '<b>teacher, school, book</b> are all people or things.' },
    { sec: 'Nouns', name: 'Question 9', pts: 1, text: '"There is ______ water in the glass."', opts: o4('some', 'many', 'a few', 'several'), ans: 'A', why: 'With an uncountable noun we use <b>some</b>.' },
    { sec: 'Nouns', name: 'Question 10', pts: 1, text: 'How many nouns are in this sentence? "The boy reads a book in the park."', opts: o4('two', 'three', 'four', 'one'), ans: 'B', why: '<b>boy, book, park</b> — three nouns.' },
  ],
},

/* ═══════════ TEST 15 — GRAMMAR: PRONOUNS AND POSSESSIVES ═══════════ */
{
  id: 9715, title: 'Test 15 · Grammar: pronouns and possessives', time: 25,
  questions: [
    { sec: 'Pronouns', name: 'Question 1', pts: 1, text: '"Minh and I are friends. ______ play together."', opts: o4('We', 'They', 'He', 'You'), ans: 'A', why: 'Minh and I = <b>We</b>.' },
    { sec: 'Pronouns', name: 'Question 2', pts: 1, text: '"I like these books. I read ______ every night."', opts: o4('it', 'them', 'they', 'their'), ans: 'B', why: 'After a verb, for plural things we use <b>them</b>.' },
    { sec: 'Pronouns', name: 'Question 3', pts: 1, text: '"Ha is my cousin. I often visit ______."', opts: o4('she', 'hers', 'her', 'his'), ans: 'C', why: 'After the verb <b>visit</b> we use <b>her</b>.' },
    { sec: 'Possessives', name: 'Question 4', pts: 1, text: '"That bike is ______." (it belongs to them)', opts: o4('their', 'they', 'them', 'theirs'), ans: 'D', why: 'With no noun after it we use <b>theirs</b>.' },
    { sec: 'Possessives', name: 'Question 5', pts: 1, text: '"Is this pen ______?" (does it belong to you)', opts: o4('yours', 'your', 'you', 'you’re'), ans: 'A', why: 'With no noun after it we use <b>yours</b>.' },
    { sec: 'Possessives', name: 'Question 6', pts: 1, text: '"The dog wagged ______ tail." 🐕', opts: o4('it’s', 'its', 'his', 'their'), ans: 'B', why: '<b>its</b> shows belonging; <i>it’s</i> means "it is".' },
    { sec: 'Pronouns', name: 'Question 7', pts: 1, text: 'Which sentence is correct?', opts: o4('Me and Nam went home.', 'Nam and me went home.', 'Nam and I went home.', 'I and Nam went home.'), ans: 'C', why: 'As the subject we use <b>I</b>, and we put the other person first.' },
    { sec: 'Pronoun agreement', name: 'Question 8', pts: 1, text: '"Every pupil must bring ______ own pencil."', opts: o4('them', 'they', 'theirs', 'their'), ans: 'D', why: 'Before the noun <b>pencil</b> we use <b>their</b>.' },
    { sec: 'Pronoun agreement', name: 'Question 9', pts: 1, text: '"The children finished ______ homework."', opts: o4('their', 'his', 'her', 'its'), ans: 'A', why: '<b>children</b> is plural, so we use <b>their</b>.' },
    { sec: 'Pronouns', name: 'Question 10', pts: 1, text: '"My mother made this cake for my brother and ______."', opts: o4('I', 'me', 'my', 'mine'), ans: 'B', why: 'After the preposition <b>for</b> we use <b>me</b> 🎂.' },
  ],
},

/* ═══════════ TEST 16 — GRAMMAR: PRESENT SIMPLE ═══════════ */
{
  id: 9716, title: 'Test 16 · Grammar: present simple', time: 25,
  questions: [
    { sec: 'Present simple', name: 'Question 1', pts: 1, img: A + 'ta3/motorbike.svg', text: '"My father ______ to work by motorbike every day." 🛵', opts: o4('goes', 'go', 'going', 'gone'), ans: 'A', why: '<b>My father</b> = he, so we add -es: <b>goes</b>.' },
    { sec: 'Present simple', name: 'Question 2', pts: 1, text: '"We ______ English on Monday and Thursday."', opts: o4('studies', 'study', 'studying', 'studied'), ans: 'B', why: 'With <b>we</b> we use the plain verb <b>study</b>.' },
    { sec: 'Present simple', name: 'Question 3', pts: 1, img: A + 'ta3/toothbrush.svg', text: '"She ______ her teeth twice a day." 🪥', opts: o4('brush', 'brushing', 'brushes', 'brushed'), ans: 'C', why: 'After -sh we add <b>-es</b>: brushes.' },
    { sec: 'Present simple', name: 'Question 4', pts: 1, img: A + 'ta3/football.svg', text: '"My friends ______ football after school." ⚽', opts: o4('plays', 'playing', 'is playing', 'play'), ans: 'D', why: '<b>My friends</b> is plural, so we use <b>play</b>.' },
    { sec: 'Present simple', name: 'Question 5', pts: 1, text: '"He ______ like coffee." (negative)', opts: o4('doesn’t', 'don’t', 'isn’t', 'aren’t'), ans: 'A', why: 'With <b>he</b> the negative is <b>doesn’t</b> + plain verb.' },
    { sec: 'Present simple', name: 'Question 6', pts: 1, text: '"______ your sister play the piano?" 🎹', opts: o4('Do', 'Does', 'Is', 'Are'), ans: 'B', why: '<b>Your sister</b> = she, so we ask with <b>Does</b>.' },
    { sec: 'Present simple', name: 'Question 7', pts: 1, text: 'Which time word goes with the present simple?', opts: o4('now', 'at the moment', 'every day', 'yesterday'), ans: 'C', why: 'We use the present simple for habits: <b>every day</b>.' },
    { sec: 'Present simple', name: 'Question 8', pts: 1, img: A + 'ta3/sunrise.svg', text: '"The sun ______ in the east." ☀️', opts: o4('rise', 'rising', 'rose', 'rises'), ans: 'D', why: 'For a fact that is always true we use the present simple: <b>rises</b>.' },
    { sec: 'Present simple', name: 'Question 9', pts: 1, text: '"______ they live near the school?"', opts: o4('Do', 'Does', 'Is', 'Has'), ans: 'A', why: 'With <b>they</b> we ask with <b>Do</b>.' },
    { sec: 'Present simple', name: 'Question 10', pts: 1, text: 'Which sentence is correct?', opts: o4('She don’t like fish.', 'She doesn’t like fish.', 'She doesn’t likes fish.', 'She not like fish.'), ans: 'B', why: 'With <b>she</b>: doesn’t + the plain verb <b>like</b>.' },
  ],
},

/* ═══════════ TEST 17 — GRAMMAR: PRESENT CONTINUOUS ═══════════ */
{
  id: 9717, title: 'Test 17 · Grammar: present continuous', time: 25,
  questions: [
    { sec: 'Present continuous', name: 'Question 1', pts: 1, img: A + 'ta3/piano.svg', text: '"Listen! Somebody ______ the piano." 🎹', opts: o4('is playing', 'plays', 'play', 'played'), ans: 'A', why: 'It is happening now, so we use <b>is playing</b>.' },
    { sec: 'Present continuous', name: 'Question 2', pts: 1, text: '"The students ______ a test at the moment."', opts: o4('is doing', 'are doing', 'do', 'does'), ans: 'B', why: '<b>students</b> is plural, so we use <b>are doing</b>.' },
    { sec: 'Present continuous', name: 'Question 3', pts: 1, text: '"I ______ for my friend now."', opts: o4('wait', 'waits', 'am waiting', 'waited'), ans: 'C', why: 'With <b>I</b> and now we use <b>am waiting</b>.' },
    { sec: 'Present continuous', name: 'Question 4', pts: 1, text: 'sit + ing = ______', opts: o4('siting', 'siteing', 'sitting', 'sittting'), ans: 'C', why: 'We double the t: <b>sitting</b>.' },
    { sec: 'Present continuous', name: 'Question 5', pts: 1, text: 'have + ing = ______', opts: o4('having', 'haveing', 'havving', 'haing'), ans: 'A', why: 'We drop the silent e: <b>having</b>.' },
    { sec: 'Present continuous', name: 'Question 6', pts: 1, text: '"What ______ your brother doing?"', opts: o4('are', 'is', 'do', 'does'), ans: 'B', why: '<b>Your brother</b> = he, so we use <b>is</b>.' },
    { sec: 'Present continuous', name: 'Question 7', pts: 1, text: 'Which time word goes with the present continuous?', opts: o4('every week', 'last night', 'right now', 'usually'), ans: 'C', why: 'The present continuous is for <b>right now</b>.' },
    { sec: 'Present continuous', name: 'Question 8', pts: 1, img: A + 'ta3/rain.svg', text: '"It ______ outside, so take an umbrella." 🌧️', opts: o4('rain', 'rains', 'rained', 'is raining'), ans: 'D', why: 'It is happening now: <b>is raining</b>.' },
    { sec: 'Present continuous', name: 'Question 9', pts: 1, text: 'Which sentence is in the present continuous?', opts: o4('They are having lunch.', 'They have lunch at noon.', 'They had lunch.', 'They will have lunch.'), ans: 'A', why: '<b>are having</b> = be + verb-ing.' },
    { sec: 'Present continuous', name: 'Question 10', pts: 1, img: A + 'ta3/tv.svg', text: '"We ______ TV at the moment. The film is very good." 📺', opts: o4('watch', 'are watching', 'watches', 'watched'), ans: 'B', why: 'At the moment → <b>are watching</b>.' },
  ],
},

/* ═══════════ TEST 18 — GRAMMAR: PAST SIMPLE ═══════════ */
{
  id: 9718, title: 'Test 18 · Grammar: past simple', time: 25,
  questions: [
    { sec: 'Past simple', name: 'Question 1', pts: 1, img: A + 'ta3/market.svg', text: '"Yesterday I ______ to the market with my mother." 🛒', opts: o4('went', 'go', 'goes', 'going'), ans: 'A', why: 'The past of <b>go</b> is <b>went</b>.' },
    { sec: 'Past simple', name: 'Question 2', pts: 1, img: A + 'ta3/letter.svg', text: '"She ______ a letter to her friend last week." ✉️', opts: o4('write', 'wrote', 'writes', 'writing'), ans: 'B', why: 'The past of <b>write</b> is <b>wrote</b>.' },
    { sec: 'Past simple', name: 'Question 3', pts: 1, text: '"We ______ football in the park on Sunday."', opts: o4('play', 'plays', 'played', 'playing'), ans: 'C', why: 'play is regular: <b>played</b>.' },
    { sec: 'Past simple', name: 'Question 4', pts: 1, img: A + 'ta3/party.svg', text: '"They ______ very happy at the party." 🎉', opts: o4('is', 'are', 'was', 'were'), ans: 'D', why: 'With <b>they</b> the past of be is <b>were</b>.' },
    { sec: 'Past simple', name: 'Question 5', pts: 1, text: '"I ______ at home yesterday evening."', opts: o4('was', 'were', 'am', 'is'), ans: 'A', why: 'With <b>I</b> the past of be is <b>was</b>.' },
    { sec: 'Past simple', name: 'Question 6', pts: 1, text: '"He ______ his homework last night." (negative)', opts: o4('doesn’t do', 'didn’t do', 'didn’t did', 'don’t do'), ans: 'B', why: 'The past negative is <b>didn’t</b> + the plain verb.' },
    { sec: 'Past simple', name: 'Question 7', pts: 1, text: '"______ you see the film yesterday?"', opts: o4('Do', 'Does', 'Did', 'Are'), ans: 'C', why: 'We ask about the past with <b>Did</b>.' },
    { sec: 'Past simple', name: 'Question 8', pts: 1, img: A + 'ta3/rice.svg', text: 'What is the past of <b>eat</b>? 🍚', opts: o4('eated', 'eating', 'eats', 'ate'), ans: 'D', why: 'eat → <b>ate</b> (irregular).' },
    { sec: 'Past simple', name: 'Question 9', pts: 1, text: 'What is the past of <b>buy</b>?', opts: o4('bought', 'buyed', 'buying', 'buys'), ans: 'A', why: 'buy → <b>bought</b> (irregular).' },
    { sec: 'Past simple', name: 'Question 10', pts: 1, text: 'Which time word goes with the past simple?', opts: o4('tomorrow', 'last year', 'now', 'every day'), ans: 'B', why: 'The past simple is for finished time: <b>last year</b>.' },
  ],
},

/* ═══════════ TEST 19 — GRAMMAR: TALKING ABOUT THE FUTURE ═══════════ */
{
  id: 9719, title: 'Test 19 · Grammar: the future (will, be going to)', time: 25,
  questions: [
    { sec: 'Future', name: 'Question 1', pts: 1, img: A + 'ta3/grandma.svg', text: '"Tomorrow I ______ visit my grandparents." 👵', opts: o4('will', 'was', 'did', 'am'), ans: 'A', why: 'We talk about the future with <b>will</b> + the plain verb.' },
    { sec: 'Future', name: 'Question 2', pts: 1, img: A + 'ta3/clouds.svg', text: '"Look at those clouds! It ______ rain." 🌧️', opts: o4('is go to', 'is going to', 'will to', 'goes to'), ans: 'B', why: 'For something we can see coming we use <b>is going to</b>.' },
    { sec: 'Future', name: 'Question 3', pts: 1, text: '"We ______ have a test next Monday."', opts: o4('will to', 'wills', 'will', 'willing'), ans: 'C', why: 'After <b>will</b> we use the plain verb.' },
    { sec: 'Future', name: 'Question 4', pts: 1, text: '"She ______ be nine years old next month."', opts: o4('wills', 'willing', 'will to', 'will'), ans: 'D', why: '<b>will</b> is the same for every subject.' },
    { sec: 'Future', name: 'Question 5', pts: 1, text: '"I ______ go out tonight. I am too tired." (negative)', opts: o4('won’t', 'don’t', 'didn’t', 'am not'), ans: 'A', why: 'will not → <b>won’t</b>.' },
    { sec: 'Future', name: 'Question 6', pts: 1, text: '"They ______ going to travel to Hue this summer."', opts: o4('is', 'are', 'was', 'am'), ans: 'B', why: 'With <b>they</b> we use <b>are</b> going to.' },
    { sec: 'Future', name: 'Question 7', pts: 1, text: 'Which time word goes with the future?', opts: o4('yesterday', 'last week', 'next week', 'an hour ago'), ans: 'C', why: '<b>next week</b> is a future time.' },
    { sec: 'Future', name: 'Question 8', pts: 1, text: '"______ you help me, please?"', opts: o4('Did', 'Was', 'Were', 'Will'), ans: 'D', why: 'We ask for help with <b>Will you…?</b>' },
    { sec: 'Future', name: 'Question 9', pts: 1, img: A + 'ta3/zoo.svg', text: 'Which sentence talks about the future?', opts: o4('We will go to the zoo on Sunday.', 'We went to the zoo.', 'We are at the zoo.', 'We go to the zoo every year.'), ans: 'A', why: '<b>will go</b> + on Sunday tells us about the future 🦁.' },
    { sec: 'Future', name: 'Question 10', pts: 1, img: A + 'ta3/bike.svg', text: '"I ______ going to buy a new bike." 🚲', opts: o4('is', 'am', 'are', 'was'), ans: 'B', why: 'With <b>I</b> we use <b>am</b> going to.' },
  ],
},

/* ═══════════ TEST 20 — GRAMMAR: ADJECTIVES AND COMPARISON ═══════════ */
{
  id: 9720, title: 'Test 20 · Grammar: adjectives and comparison', time: 25,
  questions: [
    { sec: 'Comparatives', name: 'Question 1', pts: 1, img: A + 'ta3/eleph_dog.svg', text: '"An elephant is ______ than a dog." 🐘', opts: o4('bigger', 'big', 'biggest', 'more big'), ans: 'A', why: 'Short adjective + <b>-er</b>: bigger. We double the g.' },
    { sec: 'Comparatives', name: 'Question 2', pts: 1, text: '"This book is ______ than that one."', opts: o4('interesting', 'more interesting', 'interestinger', 'most interesting'), ans: 'B', why: 'Long adjectives take <b>more</b>: more interesting.' },
    { sec: 'Comparatives', name: 'Question 3', pts: 1, img: A + 'ta3/hot.svg', text: '"Today is ______ than yesterday." (hot)', opts: o4('hoter', 'more hot', 'hotter', 'hottest'), ans: 'C', why: 'We double the t: <b>hotter</b> 🔥.' },
    { sec: 'Superlatives', name: 'Question 4', pts: 1, img: A + 'ta3/tall_short.svg', text: '"Lan is the ______ girl in our class." (tall)', opts: o4('taller', 'more tall', 'tall', 'tallest'), ans: 'D', why: 'The superlative of tall is <b>the tallest</b>.' },
    { sec: 'Superlatives', name: 'Question 5', pts: 1, text: '"This is the ______ film I have ever seen." (good)', opts: o4('best', 'gooder', 'goodest', 'more good'), ans: 'A', why: 'good → better → <b>best</b> (irregular).' },
    { sec: 'Comparatives', name: 'Question 6', pts: 1, text: '"My bag is ______ than yours." (heavy)', opts: o4('heavyer', 'heavier', 'more heavy', 'heaviest'), ans: 'B', why: 'Consonant + y → <b>heavier</b>.' },
    { sec: 'Adjectives', name: 'Question 7', pts: 1, text: 'Which sentence puts the adjectives in the right place?', opts: o4('a house big old', 'a big house old', 'a big old house', 'old a big house'), ans: 'C', why: 'Adjectives come before the noun: <b>a big old house</b> 🏠.' },
    { sec: 'Comparatives', name: 'Question 8', pts: 1, img: A + 'ta3/same_tall.svg', text: '"Nam is ______ tall ______ his brother." (they are the same)', opts: o4('more … than', 'as … than', 'so … as', 'as … as'), ans: 'D', why: 'For two things that are the same we use <b>as … as</b>.' },
    { sec: 'Comparatives', name: 'Question 9', pts: 1, img: A + 'ta3/bike_car.svg', text: '"A bicycle is ______ than a car." (cheap)', opts: o4('cheaper', 'more cheap', 'cheapest', 'cheapper'), ans: 'A', why: 'Short adjective + -er: <b>cheaper</b>.' },
    { sec: 'Superlatives', name: 'Question 10', pts: 1, img: A + 'ta3/months.svg', text: '"February is the ______ month of the year." (short)', opts: o4('shorter', 'shortest', 'more short', 'most short'), ans: 'B', why: 'The superlative of short is <b>the shortest</b>.' },
  ],
},

/* ═══════════ TEST 21 — GRAMMAR: ADVERBS ═══════════ */
{
  id: 9721, title: 'Test 21 · Grammar: adverbs', time: 25,
  questions: [
    { sec: 'Adverbs', name: 'Question 1', pts: 1, text: 'Which word is an adverb (it tells HOW)?', opts: o4('quickly', 'quick', 'quicker', 'quickness'), ans: 'A', why: 'Most adverbs of manner end in <b>-ly</b>: quickly.' },
    { sec: 'Adverbs', name: 'Question 2', pts: 1, text: '"He speaks English very ______." (good)', opts: o4('good', 'well', 'goodly', 'better'), ans: 'B', why: 'The adverb of <b>good</b> is <b>well</b>.' },
    { sec: 'Adverbs', name: 'Question 3', pts: 1, img: A + 'ta3/turtle.svg', text: '"The turtle walks ______." 🐢', opts: o4('slow', 'slowest', 'slowly', 'slower'), ans: 'C', why: 'To describe the verb <b>walks</b> we use <b>slowly</b>.' },
    { sec: 'Adverbs of frequency', name: 'Question 4', pts: 1, text: '"I ______ eat breakfast. I never miss it." (100% of the time)', opts: o4('never', 'sometimes', 'rarely', 'always'), ans: 'D', why: '100% of the time = <b>always</b>.' },
    { sec: 'Adverbs of frequency', name: 'Question 5', pts: 1, text: '"She ______ goes to bed late." (0% of the time)', opts: o4('never', 'often', 'usually', 'always'), ans: 'A', why: '0% of the time = <b>never</b>.' },
    { sec: 'Adverbs of frequency', name: 'Question 6', pts: 1, text: 'Where does the adverb go? "I ______ am ______ late for school."', opts: o4('am never late', 'never am late', 'am late never', 'late never am'), ans: 'B', why: 'Careful: with the verb <b>be</b> the adverb comes AFTER it — "I am never late".' },
    { sec: 'Adverbs', name: 'Question 7', pts: 1, img: A + 'ta3/baby.svg', text: '"Please speak ______. The baby is sleeping." 👶', opts: o4('loudly', 'fast', 'quietly', 'badly'), ans: 'C', why: 'Not to wake the baby we speak <b>quietly</b>.' },
    { sec: 'Adverbs', name: 'Question 8', pts: 1, text: 'What does an adverb usually tell us?', opts: o4('what colour a thing is', 'how many things there are', 'who owns a thing', 'how, when or where something happens'), ans: 'D', why: 'An adverb tells us <b>how, when or where</b> something happens.' },
    { sec: 'Adverbs', name: 'Question 9', pts: 1, text: 'careful → ______', opts: o4('carefully', 'carefuly', 'carefull', 'carefullly'), ans: 'A', why: 'careful + ly = <b>carefully</b> (two l’s).' },
    { sec: 'Adverbs', name: 'Question 10', pts: 1, text: 'Which word is NOT an adverb?', opts: o4('softly', 'happy', 'loudly', 'quickly'), ans: 'B', why: '<b>happy</b> is an adjective; the adverb is <i>happily</i>.' },
  ],
},

/* ═══════════ TEST 22 — GRAMMAR: PREPOSITIONS OF TIME AND PLACE ═══════════ */
{
  id: 9722, title: 'Test 22 · Prepositions of time and place', time: 25,
  questions: [
    { sec: 'Prepositions of time', name: 'Question 1', pts: 1, text: '"My birthday is ______ 12th May."', opts: o4('on', 'in', 'at', 'to'), ans: 'A', why: 'With a full date we use <b>on</b>.' },
    { sec: 'Prepositions of time', name: 'Question 2', pts: 1, text: '"We go swimming ______ the summer." 🏊', opts: o4('on', 'in', 'at', 'by'), ans: 'B', why: 'With seasons, months and years we use <b>in</b>.' },
    { sec: 'Prepositions of time', name: 'Question 3', pts: 1, img: A + 'ta3/clock730.svg', text: '"The film starts ______ half past seven." 🕢', opts: o4('on', 'in', 'at', 'of'), ans: 'C', why: 'With clock times we use <b>at</b>.' },
    { sec: 'Prepositions of time', name: 'Question 4', pts: 1, text: '"I do my homework ______ the evening."', opts: o4('on', 'at', 'by', 'in'), ans: 'D', why: 'We say <b>in</b> the morning / afternoon / evening.' },
    { sec: 'Prepositions of time', name: 'Question 5', pts: 1, text: '"I always sleep well ______ night." 🌙', opts: o4('at', 'in', 'on', 'to'), ans: 'A', why: '<b>at night</b> is a fixed phrase.' },
    { sec: 'Prepositions of place', name: 'Question 6', pts: 1, img: A + 'ta3/above.svg', text: '"The lamp is ______ the table." (higher than it, not touching) 💡', opts: o4('on', 'above', 'in', 'under'), ans: 'B', why: 'Higher than and not touching = <b>above</b>.' },
    { sec: 'Prepositions of place', name: 'Question 7', pts: 1, text: '"The shop is ______ from the school." (on the other side of the road)', opts: o4('next to', 'behind', 'opposite', 'between'), ans: 'C', why: 'On the other side = <b>opposite</b>.' },
    { sec: 'Prepositions of place', name: 'Question 8', pts: 1, img: A + 'ta3/bridge.svg', text: '"We walked ______ the bridge to get to the village." 🌉', opts: o4('in', 'at', 'on', 'across'), ans: 'D', why: 'From one side to the other = <b>across</b>.' },
    { sec: 'Prepositions of place', name: 'Question 9', pts: 1, img: A + 'ta3/behind.svg', text: '"The cat is hiding ______ the sofa." (we cannot see it) 🐱', opts: o4('behind', 'above', 'across', 'along'), ans: 'A', why: 'At the back of something = <b>behind</b>.' },
    { sec: 'Prepositions of time', name: 'Question 10', pts: 1, img: A + 'ta3/hours.svg', text: '"We stay at school ______ 7 a.m. ______ 4 p.m."', opts: o4('in … at', 'from … to', 'at … in', 'on … on'), ans: 'B', why: 'For a period we use <b>from … to</b>.' },
  ],
},

/* ═══════════ TEST 23 — GRAMMAR: CONJUNCTIONS ═══════════ */
{
  id: 9723, title: 'Test 23 · Conjunctions (and, but, or, because, so)', time: 25,
  questions: [
    { sec: 'Conjunctions', name: 'Question 1', pts: 1, text: '"I like maths ______ science." (two things I like)', opts: o4('and', 'but', 'or', 'because'), ans: 'A', why: 'We add two ideas with <b>and</b>.' },
    { sec: 'Conjunctions', name: 'Question 2', pts: 1, text: '"He is small ______ very strong." (a surprise)', opts: o4('and', 'but', 'or', 'so'), ans: 'B', why: 'We show a surprise or a difference with <b>but</b>.' },
    { sec: 'Conjunctions', name: 'Question 3', pts: 1, img: A + 'ta3/tea.svg', text: '"Would you like tea ______ coffee?" (a choice) ☕', opts: o4('and', 'but', 'or', 'because'), ans: 'C', why: 'We give a choice with <b>or</b>.' },
    { sec: 'Conjunctions', name: 'Question 4', pts: 1, img: A + 'ta3/rain.svg', text: '"I stayed at home ______ it was raining." (the reason) 🌧️', opts: o4('and', 'but', 'so', 'because'), ans: 'D', why: '<b>because</b> gives the reason.' },
    { sec: 'Conjunctions', name: 'Question 5', pts: 1, text: '"It was raining, ______ I stayed at home." (the result)', opts: o4('so', 'because', 'but', 'or'), ans: 'A', why: '<b>so</b> gives the result.' },
    { sec: 'Conjunctions', name: 'Question 6', pts: 1, text: '"Hurry up, ______ you will be late!"', opts: o4('and', 'or', 'because', 'so'), ans: 'B', why: 'A warning uses <b>or</b>: hurry up, or you will be late.' },
    { sec: 'Conjunctions', name: 'Question 7', pts: 1, text: '"She was tired ______ she finished her homework."', opts: o4('so', 'or', 'but', 'and'), ans: 'C', why: 'Being tired and still finishing is a surprise → <b>but</b>.' },
    { sec: 'Conjunctions', name: 'Question 8', pts: 1, img: A + 'ta3/umbrella.svg', text: '"We took an umbrella ______ we did not get wet." ☂️', opts: o4('because', 'but', 'or', 'so'), ans: 'D', why: 'Not getting wet is the result → <b>so</b>.' },
    { sec: 'Conjunctions', name: 'Question 9', pts: 1, text: 'Which word joins two sentences?', opts: o4('and', 'very', 'quickly', 'beautiful'), ans: 'A', why: '<b>and</b> is a conjunction — it joins.' },
    { sec: 'Conjunctions', name: 'Question 10', pts: 1, text: '"I want to go out, ______ I must finish my work first."', opts: o4('or', 'but', 'and', 'because'), ans: 'B', why: 'The second part goes against the first → <b>but</b>.' },
  ],
},

/* ═══════════ TEST 24 — GRAMMAR: ARTICLES AND QUANTIFIERS ═══════════ */
{
  id: 9724, title: 'Test 24 · Articles and quantifiers', time: 25,
  questions: [
    { sec: 'Articles', name: 'Question 1', pts: 1, text: '"She is ______ honest girl."', opts: o4('an', 'a', 'the', 'some'), ans: 'A', why: 'The h in <b>honest</b> is silent, so it sounds like a vowel → <b>an</b>.' },
    { sec: 'Articles', name: 'Question 2', pts: 1, img: A + 'ta3/guitar.svg', text: '"He plays ______ guitar very well." 🎸', opts: o4('a', 'the', 'an', 'some'), ans: 'B', why: 'With musical instruments we use <b>the</b>.' },
    { sec: 'Articles', name: 'Question 3', pts: 1, text: '"I saw ______ bird in the garden. ______ bird was blue."', opts: o4('the … A', 'an … The', 'a … The', 'the … The'), ans: 'C', why: 'First time <b>a</b>, then <b>The</b> when we both know which bird.' },
    { sec: 'Quantifiers', name: 'Question 4', pts: 1, img: A + 'ta3/milk.svg', text: '"There isn’t ______ milk in the fridge." 🥛', opts: o4('some', 'many', 'a few', 'any'), ans: 'D', why: 'In negative sentences we use <b>any</b>.' },
    { sec: 'Quantifiers', name: 'Question 5', pts: 1, img: A + 'ta3/five_apples.svg', text: '"There are ______ apples on the tree." 🍎', opts: o4('some', 'much', 'a little', 'any'), ans: 'A', why: 'In positive sentences with countable nouns we use <b>some</b>.' },
    { sec: 'Quantifiers', name: 'Question 6', pts: 1, text: '"How ______ books do you have?"', opts: o4('much', 'many', 'any', 'a little'), ans: 'B', why: 'Books are countable → <b>How many</b>.' },
    { sec: 'Quantifiers', name: 'Question 7', pts: 1, img: A + 'ta3/money.svg', text: '"I don’t have ______ money." 💰', opts: o4('many', 'a few', 'much', 'number of'), ans: 'C', why: 'Money is uncountable → <b>much</b>.' },
    { sec: 'Quantifiers', name: 'Question 8', pts: 1, text: '"There are only ______ children in the room. It is very quiet."', opts: o4('a little', 'much', 'a lot', 'a few'), ans: 'D', why: 'Countable and a small number → <b>a few</b>.' },
    { sec: 'Quantifiers', name: 'Question 9', pts: 1, img: A + 'ta3/salt.svg', text: '"Put ______ salt in the soup, please." (a small amount) 🧂', opts: o4('a little', 'a few', 'many', 'several'), ans: 'A', why: 'Salt is uncountable → <b>a little</b>.' },
    { sec: 'Articles', name: 'Question 10', pts: 1, text: 'Which sentence is correct?', opts: o4('I go to the school by bike.', 'I go to school by bike.', 'I go to a school by bike.', 'I go school by bike.'), ans: 'B', why: 'For the activity of studying we say <b>go to school</b> with no article.' },
  ],
},

/* ═══════════ TEST 25 — MECHANICS: CAPITAL LETTERS AND END PUNCTUATION ═══════════ */
{
  id: 9725, title: 'Test 25 · Capital letters and end punctuation', time: 25,
  questions: [
    { sec: 'Capitals', name: 'Question 1', pts: 1, text: 'Which sentence is written correctly?', opts: o4('On friday we visited Ha Long Bay.', 'On Friday we visited ha long bay.', 'on Friday we visited Ha Long Bay.', 'On Friday we visited Ha Long Bay.'), ans: 'D', why: 'The start, the day <b>Friday</b> and the place <b>Ha Long Bay</b> all take capitals.' },
    { sec: 'Capitals', name: 'Question 2', pts: 1, text: 'Which word needs a capital letter?', opts: o4('vietnamese', 'language', 'country', 'people'), ans: 'A', why: 'Names of languages and nationalities take capitals: <b>Vietnamese</b>.' },
    { sec: 'Capitals', name: 'Question 3', pts: 1, img: A + 'ta3/book.svg', text: 'How do we write the title of a book?', opts: o4('the jungle book', 'The Jungle book', 'The Jungle Book', 'the Jungle book'), ans: 'C', why: 'The important words of a title take capitals: <b>The Jungle Book</b> 📗.' },
    { sec: 'Capitals', name: 'Question 4', pts: 1, text: 'Which group of words all need capitals?', opts: o4('dog, tree, river', 'Sunday, March, Hue', 'blue, big, happy', 'run, swim, read'), ans: 'B', why: 'Days, months and place names are proper nouns.' },
    { sec: 'End punctuation', name: 'Question 5', pts: 1, text: '"Could you close the window ___"', opts: o4('?', '.', '!', ','), ans: 'A', why: 'It is a question, so it takes a <b>?</b>' },
    { sec: 'End punctuation', name: 'Question 6', pts: 1, text: '"Be careful ___ The floor is wet ___"', opts: o4('? .', '! .', '. ?', ', !'), ans: 'B', why: 'A warning takes <b>!</b>, and the telling sentence takes <b>.</b>' },
    { sec: 'End punctuation', name: 'Question 7', pts: 1, text: 'Which sentence has the wrong end mark?', opts: o4('What time is it?', 'I am reading a book.', 'Where are you going.', 'What a lovely day!'), ans: 'C', why: '"Where are you going" is a question, so it needs a <b>?</b>' },
    { sec: 'Capitals', name: 'Question 8', pts: 1, text: 'Which sentence is written correctly?', opts: o4('my teacher is miss lan.', 'My teacher is miss Lan.', 'my teacher is Miss Lan.', 'My teacher is Miss Lan.'), ans: 'D', why: 'The start and the person’s title and name all take capitals.' },
    { sec: 'End punctuation', name: 'Question 9', pts: 1, text: 'How many sentences are here? "It is cold. Put on your coat. Are you ready?"', opts: o4('three', 'two', 'four', 'one'), ans: 'A', why: 'There are three end marks, so there are <b>three</b> sentences.' },
    { sec: 'Capitals', name: 'Question 10', pts: 1, text: 'Which word should NOT have a capital letter here? "My Brother lives in Da Nang."', opts: o4('My', 'Brother', 'Da', 'Nang'), ans: 'B', why: '<b>brother</b> is a common noun, so it takes a small letter.' },
  ],
},

/* ═══════════ TEST 26 — MECHANICS: COMMAS, APOSTROPHES AND SPEECH MARKS ═══════════ */
{
  id: 9726, title: 'Test 26 · Commas, apostrophes and speech marks', time: 25,
  questions: [
    { sec: 'Commas', name: 'Question 1', pts: 1, text: 'Which sentence uses commas correctly in a list?', opts: o4('I bought apples, bananas and milk.', 'I bought apples bananas, and milk.', 'I bought, apples bananas and milk.', 'I bought apples bananas and, milk.'), ans: 'A', why: 'Commas separate the items in a list.' },
    { sec: 'Commas', name: 'Question 2', pts: 1, text: 'Where does the comma go? "Yes I would like some tea."', opts: o4('after "would"', 'after "Yes"', 'after "like"', 'after "some"'), ans: 'B', why: 'After Yes or No we put a comma: <b>Yes,</b> I would like some tea.' },
    { sec: 'Commas', name: 'Question 3', pts: 1, text: 'Which sentence needs a comma?', opts: o4('I am happy.', 'She sings well.', 'After lunch we went to the park.', 'The dog barked.'), ans: 'C', why: 'After an opening phrase we use a comma: <b>After lunch,</b> we went…' },
    { sec: 'Apostrophes', name: 'Question 4', pts: 1, text: 'Which sentence uses the apostrophe correctly?', opts: o4('The dog’s are barking.', 'The dogs is barking.', 'The dog is bark’ing.', 'That is my dog’s bowl.'), ans: 'D', why: '<b>dog’s bowl</b> shows the bowl belongs to the dog.' },
    { sec: 'Apostrophes', name: 'Question 5', pts: 1, text: 'What does the apostrophe show in <b>haven’t</b>?', opts: o4('a missing letter', 'belonging', 'a plural', 'a question'), ans: 'A', why: 'have not → haven’t — the apostrophe replaces the missing <b>o</b>.' },
    { sec: 'Apostrophes', name: 'Question 6', pts: 1, text: 'Which one is correct?', opts: o4('The childrens’ toys', 'The children’s toys', 'The childrens toys', 'The children’ toys'), ans: 'B', why: '<b>children</b> is already plural, so we add <b>’s</b>.' },
    { sec: 'Speech marks', name: 'Question 7', pts: 1, text: 'Which sentence uses speech marks correctly?', opts: o4('Hello, said Nam.', '"Hello, said Nam."', '"Hello," said Nam.', 'Hello," said Nam.'), ans: 'C', why: 'The speech marks go around the spoken words only.' },
    { sec: 'Speech marks', name: 'Question 8', pts: 1, text: 'What goes inside speech marks?', opts: o4('the name of the speaker', 'the date', 'the title of the book', 'the exact words someone says'), ans: 'D', why: 'Speech marks hold <b>the exact words</b> someone says.' },
    { sec: 'Commas', name: 'Question 9', pts: 1, text: 'Which sentence is punctuated correctly?', opts: o4('Lan, my best friend, lives next door.', 'Lan my best friend lives, next door.', 'Lan my, best friend lives next door.', 'Lan, my best friend lives next door.'), ans: 'A', why: 'Extra information takes a comma on BOTH sides.' },
    { sec: 'Apostrophes', name: 'Question 10', pts: 1, text: 'Which sentence is correct?', opts: o4('Its raining today.', 'It’s raining today.', 'Its’ raining today.', 'It is’ raining today.'), ans: 'B', why: '<b>It’s</b> = it is. (<i>Its</i> without an apostrophe shows belonging.)' },
  ],
},

/* ═══════════ TEST 27 — SENTENCES: TYPES, FRAGMENTS AND RUN-ONS ═══════════ */
{
  id: 9727, title: 'Test 27 · Sentence types, fragments and run-ons', time: 25,
  questions: [
    { sec: 'Sentence types', name: 'Question 1', pts: 1, text: 'Which sentence is a QUESTION?', opts: o4('How far is the station?', 'The station is far.', 'Go to the station.', 'What a big station!'), ans: 'A', why: 'A question asks something and ends with <b>?</b>' },
    { sec: 'Sentence types', name: 'Question 2', pts: 1, text: 'Which sentence gives an ORDER or instruction?', opts: o4('The door is open.', 'Close the door, please.', 'Is the door open?', 'What a heavy door!'), ans: 'B', why: 'An imperative begins with the verb: <b>Close the door</b>.' },
    { sec: 'Sentence types', name: 'Question 3', pts: 1, text: 'Which sentence shows a strong feeling?', opts: o4('I have a new bike.', 'Do you have a bike?', 'What a wonderful surprise!', 'Ride your bike.'), ans: 'C', why: 'An exclamation ends with <b>!</b>' },
    { sec: 'Fragments', name: 'Question 4', pts: 1, text: 'Which one is a FRAGMENT (not a complete sentence)?', opts: o4('The bus arrived.', 'She was late.', 'They waited outside.', 'Running down the street.'), ans: 'D', why: '"Running down the street" has no subject, so it is not a full sentence.' },
    { sec: 'Fragments', name: 'Question 5', pts: 1, text: 'What does every complete sentence need?', opts: o4('a subject and a verb', 'only a noun', 'at least ten words', 'a comma'), ans: 'A', why: 'A sentence needs <b>a subject and a verb</b> and must make sense alone.' },
    { sec: 'Fragments', name: 'Question 6', pts: 1, text: 'How can we fix this fragment? "Because it was cold."', opts: o4('Take away "Because".', 'Add a main part: "We stayed inside because it was cold."', 'Add a question mark.', 'Nothing — it is already correct.'), ans: 'B', why: 'A "because" part needs a main clause with it.' },
    { sec: 'Run-ons', name: 'Question 7', pts: 1, text: 'Which one is a RUN-ON sentence?', opts: o4('I like tea. She likes coffee.', 'I like tea, but she likes coffee.', 'I like tea she likes coffee.', 'I like tea and coffee.'), ans: 'C', why: 'Two sentences are pushed together with no joining word or full stop.' },
    { sec: 'Run-ons', name: 'Question 8', pts: 1, text: 'What is the BEST way to fix: "It was late we went home."', opts: o4('It was late we, went home.', 'It was late — we went home?', 'It was late we went home!', 'It was late, so we went home.'), ans: 'D', why: 'A comma plus a joining word like <b>so</b> fixes a run-on.' },
    { sec: 'Sentence types', name: 'Question 9', pts: 1, text: 'Which sentence is a STATEMENT?', opts: o4('My sister plays the piano.', 'Does your sister play the piano?', 'Play the piano, please.', 'How well she plays!'), ans: 'A', why: 'A statement tells us something and ends with a full stop 🎹.' },
    { sec: 'Run-ons', name: 'Question 10', pts: 1, text: 'Which sentence is written correctly?', opts: o4('I was tired I went to bed.', 'I was tired, so I went to bed.', 'I was tired, I went to bed.', 'I was tired so, I went to bed.'), ans: 'B', why: 'Comma + <b>so</b> joins the two ideas correctly.' },
  ],
},

/* ═══════════ TEST 28 — READING: FICTION (THE LOST KITE) ═══════════ */
{
  id: 9728, title: 'Test 28 · Reading: The Lost Kite (fiction)', time: 25,
  questions: [
    { sec: 'Reading', name: 'Question 1', pts: 1, img: A + 'ta3/kite.svg', text: R3A + 'Who are the two children in the story?', opts: o4('Minh and Ha', 'Minh and Mr Hung', 'Ha and Lan', 'Nam and Ha'), ans: 'A', why: 'The story is about <b>Minh and his sister Ha</b>.' },
    { sec: 'Reading', name: 'Question 2', pts: 1, text: R3A + 'When did the story happen?', opts: o4('last Monday', 'last Sunday', 'yesterday', 'next Sunday'), ans: 'B', why: 'The text begins "<b>Last Sunday</b>".' },
    { sec: 'Reading', name: 'Question 3', pts: 1, text: R3A + 'Why did the kite land in the tree?', opts: o4('The children threw it there.', 'It began to rain.', 'The string broke.', 'A bird took it.'), ans: 'C', why: 'The text says <b>the string broke</b>.' },
    { sec: 'Reading', name: 'Question 4', pts: 1, text: R3A + 'Who helped the children?', opts: o4('their father', 'their teacher', 'a policeman', 'their neighbour, Mr Hung'), ans: 'D', why: 'Ha brought their <b>neighbour, Mr Hung</b>.' },
    { sec: 'Reading', name: 'Question 5', pts: 1, text: R3A + 'What did Mr Hung use to get the kite down?', opts: o4('a long bamboo pole', 'a ladder', 'a rope', 'a big stone'), ans: 'A', why: 'He brought <b>a long bamboo pole</b>.' },
    { sec: 'Reading', name: 'Question 6', pts: 1, text: R3A + 'How did Minh feel when the kite was stuck?', opts: o4('angry', 'sad', 'happy', 'afraid'), ans: 'B', why: 'The text says Minh <b>was sad</b>.' },
    { sec: 'Reading', name: 'Question 7', pts: 1, text: R3A + 'Which word best describes Ha?', opts: o4('lazy', 'unkind', 'helpful', 'shy'), ans: 'C', why: 'She had an idea and went to find help, so she is <b>helpful</b>.' },
    { sec: 'Reading', name: 'Question 8', pts: 1, text: R3A + 'What did the children do the NEXT day?', opts: o4('They bought a new kite.', 'They climbed the tree.', 'They stayed at home.', 'They made a stronger string.'), ans: 'D', why: 'They <b>made a new, stronger string</b>.' },
    { sec: 'Reading', name: 'Question 9', pts: 1, text: R3A + 'Why did they make a stronger string?', opts: o4('so the kite would not get lost again', 'because the kite was old', 'because Mr Hung asked them to', 'to give it to a friend'), ans: 'A', why: 'A stronger string will not break, so the kite will not be lost again.' },
    { sec: 'Reading', name: 'Question 10', pts: 1, text: R3A + 'Is this text fiction or non-fiction?', opts: o4('non-fiction, because it gives facts', 'fiction, because it is a made-up story', 'a poem', 'a letter'), ans: 'B', why: 'It tells a story with characters, so it is <b>fiction</b>.' },
  ],
},

/* ═══════════ TEST 29 — READING: NON-FICTION, MAIN IDEA AND TEXT FEATURES ═══════════ */
{
  id: 9729, title: 'Test 29 · Reading: Bees — main idea and text features', time: 25,
  questions: [
    { sec: 'Reading', name: 'Question 1', pts: 1, img: A + 'ta3/bee.svg', text: R3B + 'What is the MAIN IDEA of this text?', opts: o4('Bees are dangerous animals.', 'Bees are useful insects that make honey and help plants.', 'Farmers do not like bees.', 'Bees live alone in trees.'), ans: 'B', why: 'The whole text explains what bees do and why they are useful.' },
    { sec: 'Reading', name: 'Question 2', pts: 1, img: A + 'ta3/bee.svg', text: R3B + 'How many legs does a bee have?', opts: o4('four', 'eight', 'six', 'two'), ans: 'C', why: 'The text says bees have <b>six</b> legs.' },
    { sec: 'Reading', name: 'Question 3', pts: 1, text: R3B + 'What is a group of bees called?', opts: o4('a herd', 'a flock', 'a pack', 'a colony'), ans: 'D', why: 'The text says they live in a group called a <b>colony</b>.' },
    { sec: 'Reading', name: 'Question 4', pts: 1, text: R3B + 'What do bees collect from flowers?', opts: o4('nectar', 'seeds', 'leaves', 'water'), ans: 'A', why: 'Bees collect <b>nectar</b> 🌸.' },
    { sec: 'Reading', name: 'Question 5', pts: 1, text: R3B + 'Why do farmers need bees?', opts: o4('Bees eat harmful insects.', 'Bees carry pollen so plants make seeds and fruit.', 'Bees dig the soil.', 'Bees water the plants.'), ans: 'B', why: 'The text says bees carry <b>pollen</b>, which helps plants make seeds and fruit.' },
    { sec: 'Reading', name: 'Question 6', pts: 1, text: R3B + 'When do bees sting?', opts: o4('every day', 'when they are hungry', 'when they feel in danger', 'when it rains'), ans: 'C', why: 'The text says they only sting <b>when they feel in danger</b>.' },
    { sec: 'Reading', name: 'Question 7', pts: 1, img: A + 'ta3/bee.svg', text: R3B + 'How many pairs of wings does a bee have?', opts: o4('four', 'three', 'one', 'two'), ans: 'D', why: 'The text says <b>two</b> pairs of wings.' },
    { sec: 'Text features', name: 'Question 8', pts: 1, img: A + 'ta3/contents.svg', text: 'In a non-fiction book, which part tells you the page number of each chapter?', opts: o4('the contents page', 'the cover', 'the glossary', 'the index'), ans: 'A', why: 'The <b>contents page</b> lists the chapters and their pages.' },
    { sec: 'Text features', name: 'Question 9', pts: 1, img: A + 'ta3/glossary.svg', text: 'Where do you look to find the meaning of a difficult word in a non-fiction book?', opts: o4('the title', 'the glossary', 'the picture', 'the cover'), ans: 'B', why: 'The <b>glossary</b> explains difficult words.' },
    { sec: 'Text features', name: 'Question 10', pts: 1, text: 'What is the job of a HEADING in a non-fiction text?', opts: o4('to make the page colourful', 'to show who wrote the book', 'to tell you what that part is about', 'to end the chapter'), ans: 'C', why: 'A heading tells you <b>what that part is about</b>.' },
  ],
},

/* ═══════════ TEST 30 — WRITING AND LIBRARY SKILLS ═══════════ */
{
  id: 9730, title: 'Test 30 · Writing a paragraph and library skills', time: 25,
  questions: [
    { sec: 'Paragraphs', name: 'Question 1', pts: 1, text: 'What does the TOPIC SENTENCE of a paragraph do?', opts: o4('It tells the main idea of the paragraph.', 'It gives the last detail.', 'It asks a question.', 'It names the author.'), ans: 'A', why: 'The topic sentence gives the <b>main idea</b>, usually at the start.' },
    { sec: 'Paragraphs', name: 'Question 2', pts: 1, text: 'Which sentence does NOT belong in a paragraph about dogs?', opts: o4('Dogs are friendly pets.', 'My favourite colour is green.', 'Dogs need food and water.', 'Some dogs help blind people.'), ans: 'B', why: 'A favourite colour has nothing to do with dogs 🐕.' },
    { sec: 'Writing process', name: 'Question 3', pts: 1, text: 'What is the FIRST step of the writing process?', opts: o4('publishing', 'editing', 'planning your ideas', 'revising'), ans: 'C', why: 'We start by <b>planning</b> — thinking of ideas before we write.' },
    { sec: 'Writing process', name: 'Question 4', pts: 1, text: 'What do you do when you EDIT your writing?', opts: o4('throw it away', 'read it to a friend only', 'copy someone else’s work', 'check spelling, grammar and punctuation'), ans: 'D', why: 'Editing means <b>checking spelling, grammar and punctuation</b>.' },
    { sec: 'Writing process', name: 'Question 5', pts: 1, text: 'Which words are good for showing ORDER in a story?', opts: o4('First, Next, Finally', 'Red, Blue, Green', 'Big, Small, Tall', 'Cat, Dog, Bird'), ans: 'A', why: '<b>First, Next, Finally</b> show the order of events.' },
    { sec: 'Parts of a book', name: 'Question 6', pts: 1, img: A + 'ta3/index.svg', text: 'Where do you find an alphabetical list of topics and their page numbers?', opts: o4('the contents page', 'the index', 'the cover', 'the title page'), ans: 'B', why: 'The <b>index</b> at the back lists topics in ABC order.' },
    { sec: 'Parts of a book', name: 'Question 7', pts: 1, img: A + 'ta3/book.svg', text: 'The person who draws the pictures in a book is the ______.', opts: o4('author', 'editor', 'illustrator', 'librarian'), ans: 'C', why: 'The artist of a book is the <b>illustrator</b> 🎨.' },
    { sec: 'Dictionary skills', name: 'Question 8', pts: 1, img: A + 'ta3/abc_vww.svg', text: 'Put these words in ABC order: <b>water · village · window</b>', opts: o4('water, window, village', 'window, water, village', 'village, window, water', 'village, water, window'), ans: 'D', why: 'v before w; then <b>wa</b> before <b>wi</b>: village, water, window.' },
    { sec: 'Dictionary skills', name: 'Question 9', pts: 1, img: A + 'ta3/guide.svg', text: 'A dictionary page has the guide words <b>farm — fish</b>. Which word is on this page?', opts: o4('finger', 'fan', 'flower', 'goat'), ans: 'A', why: '<b>finger</b> comes between farm and fish in ABC order.' },
    { sec: 'Library skills', name: 'Question 10', pts: 1, img: A + 'ta3/volcano.svg', text: 'You want facts about volcanoes. Which book should you choose? 🌋', opts: o4('a book of fairy tales', 'a non-fiction book about volcanoes', 'a book of poems', 'a comic story'), ans: 'B', why: 'For real facts we choose a <b>non-fiction</b> book.' },
  ],
},

];

SUBJECTS.push({
  id: 'tienganh3', name: 'Tiếng Anh', short: 'Tiếng Anh 3', icon: '🔤', grade: 3,
  exams: TA3_EXAMS, ready: true,
  heroTitle: 'Tiếng Anh lớp 3 — chính tả, từ vựng, ngữ pháp, dấu câu, đọc hiểu, viết đoạn và kĩ năng thư viện',
  heroMeta: '📚 30 đề &nbsp;•&nbsp; 300 câu &nbsp;•&nbsp; ⏱ 25 phút mỗi đề &nbsp;•&nbsp; đủ 5 phần, không kèm bản dịch',
});
