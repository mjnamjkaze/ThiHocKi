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
      hints: (res.hinted || []).length, auto: res.auto, date: res.date,
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
  qCount: Number(localStorage.getItem('otk.qcount')) || 0, // số câu mỗi đề: 0 = cả đề
  subj: 'toan',        // môn đang xem (id trong SUBJECTS)
  examId: null,
  examQn: 0,           // số câu của lượt làm bài hiện tại (xem lại thì lấy theo lúc nộp)
  qIndex: 0,
  answers: {},
  mode: 'take',        // take | review
  endTime: null,
  timerInt: null,
  showNav: false,
  modal: null,
  grading: false,      // đang chấm bài (chặn nộp 2 lần)
  celebrate: null,     // dữ liệu popup ăn mừng sau khi nộp
  who: null,           // bạn con vật ra ăn mừng lần này (bốc ngẫu nhiên lúc nộp)
  lastWho: null,       // bạn của lần trước — để lần này chắc chắn ra bạn khác
  srcFilter: '',       // môn gộp: chỉ xem đề của một bộ gốc ('' = xem tất cả)
  matchSel: null,      // ảnh đang chọn trong câu "nối ảnh với từ"
  hintOpen: {},        // những câu bé đã bấm xin gợi ý
  hintTxt: {},         // gợi ý đã lấy được cho từng câu (null = đang hỏi)
};

/* ══════════════════════════ GỢI Ý — chỉ khi bé tự xin ══════════════════════════
   Không tự nhảy ra, không đếm giờ: bé bấm nút thì mới có. Chữ gợi ý lấy theo thứ
   tự trong web/ai-hint.js — hỏi Gemini trước, hỏng thì rơi về gợi ý sinh sẵn
   (q.hint trong data-hints.js) nên câu mới thêm sau này vẫn luôn có gợi ý. */

const gradeOf = (s) => s.grade || 2;
const subjectsOfGrade = (g) => SUBJECTS.filter(s => gradeOf(s) === g);
/* Danh sách khối lấy thẳng từ dữ liệu — thêm bank lớp mới là chip tự hiện ra,
   không phải sửa tay ở chỗ vẽ nút chọn lớp nữa. */
const allGrades = () => [...new Set(SUBJECTS.map(gradeOf))].sort((a, b) => a - b);
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

/* ═══════════ GỘP CÁC BANK TOÁN CỦA KHỐI 2–5 THÀNH 3 MÔN ═══════════
   Trước đây mỗi bộ đề toán là một ô riêng: khối 2 có tới 11 ô (Tư duy, MathX,
   FMO, AMO, ASMO, HSG, nâng cao, qua hình…) nên màn hình chọn môn rối và khó
   biết nên vào ô nào. Nay chỉ còn ba ô theo mục đích luyện tập. Dữ liệu gốc
   KHÔNG bị sửa: mỗi đề vẫn giữ nguyên id (nên điểm đã lưu không mất) và được
   dán nhãn bộ đề gốc để vẫn biết đề đến từ đâu. */
const MATH_MERGE = [
  {
    id: 'tu-duy', name: 'Toán tư duy', icon: '💡',
    desc: 'suy luận, tìm quy luật, toán qua hình và các bộ đề thi tư duy',
    ids: ['tuduy', 'ttd2', 'mathx', 'fmo2', 'amo2', 'asmo', 'hinh2', 'hinhb2', 'vio2-toan', 'vio2-tanh',
      'ttd3', 'ttw3', 'hinh3', 'hinhb3', 'vio3-toan', 'vio3-tanh',
      'ttd4', 'hinh4', 'hinhb4',
      'ttd5', 'hinh5', 'hinhb5'],
  },
  {
    id: 'nang-cao', name: 'Toán nâng cao', icon: '🥇',
    desc: 'bồi dưỡng học sinh giỏi: tính nhanh, suy luận và toán có lời văn khó',
    ids: ['hsg2', 'nc2', 'hsg3', 'nc4', 'nc5'],
  },
  {
    id: 'cuoi-ki', name: 'Toán cuối kì', icon: '📘',
    desc: 'bám sát chương trình trên lớp, luyện đúng dạng đề kiểm tra cuối kì',
    ids: ['toan', 'ck2-l3', 'toan4', 'toan5'],
  },
];
const MATH_MERGE_GRADES = [2, 3, 4, 5];

function mergeMathBanks() {
  const out = [];
  const made = new Set();                       // 'nhóm|khối' đã dựng rồi thì thôi
  for (const s of SUBJECTS) {
    const g = gradeOf(s);
    const grp = MATH_MERGE_GRADES.includes(g) ? MATH_MERGE.find(m => m.ids.includes(s.id)) : null;
    if (!grp) { out.push(s); continue; }

    const key = grp.id + '|' + g;
    if (made.has(key)) continue;                // các bank sau của cùng nhóm đã gộp vào ô đầu
    made.add(key);

    // Lấy đúng thứ tự đã liệt kê trong `ids` để đề của cùng một bộ nằm liền nhau.
    const parts = grp.ids.map(id => SUBJECTS.find(x => x.id === id && gradeOf(x) === g)).filter(Boolean);
    const exams = parts.flatMap(p => (p.exams || []).map(e => ({ ...e, _src: p.short || p.name })));
    const nQ = exams.reduce((t, e) => t + e.questions.length, 0);
    out.push({
      id: `${grp.id}${g}`, name: grp.name, short: `${grp.name} ${g}`, icon: grp.icon, grade: g,
      ready: parts.some(p => p.ready), exams,
      heroTitle: `${grp.name} lớp ${g} — ${grp.desc}`,
      heroMeta: `📚 ${exams.length} đề &nbsp;•&nbsp; ${nQ} câu &nbsp;•&nbsp; gộp từ ${parts.length} bộ đề: ${parts.map(p => p.short || p.name).join(', ')}`,
    });
  }
  SUBJECTS.length = 0;
  SUBJECTS.push(...out);
}

