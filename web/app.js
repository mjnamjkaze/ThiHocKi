/* Ôn Thi Học Kì — SPA (giao diện "Lớp Học Vui") */
'use strict';

const $ = (s, el = document) => el.querySelector(s);
const app = $('#app');

/* URL Web App của Google Apps Script (xem GOOGLE_SHEET.md). Để trống = không gửi thống kê. */
const SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyam1x-nBAO3SDF3t3jkWUx1g5S9lFxmdU3-zh44ApOVNjm8L798XawBy4vn1hWEZNa/exec';

function sendResult(exam, res) {
  if (!SHEET_ENDPOINT) return;
  const sub = subjectOfExam(exam.id) || {};
  fetch(SHEET_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify({
      user: store.user, subject: sub.short || sub.name || '', exam: exam.title,
      score: res.score, correct: res.correct, wrong: res.wrong, skip: res.skip,
      auto: res.auto, date: res.date,
    }),
  }).catch(() => {}); // mất mạng / lỗi server thì bỏ qua, không ảnh hưởng làm bài
}

const store = {
  get user() { return localStorage.getItem('otk.user') || ''; },
  set user(v) { localStorage.setItem('otk.user', v); },
  get results() { try { return JSON.parse(localStorage.getItem('otk.results') || '{}'); } catch { return {}; } },
  saveResult(examId, res) {
    const all = store.results;
    const prev = all[examId];
    all[examId] = { best: Math.max(prev ? prev.best : 0, res.score), last: res };
    localStorage.setItem('otk.results', JSON.stringify(all));
  },
};

const state = {
  screen: 'login',
  grade: Number(localStorage.getItem('otk.grade')) || 2,   // khối lớp đang chọn
  subj: 'toan',        // môn đang xem (id trong SUBJECTS)
  examId: null,
  qIndex: 0,
  answers: {},
  mode: 'take',        // take | review
  endTime: null,
  timerInt: null,
  showNav: false,
  modal: null,
  grading: false,      // đang chấm bài (chặn nộp 2 lần)
  celebrate: null,     // dữ liệu popup ăn mừng sau khi nộp
};

const gradeOf = (s) => s.grade || 2;
const subjectsOfGrade = (g) => SUBJECTS.filter(s => gradeOf(s) === g);
const readyGrades = () => [...new Set(SUBJECTS.filter(s => s.ready).map(gradeOf))].sort();
const getSubject = (id) => SUBJECTS.find(s => s.id === id);
const getExam = (id) => {
  for (const s of SUBJECTS) {
    if (!s.exams) continue;
    const e = s.exams.find(e => e.id === id);
    if (e) return e;
  }
  return null;
};
const subjectOfExam = (id) => SUBJECTS.find(s => s.exams && s.exams.some(e => e.id === id));
const fmtScore = (s) => (Math.round(s * 100) / 100).toLocaleString('vi-VN', { maximumFractionDigits: 2 });
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
/* Đề bài được viết bằng HTML (<br>, <b>, &lt;, …). Khi cần chữ thuần (danh sách tóm tắt,
   chia sẻ kết quả) phải bóc thẻ + giải mã entity, nếu không sẽ hiện ra "<br>" trên màn hình. */
const plain = (s) => String(s == null ? '' : s)
  .replace(/<br\s*\/?>/gi, ' ')
  .replace(/<\/(p|div|li|tr|h[1-6])>/gi, ' ')
  .replace(/<[^>]*>/g, '')
  .replace(/&nbsp;/g, ' ')
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
  .replace(/&amp;/g, '&')
  .replace(/\s+/g, ' ')
  .trim();
const cut = (s, n) => (s.length > n ? s.slice(0, n).trimEnd() + '…' : s);

function nav(screen, extra = {}) {
  Object.assign(state, { screen }, extra);
  render();
  window.scrollTo(0, 0);
}

/* ================= LOGIN ================= */
/* Dòng tóm tắt số đề của một khối — đếm trực tiếp từ dữ liệu để không bị lệch
   khi bộ đề được chia nhỏ (xem split-exams.js). */
