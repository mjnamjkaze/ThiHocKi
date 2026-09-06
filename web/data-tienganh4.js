// TIẾNG ANH — LỚP 4 (GDPT 2018)
// 30 đề × 10 câu = 300 câu. Mỗi câu 1 điểm — thang 10 — 20 phút mỗi đề.
//
// QUY TẮC: môn Tiếng Anh KHÔNG kèm bản dịch tiếng Việt — mọi phần viết bằng tiếng Anh.
// Chủ đề lớp 4: introductions, family & possessives, school subjects, numbers – time – days,
// hobbies (like + V-ing), can/can't, food & drink, weather & clothes, places & prepositions,
// và ôn tập ngữ pháp (to be, plural, present simple).

const TA4_EXAMS = [

/* ═══════════ TEST 1 — INTRODUCTIONS ═══════════ */
{
  id: 6601, title: 'Test 1 · Nice to meet you', time: 20,
  questions: [
    { sec: 'Introductions', name: 'Question 1', pts: 1, text: '"What’s your name?" – "My name ______ Nam."', opts: o4('is', 'am', 'are', 'be'), ans: 'A', why: 'With <b>name</b> (it) we use <b>is</b>.' },
    { sec: 'Introductions', name: 'Question 2', pts: 1, text: '"How old are you?" – "I ______ nine years old."', opts: o4('am', 'is', 'are', 'be'), ans: 'A', why: 'With <b>I</b> we use <b>am</b>.' },
    { sec: 'Introductions', name: 'Question 3', pts: 1, text: '"______ are you from?" – "I’m from Vietnam."', opts: o4('Where', 'What', 'Who', 'When'), ans: 'A', why: 'We ask <b>Where are you from?</b> for a place.' },
    { sec: 'Introductions', name: 'Question 4', pts: 1, text: '"Nice to meet ______."', opts: o4('you', 'your', 'yours', 'me'), ans: 'A', why: 'We say <b>Nice to meet you</b>.' },
    { sec: 'Introductions', name: 'Question 5', pts: 1, text: '"Hello, ______ name is Mai."', opts: o4('my', 'I', 'me', 'mine'), ans: 'A', why: 'We say <b>my name</b> is Mai.' },
    { sec: 'Introductions', name: 'Question 6', pts: 1, text: '"How ______ you?" – "I’m fine, thank you."', opts: o4('are', 'is', 'am', 'do'), ans: 'A', why: 'We ask <b>How are you?</b>' },
    { sec: 'Introductions', name: 'Question 7', pts: 1, text: '"This is my friend. ______ name is Tom."', opts: o4('His', 'Her', 'My', 'Its'), ans: 'A', why: 'Tom is a boy, so we use <b>His</b> name.' },
    { sec: 'Introductions', name: 'Question 8', pts: 1, text: '"______ you a student?" – "Yes, I am."', opts: o4('Are', 'Is', 'Do', 'Am'), ans: 'A', why: 'For <b>you</b> we ask <b>Are you...?</b>' },
    { sec: 'Introductions', name: 'Question 9', pts: 1, text: 'When you leave, you can say: "______"', opts: o4('See you!', 'Hello!', 'Sorry!', 'Please!'), ans: 'A', why: 'To say goodbye we can say <b>See you</b> (or Bye).' },
    { sec: 'Introductions', name: 'Question 10', pts: 1, text: '"What’s your ______ subject?" – "Maths."', opts: o4('favourite', 'colour', 'name', 'age'), ans: 'A', why: 'We ask about your <b>favourite</b> subject.' },
  ],
},

/* ═══════════ TEST 2 — MY FAMILY ═══════════ */
{
  id: 6602, title: 'Test 2 · Family and possessives', time: 20,
  questions: [
    { sec: 'Family', name: 'Question 1', pts: 1, text: 'My mother’s mother is my ______.', opts: o4('grandmother', 'aunt', 'sister', 'cousin'), ans: 'A', why: 'Your mother’s mother is your <b>grandmother</b>.' },
    { sec: 'Family', name: 'Question 2', pts: 1, text: 'My father’s brother is my ______.', opts: o4('uncle', 'aunt', 'father', 'cousin'), ans: 'A', why: 'Your father’s brother is your <b>uncle</b>.' },
    { sec: 'Family', name: 'Question 3', pts: 1, text: 'My mother’s sister is my ______.', opts: o4('aunt', 'uncle', 'sister', 'mother'), ans: 'A', why: 'Your mother’s sister is your <b>aunt</b>.' },
    { sec: 'Possessives', name: 'Question 4', pts: 1, text: '"This is my sister. ______ name is Lan."', opts: o4('Her', 'His', 'My', 'Its'), ans: 'A', why: 'Lan is a girl, so we use <b>Her</b> name.' },
    { sec: 'Possessives', name: 'Question 5', pts: 1, text: '"That is Tom. ______ dog is big."', opts: o4('His', 'Her', 'Their', 'Its'), ans: 'A', why: 'Tom is a boy, so it is <b>His</b> dog.' },
    { sec: 'Family', name: 'Question 6', pts: 1, text: 'A boy and a girl in my family are my brother and ______.', opts: o4('sister', 'uncle', 'mother', 'friend'), ans: 'A', why: 'A girl in your family is your <b>sister</b>.' },
    { sec: 'Possessives', name: 'Question 7', pts: 1, text: '"Whose bag is this?" – "It’s ______." (it belongs to me)', opts: o4('mine', 'my', 'me', 'I'), ans: 'A', why: 'When it belongs to me, I say it’s <b>mine</b>.' },
    { sec: 'Grammar', name: 'Question 8', pts: 1, text: '"My parents ______ teachers."', opts: o4('are', 'is', 'am', 'be'), ans: 'A', why: 'Parents = they, so we use <b>are</b>.' },
    { sec: 'Family', name: 'Question 9', pts: 1, text: 'The son of my uncle is my ______.', opts: o4('cousin', 'brother', 'nephew', 'father'), ans: 'A', why: 'Your uncle’s child is your <b>cousin</b>.' },
    { sec: 'Possessives', name: 'Question 10', pts: 1, text: '"Is this your book?" – "Yes, it’s ______ book."', opts: o4('my', 'me', 'mine', 'I'), ans: 'A', why: 'Before a noun we use <b>my</b>: my book.' },
  ],
},

/* ═══════════ TEST 3 — SCHOOL SUBJECTS ═══════════ */
{
  id: 6603, title: 'Test 3 · School subjects', time: 20,
  questions: [
    { sec: 'Subjects', name: 'Question 1', pts: 1, text: 'We study numbers and counting in ______.', opts: o4('Maths', 'Music', 'Art', 'PE'), ans: 'A', why: 'Numbers and counting are part of <b>Maths</b>.' },
    { sec: 'Subjects', name: 'Question 2', pts: 1, text: 'We learn new English words in ______ class.', opts: o4('English', 'Maths', 'Art', 'Music'), ans: 'A', why: 'We learn English words in <b>English</b>.' },
    { sec: 'Subjects', name: 'Question 3', pts: 1, text: 'We learn about plants and animals in ______.', opts: o4('Science', 'Maths', 'Music', 'PE'), ans: 'A', why: 'Plants and animals are part of <b>Science</b>.' },
    { sec: 'Subjects', name: 'Question 4', pts: 1, text: 'We draw and paint in ______.', opts: o4('Art', 'Maths', 'English', 'PE'), ans: 'A', why: 'We draw and paint in <b>Art</b>.' },
    { sec: 'Subjects', name: 'Question 5', pts: 1, text: 'We run and play games in ______.', opts: o4('PE', 'Music', 'Maths', 'Art'), ans: 'A', why: 'We run and play in <b>PE</b> (Physical Education).' },
    { sec: 'Subjects', name: 'Question 6', pts: 1, text: 'We sing songs in ______.', opts: o4('Music', 'Maths', 'Science', 'PE'), ans: 'A', why: 'We sing in <b>Music</b>.' },
    { sec: 'School', name: 'Question 7', pts: 1, text: '"What ______ do you have today?" – "Maths and English."', opts: o4('subjects', 'colours', 'names', 'ages'), ans: 'A', why: 'We ask what <b>subjects</b> (lessons) you have.' },
    { sec: 'School', name: 'Question 8', pts: 1, text: 'The person who teaches you at school is a ______.', opts: o4('teacher', 'doctor', 'driver', 'farmer'), ans: 'A', why: 'A <b>teacher</b> teaches you.' },
    { sec: 'School', name: 'Question 9', pts: 1, text: '"Open your ______, please." (you read from it)', opts: o4('book', 'shoe', 'cup', 'car'), ans: 'A', why: 'We read from a <b>book</b>.' },
    { sec: 'Subjects', name: 'Question 10', pts: 1, text: '"2 + 2 = 4" is part of the ______ lesson.', opts: o4('Maths', 'Music', 'Art', 'English'), ans: 'A', why: 'Adding numbers is <b>Maths</b>.' },
  ],
},

/* ═══════════ TEST 4 — NUMBERS, TIME AND DAYS ═══════════ */
{
  id: 6604, title: 'Test 4 · Numbers, time and days', time: 20,
  questions: [
    { sec: 'Numbers', name: 'Question 1', pts: 1, text: 'eleven, twelve, ______, fourteen.', opts: o4('thirteen', 'thirty', 'ten', 'fifteen'), ans: 'A', why: 'After twelve comes <b>thirteen</b>.' },
    { sec: 'Numbers', name: 'Question 2', pts: 1, text: 'The number 20 in words is ______.', opts: o4('twenty', 'twelve', 'two', 'twelfth'), ans: 'A', why: '20 is <b>twenty</b>.' },
    { sec: 'Time', name: 'Question 3', pts: 1, text: 'The clock shows 7:00. "It’s seven ______."', opts: o4('o’clock', 'thirty', 'half', 'past'), ans: 'A', why: 'At 7:00 we say seven <b>o’clock</b>.' },
    { sec: 'Days', name: 'Question 4', pts: 1, text: 'There are ______ days in a week.', opts: o4('seven', 'five', 'ten', 'twelve'), ans: 'A', why: 'A week has <b>seven</b> days.' },
    { sec: 'Days', name: 'Question 5', pts: 1, text: 'The first school day of the week is usually ______.', opts: o4('Monday', 'Sunday', 'Friday', 'Saturday'), ans: 'A', why: 'The school week usually starts on <b>Monday</b>.' },
    { sec: 'Days', name: 'Question 6', pts: 1, text: 'The day after Monday is ______.', opts: o4('Tuesday', 'Sunday', 'Friday', 'Monday'), ans: 'A', why: 'After Monday comes <b>Tuesday</b>.' },
    { sec: 'Days', name: 'Question 7', pts: 1, text: 'Saturday and Sunday are the ______.', opts: o4('weekend', 'weekday', 'month', 'year'), ans: 'A', why: 'Saturday and Sunday are the <b>weekend</b>.' },
    { sec: 'Numbers', name: 'Question 8', pts: 1, text: 'The number 100 in words is ______.', opts: o4('one hundred', 'one thousand', 'ten', 'one'), ans: 'A', why: '100 is <b>one hundred</b>.' },
    { sec: 'Time', name: 'Question 9', pts: 1, text: '"Half past eight" means ______.', opts: o4('8:30', '8:00', '7:30', '8:15'), ans: 'A', why: 'Half past eight = <b>8:30</b>.' },
    { sec: 'Numbers', name: 'Question 10', pts: 1, text: 'The number after nineteen is ______.', opts: o4('twenty', 'ninety', 'eighteen', 'twelve'), ans: 'A', why: 'After nineteen comes <b>twenty</b>.' },
  ],
},

/* ═══════════ TEST 5 — HOBBIES ═══════════ */
{
  id: 6605, title: 'Test 5 · Hobbies', time: 20,
  questions: [
    { sec: 'Hobbies', name: 'Question 1', pts: 1, text: '"I like ______ football."', opts: o4('playing', 'play', 'plays', 'played'), ans: 'A', why: 'After <b>like</b> we often use verb + -ing: <b>playing</b>.' },
    { sec: 'Hobbies', name: 'Question 2', pts: 1, text: '"She likes ______ books."', opts: o4('reading', 'read', 'reads', 'to reads'), ans: 'A', why: 'like + <b>reading</b>.' },
    { sec: 'Hobbies', name: 'Question 3', pts: 1, text: '"What’s your hobby?" – "I like ______."', opts: o4('drawing', 'table', 'blue', 'desk'), ans: 'A', why: '<b>Drawing</b> is a hobby.' },
    { sec: 'Hobbies', name: 'Question 4', pts: 1, text: '"Do you like swimming?" – "Yes, I ______."', opts: o4('do', 'am', 'like', 'yes'), ans: 'A', why: 'Short answer to <b>Do you...?</b> is Yes, I <b>do</b>.' },
    { sec: 'Hobbies', name: 'Question 5', pts: 1, text: '"He likes ______ to music."', opts: o4('listening', 'listen', 'listens', 'to listens'), ans: 'A', why: 'like + <b>listening</b> to music.' },
    { sec: 'Hobbies', name: 'Question 6', pts: 1, text: 'A person who paints pictures likes ______.', opts: o4('painting', 'running', 'cooking', 'sleeping'), ans: 'A', why: 'Someone who paints likes <b>painting</b>.' },
    { sec: 'Hobbies', name: 'Question 7', pts: 1, text: '"They like ______ bikes in the park."', opts: o4('riding', 'ride', 'rides', 'rode'), ans: 'A', why: 'like + <b>riding</b> bikes.' },
    { sec: 'Hobbies', name: 'Question 8', pts: 1, text: '"I don’t like ______ up early."', opts: o4('getting', 'get', 'gets', 'got'), ans: 'A', why: 'like/don’t like + <b>getting</b> up.' },
    { sec: 'Hobbies', name: 'Question 9', pts: 1, text: '"We like ______ TV in the evening."', opts: o4('watching', 'watch', 'watches', 'watched'), ans: 'A', why: 'like + <b>watching</b> TV.' },
    { sec: 'Grammar', name: 'Question 10', pts: 1, text: '"She ______ dancing."', opts: o4('likes', 'like', 'liking', 'to like'), ans: 'A', why: 'With <b>she</b> we add -s: she <b>likes</b>.' },
  ],
},

/* ═══════════ TEST 6 — CAN AND CAN'T ═══════════ */
{
  id: 6606, title: 'Test 6 · Can and can’t', time: 20,
  questions: [
    { sec: 'Can', name: 'Question 1', pts: 1, text: '"I ______ swim." (I am able to)', opts: o4('can', 'am', 'do', 'is'), ans: 'A', why: 'For ability we use <b>can</b>.' },
    { sec: 'Can', name: 'Question 2', pts: 1, text: '"A fish can ______."', opts: o4('swim', 'fly', 'walk', 'drive'), ans: 'A', why: 'A fish can <b>swim</b>.' },
    { sec: 'Can', name: 'Question 3', pts: 1, text: '"A bird can ______."', opts: o4('fly', 'swim only', 'read', 'cook'), ans: 'A', why: 'A bird can <b>fly</b>.' },
    { sec: 'Can', name: 'Question 4', pts: 1, text: '"______ you ride a bike?" – "Yes, I can."', opts: o4('Can', 'Do', 'Are', 'Is'), ans: 'A', why: 'For ability questions we start with <b>Can</b>.' },
    { sec: "Can't", name: 'Question 5', pts: 1, text: '"A baby ______ walk yet." (not able)', opts: o4('can’t', 'can', 'do', 'is'), ans: 'A', why: 'Not able = <b>can’t</b> (cannot).' },
    { sec: "Can't", name: 'Question 6', pts: 1, text: '"Can she sing?" – "No, she ______."', opts: o4('can’t', 'can', 'don’t', 'isn’t'), ans: 'A', why: 'Negative short answer is No, she <b>can’t</b>.' },
    { sec: 'Can', name: 'Question 7', pts: 1, text: '"Cats can ______ but they can’t fly."', opts: o4('run', 'fly', 'read', 'talk'), ans: 'A', why: 'Cats can <b>run</b> (and climb) but can’t fly.' },
    { sec: 'Can', name: 'Question 8', pts: 1, text: '"I can ______ English."', opts: o4('speak', 'speaks', 'speaking', 'spoke'), ans: 'A', why: 'After <b>can</b> we use the base verb: can <b>speak</b>.' },
    { sec: 'Can', name: 'Question 9', pts: 1, text: '"He can play the ______." (a music instrument)', opts: o4('piano', 'apple', 'shoe', 'car'), ans: 'A', why: 'You can play the <b>piano</b>.' },
    { sec: "Can't", name: 'Question 10', pts: 1, text: '"Can a dog talk?" – "No, it ______."', opts: o4('can’t', 'can', 'doesn’t', 'isn’t'), ans: 'A', why: 'A dog cannot talk: No, it <b>can’t</b>.' },
  ],
},

/* ═══════════ TEST 7 — FOOD AND DRINK ═══════════ */
{
  id: 6607, title: 'Test 7 · Food and drink', time: 20,
  questions: [
    { sec: 'Grammar', name: 'Question 1', pts: 1, text: '"I would like ______ apple."', opts: o4('an', 'a', 'the two', 'some a'), ans: 'A', why: 'Before a vowel sound we use <b>an</b>: an apple.' },
    { sec: 'Food', name: 'Question 2', pts: 1, text: '"There is some ______ in the glass." 🥛', opts: o4('milk', 'bread', 'rice', 'apple'), ans: 'A', why: 'You drink <b>milk</b> from a glass.' },
    { sec: 'Grammar', name: 'Question 3', pts: 1, text: '"How ______ apples are there?" (we can count them)', opts: o4('many', 'much', 'old', 'long'), ans: 'A', why: 'With countable nouns we use <b>many</b>.' },
    { sec: 'Grammar', name: 'Question 4', pts: 1, text: '"How ______ water do you want?" (we cannot count it)', opts: o4('much', 'many', 'old', 'tall'), ans: 'A', why: 'With uncountable nouns we use <b>much</b>.' },
    { sec: 'Grammar', name: 'Question 5', pts: 1, text: '"I have two ______."', opts: o4('apples', 'apple', 'applies', 'apple’s'), ans: 'A', why: 'After two we use the plural: two <b>apples</b>.' },
    { sec: 'Drink', name: 'Question 6', pts: 1, text: 'Which one is a drink?', opts: o4('juice', 'bread', 'rice', 'cake'), ans: 'A', why: '<b>Juice</b> is a drink.' },
    { sec: 'Food', name: 'Question 7', pts: 1, text: 'An orange is a ______.', opts: o4('fruit', 'drink', 'toy', 'colour'), ans: 'A', why: 'An orange is a <b>fruit</b>.' },
    { sec: 'Food', name: 'Question 8', pts: 1, text: '"Do you like ice cream?" – "Yes, I ______ it."', opts: o4('love', 'am', 'does', 'is'), ans: 'A', why: 'We can say I <b>love</b> it.' },
    { sec: 'Meals', name: 'Question 9', pts: 1, text: 'We eat ______ at noon (in the middle of the day).', opts: o4('lunch', 'breakfast', 'dinner', 'water'), ans: 'A', why: 'The midday meal is <b>lunch</b>.' },
    { sec: 'Food', name: 'Question 10', pts: 1, text: '"Please give me a ______ of water."', opts: o4('glass', 'book', 'shoe', 'chair'), ans: 'A', why: 'We drink from a <b>glass</b> of water.' },
  ],
},

/* ═══════════ TEST 8 — WEATHER AND CLOTHES ═══════════ */
{
  id: 6608, title: 'Test 8 · Weather and clothes', time: 20,
  questions: [
    { sec: 'Weather', name: 'Question 1', pts: 1, text: '"How’s the weather?" – "It’s ______." ☀', opts: o4('sunny', 'rainy', 'snowy', 'windy'), ans: 'A', why: 'With the sun it is <b>sunny</b>.' },
    { sec: 'Weather', name: 'Question 2', pts: 1, text: '"It’s ______." 🌧', opts: o4('rainy', 'sunny', 'snowy', 'hot'), ans: 'A', why: 'With rain it is <b>rainy</b>.' },
    { sec: 'Weather', name: 'Question 3', pts: 1, text: 'In winter it is usually ______.', opts: o4('cold', 'hot', 'sunny', 'dry'), ans: 'A', why: 'Winter is usually <b>cold</b>.' },
    { sec: 'Weather', name: 'Question 4', pts: 1, text: 'In summer it is usually ______.', opts: o4('hot', 'cold', 'snowy', 'freezing'), ans: 'A', why: 'Summer is usually <b>hot</b>.' },
    { sec: 'Clothes', name: 'Question 5', pts: 1, text: 'When it rains, take an ______.', opts: o4('umbrella', 'apple', 'orange', 'egg'), ans: 'A', why: 'In the rain we use an <b>umbrella</b>.' },
    { sec: 'Clothes', name: 'Question 6', pts: 1, text: 'When it’s cold, wear a ______.', opts: o4('coat', 'shorts', 'sandal', 'cap only'), ans: 'A', why: 'When cold we wear a warm <b>coat</b>.' },
    { sec: 'Clothes', name: 'Question 7', pts: 1, text: 'On your feet you wear ______.', opts: o4('shoes', 'a hat', 'gloves', 'a scarf'), ans: 'A', why: 'On our feet we wear <b>shoes</b>.' },
    { sec: 'Weather', name: 'Question 8', pts: 1, text: '"It’s ______." ❄', opts: o4('snowy', 'sunny', 'hot', 'dry'), ans: 'A', why: 'With snow it is <b>snowy</b>.' },
    { sec: 'Weather', name: 'Question 9', pts: 1, text: '"What’s the ______ like today?" – "It’s sunny."', opts: o4('weather', 'family', 'school', 'colour'), ans: 'A', why: 'We ask about the <b>weather</b>.' },
    { sec: 'Clothes', name: 'Question 10', pts: 1, text: 'In hot, sunny weather you wear a ______ on your head.', opts: o4('hat', 'coat', 'boot', 'scarf'), ans: 'A', why: 'In the sun we wear a <b>hat</b>.' },
  ],
},

/* ═══════════ TEST 9 — PLACES AND PREPOSITIONS ═══════════ */
{
  id: 6609, title: 'Test 9 · Places and prepositions', time: 20,
  questions: [
    { sec: 'Places', name: 'Question 1', pts: 1, text: 'You borrow books from the ______.', opts: o4('library', 'kitchen', 'garden', 'beach'), ans: 'A', why: 'We borrow books from the <b>library</b>.' },
    { sec: 'Places', name: 'Question 2', pts: 1, text: 'You buy food at the ______.', opts: o4('supermarket', 'library', 'hospital', 'cinema'), ans: 'A', why: 'We buy food at the <b>supermarket</b>.' },
    { sec: 'Places', name: 'Question 3', pts: 1, text: 'You watch a film at the ______.', opts: o4('cinema', 'library', 'market', 'school'), ans: 'A', why: 'We watch films at the <b>cinema</b>.' },
    { sec: 'Places', name: 'Question 4', pts: 1, text: 'Sick people go to the ______.', opts: o4('hospital', 'park', 'zoo', 'shop'), ans: 'A', why: 'Sick people go to the <b>hospital</b>.' },
    { sec: 'Prepositions', name: 'Question 5', pts: 1, text: '"The cat is ______ the box." (inside)', opts: o4('in', 'on', 'under', 'next'), ans: 'A', why: 'Inside the box = <b>in</b> the box.' },
    { sec: 'Prepositions', name: 'Question 6', pts: 1, text: '"The book is ______ the table." (on top of it)', opts: o4('on', 'in', 'under', 'behind'), ans: 'A', why: 'On top of the table = <b>on</b> the table.' },
    { sec: 'Prepositions', name: 'Question 7', pts: 1, text: '"The ball is ______ the chair." (below it)', opts: o4('under', 'on', 'in', 'next'), ans: 'A', why: 'Below the chair = <b>under</b> the chair.' },
    { sec: 'Places', name: 'Question 8', pts: 1, text: 'You learn and study at ______.', opts: o4('school', 'the beach', 'the cinema', 'the zoo'), ans: 'A', why: 'We study at <b>school</b>.' },
    { sec: 'Prepositions', name: 'Question 9', pts: 1, text: '"The bank is ______ to the school." (beside)', opts: o4('next', 'in', 'under', 'on'), ans: 'A', why: 'Beside something = <b>next</b> to it.' },
    { sec: 'Places', name: 'Question 10', pts: 1, text: 'You post a letter at the ______.', opts: o4('post office', 'kitchen', 'garden', 'cinema'), ans: 'A', why: 'We post letters at the <b>post office</b>.' },
  ],
},

/* ═══════════ TEST 10 — GRAMMAR REVIEW ═══════════ */
{
  id: 6610, title: 'Test 10 · Grammar review', time: 20,
  questions: [
    { sec: 'To be', name: 'Question 1', pts: 1, text: '"I ______ a student."', opts: o4('am', 'is', 'are', 'be'), ans: 'A', why: 'With <b>I</b> we use <b>am</b>.' },
    { sec: 'To be', name: 'Question 2', pts: 1, text: '"She ______ a teacher."', opts: o4('is', 'am', 'are', 'be'), ans: 'A', why: 'With <b>she</b> we use <b>is</b>.' },
    { sec: 'To be', name: 'Question 3', pts: 1, text: '"They ______ my friends."', opts: o4('are', 'is', 'am', 'be'), ans: 'A', why: 'With <b>they</b> we use <b>are</b>.' },
    { sec: 'Plural', name: 'Question 4', pts: 1, text: 'The plural of "book" is ______.', opts: o4('books', 'book', 'bookes', 'books’'), ans: 'A', why: 'Add -s: <b>books</b>.' },
    { sec: 'Plural', name: 'Question 5', pts: 1, text: 'The plural of "box" is ______.', opts: o4('boxes', 'boxs', 'box', 'boxies'), ans: 'A', why: 'Words ending in -x add -es: <b>boxes</b>.' },
    { sec: 'Demonstratives', name: 'Question 6', pts: 1, text: '"______ is my pen." (one thing near me)', opts: o4('This', 'These', 'Those', 'They'), ans: 'A', why: 'For one near thing we use <b>This</b>.' },
    { sec: 'Demonstratives', name: 'Question 7', pts: 1, text: '"______ are my pens." (many things near me)', opts: o4('These', 'This', 'That', 'It'), ans: 'A', why: 'For many near things we use <b>These</b>.' },
    { sec: 'Present simple', name: 'Question 8', pts: 1, text: '"I ______ apples." (I enjoy them)', opts: o4('like', 'likes', 'liking', 'to like'), ans: 'A', why: 'With <b>I</b> we use <b>like</b>.' },
    { sec: 'Present simple', name: 'Question 9', pts: 1, text: '"He ______ football every day."', opts: o4('plays', 'play', 'playing', 'to play'), ans: 'A', why: 'With <b>he</b> we add -s: <b>plays</b>.' },
    { sec: 'Present simple', name: 'Question 10', pts: 1, text: '"______ you like tea?"', opts: o4('Do', 'Does', 'Are', 'Is'), ans: 'A', why: 'For <b>you</b> in the present simple question we use <b>Do</b>.' },
  ],
},

/* ═══════════ TEST 11 — ANIMALS ═══════════ */
{
  id: 7601, title: 'Test 11 · Animals', time: 20,
  questions: [
    { sec: 'Animals', name: 'Question 1', pts: 1, text: 'An ______ is a very big grey animal with a long trunk. 🐘', opts: o4('tiger', 'elephant', 'mouse', 'ant'), ans: 'B', why: 'The big grey animal with a trunk is an <b>elephant</b>.' },
    { sec: 'Animals', name: 'Question 2', pts: 1, text: 'A ______ says "moo" and gives us milk. 🐄', opts: o4('duck', 'cat', 'cow', 'hen'), ans: 'C', why: 'A <b>cow</b> gives us milk and says "moo".' },
    { sec: 'Animals', name: 'Question 3', pts: 1, text: 'The ______ is the king of the jungle. 🦁', opts: o4('lion', 'fish', 'rabbit', 'bee'), ans: 'A', why: 'The <b>lion</b> is called the king of the jungle.' },
    { sec: 'Animals', name: 'Question 4', pts: 1, text: 'A baby dog is called a ______.', opts: o4('kitten', 'puppy', 'calf', 'foal'), ans: 'B', why: 'A baby dog is a <b>puppy</b>.' },
    { sec: 'Animals', name: 'Question 5', pts: 1, text: 'Which animal can fly? 🦅', opts: o4('shark', 'snake', 'eagle', 'horse'), ans: 'C', why: 'An <b>eagle</b> is a bird, so it can fly.' },
    { sec: 'Animals', name: 'Question 6', pts: 1, text: 'A ______ lives in water and has no legs. 🐟', opts: o4('cow', 'dog', 'tiger', 'fish'), ans: 'D', why: 'A <b>fish</b> lives in water and swims with fins.' },
    { sec: 'Animals', name: 'Question 7', pts: 1, text: 'Bees make ______. 🐝', opts: o4('milk', 'honey', 'eggs', 'bread'), ans: 'B', why: 'Bees make <b>honey</b>.' },
    { sec: 'Animals', name: 'Question 8', pts: 1, text: 'A ______ has a very long neck. 🦒', opts: o4('giraffe', 'pig', 'duck', 'cat'), ans: 'A', why: 'A <b>giraffe</b> has a long neck.' },
    { sec: 'Animals', name: 'Question 9', pts: 1, text: 'Which one is a farm animal?', opts: o4('lion', 'tiger', 'pig', 'shark'), ans: 'C', why: 'A <b>pig</b> lives on a farm.' },
    { sec: 'Animals', name: 'Question 10', pts: 1, text: 'The plural of "mouse" is ______.', opts: o4('mouses', 'mice', 'mouse', 'mices'), ans: 'B', why: '"Mouse" has an irregular plural: <b>mice</b>.' },
  ],
},

/* ═══════════ TEST 12 — JOBS ═══════════ */
{
  id: 7602, title: 'Test 12 · Jobs', time: 20,
  questions: [
    { sec: 'Jobs', name: 'Question 1', pts: 1, text: 'A person who teaches children is a ______.', opts: o4('doctor', 'teacher', 'farmer', 'pilot'), ans: 'B', why: 'A <b>teacher</b> teaches children.' },
    { sec: 'Jobs', name: 'Question 2', pts: 1, text: 'A ______ helps sick people. 🩺', opts: o4('doctor', 'driver', 'cook', 'singer'), ans: 'A', why: 'A <b>doctor</b> helps sick people.' },
    { sec: 'Jobs', name: 'Question 3', pts: 1, text: 'A ______ flies a plane. ✈', opts: o4('sailor', 'pilot', 'nurse', 'baker'), ans: 'B', why: 'A <b>pilot</b> flies a plane.' },
    { sec: 'Jobs', name: 'Question 4', pts: 1, text: 'A person who cooks food in a restaurant is a ______.', opts: o4('nurse', 'pilot', 'cook', 'driver'), ans: 'C', why: 'A <b>cook</b> makes food in a restaurant.' },
    { sec: 'Jobs', name: 'Question 5', pts: 1, text: 'A ______ grows food on a farm. 🌾', opts: o4('farmer', 'doctor', 'singer', 'pilot'), ans: 'A', why: 'A <b>farmer</b> grows food on a farm.' },
    { sec: 'Jobs', name: 'Question 6', pts: 1, text: 'A ______ drives a bus or a taxi. 🚕', opts: o4('baker', 'nurse', 'artist', 'driver'), ans: 'D', why: 'A <b>driver</b> drives a bus or taxi.' },
    { sec: 'Jobs', name: 'Question 7', pts: 1, text: 'A ______ puts out fires. 🚒', opts: o4('firefighter', 'farmer', 'waiter', 'clerk'), ans: 'A', why: 'A <b>firefighter</b> puts out fires.' },
    { sec: 'Jobs', name: 'Question 8', pts: 1, text: 'A ______ takes care of your teeth. 🦷', opts: o4('nurse', 'dentist', 'pilot', 'driver'), ans: 'B', why: 'A <b>dentist</b> looks after your teeth.' },
    { sec: 'Jobs', name: 'Question 9', pts: 1, text: 'What does a ______ do? — She sings songs. 🎤', opts: o4('singer', 'baker', 'farmer', 'doctor'), ans: 'A', why: 'A <b>singer</b> sings songs.' },
    { sec: 'Jobs', name: 'Question 10', pts: 1, text: '"What ______ your father do?" – "He is an engineer."', opts: o4('do', 'does', 'is', 'are'), ans: 'B', why: 'With <b>your father</b> (he) we use <b>does</b>.' },
  ],
},

/* ═══════════ TEST 13 — THE BODY ═══════════ */
{
  id: 7603, title: 'Test 13 · The body', time: 20,
  questions: [
    { sec: 'Body', name: 'Question 1', pts: 1, text: 'You see with your ______. 👀', opts: o4('ears', 'eyes', 'nose', 'feet'), ans: 'B', why: 'We see with our <b>eyes</b>.' },
    { sec: 'Body', name: 'Question 2', pts: 1, text: 'You hear with your ______. 👂', opts: o4('ears', 'eyes', 'hands', 'legs'), ans: 'A', why: 'We hear with our <b>ears</b>.' },
    { sec: 'Body', name: 'Question 3', pts: 1, text: 'You smell with your ______. 👃', opts: o4('mouth', 'nose', 'hair', 'arm'), ans: 'B', why: 'We smell with our <b>nose</b>.' },
    { sec: 'Body', name: 'Question 4', pts: 1, text: 'You walk with your ______.', opts: o4('legs', 'ears', 'eyes', 'nose'), ans: 'A', why: 'We walk with our <b>legs</b>.' },
    { sec: 'Body', name: 'Question 5', pts: 1, text: 'You have ten ______ on your two hands. ✋', opts: o4('toes', 'fingers', 'teeth', 'ears'), ans: 'B', why: 'We have ten <b>fingers</b>.' },
    { sec: 'Body', name: 'Question 6', pts: 1, text: 'The plural of "foot" is ______.', opts: o4('foots', 'feets', 'feet', 'footes'), ans: 'C', why: '"Foot" has an irregular plural: <b>feet</b>.' },
    { sec: 'Body', name: 'Question 7', pts: 1, text: 'The plural of "tooth" is ______.', opts: o4('tooths', 'teeth', 'toothes', 'teeths'), ans: 'B', why: '"Tooth" has an irregular plural: <b>teeth</b>.' },
    { sec: 'Body', name: 'Question 8', pts: 1, text: 'You clap with your ______. 👏', opts: o4('hands', 'feet', 'eyes', 'ears'), ans: 'A', why: 'We clap with our <b>hands</b>.' },
    { sec: 'Body', name: 'Question 9', pts: 1, text: 'Your ______ helps you think.', opts: o4('arm', 'toe', 'brain', 'knee'), ans: 'C', why: 'We think with our <b>brain</b>.' },
    { sec: 'Body', name: 'Question 10', pts: 1, text: '"How many eyes do you have?" – "I have ______."', opts: o4('one', 'two', 'ten', 'five'), ans: 'B', why: 'We have <b>two</b> eyes.' },
  ],
},

/* ═══════════ TEST 14 — HOUSE AND ROOMS ═══════════ */
{
  id: 7604, title: 'Test 14 · House and rooms', time: 20,
  questions: [
    { sec: 'House', name: 'Question 1', pts: 1, text: 'We cook food in the ______. 🍳', opts: o4('bedroom', 'kitchen', 'garden', 'garage'), ans: 'B', why: 'We cook in the <b>kitchen</b>.' },
    { sec: 'House', name: 'Question 2', pts: 1, text: 'We sleep in the ______. 🛏', opts: o4('bedroom', 'kitchen', 'bathroom', 'hall'), ans: 'A', why: 'We sleep in the <b>bedroom</b>.' },
    { sec: 'House', name: 'Question 3', pts: 1, text: 'We wash our hands in the ______. 🛁', opts: o4('kitchen', 'bathroom', 'bedroom', 'garden'), ans: 'B', why: 'We wash in the <b>bathroom</b>.' },
    { sec: 'House', name: 'Question 4', pts: 1, text: 'We watch TV in the ______. 📺', opts: o4('living room', 'bathroom', 'garage', 'roof'), ans: 'A', why: 'We watch TV in the <b>living room</b>.' },
    { sec: 'House', name: 'Question 5', pts: 1, text: 'We park the car in the ______. 🚗', opts: o4('kitchen', 'garden', 'garage', 'bedroom'), ans: 'C', why: 'We park the car in the <b>garage</b>.' },
    { sec: 'House', name: 'Question 6', pts: 1, text: 'We grow flowers in the ______. 🌷', opts: o4('kitchen', 'bathroom', 'hall', 'garden'), ans: 'D', why: 'Flowers grow in the <b>garden</b>.' },
    { sec: 'There is/are', name: 'Question 7', pts: 1, text: '"There ______ two beds in the room."', opts: o4('are', 'is', 'am', 'be'), ans: 'A', why: 'With two beds (plural) we use <b>are</b>.' },
    { sec: 'There is/are', name: 'Question 8', pts: 1, text: '"There ______ a big sofa in the living room."', opts: o4('am', 'is', 'are', 'be'), ans: 'B', why: 'With one sofa (singular) we use <b>is</b>.' },
    { sec: 'House', name: 'Question 9', pts: 1, text: 'We sit on a ______.', opts: o4('chair', 'door', 'window', 'wall'), ans: 'A', why: 'We sit on a <b>chair</b>.' },
    { sec: 'House', name: 'Question 10', pts: 1, text: 'We open the ______ to come into the house. 🚪', opts: o4('roof', 'door', 'floor', 'wall'), ans: 'B', why: 'We come in through the <b>door</b>.' },
  ],
},

/* ═══════════ TEST 15 — SPORTS ═══════════ */
{
  id: 7605, title: 'Test 15 · Sports', time: 20,
  questions: [
    { sec: 'Sports', name: 'Question 1', pts: 1, text: 'We play ______ with a round ball and two goals. ⚽', opts: o4('football', 'chess', 'swimming', 'running'), ans: 'A', why: 'The game with a ball and two goals is <b>football</b>.' },
    { sec: 'Sports', name: 'Question 2', pts: 1, text: 'In ______ you move in the water. 🏊', opts: o4('cycling', 'swimming', 'tennis', 'boxing'), ans: 'B', why: 'In <b>swimming</b> you are in the water.' },
    { sec: 'Sports', name: 'Question 3', pts: 1, text: 'We hit a small ball over a net with a racket in ______. 🎾', opts: o4('football', 'running', 'tennis', 'judo'), ans: 'C', why: 'We use a racket in <b>tennis</b>.' },
    { sec: 'Sports', name: 'Question 4', pts: 1, text: 'We ride a bike in ______. 🚴', opts: o4('fishing', 'cycling', 'reading', 'cooking'), ans: 'B', why: 'Riding a bike is <b>cycling</b>.' },
    { sec: 'Sports', name: 'Question 5', pts: 1, text: '"Can you play ______? You shoot the ball into a high basket." 🏀', opts: o4('basketball', 'chess', 'swimming', 'singing'), ans: 'A', why: 'The ball goes into a basket in <b>basketball</b>.' },
    { sec: 'Sports', name: 'Question 6', pts: 1, text: 'A person who plays sport is a ______.', opts: o4('farmer', 'player', 'doctor', 'singer'), ans: 'B', why: 'A <b>player</b> plays sport.' },
    { sec: 'Sports', name: 'Question 7', pts: 1, text: 'We use a ______ to hit the ball in tennis.', opts: o4('bat', 'racket', 'net', 'goal'), ans: 'B', why: 'In tennis we use a <b>racket</b>.' },
    { sec: 'Sports', name: 'Question 8', pts: 1, text: '"I ______ swim very well." (I am able to)', opts: o4('can', 'am', 'do', 'is'), ans: 'A', why: 'For ability we use <b>can</b>.' },
    { sec: 'Sports', name: 'Question 9', pts: 1, text: 'Doing sport is good for your ______.', opts: o4('shoe', 'book', 'health', 'car'), ans: 'C', why: 'Sport is good for our <b>health</b>.' },
    { sec: 'Sports', name: 'Question 10', pts: 1, text: '"They ______ football on Sundays."', opts: o4('play', 'plays', 'playing', 'to play'), ans: 'A', why: 'With <b>they</b> we use <b>play</b>.' },
  ],
},

/* ═══════════ TEST 16 — TRANSPORT ═══════════ */
{
  id: 7606, title: 'Test 16 · Transport', time: 20,
  questions: [
    { sec: 'Transport', name: 'Question 1', pts: 1, text: 'We fly in a ______. ✈', opts: o4('plane', 'car', 'boat', 'bike'), ans: 'A', why: 'We fly in a <b>plane</b>.' },
    { sec: 'Transport', name: 'Question 2', pts: 1, text: 'We sail on the water in a ______. ⛵', opts: o4('bus', 'boat', 'train', 'plane'), ans: 'B', why: 'We sail in a <b>boat</b>.' },
    { sec: 'Transport', name: 'Question 3', pts: 1, text: 'A ______ runs on rails. 🚆', opts: o4('car', 'train', 'bike', 'ship'), ans: 'B', why: 'A <b>train</b> runs on rails.' },
    { sec: 'Transport', name: 'Question 4', pts: 1, text: 'Many people ride together in a ______. 🚌', opts: o4('bike', 'bus', 'car', 'boat'), ans: 'B', why: 'A <b>bus</b> carries many people.' },
    { sec: 'Transport', name: 'Question 5', pts: 1, text: 'You pedal a ______ with two wheels. 🚲', opts: o4('plane', 'ship', 'bicycle', 'train'), ans: 'C', why: 'A <b>bicycle</b> has two wheels and pedals.' },
    { sec: 'Transport', name: 'Question 6', pts: 1, text: '"How do you go to school?" – "I go ______ bus."', opts: o4('by', 'in', 'at', 'on'), ans: 'A', why: 'We say go <b>by</b> bus.' },
    { sec: 'Transport', name: 'Question 7', pts: 1, text: '"I go to school ______ foot." (I walk)', opts: o4('by', 'on', 'in', 'at'), ans: 'B', why: 'We say <b>on</b> foot when we walk.' },
    { sec: 'Transport', name: 'Question 8', pts: 1, text: 'A ______ takes sick people to hospital quickly. 🚑', opts: o4('taxi', 'ship', 'ambulance', 'plane'), ans: 'C', why: 'An <b>ambulance</b> takes people to hospital.' },
    { sec: 'Transport', name: 'Question 9', pts: 1, text: 'The plural of "bus" is ______.', opts: o4('buss', 'buses', 'busies', 'bus'), ans: 'B', why: 'Words ending in -s add -es: <b>buses</b>.' },
    { sec: 'Transport', name: 'Question 10', pts: 1, text: '"The plane is ______ the sky."', opts: o4('in', 'on', 'under', 'next'), ans: 'A', why: 'We say <b>in</b> the sky.' },
  ],
},

/* ═══════════ TEST 17 — THERE IS / THERE ARE ═══════════ */
{
  id: 7607, title: 'Test 17 · There is and there are', time: 20,
  questions: [
    { sec: 'There is/are', name: 'Question 1', pts: 1, text: '"There ______ a book on the desk."', opts: o4('is', 'are', 'am', 'be'), ans: 'A', why: 'One book (singular) → <b>is</b>.' },
    { sec: 'There is/are', name: 'Question 2', pts: 1, text: '"There ______ three cats in the garden."', opts: o4('is', 'are', 'am', 'be'), ans: 'B', why: 'Three cats (plural) → <b>are</b>.' },
    { sec: 'There is/are', name: 'Question 3', pts: 1, text: '"______ there any milk?" – "Yes, there is."', opts: o4('Is', 'Are', 'Am', 'Do'), ans: 'A', why: 'Milk is uncountable (singular) → <b>Is</b> there...?' },
    { sec: 'There is/are', name: 'Question 4', pts: 1, text: '"______ there many students?" – "Yes, there are."', opts: o4('Is', 'Are', 'Am', 'Does'), ans: 'B', why: 'Many students (plural) → <b>Are</b> there...?' },
    { sec: 'There is/are', name: 'Question 5', pts: 1, text: '"There ______ some water in the bottle."', opts: o4('are', 'am', 'is', 'were'), ans: 'C', why: 'Water is uncountable → <b>is</b>.' },
    { sec: 'There is/are', name: 'Question 6', pts: 1, text: '"There ______ four windows in the room."', opts: o4('is', 'are', 'am', 'be'), ans: 'B', why: 'Four windows (plural) → <b>are</b>.' },
    { sec: 'There is/are', name: 'Question 7', pts: 1, text: '"There is ______ apple on the plate."', opts: o4('a', 'an', 'some', 'two'), ans: 'B', why: 'Before the vowel sound in "apple" we use <b>an</b>.' },
    { sec: 'There is/are', name: 'Question 8', pts: 1, text: '"There aren’t ______ eggs in the box."', opts: o4('a', 'some', 'any', 'an'), ans: 'C', why: 'In negatives we use <b>any</b>.' },
    { sec: 'There is/are', name: 'Question 9', pts: 1, text: '"How many chairs ______ there?"', opts: o4('are', 'is', 'am', 'be'), ans: 'A', why: 'With "how many chairs" (plural) → <b>are</b>.' },
    { sec: 'There is/are', name: 'Question 10', pts: 1, text: '"There ______ not a dog in the house."', opts: o4('are', 'is', 'am', 'do'), ans: 'B', why: 'One dog (singular) → <b>is</b> not.' },
  ],
},

/* ═══════════ TEST 18 — QUESTION WORDS ═══════════ */
{
  id: 7608, title: 'Test 18 · Question words', time: 20,
  questions: [
    { sec: 'Question words', name: 'Question 1', pts: 1, text: '"______ is your teacher?" – "Mrs Lan."', opts: o4('Who', 'What', 'Where', 'When'), ans: 'A', why: 'We ask about a person with <b>Who</b>.' },
    { sec: 'Question words', name: 'Question 2', pts: 1, text: '"______ do you live?" – "In Hanoi."', opts: o4('When', 'Where', 'What', 'Who'), ans: 'B', why: 'We ask about a place with <b>Where</b>.' },
    { sec: 'Question words', name: 'Question 3', pts: 1, text: '"______ is your birthday?" – "In May."', opts: o4('Where', 'Who', 'When', 'What'), ans: 'C', why: 'We ask about time with <b>When</b>.' },
    { sec: 'Question words', name: 'Question 4', pts: 1, text: '"______ colour is your bag?" – "It’s red."', opts: o4('What', 'Who', 'When', 'Why'), ans: 'A', why: 'We ask "<b>What</b> colour...?"' },
    { sec: 'Question words', name: 'Question 5', pts: 1, text: '"______ are you sad?" – "Because I lost my pen."', opts: o4('What', 'Why', 'Who', 'Where'), ans: 'B', why: 'We ask for a reason with <b>Why</b> (answer with "because").' },
    { sec: 'Question words', name: 'Question 6', pts: 1, text: '"______ old are you?" – "I’m ten."', opts: o4('How', 'What', 'Who', 'When'), ans: 'A', why: 'We ask "<b>How</b> old...?"' },
    { sec: 'Question words', name: 'Question 7', pts: 1, text: '"______ many books do you have?"', opts: o4('What', 'Who', 'How', 'Why'), ans: 'C', why: 'We ask "<b>How</b> many...?"' },
    { sec: 'Question words', name: 'Question 8', pts: 1, text: '"______ is that boy?" – "He is my brother."', opts: o4('What', 'Who', 'Where', 'When'), ans: 'B', why: 'We ask about a person with <b>Who</b>.' },
    { sec: 'Question words', name: 'Question 9', pts: 1, text: '"______ do you get up?" – "At six o’clock."', opts: o4('When', 'Where', 'Who', 'Which'), ans: 'A', why: 'We ask about time with <b>When</b>.' },
    { sec: 'Question words', name: 'Question 10', pts: 1, text: '"______ pen is yours — the red one or the blue one?"', opts: o4('Which', 'Who', 'Why', 'When'), ans: 'A', why: 'We choose between things with <b>Which</b>.' },
  ],
},

/* ═══════════ TEST 19 — ADVERBS OF FREQUENCY ═══════════ */
{
  id: 7609, title: 'Test 19 · Adverbs of frequency', time: 20,
  questions: [
    { sec: 'Adverbs', name: 'Question 1', pts: 1, text: '"I ______ brush my teeth every day." (100% of the time)', opts: o4('always', 'never', 'sometimes', 'rarely'), ans: 'A', why: '100% of the time is <b>always</b>.' },
    { sec: 'Adverbs', name: 'Question 2', pts: 1, text: '"She ______ eats meat because she doesn’t like it." (0% of the time)', opts: o4('always', 'often', 'never', 'usually'), ans: 'C', why: '0% of the time is <b>never</b>.' },
    { sec: 'Adverbs', name: 'Question 3', pts: 1, text: '"We ______ go to the park on Sundays." (we go there a lot)', opts: o4('often', 'never', 'once', 'twice'), ans: 'A', why: 'A lot of the time is <b>often</b>.' },
    { sec: 'Adverbs', name: 'Question 4', pts: 1, text: '"I ______ go to bed late." (not often, only now and then)', opts: o4('always', 'never', 'sometimes', 'every'), ans: 'C', why: 'Now and then is <b>sometimes</b>.' },
    { sec: 'Adverbs', name: 'Question 5', pts: 1, text: '"He is ______ late for school." (the adverb goes after "is")', opts: o4('day', 'always', 'week', 'year'), ans: 'B', why: 'After "is" we can put <b>always</b>.' },
    { sec: 'Adverbs', name: 'Question 6', pts: 1, text: '"How ______ do you play football?" – "Twice a week."', opts: o4('often', 'many', 'much', 'old'), ans: 'A', why: 'We ask "How <b>often</b>...?" about frequency.' },
    { sec: 'Adverbs', name: 'Question 7', pts: 1, text: '"I ______ watch TV in the morning; I only watch it at night."', opts: o4('always', 'never', 'usually', 'often'), ans: 'B', why: 'Not in the morning at all = <b>never</b>.' },
    { sec: 'Adverbs', name: 'Question 8', pts: 1, text: '"Twice a week" means ______ times a week.', opts: o4('one', 'two', 'three', 'four'), ans: 'B', why: '"Twice" means <b>two</b> times.' },
    { sec: 'Adverbs', name: 'Question 9', pts: 1, text: '"Once a day" means ______ a day.', opts: o4('one time', 'two times', 'no time', 'ten times'), ans: 'A', why: '"Once" means <b>one time</b>.' },
    { sec: 'Adverbs', name: 'Question 10', pts: 1, text: 'Adverbs of frequency usually come before the ______ verb.', opts: o4('main', 'last', 'no', 'first'), ans: 'A', why: 'They come before the <b>main</b> verb (I <b>always</b> read).' },
  ],
},

/* ═══════════ TEST 20 — THIS / THAT / THESE / THOSE ═══════════ */
{
  id: 7610, title: 'Test 20 · This, that, these, those', time: 20,
  questions: [
    { sec: 'Demonstratives', name: 'Question 1', pts: 1, text: '"______ is my pen." (one thing near me)', opts: o4('This', 'These', 'Those', 'They'), ans: 'A', why: 'One near thing → <b>This</b>.' },
    { sec: 'Demonstratives', name: 'Question 2', pts: 1, text: '"______ are my books." (many things near me)', opts: o4('This', 'These', 'That', 'It'), ans: 'B', why: 'Many near things → <b>These</b>.' },
    { sec: 'Demonstratives', name: 'Question 3', pts: 1, text: '"______ is your house over there." (one thing far)', opts: o4('This', 'That', 'These', 'Those'), ans: 'B', why: 'One far thing → <b>That</b>.' },
    { sec: 'Demonstratives', name: 'Question 4', pts: 1, text: '"______ are birds in the sky." (many things far)', opts: o4('These', 'This', 'Those', 'That'), ans: 'C', why: 'Many far things → <b>Those</b>.' },
    { sec: 'Demonstratives', name: 'Question 5', pts: 1, text: '"Are ______ your shoes?" (near me, plural)', opts: o4('these', 'this', 'that', 'it'), ans: 'A', why: 'Near and plural → <b>these</b>.' },
    { sec: 'Demonstratives', name: 'Question 6', pts: 1, text: '"______ apples are sweet." (the ones here, plural)', opts: o4('This', 'These', 'That', 'It'), ans: 'B', why: 'Plural and near → <b>These</b>.' },
    { sec: 'Demonstratives', name: 'Question 7', pts: 1, text: '"Look at ______ dog over there!" (one, far)', opts: o4('these', 'those', 'that', 'this'), ans: 'C', why: 'One far thing → <b>that</b>.' },
    { sec: 'Demonstratives', name: 'Question 8', pts: 1, text: '"______ is a nice picture." (one, near)', opts: o4('These', 'This', 'Those', 'They'), ans: 'B', why: 'One near thing → <b>This</b>.' },
    { sec: 'Demonstratives', name: 'Question 9', pts: 1, text: 'The plural of "this" is ______.', opts: o4('those', 'these', 'thats', 'this'), ans: 'B', why: 'The plural of "this" is <b>these</b>.' },
    { sec: 'Demonstratives', name: 'Question 10', pts: 1, text: 'The plural of "that" is ______.', opts: o4('these', 'this', 'those', 'thats'), ans: 'C', why: 'The plural of "that" is <b>those</b>.' },
  ],
},

/* ═══════════ TEST 21 — PREPOSITIONS OF PLACE ═══════════ */
{
  id: 7611, title: 'Test 21 · Prepositions of place', time: 20,
  questions: [
    { sec: 'Prepositions', name: 'Question 1', pts: 1, text: '"The cat is ______ the table." (below it) 🐱', opts: o4('under', 'on', 'in', 'next'), ans: 'A', why: 'Below the table → <b>under</b>.' },
    { sec: 'Prepositions', name: 'Question 2', pts: 1, text: '"The lamp is ______ the desk." (on top of it)', opts: o4('in', 'on', 'under', 'behind'), ans: 'B', why: 'On top of the desk → <b>on</b>.' },
    { sec: 'Prepositions', name: 'Question 3', pts: 1, text: '"The pen is ______ the box." (inside it)', opts: o4('on', 'in', 'under', 'over'), ans: 'B', why: 'Inside the box → <b>in</b>.' },
    { sec: 'Prepositions', name: 'Question 4', pts: 1, text: '"The tree is ______ the house." (at the back)', opts: o4('behind', 'on', 'in', 'under'), ans: 'A', why: 'At the back → <b>behind</b>.' },
    { sec: 'Prepositions', name: 'Question 5', pts: 1, text: '"The car is ______ the house." (at the front)', opts: o4('on', 'inside', 'in front of', 'under'), ans: 'C', why: 'At the front → <b>in front of</b>.' },
    { sec: 'Prepositions', name: 'Question 6', pts: 1, text: '"The bank is ______ to the school." (beside it)', opts: o4('on', 'next', 'in', 'under'), ans: 'B', why: 'Beside something → <b>next</b> to.' },
    { sec: 'Prepositions', name: 'Question 7', pts: 1, text: '"The bird is ______ the tree." (up in it) 🐦', opts: o4('in', 'under', 'behind', 'below'), ans: 'A', why: 'Up in the tree → <b>in</b>.' },
    { sec: 'Prepositions', name: 'Question 8', pts: 1, text: '"The bridge is ______ the river." (across, above it)', opts: o4('in', 'next', 'over', 'inside'), ans: 'C', why: 'Across and above → <b>over</b>.' },
    { sec: 'Prepositions', name: 'Question 9', pts: 1, text: '"The shoes are ______ the bed." (below it)', opts: o4('on', 'under', 'in', 'over'), ans: 'B', why: 'Below the bed → <b>under</b>.' },
    { sec: 'Prepositions', name: 'Question 10', pts: 1, text: '"The picture is ______ the wall."', opts: o4('in', 'under', 'behind', 'on'), ans: 'D', why: 'A picture hangs <b>on</b> the wall.' },
  ],
},

/* ═══════════ TEST 22 — COLOURS AND SHAPES ═══════════ */
{
  id: 7612, title: 'Test 22 · Colours and shapes', time: 20,
  questions: [
    { sec: 'Colours', name: 'Question 1', pts: 1, text: 'The sky on a clear day is ______. 🔵', opts: o4('blue', 'red', 'green', 'black'), ans: 'A', why: 'A clear sky is <b>blue</b>.' },
    { sec: 'Colours', name: 'Question 2', pts: 1, text: 'Grass is usually ______. 🌱', opts: o4('blue', 'green', 'pink', 'grey'), ans: 'B', why: 'Grass is <b>green</b>.' },
    { sec: 'Colours', name: 'Question 3', pts: 1, text: 'A banana is ______. 🍌', opts: o4('purple', 'blue', 'yellow', 'black'), ans: 'C', why: 'A banana is <b>yellow</b>.' },
    { sec: 'Colours', name: 'Question 4', pts: 1, text: 'Snow is ______. ❄', opts: o4('black', 'red', 'brown', 'white'), ans: 'D', why: 'Snow is <b>white</b>.' },
    { sec: 'Shapes', name: 'Question 5', pts: 1, text: 'A ball is a ______. ⚽', opts: o4('circle', 'square', 'triangle', 'line'), ans: 'A', why: 'A round shape is a <b>circle</b>.' },
    { sec: 'Shapes', name: 'Question 6', pts: 1, text: 'A shape with three sides is a ______. 🔺', opts: o4('circle', 'triangle', 'square', 'star'), ans: 'B', why: 'Three sides → <b>triangle</b>.' },
    { sec: 'Shapes', name: 'Question 7', pts: 1, text: 'A shape with four equal sides is a ______.', opts: o4('circle', 'line', 'square', 'oval'), ans: 'C', why: 'Four equal sides → <b>square</b>.' },
    { sec: 'Colours', name: 'Question 8', pts: 1, text: 'Mix red and yellow and you get ______.', opts: o4('green', 'purple', 'blue', 'orange'), ans: 'D', why: 'Red and yellow make <b>orange</b>.' },
    { sec: 'Colours', name: 'Question 9', pts: 1, text: '"What ______ is your bag?" – "It’s black."', opts: o4('colour', 'name', 'age', 'shape'), ans: 'A', why: 'We ask "What <b>colour</b>...?"' },
    { sec: 'Colours', name: 'Question 10', pts: 1, text: 'A ripe tomato is usually ______. 🍅', opts: o4('blue', 'red', 'yellow', 'purple'), ans: 'B', why: 'A ripe tomato is <b>red</b>.' },
  ],
},

/* ═══════════ TEST 23 — DAILY ROUTINES ═══════════ */
{
  id: 7613, title: 'Test 23 · Daily routines', time: 20,
  questions: [
    { sec: 'Present simple', name: 'Question 1', pts: 1, text: '"I ______ up at six o’clock."', opts: o4('get', 'gets', 'getting', 'got'), ans: 'A', why: 'With <b>I</b> we use <b>get</b>.' },
    { sec: 'Present simple', name: 'Question 2', pts: 1, text: '"She ______ her teeth every morning."', opts: o4('brush', 'brushes', 'brushing', 'brushed'), ans: 'B', why: 'With <b>she</b> we add -es: <b>brushes</b>.' },
    { sec: 'Present simple', name: 'Question 3', pts: 1, text: '"We ______ breakfast at seven."', opts: o4('have', 'has', 'having', 'to have'), ans: 'A', why: 'With <b>we</b> we use <b>have</b>.' },
    { sec: 'Present simple', name: 'Question 4', pts: 1, text: '"He ______ to school by bike."', opts: o4('go', 'goes', 'going', 'went'), ans: 'B', why: 'With <b>he</b> we use <b>goes</b>.' },
    { sec: 'Present simple', name: 'Question 5', pts: 1, text: '"They ______ home at four o’clock."', opts: o4('come', 'comes', 'coming', 'came'), ans: 'A', why: 'With <b>they</b> we use <b>come</b>.' },
    { sec: 'Present simple', name: 'Question 6', pts: 1, text: '"My father ______ dinner in the evening."', opts: o4('cook', 'cooks', 'cooking', 'cooked'), ans: 'B', why: 'With "my father" (he) we use <b>cooks</b>.' },
    { sec: 'Present simple', name: 'Question 7', pts: 1, text: '"______ you do your homework every day?"', opts: o4('Do', 'Does', 'Are', 'Is'), ans: 'A', why: 'With <b>you</b> we ask with <b>Do</b>.' },
    { sec: 'Present simple', name: 'Question 8', pts: 1, text: '"______ she watch TV at night?"', opts: o4('Do', 'Does', 'Are', 'Is'), ans: 'B', why: 'With <b>she</b> we ask with <b>Does</b>.' },
    { sec: 'Present simple', name: 'Question 9', pts: 1, text: '"I ______ go to bed late." (negative)', opts: o4('don’t', 'doesn’t', 'am not', 'isn’t'), ans: 'A', why: 'With <b>I</b> the negative is <b>don’t</b>.' },
    { sec: 'Present simple', name: 'Question 10', pts: 1, text: '"She ______ like coffee." (negative)', opts: o4('don’t', 'doesn’t', 'isn’t', 'aren’t'), ans: 'B', why: 'With <b>she</b> the negative is <b>doesn’t</b>.' },
  ],
},

/* ═══════════ TEST 24 — READING: MY FAMILY ═══════════ */
{
  id: 7614, title: 'Test 24 · Reading — My family', time: 20,
  questions: [
    { sec: 'Reading', name: 'Question 1', pts: 1, text: 'Read: “Hi! I’m Mai. I’m nine. I have a brother, Nam. He is eleven. My father is a doctor. My mother is a teacher. We have a dog, Kiki.” — How old is Mai?', opts: o4('nine', 'eleven', 'ten', 'eight'), ans: 'A', why: 'The text says "I’m nine".' },
    { sec: 'Reading', name: 'Question 2', pts: 1, text: 'Read: “Hi! I’m Mai. I’m nine. I have a brother, Nam. He is eleven. My father is a doctor. My mother is a teacher. We have a dog, Kiki.” — What is Mai’s brother’s name?', opts: o4('Kiki', 'Nam', 'Mai', 'Tom'), ans: 'B', why: 'Her brother is <b>Nam</b>.' },
    { sec: 'Reading', name: 'Question 3', pts: 1, text: 'Read: “Hi! I’m Mai. I’m nine. I have a brother, Nam. He is eleven. My father is a doctor. My mother is a teacher. We have a dog, Kiki.” — How old is Nam?', opts: o4('nine', 'ten', 'eleven', 'twelve'), ans: 'C', why: 'The text says Nam "is eleven".' },
    { sec: 'Reading', name: 'Question 4', pts: 1, text: 'Read: “Hi! I’m Mai. I’m nine. I have a brother, Nam. He is eleven. My father is a doctor. My mother is a teacher. We have a dog, Kiki.” — What is Mai’s father’s job?', opts: o4('doctor', 'teacher', 'driver', 'farmer'), ans: 'A', why: 'Her father is a <b>doctor</b>.' },
    { sec: 'Reading', name: 'Question 5', pts: 1, text: 'Read: “Hi! I’m Mai. I’m nine. I have a brother, Nam. He is eleven. My father is a doctor. My mother is a teacher. We have a dog, Kiki.” — What is Mai’s mother’s job?', opts: o4('doctor', 'nurse', 'teacher', 'singer'), ans: 'C', why: 'Her mother is a <b>teacher</b>.' },
    { sec: 'Reading', name: 'Question 6', pts: 1, text: 'Read: “Hi! I’m Mai. I’m nine. I have a brother, Nam. He is eleven. My father is a doctor. My mother is a teacher. We have a dog, Kiki.” — What is the dog’s name?', opts: o4('Nam', 'Mai', 'Kiki', 'Tom'), ans: 'C', why: 'The dog is <b>Kiki</b>.' },
    { sec: 'Reading', name: 'Question 7', pts: 1, text: 'Read: “Hi! I’m Mai. I’m nine. I have a brother, Nam. He is eleven. My father is a doctor. My mother is a teacher. We have a dog, Kiki.” — How many brothers does Mai have?', opts: o4('one', 'two', 'three', 'no'), ans: 'A', why: 'She has <b>one</b> brother, Nam.' },
    { sec: 'Reading', name: 'Question 8', pts: 1, text: 'Read: “Hi! I’m Mai. I’m nine. I have a brother, Nam. He is eleven. My father is a doctor. My mother is a teacher. We have a dog, Kiki.” — Does Mai have a pet?', opts: o4('Yes, a dog', 'No, none', 'Yes, a cat', 'Yes, a fish'), ans: 'A', why: 'They have a dog, so <b>yes, a dog</b>.' },
    { sec: 'Reading', name: 'Question 9', pts: 1, text: 'Read: “Hi! I’m Mai. I’m nine. I have a brother, Nam. He is eleven. My father is a doctor. My mother is a teacher. We have a dog, Kiki.” — Nam is ______ than Mai.', opts: o4('older', 'younger', 'taller', 'shorter'), ans: 'A', why: 'Nam is eleven and Mai is nine, so Nam is <b>older</b>.' },
    { sec: 'Reading', name: 'Question 10', pts: 1, text: 'Read: “Hi! I’m Mai. I’m nine. I have a brother, Nam. He is eleven. My father is a doctor. My mother is a teacher. We have a dog, Kiki.” — Mai’s family has ______ people.', opts: o4('three', 'four', 'five', 'two'), ans: 'B', why: 'Father, mother, Mai and Nam = <b>four</b> people.' },
  ],
},

/* ═══════════ TEST 25 — READING: A SCHOOL DAY ═══════════ */
{
  id: 7615, title: 'Test 25 · Reading — A school day', time: 20,
  questions: [
    { sec: 'Reading', name: 'Question 1', pts: 1, text: 'Read: “Tom gets up at six. He goes to school by bus. He has four lessons: Maths, English, Art and PE. His favourite subject is Art. After school he plays football with his friends.” — What time does Tom get up?', opts: o4('five', 'six', 'seven', 'eight'), ans: 'B', why: 'He gets up at <b>six</b>.' },
    { sec: 'Reading', name: 'Question 2', pts: 1, text: 'Read: “Tom gets up at six. He goes to school by bus. He has four lessons: Maths, English, Art and PE. His favourite subject is Art. After school he plays football with his friends.” — How does Tom go to school?', opts: o4('by bike', 'by car', 'by bus', 'on foot'), ans: 'C', why: 'He goes <b>by bus</b>.' },
    { sec: 'Reading', name: 'Question 3', pts: 1, text: 'Read: “Tom gets up at six. He goes to school by bus. He has four lessons: Maths, English, Art and PE. His favourite subject is Art. After school he plays football with his friends.” — How many lessons does Tom have?', opts: o4('two', 'three', 'four', 'five'), ans: 'C', why: 'He has <b>four</b> lessons.' },
    { sec: 'Reading', name: 'Question 4', pts: 1, text: 'Read: “Tom gets up at six. He goes to school by bus. He has four lessons: Maths, English, Art and PE. His favourite subject is Art. After school he plays football with his friends.” — What is Tom’s favourite subject?', opts: o4('Maths', 'Art', 'English', 'PE'), ans: 'B', why: 'His favourite subject is <b>Art</b>.' },
    { sec: 'Reading', name: 'Question 5', pts: 1, text: 'Read: “Tom gets up at six. He goes to school by bus. He has four lessons: Maths, English, Art and PE. His favourite subject is Art. After school he plays football with his friends.” — Which subject is NOT in Tom’s lessons?', opts: o4('Maths', 'Art', 'Music', 'PE'), ans: 'C', why: '<b>Music</b> is not in the list.' },
    { sec: 'Reading', name: 'Question 6', pts: 1, text: 'Read: “Tom gets up at six. He goes to school by bus. He has four lessons: Maths, English, Art and PE. His favourite subject is Art. After school he plays football with his friends.” — What does Tom do after school?', opts: o4('sleeps', 'plays football', 'reads books', 'swims'), ans: 'B', why: 'He <b>plays football</b> with friends.' },
    { sec: 'Reading', name: 'Question 7', pts: 1, text: 'Read: “Tom gets up at six. He goes to school by bus. He has four lessons: Maths, English, Art and PE. His favourite subject is Art. After school he plays football with his friends.” — Does Tom study English?', opts: o4('Yes, he does', 'No, he doesn’t', 'Only at home', 'Never'), ans: 'A', why: 'English is one of his lessons, so <b>yes</b>.' },
    { sec: 'Reading', name: 'Question 8', pts: 1, text: 'Read: “Tom gets up at six. He goes to school by bus. He has four lessons: Maths, English, Art and PE. His favourite subject is Art. After school he plays football with his friends.” — Who does Tom play with?', opts: o4('his friends', 'his dog', 'his teacher', 'no one'), ans: 'A', why: 'He plays with <b>his friends</b>.' },
    { sec: 'Reading', name: 'Question 9', pts: 1, text: 'Read: “Tom gets up at six. He goes to school by bus. He has four lessons: Maths, English, Art and PE. His favourite subject is Art. After school he plays football with his friends.” — Is Art Tom’s favourite subject? "Yes, ______ is."', opts: o4('it', 'he', 'she', 'they'), ans: 'A', why: 'Art is a thing, so we answer "Yes, <b>it</b> is."' },
    { sec: 'Reading', name: 'Question 10', pts: 1, text: 'Read: “Tom gets up at six. He goes to school by bus. He has four lessons: Maths, English, Art and PE. His favourite subject is Art. After school he plays football with his friends.” — Tom does NOT go to school ______.', opts: o4('by bus', 'by car', 'in the morning', 'with a bag'), ans: 'B', why: 'He goes by bus, not <b>by car</b>.' },
  ],
},

/* ═══════════ TEST 26 — READING: MY PET ═══════════ */
{
  id: 7616, title: 'Test 26 · Reading — My pet', time: 20,
  questions: [
    { sec: 'Reading', name: 'Question 1', pts: 1, text: 'Read: “I have a cat. Her name is Milu. She is white and small. She likes fish and milk. She can climb trees but she can’t swim. Milu sleeps on my bed.” — What pet does the writer have?', opts: o4('a dog', 'a cat', 'a bird', 'a fish'), ans: 'B', why: 'The writer has <b>a cat</b>.' },
    { sec: 'Reading', name: 'Question 2', pts: 1, text: 'Read: “I have a cat. Her name is Milu. She is white and small. She likes fish and milk. She can climb trees but she can’t swim. Milu sleeps on my bed.” — What is the cat’s name?', opts: o4('Kiki', 'Milu', 'Tom', 'Mai'), ans: 'B', why: 'The cat is <b>Milu</b>.' },
    { sec: 'Reading', name: 'Question 3', pts: 1, text: 'Read: “I have a cat. Her name is Milu. She is white and small. She likes fish and milk. She can climb trees but she can’t swim. Milu sleeps on my bed.” — What colour is Milu?', opts: o4('black', 'white', 'brown', 'grey'), ans: 'B', why: 'Milu is <b>white</b>.' },
    { sec: 'Reading', name: 'Question 4', pts: 1, text: 'Read: “I have a cat. Her name is Milu. She is white and small. She likes fish and milk. She can climb trees but she can’t swim. Milu sleeps on my bed.” — What does Milu like to eat?', opts: o4('bread', 'rice', 'fish', 'cake'), ans: 'C', why: 'Milu likes <b>fish</b> (and milk).' },
    { sec: 'Reading', name: 'Question 5', pts: 1, text: 'Read: “I have a cat. Her name is Milu. She is white and small. She likes fish and milk. She can climb trees but she can’t swim. Milu sleeps on my bed.” — What can Milu do?', opts: o4('swim', 'fly', 'climb trees', 'read'), ans: 'C', why: 'Milu can <b>climb trees</b>.' },
    { sec: 'Reading', name: 'Question 6', pts: 1, text: 'Read: “I have a cat. Her name is Milu. She is white and small. She likes fish and milk. She can climb trees but she can’t swim. Milu sleeps on my bed.” — What can’t Milu do?', opts: o4('run', 'swim', 'sleep', 'eat'), ans: 'B', why: 'Milu can’t <b>swim</b>.' },
    { sec: 'Reading', name: 'Question 7', pts: 1, text: 'Read: “I have a cat. Her name is Milu. She is white and small. She likes fish and milk. She can climb trees but she can’t swim. Milu sleeps on my bed.” — Where does Milu sleep?', opts: o4('on the bed', 'in the garden', 'on the roof', 'in a box'), ans: 'A', why: 'Milu sleeps <b>on the bed</b>.' },
    { sec: 'Reading', name: 'Question 8', pts: 1, text: 'Read: “I have a cat. Her name is Milu. She is white and small. She likes fish and milk. She can climb trees but she can’t swim. Milu sleeps on my bed.” — Is Milu big? "No, she is ______."', opts: o4('big', 'small', 'tall', 'long'), ans: 'B', why: 'Milu is <b>small</b>.' },
    { sec: 'Reading', name: 'Question 9', pts: 1, text: 'Read: “I have a cat. Her name is Milu. She is white and small. She likes fish and milk. She can climb trees but she can’t swim. Milu sleeps on my bed.” — Milu likes fish and ______.', opts: o4('milk', 'juice', 'tea', 'water'), ans: 'A', why: 'Milu likes fish and <b>milk</b>.' },
    { sec: 'Reading', name: 'Question 10', pts: 1, text: 'Read: “I have a cat. Her name is Milu. She is white and small. She likes fish and milk. She can climb trees but she can’t swim. Milu sleeps on my bed.” — Is Milu a boy cat or a girl cat?', opts: o4('a girl cat', 'a boy cat', 'a dog', 'a bird'), ans: 'A', why: 'The text says "Her name" and "She", so Milu is <b>a girl cat</b>.' },
  ],
},

/* ═══════════ TEST 27 — FOOD AND MEALS ═══════════ */
{
  id: 7617, title: 'Test 27 · Food and meals', time: 20,
  questions: [
    { sec: 'Meals', name: 'Question 1', pts: 1, text: 'We eat ______ in the morning.', opts: o4('lunch', 'breakfast', 'dinner', 'supper'), ans: 'B', why: 'The morning meal is <b>breakfast</b>.' },
    { sec: 'Grammar', name: 'Question 2', pts: 1, text: '"I’d like ______ orange juice." (uncountable)', opts: o4('some', 'a', 'an', 'two'), ans: 'A', why: 'With uncountable drinks we use <b>some</b>.' },
    { sec: 'Food', name: 'Question 3', pts: 1, text: 'Which one is a vegetable? 🥕', opts: o4('apple', 'banana', 'carrot', 'milk'), ans: 'C', why: 'A <b>carrot</b> is a vegetable.' },
    { sec: 'Food', name: 'Question 4', pts: 1, text: 'Which one is a fruit? 🍎', opts: o4('bread', 'apple', 'rice', 'fish'), ans: 'B', why: 'An <b>apple</b> is a fruit.' },
    { sec: 'Grammar', name: 'Question 5', pts: 1, text: '"How much ______ do you want?" (uncountable) 🍚', opts: o4('apples', 'books', 'pens', 'rice'), ans: 'D', why: 'With "how much" we use an uncountable noun like <b>rice</b>.' },
    { sec: 'Grammar', name: 'Question 6', pts: 1, text: '"How many ______ are there?" (countable)', opts: o4('eggs', 'water', 'milk', 'sugar'), ans: 'A', why: 'With "how many" we use a countable plural like <b>eggs</b>.' },
    { sec: 'Drink', name: 'Question 7', pts: 1, text: 'We drink ______ when we are thirsty. 💧', opts: o4('bread', 'rice', 'water', 'meat'), ans: 'C', why: 'When thirsty we drink <b>water</b>.' },
    { sec: 'Grammar', name: 'Question 8', pts: 1, text: 'The plural of "tomato" is ______.', opts: o4('tomatos', 'tomatoes', 'tomato', 'tomatoies'), ans: 'B', why: 'Words like "tomato" add -es: <b>tomatoes</b>.' },
    { sec: 'Food', name: 'Question 9', pts: 1, text: '"Would you like some cake?" – "______, please."', opts: o4('Green', 'Fast', 'Never', 'Yes'), ans: 'D', why: 'A polite answer is "<b>Yes</b>, please."' },
    { sec: 'Meals', name: 'Question 10', pts: 1, text: 'The last meal of the day, in the evening, is ______.', opts: o4('dinner', 'breakfast', 'lunch', 'snack'), ans: 'A', why: 'The evening meal is <b>dinner</b>.' },
  ],
},

/* ═══════════ TEST 28 — WEATHER AND SEASONS ═══════════ */
{
  id: 7618, title: 'Test 28 · Weather and seasons', time: 20,
  questions: [
    { sec: 'Seasons', name: 'Question 1', pts: 1, text: 'There are ______ seasons in a year.', opts: o4('two', 'three', 'four', 'five'), ans: 'C', why: 'A year has <b>four</b> seasons.' },
    { sec: 'Seasons', name: 'Question 2', pts: 1, text: 'In ______ the trees have new green leaves. 🌸', opts: o4('spring', 'summer', 'autumn', 'winter'), ans: 'A', why: 'New leaves grow in <b>spring</b>.' },
    { sec: 'Seasons', name: 'Question 3', pts: 1, text: 'In ______ it is very hot and sunny. ☀', opts: o4('winter', 'summer', 'autumn', 'spring'), ans: 'B', why: '<b>Summer</b> is hot and sunny.' },
    { sec: 'Seasons', name: 'Question 4', pts: 1, text: 'In ______ the leaves turn yellow and fall down. 🍂', opts: o4('autumn', 'summer', 'spring', 'winter'), ans: 'A', why: 'Leaves fall in <b>autumn</b>.' },
    { sec: 'Seasons', name: 'Question 5', pts: 1, text: 'In ______ it is cold and it can snow. ❄', opts: o4('spring', 'summer', 'autumn', 'winter'), ans: 'D', why: '<b>Winter</b> is cold and snowy.' },
    { sec: 'Weather', name: 'Question 6', pts: 1, text: '"It’s very ______ today. The trees are moving." 🌬', opts: o4('sunny', 'dry', 'windy', 'hot'), ans: 'C', why: 'When trees move in the wind it is <b>windy</b>.' },
    { sec: 'Weather', name: 'Question 7', pts: 1, text: '"How’s the weather?" – "It’s ______." 🌧', opts: o4('happy', 'rainy', 'tall', 'red'), ans: 'B', why: 'With rain the weather is <b>rainy</b>.' },
    { sec: 'Weather', name: 'Question 8', pts: 1, text: 'When it is cold, we wear a warm ______.', opts: o4('shorts', 'sandals', 'cap', 'jacket'), ans: 'D', why: 'In the cold we wear a warm <b>jacket</b>.' },
    { sec: 'Weather', name: 'Question 9', pts: 1, text: 'The sun makes the day ______ and bright.', opts: o4('cold', 'warm', 'dark', 'wet'), ans: 'B', why: 'The sun makes the day <b>warm</b>.' },
    { sec: 'Seasons', name: 'Question 10', pts: 1, text: '"What’s your favourite season?" – "I like ______ because I can swim."', opts: o4('winter', 'summer', 'autumn', 'none'), ans: 'B', why: 'We swim in the hot season, <b>summer</b>.' },
  ],
},

/* ═══════════ TEST 29 — CLOTHES AND SHOPPING ═══════════ */
{
  id: 7619, title: 'Test 29 · Clothes and shopping', time: 20,
  questions: [
    { sec: 'Clothes', name: 'Question 1', pts: 1, text: 'On a cold day you wear a ______. 🧥', opts: o4('t-shirt', 'coat', 'shorts', 'sandals'), ans: 'B', why: 'When cold we wear a <b>coat</b>.' },
    { sec: 'Clothes', name: 'Question 2', pts: 1, text: 'On your feet in the rain you wear ______. 🥾', opts: o4('a hat', 'gloves', 'boots', 'a scarf'), ans: 'C', why: 'In the rain we wear <b>boots</b>.' },
    { sec: 'Clothes', name: 'Question 3', pts: 1, text: 'You wear ______ on your hands when it’s cold. 🧤', opts: o4('gloves', 'shoes', 'socks', 'a belt'), ans: 'A', why: 'On cold hands we wear <b>gloves</b>.' },
    { sec: 'Clothes', name: 'Question 4', pts: 1, text: 'A ______ keeps your neck warm. 🧣', opts: o4('shoe', 'cap', 'sock', 'scarf'), ans: 'D', why: 'A <b>scarf</b> warms your neck.' },
    { sec: 'Shopping', name: 'Question 5', pts: 1, text: '"How ______ is this hat?" – "It’s 50,000 dong."', opts: o4('much', 'many', 'old', 'long'), ans: 'A', why: 'We ask the price with "How <b>much</b>...?"' },
    { sec: 'Shopping', name: 'Question 6', pts: 1, text: '"What ______ are your shoes?" – "Size 30."', opts: o4('colour', 'size', 'name', 'age'), ans: 'B', why: 'We ask "What <b>size</b>...?" about shoes.' },
    { sec: 'Clothes', name: 'Question 7', pts: 1, text: 'Girls sometimes wear a ______. 👗', opts: o4('dress', 'tie', 'belt', 'boot'), ans: 'A', why: 'A <b>dress</b> is a piece of clothing.' },
    { sec: 'Shopping', name: 'Question 8', pts: 1, text: '"These trousers are too small. Can I have a ______ one?"', opts: o4('smaller', 'bigger', 'shorter', 'older'), ans: 'B', why: 'If they are too small we want a <b>bigger</b> one.' },
    { sec: 'Clothes', name: 'Question 9', pts: 1, text: 'The plural of "dress" is ______.', opts: o4('dress', 'dresss', 'dresses', 'dressies'), ans: 'C', why: 'Words ending in -ss add -es: <b>dresses</b>.' },
    { sec: 'Clothes', name: 'Question 10', pts: 1, text: '"I ______ a red shirt every Monday."', opts: o4('wear', 'wears', 'wearing', 'to wear'), ans: 'A', why: 'With <b>I</b> we use <b>wear</b>.' },
  ],
},

/* ═══════════ TEST 30 — GRAMMAR REVIEW ═══════════ */
{
  id: 7620, title: 'Test 30 · Grammar review', time: 20,
  questions: [
    { sec: 'Have got', name: 'Question 1', pts: 1, text: '"She ______ got a new bike."', opts: o4('has', 'have', 'is', 'are'), ans: 'A', why: 'With <b>she</b> we use <b>has</b> got.' },
    { sec: 'Have got', name: 'Question 2', pts: 1, text: '"I ______ got two brothers."', opts: o4('has', 'have', 'is', 'am'), ans: 'B', why: 'With <b>I</b> we use <b>have</b> got.' },
    { sec: 'Possessives', name: 'Question 3', pts: 1, text: '"This is ______ book, not yours."', opts: o4('me', 'I', 'my', 'mine'), ans: 'C', why: 'Before a noun we use <b>my</b>: my book.' },
    { sec: 'Present continuous', name: 'Question 4', pts: 1, text: '"The children ______ playing in the garden."', opts: o4('are', 'is', 'am', 'be'), ans: 'A', why: 'With <b>children</b> (they) we use <b>are</b>.' },
    { sec: 'Present continuous', name: 'Question 5', pts: 1, text: '"Look! It ______ raining."', opts: o4('are', 'is', 'am', 'be'), ans: 'B', why: 'With <b>it</b> we use <b>is</b>.' },
    { sec: 'Present simple', name: 'Question 6', pts: 1, text: '"______ he like maths?" – "Yes, he does."', opts: o4('Does', 'Do', 'Is', 'Are'), ans: 'A', why: 'With <b>he</b> we ask with <b>Does</b>.' },
    { sec: 'Plural', name: 'Question 7', pts: 1, text: '"There are five ______ in my class." (child)', opts: o4('childs', 'children', 'childrens', 'childes'), ans: 'B', why: '"Child" has an irregular plural: <b>children</b>.' },
    { sec: 'Comparatives', name: 'Question 8', pts: 1, text: '"My bag is ______ than your bag." (more big)', opts: o4('big', 'biggest', 'bigger', 'more big'), ans: 'C', why: 'The comparative of "big" is <b>bigger</b>.' },
    { sec: 'Comparatives', name: 'Question 9', pts: 1, text: '"Nam runs ______ than Tom." (more fast)', opts: o4('faster', 'fast', 'fastest', 'more fast'), ans: 'A', why: 'The comparative of "fast" is <b>faster</b>.' },
    { sec: 'Question words', name: 'Question 10', pts: 1, text: '"______ is the weather today?" – "It’s sunny."', opts: o4('How', 'Who', 'What', 'Where'), ans: 'A', why: 'We ask "<b>How</b> is the weather?"' },
  ],
},

];

SUBJECTS.push({
  id: 'tienganh4', name: 'Tiếng Anh', short: 'Tiếng Anh 4', icon: '🔤', grade: 4,
  exams: TA4_EXAMS, ready: true,
  heroTitle: 'Tiếng Anh lớp 4 — giới thiệu, gia đình, môn học, thời gian, sở thích và ngữ pháp cơ bản',
  heroMeta: '📚 30 đề &nbsp;•&nbsp; 300 câu &nbsp;•&nbsp; ⏱ 20 phút mỗi đề &nbsp;•&nbsp; không kèm bản dịch',
});
