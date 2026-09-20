// TIẾNG ANH — LỚP 4 (GDPT 2018)
// 52 đề × 10 câu = 520 câu. Mỗi câu 1 điểm — thang 10 — 20 phút mỗi đề.
//
// QUY TẮC: môn Tiếng Anh KHÔNG kèm bản dịch tiếng Việt — mọi phần viết bằng tiếng Anh.
// Chủ đề lớp 4: introductions, family & possessives, school subjects, numbers – time – days,
// hobbies (like + V-ing), can/can't, food & drink, weather & clothes, places & prepositions,
// và ôn tập ngữ pháp (to be, plural, present simple).

const R4A = '📖 <i><b>How rice is grown</b><br>Rice is the main food for most people in Vietnam. Farmers begin by soaking the seeds until they sprout. The young shoots are then planted by hand in fields that are flooded with water. The water helps the rice grow and keeps weeds down. After about four months the plants turn golden and the farmers harvest them, cutting the stalks and beating out the grain. The grain is dried in the sun before it is stored or sold.</i><br><br>';

const TA4_EXAMS = [

/* ═══════════ TEST 1 — INTRODUCTIONS ═══════════ */
{
  id: 6601, title: 'Test 1 · Nice to meet you', time: 20,
  questions: [
    { sec: 'Introductions', name: 'Question 1', pts: 1, text: '"What’s your name?" – "My name ______ Nam."', opts: o4('is', 'am', 'are', 'be'), ans: 'A', why: 'With <b>name</b> (it) we use <b>is</b>.' },
    { sec: 'Introductions', name: 'Question 2', pts: 1, text: '"How old are you?" – "I ______ nine years old."', opts: o4('am', 'is', 'are', 'be'), ans: 'A', why: 'With <b>I</b> we use <b>am</b>.' },
    { sec: 'Introductions', name: 'Question 3', pts: 1, text: '"______ are you from?" – "I’m from Vietnam."', opts: o4('Where', 'What', 'Who', 'When'), ans: 'A', why: 'We ask <b>Where are you from?</b> for a place.' },
    { sec: 'Introductions', name: 'Question 4', pts: 1, img: A + 'ta4/hello.svg', text: '"Nice to meet ______."', opts: o4('you', 'your', 'yours', 'me'), ans: 'A', why: 'We say <b>Nice to meet you</b>.' },
    { sec: 'Introductions', name: 'Question 5', pts: 1, text: '"Hello, ______ name is Mai."', opts: o4('my', 'I', 'me', 'mine'), ans: 'A', why: 'We say <b>my name</b> is Mai.' },
    { sec: 'Introductions', name: 'Question 6', pts: 1, text: '"How ______ you?" – "I’m fine, thank you."', opts: o4('are', 'is', 'am', 'do'), ans: 'A', why: 'We ask <b>How are you?</b>' },
    { sec: 'Introductions', name: 'Question 7', pts: 1, text: '"This is my friend. ______ name is Tom."', opts: o4('His', 'Her', 'My', 'Its'), ans: 'A', why: 'Tom is a boy, so we use <b>His</b> name.' },
    { sec: 'Introductions', name: 'Question 8', pts: 1, text: '"______ you a student?" – "Yes, I am."', opts: o4('Are', 'Is', 'Do', 'Am'), ans: 'A', why: 'For <b>you</b> we ask <b>Are you...?</b>' },
    { sec: 'Introductions', name: 'Question 9', pts: 1, text: 'When you leave, you can say: "______"', opts: o4('See you!', 'Hello!', 'Sorry!', 'Please!'), ans: 'A', why: 'To say goodbye we can say <b>See you</b> (or Bye).' },
    { sec: 'Introductions', name: 'Question 10', pts: 1, img: A + 'ta4/subjects.svg', text: '"What’s your ______ subject?" – "Maths."', opts: o4('favourite', 'colour', 'name', 'age'), ans: 'A', why: 'We ask about your <b>favourite</b> subject.' },
  ],
},

/* ═══════════ TEST 2 — MY FAMILY ═══════════ */
{
  id: 6602, title: 'Test 2 · Family and possessives', time: 20,
  questions: [
    { sec: 'Family', name: 'Question 1', pts: 1, img: A + 'ta4/grandma.svg', text: 'My mother’s mother is my ______.', opts: o4('grandmother', 'aunt', 'sister', 'cousin'), ans: 'A', why: 'Your mother’s mother is your <b>grandmother</b>.' },
    { sec: 'Family', name: 'Question 2', pts: 1, img: A + 'ta4/uncle.svg', text: 'My father’s brother is my ______.', opts: o4('uncle', 'aunt', 'father', 'cousin'), ans: 'A', why: 'Your father’s brother is your <b>uncle</b>.' },
    { sec: 'Family', name: 'Question 3', pts: 1, img: A + 'ta4/aunt.svg', text: 'My mother’s sister is my ______.', opts: o4('aunt', 'uncle', 'sister', 'mother'), ans: 'A', why: 'Your mother’s sister is your <b>aunt</b>.' },
    { sec: 'Possessives', name: 'Question 4', pts: 1, text: '"This is my sister. ______ name is Lan."', opts: o4('Her', 'His', 'My', 'Its'), ans: 'A', why: 'Lan is a girl, so we use <b>Her</b> name.' },
    { sec: 'Possessives', name: 'Question 5', pts: 1, img: A + 'ta4/dog.svg', text: '"That is Tom. ______ dog is big."', opts: o4('His', 'Her', 'Their', 'Its'), ans: 'A', why: 'Tom is a boy, so it is <b>His</b> dog.' },
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
    { sec: 'Subjects', name: 'Question 1', pts: 1, img: A + 'ta4/maths.svg', text: 'We study numbers and counting in ______.', opts: o4('Maths', 'Music', 'Art', 'PE'), ans: 'A', why: 'Numbers and counting are part of <b>Maths</b>.' },
    { sec: 'Subjects', name: 'Question 2', pts: 1, img: A + 'ta4/art.svg', text: 'We learn new English words in ______ class.', opts: o4('English', 'Maths', 'Art', 'Music'), ans: 'A', why: 'We learn English words in <b>English</b>.' },
    { sec: 'Subjects', name: 'Question 3', pts: 1, img: A + 'ta4/science.svg', text: 'We learn about plants and animals in ______.', opts: o4('Science', 'Maths', 'Music', 'PE'), ans: 'A', why: 'Plants and animals are part of <b>Science</b>.' },
    { sec: 'Subjects', name: 'Question 4', pts: 1, img: A + 'ta4/pe.svg', text: 'We draw and paint in ______.', opts: o4('Art', 'Maths', 'English', 'PE'), ans: 'A', why: 'We draw and paint in <b>Art</b>.' },
    { sec: 'Subjects', name: 'Question 5', pts: 1, img: A + 'ta4/music.svg', text: 'We run and play games in ______.', opts: o4('PE', 'Music', 'Maths', 'Art'), ans: 'A', why: 'We run and play in <b>PE</b> (Physical Education).' },
    { sec: 'Subjects', name: 'Question 6', pts: 1, text: 'We sing songs in ______.', opts: o4('Music', 'Maths', 'Science', 'PE'), ans: 'A', why: 'We sing in <b>Music</b>.' },
    { sec: 'School', name: 'Question 7', pts: 1, text: '"What ______ do you have today?" – "Maths and English."', opts: o4('subjects', 'colours', 'names', 'ages'), ans: 'A', why: 'We ask what <b>subjects</b> (lessons) you have.' },
    { sec: 'School', name: 'Question 8', pts: 1, text: 'The person who teaches you at school is a ______.', opts: o4('teacher', 'doctor', 'driver', 'farmer'), ans: 'A', why: 'A <b>teacher</b> teaches you.' },
    { sec: 'School', name: 'Question 9', pts: 1, text: '"Open your ______, please." (you read from it)', opts: o4('book', 'shoe', 'cup', 'car'), ans: 'A', why: 'We read from a <b>book</b>.' },
    { sec: 'Subjects', name: 'Question 10', pts: 1, img: A + 'ta4/timetable.svg', text: '"2 + 2 = 4" is part of the ______ lesson.', opts: o4('Maths', 'Music', 'Art', 'English'), ans: 'A', why: 'Adding numbers is <b>Maths</b>.' },
  ],
},

/* ═══════════ TEST 4 — NUMBERS, TIME AND DAYS ═══════════ */
{
  id: 6604, title: 'Test 4 · Numbers, time and days', time: 20,
  questions: [
    { sec: 'Numbers', name: 'Question 1', pts: 1, img: A + 'ta4/clock3.svg', text: 'eleven, twelve, ______, fourteen.', opts: o4('thirteen', 'thirty', 'ten', 'fifteen'), ans: 'A', why: 'After twelve comes <b>thirteen</b>.' },
    { sec: 'Numbers', name: 'Question 2', pts: 1, img: A + 'ta4/clock730.svg', text: 'The number 20 in words is ______.', opts: o4('twenty', 'twelve', 'two', 'twelfth'), ans: 'A', why: '20 is <b>twenty</b>.' },
    { sec: 'Time', name: 'Question 3', pts: 1, text: 'The clock shows 7:00. "It’s seven ______."', opts: o4('o’clock', 'thirty', 'half', 'past'), ans: 'A', why: 'At 7:00 we say seven <b>o’clock</b>.' },
    { sec: 'Days', name: 'Question 4', pts: 1, text: 'There are ______ days in a week.', opts: o4('seven', 'five', 'ten', 'twelve'), ans: 'A', why: 'A week has <b>seven</b> days.' },
    { sec: 'Days', name: 'Question 5', pts: 1, img: A + 'ta4/week.svg', text: 'The first school day of the week is usually ______.', opts: o4('Monday', 'Sunday', 'Friday', 'Saturday'), ans: 'A', why: 'The school week usually starts on <b>Monday</b>.' },
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
    { sec: 'Hobbies', name: 'Question 1', pts: 1, img: A + 'ta4/read.svg', text: '"I like ______ football."', opts: o4('playing', 'play', 'plays', 'played'), ans: 'A', why: 'After <b>like</b> we often use verb + -ing: <b>playing</b>.' },
    { sec: 'Hobbies', name: 'Question 2', pts: 1, img: A + 'ta4/swim.svg', text: '"She likes ______ books."', opts: o4('reading', 'read', 'reads', 'to reads'), ans: 'A', why: 'like + <b>reading</b>.' },
    { sec: 'Hobbies', name: 'Question 3', pts: 1, img: A + 'ta4/sing.svg', text: '"What’s your hobby?" – "I like ______."', opts: o4('drawing', 'table', 'blue', 'desk'), ans: 'A', why: '<b>Drawing</b> is a hobby.' },
    { sec: 'Hobbies', name: 'Question 4', pts: 1, text: '"Do you like swimming?" – "Yes, I ______."', opts: o4('do', 'am', 'like', 'yes'), ans: 'A', why: 'Short answer to <b>Do you...?</b> is Yes, I <b>do</b>.' },
    { sec: 'Hobbies', name: 'Question 5', pts: 1, img: A + 'ta4/football.svg', text: '"He likes ______ to music."', opts: o4('listening', 'listen', 'listens', 'to listens'), ans: 'A', why: 'like + <b>listening</b> to music.' },
    { sec: 'Hobbies', name: 'Question 6', pts: 1, text: 'A person who paints pictures likes ______.', opts: o4('painting', 'running', 'cooking', 'sleeping'), ans: 'A', why: 'Someone who paints likes <b>painting</b>.' },
    { sec: 'Hobbies', name: 'Question 7', pts: 1, text: '"They like ______ bikes in the park."', opts: o4('riding', 'ride', 'rides', 'rode'), ans: 'A', why: 'like + <b>riding</b> bikes.' },
    { sec: 'Hobbies', name: 'Question 8', pts: 1, img: A + 'ta4/dance.svg', text: '"I don’t like ______ up early."', opts: o4('getting', 'get', 'gets', 'got'), ans: 'A', why: 'like/don’t like + <b>getting</b> up.' },
    { sec: 'Hobbies', name: 'Question 9', pts: 1, text: '"We like ______ TV in the evening."', opts: o4('watching', 'watch', 'watches', 'watched'), ans: 'A', why: 'like + <b>watching</b> TV.' },
    { sec: 'Grammar', name: 'Question 10', pts: 1, text: '"She ______ dancing."', opts: o4('likes', 'like', 'liking', 'to like'), ans: 'A', why: 'With <b>she</b> we add -s: she <b>likes</b>.' },
  ],
},

/* ═══════════ TEST 6 — CAN AND CAN'T ═══════════ */
{
  id: 6606, title: 'Test 6 · Can and can’t', time: 20,
  questions: [
    { sec: 'Can', name: 'Question 1', pts: 1, img: A + 'ta4/swim.svg', text: '"I ______ swim." (I am able to)', opts: o4('can', 'am', 'do', 'is'), ans: 'A', why: 'For ability we use <b>can</b>.' },
    { sec: 'Can', name: 'Question 2', pts: 1, text: '"A fish can ______."', opts: o4('swim', 'fly', 'walk', 'drive'), ans: 'A', why: 'A fish can <b>swim</b>.' },
    { sec: 'Can', name: 'Question 3', pts: 1, img: A + 'ta4/bike.svg', text: '"A bird can ______."', opts: o4('fly', 'swim only', 'read', 'cook'), ans: 'A', why: 'A bird can <b>fly</b>.' },
    { sec: 'Can', name: 'Question 4', pts: 1, text: '"______ you ride a bike?" – "Yes, I can."', opts: o4('Can', 'Do', 'Are', 'Is'), ans: 'A', why: 'For ability questions we start with <b>Can</b>.' },
    { sec: "Can't", name: 'Question 5', pts: 1, img: A + 'ta4/cook.svg', text: '"A baby ______ walk yet." (not able)', opts: o4('can’t', 'can', 'do', 'is'), ans: 'A', why: 'Not able = <b>can’t</b> (cannot).' },
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
    { sec: 'Grammar', name: 'Question 1', pts: 1, img: A + 'ta4/apple.svg', text: '"I would like ______ apple."', opts: o4('an', 'a', 'the two', 'some a'), ans: 'A', why: 'Before a vowel sound we use <b>an</b>: an apple.' },
    { sec: 'Food', name: 'Question 2', pts: 1, img: A + 'ta4/milk.svg', text: '"There is some ______ in the glass." 🥛', opts: o4('milk', 'bread', 'rice', 'apple'), ans: 'A', why: 'You drink <b>milk</b> from a glass.' },
    { sec: 'Grammar', name: 'Question 3', pts: 1, img: A + 'ta4/rice.svg', text: '"How ______ apples are there?" (we can count them)', opts: o4('many', 'much', 'old', 'long'), ans: 'A', why: 'With countable nouns we use <b>many</b>.' },
    { sec: 'Grammar', name: 'Question 4', pts: 1, text: '"How ______ water do you want?" (we cannot count it)', opts: o4('much', 'many', 'old', 'tall'), ans: 'A', why: 'With uncountable nouns we use <b>much</b>.' },
    { sec: 'Grammar', name: 'Question 5', pts: 1, img: A + 'ta4/carrot.svg', text: '"I have two ______."', opts: o4('apples', 'apple', 'applies', 'apple’s'), ans: 'A', why: 'After two we use the plural: two <b>apples</b>.' },
    { sec: 'Drink', name: 'Question 6', pts: 1, text: 'Which one is a drink?', opts: o4('juice', 'bread', 'rice', 'cake'), ans: 'A', why: '<b>Juice</b> is a drink.' },
    { sec: 'Food', name: 'Question 7', pts: 1, text: 'An orange is a ______.', opts: o4('fruit', 'drink', 'toy', 'colour'), ans: 'A', why: 'An orange is a <b>fruit</b>.' },
    { sec: 'Food', name: 'Question 8', pts: 1, img: A + 'ta4/juice.svg', text: '"Do you like ice cream?" – "Yes, I ______ it."', opts: o4('love', 'am', 'does', 'is'), ans: 'A', why: 'We can say I <b>love</b> it.' },
    { sec: 'Meals', name: 'Question 9', pts: 1, text: 'We eat ______ at noon (in the middle of the day).', opts: o4('lunch', 'breakfast', 'dinner', 'water'), ans: 'A', why: 'The midday meal is <b>lunch</b>.' },
    { sec: 'Food', name: 'Question 10', pts: 1, text: '"Please give me a ______ of water."', opts: o4('glass', 'book', 'shoe', 'chair'), ans: 'A', why: 'We drink from a <b>glass</b> of water.' },
  ],
},

/* ═══════════ TEST 8 — WEATHER AND CLOTHES ═══════════ */
{
  id: 6608, title: 'Test 8 · Weather and clothes', time: 20,
  questions: [
    { sec: 'Weather', name: 'Question 1', pts: 1, img: A + 'ta4/sunny.svg', text: '"How’s the weather?" – "It’s ______." ☀', opts: o4('sunny', 'rainy', 'snowy', 'windy'), ans: 'A', why: 'With the sun it is <b>sunny</b>.' },
    { sec: 'Weather', name: 'Question 2', pts: 1, img: A + 'ta4/rainy.svg', text: '"It’s ______." 🌧', opts: o4('rainy', 'sunny', 'snowy', 'hot'), ans: 'A', why: 'With rain it is <b>rainy</b>.' },
    { sec: 'Weather', name: 'Question 3', pts: 1, img: A + 'ta4/snowy.svg', text: 'In winter it is usually ______.', opts: o4('cold', 'hot', 'sunny', 'dry'), ans: 'A', why: 'Winter is usually <b>cold</b>.' },
    { sec: 'Weather', name: 'Question 4', pts: 1, text: 'In summer it is usually ______.', opts: o4('hot', 'cold', 'snowy', 'freezing'), ans: 'A', why: 'Summer is usually <b>hot</b>.' },
    { sec: 'Clothes', name: 'Question 5', pts: 1, img: A + 'ta4/coat.svg', text: 'When it rains, take an ______.', opts: o4('umbrella', 'apple', 'orange', 'egg'), ans: 'A', why: 'In the rain we use an <b>umbrella</b>.' },
    { sec: 'Clothes', name: 'Question 6', pts: 1, text: 'When it’s cold, wear a ______.', opts: o4('coat', 'shorts', 'sandal', 'cap only'), ans: 'A', why: 'When cold we wear a warm <b>coat</b>.' },
    { sec: 'Clothes', name: 'Question 7', pts: 1, text: 'On your feet you wear ______.', opts: o4('shoes', 'a hat', 'gloves', 'a scarf'), ans: 'A', why: 'On our feet we wear <b>shoes</b>.' },
    { sec: 'Weather', name: 'Question 8', pts: 1, img: A + 'ta4/shoes.svg', text: '"It’s ______." ❄', opts: o4('snowy', 'sunny', 'hot', 'dry'), ans: 'A', why: 'With snow it is <b>snowy</b>.' },
    { sec: 'Weather', name: 'Question 9', pts: 1, text: '"What’s the ______ like today?" – "It’s sunny."', opts: o4('weather', 'family', 'school', 'colour'), ans: 'A', why: 'We ask about the <b>weather</b>.' },
    { sec: 'Clothes', name: 'Question 10', pts: 1, text: 'In hot, sunny weather you wear a ______ on your head.', opts: o4('hat', 'coat', 'boot', 'scarf'), ans: 'A', why: 'In the sun we wear a <b>hat</b>.' },
  ],
},

/* ═══════════ TEST 9 — PLACES AND PREPOSITIONS ═══════════ */
{
  id: 6609, title: 'Test 9 · Places and prepositions', time: 20,
  questions: [
    { sec: 'Places', name: 'Question 1', pts: 1, img: A + 'ta4/on.svg', text: 'You borrow books from the ______.', opts: o4('library', 'kitchen', 'garden', 'beach'), ans: 'A', why: 'We borrow books from the <b>library</b>.' },
    { sec: 'Places', name: 'Question 2', pts: 1, img: A + 'ta4/in.svg', text: 'You buy food at the ______.', opts: o4('supermarket', 'library', 'hospital', 'cinema'), ans: 'A', why: 'We buy food at the <b>supermarket</b>.' },
    { sec: 'Places', name: 'Question 3', pts: 1, img: A + 'ta4/under.svg', text: 'You watch a film at the ______.', opts: o4('cinema', 'library', 'market', 'school'), ans: 'A', why: 'We watch films at the <b>cinema</b>.' },
    { sec: 'Places', name: 'Question 4', pts: 1, text: 'Sick people go to the ______.', opts: o4('hospital', 'park', 'zoo', 'shop'), ans: 'A', why: 'Sick people go to the <b>hospital</b>.' },
    { sec: 'Prepositions', name: 'Question 5', pts: 1, img: A + 'ta4/behind.svg', text: '"The cat is ______ the box." (inside)', opts: o4('in', 'on', 'under', 'next'), ans: 'A', why: 'Inside the box = <b>in</b> the box.' },
    { sec: 'Prepositions', name: 'Question 6', pts: 1, text: '"The book is ______ the table." (on top of it)', opts: o4('on', 'in', 'under', 'behind'), ans: 'A', why: 'On top of the table = <b>on</b> the table.' },
    { sec: 'Prepositions', name: 'Question 7', pts: 1, text: '"The ball is ______ the chair." (below it)', opts: o4('under', 'on', 'in', 'next'), ans: 'A', why: 'Below the chair = <b>under</b> the chair.' },
    { sec: 'Places', name: 'Question 8', pts: 1, img: A + 'ta4/between.svg', text: 'You learn and study at ______.', opts: o4('school', 'the beach', 'the cinema', 'the zoo'), ans: 'A', why: 'We study at <b>school</b>.' },
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
    { sec: 'Plural', name: 'Question 4', pts: 1, img: A + 'ta4/two_books.svg', text: 'The plural of "book" is ______.', opts: o4('books', 'book', 'bookes', 'books’'), ans: 'A', why: 'Add -s: <b>books</b>.' },
    { sec: 'Plural', name: 'Question 5', pts: 1, text: 'The plural of "box" is ______.', opts: o4('boxes', 'boxs', 'box', 'boxies'), ans: 'A', why: 'Words ending in -x add -es: <b>boxes</b>.' },
    { sec: 'Demonstratives', name: 'Question 6', pts: 1, text: '"______ is my pen." (one thing near me)', opts: o4('This', 'These', 'Those', 'They'), ans: 'A', why: 'For one near thing we use <b>This</b>.' },
    { sec: 'Demonstratives', name: 'Question 7', pts: 1, text: '"______ are my pens." (many things near me)', opts: o4('These', 'This', 'That', 'It'), ans: 'A', why: 'For many near things we use <b>These</b>.' },
    { sec: 'Present simple', name: 'Question 8', pts: 1, img: A + 'ta4/big_small.svg', text: '"I ______ apples." (I enjoy them)', opts: o4('like', 'likes', 'liking', 'to like'), ans: 'A', why: 'With <b>I</b> we use <b>like</b>.' },
    { sec: 'Present simple', name: 'Question 9', pts: 1, text: '"He ______ football every day."', opts: o4('plays', 'play', 'playing', 'to play'), ans: 'A', why: 'With <b>he</b> we add -s: <b>plays</b>.' },
    { sec: 'Present simple', name: 'Question 10', pts: 1, text: '"______ you like tea?"', opts: o4('Do', 'Does', 'Are', 'Is'), ans: 'A', why: 'For <b>you</b> in the present simple question we use <b>Do</b>.' },
  ],
},

/* ═══════════ TEST 11 — ANIMALS ═══════════ */
{
  id: 7601, title: 'Test 11 · Animals', time: 20,
  questions: [
    { sec: 'Animals', name: 'Question 1', pts: 1, img: A + 'ta4/cow.svg', text: 'An ______ is a very big grey animal with a long trunk. 🐘', opts: o4('tiger', 'elephant', 'mouse', 'ant'), ans: 'B', why: 'The big grey animal with a trunk is an <b>elephant</b>.' },
    { sec: 'Animals', name: 'Question 2', pts: 1, img: A + 'ta4/bird.svg', text: 'A ______ says "moo" and gives us milk. 🐄', opts: o4('duck', 'cat', 'cow', 'hen'), ans: 'C', why: 'A <b>cow</b> gives us milk and says "moo".' },
    { sec: 'Animals', name: 'Question 3', pts: 1, img: A + 'ta4/fish.svg', text: 'The ______ is the king of the jungle. 🦁', opts: o4('lion', 'fish', 'rabbit', 'bee'), ans: 'A', why: 'The <b>lion</b> is called the king of the jungle.' },
    { sec: 'Animals', name: 'Question 4', pts: 1, text: 'A baby dog is called a ______.', opts: o4('kitten', 'puppy', 'calf', 'foal'), ans: 'B', why: 'A baby dog is a <b>puppy</b>.' },
    { sec: 'Animals', name: 'Question 5', pts: 1, img: A + 'ta4/tiger.svg', text: 'Which animal can fly? 🦅', opts: o4('shark', 'snake', 'eagle', 'horse'), ans: 'C', why: 'An <b>eagle</b> is a bird, so it can fly.' },
    { sec: 'Animals', name: 'Question 6', pts: 1, text: 'A ______ lives in water and has no legs. 🐟', opts: o4('cow', 'dog', 'tiger', 'fish'), ans: 'D', why: 'A <b>fish</b> lives in water and swims with fins.' },
    { sec: 'Animals', name: 'Question 7', pts: 1, text: 'Bees make ______. 🐝', opts: o4('milk', 'honey', 'eggs', 'bread'), ans: 'B', why: 'Bees make <b>honey</b>.' },
    { sec: 'Animals', name: 'Question 8', pts: 1, img: A + 'ta4/elephant.svg', text: 'A ______ has a very long neck. 🦒', opts: o4('giraffe', 'pig', 'duck', 'cat'), ans: 'A', why: 'A <b>giraffe</b> has a long neck.' },
    { sec: 'Animals', name: 'Question 9', pts: 1, text: 'Which one is a farm animal?', opts: o4('lion', 'tiger', 'pig', 'shark'), ans: 'C', why: 'A <b>pig</b> lives on a farm.' },
    { sec: 'Animals', name: 'Question 10', pts: 1, text: 'The plural of "mouse" is ______.', opts: o4('mouses', 'mice', 'mouse', 'mices'), ans: 'B', why: '"Mouse" has an irregular plural: <b>mice</b>.' },
  ],
},

/* ═══════════ TEST 12 — JOBS ═══════════ */
{
  id: 7602, title: 'Test 12 · Jobs', time: 20,
  questions: [
    { sec: 'Jobs', name: 'Question 1', pts: 1, img: A + 'ta4/doctor.svg', text: 'A person who teaches children is a ______.', opts: o4('doctor', 'teacher', 'farmer', 'pilot'), ans: 'B', why: 'A <b>teacher</b> teaches children.' },
    { sec: 'Jobs', name: 'Question 2', pts: 1, img: A + 'ta4/farmer.svg', text: 'A ______ helps sick people. 🩺', opts: o4('doctor', 'driver', 'cook', 'singer'), ans: 'A', why: 'A <b>doctor</b> helps sick people.' },
    { sec: 'Jobs', name: 'Question 3', pts: 1, img: A + 'ta4/pilot.svg', text: 'A ______ flies a plane. ✈', opts: o4('sailor', 'pilot', 'nurse', 'baker'), ans: 'B', why: 'A <b>pilot</b> flies a plane.' },
    { sec: 'Jobs', name: 'Question 4', pts: 1, text: 'A person who cooks food in a restaurant is a ______.', opts: o4('nurse', 'pilot', 'cook', 'driver'), ans: 'C', why: 'A <b>cook</b> makes food in a restaurant.' },
    { sec: 'Jobs', name: 'Question 5', pts: 1, img: A + 'ta4/teacher.svg', text: 'A ______ grows food on a farm. 🌾', opts: o4('farmer', 'doctor', 'singer', 'pilot'), ans: 'A', why: 'A <b>farmer</b> grows food on a farm.' },
    { sec: 'Jobs', name: 'Question 6', pts: 1, text: 'A ______ drives a bus or a taxi. 🚕', opts: o4('baker', 'nurse', 'artist', 'driver'), ans: 'D', why: 'A <b>driver</b> drives a bus or taxi.' },
    { sec: 'Jobs', name: 'Question 7', pts: 1, text: 'A ______ puts out fires. 🚒', opts: o4('firefighter', 'farmer', 'waiter', 'clerk'), ans: 'A', why: 'A <b>firefighter</b> puts out fires.' },
    { sec: 'Jobs', name: 'Question 8', pts: 1, img: A + 'ta4/baker.svg', text: 'A ______ takes care of your teeth. 🦷', opts: o4('nurse', 'dentist', 'pilot', 'driver'), ans: 'B', why: 'A <b>dentist</b> looks after your teeth.' },
    { sec: 'Jobs', name: 'Question 9', pts: 1, text: 'What does a ______ do? — She sings songs. 🎤', opts: o4('singer', 'baker', 'farmer', 'doctor'), ans: 'A', why: 'A <b>singer</b> sings songs.' },
    { sec: 'Jobs', name: 'Question 10', pts: 1, text: '"What ______ your father do?" – "He is an engineer."', opts: o4('do', 'does', 'is', 'are'), ans: 'B', why: 'With <b>your father</b> (he) we use <b>does</b>.' },
  ],
},

/* ═══════════ TEST 13 — THE BODY ═══════════ */
{
  id: 7603, title: 'Test 13 · The body', time: 20,
  questions: [
    { sec: 'Body', name: 'Question 1', pts: 1, img: A + 'ta4/eyes.svg', text: 'You see with your ______. 👀', opts: o4('ears', 'eyes', 'nose', 'feet'), ans: 'B', why: 'We see with our <b>eyes</b>.' },
    { sec: 'Body', name: 'Question 2', pts: 1, img: A + 'ta4/ear.svg', text: 'You hear with your ______. 👂', opts: o4('ears', 'eyes', 'hands', 'legs'), ans: 'A', why: 'We hear with our <b>ears</b>.' },
    { sec: 'Body', name: 'Question 3', pts: 1, img: A + 'ta4/nose.svg', text: 'You smell with your ______. 👃', opts: o4('mouth', 'nose', 'hair', 'arm'), ans: 'B', why: 'We smell with our <b>nose</b>.' },
    { sec: 'Body', name: 'Question 4', pts: 1, text: 'You walk with your ______.', opts: o4('legs', 'ears', 'eyes', 'nose'), ans: 'A', why: 'We walk with our <b>legs</b>.' },
    { sec: 'Body', name: 'Question 5', pts: 1, img: A + 'ta4/hand.svg', text: 'You have ten ______ on your two hands. ✋', opts: o4('toes', 'fingers', 'teeth', 'ears'), ans: 'B', why: 'We have ten <b>fingers</b>.' },
    { sec: 'Body', name: 'Question 6', pts: 1, text: 'The plural of "foot" is ______.', opts: o4('foots', 'feets', 'feet', 'footes'), ans: 'C', why: '"Foot" has an irregular plural: <b>feet</b>.' },
    { sec: 'Body', name: 'Question 7', pts: 1, text: 'The plural of "tooth" is ______.', opts: o4('tooths', 'teeth', 'toothes', 'teeths'), ans: 'B', why: '"Tooth" has an irregular plural: <b>teeth</b>.' },
    { sec: 'Body', name: 'Question 8', pts: 1, img: A + 'ta4/leg.svg', text: 'You clap with your ______. 👏', opts: o4('hands', 'feet', 'eyes', 'ears'), ans: 'A', why: 'We clap with our <b>hands</b>.' },
    { sec: 'Body', name: 'Question 9', pts: 1, text: 'Your ______ helps you think.', opts: o4('arm', 'toe', 'brain', 'knee'), ans: 'C', why: 'We think with our <b>brain</b>.' },
    { sec: 'Body', name: 'Question 10', pts: 1, text: '"How many eyes do you have?" – "I have ______."', opts: o4('one', 'two', 'ten', 'five'), ans: 'B', why: 'We have <b>two</b> eyes.' },
  ],
},

/* ═══════════ TEST 14 — HOUSE AND ROOMS ═══════════ */
{
  id: 7604, title: 'Test 14 · House and rooms', time: 20,
  questions: [
    { sec: 'House', name: 'Question 1', pts: 1, img: A + 'ta4/house.svg', text: 'We cook food in the ______. 🍳', opts: o4('bedroom', 'kitchen', 'garden', 'garage'), ans: 'B', why: 'We cook in the <b>kitchen</b>.' },
    { sec: 'House', name: 'Question 2', pts: 1, img: A + 'ta4/kitchen.svg', text: 'We sleep in the ______. 🛏', opts: o4('bedroom', 'kitchen', 'bathroom', 'hall'), ans: 'A', why: 'We sleep in the <b>bedroom</b>.' },
    { sec: 'House', name: 'Question 3', pts: 1, img: A + 'ta4/bed.svg', text: 'We wash our hands in the ______. 🛁', opts: o4('kitchen', 'bathroom', 'bedroom', 'garden'), ans: 'B', why: 'We wash in the <b>bathroom</b>.' },
    { sec: 'House', name: 'Question 4', pts: 1, text: 'We watch TV in the ______. 📺', opts: o4('living room', 'bathroom', 'garage', 'roof'), ans: 'A', why: 'We watch TV in the <b>living room</b>.' },
    { sec: 'House', name: 'Question 5', pts: 1, img: A + 'ta4/bath.svg', text: 'We park the car in the ______. 🚗', opts: o4('kitchen', 'garden', 'garage', 'bedroom'), ans: 'C', why: 'We park the car in the <b>garage</b>.' },
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
    { sec: 'Sports', name: 'Question 1', pts: 1, img: A + 'ta4/football.svg', text: 'We play ______ with a round ball and two goals. ⚽', opts: o4('football', 'chess', 'swimming', 'running'), ans: 'A', why: 'The game with a ball and two goals is <b>football</b>.' },
    { sec: 'Sports', name: 'Question 2', pts: 1, img: A + 'ta4/swim.svg', text: 'In ______ you move in the water. 🏊', opts: o4('cycling', 'swimming', 'tennis', 'boxing'), ans: 'B', why: 'In <b>swimming</b> you are in the water.' },
    { sec: 'Sports', name: 'Question 3', pts: 1, img: A + 'ta4/tennis.svg', text: 'We hit a small ball over a net with a racket in ______. 🎾', opts: o4('football', 'running', 'tennis', 'judo'), ans: 'C', why: 'We use a racket in <b>tennis</b>.' },
    { sec: 'Sports', name: 'Question 4', pts: 1, text: 'We ride a bike in ______. 🚴', opts: o4('fishing', 'cycling', 'reading', 'cooking'), ans: 'B', why: 'Riding a bike is <b>cycling</b>.' },
    { sec: 'Sports', name: 'Question 5', pts: 1, img: A + 'ta4/run.svg', text: '"Can you play ______? You shoot the ball into a high basket." 🏀', opts: o4('basketball', 'chess', 'swimming', 'singing'), ans: 'A', why: 'The ball goes into a basket in <b>basketball</b>.' },
    { sec: 'Sports', name: 'Question 6', pts: 1, text: 'A person who plays sport is a ______.', opts: o4('farmer', 'player', 'doctor', 'singer'), ans: 'B', why: 'A <b>player</b> plays sport.' },
    { sec: 'Sports', name: 'Question 7', pts: 1, text: 'We use a ______ to hit the ball in tennis.', opts: o4('bat', 'racket', 'net', 'goal'), ans: 'B', why: 'In tennis we use a <b>racket</b>.' },
    { sec: 'Sports', name: 'Question 8', pts: 1, img: A + 'ta4/basketball.svg', text: '"I ______ swim very well." (I am able to)', opts: o4('can', 'am', 'do', 'is'), ans: 'A', why: 'For ability we use <b>can</b>.' },
    { sec: 'Sports', name: 'Question 9', pts: 1, text: 'Doing sport is good for your ______.', opts: o4('shoe', 'book', 'health', 'car'), ans: 'C', why: 'Sport is good for our <b>health</b>.' },
    { sec: 'Sports', name: 'Question 10', pts: 1, text: '"They ______ football on Sundays."', opts: o4('play', 'plays', 'playing', 'to play'), ans: 'A', why: 'With <b>they</b> we use <b>play</b>.' },
  ],
},

/* ═══════════ TEST 16 — TRANSPORT ═══════════ */
{
  id: 7606, title: 'Test 16 · Transport', time: 20,
  questions: [
    { sec: 'Transport', name: 'Question 1', pts: 1, img: A + 'ta4/bus.svg', text: 'We fly in a ______. ✈', opts: o4('plane', 'car', 'boat', 'bike'), ans: 'A', why: 'We fly in a <b>plane</b>.' },
    { sec: 'Transport', name: 'Question 2', pts: 1, img: A + 'ta4/bike.svg', text: 'We sail on the water in a ______. ⛵', opts: o4('bus', 'boat', 'train', 'plane'), ans: 'B', why: 'We sail in a <b>boat</b>.' },
    { sec: 'Transport', name: 'Question 3', pts: 1, img: A + 'ta4/plane.svg', text: 'A ______ runs on rails. 🚆', opts: o4('car', 'train', 'bike', 'ship'), ans: 'B', why: 'A <b>train</b> runs on rails.' },
    { sec: 'Transport', name: 'Question 4', pts: 1, text: 'Many people ride together in a ______. 🚌', opts: o4('bike', 'bus', 'car', 'boat'), ans: 'B', why: 'A <b>bus</b> carries many people.' },
    { sec: 'Transport', name: 'Question 5', pts: 1, img: A + 'ta4/train.svg', text: 'You pedal a ______ with two wheels. 🚲', opts: o4('plane', 'ship', 'bicycle', 'train'), ans: 'C', why: 'A <b>bicycle</b> has two wheels and pedals.' },
    { sec: 'Transport', name: 'Question 6', pts: 1, text: '"How do you go to school?" – "I go ______ bus."', opts: o4('by', 'in', 'at', 'on'), ans: 'A', why: 'We say go <b>by</b> bus.' },
    { sec: 'Transport', name: 'Question 7', pts: 1, text: '"I go to school ______ foot." (I walk)', opts: o4('by', 'on', 'in', 'at'), ans: 'B', why: 'We say <b>on</b> foot when we walk.' },
    { sec: 'Transport', name: 'Question 8', pts: 1, img: A + 'ta4/boat.svg', text: 'A ______ takes sick people to hospital quickly. 🚑', opts: o4('taxi', 'ship', 'ambulance', 'plane'), ans: 'C', why: 'An <b>ambulance</b> takes people to hospital.' },
    { sec: 'Transport', name: 'Question 9', pts: 1, text: 'The plural of "bus" is ______.', opts: o4('buss', 'buses', 'busies', 'bus'), ans: 'B', why: 'Words ending in -s add -es: <b>buses</b>.' },
    { sec: 'Transport', name: 'Question 10', pts: 1, text: '"The plane is ______ the sky."', opts: o4('in', 'on', 'under', 'next'), ans: 'A', why: 'We say <b>in</b> the sky.' },
  ],
},

/* ═══════════ TEST 17 — THERE IS / THERE ARE ═══════════ */
{
  id: 7607, title: 'Test 17 · There is and there are', time: 20,
  questions: [
    { sec: 'There is/are', name: 'Question 1', pts: 1, img: A + 'ta4/one_cat.svg', text: '"There ______ a book on the desk."', opts: o4('is', 'are', 'am', 'be'), ans: 'A', why: 'One book (singular) → <b>is</b>.' },
    { sec: 'There is/are', name: 'Question 2', pts: 1, text: '"There ______ three cats in the garden."', opts: o4('is', 'are', 'am', 'be'), ans: 'B', why: 'Three cats (plural) → <b>are</b>.' },
    { sec: 'There is/are', name: 'Question 3', pts: 1, img: A + 'ta4/three_apples.svg', text: '"______ there any milk?" – "Yes, there is."', opts: o4('Is', 'Are', 'Am', 'Do'), ans: 'A', why: 'Milk is uncountable (singular) → <b>Is</b> there...?' },
    { sec: 'There is/are', name: 'Question 4', pts: 1, text: '"______ there many students?" – "Yes, there are."', opts: o4('Is', 'Are', 'Am', 'Does'), ans: 'B', why: 'Many students (plural) → <b>Are</b> there...?' },
    { sec: 'There is/are', name: 'Question 5', pts: 1, text: '"There ______ some water in the bottle."', opts: o4('are', 'am', 'is', 'were'), ans: 'C', why: 'Water is uncountable → <b>is</b>.' },
    { sec: 'There is/are', name: 'Question 6', pts: 1, img: A + 'ta4/five_books.svg', text: '"There ______ four windows in the room."', opts: o4('is', 'are', 'am', 'be'), ans: 'B', why: 'Four windows (plural) → <b>are</b>.' },
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
    { sec: 'Question words', name: 'Question 1', pts: 1, img: A + 'ta4/clock3.svg', text: '"______ is your teacher?" – "Mrs Lan."', opts: o4('Who', 'What', 'Where', 'When'), ans: 'A', why: 'We ask about a person with <b>Who</b>.' },
    { sec: 'Question words', name: 'Question 2', pts: 1, text: '"______ do you live?" – "In Hanoi."', opts: o4('When', 'Where', 'What', 'Who'), ans: 'B', why: 'We ask about a place with <b>Where</b>.' },
    { sec: 'Question words', name: 'Question 3', pts: 1, text: '"______ is your birthday?" – "In May."', opts: o4('Where', 'Who', 'When', 'What'), ans: 'C', why: 'We ask about time with <b>When</b>.' },
    { sec: 'Question words', name: 'Question 4', pts: 1, text: '"______ colour is your bag?" – "It’s red."', opts: o4('What', 'Who', 'When', 'Why'), ans: 'A', why: 'We ask "<b>What</b> colour...?"' },
    { sec: 'Question words', name: 'Question 5', pts: 1, img: A + 'ta4/house.svg', text: '"______ are you sad?" – "Because I lost my pen."', opts: o4('What', 'Why', 'Who', 'Where'), ans: 'B', why: 'We ask for a reason with <b>Why</b> (answer with "because").' },
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
    { sec: 'Adverbs', name: 'Question 1', pts: 1, img: A + 'ta4/week.svg', text: '"I ______ brush my teeth every day." (100% of the time)', opts: o4('always', 'never', 'sometimes', 'rarely'), ans: 'A', why: '100% of the time is <b>always</b>.' },
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
    { sec: 'Demonstratives', name: 'Question 1', pts: 1, img: A + 'ta4/two_books.svg', text: '"______ is my pen." (one thing near me)', opts: o4('This', 'These', 'Those', 'They'), ans: 'A', why: 'One near thing → <b>This</b>.' },
    { sec: 'Demonstratives', name: 'Question 2', pts: 1, text: '"______ are my books." (many things near me)', opts: o4('This', 'These', 'That', 'It'), ans: 'B', why: 'Many near things → <b>These</b>.' },
    { sec: 'Demonstratives', name: 'Question 3', pts: 1, text: '"______ is your house over there." (one thing far)', opts: o4('This', 'That', 'These', 'Those'), ans: 'B', why: 'One far thing → <b>That</b>.' },
    { sec: 'Demonstratives', name: 'Question 4', pts: 1, text: '"______ are birds in the sky." (many things far)', opts: o4('These', 'This', 'Those', 'That'), ans: 'C', why: 'Many far things → <b>Those</b>.' },
    { sec: 'Demonstratives', name: 'Question 5', pts: 1, img: A + 'ta4/three_apples.svg', text: '"Are ______ your shoes?" (near me, plural)', opts: o4('these', 'this', 'that', 'it'), ans: 'A', why: 'Near and plural → <b>these</b>.' },
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
    { sec: 'Prepositions', name: 'Question 1', pts: 1, img: A + 'ta4/on.svg', text: '"The cat is ______ the table." (below it) 🐱', opts: o4('under', 'on', 'in', 'next'), ans: 'A', why: 'Below the table → <b>under</b>.' },
    { sec: 'Prepositions', name: 'Question 2', pts: 1, img: A + 'ta4/in.svg', text: '"The lamp is ______ the desk." (on top of it)', opts: o4('in', 'on', 'under', 'behind'), ans: 'B', why: 'On top of the desk → <b>on</b>.' },
    { sec: 'Prepositions', name: 'Question 3', pts: 1, img: A + 'ta4/under.svg', text: '"The pen is ______ the box." (inside it)', opts: o4('on', 'in', 'under', 'over'), ans: 'B', why: 'Inside the box → <b>in</b>.' },
    { sec: 'Prepositions', name: 'Question 4', pts: 1, text: '"The tree is ______ the house." (at the back)', opts: o4('behind', 'on', 'in', 'under'), ans: 'A', why: 'At the back → <b>behind</b>.' },
    { sec: 'Prepositions', name: 'Question 5', pts: 1, img: A + 'ta4/above.svg', text: '"The car is ______ the house." (at the front)', opts: o4('on', 'inside', 'in front of', 'under'), ans: 'C', why: 'At the front → <b>in front of</b>.' },
    { sec: 'Prepositions', name: 'Question 6', pts: 1, text: '"The bank is ______ to the school." (beside it)', opts: o4('on', 'next', 'in', 'under'), ans: 'B', why: 'Beside something → <b>next</b> to.' },
    { sec: 'Prepositions', name: 'Question 7', pts: 1, text: '"The bird is ______ the tree." (up in it) 🐦', opts: o4('in', 'under', 'behind', 'below'), ans: 'A', why: 'Up in the tree → <b>in</b>.' },
    { sec: 'Prepositions', name: 'Question 8', pts: 1, img: A + 'ta4/nextto.svg', text: '"The bridge is ______ the river." (across, above it)', opts: o4('in', 'next', 'over', 'inside'), ans: 'C', why: 'Across and above → <b>over</b>.' },
    { sec: 'Prepositions', name: 'Question 9', pts: 1, text: '"The shoes are ______ the bed." (below it)', opts: o4('on', 'under', 'in', 'over'), ans: 'B', why: 'Below the bed → <b>under</b>.' },
    { sec: 'Prepositions', name: 'Question 10', pts: 1, text: '"The picture is ______ the wall."', opts: o4('in', 'under', 'behind', 'on'), ans: 'D', why: 'A picture hangs <b>on</b> the wall.' },
  ],
},

/* ═══════════ TEST 22 — COLOURS AND SHAPES ═══════════ */
{
  id: 7612, title: 'Test 22 · Colours and shapes', time: 20,
  questions: [
    { sec: 'Colours', name: 'Question 1', pts: 1, img: A + 'ta4/triangle.svg', text: 'The sky on a clear day is ______. 🔵', opts: o4('blue', 'red', 'green', 'black'), ans: 'A', why: 'A clear sky is <b>blue</b>.' },
    { sec: 'Colours', name: 'Question 2', pts: 1, img: A + 'ta4/square.svg', text: 'Grass is usually ______. 🌱', opts: o4('blue', 'green', 'pink', 'grey'), ans: 'B', why: 'Grass is <b>green</b>.' },
    { sec: 'Colours', name: 'Question 3', pts: 1, img: A + 'ta4/circle.svg', text: 'A banana is ______. 🍌', opts: o4('purple', 'blue', 'yellow', 'black'), ans: 'C', why: 'A banana is <b>yellow</b>.' },
    { sec: 'Colours', name: 'Question 4', pts: 1, text: 'Snow is ______. ❄', opts: o4('black', 'red', 'brown', 'white'), ans: 'D', why: 'Snow is <b>white</b>.' },
    { sec: 'Shapes', name: 'Question 5', pts: 1, img: A + 'ta4/sunny.svg', text: 'A ball is a ______. ⚽', opts: o4('circle', 'square', 'triangle', 'line'), ans: 'A', why: 'A round shape is a <b>circle</b>.' },
    { sec: 'Shapes', name: 'Question 6', pts: 1, text: 'A shape with three sides is a ______. 🔺', opts: o4('circle', 'triangle', 'square', 'star'), ans: 'B', why: 'Three sides → <b>triangle</b>.' },
    { sec: 'Shapes', name: 'Question 7', pts: 1, text: 'A shape with four equal sides is a ______.', opts: o4('circle', 'line', 'square', 'oval'), ans: 'C', why: 'Four equal sides → <b>square</b>.' },
    { sec: 'Colours', name: 'Question 8', pts: 1, img: A + 'ta4/rainbow.svg', text: 'Mix red and yellow and you get ______.', opts: o4('green', 'purple', 'blue', 'orange'), ans: 'D', why: 'Red and yellow make <b>orange</b>.' },
    { sec: 'Colours', name: 'Question 9', pts: 1, text: '"What ______ is your bag?" – "It’s black."', opts: o4('colour', 'name', 'age', 'shape'), ans: 'A', why: 'We ask "What <b>colour</b>...?"' },
    { sec: 'Colours', name: 'Question 10', pts: 1, text: 'A ripe tomato is usually ______. 🍅', opts: o4('blue', 'red', 'yellow', 'purple'), ans: 'B', why: 'A ripe tomato is <b>red</b>.' },
  ],
},

/* ═══════════ TEST 23 — DAILY ROUTINES ═══════════ */
{
  id: 7613, title: 'Test 23 · Daily routines', time: 20,
  questions: [
    { sec: 'Present simple', name: 'Question 1', pts: 1, img: A + 'ta4/clock7.svg', text: '"I ______ up at six o’clock."', opts: o4('get', 'gets', 'getting', 'got'), ans: 'A', why: 'With <b>I</b> we use <b>get</b>.' },
    { sec: 'Present simple', name: 'Question 2', pts: 1, text: '"She ______ her teeth every morning."', opts: o4('brush', 'brushes', 'brushing', 'brushed'), ans: 'B', why: 'With <b>she</b> we add -es: <b>brushes</b>.' },
    { sec: 'Present simple', name: 'Question 3', pts: 1, img: A + 'ta4/brush.svg', text: '"We ______ breakfast at seven."', opts: o4('have', 'has', 'having', 'to have'), ans: 'A', why: 'With <b>we</b> we use <b>have</b>.' },
    { sec: 'Present simple', name: 'Question 4', pts: 1, text: '"He ______ to school by bike."', opts: o4('go', 'goes', 'going', 'went'), ans: 'B', why: 'With <b>he</b> we use <b>goes</b>.' },
    { sec: 'Present simple', name: 'Question 5', pts: 1, img: A + 'ta4/bus.svg', text: '"They ______ home at four o’clock."', opts: o4('come', 'comes', 'coming', 'came'), ans: 'A', why: 'With <b>they</b> we use <b>come</b>.' },
    { sec: 'Present simple', name: 'Question 6', pts: 1, text: '"My father ______ dinner in the evening."', opts: o4('cook', 'cooks', 'cooking', 'cooked'), ans: 'B', why: 'With "my father" (he) we use <b>cooks</b>.' },
    { sec: 'Present simple', name: 'Question 7', pts: 1, text: '"______ you do your homework every day?"', opts: o4('Do', 'Does', 'Are', 'Is'), ans: 'A', why: 'With <b>you</b> we ask with <b>Do</b>.' },
    { sec: 'Present simple', name: 'Question 8', pts: 1, img: A + 'ta4/sleep.svg', text: '"______ she watch TV at night?"', opts: o4('Do', 'Does', 'Are', 'Is'), ans: 'B', why: 'With <b>she</b> we ask with <b>Does</b>.' },
    { sec: 'Present simple', name: 'Question 9', pts: 1, text: '"I ______ go to bed late." (negative)', opts: o4('don’t', 'doesn’t', 'am not', 'isn’t'), ans: 'A', why: 'With <b>I</b> the negative is <b>don’t</b>.' },
    { sec: 'Present simple', name: 'Question 10', pts: 1, text: '"She ______ like coffee." (negative)', opts: o4('don’t', 'doesn’t', 'isn’t', 'aren’t'), ans: 'B', why: 'With <b>she</b> the negative is <b>doesn’t</b>.' },
  ],
},

/* ═══════════ TEST 24 — READING: MY FAMILY ═══════════ */
{
  id: 7614, title: 'Test 24 · Reading — My family', time: 20,
  questions: [
    { sec: 'Reading', name: 'Question 1', pts: 1, img: A + 'ta4/family.svg', text: 'Read: “Hi! I’m Mai. I’m nine. I have a brother, Nam. He is eleven. My father is a doctor. My mother is a teacher. We have a dog, Kiki.” — How old is Mai?', opts: o4('nine', 'eleven', 'ten', 'eight'), ans: 'A', why: 'The text says "I’m nine".' },
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
    { sec: 'Reading', name: 'Question 1', pts: 1, img: A + 'ta4/school.svg', text: 'Read: “Tom gets up at six. He goes to school by bus. He has four lessons: Maths, English, Art and PE. His favourite subject is Art. After school he plays football with his friends.” — What time does Tom get up?', opts: o4('five', 'six', 'seven', 'eight'), ans: 'B', why: 'He gets up at <b>six</b>.' },
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
    { sec: 'Reading', name: 'Question 1', pts: 1, img: A + 'ta4/puppy.svg', text: 'Read: “I have a cat. Her name is Milu. She is white and small. She likes fish and milk. She can climb trees but she can’t swim. Milu sleeps on my bed.” — What pet does the writer have?', opts: o4('a dog', 'a cat', 'a bird', 'a fish'), ans: 'B', why: 'The writer has <b>a cat</b>.' },
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
    { sec: 'Meals', name: 'Question 1', pts: 1, img: A + 'ta4/rice.svg', text: 'We eat ______ in the morning.', opts: o4('lunch', 'breakfast', 'dinner', 'supper'), ans: 'B', why: 'The morning meal is <b>breakfast</b>.' },
    { sec: 'Grammar', name: 'Question 2', pts: 1, text: '"I’d like ______ orange juice." (uncountable)', opts: o4('some', 'a', 'an', 'two'), ans: 'A', why: 'With uncountable drinks we use <b>some</b>.' },
    { sec: 'Food', name: 'Question 3', pts: 1, img: A + 'ta4/apple.svg', text: 'Which one is a vegetable? 🥕', opts: o4('apple', 'banana', 'carrot', 'milk'), ans: 'C', why: 'A <b>carrot</b> is a vegetable.' },
    { sec: 'Food', name: 'Question 4', pts: 1, text: 'Which one is a fruit? 🍎', opts: o4('bread', 'apple', 'rice', 'fish'), ans: 'B', why: 'An <b>apple</b> is a fruit.' },
    { sec: 'Grammar', name: 'Question 5', pts: 1, img: A + 'ta4/milk.svg', text: '"How much ______ do you want?" (uncountable) 🍚', opts: o4('apples', 'books', 'pens', 'rice'), ans: 'D', why: 'With "how much" we use an uncountable noun like <b>rice</b>.' },
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
    { sec: 'Seasons', name: 'Question 1', pts: 1, img: A + 'ta4/sunny.svg', text: 'There are ______ seasons in a year.', opts: o4('two', 'three', 'four', 'five'), ans: 'C', why: 'A year has <b>four</b> seasons.' },
    { sec: 'Seasons', name: 'Question 2', pts: 1, text: 'In ______ the trees have new green leaves. 🌸', opts: o4('spring', 'summer', 'autumn', 'winter'), ans: 'A', why: 'New leaves grow in <b>spring</b>.' },
    { sec: 'Seasons', name: 'Question 3', pts: 1, img: A + 'ta4/snowy.svg', text: 'In ______ it is very hot and sunny. ☀', opts: o4('winter', 'summer', 'autumn', 'spring'), ans: 'B', why: '<b>Summer</b> is hot and sunny.' },
    { sec: 'Seasons', name: 'Question 4', pts: 1, text: 'In ______ the leaves turn yellow and fall down. 🍂', opts: o4('autumn', 'summer', 'spring', 'winter'), ans: 'A', why: 'Leaves fall in <b>autumn</b>.' },
    { sec: 'Seasons', name: 'Question 5', pts: 1, img: A + 'ta4/rainy.svg', text: 'In ______ it is cold and it can snow. ❄', opts: o4('spring', 'summer', 'autumn', 'winter'), ans: 'D', why: '<b>Winter</b> is cold and snowy.' },
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
    { sec: 'Clothes', name: 'Question 1', pts: 1, img: A + 'ta4/coat.svg', text: 'On a cold day you wear a ______. 🧥', opts: o4('t-shirt', 'coat', 'shorts', 'sandals'), ans: 'B', why: 'When cold we wear a <b>coat</b>.' },
    { sec: 'Clothes', name: 'Question 2', pts: 1, text: 'On your feet in the rain you wear ______. 🥾', opts: o4('a hat', 'gloves', 'boots', 'a scarf'), ans: 'C', why: 'In the rain we wear <b>boots</b>.' },
    { sec: 'Clothes', name: 'Question 3', pts: 1, img: A + 'ta4/shoes.svg', text: 'You wear ______ on your hands when it’s cold. 🧤', opts: o4('gloves', 'shoes', 'socks', 'a belt'), ans: 'A', why: 'On cold hands we wear <b>gloves</b>.' },
    { sec: 'Clothes', name: 'Question 4', pts: 1, text: 'A ______ keeps your neck warm. 🧣', opts: o4('shoe', 'cap', 'sock', 'scarf'), ans: 'D', why: 'A <b>scarf</b> warms your neck.' },
    { sec: 'Shopping', name: 'Question 5', pts: 1, img: A + 'ta4/shop.svg', text: '"How ______ is this hat?" – "It’s 50,000 dong."', opts: o4('much', 'many', 'old', 'long'), ans: 'A', why: 'We ask the price with "How <b>much</b>...?"' },
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
    { sec: 'Present continuous', name: 'Question 4', pts: 1, img: A + 'ta4/family.svg', text: '"The children ______ playing in the garden."', opts: o4('are', 'is', 'am', 'be'), ans: 'A', why: 'With <b>children</b> (they) we use <b>are</b>.' },
    { sec: 'Present continuous', name: 'Question 5', pts: 1, text: '"Look! It ______ raining."', opts: o4('are', 'is', 'am', 'be'), ans: 'B', why: 'With <b>it</b> we use <b>is</b>.' },
    { sec: 'Present simple', name: 'Question 6', pts: 1, text: '"______ he like maths?" – "Yes, he does."', opts: o4('Does', 'Do', 'Is', 'Are'), ans: 'A', why: 'With <b>he</b> we ask with <b>Does</b>.' },
    { sec: 'Plural', name: 'Question 7', pts: 1, text: '"There are five ______ in my class." (child)', opts: o4('childs', 'children', 'childrens', 'childes'), ans: 'B', why: '"Child" has an irregular plural: <b>children</b>.' },
    { sec: 'Comparatives', name: 'Question 8', pts: 1, img: A + 'ta4/big_small.svg', text: '"My bag is ______ than your bag." (more big)', opts: o4('big', 'biggest', 'bigger', 'more big'), ans: 'C', why: 'The comparative of "big" is <b>bigger</b>.' },
    { sec: 'Comparatives', name: 'Question 9', pts: 1, text: '"Nam runs ______ than Tom." (more fast)', opts: o4('faster', 'fast', 'fastest', 'more fast'), ans: 'A', why: 'The comparative of "fast" is <b>faster</b>.' },
    { sec: 'Question words', name: 'Question 10', pts: 1, text: '"______ is the weather today?" – "It’s sunny."', opts: o4('How', 'Who', 'What', 'Where'), ans: 'A', why: 'We ask "<b>How</b> is the weather?"' },
  ],
},


/* ═══════════ TEST 31 — SPELLING: SILENT LETTERS AND TRICKY WORDS ═══════════ */
{
  id: 9801, title: 'Test 31 · Spelling: silent letters and tricky words', time: 20,
  questions: [
    { sec: 'Silent letters', name: 'Question 1', pts: 1, img: A + 'ta4/island.svg', text: 'Which letter is SILENT in <b>island</b>?', opts: o4('s', 'i', 'l', 'd'), ans: 'A', why: 'In <b>island</b> we do not say the <b>s</b>.' },
    { sec: 'Silent letters', name: 'Question 2', pts: 1, text: 'Which letter is SILENT in <b>castle</b>?', opts: o4('c', 't', 'l', 'e'), ans: 'B', why: 'In <b>castle</b> we do not say the <b>t</b>.' },
    { sec: 'Silent letters', name: 'Question 3', pts: 1, img: A + 'ta4/climb.svg', text: 'Which letter is SILENT in <b>climb</b>?', opts: o4('c', 'l', 'b', 'm'), ans: 'C', why: 'In <b>climb</b> we do not say the final <b>b</b>.' },
    { sec: 'Silent letters', name: 'Question 4', pts: 1, text: 'Which letter is SILENT in <b>honest</b>?', opts: o4('o', 'n', 's', 'h'), ans: 'D', why: 'In <b>honest</b> we do not say the <b>h</b>.' },
    { sec: 'Spelling', name: 'Question 5', pts: 1, img: A + 'ta4/knife.svg', text: 'Choose the correct spelling.', opts: o4('necessary', 'neccessary', 'necesary', 'neccesary'), ans: 'A', why: 'The correct spelling is <b>necessary</b> — one c, two s.' },
    { sec: 'Spelling', name: 'Question 6', pts: 1, text: 'Choose the correct spelling.', opts: o4('bisness', 'business', 'busness', 'buisness'), ans: 'B', why: 'The correct spelling is <b>business</b>.' },
    { sec: 'Spelling', name: 'Question 7', pts: 1, text: 'Choose the correct spelling.', opts: o4('libary', 'libery', 'library', 'librery'), ans: 'C', why: 'The correct spelling is <b>library</b> — do not forget the first <b>r</b>.' },
    { sec: 'Spelling', name: 'Question 8', pts: 1, text: 'Choose the correct spelling.', opts: o4('febuary', 'februery', 'febraury', 'February'), ans: 'D', why: 'The correct spelling is <b>February</b>, and the month takes a capital.' },
    { sec: 'Spelling', name: 'Question 9', pts: 1, text: 'Choose the correct spelling.', opts: o4('restaurant', 'restarant', 'resturant', 'restaraunt'), ans: 'A', why: 'The correct spelling is <b>restaurant</b>.' },
    { sec: 'Spelling', name: 'Question 10', pts: 1, text: 'Choose the correct spelling.', opts: o4('recieve', 'receive', 'receeve', 'recive'), ans: 'B', why: 'After <b>c</b> we write <b>ei</b>: <b>receive</b>.' },
  ],
},

/* ═══════════ TEST 32 — SPELLING: PLURALS AND WORD ENDINGS ═══════════ */
{
  id: 9802, title: 'Test 32 · Spelling: plurals and word endings', time: 20,
  questions: [
    { sec: 'Plurals', name: 'Question 1', pts: 1, img: A + 'ta4/stories.svg', text: 'one story → many ______', opts: o4('stories', 'storys', 'storyes', 'storries'), ans: 'A', why: 'Consonant + y → change y to i and add -es: <b>stories</b>.' },
    { sec: 'Plurals', name: 'Question 2', pts: 1, img: A + 'ta4/shelf.svg', text: 'one shelf → two ______', opts: o4('shelfs', 'shelves', 'shelfes', 'shelvs'), ans: 'B', why: '-f changes to <b>-ves</b>: <b>shelves</b>.' },
    { sec: 'Plurals', name: 'Question 3', pts: 1, img: A + 'ta4/five_potatoes.svg', text: 'one potato → five ______ 🥔', opts: o4('potatos', 'potatoies', 'potatoes', 'potato'), ans: 'C', why: 'After <b>-o</b> here we add <b>-es</b>: <b>potatoes</b>.' },
    { sec: 'Plurals', name: 'Question 4', pts: 1, img: A + 'ta4/geese.svg', text: 'one goose → three ______ 🦢', opts: o4('gooses', 'geeses', 'goosen', 'geese'), ans: 'D', why: 'goose → <b>geese</b> (irregular).' },
    { sec: 'Word endings', name: 'Question 5', pts: 1, text: 'travel + ing = ______ (British spelling)', opts: o4('travelling', 'traveling', 'travelling̶', 'travling'), ans: 'A', why: 'In British English we double the l: <b>travelling</b>.' },
    { sec: 'Word endings', name: 'Question 6', pts: 1, text: 'hope + ed = ______', opts: o4('hopeed', 'hoped', 'hopped', 'hopd'), ans: 'B', why: 'We drop the silent e and add -d: <b>hoped</b>.' },
    { sec: 'Word endings', name: 'Question 7', pts: 1, text: 'worry + ed = ______', opts: o4('worryed', 'worryied', 'worried', 'worrid'), ans: 'C', why: 'Consonant + y → change y to i: <b>worried</b>.' },
    { sec: 'Word endings', name: 'Question 8', pts: 1, text: 'plan + ed = ______', opts: o4('planed', 'planeed', 'plandd', 'planned'), ans: 'D', why: 'Short vowel + one consonant → double it: <b>planned</b>.' },
    { sec: 'Word endings', name: 'Question 9', pts: 1, text: 'Which word is spelled correctly?', opts: o4('beginning', 'begining', 'beginnning', 'begginning'), ans: 'A', why: 'begin + ing doubles the n: <b>beginning</b>.' },
    { sec: 'Plurals', name: 'Question 10', pts: 1, img: A + 'ta4/three_deer.svg', text: 'Which sentence is correct?', opts: o4('I saw three deers.', 'I saw three deer.', 'I saw three deeres.', 'I saw three deerses.'), ans: 'B', why: '<b>deer</b> 🦌 is the same in singular and plural.' },
  ],
},

/* ═══════════ TEST 33 — WORD STUDY: SYLLABLES, ROOTS AND COMPOUND WORDS ═══════════ */
{
  id: 9803, title: 'Test 33 · Syllables, root words and compound words', time: 20,
  questions: [
    { sec: 'Syllables', name: 'Question 1', pts: 1, img: A + 'ta4/butterfly.svg', text: 'How many syllables are there in <b>beautiful</b>?', opts: o4('three', 'two', 'four', 'one'), ans: 'A', why: 'beau·ti·ful = <b>three</b> syllables.' },
    { sec: 'Syllables', name: 'Question 2', pts: 1, text: 'How many syllables are there in <b>September</b>?', opts: o4('two', 'three', 'four', 'five'), ans: 'B', why: 'Sep·tem·ber = <b>three</b> syllables.' },
    { sec: 'Syllables', name: 'Question 3', pts: 1, text: 'Which word has FOUR syllables?', opts: o4('holiday', 'computer', 'information', 'elephant'), ans: 'C', why: 'in·for·ma·tion = <b>four</b> syllables.' },
    { sec: 'Root words', name: 'Question 4', pts: 1, text: 'What is the ROOT word in <b>unhappiness</b>?', opts: o4('unhappy', 'happiness', 'ness', 'happy'), ans: 'D', why: 'Take away <b>un-</b> and <b>-ness</b> and the root is <b>happy</b>.' },
    { sec: 'Root words', name: 'Question 5', pts: 1, img: A + 'ta4/playground.svg', text: 'What is the ROOT word in <b>replaying</b>?', opts: o4('play', 'replay', 'playing', 're'), ans: 'A', why: 'Take away <b>re-</b> and <b>-ing</b>: the root is <b>play</b>.' },
    { sec: 'Root words', name: 'Question 6', pts: 1, text: 'Which word shares the same root as <b>teacher</b>?', opts: o4('team', 'teaching', 'tea', 'technic'), ans: 'B', why: '<b>teaching</b> comes from the same root <i>teach</i>.' },
    { sec: 'Compound words', name: 'Question 7', pts: 1, text: 'Which one is a compound word?', opts: o4('carefully', 'beautiful', 'playground', 'unhappy'), ans: 'C', why: '<b>playground</b> is play + ground — two whole words joined.' },
    { sec: 'Compound words', name: 'Question 8', pts: 1, img: A + 'ta4/newspaper.svg', text: 'Which two words make <b>newspaper</b>? 📰', opts: o4('new + paper', 'news + pepper', 'newsp + aper', 'news + paper'), ans: 'D', why: '<b>news</b> + <b>paper</b> = newspaper.' },
    { sec: 'Compound words', name: 'Question 9', pts: 1, img: A + 'ta4/airport.svg', text: 'air + port = ______ ✈️', opts: o4('airport', 'portair', 'airyport', 'air port'), ans: 'A', why: 'air + port = <b>airport</b>.' },
    { sec: 'Syllables', name: 'Question 10', pts: 1, text: 'Which word has only ONE syllable?', opts: o4('paper', 'strength', 'table', 'garden'), ans: 'B', why: '<b>strength</b> is long but has only one beat.' },
  ],
},

/* ═══════════ TEST 34 — WORD STUDY: PREFIXES ═══════════ */
{
  id: 9804, title: 'Test 34 · Prefixes (un-, re-, dis-, mis-, pre-)', time: 20,
  questions: [
    { sec: 'Prefixes', name: 'Question 1', pts: 1, text: 'What does <b>mis-</b> mean in <b>misunderstand</b>?', opts: o4('wrongly', 'again', 'not', 'before'), ans: 'A', why: '<b>mis-</b> means <b>wrongly</b>: to understand it wrongly.' },
    { sec: 'Prefixes', name: 'Question 2', pts: 1, text: 'The opposite of <b>possible</b> is ______.', opts: o4('unpossible', 'impossible', 'dispossible', 'mispossible'), ans: 'B', why: 'Before <b>p</b> we use <b>im-</b>: <b>impossible</b>.' },
    { sec: 'Prefixes', name: 'Question 3', pts: 1, text: 'The opposite of <b>correct</b> is ______.', opts: o4('uncorrect', 'discorrect', 'incorrect', 'miscorrect'), ans: 'C', why: 'The usual form is <b>incorrect</b>.' },
    { sec: 'Prefixes', name: 'Question 4', pts: 1, img: A + 'ta4/disagree.svg', text: '"I must ______ this letter." (write it again)', opts: o4('unwrite', 'miswrite', 'prewrite', 'rewrite'), ans: 'D', why: 'write again = <b>rewrite</b>.' },
    { sec: 'Prefixes', name: 'Question 5', pts: 1, text: 'What does <b>pre-</b> mean in <b>prepay</b>?', opts: o4('pay before', 'pay again', 'not pay', 'pay wrongly'), ans: 'A', why: '<b>pre-</b> means before, so prepay = <b>pay before</b>.' },
    { sec: 'Prefixes', name: 'Question 6', pts: 1, text: 'The opposite of <b>honest</b> is ______.', opts: o4('unhonest', 'dishonest', 'inhonest', 'mishonest'), ans: 'B', why: 'The correct word is <b>dishonest</b>.' },
    { sec: 'Prefixes', name: 'Question 7', pts: 1, text: '"He ______ the word, so he spelled it wrongly." (heard it wrongly)', opts: o4('reheard', 'preheard', 'misheard', 'unheard'), ans: 'C', why: 'heard wrongly = <b>misheard</b>.' },
    { sec: 'Prefixes', name: 'Question 8', pts: 1, text: 'Which word has a prefix meaning "not"?', opts: o4('reading', 'teacher', 'quickly', 'unfair'), ans: 'D', why: '<b>unfair</b> = not fair.' },
    { sec: 'Prefixes', name: 'Question 9', pts: 1, img: A + 'ta4/submarine.svg', text: 'What does <b>sub-</b> mean in <b>submarine</b>? 🚢', opts: o4('under', 'over', 'before', 'again'), ans: 'A', why: '<b>sub-</b> means <b>under</b> — a submarine goes under the sea.' },
    { sec: 'Prefixes', name: 'Question 10', pts: 1, text: 'The opposite of <b>appear</b> is ______.', opts: o4('unappear', 'disappear', 'misappear', 'inappear'), ans: 'B', why: 'The correct word is <b>disappear</b>.' },
  ],
},

/* ═══════════ TEST 35 — WORD STUDY: SUFFIXES ═══════════ */
{
  id: 9805, title: 'Test 35 · Suffixes (-ful, -less, -ly, -er, -ness, -tion)', time: 20,
  questions: [
    { sec: 'Suffixes', name: 'Question 1', pts: 1, text: 'happy + ness = ______', opts: o4('happiness', 'happyness', 'happines', 'happynes'), ans: 'A', why: 'Consonant + y → change y to i: <b>happiness</b>.' },
    { sec: 'Suffixes', name: 'Question 2', pts: 1, text: 'What does <b>-ness</b> do to a word?', opts: o4('It makes it a verb.', 'It makes it a noun.', 'It makes it an adverb.', 'It makes it a question.'), ans: 'B', why: '<b>-ness</b> turns an adjective into a <b>noun</b>: kind → kindness.' },
    { sec: 'Suffixes', name: 'Question 3', pts: 1, text: 'act + ion = ______', opts: o4('actionn', 'acttion', 'action', 'actin'), ans: 'C', why: 'act + ion = <b>action</b>.' },
    { sec: 'Suffixes', name: 'Question 4', pts: 1, img: A + 'ta4/painter.svg', text: 'A person who paints pictures is a ______. 🎨', opts: o4('paintness', 'paintful', 'paintly', 'painter'), ans: 'D', why: '<b>-er</b> makes the person who does it: <b>painter</b>.' },
    { sec: 'Suffixes', name: 'Question 5', pts: 1, text: 'use + less = ______', opts: o4('useless', 'uselless', 'usless', 'useles'), ans: 'A', why: 'use + less = <b>useless</b> (without use).' },
    { sec: 'Suffixes', name: 'Question 6', pts: 1, text: 'easy + ly = ______', opts: o4('easyly', 'easily', 'easilly', 'easly'), ans: 'B', why: 'Consonant + y → change y to i: <b>easily</b>.' },
    { sec: 'Suffixes', name: 'Question 7', pts: 1, img: A + 'ta4/dictionary.svg', text: '"The dictionary is very ______ when I meet a new word."', opts: o4('useless', 'careless', 'useful', 'hopeless'), ans: 'C', why: 'It helps us, so it is <b>useful</b> 📖.' },
    { sec: 'Suffixes', name: 'Question 8', pts: 1, text: 'Which word is an ADVERB?', opts: o4('kindness', 'kinder', 'kind', 'kindly'), ans: 'D', why: '<b>kindly</b> ends in -ly and tells us how.' },
    { sec: 'Suffixes', name: 'Question 9', pts: 1, text: 'Which word is a NOUN?', opts: o4('darkness', 'darkly', 'darker', 'dark'), ans: 'A', why: '<b>darkness</b> is the noun made with -ness.' },
    { sec: 'Suffixes', name: 'Question 10', pts: 1, text: 'What does <b>-able</b> mean in <b>washable</b>?', opts: o4('without washing', 'can be washed', 'washed before', 'washed wrongly'), ans: 'B', why: '<b>-able</b> means <b>can be</b> done.' },
  ],
},

/* ═══════════ TEST 36 — VOCABULARY: SYNONYMS ═══════════ */
{
  id: 9806, title: 'Test 36 · Vocabulary: synonyms', time: 20,
  questions: [
    { sec: 'Synonyms', name: 'Question 1', pts: 1, img: A + 'ta4/big_small.svg', text: 'Which word means the SAME as <b>enormous</b>?', opts: o4('huge', 'tiny', 'narrow', 'empty'), ans: 'A', why: '<b>huge</b> means the same as enormous.' },
    { sec: 'Synonyms', name: 'Question 2', pts: 1, text: 'Which word means the SAME as <b>difficult</b>?', opts: o4('simple', 'hard', 'easy', 'light'), ans: 'B', why: '<b>hard</b> means the same as difficult.' },
    { sec: 'Synonyms', name: 'Question 3', pts: 1, text: 'Which word means the SAME as <b>reply</b>?', opts: o4('ask', 'question', 'answer', 'forget'), ans: 'C', why: 'To <b>answer</b> is to reply.' },
    { sec: 'Synonyms', name: 'Question 4', pts: 1, text: 'Which word means the SAME as <b>silent</b>?', opts: o4('loud', 'busy', 'bright', 'quiet'), ans: 'D', why: '<b>quiet</b> means the same as silent.' },
    { sec: 'Synonyms', name: 'Question 5', pts: 1, text: 'Which word means the SAME as <b>frightened</b>?', opts: o4('afraid', 'brave', 'proud', 'calm'), ans: 'A', why: '<b>afraid</b> means the same as frightened.' },
    { sec: 'Synonyms', name: 'Question 6', pts: 1, text: 'Which word means the SAME as <b>choose</b>?', opts: o4('lose', 'pick', 'leave', 'drop'), ans: 'B', why: 'To <b>pick</b> is to choose.' },
    { sec: 'Synonyms', name: 'Question 7', pts: 1, text: 'Which word means the SAME as <b>rapid</b>?', opts: o4('slow', 'late', 'fast', 'heavy'), ans: 'C', why: '<b>fast</b> means the same as rapid.' },
    { sec: 'Synonyms', name: 'Question 8', pts: 1, img: A + 'ta4/gift.svg', text: 'Which word means the SAME as <b>gift</b>? 🎁', opts: o4('bill', 'box', 'letter', 'present'), ans: 'D', why: 'A <b>present</b> is a gift.' },
    { sec: 'Synonyms', name: 'Question 9', pts: 1, text: 'Which word means the SAME as <b>wealthy</b>?', opts: o4('rich', 'poor', 'young', 'clever'), ans: 'A', why: '<b>rich</b> means the same as wealthy.' },
    { sec: 'Synonyms', name: 'Question 10', pts: 1, text: 'Why do writers use synonyms?', opts: o4('to make the text shorter', 'to avoid repeating the same word', 'to ask more questions', 'to add more full stops'), ans: 'B', why: 'Synonyms help us <b>avoid repeating</b> the same word.' },
  ],
},

/* ═══════════ TEST 37 — VOCABULARY: ANTONYMS ═══════════ */
{
  id: 9807, title: 'Test 37 · Vocabulary: antonyms', time: 20,
  questions: [
    { sec: 'Antonyms', name: 'Question 1', pts: 1, text: 'What is the OPPOSITE of <b>ancient</b>?', opts: o4('modern', 'old', 'large', 'quiet'), ans: 'A', why: 'The opposite of ancient is <b>modern</b>.' },
    { sec: 'Antonyms', name: 'Question 2', pts: 1, text: 'What is the OPPOSITE of <b>accept</b>?', opts: o4('take', 'refuse', 'keep', 'hold'), ans: 'B', why: 'The opposite of accept is <b>refuse</b>.' },
    { sec: 'Antonyms', name: 'Question 3', pts: 1, text: 'What is the OPPOSITE of <b>shallow</b>?', opts: o4('wide', 'short', 'deep', 'flat'), ans: 'C', why: 'The opposite of shallow is <b>deep</b>.' },
    { sec: 'Antonyms', name: 'Question 4', pts: 1, text: 'What is the OPPOSITE of <b>succeed</b>?', opts: o4('win', 'try', 'finish', 'fail'), ans: 'D', why: 'The opposite of succeed is <b>fail</b>.' },
    { sec: 'Antonyms', name: 'Question 5', pts: 1, text: 'What is the OPPOSITE of <b>generous</b>?', opts: o4('mean', 'kind', 'happy', 'rich'), ans: 'A', why: 'The opposite of generous is <b>mean</b>.' },
    { sec: 'Antonyms', name: 'Question 6', pts: 1, text: 'What is the OPPOSITE of <b>increase</b>?', opts: o4('grow', 'decrease', 'repeat', 'continue'), ans: 'B', why: 'The opposite of increase is <b>decrease</b>.' },
    { sec: 'Antonyms', name: 'Question 7', pts: 1, text: 'What is the OPPOSITE of <b>temporary</b>?', opts: o4('short', 'quick', 'permanent', 'broken'), ans: 'C', why: 'The opposite of temporary is <b>permanent</b>.' },
    { sec: 'Antonyms', name: 'Question 8', pts: 1, text: 'What is the OPPOSITE of <b>artificial</b>?', opts: o4('false', 'plastic', 'new', 'natural'), ans: 'D', why: 'The opposite of artificial is <b>natural</b>.' },
    { sec: 'Antonyms', name: 'Question 9', pts: 1, img: A + 'ta4/arrive_depart.svg', text: 'Which pair are ANTONYMS?', opts: o4('arrive — depart', 'big — large', 'happy — glad', 'quick — rapid'), ans: 'A', why: '<b>arrive</b> and <b>depart</b> are opposites; the others are synonyms.' },
    { sec: 'Antonyms', name: 'Question 10', pts: 1, text: 'What is the OPPOSITE of <b>brave</b>?', opts: o4('strong', 'cowardly', 'proud', 'clever'), ans: 'B', why: 'The opposite of brave is <b>cowardly</b>.' },
  ],
},

/* ═══════════ TEST 38 — VOCABULARY: HOMOPHONES AND CONFUSED WORDS ═══════════ */
{
  id: 9808, title: 'Test 38 · Homophones and easily confused words', time: 20,
  questions: [
    { sec: 'Homophones', name: 'Question 1', pts: 1, text: '"The dog wagged ______ tail."', opts: o4('its', 'it’s', 'its’', 'it is’'), ans: 'A', why: '<b>its</b> shows belonging; <i>it’s</i> means "it is".' },
    { sec: 'Homophones', name: 'Question 2', pts: 1, text: '"______ going to be late." (they are)', opts: o4('Their', 'They’re', 'There', 'Theirs'), ans: 'B', why: 'they are → <b>They’re</b>.' },
    { sec: 'Homophones', name: 'Question 3', pts: 1, text: '"I ate a ______ of bread." (a small amount)', opts: o4('peace', 'peice', 'piece', 'pease'), ans: 'C', why: 'A <b>piece</b> of bread; <i>peace</i> means no war.' },
    { sec: 'Homophones', name: 'Question 4', pts: 1, text: '"Which road should we ______?" (walk along)', opts: o4('too', 'two', 'tow', 'take'), ans: 'D', why: 'We <b>take</b> a road. (The homophones two/too/to are different words.)' },
    { sec: 'Homophones', name: 'Question 5', pts: 1, text: '"The wind ______ the leaves away." (past of blow)', opts: o4('blew', 'blue', 'bleu', 'blow'), ans: 'A', why: 'The past of blow is <b>blew</b>; <i>blue</i> is a colour.' },
    { sec: 'Confused words', name: 'Question 6', pts: 1, text: '"I have ______ books ______ you." (I have more)', opts: o4('then … than', 'more … than', 'than … then', 'more … then'), ans: 'B', why: 'We compare with <b>more … than</b>. <i>Then</i> is about time.' },
    { sec: 'Confused words', name: 'Question 7', pts: 1, text: '"Please bring your homework ______ school."', opts: o4('too', 'two', 'to', 'tow'), ans: 'C', why: 'We go <b>to</b> a place.' },
    { sec: 'Confused words', name: 'Question 8', pts: 1, text: '"Everyone did well ______ Nam, who was ill."', opts: o4('accept', 'expect', 'aspect', 'except'), ans: 'D', why: '<b>except</b> means "not including"; <i>accept</i> means "take".' },
    { sec: 'Homophones', name: 'Question 9', pts: 1, text: '"______ is my pencil?" (in what place)', opts: o4('Where', 'Wear', 'Were', 'We’re'), ans: 'A', why: 'We ask about a place with <b>Where</b>.' },
    { sec: 'Confused words', name: 'Question 10', pts: 1, text: '"The medicine had a good ______ on him." (result)', opts: o4('affect', 'effect', 'afect', 'efect'), ans: 'B', why: 'The noun is <b>effect</b>; <i>affect</i> is the verb.' },
  ],
},

/* ═══════════ TEST 39 — VOCABULARY: CONTEXT CLUES ═══════════ */
{
  id: 9809, title: 'Test 39 · Working out new words from context', time: 20,
  questions: [
    { sec: 'Context clues', name: 'Question 1', pts: 1, text: '"The room was <b>immaculate</b> — not one speck of dust anywhere." <b>Immaculate</b> means ______.', opts: o4('perfectly clean', 'very dirty', 'very large', 'very dark'), ans: 'A', why: 'No dust at all tells us it means <b>perfectly clean</b>.' },
    { sec: 'Context clues', name: 'Question 2', pts: 1, text: '"He spoke so <b>rapidly</b> that nobody could follow him." <b>Rapidly</b> means ______.', opts: o4('slowly', 'quickly', 'quietly', 'kindly'), ans: 'B', why: 'Nobody could follow, so he spoke <b>quickly</b>.' },
    { sec: 'Context clues', name: 'Question 3', pts: 1, text: '"The path was <b>treacherous</b>, so we held on to the rope." <b>Treacherous</b> means ______.', opts: o4('flat and easy', 'short', 'dangerous', 'pretty'), ans: 'C', why: 'They needed a rope, so it was <b>dangerous</b>.' },
    { sec: 'Context clues', name: 'Question 4', pts: 1, text: '"Lan was <b>reluctant</b> to sing; she shook her head and stepped back." <b>Reluctant</b> means ______.', opts: o4('very keen', 'very loud', 'very fast', 'not willing'), ans: 'D', why: 'She shook her head, so she was <b>not willing</b>.' },
    { sec: 'Context clues', name: 'Question 5', pts: 1, text: '"The soup was <b>bland</b>, so I added salt and pepper." <b>Bland</b> means ______.', opts: o4('with little taste', 'very spicy', 'too hot', 'too sweet'), ans: 'A', why: 'He had to add salt, so it had <b>little taste</b>.' },
    { sec: 'Context clues', name: 'Question 6', pts: 1, text: '"Unlike his <b>timid</b> brother, Minh was bold and loud." <b>Timid</b> means ______.', opts: o4('loud', 'shy', 'tall', 'clever'), ans: 'B', why: '"Unlike" tells us it is the opposite of bold, so it means <b>shy</b>.' },
    { sec: 'Context clues', name: 'Question 7', pts: 1, text: '"The crowd was <b>jubilant</b> when the team scored." <b>Jubilant</b> means ______.', opts: o4('angry', 'bored', 'very happy', 'silent'), ans: 'C', why: 'Scoring a goal ⚽ makes a crowd <b>very happy</b>.' },
    { sec: 'Context clues', name: 'Question 8', pts: 1, text: '"The old map was <b>legible</b>, so we could still read every name." <b>Legible</b> means ______.', opts: o4('very old', 'torn', 'coloured', 'clear enough to read'), ans: 'D', why: 'They could read it, so it was <b>clear enough to read</b>.' },
    { sec: 'Context clues', name: 'Question 9', pts: 1, text: 'Which clue helps MOST when you meet a new word?', opts: o4('the words and sentences around it', 'the number of letters in it', 'the last letter of it', 'the colour of the page'), ans: 'A', why: 'The <b>context</b> — the words around it — gives the meaning.' },
    { sec: 'Context clues', name: 'Question 10', pts: 1, img: A + 'ta4/water.svg', text: '"Water is <b>essential</b> for life: no living thing can survive without it." <b>Essential</b> means ______.', opts: o4('not needed', 'absolutely necessary', 'sometimes useful', 'dangerous'), ans: 'B', why: 'Nothing survives without it, so it is <b>absolutely necessary</b> 💧.' },
  ],
},

/* ═══════════ TEST 40 — MECHANICS: CAPITAL LETTERS AND END PUNCTUATION ═══════════ */
{
  id: 9810, title: 'Test 40 · Capital letters and end punctuation', time: 20,
  questions: [
    { sec: 'Capitals', name: 'Question 1', pts: 1, text: 'Which sentence is written correctly?', opts: o4('In july we went to Nha Trang.', 'In July we went to nha trang.', 'in July we went to Nha Trang.', 'In July we went to Nha Trang.'), ans: 'D', why: 'The start, the month <b>July</b> and the place <b>Nha Trang</b> all take capitals.' },
    { sec: 'Capitals', name: 'Question 2', pts: 1, text: 'Which word must have a capital letter?', opts: o4('english', 'subject', 'lesson', 'homework'), ans: 'A', why: 'Languages take capitals: <b>English</b>.' },
    { sec: 'Capitals', name: 'Question 3', pts: 1, text: 'How should this book title be written?', opts: o4('the secret garden', 'The Secret garden', 'The Secret Garden', 'the Secret Garden'), ans: 'C', why: 'The important words of a title take capitals: <b>The Secret Garden</b>.' },
    { sec: 'Capitals', name: 'Question 4', pts: 1, text: 'Which group ALL need capital letters?', opts: o4('river, city, street', 'Monday, Asia, Mai', 'happy, tall, quick', 'walk, read, sing'), ans: 'B', why: 'Days, continents and people’s names are proper nouns.' },
    { sec: 'End punctuation', name: 'Question 5', pts: 1, text: '"Would you mind opening the window ___"', opts: o4('?', '.', '!', ','), ans: 'A', why: 'It is a question, so it ends with <b>?</b>' },
    { sec: 'End punctuation', name: 'Question 6', pts: 1, text: '"Watch out ___ There is a car coming ___"', opts: o4('? .', '! .', '. ?', ', !'), ans: 'B', why: 'A warning takes <b>!</b>; the telling sentence takes <b>.</b>' },
    { sec: 'End punctuation', name: 'Question 7', pts: 1, text: 'Which sentence has the WRONG end mark?', opts: o4('What a mess!', 'I finished my homework.', 'How old is your brother.', 'Where do they live?'), ans: 'C', why: '"How old is your brother" is a question and needs <b>?</b>' },
    { sec: 'Capitals', name: 'Question 8', pts: 1, text: 'Which sentence is correct?', opts: o4('we visited Uncle Minh in Da Lat.', 'We visited uncle minh in da lat.', 'we visited uncle Minh in Da Lat.', 'We visited Uncle Minh in Da Lat.'), ans: 'D', why: 'The start, the title + name <b>Uncle Minh</b> and the city <b>Da Lat</b> take capitals.' },
    { sec: 'Capitals', name: 'Question 9', pts: 1, text: 'Which word should NOT have a capital here? "My Grandmother lives in Hue."', opts: o4('My', 'Grandmother', 'lives', 'Hue'), ans: 'B', why: 'Here <b>grandmother</b> is a common noun, so it takes a small letter.' },
    { sec: 'End punctuation', name: 'Question 10', pts: 1, img: A + 'ta4/crossing.svg', text: 'How many sentences are here? "Stop! Look both ways. Is it safe now?"', opts: o4('three', 'two', 'four', 'one'), ans: 'A', why: 'Three end marks (! . ?) = <b>three</b> sentences.' },
  ],
},

/* ═══════════ TEST 41 — MECHANICS: COMMAS AND APOSTROPHES ═══════════ */
{
  id: 9811, title: 'Test 41 · Commas and apostrophes', time: 20,
  questions: [
    { sec: 'Commas', name: 'Question 1', pts: 1, text: 'Which sentence uses commas correctly?', opts: o4('We packed bread, cheese, fruit and water.', 'We packed bread cheese, fruit, and water.', 'We packed, bread cheese fruit and water.', 'We packed bread cheese fruit, and, water.'), ans: 'A', why: 'Commas separate the items in a list.' },
    { sec: 'Commas', name: 'Question 2', pts: 1, text: 'Where should the comma go? "When the bell rang we went outside."', opts: o4('after "we"', 'after "rang"', 'after "went"', 'no comma is needed'), ans: 'B', why: 'After an opening clause we put a comma: "When the bell rang<b>,</b> we went outside."' },
    { sec: 'Commas', name: 'Question 3', pts: 1, img: A + 'ta4/nurse.svg', text: 'Which sentence is punctuated correctly?', opts: o4('My uncle a doctor works, in Hue.', 'My uncle, a doctor works in Hue.', 'My uncle, a doctor, works in Hue.', 'My uncle a doctor, works in Hue.'), ans: 'C', why: 'Extra information takes a comma on <b>both</b> sides.' },
    { sec: 'Commas', name: 'Question 4', pts: 1, text: 'Which sentence needs a comma before the joining word?', opts: o4('I like tea and coffee.', 'She sings and dances.', 'We ran and jumped.', 'It was late, so we went home.'), ans: 'D', why: 'When a joining word links two full sentences we put a comma before it.' },
    { sec: 'Apostrophes', name: 'Question 5', pts: 1, text: '"This is my ______ bicycle." (it belongs to one brother)', opts: o4('brother’s', 'brothers’', 'brothers', 'brothers’s'), ans: 'A', why: 'One brother → <b>brother’s</b>.' },
    { sec: 'Apostrophes', name: 'Question 6', pts: 1, text: '"The ______ classroom is upstairs." (it belongs to several teachers)', opts: o4('teacher’s', 'teachers’', 'teachers', 'teachers’s'), ans: 'B', why: 'A plural ending in -s takes just an apostrophe: <b>teachers’</b>.' },
    { sec: 'Apostrophes', name: 'Question 7', pts: 1, text: 'Which one is correct?', opts: o4('The mens’ room', 'The mens room', 'The men’s room', 'The men’ room'), ans: 'C', why: '<b>men</b> is already plural, so we add <b>’s</b>.' },
    { sec: 'Apostrophes', name: 'Question 8', pts: 1, text: 'Which sentence is correct?', opts: o4('Its a lovely day.', 'Its’ a lovely day.', 'It is’ a lovely day.', 'It’s a lovely day.'), ans: 'D', why: '<b>It’s</b> = it is; <i>its</i> without an apostrophe shows belonging.' },
    { sec: 'Commas', name: 'Question 9', pts: 1, text: 'Where does the comma go? "Yes I have finished my homework."', opts: o4('after "Yes"', 'after "have"', 'after "finished"', 'no comma is needed'), ans: 'A', why: 'After <b>Yes</b> or <b>No</b> we put a comma.' },
    { sec: 'Commas', name: 'Question 10', pts: 1, text: 'Which sentence uses a comma to address someone correctly?', opts: o4('Good morning class how are you?', 'Good morning, class, how are you?', 'Good morning class, how are you?', 'Good, morning class how are you?'), ans: 'B', why: 'The name or group we speak to takes a comma on both sides.' },
  ],
},

/* ═══════════ TEST 42 — MECHANICS: QUOTATION MARKS AND DIRECT SPEECH ═══════════ */
{
  id: 9812, title: 'Test 42 · Quotation marks and direct speech', time: 20,
  questions: [
    { sec: 'Direct speech', name: 'Question 1', pts: 1, text: 'Which sentence is punctuated correctly?', opts: o4('"I am ready," said Lan.', '"I am ready" said Lan.', '"I am ready", said Lan.', 'I am ready," said Lan.'), ans: 'A', why: 'The comma goes <b>inside</b> the quotation marks, before "said".' },
    { sec: 'Direct speech', name: 'Question 2', pts: 1, text: 'Which sentence is punctuated correctly?', opts: o4('Nam asked "where is my bag?"', 'Nam asked, "Where is my bag?"', 'Nam asked, "where is my bag"?', 'Nam asked "Where is my bag".'), ans: 'B', why: 'A comma before the speech, a capital to start it, and the <b>?</b> inside the marks.' },
    { sec: 'Direct speech', name: 'Question 3', pts: 1, text: 'What goes inside quotation marks?', opts: o4('the name of the speaker', 'the date of the story', 'the exact words spoken', 'the title of the chapter'), ans: 'C', why: 'Quotation marks hold the <b>exact words</b> a person says.' },
    { sec: 'Direct speech', name: 'Question 4', pts: 1, text: 'When a new person starts speaking, what should a writer do?', opts: o4('use a bigger font', 'use capital letters only', 'add three full stops', 'start a new line'), ans: 'D', why: 'Each new speaker <b>starts a new line</b> so the reader can follow.' },
    { sec: 'Direct speech', name: 'Question 5', pts: 1, img: A + 'ta4/shout.svg', text: 'Which sentence is correct?', opts: o4('"Be careful!" shouted the man.', '"Be careful"! shouted the man.', '"Be careful!," shouted the man.', '"be careful!" shouted the man.'), ans: 'A', why: 'The <b>!</b> goes inside the marks and no comma is needed after it.' },
    { sec: 'Reported speech', name: 'Question 6', pts: 1, text: 'Change to reported speech: Lan said, "I am tired."', opts: o4('Lan said she is tired.', 'Lan said she was tired.', 'Lan said "she was tired".', 'Lan said that I am tired.'), ans: 'B', why: 'In reported speech the verb steps back: am → <b>was</b>, and I → she.' },
    { sec: 'Direct speech', name: 'Question 7', pts: 1, text: 'Which word is a good alternative to <b>said</b> for a question?', opts: o4('shouted', 'whispered', 'asked', 'replied'), ans: 'C', why: 'For a question we use <b>asked</b>.' },
    { sec: 'Direct speech', name: 'Question 8', pts: 1, text: 'Which sentence is correct?', opts: o4('The sign said, Keep off the grass.', 'The sign said "keep off the grass".', 'The sign said Keep off the grass".', 'The sign said, "Keep off the grass."'), ans: 'D', why: 'Comma, opening marks, a capital, and the full stop inside the marks.' },
    { sec: 'Direct speech', name: 'Question 9', pts: 1, text: 'In "Tom whispered, ______ the baby is sleeping." what is missing?', opts: o4('opening quotation marks', 'a question mark', 'a semicolon', 'brackets'), ans: 'A', why: 'The spoken words need <b>opening quotation marks</b>.' },
    { sec: 'Direct speech', name: 'Question 10', pts: 1, text: 'Which punctuation mark do we use for a title inside a sentence?', opts: o4('a full stop', 'quotation marks', 'a comma', 'an apostrophe'), ans: 'B', why: 'We can put a short title inside <b>quotation marks</b>.' },
  ],
},

/* ═══════════ TEST 43 — GRAMMAR: SUBJECT–VERB AGREEMENT ═══════════ */
{
  id: 9813, title: 'Test 43 · Subject–verb agreement', time: 20,
  questions: [
    { sec: 'Agreement', name: 'Question 1', pts: 1, text: '"My sister ______ to school by bus."', opts: o4('goes', 'go', 'going', 'gone'), ans: 'A', why: '<b>My sister</b> = she, so the verb takes <b>-es</b>.' },
    { sec: 'Agreement', name: 'Question 2', pts: 1, text: '"The children ______ in the garden."', opts: o4('plays', 'play', 'is playing', 'was play'), ans: 'B', why: '<b>children</b> is plural, so we use <b>play</b>.' },
    { sec: 'Agreement', name: 'Question 3', pts: 1, text: '"Nam and Lan ______ best friends."', opts: o4('is', 'was', 'are', 'am'), ans: 'C', why: 'Two people joined by <b>and</b> are plural → <b>are</b>.' },
    { sec: 'Agreement', name: 'Question 4', pts: 1, text: '"There ______ a book and two pens on the desk."', opts: o4('are', 'were', 'have', 'is'), ans: 'D', why: 'The verb agrees with the FIRST item, <b>a book</b>, so we use <b>is</b>.' },
    { sec: 'Agreement', name: 'Question 5', pts: 1, text: '"Everybody ______ the new teacher."', opts: o4('likes', 'like', 'are liking', 'have like'), ans: 'A', why: '<b>Everybody</b> is treated as singular → <b>likes</b>.' },
    { sec: 'Agreement', name: 'Question 6', pts: 1, img: A + 'ta4/chocolates.svg', text: '"The box of chocolates ______ on the table." 🍫', opts: o4('are', 'is', 'were', 'have'), ans: 'B', why: 'The subject is <b>the box</b> (singular), not "chocolates".' },
    { sec: 'Agreement', name: 'Question 7', pts: 1, img: A + 'ta4/trousers.svg', text: '"My trousers ______ too long."', opts: o4('is', 'was', 'are', 'has'), ans: 'C', why: '<b>trousers</b> 👖 is always plural → <b>are</b>.' },
    { sec: 'Agreement', name: 'Question 8', pts: 1, text: '"Neither of the boys ______ the answer."', opts: o4('know', 'are knowing', 'have known', 'knows'), ans: 'D', why: '<b>Neither</b> is singular → <b>knows</b>.' },
    { sec: 'Agreement', name: 'Question 9', pts: 1, text: 'Which sentence is CORRECT?', opts: o4('The dogs barks all night.', 'The dog bark all night.', 'The dogs bark all night.', 'The dogs is barking all night.'), ans: 'C', why: 'Plural subject <b>dogs</b> takes the plain verb <b>bark</b>.' },
    { sec: 'Agreement', name: 'Question 10', pts: 1, text: 'Which sentence has an agreement MISTAKE?', opts: o4('My friends were happy.', 'She have two cats.', 'The team is ready.', 'They are late.'), ans: 'B', why: 'It should be "She <b>has</b> two cats".' },
  ],
},

/* ═══════════ TEST 44 — SENTENCES: TYPES, FRAGMENTS, RUN-ONS ═══════════ */
{
  id: 9814, title: 'Test 44 · Sentence types, fragments and run-ons', time: 20,
  questions: [
    { sec: 'Sentence types', name: 'Question 1', pts: 1, img: A + 'ta4/gate.svg', text: 'Which sentence is a COMMAND?', opts: o4('Please shut the gate.', 'The gate is shut.', 'Is the gate shut?', 'What a heavy gate!'), ans: 'A', why: 'A command (imperative) begins with the verb.' },
    { sec: 'Sentence types', name: 'Question 2', pts: 1, text: 'Which sentence is an EXCLAMATION?', opts: o4('The film was long.', 'What an amazing film that was!', 'Did you like the film?', 'Watch the film tonight.'), ans: 'B', why: 'An exclamation shows strong feeling and ends with <b>!</b>' },
    { sec: 'Fragments', name: 'Question 3', pts: 1, text: 'Which one is a FRAGMENT?', opts: o4('The rain stopped.', 'We went outside.', 'After the heavy rain last night.', 'The ground was wet.'), ans: 'C', why: 'It has no subject doing anything — it is not a complete thought.' },
    { sec: 'Fragments', name: 'Question 4', pts: 1, text: 'How do we best fix "Because she was late."?', opts: o4('Delete "Because".', 'Add a question mark.', 'Make it longer with adjectives.', 'Join it to a main clause.'), ans: 'D', why: 'A "because" clause must be <b>joined to a main clause</b>.' },
    { sec: 'Run-ons', name: 'Question 5', pts: 1, text: 'Which one is a RUN-ON sentence?', opts: o4('The sun set the sky turned red.', 'The sun set, and the sky turned red.', 'The sun set. The sky turned red.', 'When the sun set, the sky turned red.'), ans: 'A', why: 'Two sentences are pushed together with nothing between them.' },
    { sec: 'Run-ons', name: 'Question 6', pts: 1, text: 'What is a COMMA SPLICE?', opts: o4('using no comma in a list', 'joining two full sentences with only a comma', 'putting a comma after a name', 'using two commas together'), ans: 'B', why: 'A comma alone cannot join two full sentences.' },
    { sec: 'Run-ons', name: 'Question 7', pts: 1, text: 'Which sentence has a comma splice?', opts: o4('I was cold, so I put on a coat.', 'Because I was cold, I put on a coat.', 'I was cold, I put on a coat.', 'I was cold. I put on a coat.'), ans: 'C', why: 'Two full sentences joined by only a comma — it needs <b>so</b> or a full stop.' },
    { sec: 'Sentence types', name: 'Question 8', pts: 1, text: 'Which sentence is a COMPOUND sentence (two full ideas joined)?', opts: o4('The tall boy in the blue shirt.', 'Running quickly to the bus stop.', 'After lunch.', 'I wanted to go, but it was raining.'), ans: 'D', why: 'Two full ideas joined with <b>but</b>.' },
    { sec: 'Fragments', name: 'Question 9', pts: 1, text: 'What must every complete sentence have?', opts: o4('a subject, a verb and a complete thought', 'at least two commas', 'more than eight words', 'an adjective'), ans: 'A', why: 'A sentence needs a <b>subject, a verb and a complete thought</b>.' },
    { sec: 'Run-ons', name: 'Question 10', pts: 1, text: 'What is the BEST fix for "She studied hard she passed the test."?', opts: o4('She studied hard she, passed the test.', 'She studied hard, so she passed the test.', 'She studied hard passed the test.', 'She studied hard; she passed the test?'), ans: 'B', why: 'A comma plus the joining word <b>so</b> fixes the run-on.' },
  ],
},

/* ═══════════ TEST 45 — GRAMMAR: CONJUNCTIONS AND JOINING IDEAS ═══════════ */
{
  id: 9815, title: 'Test 45 · Conjunctions and joining ideas', time: 20,
  questions: [
    { sec: 'Conjunctions', name: 'Question 1', pts: 1, text: '"I wanted to play outside, ______ it was raining."', opts: o4('but', 'and', 'or', 'so'), ans: 'A', why: 'The second idea goes against the first → <b>but</b>.' },
    { sec: 'Conjunctions', name: 'Question 2', pts: 1, text: '"We were hungry, ______ we cooked some noodles."', opts: o4('but', 'so', 'or', 'because'), ans: 'B', why: 'The second part is the result → <b>so</b>.' },
    { sec: 'Conjunctions', name: 'Question 3', pts: 1, text: '"You can have rice ______ noodles, not both."', opts: o4('and', 'but', 'or', 'so'), ans: 'C', why: 'A choice between two things → <b>or</b>.' },
    { sec: 'Conjunctions', name: 'Question 4', pts: 1, text: '"He went to bed early ______ he was very tired."', opts: o4('but', 'or', 'so', 'because'), ans: 'D', why: 'The reason → <b>because</b>.' },
    { sec: 'Conjunctions', name: 'Question 5', pts: 1, text: '"______ it started to rain, we kept playing."', opts: o4('Although', 'Because', 'So', 'Unless'), ans: 'A', why: '<b>Although</b> shows a contrast: it rained, but they kept playing.' },
    { sec: 'Conjunctions', name: 'Question 6', pts: 1, text: '"Wait here ______ I come back."', opts: o4('although', 'until', 'because', 'so'), ans: 'B', why: '<b>until</b> tells us up to what time.' },
    { sec: 'Conjunctions', name: 'Question 7', pts: 1, text: '"I will call you ______ I arrive."', opts: o4('although', 'but', 'when', 'or'), ans: 'C', why: '<b>when</b> joins two events in time.' },
    { sec: 'Conjunctions', name: 'Question 8', pts: 1, text: '"You will be late ______ you hurry."', opts: o4('because', 'although', 'so', 'unless'), ans: 'D', why: '<b>unless</b> means "if … not".' },
    { sec: 'Conjunctions', name: 'Question 9', pts: 1, img: A + 'ta4/torch.svg', text: 'Which sentence joins the two ideas BEST? "It was dark. We took a torch."', opts: o4('It was dark, so we took a torch.', 'It was dark, or we took a torch.', 'It was dark, but we took a torch.', 'It was dark although we took a torch.'), ans: 'A', why: 'Taking a torch is the result of the dark → <b>so</b> 🔦.' },
    { sec: 'Conjunctions', name: 'Question 10', pts: 1, text: 'Which word is NOT a conjunction?', opts: o4('and', 'quickly', 'because', 'but'), ans: 'B', why: '<b>quickly</b> is an adverb; the others join ideas.' },
  ],
},

/* ═══════════ TEST 46 — READING: NON-FICTION, MAIN IDEA AND SUMMARY ═══════════ */
{
  id: 9816, title: 'Test 46 · Reading: rice farming (non-fiction)', time: 20,
  questions: [
    { sec: 'Reading', name: 'Question 1', pts: 1, img: A + 'ta4/rice_field.svg', text: R4A + 'What is the MAIN IDEA of this text?', opts: o4('Rice is grown in several careful steps and feeds most of Vietnam.', 'Water buffaloes are strong animals.', 'Machines are better than people.', 'Rain falls every day in Vietnam.'), ans: 'A', why: 'The whole text explains how rice is grown and why it matters.' },
    { sec: 'Reading', name: 'Question 2', pts: 1, text: R4A + 'What do farmers do FIRST?', opts: o4('harvest the rice', 'soak the seeds until they sprout', 'dry the grain', 'plant the young shoots'), ans: 'B', why: 'The text says they begin by <b>soaking the seeds</b>.' },
    { sec: 'Reading', name: 'Question 3', pts: 1, text: R4A + 'Why do farmers flood the fields?', opts: o4('to make the fields look nice', 'to cool the farmers down', 'to help the rice grow and stop weeds', 'to catch fish'), ans: 'C', why: 'The text says the water <b>helps the rice grow and keeps weeds down</b>.' },
    { sec: 'Reading', name: 'Question 4', pts: 1, text: R4A + 'How long does it take before the rice is ready?', opts: o4('about two weeks', 'about one year', 'about ten days', 'about four months'), ans: 'D', why: 'The text says about <b>four months</b>.' },
    { sec: 'Reading', name: 'Question 5', pts: 1, text: R4A + 'What happens to the grain AFTER it is cut?', opts: o4('It is dried in the sun.', 'It is planted again at once.', 'It is thrown away.', 'It is put back in water.'), ans: 'A', why: 'The text says the grain is <b>dried in the sun</b>.' },
    { sec: 'Reading', name: 'Question 6', pts: 1, text: R4A + 'Which sentence is a FACT from the text?', opts: o4('Rice tastes better than bread.', 'Rice is the main food for most people in Vietnam.', 'Farming is the hardest job of all.', 'Everyone should become a farmer.'), ans: 'B', why: 'The others are opinions; only this one is stated as a fact.' },
    { sec: 'Reading', name: 'Question 7', pts: 1, text: R4A + 'Which would be the BEST title for this text?', opts: o4('My Trip to the Village', 'The Water Buffalo', 'From Seed to Bowl', 'A Rainy Morning'), ans: 'C', why: 'The text follows rice from seed to the food we eat.' },
    { sec: 'Reading', name: 'Question 8', pts: 1, img: A + 'ta4/rice_steps.svg', text: R4A + 'Which is the BEST summary of the text?', opts: o4('Farmers work very hard every day and never rest.', 'Rice needs a lot of water and buffaloes are useful.', 'Vietnam has many farms and much rain.', 'Farmers soak seeds, plant shoots in flooded fields, wait about four months, then cut and dry the grain.'), ans: 'D', why: 'A summary keeps the main steps in order and leaves out small details.' },
    { sec: 'Reading', name: 'Question 9', pts: 1, text: R4A + 'What does the word <b>harvest</b> mean in this text?', opts: o4('gather the ripe crop', 'plant new seeds', 'water the field', 'sell the rice'), ans: 'A', why: 'It is the step where the ripe rice is <b>cut and gathered</b>.' },
    { sec: 'Reading', name: 'Question 10', pts: 1, text: R4A + 'Is this text fiction or non-fiction?', opts: o4('fiction, because it tells a story', 'non-fiction, because it gives real information', 'a poem', 'a letter'), ans: 'B', why: 'It gives real facts, so it is <b>non-fiction</b>.' },
  ],
},

/* ═══════════ TEST 47 — READING: INFERENCE, CAUSE AND EFFECT ═══════════ */
{
  id: 9817, title: 'Test 47 · Inference, cause and effect', time: 20,
  questions: [
    { sec: 'Inference', name: 'Question 1', pts: 1, img: A + 'ta4/rainy.svg', text: '"Mai came in shaking her umbrella and left wet footprints in the hall." What can you work out?', opts: o4('It is raining outside.', 'Mai has a new umbrella.', 'Mai lives far away.', 'It is very hot.'), ans: 'A', why: 'A wet umbrella and wet footprints tell us <b>it is raining</b>.' },
    { sec: 'Inference', name: 'Question 2', pts: 1, text: '"Tom looked at the empty plate and licked his lips." What can you work out?', opts: o4('Tom is cooking.', 'Tom has just eaten.', 'Tom is asleep.', 'Tom does not like food.'), ans: 'B', why: 'An empty plate plus licking his lips means he <b>has just eaten</b>.' },
    { sec: 'Inference', name: 'Question 3', pts: 1, img: A + 'ta4/basket.svg', text: '"Ha put on her boots, picked up a basket and walked towards the trees." Where is she probably going?', opts: o4('to bed', 'to school', 'to pick fruit', 'to swim'), ans: 'C', why: 'Boots, a basket and trees suggest she is going <b>to pick fruit</b> 🧺.' },
    { sec: 'Cause and effect', name: 'Question 4', pts: 1, text: '"The road was icy, so the bus arrived late." What is the CAUSE?', opts: o4('The bus arrived late.', 'The passengers waited.', 'The driver was tired.', 'The road was icy.'), ans: 'D', why: 'The cause is what happened first and made the rest happen.' },
    { sec: 'Cause and effect', name: 'Question 5', pts: 1, text: '"The road was icy, so the bus arrived late." What is the EFFECT?', opts: o4('The bus arrived late.', 'The road was icy.', 'It was winter.', 'The bus was blue.'), ans: 'A', why: 'The effect is the result: <b>the bus arrived late</b>.' },
    { sec: 'Cause and effect', name: 'Question 6', pts: 1, text: '"Because nobody watered the plant, it died." What is the cause?', opts: o4('The plant died.', 'Nobody watered the plant.', 'The pot was small.', 'The sun was hot.'), ans: 'B', why: 'The words <b>Because…</b> introduce the cause.' },
    { sec: 'Cause and effect', name: 'Question 7', pts: 1, text: 'Which word signals a CAUSE?', opts: o4('therefore', 'so', 'since', 'as a result'), ans: 'C', why: '<b>since</b> (like because) introduces the cause; the others introduce the effect.' },
    { sec: 'Inference', name: 'Question 8', pts: 1, text: 'What does it mean to "make an inference"?', opts: o4('to copy a sentence from the text', 'to count the paragraphs', 'to read the title only', 'to use clues in the text plus what you already know'), ans: 'D', why: 'An inference joins <b>text clues</b> with <b>what you already know</b>.' },
    { sec: 'Inference', name: 'Question 9', pts: 1, text: '"Duc kept looking at the clock and tapping his foot." How does Duc probably feel?', opts: o4('impatient', 'sleepy', 'proud', 'hungry'), ans: 'A', why: 'Watching the clock and tapping show he is <b>impatient</b>.' },
    { sec: 'Cause and effect', name: 'Question 10', pts: 1, img: A + 'ta4/trophy.svg', text: '"The team practised every day. As a result, they won the cup." What is the effect?', opts: o4('They practised every day.', 'They won the cup.', 'The cup was gold.', 'The coach was happy.'), ans: 'B', why: '"As a result" introduces the effect: <b>they won the cup</b> 🏆.' },
  ],
},

/* ═══════════ TEST 48 — READING: GENRES AND TEXT FEATURES ═══════════ */
{
  id: 9818, title: 'Test 48 · Reading genres and text features', time: 20,
  questions: [
    { sec: 'Genres', name: 'Question 1', pts: 1, img: A + 'ta4/fox.svg', text: 'A story about a talking fox who tricks a king is which genre?', opts: o4('a fable', 'a biography', 'a report', 'a recipe'), ans: 'A', why: 'A <b>fable</b> uses talking animals and teaches a lesson 🦊.' },
    { sec: 'Genres', name: 'Question 2', pts: 1, text: 'A book about the real life of Ho Chi Minh is a ______.', opts: o4('novel', 'biography', 'fairy tale', 'poem'), ans: 'B', why: 'The true story of a real person is a <b>biography</b>.' },
    { sec: 'Genres', name: 'Question 3', pts: 1, text: 'A text that tells you step by step how to make a kite is ______.', opts: o4('a poem', 'a fable', 'a set of instructions', 'a diary'), ans: 'C', why: 'Numbered steps make it <b>instructions</b>.' },
    { sec: 'Genres', name: 'Question 4', pts: 1, img: A + 'ta4/rocket.svg', text: 'A story set on a spaceship in the year 3000 is ______.', opts: o4('history', 'a biography', 'a news report', 'science fiction'), ans: 'D', why: 'Future worlds and technology make it <b>science fiction</b> 🚀.' },
    { sec: 'Genres', name: 'Question 5', pts: 1, text: 'Which genre is always TRUE?', opts: o4('non-fiction', 'fantasy', 'fairy tale', 'fable'), ans: 'A', why: '<b>Non-fiction</b> gives real facts.' },
    { sec: 'Text features', name: 'Question 6', pts: 1, img: A + 'ta4/contents.svg', text: 'Which part of a non-fiction book lists topics in ABC order with page numbers?', opts: o4('the contents page', 'the index', 'the glossary', 'the title page'), ans: 'B', why: 'The <b>index</b> at the back lists topics alphabetically.' },
    { sec: 'Text features', name: 'Question 7', pts: 1, text: 'What is a CAPTION?', opts: o4('the first word of a chapter', 'a list of chapters', 'the words under a picture that explain it', 'the name of the author'), ans: 'C', why: 'A <b>caption</b> explains a picture or diagram.' },
    { sec: 'Text features', name: 'Question 8', pts: 1, text: 'Why does a writer use SUBHEADINGS?', opts: o4('to fill the page', 'to make the book heavier', 'to hide information', 'to show what each part is about'), ans: 'D', why: 'Subheadings tell the reader <b>what each part is about</b>.' },
    { sec: 'Text features', name: 'Question 9', pts: 1, text: 'Where would you look to find the meaning of a difficult word used in the book?', opts: o4('the glossary', 'the index', 'the cover', 'the caption'), ans: 'A', why: 'The <b>glossary</b> explains the book’s difficult words.' },
    { sec: 'Text features', name: 'Question 10', pts: 1, img: A + 'ta4/chart.svg', text: 'Which text feature shows information as numbers you can compare quickly?', opts: o4('a caption', 'a table or chart', 'a heading', 'a glossary'), ans: 'B', why: 'A <b>table or chart</b> shows numbers side by side 📊.' },
  ],
},

/* ═══════════ TEST 49 — WRITING: PARAGRAPHS AND THE WRITING PROCESS ═══════════ */
{
  id: 9819, title: 'Test 49 · Paragraphs and the writing process', time: 20,
  questions: [
    { sec: 'Paragraphs', name: 'Question 1', pts: 1, text: 'What does a TOPIC SENTENCE do?', opts: o4('It tells the main idea of the paragraph.', 'It gives the smallest detail.', 'It always asks a question.', 'It names the writer.'), ans: 'A', why: 'The topic sentence gives the paragraph’s <b>main idea</b>.' },
    { sec: 'Paragraphs', name: 'Question 2', pts: 1, text: 'What are SUPPORTING DETAILS?', opts: o4('words that rhyme', 'facts and examples that back up the main idea', 'the title of the piece', 'the last word of each line'), ans: 'B', why: 'They are the <b>facts and examples</b> that support the main idea.' },
    { sec: 'Paragraphs', name: 'Question 3', pts: 1, text: 'Which sentence does NOT belong in a paragraph about keeping fit?', opts: o4('Exercise makes your heart stronger.', 'You should sleep eight hours a night.', 'My cousin has a red bicycle.', 'Eating vegetables gives you energy.'), ans: 'C', why: 'The colour of a bicycle has nothing to do with keeping fit.' },
    { sec: 'Writing process', name: 'Question 4', pts: 1, img: A + 'ta4/process.svg', text: 'Put the writing process in order.', opts: o4('edit, plan, draft, publish', 'draft, plan, publish, edit', 'publish, edit, draft, plan', 'plan, draft, revise, edit, publish'), ans: 'D', why: 'We <b>plan → draft → revise → edit → publish</b>.' },
    { sec: 'Writing process', name: 'Question 5', pts: 1, text: 'What do you do when you REVISE?', opts: o4('improve the ideas and the order', 'only check the spelling', 'copy it out neatly', 'choose the paper size'), ans: 'A', why: 'Revising improves <b>ideas and order</b>; editing fixes spelling and punctuation.' },
    { sec: 'Writing process', name: 'Question 6', pts: 1, text: 'What do you check when you EDIT?', opts: o4('the number of pages', 'spelling, grammar and punctuation', 'the colour of the pen', 'the weather', ), ans: 'B', why: 'Editing checks <b>spelling, grammar and punctuation</b>.' },
    { sec: 'Writing', name: 'Question 7', pts: 1, text: 'Which opening would hook a reader BEST?', opts: o4('This is my story about a dog.', 'I will now write about a dog.', 'The door creaked open — and a wet nose pushed through.', 'Dogs are animals.'), ans: 'C', why: 'A strong hook makes the reader want to read on.' },
    { sec: 'Writing', name: 'Question 8', pts: 1, text: 'Which words are good TRANSITIONS in an explanation?', opts: o4('red, blue, green', 'cat, dog, bird', 'run, jump, sit', 'first, next, after that, finally'), ans: 'D', why: 'Transitions show the <b>order</b> of the steps.' },
    { sec: 'Writing', name: 'Question 9', pts: 1, text: 'In an OPINION paragraph, what must follow your opinion?', opts: o4('reasons and examples', 'a drawing', 'a list of names', 'the date'), ans: 'A', why: 'An opinion needs <b>reasons and examples</b> to be convincing.' },
    { sec: 'Writing', name: 'Question 10', pts: 1, text: 'When should a writer start a NEW paragraph?', opts: o4('after exactly five sentences', 'when the topic, time or place changes', 'at the end of every line', 'never'), ans: 'B', why: 'A new paragraph starts when the <b>topic, time or place changes</b>.' },
  ],
},

/* ═══════════ TEST 50 — LIBRARY SKILLS AND FINDING INFORMATION ═══════════ */
{
  id: 9820, title: 'Test 50 · Library skills and finding information', time: 20,
  questions: [
    { sec: 'Parts of a book', name: 'Question 1', pts: 1, img: A + 'ta4/book.svg', text: 'Which part of a book comes FIRST?', opts: o4('the title page', 'the index', 'the glossary', 'the last chapter'), ans: 'A', why: 'The <b>title page</b> is at the front of the book.' },
    { sec: 'Dictionary skills', name: 'Question 2', pts: 1, img: A + 'ta4/guide.svg', text: 'A dictionary page has guide words <b>garden — giant</b>. Which word is on this page?', opts: o4('gate', 'goat', 'game', 'grape'), ans: 'A', why: '<b>gate</b> falls between garden and giant in ABC order.' },
    { sec: 'Dictionary skills', name: 'Question 3', pts: 1, text: 'What does a dictionary tell you that a thesaurus does NOT?', opts: o4('words with a similar meaning', 'the meaning and how to say a word', 'the longest word in English', 'the price of the book'), ans: 'B', why: 'A dictionary gives <b>meanings and pronunciation</b>; a thesaurus gives synonyms.' },
    { sec: 'Thesaurus skills', name: 'Question 4', pts: 1, img: A + 'ta4/thesaurus.svg', text: 'When would you use a THESAURUS?', opts: o4('to find a page number', 'to check a date', 'to find a better word than "nice"', 'to find a map'), ans: 'C', why: 'A thesaurus helps you find <b>synonyms</b> — a better word.' },
    { sec: 'Library skills', name: 'Question 5', pts: 1, img: A + 'ta4/shelves.svg', text: 'How are non-fiction books arranged on library shelves?', opts: o4('by the colour of the cover', 'by size', 'by how new they are', 'by subject, using call numbers'), ans: 'D', why: 'Non-fiction is shelved <b>by subject using call numbers</b> (the Dewey system).' },
    { sec: 'Library skills', name: 'Question 6', pts: 1, text: 'How are FICTION books usually arranged?', opts: o4('by the author’s last name in ABC order', 'by the number of pages', 'by the year they were written', 'by the colour of the cover'), ans: 'A', why: 'Fiction is shelved by the <b>author’s last name</b> alphabetically.' },
    { sec: 'Library skills', name: 'Question 7', pts: 1, text: 'What is a library CATALOGUE for?', opts: o4('borrowing a pen', 'searching for a book by title, author or subject', 'paying a fine', 'booking a room'), ans: 'B', why: 'The catalogue lets you <b>search by title, author or subject</b>.' },
    { sec: 'Sources', name: 'Question 8', pts: 1, text: 'Which is a PRIMARY source about a flood in 1990?', opts: o4('a textbook written in 2020', 'a school project about floods', 'a diary written by someone during the flood', 'a magazine article from last year'), ans: 'C', why: 'A <b>primary source</b> comes from someone who was there at the time.' },
    { sec: 'Sources', name: 'Question 9', pts: 1, text: 'Which website is MOST likely to be reliable for a school report?', opts: o4('a page with no author and many spelling mistakes', 'a personal blog with strong opinions', 'a page that is trying to sell you something', 'a national museum website'), ans: 'D', why: 'A <b>museum or official site</b> is checked by experts, so it is more reliable.' },
    { sec: 'Library skills', name: 'Question 10', pts: 1, img: A + 'ta4/library.svg', text: 'How should you take care of a library book?', opts: o4('keep it clean and dry, and return it on time', 'fold the corners to mark your page', 'write notes in the margins', 'leave it open face-down'), ans: 'A', why: 'Good book care: <b>keep it clean and dry and return it on time</b> 📚.' },
  ],
},


/* ═══════════ TEST 51 — GRAMMAR: PAST SIMPLE AND IRREGULAR VERBS ═══════════ */
{
  id: 9821, title: 'Test 51 · Past simple and irregular verbs', time: 20,
  questions: [
    { sec: 'Past simple', name: 'Question 1', pts: 1, img: A + 'ta4/cinema.svg', text: '"Yesterday we ______ a film at the cinema." 🎬', opts: o4('watched', 'watch', 'watches', 'watching'), ans: 'A', why: 'watch is regular: <b>watched</b>.' },
    { sec: 'Past simple', name: 'Question 2', pts: 1, img: A + 'ta4/market.svg', text: '"She ______ to the market last Sunday." 🛒', opts: o4('go', 'went', 'goes', 'going'), ans: 'B', why: 'The past of <b>go</b> is <b>went</b>.' },
    { sec: 'Past simple', name: 'Question 3', pts: 1, text: '"They ______ their homework before dinner."', opts: o4('do', 'does', 'did', 'doing'), ans: 'C', why: 'The past of <b>do</b> is <b>did</b>.' },
    { sec: 'Past (be)', name: 'Question 4', pts: 1, img: A + 'ta4/grandma.svg', text: '"I ______ at my grandmother’s house last week." 👵', opts: o4('am', 'is', 'are', 'was'), ans: 'D', why: 'With <b>I</b> the past of be is <b>was</b>.' },
    { sec: 'Past (be)', name: 'Question 5', pts: 1, img: A + 'ta4/party.svg', text: '"The children ______ very happy at the party." 🎉', opts: o4('were', 'was', 'are', 'is'), ans: 'A', why: 'With a plural subject the past of be is <b>were</b>.' },
    { sec: 'Past simple', name: 'Question 6', pts: 1, text: '"He ______ his keys, so he waited outside."', opts: o4('loses', 'lost', 'losed', 'losing'), ans: 'B', why: 'lose → <b>lost</b> (irregular).' },
    { sec: 'Past simple', name: 'Question 7', pts: 1, text: '"______ you finish the book last night?"', opts: o4('Do', 'Does', 'Did', 'Are'), ans: 'C', why: 'We ask about the past with <b>Did</b> + the plain verb.' },
    { sec: 'Past simple', name: 'Question 8', pts: 1, text: '"We ______ go to school on Sunday." (negative)', opts: o4('doesn’t', 'don’t', 'weren’t', 'didn’t'), ans: 'D', why: 'The past negative is <b>didn’t</b> + the plain verb.' },
    { sec: 'Irregular verbs', name: 'Question 9', pts: 1, text: 'What is the past of <b>take</b>?', opts: o4('took', 'taked', 'taken', 'takes'), ans: 'A', why: 'take → <b>took</b> (irregular).' },
    { sec: 'Irregular verbs', name: 'Question 10', pts: 1, text: 'Which past form is WRONG?', opts: o4('bought', 'catched', 'gave', 'saw'), ans: 'B', why: 'catch → <b>caught</b>, not "catched".' },
  ],
},

/* ═══════════ TEST 52 — GRAMMAR: THE FUTURE AND MODAL VERBS ═══════════ */
{
  id: 9822, title: 'Test 52 · The future and modal verbs', time: 20,
  questions: [
    { sec: 'Future', name: 'Question 1', pts: 1, text: '"Tomorrow I ______ visit my cousin."', opts: o4('will', 'was', 'did', 'am'), ans: 'A', why: 'We talk about the future with <b>will</b> + the plain verb.' },
    { sec: 'Future', name: 'Question 2', pts: 1, img: A + 'ta4/clouds.svg', text: '"Look at those clouds — it ______ rain." ☁️', opts: o4('is go to', 'is going to', 'will to', 'goes to'), ans: 'B', why: 'For something we can see coming we use <b>is going to</b>.' },
    { sec: 'Future', name: 'Question 3', pts: 1, text: '"They ______ going to travel to Hue this summer."', opts: o4('is', 'am', 'are', 'was'), ans: 'C', why: 'With <b>they</b> we use <b>are</b> going to.' },
    { sec: 'Future', name: 'Question 4', pts: 1, text: '"I ______ be late. Do not wait for me." (negative)', opts: o4('don’t', 'didn’t', 'am not', 'won’t'), ans: 'D', why: 'will not → <b>won’t</b>.' },
    { sec: 'Modals', name: 'Question 5', pts: 1, img: A + 'ta4/helmet.svg', text: '"You ______ wear a helmet when you cycle. It is a rule." 🚲', opts: o4('must', 'might', 'may', 'could'), ans: 'A', why: 'A rule takes <b>must</b>.' },
    { sec: 'Modals', name: 'Question 6', pts: 1, img: A + 'ta4/water.svg', text: '"You ______ drink more water when it is hot." (advice)', opts: o4('must', 'should', 'might', 'can'), ans: 'B', why: 'Advice takes <b>should</b> 💧.' },
    { sec: 'Modals', name: 'Question 7', pts: 1, text: '"______ I open the window, please?" (polite request)', opts: o4('Must', 'Should', 'May', 'Will'), ans: 'C', why: 'We ask permission politely with <b>May I…?</b>' },
    { sec: 'Modals', name: 'Question 8', pts: 1, img: A + 'ta4/swim.svg', text: '"She ______ swim very well." (ability) 🏊', opts: o4('must', 'should', 'may', 'can'), ans: 'D', why: 'Ability takes <b>can</b>.' },
    { sec: 'Modals', name: 'Question 9', pts: 1, text: '"You ______ play with matches — it is dangerous."', opts: o4('mustn’t', 'needn’t', 'couldn’t', 'wouldn’t'), ans: 'A', why: 'A strong prohibition takes <b>mustn’t</b>.' },
    { sec: 'Future', name: 'Question 10', pts: 1, text: 'Which time word goes with the future?', opts: o4('yesterday', 'next week', 'last month', 'an hour ago'), ans: 'B', why: '<b>next week</b> is a future time.' },
  ],
},

];

SUBJECTS.push({
  id: 'tienganh4', name: 'Tiếng Anh', short: 'Tiếng Anh 4', icon: '🔤', grade: 4,
  exams: TA4_EXAMS, ready: true,
  heroTitle: 'Tiếng Anh lớp 4 — từ vựng, ngữ pháp, chính tả, dấu câu, đọc hiểu, viết đoạn và kĩ năng thư viện',
  heroMeta: '📚 52 đề &nbsp;•&nbsp; 520 câu &nbsp;•&nbsp; ⏱ 20 phút mỗi đề &nbsp;•&nbsp; đủ 8 phần, không kèm bản dịch',
});