function footLine(g) {
  const subs = subjectsOfGrade(g).filter(s => s.ready);
  const vio = subs.filter(s => s.id.startsWith('vio'));
  const items = subs.filter(s => !s.id.startsWith('vio')).map(s => `${s.name} (${s.exams.length})`);
  if (vio.length) items.push(`VioEdu (${vio.reduce((t, s) => t + s.exams.length, 0)})`);
  return `Lớp ${g}: ` + items.join(' · ');
}
function vLogin() {
  return `
  <div class="login-wrap">
    <div class="login-card">
      <div class="logo-sq">
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/><path d="M22 10v6"/>
        </svg>
      </div>
      <h1>Ôn Thi Học Kì</h1>
      <div class="sub">Luyện đề trắc nghiệm — chào mừng bạn!</div>
      <div class="field">
        <label>👦 Tên học sinh</label>
        <input id="inp-name" type="text" placeholder="Ví dụ: Minh Anh" value="${esc(store.user)}" maxlength="30">
      </div>
      <button class="btn btn-primary" style="width:100%" onclick="doLogin()">Bắt đầu học →</button>
      <div class="login-foot">Ôn Thi Học Kì v1.8.0 • ${readyGrades().map(footLine).join('<br>')}</div>
    </div>
  </div>`;
}
window.doLogin = () => {
  const v = $('#inp-name').value.trim();
  if (!v) { $('#inp-name').focus(); return; }
  store.user = v;
  nav('home');
};

/* ================= HOME ================= */
function vHome() {
  const res = store.results;
  const done = EXAMS.filter(e => res[e.id]).length;
  // thẻ tiến độ cho từng môn đã mở của khối lớp đang chọn
  const progCards = subjectsOfGrade(state.grade).filter(s => s.ready).map(sub => {
    const ex = sub.exams;
    const dn = ex.filter(e => res[e.id]).length;
    const av = dn ? ex.reduce((t, e) => t + (res[e.id] ? res[e.id].best : 0), 0) / dn : 0;
    const bars = ex.map(e => {
      const b = res[e.id] ? res[e.id].best : 0;
      const h = Math.max(4, Math.round(b / 10 * 100));
      return `<div class="bar ${b >= 9 ? 'hi' : ''}" style="height:${h}%">${b && ex.length <= 12 ? `<span>${fmtScore(b)}</span>` : ''}</div>`;
    }).join('');
    const lbls = ex.length <= 12 ? `<div class="lbls">${ex.map((e, i) => `<div>Đ${i + 1}</div>`).join('')}</div>` : '';
    return `
    <div class="sect-title">${sub.name} — tiến độ</div>
    <div class="card progress-card">
      <div class="bars">${bars}</div>
      ${lbls}
      <div class="statline">
        <div><div class="k">Đề đã làm</div><div class="v blue">${dn}/${ex.length}</div></div>
        <div><div class="k">Điểm trung bình</div><div class="v green">${dn ? fmtScore(av) : '—'}</div></div>
      </div>
    </div>`;
  }).join('');

  const opened = readyGrades();
  const vioExams = subjectsOfGrade(state.grade).filter(s => s.ready && s.id.startsWith('vio'))
    .reduce((t, s) => t + s.exams.length, 0);
  const hero = state.grade === 2
    ? `<div class="hero">
      <span class="tag">KỲ THI SẮP TỚI</span>
      <h2>Toán 2 — Cuối học kì 2</h2>
      <div class="meta">⏱ ~${Math.round(EXAMS.reduce((t, e) => t + e.time, 0) / EXAMS.length)} phút/đề &nbsp;•&nbsp; 📚 ${EXAMS.length} đề &nbsp;•&nbsp; hoàn thành ${done}/${EXAMS.length}</div>
      <button class="btn" onclick="nav('subject', {subj:'toan'})">Ôn tập ngay ▶</button>
    </div>`
    : `<div class="hero">
      <span class="tag">ĐẤU TRƯỜNG VIOEDU</span>
      <h2>VioEdu Lớp ${state.grade} — Toán · Tiếng Việt · Toán Tiếng Anh</h2>
      <div class="meta">📚 ${vioExams} đề &nbsp;•&nbsp; 2024–2025 &amp; 2025–2026 &nbsp;•&nbsp; Sơ loại → Cấp Trường → Cấp Quận</div>
      <button class="btn" onclick="nav('subject', {subj:'vio${state.grade}-toan'})">Ôn tập ngay ▶</button>
    </div>`;

  return `
  <div class="topbar">
    <div class="avatar">${esc(store.user.charAt(0).toUpperCase() || 'H')}</div>
    <div style="flex:1">
      <div class="hi">Xin chào,</div>
      <div class="name">${esc(store.user)} 👋</div>
    </div>
    <button class="icon-btn" title="Đổi tên" onclick="nav('login')">⚙</button>
  </div>
  <div class="screen">
    ${hero}

    <div class="sect-title">Chọn lớp</div>
    <div class="chips">
      ${[1, 2, 3, 4, 5].map(g => {
        const open = opened.includes(g);
        const cur = g === state.grade;
        return `<button class="pick ${cur ? 'active' : open ? '' : 'locked'}" ${open ? `onclick="setGrade(${g})"` : 'disabled'}>Lớp ${g}${open ? '' : ' 🔒'}</button>`;
      }).join('')}
    </div>

    ${state.grade === 2 ? `
    <div class="sect-title">Học kì</div>
    <div class="chips">
      <button class="pick locked" disabled>Giữa học kì 2 🔒</button>
      <button class="pick active">Cuối học kì 2</button>
    </div>` : ''}

    <div class="sect-title">Môn học — Lớp ${state.grade}</div>
    <div class="subj-grid">
      ${subjectsOfGrade(state.grade).map(s => s.ready
        ? `<button class="subj on" onclick="nav('subject', {subj:'${s.id}'})"><div class="ic">${s.icon}</div>${s.name}<span class="chip" style="font-size:11px;padding:3px 10px">${s.exams.length} đề</span></button>`
        : `<div class="subj off"><div class="ic">${s.icon}</div>${s.name}<span class="soon">Sắp có</span></div>`).join('')}
    </div>

    ${progCards}
  </div>`;
}

