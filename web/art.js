/* ============================================================================
   ART — bộ minh hoạ GỐC của "Lớp Học Vui" (không dùng ảnh stock / emoji)
   Toàn bộ là SVG vẽ tay bằng code, cùng một ngôn ngữ hình: bo tròn mập mạp,
   viền dày liền nét, mặt biểu cảm, tỉ lệ hơi cường điệu, màu ấm & vui.

   12 người bạn dùng CHUNG một bộ xương và CHUNG 10 tư thế — khác nhau ở
   tai · đuôi · hoa văn · mũi · màu lông. Muốn thêm bạn mới: thêm 1 dòng
   trong bảng CREW, mọi tư thế và hoạt hình có sẵn dùng lại được ngay.

   API (dùng lại được cho: nộp bài, xong bài học, thử thách ngày,
        mở huy hiệu, chuỗi ngày học, lên cấp…):
     ART.defs()              → gradient dùng chung, nhúng 1 lần vào DOM
     ART.mascot(pose, opt)   → 1 trong 12 bạn (opt.who), 10 tư thế
     ART.pick(tru)           → bốc ngẫu nhiên 1 bạn (tránh trùng bạn vừa gặp)
     ART.nameOf(who)         → tên tiếng Việt của bạn đó
     ART.icon(name, opt)     → hình trang trí nhỏ
     ART.scene(opt)          → phông nền "thế giới học vui"
     ART.confetti(n)         → mảnh giấy nhiều hình dạng
     ART.micro(opt)          → lớp hoạt hình vui nhỏ (chim bay, bóng bay…)
     ART.badge(kind, text)   → huy hiệu phần thưởng
   ========================================================================== */
