# Component Registry — System Guide

> Read this file at session start to know what tools are available.
> Do NOT read styles.css (11K lines) or scripts.js (3.5K lines) — this file is the index.

## CSS Typography Classes (enhance.css)

| Class | Color | Usage |
|-------|-------|-------|
| `.hl` | Green pill | Key terms: `<span class="hl">baby steps</span>` |
| `.emphasis-p` | Amber left border | Standout paragraphs: `<p class="emphasis-p">` |
| `.big-idea` | Centered, borders | Page-defining statements: `<p class="big-idea">` |
| `.gradient-text` | Teal→blue→purple | Hero phrases: `<span class="gradient-text">Five steps.</span>` |
| `.code-term` | Sky blue mono pill | Tech terms in prose: `<span class="code-term">Redis</span>` |
| `.aside-note` | Gray italic, left border | "By the way" notes: `<p class="aside-note">` |
| `.divider-dots` | Centered dots | Section breaks: `<p class="divider-dots">...</p>` |
| `.key-point` | Numbered box | Takeaways: `.key-point` > `.key-point-num` + `.key-point-text` |
| `.svg-caption` | Gray italic centered | Under SVGs: `<p class="svg-caption">Figure 1: ...</p>` |

## CSS Auto-Styles (enhance.css — zero markup needed)

| What | Effect |
|------|--------|
| `.section > p` | Paragraph spacing (1.15rem margin) |
| `.section > .section-header + p` | Lead paragraph (larger, brighter) |
| `.section > .section-header + p::first-letter` | Amber drop cap |
| `.section p strong` | Brighter white bold |
| `.section > p em` | Purple italic |
| `.section > blockquote` | Blue left border + `"` quote mark |
| `.section > h3` | Purple left border |
| `.section > hr` | Gradient fade line |
| `.card-body h4` | Blue uppercase heading with underline |
| `.card-body p>em:only-child` | Purple left border italic quote block |
| `.card-body li strong` | Blue bold list leads |
| `::selection` | Teal highlight |
| `::-webkit-scrollbar` | Thin dark scrollbar |
| `.card:hover` | Lift + shadow |
| `.section:nth-child(even)` | Subtle bg variation |
| `*:focus-visible` | Teal focus ring |
| `@media (prefers-reduced-motion)` | Disables animations |
| `@media (max-width: 768px)` | Responsive fonts, SVG scaling |
| `.section` | Fade-in on scroll (opacity 0 → 1) |

## JS Auto-Features (enhance.js — zero markup needed)

| Feature | How it works |
|---------|-------------|
| Reading progress bar | Thin teal bar at page top, tracks scroll % |
| Back-to-top button | Floating circle, appears after 600px scroll |
| Sidebar TOC | Numbered dots on left, expands on hover, auto from `.section-title` |
| URL hash sync | Updates URL hash on scroll, supports deep links |
| Section fade-in | IntersectionObserver adds `.visible` class |
| Skip-to-content | Hidden link, visible on Tab focus |
| Quiz ARIA + keyboard | Arrow keys navigate options, Enter selects |
| Flow stepper keyboard | Arrow keys navigate steps |
| Smooth scroll | All `#anchor` links scroll smoothly |
| Progress tracking | localStorage tracks which sections were read |
| Duplicate init guard | `window.__sgEnhanceLoaded` prevents double-run |

## JS Helper: SG.register(tagName, transformFn)

```js
// Register a new custom element — one line
SG.register('sg-my-thing', function(el) {
  var attr = el.getAttribute('title');
  return '<div class="my-thing">' + attr + ': ' + el.innerHTML + '</div>';
});
```

## Existing Custom Elements (scripts.js)

| Tag | Attributes | Purpose |
|-----|-----------|---------|
| `<sg-callout type="" title="">` | type: insight/danger/tip/rule/trap/success/takeaway/info | Styled callout box |
| `<sg-card title="" icon="" open>` | open: starts expanded | Accordion card |
| `<sg-collapse title="" icon="">` | — | Collapsible section |
| `<sg-tabs>` + `<sg-tab title="">` | — | Tabbed panels |
| `<sg-flow>` + `<sg-flow-step title="">` | — | Multi-step flow stepper |
| `<sg-think hint="">` | hint text | "Think First" reflection box |
| `<sg-quiz question="" options="" explanation="">` | JSON options array | Knowledge check quiz |
| `<sg-compare left-title="" right-title="" left-items="" right-items="">` | pipe-separated items | Side-by-side comparison |
| `<sg-estimate title="" tag="">` + `<sg-input>` | — | Back-of-envelope calculator |
| `<sg-math>` | — | Math block |
| `<sg-chat chat="">` | JSON messages | Interview chat dialog |
| `<sg-cheat color="" title="">` | color: blue/green/amber/purple/pink/cyan/red/teal | Cheat sheet card |
| `<sg-code lang="" file="">` | — | Syntax-highlighted code block |
| `<sg-sequence title="">` + `<sg-msg>` | — | Sequence diagram |
| `<sg-related items="">` | JSON array | "What to Study Next" grid |
| `<sg-glossary terms="">` | JSON array | Searchable glossary panel |
| `<sg-exercise title="">` | — | Practice exercise card |
| `<sg-diff>` | — | Before/After code diff |
| `<sg-pipeline title="" stages="">` | JSON stages | CI/CD-style pipeline |

## New Custom Elements (enhance.js)

| Tag | Purpose |
|-----|---------|
| `<sg-section-summary>text</sg-section-summary>` | Green "Key Takeaway" box — put at section end |
| `<sg-reading-time></sg-reading-time>` | Auto-calculates "~X min read" from page prose |
| `<sg-difficulty level="beginner">` | Colored badge: beginner (green), intermediate (amber), advanced (red) |
| `<sg-what-youll-learn><ul><li>...</li></ul></sg-what-youll-learn>` | Teal "What You'll Learn" teaser box |
| `<sg-key-terms terms="QPS, fan-out, sharding">` | Blue tag pills previewing key terms |
| `<sg-prereq sections="estimation,baby-steps">` | Amber prerequisite links box |
| `<sg-practice-timer minutes="45">` | Countdown timer with Start/Pause/Reset |
| `<sg-feedback></sg-feedback>` | "I'm confused" + "Report an error" buttons (localStorage) |
| `<sg-share></sg-share>` | Twitter + LinkedIn + copy-link buttons |

## Color Palette Used in Typography

| Color | Hex | Used for |
|-------|-----|----------|
| Amber | #f59e0b | Drop caps, .emphasis-p border |
| Purple | #c4b5fd / #a78bfa | Italic text, italic quote blocks |
| Blue | #60a5fa | Blockquote border, card h4 headings, list bold leads |
| Green | #6ee7b7 bg rgba(16,185,129,0.15) | .hl highlight pills |
| Sky blue | #7dd3fc | .code-term pills |
| Teal→blue→purple gradient | — | .gradient-text |
| Teal | #14b8a6 | Progress bar, TOC active, back-to-top hover |

## File Map

| File | Lines | What |
|------|-------|------|
| `shared/styles.css` | ~11K | Main styles + @import enhance.css |
| `shared/scripts.js` | ~3.5K | Main JS + dynamic loader for enhance.js |
| `shared/enhance.css` | ~580 | All new CSS (typography, polish, nav, a11y, responsive) |
| `shared/enhance.js` | ~510 | All new JS (progress, TOC, back-to-top, quiz, custom elements) |
| `shared/REGISTRY.md` | THIS FILE | Component inventory |