window.setGrade = (g) => {
  state.grade = g;
  localStorage.setItem('otk.grade', String(g));
  render();
};

/* ================= SUBJECT (exam list) ================= */
function vSubject() {
  const sub = getSubject(state.subj) || SUBJECTS[0];
  const res = store.results;
  const grade = gradeOf(sub);
  const exams = sub.exams;
  const done = exams.filter(e => res[e.id]).length;
  const avg = done ? exams.reduce((s, e) => s + (res[e.id] ? res[e.id].best : 0), 0) / done : 0;
  return `
  <div class="topbar">
    <button class="icon-btn" onclick="nav('home')">←</button>
    <h1>Môn ${sub.name}</h1>
  </div>
  <div class="screen">
    <div class="hero">
      <span class="tag">🎒 KHỐI ${grade}</span>
      <h2>${sub.heroTitle}</h2>
      <div class="meta">${sub.heroMeta}</div>
    </div>
    <div class="row">
      <div class="card" style="flex:1"><div class="small muted">Tiến độ</div><div class="v blue" style="font-size:22px;font-weight:800">${done}/${exams.length}</div></div>
      <div class="card" style="flex:1"><div class="small muted">Điểm trung bình</div><div class="v green" style="font-size:22px;font-weight:800">${done ? fmtScore(avg) : '—'}</div></div>
    </div>
    <div class="sect-title">Danh sách đề thi</div>
    ${exams.map((e, i) => {
      const r = res[e.id];
      const n = i + 1;
      return `
      <div class="card exam-item">
        <div class="head">
          <div class="ic">${n < 10 ? '0' + n : n}</div>
          <div>
            <div class="ttl">${e.title} — ${sub.short}</div>
            <div class="meta">⏱ ${e.time} phút · ${e.questions.length} câu hỏi · thang điểm 10</div>
          </div>
          ${r ? `<div class="badge-score"><div class="s">${fmtScore(r.best)}</div><div class="t">điểm cao nhất</div></div>` : ''}
        </div>
        <div class="row">
          <button class="btn btn-primary" onclick="startExam(${e.id})">${r ? 'Làm lại ↻' : 'Bắt đầu làm bài ▶'}</button>
          ${r ? `<button class="btn btn-outline" onclick="reviewExam(${e.id})">Xem lại</button>` : ''}
        </div>
      </div>`;
    }).join('')}
  </div>`;
}

/* ================= EXAM ================= */
window.startExam = (id) => {
  const exam = getExam(id);
  const sub = subjectOfExam(id);
  if (sub) { state.subj = sub.id; state.grade = gradeOf(sub); }
  state.examId = id;
  state.qIndex = 0;
  state.answers = {};
  state.mode = 'take';
  state.celebrate = null;
  state.grading = false;
  state.endTime = Date.now() + exam.time * 60 * 1000;
  clearInterval(state.timerInt);
  state.timerInt = setInterval(tick, 1000);
  nav('exam');
};
window.reviewExam = (id) => {
  const r = store.results[id];
  if (!r) return;
  const sub = subjectOfExam(id);
  if (sub) { state.subj = sub.id; state.grade = gradeOf(sub); }
  state.examId = id;
  state.qIndex = 0;
  state.answers = r.last.answers;
  state.mode = 'review';
  state.celebrate = null;
  clearInterval(state.timerInt);
  nav('exam');
};

