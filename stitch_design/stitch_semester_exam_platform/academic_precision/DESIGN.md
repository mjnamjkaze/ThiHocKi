---
name: Academic Precision
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daea'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eefe'
  surface-container-high: '#e2e8f8'
  surface-container-highest: '#dce2f3'
  on-surface: '#151c27'
  on-surface-variant: '#434654'
  inverse-surface: '#2a313d'
  inverse-on-surface: '#ebf1ff'
  outline: '#737686'
  outline-variant: '#c3c5d7'
  surface-tint: '#1353d8'
  primary: '#003fb1'
  on-primary: '#ffffff'
  primary-container: '#1a56db'
  on-primary-container: '#d4dcff'
  inverse-primary: '#b5c4ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#694100'
  on-tertiary: '#ffffff'
  tertiary-container: '#895600'
  on-tertiary-container: '#ffd6a8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b5c4ff'
  on-primary-fixed: '#00174d'
  on-primary-fixed-variant: '#003dab'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f9f9ff'
  on-background: '#151c27'
  surface-variant: '#dce2f3'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 20px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The design system is centered on a "High-Tech Academic" aesthetic—a fusion of corporate reliability and modern educational engagement. It aims to reduce cognitive load for students during high-stakes exams while maintaining a sense of authority and progress. 

The style utilizes a **Modern Corporate** foundation with **Minimalist** influences. It prioritizes clarity through generous whitespace and a structured information hierarchy. To prevent the interface from feeling sterile, subtle "active" elements like vibrant progress indicators and micro-interactions provide the necessary energy to keep students motivated and focused.

## Colors
This design system uses a logic-driven color palette:
- **Primary (Trustworthy Blue):** Used for navigation, primary actions, and branding. It signals stability and professional intent.
- **Secondary (Success Green):** Reserved for positive reinforcement, completed states, and "correct" indicators.
- **Tertiary (Action Orange):** Used sparingly for timers, warnings, and high-priority attention areas to create a sense of controlled urgency.
- **Surface & Backgrounds:** Uses a range of cool grays (e.g., `#F9FAFB`) to differentiate between the "stage" (exam content) and "utilities" (sidebar/tools).

## Typography
Inter is selected for its exceptional legibility in digital interfaces, particularly for long-form question text. For technical metadata (timers, question numbers, or code snippets), JetBrains Mono provides a precise, "high-tech" contrast.

- **Question Text:** Always use `body-lg` for the stem of the question to ensure maximum readability.
- **Option Text:** Use `body-md` for answer choices to allow for more content density on the screen.
- **Emphasis:** Use font weight `600` for key terms within questions rather than italics to maintain clarity on low-resolution screens.

## Layout & Spacing
The system uses a **Fluid Grid** with fixed maximum widths for question containers to prevent line lengths from becoming too long (ideal line length: 60-80 characters).

- **Mobile:** 4-column grid with 16px margins. Questions stack vertically.
- **Desktop:** 12-column grid. The main question area occupies the central 8 columns, while the "Question Navigator" and "Timer" occupy the remaining 4 columns as a sticky sidebar.
- **Rhythm:** Use an 8px base unit for all component spacing to ensure a consistent visual cadence.

## Elevation & Depth
This design system employs **Tonal Layers** combined with **Low-Contrast Outlines**. Rather than heavy shadows that can look cluttered, depth is created by placing white "cards" on a light gray background (`#F3F4F6`).

- **Surface Level 0 (Background):** Gray base.
- **Surface Level 1 (Cards):** White background with a 1px border (`#E5E7EB`).
- **Surface Level 2 (Active States):** A soft, ambient shadow (0px 4px 12px rgba(0, 0, 0, 0.05)) is applied only to the currently active question or a focused input field.

## Shapes
The shape language is consistently "Rounded" to feel approachable. 
- **Standard Cards/Inputs:** 0.5rem (8px).
- **Large Containers/Buttons:** 1rem (16px).
- **Progress Bars:** Fully pill-shaped (rounded-full) to emphasize a smooth, continuous journey toward completion.

## Components
- **Buttons:** Primary buttons use a solid Blue fill. Secondary buttons use a light Blue tint with Blue text. Active "Selected" states for answers should use a subtle Blue background with a thick 2px border.
- **Answer Options:** Large, easy-to-tap cards. Include a letter indicator (A, B, C, D) in a `label-md` JetBrains Mono style to give a technical, structured feel.
- **Progress Bars:** Use a dual-tone approach. A light gray track with a Secondary Green fill indicating "Answered" and a Primary Blue pulse for the "Current" question position.
- **Timers:** Use a monospaced font (`label-md`) for the countdown to prevent "jittering" text as numbers change. When time is < 5 minutes, the text should transition to Tertiary Orange.
- **Question Navigator:** A grid of small squares. Answered questions = Green; Current = Blue Border; Unanswered = Gray.
- **Inputs:** Use a soft gray background with a 2px bottom-only border that expands to a full border on focus, mimicking a modern "paper-to-digital" feel.