// TIẾNG ANH — LỚP 4 (GDPT 2018)
// 10 đề × 10 câu = 100 câu. Mỗi câu 1 điểm — thang 10 — 20 phút mỗi đề.
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

];

SUBJECTS.push({
  id: 'tienganh4', name: 'Tiếng Anh', short: 'Tiếng Anh 4', icon: '🔤', grade: 4,
  exams: TA4_EXAMS, ready: true,
  heroTitle: 'Tiếng Anh lớp 4 — giới thiệu, gia đình, môn học, thời gian, sở thích và ngữ pháp cơ bản',
  heroMeta: '📚 10 đề &nbsp;•&nbsp; 100 câu &nbsp;•&nbsp; ⏱ 20 phút mỗi đề &nbsp;•&nbsp; không kèm bản dịch',
});