function tick() {
  if (state.screen !== 'exam' || state.mode !== 'take') { clearInterval(state.timerInt); return; }
  const left = state.endTime - Date.now();
  if (left <= 0) { clearInterval(state.timerInt); doSubmit(true); return; }
  const el = $('#timer');
  if (el) {
    el.textContent = fmtTime(left);
    el.classList.toggle('low', left < 5 * 60 * 1000);
  }
}
const fmtTime = (ms) => {
  const s = Math.max(0, Math.floor(ms / 1000));
  return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
};

const isWide = () => window.matchMedia('(min-width: 900px)').matches;

function vQcard(exam, i) {
  const q = exam.questions[i];
  const picked = state.answers[i];
  const review = state.mode === 'review';
  const imgs = q.imgs || (q.img ? [q.img] : []);
  return `
    <div class="qcard" id="q-${i}">
      <div class="qhead">
        <span class="qnum">${q.name}</span>
        <span class="qpts">(${q.pts} điểm)</span>
        <span class="qsec">${q.sec}</span>
      </div>
      <div class="qtext">${q.text}</div>
      ${q.html || ''}
      ${imgs.map(src => `<img class="qimg" src="${src}" alt="Hình minh họa">`).join('')}
      <div class="opts">
        ${q.opts.map(o => {
          let cls = 'opt';
          if (review) {
            if (o.k === q.ans) cls += ' correct';
            else if (picked === o.k) cls += ' wrong';
          } else if (picked === o.k) cls += ' sel';
          return `<button class="${cls}" onclick="pickAt(${i}, '${o.k}')">
            <span class="k">${o.k}</span>
            ${o.img ? `<img src="${o.img}" alt="Đáp án ${o.k}">` : `<span>${o.t}</span>`}
          </button>`;
        }).join('')}
      </div>
      ${review ? `<div class="why"><b>Đáp án đúng: ${q.ans}.</b> ${q.why}
        ${picked ? (picked === q.ans ? ' <b style="color:var(--secondary)">✓ Em chọn đúng!</b>' : ` <b style="color:var(--error)">✗ Em đã chọn ${picked}.</b>`) : ' <b style="color:var(--tertiary)">Em chưa trả lời câu này.</b>'}</div>` : ''}
    </div>`;
}

function vExamTop(exam) {
  const n = exam.questions.length;
  const answered = Object.keys(state.answers).length;
  const review = state.mode === 'review';
  return `
  <div class="exam-top">
    <div class="r1">
      <button class="icon-btn" onclick="askExit()">←</button>
      <div class="ttl">${exam.title}</div>
      ${review
        ? `<span class="chip">Chế độ xem lại</span>`
        : `<span class="timer" id="timer">${fmtTime(state.endTime - Date.now())}</span>
           <button class="btn-submit" onclick="askSubmit()">Nộp bài</button>`}
    </div>
    <div class="r2">
      <div class="prog-txt">${isWide() ? `Đã làm <b>${answered}</b>/${n}` : `Câu <b>${state.qIndex + 1}</b>/${n}`}</div>
      <div class="track"><div class="fill" style="width:${Math.round(answered / n * 100)}%"></div></div>
      <div class="prog-txt">${Math.round(answered / n * 100)}%</div>
    </div>
  </div>`;
}

/* Màn hình rộng (PC): trải toàn bộ câu hỏi trên một trang cuộn dọc */
function vExamAll(exam) {
  const review = state.mode === 'review';
  return `
  ${vExamTop(exam)}
  <div class="screen exam-all">
    ${exam.questions.map((q, i) => vQcard(exam, i)).join('')}
    ${review
      ? `<button class="btn btn-primary" onclick="nav('result')">Kết quả ›</button>`
      : `<button class="btn btn-primary" onclick="askSubmit()">Nộp bài ✓</button>`}
  </div>
  ${state.modal || ''}`;
}

function vExam() {
  const exam = getExam(state.examId);
  if (isWide()) return vExamAll(exam);
  const q = exam.questions[state.qIndex];
  const n = exam.questions.length;
  const review = state.mode === 'review';
  return `
  ${vExamTop(exam)}
  <div class="screen">
    ${vQcard(exam, state.qIndex)}
    <div class="exam-nav">
      <button class="btn btn-outline" ${state.qIndex === 0 ? 'disabled style="opacity:.4"' : ''} onclick="go(-1)">‹ Câu trước</button>
      <button class="btn btn-ghost sq" title="Danh sách câu hỏi" onclick="toggleNav(true)">☰</button>
      ${state.qIndex === n - 1
        ? (review
          ? `<button class="btn btn-primary" onclick="nav('result')">Kết quả ›</button>`
          : `<button class="btn btn-primary" onclick="askSubmit()">Nộp bài ✓</button>`)
        : `<button class="btn btn-primary" onclick="go(1)">Câu sau ›</button>`}
    </div>
  </div>
  ${state.showNav ? vQnav(exam) : ''}
  ${state.modal || ''}`;
}