/* ══════════════ SỐ CÂU MỖI ĐỀ — 5 · 10 · 15 · 20 · 25 hoặc cả đề ══════════════
   Bé (hoặc bố mẹ) chọn ở màn hình chính. Đề nào ít câu hơn mức đã chọn thì giữ
   nguyên cả đề. Các câu được lấy TRẢI ĐỀU nên vẫn đủ các phần của đề gốc, và
   luôn ra cùng một bộ câu với cùng (tổng số câu, số câu muốn làm) — nhờ vậy bấm
   "Xem lại" sau khi nộp vẫn đúng những câu bé đã làm. Thời gian rút theo tỉ lệ. */
const QCOUNTS = [5, 10, 15, 20, 25];

/* Đề THCS (khối 6 trở lên) viết theo ma trận 9 nhận biết · 9 thông hiểu · 3 vận
   dụng · 9 nâng cao. Cắt bớt câu là hỏng ma trận và hỏng luôn cách đề phân loại
   học sinh, nên từ khối 6 luôn làm TRỌN đề — ô "số câu mỗi đề" không áp dụng. */
const FULL_EXAM_FROM_GRADE = 6;
const alwaysFull = (g) => g >= FULL_EXAM_FROM_GRADE;
/* Số câu thật sự sẽ làm cho một môn: khối 6+ thì trọn đề, còn lại theo lựa chọn. */
const qCountFor = (sub) => (sub && alwaysFull(gradeOf(sub)) ? 0 : state.qCount);
/* Đề dài nhất của một khối — dùng để không mời chọn mức câu mà khối đó không có. */
const maxQOfGrade = (g) => subjectsOfGrade(g)
  .filter(s => s.ready && s.exams)
  .reduce((m, s) => s.exams.reduce((u, e) => Math.max(u, e.questions.length), m), 0);

function trimExam(exam, n) {
  if (!exam || !n || exam.questions.length <= n) return exam;
  const total = exam.questions.length;
  const qs = Array.from({ length: n }, (_, i) => exam.questions[Math.round(i * (total - 1) / (n - 1))]);
  return { ...exam, questions: qs, time: Math.max(1, Math.round(exam.time * n / total)) };
}

const curExam = () => trimExam(getExam(state.examId), state.examQn);
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
  if (extra.subj && extra.subj !== state.subj) state.srcFilter = '';  // đổi môn thì bỏ bộ lọc cũ
  Object.assign(state, { screen }, extra);
  render();
  window.scrollTo(0, 0);
}

/* ================= CỔNG MẬT KHẨU =================
   Trang cá nhân: lần đầu vào máy nào thì máy đó phải nhập mã. Mở khóa xong ghi
   vào localStorage nên các lần sau không hỏi lại. Đây là lớp chắn riêng tư cho
   trang cá nhân, không phải cơ chế bảo mật dữ liệu. */
const GATE_PASS = '12345';
const gate = {
  get ok() { return localStorage.getItem('otk.gate') === '1'; },
  set ok(v) { v ? localStorage.setItem('otk.gate', '1') : localStorage.removeItem('otk.gate'); },
};

function vGate() {
  const dots = [0, 1, 2, 3, 4].map(i =>
    `<input class="gdot" data-i="${i}" type="password" inputmode="numeric" pattern="[0-9]*"
       maxlength="1" autocomplete="off" aria-label="Ký tự thứ ${i + 1}">`).join('');
  return `
  <div class="gate">
    <div class="gate-orbs"><i></i><i></i><i></i></div>
    <div class="gate-card" id="gcard">
      <div class="gate-lock" id="glock">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
          <rect x="4" y="10.5" width="16" height="10.5" rx="2.6"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/><circle cx="12" cy="15.7" r="1.35"/>
        </svg>
      </div>
      <h2>Trang cá nhân</h2>
      <p class="gate-sub">Nhập mã truy cập để mở kho đề</p>
      <div class="gate-pin" id="gpin">${dots}</div>
      <div class="gate-msg" id="gmsg">Mã gồm 5 chữ số</div>
    </div>
  </div>`;
}

