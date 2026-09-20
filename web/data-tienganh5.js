// TIẾNG ANH — LỚP 5 (GDPT 2018)
// 50 đề × 10 câu = 500 câu. Mỗi câu 1 điểm — thang 10 — 20 phút mỗi đề.
//
// QUY TẮC: môn Tiếng Anh KHÔNG kèm bản dịch tiếng Việt — mọi phần viết bằng tiếng Anh.
// Chủ đề lớp 5: daily routine (present simple), present continuous, past simple,
// frequency adverbs, comparatives & superlatives, health, jobs & appearance,
// directions & places, future (be going to) & weather, và ôn tập ngữ pháp.

const R5A = '📖 <i><b>Plastic in the ocean</b><br>Every year millions of tonnes of plastic reach the sea. A plastic bottle can take hundreds of years to break down. Long before it disappears it breaks into tiny pieces called microplastics, which fish swallow by mistake. Turtles are in danger too: a floating plastic bag looks very much like a jellyfish, their favourite food. Scientists say the damage can be reduced if we use less single-use plastic. Carrying a reusable bottle and a cloth bag is a small change, but if millions of people make it, the difference is enormous. Everyone should care about this problem.</i><br><br>';

const TA5_EXAMS = [

/* ═══════════ TEST 1 — DAILY ROUTINE ═══════════ */
{
  id: 6901, title: 'Test 1 · My daily routine', time: 20,
  questions: [
    { sec: 'Routine', name: 'Question 1', pts: 1, img: A + 'ta5/clock6.svg', text: '"I ______ up at six o’clock."', opts: o4('get', 'gets', 'getting', 'got'), ans: 'A', why: 'With <b>I</b> in the present simple we use <b>get</b>.' },
    { sec: 'Routine', name: 'Question 2', pts: 1, img: A + 'ta5/brush.svg', text: '"She ______ to school every day."', opts: o4('goes', 'go', 'going', 'gone'), ans: 'A', why: 'With <b>she</b> we add -es: <b>goes</b>.' },
    { sec: 'Routine', name: 'Question 3', pts: 1, img: A + 'ta5/breakfast.svg', text: '"We ______ breakfast at seven."', opts: o4('have', 'has', 'having', 'had'), ans: 'A', why: 'With <b>we</b> we use <b>have</b>.' },
    { sec: 'Routine', name: 'Question 4', pts: 1, text: '"He brushes his ______ in the morning."', opts: o4('teeth', 'hair only', 'shoes', 'book'), ans: 'A', why: 'We brush our <b>teeth</b>.' },
    { sec: 'Routine', name: 'Question 5', pts: 1, img: A + 'ta5/school.svg', text: '"What time do you ______ up?"', opts: o4('get', 'gets', 'got', 'getting'), ans: 'A', why: 'After <b>do you</b> we use the base verb <b>get</b>.' },
    { sec: 'Routine', name: 'Question 6', pts: 1, text: '"I ______ my homework in the evening."', opts: o4('do', 'does', 'doing', 'did'), ans: 'A', why: 'With <b>I</b> we use <b>do</b> my homework.' },
    { sec: 'Routine', name: 'Question 7', pts: 1, img: A + 'ta5/homework.svg', text: '"They ______ dinner at 7 p.m."', opts: o4('have', 'has', 'having', 'to have'), ans: 'A', why: 'With <b>they</b> we use <b>have</b>.' },
    { sec: 'Routine', name: 'Question 8', pts: 1, img: A + 'ta5/sleep.svg', text: '"My father ______ to work by car."', opts: o4('goes', 'go', 'going', 'gone'), ans: 'A', why: 'With <b>father (he)</b> we use <b>goes</b>.' },
    { sec: 'Routine', name: 'Question 9', pts: 1, text: '"After school, I ______ home."', opts: o4('go', 'goes', 'going', 'went'), ans: 'A', why: 'With <b>I</b> present simple we use <b>go</b>.' },
    { sec: 'Routine', name: 'Question 10', pts: 1, img: A + 'ta5/clock730.svg', text: '"At night, I ______ to bed."', opts: o4('go', 'goes', 'going', 'gone'), ans: 'A', why: 'With <b>I</b> we use <b>go</b> to bed.' },
  ],
},

/* ═══════════ TEST 2 — PRESENT CONTINUOUS ═══════════ */
{
  id: 6902, title: 'Test 2 · What are you doing now?', time: 20,
  questions: [
    { sec: 'Continuous', name: 'Question 1', pts: 1, img: A + 'ta5/read.svg', text: '"Look! The baby ______ now." (sleep)', opts: o4('is sleeping', 'sleeps', 'sleep', 'slept'), ans: 'A', why: 'For an action happening now we use is + verb-ing: <b>is sleeping</b>.' },
    { sec: 'Continuous', name: 'Question 2', pts: 1, img: A + 'ta5/cook.svg', text: '"I ______ a book at the moment." (read)', opts: o4('am reading', 'read', 'reads', 'reading'), ans: 'A', why: 'With <b>I</b> now: <b>am reading</b>.' },
    { sec: 'Continuous', name: 'Question 3', pts: 1, img: A + 'ta5/run.svg', text: '"They ______ football now." (play)', opts: o4('are playing', 'play', 'plays', 'played'), ans: 'A', why: 'With <b>they</b> now: <b>are playing</b>.' },
    { sec: 'Continuous', name: 'Question 4', pts: 1, text: '"What ______ you doing?"', opts: o4('are', 'is', 'do', 'am'), ans: 'A', why: 'With <b>you</b> in present continuous we use <b>are</b>.' },
    { sec: 'Continuous', name: 'Question 5', pts: 1, img: A + 'ta5/write.svg', text: '"She ______ a letter now." (write)', opts: o4('is writing', 'writes', 'write', 'wrote'), ans: 'A', why: 'With <b>she</b> now: <b>is writing</b>.' },
    { sec: 'Continuous', name: 'Question 6', pts: 1, text: '"Listen! The birds ______." (sing)', opts: o4('are singing', 'sing', 'sings', 'sang'), ans: 'A', why: 'With <b>birds (they)</b> now: <b>are singing</b>.' },
    { sec: 'Continuous', name: 'Question 7', pts: 1, img: A + 'ta5/sing.svg', text: '"We ______ TV now." (watch)', opts: o4('are watching', 'watch', 'watches', 'watched'), ans: 'A', why: 'With <b>we</b> now: <b>are watching</b>.' },
    { sec: 'Grammar', name: 'Question 8', pts: 1, text: 'We use the present continuous for actions happening ______.', opts: o4('now', 'every day', 'yesterday', 'last week'), ans: 'A', why: 'The present continuous is for actions happening <b>now</b>.' },
    { sec: 'Spelling', name: 'Question 9', pts: 1, img: A + 'ta5/swim.svg', text: '"He is ______ in the park." (run)', opts: o4('running', 'runing', 'runs', 'ran'), ans: 'A', why: 'We double the n: <b>running</b>.' },
    { sec: 'Continuous', name: 'Question 10', pts: 1, text: '"The children ______ now." (swim)', opts: o4('are swimming', 'swim', 'swims', 'swam'), ans: 'A', why: 'With <b>children (they)</b> now: <b>are swimming</b>.' },
  ],
},

/* ═══════════ TEST 3 — PAST SIMPLE ═══════════ */
{
  id: 6903, title: 'Test 3 · Yesterday', time: 20,
  questions: [
    { sec: 'Past', name: 'Question 1', pts: 1, img: A + 'ta5/market.svg', text: '"Yesterday, I ______ to the zoo."', opts: o4('went', 'go', 'goes', 'going'), ans: 'A', why: 'The past of <b>go</b> is <b>went</b>.' },
    { sec: 'Past (be)', name: 'Question 2', pts: 1, text: '"She ______ happy yesterday."', opts: o4('was', 'is', 'were', 'be'), ans: 'A', why: 'With <b>she</b> in the past we use <b>was</b>.' },
    { sec: 'Past (be)', name: 'Question 3', pts: 1, img: A + 'ta5/cinema.svg', text: '"They ______ at home last night."', opts: o4('were', 'was', 'are', 'is'), ans: 'A', why: 'With <b>they</b> in the past we use <b>were</b>.' },
    { sec: 'Past', name: 'Question 4', pts: 1, text: '"We ______ games last Sunday." (play)', opts: o4('played', 'play', 'plays', 'playing'), ans: 'A', why: 'Regular past adds -ed: <b>played</b>.' },
    { sec: 'Past', name: 'Question 5', pts: 1, img: A + 'ta5/letter.svg', text: '"He ______ a film yesterday." (watch)', opts: o4('watched', 'watch', 'watches', 'watching'), ans: 'A', why: 'Regular past: <b>watched</b>.' },
    { sec: 'Irregular', name: 'Question 6', pts: 1, text: 'The past of "go" is ______.', opts: o4('went', 'goed', 'gone', 'going'), ans: 'A', why: 'The past of go is <b>went</b>.' },
    { sec: 'Irregular', name: 'Question 7', pts: 1, text: 'The past of "eat" is ______.', opts: o4('ate', 'eated', 'eaten', 'eats'), ans: 'A', why: 'The past of eat is <b>ate</b>.' },
    { sec: 'Past (be)', name: 'Question 8', pts: 1, img: A + 'ta5/party.svg', text: '"______ you at school yesterday?"', opts: o4('Were', 'Was', 'Are', 'Did'), ans: 'A', why: 'With <b>you</b> in the past we ask <b>Were you...?</b>' },
    { sec: 'Past', name: 'Question 9', pts: 1, text: '"I ______ my grandma last week." (visit)', opts: o4('visited', 'visit', 'visits', 'visiting'), ans: 'A', why: 'Regular past: <b>visited</b>.' },
    { sec: 'Irregular', name: 'Question 10', pts: 1, text: 'The past of "see" is ______.', opts: o4('saw', 'seed', 'seen', 'sees'), ans: 'A', why: 'The past of see is <b>saw</b>.' },
  ],
},

/* ═══════════ TEST 4 — FREQUENCY AND TIME ═══════════ */
{
  id: 6904, title: 'Test 4 · How often?', time: 20,
  questions: [
    { sec: 'Frequency', name: 'Question 1', pts: 1, img: A + 'ta5/week.svg', text: '"I ______ brush my teeth." (every time, 100%)', opts: o4('always', 'never', 'sometimes', 'seldom'), ans: 'A', why: '100% of the time = <b>always</b>.' },
    { sec: 'Frequency', name: 'Question 2', pts: 1, text: '"She ______ eats candy." (0%)', opts: o4('never', 'always', 'often', 'usually'), ans: 'A', why: '0% of the time = <b>never</b>.' },
    { sec: 'Frequency', name: 'Question 3', pts: 1, text: '"They ______ go to the park." (not often, not never)', opts: o4('sometimes', 'always', 'never', 'usually'), ans: 'A', why: 'Now and then = <b>sometimes</b>.' },
    { sec: 'Frequency', name: 'Question 4', pts: 1, text: '"He ______ gets up early." (most days)', opts: o4('usually', 'never', 'sometimes', 'not'), ans: 'A', why: 'Most days = <b>usually</b>.' },
    { sec: 'Question', name: 'Question 5', pts: 1, img: A + 'ta5/week.svg', text: '"How ______ do you play football?" – "Twice a week."', opts: o4('often', 'many', 'old', 'much'), ans: 'A', why: 'We ask <b>How often</b> for frequency.' },
    { sec: 'Word order', name: 'Question 6', pts: 1, text: 'Put in order: "always / I / read / books".', opts: o4('I always read books.', 'I read always books.', 'Always I read books.', 'I read books always.'), ans: 'A', why: 'The frequency adverb goes before the main verb: <b>I always read books.</b>' },
    { sec: 'Time', name: 'Question 7', pts: 1, text: '"______ do you go to school?" – "At 7 o’clock."', opts: o4('When', 'Where', 'Who', 'What colour'), ans: 'A', why: 'We ask <b>When</b> (or What time) for a time.' },
    { sec: 'Time', name: 'Question 8', pts: 1, img: A + 'ta5/calendar.svg', text: '"Once a week" means ______ time a week.', opts: o4('one', 'two', 'three', 'no'), ans: 'A', why: 'Once = <b>one</b> time.' },
    { sec: 'Time', name: 'Question 9', pts: 1, text: 'morning, afternoon, ______', opts: o4('evening', 'week', 'year', 'Monday'), ans: 'A', why: 'After afternoon comes the <b>evening</b>.' },
    { sec: 'Grammar', name: 'Question 10', pts: 1, text: 'A frequency adverb usually goes ______ the main verb.', opts: o4('before', 'after', 'without', 'far from'), ans: 'A', why: 'Frequency adverbs usually go <b>before</b> the main verb.' },
  ],
},

/* ═══════════ TEST 5 — COMPARATIVES ═══════════ */
{
  id: 6905, title: 'Test 5 · Comparing things', time: 20,
  questions: [
    { sec: 'Comparative', name: 'Question 1', pts: 1, img: A + 'ta5/eleph_dog.svg', text: '"An elephant is ______ than a cat." (big)', opts: o4('bigger', 'big', 'biggest', 'more big'), ans: 'A', why: 'Short adjective + -er: <b>bigger</b>.' },
    { sec: 'Comparative', name: 'Question 2', pts: 1, text: '"This book is ______ than that one." (interesting)', opts: o4('more interesting', 'interestinger', 'most interesting', 'interesting'), ans: 'A', why: 'Long adjective uses <b>more</b> + adjective.' },
    { sec: 'Superlative', name: 'Question 3', pts: 1, img: A + 'ta5/tall_short.svg', text: '"He is the ______ boy in the class." (tall)', opts: o4('tallest', 'taller', 'tall', 'most tall'), ans: 'A', why: 'Short adjective superlative + -est: the <b>tallest</b>.' },
    { sec: 'Comparative', name: 'Question 4', pts: 1, text: 'The comparative of "small" is ______.', opts: o4('smaller', 'small', 'smallest', 'more small'), ans: 'A', why: 'small + -er = <b>smaller</b>.' },
    { sec: 'Comparative', name: 'Question 5', pts: 1, img: A + 'ta5/bike_car.svg', text: '"A cheetah is ______ than a turtle." (fast)', opts: o4('faster', 'fast', 'fastest', 'more fast'), ans: 'A', why: 'fast + -er = <b>faster</b>.' },
    { sec: 'Superlative', name: 'Question 6', pts: 1, text: 'The superlative of "good" is ______.', opts: o4('the best', 'the goodest', 'the gooder', 'the more good'), ans: 'A', why: 'good → better → <b>the best</b> (irregular).' },
    { sec: 'Superlative', name: 'Question 7', pts: 1, text: '"Mount Everest is the ______ mountain." (high)', opts: o4('highest', 'higher', 'high', 'most high'), ans: 'A', why: 'high + -est = the <b>highest</b>.' },
    { sec: 'Comparative', name: 'Question 8', pts: 1, img: A + 'ta5/mountain.svg', text: '"My bag is ______ than yours." (heavy)', opts: o4('heavier', 'heavyer', 'heaviest', 'more heavy'), ans: 'A', why: 'heavy → <b>heavier</b> (y becomes i + er).' },
    { sec: 'Comparative', name: 'Question 9', pts: 1, text: '"She is ______ than her sister." (young)', opts: o4('younger', 'young', 'youngest', 'more young'), ans: 'A', why: 'young + -er = <b>younger</b>.' },
    { sec: 'Comparative', name: 'Question 10', pts: 1, text: 'The comparative of "long" is ______.', opts: o4('longer', 'long', 'longest', 'more long'), ans: 'A', why: 'long + -er = <b>longer</b>.' },
  ],
},

/* ═══════════ TEST 6 — HEALTH ═══════════ */
{
  id: 6906, title: 'Test 6 · What’s the matter?', time: 20,
  questions: [
    { sec: 'Health', name: 'Question 1', pts: 1, img: A + 'ta5/headache.svg', text: '"What’s the ______?" – "I have a headache."', opts: o4('matter', 'colour', 'time', 'name'), ans: 'A', why: 'We ask <b>What’s the matter?</b> when someone is ill.' },
    { sec: 'Health', name: 'Question 2', pts: 1, img: A + 'ta5/tooth.svg', text: 'When your head hurts, you have a ______.', opts: o4('headache', 'toothache', 'cold', 'fever'), ans: 'A', why: 'A pain in the head is a <b>headache</b>.' },
    { sec: 'Health', name: 'Question 3', pts: 1, img: A + 'ta5/fever.svg', text: 'When your tooth hurts, you have a ______.', opts: o4('toothache', 'headache', 'sore throat', 'cough'), ans: 'A', why: 'A pain in a tooth is a <b>toothache</b>.' },
    { sec: 'Advice', name: 'Question 4', pts: 1, text: 'When you are ill, you should see a ______.', opts: o4('doctor', 'teacher', 'driver', 'farmer'), ans: 'A', why: 'When ill we should see a <b>doctor</b>.' },
    { sec: 'Health', name: 'Question 5', pts: 1, img: A + 'ta5/doctor.svg', text: 'When it hurts to swallow, you have a ______.', opts: o4('sore throat', 'headache', 'toothache', 'fever'), ans: 'A', why: 'Pain in the throat is a <b>sore throat</b>.' },
    { sec: 'Advice', name: 'Question 6', pts: 1, text: '"You should drink water and get some ______."', opts: o4('rest', 'sport', 'homework', 'candy'), ans: 'A', why: 'When ill you should get some <b>rest</b>.' },
    { sec: 'Health', name: 'Question 7', pts: 1, text: 'A high body temperature is called a ______.', opts: o4('fever', 'cold hand', 'headache', 'cough'), ans: 'A', why: 'A high temperature is a <b>fever</b>.' },
    { sec: 'Advice', name: 'Question 8', pts: 1, img: A + 'ta5/medicine.svg', text: '"You should ______ this medicine twice a day."', opts: o4('take', 'make', 'do', 'play'), ans: 'A', why: 'We <b>take</b> medicine.' },
    { sec: 'Health', name: 'Question 9', pts: 1, text: 'To stay healthy, you should eat ______ food.', opts: o4('healthy', 'junk', 'old', 'cold'), ans: 'A', why: 'To be well we eat <b>healthy</b> food.' },
    { sec: 'Health', name: 'Question 10', pts: 1, text: 'When you sneeze and cough, you may have a ______.', opts: o4('cold', 'toothache', 'headache', 'sore leg'), ans: 'A', why: 'Sneezing and coughing are signs of a <b>cold</b>.' },
  ],
},

/* ═══════════ TEST 7 — JOBS AND APPEARANCE ═══════════ */
{
  id: 6907, title: 'Test 7 · Jobs and appearance', time: 20,
  questions: [
    { sec: 'Jobs', name: 'Question 1', pts: 1, img: A + 'ta5/pilot.svg', text: 'A person who teaches children is a ______.', opts: o4('teacher', 'doctor', 'pilot', 'farmer'), ans: 'A', why: 'A person who teaches is a <b>teacher</b>.' },
    { sec: 'Jobs', name: 'Question 2', pts: 1, img: A + 'ta5/nurse.svg', text: 'A person who treats sick people is a ______.', opts: o4('doctor', 'teacher', 'cook', 'driver'), ans: 'A', why: 'A person who treats the sick is a <b>doctor</b>.' },
    { sec: 'Jobs', name: 'Question 3', pts: 1, img: A + 'ta5/farmer.svg', text: 'A person who cooks food in a restaurant is a ______.', opts: o4('cook', 'nurse', 'pilot', 'farmer'), ans: 'A', why: 'A person who cooks is a <b>cook</b> (chef).' },
    { sec: 'Jobs', name: 'Question 4', pts: 1, text: 'A person who grows crops on a farm is a ______.', opts: o4('farmer', 'doctor', 'teacher', 'singer'), ans: 'A', why: 'A person who farms is a <b>farmer</b>.' },
    { sec: 'Jobs', name: 'Question 5', pts: 1, img: A + 'ta5/teacher.svg', text: 'A person who puts out fires is a ______.', opts: o4('firefighter', 'teacher', 'cook', 'farmer'), ans: 'A', why: 'A person who fights fires is a <b>firefighter</b>.' },
    { sec: 'Appearance', name: 'Question 6', pts: 1, text: '"She has long black ______."', opts: o4('hair', 'shoes', 'book', 'apple'), ans: 'A', why: 'We describe someone’s <b>hair</b>.' },
    { sec: 'Appearance', name: 'Question 7', pts: 1, text: '"He is ______." (not short)', opts: o4('tall', 'small', 'old', 'young'), ans: 'A', why: 'The opposite of short (in height) is <b>tall</b>.' },
    { sec: 'Jobs', name: 'Question 8', pts: 1, img: A + 'ta5/baker.svg', text: 'A person who flies a plane is a ______.', opts: o4('pilot', 'driver', 'sailor', 'nurse'), ans: 'A', why: 'A person who flies a plane is a <b>pilot</b>.' },
    { sec: 'Jobs', name: 'Question 9', pts: 1, text: 'A person who acts in films is an ______.', opts: o4('actor', 'author', 'artist only', 'engineer'), ans: 'A', why: 'A person who acts is an <b>actor</b>.' },
    { sec: 'Appearance', name: 'Question 10', pts: 1, text: '"My grandma has ______ hair." (the colour of an old person)', opts: o4('grey', 'green', 'blue', 'red'), ans: 'A', why: 'Older people often have <b>grey</b> hair.' },
  ],
},

/* ═══════════ TEST 8 — DIRECTIONS AND PLACES ═══════════ */
{
  id: 6908, title: 'Test 8 · Finding the way', time: 20,
  questions: [
    { sec: 'Directions', name: 'Question 1', pts: 1, img: A + 'ta5/lights.svg', text: '"Go ______ and then turn left."', opts: o4('straight', 'sit', 'sleep', 'read'), ans: 'A', why: 'To keep going forward we say go <b>straight</b>.' },
    { sec: 'Places', name: 'Question 2', pts: 1, img: A + 'ta5/between.svg', text: '"The bank is ______ to the post office." (beside)', opts: o4('next', 'in', 'under', 'on'), ans: 'A', why: 'Beside something = <b>next</b> to it.' },
    { sec: 'Directions', name: 'Question 3', pts: 1, img: A + 'ta5/bridge.svg', text: '"Turn ______ at the corner." (not left)', opts: o4('right', 'up', 'down', 'over'), ans: 'A', why: 'The opposite of left is <b>right</b>.' },
    { sec: 'Places', name: 'Question 4', pts: 1, text: '"The park is ______ the school." (on the other side, facing)', opts: o4('opposite', 'inside', 'under', 'on'), ans: 'A', why: 'Facing across from = <b>opposite</b>.' },
    { sec: 'Places', name: 'Question 5', pts: 1, img: A + 'ta5/map.svg', text: '"Where is the ______? I want to catch a bus."', opts: o4('bus stop', 'kitchen', 'bedroom', 'garden'), ans: 'A', why: 'We catch a bus at the <b>bus stop</b>.' },
    { sec: 'Prepositions', name: 'Question 6', pts: 1, text: '"The library is ______ the bookshop and the bank." (in the middle)', opts: o4('between', 'on', 'under', 'next only'), ans: 'A', why: 'In the middle of two things = <b>between</b>.' },
    { sec: 'Directions', name: 'Question 7', pts: 1, text: '"How do I get ______ the museum?"', opts: o4('to', 'in', 'on', 'at'), ans: 'A', why: 'How do I get <b>to</b> a place.' },
    { sec: 'Places', name: 'Question 8', pts: 1, img: A + 'ta5/behind.svg', text: 'You buy stamps at the ______.', opts: o4('post office', 'cinema', 'hospital', 'zoo'), ans: 'A', why: 'We buy stamps at the <b>post office</b>.' },
    { sec: 'Directions', name: 'Question 9', pts: 1, text: '"Go along this ______." (a way with houses on both sides)', opts: o4('street', 'chair', 'cup', 'book'), ans: 'A', why: 'We walk along a <b>street</b>.' },
    { sec: 'Places', name: 'Question 10', pts: 1, text: 'A big place with many shops where you buy food is a ______.', opts: o4('supermarket', 'library', 'school', 'hospital'), ans: 'A', why: 'We buy food at a <b>supermarket</b>.' },
  ],
},

/* ═══════════ TEST 9 — FUTURE PLANS AND WEATHER ═══════════ */
{
  id: 6909, title: 'Test 9 · What are you going to do?', time: 20,
  questions: [
    { sec: 'Going to', name: 'Question 1', pts: 1, img: A + 'ta5/plane.svg', text: '"I ______ going to visit my grandma."', opts: o4('am', 'is', 'are', 'do'), ans: 'A', why: 'With <b>I</b> we use <b>am</b> going to.' },
    { sec: 'Weather', name: 'Question 2', pts: 1, text: '"It’s cloudy. It’s going to ______."', opts: o4('rain', 'sun', 'read', 'run'), ans: 'A', why: 'Dark clouds mean it is going to <b>rain</b>.' },
    { sec: 'Going to', name: 'Question 3', pts: 1, img: A + 'ta5/beach.svg', text: '"What are you going ______ do this weekend?"', opts: o4('to', 'for', 'at', 'in'), ans: 'A', why: 'be going <b>to</b> + verb.' },
    { sec: 'Going to', name: 'Question 4', pts: 1, text: '"They are going ______ play football."', opts: o4('to', 'for', 'at', 'in'), ans: 'A', why: 'be going <b>to</b> + verb.' },
    { sec: 'Weather', name: 'Question 5', pts: 1, img: A + 'ta5/calendar.svg', text: '"Tomorrow will be ______." ☀', opts: o4('sunny', 'rainy', 'snowy', 'cold'), ans: 'A', why: 'With the sun the weather is <b>sunny</b>.' },
    { sec: 'Going to', name: 'Question 6', pts: 1, text: '"She is going to ______ a new book at the shop."', opts: o4('buy', 'buys', 'bought', 'buying'), ans: 'A', why: 'After "going to" we use the base verb <b>buy</b>.' },
    { sec: 'Weather', name: 'Question 7', pts: 1, text: 'In spring the weather is often ______.', opts: o4('warm', 'freezing', 'snowy', 'stormy'), ans: 'A', why: 'Spring is usually <b>warm</b>.' },
    { sec: 'Going to', name: 'Question 8', pts: 1, img: A + 'ta5/globe.svg', text: '"We ______ going to have a picnic."', opts: o4('are', 'is', 'am', 'do'), ans: 'A', why: 'With <b>we</b> we use <b>are</b> going to.' },
    { sec: 'Weather', name: 'Question 9', pts: 1, text: '"It’s very hot today. Let’s go to the ______."', opts: o4('beach', 'library', 'post office', 'hospital'), ans: 'A', why: 'On a hot day we can go to the <b>beach</b>.' },
    { sec: 'Going to', name: 'Question 10', pts: 1, text: '"Look at the dark clouds. It ______ going to rain."', opts: o4('is', 'are', 'am', 'do'), ans: 'A', why: 'With <b>it</b> we use <b>is</b> going to.' },
  ],
},

/* ═══════════ TEST 10 — GRAMMAR REVIEW ═══════════ */
{
  id: 6910, title: 'Test 10 · Review', time: 20,
  questions: [
    { sec: 'To be', name: 'Question 1', pts: 1, text: '"She ______ a teacher."', opts: o4('is', 'am', 'are', 'be'), ans: 'A', why: 'With <b>she</b> we use <b>is</b>.' },
    { sec: 'Present simple', name: 'Question 2', pts: 1, img: A + 'ta5/clock3.svg', text: '"I ______ football every day."', opts: o4('play', 'plays', 'playing', 'played'), ans: 'A', why: 'With <b>I</b> present simple we use <b>play</b>.' },
    { sec: 'Past', name: 'Question 3', pts: 1, text: '"Yesterday we ______ to the park."', opts: o4('went', 'go', 'goes', 'going'), ans: 'A', why: 'The past of go is <b>went</b>.' },
    { sec: 'Continuous', name: 'Question 4', pts: 1, img: A + 'ta5/clock730.svg', text: '"Look! It ______ raining."', opts: o4('is', 'are', 'am', 'do'), ans: 'A', why: 'With <b>it</b> now we use <b>is</b> raining.' },
    { sec: 'Comparative', name: 'Question 5', pts: 1, text: '"An elephant is ______ than a mouse." (big)', opts: o4('bigger', 'big', 'biggest', 'more big'), ans: 'A', why: 'big + -er = <b>bigger</b>.' },
    { sec: 'Routine', name: 'Question 6', pts: 1, text: '"I ______ up at six o’clock."', opts: o4('get', 'gets', 'got', 'getting'), ans: 'A', why: 'With <b>I</b> we use <b>get</b> up.' },
    { sec: 'Questions', name: 'Question 7', pts: 1, text: '"______ you like ice cream?"', opts: o4('Do', 'Does', 'Are', 'Is'), ans: 'A', why: 'With <b>you</b> we ask <b>Do you...?</b>' },
    { sec: 'Can', name: 'Question 8', pts: 1, img: A + 'ta5/eleph_dog.svg', text: '"He can ______ English very well."', opts: o4('speak', 'speaks', 'speaking', 'spoke'), ans: 'A', why: 'After <b>can</b> we use the base verb <b>speak</b>.' },
    { sec: 'Irregular', name: 'Question 9', pts: 1, text: 'The past of "have" is ______.', opts: o4('had', 'haved', 'has', 'having'), ans: 'A', why: 'The past of have is <b>had</b>.' },
    { sec: 'Health', name: 'Question 10', pts: 1, text: '"What’s the matter?" – "I have a ______."', opts: o4('headache', 'apple', 'pencil', 'holiday'), ans: 'A', why: 'A pain in the head is a <b>headache</b>.' },
  ],
},

/* ═══════════ TEST 11 — EVERY DAY HABITS ═══════════ */
{
  id: 8201, title: 'Test 11 · Every day habits', time: 20,
  questions: [
    { sec: 'Routine', name: 'Question 1', pts: 1, img: A + 'ta5/clock6.svg', text: '"My sister ______ her homework after dinner." (do)', opts: o4('do', 'does', 'doing', 'did'), ans: 'B', why: 'With <b>my sister (she)</b> we use <b>does</b>.' },
    { sec: 'Routine', name: 'Question 2', pts: 1, text: '"I usually ______ up at half past six." (get)', opts: o4('get', 'gets', 'got', 'getting'), ans: 'A', why: 'With <b>I</b> present simple we use <b>get</b>.' },
    { sec: 'Routine', name: 'Question 3', pts: 1, img: A + 'ta5/bus.svg', text: '"He ______ his face every morning." (wash)', opts: o4('wash', 'washing', 'washes', 'washed'), ans: 'C', why: 'With <b>he</b> we add -es: <b>washes</b>.' },
    { sec: 'Routine', name: 'Question 4', pts: 1, text: '"We ______ to bed at ten o’clock." (go)', opts: o4('goes', 'going', 'gone', 'go'), ans: 'D', why: 'With <b>we</b> we use <b>go</b>.' },
    { sec: 'Routine', name: 'Question 5', pts: 1, img: A + 'ta5/breakfast.svg', text: '"She ______ dressed and eats breakfast." (get)', opts: o4('get', 'gets', 'getting', 'got'), ans: 'B', why: 'With <b>she</b> we use <b>gets</b>.' },
    { sec: 'Routine', name: 'Question 6', pts: 1, text: '"They ______ the bus to school." (catch)', opts: o4('catch', 'catches', 'catching', 'caught'), ans: 'A', why: 'With <b>they</b> present simple we use <b>catch</b>.' },
    { sec: 'Routine', name: 'Question 7', pts: 1, text: '"My dad ______ the newspaper in the morning." (read)', opts: o4('read', 'reading', 'reads', 'readed'), ans: 'C', why: 'With <b>my dad (he)</b> we use <b>reads</b>.' },
    { sec: 'Routine', name: 'Question 8', pts: 1, img: A + 'ta5/homework.svg', text: '"After lunch, the children ______ a short rest." (have)', opts: o4('has', 'having', 'had', 'have'), ans: 'D', why: 'With <b>the children (they)</b> we use <b>have</b>.' },
    { sec: 'Routine', name: 'Question 9', pts: 1, text: '"In the evening I ______ TV with my family." (watch)', opts: o4('watches', 'watch', 'watching', 'watched'), ans: 'B', why: 'With <b>I</b> present simple we use <b>watch</b>.' },
    { sec: 'Question', name: 'Question 10', pts: 1, text: '"What time ______ she start school?"', opts: o4('does', 'do', 'is', 'are'), ans: 'A', why: 'With <b>she</b> we ask with <b>does</b>.' },
  ],
},

/* ═══════════ TEST 12 — SIMPLE OR CONTINUOUS? ═══════════ */
{
  id: 8202, title: 'Test 12 · Simple or continuous?', time: 20,
  questions: [
    { sec: 'Grammar', name: 'Question 1', pts: 1, img: A + 'ta5/rain.svg', text: '"Look! It ______ now." (rain)', opts: o4('is raining', 'rains', 'rain', 'rained'), ans: 'A', why: 'For an action happening now: <b>is raining</b>.' },
    { sec: 'Grammar', name: 'Question 2', pts: 1, text: '"Every day she ______ to work by bike." (go)', opts: o4('is going', 'going', 'goes', 'go'), ans: 'C', why: 'A daily habit uses the present simple: <b>goes</b>.' },
    { sec: 'Grammar', name: 'Question 3', pts: 1, text: '"Listen! Someone ______ the piano." (play)', opts: o4('plays', 'is playing', 'play', 'played'), ans: 'B', why: 'An action happening now: <b>is playing</b>.' },
    { sec: 'Grammar', name: 'Question 4', pts: 1, img: A + 'ta5/read.svg', text: '"We ______ football every Sunday." (play)', opts: o4('are playing', 'plays', 'playing', 'play'), ans: 'D', why: 'A habit with <b>we</b> uses the simple form <b>play</b>.' },
    { sec: 'Grammar', name: 'Question 5', pts: 1, text: '"Right now the students ______ a test." (do)', opts: o4('are doing', 'do', 'does', 'did'), ans: 'A', why: 'Happening right now: <b>are doing</b>.' },
    { sec: 'Grammar', name: 'Question 6', pts: 1, text: 'Which word goes with the present continuous?', opts: o4('every day', 'always', 'now', 'on Mondays'), ans: 'C', why: 'The present continuous goes with <b>now</b>.' },
    { sec: 'Grammar', name: 'Question 7', pts: 1, img: A + 'ta5/cook.svg', text: '"My brother ______ his teeth twice a day." (brush)', opts: o4('is brushing', 'brushes', 'brush', 'brushing'), ans: 'B', why: 'A habit with <b>he</b>: <b>brushes</b>.' },
    { sec: 'Grammar', name: 'Question 8', pts: 1, text: '"Be quiet! The baby ______." (sleep)', opts: o4('sleeps', 'sleep', 'slept', 'is sleeping'), ans: 'D', why: 'Happening now: <b>is sleeping</b>.' },
    { sec: 'Grammar', name: 'Question 9', pts: 1, text: 'Which word goes with the present simple?', opts: o4('usually', 'now', 'at the moment', 'Look!'), ans: 'A', why: 'The present simple goes with <b>usually</b>.' },
    { sec: 'Grammar', name: 'Question 10', pts: 1, text: '"I ______ a shower every morning." (have)', opts: o4('am having', 'has', 'have', 'having'), ans: 'C', why: 'A daily habit with <b>I</b>: <b>have</b>.' },
  ],
},

/* ═══════════ TEST 13 — LAST WEEKEND (REGULAR VERBS) ═══════════ */
{
  id: 8203, title: 'Test 13 · Last weekend (regular verbs)', time: 20,
  questions: [
    { sec: 'Past', name: 'Question 1', pts: 1, img: A + 'ta5/football.svg', text: '"We ______ football yesterday." (play)', opts: o4('play', 'played', 'plays', 'playing'), ans: 'B', why: 'Regular past adds -ed: <b>played</b>.' },
    { sec: 'Past', name: 'Question 2', pts: 1, text: '"She ______ the door quietly." (close)', opts: o4('closed', 'close', 'closes', 'closing'), ans: 'A', why: 'Regular past: <b>closed</b>.' },
    { sec: 'Past', name: 'Question 3', pts: 1, img: A + 'ta5/beach.svg', text: '"They ______ TV last night." (watch)', opts: o4('watch', 'watches', 'watching', 'watched'), ans: 'D', why: 'Regular past: <b>watched</b>.' },
    { sec: 'Past', name: 'Question 4', pts: 1, text: '"I ______ my grandparents last week." (visit)', opts: o4('visit', 'visits', 'visited', 'visiting'), ans: 'C', why: 'Regular past: <b>visited</b>.' },
    { sec: 'Spelling', name: 'Question 5', pts: 1, img: A + 'ta5/market.svg', text: '"He ______ to music yesterday." (listen)', opts: o4('listend', 'listened', 'listen', 'listning'), ans: 'B', why: 'Correct spelling of the past is <b>listened</b>.' },
    { sec: 'Past', name: 'Question 6', pts: 1, text: '"The film ______ at nine o’clock." (start)', opts: o4('started', 'start', 'starts', 'starting'), ans: 'A', why: 'Regular past: <b>started</b>.' },
    { sec: 'Spelling', name: 'Question 7', pts: 1, text: '"We ______ hard for the exam." (study)', opts: o4('studyed', 'study', 'studys', 'studied'), ans: 'D', why: 'y becomes i + ed: <b>studied</b>.' },
    { sec: 'Past', name: 'Question 8', pts: 1, img: A + 'ta5/party.svg', text: '"She ______ go to school yesterday." (not go)', opts: o4('doesn’t', 'didn’t', 'don’t', 'isn’t'), ans: 'B', why: 'The past negative is <b>didn’t</b> + base verb.' },
    { sec: 'Question', name: 'Question 9', pts: 1, text: '"______ you enjoy the party?"', opts: o4('Do', 'Are', 'Did', 'Was'), ans: 'C', why: 'We ask about the past with <b>Did</b>.' },
    { sec: 'Spelling', name: 'Question 10', pts: 1, text: '"The dog ______ over the wall." (jump)', opts: o4('jumped', 'jumpped', 'jump', 'jumping'), ans: 'A', why: 'Regular past: <b>jumped</b> (one p).' },
  ],
},

/* ═══════════ TEST 14 — IRREGULAR PAST VERBS ═══════════ */
{
  id: 8204, title: 'Test 14 · Irregular past verbs', time: 20,
  questions: [
    { sec: 'Irregular', name: 'Question 1', pts: 1, img: A + 'ta5/book.svg', text: 'The past of "eat" is ______.', opts: o4('ate', 'eated', 'eaten', 'eats'), ans: 'A', why: 'The past of eat is <b>ate</b>.' },
    { sec: 'Irregular', name: 'Question 2', pts: 1, text: 'The past of "go" is ______.', opts: o4('goed', 'gone', 'went', 'going'), ans: 'C', why: 'The past of go is <b>went</b>.' },
    { sec: 'Irregular', name: 'Question 3', pts: 1, img: A + 'ta5/market.svg', text: 'The past of "see" is ______.', opts: o4('seed', 'saw', 'seen', 'sees'), ans: 'B', why: 'The past of see is <b>saw</b>.' },
    { sec: 'Irregular', name: 'Question 4', pts: 1, text: 'The past of "have" is ______.', opts: o4('haved', 'has', 'having', 'had'), ans: 'D', why: 'The past of have is <b>had</b>.' },
    { sec: 'Irregular', name: 'Question 5', pts: 1, img: A + 'ta5/letter.svg', text: '"Yesterday I ______ a new bike." (buy)', opts: o4('bought', 'buyed', 'buy', 'buying'), ans: 'A', why: 'The past of buy is <b>bought</b>.' },
    { sec: 'Irregular', name: 'Question 6', pts: 1, text: '"She ______ a beautiful song last night." (sing)', opts: o4('singed', 'sang', 'sung', 'sings'), ans: 'B', why: 'The past of sing is <b>sang</b>.' },
    { sec: 'Irregular', name: 'Question 7', pts: 1, text: '"We ______ a lot of fun at the beach." (have)', opts: o4('have', 'haved', 'had', 'having'), ans: 'C', why: 'The past of have is <b>had</b>.' },
    { sec: 'Irregular', name: 'Question 8', pts: 1, img: A + 'ta5/run.svg', text: '"He ______ me a funny story." (tell)', opts: o4('telled', 'tell', 'telling', 'told'), ans: 'D', why: 'The past of tell is <b>told</b>.' },
    { sec: 'Irregular', name: 'Question 9', pts: 1, text: '"The children ______ in the pool." (swim)', opts: o4('swam', 'swimmed', 'swum', 'swims'), ans: 'A', why: 'The past of swim is <b>swam</b>.' },
    { sec: 'Irregular', name: 'Question 10', pts: 1, text: '"I ______ my keys yesterday." (lose)', opts: o4('losed', 'lost', 'lose', 'losing'), ans: 'B', why: 'The past of lose is <b>lost</b>.' },
  ],
},

/* ═══════════ TEST 15 — I THINK IT WILL... ═══════════ */
{
  id: 8205, title: 'Test 15 · I think it will...', time: 20,
  questions: [
    { sec: 'Future', name: 'Question 1', pts: 1, img: A + 'ta5/clouds.svg', text: '"I think it ______ rain tomorrow."', opts: o4('will', 'is', 'was', 'does'), ans: 'A', why: 'For a prediction we use <b>will</b> + base verb.' },
    { sec: 'Future', name: 'Question 2', pts: 1, text: '"She ______ be ten years old next year."', opts: o4('is', 'was', 'will', 'does'), ans: 'C', why: 'For the future we use <b>will</b> be.' },
    { sec: 'Future', name: 'Question 3', pts: 1, text: '"Don’t worry, I ______ help you."', opts: o4('am', 'will', 'was', 'do'), ans: 'B', why: 'An offer uses <b>will</b>: I will help you.' },
    { sec: 'Grammar', name: 'Question 4', pts: 1, text: 'After "will" we use the ______ verb.', opts: o4('past', '-ing', '-s', 'base'), ans: 'D', why: 'After will we use the <b>base</b> verb.' },
    { sec: 'Future', name: 'Question 5', pts: 1, img: A + 'ta5/globe.svg', text: '"They ______ come to the party." (will not)', opts: o4('won’t', 'don’t', 'didn’t', 'aren’t'), ans: 'A', why: 'will not = <b>won’t</b>.' },
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
    { sec: 'Going to', name: 'Question 1', pts: 1, img: A + 'ta5/calendar.svg', text: '"I ______ going to visit Ha Long Bay."', opts: o4('am', 'is', 'are', 'do'), ans: 'A', why: 'With <b>I</b> we use <b>am</b> going to.' },
    { sec: 'Going to', name: 'Question 2', pts: 1, text: '"She is going ______ learn the piano."', opts: o4('for', 'at', 'to', 'in'), ans: 'C', why: 'be going <b>to</b> + verb.' },
    { sec: 'Going to', name: 'Question 3', pts: 1, text: '"We are ______ to have a picnic."', opts: o4('go', 'going', 'goes', 'gone'), ans: 'B', why: 'The pattern is be + <b>going</b> to.' },
    { sec: 'Going to', name: 'Question 4', pts: 1, text: '"______ you going to play football?"', opts: o4('Is', 'Am', 'Do', 'Are'), ans: 'D', why: 'With <b>you</b> we ask <b>Are you going to...?</b>' },
    { sec: 'Going to', name: 'Question 5', pts: 1, img: A + 'ta5/beach.svg', text: '"They are going to ______ a film tonight."', opts: o4('watch', 'watches', 'watched', 'watching'), ans: 'A', why: 'After "going to" we use the base verb <b>watch</b>.' },
    { sec: 'Going to', name: 'Question 6', pts: 1, text: '"He ______ going to buy a new bike."', opts: o4('am', 'are', 'is', 'do'), ans: 'C', why: 'With <b>he</b> we use <b>is</b> going to.' },
    { sec: 'Weather', name: 'Question 7', pts: 1, text: '"Look at the clouds! It’s going to ______." ☁', opts: o4('sun', 'rain', 'read', 'run'), ans: 'B', why: 'Dark clouds mean it is going to <b>rain</b>.' },
    { sec: 'Going to', name: 'Question 8', pts: 1, img: A + 'ta5/plane.svg', text: '"My parents are going to ______ a new house."', opts: o4('buys', 'bought', 'buying', 'buy'), ans: 'D', why: 'After "going to" we use the base verb <b>buy</b>.' },
    { sec: 'Going to', name: 'Question 9', pts: 1, text: '"I’m tired. I’m going to ______ early tonight."', opts: o4('sleep', 'sleeps', 'slept', 'sleeping'), ans: 'A', why: 'After "going to" we use the base verb <b>sleep</b>.' },
    { sec: 'Grammar', name: 'Question 10', pts: 1, text: 'We use "be going to" to talk about ______ plans.', opts: o4('past', 'present', 'future', 'old'), ans: 'C', why: 'We use "be going to" for <b>future</b> plans.' },
  ],
},

/* ═══════════ TEST 17 — BIGGER AND FASTER ═══════════ */
{
  id: 8207, title: 'Test 17 · Bigger and faster', time: 20,
  questions: [
    { sec: 'Comparative', name: 'Question 1', pts: 1, img: A + 'ta5/eleph_dog.svg', text: '"A lion is ______ than a cat." (strong)', opts: o4('stronger', 'strong', 'strongest', 'more strong'), ans: 'A', why: 'Short adjective + -er: <b>stronger</b>.' },
    { sec: 'Comparative', name: 'Question 2', pts: 1, text: '"This test is ______ than the last one." (difficult)', opts: o4('difficulter', 'difficultest', 'more difficult', 'most difficult'), ans: 'C', why: 'Long adjective uses <b>more</b> + adjective.' },
    { sec: 'Comparative', name: 'Question 3', pts: 1, img: A + 'ta5/tall_short.svg', text: '"Today is ______ than yesterday." (hot)', opts: o4('hoter', 'hotter', 'hottest', 'more hot'), ans: 'B', why: 'We double the t: <b>hotter</b>.' },
    { sec: 'Comparative', name: 'Question 4', pts: 1, text: 'The comparative of "happy" is ______.', opts: o4('happyer', 'more happy', 'happiest', 'happier'), ans: 'D', why: 'y becomes i + er: <b>happier</b>.' },
    { sec: 'Comparative', name: 'Question 5', pts: 1, img: A + 'ta5/bike_car.svg', text: '"My bag is ______ than your bag." (heavy)', opts: o4('heavier', 'heavyer', 'heaviest', 'more heavy'), ans: 'A', why: 'y becomes i + er: <b>heavier</b>.' },
    { sec: 'Comparative', name: 'Question 6', pts: 1, text: '"A plane is ______ than a car." (fast)', opts: o4('fast', 'fastest', 'faster', 'more fast'), ans: 'C', why: 'fast + -er = <b>faster</b>.' },
    { sec: 'Comparative', name: 'Question 7', pts: 1, text: '"This road is ______ than that one." (good)', opts: o4('gooder', 'better', 'best', 'more good'), ans: 'B', why: 'good → <b>better</b> (irregular).' },
    { sec: 'Comparative', name: 'Question 8', pts: 1, img: A + 'ta5/sunny.svg', text: '"Winter is ______ than summer." (cold)', opts: o4('cold', 'coldest', 'more cold', 'colder'), ans: 'D', why: 'cold + -er = <b>colder</b>.' },
    { sec: 'Grammar', name: 'Question 9', pts: 1, text: 'We use "than" after a ______ adjective.', opts: o4('comparative', 'superlative', 'long', 'short'), ans: 'A', why: 'We use "than" after a <b>comparative</b> adjective.' },
    { sec: 'Comparative', name: 'Question 10', pts: 1, text: 'The comparative of "long" is ______.', opts: o4('longest', 'longer', 'long', 'more long'), ans: 'B', why: 'long + -er = <b>longer</b>.' },
  ],
},

/* ═══════════ TEST 18 — THE BEST IN THE WORLD ═══════════ */
{
  id: 8208, title: 'Test 18 · The best in the world', time: 20,
  questions: [
    { sec: 'Superlative', name: 'Question 1', pts: 1, img: A + 'ta5/trophy.svg', text: '"The Nile is the ______ river in the world." (long)', opts: o4('longest', 'longer', 'long', 'more long'), ans: 'A', why: 'Short adjective + -est: the <b>longest</b>.' },
    { sec: 'Superlative', name: 'Question 2', pts: 1, text: '"He is the ______ pupil in the class." (clever)', opts: o4('cleverer', 'more clever', 'cleverest', 'clever'), ans: 'C', why: 'clever + -est = the <b>cleverest</b>.' },
    { sec: 'Superlative', name: 'Question 3', pts: 1, img: A + 'ta5/mountain.svg', text: 'The superlative of "good" is ______.', opts: o4('the goodest', 'the best', 'the better', 'the more good'), ans: 'B', why: 'good → better → <b>the best</b> (irregular).' },
    { sec: 'Superlative', name: 'Question 4', pts: 1, text: '"Everest is the ______ mountain on Earth." (high)', opts: o4('higher', 'high', 'more high', 'highest'), ans: 'D', why: 'high + -est = the <b>highest</b>.' },
    { sec: 'Superlative', name: 'Question 5', pts: 1, img: A + 'ta5/globe.svg', text: '"She is the ______ girl in the team." (tall)', opts: o4('tallest', 'taller', 'tall', 'more tall'), ans: 'A', why: 'tall + -est = the <b>tallest</b>.' },
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
    { sec: 'Adverb', name: 'Question 1', pts: 1, img: A + 'ta5/turtle.svg', text: '"The turtle walks ______." (slow) 🐢', opts: o4('slowly', 'slow', 'slowest', 'slower'), ans: 'A', why: 'slow + -ly = <b>slowly</b>.' },
    { sec: 'Adverb', name: 'Question 2', pts: 1, text: '"She sings very ______." (beautiful)', opts: o4('beautiful', 'beauty', 'beautifully', 'beautifuly'), ans: 'C', why: 'beautiful + -ly = <b>beautifully</b>.' },
    { sec: 'Adverb', name: 'Question 3', pts: 1, img: A + 'ta5/run.svg', text: '"He runs ______." (quick)', opts: o4('quick', 'quickly', 'quicker', 'quickest'), ans: 'B', why: 'quick + -ly = <b>quickly</b>.' },
    { sec: 'Adverb', name: 'Question 4', pts: 1, text: '"Please speak ______; the baby is asleep." (quiet)', opts: o4('quiet', 'quieter', 'quietest', 'quietly'), ans: 'D', why: 'quiet + -ly = <b>quietly</b>.' },
    { sec: 'Adverb', name: 'Question 5', pts: 1, img: A + 'ta5/sing.svg', text: 'The adverb of "good" is ______.', opts: o4('well', 'goodly', 'gooder', 'best'), ans: 'A', why: 'The adverb of good is <b>well</b> (irregular).' },
    { sec: 'Grammar', name: 'Question 6', pts: 1, text: 'We make many adverbs by adding ______ to the adjective.', opts: o4('-ed', '-ing', '-ly', '-er'), ans: 'C', why: 'Many adverbs add <b>-ly</b> to the adjective.' },
    { sec: 'Adverb', name: 'Question 7', pts: 1, text: '"The cat moved ______ and caught the mouse." (careful)', opts: o4('careful', 'carefully', 'carefuly', 'carefuller'), ans: 'B', why: 'careful + -ly = <b>carefully</b>.' },
    { sec: 'Adverb', name: 'Question 8', pts: 1, img: A + 'ta5/quiet.svg', text: '"My friend writes very ______." (neat)', opts: o4('neat', 'neater', 'neatest', 'neatly'), ans: 'D', why: 'neat + -ly = <b>neatly</b>.' },
    { sec: 'Adverb', name: 'Question 9', pts: 1, text: '"The children played ______ in the garden." (happy)', opts: o4('happily', 'happy', 'happyly', 'happier'), ans: 'A', why: 'happy → <b>happily</b> (y becomes i + ly).' },
    { sec: 'Grammar', name: 'Question 10', pts: 1, text: 'An adverb of manner tells us ______ we do something.', opts: o4('when', 'how', 'where', 'who'), ans: 'B', why: 'An adverb of manner tells us <b>how</b> we do something.' },
  ],
},

/* ═══════════ TEST 20 — IN, ON OR AT? ═══════════ */
{
  id: 8210, title: 'Test 20 · In, on or at?', time: 20,
  questions: [
    { sec: 'Prepositions', name: 'Question 1', pts: 1, img: A + 'ta5/clock3.svg', text: '"My birthday is ______ May."', opts: o4('in', 'on', 'at', 'to'), ans: 'A', why: 'We use <b>in</b> with months.' },
    { sec: 'Prepositions', name: 'Question 2', pts: 1, text: '"We have English ______ Monday."', opts: o4('in', 'at', 'on', 'to'), ans: 'C', why: 'We use <b>on</b> with days of the week.' },
    { sec: 'Prepositions', name: 'Question 3', pts: 1, img: A + 'ta5/on.svg', text: '"The film starts ______ 7 o’clock."', opts: o4('in', 'at', 'on', 'to'), ans: 'B', why: 'We use <b>at</b> with clock times.' },
    { sec: 'Prepositions', name: 'Question 4', pts: 1, text: '"I go swimming ______ the weekend."', opts: o4('in', 'on', 'to', 'at'), ans: 'D', why: 'We say <b>at</b> the weekend.' },
    { sec: 'Grammar', name: 'Question 5', pts: 1, img: A + 'ta5/week.svg', text: 'We use ______ with months and years.', opts: o4('in', 'on', 'at', 'to'), ans: 'A', why: 'We use <b>in</b> with months and years.' },
    { sec: 'Prepositions', name: 'Question 6', pts: 1, text: '"School starts ______ September."', opts: o4('at', 'on', 'in', 'to'), ans: 'C', why: 'We use <b>in</b> with months.' },
    { sec: 'Grammar', name: 'Question 7', pts: 1, text: 'We use ______ with days of the week.', opts: o4('in', 'on', 'at', 'to'), ans: 'B', why: 'We use <b>on</b> with days of the week.' },
    { sec: 'Prepositions', name: 'Question 8', pts: 1, img: A + 'ta5/in.svg', text: '"He gets up early ______ the morning."', opts: o4('on', 'at', 'to', 'in'), ans: 'D', why: 'We say <b>in</b> the morning.' },
    { sec: 'Grammar', name: 'Question 9', pts: 1, text: 'We use ______ with clock times like 6 o’clock.', opts: o4('at', 'in', 'on', 'to'), ans: 'A', why: 'We use <b>at</b> with clock times.' },
    { sec: 'Prepositions', name: 'Question 10', pts: 1, text: '"Her party is ______ Saturday evening."', opts: o4('in', 'on', 'at', 'to'), ans: 'B', why: 'We say <b>on</b> Saturday evening (a named day).' },
  ],
},

/* ═══════════ TEST 21 — COUNTRIES AND NATIONALITIES ═══════════ */
{
  id: 8211, title: 'Test 21 · Countries and nationalities', time: 20,
  questions: [
    { sec: 'Nationality', name: 'Question 1', pts: 1, img: A + 'ta5/flag.svg', text: '"People from Vietnam are ______."', opts: o4('Vietnamese', 'Vietnam', 'Vietnamish', 'Vietnamland'), ans: 'A', why: 'People from Vietnam are <b>Vietnamese</b>.' },
    { sec: 'Nationality', name: 'Question 2', pts: 1, text: '"People from Japan are ______."', opts: o4('Japan', 'Japanian', 'Japanese', 'Japen'), ans: 'C', why: 'People from Japan are <b>Japanese</b>.' },
    { sec: 'Nationality', name: 'Question 3', pts: 1, img: A + 'ta5/globe.svg', text: '"People from France are ______."', opts: o4('Franceish', 'French', 'Francese', 'Frenchland'), ans: 'B', why: 'People from France are <b>French</b>.' },
    { sec: 'Nationality', name: 'Question 4', pts: 1, text: '"People from England are ______."', opts: o4('Englandese', 'Englander', 'Englishland', 'English'), ans: 'D', why: 'People from England are <b>English</b>.' },
    { sec: 'Country', name: 'Question 5', pts: 1, img: A + 'ta5/map.svg', text: '"The capital of Vietnam is ______."', opts: o4('Ha Noi', 'Tokyo', 'Paris', 'London'), ans: 'A', why: 'The capital of Vietnam is <b>Ha Noi</b>.' },
    { sec: 'Country', name: 'Question 6', pts: 1, text: '"The Eiffel Tower is in ______." 🗼', opts: o4('Japan', 'England', 'France', 'Vietnam'), ans: 'C', why: 'The Eiffel Tower is in <b>France</b>.' },
    { sec: 'Nationality', name: 'Question 7', pts: 1, text: '"People from America are ______."', opts: o4('Americ', 'American', 'Americanese', 'Ameriland'), ans: 'B', why: 'People from America are <b>American</b>.' },
    { sec: 'Country', name: 'Question 8', pts: 1, img: A + 'ta5/plane.svg', text: '"Mount Fuji is in ______." 🗻', opts: o4('France', 'England', 'Vietnam', 'Japan'), ans: 'D', why: 'Mount Fuji is in <b>Japan</b>.' },
    { sec: 'Language', name: 'Question 9', pts: 1, text: '"In England people speak ______."', opts: o4('English', 'French', 'Japanese', 'Vietnamese'), ans: 'A', why: 'In England people speak <b>English</b>.' },
    { sec: 'Nationality', name: 'Question 10', pts: 1, text: '"People from Australia are ______."', opts: o4('Australiaese', 'Australian', 'Australish', 'Australland'), ans: 'B', why: 'People from Australia are <b>Australian</b>.' },
  ],
},

/* ═══════════ TEST 22 — AT THE TABLE ═══════════ */
{
  id: 8212, title: 'Test 22 · At the table', time: 20,
  questions: [
    { sec: 'Food', name: 'Question 1', pts: 1, img: A + 'ta5/rice.svg', text: '"I ______ like some orange juice, please."', opts: o4('would', 'am', 'do', 'have'), ans: 'A', why: 'A polite wish uses <b>would</b> like.' },
    { sec: 'Food', name: 'Question 2', pts: 1, text: '"______ you like some cake?" 🍰', opts: o4('Do', 'Are', 'Would', 'Is'), ans: 'C', why: 'A polite offer uses <b>Would you like...?</b>' },
    { sec: 'Food', name: 'Question 3', pts: 1, img: A + 'ta5/soup.svg', text: '"She would like ______ apple." 🍎', opts: o4('a', 'an', 'some', 'any'), ans: 'B', why: 'Before a vowel sound we use <b>an</b>: an apple.' },
    { sec: 'Food', name: 'Question 4', pts: 1, text: '"There isn’t ______ milk in the fridge."', opts: o4('some', 'a', 'an', 'any'), ans: 'D', why: 'In a negative sentence we use <b>any</b>.' },
    { sec: 'Food', name: 'Question 5', pts: 1, img: A + 'ta5/table_set.svg', text: '"We eat soup with a ______." 🥄', opts: o4('spoon', 'book', 'shoe', 'pen'), ans: 'A', why: 'We eat soup with a <b>spoon</b>.' },
    { sec: 'Food', name: 'Question 6', pts: 1, text: '"Bananas, apples and oranges are all ______."', opts: o4('meat', 'drinks', 'fruit', 'toys'), ans: 'C', why: 'Bananas, apples and oranges are <b>fruit</b>.' },
    { sec: 'Food', name: 'Question 7', pts: 1, text: '"Would you like ______ water?" 💧', opts: o4('a', 'some', 'an', 'many'), ans: 'B', why: 'In an offer with an uncountable noun we use <b>some</b>.' },
    { sec: 'Food', name: 'Question 8', pts: 1, img: A + 'ta5/juice.svg', text: '"Carrots and beans are ______." 🥕', opts: o4('fruit', 'drinks', 'meat', 'vegetables'), ans: 'D', why: 'Carrots and beans are <b>vegetables</b>.' },
    { sec: 'Food', name: 'Question 9', pts: 1, text: '"I’m thirsty. I’d like something to ______."', opts: o4('drink', 'read', 'wear', 'sleep'), ans: 'A', why: 'When thirsty we want something to <b>drink</b>.' },
    { sec: 'Food', name: 'Question 10', pts: 1, text: '"How ______ sugar would you like?"', opts: o4('many', 'much', 'old', 'often'), ans: 'B', why: 'Sugar is uncountable, so we use <b>much</b>.' },
  ],
},

/* ═══════════ TEST 23 — AROUND THE TOWN ═══════════ */
{
  id: 8213, title: 'Test 23 · Around the town', time: 20,
  questions: [
    { sec: 'Places', name: 'Question 1', pts: 1, img: A + 'ta5/shop.svg', text: '"You borrow books at the ______." 📚', opts: o4('library', 'bakery', 'cinema', 'zoo'), ans: 'A', why: 'We borrow books at the <b>library</b>.' },
    { sec: 'Places', name: 'Question 2', pts: 1, text: '"You watch films at the ______." 🎬', opts: o4('hospital', 'park', 'cinema', 'bank'), ans: 'C', why: 'We watch films at the <b>cinema</b>.' },
    { sec: 'Directions', name: 'Question 3', pts: 1, img: A + 'ta5/library.svg', text: '"Go straight and then ______ left."', opts: o4('sit', 'turn', 'eat', 'sleep'), ans: 'B', why: 'To change direction we say <b>turn</b> left.' },
    { sec: 'Places', name: 'Question 4', pts: 1, text: '"You send letters at the ______." ✉', opts: o4('school', 'zoo', 'park', 'post office'), ans: 'D', why: 'We send letters at the <b>post office</b>.' },
    { sec: 'Prepositions', name: 'Question 5', pts: 1, img: A + 'ta5/cinema.svg', text: '"The bank is ______ to the supermarket." (beside)', opts: o4('next', 'in', 'under', 'on'), ans: 'A', why: 'Beside something = <b>next</b> to it.' },
    { sec: 'Prepositions', name: 'Question 6', pts: 1, text: '"The shop is ______ the bank and the café." (in the middle)', opts: o4('on', 'under', 'between', 'in'), ans: 'C', why: 'In the middle of two things = <b>between</b>.' },
    { sec: 'Places', name: 'Question 7', pts: 1, text: '"Sick people go to the ______." 🏥', opts: o4('bakery', 'hospital', 'cinema', 'park'), ans: 'B', why: 'Sick people go to the <b>hospital</b>.' },
    { sec: 'Prepositions', name: 'Question 8', pts: 1, img: A + 'ta5/lights.svg', text: '"The cat is ______ the table, on the floor." (below)', opts: o4('on', 'in', 'next', 'under'), ans: 'D', why: 'Below something = <b>under</b> it.' },
    { sec: 'Directions', name: 'Question 9', pts: 1, text: '"Turn ______ at the corner." (not left)', opts: o4('right', 'up', 'down', 'over'), ans: 'A', why: 'The opposite of left is <b>right</b>.' },
    { sec: 'Places', name: 'Question 10', pts: 1, text: '"You catch a train at the ______." 🚉', opts: o4('airport', 'station', 'harbour', 'garden'), ans: 'B', why: 'We catch a train at the <b>station</b>.' },
  ],
},

/* ═══════════ TEST 24 — FEELINGS AND LOOKS ═══════════ */
{
  id: 8214, title: 'Test 24 · Feelings and looks', time: 20,
  questions: [
    { sec: 'Feelings', name: 'Question 1', pts: 1, img: A + 'ta5/happy.svg', text: '"She got a present, so she is ______." 🎁', opts: o4('happy', 'sad', 'angry', 'tired'), ans: 'A', why: 'A nice surprise makes you <b>happy</b>.' },
    { sec: 'Feelings', name: 'Question 2', pts: 1, text: '"He lost his dog, so he feels ______." 😢', opts: o4('happy', 'excited', 'sad', 'hungry'), ans: 'C', why: 'Losing something makes you <b>sad</b>.' },
    { sec: 'Feelings', name: 'Question 3', pts: 1, img: A + 'ta5/sad.svg', text: '"I worked all day. Now I am ______." 😴', opts: o4('happy', 'tired', 'cold', 'funny'), ans: 'B', why: 'After a lot of work you feel <b>tired</b>.' },
    { sec: 'Feelings', name: 'Question 4', pts: 1, text: '"We are going on holiday tomorrow. We are ______!" 🎉', opts: o4('bored', 'sad', 'angry', 'excited'), ans: 'D', why: 'Waiting for something fun makes you <b>excited</b>.' },
    { sec: 'Appearance', name: 'Question 5', pts: 1, img: A + 'ta5/angry.svg', text: '"My friend has short ______ hair." (the colour of night)', opts: o4('black', 'tall', 'old', 'loud'), ans: 'A', why: 'The colour of night is <b>black</b>.' },
    { sec: 'Appearance', name: 'Question 6', pts: 1, text: '"He wears ______ because he can’t see well." 👓', opts: o4('shoes', 'gloves', 'glasses', 'socks'), ans: 'C', why: 'To see well we wear <b>glasses</b>.' },
    { sec: 'Appearance', name: 'Question 7', pts: 1, text: '"She is ______, not fat."', opts: o4('tall', 'thin', 'old', 'young'), ans: 'B', why: 'The opposite of fat is <b>thin</b>.' },
    { sec: 'Feelings', name: 'Question 8', pts: 1, img: A + 'ta5/tired.svg', text: '"There is nothing to do. I am ______." 😐', opts: o4('happy', 'excited', 'hungry', 'bored'), ans: 'D', why: 'With nothing to do you feel <b>bored</b>.' },
    { sec: 'Appearance', name: 'Question 9', pts: 1, text: '"My baby brother is ______, not tall."', opts: o4('short', 'long', 'big', 'old'), ans: 'A', why: 'The opposite of tall is <b>short</b>.' },
    { sec: 'Feelings', name: 'Question 10', pts: 1, text: '"It’s my birthday and I feel ______." 😄', opts: o4('sad', 'glad', 'angry', 'tired'), ans: 'B', why: 'On a happy day you feel <b>glad</b>.' },
  ],
},

/* ═══════════ TEST 25 — AT THE DOCTOR ═══════════ */
{
  id: 8215, title: 'Test 25 · At the doctor', time: 20,
  questions: [
    { sec: 'Health', name: 'Question 1', pts: 1, img: A + 'ta5/doctor.svg', text: '"My tooth hurts. I have a ______." 🦷', opts: o4('toothache', 'headache', 'cold', 'fever'), ans: 'A', why: 'A pain in a tooth is a <b>toothache</b>.' },
    { sec: 'Health', name: 'Question 2', pts: 1, text: '"What’s the ______ with you?"', opts: o4('name', 'time', 'matter', 'colour'), ans: 'C', why: 'We ask <b>What’s the matter?</b> when someone is ill.' },
    { sec: 'Advice', name: 'Question 3', pts: 1, img: A + 'ta5/medicine.svg', text: '"You are ill. You should see a ______."', opts: o4('teacher', 'doctor', 'farmer', 'pilot'), ans: 'B', why: 'When ill we should see a <b>doctor</b>.' },
    { sec: 'Health', name: 'Question 4', pts: 1, text: '"It hurts when I swallow. I have a ______."', opts: o4('headache', 'toothache', 'fever', 'sore throat'), ans: 'D', why: 'Pain in the throat is a <b>sore throat</b>.' },
    { sec: 'Advice', name: 'Question 5', pts: 1, img: A + 'ta5/fever.svg', text: '"You have a cold. You should ______ in bed."', opts: o4('stay', 'run', 'jump', 'play'), ans: 'A', why: 'With a cold you should <b>stay</b> in bed and rest.' },
    { sec: 'Health', name: 'Question 6', pts: 1, text: '"My head hurts. I have a ______."', opts: o4('toothache', 'cold', 'headache', 'cough'), ans: 'C', why: 'A pain in the head is a <b>headache</b>.' },
    { sec: 'Advice', name: 'Question 7', pts: 1, text: '"You should ______ this medicine three times a day."', opts: o4('make', 'take', 'play', 'do'), ans: 'B', why: 'We <b>take</b> medicine.' },
    { sec: 'Health', name: 'Question 8', pts: 1, img: A + 'ta5/tooth.svg', text: '"My body is very hot. I have a ______." 🌡', opts: o4('cold hand', 'headache', 'cough', 'fever'), ans: 'D', why: 'A high temperature is a <b>fever</b>.' },
    { sec: 'Advice', name: 'Question 9', pts: 1, text: '"To stay healthy, you should ______ a lot of water." 💧', opts: o4('drink', 'throw', 'read', 'wear'), ans: 'A', why: 'To be healthy we should <b>drink</b> water.' },
    { sec: 'Health', name: 'Question 10', pts: 1, text: '"I keep sneezing and coughing. I have a ______."', opts: o4('toothache', 'cold', 'sore leg', 'headache'), ans: 'B', why: 'Sneezing and coughing are signs of a <b>cold</b>.' },
  ],
},

/* ═══════════ TEST 26 — ASKING QUESTIONS ═══════════ */
{
  id: 8216, title: 'Test 26 · Asking questions', time: 20,
  questions: [
    { sec: 'Question', name: 'Question 1', pts: 1, img: A + 'ta5/question.svg', text: '"______ is your name?" – "My name is Mai."', opts: o4('What', 'Who', 'Where', 'When'), ans: 'A', why: 'We ask <b>What</b> for a name.' },
    { sec: 'Question', name: 'Question 2', pts: 1, text: '"______ do you live?" – "In Ha Noi."', opts: o4('What', 'When', 'Where', 'Why'), ans: 'C', why: 'We ask <b>Where</b> for a place.' },
    { sec: 'Question', name: 'Question 3', pts: 1, text: '"______ old are you?" – "I am ten."', opts: o4('What', 'How', 'Who', 'Where'), ans: 'B', why: 'We ask <b>How old</b> for age.' },
    { sec: 'Question', name: 'Question 4', pts: 1, text: '"______ is your birthday?" – "In June."', opts: o4('Where', 'What colour', 'Who', 'When'), ans: 'D', why: 'We ask <b>When</b> for a time or date.' },
    { sec: 'Question', name: 'Question 5', pts: 1, img: A + 'ta5/clock3.svg', text: '"______ are you sad?" – "Because I lost my pen."', opts: o4('Why', 'What', 'Where', 'Who'), ans: 'A', why: 'We ask <b>Why</b> for a reason.' },
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
    { sec: 'Reading', name: 'Question 1', pts: 1, img: A + 'ta5/family.svg', text: '📖 <i>Nam is eleven. He lives in Ha Noi with his parents and his little sister. His father is a doctor, his mother is a teacher, and Nam loves reading and football.</i><br>How old is Nam?', opts: o4('Eleven', 'Ten', 'Twelve', 'Nine'), ans: 'A', why: 'The text says Nam is <b>eleven</b>.' },
    { sec: 'Reading', name: 'Question 2', pts: 1, text: '📖 <i>Nam is eleven. He lives in Ha Noi with his parents and his little sister. His father is a doctor, his mother is a teacher, and Nam loves reading and football.</i><br>Where does Nam live?', opts: o4('In Hue', 'In Da Nang', 'In Ha Noi', 'In Hoi An'), ans: 'C', why: 'The text says he lives <b>in Ha Noi</b>.' },
    { sec: 'Reading', name: 'Question 3', pts: 1, text: '📖 <i>Nam is eleven. He lives in Ha Noi with his parents and his little sister. His father is a doctor, his mother is a teacher, and Nam loves reading and football.</i><br>What is Nam’s father?', opts: o4('A teacher', 'A doctor', 'A pilot', 'A cook'), ans: 'B', why: 'The text says his father is <b>a doctor</b>.' },
    { sec: 'Reading', name: 'Question 4', pts: 1, text: '📖 <i>Nam is eleven. He lives in Ha Noi with his parents and his little sister. His father is a doctor, his mother is a teacher, and Nam loves reading and football.</i><br>What is Nam’s mother?', opts: o4('A nurse', 'A doctor', 'A farmer', 'A teacher'), ans: 'D', why: 'The text says his mother is <b>a teacher</b>.' },
    { sec: 'Reading', name: 'Question 5', pts: 1, img: A + 'ta5/doctor.svg', text: '📖 <i>Nam is eleven. He lives in Ha Noi with his parents and his little sister. His father is a doctor, his mother is a teacher, and Nam loves reading and football.</i><br>Who does Nam live with?', opts: o4('His parents and sister', 'His grandparents', 'His friends', 'Nobody'), ans: 'A', why: 'He lives with <b>his parents and his sister</b>.' },
    { sec: 'Reading', name: 'Question 6', pts: 1, text: '📖 <i>Nam is eleven. He lives in Ha Noi with his parents and his little sister. His father is a doctor, his mother is a teacher, and Nam loves reading and football.</i><br>What does Nam love doing?', opts: o4('Swimming', 'Singing', 'Reading and football', 'Cooking'), ans: 'C', why: 'The text says he loves <b>reading and football</b>.' },
    { sec: 'Reading', name: 'Question 7', pts: 1, text: '📖 <i>Nam is eleven. He lives in Ha Noi with his parents and his little sister. His father is a doctor, his mother is a teacher, and Nam loves reading and football.</i><br>Does Nam have a brother or a sister?', opts: o4('A brother', 'A sister', 'Two sisters', 'No one'), ans: 'B', why: 'The text says he has a little <b>sister</b>.' },
    { sec: 'Reading', name: 'Question 8', pts: 1, text: '📖 <i>Nam is eleven. He lives in Ha Noi with his parents and his little sister. His father is a doctor, his mother is a teacher, and Nam loves reading and football.</i><br>Nam’s sister is ______ than Nam.', opts: o4('older', 'taller', 'stronger', 'younger'), ans: 'D', why: 'A "little sister" is <b>younger</b> than Nam.' },
    { sec: 'Reading', name: 'Question 9', pts: 1, img: A + 'ta5/family.svg', text: '📖 <i>Nam is eleven. He lives in Ha Noi with his parents and his little sister. His father is a doctor, his mother is a teacher, and Nam loves reading and football.</i><br>How many people are in Nam’s family?', opts: o4('Four', 'Three', 'Five', 'Two'), ans: 'A', why: 'Parents, Nam and his sister make <b>four</b>.' },
    { sec: 'Reading', name: 'Question 10', pts: 1, text: '📖 <i>Nam is eleven. He lives in Ha Noi with his parents and his little sister. His father is a doctor, his mother is a teacher, and Nam loves reading and football.</i><br>What sport does Nam love?', opts: o4('Tennis', 'Football', 'Basketball', 'Badminton'), ans: 'B', why: 'The text says he loves <b>football</b>.' },
  ],
},

/* ═══════════ TEST 28 — READING: A TRIP TO DA NANG ═══════════ */
{
  id: 8218, title: 'Test 28 · Reading: A trip to Da Nang', time: 20,
  questions: [
    { sec: 'Reading', name: 'Question 1', pts: 1, img: A + 'ta5/beach.svg', text: '📖 <i>Last summer, Mai went to Da Nang with her family for one week. They swam in the sea and ate a lot of seafood. Mai took many photos and was very happy.</i><br>Where did Mai go?', opts: o4('Da Nang', 'Ha Noi', 'Hue', 'Sa Pa'), ans: 'A', why: 'The text says Mai went to <b>Da Nang</b>.' },
    { sec: 'Reading', name: 'Question 2', pts: 1, text: '📖 <i>Last summer, Mai went to Da Nang with her family for one week. They swam in the sea and ate a lot of seafood. Mai took many photos and was very happy.</i><br>When did Mai go there?', opts: o4('Last winter', 'Last week', 'Last summer', 'Next year'), ans: 'C', why: 'The text says <b>last summer</b>.' },
    { sec: 'Reading', name: 'Question 3', pts: 1, text: '📖 <i>Last summer, Mai went to Da Nang with her family for one week. They swam in the sea and ate a lot of seafood. Mai took many photos and was very happy.</i><br>How long did they stay?', opts: o4('Two days', 'One week', 'One month', 'One day'), ans: 'B', why: 'The text says <b>one week</b>.' },
    { sec: 'Reading', name: 'Question 4', pts: 1, text: '📖 <i>Last summer, Mai went to Da Nang with her family for one week. They swam in the sea and ate a lot of seafood. Mai took many photos and was very happy.</i><br>What did they do in the sea?', opts: o4('Fished', 'Slept', 'Ran', 'Swam'), ans: 'D', why: 'The text says they <b>swam</b> in the sea.' },
    { sec: 'Reading', name: 'Question 5', pts: 1, img: A + 'ta5/plane.svg', text: '📖 <i>Last summer, Mai went to Da Nang with her family for one week. They swam in the sea and ate a lot of seafood. Mai took many photos and was very happy.</i><br>What did they eat?', opts: o4('Seafood', 'Only rice', 'Bread', 'Nothing'), ans: 'A', why: 'The text says they ate a lot of <b>seafood</b>.' },
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
    { sec: 'Reading', name: 'Question 1', pts: 1, img: A + 'ta5/school.svg', text: '📖 <i>Tom studies at Green Hill School. School starts at seven o’clock and his favourite subject is science. At break time he plays with his friends, and he goes home at four o’clock.</i><br>Where does Tom study?', opts: o4('Green Hill School', 'Blue Sky School', 'At home', 'Sunny School'), ans: 'A', why: 'The text says he studies at <b>Green Hill School</b>.' },
    { sec: 'Reading', name: 'Question 2', pts: 1, text: '📖 <i>Tom studies at Green Hill School. School starts at seven o’clock and his favourite subject is science. At break time he plays with his friends, and he goes home at four o’clock.</i><br>What time does school start?', opts: o4('At six', 'At eight', 'At seven', 'At nine'), ans: 'C', why: 'The text says school starts <b>at seven</b>.' },
    { sec: 'Reading', name: 'Question 3', pts: 1, text: '📖 <i>Tom studies at Green Hill School. School starts at seven o’clock and his favourite subject is science. At break time he plays with his friends, and he goes home at four o’clock.</i><br>What is Tom’s favourite subject?', opts: o4('Maths', 'Science', 'English', 'Music'), ans: 'B', why: 'The text says his favourite subject is <b>science</b>.' },
    { sec: 'Reading', name: 'Question 4', pts: 1, text: '📖 <i>Tom studies at Green Hill School. School starts at seven o’clock and his favourite subject is science. At break time he plays with his friends, and he goes home at four o’clock.</i><br>What does Tom do at break time?', opts: o4('Sleeps', 'Reads', 'Eats lunch', 'Plays with friends'), ans: 'D', why: 'The text says he <b>plays with his friends</b>.' },
    { sec: 'Reading', name: 'Question 5', pts: 1, img: A + 'ta5/homework.svg', text: '📖 <i>Tom studies at Green Hill School. School starts at seven o’clock and his favourite subject is science. At break time he plays with his friends, and he goes home at four o’clock.</i><br>What time does Tom go home?', opts: o4('At four', 'At five', 'At three', 'At two'), ans: 'A', why: 'The text says he goes home <b>at four</b>.' },
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
    { sec: 'Past', name: 'Question 2', pts: 1, img: A + 'ta5/book.svg', text: '"She ______ to the market yesterday." (go)', opts: o4('go', 'goes', 'went', 'going'), ans: 'C', why: 'The past of go is <b>went</b>.' },
    { sec: 'Continuous', name: 'Question 3', pts: 1, text: '"Look! The dog ______ fast." (run)', opts: o4('runs', 'is running', 'run', 'ran'), ans: 'B', why: 'Happening now: <b>is running</b>.' },
    { sec: 'Comparative', name: 'Question 4', pts: 1, text: '"A car is ______ than a bike." (fast)', opts: o4('fast', 'fastest', 'more fast', 'faster'), ans: 'D', why: 'fast + -er = <b>faster</b>.' },
    { sec: 'Superlative', name: 'Question 5', pts: 1, text: '"He is the ______ boy in the class." (young)', opts: o4('youngest', 'younger', 'young', 'more young'), ans: 'A', why: 'young + -est = the <b>youngest</b>.' },
    { sec: 'Future', name: 'Question 6', pts: 1, img: A + 'ta5/eleph_dog.svg', text: '"I think it ______ be sunny tomorrow."', opts: o4('is', 'was', 'will', 'does'), ans: 'C', why: 'For a prediction we use <b>will</b>.' },
    { sec: 'Going to', name: 'Question 7', pts: 1, text: '"We ______ going to visit the museum."', opts: o4('is', 'are', 'am', 'do'), ans: 'B', why: 'With <b>we</b> we use <b>are</b> going to.' },
    { sec: 'Prepositions', name: 'Question 8', pts: 1, text: '"My birthday is ______ July."', opts: o4('on', 'at', 'to', 'in'), ans: 'D', why: 'We use <b>in</b> with months.' },
    { sec: 'Adverb', name: 'Question 9', pts: 1, img: A + 'ta5/week.svg', text: '"The tortoise moves ______." (slow)', opts: o4('slowly', 'slow', 'slower', 'slowest'), ans: 'A', why: 'slow + -ly = <b>slowly</b>.' },
    { sec: 'Question', name: 'Question 10', pts: 1, text: '"______ do you go to bed?" – "At nine o’clock."', opts: o4('Who', 'Where', 'When', 'What colour'), ans: 'C', why: 'We ask <b>When</b> for a time.' },
  ],
},


/* ═══════════ TEST 31 — SPELLING: WORDS WE OFTEN GET WRONG ═══════════ */
{
  id: 9901, title: 'Test 31 · Spelling: words we often get wrong', time: 20,
  questions: [
    { sec: 'Spelling', name: 'Question 1', pts: 1, text: 'Choose the correct spelling.', opts: o4('definitely', 'definately', 'definitly', 'definetly'), ans: 'A', why: 'The correct spelling is <b>definitely</b> — it contains the word <i>finite</i>.' },
    { sec: 'Spelling', name: 'Question 2', pts: 1, text: 'Choose the correct spelling.', opts: o4('seperate', 'separate', 'seperete', 'sepparate'), ans: 'B', why: 'The correct spelling is <b>separate</b> — there is <i>a rat</i> in it.' },
    { sec: 'Spelling', name: 'Question 3', pts: 1, text: 'Choose the correct spelling.', opts: o4('enviroment', 'enviornment', 'environment', 'envirnoment'), ans: 'C', why: 'The correct spelling is <b>environment</b> — do not lose the <b>n</b>.' },
    { sec: 'Spelling', name: 'Question 4', pts: 1, text: 'Choose the correct spelling.', opts: o4('embarass', 'embarrasss', 'embaras', 'embarrass'), ans: 'D', why: 'The correct spelling is <b>embarrass</b> — two r and two s.' },
    { sec: 'Spelling', name: 'Question 5', pts: 1, text: 'Choose the correct spelling.', opts: o4('rhythm', 'rythm', 'rhythem', 'rhytm'), ans: 'A', why: 'The correct spelling is <b>rhythm</b>.' },
    { sec: 'Spelling', name: 'Question 6', pts: 1, text: 'Choose the correct spelling.', opts: o4('occassion', 'occasion', 'ocassion', 'ocasion'), ans: 'B', why: 'The correct spelling is <b>occasion</b> — two c, one s.' },
    { sec: 'Spelling', name: 'Question 7', pts: 1, text: 'Choose the correct spelling.', opts: o4('goverment', 'govermment', 'government', 'governmant'), ans: 'C', why: 'The correct spelling is <b>government</b> — keep the <b>n</b> in <i>govern</i>.' },
    { sec: 'Spelling', name: 'Question 8', pts: 1, text: 'Choose the correct spelling.', opts: o4('accomodation', 'acommodation', 'acomodation', 'accommodation'), ans: 'D', why: 'The correct spelling is <b>accommodation</b> — two c and two m.' },
    { sec: 'Spelling', name: 'Question 9', pts: 1, img: A + 'ta5/spellrule.svg', text: 'Which spelling rule explains <b>believe</b>?', opts: o4('i before e except after c', 'always double the last letter', 'drop the final e', 'change y to i'), ans: 'A', why: 'The rule is <b>i before e except after c</b>.' },
    { sec: 'Spelling', name: 'Question 10', pts: 1, text: 'Choose the correct spelling.', opts: o4('arguement', 'argument', 'argumment', 'arguemant'), ans: 'B', why: 'We drop the <b>e</b> of argue: <b>argument</b>.' },
  ],
},

/* ═══════════ TEST 32 — WORD STUDY: PREFIXES, SUFFIXES AND ROOTS ═══════════ */
{
  id: 9902, title: 'Test 32 · Prefixes, suffixes and root words', time: 20,
  questions: [
    { sec: 'Root words', name: 'Question 1', pts: 1, text: 'What is the ROOT word in <b>unbelievable</b>?', opts: o4('believe', 'unbelieve', 'believable', 'able'), ans: 'A', why: 'Take away <b>un-</b> and <b>-able</b>: the root is <b>believe</b>.' },
    { sec: 'Prefixes', name: 'Question 2', pts: 1, img: A + 'ta5/transport.svg', text: 'What does <b>trans-</b> mean in <b>transport</b>?', opts: o4('under', 'across', 'again', 'before'), ans: 'B', why: '<b>trans-</b> means <b>across</b> — to carry across 🚚.' },
    { sec: 'Prefixes', name: 'Question 3', pts: 1, img: A + 'ta5/telephone.svg', text: 'What does <b>tele-</b> mean in <b>telephone</b>?', opts: o4('small', 'loud', 'far', 'round'), ans: 'C', why: '<b>tele-</b> means <b>far</b> — sound from far away 📞.' },
    { sec: 'Prefixes', name: 'Question 4', pts: 1, text: 'What does <b>auto-</b> mean in <b>automatic</b>?', opts: o4('together', 'against', 'after', 'by itself'), ans: 'D', why: '<b>auto-</b> means <b>self</b> or by itself.' },
    { sec: 'Prefixes', name: 'Question 5', pts: 1, text: 'The opposite of <b>legal</b> is ______.', opts: o4('illegal', 'unlegal', 'dislegal', 'mislegal'), ans: 'A', why: 'Before <b>l</b> we use <b>il-</b>: <b>illegal</b>.' },
    { sec: 'Prefixes', name: 'Question 6', pts: 1, text: 'The opposite of <b>regular</b> is ______.', opts: o4('unregular', 'irregular', 'disregular', 'misregular'), ans: 'B', why: 'Before <b>r</b> we use <b>ir-</b>: <b>irregular</b>.' },
    { sec: 'Suffixes', name: 'Question 7', pts: 1, text: 'Which suffix turns <b>decide</b> into a noun?', opts: o4('-ly', '-ful', '-sion', '-less'), ans: 'C', why: 'decide → <b>decision</b>.' },
    { sec: 'Suffixes', name: 'Question 8', pts: 1, text: 'Which word is an ADJECTIVE?', opts: o4('danger', 'dangerously', 'endanger', 'dangerous'), ans: 'D', why: '<b>dangerous</b> describes a noun, so it is an adjective.' },
    { sec: 'Suffixes', name: 'Question 9', pts: 1, text: 'What does <b>-ology</b> mean in <b>biology</b>?', opts: o4('the study of', 'the fear of', 'the writing of', 'the making of'), ans: 'A', why: '<b>-ology</b> means <b>the study of</b>.' },
    { sec: 'Root words', name: 'Question 10', pts: 1, img: A + 'ta5/port.svg', text: 'Which word does NOT share the root <b>port</b> (to carry)?', opts: o4('transport', 'portable', 'important', 'export'), ans: 'C', why: '<b>important</b> does not come from the root meaning "carry".' },
  ],
},

/* ═══════════ TEST 33 — VOCABULARY: SYNONYMS AND SHADES OF MEANING ═══════════ */
{
  id: 9903, title: 'Test 33 · Synonyms and shades of meaning', time: 20,
  questions: [
    { sec: 'Synonyms', name: 'Question 1', pts: 1, img: A + 'ta5/angry.svg', text: 'Which word means the SAME as <b>furious</b>?', opts: o4('very angry', 'a little sad', 'quite pleased', 'slightly tired'), ans: 'A', why: '<b>furious</b> means <b>very angry</b> 😠.' },
    { sec: 'Shades of meaning', name: 'Question 2', pts: 1, text: 'Which word shows the STRONGEST feeling?', opts: o4('annoyed', 'furious', 'bothered', 'irritated'), ans: 'B', why: '<b>furious</b> is much stronger than annoyed or irritated.' },
    { sec: 'Shades of meaning', name: 'Question 3', pts: 1, img: A + 'ta5/warm_hot.svg', text: 'Put in order from least to most: warm · boiling · hot', opts: o4('boiling, hot, warm', 'hot, warm, boiling', 'warm, hot, boiling', 'warm, boiling, hot'), ans: 'C', why: '<b>warm</b> → <b>hot</b> → <b>boiling</b> 🔥.' },
    { sec: 'Synonyms', name: 'Question 4', pts: 1, text: 'Which word means the SAME as <b>ancient</b>?', opts: o4('recent', 'modern', 'fresh', 'very old'), ans: 'D', why: '<b>ancient</b> means <b>very old</b>.' },
    { sec: 'Synonyms', name: 'Question 5', pts: 1, text: 'Which word means the SAME as <b>demonstrate</b>?', opts: o4('show', 'hide', 'forget', 'break'), ans: 'A', why: 'To <b>show</b> is to demonstrate.' },
    { sec: 'Shades of meaning', name: 'Question 6', pts: 1, img: A + 'ta5/salt.svg', text: 'Which word is the most POLITE way to ask?', opts: o4('Give me the salt.', 'Could you pass the salt, please?', 'Salt, now.', 'I want the salt.'), ans: 'B', why: '<b>Could you … please?</b> is the most polite form 🧂.' },
    { sec: 'Synonyms', name: 'Question 7', pts: 1, text: 'Which word means the SAME as <b>weary</b>?', opts: o4('excited', 'hungry', 'tired', 'curious'), ans: 'C', why: '<b>weary</b> means <b>tired</b>.' },
    { sec: 'Shades of meaning', name: 'Question 8', pts: 1, text: 'Which word shows the SMALLEST amount of happiness?', opts: o4('overjoyed', 'delighted', 'thrilled', 'pleased'), ans: 'D', why: '<b>pleased</b> is the mildest of the four.' },
    { sec: 'Synonyms', name: 'Question 9', pts: 1, text: 'A writer changes "said" to "muttered". What extra information does this give?', opts: o4('how the words were spoken', 'who was listening', 'the time of day', 'where they were'), ans: 'A', why: 'A stronger verb tells the reader <b>how</b> the words were spoken.' },
    { sec: 'Synonyms', name: 'Question 10', pts: 1, text: 'Which pair are SYNONYMS?', opts: o4('brave — cowardly', 'enormous — gigantic', 'ancient — modern', 'increase — decrease'), ans: 'B', why: '<b>enormous</b> and <b>gigantic</b> mean the same; the rest are opposites.' },
  ],
},

/* ═══════════ TEST 34 — VOCABULARY: ANTONYMS ═══════════ */
{
  id: 9904, title: 'Test 34 · Antonyms', time: 20,
  questions: [
    { sec: 'Antonyms', name: 'Question 1', pts: 1, text: 'What is the OPPOSITE of <b>expand</b>?', opts: o4('shrink', 'grow', 'stretch', 'widen'), ans: 'A', why: 'The opposite of expand is <b>shrink</b>.' },
    { sec: 'Antonyms', name: 'Question 2', pts: 1, text: 'What is the OPPOSITE of <b>ancient</b>?', opts: o4('historic', 'modern', 'old', 'past'), ans: 'B', why: 'The opposite of ancient is <b>modern</b>.' },
    { sec: 'Antonyms', name: 'Question 3', pts: 1, text: 'What is the OPPOSITE of <b>generous</b>?', opts: o4('friendly', 'wealthy', 'selfish', 'polite'), ans: 'C', why: 'The opposite of generous is <b>selfish</b>.' },
    { sec: 'Antonyms', name: 'Question 4', pts: 1, text: 'What is the OPPOSITE of <b>praise</b>?', opts: o4('thank', 'admire', 'support', 'criticise'), ans: 'D', why: 'The opposite of praise is <b>criticise</b>.' },
    { sec: 'Antonyms', name: 'Question 5', pts: 1, text: 'What is the OPPOSITE of <b>victory</b>?', opts: o4('defeat', 'battle', 'prize', 'team'), ans: 'A', why: 'The opposite of victory is <b>defeat</b>.' },
    { sec: 'Antonyms', name: 'Question 6', pts: 1, text: 'What is the OPPOSITE of <b>frequently</b>?', opts: o4('always', 'rarely', 'often', 'usually'), ans: 'B', why: 'The opposite of frequently is <b>rarely</b>.' },
    { sec: 'Antonyms', name: 'Question 7', pts: 1, text: 'What is the OPPOSITE of <b>reveal</b>?', opts: o4('show', 'tell', 'conceal', 'explain'), ans: 'C', why: 'The opposite of reveal is <b>conceal</b> (hide).' },
    { sec: 'Antonyms', name: 'Question 8', pts: 1, text: 'What is the OPPOSITE of <b>voluntary</b>?', opts: o4('free', 'willing', 'helpful', 'compulsory'), ans: 'D', why: 'The opposite of voluntary is <b>compulsory</b> (you must do it).' },
    { sec: 'Antonyms', name: 'Question 9', pts: 1, img: A + 'ta5/up_down.svg', text: 'Which pair are ANTONYMS?', opts: o4('ascend — descend', 'begin — start', 'huge — massive', 'reply — answer'), ans: 'A', why: '<b>ascend</b> (go up) and <b>descend</b> (go down) are opposites.' },
    { sec: 'Antonyms', name: 'Question 10', pts: 1, text: 'What is the OPPOSITE of <b>permanent</b>?', opts: o4('lasting', 'temporary', 'fixed', 'strong'), ans: 'B', why: 'The opposite of permanent is <b>temporary</b>.' },
  ],
},

/* ═══════════ TEST 35 — VOCABULARY: HOMOPHONES AND CONFUSED WORDS ═══════════ */
{
  id: 9905, title: 'Test 35 · Homophones and easily confused words', time: 20,
  questions: [
    { sec: 'Confused words', name: 'Question 1', pts: 1, text: '"The noise had a bad ______ on my concentration."', opts: o4('effect', 'affect', 'efect', 'affekt'), ans: 'A', why: 'The noun is <b>effect</b>; <i>affect</i> is the verb.' },
    { sec: 'Confused words', name: 'Question 2', pts: 1, text: '"Loud music can ______ your hearing."', opts: o4('effect', 'affect', 'efect', 'affectt'), ans: 'B', why: 'Here we need the verb <b>affect</b>.' },
    { sec: 'Confused words', name: 'Question 3', pts: 1, text: '"We must ______ the new rules." (agree to follow them)', opts: o4('except', 'expect', 'accept', 'aspect'), ans: 'C', why: '<b>accept</b> means to agree to take or follow something.' },
    { sec: 'Homophones', name: 'Question 4', pts: 1, img: A + 'ta5/whose.svg', text: '"______ book is this?" (belonging to whom)', opts: o4('Who’s', 'Whos', 'Whos’', 'Whose'), ans: 'D', why: '<b>Whose</b> shows belonging; <i>who’s</i> means "who is".' },
    { sec: 'Homophones', name: 'Question 5', pts: 1, text: '"______ coming to the party tonight?" (who is)', opts: o4('Who’s', 'Whose', 'Whos', 'Whoes'), ans: 'A', why: 'who is → <b>Who’s</b>.' },
    { sec: 'Confused words', name: 'Question 6', pts: 1, text: 'Which word is the VERB meaning "to have an influence on"?', opts: o4('effect', 'affect', 'effects', 'affection'), ans: 'B', why: 'The verb is <b>affect</b>; the noun (the result) is <i>effect</i>.' },
    { sec: 'Confused words', name: 'Question 7', pts: 1, text: '"There are ______ apples than oranges." (a smaller number)', opts: o4('less', 'lesser', 'fewer', 'little'), ans: 'C', why: 'With countable nouns we use <b>fewer</b>; with uncountable, <i>less</i>.' },
    { sec: 'Confused words', name: 'Question 8', pts: 1, text: '"I have ______ finished my homework." (up to now)', opts: o4('all ready', 'alright', 'allready', 'already'), ans: 'D', why: '<b>already</b> means before now; <i>all ready</i> means everyone is prepared.' },
    { sec: 'Homophones', name: 'Question 9', pts: 1, text: '"The team played well and won ______ first match."', opts: o4('their', 'there', 'they’re', 'theirs'), ans: 'A', why: '<b>their</b> shows belonging.' },
    { sec: 'Confused words', name: 'Question 10', pts: 1, text: '"Please ______ quiet during the test." (remain)', opts: o4('sit', 'stay', 'set', 'lie'), ans: 'B', why: 'To remain in a state is to <b>stay</b>.' },
  ],
},

/* ═══════════ TEST 36 — VOCABULARY: CONTEXT CLUES AND MULTIPLE MEANINGS ═══════════ */
{
  id: 9906, title: 'Test 36 · Context clues and multiple-meaning words', time: 20,
  questions: [
    { sec: 'Context clues', name: 'Question 1', pts: 1, text: '"The scientist was <b>meticulous</b>: she checked every measurement three times." <b>Meticulous</b> means ______.', opts: o4('very careful about detail', 'in a great hurry', 'rather careless', 'easily bored'), ans: 'A', why: 'Checking three times shows she is <b>very careful about detail</b>.' },
    { sec: 'Context clues', name: 'Question 2', pts: 1, text: '"Food was <b>scarce</b> after the flood, so people shared what little they had." <b>Scarce</b> means ______.', opts: o4('plentiful', 'hard to find', 'delicious', 'expensive only'), ans: 'B', why: 'People had very little, so food was <b>hard to find</b>.' },
    { sec: 'Context clues', name: 'Question 3', pts: 1, text: '"Unlike her <b>frugal</b> sister, Mai spent money freely." <b>Frugal</b> means ______.', opts: o4('generous', 'wealthy', 'careful with money', 'forgetful'), ans: 'C', why: '"Unlike" signals the opposite of spending freely: <b>careful with money</b>.' },
    { sec: 'Multiple meanings', name: 'Question 4', pts: 1, text: 'In "The river bank was muddy", what does <b>bank</b> mean?', opts: o4('a place that keeps money', 'a row of switches', 'to rely on something', 'the land beside a river'), ans: 'D', why: 'Next to a river, <b>bank</b> means the land at its edge.' },
    { sec: 'Multiple meanings', name: 'Question 5', pts: 1, img: A + 'ta5/table_set.svg', text: 'In "Please book a table for four", what does <b>book</b> mean?', opts: o4('reserve in advance', 'a thing you read', 'to write a story', 'a heavy object'), ans: 'A', why: 'Here <b>book</b> is a verb meaning <b>reserve</b> 🍽️.' },
    { sec: 'Multiple meanings', name: 'Question 6', pts: 1, text: 'In "The light box was easy to carry", what does <b>light</b> mean?', opts: o4('bright', 'not heavy', 'a lamp', 'pale in colour'), ans: 'B', why: '"Easy to carry" tells us it means <b>not heavy</b>.' },
    { sec: 'Context clues', name: 'Question 7', pts: 1, text: '"The crowd grew <b>restless</b>: people shuffled, sighed and checked their watches." <b>Restless</b> means ______.', opts: o4('fast asleep', 'very pleased', 'unable to stay still or patient', 'completely silent'), ans: 'C', why: 'Shuffling and checking watches show they were <b>unable to stay still</b>.' },
    { sec: 'Context clues', name: 'Question 8', pts: 1, text: '"His explanation was <b>vague</b> — nobody knew exactly what he meant." <b>Vague</b> means ______.', opts: o4('very loud', 'very long', 'very funny', 'not clear or exact'), ans: 'D', why: 'Nobody knew what he meant, so it was <b>not clear</b>.' },
    { sec: 'Context clues', name: 'Question 9', pts: 1, text: 'Which kind of clue is used in "A <b>cartographer</b>, or map maker, joined the team"?', opts: o4('a definition given right after the word', 'an opposite word', 'an example', 'a picture'), ans: 'A', why: 'The phrase after the comma <b>defines</b> the word.' },
    { sec: 'Multiple meanings', name: 'Question 10', pts: 1, img: A + 'ta5/match.svg', text: 'In "The match ended in a draw", what does <b>draw</b> mean?', opts: o4('to make a picture', 'a result where nobody wins', 'to pull something', 'to attract a crowd'), ans: 'B', why: 'In sport a <b>draw</b> means neither side won ⚽.' },
  ],
},

/* ═══════════ TEST 37 — FIGURATIVE LANGUAGE ═══════════ */
{
  id: 9907, title: 'Test 37 · Similes, metaphors, idioms and personification', time: 20,
  questions: [
    { sec: 'Similes', name: 'Question 1', pts: 1, text: 'Which sentence is a SIMILE?', opts: o4('Her smile was as bright as the sun.', 'Her smile was the sun.', 'The sun smiled at us.', 'She smiled at the sun.'), ans: 'A', why: 'A simile compares using <b>as … as</b> or <b>like</b>.' },
    { sec: 'Metaphors', name: 'Question 2', pts: 1, text: 'Which sentence is a METAPHOR?', opts: o4('He runs like the wind.', 'The classroom was a zoo.', 'The zoo was noisy.', 'He is as fast as the wind.'), ans: 'B', why: 'A metaphor says one thing <b>is</b> another, with no "like" or "as".' },
    { sec: 'Personification', name: 'Question 3', pts: 1, text: 'Which sentence uses PERSONIFICATION?', opts: o4('The wind was strong.', 'The wind was like a lion.', 'The wind whispered through the trees.', 'The trees were tall.'), ans: 'C', why: 'Only a person can <b>whisper</b>, so the wind is given human action.' },
    { sec: 'Idioms', name: 'Question 4', pts: 1, img: A + 'ta5/rain.svg', text: 'What does the idiom "It’s raining cats and dogs" mean? 🌧️', opts: o4('Animals are falling.', 'It is slightly cloudy.', 'There is a storm of leaves.', 'It is raining very heavily.'), ans: 'D', why: 'The idiom means <b>it is raining very heavily</b>.' },
    { sec: 'Idioms', name: 'Question 5', pts: 1, text: 'What does "break the ice" mean?', opts: o4('make people feel relaxed with each other', 'smash something frozen', 'stop a game', 'make a mistake'), ans: 'A', why: 'It means to <b>make people feel relaxed</b> when they first meet.' },
    { sec: 'Idioms', name: 'Question 6', pts: 1, img: A + 'ta5/cake.svg', text: 'What does "a piece of cake" mean? 🍰', opts: o4('a small dessert', 'something very easy', 'a fair share', 'a long wait'), ans: 'B', why: 'The idiom means <b>something very easy</b>.' },
    { sec: 'Similes', name: 'Question 7', pts: 1, img: A + 'ta5/mouse.svg', text: 'Complete the simile: "as quiet as a ______"', opts: o4('drum', 'storm', 'mouse', 'bell'), ans: 'C', why: 'The usual simile is <b>as quiet as a mouse</b> 🐭.' },
    { sec: 'Figurative language', name: 'Question 8', pts: 1, text: 'Why do writers use figurative language?', opts: o4('to make the text shorter', 'to avoid using verbs', 'to fill up the page', 'to create a picture in the reader’s mind'), ans: 'D', why: 'It helps the reader <b>see and feel</b> what is described.' },
    { sec: 'Figurative language', name: 'Question 9', pts: 1, img: A + 'ta5/stars.svg', text: '"The stars danced in the night sky." Which technique is this?', opts: o4('personification', 'simile', 'idiom', 'fact'), ans: 'A', why: 'Stars are given a human action — <b>personification</b> ✨.' },
    { sec: 'Metaphors', name: 'Question 10', pts: 1, text: '"Time is a thief." What does this metaphor suggest?', opts: o4('Clocks get stolen often.', 'Time takes things away from us.', 'Thieves are always late.', 'Time can be bought.'), ans: 'B', why: 'It suggests that time <b>takes things away</b> from us.' },
  ],
},

/* ═══════════ TEST 38 — MECHANICS: CAPITALISATION AND END PUNCTUATION ═══════════ */
{
  id: 9908, title: 'Test 38 · Capitalisation and end punctuation', time: 20,
  questions: [
    { sec: 'Capitals', name: 'Question 1', pts: 1, text: 'Which sentence is written correctly?', opts: o4('We study english and maths on Tuesday.', 'We study English and Maths on tuesday.', 'we study English and maths on Tuesday.', 'We study English and maths on Tuesday.'), ans: 'D', why: '<b>English</b> is a language and <b>Tuesday</b> is a day; <i>maths</i> is not a proper noun.' },
    { sec: 'Capitals', name: 'Question 2', pts: 1, text: 'Which group ALL need capital letters?', opts: o4('Pacific Ocean, Dr Nguyen, October', 'ocean, doctor, month', 'sea, teacher, autumn', 'lake, nurse, spring'), ans: 'A', why: 'Names of places, titles with names, and months are proper nouns.' },
    { sec: 'Capitals', name: 'Question 3', pts: 1, text: 'How should this film title be written?', opts: o4('the lion and the mouse', 'The lion And The mouse', 'The Lion and the Mouse', 'the Lion And the Mouse'), ans: 'C', why: 'Capitalise the important words; small joining words stay lower case.' },
    { sec: 'Capitals', name: 'Question 4', pts: 1, text: 'Which word should NOT be capitalised here? "We drove South to visit Grandma in Hue."', opts: o4('We', 'South', 'Grandma', 'Hue'), ans: 'B', why: 'As a direction, <b>south</b> takes a small letter.' },
    { sec: 'End punctuation', name: 'Question 5', pts: 1, text: 'Which sentence is punctuated correctly?', opts: o4('I wonder where she went.', 'I wonder where she went?', 'I wonder where she went!', 'I wonder, where she went.'), ans: 'A', why: 'It is a statement about wondering, not a direct question, so it takes a full stop.' },
    { sec: 'End punctuation', name: 'Question 6', pts: 1, text: 'Which sentence needs an exclamation mark?', opts: o4('The library closes at five', 'Look out, the shelf is falling', 'He reads every evening', 'She borrowed two books'), ans: 'B', why: 'A warning or strong feeling takes <b>!</b>' },
    { sec: 'End punctuation', name: 'Question 7', pts: 1, text: 'What is a SEMICOLON (;) used for?', opts: o4('to start a list of names', 'to show a missing letter', 'to join two closely linked sentences', 'to end a question'), ans: 'C', why: 'A semicolon can <b>join two closely linked sentences</b>.' },
    { sec: 'End punctuation', name: 'Question 8', pts: 1, text: 'What does a COLON (:) usually introduce?', opts: o4('a new paragraph', 'the writer’s name', 'a spelling mistake', 'a list or an explanation'), ans: 'D', why: 'A colon introduces <b>a list or an explanation</b>.' },
    { sec: 'Capitals', name: 'Question 9', pts: 1, text: 'Which sentence is correct?', opts: o4('My mother speaks Vietnamese, English and French.', 'My mother speaks vietnamese, english and french.', 'My Mother speaks Vietnamese, English and French.', 'my mother speaks Vietnamese, english and French.'), ans: 'A', why: 'Languages take capitals; <i>mother</i> here does not.' },
    { sec: 'End punctuation', name: 'Question 10', pts: 1, img: A + 'ta5/marks.svg', text: 'How many sentences are here? "Stop. Think carefully; then answer. Are you sure?"', opts: o4('two', 'three', 'four', 'five'), ans: 'B', why: 'Three end marks (. . ?) = <b>three</b> sentences; the semicolon stays inside one.' },
  ],
},

/* ═══════════ TEST 39 — MECHANICS: COMMAS, APOSTROPHES AND SPEECH MARKS ═══════════ */
{
  id: 9909, title: 'Test 39 · Commas, apostrophes and speech marks', time: 20,
  questions: [
    { sec: 'Commas', name: 'Question 1', pts: 1, text: 'Which sentence is punctuated correctly?', opts: o4('My cousin, who lives in Hue, is a nurse.', 'My cousin who lives in Hue, is a nurse.', 'My cousin, who lives in Hue is a nurse.', 'My cousin who, lives in Hue, is a nurse.'), ans: 'A', why: 'Extra information takes a comma on <b>both</b> sides.' },
    { sec: 'Commas', name: 'Question 2', pts: 1, text: 'Where should the comma go? "Although it was late we finished the work."', opts: o4('after "Although"', 'after "late"', 'after "we"', 'no comma is needed'), ans: 'B', why: 'After the opening clause: "Although it was late<b>,</b> we finished the work."' },
    { sec: 'Commas', name: 'Question 3', pts: 1, img: A + 'ta5/grandma.svg', text: 'Which sentence shows why commas matter?', opts: o4('Let’s eat Grandma.', 'Let’s eat, Grandma.', 'Lets eat Grandma', 'Let us eat grandma'), ans: 'B', why: 'The comma shows we are speaking <b>to</b> Grandma, not eating her!' },
    { sec: 'Apostrophes', name: 'Question 4', pts: 1, text: '"The ______ toys were everywhere." (they belong to several children)', opts: o4('childrens', 'childrens’', 'child’s', 'children’s'), ans: 'D', why: '<b>children</b> is already plural, so we add <b>’s</b>.' },
    { sec: 'Apostrophes', name: 'Question 5', pts: 1, text: 'Which sentence uses the apostrophe correctly?', opts: o4('The students’ projects were displayed.', 'The student’s projects were displayed, by all of them.', 'The students projects’ were displayed.', 'The studentss’ projects were displayed.'), ans: 'A', why: 'Several students → the plural takes just an apostrophe: <b>students’</b>.' },
    { sec: 'Apostrophes', name: 'Question 6', pts: 1, text: 'Which one is NOT a correct contraction?', opts: o4('shouldn’t', 'could’ve', 'would of', 'they’ll'), ans: 'C', why: 'There is no "would of" — it should be <b>would’ve</b> (would have).' },
    { sec: 'Speech marks', name: 'Question 7', pts: 1, text: 'Which sentence is punctuated correctly?', opts: o4('"Are we late?" asked Minh.', '"Are we late"? asked Minh.', '"Are we late?", asked Minh.', '"are we late?" asked Minh.'), ans: 'A', why: 'The <b>?</b> goes inside the marks, and no comma follows it.' },
    { sec: 'Speech marks', name: 'Question 8', pts: 1, text: 'Which sentence splits the speech correctly?', opts: o4('"I will help" said Lan "if you wait."', '"I will help," said Lan, "if you wait."', '"I will help," said Lan "if you wait".', '"I will help" said Lan, "If you wait."'), ans: 'B', why: 'Both parts of the speech take marks, with commas around "said Lan".' },
    { sec: 'Commas', name: 'Question 9', pts: 1, text: 'Which sentence needs a comma before "and"?', opts: o4('She bought pens and paper.', 'He sings and dances.', 'We walked and talked.', 'I washed the car, and my brother cleaned the windows.'), ans: 'D', why: '"and" joins two <b>full sentences</b> here, so a comma is needed.' },
    { sec: 'Apostrophes', name: 'Question 10', pts: 1, text: 'Which sentence is correct?', opts: o4('The cat licked it’s paw.', 'The cat licked its paw.', 'The cat licked its’ paw.', 'The cat licked it is paw.'), ans: 'B', why: '<b>its</b> (no apostrophe) shows belonging.' },
  ],
},

/* ═══════════ TEST 40 — GRAMMAR: SUBJECT–VERB AGREEMENT ═══════════ */
{
  id: 9910, title: 'Test 40 · Subject–verb agreement', time: 20,
  questions: [
    { sec: 'Agreement', name: 'Question 1', pts: 1, text: '"The list of items ______ on the desk."', opts: o4('is', 'are', 'were', 'have'), ans: 'A', why: 'The subject is <b>the list</b> (singular), not "items".' },
    { sec: 'Agreement', name: 'Question 2', pts: 1, text: '"Both of my brothers ______ football."', opts: o4('plays', 'play', 'is playing', 'has played'), ans: 'B', why: '<b>Both</b> is plural → <b>play</b>.' },
    { sec: 'Agreement', name: 'Question 3', pts: 1, text: '"Each of the girls ______ a prize."', opts: o4('win', 'are winning', 'wins', 'have won'), ans: 'C', why: '<b>Each</b> is singular → <b>wins</b>.' },
    { sec: 'Agreement', name: 'Question 4', pts: 1, text: '"Mathematics ______ my favourite subject."', opts: o4('are', 'were', 'have been', 'is'), ans: 'D', why: '<b>Mathematics</b> looks plural but is singular → <b>is</b>.' },
    { sec: 'Agreement', name: 'Question 5', pts: 1, text: '"Neither the teacher nor the pupils ______ ready."', opts: o4('are', 'is', 'was', 'has'), ans: 'A', why: 'With <b>neither … nor</b> the verb agrees with the NEAREST subject: <i>pupils</i>.' },
    { sec: 'Agreement', name: 'Question 6', pts: 1, text: '"There ______ several reasons for this."', opts: o4('is', 'are', 'was', 'has'), ans: 'B', why: '<b>several reasons</b> is plural → <b>are</b>.' },
    { sec: 'Agreement', name: 'Question 7', pts: 1, text: '"The news ______ very good today."', opts: o4('are', 'were', 'is', 'have'), ans: 'C', why: '<b>news</b> is uncountable and singular → <b>is</b>.' },
    { sec: 'Agreement', name: 'Question 8', pts: 1, img: A + 'ta5/glasses.svg', text: '"My glasses ______ broken."', opts: o4('is', 'was', 'has', 'are'), ans: 'D', why: '<b>glasses</b> 👓 is always plural → <b>are</b>.' },
    { sec: 'Agreement', name: 'Question 9', pts: 1, text: 'Which sentence has an agreement MISTAKE?', opts: o4('Everyone were happy with the result.', 'Everyone was happy with the result.', 'The players were happy.', 'The team was happy.'), ans: 'A', why: '<b>Everyone</b> is singular, so it must be "everyone <b>was</b>".' },
    { sec: 'Agreement', name: 'Question 10', pts: 1, text: '"Twenty minutes ______ enough time for this task."', opts: o4('are', 'is', 'were', 'have'), ans: 'B', why: 'A period of time acts as one unit → <b>is</b>.' },
  ],
},

/* ═══════════ TEST 41 — GRAMMAR: PRONOUN–ANTECEDENT AGREEMENT ═══════════ */
{
  id: 9911, title: 'Test 41 · Pronoun–antecedent agreement', time: 20,
  questions: [
    { sec: 'Pronoun agreement', name: 'Question 1', pts: 1, text: '"Every student must bring ______ own dictionary."', opts: o4('their', 'they', 'them', 'theirs'), ans: 'A', why: 'Before the noun <b>dictionary</b> we use <b>their</b>.' },
    { sec: 'Pronoun agreement', name: 'Question 2', pts: 1, img: A + 'ta5/team.svg', text: '"The team celebrated ______ victory."', opts: o4('their', 'its', 'his', 'theirs'), ans: 'B', why: 'A team acting as one unit takes <b>its</b>.' },
    { sec: 'Pronoun agreement', name: 'Question 3', pts: 1, text: '"Neither Mai nor Lan remembered ______ umbrella."', opts: o4('their', 'his', 'her', 'its'), ans: 'C', why: 'Two singular girls joined by <b>nor</b> → <b>her</b>.' },
    { sec: 'Pronoun agreement', name: 'Question 4', pts: 1, text: '"The books were old, but ______ covers were still bright."', opts: o4('his', 'her', 'its', 'their'), ans: 'D', why: '<b>books</b> is plural → <b>their</b>.' },
    { sec: 'Pronouns', name: 'Question 5', pts: 1, text: '"The prize was shared between my sister and ______."', opts: o4('me', 'I', 'my', 'mine'), ans: 'A', why: 'After the preposition <b>between</b> we use <b>me</b>.' },
    { sec: 'Pronouns', name: 'Question 6', pts: 1, text: '"______ and I finished the project together."', opts: o4('Him', 'He', 'His', 'Himself'), ans: 'B', why: 'As the subject we use <b>He</b>.' },
    { sec: 'Pronoun agreement', name: 'Question 7', pts: 1, text: 'Which sentence has an UNCLEAR pronoun?', opts: o4('Mai told Lan that Mai was tired.', 'Mai was tired, so she rested.', 'When Mai met Lan, she was tired.', 'Mai rested because she was tired.'), ans: 'C', why: 'We cannot tell whether <b>she</b> is Mai or Lan.' },
    { sec: 'Pronouns', name: 'Question 8', pts: 1, text: '"The children helped ______ to the fruit." (they did it for themselves)', opts: o4('theirself', 'themself', 'they', 'themselves'), ans: 'D', why: 'The plural reflexive is <b>themselves</b>.' },
    { sec: 'Pronoun agreement', name: 'Question 9', pts: 1, text: '"Somebody left ______ bag on the bus."', opts: o4('their', 'they', 'them', 'theirs'), ans: 'A', why: 'For an unknown person we commonly use <b>their</b>.' },
    { sec: 'Pronouns', name: 'Question 10', pts: 1, text: 'Which sentence is CORRECT?', opts: o4('Me and him went first.', 'He and I went first.', 'Him and me went first.', 'I and him went first.'), ans: 'B', why: 'Subject pronouns <b>He and I</b>, with the other person named first.' },
  ],
},

/* ═══════════ TEST 42 — GRAMMAR: RUN-ONS, COMMA SPLICES AND FRAGMENTS ═══════════ */
{
  id: 9912, title: 'Test 42 · Run-ons, comma splices and fragments', time: 20,
  questions: [
    { sec: 'Run-ons', name: 'Question 1', pts: 1, text: 'Which one is a RUN-ON sentence?', opts: o4('The bell rang everyone hurried outside.', 'The bell rang, and everyone hurried outside.', 'When the bell rang, everyone hurried outside.', 'The bell rang. Everyone hurried outside.'), ans: 'A', why: 'Two full sentences with nothing between them.' },
    { sec: 'Comma splices', name: 'Question 2', pts: 1, text: 'Which one is a COMMA SPLICE?', opts: o4('It was raining, so we stayed in.', 'It was raining, we stayed in.', 'Because it was raining, we stayed in.', 'It was raining. We stayed in.'), ans: 'B', why: 'A comma alone cannot join two full sentences.' },
    { sec: 'Comma splices', name: 'Question 3', pts: 1, text: 'Which is NOT a correct way to fix a comma splice?', opts: o4('use a full stop', 'use a semicolon', 'add another comma', 'add a joining word after the comma'), ans: 'C', why: 'Adding a second comma does not fix it.' },
    { sec: 'Fragments', name: 'Question 4', pts: 1, text: 'Which one is a FRAGMENT?', opts: o4('The experiment succeeded.', 'We recorded the results.', 'The results were clear.', 'Which surprised the whole class.'), ans: 'D', why: 'It is only a relative clause — it cannot stand alone.' },
    { sec: 'Run-ons', name: 'Question 5', pts: 1, text: 'What is the BEST fix for "He forgot his key he waited outside."?', opts: o4('He forgot his key, so he waited outside.', 'He forgot his key, he waited outside.', 'He forgot his key he waited, outside.', 'He forgot, his key he waited outside.'), ans: 'A', why: 'Comma + the joining word <b>so</b> links cause and result.' },
    { sec: 'Sentences', name: 'Question 6', pts: 1, text: 'Which sentence is COMPLEX (a main clause plus a subordinate clause)?', opts: o4('I read a book and she watched television.', 'Although I was tired, I finished the chapter.', 'I read a book. She watched television.', 'I read and she watched.'), ans: 'B', why: '<b>Although I was tired</b> cannot stand alone, so the sentence is complex.' },
    { sec: 'Sentences', name: 'Question 7', pts: 1, text: 'Which sentence is SIMPLE (one main clause)?', opts: o4('When it rains, we stay in.', 'It rained, so we stayed in.', 'The heavy rain lasted all afternoon.', 'It rained and we stayed in.'), ans: 'C', why: 'One subject and one verb make a <b>simple</b> sentence.' },
    { sec: 'Fragments', name: 'Question 8', pts: 1, text: 'How can we fix "Running through the empty street."?', opts: o4('Add a full stop at the start.', 'Change "Running" to "Runs".', 'Delete the word "the".', 'Add a subject and a main verb.'), ans: 'D', why: 'A fragment needs <b>a subject and a main verb</b> to become a sentence.' },
    { sec: 'Run-ons', name: 'Question 9', pts: 1, text: 'Which punctuation mark can correctly join two closely linked sentences?', opts: o4('a semicolon', 'a comma alone', 'an apostrophe', 'a hyphen'), ans: 'A', why: 'A <b>semicolon</b> joins two closely linked full sentences.' },
    { sec: 'Sentences', name: 'Question 10', pts: 1, text: 'Why should writers vary their sentence length?', opts: o4('to use more paper', 'to keep the writing interesting and clear', 'to avoid full stops', 'to use every punctuation mark'), ans: 'B', why: 'Varied sentences keep writing <b>interesting and clear</b>.' },
  ],
},

/* ═══════════ TEST 43 — GRAMMAR: VERB TENSES AND CONSISTENCY ═══════════ */
{
  id: 9913, title: 'Test 43 · Verb tenses and staying consistent', time: 20,
  questions: [
    { sec: 'Tenses', name: 'Question 1', pts: 1, text: '"I ______ in this town since 2019."', opts: o4('have lived', 'live', 'lived', 'am living'), ans: 'A', why: 'With <b>since</b> we use the present perfect: <b>have lived</b>.' },
    { sec: 'Tenses', name: 'Question 2', pts: 1, text: '"She ______ her homework when the phone rang."', opts: o4('did', 'was doing', 'does', 'has done'), ans: 'B', why: 'A longer action interrupted by a short one → past continuous.' },
    { sec: 'Tenses', name: 'Question 3', pts: 1, text: '"By the time we arrived, the film ______."', opts: o4('starts', 'is starting', 'had started', 'will start'), ans: 'C', why: 'An action finished before another past action → past perfect.' },
    { sec: 'Tenses', name: 'Question 4', pts: 1, img: A + 'ta5/boiling.svg', text: '"Water ______ at 100 degrees Celsius."', opts: o4('is boiling', 'boiled', 'has boiled', 'boils'), ans: 'D', why: 'A general truth takes the present simple: <b>boils</b>.' },
    { sec: 'Consistency', name: 'Question 5', pts: 1, text: 'Which sentence has a TENSE mistake?', opts: o4('He opened the door and walks inside.', 'He opened the door and walked inside.', 'He opens the door and walks inside.', 'He will open the door and walk inside.'), ans: 'A', why: 'It jumps from past <b>opened</b> to present <b>walks</b>.' },
    { sec: 'Consistency', name: 'Question 6', pts: 1, text: 'Why should a writer keep tenses consistent?', opts: o4('to use fewer words', 'so the reader is not confused about when things happen', 'to avoid adjectives', 'to make sentences shorter'), ans: 'B', why: 'Consistent tense keeps the <b>time clear</b> for the reader.' },
    { sec: 'Tenses', name: 'Question 7', pts: 1, img: A + 'ta5/beach.svg', text: '"They ______ to Da Nang next Saturday." (a fixed plan)', opts: o4('go', 'went', 'are going', 'have gone'), ans: 'C', why: 'A fixed future arrangement uses the present continuous.' },
    { sec: 'Tenses', name: 'Question 8', pts: 1, text: 'What is the past participle of <b>write</b>?', opts: o4('wrote', 'writed', 'writing', 'written'), ans: 'D', why: 'write → wrote → <b>written</b>.' },
    { sec: 'Tenses', name: 'Question 9', pts: 1, text: '"I have ______ that film twice."', opts: o4('seen', 'saw', 'see', 'seeing'), ans: 'A', why: 'After <b>have</b> we use the past participle <b>seen</b>.' },
    { sec: 'Consistency', name: 'Question 10', pts: 1, text: 'Which sentence keeps ONE tense correctly throughout?', opts: o4('She picked up the pen and writes her name.', 'She picks up the pen and wrote her name.', 'She picked up the pen and wrote her name.', 'She will pick up the pen and wrote her name.'), ans: 'C', why: 'Both verbs are in the past: <b>picked</b> and <b>wrote</b>.' },
  ],
},

/* ═══════════ TEST 44 — GRAMMAR: MODAL VERBS ═══════════ */
{
  id: 9914, title: 'Test 44 · Modal verbs (must, should, may, might)', time: 20,
  questions: [
    { sec: 'Modals', name: 'Question 1', pts: 1, img: A + 'ta5/helmet.svg', text: '"You ______ wear a helmet when you cycle. It is the law." 🚲', opts: o4('must', 'might', 'could', 'may'), ans: 'A', why: 'A rule or obligation takes <b>must</b>.' },
    { sec: 'Modals', name: 'Question 2', pts: 1, text: '"It ______ rain later — take an umbrella just in case."', opts: o4('must', 'might', 'should', 'can'), ans: 'B', why: 'A possibility takes <b>might</b>.' },
    { sec: 'Modals', name: 'Question 3', pts: 1, text: '"You ______ revise a little every day rather than all at once." (advice)', opts: o4('must', 'might', 'should', 'can'), ans: 'C', why: 'Advice takes <b>should</b>.' },
    { sec: 'Modals', name: 'Question 4', pts: 1, text: '"______ I borrow your pen, please?" (polite request)', opts: o4('Must', 'Should', 'Will', 'May'), ans: 'D', why: 'A polite request for permission takes <b>May I…?</b>' },
    { sec: 'Modals', name: 'Question 5', pts: 1, img: A + 'ta5/danger.svg', text: '"You ______ touch that wire — it is dangerous."', opts: o4('mustn’t', 'shouldn’t have', 'needn’t', 'couldn’t'), ans: 'A', why: 'A strong prohibition takes <b>mustn’t</b> ⚡.' },
    { sec: 'Modals', name: 'Question 6', pts: 1, text: '"You ______ bring lunch; the school provides it." (it is not necessary)', opts: o4('mustn’t', 'needn’t', 'shouldn’t', 'can’t'), ans: 'B', why: '<b>needn’t</b> means it is not necessary.' },
    { sec: 'Modals', name: 'Question 7', pts: 1, text: 'What is the difference between "mustn’t" and "needn’t"?', opts: o4('They mean the same thing.', 'Both mean you may choose.', 'mustn’t = it is forbidden; needn’t = it is not necessary', 'mustn’t = not necessary; needn’t = forbidden'), ans: 'C', why: '<b>mustn’t</b> forbids; <b>needn’t</b> says it is simply not required.' },
    { sec: 'Modals', name: 'Question 8', pts: 1, text: '"She ______ speak three languages." (ability)', opts: o4('must', 'should', 'may', 'can'), ans: 'D', why: 'Ability takes <b>can</b>.' },
    { sec: 'Conditionals', name: 'Question 9', pts: 1, text: '"If it rains tomorrow, we ______ stay at home."', opts: o4('will', 'would', 'had', 'were'), ans: 'A', why: 'A likely future condition: <b>If + present, will + verb</b>.' },
    { sec: 'Conditionals', name: 'Question 10', pts: 1, img: A + 'ta5/bird.svg', text: '"If I ______ a bird, I would fly over the sea."', opts: o4('am', 'were', 'will be', 'have been'), ans: 'B', why: 'For an imaginary situation we use <b>were</b> 🕊️.' },
  ],
},

/* ═══════════ TEST 45 — READING: NON-FICTION, MAIN IDEA AND SUMMARY ═══════════ */
{
  id: 9915, title: 'Test 45 · Reading: plastic in the ocean (non-fiction)', time: 20,
  questions: [
    { sec: 'Reading', name: 'Question 1', pts: 1, img: A + 'ta5/turtle_bag.svg', text: R5A + 'What is the MAIN IDEA of this text?', opts: o4('Plastic waste harms sea life, and there are ways we can reduce it.', 'Plastic bags are cheap to make.', 'Turtles are the most beautiful sea animals.', 'Scientists enjoy working near the sea.'), ans: 'A', why: 'The text explains the problem AND what we can do about it.' },
    { sec: 'Reading', name: 'Question 2', pts: 1, text: R5A + 'Why do turtles eat plastic bags?', opts: o4('because the bags are salty', 'because they mistake them for jellyfish', 'because they are very hungry', 'because the bags float slowly'), ans: 'B', why: 'The text says bags look like <b>jellyfish</b> to turtles 🐢.' },
    { sec: 'Reading', name: 'Question 3', pts: 1, text: R5A + 'What are microplastics?', opts: o4('a kind of sea plant', 'a new type of bottle', 'tiny pieces of broken-down plastic', 'plastic used in medicine'), ans: 'C', why: 'The text says plastic breaks into <b>tiny pieces</b> called microplastics.' },
    { sec: 'Reading', name: 'Question 4', pts: 1, text: R5A + 'How long can a plastic bottle last in the sea?', opts: o4('a few weeks', 'about one year', 'about ten years', 'hundreds of years'), ans: 'D', why: 'The text says <b>hundreds of years</b>.' },
    { sec: 'Reading', name: 'Question 5', pts: 1, text: R5A + 'Which action does the text suggest?', opts: o4('carrying a reusable bottle and cloth bag', 'buying more bottled water', 'burning plastic on the beach', 'leaving rubbish for the tide'), ans: 'A', why: 'The text suggests <b>reusable bottles and cloth bags</b>.' },
    { sec: 'Reading', name: 'Question 6', pts: 1, text: R5A + 'Which sentence from the text is an OPINION?', opts: o4('Plastic can take hundreds of years to break down.', 'Everyone should care about this problem.', 'Turtles sometimes eat plastic bags.', 'Plastic breaks into tiny pieces.'), ans: 'B', why: '"Everyone <b>should</b> care" is what the writer thinks, not a checkable fact.' },
    { sec: 'Reading', name: 'Question 7', pts: 1, text: R5A + 'What is the writer’s PURPOSE?', opts: o4('to entertain with a funny story', 'to sell plastic products', 'to inform readers and persuade them to act', 'to describe a holiday'), ans: 'C', why: 'The text gives facts AND asks readers to change what they do.' },
    { sec: 'Reading', name: 'Question 8', pts: 1, text: R5A + 'Which is the BEST summary?', opts: o4('The sea is very large and deep.', 'Turtles are endangered animals.', 'Scientists study the ocean carefully.', 'Plastic waste lasts for centuries and harms sea animals, so we should reuse and reduce what we use.'), ans: 'D', why: 'A good summary keeps the main idea and the key supporting points.' },
    { sec: 'Reading', name: 'Question 9', pts: 1, text: R5A + 'What can you INFER about plastic waste in the future if nothing changes?', opts: o4('It will keep building up and harm more sea life.', 'It will disappear by itself next year.', 'It will turn into sand quickly.', 'It will help sea animals grow.'), ans: 'A', why: 'Since plastic lasts centuries, it will <b>keep building up</b>.' },
    { sec: 'Reading', name: 'Question 10', pts: 1, img: A + 'ta5/breakdown.svg', text: R5A + 'Which text feature would help MOST with this topic?', opts: o4('a rhyming poem', 'a chart showing how long each item takes to break down', 'a list of the author’s friends', 'a picture of a bus'), ans: 'B', why: 'A <b>chart</b> makes the timescales easy to compare 📊.' },
  ],
},

/* ═══════════ TEST 46 — READING: GENRES AND TYPES OF TEXT ═══════════ */
{
  id: 9916, title: 'Test 46 · Reading genres and types of text', time: 20,
  questions: [
    { sec: 'Genres', name: 'Question 1', pts: 1, text: 'A long story with chapters and invented characters is a ______.', opts: o4('novel', 'biography', 'report', 'recipe'), ans: 'A', why: 'A <b>novel</b> is a long invented story.' },
    { sec: 'Genres', name: 'Question 2', pts: 1, text: 'A person’s life story written BY THAT PERSON is ______.', opts: o4('a biography', 'an autobiography', 'a diary entry', 'a news report'), ans: 'B', why: '<b>auto-</b> means self, so an autobiography is written by the person.' },
    { sec: 'Genres', name: 'Question 3', pts: 1, text: 'A text that tries to make you agree and act is ______.', opts: o4('a narrative', 'a description', 'a persuasive text', 'a set of instructions'), ans: 'C', why: 'A <b>persuasive</b> text argues for a point of view.' },
    { sec: 'Genres', name: 'Question 4', pts: 1, img: A + 'ta5/dragon.svg', text: 'A story with dragons, magic and invented kingdoms is ______.', opts: o4('history', 'a report', 'science fiction', 'fantasy'), ans: 'D', why: 'Magic and invented worlds make it <b>fantasy</b> 🐉.' },
    { sec: 'Genres', name: 'Question 5', pts: 1, text: 'A short story with animals that teaches a moral is ______.', opts: o4('a fable', 'a myth', 'a legend', 'a novel'), ans: 'A', why: 'A <b>fable</b> teaches a lesson through animal characters.' },
    { sec: 'Genres', name: 'Question 6', pts: 1, text: 'A traditional story explaining how the world began is ______.', opts: o4('a diary', 'a myth', 'a report', 'a review'), ans: 'B', why: 'A <b>myth</b> explains natural things through old stories.' },
    { sec: 'Genres', name: 'Question 7', pts: 1, img: A + 'ta5/cinema.svg', text: 'Which text would you read to decide whether to watch a film?', opts: o4('a recipe', 'a timetable', 'a review', 'an atlas'), ans: 'C', why: 'A <b>review</b> gives an opinion and reasons about a film 🎬.' },
    { sec: 'Genres', name: 'Question 8', pts: 1, text: 'What is the main purpose of a NARRATIVE?', opts: o4('to give instructions', 'to sell a product', 'to list facts in order', 'to tell a story'), ans: 'D', why: 'A narrative <b>tells a story</b> with characters and events.' },
    { sec: 'Genres', name: 'Question 9', pts: 1, img: A + 'ta5/news.svg', text: 'Which feature belongs to a NEWS REPORT?', opts: o4('a headline and the key facts first', 'a list of ingredients', 'rhyming lines', 'a moral at the end'), ans: 'A', why: 'News reports start with a <b>headline</b> and the most important facts.' },
    { sec: 'Genres', name: 'Question 10', pts: 1, text: 'Which pair of texts are BOTH non-fiction?', opts: o4('a fable and a myth', 'an encyclopedia entry and a biography', 'a fantasy novel and a fairy tale', 'a poem and a legend'), ans: 'B', why: 'Both give real information about the real world.' },
  ],
},

/* ═══════════ TEST 47 — CRITICAL THINKING: FACT, OPINION, CAUSE AND EFFECT ═══════════ */
{
  id: 9917, title: 'Test 47 · Fact and opinion, cause and effect', time: 20,
  questions: [
    { sec: 'Fact and opinion', name: 'Question 1', pts: 1, img: A + 'ta5/thermometer.svg', text: 'Which sentence is a FACT?', opts: o4('Water freezes at 0 degrees Celsius.', 'Winter is the nicest season.', 'Everyone should like snow.', 'Cold weather is horrible.'), ans: 'A', why: 'A fact can be <b>checked and proved</b>.' },
    { sec: 'Fact and opinion', name: 'Question 2', pts: 1, text: 'Which sentence is an OPINION?', opts: o4('Ha Noi is the capital of Vietnam.', 'Ha Noi is the most beautiful city in Asia.', 'Ha Noi has many lakes.', 'Ha Noi is in the north.'), ans: 'B', why: '"Most beautiful" is a personal judgement.' },
    { sec: 'Fact and opinion', name: 'Question 3', pts: 1, text: 'Which words often signal an OPINION?', opts: o4('measured, recorded, counted', 'in 1975, at 8 a.m.', 'best, worst, should, I think', 'is, are, was, were'), ans: 'C', why: 'Judgement words like <b>best</b> and <b>should</b> signal opinions.' },
    { sec: 'Cause and effect', name: 'Question 4', pts: 1, text: '"Heavy rain fell for three days, so the river burst its banks." What is the CAUSE?', opts: o4('The river burst its banks.', 'The bridge closed.', 'People moved away.', 'Heavy rain fell for three days.'), ans: 'D', why: 'The cause happens first and makes the rest happen.' },
    { sec: 'Cause and effect', name: 'Question 5', pts: 1, text: 'In the same sentence, what is the EFFECT?', opts: o4('The river burst its banks.', 'Heavy rain fell.', 'It was winter.', 'The sky was grey.'), ans: 'A', why: 'The effect is the <b>result</b>.' },
    { sec: 'Cause and effect', name: 'Question 6', pts: 1, text: 'Which phrase signals an EFFECT?', opts: o4('because of', 'as a result', 'since', 'due to'), ans: 'B', why: '<b>as a result</b> introduces the effect; the others introduce causes.' },
    { sec: 'Critical thinking', name: 'Question 7', pts: 1, img: A + 'ta5/juice.svg', text: 'An advert says "9 out of 10 people prefer our juice." What should you ask?', opts: o4('What colour is the label?', 'How many people were asked, and who asked them?', 'Is the bottle heavy?', 'What time was it made?'), ans: 'B', why: 'Good thinkers check <b>how the evidence was collected</b>.' },
    { sec: 'Critical thinking', name: 'Question 8', pts: 1, text: 'Which is the STRONGEST evidence that a bridge is unsafe?', opts: o4('A neighbour said so.', 'It looks old in a photo.', 'Someone wrote it online.', 'An engineer inspected it and wrote a report.'), ans: 'D', why: 'An <b>expert inspection</b> is the strongest evidence.' },
    { sec: 'Critical thinking', name: 'Question 9', pts: 1, text: '"Everyone in my class has a phone, so every child in the country has one." What is wrong?', opts: o4('One small group does not prove something about everyone.', 'The sentence is too short.', 'Phones are expensive.', 'Nothing is wrong.'), ans: 'A', why: 'Generalising from a <b>small sample</b> is a faulty argument.' },
    { sec: 'Fact and opinion', name: 'Question 10', pts: 1, text: 'Which sentence mixes a fact AND an opinion?', opts: o4('The museum opens at nine.', 'The museum, which opens at nine, is the best place in town.', 'The museum is in the city centre.', 'The museum has four floors.'), ans: 'B', why: 'The opening time is a fact; "the best place" is an opinion.' },
  ],
},

/* ═══════════ TEST 48 — CRITICAL THINKING: INFERENCE, EVIDENCE AND VIEWPOINTS ═══════════ */
{
  id: 9918, title: 'Test 48 · Inference, evidence and other viewpoints', time: 20,
  questions: [
    { sec: 'Inference', name: 'Question 1', pts: 1, text: '"Duc stared at the empty peg where his coat had hung and frowned." What can you infer?', opts: o4('His coat is missing.', 'He has a new coat.', 'He is too warm.', 'He is going swimming.'), ans: 'A', why: 'An empty peg plus a frown suggests <b>his coat is missing</b>.' },
    { sec: 'Inference', name: 'Question 2', pts: 1, text: '"The kitchen smelled of burnt toast and the window was wide open." What probably happened?', opts: o4('Someone baked a cake successfully.', 'Someone burnt the toast and aired the room.', 'Nobody has been in the kitchen.', 'The fridge is empty.'), ans: 'B', why: 'The smell plus the open window point to <b>burnt toast being aired out</b>.' },
    { sec: 'Character analysis', name: 'Question 3', pts: 1, img: A + 'ta5/share.svg', text: '"Lan gave her last rice cake to the smaller child and said she was not hungry." What does this show?', opts: o4('She is greedy.', 'She is careless.', 'She is generous.', 'She is angry.'), ans: 'C', why: 'Giving away her food shows she is <b>generous</b>.' },
    { sec: 'Character analysis', name: 'Question 4', pts: 1, text: 'How do readers work out what a character is like?', opts: o4('only from the character’s name', 'only from the page number', 'only from the book cover', 'from what they say, do and how others react'), ans: 'D', why: 'Character is shown through <b>words, actions and other people’s reactions</b>.' },
    { sec: 'Evidence', name: 'Question 5', pts: 1, img: A + 'ta5/bin.svg', text: 'You claim "Our school needs more bins." Which is the BEST evidence?', opts: o4('a count of litter found in the yard over one week', 'a friend agrees with you', 'you feel strongly about it', 'bins are a good colour'), ans: 'A', why: 'A <b>count over time</b> is measurable evidence.' },
    { sec: 'Sources', name: 'Question 6', pts: 1, text: 'Why should you check MORE THAN ONE source?', opts: o4('to make the report longer', 'because one source may be wrong or one-sided', 'because teachers like long lists', 'to use more paper'), ans: 'B', why: 'Comparing sources helps you spot <b>errors and bias</b>.' },
    { sec: 'Viewpoints', name: 'Question 7', pts: 1, img: A + 'ta5/river.svg', text: 'A factory owner and a nearby farmer describe the same river. Why might their accounts differ?', opts: o4('One of them cannot read.', 'Rivers change colour daily.', 'Each has different interests and experiences.', 'They live in different countries.'), ans: 'C', why: 'People’s <b>interests and experiences</b> shape their viewpoint.' },
    { sec: 'Viewpoints', name: 'Question 8', pts: 1, text: 'What should a good argument do with the OPPOSING view?', opts: o4('ignore it completely', 'make fun of it', 'copy it exactly', 'mention it fairly and then answer it'), ans: 'D', why: 'Strong arguments <b>acknowledge and answer</b> the other side.' },
    { sec: 'Evidence', name: 'Question 9', pts: 1, text: 'What is BIAS in a text?', opts: o4('showing only one side unfairly', 'using long words', 'writing in the past tense', 'including photographs'), ans: 'A', why: 'Bias means the writer <b>shows only one side unfairly</b>.' },
    { sec: 'Evidence', name: 'Question 10', pts: 1, text: 'Two sources disagree about a date. What should you do?', opts: o4('choose the shorter source', 'check a third reliable source', 'pick the one you like', 'leave the date out and guess'), ans: 'B', why: 'Check a <b>third reliable source</b> to decide.' },
  ],
},

/* ═══════════ TEST 49 — WRITING: PARAGRAPHS, TRANSITIONS AND THE RACE STRATEGY ═══════════ */
{
  id: 9919, title: 'Test 49 · Paragraphs, transitions and answering questions', time: 20,
  questions: [
    { sec: 'Paragraphs', name: 'Question 1', pts: 1, text: 'What belongs in the FIRST sentence of a paragraph?', opts: o4('the topic sentence with the main idea', 'the smallest detail', 'the conclusion', 'a quotation from a friend'), ans: 'A', why: 'The <b>topic sentence</b> states the main idea.' },
    { sec: 'Writing process', name: 'Question 2', pts: 1, img: A + 'ta5/process.svg', text: 'Put the writing process in the correct order.', opts: o4('drafting, prewriting, publishing, revising, editing', 'prewriting, drafting, revising, editing, publishing', 'editing, drafting, prewriting, revising, publishing', 'publishing, revising, drafting, editing, prewriting'), ans: 'B', why: 'The order is <b>prewriting → drafting → revising → editing → publishing</b>.' },
    { sec: 'Transitions', name: 'Question 3', pts: 1, text: 'Which transition shows a CONTRAST?', opts: o4('in addition', 'for example', 'however', 'therefore'), ans: 'C', why: '<b>however</b> signals a contrast.' },
    { sec: 'Transitions', name: 'Question 4', pts: 1, text: 'Which transition introduces a RESULT?', opts: o4('although', 'meanwhile', 'similarly', 'as a result'), ans: 'D', why: '<b>as a result</b> introduces the consequence.' },
    { sec: 'RACE strategy', name: 'Question 5', pts: 1, img: A + 'ta5/race.svg', text: 'In the RACE strategy, what does the <b>R</b> stand for?', opts: o4('Restate the question', 'Read the title', 'Remember the date', 'Repeat the answer'), ans: 'A', why: '<b>R</b> = Restate the question in your answer.' },
    { sec: 'RACE strategy', name: 'Question 6', pts: 1, text: 'In RACE, what does the <b>C</b> stand for?', opts: o4('Copy the text', 'Cite evidence from the text', 'Count the words', 'Check the spelling'), ans: 'B', why: '<b>C</b> = Cite evidence from the text.' },
    { sec: 'RACE strategy', name: 'Question 7', pts: 1, text: 'In RACE, what does the final <b>E</b> ask you to do?', opts: o4('End the paragraph', 'Erase mistakes', 'Explain how the evidence answers the question', 'Edit the spelling'), ans: 'C', why: '<b>E</b> = Explain how your evidence supports the answer.' },
    { sec: 'Note taking', name: 'Question 8', pts: 1, text: 'What makes GOOD notes?', opts: o4('copying every sentence word for word', 'writing only the date', 'drawing pictures only', 'short key words and phrases in your own words'), ans: 'D', why: 'Good notes are <b>short key words in your own words</b>.' },
    { sec: 'Writing', name: 'Question 9', pts: 1, text: 'What should a CONCLUSION do?', opts: o4('sum up the main points and leave the reader with a clear message', 'introduce a brand new topic', 'list every detail again', 'ask five new questions'), ans: 'A', why: 'A conclusion <b>sums up</b> and closes the piece.' },
    { sec: 'Writing', name: 'Question 10', pts: 1, text: 'Which sentence uses the most precise vocabulary?', opts: o4('The man went into the room.', 'The inspector strode into the laboratory.', 'The person got in there.', 'He came in.'), ans: 'B', why: 'Precise nouns and verbs give the reader a <b>clear picture</b>.' },
  ],
},

/* ═══════════ TEST 50 — WRITING FOR OTHERS AND LIBRARY SKILLS ═══════════ */
{
  id: 9920, title: 'Test 50 · Emails, sources and library skills', time: 20,
  questions: [
    { sec: 'Email etiquette', name: 'Question 1', pts: 1, img: A + 'ta5/email.svg', text: 'What makes a GOOD email subject line?', opts: o4('short and clear about the topic', 'left empty', 'written in capital letters only', 'a row of question marks'), ans: 'A', why: 'A subject line should be <b>short and clear</b> ✉️.' },
    { sec: 'Email etiquette', name: 'Question 2', pts: 1, text: 'How should you begin a polite email to your teacher?', opts: o4('Hey!', 'Dear Ms Lan,', 'yo teacher', 'no greeting at all'), ans: 'B', why: 'A formal greeting with the person’s name is polite.' },
    { sec: 'Email etiquette', name: 'Question 3', pts: 1, text: 'Why should you avoid WRITING IN ALL CAPITALS?', opts: o4('It is slower to type.', 'It uses more ink.', 'It looks like shouting.', 'It is against the law.'), ans: 'C', why: 'All capitals <b>looks like shouting</b> and seems rude.' },
    { sec: 'Email etiquette', name: 'Question 4', pts: 1, text: 'What should you do BEFORE you send an email?', opts: o4('change the font colour', 'add many emojis', 'send it twice', 'read it again to check tone and spelling'), ans: 'D', why: 'Always <b>re-read</b> to check tone and spelling.' },
    { sec: 'Sources', name: 'Question 5', pts: 1, text: 'Why must you name the sources you used?', opts: o4('to give credit and let readers check your facts', 'to fill up the page', 'to make the work longer', 'because long lists look clever'), ans: 'A', why: 'Citing sources <b>gives credit</b> and lets readers verify.' },
    { sec: 'Sources', name: 'Question 6', pts: 1, text: 'What is PLAGIARISM?', opts: o4('writing in your own words', 'using someone else’s words or ideas as if they were yours', 'reading two books', 'asking a teacher for help'), ans: 'B', why: 'Plagiarism is <b>using others’ work as your own</b>.' },
    { sec: 'Sources', name: 'Question 7', pts: 1, text: 'Which is a SECONDARY source about an event in 1945?', opts: o4('a letter written in 1945', 'a photograph taken in 1945', 'a history book written in 2010', 'a diary from 1945'), ans: 'C', why: 'A <b>secondary source</b> is written later, about the event.' },
    { sec: 'Library skills', name: 'Question 8', pts: 1, img: A + 'ta5/dewey.svg', text: 'What does the Dewey Decimal System organise?', opts: o4('pupils into classes', 'library computers', 'the school timetable', 'non-fiction books by subject'), ans: 'D', why: 'Dewey numbers group <b>non-fiction books by subject</b> 📚.' },
    { sec: 'Library skills', name: 'Question 9', pts: 1, img: A + 'ta5/thesaurus.svg', text: 'You want synonyms for the word "important". Which book helps MOST?', opts: o4('a thesaurus', 'an atlas', 'a dictionary of dates', 'an encyclopedia'), ans: 'A', why: 'A <b>thesaurus</b> lists words of similar meaning.' },
    { sec: 'Library skills', name: 'Question 10', pts: 1, img: A + 'ta5/atlas.svg', text: 'You need a map of South America. Which reference book do you choose?', opts: o4('a thesaurus', 'an atlas', 'a dictionary', 'a novel'), ans: 'B', why: 'An <b>atlas</b> is a book of maps 🗺️.' },
  ],
},

];

SUBJECTS.push({
  id: 'tienganh5', name: 'Tiếng Anh', short: 'Tiếng Anh 5', icon: '🔤', grade: 5,
  exams: TA5_EXAMS, ready: true,
  heroTitle: 'Tiếng Anh lớp 5 — từ vựng, ngữ pháp, dấu câu, nghĩa bóng, đọc hiểu, tư duy phản biện, viết và kĩ năng thư viện',
  heroMeta: '📚 50 đề &nbsp;•&nbsp; 500 câu &nbsp;•&nbsp; ⏱ 20-25 phút mỗi đề &nbsp;•&nbsp; đủ 9 phần, không kèm bản dịch',
});
