/* ═══════════════ IN ĐỀ RA GIẤY A4 — làm bài offline ═══════════════
   Dựng lại một đề thành trang A4 rồi gọi window.print(): trên máy tính chọn
   "Lưu thành PDF", trên điện thoại chọn "Lưu dưới dạng PDF" là có file mang đi in.

   Bản in gồm: đầu đề (họ tên · lớp · ngày · ô điểm) → phiếu tô đáp án →
   toàn bộ câu hỏi → trang đáp án & lời giải riêng (bố mẹ giữ, gấp lại là xong).

   Ba tuỳ chọn được nhớ trong localStorage: phiếu tô đáp án · chỗ trống làm bài ·
   trang đáp án. Kiểu chữ / khổ giấy nằm trong web/print.css.                   */
'use strict';

(() => {
  const KEY = 'otk.printopts';
  const DEF = { sheet: true, work: false, key: true };

  const readOpts = () => {
    try { return Object.assign({}, DEF, JSON.parse(localStorage.getItem(KEY) || '{}')); }
    catch { return Object.assign({}, DEF); }
  };
  const saveOpts = (o) => { try { localStorage.setItem(KEY, JSON.stringify(o)); } catch {} };

  const root = () => {
    let el = document.getElementById('printroot');
    if (!el) { el = document.createElement('div'); el.id = 'printroot'; document.body.appendChild(el); }
    return el;
  };

  /* Câu trắc nghiệm mới có ô tô đáp án; gõ từ / ghép câu / nối ảnh thì để dòng kẻ trống. */
  const isMcq = (q) => !q.type && Array.isArray(q.opts) && q.opts.length > 0;
  /* Phiếu trả lời chỉ cần con số: "Câu 7" / "Question 7" → "7" */
  const shortName = (q, i) => String(q.name || '').replace(/^\s*(c[âa]u|question|bài|q)\s*/i, '').trim() || String(i + 1);
  const LETTERS = 'abcdefghijklmn';

  /* Đề tiếng Anh không kèm tiếng Việt (xem CLAUDE.md) — nhãn ngay cạnh chỗ làm bài
     cũng phải là tiếng Anh; phần đầu trang (họ tên · lớp · ô điểm) vẫn để tiếng Việt
     vì đó là chỗ cho bố mẹ và thầy cô ghi. */
  const isEn = (sub) => /ti[eế]ng anh|english/i.test(sub.name || '');
  const VI = { ans: 'Trả lời:', sent: 'Câu đúng:', words: 'Từ để nối:', hint: 'Gợi ý:', pts: 'điểm',
    sheet: 'PHIẾU TRẢ LỜI', sheetNote: 'khoanh tròn chữ cái em chọn; câu tự luận thì viết vào dòng kẻ',
    key: 'ĐÁP ÁN &amp; HƯỚNG DẪN' };
  const EN = { ans: 'Answer:', sent: 'Sentence:', words: 'Words:', hint: 'Hint:', pts: 'pt',
    sheet: 'ANSWER SHEET', sheetNote: 'circle the letter you choose; write your answer on the line',
    key: 'ANSWER KEY' };

  /* ── phần làm bài của từng kiểu câu hỏi ─────────────────────────────── */
  function vBody(q, L) {
    if (q.type === 'type') {
      return `<div class="p-fill"><span class="p-lbl">${L.ans}</span><span class="p-line"></span></div>`
        + (q.hint ? `<div class="p-tip">${L.hint} ${q.hint}</div>` : '');
    }
    if (q.type === 'order') {
      return `<div class="p-toks">${q.tokens.map(t => `<span class="p-tok">${t}</span>`).join('')}</div>
        <div class="p-fill"><span class="p-lbl">${L.sent}</span><span class="p-line"></span></div>`;
    }
    if (q.type === 'match') {
      return `<div class="p-mgrid">${q.left.map((src, li) =>
          `<div class="p-mcell"><img src="${src}" alt=""><div class="n">${li + 1}</div></div>`).join('')}</div>
        <div class="p-mwords"><b>${L.words}</b> ${q.right.map((w, ri) => `${LETTERS[ri]}. ${w}`).join(' · ')}</div>
        <div class="p-mans">${q.left.map((_, li) => `<span>${li + 1} → <i></i></span>`).join('')}</div>`;
    }
    if (!Array.isArray(q.opts) || !q.opts.length) {
      return `<div class="p-fill"><span class="p-lbl">${L.ans}</span><span class="p-line"></span></div>`;
    }
    if (q.optImgs || q.opts.some(x => x.img)) {
      return `<div class="p-opts imgs">${q.opts.map(x =>
        `<div class="p-o"><span class="p-k">${x.k}.</span>${x.img ? `<img src="${x.img}" alt="">` : `<span>${x.t}</span>`}</div>`).join('')}</div>`;
    }
    // phương án ngắn thì xếp 2 cột cho đỡ tốn giấy
    const two = q.opts.every(x => plain(x.t).length <= 26);
    return `<div class="p-opts${two ? ' two' : ''}">${q.opts.map(x =>
      `<div class="p-o"><span class="p-k">${x.k}.</span><span>${x.t}</span></div>`).join('')}</div>`;
  }

  /* ── một câu hỏi ────────────────────────────────────────────────────── */
  function vQ(q, i, o, tag, showRead) {
    const imgs = q.imgs || (q.img ? [q.img] : []);
    const work = o.work && !q.type && !imgs.length
      ? `<div class="p-work"><div class="l"></div><div class="l"></div></div>` : '';
    return `<div class="p-q">
      ${showRead ? `<div class="p-read">${q.read}</div>` : ''}
      <div class="p-qt"><span class="p-name">${q.name || 'Câu ' + (i + 1)}.</span> ${q.text}
        <span class="p-pts">(${q.pts} ${o.L.pts}${tag ? ' · ' + tag : ''})</span></div>
      ${q.html || ''}
      ${imgs.map(src => `<img class="p-img" src="${src}" alt="">`).join('')}
      ${vBody(q, o.L)}
      ${work}
    </div>`;
  }

  /* ── phiếu tô đáp án ────────────────────────────────────────────────── */
  function vSheet(exam, L) {
    const items = exam.questions.map((q, i) => `<div class="p-as-item"><span class="n">${shortName(q, i)}.</span>${
      isMcq(q) ? q.opts.map(x => `<span class="c">${x.k}</span>`).join('') : '<span class="w"></span>'
    }</div>`).join('');
    return `<div class="p-as">
      <h3>${L.sheet} <span class="p-as-note">— ${L.sheetNote}</span></h3>
      <div class="p-as-grid">${items}</div>
    </div>`;
  }

  /* ── trang đáp án & lời giải (trang riêng, bố mẹ giữ) ───────────────── */
  function vKey(exam, sub, L) {
    const row = exam.questions.map((q, i) =>
      `<span><b>${shortName(q, i)}.</b> ${esc(plain(ansText(q)))}</span>`).join('');
    const why = exam.questions.map((q, i) =>
      `<div class="p-why"><span class="n">${q.name || 'Câu ' + (i + 1)}.</span> <b>${esc(plain(ansText(q)))}</b> — ${q.why || ''}</div>`).join('');
    return `<div class="p-key">
      <h2>${L.key}</h2>
      <div class="p-keysub">${esc(plain(exam.title))} — ${esc(sub.name || '')}</div>
      <div class="p-keyrow">${row}</div>
      ${why}
    </div>`;
  }

  /* ── cả tờ đề ───────────────────────────────────────────────────────── */
  function vDoc(exam, o) {
    const sub = subjectOfExam(exam.id) || {};
    const grade = sub.grade || 2;
    o = Object.assign({}, o, { L: isEn(sub) ? EN : VI });
    /* Nhiều bộ đề đặt q.sec khác nhau ở từng câu — kẻ một thanh tiêu đề cho mỗi câu
       thì tờ đề rối mắt. Chỉ kẻ thanh khi chủ đề đó gom từ 2 câu liền nhau trở lên,
       còn lại ghi nhỏ cạnh số điểm. */
    const secs = exam.questions.map(q => String(q.sec || '').trim());
    const grouped = secs.map((s, i) => !!s && (s === secs[i - 1] || s === secs[i + 1]));
    const qs = exam.questions.map((q, i) => {
      const head = grouped[i] && secs[i] !== secs[i - 1] ? `<div class="p-sec">${secs[i]}</div>` : '';
      // đoạn văn đọc hiểu dùng chung cho nhiều câu liền nhau: chỉ in một lần
      const showRead = !!q.read && q.read !== (exam.questions[i - 1] || {}).read;
      return head + vQ(q, i, o, grouped[i] ? '' : secs[i], showRead);
    }).join('');
    const dot = (w) => `<span class="p-dot" style="min-width:${w}"></span>`;
    return `<div class="p-doc">
      <div class="p-head">
        <div class="p-brand">Ôn Thi Học Kì · đề ôn luyện in ra giấy</div>
        <div class="p-title">${esc(plain(exam.title))}</div>
        <div class="p-sub">Môn: <b>${esc(sub.name || '')}</b> · Lớp ${grade} · Thời gian làm bài: <b>${exam.time} phút</b> · ${exam.questions.length} câu · thang điểm 10</div>
        <div class="p-idbox">
          <div class="p-fields">
            Họ và tên: ${dot('60mm')} Lớp: ${dot('20mm')}<br>
            Trường: ${dot('60mm')} Ngày ${dot('8mm')}/${dot('8mm')}/ 20${dot('8mm')}
          </div>
          <div class="p-score"><span>ĐIỂM</span></div>
        </div>
      </div>
      ${o.sheet ? vSheet(exam, o.L) : ''}
      ${qs}
      <div class="p-foot">Ôn Thi Học Kì — https://mjnamjkaze.github.io/ThiHocKi/ · làm xong nhớ nhập lại đáp án trên web để được chấm điểm nhé!</div>
      ${o.key ? vKey(exam, sub, o.L) : ''}
    </div>`;
  }

  /* Đợi hình vẽ tải xong rồi mới in — đề mở lần đầu thì ảnh chưa nằm sẵn trong
     bộ nhớ, in ngay sẽ ra ô trống. Quá 6 giây thì cứ in, không bắt chờ mãi. */
  function waitImgs(el, ms = 6000) {
    const imgs = [...el.querySelectorAll('img')].filter(im => !im.complete);
    if (!imgs.length) return Promise.resolve();
    return Promise.race([
      Promise.all(imgs.map(im => new Promise(res => {
        im.addEventListener('load', res, { once: true });
        im.addEventListener('error', res, { once: true });
      }))),
      new Promise(res => setTimeout(res, ms)),
    ]);
  }

  window.printExam = (id) => {
    const exam = getExam(id);
    if (!exam) return;
    const o = readOpts();
    const ck = (k, t, d) => `<label><input type="checkbox" id="pk-${k}" ${o[k] ? 'checked' : ''}>
      <span><span class="t">${t}</span><span class="d">${d}</span></span></label>`;
    state.modal = `
    <div class="modal-back" onclick="closeModal()">
      <div class="modal" onclick="event.stopPropagation()">
        <div class="modal-ic ok">🖨</div>
        <h3>In đề ra giấy A4</h3>
        <p class="muted small">${esc(plain(exam.title))} · ${exam.questions.length} câu<br>
          Trong hộp thoại in, chọn máy in <b>“Lưu thành PDF”</b> nếu muốn giữ file để in sau.</p>
        <div class="print-opts">
          ${ck('sheet', 'Phiếu trả lời ở đầu đề', 'Ô tròn A · B · C · D để bé khoanh, dễ chấm')}
          ${ck('work', 'Chừa chỗ trống làm bài', 'Hai dòng kẻ dưới mỗi câu không có hình')}
          ${ck('key', 'Trang đáp án & lời giải', 'In ở trang riêng cuối cùng, bố mẹ giữ')}
        </div>
        <div class="row">
          <button class="btn btn-ghost" onclick="closeModal()">Huỷ</button>
          <button class="btn btn-primary" onclick="doPrint(${id})">In / Lưu PDF 🖨</button>
        </div>
      </div>
    </div>`;
    render();
  };

  window.doPrint = (id) => {
    const exam = getExam(id);
    if (!exam) return;
    const o = {};
    for (const k of Object.keys(DEF)) {
      const el = document.getElementById('pk-' + k);
      o[k] = el ? el.checked : DEF[k];
    }
    saveOpts(o);
    const el = root();
    el.innerHTML = vDoc(exam, o);
    state.modal = `
    <div class="modal-back">
      <div class="modal">
        <div class="modal-ic ok">🖨</div>
        <h3>Đang chuẩn bị bản in…</h3>
        <p class="muted small">Chờ tải xong hình vẽ trong đề một chút nhé.</p>
      </div>
    </div>`;
    render();
    waitImgs(el).then(() => {
      state.modal = null;
      render();
      window.print();
    });
  };

  // in xong thì dọn, khỏi giữ cả trăm tấm hình trong bộ nhớ
  window.addEventListener('afterprint', () => {
    const el = document.getElementById('printroot');
    if (el) el.innerHTML = '';
  });
})();
