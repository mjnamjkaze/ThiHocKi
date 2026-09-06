// TIẾNG ANH — LỚP 5 (GDPT 2018)
// 30 đề × 10 câu = 300 câu. Mỗi câu 1 điểm — thang 10 — 20 phút mỗi đề.
//
// QUY TẮC: môn Tiếng Anh KHÔNG kèm bản dịch tiếng Việt — mọi phần viết bằng tiếng Anh.
// Chủ đề lớp 5: daily routine (present simple), present continuous, past simple,
// frequency adverbs, comparatives & superlatives, health, jobs & appearance,
// directions & places, future (be going to) & weather, và ôn tập ngữ pháp.

const TA5_EXAMS = [

/* ═══════════ TEST 1 — DAILY ROUTINE ═══════════ */
{
  id: 6901, title: 'Test 1 · My daily routine', time: 20,
  questions: [
    { sec: 'Routine', name: 'Question 1', pts: 1, text: '"I ______ up at six o’clock."', opts: o4('get', 'gets', 'getting', 'got'), ans: 'A', why: 'With <b>I</b> in the present simple we use <b>get</b>.' },
    { sec: 'Routine', name: 'Question 2', pts: 1, text: '"She ______ to school every day."', opts: o4('goes', 'go', 'going', 'gone'), ans: 'A', why: 'With <b>she</b> we add -es: <b>goes</b>.' },
    { sec: 'Routine', name: 'Question 3', pts: 1, text: '"We ______ breakfast at seven."', opts: o4('have', 'has', 'having', 'had'), ans: 'A', why: 'With <b>we</b> we use <b>have</b>.' },
    { sec: 'Routine', name: 'Question 4', pts: 1, text: '"He brushes his ______ in the morning."', opts: o4('teeth', 'hair only', 'shoes', 'book'), ans: 'A', why: 'We brush our <b>teeth</b>.' },
    { sec: 'Routine', name: 'Question 5', pts: 1, text: '"What time do you ______ up?"', opts: o4('get', 'gets', 'got', 'getting'), ans: 'A', why: 'After <b>do you</b> we use the base verb <b>get</b>.' },
    { sec: 'Routine', name: 'Question 6', pts: 1, text: '"I ______ my homework in the evening."', opts: o4('do', 'does', 'doing', 'did'), ans: 'A', why: 'With <b>I</b> we use <b>do</b> my homework.' },
    { sec: 'Routine', name: 'Question 7', pts: 1, text: '"They ______ dinner at 7 p.m."', opts: o4('have', 'has', 'having', 'to have'), ans: 'A', why: 'With <b>they</b> we use <b>have</b>.' },
    { sec: 'Routine', name: 'Question 8', pts: 1, text: '"My father ______ to work by car."', opts: o4('goes', 'go', 'going', 'gone'), ans: 'A', why: 'With <b>father (he)</b> we use <b>goes</b>.' },
    { sec: 'Routine', name: 'Question 9', pts: 1, text: '"After school, I ______ home."', opts: o4('go', 'goes', 'going', 'went'), ans: 'A', why: 'With <b>I</b> present simple we use <b>go</b>.' },
    { sec: 'Routine', name: 'Question 10', pts: 1, text: '"At night, I ______ to bed."', opts: o4('go', 'goes', 'going', 'gone'), ans: 'A', why: 'With <b>I</b> we use <b>go</b> to bed.' },
  ],
},

/* ═══════════ TEST 2 — PRESENT CONTINUOUS ═══════════ */
{
  id: 6902, title: 'Test 2 · What are you doing now?', time: 20,
  questions: [
    { sec: 'Continuous', name: 'Question 1', pts: 1, text: '"Look! The baby ______ now." (sleep)', opts: o4('is sleeping', 'sleeps', 'sleep', 'slept'), ans: 'A', why: 'For an action happening now we use is + verb-ing: <b>is sleeping</b>.' },
    { sec: 'Continuous', name: 'Question 2', pts: 1, text: '"I ______ a book at the moment." (read)', opts: o4('am reading', 'read', 'reads', 'reading'), ans: 'A', why: 'With <b>I</b> now: <b>am reading</b>.' },
    { sec: 'Continuous', name: 'Question 3', pts: 1, text: '"They ______ football now." (play)', opts: o4('are playing', 'play', 'plays', 'played'), ans: 'A', why: 'With <b>they</b> now: <b>are playing</b>.' },
    { sec: 'Continuous', name: 'Question 4', pts: 1, text: '"What ______ you doing?"', opts: o4('are', 'is', 'do', 'am'), ans: 'A', why: 'With <b>you</b> in present continuous we use <b>are</b>.' },
    { sec: 'Continuous', name: 'Question 5', pts: 1, text: '"She ______ a letter now." (write)', opts: o4('is writing', 'writes', 'write', 'wrote'), ans: 'A', why: 'With <b>she</b> now: <b>is writing</b>.' },
    { sec: 'Continuous', name: 'Question 6', pts: 1, text: '"Listen! The birds ______." (sing)', opts: o4('are singing', 'sing', 'sings', 'sang'), ans: 'A', why: 'With <b>birds (they)</b> now: <b>are singing</b>.' },
    { sec: 'Continuous', name: 'Question 7', pts: 1, text: '"We ______ TV now." (watch)', opts: o4('are watching', 'watch', 'watches', 'watched'), ans: 'A', why: 'With <b>we</b> now: <b>are watching</b>.' },
    { sec: 'Grammar', name: 'Question 8', pts: 1, text: 'We use the present continuous for actions happening ______.', opts: o4('now', 'every day', 'yesterday', 'last week'), ans: 'A', why: 'The present continuous is for actions happening <b>now</b>.' },
    { sec: 'Spelling', name: 'Question 9', pts: 1, text: '"He is ______ in the park." (run)', opts: o4('running', 'runing', 'runs', 'ran'), ans: 'A', why: 'We double the n: <b>running</b>.' },
    { sec: 'Continuous', name: 'Question 10', pts: 1, text: '"The children ______ now." (swim)', opts: o4('are swimming', 'swim', 'swims', 'swam'), ans: 'A', why: 'With <b>children (they)</b> now: <b>are swimming</b>.' },
  ],
},

/* ═══════════ TEST 3 — PAST SIMPLE ═══════════ */
{
  id: 6903, title: 'Test 3 · Yesterday', time: 20,
  questions: [
    { sec: 'Past', name: 'Question 1', pts: 1, text: '"Yesterday, I ______ to the zoo."', opts: o4('went', 'go', 'goes', 'going'), ans: 'A', why: 'The past of <b>go</b> is <b>went</b>.' },
    { sec: 'Past (be)', name: 'Question 2', pts: 1, text: '"She ______ happy yesterday."', opts: o4('was', 'is', 'were', 'be'), ans: 'A', why: 'With <b>she</b> in the past we use <b>was</b>.' },
    { sec: 'Past (be)', name: 'Question 3', pts: 1, text: '"They ______ at home last night."', opts: o4('were', 'was', 'are', 'is'), ans: 'A', why: 'With <b>they</b> in the past we use <b>were</b>.' },
    { sec: 'Past', name: 'Question 4', pts: 1, text: '"We ______ games last Sunday." (play)', opts: o4('played', 'play', 'plays', 'playing'), ans: 'A', why: 'Regular past adds -ed: <b>played</b>.' },
    { sec: 'Past', name: 'Question 5', pts: 1, text: '"He ______ a film yesterday." (watch)', opts: o4('watched', 'watch', 'watches', 'watching'), ans: 'A', why: 'Regular past: <b>watched</b>.' },
    { sec: 'Irregular', name: 'Question 6', pts: 1, text: 'The past of "go" is ______.', opts: o4('went', 'goed', 'gone', 'going'), ans: 'A', why: 'The past of go is <b>went</b>.' },
    { sec: 'Irregular', name: 'Question 7', pts: 1, text: 'The past of "eat" is ______.', opts: o4('ate', 'eated', 'eaten', 'eats'), ans: 'A', why: 'The past of eat is <b>ate</b>.' },
    { sec: 'Past (be)', name: 'Question 8', pts: 1, text: '"______ you at school yesterday?"', opts: o4('Were', 'Was', 'Are', 'Did'), ans: 'A', why: 'With <b>you</b> in the past we ask <b>Were you...?</b>' },
    { sec: 'Past', name: 'Question 9', pts: 1, text: '"I ______ my grandma last week." (visit)', opts: o4('visited', 'visit', 'visits', 'visiting'), ans: 'A', why: 'Regular past: <b>visited</b>.' },
    { sec: 'Irregular', name: 'Question 10', pts: 1, text: 'The past of "see" is ______.', opts: o4('saw', 'seed', 'seen', 'sees'), ans: 'A', why: 'The past of see is <b>saw</b>.' },
  ],
},

/* ═══════════ TEST 4 — FREQUENCY AND TIME ═══════════ */
{
  id: 6904, title: 'Test 4 · How often?', time: 20,
  questions: [
    { sec: 'Frequency', name: 'Question 1', pts: 1, text: '"I ______ brush my teeth." (every time, 100%)', opts: o4('always', 'never', 'sometimes', 'seldom'), ans: 'A', why: '100% of the time = <b>always</b>.' },
    { sec: 'Frequency', name: 'Question 2', pts: 1, text: '"She ______ eats candy." (0%)', opts: o4('never', 'always', 'often', 'usually'), ans: 'A', why: '0% of the time = <b>never</b>.' },
    { sec: 'Frequency', name: 'Question 3', pts: 1, text: '"They ______ go to the park." (not often, not never)', opts: o4('sometimes', 'always', 'never', 'usually'), ans: 'A', why: 'Now and then = <b>sometimes</b>.' },
    { sec: 'Frequency', name: 'Question 4', pts: 1, text: '"He ______ gets up early." (most days)', opts: o4('usually', 'never', 'sometimes', 'not'), ans: 'A', why: 'Most days = <b>usually</b>.' },
    { sec: 'Question', name: 'Question 5', pts: 1, text: '"How ______ do you play football?" – "Twice a week."', opts: o4('often', 'many', 'old', 'much'), ans: 'A', why: 'We ask <b>How often</b> for frequency.' },
    { sec: 'Word order', name: 'Question 6', pts: 1, text: 'Put in order: "always / I / read / books".', opts: o4('I always read books.', 'I read always books.', 'Always I read books.', 'I read books always.'), ans: 'A', why: 'The frequency adverb goes before the main verb: <b>I always read books.</b>' },
    { sec: 'Time', name: 'Question 7', pts: 1, text: '"______ do you go to school?" – "At 7 o’clock."', opts: o4('When', 'Where', 'Who', 'What colour'), ans: 'A', why: 'We ask <b>When</b> (or What time) for a time.' },
    { sec: 'Time', name: 'Question 8', pts: 1, text: '"Once a week" means ______ time a week.', opts: o4('one', 'two', 'three', 'no'), ans: 'A', why: 'Once = <b>one</b> time.' },
    { sec: 'Time', name: 'Question 9', pts: 1, text: 'morning, afternoon, ______', opts: o4('evening', 'week', 'year', 'Monday'), ans: 'A', why: 'After afternoon comes the <b>evening</b>.' },
    { sec: 'Grammar', name: 'Question 10', pts: 1, text: 'A frequency adverb usually goes ______ the main verb.', opts: o4('before', 'after', 'without', 'far from'), ans: 'A', why: 'Frequency adverbs usually go <b>before</b> the main verb.' },
  ],
},

/* ═══════════ TEST 5 — COMPARATIVES ═══════════ */
{
  id: 6905, title: 'Test 5 · Comparing things', time: 20,
  questions: [
    { sec: 'Comparative', name: 'Question 1', pts: 1, text: '"An elephant is ______ than a cat." (big)', opts: o4('bigger', 'big', 'biggest', 'more big'), ans: 'A', why: 'Short adjective + -er: <b>bigger</b>.' },
    { sec: 'Comparative', name: 'Question 2', pts: 1, text: '"This book is ______ than that one." (interesting)', opts: o4('more interesting', 'interestinger', 'most interesting', 'interesting'), ans: 'A', why: 'Long adjective uses <b>more</b> + adjective.' },
    { sec: 'Superlative', name: 'Question 3', pts: 1, text: '"He is the ______ boy in the class." (tall)', opts: o4('tallest', 'taller', 'tall', 'most tall'), ans: 'A', why: 'Short adjective superlative + -est: the <b>tallest</b>.' },
    { sec: 'Comparative', name: 'Question 4', pts: 1, text: 'The comparative of "small" is ______.', opts: o4('smaller', 'small', 'smallest', 'more small'), ans: 'A', why: 'small + -er = <b>smaller</b>.' },
    { sec: 'Comparative', name: 'Question 5', pts: 1, text: '"A cheetah is ______ than a turtle." (fast)', opts: o4('faster', 'fast', 'fastest', 'more fast'), ans: 'A', why: 'fast + -er = <b>faster</b>.' },
    { sec: 'Superlative', name: 'Question 6', pts: 1, text: 'The superlative of "good" is ______.', opts: o4('the best', 'the goodest', 'the gooder', 'the more good'), ans: 'A', why: 'good → better → <b>the best</b> (irregular).' },
    { sec: 'Superlative', name: 'Question 7', pts: 1, text: '"Mount Everest is the ______ mountain." (high)', opts: o4('highest', 'higher', 'high', 'most high'), ans: 'A', why: 'high + -est = the <b>highest</b>.' },
    { sec: 'Comparative', name: 'Question 8', pts: 1, text: '"My bag is ______ than yours." (heavy)', opts: o4('heavier', 'heavyer', 'heaviest', 'more heavy'), ans: 'A', why: 'heavy → <b>heavier</b> (y becomes i + er).' },
    { sec: 'Comparative', name: 'Question 9', pts: 1, text: '"She is ______ than her sister." (young)', opts: o4('younger', 'young', 'youngest', 'more young'), ans: 'A', why: 'young + -er = <b>younger</b>.' },
    { sec: 'Comparative', name: 'Question 10', pts: 1, text: 'The comparative of "long" is ______.', opts: o4('longer', 'long', 'longest', 'more long'), ans: 'A', why: 'long + -er = <b>longer</b>.' },
  ],
},

/* ═══════════ TEST 6 — HEALTH ═══════════ */
{
  id: 6906, title: 'Test 6 · What’s the matter?', time: 20,
  questions: [
    { sec: 'Health', name: 'Question 1', pts: 1, text: '"What’s the ______?" – "I have a headache."', opts: o4('matter', 'colour', 'time', 'name'), ans: 'A', why: 'We ask <b>What’s the matter?</b> when someone is ill.' },
    { sec: 'Health', name: 'Question 2', pts: 1, text: 'When your head hurts, you have a ______.', opts: o4('headache', 'toothache', 'cold', 'fever'), ans: 'A', why: 'A pain in the head is a <b>headache</b>.' },
    { sec: 'Health', name: 'Question 3', pts: 1, text: 'When your tooth hurts, you have a ______.', opts: o4('toothache', 'headache', 'sore throat', 'cough'), ans: 'A', why: 'A pain in a tooth is a <b>toothache</b>.' },
    { sec: 'Advice', name: 'Question 4', pts: 1, text: 'When you are ill, you should see a ______.', opts: o4('doctor', 'teacher', 'driver', 'farmer'), ans: 'A', why: 'When ill we should see a <b>doctor</b>.' },
    { sec: 'Health', name: 'Question 5', pts: 1, text: 'When it hurts to swallow, you have a ______.', opts: o4('sore throat', 'headache', 'toothache', 'fever'), ans: 'A', why: 'Pain in the throat is a <b>sore throat</b>.' },
    { sec: 'Advice', name: 'Question 6', pts: 1, text: '"You should drink water and get some ______."', opts: o4('rest', 'sport', 'homework', 'candy'), ans: 'A', why: 'When ill you should get some <b>rest</b>.' },
    { sec: 'Health', name: 'Question 7', pts: 1, text: 'A high body temperature is called a ______.', opts: o4('fever', 'cold hand', 'headache', 'cough'), ans: 'A', why: 'A high temperature is a <b>fever</b>.' },
    { sec: 'Advice', name: 'Question 8', pts: 1, text: '"You should ______ this medicine twice a day."', opts: o4('take', 'make', 'do', 'play'), ans: 'A', why: 'We <b>take</b> medicine.' },
    { sec: 'Health', name: 'Question 9', pts: 1, text: 'To stay healthy, you should eat ______ food.', opts: o4('healthy', 'junk', 'old', 'cold'), ans: 'A', why: 'To be well we eat <b>healthy</b> food.' },
    { sec: 'Health', name: 'Question 10', pts: 1, text: 'When you sneeze and cough, you may have a ______.', opts: o4('cold', 'toothache', 'headache', 'sore leg'), ans: 'A', why: 'Sneezing and coughing are signs of a <b>cold</b>.' },
  ],
},

/* ═══════════ TEST 7 — JOBS AND APPEARANCE ═══════════ */
{
  id: 6907, title: 'Test 7 · Jobs and appearance', time: 20,
  questions: [
    { sec: 'Jobs', name: 'Question 1', pts: 1, text: 'A person who teaches children is a ______.', opts: o4('teacher', 'doctor', 'pilot', 'farmer'), ans: 'A', why: 'A person who teaches is a <b>teacher</b>.' },
    { sec: 'Jobs', name: 'Question 2', pts: 1, text: 'A person who treats sick people is a ______.', opts: o4('doctor', 'teacher', 'cook', 'driver'), ans: 'A', why: 'A person who treats the sick is a <b>doctor</b>.' },
    { sec: 'Jobs', name: 'Question 3', pts: 1, text: 'A person who cooks food in a restaurant is a ______.', opts: o4('cook', 'nurse', 'pilot', 'farmer'), ans: 'A', why: 'A person who cooks is a <b>cook</b> (chef).' },
    { sec: 'Jobs', name: 'Question 4', pts: 1, text: 'A person who grows crops on a farm is a ______.', opts: o4('farmer', 'doctor', 'teacher', 'singer'), ans: 'A', why: 'A person who farms is a <b>farmer</b>.' },
    { sec: 'Jobs', name: 'Question 5', pts: 1, text: 'A person who puts out fires is a ______.', opts: o4('firefighter', 'teacher', 'cook', 'farmer'), ans: 'A', why: 'A person who fights fires is a <b>firefighter</b>.' },
    { sec: 'Appearance', name: 'Question 6', pts: 1, text: '"She has long black ______."', opts: o4('hair', 'shoes', 'book', 'apple'), ans: 'A', why: 'We describe someone’s <b>hair</b>.' },
    { sec: 'Appearance', name: 'Question 7', pts: 1, text: '"He is ______." (not short)', opts: o4('tall', 'small', 'old', 'young'), ans: 'A', why: 'The opposite of short (in height) is <b>tall</b>.' },
    { sec: 'Jobs', name: 'Question 8', pts: 1, text: 'A person who flies a plane is a ______.', opts: o4('pilot', 'driver', 'sailor', 'nurse'), ans: 'A', why: 'A person who flies a plane is a <b>pilot</b>.' },
    { sec: 'Jobs', name: 'Question 9', pts: 1, text: 'A person who acts in films is an ______.', opts: o4('actor', 'author', 'artist only', 'engineer'), ans: 'A', why: 'A person who acts is an <b>actor</b>.' },
    { sec: 'Appearance', name: 'Question 10', pts: 1, text: '"My grandma has ______ hair." (the colour of an old person)', opts: o4('grey', 'green', 'blue', 'red'), ans: 'A', why: 'Older people often have <b>grey</b> hair.' },
  ],
},

/* ═══════════ TEST 8 — DIRECTIONS AND PLACES ═══════════ */
{
  id: 6908, title: 'Test 8 · Finding the way', time: 20,
  questions: [
    { sec: 'Directions', name: 'Question 1', pts: 1, text: '"Go ______ and then turn left."', opts: o4('straight', 'sit', 'sleep', 'read'), ans: 'A', why: 'To keep going forward we say go <b>straight</b>.' },
    { sec: 'Places', name: 'Question 2', pts: 1, text: '"The bank is ______ to the post office." (beside)', opts: o4('next', 'in', 'under', 'on'), ans: 'A', why: 'Beside something = <b>next</b> to it.' },
    { sec: 'Directions', name: 'Question 3', pts: 1, text: '"Turn ______ at the corner." (not left)', opts: o4('right', 'up', 'down', 'over'), ans: 'A', why: 'The opposite of left is <b>right</b>.' },
    { sec: 'Places', name: 'Question 4', pts: 1, text: '"The park is ______ the school." (on the other side, facing)', opts: o4('opposite', 'inside', 'under', 'on'), ans: 'A', why: 'Facing across from = <b>opposite</b>.' },
    { sec: 'Places', name: 'Question 5', pts: 1, text: '"Where is the ______? I want to catch a bus."', opts: o4('bus stop', 'kitchen', 'bedroom', 'garden'), ans: 'A', why: 'We catch a bus at the <b>bus stop</b>.' },
    { sec: 'Prepositions', name: 'Question 6', pts: 1, text: '"The library is ______ the bookshop and the bank." (in the middle)', opts: o4('between', 'on', 'under', 'next only'), ans: 'A', why: 'In the middle of two things = <b>between</b>.' },
    { sec: 'Directions', name: 'Question 7', pts: 1, text: '"How do I get ______ the museum?"', opts: o4('to', 'in', 'on', 'at'), ans: 'A', why: 'How do I get <b>to</b> a place.' },
    { sec: 'Places', name: 'Question 8', pts: 1, text: 'You buy stamps at the ______.', opts: o4('post office', 'cinema', 'hospital', 'zoo'), ans: 'A', why: 'We buy stamps at the <b>post office</b>.' },
    { sec: 'Directions', name: 'Question 9', pts: 1, text: '"Go along this ______." (a way with houses on both sides)', opts: o4('street', 'chair', 'cup', 'book'), ans: 'A', why: 'We walk along a <b>street</b>.' },
    { sec: 'Places', name: 'Question 10', pts: 1, text: 'A big place with many shops where you buy food is a ______.', opts: o4('supermarket', 'library', 'school', 'hospital'), ans: 'A', why: 'We buy food at a <b>supermarket</b>.' },
  ],
},

/* ═══════════ TEST 9 — FUTURE PLANS AND WEATHER ═══════════ */
{
  id: 6909, title: 'Test 9 · What are you going to do?', time: 20,
  questions: [
    { sec: 'Going to', name: 'Question 1', pts: 1, text: '"I ______ going to visit my grandma."', opts: o4('am', 'is', 'are', 'do'), ans: 'A', why: 'With <b>I</b> we use <b>am</b> going to.' },
    { sec: 'Weather', name: 'Question 2', pts: 1, text: '"It’s cloudy. It’s going to ______."', opts: o4('rain', 'sun', 'read', 'run'), ans: 'A', why: 'Dark clouds mean it is going to <b>rain</b>.' },
    { sec: 'Going to', name: 'Question 3', pts: 1, text: '"What are you going ______ do this weekend?"', opts: o4('to', 'for', 'at', 'in'), ans: 'A', why: 'be going <b>to</b> + verb.' },
    { sec: 'Going to', name: 'Question 4', pts: 1, text: '"They are going ______ play football."', opts: o4('to', 'for', 'at', 'in'), ans: 'A', why: 'be going <b>to</b> + verb.' },
    { sec: 'Weather', name: 'Question 5', pts: 1, text: '"Tomorrow will be ______." ☀', opts: o4('sunny', 'rainy', 'snowy', 'cold'), ans: 'A', why: 'With the sun the weather is <b>sunny</b>.' },
    { sec: 'Going to', name: 'Question 6', pts: 1, text: '"She is going to ______ a new book at the shop."', opts: o4('buy', 'buys', 'bought', 'buying'), ans: 'A', why: 'After "going to" we use the base verb <b>buy</b>.' },
    { sec: 'Weather', name: 'Question 7', pts: 1, text: 'In spring the weather is often ______.', opts: o4('warm', 'freezing', 'snowy', 'stormy'), ans: 'A', why: 'Spring is usually <b>warm</b>.' },
    { sec: 'Going to', name: 'Question 8', pts: 1, text: '"We ______ going to have a picnic."', opts: o4('are', 'is', 'am', 'do'), ans: 'A', why: 'With <b>we</b> we use <b>are</b> going to.' },
    { sec: 'Weather', name: 'Question 9', pts: 1, text: '"It’s very hot today. Let’s go to the ______."', opts: o4('beach', 'library', 'post office', 'hospital'), ans: 'A', why: 'On a hot day we can go to the <b>beach</b>.' },
    { sec: 'Going to', name: 'Question 10', pts: 1, text: '"Look at the dark clouds. It ______ going to rain."', opts: o4('is', 'are', 'am', 'do'), ans: 'A', why: 'With <b>it</b> we use <b>is</b> going to.' },
  ],
},

/* ═══════════ TEST 10 — GRAMMAR REVIEW ═══════════ */
{
  id: 6910, title: 'Test 10 · Review', time: 20,
  questions: [
    { sec: 'To be', name: 'Question 1', pts: 1, text: '"She ______ a teacher."', opts: o4('is', 'am', 'are', 'be'), ans: 'A', why: 'With <b>she</b> we use <b>is</b>.' },
    { sec: 'Present simple', name: 'Question 2', pts: 1, text: '"I ______ football every day."', opts: o4('play', 'plays', 'playing', 'played'), ans: 'A', why: 'With <b>I</b> present simple we use <b>play</b>.' },
    { sec: 'Past', name: 'Question 3', pts: 1, text: '"Yesterday we ______ to the park."', opts: o4('went', 'go', 'goes', 'going'), ans: 'A', why: 'The past of go is <b>went</b>.' },
    { sec: 'Continuous', name: 'Question 4', pts: 1, text: '"Look! It ______ raining."', opts: o4('is', 'are', 'am', 'do'), ans: 'A', why: 'With <b>it</b> now we use <b>is</b> raining.' },
    { sec: 'Comparative', name: 'Question 5', pts: 1, text: '"An elephant is ______ than a mouse." (big)', opts: o4('bigger', 'big', 'biggest', 'more big'), ans: 'A', why: 'big + -er = <b>bigger</b>.' },
    { sec: 'Routine', name: 'Question 6', pts: 1, text: '"I ______ up at six o’clock."', opts: o4('get', 'gets', 'got', 'getting'), ans: 'A', why: 'With <b>I</b> we use <b>get</b> up.' },
    { sec: 'Questions', name: 'Question 7', pts: 1, text: '"______ you like ice cream?"', opts: o4('Do', 'Does', 'Are', 'Is'), ans: 'A', why: 'With <b>you</b> we ask <b>Do you...?</b>' },
    { sec: 'Can', name: 'Question 8', pts: 1, text: '"He can ______ English very well."', opts: o4('speak', 'speaks', 'speaking', 'spoke'), ans: 'A', why: 'After <b>can</b> we use the base verb <b>speak</b>.' },
    { sec: 'Irregular', name: 'Question 9', pts: 1, text: 'The past of "have" is ______.', opts: o4('had', 'haved', 'has', 'having'), ans: 'A', why: 'The past of have is <b>had</b>.' },
    { sec: 'Health', name: 'Question 10', pts: 1, text: '"What’s the matter?" – "I have a ______."', opts: o4('headache', 'apple', 'pencil', 'holiday'), ans: 'A', why: 'A pain in the head is a <b>headache</b>.' },
  ],
},

/* ═══════════ TEST 11 — EVERY DAY HABITS ═══════════ */
{
  id: 8201, title: 'Test 11 · Every day habits', time: 20,
  questions: [
    { sec: 'Routine', name: 'Question 1', pts: 1, text: '"My sister ______ her homework after dinner." (do)', opts: o4('do', 'does', 'doing', 'did'), ans: 'B', why: 'With <b>my sister (she)</b> we use <b>does</b>.' },
    { sec: 'Routine', name: 'Question 2', pts: 1, text: '"I usually ______ up at half past six." (get)', opts: o4('get', 'gets', 'got', 'getting'), ans: 'A', why: 'With <b>I</b> present simple we use <b>get</b>.' },
    { sec: 'Routine', name: 'Question 3', pts: 1, text: '"He ______ his face every morning." (wash)', opts: o4('wash', 'washing', 'washes', 'washed'), ans: 'C', why: 'With <b>he</b> we add -es: <b>washes</b>.' },
    { sec: 'Routine', name: 'Question 4', pts: 1, text: '"We ______ to bed at ten o’clock." (go)', opts: o4('goes', 'going', 'gone', 'go'), ans: 'D', why: 'With <b>we</b> we use <b>go</b>.' },
    { sec: 'Routine', name: 'Question 5', pts: 1, text: '"She ______ dressed and eats breakfast." (get)', opts: o4('get', 'gets', 'getting', 'got'), ans: 'B', why: 'With <b>she</b> we use <b>gets</b>.' },
    { sec: 'Routine', name: 'Question 6', pts: 1, text: '"They ______ the bus to school." (catch)', opts: o4('catch', 'catches', 'catching', 'caught'), ans: 'A', why: 'With <b>they</b> present simple we use <b>catch</b>.' },
    { sec: 'Routine', name: 'Question 7', pts: 1, text: '"My dad ______ the newspaper in the morning." (read)', opts: o4('read', 'reading', 'reads', 'readed'), ans: 'C', why: 'With <b>my dad (he)</b> we use <b>reads</b>.' },
    { sec: 'Routine', name: 'Question 8', pts: 1, text: '"After lunch, the children ______ a short rest." (have)', opts: o4('has', 'having', 'had', 'have'), ans: 'D', why: 'With <b>the children (they)</b> we use <b>have</b>.' },
    { sec: 'Routine', name: 'Question 9', pts: 1, text: '"In the evening I ______ TV with my family." (watch)', opts: o4('watches', 'watch', 'watching', 'watched'), ans: 'B', why: 'With <b>I</b> present simple we use <b>watch</b>.' },
    { sec: 'Question', name: 'Question 10', pts: 1, text: '"What time ______ she start school?"', opts: o4('does', 'do', 'is', 'are'), ans: 'A', why: 'With <b>she</b> we ask with <b>does</b>.' },
  ],
},

/* ═══════════ TEST 12 — SIMPLE OR CONTINUOUS? ═══════════ */
{
  id: 8202, title: 'Test 12 · Simple or continuous?', time: 20,
  questions: [
    { sec: 'Grammar', name: 'Question 1', pts: 1, text: '"Look! It ______ now." (rain)', opts: o4('is raining', 'rains', 'rain', 'rained'), ans: 'A', why: 'For an action happening now: <b>is raining</b>.' },
    { sec: 'Grammar', name: 'Question 2', pts: 1, text: '"Every day she ______ to work by bike." (go)', opts: o4('is going', 'going', 'goes', 'go'), ans: 'C', why: 'A daily habit uses the present simple: <b>goes</b>.' },
    { sec: 'Grammar', name: 'Question 3', pts: 1, text: '"Listen! Someone ______ the piano." (play)', opts: o4('plays', 'is playing', 'play', 'played'), ans: 'B', why: 'An action happening now: <b>is playing</b>.' },
    { sec: 'Grammar', name: 'Question 4', pts: 1, text: '"We ______ football every Sunday." (play)', opts: o4('are playing', 'plays', 'playing', 'play'), ans: 'D', why: 'A habit with <b>we</b> uses the simple form <b>play</b>.' },
    { sec: 'Grammar', name: 'Question 5', pts: 1, text: '"Right now the students ______ a test." (do)', opts: o4('are doing', 'do', 'does', 'did'), ans: 'A', why: 'Happening right now: <b>are doing</b>.' },
    { sec: 'Grammar', name: 'Question 6', pts: 1, text: 'Which word goes with the present continuous?', opts: o4('every day', 'always', 'now', 'on Mondays'), ans: 'C', why: 'The present continuous goes with <b>now</b>.' },
    { sec: 'Grammar', name: 'Question 7', pts: 1, text: '"My brother ______ his teeth twice a day." (brush)', opts: o4('is brushing', 'brushes', 'brush', 'brushing'), ans: 'B', why: 'A habit with <b>he</b>: <b>brushes</b>.' },
    { sec: 'Grammar', name: 'Question 8', pts: 1, text: '"Be quiet! The baby ______." (sleep)', opts: o4('sleeps', 'sleep', 'slept', 'is sleeping'), ans: 'D', why: 'Happening now: <b>is sleeping</b>.' },
    { sec: 'Grammar', name: 'Question 9', pts: 1, text: 'Which word goes with the present simple?', opts: o4('usually', 'now', 'at the moment', 'Look!'), ans: 'A', why: 'The present simple goes with <b>usually</b>.' },
    { sec: 'Grammar', name: 'Question 10', pts: 1, text: '"I ______ a shower every morning." (have)', opts: o4('am having', 'has', 'have', 'having'), ans: 'C', why: 'A daily habit with <b>I</b>: <b>have</b>.' },
  ],
},

/* ═══════════ TEST 13 — LAST WEEKEND (REGULAR VERBS) ═══════════ */
{
  id: 8203, title: 'Test 13 · Last weekend (regular verbs)', time: 20,
  questions: [
    { sec: 'Past', name: 'Question 1', pts: 1, text: '"We ______ football yesterday." (play)', opts: o4('play', 'played', 'plays', 'playing'), ans: 'B', why: 'Regular past adds -ed: <b>played</b>.' },
    { sec: 'Past', name: 'Question 2', pts: 1, text: '"She ______ the door quietly." (close)', opts: o4('closed', 'close', 'closes', 'closing'), ans: 'A', why: 'Regular past: <b>closed</b>.' },
    { sec: 'Past', name: 'Question 3', pts: 1, text: '"They ______ TV last night." (watch)', opts: o4('watch', 'watches', 'watching', 'watched'), ans: 'D', why: 'Regular past: <b>watched</b>.' },
    { sec: 'Past', name: 'Question 4', pts: 1, text: '"I ______ my grandparents last week." (visit)', opts: o4('visit', 'visits', 'visited', 'visiting'), ans: 'C', why: 'Regular past: <b>visited</b>.' },
    { sec: 'Spelling', name: 'Question 5', pts: 1, text: '"He ______ to music yesterday." (listen)', opts: o4('listend', 'listened', 'listen', 'listning'), ans: 'B', why: 'Correct spelling of the past is <b>listened</b>.' },
    { sec: 'Past', name: 'Question 6', pts: 1, text: '"The film ______ at nine o’clock." (start)', opts: o4('started', 'start', 'starts', 'starting'), ans: 'A', why: 'Regular past: <b>started</b>.' },
    { sec: 'Spelling', name: 'Question 7', pts: 1, text: '"We ______ hard for the exam." (study)', opts: o4('studyed', 'study', 'studys', 'studied'), ans: 'D', why: 'y becomes i + ed: <b>studied</b>.' },
    { sec: 'Past', name: 'Question 8', pts: 1, text: '"She ______ go to school yesterday." (not go)', opts: o4('doesn’t', 'didn’t', 'don’t', 'isn’t'), ans: 'B', why: 'The past negative is <b>didn’t</b> + base verb.' },
    { sec: 'Question', name: 'Question 9', pts: 1, text: '"______ you enjoy the party?"', opts: o4('Do', 'Are', 'Did', 'Was'), ans: 'C', why: 'We ask about the past with <b>Did</b>.' },
    { sec: 'Spelling', name: 'Question 10', pts: 1, text: '"The dog ______ over the wall." (jump)', opts: o4('jumped', 'jumpped', 'jump', 'jumping'), ans: 'A', why: 'Regular past: <b>jumped</b> (one p).' },
  ],
},

/* ═══════════ TEST 14 — IRREGULAR PAST VERBS ═══════════ */
{
  id: 8204, title: 'Test 14 · Irregular past verbs', time: 20,
  questions: [
    { sec: 'Irregular', name: 'Question 1', pts: 1, text: 'The past of "eat" is ______.', opts: o4('ate', 'eated', 'eaten', 'eats'), ans: 'A', why: 'The past of eat is <b>ate</b>.' },
    { sec: 'Irregular', name: 'Question 2', pts: 1, text: 'The past of "go" is ______.', opts: o4('goed', 'gone', 'went', 'going'), ans: 'C', why: 'The past of go is <b>went</b>.' },
    { sec: 'Irregular', name: 'Question 3', pts: 1, text: 'The past of "see" is ______.', opts: o4('seed', 'saw', 'seen', 'sees'), ans: 'B', why: 'The past of see is <b>saw</b>.' },
    { sec: 'Irregular', name: 'Question 4', pts: 1, text: 'The past of "have" is ______.', opts: o4('haved', 'has', 'having', 'had'), ans: 'D', why: 'The past of have is <b>had</b>.' },
    { sec: 'Irregular', name: 'Question 5', pts: 1, text: '"Yesterday I ______ a new bike." (buy)', opts: o4('bought', 'buyed', 'buy', 'buying'), ans: 'A', why: 'The past of buy is <b>bought</b>.' },
    { sec: 'Irregular', name: 'Question 6', pts: 1, text: '"She ______ a beautiful song last night." (sing)', opts: o4('singed', 'sang', 'sung', 'sings'), ans: 'B', why: 'The past of sing is <b>sang</b>.' },
    { sec: 'Irregular', name: 'Question 7', pts: 1, text: '"We ______ a lot of fun at the beach." (have)', opts: o4('have', 'haved', 'had', 'having'), ans: 'C', why: 'The past of have is <b>had</b>.' },
    { sec: 'Irregular', name: 'Question 8', pts: 1, text: '"He ______ me a funny story." (tell)', opts: o4('telled', 'tell', 'telling', 'told'), ans: 'D', why: 'The past of tell is <b>told</b>.' },
    { sec: 'Irregular', name: 'Question 9', pts: 1, text: '"The children ______ in the pool." (swim)', opts: o4('swam', 'swimmed', 'swum', 'swims'), ans: 'A', why: 'The past of swim is <b>swam</b>.' },
    { sec: 'Irregular', name: 'Question 10', pts: 1, text: '"I ______ my keys yesterday." (lose)', opts: o4('losed', 'lost', 'lose', 'losing'), ans: 'B', why: 'The past of lose is <b>lost</b>.' },
  ],
},

/* ═══════════ TEST 15 — I THINK IT WILL... ═══════════ */
{
  id: 8205, title: 'Test 15 · I think it will...', time: 20,
  questions: [
    { sec: 'Future', name: 'Question 1', pts: 1, text: '"I think it ______ rain tomorrow."', opts: o4('will', 'is', 'was', 'does'), ans: 'A', why: 'For a prediction we use <b>will</b> + base verb.' },
    { sec: 'Future', name: 'Question 2', pts: 1, text: '"She ______ be ten years old next year."', opts: o4('is', 'was', 'will', 'does'), ans: 'C', why: 'For the future we use <b>will</b> be.' },
    { sec: 'Future', name: 'Question 3', pts: 1, text: '"Don’t worry, I ______ help you."', opts: o4('am', 'will', 'was', 'do'), ans: 'B', why: 'An offer uses <b>will</b>: I will help you.' },
    { sec: 'Grammar', name: 'Question 4', pts: 1, text: 'After "will" we use the ______ verb.', opts: o4('past', '-ing', '-s', 'base'), ans: 'D', why: 'After will we use the <b>base</b> verb.' },
    { sec: 'Future', name: 'Question 5', pts: 1, text: '"They ______ come to the party." (will not)', opts: o4('won’t', 'don’t', 'didn’t', 'aren’t'), ans: 'A', why: 'will not = <b>won’t</b>.' },
    { sec: 'Question', name: 'Question 6', pts: 1, text: '"______ you help me, please?"', opts: o4('Do', 'Are', 'Will', 'Was'), ans: 'C', why: 'A polite request uses <b>Will you...?</b>' },
    { sec: 'Future', name: 'Question 7', pts: 1, text: '"In the future, robots ______ do many jobs."', opts: o4('are', 'will', 'was', 'do'), ans: 'B', why: 'For the future we use <b>will</b>.' },
    { sec: 'Future', name: 'Question 8', pts: 1, text: '"It’s cold. I think I ______ wear a coat."', opts: o4('am', 'was', 'do', 'will'), ans: 'D', why: 'A decision now uses <b>will</b>.' },
    { sec: 'Future', name: 'Question 9', pts: 1, text: '"Maybe it ______ be sunny at the weekend."', opts: o4('will', 'is going', 'was', 'does'), ans: 'A', why: 'A prediction with "maybe" uses <b>will</b>.' },
    { sec: 'Future', name: 'Question 10', pts: 1, text: '"Tomorrow ______ be a holiday."', opts: o4('is', 'will', 'was', 'does'), ans: 'B', why: 'For tomorrow we use <b>will</b> be.' },
  ],
},

/* ═══════════ TEST 16 — MY WEEKEND PLANS ═══════════ */
{
  id: 8206, title: 'Test 16 · My weekend plans', time: 20,
  questions: [
    { sec: 'Going to', name: 'Question 1', pts: 1, text: '"I ______ going to visit Ha Long Bay."', opts: o4('am', 'is', 'are', 'do'), ans: 'A', why: 'With <b>I</b> we use <b>am</b> going to.' },
    { sec: 'Going to', name: 'Question 2', pts: 1, text: '"She is going ______ learn the piano."', opts: o4('for', 'at', 'to', 'in'), ans: 'C', why: 'be going <b>to</b> + verb.' },
    { sec: 'Going to', name: 'Question 3', pts: 1, text: '"We are ______ to have a picnic."', opts: o4('go', 'going', 'goes', 'gone'), ans: 'B', why: 'The pattern is be + <b>going</b> to.' },
    { sec: 'Going to', name: 'Question 4', pts: 1, text: '"______ you going to play football?"', opts: o4('Is', 'Am', 'Do', 'Are'), ans: 'D', why: 'With <b>you</b> we ask <b>Are you going to...?</b>' },
    { sec: 'Going to', name: 'Question 5', pts: 1, text: '"They are going to ______ a film tonight."', opts: o4('watch', 'watches', 'watched', 'watching'), ans: 'A', why: 'After "going to" we use the base verb <b>watch</b>.' },
    { sec: 'Going to', name: 'Question 6', pts: 1, text: '"He ______ going to buy a new bike."', opts: o4('am', 'are', 'is', 'do'), ans: 'C', why: 'With <b>he</b> we use <b>is</b> going to.' },
    { sec: 'Weather', name: 'Question 7', pts: 1, text: '"Look at the clouds! It’s going to ______." ☁', opts: o4('sun', 'rain', 'read', 'run'), ans: 'B', why: 'Dark clouds mean it is going to <b>rain</b>.' },
    { sec: 'Going to', name: 'Question 8', pts: 1, text: '"My parents are going to ______ a new house."', opts: o4('buys', 'bought', 'buying', 'buy'), ans: 'D', why: 'After "going to" we use the base verb <b>buy</b>.' },
    { sec: 'Going to', name: 'Question 9', pts: 1, text: '"I’m tired. I’m going to ______ early tonight."', opts: o4('sleep', 'sleeps', 'slept', 'sleeping'), ans: 'A', why: 'After "going to" we use the base verb <b>sleep</b>.' },
    { sec: 'Grammar', name: 'Question 10', pts: 1, text: 'We use "be going to" to talk about ______ plans.', opts: o4('past', 'present', 'future', 'old'), ans: 'C', why: 'We use "be going to" for <b>future</b> plans.' },
  ],
},

/* ═══════════ TEST 17 — BIGGER AND FASTER ═══════════ */
{
  id: 8207, title: 'Test 17 · Bigger and faster', time: 20,
  questions: [
    { sec: 'Comparative', name: 'Question 1', pts: 1, text: '"A lion is ______ than a cat." (strong)', opts: o4('stronger', 'strong', 'strongest', 'more strong'), ans: 'A', why: 'Short adjective + -er: <b>stronger</b>.' },
    { sec: 'Comparative', name: 'Question 2', pts: 1, text: '"This test is ______ than the last one." (difficult)', opts: o4('difficulter', 'difficultest', 'more difficult', 'most difficult'), ans: 'C', why: 'Long adjective uses <b>more</b> + adjective.' },
    { sec: 'Comparative', name: 'Question 3', pts: 1, text: '"Today is ______ than yesterday." (hot)', opts: o4('hoter', 'hotter', 'hottest', 'more hot'), ans: 'B', why: 'We double the t: <b>hotter</b>.' },
    { sec: 'Comparative', name: 'Question 4', pts: 1, text: 'The comparative of "happy" is ______.', opts: o4('happyer', 'more happy', 'happiest', 'happier'), ans: 'D', why: 'y becomes i + er: <b>happier</b>.' },
    { sec: 'Comparative', name: 'Question 5', pts: 1, text: '"My bag is ______ than your bag." (heavy)', opts: o4('heavier', 'heavyer', 'heaviest', 'more heavy'), ans: 'A', why: 'y becomes i + er: <b>heavier</b>.' },
    { sec: 'Comparative', name: 'Question 6', pts: 1, text: '"A plane is ______ than a car." (fast)', opts: o4('fast', 'fastest', 'faster', 'more fast'), ans: 'C', why: 'fast + -er = <b>faster</b>.' },
    { sec: 'Comparative', name: 'Question 7', pts: 1, text: '"This road is ______ than that one." (good)', opts: o4('gooder', 'better', 'best', 'more good'), ans: 'B', why: 'good → <b>better</b> (irregular).' },
    { sec: 'Comparative', name: 'Question 8', pts: 1, text: '"Winter is ______ than summer." (cold)', opts: o4('cold', 'coldest', 'more cold', 'colder'), ans: 'D', why: 'cold + -er = <b>colder</b>.' },
    { sec: 'Grammar', name: 'Question 9', pts: 1, text: 'We use "than" after a ______ adjective.', opts: o4('comparative', 'superlative', 'long', 'short'), ans: 'A', why: 'We use "than" after a <b>comparative</b> adjective.' },
    { sec: 'Comparative', name: 'Question 10', pts: 1, text: 'The comparative of "long" is ______.', opts: o4('longest', 'longer', 'long', 'more long'), ans: 'B', why: 'long + -er = <b>longer</b>.' },
  ],
},

/* ═══════════ TEST 18 — THE BEST IN THE WORLD ═══════════ */
{
  id: 8208, title: 'Test 18 · The best in the world', time: 20,
  questions: [
    { sec: 'Superlative', name: 'Question 1', pts: 1, text: '"The Nile is the ______ river in the world." (long)', opts: o4('longest', 'longer', 'long', 'more long'), ans: 'A', why: 'Short adjective + -est: the <b>longest</b>.' },
    { sec: 'Superlative', name: 'Question 2', pts: 1, text: '"He is the ______ pupil in the class." (clever)', opts: o4('cleverer', 'more clever', 'cleverest', 'clever'), ans: 'C', why: 'clever + -est = the <b>cleverest</b>.' },
    { sec: 'Superlative', name: 'Question 3', pts: 1, text: 'The superlative of "good" is ______.', opts: o4('the goodest', 'the best', 'the better', 'the more good'), ans: 'B', why: 'good → better → <b>the best</b> (irregular).' },
    { sec: 'Superlative', name: 'Question 4', pts: 1, text: '"Everest is the ______ mountain on Earth." (high)', opts: o4('higher', 'high', 'more high', 'highest'), ans: 'D', why: 'high + -est = the <b>highest</b>.' },
    { sec: 'Superlative', name: 'Question 5', pts: 1, text: '"She is the ______ girl in the team." (tall)', opts: o4('tallest', 'taller', 'tall', 'more tall'), ans: 'A', why: 'tall + -est = the <b>tallest</b>.' },
    { sec: 'Superlative', name: 'Question 6', pts: 1, text: '"This is the ______ film I have ever seen." (interesting)', opts: o4('interestingest', 'more interesting', 'most interesting', 'interesting'), ans: 'C', why: 'Long adjective uses the <b>most</b> + adjective.' },
    { sec: 'Superlative', name: 'Question 7', pts: 1, text: 'The superlative of "bad" is ______.', opts: o4('the baddest', 'the worst', 'the worse', 'the more bad'), ans: 'B', why: 'bad → worse → <b>the worst</b> (irregular).' },
    { sec: 'Superlative', name: 'Question 8', pts: 1, text: '"February is the ______ month of the year." (short)', opts: o4('shorter', 'short', 'more short', 'shortest'), ans: 'D', why: 'short + -est = the <b>shortest</b>.' },
    { sec: 'Grammar', name: 'Question 9', pts: 1, text: 'We usually put ______ before a superlative.', opts: o4('the', 'a', 'an', 'than'), ans: 'A', why: 'We usually put <b>the</b> before a superlative.' },
    { sec: 'Superlative', name: 'Question 10', pts: 1, text: '"My grandfather is the ______ person in my family." (old)', opts: o4('older', 'oldest', 'old', 'more old'), ans: 'B', why: 'old + -est = the <b>oldest</b>.' },
  ],
},

/* ═══════════ TEST 19 — HOW WE DO THINGS ═══════════ */
{
  id: 8209, title: 'Test 19 · How we do things', time: 20,
  questions: [
    { sec: 'Adverb', name: 'Question 1', pts: 1, text: '"The turtle walks ______." (slow) 🐢', opts: o4('slowly', 'slow', 'slowest', 'slower'), ans: 'A', why: 'slow + -ly = <b>slowly</b>.' },
    { sec: 'Adverb', name: 'Question 2', pts: 1, text: '"She sings very ______." (beautiful)', opts: o4('beautiful', 'beauty', 'beautifully', 'beautifuly'), ans: 'C', why: 'beautiful + -ly = <b>beautifully</b>.' },
    { sec: 'Adverb', name: 'Question 3', pts: 1, text: '"He runs ______." (quick)', opts: o4('quick', 'quickly', 'quicker', 'quickest'), ans: 'B', why: 'quick + -ly = <b>quickly</b>.' },
    { sec: 'Adverb', name: 'Question 4', pts: 1, text: '"Please speak ______; the baby is asleep." (quiet)', opts: o4('quiet', 'quieter', 'quietest', 'quietly'), ans: 'D', why: 'quiet + -ly = <b>quietly</b>.' },
    { sec: 'Adverb', name: 'Question 5', pts: 1, text: 'The adverb of "good" is ______.', opts: o4('well', 'goodly', 'gooder', 'best'), ans: 'A', why: 'The adverb of good is <b>well</b> (irregular).' },
    { sec: 'Grammar', name: 'Question 6', pts: 1, text: 'We make many adverbs by adding ______ to the adjective.', opts: o4('-ed', '-ing', '-ly', '-er'), ans: 'C', why: 'Many adverbs add <b>-ly</b> to the adjective.' },
    { sec: 'Adverb', name: 'Question 7', pts: 1, text: '"The cat moved ______ and caught the mouse." (careful)', opts: o4('careful', 'carefully', 'carefuly', 'carefuller'), ans: 'B', why: 'careful + -ly = <b>carefully</b>.' },
    { sec: 'Adverb', name: 'Question 8', pts: 1, text: '"My friend writes very ______." (neat)', opts: o4('neat', 'neater', 'neatest', 'neatly'), ans: 'D', why: 'neat + -ly = <b>neatly</b>.' },
    { sec: 'Adverb', name: 'Question 9', pts: 1, text: '"The children played ______ in the garden." (happy)', opts: o4('happily', 'happy', 'happyly', 'happier'), ans: 'A', why: 'happy → <b>happily</b> (y becomes i + ly).' },
    { sec: 'Grammar', name: 'Question 10', pts: 1, text: 'An adverb of manner tells us ______ we do something.', opts: o4('when', 'how', 'where', 'who'), ans: 'B', why: 'An adverb of manner tells us <b>how</b> we do something.' },
  ],
},

/* ═══════════ TEST 20 — IN, ON OR AT? ═══════════ */
{
  id: 8210, title: 'Test 20 · In, on or at?', time: 20,
  questions: [
    { sec: 'Prepositions', name: 'Question 1', pts: 1, text: '"My birthday is ______ May."', opts: o4('in', 'on', 'at', 'to'), ans: 'A', why: 'We use <b>in</b> with months.' },
    { sec: 'Prepositions', name: 'Question 2', pts: 1, text: '"We have English ______ Monday."', opts: o4('in', 'at', 'on', 'to'), ans: 'C', why: 'We use <b>on</b> with days of the week.' },
    { sec: 'Prepositions', name: 'Question 3', pts: 1, text: '"The film starts ______ 7 o’clock."', opts: o4('in', 'at', 'on', 'to'), ans: 'B', why: 'We use <b>at</b> with clock times.' },
    { sec: 'Prepositions', name: 'Question 4', pts: 1, text: '"I go swimming ______ the weekend."', opts: o4('in', 'on', 'to', 'at'), ans: 'D', why: 'We say <b>at</b> the weekend.' },
    { sec: 'Grammar', name: 'Question 5', pts: 1, text: 'We use ______ with months and years.', opts: o4('in', 'on', 'at', 'to'), ans: 'A', why: 'We use <b>in</b> with months and years.' },
    { sec: 'Prepositions', name: 'Question 6', pts: 1, text: '"School starts ______ September."', opts: o4('at', 'on', 'in', 'to'), ans: 'C', why: 'We use <b>in</b> with months.' },
    { sec: 'Grammar', name: 'Question 7', pts: 1, text: 'We use ______ with days of the week.', opts: o4('in', 'on', 'at', 'to'), ans: 'B', why: 'We use <b>on</b> with days of the week.' },
    { sec: 'Prepositions', name: 'Question 8', pts: 1, text: '"He gets up early ______ the morning."', opts: o4('on', 'at', 'to', 'in'), ans: 'D', why: 'We say <b>in</b> the morning.' },
    { sec: 'Grammar', name: 'Question 9', pts: 1, text: 'We use ______ with clock times like 6 o’clock.', opts: o4('at', 'in', 'on', 'to'), ans: 'A', why: 'We use <b>at</b> with clock times.' },
    { sec: 'Prepositions', name: 'Question 10', pts: 1, text: '"Her party is ______ Saturday evening."', opts: o4('in', 'on', 'at', 'to'), ans: 'B', why: 'We say <b>on</b> Saturday evening (a named day).' },
  ],
},

/* ═══════════ TEST 21 — COUNTRIES AND NATIONALITIES ═══════════ */
{
  id: 8211, title: 'Test 21 · Countries and nationalities', time: 20,
  questions: [
    { sec: 'Nationality', name: 'Question 1', pts: 1, text: '"People from Vietnam are ______."', opts: o4('Vietnamese', 'Vietnam', 'Vietnamish', 'Vietnamland'), ans: 'A', why: 'People from Vietnam are <b>Vietnamese</b>.' },
    { sec: 'Nationality', name: 'Question 2', pts: 1, text: '"People from Japan are ______."', opts: o4('Japan', 'Japanian', 'Japanese', 'Japen'), ans: 'C', why: 'People from Japan are <b>Japanese</b>.' },
    { sec: 'Nationality', name: 'Question 3', pts: 1, text: '"People from France are ______."', opts: o4('Franceish', 'French', 'Francese', 'Frenchland'), ans: 'B', why: 'People from France are <b>French</b>.' },
    { sec: 'Nationality', name: 'Question 4', pts: 1, text: '"People from England are ______."', opts: o4('Englandese', 'Englander', 'Englishland', 'English'), ans: 'D', why: 'People from England are <b>English</b>.' },
    { sec: 'Country', name: 'Question 5', pts: 1, text: '"The capital of Vietnam is ______."', opts: o4('Ha Noi', 'Tokyo', 'Paris', 'London'), ans: 'A', why: 'The capital of Vietnam is <b>Ha Noi</b>.' },
    { sec: 'Country', name: 'Question 6', pts: 1, text: '"The Eiffel Tower is in ______." 🗼', opts: o4('Japan', 'England', 'France', 'Vietnam'), ans: 'C', why: 'The Eiffel Tower is in <b>France</b>.' },
    { sec: 'Nationality', name: 'Question 7', pts: 1, text: '"People from America are ______."', opts: o4('Americ', 'American', 'Americanese', 'Ameriland'), ans: 'B', why: 'People from America are <b>American</b>.' },
    { sec: 'Country', name: 'Question 8', pts: 1, text: '"Mount Fuji is in ______." 🗻', opts: o4('France', 'England', 'Vietnam', 'Japan'), ans: 'D', why: 'Mount Fuji is in <b>Japan</b>.' },
    { sec: 'Language', name: 'Question 9', pts: 1, text: '"In England people speak ______."', opts: o4('English', 'French', 'Japanese', 'Vietnamese'), ans: 'A', why: 'In England people speak <b>English</b>.' },
    { sec: 'Nationality', name: 'Question 10', pts: 1, text: '"People from Australia are ______."', opts: o4('Australiaese', 'Australian', 'Australish', 'Australland'), ans: 'B', why: 'People from Australia are <b>Australian</b>.' },
  ],
},

/* ═══════════ TEST 22 — AT THE TABLE ═══════════ */
{
  id: 8212, title: 'Test 22 · At the table', time: 20,
  questions: [
    { sec: 'Food', name: 'Question 1', pts: 1, text: '"I ______ like some orange juice, please."', opts: o4('would', 'am', 'do', 'have'), ans: 'A', why: 'A polite wish uses <b>would</b> like.' },
    { sec: 'Food', name: 'Question 2', pts: 1, text: '"______ you like some cake?" 🍰', opts: o4('Do', 'Are', 'Would', 'Is'), ans: 'C', why: 'A polite offer uses <b>Would you like...?</b>' },
    { sec: 'Food', name: 'Question 3', pts: 1, text: '"She would like ______ apple." 🍎', opts: o4('a', 'an', 'some', 'any'), ans: 'B', why: 'Before a vowel sound we use <b>an</b>: an apple.' },
    { sec: 'Food', name: 'Question 4', pts: 1, text: '"There isn’t ______ milk in the fridge."', opts: o4('some', 'a', 'an', 'any'), ans: 'D', why: 'In a negative sentence we use <b>any</b>.' },
    { sec: 'Food', name: 'Question 5', pts: 1, text: '"We eat soup with a ______." 🥄', opts: o4('spoon', 'book', 'shoe', 'pen'), ans: 'A', why: 'We eat soup with a <b>spoon</b>.' },
    { sec: 'Food', name: 'Question 6', pts: 1, text: '"Bananas, apples and oranges are all ______."', opts: o4('meat', 'drinks', 'fruit', 'toys'), ans: 'C', why: 'Bananas, apples and oranges are <b>fruit</b>.' },
    { sec: 'Food', name: 'Question 7', pts: 1, text: '"Would you like ______ water?" 💧', opts: o4('a', 'some', 'an', 'many'), ans: 'B', why: 'In an offer with an uncountable noun we use <b>some</b>.' },
    { sec: 'Food', name: 'Question 8', pts: 1, text: '"Carrots and beans are ______." 🥕', opts: o4('fruit', 'drinks', 'meat', 'vegetables'), ans: 'D', why: 'Carrots and beans are <b>vegetables</b>.' },
    { sec: 'Food', name: 'Question 9', pts: 1, text: '"I’m thirsty. I’d like something to ______."', opts: o4('drink', 'read', 'wear', 'sleep'), ans: 'A', why: 'When thirsty we want something to <b>drink</b>.' },
    { sec: 'Food', name: 'Question 10', pts: 1, text: '"How ______ sugar would you like?"', opts: o4('many', 'much', 'old', 'often'), ans: 'B', why: 'Sugar is uncountable, so we use <b>much</b>.' },
  ],
},

/* ═══════════ TEST 23 — AROUND THE TOWN ═══════════ */
{
  id: 8213, title: 'Test 23 · Around the town', time: 20,
  questions: [
    { sec: 'Places', name: 'Question 1', pts: 1, text: '"You borrow books at the ______." 📚', opts: o4('library', 'bakery', 'cinema', 'zoo'), ans: 'A', why: 'We borrow books at the <b>library</b>.' },
    { sec: 'Places', name: 'Question 2', pts: 1, text: '"You watch films at the ______." 🎬', opts: o4('hospital', 'park', 'cinema', 'bank'), ans: 'C', why: 'We watch films at the <b>cinema</b>.' },
    { sec: 'Directions', name: 'Question 3', pts: 1, text: '"Go straight and then ______ left."', opts: o4('sit', 'turn', 'eat', 'sleep'), ans: 'B', why: 'To change direction we say <b>turn</b> left.' },
    { sec: 'Places', name: 'Question 4', pts: 1, text: '"You send letters at the ______." ✉', opts: o4('school', 'zoo', 'park', 'post office'), ans: 'D', why: 'We send letters at the <b>post office</b>.' },
    { sec: 'Prepositions', name: 'Question 5', pts: 1, text: '"The bank is ______ to the supermarket." (beside)', opts: o4('next', 'in', 'under', 'on'), ans: 'A', why: 'Beside something = <b>next</b> to it.' },
    { sec: 'Prepositions', name: 'Question 6', pts: 1, text: '"The shop is ______ the bank and the café." (in the middle)', opts: o4('on', 'under', 'between', 'in'), ans: 'C', why: 'In the middle of two things = <b>between</b>.' },
    { sec: 'Places', name: 'Question 7', pts: 1, text: '"Sick people go to the ______." 🏥', opts: o4('bakery', 'hospital', 'cinema', 'park'), ans: 'B', why: 'Sick people go to the <b>hospital</b>.' },
    { sec: 'Prepositions', name: 'Question 8', pts: 1, text: '"The cat is ______ the table, on the floor." (below)', opts: o4('on', 'in', 'next', 'under'), ans: 'D', why: 'Below something = <b>under</b> it.' },
    { sec: 'Directions', name: 'Question 9', pts: 1, text: '"Turn ______ at the corner." (not left)', opts: o4('right', 'up', 'down', 'over'), ans: 'A', why: 'The opposite of left is <b>right</b>.' },
    { sec: 'Places', name: 'Question 10', pts: 1, text: '"You catch a train at the ______." 🚉', opts: o4('airport', 'station', 'harbour', 'garden'), ans: 'B', why: 'We catch a train at the <b>station</b>.' },
  ],
},

/* ═══════════ TEST 24 — FEELINGS AND LOOKS ═══════════ */
{
  id: 8214, title: 'Test 24 · Feelings and looks', time: 20,
  questions: [
    { sec: 'Feelings', name: 'Question 1', pts: 1, text: '"She got a present, so she is ______." 🎁', opts: o4('happy', 'sad', 'angry', 'tired'), ans: 'A', why: 'A nice surprise makes you <b>happy</b>.' },
    { sec: 'Feelings', name: 'Question 2', pts: 1, text: '"He lost his dog, so he feels ______." 😢', opts: o4('happy', 'excited', 'sad', 'hungry'), ans: 'C', why: 'Losing something makes you <b>sad</b>.' },
    { sec: 'Feelings', name: 'Question 3', pts: 1, text: '"I worked all day. Now I am ______." 😴', opts: o4('happy', 'tired', 'cold', 'funny'), ans: 'B', why: 'After a lot of work you feel <b>tired</b>.' },
    { sec: 'Feelings', name: 'Question 4', pts: 1, text: '"We are going on holiday tomorrow. We are ______!" 🎉', opts: o4('bored', 'sad', 'angry', 'excited'), ans: 'D', why: 'Waiting for something fun makes you <b>excited</b>.' },
    { sec: 'Appearance', name: 'Question 5', pts: 1, text: '"My friend has short ______ hair." (the colour of night)', opts: o4('black', 'tall', 'old', 'loud'), ans: 'A', why: 'The colour of night is <b>black</b>.' },
    { sec: 'Appearance', name: 'Question 6', pts: 1, text: '"He wears ______ because he can’t see well." 👓', opts: o4('shoes', 'gloves', 'glasses', 'socks'), ans: 'C', why: 'To see well we wear <b>glasses</b>.' },
    { sec: 'Appearance', name: 'Question 7', pts: 1, text: '"She is ______, not fat."', opts: o4('tall', 'thin', 'old', 'young'), ans: 'B', why: 'The opposite of fat is <b>thin</b>.' },
    { sec: 'Feelings', name: 'Question 8', pts: 1, text: '"There is nothing to do. I am ______." 😐', opts: o4('happy', 'excited', 'hungry', 'bored'), ans: 'D', why: 'With nothing to do you feel <b>bored</b>.' },
    { sec: 'Appearance', name: 'Question 9', pts: 1, text: '"My baby brother is ______, not tall."', opts: o4('short', 'long', 'big', 'old'), ans: 'A', why: 'The opposite of tall is <b>short</b>.' },
    { sec: 'Feelings', name: 'Question 10', pts: 1, text: '"It’s my birthday and I feel ______." 😄', opts: o4('sad', 'glad', 'angry', 'tired'), ans: 'B', why: 'On a happy day you feel <b>glad</b>.' },
  ],
},

/* ═══════════ TEST 25 — AT THE DOCTOR ═══════════ */
{
  id: 8215, title: 'Test 25 · At the doctor', time: 20,
  questions: [
    { sec: 'Health', name: 'Question 1', pts: 1, text: '"My tooth hurts. I have a ______." 🦷', opts: o4('toothache', 'headache', 'cold', 'fever'), ans: 'A', why: 'A pain in a tooth is a <b>toothache</b>.' },
    { sec: 'Health', name: 'Question 2', pts: 1, text: '"What’s the ______ with you?"', opts: o4('name', 'time', 'matter', 'colour'), ans: 'C', why: 'We ask <b>What’s the matter?</b> when someone is ill.' },
    { sec: 'Advice', name: 'Question 3', pts: 1, text: '"You are ill. You should see a ______."', opts: o4('teacher', 'doctor', 'farmer', 'pilot'), ans: 'B', why: 'When ill we should see a <b>doctor</b>.' },
    { sec: 'Health', name: 'Question 4', pts: 1, text: '"It hurts when I swallow. I have a ______."', opts: o4('headache', 'toothache', 'fever', 'sore throat'), ans: 'D', why: 'Pain in the throat is a <b>sore throat</b>.' },
    { sec: 'Advice', name: 'Question 5', pts: 1, text: '"You have a cold. You should ______ in bed."', opts: o4('stay', 'run', 'jump', 'play'), ans: 'A', why: 'With a cold you should <b>stay</b> in bed and rest.' },
    { sec: 'Health', name: 'Question 6', pts: 1, text: '"My head hurts. I have a ______."', opts: o4('toothache', 'cold', 'headache', 'cough'), ans: 'C', why: 'A pain in the head is a <b>headache</b>.' },
    { sec: 'Advice', name: 'Question 7', pts: 1, text: '"You should ______ this medicine three times a day."', opts: o4('make', 'take', 'play', 'do'), ans: 'B', why: 'We <b>take</b> medicine.' },
    { sec: 'Health', name: 'Question 8', pts: 1, text: '"My body is very hot. I have a ______." 🌡', opts: o4('cold hand', 'headache', 'cough', 'fever'), ans: 'D', why: 'A high temperature is a <b>fever</b>.' },
    { sec: 'Advice', name: 'Question 9', pts: 1, text: '"To stay healthy, you should ______ a lot of water." 💧', opts: o4('drink', 'throw', 'read', 'wear'), ans: 'A', why: 'To be healthy we should <b>drink</b> water.' },
    { sec: 'Health', name: 'Question 10', pts: 1, text: '"I keep sneezing and coughing. I have a ______."', opts: o4('toothache', 'cold', 'sore leg', 'headache'), ans: 'B', why: 'Sneezing and coughing are signs of a <b>cold</b>.' },
  ],
},

/* ═══════════ TEST 26 — ASKING QUESTIONS ═══════════ */
{
  id: 8216, title: 'Test 26 · Asking questions', time: 20,
  questions: [
    { sec: 'Question', name: 'Question 1', pts: 1, text: '"______ is your name?" – "My name is Mai."', opts: o4('What', 'Who', 'Where', 'When'), ans: 'A', why: 'We ask <b>What</b> for a name.' },
    { sec: 'Question', name: 'Question 2', pts: 1, text: '"______ do you live?" – "In Ha Noi."', opts: o4('What', 'When', 'Where', 'Why'), ans: 'C', why: 'We ask <b>Where</b> for a place.' },
    { sec: 'Question', name: 'Question 3', pts: 1, text: '"______ old are you?" – "I am ten."', opts: o4('What', 'How', 'Who', 'Where'), ans: 'B', why: 'We ask <b>How old</b> for age.' },
    { sec: 'Question', name: 'Question 4', pts: 1, text: '"______ is your birthday?" – "In June."', opts: o4('Where', 'What colour', 'Who', 'When'), ans: 'D', why: 'We ask <b>When</b> for a time or date.' },
    { sec: 'Question', name: 'Question 5', pts: 1, text: '"______ are you sad?" – "Because I lost my pen."', opts: o4('Why', 'What', 'Where', 'Who'), ans: 'A', why: 'We ask <b>Why</b> for a reason.' },
    { sec: 'Question', name: 'Question 6', pts: 1, text: '"______ is that boy?" – "He is my brother."', opts: o4('What', 'Where', 'Who', 'When'), ans: 'C', why: 'We ask <b>Who</b> for a person.' },
    { sec: 'Question', name: 'Question 7', pts: 1, text: '"______ many books do you have?"', opts: o4('What', 'How', 'Who', 'Why'), ans: 'B', why: 'We ask <b>How many</b> for a number.' },
    { sec: 'Question', name: 'Question 8', pts: 1, text: '"______ do you go to school?" – "By bus."', opts: o4('Who', 'Where', 'When', 'How'), ans: 'D', why: 'We ask <b>How</b> for a way or means.' },
    { sec: 'Question', name: 'Question 9', pts: 1, text: '"______ colour is your bag?" – "It’s red."', opts: o4('What', 'Who', 'Why', 'When'), ans: 'A', why: 'We ask <b>What colour</b> for a colour.' },
    { sec: 'Question', name: 'Question 10', pts: 1, text: '"______ you like ice cream?"', opts: o4('Are', 'Do', 'Is', 'Was'), ans: 'B', why: 'With <b>you</b> we ask <b>Do you...?</b>' },
  ],
},

/* ═══════════ TEST 27 — READING: NAM’S FAMILY ═══════════ */
{
  id: 8217, title: 'Test 27 · Reading: Nam’s family', time: 20,
  questions: [
    { sec: 'Reading', name: 'Question 1', pts: 1, text: '📖 <i>Nam is eleven. He lives in Ha Noi with his parents and his little sister. His father is a doctor, his mother is a teacher, and Nam loves reading and football.</i><br>How old is Nam?', opts: o4('Eleven', 'Ten', 'Twelve', 'Nine'), ans: 'A', why: 'The text says Nam is <b>eleven</b>.' },
    { sec: 'Reading', name: 'Question 2', pts: 1, text: '📖 <i>Nam is eleven. He lives in Ha Noi with his parents and his little sister. His father is a doctor, his mother is a teacher, and Nam loves reading and football.</i><br>Where does Nam live?', opts: o4('In Hue', 'In Da Nang', 'In Ha Noi', 'In Hoi An'), ans: 'C', why: 'The text says he lives <b>in Ha Noi</b>.' },
    { sec: 'Reading', name: 'Question 3', pts: 1, text: '📖 <i>Nam is eleven. He lives in Ha Noi with his parents and his little sister. His father is a doctor, his mother is a teacher, and Nam loves reading and football.</i><br>What is Nam’s father?', opts: o4('A teacher', 'A doctor', 'A pilot', 'A cook'), ans: 'B', why: 'The text says his father is <b>a doctor</b>.' },
    { sec: 'Reading', name: 'Question 4', pts: 1, text: '📖 <i>Nam is eleven. He lives in Ha Noi with his parents and his little sister. His father is a doctor, his mother is a teacher, and Nam loves reading and football.</i><br>What is Nam’s mother?', opts: o4('A nurse', 'A doctor', 'A farmer', 'A teacher'), ans: 'D', why: 'The text says his mother is <b>a teacher</b>.' },
    { sec: 'Reading', name: 'Question 5', pts: 1, text: '📖 <i>Nam is eleven. He lives in Ha Noi with his parents and his little sister. His father is a doctor, his mother is a teacher, and Nam loves reading and football.</i><br>Who does Nam live with?', opts: o4('His parents and sister', 'His grandparents', 'His friends', 'Nobody'), ans: 'A', why: 'He lives with <b>his parents and his sister</b>.' },
    { sec: 'Reading', name: 'Question 6', pts: 1, text: '📖 <i>Nam is eleven. He lives in Ha Noi with his parents and his little sister. His father is a doctor, his mother is a teacher, and Nam loves reading and football.</i><br>What does Nam love doing?', opts: o4('Swimming', 'Singing', 'Reading and football', 'Cooking'), ans: 'C', why: 'The text says he loves <b>reading and football</b>.' },
    { sec: 'Reading', name: 'Question 7', pts: 1, text: '📖 <i>Nam is eleven. He lives in Ha Noi with his parents and his little sister. His father is a doctor, his mother is a teacher, and Nam loves reading and football.</i><br>Does Nam have a brother or a sister?', opts: o4('A brother', 'A sister', 'Two sisters', 'No one'), ans: 'B', why: 'The text says he has a little <b>sister</b>.' },
    { sec: 'Reading', name: 'Question 8', pts: 1, text: '📖 <i>Nam is eleven. He lives in Ha Noi with his parents and his little sister. His father is a doctor, his mother is a teacher, and Nam loves reading and football.</i><br>Nam’s sister is ______ than Nam.', opts: o4('older', 'taller', 'stronger', 'younger'), ans: 'D', why: 'A "little sister" is <b>younger</b> than Nam.' },
    { sec: 'Reading', name: 'Question 9', pts: 1, text: '📖 <i>Nam is eleven. He lives in Ha Noi with his parents and his little sister. His father is a doctor, his mother is a teacher, and Nam loves reading and football.</i><br>How many people are in Nam’s family?', opts: o4('Four', 'Three', 'Five', 'Two'), ans: 'A', why: 'Parents, Nam and his sister make <b>four</b>.' },
    { sec: 'Reading', name: 'Question 10', pts: 1, text: '📖 <i>Nam is eleven. He lives in Ha Noi with his parents and his little sister. His father is a doctor, his mother is a teacher, and Nam loves reading and football.</i><br>What sport does Nam love?', opts: o4('Tennis', 'Football', 'Basketball', 'Badminton'), ans: 'B', why: 'The text says he loves <b>football</b>.' },
  ],
},

/* ═══════════ TEST 28 — READING: A TRIP TO DA NANG ═══════════ */
{
  id: 8218, title: 'Test 28 · Reading: A trip to Da Nang', time: 20,
  questions: [
    { sec: 'Reading', name: 'Question 1', pts: 1, text: '📖 <i>Last summer, Mai went to Da Nang with her family for one week. They swam in the sea and ate a lot of seafood. Mai took many photos and was very happy.</i><br>Where did Mai go?', opts: o4('Da Nang', 'Ha Noi', 'Hue', 'Sa Pa'), ans: 'A', why: 'The text says Mai went to <b>Da Nang</b>.' },
    { sec: 'Reading', name: 'Question 2', pts: 1, text: '📖 <i>Last summer, Mai went to Da Nang with her family for one week. They swam in the sea and ate a lot of seafood. Mai took many photos and was very happy.</i><br>When did Mai go there?', opts: o4('Last winter', 'Last week', 'Last summer', 'Next year'), ans: 'C', why: 'The text says <b>last summer</b>.' },
    { sec: 'Reading', name: 'Question 3', pts: 1, text: '📖 <i>Last summer, Mai went to Da Nang with her family for one week. They swam in the sea and ate a lot of seafood. Mai took many photos and was very happy.</i><br>How long did they stay?', opts: o4('Two days', 'One week', 'One month', 'One day'), ans: 'B', why: 'The text says <b>one week</b>.' },
    { sec: 'Reading', name: 'Question 4', pts: 1, text: '📖 <i>Last summer, Mai went to Da Nang with her family for one week. They swam in the sea and ate a lot of seafood. Mai took many photos and was very happy.</i><br>What did they do in the sea?', opts: o4('Fished', 'Slept', 'Ran', 'Swam'), ans: 'D', why: 'The text says they <b>swam</b> in the sea.' },
    { sec: 'Reading', name: 'Question 5', pts: 1, text: '📖 <i>Last summer, Mai went to Da Nang with her family for one week. They swam in the sea and ate a lot of seafood. Mai took many photos and was very happy.</i><br>What did they eat?', opts: o4('Seafood', 'Only rice', 'Bread', 'Nothing'), ans: 'A', why: 'The text says they ate a lot of <b>seafood</b>.' },
    { sec: 'Reading', name: 'Question 6', pts: 1, text: '📖 <i>Last summer, Mai went to Da Nang with her family for one week. They swam in the sea and ate a lot of seafood. Mai took many photos and was very happy.</i><br>What did Mai take?', opts: o4('Fish', 'Shells', 'Many photos', 'A bus'), ans: 'C', why: 'The text says Mai took <b>many photos</b>.' },
    { sec: 'Reading', name: 'Question 7', pts: 1, text: '📖 <i>Last summer, Mai went to Da Nang with her family for one week. They swam in the sea and ate a lot of seafood. Mai took many photos and was very happy.</i><br>Who did Mai go with?', opts: o4('Her friends', 'Her family', 'Her teacher', 'Nobody'), ans: 'B', why: 'The text says she went with <b>her family</b>.' },
    { sec: 'Reading', name: 'Question 8', pts: 1, text: '📖 <i>Last summer, Mai went to Da Nang with her family for one week. They swam in the sea and ate a lot of seafood. Mai took many photos and was very happy.</i><br>How did Mai feel?', opts: o4('Sad', 'Tired', 'Angry', 'Happy'), ans: 'D', why: 'The text says she was very <b>happy</b>.' },
    { sec: 'Reading', name: 'Question 9', pts: 1, text: '📖 <i>Last summer, Mai went to Da Nang with her family for one week. They swam in the sea and ate a lot of seafood. Mai took many photos and was very happy.</i><br>"Last summer" tells us the trip was in the ______.', opts: o4('past', 'future', 'present', 'evening'), ans: 'A', why: '"Last summer" is a time in the <b>past</b>.' },
    { sec: 'Reading', name: 'Question 10', pts: 1, text: '📖 <i>Last summer, Mai went to Da Nang with her family for one week. They swam in the sea and ate a lot of seafood. Mai took many photos and was very happy.</i><br>The past of "go" in the story is ______.', opts: o4('goed', 'went', 'gone', 'going'), ans: 'B', why: 'The story uses <b>went</b>, the past of go.' },
  ],
},

/* ═══════════ TEST 29 — READING: TOM’S SCHOOL DAY ═══════════ */
{
  id: 8219, title: 'Test 29 · Reading: Tom’s school day', time: 20,
  questions: [
    { sec: 'Reading', name: 'Question 1', pts: 1, text: '📖 <i>Tom studies at Green Hill School. School starts at seven o’clock and his favourite subject is science. At break time he plays with his friends, and he goes home at four o’clock.</i><br>Where does Tom study?', opts: o4('Green Hill School', 'Blue Sky School', 'At home', 'Sunny School'), ans: 'A', why: 'The text says he studies at <b>Green Hill School</b>.' },
    { sec: 'Reading', name: 'Question 2', pts: 1, text: '📖 <i>Tom studies at Green Hill School. School starts at seven o’clock and his favourite subject is science. At break time he plays with his friends, and he goes home at four o’clock.</i><br>What time does school start?', opts: o4('At six', 'At eight', 'At seven', 'At nine'), ans: 'C', why: 'The text says school starts <b>at seven</b>.' },
    { sec: 'Reading', name: 'Question 3', pts: 1, text: '📖 <i>Tom studies at Green Hill School. School starts at seven o’clock and his favourite subject is science. At break time he plays with his friends, and he goes home at four o’clock.</i><br>What is Tom’s favourite subject?', opts: o4('Maths', 'Science', 'English', 'Music'), ans: 'B', why: 'The text says his favourite subject is <b>science</b>.' },
    { sec: 'Reading', name: 'Question 4', pts: 1, text: '📖 <i>Tom studies at Green Hill School. School starts at seven o’clock and his favourite subject is science. At break time he plays with his friends, and he goes home at four o’clock.</i><br>What does Tom do at break time?', opts: o4('Sleeps', 'Reads', 'Eats lunch', 'Plays with friends'), ans: 'D', why: 'The text says he <b>plays with his friends</b>.' },
    { sec: 'Reading', name: 'Question 5', pts: 1, text: '📖 <i>Tom studies at Green Hill School. School starts at seven o’clock and his favourite subject is science. At break time he plays with his friends, and he goes home at four o’clock.</i><br>What time does Tom go home?', opts: o4('At four', 'At five', 'At three', 'At two'), ans: 'A', why: 'The text says he goes home <b>at four</b>.' },
    { sec: 'Reading', name: 'Question 6', pts: 1, text: '📖 <i>Tom studies at Green Hill School. School starts at seven o’clock and his favourite subject is science. At break time he plays with his friends, and he goes home at four o’clock.</i><br>Tom is a ______.', opts: o4('teacher', 'doctor', 'pupil', 'driver'), ans: 'C', why: 'Tom studies at school, so he is a <b>pupil</b>.' },
    { sec: 'Reading', name: 'Question 7', pts: 1, text: '📖 <i>Tom studies at Green Hill School. School starts at seven o’clock and his favourite subject is science. At break time he plays with his friends, and he goes home at four o’clock.</i><br>How many hours is Tom at school (7 to 4)?', opts: o4('Eight', 'Nine', 'Ten', 'Seven'), ans: 'B', why: 'From 7 to 4 is <b>nine</b> hours.' },
    { sec: 'Reading', name: 'Question 8', pts: 1, text: '📖 <i>Tom studies at Green Hill School. School starts at seven o’clock and his favourite subject is science. At break time he plays with his friends, and he goes home at four o’clock.</i><br>"Favourite" means the one he ______ most.', opts: o4('hates', 'forgets', 'fears', 'likes'), ans: 'D', why: 'Your favourite is the one you <b>like</b> most.' },
    { sec: 'Reading', name: 'Question 9', pts: 1, text: '📖 <i>Tom studies at Green Hill School. School starts at seven o’clock and his favourite subject is science. At break time he plays with his friends, and he goes home at four o’clock.</i><br>Does Tom have friends at school?', opts: o4('Yes, he does', 'No, he doesn’t', 'Only one', 'We don’t know'), ans: 'A', why: 'He plays with his friends, so <b>yes, he does</b>.' },
    { sec: 'Reading', name: 'Question 10', pts: 1, text: '📖 <i>Tom studies at Green Hill School. School starts at seven o’clock and his favourite subject is science. At break time he plays with his friends, and he goes home at four o’clock.</i><br>At break time Tom feels ______.', opts: o4('bored', 'happy', 'ill', 'asleep'), ans: 'B', why: 'Playing with friends makes him <b>happy</b>.' },
  ],
},

/* ═══════════ TEST 30 — GRAMMAR ROUND-UP ═══════════ */
{
  id: 8220, title: 'Test 30 · Grammar round-up', time: 20,
  questions: [
    { sec: 'To be', name: 'Question 1', pts: 1, text: '"They ______ my classmates."', opts: o4('are', 'is', 'am', 'be'), ans: 'A', why: 'With <b>they</b> we use <b>are</b>.' },
    { sec: 'Past', name: 'Question 2', pts: 1, text: '"She ______ to the market yesterday." (go)', opts: o4('go', 'goes', 'went', 'going'), ans: 'C', why: 'The past of go is <b>went</b>.' },
    { sec: 'Continuous', name: 'Question 3', pts: 1, text: '"Look! The dog ______ fast." (run)', opts: o4('runs', 'is running', 'run', 'ran'), ans: 'B', why: 'Happening now: <b>is running</b>.' },
    { sec: 'Comparative', name: 'Question 4', pts: 1, text: '"A car is ______ than a bike." (fast)', opts: o4('fast', 'fastest', 'more fast', 'faster'), ans: 'D', why: 'fast + -er = <b>faster</b>.' },
    { sec: 'Superlative', name: 'Question 5', pts: 1, text: '"He is the ______ boy in the class." (young)', opts: o4('youngest', 'younger', 'young', 'more young'), ans: 'A', why: 'young + -est = the <b>youngest</b>.' },
    { sec: 'Future', name: 'Question 6', pts: 1, text: '"I think it ______ be sunny tomorrow."', opts: o4('is', 'was', 'will', 'does'), ans: 'C', why: 'For a prediction we use <b>will</b>.' },
    { sec: 'Going to', name: 'Question 7', pts: 1, text: '"We ______ going to visit the museum."', opts: o4('is', 'are', 'am', 'do'), ans: 'B', why: 'With <b>we</b> we use <b>are</b> going to.' },
    { sec: 'Prepositions', name: 'Question 8', pts: 1, text: '"My birthday is ______ July."', opts: o4('on', 'at', 'to', 'in'), ans: 'D', why: 'We use <b>in</b> with months.' },
    { sec: 'Adverb', name: 'Question 9', pts: 1, text: '"The tortoise moves ______." (slow)', opts: o4('slowly', 'slow', 'slower', 'slowest'), ans: 'A', why: 'slow + -ly = <b>slowly</b>.' },
    { sec: 'Question', name: 'Question 10', pts: 1, text: '"______ do you go to bed?" – "At nine o’clock."', opts: o4('Who', 'Where', 'When', 'What colour'), ans: 'C', why: 'We ask <b>When</b> for a time.' },
  ],
},

];

SUBJECTS.push({
  id: 'tienganh5', name: 'Tiếng Anh', short: 'Tiếng Anh 5', icon: '🔤', grade: 5,
  exams: TA5_EXAMS, ready: true,
  heroTitle: 'Tiếng Anh lớp 5 — thì hiện tại/quá khứ, so sánh, sức khoẻ, chỉ đường và kế hoạch tương lai',
  heroMeta: '📚 30 đề &nbsp;•&nbsp; 300 câu &nbsp;•&nbsp; ⏱ 20 phút mỗi đề &nbsp;•&nbsp; không kèm bản dịch',
});
