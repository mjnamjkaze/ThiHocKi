// TIẾNG ANH THEO TUẦN — 1 tuần × 4 bài × 10 câu = 40 câu (23 câu có hình, 57%).
// SINH TỰ ĐỘNG bởi tools/gen-tienganh-tuan.mjs — sửa nội dung trong script rồi chạy lại:
//     node tools/gen-tienganh-tuan.mjs
//
// Mỗi tuần học một bài, chia thành 4 phần: từ vựng qua tranh → nối ảnh & gõ từ →
// mẫu câu (ghép câu) → đọc hiểu và ôn tập. Kiểu câu hỏi: mcq 22 · match 2 · type 11 · order 5.
//
// Các kiểu bài 'type' (gõ từ) · 'order' (ghép câu) · 'match' (nối ảnh với từ) do
// web/app.js xử lý — xem phần "CHẤM BÀI — dùng chung cho mọi kiểu câu hỏi".
// Toàn bộ hình vẽ bằng code trong tools/ta-art.mjs (assets/ta/): tên chủ sở hữu
// nằm trên BIỂN TÊN trong hình nên câu hỏi "Whose …?" luôn có đủ dữ kiện.

// phương án là ẢNH (chọn từ đúng cho ảnh)
const oimg = (a, b, c, d) => [{ k: 'A', img: a }, { k: 'B', img: b }, { k: 'C', img: c }, { k: 'D', img: d }];

const READ1 = '<b>Amy\'s house</b><br> This is Amy\'s house. It has a big yard. Amy\'s brother is kicking a ball in the yard. Amy\'s mom is cooking in the kitchen. Amy is reading a book in her bedroom. Her sister is putting fruit peels in the compost.';