const ART = (function () {

  const INK = 'var(--art-ink)';      /* màu viền chung — đổi 1 chỗ, đổi cả bộ */
  const SW = 3.2;                    /* độ dày viền chuẩn của nhân vật */
  const IW = 2.6;                    /* độ dày viền của hình trang trí nhỏ */

  function r1(v) { return Math.round(v * 10) / 10; }
  function rad(d) { return d * Math.PI / 180; }
  function pt(x, y, l, a) { return [r1(x + l * Math.cos(rad(a))), r1(y + l * Math.sin(rad(a)))]; }
  function circ(cx, cy, r) { return 'M' + (cx - r) + ' ' + cy + 'a' + r + ' ' + r + ' 0 1 0 ' + (r * 2) + ' 0a' + r + ' ' + r + ' 0 1 0 ' + (-r * 2) + ' 0'; }
  function ell(cx, cy, rx, ry) { return 'M' + (cx - rx) + ' ' + cy + 'a' + rx + ' ' + ry + ' 0 1 0 ' + (rx * 2) + ' 0a' + rx + ' ' + ry + ' 0 1 0 ' + (-rx * 2) + ' 0'; }

  /* Vẽ 2 lượt: lượt "mực" (viền dày, các mảnh dính liền thành 1 khối) rồi
     lượt "màu" đè lên — cho ra viền dày sạch, không lộ nét thừa bên trong. */
  function sticker(parts, cls) {
    let ink = '', col = '';
    for (const p of parts) {
      if (p.w) {
        ink += `<path d="${p.d}" fill="none" stroke="${INK}" stroke-width="${p.w + SW * 2}" stroke-linecap="round" stroke-linejoin="round"/>`;
        col += `<path d="${p.d}" fill="none" stroke="${p.f}" stroke-width="${p.w}" stroke-linecap="round" stroke-linejoin="round"/>`;
      } else {
        ink += `<path d="${p.d}" fill="${INK}" stroke="${INK}" stroke-width="${SW * 2}" stroke-linejoin="round"/>`;
        col += `<path d="${p.d}" fill="${p.f}"/>`;
      }
    }
    return `<g class="${cls || ''}">${ink}${col}</g>`;
  }

  /* =============================================================== ĐÀN BẠN ==
     12 bạn, mỗi lần bé nộp bài lại gặp một bạn khác ra ăn mừng.
     ear   : point · point2 · round · side · long · floppy · pig · flap · bump · tuft
     tail  : bushy · ball · thin · curl · curl2 · stub · none
     mark  : hoa văn riêng (vằn hổ, khoang gấu trúc, đốm cún…)
     nose  : (mặc định) · snout · beak · trunk
     ------------------------------------------------------------------------ */
  const CREW = {
    fox:    { name: 'Cáo Bo',       c1: '#ffbc6b', c2: '#ff8d33', belly: '#fff2dc', ear: 'point',  inner: '#ffbfae', tail: 'bushy', tip: '#fff2dc' },
    bear:   { name: 'Gấu Mít',      c1: '#e6ab72', c2: '#b0713c', belly: '#ffe6c8', ear: 'round',  inner: '#ffc59b', tail: 'ball',  muzzle: 19 },
    cat:    { name: 'Mèo Miu',      c1: '#c8d4e4', c2: '#8f9fb8', belly: '#ffffff', ear: 'point2', inner: '#ffb7c9', tail: 'thin',  mark: 'cat', whisk: 1 },
    rabbit: { name: 'Thỏ Bông',     c1: '#fffdfa', c2: '#e9dff0', belly: '#ffffff', ear: 'long',   inner: '#ffb7c9', tail: 'ball' },
    panda:  { name: 'Gấu Trúc Pu',  c1: '#ffffff', c2: '#ecebf1', belly: '#ffffff', ear: 'round',  earFill: '#3f3646', tail: 'ball', limb: '#3f3646', paw: '#574d63', mark: 'panda', muzzle: 18 },
    dog:    { name: 'Cún Đốm',      c1: '#ffe1b0', c2: '#eeb066', belly: '#fff3de', ear: 'floppy', inner: '#e79a6a', tail: 'thin',  mark: 'dog' },
    pig:    { name: 'Heo Ủn',       c1: '#ffcbdd', c2: '#ff96b8', belly: '#ffe4ee', ear: 'pig',    inner: '#ff9db5', tail: 'curl',  nose: 'snout' },
    tiger:  { name: 'Hổ Vằn',       c1: '#ffc45c', c2: '#ff8f14', belly: '#fff0d2', ear: 'round',  inner: '#ffbfae', tail: 'thin',  mark: 'tiger', whisk: 1 },
    monkey: { name: 'Khỉ Tít',      c1: '#cfa579', c2: '#9c6b41', belly: '#ffdcb2', ear: 'side',   inner: '#ffc59b', tail: 'curl2', mark: 'monkey', muzzle: 19 },
    eleph:  { name: 'Voi Bi',       c1: '#c6d5f4', c2: '#8ba4d6', belly: '#e7eeff', ear: 'flap',   inner: '#f0b9cd', tail: 'stub',  nose: 'trunk', eyeSp: 15, eyeY: 52 },
    frog:   { name: 'Ếch Cốm',      c1: '#aeea77', c2: '#4fb84e', belly: '#eaffd4', ear: 'bump',   tail: 'none',  eyeY: 33, eyeSp: 17, bigEyes: 1, mouth: 'wide', mark: 'frog' },
    pengu:  { name: 'Cánh Cụt Pin', c1: '#7183ba', c2: '#37456f', belly: '#ffffff', ear: 'tuft',   tail: 'none',  eyeSp: 9, eyeY: 52, nose: 'beak', mark: 'pengu', noMuzzle: 1 }
  };
  const CREW_KEYS = Object.keys(CREW);
  CREW_KEYS.forEach(k => { CREW[k].k = k; });
  function who(k) { return CREW[k] || CREW.fox; }
  function fur(sp) { return 'url(#f-' + sp.k + ')'; }

  /* bốc ngẫu nhiên một bạn, cố ý không lặp lại bạn vừa xuất hiện lần trước */
  function pick(avoid) {
    const pool = CREW_KEYS.filter(k => k !== avoid);
    return pool[Math.floor(Math.random() * pool.length)];
  }

  /* ---------------------------------------------------------------- defs -- */
  function defs() {
    return `<svg class="art-defs" width="0" height="0" aria-hidden="true"><defs>
      ${CREW_KEYS.map(k => `<linearGradient id="f-${k}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${CREW[k].c1}"/><stop offset="1" stop-color="${CREW[k].c2}"/></linearGradient>`).join('')}
      <linearGradient id="aCream" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#fff7e8"/><stop offset="1" stop-color="#ffe3bd"/></linearGradient>
      <linearGradient id="aGold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#ffe985"/><stop offset=".5" stop-color="#ffc94d"/>
        <stop offset="1" stop-color="#f0a01e"/></linearGradient>
      <linearGradient id="aSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#ffffff" stop-opacity=".34"/>
        <stop offset="1" stop-color="#ffffff" stop-opacity=".02"/></linearGradient>
    </defs></svg>`;
  }

  /* ============================================================== NHÂN VẬT ==
     Khung 150×168. Đầu (75,58) r30 · vai (44,102)/(106,102) · hông (62,128)
     Thứ tự vẽ: đuôi → tai → tay/chân → thân+đầu → bụng → hoa văn →
     bàn tay/bàn chân → đồ cầm → mặt → lớp trước (vòi voi).
     ------------------------------------------------------------------------ */
  const CREAM = 'url(#aCream)', GOLD = 'url(#aGold)';
  const SH = { l: [44, 102], r: [106, 102] };
  const HIP = { l: [62, 128], r: [88, 128] };

  const POSES = {
    /* 1. đứng thở nhẹ, chớp mắt   */ idle:     { face: 'blink', arms: [[128, 34], [78, 32]],  legs: [[93, 20], [87, 20]] },
    /* 2. chạy ùa vào màn hình     */ run:      { face: 'wow',   arms: [[152, 26], [332, 26]], legs: [[128, 22], [52, 22]], speed: 1 },
    /* 3. nhảy cẫng lên            */ jump:     { face: 'joy',   arms: [[240, 30], [300, 30]], legs: [[140, 16], [40, 16]] },
    /* 4. cầm huy chương           */ medal:    { face: 'happy', arms: [[228, 34], [78, 32]],  legs: [[93, 20], [87, 20]], hold: { l: 'medal' } },
    /* 5. trao huy chương cho bé   */ present:  { face: 'joy',   arms: [[74, 28], [106, 28]],  legs: [[93, 20], [87, 20]], hold: { c: 'medal' } },
    /* 6. tung giấy màu            */ confetti: { face: 'joy',   arms: [[236, 32], [78, 32]],  legs: [[96, 20], [84, 20]], toss: 1 },
    /* 7. đập tay với bé           */ highfive: { face: 'wink',  arms: [[126, 32], [288, 32]], legs: [[93, 20], [87, 20]], hold: { r: 'palm' } },
    /* 8. giơ hai tay reo hò       */ cheer:    { face: 'joy',   arms: [[244, 32], [296, 32]], legs: [[95, 20], [85, 20]] },
    /* 9. động viên khi điểm thấp  */ support:  { face: 'soft',  arms: [[138, 30], [62, 30]],  legs: [[93, 20], [87, 20]], hold: { l: 'thumb' }, deco: 'heart' },
    /* 10. vẫy tay tạm biệt        */ wave:     { face: 'happy', arms: [[126, 32], [285, 30]], legs: [[93, 20], [87, 20]], hold: { r: 'openpaw' } }
  };

  function arm(side, ang, len) {
    const s = SH[side];
    const tip = pt(s[0], s[1], len, ang);
    const mid = pt(s[0], s[1], len * .58, ang + (side === 'l' ? 16 : -16));
    return { d: `M${s[0]} ${s[1]}Q${mid[0]} ${mid[1]} ${tip[0]} ${tip[1]}`, tip: tip };
  }
  function leg(side, ang, len) {
    const h = HIP[side];
    const tip = pt(h[0], h[1], len, ang);
    return { d: `M${h[0]} ${h[1]}L${tip[0]} ${tip[1]}`, tip: tip };
  }

  /* ------------------------------------------------------------------ tai --
     Vẽ TRƯỚC đầu để viền chân tai chui xuống dưới khối đầu — nhìn liền mạch.
     Cả cụm nằm trong <g class="m-ears"> nên mỗi loài vẫy tai một kiểu riêng. */
  function ears(sp) {
    const F = sp.earFill || fur(sp), IN = sp.inner;
    let parts = [], inner = '';
    switch (sp.ear) {
      case 'point':                                   /* tai nhọn: cáo */
        parts = [{ d: 'M54 38L42 4 73 28Z', f: F }, { d: 'M96 38L108 4 77 28Z', f: F }];
        inner = `<path d="M57 31L49 11 69 26Z" fill="${IN}"/><path d="M93 31L101 11 81 26Z" fill="${IN}"/>`;
        break;
      case 'point2':                                  /* tai nhọn nhỏ: mèo */
        parts = [{ d: 'M56 40L46 10 76 30Z', f: F }, { d: 'M94 40L104 10 74 30Z', f: F }];
        inner = `<path d="M58 35L51 17 70 28Z" fill="${IN}"/><path d="M92 35L99 17 80 28Z" fill="${IN}"/>`;
        break;
      case 'round':                                   /* tai tròn: gấu, hổ, gấu trúc */
        parts = [{ d: circ(48, 30, 14), f: F }, { d: circ(102, 30, 14), f: F }];
        if (IN) inner = `<path d="${circ(48, 30, 7.5)}" fill="${IN}"/><path d="${circ(102, 30, 7.5)}" fill="${IN}"/>`;
        break;
      case 'side':                                    /* tai hai bên: khỉ */
        parts = [{ d: ell(41, 58, 10, 12), f: F }, { d: ell(109, 58, 10, 12), f: F }];
        inner = `<path d="${ell(42, 58, 5.5, 7)}" fill="${IN}"/><path d="${ell(108, 58, 5.5, 7)}" fill="${IN}"/>`;
        break;
      case 'long':                                    /* tai dài: thỏ */
        parts = [{ d: 'M64 34Q55 12 58 -2', f: F, w: 15 }, { d: 'M86 34Q95 12 92 -2', f: F, w: 15 }];
        inner = `<path d="M63 29Q56 14 58 2" fill="none" stroke="${IN}" stroke-width="6.5" stroke-linecap="round"/>` +
                `<path d="M87 29Q94 14 92 2" fill="none" stroke="${IN}" stroke-width="6.5" stroke-linecap="round"/>`;
        break;
      case 'floppy':                                  /* tai cụp: cún */
        parts = [{ d: 'M54 42Q39 52 41 76', f: F, w: 18 }, { d: 'M96 42Q111 52 109 76', f: F, w: 18 }];
        inner = `<path d="M54 47Q45 55 46 70" fill="none" stroke="${IN}" stroke-width="7" stroke-linecap="round" opacity=".8"/>` +
                `<path d="M96 47Q105 55 104 70" fill="none" stroke="${IN}" stroke-width="7" stroke-linecap="round" opacity=".8"/>`;
        break;
      case 'pig':                                     /* tai lá: heo */
        parts = [{ d: 'M64 30L40 33 50 60Z', f: F }, { d: 'M86 30L110 33 100 60Z', f: F }];
        inner = `<path d="M61 35L47 36 53 52Z" fill="${IN}"/><path d="M89 35L103 36 97 52Z" fill="${IN}"/>`;
        break;
      case 'flap':                                    /* tai quạt: voi */
        parts = [{ d: ell(40, 64, 19, 24), f: F }, { d: ell(110, 64, 19, 24), f: F }];
        inner = `<path d="${ell(41, 64, 11, 15)}" fill="${IN}" opacity=".8"/><path d="${ell(109, 64, 11, 15)}" fill="${IN}" opacity=".8"/>`;
        break;
      case 'bump':                                    /* bướu mắt: ếch */
        parts = [{ d: circ(58, 33, 15), f: F }, { d: circ(92, 33, 15), f: F }];
        break;
      case 'tuft':                                    /* chỏm lông: cánh cụt */
        parts = [{ d: 'M75 30Q79 16 71 7', f: F, w: 7 }];
        break;
    }
    if (!parts.length) return '';
    return `<g class="m-ears">${sticker(parts)}${inner}</g>`;
  }

  /* ----------------------------------------------------------------- đuôi -- */
  function tailOf(sp) {
    const F = fur(sp);
    let s = '';
    switch (sp.tail) {
      case 'bushy':
        s = sticker([{ d: 'M106 118C136 116 143 88 127 72', f: F, w: 17 }]) +
            `<path d="${circ(127, 72, 10)}" fill="${sp.tip || sp.belly}" stroke="${INK}" stroke-width="${SW}"/>`;
        break;
      case 'ball':
        s = `<path d="${circ(120, 118, 12)}" fill="${sp.belly}" stroke="${INK}" stroke-width="${SW}"/>`;
        break;
      case 'thin':
        s = sticker([{ d: 'M104 122Q137 122 130 88', f: F, w: 8 }]);
        break;
      case 'curl':
        s = sticker([{ d: 'M104 116q9 -1 13 -6a8 8 0 1 1 6 12', f: F, w: 6 }]);
        break;
      case 'curl2':
        s = sticker([{ d: 'M104 120Q141 116 132 84q-5 -15 -19 -7', f: F, w: 7 }]);
        break;
      case 'stub':
        s = sticker([{ d: 'M104 118q19 6 17 -7', f: F, w: 6 }]);
        break;
      default: return '';
    }
    return `<g class="m-tail">${s}</g>`;
  }

  /* -------------------------------------------------------------- hoa văn -- */
  function marks(sp) {
    const st = (d, c, w) => `<path d="${d}" fill="none" stroke="${c}" stroke-width="${w || 4}" stroke-linecap="round"/>`;
    switch (sp.mark) {
      case 'tiger': {
        const c = '#a3520a';
        return st('M62 30q4 6 2 11', c, 4.4) + st('M75 26q1 7 0 11', c, 4.4) + st('M88 30q-4 6 -2 11', c, 4.4) +
               st('M47 50q6 3 10 0', c, 3.8) + st('M103 50q-6 3 -10 0', c, 3.8) +
               st('M45 100q7 5 11 1', c, 4.2) + st('M105 100q-7 5 -11 1', c, 4.2) + st('M48 116q7 4 11 0', c, 4.2);
      }
      case 'panda': {
        const p = '#3f3646';
        return `<path d="${ell(62, 52, 12, 14)}" fill="${p}" transform="rotate(-14 62 52)"/>` +
               `<path d="${ell(88, 52, 12, 14)}" fill="${p}" transform="rotate(14 88 52)"/>` +
               `<path d="${ell(62, 54, 8.6, 9.4)}" fill="#fff"/><path d="${ell(88, 54, 8.6, 9.4)}" fill="#fff"/>`;
      }
      case 'dog':
        return `<path d="${ell(62, 50, 13.5, 13)}" fill="#d99453" opacity=".9" transform="rotate(-10 62 50)"/>` +
               `<path d="${ell(62, 54, 8.6, 9.4)}" fill="#fff6e6"/>` +
               `<path d="${ell(101, 102, 9, 7)}" fill="#d99453" opacity=".7"/>`;
      case 'cat': {
        const c = '#7b8ca6';
        return st('M66 30q2 5 1 9', c, 3.4) + st('M75 27q0 6 0 9', c, 3.4) + st('M84 30q-2 5 -1 9', c, 3.4) +
               st('M56 48q5 3 9 0', c, 3.2) + st('M94 48q-5 3 -9 0', c, 3.2);
      }
      case 'monkey':
        return `<path d="${ell(75, 63, 23, 21)}" fill="#ffdcb2"/>` +
               `<path d="M56 40q9 -8 19 -6q10 -2 19 6" fill="none" stroke="#8a5c33" stroke-width="3.4" stroke-linecap="round" opacity=".5"/>`;
      case 'frog':
        return `<path d="${ell(50, 98, 7.5, 5.5)}" fill="#3f9b3f" opacity=".45"/>` +
               `<path d="${ell(101, 106, 6.5, 5)}" fill="#3f9b3f" opacity=".45"/>`;
      case 'pengu':
        return `<path d="${ell(75, 60, 22, 25)}" fill="#fff"/>`;
    }
    return '';
  }

  /* -------------------------------------------------- khuôn mặt (biểu cảm) --
     Mắt chạy theo từng loài (ếch mắt trên bướu, cánh cụt mắt sát nhau),
     còn mũi & miệng luôn neo quanh mõm (75,68) để loài nào cũng cân đối.     */
  function face(kind, sp) {
    const SP = sp.eyeSp || 13, EY = sp.eyeY || 54;
    const EL = 75 - SP, ER = 75 + SP;
    const pupil = (cx) =>
      `<path d="${ell(cx, EY, 8, 9)}" fill="#3b2f4a"/>` +
      `<circle cx="${cx + 2.6}" cy="${EY - 3.4}" r="3.1" fill="#fff"/>` +
      `<circle cx="${cx - 3}" cy="${EY + 3.6}" r="1.5" fill="#fff" opacity=".8"/>`;
    const arcEye = (cx) => `<path d="M${cx - 7.5} ${EY + 3}q7.5 -11 15 0" fill="none" stroke="#3b2f4a" stroke-width="4" stroke-linecap="round"/>`;
    const bigEye = (cx) => `<path d="${ell(cx, EY, 9.5, 11)}" fill="#fff" stroke="#3b2f4a" stroke-width="2.4"/>${pupil(cx)}`;

    let eyes, brow = '', mouth;
    if (sp.bigEyes && kind !== 'wink') eyes = bigEye(EL) + bigEye(ER);
    else if (kind === 'happy' || kind === 'joy') eyes = arcEye(EL) + arcEye(ER);
    else if (kind === 'wink') eyes = pupil(EL) + arcEye(ER);
    else if (kind === 'wow') eyes = bigEye(EL) + bigEye(ER);
    else if (kind === 'soft') {
      eyes = pupil(EL) + pupil(ER);
      brow = `<path d="M${EL - 8} ${EY - 15}q8 -4 16 -1" fill="none" stroke="#3b2f4a" stroke-width="3" stroke-linecap="round" opacity=".75"/>` +
             `<path d="M${ER + 8} ${EY - 15}q-8 -4 -16 -1" fill="none" stroke="#3b2f4a" stroke-width="3" stroke-linecap="round" opacity=".75"/>`;
    } else eyes = `<g class="m-eye">${pupil(EL)}${pupil(ER)}</g>`;

    let nose = `<path d="${ell(75, 62, 5.6, 4.4)}" fill="#3b2f4a"/><circle cx="73" cy="60.6" r="1.5" fill="#fff" opacity=".9"/>`;
    if (kind === 'joy' || kind === 'wow')
      mouth = `<path d="M65 68q10 15 20 0z" fill="#8a3f57" stroke="${INK}" stroke-width="2.6" stroke-linejoin="round"/>` +
              `<path d="M71 75q4 7 8 0z" fill="#ff8fa8"/>`;
    else
      mouth = `<path d="M75 67q0 7 -7.5 7" fill="none" stroke="#3b2f4a" stroke-width="3" stroke-linecap="round"/>` +
              `<path d="M75 67q0 7 7.5 7" fill="none" stroke="#3b2f4a" stroke-width="3" stroke-linecap="round"/>`;

    if (sp.mouth === 'wide')                          /* ếch: miệng toác rất rộng */
      mouth = `<path d="M55 68q20 17 40 0" fill="none" stroke="#3b2f4a" stroke-width="3.4" stroke-linecap="round"/>` +
              `<path d="M70 76h10q-1 3 -5 3t-5 -3z" fill="#ff8fa8"/>`;
    if (sp.nose === 'snout') {                        /* heo: mõm tròn hồng */
      nose = `<path d="${ell(75, 64, 13, 10)}" fill="#ff8fb0" stroke="${INK}" stroke-width="2.8"/>` +
             `<path d="${ell(70, 64, 2.6, 3.6)}" fill="#a04a68"/><path d="${ell(80, 64, 2.6, 3.6)}" fill="#a04a68"/>`;
      mouth = `<path d="M68 79q7 6 14 0" fill="none" stroke="#3b2f4a" stroke-width="3" stroke-linecap="round"/>`;
    }
    if (sp.nose === 'beak') {                         /* cánh cụt: mỏ hình thoi */
      nose = `<path d="M75 56l12 10-12 10-12-10z" fill="#ffab1f" stroke="${INK}" stroke-width="2.6" stroke-linejoin="round"/>` +
             `<path d="M63 66h24" fill="none" stroke="${INK}" stroke-width="2.2"/>`;
      mouth = '';
    }
    if (sp.nose === 'trunk') { nose = ''; mouth = ''; }  /* voi: đã có vòi */

    const muz = sp.noMuzzle ? '' : `<path d="${ell(75, 68, sp.muzzle || 17, (sp.muzzle || 17) - 4)}" fill="${sp.belly}"/>`;
    const whisk = sp.whisk
      ? `<g stroke="#3b2f4a" stroke-width="2" stroke-linecap="round" opacity=".5">
           <path d="M58 66h-16"/><path d="M58 71l-15 4"/><path d="M92 66h16"/><path d="M92 71l15 4"/></g>` : '';

    return `<g class="m-face">
      ${muz}
      <path d="${ell(55, 66, 7.5, 5)}" fill="#ff9db5" opacity=".7"/>
      <path d="${ell(95, 66, 7.5, 5)}" fill="#ff9db5" opacity=".7"/>
      ${whisk}${brow}${eyes}${nose}${mouth}
    </g>`;
  }

  /* mặt "ố ồ" đè lên — CSS cho hiện chớp nhoáng lúc bé thấy điểm */
  function surpriseFace(sp) {
    const SP = sp.eyeSp || 13, EY = sp.eyeY || 54;
    const EL = 75 - SP, ER = 75 + SP;
    const big = (cx) => `<path d="${ell(cx, EY - 2, 10.5, 12)}" fill="#fff" stroke="#3b2f4a" stroke-width="2.4"/>` +
                        `<path d="${ell(cx, EY - 1, 6, 6.6)}" fill="#3b2f4a"/>`;
    const plain = sp.nose === 'trunk' || sp.nose === 'beak' || sp.nose === 'snout';
    return `<g class="m-wowface">
      ${sp.noMuzzle ? '' : `<path d="${ell(75, 68, (sp.muzzle || 17) + 1, (sp.muzzle || 17) - 3)}" fill="${sp.belly}"/>`}
      ${big(EL)}${big(ER)}
      ${plain ? '' : `<path d="${ell(75, 63, 5, 4)}" fill="#3b2f4a"/><path d="${ell(75, 76, 6.5, 8)}" fill="#8a3f57" stroke="${INK}" stroke-width="2.4"/>`}
      <path d="M${EL - 12} ${EY - 17}q7 -7 15 -3" fill="none" stroke="#3b2f4a" stroke-width="3" stroke-linecap="round"/>
      <path d="M${ER + 12} ${EY - 17}q-7 -7 -15 -3" fill="none" stroke="#3b2f4a" stroke-width="3" stroke-linecap="round"/>
    </g>`;
  }

  /* ------------------------------------------------------------ lớp trước --
     Vòi voi vẽ sau khuôn mặt và đung đưa theo nhịp riêng.                    */
  function front(sp) {
    if (sp.nose !== 'trunk') return '';
    return `<g class="m-trunk">${sticker([{ d: 'M75 58Q77 88 89 97', f: fur(sp), w: 15 }])}
      <path d="M85 96q6 4 9 0" fill="none" stroke="${INK}" stroke-width="2.6" stroke-linecap="round"/></g>`;
  }

  /* --- đồ cầm trên tay ---
     Lưu ý: nhóm nào có transform trong thuộc tính thì KHÔNG gắn class chạy
     animation lên chính nó (CSS transform sẽ ghi đè) — lồng thêm 1 lớp <g>. */
  function handItem(kind, x, y, c) {
    if (kind === 'medal') return `<g transform="translate(${x - 20} ${y - 3})">${icon('medal', { size: 40 })}</g>`;
    if (kind === 'palm') return `<g transform="translate(${x} ${y})">
        <path d="${circ(0, 0, 12)}" fill="${c}" stroke="${INK}" stroke-width="${SW}"/>
        <path d="${ell(-6.5, -11, 3.2, 4.6)}" fill="${c}" stroke="${INK}" stroke-width="${SW}"/>
        <path d="${ell(0.5, -13, 3.2, 4.8)}" fill="${c}" stroke="${INK}" stroke-width="${SW}"/>
        <path d="${ell(7.5, -10, 3.2, 4.4)}" fill="${c}" stroke="${INK}" stroke-width="${SW}"/>
        <path d="${ell(0, 2, 6, 5)}" fill="#ffcfa0" opacity=".7"/></g>`;
    if (kind === 'thumb') return `<g transform="translate(${x} ${y}) rotate(-18)">
        <path d="${circ(0, 0, 9.5)}" fill="${c}" stroke="${INK}" stroke-width="${SW}"/>
        <path d="M-2 -8q3 -9 7 -6t-1 8z" fill="${c}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/></g>`;
    return '';
  }

  function paw(x, y, r, c) {
    return `<path d="${circ(x, y, r || 9)}" fill="${c}" stroke="${INK}" stroke-width="${SW}"/>`;
  }

  function mascot(pose, o) {
    o = o || {};
    const p = POSES[pose] || POSES.idle;
    const sp = who(o.who);
    const F = fur(sp), LIMB = sp.limb || F, PAW = sp.paw || sp.belly;
    const size = o.size || 150;
    const aL = arm('l', p.arms[0][0], p.arms[0][1]);
    const aR = arm('r', p.arms[1][0], p.arms[1][1]);
    const lL = leg('l', p.legs[0][0], p.legs[0][1]);
    const lR = leg('r', p.legs[1][0], p.legs[1][1]);
    const hold = p.hold || {};

    const core = sticker([
      { d: 'M75 74c-25 0-36 17-36 33 0 15 15 25 36 25s36-10 36-25c0-16-11-33-36-33z', f: F },
      { d: circ(75, 58, 30), f: F }
    ], 'm-core');
    const belly = `<path d="${ell(75, 110, sp.noMuzzle ? 23 : 20, sp.noMuzzle ? 20 : 17)}" fill="${sp.belly}"/>`;

    const speed = p.speed ? `<g class="m-speed" stroke="${INK}" stroke-width="3.4" stroke-linecap="round" opacity=".3">
        <path d="M6 86h20"/><path d="M2 104h15"/><path d="M8 122h22"/></g>` : '';
    const toss = p.toss ? `<g class="m-toss">${[[14, 26, '#ffc94d'], [30, 8, '#6cf8bb'], [46, 20, '#ff7ab8'], [4, 48, '#8b5cf6']]
        .map((c, i) => `<rect x="${c[0]}" y="${c[1]}" width="8" height="11" rx="2.5" fill="${c[2]}" stroke="${INK}" stroke-width="2.2" transform="rotate(${i * 37 - 40} ${c[0] + 4} ${c[1] + 5})"/>`).join('')}</g>` : '';
    /* trái tim bay lơ lửng bên cạnh khi bé cần được động viên */
    const deco = p.deco === 'heart'
      ? `<g transform="translate(104 24)"><g class="m-heart">${icon('heart', { size: 30, color: '#ff7ab8', mood: 'smile' })}</g></g>` : '';

    return `<svg class="mascot m-${pose} s-${sp.k} ${o.cls || ''}" width="${size}" height="${r1(size * 168 / 150)}"
      viewBox="0 0 150 168" role="img" aria-label="${sp.name}">
      <g class="m-all">
        ${speed}${toss}${tailOf(sp)}${ears(sp)}
        ${sticker([{ d: aL.d, f: LIMB, w: 13 }, { d: aR.d, f: LIMB, w: 13 },
                   { d: lL.d, f: LIMB, w: 14 }, { d: lR.d, f: LIMB, w: 14 }], 'm-limbs')}
        ${core}${belly}${marks(sp)}
        ${paw(lL.tip[0], lL.tip[1], 9, PAW)}${paw(lR.tip[0], lR.tip[1], 9, PAW)}
        ${hold.l ? handItem(hold.l, aL.tip[0], aL.tip[1], PAW) : paw(aL.tip[0], aL.tip[1], 9, PAW)}
        ${hold.r && hold.r !== 'openpaw' ? handItem(hold.r, aR.tip[0], aR.tip[1], PAW) : paw(aR.tip[0], aR.tip[1], hold.r === 'openpaw' ? 10.5 : 9, PAW)}
        ${hold.l === 'medal' ? paw(aL.tip[0], aL.tip[1], 9, PAW) : ''}
        ${hold.c ? `<g transform="translate(49 92)">${icon('medal', { size: 52 })}</g>` : ''}
        ${deco}${face(p.face, sp)}
        ${o.surprise ? surpriseFace(sp) : ''}
        ${front(sp)}
      </g>
    </svg>`;
  }

  /* ================================================== HÌNH TRANG TRÍ NHỎ ==
     Khung 40×40, cùng độ dày viền, cùng độ bo — nhìn là biết cùng một bộ.
     opt: {size, color, cls, mood:'smile'|'wow'|'sleep'}
     ------------------------------------------------------------------------ */
  const S = `stroke="${INK}" stroke-width="${IW}" stroke-linejoin="round" stroke-linecap="round"`;

  function wee(cx, cy, mood, sp) {                    /* mặt tí hon cho đồ vật */
    sp = sp || 4.5;
    if (!mood) return '';
    if (mood === 'wow') return `<path d="${ell(cx - sp, cy, 2.2, 2.8)}" fill="#3b2f4a"/><path d="${ell(cx + sp, cy, 2.2, 2.8)}" fill="#3b2f4a"/>` +
      `<path d="${ell(cx, cy + 6, 2.4, 3)}" fill="#3b2f4a"/>`;
    if (mood === 'sleep') return `<path d="M${cx - sp - 2} ${cy}q2 2.6 4 0M${cx + sp - 2} ${cy}q2 2.6 4 0" fill="none" stroke="#3b2f4a" stroke-width="1.9" stroke-linecap="round"/>`;
    return `<circle cx="${cx - sp}" cy="${cy}" r="1.9" fill="#3b2f4a"/><circle cx="${cx + sp}" cy="${cy}" r="1.9" fill="#3b2f4a"/>` +
      `<path d="M${cx - 3.4} ${cy + 4}q3.4 3.6 6.8 0" fill="none" stroke="#3b2f4a" stroke-width="1.9" stroke-linecap="round"/>`;
  }

  const SHAPES = {
    star: (c, m) => `<path d="M20 3.5l5.3 10.8 11.9 1.7-8.6 8.4 2 11.8L20 30.6 8.4 36.2l2-11.8-8.6-8.4 11.9-1.7z" fill="${c || GOLD}" ${S}/>${wee(20, 19, m)}`,
    cloud: (c, m) => `<path d="M11 31a8 8 0 0 1 1.2-15.9 10.5 10.5 0 0 1 19.3-1.2A7.6 7.6 0 0 1 30 31z" fill="${c || '#ffffff'}" ${S}/>${wee(20, 22, m)}`,
    balloon: (c, m) => `<path d="M20 30c-6.5 0-12-5.8-12-13S13.5 3 20 3s12 6.8 12 14-5.5 13-12 13z" fill="${c || '#ff7a7a'}" ${S}/>` +
      `<path d="M20 29l-3 5h6z" fill="${c || '#ff7a7a'}" ${S}/><path d="M20 34q5 4 0 8" fill="none" ${S}/>` +
      `<path d="M14 12q2-5 6-5.6" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" opacity=".65"/>${wee(20, 17, m)}`,
    planet: (c, m) => `<path d="${circ(20, 19, 10)}" fill="${c || '#8b5cf6'}" ${S}/>` +
      `<g transform="rotate(-20 20 19)"><path d="${ell(20, 19, 17, 5)}" fill="none" ${S}/></g>` +
      `<circle cx="15.5" cy="14" r="2.4" fill="#fff" opacity=".45"/>${wee(21, 20, m)}`,
    shoot: (c) => `<g stroke="${INK}" stroke-width="2.2" stroke-linecap="round" opacity=".4"><path d="M4 30l9-8M9 34l7-6M2 22l8-5"/></g>` +
      `<path d="M27 6l3.6 7.2 8 1.2-5.8 5.6 1.4 8-7.2-3.8-7.2 3.8 1.4-8-5.8-5.6 8-1.2z" fill="${c || GOLD}" ${S}/>`,
    heart: (c, m) => `<path d="M20 35C5 25 4 14 12 11c4.5-1.7 7.4 1.6 8 3.8.6-2.2 3.5-5.5 8-3.8 8 3 7 14-8 24z" fill="${c || '#ff7ab8'}" ${S}/>${wee(20, 20, m)}`,
    sparkle: (c) => `<path d="M20 2q3.4 13.6 18 17-14.6 3.4-18 17-3.4-13.6-18-17 14.6-3.4 18-17z" fill="${c || '#ffe27a'}" ${S}/>`,
    flower: (c, m) => `<g fill="${c || '#ff9db5'}" ${S}>` +
      [0, 72, 144, 216, 288].map(a => { const q = pt(20, 20, 10, a - 90); return `<path d="${ell(q[0], q[1], 6.5, 7.5)}"/>`; }).join('') +
      `</g><path d="${circ(20, 20, 6)}" fill="#ffe27a" ${S}/>${wee(20, 20, m, 2.6)}`,
    leaf: (c) => `<path d="M7 33C7 15 20 6 34 6c0 15-9 27-27 27z" fill="${c || '#6cf8bb'}" ${S}/>` +
      `<path d="M9 32C16 22 24 15 32 10" fill="none" stroke="${INK}" stroke-width="2" stroke-linecap="round" opacity=".55"/>`,
    bird: (c) => `<path d="M6 22c0-6 6-10 12-10 7 0 12 4 12 10 0 5-5 9-12 9-3 0-5-.5-7-1.5L6 33z" fill="${c || '#22bfe6'}" ${S}/>` +
      `<path d="M16 20c4-3 9-3 12 1-3 5-9 6-12 3z" fill="#fff" opacity=".6" ${S}/>` +
      `<path d="M30 19l7 2-7 3z" fill="#ffab1f" ${S}/><circle cx="26" cy="17" r="2" fill="#3b2f4a"/>`,
    blob: (c, m) => `<path d="M20 4c9 0 15 6 15 15 0 10-6 17-15 17S5 29 5 19C5 10 11 4 20 4z" fill="${c || '#a78bfa'}" ${S}/>${wee(20, 18, m || 'smile')}`,
    pencil: () => `<g transform="rotate(35 20 20)"><path d="M15 4h10v23l-5 8-5-8z" fill="#ffc94d" ${S}/>` +
      `<path d="M15 27h10l-5 8z" fill="${CREAM}" ${S}/><path d="M17.6 32.5h4.8l-2.4 2.5z" fill="#3b2f4a"/>` +
      `<path d="M15 9h10" fill="none" stroke="${INK}" stroke-width="2"/></g>`,
    book: () => `<path d="M5 9c5-3 10-3 15 1 5-4 10-4 15-1v22c-5-3-10-3-15 1-5-4-10-4-15-1z" fill="#3d6ef7" ${S}/>` +
      `<path d="M20 10v23" fill="none" ${S}/><path d="M9 15q5-1.6 8 .6M23 15.6q5-2.2 8-.6" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".8"/>`,
    crayon: () => `<g transform="rotate(-25 20 20)"><path d="M14 12h12v22H14z" fill="#22bfe6" ${S}/>` +
      `<path d="M14 12l6-8 6 8z" fill="#22bfe6" ${S}/><path d="M14 20h12v6H14z" fill="#fff" opacity=".85"/></g>`,
    crown: (c) => `<path d="M5 30V12l8 6 7-11 7 11 8-6v18z" fill="${c || GOLD}" ${S}/>` +
      `<path d="M5 30h30" fill="none" ${S}/><circle cx="13" cy="24" r="2.4" fill="#ff7a7a"/><circle cx="20" cy="23" r="2.6" fill="#22bfe6"/><circle cx="27" cy="24" r="2.4" fill="#6cf8bb"/>`,
    trophy: () => `<path d="M12 5h16v11a8 8 0 0 1-16 0z" fill="${GOLD}" ${S}/>` +
      `<path d="M12 8H7a6 6 0 0 0 6 7M28 8h5a6 6 0 0 1-6 7" fill="none" ${S}/>` +
      `<path d="M18 24h4v5h-4z" fill="${GOLD}" ${S}/><path d="M11 29h18v6H11z" fill="#f0a01e" ${S}/>` +
      `<path d="M20 8.6l1.7 3.6 3.9.6-2.8 2.8.7 3.9-3.5-1.9-3.5 1.9.7-3.9-2.8-2.8 3.9-.6z" fill="#fff" opacity=".85"/>`,
    medal: () => `<path d="M12 3l7 14-7 3-5-12z" fill="#3d6ef7" ${S}/><path d="M28 3l-7 14 7 3 5-12z" fill="#ff7a7a" ${S}/>` +
      `<path d="${circ(20, 26, 12)}" fill="${GOLD}" ${S}/><path d="${circ(20, 26, 8)}" fill="none" stroke="#f0a01e" stroke-width="2"/>` +
      `<path d="M20 20l1.9 4 4.3.6-3.1 3 .7 4.3-3.8-2-3.8 2 .7-4.3-3.1-3 4.3-.6z" fill="#fff8dd" stroke="${INK}" stroke-width="1.6" stroke-linejoin="round"/>`,
    ribbon: (c) => `<path d="M20 20L6 10c-3 5-2 12 3 14 4 1.6 8-1 11-4z" fill="${c || '#ff7ab8'}" ${S}/>` +
      `<path d="M20 20l14-10c3 5 2 12-3 14-4 1.6-8-1-11-4z" fill="${c || '#ff7ab8'}" ${S}/>` +
      `<path d="M20 20l-5 15M20 20l5 15" fill="none" ${S}/><path d="${circ(20, 20, 4.5)}" fill="#fff" ${S}/>`,
    gift: () => `<path d="M7 17h26v18H7z" fill="#ff7a7a" ${S}/><path d="M5 10h30v7H5z" fill="#ff9d9d" ${S}/>` +
      `<path d="M20 10v25" fill="none" ${S}/><path d="M20 10C14 10 11 4 15 3s5 5 5 7c0-2 1-8 5-7s1 7-5 7z" fill="${GOLD}" ${S}/>`,
    flame: () => `<path d="M20 3c7 8 11 11 11 19a11 11 0 0 1-22 0c0-5 3-8 5-11 1 3 3 4 5 5 0-6 1-9 1-13z" fill="#ff7a3d" ${S}/>` +
      `<path d="M20 19c3 4 5 6 5 9a5 5 0 0 1-10 0c0-3 3-5 5-9z" fill="#ffe27a"/>`,
    bunny: (c, m) => `<path d="M12 15C10 4 14 2 15.6 8l1.4 5M28 15C30 4 26 2 24.4 8L23 13" fill="${c || '#fff'}" ${S}/>` +
      `<path d="${ell(20, 24, 13, 12)}" fill="${c || '#fff'}" ${S}/>` +
      `<path d="${ell(13.5, 27, 3.4, 2.4)}" fill="#ffb7c9"/><path d="${ell(26.5, 27, 3.4, 2.4)}" fill="#ffb7c9"/>${wee(20, 22, m || 'smile')}`,
    sun: () => `<g stroke="${INK}" stroke-width="2.4" stroke-linecap="round">` +
      [0, 45, 90, 135, 180, 225, 270, 315].map(a => { const p1 = pt(20, 20, 12, a), p2 = pt(20, 20, 17, a); return `<path d="M${p1[0]} ${p1[1]}L${p2[0]} ${p2[1]}"/>`; }).join('') +
      `</g><path d="${circ(20, 20, 10)}" fill="${GOLD}" ${S}/>`,
    tree: () => `<path d="M20 4l9 13h-5l7 11H9l7-11h-5z" fill="#12b26e" ${S}/><path d="M18 27h4v9h-4z" fill="#b26a00" ${S}/>`
  };

  function icon(name, o) {
    o = o || {};
    const f = SHAPES[name] || SHAPES.star;
    const s = o.size || 32;
    return `<svg class="ai ai-${name} ${o.cls || ''}" width="${s}" height="${s}" viewBox="0 0 40 40" aria-hidden="true">${f(o.color, o.mood)}</svg>`;
  }

  /* ============================================================== PHÔNG NỀN ==
     "Thế giới học vui": trời mềm, mây, đồi, sao, cây nhỏ, hình trôi lơ lửng.
     Cố ý để nhạt — điểm số vẫn phải là thứ bắt mắt nhất.
     ------------------------------------------------------------------------ */
  function scene(o) {
    o = o || {};
    const star = (x, y, s, op) => `<g transform="translate(${x} ${y}) scale(${s})" opacity="${op}">` +
      `<path d="M0 -8l2.4 5 5.4.8-4 3.8.9 5.4L0 4.4l-4.7 2.6.9-5.4-4-3.8 5.4-.8z" fill="#fff"/></g>`;
    return `<svg class="art-scene ${o.cls || ''}" viewBox="0 0 360 210" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="360" height="210" fill="url(#aSky)"/>
      ${star(40, 32, 1.1, .5)}${star(300, 26, 1.4, .45)}${star(120, 18, .9, .38)}${star(232, 46, 1, .32)}${star(70, 76, .8, .28)}
      <g opacity=".34" fill="#fff"><path d="${ell(56, 58, 26, 13)}"/><path d="${ell(78, 51, 18, 12)}"/></g>
      <g opacity=".28" fill="#fff"><path d="${ell(292, 40, 22, 11)}"/><path d="${ell(310, 34, 15, 10)}"/></g>
      <g opacity=".24" fill="#fff"><path d="${circ(24, 108, 7)}"/><path d="${circ(336, 92, 9)}"/><path d="${ell(300, 132, 8, 5)}"/></g>
      <g opacity=".2" fill="#fff"><path d="M-20 210c40-52 96-58 140-24 34 26 70 22 96-6 22-24 52-30 84-14v44z"/></g>
      <g opacity=".3" fill="#fff"><path d="M-10 210c50-40 92-40 132-6 30 26 78 30 118 0 26-20 52-22 80-8v14z"/></g>
      <g opacity=".3" fill="#fff"><path d="M52 184l11 16H41z"/><path d="M300 180l12 18h-24z"/><path d="M266 188l9 12h-18z"/></g>
    </svg>`;
  }

  /* ================================================================ GIẤY VUI ==
     Nhiều hình dạng: chữ nhật, tròn, tam giác, ngôi sao, dải lượn, trái tim.
     ------------------------------------------------------------------------ */
  const CF_COLORS = ['#3d6ef7', '#6cf8bb', '#ffc94d', '#ff7a7a', '#a78bfa', '#22bfe6', '#ff7ab8', '#12b26e'];
  function cfShape(kind, c) {
    if (kind === 1) return `<circle cx="7" cy="7" r="6.4" fill="${c}"/>`;
    if (kind === 2) return `<path d="M7 .6l6.4 12.8H.6z" fill="${c}"/>`;
    if (kind === 3) return `<path d="M7 .5l1.8 3.9 4.3.6-3.1 3 .8 4.3L7 10.2 3.2 12.3l.8-4.3-3.1-3 4.3-.6z" fill="${c}"/>`;
    if (kind === 4) return `<path d="M1 2q3 4 6 0t6 0v4q-3 4-6 0t-6 0z" fill="${c}"/>`;
    if (kind === 5) return `<path d="M7 13C1.4 9.2 1 5 4 4c1.7-.6 2.8.6 3 1.5.2-.9 1.3-2.1 3-1.5 3 1 2.6 5.2-3 9z" fill="${c}"/>`;
    return `<rect x="1.5" y="0" width="8" height="12" rx="2" fill="${c}"/>`;
  }
  function confetti(n) {
    let out = '';
    for (let i = 0; i < n; i++) {
      const c = CF_COLORS[i % CF_COLORS.length];
      const left = Math.round(Math.random() * 100);
      const dur = (2.4 + Math.random() * 2).toFixed(2);
      const del = (Math.random() * 1.4).toFixed(2);
      const sc = (.7 + Math.random() * .7).toFixed(2);
      const drift = Math.round(-60 + Math.random() * 120);
      out += `<i class="cf" style="left:${left}%;--sc:${sc};--drift:${drift}px;animation-duration:${dur}s;animation-delay:${del}s">` +
        `<svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">${cfShape(i % 6, c)}</svg></i>`;
    }
    return `<div class="cf-layer" aria-hidden="true">${out}</div>`;
  }

  /* ====================================================== HOẠT HÌNH VUI NHỎ ==
     Chi tiết bất ngờ, nhẹ nhàng — có thì bé cười, không có cũng không sao.
     ------------------------------------------------------------------------ */
  function micro(o) {
    o = o || {};
    const b = [];
    b.push(`<span class="mi mi-runstar">${icon('star', { size: 24, mood: 'wow' })}</span>`);
    b.push(`<span class="mi mi-cloud">${icon('cloud', { size: 46, mood: 'wow' })}</span>`);
    b.push(`<span class="mi mi-balloon">${icon('balloon', { size: 34, color: '#ff9db5', mood: 'smile' })}</span>`);
    b.push(`<span class="mi mi-balloon2">${icon('balloon', { size: 26, color: '#8fd4ff' })}</span>`);
    b.push(`<span class="mi mi-bird">${icon('bird', { size: 26 })}</span>`);
    b.push(`<span class="mi mi-shoot">${icon('shoot', { size: 30 })}</span>`);
    if (o.crown) b.push(`<span class="mi mi-crown">${icon('crown', { size: 40 })}</span>`);
    return `<div class="art-micro" aria-hidden="true">${b.join('')}</div>`;
  }

  /* ============================================================== HUY HIỆU ==
     Dùng lại cho: kỷ lục mới, lần đầu hoàn thành, chuỗi ngày, xong bài học…
     ------------------------------------------------------------------------ */
  const BADGES = {
    record: { ic: 'medal', cls: 'b-gold' },
    first: { ic: 'star', cls: 'b-gold' },
    streak: { ic: 'flame', cls: 'b-warm' },
    daily: { ic: 'sun', cls: 'b-warm' },
    level: { ic: 'crown', cls: 'b-gold' },
    lesson: { ic: 'book', cls: 'b-cool' },
    achievement: { ic: 'trophy', cls: 'b-gold' },
    gift: { ic: 'gift', cls: 'b-warm' }
  };
  function badge(kind, text) {
    const b = BADGES[kind] || BADGES.first;
    return `<div class="art-badge ${b.cls}">${icon(b.ic, { size: 26 })}<span>${text || ''}</span></div>`;
  }

  return {
    defs: defs, mascot: mascot, icon: icon, scene: scene,
    confetti: confetti, micro: micro, badge: badge,
    pick: pick, nameOf: function (k) { return who(k).name; },
    poses: Object.keys(POSES), icons: Object.keys(SHAPES), badges: Object.keys(BADGES),
    crew: CREW_KEYS.slice()
  };
})();
if (typeof window !== 'undefined') window.ART = ART;
