// TIẾNG ANH — LỚP 1 (GDPT 2018)
// 30 đề × 10 câu = 300 câu. Mỗi câu 1 điểm — thang 10 — 15-20 phút mỗi đề.
//
// QUY TẮC: môn Tiếng Anh KHÔNG kèm bản dịch tiếng Việt. Mọi phần text · opts · why · sec ·
// name · title viết bằng tiếng Anh; dùng emoji làm hình gợi nghĩa để học sinh tự hiểu.
// Chủ đề lớp 1: greetings, numbers 1-10, colours, family, school things, animals, body,
// food & drink, toys, và ôn tập (spelling đơn giản).

const TA1_EXAMS = [

/* ═══════════ TEST 1 — GREETINGS ═══════════ */
{
  id: 6301, title: 'Test 1 · Hello and goodbye', time: 15,
  questions: [
    { sec: 'Greetings', name: 'Question 1', pts: 1, text: 'You meet your friend. You say: "______"', opts: o4('Hello!', 'Goodbye!', 'Sorry!', 'No!'), ans: 'A', why: 'We say <b>Hello</b> (or Hi) when we meet someone.' },
    { sec: 'Greetings', name: 'Question 2', pts: 1, text: 'You go to bed at night. You say: "Good ______."', opts: o4('morning', 'night', 'afternoon', 'bye'), ans: 'B', why: 'At bedtime we say <b>Good night</b>.' },
    { sec: 'Polite', name: 'Question 3', pts: 1, text: 'Someone gives you a gift. You say: "______"', opts: o4('Thank you!', 'Sorry!', 'Hello!', 'No!'), ans: 'A', why: 'We say <b>Thank you</b> for a gift.' },
    { sec: 'Greetings', name: 'Question 4', pts: 1, text: 'You see your teacher at 8 a.m. You say: "Good ______."', opts: o4('night', 'morning', 'bye', 'apple'), ans: 'B', why: 'In the early day we say <b>Good morning</b>.' },
    { sec: 'Greetings', name: 'Question 5', pts: 1, text: 'You leave school and go home. You say: "______"', opts: o4('Goodbye!', 'Hello!', 'Good morning!', 'Please!'), ans: 'A', why: 'When we leave we say <b>Goodbye</b> (or Bye).' },
    { sec: 'Polite', name: 'Question 6', pts: 1, text: '"______, can I have a pencil?"', opts: o4('Please', 'Sorry', 'No', 'Bye'), ans: 'A', why: 'We say <b>Please</b> when we ask for something.' },
    { sec: 'Polite', name: 'Question 7', pts: 1, text: 'You step on your friend’s foot. You say: "______"', opts: o4('Sorry!', 'Hello!', 'Thank you!', 'Yes!'), ans: 'A', why: 'We say <b>Sorry</b> when we do something wrong.' },
    { sec: 'About me', name: 'Question 8', pts: 1, text: '"What is your ______?" – "My name is Nam."', opts: o4('name', 'red', 'cat', 'book'), ans: 'A', why: 'We ask <b>What is your name?</b>' },
    { sec: 'About me', name: 'Question 9', pts: 1, text: '"How are you?" – "I am ______."', opts: o4('fine', 'name', 'red', 'cat'), ans: 'A', why: 'We answer <b>I am fine</b> (thank you).' },
    { sec: 'Greetings', name: 'Question 10', pts: 1, text: 'Which word is a greeting?', opts: o4('Hi', 'Book', 'Run', 'Blue'), ans: 'A', why: '<b>Hi</b> is a greeting; the others are not.' },
  ],
},

/* ═══════════ TEST 2 — NUMBERS 1–10 ═══════════ */
{
  id: 6302, title: 'Test 2 · Numbers', time: 15,
  questions: [
    { sec: 'Numbers', name: 'Question 1', pts: 1, text: 'How many apples? 🍎🍎', opts: o4('one', 'two', 'three', 'four'), ans: 'B', why: 'There are <b>two</b> apples.' },
    { sec: 'Numbers', name: 'Question 2', pts: 1, text: 'How many stars? ⭐⭐⭐', opts: o4('two', 'three', 'four', 'five'), ans: 'B', why: 'There are <b>three</b> stars.' },
    { sec: 'Numbers', name: 'Question 3', pts: 1, text: 'How many fish? 🐟🐟🐟🐟', opts: o4('three', 'four', 'five', 'six'), ans: 'B', why: 'There are <b>four</b> fish.' },
    { sec: 'Numbers', name: 'Question 4', pts: 1, text: 'Count: one, two, ______, four.', opts: o4('three', 'five', 'six', 'ten'), ans: 'A', why: 'After two comes <b>three</b>.' },
    { sec: 'Numbers', name: 'Question 5', pts: 1, text: 'A hand ✋ has ______ fingers.', opts: o4('two', 'five', 'ten', 'one'), ans: 'B', why: 'One hand has <b>five</b> fingers.' },
    { sec: 'Numbers', name: 'Question 6', pts: 1, text: 'How many dots? ⚪⚪⚪⚪⚪⚪', opts: o4('four', 'five', 'six', 'seven'), ans: 'C', why: 'There are <b>six</b> dots.' },
    { sec: 'Numbers', name: 'Question 7', pts: 1, text: 'What number comes after seven?', opts: o4('six', 'eight', 'nine', 'ten'), ans: 'B', why: 'After seven comes <b>eight</b>.' },
    { sec: 'Numbers', name: 'Question 8', pts: 1, text: 'Two hands have ______ fingers. ✋✋', opts: o4('five', 'eight', 'ten', 'two'), ans: 'C', why: 'Five and five make <b>ten</b>.' },
    { sec: 'Numbers', name: 'Question 9', pts: 1, text: 'Which is the biggest number?', opts: o4('two', 'nine', 'five', 'one'), ans: 'B', why: '<b>Nine</b> is the biggest of these numbers.' },
    { sec: 'Numbers', name: 'Question 10', pts: 1, text: 'The number "7" in words is ______.', opts: o4('six', 'seven', 'eight', 'nine'), ans: 'B', why: '7 is <b>seven</b>.' },
  ],
},

/* ═══════════ TEST 3 — COLOURS ═══════════ */
{
  id: 6303, title: 'Test 3 · Colours', time: 15,
  questions: [
    { sec: 'Colours', name: 'Question 1', pts: 1, text: 'A banana 🍌 is ______.', opts: o4('yellow', 'blue', 'black', 'red'), ans: 'A', why: 'A banana is <b>yellow</b>.' },
    { sec: 'Colours', name: 'Question 2', pts: 1, text: 'A leaf 🌿 is ______.', opts: o4('red', 'green', 'white', 'black'), ans: 'B', why: 'A leaf is <b>green</b>.' },
    { sec: 'Colours', name: 'Question 3', pts: 1, text: 'The clear sky 🔵 is ______.', opts: o4('blue', 'brown', 'pink', 'black'), ans: 'A', why: 'The clear sky is <b>blue</b>.' },
    { sec: 'Colours', name: 'Question 4', pts: 1, text: 'A tomato 🍅 is ______.', opts: o4('green', 'red', 'blue', 'white'), ans: 'B', why: 'A ripe tomato is <b>red</b>.' },
    { sec: 'Colours', name: 'Question 5', pts: 1, text: 'Snow ❄ is ______.', opts: o4('white', 'black', 'green', 'orange'), ans: 'A', why: 'Snow is <b>white</b>.' },
    { sec: 'Colours', name: 'Question 6', pts: 1, text: 'The night sky 🌑 is ______.', opts: o4('yellow', 'black', 'pink', 'green'), ans: 'B', why: 'At night the sky is dark <b>black</b>.' },
    { sec: 'Colours', name: 'Question 7', pts: 1, text: 'Grapes 🍇 are ______.', opts: o4('purple', 'yellow', 'white', 'red'), ans: 'A', why: 'These grapes are <b>purple</b>.' },
    { sec: 'Colours', name: 'Question 8', pts: 1, text: 'Which word is a colour?', opts: o4('pink', 'dog', 'five', 'run'), ans: 'A', why: '<b>Pink</b> is a colour.' },
    { sec: 'Colours', name: 'Question 9', pts: 1, text: 'A carrot 🥕 is ______.', opts: o4('blue', 'orange', 'black', 'purple'), ans: 'B', why: 'A carrot is <b>orange</b>.' },
    { sec: 'Colours', name: 'Question 10', pts: 1, text: 'An elephant 🐘 is often ______.', opts: o4('grey', 'red', 'yellow', 'pink'), ans: 'A', why: 'An elephant is usually <b>grey</b>.' },
  ],
},

/* ═══════════ TEST 4 — MY FAMILY ═══════════ */
{
  id: 6304, title: 'Test 4 · My family', time: 15,
  questions: [
    { sec: 'Family', name: 'Question 1', pts: 1, text: 'Your mother and father are your ______.', opts: o4('parents', 'teachers', 'friends', 'pets'), ans: 'A', why: 'Mother and father are your <b>parents</b>.' },
    { sec: 'Family', name: 'Question 2', pts: 1, text: 'A boy in your family is your ______.', opts: o4('brother', 'sister', 'mother', 'aunt'), ans: 'A', why: 'A boy in your family is your <b>brother</b>.' },
    { sec: 'Family', name: 'Question 3', pts: 1, text: 'A girl in your family is your ______.', opts: o4('brother', 'sister', 'father', 'uncle'), ans: 'B', why: 'A girl in your family is your <b>sister</b>.' },
    { sec: 'Family', name: 'Question 4', pts: 1, text: 'Your father’s mother is your ______.', opts: o4('grandmother', 'sister', 'mother', 'aunt'), ans: 'A', why: 'Your father’s mother is your <b>grandmother</b>.' },
    { sec: 'Family', name: 'Question 5', pts: 1, text: 'A very young child is a ______. 👶', opts: o4('baby', 'man', 'boy', 'girl'), ans: 'A', why: 'A very young child is a <b>baby</b>.' },
    { sec: 'Family', name: 'Question 6', pts: 1, text: '"This is my ______." (the woman who is your parent)', opts: o4('mother', 'father', 'brother', 'dog'), ans: 'A', why: 'Your female parent is your <b>mother</b>.' },
    { sec: 'Family', name: 'Question 7', pts: 1, text: 'Which word is about family?', opts: o4('father', 'table', 'blue', 'run'), ans: 'A', why: '<b>Father</b> is a family word.' },
    { sec: 'Family', name: 'Question 8', pts: 1, text: 'The man who is your parent is your ______.', opts: o4('father', 'sister', 'mother', 'aunt'), ans: 'A', why: 'Your male parent is your <b>father</b>.' },
    { sec: 'Family', name: 'Question 9', pts: 1, text: 'All these people together 👨‍👩‍👧‍👦 are a ______.', opts: o4('family', 'school', 'shop', 'zoo'), ans: 'A', why: 'People who live together like this are a <b>family</b>.' },
    { sec: 'Family', name: 'Question 10', pts: 1, text: 'Your grandfather and grandmother are your ______.', opts: o4('grandparents', 'parents', 'teachers', 'friends'), ans: 'A', why: 'Together they are your <b>grandparents</b>.' },
  ],
},

/* ═══════════ TEST 5 — SCHOOL THINGS ═══════════ */
{
  id: 6305, title: 'Test 5 · At school', time: 15,
  questions: [
    { sec: 'School', name: 'Question 1', pts: 1, text: 'You write with a ______. ✏', opts: o4('pen', 'cat', 'apple', 'tree'), ans: 'A', why: 'You write with a <b>pen</b> or a pencil.' },
    { sec: 'School', name: 'Question 2', pts: 1, text: 'You read a ______. 📖', opts: o4('book', 'dog', 'car', 'shoe'), ans: 'A', why: 'You read a <b>book</b>.' },
    { sec: 'School', name: 'Question 3', pts: 1, text: 'You carry your books in a ______. 🎒', opts: o4('bag', 'cup', 'bed', 'hat'), ans: 'A', why: 'You carry books in a <b>bag</b>.' },
    { sec: 'School', name: 'Question 4', pts: 1, text: 'You draw a straight line with a ______. 📏', opts: o4('ruler', 'ball', 'spoon', 'cat'), ans: 'A', why: 'A <b>ruler</b> helps you draw a straight line.' },
    { sec: 'School', name: 'Question 5', pts: 1, text: 'You colour a picture with ______. 🖍', opts: o4('crayons', 'water', 'milk', 'shoes'), ans: 'A', why: 'You colour with <b>crayons</b>.' },
    { sec: 'School', name: 'Question 6', pts: 1, text: 'The teacher writes on the ______.', opts: o4('board', 'shoe', 'apple', 'car'), ans: 'A', why: 'The teacher writes on the <b>board</b>.' },
    { sec: 'School', name: 'Question 7', pts: 1, text: 'You rub out a mistake with an ______. ', opts: o4('eraser', 'apple', 'egg', 'orange'), ans: 'A', why: 'An <b>eraser</b> (rubber) rubs out mistakes.' },
    { sec: 'School', name: 'Question 8', pts: 1, text: 'Which one is a school thing?', opts: o4('pencil', 'dog', 'rain', 'red'), ans: 'A', why: 'A <b>pencil</b> is a school thing.' },
    { sec: 'School', name: 'Question 9', pts: 1, text: 'You sit on a ______.', opts: o4('chair', 'book', 'pen', 'hat'), ans: 'A', why: 'You sit on a <b>chair</b>.' },
    { sec: 'School', name: 'Question 10', pts: 1, text: 'You put your books on a ______.', opts: o4('desk', 'shoe', 'cat', 'cloud'), ans: 'A', why: 'You put books on a <b>desk</b> (table).' },
  ],
},

/* ═══════════ TEST 6 — ANIMALS ═══════════ */
{
  id: 6306, title: 'Test 6 · Animals', time: 15,
  questions: [
    { sec: 'Animals', name: 'Question 1', pts: 1, text: 'A dog 🐶 says ______.', opts: o4('woof', 'meow', 'moo', 'quack'), ans: 'A', why: 'A dog says <b>woof</b>.' },
    { sec: 'Animals', name: 'Question 2', pts: 1, text: 'A cat 🐱 says ______.', opts: o4('woof', 'meow', 'moo', 'quack'), ans: 'B', why: 'A cat says <b>meow</b>.' },
    { sec: 'Animals', name: 'Question 3', pts: 1, text: 'A cow 🐄 says ______.', opts: o4('meow', 'woof', 'moo', 'quack'), ans: 'C', why: 'A cow says <b>moo</b>.' },
    { sec: 'Animals', name: 'Question 4', pts: 1, text: 'A duck 🦆 says ______.', opts: o4('moo', 'meow', 'woof', 'quack'), ans: 'D', why: 'A duck says <b>quack</b>.' },
    { sec: 'Animals', name: 'Question 5', pts: 1, text: 'This big animal 🐘 is an ______.', opts: o4('elephant', 'ant', 'egg', 'apple'), ans: 'A', why: 'It is an <b>elephant</b>.' },
    { sec: 'Animals', name: 'Question 6', pts: 1, text: 'A fish 🐟 lives in ______.', opts: o4('water', 'a tree', 'a box', 'the sky'), ans: 'A', why: 'A fish lives in <b>water</b>.' },
    { sec: 'Animals', name: 'Question 7', pts: 1, text: 'A bird 🐦 can ______.', opts: o4('fly', 'swim only', 'read', 'drive'), ans: 'A', why: 'A bird can <b>fly</b>.' },
    { sec: 'Animals', name: 'Question 8', pts: 1, text: 'Which one is an animal?', opts: o4('rabbit', 'chair', 'blue', 'pen'), ans: 'A', why: 'A <b>rabbit</b> is an animal.' },
    { sec: 'Animals', name: 'Question 9', pts: 1, text: 'A monkey 🐒 likes to eat a ______. 🍌', opts: o4('banana', 'shoe', 'book', 'car'), ans: 'A', why: 'A monkey likes a <b>banana</b>.' },
    { sec: 'Animals', name: 'Question 10', pts: 1, text: 'A bee 🐝 gives us ______.', opts: o4('honey', 'milk', 'wool', 'eggs'), ans: 'A', why: 'A bee gives us <b>honey</b>.' },
  ],
},

/* ═══════════ TEST 7 — MY BODY ═══════════ */
{
  id: 6307, title: 'Test 7 · My body', time: 15,
  questions: [
    { sec: 'Body', name: 'Question 1', pts: 1, text: 'You see with your ______.', opts: o4('eyes', 'ears', 'nose', 'feet'), ans: 'A', why: 'You see with your <b>eyes</b>.' },
    { sec: 'Body', name: 'Question 2', pts: 1, text: 'You hear with your ______.', opts: o4('eyes', 'ears', 'nose', 'hands'), ans: 'B', why: 'You hear with your <b>ears</b>.' },
    { sec: 'Body', name: 'Question 3', pts: 1, text: 'You smell with your ______.', opts: o4('nose', 'ears', 'eyes', 'legs'), ans: 'A', why: 'You smell with your <b>nose</b>.' },
    { sec: 'Body', name: 'Question 4', pts: 1, text: 'You walk with your ______.', opts: o4('legs', 'ears', 'eyes', 'nose'), ans: 'A', why: 'You walk with your <b>legs</b> and feet.' },
    { sec: 'Body', name: 'Question 5', pts: 1, text: 'You hold a pen with your ______.', opts: o4('hands', 'ears', 'nose', 'feet'), ans: 'A', why: 'You hold things with your <b>hands</b>.' },
    { sec: 'Body', name: 'Question 6', pts: 1, text: 'How many eyes do you have?', opts: o4('one', 'two', 'three', 'four'), ans: 'B', why: 'You have <b>two</b> eyes.' },
    { sec: 'Body', name: 'Question 7', pts: 1, text: 'You eat with your ______.', opts: o4('mouth', 'ears', 'eyes', 'feet'), ans: 'A', why: 'You eat with your <b>mouth</b>.' },
    { sec: 'Body', name: 'Question 8', pts: 1, text: 'Which one is a body part?', opts: o4('head', 'book', 'red', 'run'), ans: 'A', why: 'Your <b>head</b> is a body part.' },
    { sec: 'Body', name: 'Question 9', pts: 1, text: 'Your hair is on your ______.', opts: o4('head', 'foot', 'hand', 'knee'), ans: 'A', why: 'Your hair is on your <b>head</b>.' },
    { sec: 'Body', name: 'Question 10', pts: 1, text: 'You wave 👋 with your ______.', opts: o4('hand', 'nose', 'ear', 'foot'), ans: 'A', why: 'You wave with your <b>hand</b>.' },
  ],
},

/* ═══════════ TEST 8 — FOOD AND DRINK ═══════════ */
{
  id: 6308, title: 'Test 8 · Food and drink', time: 15,
  questions: [
    { sec: 'Food', name: 'Question 1', pts: 1, text: 'An apple 🍎 is a ______.', opts: o4('fruit', 'toy', 'car', 'pen'), ans: 'A', why: 'An apple is a <b>fruit</b>.' },
    { sec: 'Drink', name: 'Question 2', pts: 1, text: 'You drink ______. 🥛', opts: o4('milk', 'bread', 'rice', 'cake'), ans: 'A', why: 'You <b>drink</b> milk.' },
    { sec: 'Food', name: 'Question 3', pts: 1, text: 'Rice 🍚 is a kind of ______.', opts: o4('food', 'toy', 'colour', 'animal'), ans: 'A', why: 'Rice is a kind of <b>food</b>.' },
    { sec: 'Food', name: 'Question 4', pts: 1, text: 'A banana 🍌 is a ______.', opts: o4('fruit', 'drink', 'toy', 'chair'), ans: 'A', why: 'A banana is a <b>fruit</b>.' },
    { sec: 'Drink', name: 'Question 5', pts: 1, text: 'When you are thirsty, you drink ______. 💧', opts: o4('water', 'bread', 'a book', 'a shoe'), ans: 'A', why: 'When thirsty you drink <b>water</b>.' },
    { sec: 'Food', name: 'Question 6', pts: 1, text: 'Ice cream 🍦 is ______.', opts: o4('cold', 'hot', 'loud', 'blue'), ans: 'A', why: 'Ice cream is <b>cold</b>.' },
    { sec: 'Food', name: 'Question 7', pts: 1, text: 'Which one can you eat?', opts: o4('bread', 'pen', 'chair', 'car'), ans: 'A', why: 'You can eat <b>bread</b>.' },
    { sec: 'Food', name: 'Question 8', pts: 1, text: 'A carrot 🥕 is a ______.', opts: o4('vegetable', 'drink', 'toy', 'colour'), ans: 'A', why: 'A carrot is a <b>vegetable</b>.' },
    { sec: 'Food', name: 'Question 9', pts: 1, text: 'A cake 🍰 usually tastes ______.', opts: o4('sweet', 'salty', 'loud', 'cold'), ans: 'A', why: 'A cake usually tastes <b>sweet</b>.' },
    { sec: 'Food', name: 'Question 10', pts: 1, text: 'We eat breakfast in the ______.', opts: o4('morning', 'night', 'week', 'year'), ans: 'A', why: 'Breakfast is in the <b>morning</b>.' },
  ],
},

/* ═══════════ TEST 9 — TOYS AND THINGS ═══════════ */
{
  id: 6309, title: 'Test 9 · Toys and things', time: 15,
  questions: [
    { sec: 'Toys', name: 'Question 1', pts: 1, text: 'A teddy bear 🧸 is a ______.', opts: o4('toy', 'food', 'colour', 'day'), ans: 'A', why: 'A teddy bear is a <b>toy</b>.' },
    { sec: 'Toys', name: 'Question 2', pts: 1, text: 'You kick a ______. ⚽', opts: o4('ball', 'book', 'cup', 'bed'), ans: 'A', why: 'You kick a <b>ball</b>.' },
    { sec: 'Grammar', name: 'Question 3', pts: 1, text: 'This is ______ ball. (one ball)', opts: o4('a', 'an', 'two', 'many'), ans: 'A', why: 'We say <b>a ball</b> for one ball.' },
    { sec: 'Grammar', name: 'Question 4', pts: 1, text: 'It is ______ apple.', opts: o4('a', 'an', 'the two', 'many'), ans: 'B', why: 'Before a vowel sound we use <b>an</b>: an apple.' },
    { sec: 'Toys', name: 'Question 5', pts: 1, text: 'A car 🚗 has ______ wheels.', opts: o4('two', 'three', 'four', 'ten'), ans: 'C', why: 'A car has <b>four</b> wheels.' },
    { sec: 'Toys', name: 'Question 6', pts: 1, text: 'Which one is a toy?', opts: o4('doll', 'nose', 'blue', 'run'), ans: 'A', why: 'A <b>doll</b> is a toy.' },
    { sec: 'Grammar', name: 'Question 7', pts: 1, text: '______ is a book. (point to one thing)', opts: o4('It', 'They', 'You', 'We'), ans: 'A', why: 'For one thing we say <b>It</b> is a book.' },
    { sec: 'Toys', name: 'Question 8', pts: 1, text: 'You fly a ______ in the wind. 🪁', opts: o4('kite', 'cup', 'shoe', 'book'), ans: 'A', why: 'You fly a <b>kite</b>.' },
    { sec: 'Grammar', name: 'Question 9', pts: 1, text: 'One book, two ______.', opts: o4('books', 'book', 'bookes', 'books’'), ans: 'A', why: 'For more than one we add -s: two <b>books</b>.' },
    { sec: 'Toys', name: 'Question 10', pts: 1, text: 'A balloon 🎈 is full of ______.', opts: o4('air', 'water', 'sand', 'milk'), ans: 'A', why: 'A balloon is full of <b>air</b>.' },
  ],
},

/* ═══════════ TEST 10 — REVIEW AND SPELLING ═══════════ */
{
  id: 6310, title: 'Test 10 · Review', time: 15,
  questions: [
    { sec: 'Spelling', name: 'Question 1', pts: 1, text: '"c - a - t" spells ______. 🐱', opts: o4('cat', 'dog', 'cap', 'car'), ans: 'A', why: 'c-a-t spells <b>cat</b>.' },
    { sec: 'Spelling', name: 'Question 2', pts: 1, text: '"d - o - g" spells ______. 🐶', opts: o4('dig', 'dog', 'log', 'dot'), ans: 'B', why: 'd-o-g spells <b>dog</b>.' },
    { sec: 'Alphabet', name: 'Question 3', pts: 1, text: 'The first letter of "apple" is ______.', opts: o4('A', 'B', 'P', 'E'), ans: 'A', why: 'Apple starts with the letter <b>A</b>.' },
    { sec: 'Numbers', name: 'Question 4', pts: 1, text: 'How many apples? 🍎🍎🍎', opts: o4('two', 'three', 'four', 'five'), ans: 'B', why: 'There are <b>three</b> apples.' },
    { sec: 'Colours', name: 'Question 5', pts: 1, text: 'A banana 🍌 is ______.', opts: o4('yellow', 'blue', 'black', 'green'), ans: 'A', why: 'A banana is <b>yellow</b>.' },
    { sec: 'Body', name: 'Question 6', pts: 1, text: 'You see with your ______.', opts: o4('eyes', 'ears', 'nose', 'feet'), ans: 'A', why: 'You see with your <b>eyes</b>.' },
    { sec: 'Greetings', name: 'Question 7', pts: 1, text: 'In the morning you say: "______"', opts: o4('Good morning', 'Good night', 'Sorry', 'No'), ans: 'A', why: 'In the morning we say <b>Good morning</b>.' },
    { sec: 'Family', name: 'Question 8', pts: 1, text: 'A boy in your family is your ______.', opts: o4('brother', 'sister', 'mother', 'aunt'), ans: 'A', why: 'A boy in your family is your <b>brother</b>.' },
    { sec: 'School', name: 'Question 9', pts: 1, text: 'You write with a ______.', opts: o4('pen', 'cup', 'shoe', 'ball'), ans: 'A', why: 'You write with a <b>pen</b>.' },
    { sec: 'Spelling', name: 'Question 10', pts: 1, text: '"b - e - d" spells ______. 🛏', opts: o4('bad', 'bed', 'bee', 'big'), ans: 'B', why: 'b-e-d spells <b>bed</b>.' },
  ],
},

/* ═══════════ TEST 11 — THE ALPHABET ═══════════ */
{
  id: 8741, title: 'Test 11 · The alphabet', time: 20,
  questions: [
    { sec: 'Alphabet', name: 'Question 1', pts: 1, text: 'Which is the first letter of the alphabet?', opts: o4('A', 'B', 'C', 'Z'), ans: 'A', why: '<b>A</b> is the first letter.' },
    { sec: 'Alphabet', name: 'Question 2', pts: 1, text: 'Which is the last letter of the alphabet?', opts: o4('X', 'Y', 'Z', 'A'), ans: 'C', why: '<b>Z</b> is the last letter.' },
    { sec: 'Alphabet', name: 'Question 3', pts: 1, text: 'Which letter comes after "B"?', opts: o4('A', 'C', 'D', 'E'), ans: 'B', why: 'After B comes <b>C</b>.' },
    { sec: 'Alphabet', name: 'Question 4', pts: 1, text: 'Which letter comes before "E"?', opts: o4('C', 'D', 'F', 'G'), ans: 'B', why: 'Before E comes <b>D</b>.' },
    { sec: 'Alphabet', name: 'Question 5', pts: 1, text: 'The word "dog" 🐶 starts with ______.', opts: o4('B', 'D', 'G', 'O'), ans: 'B', why: 'Dog starts with <b>D</b>.' },
    { sec: 'Alphabet', name: 'Question 6', pts: 1, text: 'The word "sun" ☀ starts with ______.', opts: o4('S', 'U', 'N', 'T'), ans: 'A', why: 'Sun starts with <b>S</b>.' },
    { sec: 'Alphabet', name: 'Question 7', pts: 1, text: 'Fill in: a, b, c, ______.', opts: o4('e', 'd', 'f', 'g'), ans: 'B', why: 'After c comes <b>d</b>.' },
    { sec: 'Alphabet', name: 'Question 8', pts: 1, text: 'Which letter is a big "A"?', opts: o4('a', 'A', 'e', 'o'), ans: 'B', why: 'The big (capital) letter is <b>A</b>.' },
    { sec: 'Alphabet', name: 'Question 9', pts: 1, text: 'The word "egg" 🥚 starts with ______.', opts: o4('A', 'I', 'E', 'O'), ans: 'C', why: 'Egg starts with <b>E</b>.' },
    { sec: 'Alphabet', name: 'Question 10', pts: 1, text: 'The word "cat" 🐱 starts with ______.', opts: o4('C', 'A', 'T', 'K'), ans: 'A', why: 'Cat starts with <b>C</b>.' },
  ],
},

/* ═══════════ TEST 12 — NUMBERS 11–20 ═══════════ */
{
  id: 8742, title: 'Test 12 · Numbers 11 to 20', time: 20,
  questions: [
    { sec: 'Numbers', name: 'Question 1', pts: 1, text: 'What number comes after ten?', opts: o4('nine', 'eleven', 'twelve', 'twenty'), ans: 'B', why: 'After ten comes <b>eleven</b>.' },
    { sec: 'Numbers', name: 'Question 2', pts: 1, text: 'The number "12" in words is ______.', opts: o4('ten', 'eleven', 'twelve', 'twenty'), ans: 'C', why: '12 is <b>twelve</b>.' },
    { sec: 'Numbers', name: 'Question 3', pts: 1, text: 'Count: thirteen, fourteen, ______.', opts: o4('fifteen', 'twelve', 'ten', 'twenty'), ans: 'A', why: 'After fourteen comes <b>fifteen</b>.' },
    { sec: 'Numbers', name: 'Question 4', pts: 1, text: 'The number "20" in words is ______.', opts: o4('twelve', 'twenty', 'ten', 'two'), ans: 'B', why: '20 is <b>twenty</b>.' },
    { sec: 'Numbers', name: 'Question 5', pts: 1, text: 'What number comes before fifteen?', opts: o4('sixteen', 'fourteen', 'thirteen', 'ten'), ans: 'B', why: 'Before fifteen comes <b>fourteen</b>.' },
    { sec: 'Numbers', name: 'Question 6', pts: 1, text: 'The number "18" in words is ______.', opts: o4('eighteen', 'eighty', 'eight', 'nineteen'), ans: 'A', why: '18 is <b>eighteen</b>.' },
    { sec: 'Numbers', name: 'Question 7', pts: 1, text: 'Which number is bigger?', opts: o4('eleven', 'nineteen', 'twelve', 'ten'), ans: 'B', why: '<b>Nineteen</b> is the biggest here.' },
    { sec: 'Numbers', name: 'Question 8', pts: 1, text: 'Count: sixteen, seventeen, ______.', opts: o4('fifteen', 'eighteen', 'twenty', 'ten'), ans: 'B', why: 'After seventeen comes <b>eighteen</b>.' },
    { sec: 'Numbers', name: 'Question 9', pts: 1, text: 'The number "13" in words is ______.', opts: o4('thirty', 'thirteen', 'three', 'thirsty'), ans: 'B', why: '13 is <b>thirteen</b>.' },
    { sec: 'Numbers', name: 'Question 10', pts: 1, text: 'Ten and one make ______.', opts: o4('nine', 'eleven', 'twenty', 'twelve'), ans: 'B', why: 'Ten plus one is <b>eleven</b>.' },
  ],
},

/* ═══════════ TEST 13 — SHAPES ═══════════ */
{
  id: 8743, title: 'Test 13 · Shapes', time: 20,
  questions: [
    { sec: 'Shapes', name: 'Question 1', pts: 1, text: 'This shape 🔴 is a ______.', opts: o4('circle', 'square', 'star', 'box'), ans: 'A', why: 'A round shape is a <b>circle</b>.' },
    { sec: 'Shapes', name: 'Question 2', pts: 1, text: 'This shape ⭐ is a ______.', opts: o4('circle', 'star', 'heart', 'line'), ans: 'B', why: 'This is a <b>star</b>.' },
    { sec: 'Shapes', name: 'Question 3', pts: 1, text: 'This shape ❤ is a ______.', opts: o4('heart', 'square', 'circle', 'star'), ans: 'A', why: 'This is a <b>heart</b>.' },
    { sec: 'Shapes', name: 'Question 4', pts: 1, text: 'A shape with 4 equal sides is a ______. ⬜', opts: o4('circle', 'square', 'star', 'heart'), ans: 'B', why: 'Four equal sides make a <b>square</b>.' },
    { sec: 'Shapes', name: 'Question 5', pts: 1, text: 'A shape with 3 sides is a ______. 🔺', opts: o4('triangle', 'circle', 'square', 'star'), ans: 'A', why: 'Three sides make a <b>triangle</b>.' },
    { sec: 'Shapes', name: 'Question 6', pts: 1, text: 'How many sides does a triangle have? 🔺', opts: o4('two', 'three', 'four', 'five'), ans: 'B', why: 'A triangle has <b>three</b> sides.' },
    { sec: 'Shapes', name: 'Question 7', pts: 1, text: 'How many sides does a square have? ⬜', opts: o4('three', 'four', 'five', 'six'), ans: 'B', why: 'A square has <b>four</b> sides.' },
    { sec: 'Shapes', name: 'Question 8', pts: 1, text: 'The sun ☀ looks like a ______.', opts: o4('square', 'circle', 'triangle', 'heart'), ans: 'B', why: 'The sun looks like a <b>circle</b>.' },
    { sec: 'Shapes', name: 'Question 9', pts: 1, text: 'A round shape has ______ corners.', opts: o4('no', 'three', 'four', 'ten'), ans: 'A', why: 'A circle has <b>no</b> corners.' },
    { sec: 'Shapes', name: 'Question 10', pts: 1, text: 'Which one is a shape?', opts: o4('circle', 'apple', 'dog', 'red'), ans: 'A', why: 'A <b>circle</b> is a shape.' },
  ],
},

/* ═══════════ TEST 14 — MORE ANIMALS ═══════════ */
{
  id: 8744, title: 'Test 14 · More animals', time: 20,
  questions: [
    { sec: 'Animals', name: 'Question 1', pts: 1, text: 'This animal 🦁 is a ______.', opts: o4('lion', 'dog', 'cat', 'fish'), ans: 'A', why: 'This is a <b>lion</b>.' },
    { sec: 'Animals', name: 'Question 2', pts: 1, text: 'This animal 🐯 is a ______.', opts: o4('cow', 'tiger', 'pig', 'duck'), ans: 'B', why: 'This is a <b>tiger</b>.' },
    { sec: 'Animals', name: 'Question 3', pts: 1, text: 'This animal 🐷 is a ______.', opts: o4('pig', 'bird', 'fish', 'bee'), ans: 'A', why: 'This is a <b>pig</b>.' },
    { sec: 'Animals', name: 'Question 4', pts: 1, text: 'This animal 🐰 is a ______.', opts: o4('lion', 'rabbit', 'cow', 'frog'), ans: 'B', why: 'This is a <b>rabbit</b>.' },
    { sec: 'Animals', name: 'Question 5', pts: 1, text: 'This animal 🐸 is a ______.', opts: o4('frog', 'dog', 'cat', 'bird'), ans: 'A', why: 'This is a <b>frog</b>.' },
    { sec: 'Animals', name: 'Question 6', pts: 1, text: 'A cat 🐱 has ______ legs.', opts: o4('two', 'three', 'four', 'six'), ans: 'C', why: 'A cat has <b>four</b> legs.' },
    { sec: 'Animals', name: 'Question 7', pts: 1, text: 'A bird 🐦 has ______ legs.', opts: o4('two', 'four', 'six', 'eight'), ans: 'A', why: 'A bird has <b>two</b> legs.' },
    { sec: 'Animals', name: 'Question 8', pts: 1, text: 'Which animal can swim? 🐟', opts: o4('fish', 'lion', 'cat', 'dog'), ans: 'A', why: 'A <b>fish</b> swims in water.' },
    { sec: 'Animals', name: 'Question 9', pts: 1, text: 'A bee 🐝 can ______.', opts: o4('fly', 'read', 'drive', 'cook'), ans: 'A', why: 'A bee can <b>fly</b>.' },
    { sec: 'Animals', name: 'Question 10', pts: 1, text: 'Which one is a pet at home? 🐶', opts: o4('dog', 'lion', 'tiger', 'elephant'), ans: 'A', why: 'A <b>dog</b> is a pet at home.' },
  ],
},

/* ═══════════ TEST 15 — FRUIT ═══════════ */
{
  id: 8745, title: 'Test 15 · Fruit', time: 20,
  questions: [
    { sec: 'Fruit', name: 'Question 1', pts: 1, text: 'This fruit 🍎 is an ______.', opts: o4('apple', 'orange', 'banana', 'grape'), ans: 'A', why: 'This is an <b>apple</b>.' },
    { sec: 'Fruit', name: 'Question 2', pts: 1, text: 'This fruit 🍊 is an ______.', opts: o4('apple', 'orange', 'pear', 'plum'), ans: 'B', why: 'This is an <b>orange</b>.' },
    { sec: 'Fruit', name: 'Question 3', pts: 1, text: 'This fruit 🍌 is a ______.', opts: o4('banana', 'apple', 'lemon', 'grape'), ans: 'A', why: 'This is a <b>banana</b>.' },
    { sec: 'Fruit', name: 'Question 4', pts: 1, text: 'This fruit 🍇 is ______.', opts: o4('grapes', 'apple', 'orange', 'melon'), ans: 'A', why: 'These are <b>grapes</b>.' },
    { sec: 'Fruit', name: 'Question 5', pts: 1, text: 'This fruit 🍓 is a ______.', opts: o4('lemon', 'strawberry', 'banana', 'apple'), ans: 'B', why: 'This is a <b>strawberry</b>.' },
    { sec: 'Fruit', name: 'Question 6', pts: 1, text: 'This fruit 🍉 is a ______.', opts: o4('watermelon', 'apple', 'grape', 'plum'), ans: 'A', why: 'This is a <b>watermelon</b>.' },
    { sec: 'Fruit', name: 'Question 7', pts: 1, text: 'A lemon 🍋 is ______.', opts: o4('yellow', 'blue', 'black', 'purple'), ans: 'A', why: 'A lemon is <b>yellow</b>.' },
    { sec: 'Fruit', name: 'Question 8', pts: 1, text: 'How many apples? 🍎🍎🍎🍎', opts: o4('two', 'three', 'four', 'five'), ans: 'C', why: 'There are <b>four</b> apples.' },
    { sec: 'Fruit', name: 'Question 9', pts: 1, text: 'Which one is a fruit?', opts: o4('grape', 'chair', 'pen', 'dog'), ans: 'A', why: 'A <b>grape</b> is a fruit.' },
    { sec: 'Fruit', name: 'Question 10', pts: 1, text: 'A ripe strawberry 🍓 is ______.', opts: o4('red', 'blue', 'black', 'green'), ans: 'A', why: 'A ripe strawberry is <b>red</b>.' },
  ],
},

/* ═══════════ TEST 16 — CLASSROOM OBJECTS ═══════════ */
{
  id: 8746, title: 'Test 16 · Classroom objects', time: 20,
  questions: [
    { sec: 'School', name: 'Question 1', pts: 1, text: 'This 📕 is a ______.', opts: o4('book', 'cup', 'ball', 'shoe'), ans: 'A', why: 'This is a <b>book</b>.' },
    { sec: 'School', name: 'Question 2', pts: 1, text: 'This ✏ is a ______.', opts: o4('pencil', 'cat', 'hat', 'car'), ans: 'A', why: 'This is a <b>pencil</b>.' },
    { sec: 'School', name: 'Question 3', pts: 1, text: 'This 🎒 is a ______.', opts: o4('bed', 'bag', 'bird', 'box'), ans: 'B', why: 'This is a <b>bag</b>.' },
    { sec: 'School', name: 'Question 4', pts: 1, text: 'This 📏 is a ______.', opts: o4('ruler', 'ball', 'spoon', 'fork'), ans: 'A', why: 'This is a <b>ruler</b>.' },
    { sec: 'School', name: 'Question 5', pts: 1, text: 'This ✂ is a pair of ______.', opts: o4('scissors', 'shoes', 'socks', 'cups'), ans: 'A', why: 'These are <b>scissors</b>.' },
    { sec: 'School', name: 'Question 6', pts: 1, text: 'You cut paper with ______. ✂', opts: o4('scissors', 'a book', 'a chair', 'a cup'), ans: 'A', why: 'You cut with <b>scissors</b>.' },
    { sec: 'School', name: 'Question 7', pts: 1, text: 'You sit on a ______ at school.', opts: o4('chair', 'cloud', 'cat', 'shoe'), ans: 'A', why: 'You sit on a <b>chair</b>.' },
    { sec: 'School', name: 'Question 8', pts: 1, text: 'The teacher writes on the ______.', opts: o4('board', 'egg', 'ball', 'car'), ans: 'A', why: 'The teacher writes on the <b>board</b>.' },
    { sec: 'School', name: 'Question 9', pts: 1, text: 'You put your books on the ______.', opts: o4('desk', 'shoe', 'cat', 'sky'), ans: 'A', why: 'Books go on the <b>desk</b>.' },
    { sec: 'School', name: 'Question 10', pts: 1, text: 'Which one is NOT a school thing?', opts: o4('dog', 'pen', 'book', 'bag'), ans: 'A', why: 'A <b>dog</b> is not a school thing.' },
  ],
},

/* ═══════════ TEST 17 — WHAT IS IT? ═══════════ */
{
  id: 8747, title: 'Test 17 · What is it?', time: 20,
  questions: [
    { sec: 'What is it?', name: 'Question 1', pts: 1, text: 'What is it? 🐶 It is a ______.', opts: o4('dog', 'cat', 'cow', 'pig'), ans: 'A', why: 'It is a <b>dog</b>.' },
    { sec: 'What is it?', name: 'Question 2', pts: 1, text: 'What is it? 🍎 It is an ______.', opts: o4('apple', 'egg', 'orange', 'ant'), ans: 'A', why: 'It is an <b>apple</b>.' },
    { sec: 'What is it?', name: 'Question 3', pts: 1, text: 'What is it? 🚗 It is a ______.', opts: o4('car', 'cup', 'cat', 'cake'), ans: 'A', why: 'It is a <b>car</b>.' },
    { sec: 'What is it?', name: 'Question 4', pts: 1, text: 'What is it? ⚽ It is a ______.', opts: o4('ball', 'book', 'bag', 'bed'), ans: 'A', why: 'It is a <b>ball</b>.' },
    { sec: 'What is it?', name: 'Question 5', pts: 1, text: 'What is it? 🐟 It is a ______.', opts: o4('bird', 'fish', 'frog', 'fox'), ans: 'B', why: 'It is a <b>fish</b>.' },
    { sec: 'What is it?', name: 'Question 6', pts: 1, text: 'What is it? 🎈 It is a ______.', opts: o4('balloon', 'ball', 'box', 'bell'), ans: 'A', why: 'It is a <b>balloon</b>.' },
    { sec: 'This is', name: 'Question 7', pts: 1, text: 'This is a ______. 🐱', opts: o4('cat', 'car', 'cap', 'cup'), ans: 'A', why: 'This is a <b>cat</b>.' },
    { sec: 'This is', name: 'Question 8', pts: 1, text: 'This is an ______. 🥚', opts: o4('egg', 'ear', 'eye', 'ant'), ans: 'A', why: 'This is an <b>egg</b>.' },
    { sec: 'This is', name: 'Question 9', pts: 1, text: 'This is a ______. 🌸', opts: o4('flower', 'tree', 'star', 'fish'), ans: 'A', why: 'This is a <b>flower</b>.' },
    { sec: 'What is it?', name: 'Question 10', pts: 1, text: 'What is it? 🏠 It is a ______.', opts: o4('house', 'horse', 'hat', 'hand'), ans: 'A', why: 'It is a <b>house</b>.' },
  ],
},

/* ═══════════ TEST 18 — I LIKE ═══════════ */
{
  id: 8748, title: 'Test 18 · I like it', time: 20,
  questions: [
    { sec: 'I like', name: 'Question 1', pts: 1, text: 'I like ice cream. 🍦 Ice cream is ______.', opts: o4('cold', 'hot', 'loud', 'red'), ans: 'A', why: 'Ice cream is <b>cold</b>.' },
    { sec: 'I like', name: 'Question 2', pts: 1, text: 'I like this fruit: 🍌 I like a ______.', opts: o4('banana', 'ball', 'book', 'bed'), ans: 'A', why: 'I like a <b>banana</b>.' },
    { sec: 'I like', name: 'Question 3', pts: 1, text: 'I like this animal: 🐶 I like a ______.', opts: o4('dog', 'desk', 'door', 'dish'), ans: 'A', why: 'I like a <b>dog</b>.' },
    { sec: 'I like', name: 'Question 4', pts: 1, text: 'I like this drink: 🥛 I like ______.', opts: o4('milk', 'sand', 'a pen', 'a shoe'), ans: 'A', why: 'I like <b>milk</b>.' },
    { sec: 'I like', name: 'Question 5', pts: 1, text: 'I like to play with a ______. ⚽', opts: o4('ball', 'book', 'cup', 'sock'), ans: 'A', why: 'I like to play with a <b>ball</b>.' },
    { sec: 'I like', name: 'Question 6', pts: 1, text: 'Do you like cake? 🍰 – "Yes, I ______ cake."', opts: o4('like', 'run', 'read', 'sit'), ans: 'A', why: 'We say "I <b>like</b> cake".' },
    { sec: 'I like', name: 'Question 7', pts: 1, text: 'I ______ apples. 🍎 (I think they are good.)', opts: o4('like', 'jump', 'sleep', 'sing'), ans: 'A', why: 'We say I <b>like</b> apples.' },
    { sec: 'I like', name: 'Question 8', pts: 1, text: 'I like the colour of the sky. 🔵 I like ______.', opts: o4('blue', 'run', 'ten', 'dog'), ans: 'A', why: 'The sky is <b>blue</b>.' },
    { sec: 'I like', name: 'Question 9', pts: 1, text: 'I like this toy: 🧸 I like a ______.', opts: o4('teddy bear', 'table', 'spoon', 'plate'), ans: 'A', why: 'I like a <b>teddy bear</b>.' },
    { sec: 'I like', name: 'Question 10', pts: 1, text: 'I like this fruit: 🍇 I like ______.', opts: o4('grapes', 'shoes', 'socks', 'chairs'), ans: 'A', why: 'I like <b>grapes</b>.' },
  ],
},

/* ═══════════ TEST 19 — ONE AND MANY ═══════════ */
{
  id: 8749, title: 'Test 19 · One and many', time: 20,
  questions: [
    { sec: 'Plurals', name: 'Question 1', pts: 1, text: 'One cat 🐱, two ______.', opts: o4('cats', 'cat', 'cates', 'cats’'), ans: 'A', why: 'For more than one we add -s: two <b>cats</b>.' },
    { sec: 'Plurals', name: 'Question 2', pts: 1, text: 'One dog 🐶, three ______.', opts: o4('dog', 'dogs', 'doges', 'dogss'), ans: 'B', why: 'Three <b>dogs</b> (add -s).' },
    { sec: 'Plurals', name: 'Question 3', pts: 1, text: 'One apple 🍎, two ______.', opts: o4('apples', 'apple', 'applees', 'appls'), ans: 'A', why: 'Two <b>apples</b>.' },
    { sec: 'Plurals', name: 'Question 4', pts: 1, text: 'This picture 🐟 shows one ______.', opts: o4('fish', 'fishes', 'fishs', 'fishies'), ans: 'A', why: 'One <b>fish</b>.' },
    { sec: 'Plurals', name: 'Question 5', pts: 1, text: 'One ball ⚽, two ______.', opts: o4('balls', 'ball', 'balles', 'ballz'), ans: 'A', why: 'Two <b>balls</b>.' },
    { sec: 'Plurals', name: 'Question 6', pts: 1, text: '🐱🐱 This shows ______.', opts: o4('one cat', 'two cats', 'three cats', 'no cat'), ans: 'B', why: 'There are <b>two cats</b>.' },
    { sec: 'Plurals', name: 'Question 7', pts: 1, text: '🍎 This shows ______.', opts: o4('one apple', 'two apples', 'five apples', 'no apple'), ans: 'A', why: 'There is <b>one apple</b>.' },
    { sec: 'Plurals', name: 'Question 8', pts: 1, text: 'One pen ✏, four ______.', opts: o4('pen', 'pens', 'penes', 'pen’s'), ans: 'B', why: 'Four <b>pens</b>.' },
    { sec: 'Plurals', name: 'Question 9', pts: 1, text: 'One book 📕, two ______.', opts: o4('books', 'book', 'bookes', 'bookss'), ans: 'A', why: 'Two <b>books</b>.' },
    { sec: 'Plurals', name: 'Question 10', pts: 1, text: '🐶🐶🐶 This shows ______.', opts: o4('one dog', 'two dogs', 'three dogs', 'four dogs'), ans: 'C', why: 'There are <b>three dogs</b>.' },
  ],
},

/* ═══════════ TEST 20 — A OR AN ═══════════ */
{
  id: 8750, title: 'Test 20 · a or an', time: 20,
  questions: [
    { sec: 'Grammar', name: 'Question 1', pts: 1, text: 'It is ______ dog. 🐶', opts: o4('a', 'an', 'two', 'the an'), ans: 'A', why: 'We say <b>a dog</b>.' },
    { sec: 'Grammar', name: 'Question 2', pts: 1, text: 'It is ______ apple. 🍎', opts: o4('a', 'an', 'many', 'two'), ans: 'B', why: 'Before a vowel sound we use <b>an</b>: an apple.' },
    { sec: 'Grammar', name: 'Question 3', pts: 1, text: 'It is ______ egg. 🥚', opts: o4('a', 'an', 'the a', 'two'), ans: 'B', why: 'Egg starts with a vowel sound, so <b>an</b> egg.' },
    { sec: 'Grammar', name: 'Question 4', pts: 1, text: 'It is ______ cat. 🐱', opts: o4('an', 'a', 'many', 'the an'), ans: 'B', why: 'We say <b>a cat</b>.' },
    { sec: 'Grammar', name: 'Question 5', pts: 1, text: 'It is ______ orange. 🍊', opts: o4('a', 'an', 'two', 'the a'), ans: 'B', why: 'Orange starts with a vowel sound, so <b>an</b> orange.' },
    { sec: 'Grammar', name: 'Question 6', pts: 1, text: 'It is ______ ball. ⚽', opts: o4('a', 'an', 'many', 'two'), ans: 'A', why: 'We say <b>a ball</b>.' },
    { sec: 'Grammar', name: 'Question 7', pts: 1, text: 'It is ______ elephant. 🐘', opts: o4('a', 'an', 'the a', 'two'), ans: 'B', why: 'Elephant starts with a vowel sound, so <b>an</b> elephant.' },
    { sec: 'Grammar', name: 'Question 8', pts: 1, text: 'It is ______ book. 📕', opts: o4('an', 'a', 'many', 'two'), ans: 'B', why: 'We say <b>a book</b>.' },
    { sec: 'Grammar', name: 'Question 9', pts: 1, text: 'It is ______ umbrella. ☂', opts: o4('a', 'an', 'two', 'the a'), ans: 'B', why: 'Umbrella starts with a vowel sound, so <b>an</b> umbrella.' },
    { sec: 'Grammar', name: 'Question 10', pts: 1, text: 'It is ______ pen. ✏', opts: o4('a', 'an', 'many', 'the an'), ans: 'A', why: 'We say <b>a pen</b>.' },
  ],
},

/* ═══════════ TEST 21 — MY BODY AGAIN ═══════════ */
{
  id: 8751, title: 'Test 21 · Head and hands', time: 20,
  questions: [
    { sec: 'Body', name: 'Question 1', pts: 1, text: 'Your teeth 🦷 are in your ______.', opts: o4('mouth', 'ear', 'foot', 'hand'), ans: 'A', why: 'Your teeth are in your <b>mouth</b>.' },
    { sec: 'Body', name: 'Question 2', pts: 1, text: 'How many ears do you have? 👂', opts: o4('one', 'two', 'three', 'four'), ans: 'B', why: 'You have <b>two</b> ears.' },
    { sec: 'Body', name: 'Question 3', pts: 1, text: 'You kick a ball with your ______.', opts: o4('foot', 'nose', 'ear', 'eye'), ans: 'A', why: 'You kick with your <b>foot</b>.' },
    { sec: 'Body', name: 'Question 4', pts: 1, text: 'How many fingers are on one hand? ✋', opts: o4('three', 'four', 'five', 'ten'), ans: 'C', why: 'One hand has <b>five</b> fingers.' },
    { sec: 'Body', name: 'Question 5', pts: 1, text: 'Your ______ is on top of your body. (with hair)', opts: o4('head', 'foot', 'knee', 'toe'), ans: 'A', why: 'Your <b>head</b> is on top.' },
    { sec: 'Body', name: 'Question 6', pts: 1, text: 'You clap with your two ______. 👏', opts: o4('hands', 'ears', 'eyes', 'toes'), ans: 'A', why: 'You clap with your <b>hands</b>.' },
    { sec: 'Body', name: 'Question 7', pts: 1, text: 'How many noses do you have? 👃', opts: o4('one', 'two', 'three', 'ten'), ans: 'A', why: 'You have <b>one</b> nose.' },
    { sec: 'Body', name: 'Question 8', pts: 1, text: 'You run with your two ______.', opts: o4('legs', 'ears', 'eyes', 'hands'), ans: 'A', why: 'You run with your <b>legs</b>.' },
    { sec: 'Body', name: 'Question 9', pts: 1, text: 'Which one is on your face? 👀', opts: o4('eyes', 'toes', 'knees', 'feet'), ans: 'A', why: 'Your <b>eyes</b> are on your face.' },
    { sec: 'Body', name: 'Question 10', pts: 1, text: 'A big smile 😀 uses your ______.', opts: o4('mouth', 'ear', 'foot', 'knee'), ans: 'A', why: 'You smile with your <b>mouth</b>.' },
  ],
},

/* ═══════════ TEST 22 — COLOURS AGAIN ═══════════ */
{
  id: 8752, title: 'Test 22 · More colours', time: 20,
  questions: [
    { sec: 'Colours', name: 'Question 1', pts: 1, text: 'An orange 🍊 is ______.', opts: o4('orange', 'blue', 'black', 'green'), ans: 'A', why: 'An orange is <b>orange</b>.' },
    { sec: 'Colours', name: 'Question 2', pts: 1, text: 'Grass 🌱 is ______.', opts: o4('red', 'green', 'blue', 'pink'), ans: 'B', why: 'Grass is <b>green</b>.' },
    { sec: 'Colours', name: 'Question 3', pts: 1, text: 'A strawberry 🍓 is ______.', opts: o4('red', 'blue', 'black', 'white'), ans: 'A', why: 'A strawberry is <b>red</b>.' },
    { sec: 'Colours', name: 'Question 4', pts: 1, text: 'Milk 🥛 is ______.', opts: o4('black', 'white', 'green', 'purple'), ans: 'B', why: 'Milk is <b>white</b>.' },
    { sec: 'Colours', name: 'Question 5', pts: 1, text: 'The sea 🌊 is ______.', opts: o4('blue', 'pink', 'brown', 'black'), ans: 'A', why: 'The sea is <b>blue</b>.' },
    { sec: 'Colours', name: 'Question 6', pts: 1, text: 'A pig 🐷 is often ______.', opts: o4('green', 'pink', 'blue', 'black'), ans: 'B', why: 'A pig is often <b>pink</b>.' },
    { sec: 'Colours', name: 'Question 7', pts: 1, text: 'Coal and night are ______.', opts: o4('white', 'black', 'yellow', 'red'), ans: 'B', why: 'They are <b>black</b>.' },
    { sec: 'Colours', name: 'Question 8', pts: 1, text: 'A lemon 🍋 is ______.', opts: o4('yellow', 'blue', 'purple', 'brown'), ans: 'A', why: 'A lemon is <b>yellow</b>.' },
    { sec: 'Colours', name: 'Question 9', pts: 1, text: 'Chocolate 🍫 is ______.', opts: o4('brown', 'blue', 'green', 'pink'), ans: 'A', why: 'Chocolate is <b>brown</b>.' },
    { sec: 'Colours', name: 'Question 10', pts: 1, text: 'Which one is a colour?', opts: o4('cat', 'purple', 'five', 'run'), ans: 'B', why: '<b>Purple</b> is a colour.' },
  ],
},

/* ═══════════ TEST 23 — TOYS AND PLAY ═══════════ */
{
  id: 8753, title: 'Test 23 · Toys and play', time: 20,
  questions: [
    { sec: 'Toys', name: 'Question 1', pts: 1, text: 'This 🧸 is a ______.', opts: o4('teddy bear', 'ball', 'kite', 'doll'), ans: 'A', why: 'This is a <b>teddy bear</b>.' },
    { sec: 'Toys', name: 'Question 2', pts: 1, text: 'This 🪁 is a ______.', opts: o4('kite', 'car', 'ball', 'top'), ans: 'A', why: 'This is a <b>kite</b>.' },
    { sec: 'Toys', name: 'Question 3', pts: 1, text: 'This 🚗 is a toy ______.', opts: o4('car', 'cat', 'cup', 'cap'), ans: 'A', why: 'This is a toy <b>car</b>.' },
    { sec: 'Toys', name: 'Question 4', pts: 1, text: 'This 🎈 is a ______.', opts: o4('balloon', 'ball', 'book', 'bell'), ans: 'A', why: 'This is a <b>balloon</b>.' },
    { sec: 'Toys', name: 'Question 5', pts: 1, text: 'This 🪀 is a ______.', opts: o4('yo-yo', 'kite', 'doll', 'drum'), ans: 'A', why: 'This is a <b>yo-yo</b>.' },
    { sec: 'Toys', name: 'Question 6', pts: 1, text: 'You throw and catch a ______. ⚽', opts: o4('ball', 'book', 'cup', 'chair'), ans: 'A', why: 'You throw and catch a <b>ball</b>.' },
    { sec: 'Toys', name: 'Question 7', pts: 1, text: 'A ______ flies high in the wind. 🪁', opts: o4('kite', 'cup', 'shoe', 'plate'), ans: 'A', why: 'A <b>kite</b> flies in the wind.' },
    { sec: 'Toys', name: 'Question 8', pts: 1, text: 'Which one is a toy?', opts: o4('doll', 'nose', 'milk', 'blue'), ans: 'A', why: 'A <b>doll</b> is a toy.' },
    { sec: 'Toys', name: 'Question 9', pts: 1, text: 'How many toy cars? 🚗🚗', opts: o4('one', 'two', 'three', 'four'), ans: 'B', why: 'There are <b>two</b> toy cars.' },
    { sec: 'Toys', name: 'Question 10', pts: 1, text: 'You hit a ______ to make sound. 🥁', opts: o4('drum', 'book', 'cup', 'shoe'), ans: 'A', why: 'You hit a <b>drum</b>.' },
  ],
},

/* ═══════════ TEST 24 — FAMILY AGAIN ═══════════ */
{
  id: 8754, title: 'Test 24 · My family again', time: 20,
  questions: [
    { sec: 'Family', name: 'Question 1', pts: 1, text: 'Your mother’s father is your ______.', opts: o4('grandfather', 'brother', 'uncle', 'son'), ans: 'A', why: 'Your mother’s father is your <b>grandfather</b>.' },
    { sec: 'Family', name: 'Question 2', pts: 1, text: 'A little girl in your family is your ______.', opts: o4('sister', 'brother', 'father', 'grandpa'), ans: 'A', why: 'A girl in your family is your <b>sister</b>.' },
    { sec: 'Family', name: 'Question 3', pts: 1, text: 'The woman who is your parent is your ______.', opts: o4('mother', 'father', 'brother', 'uncle'), ans: 'A', why: 'Your female parent is your <b>mother</b>.' },
    { sec: 'Family', name: 'Question 4', pts: 1, text: 'The man who is your parent is your ______.', opts: o4('sister', 'father', 'aunt', 'baby'), ans: 'B', why: 'Your male parent is your <b>father</b>.' },
    { sec: 'Family', name: 'Question 5', pts: 1, text: 'A very small child 👶 is a ______.', opts: o4('baby', 'man', 'woman', 'boy'), ans: 'A', why: 'A very small child is a <b>baby</b>.' },
    { sec: 'Family', name: 'Question 6', pts: 1, text: '👨‍👩‍👧‍👦 These people together are a ______.', opts: o4('family', 'shop', 'zoo', 'class'), ans: 'A', why: 'Together they are a <b>family</b>.' },
    { sec: 'Family', name: 'Question 7', pts: 1, text: 'Your father and mother are your ______.', opts: o4('parents', 'friends', 'pets', 'teachers'), ans: 'A', why: 'They are your <b>parents</b>.' },
    { sec: 'Family', name: 'Question 8', pts: 1, text: 'A boy in your family is your ______.', opts: o4('brother', 'sister', 'mother', 'aunt'), ans: 'A', why: 'A boy in your family is your <b>brother</b>.' },
    { sec: 'Family', name: 'Question 9', pts: 1, text: 'Which word is about family?', opts: o4('grandmother', 'pencil', 'green', 'jump'), ans: 'A', why: '<b>Grandmother</b> is a family word.' },
    { sec: 'Family', name: 'Question 10', pts: 1, text: '"This is my ______." (the man who is your parent)', opts: o4('mother', 'father', 'sister', 'dog'), ans: 'B', why: 'Your male parent is your <b>father</b>.' },
  ],
},

/* ═══════════ TEST 25 — GREETINGS AND YES OR NO ═══════════ */
{
  id: 8755, title: 'Test 25 · Greetings, yes and no', time: 20,
  questions: [
    { sec: 'Greetings', name: 'Question 1', pts: 1, text: 'You meet a friend. You say: "______"', opts: o4('Hi!', 'Goodbye!', 'Sorry!', 'No!'), ans: 'A', why: 'We say <b>Hi</b> (or Hello) when we meet.' },
    { sec: 'Greetings', name: 'Question 2', pts: 1, text: 'You go home. You say: "______"', opts: o4('Hello!', 'Bye!', 'Good morning!', 'Please!'), ans: 'B', why: 'When we leave we say <b>Bye</b>.' },
    { sec: 'Greetings', name: 'Question 3', pts: 1, text: 'In the afternoon you say: "Good ______."', opts: o4('afternoon', 'night', 'bye', 'apple'), ans: 'A', why: 'We say <b>Good afternoon</b>.' },
    { sec: 'Yes/No', name: 'Question 4', pts: 1, text: 'Is a banana 🍌 yellow? – "______"', opts: o4('Yes', 'No', 'Bye', 'Sorry'), ans: 'A', why: 'A banana is yellow, so <b>Yes</b>.' },
    { sec: 'Yes/No', name: 'Question 5', pts: 1, text: 'Is a cat 🐱 a fruit? – "______"', opts: o4('Yes', 'No', 'Hello', 'Please'), ans: 'B', why: 'A cat is an animal, so <b>No</b>.' },
    { sec: 'Yes/No', name: 'Question 6', pts: 1, text: 'Can a bird 🐦 fly? – "______"', opts: o4('Yes', 'No', 'Bye', 'Thanks'), ans: 'A', why: 'A bird can fly, so <b>Yes</b>.' },
    { sec: 'Yes/No', name: 'Question 7', pts: 1, text: 'Can a fish 🐟 fly? – "______"', opts: o4('Yes', 'No', 'Hi', 'Sorry'), ans: 'B', why: 'A fish cannot fly, so <b>No</b>.' },
    { sec: 'Polite', name: 'Question 8', pts: 1, text: 'Someone helps you. You say: "______"', opts: o4('Thank you!', 'Goodbye!', 'No!', 'Hi!'), ans: 'A', why: 'We say <b>Thank you</b>.' },
    { sec: 'About me', name: 'Question 9', pts: 1, text: '"How are you?" – "I am ______, thank you."', opts: o4('fine', 'red', 'cat', 'ten'), ans: 'A', why: 'We answer <b>I am fine</b>.' },
    { sec: 'About me', name: 'Question 10', pts: 1, text: '"What is your ______?" – "My name is Lan."', opts: o4('name', 'blue', 'dog', 'book'), ans: 'A', why: 'We ask <b>What is your name?</b>' },
  ],
},

/* ═══════════ TEST 26 — HOW MANY? ═══════════ */
{
  id: 8756, title: 'Test 26 · How many?', time: 20,
  questions: [
    { sec: 'Numbers', name: 'Question 1', pts: 1, text: 'How many cats? 🐱', opts: o4('one', 'two', 'three', 'four'), ans: 'A', why: 'There is <b>one</b> cat.' },
    { sec: 'Numbers', name: 'Question 2', pts: 1, text: 'How many dogs? 🐶🐶', opts: o4('one', 'two', 'three', 'five'), ans: 'B', why: 'There are <b>two</b> dogs.' },
    { sec: 'Numbers', name: 'Question 3', pts: 1, text: 'How many stars? ⭐⭐⭐⭐⭐', opts: o4('three', 'four', 'five', 'six'), ans: 'C', why: 'There are <b>five</b> stars.' },
    { sec: 'Numbers', name: 'Question 4', pts: 1, text: 'How many balls? ⚽⚽⚽⚽', opts: o4('two', 'three', 'four', 'five'), ans: 'C', why: 'There are <b>four</b> balls.' },
    { sec: 'Numbers', name: 'Question 5', pts: 1, text: 'How many apples? 🍎🍎🍎🍎🍎🍎', opts: o4('four', 'five', 'six', 'seven'), ans: 'C', why: 'There are <b>six</b> apples.' },
    { sec: 'Numbers', name: 'Question 6', pts: 1, text: 'How many hearts? ❤❤❤❤❤❤❤', opts: o4('six', 'seven', 'eight', 'nine'), ans: 'B', why: 'There are <b>seven</b> hearts.' },
    { sec: 'Numbers', name: 'Question 7', pts: 1, text: 'How many fish? 🐟🐟🐟', opts: o4('two', 'three', 'four', 'five'), ans: 'B', why: 'There are <b>three</b> fish.' },
    { sec: 'Numbers', name: 'Question 8', pts: 1, text: 'How many flowers? 🌸🌸🌸🌸🌸🌸🌸🌸', opts: o4('seven', 'eight', 'nine', 'ten'), ans: 'B', why: 'There are <b>eight</b> flowers.' },
    { sec: 'Numbers', name: 'Question 9', pts: 1, text: 'How many stars? ⭐⭐⭐⭐⭐⭐⭐⭐⭐', opts: o4('eight', 'nine', 'ten', 'seven'), ans: 'B', why: 'There are <b>nine</b> stars.' },
    { sec: 'Numbers', name: 'Question 10', pts: 1, text: 'How many suns? ☀', opts: o4('one', 'two', 'three', 'zero'), ans: 'A', why: 'There is <b>one</b> sun.' },
  ],
},

/* ═══════════ TEST 27 — LETTER SOUNDS ═══════════ */
{
  id: 8757, title: 'Test 27 · Letter sounds', time: 20,
  questions: [
    { sec: 'Sounds', name: 'Question 1', pts: 1, text: 'Which word starts with "b"? 🏀', opts: o4('ball', 'cat', 'dog', 'sun'), ans: 'A', why: '<b>Ball</b> starts with b.' },
    { sec: 'Sounds', name: 'Question 2', pts: 1, text: 'Which word starts with "c"? 🐱', opts: o4('dog', 'cat', 'egg', 'fish'), ans: 'B', why: '<b>Cat</b> starts with c.' },
    { sec: 'Sounds', name: 'Question 3', pts: 1, text: 'Which word starts with "f"? 🐟', opts: o4('fish', 'sun', 'ball', 'cat'), ans: 'A', why: '<b>Fish</b> starts with f.' },
    { sec: 'Sounds', name: 'Question 4', pts: 1, text: 'Which word starts with "s"? ☀', opts: o4('dog', 'egg', 'sun', 'cat'), ans: 'C', why: '<b>Sun</b> starts with s.' },
    { sec: 'Sounds', name: 'Question 5', pts: 1, text: 'The word "milk" 🥛 starts with ______.', opts: o4('m', 'n', 'k', 'i'), ans: 'A', why: 'Milk starts with <b>m</b>.' },
    { sec: 'Sounds', name: 'Question 6', pts: 1, text: 'The word "house" 🏠 starts with ______.', opts: o4('o', 'h', 's', 'e'), ans: 'B', why: 'House starts with <b>h</b>.' },
    { sec: 'Sounds', name: 'Question 7', pts: 1, text: 'The word "tree" 🌳 starts with ______.', opts: o4('r', 't', 'e', 'g'), ans: 'B', why: 'Tree starts with <b>t</b>.' },
    { sec: 'Sounds', name: 'Question 8', pts: 1, text: 'Which word ends with "g"? 🐶', opts: o4('dog', 'cat', 'ball', 'fish'), ans: 'A', why: '<b>Dog</b> ends with g.' },
    { sec: 'Sounds', name: 'Question 9', pts: 1, text: 'The word "pen" ✏ starts with ______.', opts: o4('b', 'p', 'd', 'n'), ans: 'B', why: 'Pen starts with <b>p</b>.' },
    { sec: 'Sounds', name: 'Question 10', pts: 1, text: 'Which word starts with "e"? 🥚', opts: o4('egg', 'ball', 'sun', 'cat'), ans: 'A', why: '<b>Egg</b> starts with e.' },
  ],
},

/* ═══════════ TEST 28 — FOOD AND DRINK AGAIN ═══════════ */
{
  id: 8758, title: 'Test 28 · More food and drink', time: 20,
  questions: [
    { sec: 'Food', name: 'Question 1', pts: 1, text: 'This 🍞 is ______.', opts: o4('bread', 'milk', 'rice', 'cake'), ans: 'A', why: 'This is <b>bread</b>.' },
    { sec: 'Food', name: 'Question 2', pts: 1, text: 'This 🍚 is ______.', opts: o4('rice', 'egg', 'fish', 'cake'), ans: 'A', why: 'This is <b>rice</b>.' },
    { sec: 'Drink', name: 'Question 3', pts: 1, text: 'You drink ______. 💧', opts: o4('water', 'bread', 'a shoe', 'a pen'), ans: 'A', why: 'You drink <b>water</b>.' },
    { sec: 'Food', name: 'Question 4', pts: 1, text: 'This 🥚 is an ______.', opts: o4('egg', 'apple', 'orange', 'ant'), ans: 'A', why: 'This is an <b>egg</b>.' },
    { sec: 'Food', name: 'Question 5', pts: 1, text: 'This 🍰 is a ______.', opts: o4('cake', 'car', 'cup', 'cat'), ans: 'A', why: 'This is a <b>cake</b>.' },
    { sec: 'Drink', name: 'Question 6', pts: 1, text: 'This drink 🥛 is ______.', opts: o4('milk', 'rice', 'bread', 'egg'), ans: 'A', why: 'This is <b>milk</b>.' },
    { sec: 'Food', name: 'Question 7', pts: 1, text: 'Ice cream 🍦 is ______, not hot.', opts: o4('cold', 'loud', 'blue', 'big'), ans: 'A', why: 'Ice cream is <b>cold</b>.' },
    { sec: 'Food', name: 'Question 8', pts: 1, text: 'A cake 🍰 tastes ______.', opts: o4('sweet', 'salty', 'loud', 'cold'), ans: 'A', why: 'A cake tastes <b>sweet</b>.' },
    { sec: 'Food', name: 'Question 9', pts: 1, text: 'Which one can you drink?', opts: o4('milk', 'bread', 'rice', 'cake'), ans: 'A', why: 'You can drink <b>milk</b>.' },
    { sec: 'Food', name: 'Question 10', pts: 1, text: 'We eat dinner in the ______.', opts: o4('evening', 'morning', 'week', 'year'), ans: 'A', why: 'Dinner is in the <b>evening</b>.' },
  ],
},

/* ═══════════ TEST 29 — NUMBERS REVIEW ═══════════ */
{
  id: 8759, title: 'Test 29 · Numbers review', time: 20,
  questions: [
    { sec: 'Numbers', name: 'Question 1', pts: 1, text: 'What number comes after four?', opts: o4('three', 'five', 'six', 'ten'), ans: 'B', why: 'After four comes <b>five</b>.' },
    { sec: 'Numbers', name: 'Question 2', pts: 1, text: 'What number comes before ten?', opts: o4('eight', 'nine', 'eleven', 'seven'), ans: 'B', why: 'Before ten comes <b>nine</b>.' },
    { sec: 'Numbers', name: 'Question 3', pts: 1, text: 'The number "6" in words is ______.', opts: o4('five', 'six', 'seven', 'eight'), ans: 'B', why: '6 is <b>six</b>.' },
    { sec: 'Numbers', name: 'Question 4', pts: 1, text: 'Count: eight, nine, ______.', opts: o4('seven', 'ten', 'twelve', 'six'), ans: 'B', why: 'After nine comes <b>ten</b>.' },
    { sec: 'Numbers', name: 'Question 5', pts: 1, text: 'The number "15" in words is ______.', opts: o4('fifty', 'fifteen', 'five', 'fourteen'), ans: 'B', why: '15 is <b>fifteen</b>.' },
    { sec: 'Numbers', name: 'Question 6', pts: 1, text: 'Which number is the smallest?', opts: o4('two', 'nine', 'five', 'seven'), ans: 'A', why: '<b>Two</b> is the smallest here.' },
    { sec: 'Numbers', name: 'Question 7', pts: 1, text: 'Two and two make ______.', opts: o4('three', 'four', 'five', 'two'), ans: 'B', why: 'Two and two make <b>four</b>.' },
    { sec: 'Numbers', name: 'Question 8', pts: 1, text: 'Five and five make ______.', opts: o4('nine', 'ten', 'eleven', 'eight'), ans: 'B', why: 'Five and five make <b>ten</b>.' },
    { sec: 'Numbers', name: 'Question 9', pts: 1, text: 'The number "1" in words is ______.', opts: o4('one', 'two', 'ten', 'nine'), ans: 'A', why: '1 is <b>one</b>.' },
    { sec: 'Numbers', name: 'Question 10', pts: 1, text: 'Count back: three, two, ______.', opts: o4('four', 'one', 'five', 'zero'), ans: 'B', why: 'After two, counting back, comes <b>one</b>.' },
  ],
},

/* ═══════════ TEST 30 — BIG REVIEW ═══════════ */
{
  id: 8760, title: 'Test 30 · Big review', time: 20,
  questions: [
    { sec: 'Colours', name: 'Question 1', pts: 1, text: 'A leaf 🌿 is ______.', opts: o4('green', 'red', 'blue', 'black'), ans: 'A', why: 'A leaf is <b>green</b>.' },
    { sec: 'Animals', name: 'Question 2', pts: 1, text: 'A cat 🐱 says ______.', opts: o4('woof', 'meow', 'moo', 'quack'), ans: 'B', why: 'A cat says <b>meow</b>.' },
    { sec: 'Numbers', name: 'Question 3', pts: 1, text: 'How many stars? ⭐⭐⭐⭐', opts: o4('three', 'four', 'five', 'two'), ans: 'B', why: 'There are <b>four</b> stars.' },
    { sec: 'Shapes', name: 'Question 4', pts: 1, text: 'This shape 🔴 is a ______.', opts: o4('circle', 'square', 'star', 'heart'), ans: 'A', why: 'It is a <b>circle</b>.' },
    { sec: 'Family', name: 'Question 5', pts: 1, text: 'A girl in your family is your ______.', opts: o4('brother', 'sister', 'father', 'uncle'), ans: 'B', why: 'A girl in your family is your <b>sister</b>.' },
    { sec: 'Grammar', name: 'Question 6', pts: 1, text: 'It is ______ apple. 🍎', opts: o4('a', 'an', 'two', 'many'), ans: 'B', why: 'Before a vowel sound we use <b>an</b>: an apple.' },
    { sec: 'Body', name: 'Question 7', pts: 1, text: 'You hear with your ______.', opts: o4('eyes', 'ears', 'nose', 'feet'), ans: 'B', why: 'You hear with your <b>ears</b>.' },
    { sec: 'Fruit', name: 'Question 8', pts: 1, text: 'This fruit 🍌 is a ______.', opts: o4('banana', 'apple', 'grape', 'lemon'), ans: 'A', why: 'This is a <b>banana</b>.' },
    { sec: 'Plurals', name: 'Question 9', pts: 1, text: 'One dog 🐶, two ______.', opts: o4('dog', 'dogs', 'doges', 'dogss'), ans: 'B', why: 'Two <b>dogs</b> (add -s).' },
    { sec: 'Greetings', name: 'Question 10', pts: 1, text: 'You go to bed. You say: "Good ______."', opts: o4('morning', 'night', 'afternoon', 'bye'), ans: 'B', why: 'At bedtime we say <b>Good night</b>.' },
  ],
},

];

SUBJECTS.push({
  id: 'tienganh1', name: 'Tiếng Anh', short: 'Tiếng Anh 1', icon: '🔤', grade: 1,
  exams: TA1_EXAMS, ready: true,
  heroTitle: 'Tiếng Anh lớp 1 — chào hỏi, số đếm, màu sắc, gia đình, đồ dùng, con vật và đồ ăn',
  heroMeta: '📚 30 đề &nbsp;•&nbsp; 300 câu &nbsp;•&nbsp; ⏱ 15-20 phút mỗi đề &nbsp;•&nbsp; học qua tranh, không kèm bản dịch',
});