function vQnav(exam) {
  const review = state.mode === 'review';
  return `
  <div class="qnav-back" onclick="toggleNav(false)">
    <div class="qnav" onclick="event.stopPropagation()">
      <h3>Danh sách câu hỏi</h3>
      <div class="legend">
        ${review
          ? `<span><span class="dot" style="background:var(--secondary-container)"></span>Đúng</span>
             <span><span class="dot" style="background:var(--error-container)"></span>Sai / chưa làm</span>`
          : `<span><span class="dot" style="background:var(--secondary-container)"></span>Đã trả lời</span>
             <span><span class="dot" style="background:var(--surface-high)"></span>Chưa trả lời</span>
             <span><span class="dot" style="border:2px solid var(--primary-container);background:#fff"></span>Câu hiện tại</span>`}
      </div>
      <div class="grid">
        ${exam.questions.map((q, i) => {
          let cls = 'qsq';
          if (review) cls += state.answers[i] === q.ans ? ' ok' : ' bad';
          else if (state.answers[i]) cls += ' done';
          if (i === state.qIndex) cls += ' cur';
          return `<button class="${cls}" onclick="jump(${i})">${i + 1}</button>`;
        }).join('')}
      </div>
    </div>
  </div>`;
}

window.pickAt = (i, k) => {
  if (state.mode === 'review') return;
  state.answers[i] = k;
  const y = window.scrollY;
  render();   // chỉ chọn đáp án, KHÔNG tự chuyển câu — học sinh tự bấm "Câu sau"
  window.scrollTo(0, y);
};
window.go = (d) => {
  const exam = getExam(state.examId);
  state.qIndex = Math.min(exam.questions.length - 1, Math.max(0, state.qIndex + d));
  render(); window.scrollTo(0, 0);
};
window.jump = (i) => {
  state.qIndex = i; state.showNav = false; render();
  const el = isWide() ? document.getElementById('q-' + i) : null;
  if (el) el.scrollIntoView(); else window.scrollTo(0, 0);
};
window.toggleNav = (v) => { state.showNav = v; render(); };

window.askExit = () => {
  if (state.mode === 'review') { nav('result'); return; }
  state.modal = `
  <div class="modal-back" onclick="closeModal()">
    <div class="modal" onclick="event.stopPropagation()">
      <div class="modal-ic warn">🚪</div>
      <h3>Thoát bài thi?</h3>
      <p>Bài làm hiện tại sẽ <b style="color:var(--error)">không được lưu</b>.<br>Em có chắc muốn ra ngoài không?</p>
      <div class="row">
        <button class="btn btn-ghost" onclick="closeModal()">Ở lại làm bài</button>
        <button class="btn btn-primary" onclick="clearInterval(state.timerInt);state.modal=null;nav('subject')">Thoát</button>
      </div>
    </div>
  </div>`;
  render();
};
window.askSubmit = () => {
  const exam = getExam(state.examId);
  const n = exam.questions.length;
  const answered = Object.keys(state.answers).length;
  const unanswered = n - answered;
  const left = Math.max(0, state.endTime - Date.now());
  state.modal = `
  <div class="modal-back" onclick="closeModal()">
    <div class="modal" onclick="event.stopPropagation()">
      <div class="modal-ic ${unanswered ? 'warn' : 'ok'}">${unanswered ? '📝' : '✅'}</div>
      <h3>Nộp bài?</h3>
      <div class="modal-facts">
        <div><div class="n g">${answered}</div><div class="t">ĐÃ LÀM</div></div>
        <div><div class="n ${unanswered ? 'r' : 'o'}">${unanswered}</div><div class="t">CHƯA LÀM</div></div>
        <div><div class="n b mono">${fmtTime(left)}</div><div class="t">CÒN LẠI</div></div>
      </div>
      <p>${unanswered > 0
        ? `Em còn <b style="color:var(--error)">${unanswered} câu chưa trả lời</b> — vẫn còn thời gian để thử nữa nhé!`
        : 'Tuyệt vời, em đã trả lời <b style="color:var(--secondary)">tất cả các câu</b>!'}</p>
      <div class="row">
        <button class="btn btn-ghost" onclick="closeModal()">Làm tiếp</button>
        <button class="btn btn-primary" onclick="doSubmit()">Nộp bài ✓</button>
      </div>
    </div>
  </div>`;
  render();
};
window.closeModal = () => { state.modal = null; render(); };

