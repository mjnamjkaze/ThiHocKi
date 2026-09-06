// TIẾNG ANH — LỚP 5 (GDPT 2018)
// 10 đề × 10 câu = 100 câu. Mỗi câu 1 điểm — thang 10 — 20 phút mỗi đề.
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

];

SUBJECTS.push({
  id: 'tienganh5', name: 'Tiếng Anh', short: 'Tiếng Anh 5', icon: '🔤', grade: 5,
  exams: TA5_EXAMS, ready: true,
  heroTitle: 'Tiếng Anh lớp 5 — thì hiện tại/quá khứ, so sánh, sức khoẻ, chỉ đường và kế hoạch tương lai',
  heroMeta: '📚 10 đề &nbsp;•&nbsp; 100 câu &nbsp;•&nbsp; ⏱ 20 phút mỗi đề &nbsp;•&nbsp; không kèm bản dịch',
});
