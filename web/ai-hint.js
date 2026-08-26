/* ai-hint.js — lấy một câu gợi ý cho câu hỏi bé đang bí.
   Hỏng hoặc chậm thì rơi về gợi ý sinh sẵn trong data-hints.js, nên app luôn
   trả lời được kể cả khi mất mạng. */
'use strict';

const AIHINT = (() => {
  const KEY_B64 = 'QVEuQWI4Uk42SS10TXlHcjB6UHB3VG5ybGlfVmlxajA5UEtGMWszbHZLRFU3eUNVM0RXYnc=';
  const MODEL = 'gemini-3.5-flash-lite';
  const TIMEOUT = 7000;
  const AI_FIRST = true;
  const FALLBACK = 'Em đọc lại đề thật chậm và gạch chân những con số, những chữ quan trọng xem sao nhé.';
  const FALLBACK_EN = 'Read the question again slowly and underline the important words and numbers.';

  const key = () => { try { return atob(KEY_B64); } catch { return ''; } };
  const isEnglish = (sub) => /tanh|ta-tuan/.test((sub && sub.id) || '');

  /* nhớ lại gợi ý đã hỏi — vừa hiện ngay lần sau, vừa đỡ tốn lượt gọi */
  const slot = (q) => {
    let h = 0;
    const s = String(q.text || '') + '|' + String(q.ans || '');
    for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
    return 'otk.hint.' + (h >>> 0).toString(36);
  };
  const remembered = (q) => { try { return localStorage.getItem(slot(q)) || null; } catch { return null; } };
  const remember = (q, t) => { try { localStorage.setItem(slot(q), t); } catch { /* hết chỗ thì thôi */ } };

  const plain = (s) => String(s == null ? '' : s)
    .replace(/<\/(td|th)>\s*<(td|th)[^>]*>/gi, ' | ').replace(/<\/tr>/gi, ' ; ')
    .replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ').trim();

  function promptFor(q, sub) {
    const g = (sub && sub.grade) || 2;
    const info = { de: plain(q.text), dap_an: String(q.ans) };
    if (q.read) info.doan_van = plain(q.read);
    if (q.img || q.imgs) info.co_hinh = 'câu này có hình vẽ, học sinh nhìn thấy hình';
    if (q.opts) info.phuong_an = q.opts.map(o => `${o.k}. ${o.img ? '[ảnh]' : plain(o.t)}`).join('  ');
    if (q.why) info.giai_thich = plain(q.why);

    return isEnglish(sub)
      ? `A grade ${g} pupil is stuck on this question and asked for a hint. Write ONE hint sentence in ENGLISH ONLY (not a single Vietnamese word), 25 words max. Never reveal the answer: no final result, no option letter, never write the correct word. Point only at the first step or the detail to notice. If there is a picture, tell the pupil to look at it. Plain sentence, no markdown. Reply with the hint sentence and nothing else.\n\n${JSON.stringify(info)}`
      : `Một học sinh lớp ${g} đang bí câu này và vừa bấm nút xin gợi ý. Viết ĐÚNG MỘT câu gợi ý tiếng Việt, tối đa 25 từ, gọi học sinh là "em". TUYỆT ĐỐI không lộ đáp án: không nêu kết quả cuối cùng, không nhắc chữ cái phương án, không viết ra từ trả lời đúng. Chỉ nhắc bước đầu tiên nên làm hoặc chi tiết cần để ý. Câu có hình thì bảo em nhìn kĩ hình. Không markdown. Chỉ trả lời đúng câu gợi ý, không thêm gì khác.\n\n${JSON.stringify(info)}`;
  }

  /* dọn: bỏ markdown, và nếu lỡ lộ đáp án thì coi như hỏng để rơi về gợi ý sinh sẵn */
  function clean(txt, q, sub) {
    let h = String(txt || '').replace(/\s+/g, ' ').trim()
      .replace(/^(Gợi ý|Hint)\s*[:：]\s*/i, '').replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/[*_`#]/g, '');
    if (!h || h.length > 220) return null;
    if (isEnglish(sub) && /[àáảãạăâđèéẹêìíịòóọôơùúụưỳýỵ]/i.test(h)) return null;
    if (/\b(đáp án|chọn|answer|option)\b[^.]{0,12}\b[A-E]\b/i.test(h)) return null;
    const opt = (q.opts || []).find(o => o.k === q.ans);
    if (opt && !opt.img) {
      const t = plain(opt.t);
      if (t.length >= 3 && !plain(q.text).toLowerCase().includes(t.toLowerCase())
        && new RegExp(`(^|[^\\p{L}\\p{N}])${t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}($|[^\\p{L}\\p{N}])`, 'iu').test(h)) return null;
    }
    return h;
  }

  async function ask(q, sub) {
    const k = key();
    if (!k || navigator.onLine === false) return null;
    const ctl = new AbortController();
    const stop = setTimeout(() => ctl.abort(), TIMEOUT);
    try {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`, {
        method: 'POST',
        headers: { 'x-goog-api-key': k, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: promptFor(q, sub) }] }],
          generationConfig: { temperature: 0.8, maxOutputTokens: 2048 },
        }),
        signal: ctl.signal,
      });
      if (!res.ok) return null;                    // hết lượt / key bị khoá → dùng gợi ý sinh sẵn
      const j = await res.json();
      const txt = ((j.candidates || [])[0]?.content?.parts || []).map(p => p.text).filter(Boolean).join(' ');
      return clean(txt, q, sub);
    } catch {
      return null;                                 // mất mạng / quá 7 giây
    } finally {
      clearTimeout(stop);
    }
  }

  return {
    /* Có sẵn trong máy thì trả về ngay (đồng bộ) — để nút bấm phát là hiện luôn,
       khỏi nháy chữ "đang nghĩ". */
    ready(q) {
      return remembered(q) || (AI_FIRST ? null : q.hint || null);
    },
    async get(q, sub) {
      const now = this.ready(q);
      if (now) return now;
      const ai = await ask(q, sub);
      if (ai) { remember(q, ai); return ai; }
      return q.hint || (isEnglish(sub) ? FALLBACK_EN : FALLBACK);
    },
  };
})();