/* Xếp loại + "giọng nói" của popup ăn mừng, dùng chung cho kết quả và chia sẻ */
function rankOf(score) {
  if (score >= 9) return { tier: 'xs', label: 'XUẤT SẮC 🌟', emoji: '🏆',
    head: 'Xuất sắc!', msg: 'Gần như trọn vẹn! Em nắm rất chắc phần này rồi.' };
  if (score >= 7) return { tier: 'gi', label: 'GIỎI 👍', emoji: '🎉',
    head: 'Làm tốt lắm!', msg: 'Chỉ còn vài câu nữa là hoàn hảo. Xem lời giải để gỡ nốt nhé!' };
  if (score >= 5) return { tier: 'dt', label: 'ĐẠT ✓', emoji: '💡',
    head: 'Em đã vượt qua!', msg: 'Đọc kỹ lời giải mấy câu sai, lần sau điểm sẽ nhảy vọt.' };
  return { tier: 'cg', label: 'CẦN CỐ GẮNG 💪', emoji: '💪',
    head: 'Đừng bỏ cuộc nha!', msg: 'Xem lời giải từng câu rồi làm lại — ai cũng bắt đầu như vậy thôi.' };
}

/* Popup "Đang chấm bài…" — cho học sinh một nhịp chờ nhỏ trước khi thấy điểm */
function vGrading() {
  return `
  <div class="modal-back grading">
    <div class="grade-box">
      <div class="grade-spin"><span>📝</span></div>
      <h3>Đang chấm bài<span class="dots"><i>.</i><i>.</i><i>.</i></span></h3>
      <p class="muted small">Cô giáo đang soát từng câu của em…</p>
    </div>
  </div>`;
}

window.doSubmit = (auto = false) => {
  if (state.grading) return;              // chặn bấm 2 lần / hết giờ trùng lúc bấm nộp
  state.grading = true;
  clearInterval(state.timerInt);
  state.modal = vGrading();
  render();
  setTimeout(() => finishSubmit(auto), 1000);
};

function finishSubmit(auto) {
  const exam = getExam(state.examId);
  let score = 0, correct = 0, wrong = 0, skip = 0;
  exam.questions.forEach((q, i) => {
    const a = state.answers[i];
    if (!a) skip++;
    else if (a === q.ans) { correct++; score += q.pts; }
    else wrong++;
  });
  score = Math.round(score * 100) / 100;
  const prevRec = store.results[exam.id];
  const prevBest = (prevRec || {}).best || 0;
  const res = { score, correct, wrong, skip, answers: { ...state.answers }, date: new Date().toISOString(), auto };
  store.saveResult(exam.id, res);
  sendResult(exam, res);
  state.lastResult = res;
  state.lastResultExam = exam.id;
  state.mode = 'review';
  state.grading = false;
  state.modal = null;
  state.celebrate = { newBest: !!prevRec && score > prevBest, first: !prevRec, auto };
  nav('result');
}

/* ================= POPUP ăn mừng ================= */
function vCelebrate(exam, r) {
  const c = state.celebrate;
  const rk = rankOf(r.score);
  const n = exam.questions.length;
  const cf = rk.tier === 'cg' ? '' : confettiHtml(rk.tier === 'xs' ? 46 : 30);
  const badge = c.newBest ? '<div class="cele-badge">🥇 Kỷ lục mới của em!</div>'
    : c.first ? '<div class="cele-badge">✨ Lần đầu hoàn thành đề này</div>' : '';
  return `
  <div class="cele-back" onclick="closeCelebrate()">
    ${cf}
    <div class="cele t-${rk.tier}" onclick="event.stopPropagation()">
      <div class="cele-cap">
        <div class="cele-emo">${c.auto ? '⏰' : rk.emoji}</div>
        <h3>${c.auto ? 'Hết giờ rồi!' : rk.head}</h3>
        <div class="cele-sub">${esc(exam.title)} — ${esc((subjectOfExam(exam.id) || {}).short || '')}</div>
      </div>
      <div class="cele-ring">
        <svg width="132" height="132" viewBox="0 0 132 132">
          <circle cx="66" cy="66" r="56" fill="none" stroke="var(--surface-high)" stroke-width="11"/>
          <circle id="cele-arc" cx="66" cy="66" r="56" fill="none" stroke="currentColor" stroke-width="11"
            stroke-linecap="round" stroke-dasharray="${(2 * Math.PI * 56).toFixed(1)}"
            stroke-dashoffset="${(2 * Math.PI * 56).toFixed(1)}"
            data-target="${(2 * Math.PI * 56 * (1 - r.score / 10)).toFixed(1)}"/>
        </svg>
        <div class="v"><div class="n mono" id="cele-score" data-to="${r.score}">0</div><div class="d">/ 10 điểm</div></div>
      </div>
      <span class="pass ${r.score >= 5 ? 'ok' : 'no'}">${rk.label}</span>
      ${badge}
      <p class="cele-msg">${rk.msg}</p>
      <div class="cele-stats">
        <div><div class="n g">${r.correct}</div><div class="t">ĐÚNG</div></div>
        <div><div class="n r">${r.wrong}</div><div class="t">SAI</div></div>
        <div><div class="n o">${r.skip}</div><div class="t">BỎ QUA</div></div>
      </div>
      <div class="cele-acts">
        <button class="btn btn-primary" onclick="state.celebrate=null;reviewExam(${exam.id})">📖 Xem lời giải chi tiết</button>
        <button class="btn btn-ghost" onclick="closeCelebrate()">Xem bảng kết quả (${n} câu)</button>
      </div>
    </div>
  </div>`;
}
window.closeCelebrate = () => { state.celebrate = null; render(); };

