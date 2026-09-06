// TIẾNG ANH — LỚP 1 (GDPT 2018)
// 10 đề × 10 câu = 100 câu. Mỗi câu 1 điểm — thang 10 — 15 phút mỗi đề.
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

];

SUBJECTS.push({
  id: 'tienganh1', name: 'Tiếng Anh', short: 'Tiếng Anh 1', icon: '🔤', grade: 1,
  exams: TA1_EXAMS, ready: true,
  heroTitle: 'Tiếng Anh lớp 1 — chào hỏi, số đếm, màu sắc, gia đình, đồ dùng, con vật và đồ ăn',
  heroMeta: '📚 10 đề &nbsp;•&nbsp; 100 câu &nbsp;•&nbsp; ⏱ 15 phút mỗi đề &nbsp;•&nbsp; học qua tranh, không kèm bản dịch',
});