function bindGate() {
  const pin = $('#gpin'), card = $('#gcard'), msg = $('#gmsg');
  if (!pin) return;
  const boxes = [...pin.querySelectorAll('.gdot')];
  const value = () => boxes.map(b => b.value).join('');
  const reset = () => { boxes.forEach(b => { b.value = ''; b.classList.remove('filled'); }); boxes[0].focus(); };

  const submit = () => {
    if (value() === GATE_PASS) {
      card.classList.add('ok');
      msg.textContent = 'Đã mở khóa — chào mừng bạn!';
      setTimeout(() => { gate.ok = true; render(); if (store.user) nav('home'); }, 620);
    } else {
      card.classList.add('bad');
      msg.textContent = 'Mã chưa đúng, thử lại nhé';
      setTimeout(() => { card.classList.remove('bad'); reset(); msg.textContent = 'Mã gồm 5 chữ số'; }, 620);
    }
  };

  boxes.forEach((box, i) => {
    box.addEventListener('input', () => {
      box.value = box.value.replace(/\D/g, '').slice(0, 1);
      box.classList.toggle('filled', !!box.value);
      if (box.value && i < boxes.length - 1) boxes[i + 1].focus();
      if (value().length === boxes.length) submit();
    });
    box.addEventListener('keydown', e => {
      if (e.key === 'Backspace' && !box.value && i > 0) { boxes[i - 1].focus(); boxes[i - 1].value = ''; boxes[i - 1].classList.remove('filled'); e.preventDefault(); }
      if (e.key === 'ArrowLeft' && i > 0) boxes[i - 1].focus();
      if (e.key === 'ArrowRight' && i < boxes.length - 1) boxes[i + 1].focus();
      if (e.key === 'Enter') submit();
    });
    box.addEventListener('paste', e => {
      const txt = (e.clipboardData || window.clipboardData).getData('text').replace(/\D/g, '');
      if (!txt) return;
      e.preventDefault();
      boxes.forEach((b, k) => { b.value = txt[k] || ''; b.classList.toggle('filled', !!b.value); });
      boxes[Math.min(txt.length, boxes.length - 1)].focus();
      if (value().length === boxes.length) submit();
    });
  });
  setTimeout(() => boxes[0].focus(), 60);
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
      <div class="login-foot">Ôn Thi Học Kì v1.10.0 • ${readyGrades().map(footLine).join('<br>')}</div>
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
  const gradeReady = subjectsOfGrade(state.grade).filter(s => s.ready);
  const vioExams = gradeReady.filter(s => s.id.startsWith('vio')).reduce((t, s) => t + s.exams.length, 0);
  const gradeQs = gradeReady.reduce((t, s) => t + s.exams.reduce((u, e) => u + e.questions.length, 0), 0);
  const firstSubj = gradeReady[0];
  let hero;
  if (state.grade === 2) {
    hero = `<div class="hero">
      <span class="tag">ÔN TẬP CẢ NĂM</span>
      <h2>Toán 2 — Ôn tập cả năm</h2>
      <div class="meta">⏱ ~${Math.round(EXAMS.reduce((t, e) => t + e.time, 0) / EXAMS.length)} phút/đề &nbsp;•&nbsp; 📚 ${EXAMS.length} đề &nbsp;•&nbsp; hoàn thành ${done}/${EXAMS.length}</div>
      <button class="btn" onclick="nav('subject', {subj:'toan'})">Ôn tập ngay ▶</button>
    </div>`;
  } else if (vioExams > 0) {
    hero = `<div class="hero">
      <span class="tag">ĐẤU TRƯỜNG VIOEDU</span>
      <h2>VioEdu Lớp ${state.grade} — Toán · Tiếng Việt · Toán Tiếng Anh</h2>
      <div class="meta">📚 ${vioExams} đề &nbsp;•&nbsp; 2024–2025 &amp; 2025–2026 &nbsp;•&nbsp; Sơ loại → Cấp Trường → Cấp Quận</div>
      <button class="btn" onclick="nav('subject', {subj:'vio${state.grade}-toan'})">Ôn tập ngay ▶</button>
    </div>`;
  } else {
    hero = `<div class="hero">
      <span class="tag">ÔN TẬP LỚP ${state.grade}</span>
      <h2>Lớp ${state.grade} — ${gradeReady.length} môn ôn tập</h2>
      <div class="meta">📚 ${gradeReady.reduce((t, s) => t + s.exams.length, 0)} đề &nbsp;•&nbsp; ${gradeQs} câu &nbsp;•&nbsp; bám chương trình GDPT 2018</div>
      ${firstSubj ? `<button class="btn" onclick="nav('subject', {subj:'${firstSubj.id}'})">Ôn tập ngay ▶</button>` : ''}
    </div>`;
  }

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
      ${allGrades().map(g => {
        const open = opened.includes(g);
        const cur = g === state.grade;
        return `<button class="pick ${cur ? 'active' : open ? '' : 'locked'}" ${open ? `onclick="setGrade(${g})"` : 'disabled'}>Lớp ${g}${open ? '' : ' 🔒'}</button>`;
      }).join('')}
    </div>

    <div class="sect-title">Số câu mỗi đề</div>
    ${(() => {
      /* Nói thẳng số câu khối này thật sự có. Trước đây chọn "25 câu" ở lớp 4 mà
         vào đề vẫn 10 câu — vì đề lớp 4 chỉ có 10 câu — dễ tưởng là lỗi. */
      const maxQ = maxQOfGrade(state.grade);
      if (alwaysFull(state.grade)) return `
    <div class="small muted" style="margin:-4px 0 14px">Đề khối ${state.grade} luôn làm <b>trọn ${maxQ} câu</b>: đề THCS viết theo ma trận nhận biết – thông hiểu – vận dụng – nâng cao, cắt bớt câu là hỏng cách đề phân loại học sinh.</div>`;
      /* Mức đã chọn lớn hơn đề dài nhất của khối thì thực tế là làm cả đề —
         tô sáng đúng cái đang có tác dụng, đừng tô một nút không dùng được. */
      const eff = state.qCount > maxQ ? 0 : state.qCount;
      return `
    <div class="chips">
      ${[0, ...QCOUNTS].map(n => {
        const over = n > maxQ;                 // khối này không có đề nào dài tới mức đó
        return `<button class="pick ${n === eff ? 'active' : ''} ${over ? 'locked' : ''}"
          ${over ? 'disabled' : `onclick="setQCount(${n})"`}>${n ? n + ' câu' : 'Cả đề'}</button>`;
      }).join('')}
    </div>
    <div class="small muted" style="margin:-4px 0 14px">Đề lớp ${state.grade} dài nhất <b>${maxQ} câu</b> nên các mức lớn hơn bị mờ đi. Chọn mức nhỏ hơn thì lấy đúng số câu đó trải đều khắp đề, thời gian rút theo tỉ lệ và điểm vẫn quy về thang 10; đề ngắn hơn mức đã chọn thì giữ nguyên cả đề.</div>`;
    })()}

    <div class="sect-title">Môn học — Lớp ${state.grade}</div>
    <div class="subj-grid">
      ${subjectsOfGrade(state.grade).map(s => s.ready
        ? `<button class="subj on" onclick="nav('subject', {subj:'${s.id}'})"><div class="ic">${s.icon}</div>${s.name}<span class="chip" style="font-size:11px;padding:3px 10px">${s.exams.length} đề</span></button>`
        : `<div class="subj off"><div class="ic">${s.icon}</div>${s.name}<span class="soon">Sắp có</span></div>`).join('')}
    </div>

    ${progCards}
  </div>`;
}

window.setQCount = (n) => {
  state.qCount = n;
  localStorage.setItem('otk.qcount', String(n));
  render();
};

window.setGrade = (g) => {
  state.grade = g;
  localStorage.setItem('otk.grade', String(g));
  render();
};

window.setSrc = (s) => { state.srcFilter = s; render(); window.scrollTo(0, 0); };

/* ================= SUBJECT (exam list) ================= */
function vSubject() {
  const sub = getSubject(state.subj) || SUBJECTS[0];
  const res = store.results;
  const grade = gradeOf(sub);
  const all = sub.exams;
  /* Môn Toán gộp có thể tới vài trăm đề. Cho lọc theo bộ đề gốc để danh sách
     ngắn lại và vẫn biết đề đến từ bộ nào. */
  const srcs = [...new Set(all.map(e => e._src).filter(Boolean))];
  const exams = state.srcFilter ? all.filter(e => e._src === state.srcFilter) : all;
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
    ${srcs.length > 1 ? `
    <div class="sect-title">Bộ đề</div>
    <div class="chips">
      <button class="pick ${state.srcFilter ? '' : 'active'}" onclick="setSrc('')">Tất cả (${all.length})</button>
      ${srcs.map(s => `<button class="pick ${state.srcFilter === s ? 'active' : ''}"
        onclick="setSrc('${esc(s).replace(/'/g, "\\'")}')">${esc(s)} (${all.filter(e => e._src === s).length})</button>`).join('')}
    </div>` : ''}
    <div class="sect-title">Danh sách đề thi${state.srcFilter ? ` — ${esc(state.srcFilter)}` : ''}</div>
    ${exams.map((e0, i) => {
      const e = trimExam(e0, qCountFor(sub));    // hiện đúng số câu · số phút bé sắp làm
      const r = res[e.id];
      const n = i + 1;
      return `
      <div class="card exam-item">
        <div class="head">
          <div class="ic">${n < 10 ? '0' + n : n}</div>
          <div>
            <div class="ttl">${e.title} — ${e0._src || sub.short}</div>
            <div class="meta">⏱ ${e.time} phút · ${e.questions.length} câu hỏi · thang điểm 10</div>
          </div>
          ${r ? `<div class="badge-score"><div class="s">${fmtScore(r.best)}</div><div class="t">điểm cao nhất</div></div>` : ''}
        </div>
        <div class="row">
          <button class="btn btn-primary" onclick="startExam(${e.id})">${r ? 'Làm lại ↻' : 'Bắt đầu làm bài ▶'}</button>
          ${r ? `<button class="btn btn-outline" onclick="reviewExam(${e.id})">Xem lại</button>` : ''}
          <button class="btn btn-ghost sq" title="In đề ra giấy A4 (PDF)" onclick="printExam(${e.id})">🖨</button>
        </div>
      </div>`;
    }).join('')}
  </div>`;
}