function confettiHtml(count) {
  const cols = ['#1a56db', '#6cf8bb', '#ffc94d', '#ff7a7a', '#a78bfa', '#34d399'];
  let out = '';
  for (let i = 0; i < count; i++) {
    const left = Math.round(Math.random() * 100);
    const col = cols[i % cols.length];
    const dur = (2.2 + Math.random() * 1.8).toFixed(2);
    const del = (Math.random() * 1.2).toFixed(2);
    const w = 6 + Math.round(Math.random() * 6);
    const round = Math.random() < .3 ? 'border-radius:50%;' : '';
    out += `<i class="confetti" style="left:${left}%;background:${col};width:${w}px;height:${w + 5}px;${round}animation-duration:${dur}s;animation-delay:${del}s"></i>`;
  }
  return out;
}

/* chạy sau khi render: đếm điểm tăng dần + vẽ vòng tròn */
function animCelebrate() {
  const arc = document.getElementById('cele-arc');
  if (arc) requestAnimationFrame(() => {
    arc.style.transition = 'stroke-dashoffset 1.1s cubic-bezier(.3,1,.4,1)';
    arc.style.strokeDashoffset = arc.dataset.target;
  });
  const el = document.getElementById('cele-score');
  if (!el) return;
  const to = Number(el.dataset.to) || 0;
  const t0 = performance.now(), dur = 1000;
  const step = (t) => {
    if (!document.body.contains(el)) return;
    const p = Math.min(1, (t - t0) / dur);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = fmtScore(to * e);
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = fmtScore(to);
  };
  requestAnimationFrame(step);
}