const TA_TUAN = [
{
  id: 1401, title: 'Week 1 · Part 1 — Picture words', time: 15,
  questions: [
    {
      sec: 'Rooms', name: 'Question 1', pts: 1,
      text: '<b>Which room is this?</b>',
      img: 'assets/ta/bedroom.svg',
      opts: o4('kitchen', 'bedroom', 'yard', 'house'),
      ans: 'B', why: 'There is a <b>bed</b> in the room, so it is a <b>bedroom</b>.',
    },
    {
      sec: 'Rooms', name: 'Question 2', pts: 1,
      text: '<b>Which room is this?</b>',
      img: 'assets/ta/kitchen.svg',
      opts: o4('bedroom', 'yard', 'kitchen', 'ball'),
      ans: 'C', why: 'There is a pan and a pot for cooking, so it is a <b>kitchen</b>.',
    },
    {
      sec: 'Places', name: 'Question 3', pts: 1,
      text: '<b>Which place is this?</b>',
      img: 'assets/ta/yard.svg',
      opts: o4('the yard', 'the kitchen', 'the bedroom', 'the compost'),
      ans: 'A', why: 'Grass, a fence and a tree outside the house make a <b>yard</b>.',
    },
    {
      sec: 'Places', name: 'Question 4', pts: 1,
      text: '<b>What is this?</b>',
      img: 'assets/ta/house.svg',
      opts: o4('a yard', 'a kitchen', 'a ball', 'a house'),
      ans: 'D', why: 'It has a roof, a door and windows, so it is a <b>house</b>.',
    },
    {
      sec: 'Words', name: 'Question 5', pts: 1,
      text: '<b>Which picture shows a ball?</b>',
      optImgs: true,
      opts: oimg('assets/ta/card_book.svg', 'assets/ta/card_ball.svg', 'assets/ta/card_bed.svg', 'assets/ta/card_pan.svg'),
      ans: 'B', why: 'Picture B is a <b>ball</b>. The others are a book, a bed and a pan.',
    },
    {
      sec: 'Words', name: 'Question 6', pts: 1,
      text: '<b>Which picture shows the compost?</b>',
      optImgs: true,
      opts: oimg('assets/ta/kitchen.svg', 'assets/ta/yard.svg', 'assets/ta/compost_q.svg', 'assets/ta/bedroom.svg'),
      ans: 'C', why: 'The <b>compost</b> is the bin with fruit and vegetable peels in it. They turn into food for the plants.',
    },
    {
      sec: 'Family', name: 'Question 7', pts: 1,
      text: '<b>Nam is a boy. He is Amy’s ______.</b>',
      opts: o4('sister', 'brother', 'mom', 'friend'),
      ans: 'B', why: 'A boy in your family is your <b>brother</b>. A girl is your <b>sister</b>.',
    },
    {
      sec: 'Family', name: 'Question 8', pts: 1,
      text: '<b>Mai is a girl. She is Amy’s ______.</b>',
      opts: o4('sister', 'dad', 'brother', 'teacher'),
      ans: 'A', why: 'A girl in your family is your <b>sister</b>.',
    },
    {
      sec: 'Rooms', name: 'Question 9', pts: 1,
      text: '<b>We cook food in the ______.</b>',
      opts: o4('bedroom', 'yard', 'ball', 'kitchen'),
      ans: 'D', why: 'We <b>cook</b> in the <b>kitchen</b>.',
    },
    {
      sec: 'Rooms', name: 'Question 10', pts: 1,
      text: '<b>We sleep in the ______.</b>',
      opts: o4('bedroom', 'kitchen', 'compost', 'yard'),
      ans: 'A', why: 'We <b>sleep</b> in the <b>bedroom</b>.',
    },
  ],
},
{
  id: 1402, title: 'Week 1 · Part 2 — Match & spell', time: 15,
  questions: [
    {
      sec: 'Matching', name: 'Question 1', pts: 1, type: 'match',
      text: '<b>Match each picture with the right word.</b>',
      left: ['assets/ta/bedroom.svg', 'assets/ta/kitchen.svg', 'assets/ta/yard.svg', 'assets/ta/house.svg'],
      right: ['yard', 'bedroom', 'house', 'kitchen'],
      ans: '1,3,0,2', why: 'A bed goes with <b>bedroom</b>, a pan and a pot go with <b>kitchen</b>, grass and a fence go with <b>yard</b>, and a roof with a door goes with <b>house</b>.',
    },
    {
      sec: 'Matching', name: 'Question 2', pts: 1, type: 'match',
      text: '<b>Match each picture with the right word.</b>',
      left: ['assets/ta/cooking.svg', 'assets/ta/reading.svg', 'assets/ta/kicking.svg', 'assets/ta/compost_q.svg'],
      right: ['reading', 'compost', 'cooking', 'kicking'],
      ans: '2,0,3,1', why: 'Standing at the pan is <b>cooking</b>, holding a book is <b>reading</b>, playing football is <b>kicking</b>, and the bin of peels is the <b>compost</b>.',
    },
    {
      sec: 'Spelling', name: 'Question 3', pts: 1, type: 'type',
      text: '<b>Write the name of this room.</b>',
      img: 'assets/ta/kitchen.svg',
      hint: 'k _ _ _ _ _ _',
      ans: 'kitchen', why: 'The room with a pan and a pot for cooking is the <b>kitchen</b> — 7 letters.',
    },
    {
      sec: 'Spelling', name: 'Question 4', pts: 1, type: 'type',
      text: '<b>Write the name of this room.</b>',
      img: 'assets/ta/bedroom.svg',
      hint: 'b _ _ _ _ _ _',
      ans: 'bedroom', why: '<b>bedroom</b> = bed + room, the room where you sleep.',
    },
    {
      sec: 'Spelling', name: 'Question 5', pts: 1, type: 'type',
      text: '<b>Write the name of this place.</b>',
      img: 'assets/ta/yard.svg',
      hint: 'y _ _ _',
      ans: 'yard', why: 'The piece of grass next to a house is a <b>yard</b> — 4 letters.',
    },
    {
      sec: 'Spelling', name: 'Question 6', pts: 1, type: 'type',
      text: '<b>Write this word in English.</b>',
      img: 'assets/ta/card_ball.svg',
      hint: 'b _ _ _',
      ans: 'ball', why: 'You kick it and it is round: a <b>ball</b>.',
    },
    {
      sec: 'Vocabulary', name: 'Question 7', pts: 1, type: 'type',
      text: '<b>A girl in your family is your ______.</b>',
      hint: 's _ _ _ _ _',
      ans: 'sister', why: 'A girl in your family is your <b>sister</b>.',
    },
    {
      sec: 'Vocabulary', name: 'Question 8', pts: 1, type: 'type',
      text: '<b>A boy in your family is your ______.</b>',
      hint: 'b _ _ _ _ _ _',
      ans: 'brother', why: 'A boy in your family is your <b>brother</b>.',
    },
    {
      sec: 'Spelling', name: 'Question 9', pts: 1, type: 'type',
      text: '<b>We put fruit peels in it to feed the plants. What is it?</b>',
      img: 'assets/ta/compost_q.svg',
      hint: 'c _ _ _ _ _ _',
      ans: 'compost', why: 'Peels go into the <b>compost</b> and slowly turn into food for the plants.',
    },
    {
      sec: 'Spelling', name: 'Question 10', pts: 1, type: 'type',
      text: '<b>Write this word in English.</b>',
      img: 'assets/ta/house.svg',
      alts: ['a house'],
      hint: 'h _ _ _ _',
      ans: 'house', why: 'A building with a roof, a door and windows is a <b>house</b>.',
    },
  ],
},
{
  id: 1403, title: 'Week 1 · Part 3 — Whose…? · It\'s …\'s', time: 15,
  questions: [
    {
      sec: 'Whose', name: 'Question 1', pts: 1,
      text: '<b>Look at the name on the house. Whose is it?</b>',
      img: 'assets/ta/house_amy.svg',
      opts: o4('It\'s Laura\'s house.', 'It\'s my house.', 'It\'s Amy\'s house.', 'It\'s Mom\'s house.'),
      ans: 'C', why: 'The name tag says <b>Amy</b>, so we say <b>It’s Amy’s house.</b> Add <b>’s</b> after the name to show who it belongs to.',
    },
    {
      sec: 'Whose', name: 'Question 2', pts: 1,
      text: '<b>Whose kitchen is this?</b>',
      img: 'assets/ta/kitchen_mom.svg',
      opts: o4('It\'s Mom\'s.', 'It\'s Amy\'s.', 'It\'s my brother\'s.', 'It\'s Laura\'s.'),
      ans: 'A', why: 'The tag in the kitchen says <b>Mom</b>, so we answer <b>It’s Mom’s.</b> — we do not have to say “kitchen” again.',
    },
    {
      sec: 'Sentence', name: 'Question 3', pts: 1, type: 'order',
      text: '<b>Look at the picture. Put the words in order to answer:</b> Whose house is it?',
      img: 'assets/ta/house_amy.svg',
      tokens: ['house.', 'It\'s', 'Amy\'s'],
      ans: 'It\'s Amy\'s house.', why: '<b>It’s</b> + <b>Amy’s</b> + <b>house.</b> The owner comes BEFORE the thing.',
    },
    {
      sec: 'Sentence', name: 'Question 4', pts: 1, type: 'order',
      text: '<b>Look at the picture. Put the words in order to answer:</b> Whose bedroom is it?',
      img: 'assets/ta/bedroom_bro.svg',
      tokens: ['bedroom.', 'my', 'It\'s', 'brother\'s'],
      ans: 'It\'s my brother\'s bedroom.', why: 'It’s + my brother’s + bedroom. The <b>’s</b> goes after <b>brother</b> because the room belongs to him.',
    },
    {
      sec: 'Sentence', name: 'Question 5', pts: 1, type: 'order',
      text: '<b>Put the words in order to make a question about the owner.</b>',
      img: 'assets/ta/card_pizza.svg',
      tokens: ['pizza', 'it?', 'Whose', 'is'],
      ans: 'Whose pizza is it?', why: 'A question about the owner starts with <b>Whose</b> + the thing + <b>is it?</b> → <b>Whose pizza is it?</b>',
    },
    {
      sec: 'Sentence', name: 'Question 6', pts: 1, type: 'order',
      text: '<b>The pizza belongs to Laura. Put the words in order to answer:</b> Whose pizza is it?',
      tokens: ['Laura\'s', 'pizza.', 'It\'s'],
      ans: 'It\'s Laura\'s pizza.', why: 'It’s + Laura’s + pizza. This answers the question “Whose pizza is it?”.',
    },
    {
      sec: 'Meaning', name: 'Question 7', pts: 1,
      text: '<b>Which question asks about the owner?</b>',
      opts: o4('What is it?', 'Whose is it?', 'Where is it?', 'How big is it?'),
      ans: 'B', why: '<b>Whose</b> asks WHO something belongs to. <b>What</b> asks for the thing and <b>Where</b> asks for the place.',
    },
    {
      sec: 'Grammar', name: 'Question 8', pts: 1,
      text: '<b>Which sentence is CORRECT?</b>',
      opts: o4('It\'s Amy house.', 'It\'s house Amy.', 'It\'s Amy\'s house.', 'It\'s the Amy house.'),
      ans: 'C', why: 'To show the house belongs to Amy, add <b>’s</b> after her name: <b>Amy’s house</b>.',
    },
    {
      sec: 'Grammar', name: 'Question 9', pts: 1,
      text: '<b>“Whose bedroom is this?” Which answer is best?</b>',
      opts: o4('It\'s a bedroom.', 'Yes, it is.', 'It\'s very big.', 'It\'s my sister\'s.'),
      ans: 'D', why: 'A <b>Whose…?</b> question asks for the owner, so the answer names a person: <b>It’s my sister’s.</b>',
    },
    {
      sec: 'Grammar', name: 'Question 10', pts: 1, type: 'type',
      text: '<b>Write the missing word:</b> ______ ball is it? — It’s Amy’s.',
      hint: 'w _ _ _ _',
      ans: 'whose', why: 'Use <b>Whose</b> to ask who something belongs to: Whose ball is it?',
    },
  ],
},
{
  id: 1404, title: 'Week 1 · Part 4 — Reading & review', time: 15,
  questions: [
    {
      sec: 'Reading', name: 'Question 1', pts: 1,
      text: '<b>Whose house is it?</b>',
      read: READ1,
      opts: o4('It\'s Laura\'s house.', 'It\'s Amy\'s house.', 'It\'s her brother\'s house.', 'It\'s Mom\'s house.'),
      ans: 'B', why: 'The first line says: “This is <b>Amy’s house</b>.”',
    },
    {
      sec: 'Reading', name: 'Question 2', pts: 1,
      text: '<b>Where is Amy?</b>',
      read: READ1,
      opts: o4('In the kitchen.', 'In the yard.', 'In her bedroom.', 'At school.'),
      ans: 'C', why: 'The text says: “Amy is reading a book <b>in her bedroom</b>.”',
    },
    {
      sec: 'Reading', name: 'Question 3', pts: 1,
      text: '<b>What is Amy\'s brother doing?</b>',
      read: READ1,
      opts: o4('He is reading.', 'He is cooking.', 'He is sleeping.', 'He is kicking a ball.'),
      ans: 'D', why: 'The text says: “Amy’s brother is <b>kicking a ball</b> in the yard.”',
    },
    {
      sec: 'Reading', name: 'Question 4', pts: 1,
      text: '<b>Who is cooking?</b>',
      read: READ1,
      opts: o4('Amy\'s mom.', 'Amy.', 'Amy\'s sister.', 'Amy\'s brother.'),
      ans: 'A', why: 'The text says: “<b>Amy’s mom</b> is cooking in the kitchen.”',
    },
    {
      sec: 'Reading', name: 'Question 5', pts: 1,
      text: '<b>What does her sister put in the compost?</b>',
      read: READ1,
      opts: o4('A ball.', 'A book.', 'Fruit peels.', 'A pizza.'),
      ans: 'C', why: 'The text says: “Her sister is putting <b>fruit peels</b> in the compost.”',
    },
    {
      sec: 'Reading', name: 'Question 6', pts: 1, type: 'type',
      text: '<b>Read the text again. Fill in one word:</b> Amy is ______ a book in her bedroom.',
      read: READ1,
      hint: 'r _ _ _ _ _ _',
      ans: 'reading', why: 'The text says “Amy is <b>reading</b> a book…”. read → <b>reading</b>.',
    },
    {
      sec: 'Actions', name: 'Question 7', pts: 1,
      text: '<b>What is Mom doing?</b>',
      img: 'assets/ta/cooking.svg',
      opts: o4('She is reading.', 'She is cooking.', 'She is kicking.', 'She is sleeping.'),
      ans: 'B', why: 'She is standing at the pan in the kitchen, so <b>She is cooking.</b> (cook → cooking)',
    },
    {
      sec: 'Actions', name: 'Question 8', pts: 1, type: 'order',
      text: '<b>Look at the picture. Put the words in order.</b>',
      img: 'assets/ta/kicking.svg',
      tokens: ['kicking', 'ball.', 'He', 'the', 'is'],
      ans: 'He is kicking the ball.', why: 'The boy is playing football in the yard: <b>He is kicking the ball.</b>',
    },
    {
      sec: 'Whose', name: 'Question 9', pts: 1,
      text: '<b>Which picture shows Amy\'s bedroom? Look at the name tags too.</b>',
      optImgs: true,
      opts: oimg('assets/ta/bedroom_laura.svg', 'assets/ta/kitchen_amy.svg', 'assets/ta/bedroom_amy.svg', 'assets/ta/yard.svg'),
      ans: 'C', why: 'It must be BOTH a <b>bedroom</b> (it has a bed) and tagged <b>Amy</b>. Picture B is Amy’s kitchen and picture A is Laura’s bedroom.',
    },
    {
      sec: 'Whose', name: 'Question 10', pts: 1, type: 'type',
      text: '<b>Look at the name tag. Fill in one word:</b> It’s ______ kitchen.',
      img: 'assets/ta/kitchen_mom.svg',
      alts: ['mom\'s', 'my mom\'s', 'mother\'s'],
      hint: 'M _ _ ’ _',
      ans: 'Mom\'s', why: 'Add <b>’s</b> after the owner: <b>Mom’s</b> → It’s <b>Mom’s</b> kitchen.',
    },
  ],
},
];

SUBJECTS.push({
  id: 'ta-tuan', name: 'Tiếng Anh theo tuần', short: 'Tiếng Anh tuần', icon: '🗣️', grade: 2,
  exams: TA_TUAN, ready: true,
  heroTitle: 'Tiếng Anh theo tuần — Week 1: Language Lab — It\'s Her House',
  heroMeta: '📚 4 bài &nbsp;•&nbsp; 40 câu &nbsp;•&nbsp; ⏱ 15 phút mỗi bài &nbsp;•&nbsp; nhìn tranh · nối ảnh · gõ từ · ghép câu · đọc hiểu',
});