/* ================= EXAM ================= */
window.startExam = (id) => {
  const sub = subjectOfExam(id);
  const qn = qCountFor(sub);                 // khối 6+ luôn trọn đề, không cắt theo ô đã chọn
  const exam = trimExam(getExam(id), qn);
  if (sub) { state.subj = sub.id; state.grade = gradeOf(sub); }
  state.examId = id;
  state.examQn = qn;
  state.qIndex = 0;
  state.answers = {};
  state.matchSel = null;
  state.hintOpen = {};
  state.hintTxt = {};
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
  state.examQn = r.last.qn || 0;          // xem lại đúng những câu bé đã làm hôm đó
  state.qIndex = 0;
  state.answers = r.last.answers;
  state.hintOpen = {};
  state.hintTxt = r.last.hints || {};        // gợi ý đã xin lúc làm bài, xem lại vẫn thấy
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

/* ══════════════════ CHẤM BÀI — dùng chung cho mọi kiểu câu hỏi ═════════════
   q.type quyết định cách làm bài và cách lưu câu trả lời trong state.answers:
     (không có)  trắc nghiệm      → 'A' … 'E'
     'type'      gõ từ            → đúng chữ học sinh gõ, vd 'kitchen'
     'order'     ghép câu         → chỉ số thẻ từ theo thứ tự đã xếp, vd '2,0,1'
     'match'     nối ảnh với từ   → với mỗi ảnh là chỉ số từ đã nối, vd '2,0,3,1'
                                    ('-' = ảnh đó chưa nối)
   Mọi câu trả lời đều là CHUỖI nên phần lưu điểm, ô câu hỏi và màn kết quả
   không phải biết gì về kiểu bài.                                           */
const normText = (s) => String(s == null ? '' : s)
  .toLowerCase().replace(/[’‘`´]/g, "'").replace(/[.,!?;:"]/g, '')
  .replace(/\s+/g, ' ').trim();

const orderWords = (q, a) => String(a).split(',')
  .filter(k => k !== '' && k !== '-').map(k => q.tokens[Number(k)]).join(' ');

function isCorrect(q, a) {
  if (a == null || a === '') return false;
  if (q.type === 'type') return [q.ans, ...(q.alts || [])].some(t => normText(t) === normText(a));
  if (q.type === 'order') return normText(orderWords(q, a)) === normText(q.ans);
  return a === q.ans;
}

/* đáp án đúng, viết ra cho học sinh đọc lúc xem lại */
function ansText(q) {
  if (q.type === 'match') {
    return q.ans.split(',').map((k, i) => `${i + 1} → ${q.right[Number(k)]}`).join(' · ');
  }
  return q.ans;
}

/* câu trả lời của học sinh, viết ra cho dễ đọc */
function pickedText(q, a) {
  if (q.type === 'order') return `“${orderWords(q, a)}”`;
  if (q.type === 'match') {
    return a.split(',').map((k, i) => `${i + 1} → ${k === '-' ? '…' : q.right[Number(k)]}`).join(' · ');
  }
  if (q.type === 'type') return `“${a}”`;
  return a;
}

/* ── trắc nghiệm (kể cả "chọn từ đúng cho ảnh": phương án có thể là ảnh) ─── */
function vOpts(q, i, picked, review) {
  return `<div class="opts${q.optImgs ? ' opts-img' : ''}">
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
  </div>`;
}

/* ── gõ từ ────────────────────────────────────────────────────────────────
   Không render lại lúc gõ (sẽ mất con trỏ) — chỉ cập nhật thanh tiến độ.   */
function vType(q, i, picked, review) {
  const ok = isCorrect(q, picked);
  const cls = review ? (picked ? (ok ? 'tbox ok' : 'tbox bad') : 'tbox') : 'tbox';
  return `<div class="tinput">
    <input class="${cls}" type="text" value="${esc(picked || '')}" placeholder="Gõ câu trả lời rồi bấm Enter…"
      autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"
      ${review ? 'disabled' : ''} oninput="typeAt(${i}, this)"
      onkeydown="if(event.key==='Enter'){event.preventDefault();this.blur();}">
    ${q.hint && !review ? `<div class="thint">💡 Gợi ý: <b>${q.hint}</b></div>` : ''}
  </div>`;
}

/* ── ghép câu: bấm thẻ từ dưới để xếp lên dòng câu, bấm lại để trả về ───── */
function vOrder(q, i, picked, review) {
  const used = picked ? String(picked).split(',').filter(k => k !== '' && k !== '-').map(Number) : [];
  const line = used.length
    ? used.map((k, pos) => `<button class="chip in" ${review ? 'disabled' : ''} onclick="orderPop(${i}, ${pos})">${q.tokens[k]}</button>`).join('')
    : `<span class="ph">Bấm các thẻ từ bên dưới để xếp thành câu…</span>`;
  const pool = q.tokens.map((t, k) => used.includes(k)
    ? `<button class="chip gone" disabled>${t}</button>`
    : `<button class="chip" ${review ? 'disabled' : ''} onclick="orderPush(${i}, ${k})">${t}</button>`).join('');
  return `<div class="order">
    <div class="ordline${review ? (isCorrect(q, picked) ? ' ok' : ' bad') : ''}">${line}</div>
    <div class="ordpool">${pool}</div>
  </div>`;
}

/* ── nối ảnh với từ: bấm ảnh để chọn, rồi bấm từ để nối ──────────────────── */
function vMatch(q, i, picked, review) {
  const cur = picked ? String(picked).split(',') : q.left.map(() => '-');
  const sel = state.matchSel;
  const right = q.ans.split(',');
  const cells = q.left.map((src, li) => {
    const k = cur[li];
    let cls = 'mcell';
    if (!review && sel === li) cls += ' sel';
    if (review) cls += k !== '-' && k === right[li] ? ' ok' : ' bad';
    return `<button class="${cls}" ${review ? 'disabled' : ''} onclick="matchPickLeft(${i}, ${li})">
      <span class="mno">${li + 1}</span>
      <img src="${src}" alt="Ảnh ${li + 1}">
      <span class="mword">${k === '-' ? '<i>chưa nối</i>' : q.right[Number(k)]}</span>
    </button>`;
  }).join('');
  const words = q.right.map((w, ri) => {
    const taken = cur.includes(String(ri));
    return `<button class="chip${taken ? ' gone' : ''}" ${review || taken ? 'disabled' : ''}
      onclick="matchPickRight(${i}, ${ri})">${w}</button>`;
  }).join('');
  return `<div class="match">
    <div class="mgrid">${cells}</div>
    <div class="mwords">${words}</div>
    ${review ? '' : '<div class="mhelp">Bấm một <b>ảnh</b>, rồi bấm <b>từ</b> đúng ở dưới. Bấm lại ảnh đã nối để bỏ nối.</div>'}
  </div>`;
}

/* Ô gợi ý: lúc làm bài là cái nút, bấm mới mở; lúc xem lại thì nhắc lại gợi ý
   bé đã xin, để bố mẹ biết câu nào con còn phải vịn. */
function vHint(q, i, review) {
  if (review) {
    return state.hintTxt[i]
      ? `<div class="hint-txt was"><b>💡 Gợi ý em đã xin:</b> ${state.hintTxt[i]}</div>` : '';
  }
  if (!state.hintOpen[i]) {
    return `<div class="hintbox"><button class="hint-btn" onclick="showHint(${i})">💡 Em cần gợi ý</button></div>`;
  }
  return `<div class="hintbox">
      <div class="hint-txt">${state.hintTxt[i]
        ? `<b>💡 Gợi ý:</b> ${state.hintTxt[i]}`
        : '<b>💡</b> <span class="hint-wait">đang nghĩ giúp em…</span>'}</div>
    </div>`;
}

window.showHint = (i) => {
  if (state.mode === 'review' || state.hintOpen[i]) return;
  const exam = curExam();
  const q = exam.questions[i];
  state.hintOpen[i] = true;
  state.hintTxt[i] = AIHINT.ready(q);         // đã hỏi lần trước thì hiện ngay, khỏi chờ
  reRender();
  if (state.hintTxt[i]) return;
  const examId = state.examId;
  AIHINT.get(q, subjectOfExam(examId)).then(txt => {
    if (state.examId !== examId) return;      // bé đã sang đề khác thì thôi
    state.hintTxt[i] = txt;
    if (state.screen === 'exam') reRender();
  });
};

function vQcard(exam, i) {
  const q = exam.questions[i];
  const picked = state.answers[i];
  const review = state.mode === 'review';
  const imgs = q.imgs || (q.img ? [q.img] : []);
  const ok = isCorrect(q, picked);
  const body = q.type === 'type' ? vType(q, i, picked, review)
    : q.type === 'order' ? vOrder(q, i, picked, review)
      : q.type === 'match' ? vMatch(q, i, picked, review)
        : vOpts(q, i, picked, review);
  return `
    <div class="qcard" id="q-${i}">
      <div class="qhead">
        <span class="qnum">${q.name}</span>
        <span class="qpts">(${q.pts} điểm)</span>
        <span class="qsec">${q.sec}</span>
      </div>
      ${q.read ? `<div class="passage">${q.read}</div>` : ''}
      <div class="qtext">${q.text}</div>
      ${q.html || ''}
      ${imgs.map(src => `<img class="qimg" src="${src}" alt="Hình minh họa">`).join('')}
      ${body}
      ${vHint(q, i, review)}
      ${review ? `<div class="why"><b>Đáp án đúng: ${ansText(q)}.</b> ${q.why}
        ${picked ? (ok ? ' <b style="color:var(--secondary)">✓ Em làm đúng!</b>' : ` <b style="color:var(--error)">✗ Em đã trả lời ${pickedText(q, picked)}.</b>`) : ' <b style="color:var(--tertiary)">Em chưa trả lời câu này.</b>'}</div>` : ''}
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
  </div>`;
}

function vExam() {
  const exam = curExam();
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
  ${state.showNav ? vQnav(exam) : ''}`;
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
          if (review) cls += isCorrect(q, state.answers[i]) ? ' ok' : ' bad';
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

/* render() giữ nguyên vị trí cuộn — dùng cho các kiểu bài bấm nhiều lần */
function reRender() {
  const y = window.scrollY;
  render();
  window.scrollTo(0, y);
}

/* Gõ từ: KHÔNG render lại (mất con trỏ nhập) — chỉ đồng bộ thanh tiến độ. */
window.typeAt = (i, el) => {
  if (state.mode === 'review') return;
  const v = el.value;
  if (v.trim()) state.answers[i] = v; else delete state.answers[i];
  syncProgress();
};

function syncProgress() {
  const exam = curExam();
  if (!exam) return;
  const n = exam.questions.length;
  const answered = Object.keys(state.answers).length;
  const pct = Math.round(answered / n * 100);
  const fill = $('.exam-top .fill');
  if (fill) fill.style.width = pct + '%';
  const txt = document.querySelectorAll('.exam-top .prog-txt');
  if (txt[0] && isWide()) txt[0].innerHTML = `Đã làm <b>${answered}</b>/${n}`;
  if (txt[1]) txt[1].textContent = pct + '%';
}

/* Ghép câu */
window.orderPush = (i, k) => {
  if (state.mode === 'review') return;
  const cur = state.answers[i] ? String(state.answers[i]).split(',') : [];
  if (cur.includes(String(k))) return;
  cur.push(String(k));
  state.answers[i] = cur.join(',');
  reRender();
};
window.orderPop = (i, pos) => {
  if (state.mode === 'review') return;
  const cur = String(state.answers[i] || '').split(',').filter(Boolean);
  cur.splice(pos, 1);
  if (cur.length) state.answers[i] = cur.join(','); else delete state.answers[i];
  reRender();
};

/* Nối ảnh với từ */
function matchCur(q, i) {
  return state.answers[i] ? String(state.answers[i]).split(',') : q.left.map(() => '-');
}
window.matchPickLeft = (i, li) => {
  if (state.mode === 'review') return;
  const q = curExam().questions[i];
  const cur = matchCur(q, i);
  if (cur[li] !== '-') {            // ảnh đã nối: bấm lại để bỏ nối
    cur[li] = '-';
    state.matchSel = li;
    state.answers[i] = cur.join(',');
    if (cur.every(k => k === '-')) delete state.answers[i];
  } else {
    state.matchSel = state.matchSel === li ? null : li;
  }
  reRender();
};
window.matchPickRight = (i, ri) => {
  if (state.mode === 'review') return;
  const q = curExam().questions[i];
  const cur = matchCur(q, i);
  if (cur.includes(String(ri))) return;                 // từ này đã nối cho ảnh khác
  let li = state.matchSel;
  if (li == null || cur[li] !== '-') li = cur.indexOf('-');   // chưa chọn ảnh: nối cho ảnh trống đầu tiên
  if (li < 0) return;
  cur[li] = String(ri);
  state.answers[i] = cur.join(',');
  state.matchSel = cur.indexOf('-') >= 0 ? cur.indexOf('-') : null;
  reRender();
};
window.go = (d) => {
  const exam = curExam();
  state.qIndex = Math.min(exam.questions.length - 1, Math.max(0, state.qIndex + d));
  state.matchSel = null;
  render(); window.scrollTo(0, 0);
};
window.jump = (i) => {
  state.qIndex = i; state.showNav = false; state.matchSel = null; render();
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
  const exam = curExam();
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
  if (score >= 9) return { tier: 'xs', label: 'XUẤT SẮC', ic: 'trophy',
    head: 'Xuất sắc!', msg: 'Gần như trọn vẹn! Em nắm rất chắc phần này rồi.' };
  if (score >= 7) return { tier: 'gi', label: 'GIỎI', ic: 'star',
    head: 'Làm tốt lắm!', msg: 'Chỉ còn vài câu nữa là hoàn hảo. Xem lời giải để gỡ nốt nhé!' };
  if (score >= 5) return { tier: 'dt', label: 'ĐẠT', ic: 'sparkle',
    head: 'Em đã vượt qua!', msg: 'Đọc kỹ lời giải mấy câu sai, lần sau điểm sẽ nhảy vọt.' };
  return { tier: 'cg', label: 'CẦN CỐ GẮNG', ic: 'flame',
    head: 'Đừng bỏ cuộc nha!', msg: 'Xem lời giải từng câu rồi làm lại — ai cũng bắt đầu như vậy thôi.' };
}

/* Popup "Đang chấm bài…" — cho học sinh một nhịp chờ nhỏ trước khi thấy điểm */
function vGrading() {
  return `
  <div class="modal-back grading">
    ${ART.defs()}
    <div class="grade-box">
      <div class="grade-mascot">${ART.mascot('run', { size: 104, who: state.who })}</div>
      <h3>Đang chấm bài<span class="dots"><i>.</i><i>.</i><i>.</i></span></h3>
      <p class="muted small">Cô giáo đang soát từng câu của em…</p>
    </div>
  </div>`;
}

window.doSubmit = (auto = false) => {
  if (state.grading) return;              // chặn bấm 2 lần / hết giờ trùng lúc bấm nộp
  state.grading = true;
  state.who = ART.pick(state.lastWho);     // mỗi lần nộp bài lại gặp một bạn khác
  state.lastWho = state.who;
  clearInterval(state.timerInt);
  state.modal = vGrading();
  render();
  setTimeout(() => finishSubmit(auto), 1000);
};

function finishSubmit(auto) {
  const exam = curExam();
  let score = 0, correct = 0, wrong = 0, skip = 0;
  exam.questions.forEach((q, i) => {
    const a = state.answers[i];
    if (!a) skip++;
    else if (isCorrect(q, a)) { correct++; score += q.pts; }
    else wrong++;
  });
  // làm ít câu hơn thì quy điểm về đúng thang của đề gốc (thường là thang 10)
  const full = getExam(state.examId);
  if (exam.questions.length < full.questions.length) {
    const part = exam.questions.reduce((t, q) => t + q.pts, 0);
    const whole = full.questions.reduce((t, q) => t + q.pts, 0);
    if (part > 0) score = score / part * whole;
  }
  score = Math.round(score * 100) / 100;
  const prevRec = store.results[exam.id];
  const prevBest = (prevRec || {}).best || 0;
  const hints = { ...state.hintTxt };                               // để xem lại vẫn thấy gợi ý đã xin
  const hinted = Object.keys(state.hintOpen).map(Number).sort((a, b) => a - b);
  const res = { score, correct, wrong, skip, hinted, hints, qn: state.examQn, answers: { ...state.answers }, date: new Date().toISOString(), auto };
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

/* ================= POPUP ăn mừng =================
   Cả màn ăn mừng dùng bộ hình gốc trong art.js: Cáo Bo + thế giới học vui.
   Mỗi mức điểm là một tư thế khác nhau — để bé thấy Bo đang vui CÙNG mình. */
const CELE_POSE = { xs: 'cheer', gi: 'present', dt: 'highfive', cg: 'support' };

function vCelebrate(exam, r) {
  const c = state.celebrate;
  const rk = rankOf(r.score);
  const n = exam.questions.length;
  const pose = c.auto ? 'wave' : (c.newBest ? 'medal' : (CELE_POSE[rk.tier] || 'cheer'));
  const cf = rk.tier === 'cg' ? '' : ART.confetti(rk.tier === 'xs' ? 46 : 30);
  const badge = c.newBest ? ART.badge('record', 'Kỷ lục mới của em!')
    : c.first ? ART.badge('first', 'Lần đầu em hoàn thành đề này') : '';
  return `
  <div class="cele-back" onclick="closeCelebrate()">
    ${ART.defs()}
    ${cf}
    <div class="cele t-${rk.tier}" onclick="event.stopPropagation()">
      <div class="cele-cap">
        ${ART.scene()}
        ${ART.micro()}
        <div class="cele-hero">
          <div class="hero-wrap">${ART.mascot(pose, { size: 120, surprise: !c.auto, who: state.who })}</div>
          ${c.newBest ? `<span class="mi mi-crown">${ART.icon('crown', { size: 40 })}</span>` : ''}
        </div>
        <h3>${c.auto ? 'Hết giờ rồi!' : rk.head}</h3>
        <div class="cele-sub">${esc(exam.title)} — ${esc((subjectOfExam(exam.id) || {}).short || '')}</div>
        <div><span class="cele-who">${esc(ART.nameOf(state.who))} ăn mừng cùng em</span></div>
        <span class="art-peek">${ART.icon('bunny', { size: 44, mood: 'smile' })}</span>
        <span class="art-drop">${ART.icon('bunny', { size: 30, color: '#ffe0a8', mood: 'wow' })}</span>
      </div>
      <div class="cele-ring">
        <div class="art-orbit">${ART.icon('star', { size: 26, mood: 'smile' })}</div>
        <svg width="132" height="132" viewBox="0 0 132 132">
          <circle cx="66" cy="66" r="56" fill="none" stroke="var(--surface-high)" stroke-width="11"/>
          <circle id="cele-arc" cx="66" cy="66" r="56" fill="none" stroke="currentColor" stroke-width="11"
            stroke-linecap="round" stroke-dasharray="${(2 * Math.PI * 56).toFixed(1)}"
            stroke-dashoffset="${(2 * Math.PI * 56).toFixed(1)}"
            data-target="${(2 * Math.PI * 56 * (1 - r.score / 10)).toFixed(1)}"/>
        </svg>
        <div class="v"><div class="n mono" id="cele-score" data-to="${r.score}">0</div><div class="d">/ 10 điểm</div></div>
      </div>
      <span class="pass ${r.score >= 5 ? 'ok' : 'no'}">${ART.icon(rk.ic, { size: 20 })}${rk.label}</span>
      ${badge}
      <p class="cele-msg">${rk.msg}</p>
      <div class="cele-stats">
        <div><div class="n g">${r.correct}</div><div class="t">ĐÚNG</div></div>
        <div><div class="n r">${r.wrong}</div><div class="t">SAI</div></div>
        <div><div class="n o">${r.skip}</div><div class="t">BỎ QUA</div></div>
      </div>
      <div class="cele-acts">
        <button class="btn btn-primary" onclick="state.celebrate=null;reviewExam(${exam.id})">${ART.icon('book', { size: 20 })}Xem lời giải chi tiết</button>
        <button class="btn btn-ghost" onclick="closeCelebrate()">Xem bảng kết quả (${n} câu)</button>
      </div>
    </div>
  </div>`;
}
window.closeCelebrate = () => { state.celebrate = null; render(); };

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
  const exam = curExam();
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
      ${(r.hinted || []).length
        ? `<div class="hint-sum">💡 Em đã mở gợi ý ở <b>${r.hinted.length}</b> câu — xem lại mấy câu đó thêm một lần nữa nhé!</div>`
        : ''}
    </div>

    <button class="btn btn-primary" onclick="reviewExam(${exam.id})">📖 Xem lời giải chi tiết</button>
    <button class="btn btn-tonal" id="btn-share" onclick="shareResult()">📤 Chia sẻ kết quả</button>
    <button class="btn btn-tonal" onclick="printExam(${exam.id})">🖨 In đề ra giấy A4 (PDF)</button>
    <div class="row">
      <button class="btn btn-tonal" style="flex:1" onclick="startExam(${exam.id})">↻ Làm lại</button>
      <button class="btn btn-ghost" style="flex:1" onclick="nav('home')">🏠 Trang chủ</button>
    </div>

    <div class="sect-title">Danh sách câu hỏi</div>
    <div class="res-list">
      ${exam.questions.map((q, i) => {
        const a = r.answers[i];
        const ok = isCorrect(q, a);
        const cls = !a ? 'skip' : ok ? 'ok' : 'bad';
        const st = !a ? '⊘ Bỏ qua' : ok ? '✓ Chính xác' : `✗ Sai — em trả lời ${esc(cut(plain(pickedText(q, a)), 40))}, đáp án đúng ${esc(cut(plain(ansText(q)), 40))}`;
        return `<button class="res-item ${cls}" onclick="openReviewAt(${i})">
          <div class="idx">${String(i + 1).padStart(2, '0')}</div>
          <div class="tx"><div class="tt">${(r.hinted || []).includes(i) ? '💡 ' : ''}${q.name} · ${esc(cut(plain(q.text), 60))}</div><div class="st ${cls}">${st}</div></div>
          <div class="arr">›</div>
        </button>`;
      }).join('')}
    </div>
  </div>
  ${state.celebrate ? vCelebrate(exam, r) : ''}`;
}
window.shareResult = async () => {
  const exam = curExam();
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
/* Công thức toán viết trong $...$ được KaTeX vẽ lại thành kí hiệu thật (phân số
   có gạch ngang, căn có dấu căn, mũ đúng cỡ) — nét ở mọi mức phóng to vì là
   văn bản + SVG chứ không phải ảnh. Thiếu mạng thì chữ gốc vẫn đọc được. */
function typesetMath(el) {
  if (typeof renderMathInElement !== 'function') return;
  try {
    renderMathInElement(el, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
      ],
      throwOnError: false,
      ignoredTags: ['script', 'noscript', 'style', 'textarea', 'option'],
    });
  } catch { /* có lỗi cú pháp thì giữ nguyên chữ gốc, không chặn giao diện */ }
}

function render() {
  if (!gate.ok) { app.innerHTML = vGate(); bindGate(); return; }
  let html = '';
  switch (state.screen) {
    case 'login': html = vLogin(); break;
    case 'home': html = vHome(); break;
    case 'subject': html = vSubject(); break;
    case 'exam': html = vExam(); break;
    case 'result': html = vResult(); break;
  }
  // hộp thoại (thoát · nộp bài · in đề) nổi trên mọi màn hình, không riêng màn làm bài
  app.innerHTML = html + (state.modal || '');
  typesetMath(app);
  if (state.celebrate) animCelebrate();
}
window.nav = nav;
window.state = state;

/* đổi kích thước cửa sổ qua ngưỡng desktop/mobile -> vẽ lại layout bài thi */
window.matchMedia('(min-width: 900px)').addEventListener('change', () => render());

/* KaTeX nạp kiểu defer nên chạy sau lần vẽ đầu — nạp xong thì vẽ lại công thức. */
window.__katexReady = () => typesetMath(app);

mergeMathBanks();   // phải chạy trước lần vẽ đầu, sau khi mọi data-*.js đã nạp xong
render();
if (gate.ok && store.user) nav('home');