/* ================= RESULT ================= */
function vResult() {
  const exam = getExam(state.examId);
  const r = (state.lastResult && state.lastResultExam === state.examId)
    ? state.lastResult : (store.results[state.examId] || {}).last;
  if (!r) return vSubject();
  const pct = Math.round(r.score / 10 * 100);
  const ring = 2 * Math.PI * 74;
  const passed = r.score >= 5;
  const rank = rankOf(r.score).label;
  return `
  <div class="topbar">
    <button class="icon-btn" onclick="nav('subject')">←</button>
    <h1>Kết quả thi</h1>
  </div>
  <div class="screen">
    <div class="card score-wrap">
      <div class="ring">
        <svg width="168" height="168">
          <circle cx="84" cy="84" r="74" fill="none" stroke="var(--surface-high)" stroke-width="13"/>
          <circle cx="84" cy="84" r="74" fill="none" stroke="${passed ? 'var(--secondary)' : 'var(--error)'}" stroke-width="13"
            stroke-linecap="round" stroke-dasharray="${ring}" stroke-dashoffset="${ring * (1 - pct / 100)}"/>
        </svg>
        <div class="val"><div class="n">${fmtScore(r.score)}</div><div class="d">/ 10 điểm</div></div>
      </div>
      <span class="pass ${passed ? 'ok' : 'no'}">${rank}</span>
      <h2 style="margin:14px 0 4px;font-size:21px">Hoàn thành bài thi!</h2>
      <div class="muted small">${exam.title} — ${(subjectOfExam(exam.id) || {}).short || ''} ${r.auto ? '· (hết giờ, nộp tự động)' : ''}</div>
      <div class="res-stats">
        <div><div class="n g">${r.correct}</div><div class="t">ĐÚNG</div></div>
        <div><div class="n r">${r.wrong}</div><div class="t">SAI</div></div>
        <div><div class="n o">${r.skip}</div><div class="t">BỎ QUA</div></div>
      </div>
    </div>

    <button class="btn btn-primary" onclick="reviewExam(${exam.id})">📖 Xem lời giải chi tiết</button>
    <button class="btn btn-tonal" id="btn-share" onclick="shareResult()">📤 Chia sẻ kết quả</button>
    <div class="row">
      <button class="btn btn-tonal" style="flex:1" onclick="startExam(${exam.id})">↻ Làm lại</button>
      <button class="btn btn-ghost" style="flex:1" onclick="nav('home')">🏠 Trang chủ</button>
    </div>

    <div class="sect-title">Danh sách câu hỏi</div>
    <div class="res-list">
      ${exam.questions.map((q, i) => {
        const a = r.answers[i];
        const ok = a === q.ans;
        const cls = !a ? 'skip' : ok ? 'ok' : 'bad';
        const st = !a ? '⊘ Bỏ qua' : ok ? '✓ Chính xác' : `✗ Sai — em chọn ${a}, đáp án đúng ${q.ans}`;
        return `<button class="res-item ${cls}" onclick="openReviewAt(${i})">
          <div class="idx">${String(i + 1).padStart(2, '0')}</div>
          <div class="tx"><div class="tt">${q.name} · ${esc(cut(plain(q.text), 60))}</div><div class="st ${cls}">${st}</div></div>
          <div class="arr">›</div>
        </button>`;
      }).join('')}
    </div>
  </div>
  ${state.celebrate ? vCelebrate(exam, r) : ''}`;
}
window.shareResult = async () => {
  const exam = getExam(state.examId);
  const r = (state.lastResult && state.lastResultExam === state.examId)
    ? state.lastResult : (store.results[state.examId] || {}).last;
  if (!r) return;
  const sub = subjectOfExam(exam.id) || {};
  const rank = rankOf(r.score).label;
  const when = new Date(r.date).toLocaleString('vi-VN', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric' });
  const text = [
    '📊 KẾT QUẢ ÔN THI HỌC KÌ',
    `👦 Học sinh: ${store.user}`,
    `📚 ${exam.title} — ${sub.short || ''}`,
    `⭐ Điểm: ${fmtScore(r.score)}/10 — ${rank}`,
    `✓ Đúng ${r.correct} · ✗ Sai ${r.wrong} · ⊘ Bỏ qua ${r.skip}`,
    `🕐 ${when}`,
    '🔗 https://mjnamjkaze.github.io/ThiHocKi/',
  ].join('\n');
  if (navigator.share) {
    try { await navigator.share({ text }); return; }
    catch (e) { if (e.name === 'AbortError') return; }
  }
  let copied = false;
  try { await navigator.clipboard.writeText(text); copied = true; } catch {}
  if (!copied) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { copied = document.execCommand('copy'); } catch {}
    ta.remove();
  }
  const btn = $('#btn-share');
  if (btn) {
    btn.textContent = copied ? '✓ Đã sao chép — dán vào Zalo để gửi' : '⚠ Không sao chép được';
    setTimeout(() => { const b = $('#btn-share'); if (b) b.textContent = '📤 Chia sẻ kết quả'; }, 2500);
  }
};
window.openReviewAt = (i) => {
  const r = (state.lastResult && state.lastResultExam === state.examId)
    ? state.lastResult : (store.results[state.examId] || {}).last;
  state.answers = r.answers;
  state.mode = 'review';
  state.qIndex = i;
  nav('exam');
  if (isWide()) {
    const el = document.getElementById('q-' + i);
    if (el) el.scrollIntoView();
  }
};

/* ================= Android back button ================= */
window.androidBack = () => {
  if (state.grading) return true;   // đang chấm bài, đợi 1 giây
  if (state.celebrate) { state.celebrate = null; render(); return true; }
  if (state.modal) { state.modal = null; render(); return true; }
  if (state.showNav) { state.showNav = false; render(); return true; }
  switch (state.screen) {
    case 'exam':
      if (state.mode === 'review') { nav('result'); } else { window.askExit(); }
      return true;
    case 'result': nav('subject'); return true;
    case 'subject': nav('home'); return true;
    default: return false; // home/login -> thoat app
  }
};

/* ================= render ================= */
function render() {
  let html = '';
  switch (state.screen) {
    case 'login': html = vLogin(); break;
    case 'home': html = vHome(); break;
    case 'subject': html = vSubject(); break;
    case 'exam': html = vExam(); break;
    case 'result': html = vResult(); break;
  }
  app.innerHTML = html;
  if (state.celebrate) animCelebrate();
}
window.nav = nav;
window.state = state;

/* đổi kích thước cửa sổ qua ngưỡng desktop/mobile -> vẽ lại layout bài thi */
window.matchMedia('(min-width: 900px)').addEventListener('change', () => render());

render();
if (store.user) nav('home');
