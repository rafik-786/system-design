# Topic Page Specification — Build Guide

> **Source of truth:** `lld/topics/design-patterns/factory-method/csharp.html` (4837 lines, 24 sections, 51 tooltips)
> **Previous reference:** `lld/topics/design-patterns/singleton/csharp.html` (4220+ lines, 24 sections, 52 tooltips)
> **Original prototype:** `prototype.html` (1065 lines, 17 sections) from commit `d17f7f3`
> Every future topic page MUST match these patterns exactly. Target: **4500+ lines, 50+ tooltips** per page.

---

## 1. File Skeleton (Top to Bottom)

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" ...>
  <title>{Pattern Name} — System Guide</title>
  <link rel="icon" href="data:image/svg+xml,...">      ← unique emoji per page
  <link font-awesome 6.4.0>
  <link highlight.js atom-one-dark>
  <link Google Fonts (Inter + JetBrains Mono)>
  <script highlight.js>
  <script highlight.js csharp language>
  <link shared/styles.css>                              ← relative path (../../../shared/styles.css for nested)
  <script>anti-flash theme loader (inline)</script>     ← reads localStorage, sets data-theme
</head>
<body data-accent="{color}">                            ← page accent: blue, purple, green, cyan, etc.

  <header class="top-toolbar">...</header>              ← toolbar (expand/collapse, back, theme, fullscreen)
  <div class="hero" id="hero">...</div>                 ← hero section
  <main class="wiki-container">
    <!-- 24 sections here -->
  </main>
  <!-- popup overlays here -->
  <footer class="footer">...</footer>
  <button class="back-to-top">...</button>
  <script src="shared/scripts.js"></script>              ← relative path
</body>
</html>
```

**NO Mermaid.js** — was removed. Use custom SVGs instead.
**NO dot-nav** — was present in prototype but removed by user preference.

---

## 2. Top Toolbar

```html
<header class="top-toolbar" role="banner">
  <div class="toolbar-left">
    <button class="fab-btn" id="expandAllBtn" aria-label="Expand or collapse all sections">
      <i class="fa-solid fa-angles-down" aria-hidden="true"></i>
    </button>
    <a href="../../index.html" class="fab-btn fab-back" aria-label="Back to LLD Hub">
      <i class="fa-solid fa-arrow-left" aria-hidden="true"></i>
    </a>
  </div>
  <div class="toolbar-right">
    <div class="theme-switcher">
      <button class="fab-btn" id="themeBtn" aria-label="Change theme">
        <i class="fa-solid fa-palette" aria-hidden="true"></i>
      </button>
      <div class="theme-dropdown" id="themeDropdown">
        <button class="theme-option active" data-theme="navy">
          <span class="theme-swatch" style="background:#0f172a"></span>Navy
        </button>
        <button class="theme-option" data-theme="purple">
          <span class="theme-swatch" style="background:#13091f"></span>Purple
        </button>
        <button class="theme-option" data-theme="green">
          <span class="theme-swatch" style="background:#0a1a14"></span>Green
        </button>
        <button class="theme-option" data-theme="charcoal">
          <span class="theme-swatch" style="background:#121212"></span>Charcoal
        </button>
      </div>
    </div>
    <button class="fab-btn" id="fullscreenBtn" aria-label="Toggle fullscreen">
      <i class="fa-solid fa-expand" aria-hidden="true"></i>
    </button>
  </div>
</header>
```

---

## 3. Hero Section

```html
<div class="hero" id="hero">
  <div class="relative z-1">
    <div class="hero-badge"><i class="fa-solid fa-gem"></i> GoF Creational Pattern</div>
    <h1>{Pattern Name}</h1>
    <p class="hero-subtitle">{One-sentence GoF definition}</p>
    <div class="hero-meta">
      <span><i class="fa-solid fa-comments"></i> {N} Q&As</span>
      <span><i class="fa-solid fa-bug"></i> {N} Bug Studies</span>
      <span><i class="fa-solid fa-triangle-exclamation"></i> {N} Pitfalls</span>
      <span><i class="fa-solid fa-flask-vial"></i> {N} Testing Strategies</span>  ← added post-prototype
      <span><i class="fa-solid fa-code"></i> C# / .NET</span>
    </div>
  </div>
</div>
```

**Counts must match actual content** — update after building all sections.

---

## 4. Section Container Pattern

Every section follows this exact structure:

```html
<!-- ========== {N}. {SECTION NAME} ========== -->
<div class="section" id="{id}">
  <div class="section-header">
    <div class="section-icon {color}"><i class="fa-solid fa-{icon}"></i></div>
    <div>
      <div class="section-num">Section {N}</div>
      <h2 class="section-title">{Title}</h2>
    </div>
  </div>

  <!-- section content here -->
</div>
```

### Section Icon Colors (rotate through these):
- `blue` — TL;DR, Core UML, .NET Examples, Q&As, Related Topics
- `yellow` — Prerequisites, Pitfalls, Exercises
- `purple` — Analogies, Comparisons, SOLID, Mini-Project
- `green` — Code Implementations, When To Use, Testing, Cheat Sheet, Checklist, Evolution
- `cyan` — Jr vs Sr, Interview Pitch, Migration Guide
- `red` — Bug Studies, Deep Dive

### Section Icons (match singleton):
| Section | Icon | Color |
|---------|------|-------|
| 1. TL;DR | `fa-bolt` | blue |
| 2. Prerequisites | `fa-book-open` | yellow |
| 3. Analogies | `fa-lightbulb` | purple |
| 4. Core UML | `fa-diagram-project` | blue |
| 5. Code | `fa-code` | green |
| 6. Jr vs Sr | `fa-users` | cyan |
| 7. Evolution | `fa-timeline` | green |
| 8. .NET Examples | `fa-cube` | blue |
| 9. When To Use | `fa-check-double` | green |
| 10. Comparisons | `fa-scale-balanced` | purple |
| 11. SOLID | `fa-scale-balanced` | purple |
| 12. Bug Studies | `fa-bug` | red |
| 13. Pitfalls | `fa-triangle-exclamation` | yellow |
| 14. Testing | `fa-flask-vial` | green |
| 15. Performance | `fa-gauge-high` | cyan |
| 16. Interview Pitch | `fa-microphone` | cyan |
| 17. Q&As | `fa-comments` | blue |
| 18. Exercises | `fa-dumbbell` | cyan → yellow (singleton uses cyan) |
| 19. Cheat Sheet | `fa-table-cells` | green |
| 20. Deep Dive | `fa-shield-halved` or `fa-microscope` | red |
| 21. Mini-Project | `fa-rocket` | purple |
| 22. Migration Guide | `fa-right-left` | cyan |
| 23. Checklist | `fa-clipboard-check` | green |
| 24. Related Topics | `fa-arrow-right` | blue |

---

## 5. Component Library — Every HTML Pattern

### 5.1 macOS Code Window

The primary code display. ALWAYS use this — never raw `<pre><code>`.

```html
<div class="macos-window">
  <div class="macos-titlebar">
    <span class="dot dot-red"></span>
    <span class="dot dot-yellow"></span>
    <span class="dot dot-green"></span>
    <span class="macos-filename">{Filename.cs}</span>
  </div>
  <div class="macos-body">
<pre><code class="language-csharp">{code here — NO leading whitespace on first line}
{code continues with normal indentation}</code></pre>
  </div>
</div>
```

**CRITICAL:** The `<pre><code>` must start IMMEDIATELY after `<div class="macos-body">` on the next line — no extra whitespace. The closing `</code></pre>` must have no trailing whitespace before `</div>`.

With spacing: `<div class="macos-window mt-sm">` or `mt-md`

### 5.2 Tab Container (for multi-file code, Jr/Sr, implementations)

```html
<div class="tab-container">
  <div class="tab-header" role="tablist">
    <button class="tab-btn active" data-tab="{tab-id-1}" role="tab" aria-selected="true" aria-controls="{tab-id-1}">
      {Tab Label 1}
    </button>
    <button class="tab-btn" data-tab="{tab-id-2}" role="tab" aria-selected="false" aria-controls="{tab-id-2}">
      {Tab Label 2}
    </button>
  </div>

  <div class="tab-panel active" id="{tab-id-1}" role="tabpanel">
    <!-- content (usually a macos-window) -->
  </div>
  <div class="tab-panel" id="{tab-id-2}" role="tabpanel">
    <!-- content -->
  </div>
</div>
```

**Note:** The singleton page also uses an ALTERNATIVE tab pattern in some sections (added post-prototype):

```html
<div class="tabs">
  <div class="tab-buttons">
    <button class="tab-btn active" data-tab="{id}">Label</button>
    <button class="tab-btn" data-tab="{id}">Label</button>
  </div>
  <div class="tab-content active" id="{id}">...</div>
  <div class="tab-content" id="{id}">...</div>
</div>
```

**Use `tab-container` / `tab-header` / `tab-panel` for the primary code tabs** (Section 5, Section 6 Jr/Sr, Mini-Project).
**Use `tabs` / `tab-buttons` / `tab-content` for simpler inline tabs** where needed.

Both work — check which one `scripts.js` handles. Prefer the `tab-container` pattern for consistency.

### 5.2a Nested Tab Containers (Tabs Inside Tabs)

Used in: **Jr vs Sr** (Senior tab has multi-file tabs inside it), **Mini-Project** (Attempt 3 has multi-file tabs inside the card).

```html
<!-- OUTER: Jr vs Sr tabs -->
<div class="tab-container">
  <div class="tab-header" role="tablist">
    <button class="tab-btn active" data-tab="jr-tab" role="tab" aria-selected="true" aria-controls="jr-tab">Junior Approach</button>
    <button class="tab-btn" data-tab="sr-tab" role="tab" aria-selected="false" aria-controls="sr-tab">Senior Approach</button>
  </div>

  <div class="tab-panel active" id="jr-tab" role="tabpanel">
    <!-- Junior content (NO nested tabs) -->
  </div>

  <div class="tab-panel" id="sr-tab" role="tabpanel">
    <h3 class="sub">How a Senior Thinks</h3>
    <p class="body-text">"..."</p>

    <!-- INNER: Multi-file solution tabs NESTED inside sr-tab -->
    <div class="tab-container">
      <div class="tab-header" role="tablist">
        <button class="tab-btn active" data-tab="sr-file1" role="tab" aria-selected="true" aria-controls="sr-file1">ILogger.cs</button>
        <button class="tab-btn" data-tab="sr-file2" role="tab" aria-selected="false" aria-controls="sr-file2">FileLogger.cs</button>
        <button class="tab-btn" data-tab="sr-file3" role="tab" aria-selected="false" aria-controls="sr-file3">Program.cs</button>
      </div>
      <div class="tab-panel active" id="sr-file1" role="tabpanel">
        <div class="macos-window"><!-- code --></div>
      </div>
      <div class="tab-panel" id="sr-file2" role="tabpanel">
        <div class="macos-window"><!-- code --></div>
      </div>
      <div class="tab-panel" id="sr-file3" role="tabpanel">
        <div class="macos-window"><!-- code --></div>
      </div>
    </div>

    <h3 class="sub">Design Decisions</h3>
    <!-- concept cards -->
  </div>
</div>
```

**Also used in Mini-Project Attempt 3** (tabs inside a card body):

```html
<div class="card">
  <h3 class="card-title" ...>
    <i class="fa-solid fa-3 text-green" ...></i> Attempt 3: Production-Ready
  </h3>
  <div class="card-body">
    <!-- Tab container INSIDE a card -->
    <div class="tab-container">
      <div class="tab-header" role="tablist">
        <button class="tab-btn active" data-tab="rl-interface" ...>IRateLimiter.cs</button>
        <button class="tab-btn" data-tab="rl-impl" ...>SlidingWindowRateLimiter.cs</button>
        <button class="tab-btn" data-tab="rl-reg" ...>Registration</button>
        <button class="tab-btn" data-tab="rl-test" ...>Unit Test</button>
      </div>
      <div class="tab-panel active" id="rl-interface" role="tabpanel">
        <div class="macos-window"><!-- code --></div>
      </div>
      <!-- more tab-panels -->
    </div>
    <div class="callout callout-success mt-sm">
      <div class="callout-title"><i class="fa-solid fa-check"></i> Production Ready</div>
      <p class="body-text">{what makes this production-grade}</p>
    </div>
  </div>
</div>
```

**IMPORTANT:** Each tab's `data-tab` and `id` must be globally unique across the page. Use prefixes like `sr-`, `rl-`, `mp-` to avoid collisions between outer and inner tabs.

### 5.3 Collapsible Card (for expandable content)

Used for: Evolution timeline eras, Bug studies, .NET examples, Testing strategies.

```html
<div class="card">
  <h3 class="card-title" role="button" tabindex="0" aria-expanded="false">
    <i class="fa-solid fa-{icon} text-{color}" aria-hidden="true"></i> {Card Title}
  </h3>
  <div class="card-body">
    <!-- content -->
  </div>
</div>
```

First card in a section can be `<div class="card open">` with `aria-expanded="true"` to show it expanded by default.

**Multiple open cards:** Only ONE card per section should be `open` (typically the first). Other cards start collapsed.

### 5.3a Numbered Cards with Icon-Color Progression

Used in: **Mini-Project** (3 attempts) and **Migration Guide** (3-4 steps). The `fa-1`, `fa-2`, `fa-3` icons from Font Awesome create numbered indicators.

**Mini-Project progression (red → yellow → green = broken → better → production):**
```html
<!-- Attempt 1: RED = Broken/Naive -->
<div class="card open">
  <h3 class="card-title" role="button" tabindex="0" aria-expanded="true">
    <i class="fa-solid fa-1 text-red" aria-hidden="true"></i> Attempt 1: Naive (Broken)
  </h3>
  <div class="card-body"><!-- content --></div>
</div>

<!-- Attempt 2: YELLOW = Better but flawed -->
<div class="card">
  <h3 class="card-title" role="button" tabindex="0" aria-expanded="false">
    <i class="fa-solid fa-2 text-yellow" aria-hidden="true"></i> Attempt 2: Thread-Safe (Better)
  </h3>
  <div class="card-body"><!-- content --></div>
</div>

<!-- Attempt 3: GREEN = Production-ready -->
<div class="card">
  <h3 class="card-title" role="button" tabindex="0" aria-expanded="false">
    <i class="fa-solid fa-3 text-green" aria-hidden="true"></i> Attempt 3: Production-Ready
  </h3>
  <div class="card-body"><!-- content --></div>
</div>
```

**Migration Guide progression (all blue — informational steps, not quality progression):**
```html
<i class="fa-solid fa-1 text-blue" aria-hidden="true"></i> Step 1: {Title}
<i class="fa-solid fa-2 text-blue" aria-hidden="true"></i> Step 2: {Title}
<i class="fa-solid fa-3 text-blue" aria-hidden="true"></i> Step 3: {Title}
```

**Color meanings:**
| Color | Class | Meaning |
|-------|-------|---------|
| Red | `text-red` | Broken, naive, problematic |
| Yellow | `text-yellow` | Better but still flawed |
| Green | `text-green` | Production-ready, correct |
| Blue | `text-blue` | Informational step (no quality judgment) |

### 5.4 Collapsible (simpler toggle — for Pitfalls, Exercise hints/solutions)

```html
<div class="collapsible">
  <div class="collapsible-header" role="button" tabindex="0" aria-expanded="false">
    <span><i class="fa-solid fa-{icon} text-{color} icon-gap"></i> {Title}</span>
    <i class="fa-solid fa-chevron-down collapsible-chevron"></i>
  </div>
  <div class="collapsible-content">
    <div class="collapsible-body">
      <!-- content -->
    </div>
  </div>
</div>
```

### 5.5 Callout Boxes

```html
<!-- Types: callout-info, callout-success, callout-warning, callout-danger, callout-purple, callout-blue, callout-red -->
<div class="callout callout-{type}">
  <div class="callout-title"><i class="fa-solid fa-{icon}"></i> {Title}</div>
  <p class="body-text">{Content}</p>
</div>

<!-- Inline callout (no title block, icon inline) -->
<div class="callout callout-blue">
  <i class="fa-solid fa-circle-info icon-gap"></i>
  <strong>{Bold text}:</strong> {rest of content}
</div>
```

### 5.6 TL;DR Card

```html
<div class="tldr-card">
  <p><strong>What:</strong> {definition}</p>
  <p><strong>When:</strong> {when to use}</p>
  <p><strong>Modern .NET:</strong> {modern approach}</p>          ← added post-prototype
  <p><strong>Quick Code:</strong></p>
  <div class="macos-window mt-sm">
    <!-- code window -->
  </div>
</div>
```

Can have a callout BEFORE the tldr-card for anti-pattern warnings:
```html
<div class="callout callout-red mb-md">
  <i class="fa-solid fa-triangle-exclamation icon-gap"></i>
  <strong>Modern .NET stance:</strong> {warning text}
</div>
```

### 5.7 Prerequisites Card

```html
<div class="prereq-card">
  <div class="prereq-title">
    <i class="fa-solid fa-circle-exclamation"></i> Before reading this, you should understand:
  </div>
  <div class="prereq-list">
    <span class="prereq-item"><i class="fa-solid fa-arrow-right"></i> {Topic}</span>
    <!-- Use <span> not <a> since links don't exist yet -->
  </div>
</div>
```

### 5.8 Analogies — Primary + Grid

One primary analogy as a collapsible card with comparison table, then a `grid-3` of shorter callouts:

```html
<div class="card open">
  <h3 class="card-title" role="button" tabindex="0" aria-expanded="true">
    <i class="fa-solid fa-{icon}" aria-hidden="true"></i> {Primary Analogy Title}
  </h3>
  <div class="card-body">
    <p class="body-text">{Explanation}</p>
    <div class="table-wrapper">
      <table>
        <thead><tr><th>Real World</th><th>Code Concept</th></tr></thead>
        <tbody>
          <tr><td>{real world thing}</td><td>{code mapping}</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<div class="grid-3">
  <div class="callout callout-info">
    <div class="callout-title"><i class="fa-solid fa-circle-info"></i> {Analogy Name}</div>
    <p class="body-text">{Short description}</p>
  </div>
  <!-- repeat 2 more -->
</div>
```

### 5.9 Custom SVG Diagrams (replaced Mermaid)

```html
<div class="uml-diagram-wrapper">
  <svg class="uml-svg" viewBox="0 0 {W} {H}" xmlns="http://www.w3.org/2000/svg"
       role="img" aria-labelledby="{title-id}">
    <title id="{title-id}">{Accessible description}</title>

    <!-- DEFS: Arrow markers + glow filter -->
    <defs>
      <marker id="arrow-open" viewBox="0 0 12 12" refX="11" refY="6"
              markerWidth="10" markerHeight="10" orient="auto-start-reverse">
        <path d="M1 1 L11 6 L1 11" fill="none"
              stroke="var(--text-primary, #e2e8f0)" stroke-width="1.5"/>
      </marker>
      <filter id="uml-glow">
        <feDropShadow dx="0" dy="2" stdDeviation="6"
                      flood-color="rgba(var(--accent-primary-rgb, 59,130,246), 0.15)"/>
      </filter>
    </defs>

    <!-- CLASS BOX: Group with glow filter -->
    <g filter="url(#uml-glow)">
      <!-- Box background -->
      <rect x="300" y="20" width="340" height="280" rx="6"
            fill="var(--bg-secondary, #1e293b)"
            stroke="var(--accent-primary, #3b82f6)" stroke-width="1.5"/>
      <!-- Header band (tinted accent) -->
      <rect x="300" y="20" width="340" height="42" rx="6"
            fill="rgba(var(--accent-primary-rgb, 59,130,246), 0.15)"/>
      <!-- Class name -->
      <text x="470" y="48" text-anchor="middle"
            fill="var(--accent-primary, #3b82f6)"
            font-family="'JetBrains Mono', monospace" font-size="15" font-weight="700">
        ClassName
      </text>
      <!-- Divider line -->
      <line x1="300" y1="62" x2="640" y2="62"
            stroke="var(--border-color, #334155)" stroke-width="1"/>
      <!-- Attributes + methods as <text> elements below -->
    </g>

    <!-- DEPENDENCY ARROW (dashed) -->
    <line x1="200" y1="160" x2="295" y2="160"
          stroke="var(--text-primary, #e2e8f0)" stroke-width="1.5"
          stroke-dasharray="7 4" marker-end="url(#arrow-open)"/>

    <!-- LEGEND (positioned with transform) -->
    <g transform="translate(20, 260)">
      <!-- legend items as line + text pairs -->
    </g>
  </svg>
</div>
```

**SVG Rules:**
- Must adapt to all 4 themes via CSS variables. Always include `<title>` for accessibility.
- **Colors:** Use CSS variables with fallbacks: `var(--text-primary, #e2e8f0)`, `var(--text-muted, #64748b)`, `var(--bg-secondary, #1e293b)`, `var(--accent-primary, #3b82f6)`, `var(--border-color, #334155)`
- **Accent tint:** `rgba(var(--accent-primary-rgb, 59,130,246), 0.15)` for header bands
- **Fonts:** `font-family="'Inter', sans-serif"` for labels, `font-family="'JetBrains Mono', monospace"` for code
- **Arrows:** Define `<marker>` in `<defs>`, reference via `marker-end="url(#arrow-open)"`
- **Glow:** `<filter id="uml-glow">` with `<feDropShadow>`, apply via `filter="url(#uml-glow)"`
- **Dashed lines:** `stroke-dasharray="7 4"` for dependency arrows
- **Grouping:** Use `<g>` to group related elements (class boxes, legends)
- **Positioning:** Use `transform="translate(x, y)"` for groups, absolute `x`/`y` for individual elements

### 5.10 When To Use / When Not To Grid

```html
<div class="when-use-grid">
  <div>
    <h3 class="sub text-green"><i class="fa-solid fa-check"></i> Use When</h3>
    <div class="when-item">
      <span class="when-icon-yes"><i class="fa-solid fa-check-circle"></i></span>
      <span>{reason}</span>
    </div>
    <!-- repeat -->
  </div>
  <div>
    <h3 class="sub text-red"><i class="fa-solid fa-xmark"></i> Don't Use When</h3>
    <div class="when-item">
      <span class="when-icon-no"><i class="fa-solid fa-times-circle"></i></span>
      <span>{reason}</span>
    </div>
    <!-- repeat -->
  </div>
</div>

<div class="callout callout-purple mt-md">
  <div class="callout-title"><i class="fa-solid fa-lightbulb"></i> Decision Framework</div>
  <p class="body-text">{decision question}</p>
</div>
```

### 5.11 Comparison Grid (VS panels)

```html
<h3 class="sub">{X} vs {Y}</h3>
<div class="comparison-grid">
  <div class="comparison-panel bad">   <!-- or just comparison-panel (neutral) -->
    <div class="comparison-header"><i class="fa-solid fa-times-circle"></i> {X}</div>
    <div class="pad-card">
      <ul class="styled red">         <!-- red/green/no-color for neutral -->
        <li>{point}</li>
      </ul>
    </div>
  </div>
  <div class="vs-badge">VS</div>
  <div class="comparison-panel good">
    <div class="comparison-header"><i class="fa-solid fa-check-circle"></i> {Y}</div>
    <div class="pad-card">
      <ul class="styled green">
        <li>{point}</li>
      </ul>
    </div>
  </div>
</div>
```

**Three panel styles:**

```html
<!-- BAD panel (red-tinted) -->
<div class="comparison-panel bad">
  <div class="comparison-header"><i class="fa-solid fa-times-circle"></i> {X}</div>
  <div class="pad-card"><ul class="styled red"><li>...</li></ul></div>
</div>

<!-- GOOD panel (green-tinted) -->
<div class="comparison-panel good">
  <div class="comparison-header"><i class="fa-solid fa-check-circle"></i> {Y}</div>
  <div class="pad-card"><ul class="styled green"><li>...</li></ul></div>
</div>

<!-- NEUTRAL panel (no bad/good class — default styling, neither better nor worse) -->
<div class="comparison-panel">
  <div class="comparison-header"><i class="fa-solid fa-circle-info"></i> {Z}</div>
  <div class="pad-card"><ul class="styled"><li>...</li></ul></div>
</div>
```

Use neutral panels when comparing patterns that serve DIFFERENT purposes (not better/worse), e.g., Factory Method vs Strategy where neither is "wrong".

### 5.12 SOLID Table

```html
<div class="table-wrapper">
  <table>
    <thead><tr><th>Principle</th><th>Relation</th><th>Explanation</th></tr></thead>
    <tbody>
      <tr>
        <td>
          <span class="tooltip-trigger">{ABBR}
            <span class="tooltip-content">{Full name — definition}</span>
          </span>
        </td>
        <td><span class="badge badge-{green|yellow|red}">{Supports|Depends|Can Violate}</span></td>
        <td>{explanation}</td>
      </tr>
    </tbody>
  </table>
</div>
```

### 5.13 Bug Case Studies

Each bug study uses a **two-tab container** — "Buggy Code" shows the full problematic implementation with `// ❌` comments explaining the mistake inline, "Fix" shows the corrected version with `// ✅` comments.

```html
<div class="card">
  <h3 class="card-title" role="button" tabindex="0" aria-expanded="false">
    <i class="fa-solid fa-skull-crossbones text-red" aria-hidden="true"></i> Bug {N}: {Title}
  </h3>
  <div class="card-body">
    <div class="callout callout-danger">
      <div class="callout-title"><i class="fa-solid fa-bolt"></i> The Incident</div>
      <p class="body-text"><strong>{Date/context}</strong> {Narrative story...}</p>
    </div>
    <h3 class="sub">Time to Diagnose</h3>
    <p class="body-text">{time + why it was hard}</p>
    <!-- Optional: Root Cause as separate sub-heading if needed -->

    <div class="tab-container mt-sm">
      <div class="tab-header" role="tablist">
        <button class="tab-btn active" data-tab="bug{N}-bad" role="tab" aria-selected="true" aria-controls="bug{N}-bad">Buggy Code</button>
        <button class="tab-btn" data-tab="bug{N}-fix" role="tab" aria-selected="false" aria-controls="bug{N}-fix">Fix</button>
      </div>
      <div class="tab-panel active" id="bug{N}-bad" role="tabpanel">
        <div class="macos-window">
          <div class="macos-titlebar"><span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span><span class="macos-filename">{BuggyFile}.cs</span></div>
          <div class="macos-body">
<pre><code class="language-csharp">// ❌ {What's wrong — explain the mistake}
{full buggy code with inline comments showing
 step-by-step how the bug manifests at runtime}</code></pre>
          </div>
        </div>
      </div>
      <div class="tab-panel" id="bug{N}-fix" role="tabpanel">
        <div class="macos-window">
          <div class="macos-titlebar"><span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span><span class="macos-filename">{FixedFile}.cs</span></div>
          <div class="macos-body">
<pre><code class="language-csharp">// ✅ {What the fix does}
{full corrected code}</code></pre>
          </div>
        </div>
      </div>
    </div>

    <div class="callout callout-info mt-sm">
      <div class="callout-title"><i class="fa-solid fa-circle-info"></i> Lesson Learned</div>
      <p class="body-text">{takeaway}</p>
    </div>
  </div>
</div>
```

**Key rules:**
- Buggy Code tab shows the **full** problematic implementation, not a 2-line snippet
- Use `// ❌` comments to annotate mistakes and `// ✅` for fixes
- Add runtime walkthrough comments (e.g., "Request 1: works. Request 2: BOOM")
- Tab IDs follow pattern: `bug{N}-bad`, `bug{N}-fix`
- Lesson Learned callout goes **outside** the tab-container (always visible)

### 5.14 Pitfalls (Collapsible style)

```html
<div class="collapsible">
  <div class="collapsible-header" role="button" tabindex="0" aria-expanded="false">
    <span><i class="fa-solid fa-triangle-exclamation text-yellow icon-gap"></i> {N}. {Pitfall title}</span>
    <i class="fa-solid fa-chevron-down collapsible-chevron"></i>
  </div>
  <div class="collapsible-content">
    <div class="collapsible-body">
      <p class="body-text"><strong>Mistake:</strong> {what juniors do}</p>
      <!-- Optional: code example showing the mistake -->
      <div class="macos-window mt-sm mb-sm">
        <div class="macos-titlebar"><span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span><span class="macos-filename">{BadExample}.cs</span></div>
        <div class="macos-body">
<pre><code class="language-csharp">// ❌ DO NOT DO THIS
{bad code}</code></pre>
        </div>
      </div>
      <p class="body-text"><strong>Why Bad:</strong> {consequences}</p>
      <p class="body-text"><strong>Fix:</strong> {solution}</p>
    </div>
  </div>
</div>
```

**Notes:**
- Pitfall title can contain `<code>` tags: `<span>... 9. Generic <code>Singleton&lt;T&gt;</code> base class</span>`
- Code windows inside pitfalls use `mt-sm mb-sm` (margin top AND bottom) to space from surrounding text
- Some pitfalls are text-only (no code), some have code examples — both are valid
- Structure is always: Mistake → (optional code) → Why Bad → Fix

### 5.15 Testing Strategies

```html
<div class="card">
  <h3 class="card-title" role="button" tabindex="0" aria-expanded="false">
    <i class="fa-solid fa-vial text-{color}" aria-hidden="true"></i> Strategy {N}: {Title}
  </h3>
  <div class="card-body">
    <p class="body-text">{explanation}</p>
    <div class="macos-window mt-sm">
      <!-- test code -->
    </div>
  </div>
</div>
```

### 5.16 Interview Pitch

```html
<div class="callout callout-purple">
  <div class="callout-title"><i class="fa-solid fa-microphone"></i> Your Script (90 seconds)</div>
  <p class="body-text"><strong>Opening:</strong> "{...}"</p>
  <p class="body-text"><strong>Core:</strong> "{...}"</p>
  <p class="body-text"><strong>Example:</strong> "{...}"</p>
  <p class="body-text"><strong>When:</strong> "{...}"</p>
  <p class="body-text"><strong>Close:</strong> "{...}"</p>
</div>
```

### 5.17 Q&A Items

```html
<div class="qa-item">
  <div class="qa-header" role="button" tabindex="0" aria-expanded="false">
    <div>
      <div class="qa-question">Q{N}: {Question text}</div>
      <div class="qa-meta"><span class="badge badge-{green|yellow|red}">{Easy|Medium|Hard}</span></div>
    </div>
    <i class="fa-solid fa-chevron-down qa-chevron"></i>
  </div>
  <div class="qa-body"><div class="qa-content">
    <div class="qa-think">
      <strong><i class="fa-solid fa-brain icon-gap"></i>Think First</strong>
      {Prompt to think before reading answer}
    </div>
    <div class="body-text">
      <!-- Answer content: <p>, <ul class="qa-list">, <ol class="qa-list">, code windows -->
    </div>
    <div class="qa-great">
      <strong><i class="fa-solid fa-star icon-gap"></i>Great Answer Bonus</strong>
      "{What makes an answer stand out}"
    </div>
  </div></div>
</div>
```

**REQUIRED RULES for Q&A Items:**
1. **`qa-think` is MANDATORY** on ALL questions (Easy, Medium, Hard). Never omit it.
2. **`qa-great` is MANDATORY** on ALL questions. Every answer must end with a Great Answer Bonus.
3. **`<div>` wrapper** around `qa-question` + `qa-meta` is REQUIRED (wraps them inside `qa-header` before the chevron).
4. **Q numbering** is REQUIRED: `Q1:`, `Q2:`, ... `Q29:` — sequential across all difficulty groups.
5. **Hard questions** should include code examples (macos-window) inside the answer body wherever a concept benefits from concrete code.
6. **Answer depth:** Easy = 2-3 paragraphs, Medium = 3-4 paragraphs + lists, Hard = 4+ paragraphs + code + lists.
7. **All 4 exercises** must have both Hint AND Solution collapsibles (Hard/Expert exercises may use tabbed solutions).
8. **Never flatten** the `<div>` wrapper — the structure `<div><div class="qa-question">...</div><div class="qa-meta">...</div></div>` is essential for CSS layout.

### 5.18 Exercise Cards (with Hints + Solution collapsibles)

```html
<div class="exercise-card">
  <div class="exercise-card-title">
    <i class="fa-solid fa-code"></i> Exercise {N}: {Title}
    <span class="badge badge-{green|yellow|red}">{Easy|Medium|Hard}</span>
  </div>
  <p class="exercise-card-desc">{Task description}</p>

  <div class="collapsible">
    <div class="collapsible-header" role="button" tabindex="0" aria-expanded="false">
      <span><i class="fa-solid fa-lightbulb text-yellow icon-gap"></i> Hints</span>
      <i class="fa-solid fa-chevron-down collapsible-chevron"></i>
    </div>
    <div class="collapsible-content">
      <div class="collapsible-body">
        <ul class="styled">
          <li>{hint 1}</li>
          <li>{hint 2}</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="collapsible">
    <div class="collapsible-header" role="button" tabindex="0" aria-expanded="false">
      <span><i class="fa-solid fa-check text-green icon-gap"></i> Solution</span>
      <i class="fa-solid fa-chevron-down collapsible-chevron"></i>
    </div>
    <div class="collapsible-content">
      <div class="collapsible-body">
        <div class="macos-window">
          <!-- solution code -->
        </div>
      </div>
    </div>
  </div>
</div>
```

### 5.19 Cheat Sheet (3-column grid)

```html
<div class="grid-3">
  <div class="cheat-card">
    <div class="cheat-card-title">{Title}</div>
    <div class="cheat-card-body"><pre>{code/rules — plain text, no <code> tags}</pre></div>
  </div>
  <!-- repeat 2 more cards -->
</div>
```

### 5.20 Jr vs Sr Section Structure

```html
<!-- Problem statement -->
<div class="callout callout-info">
  <div class="callout-title"><i class="fa-solid fa-clipboard-question"></i> Problem Statement</div>
  <p class="body-text">Build a <strong>{thing}</strong> that {requirements}.</p>
</div>

<!-- Two tabs: Junior / Senior -->
<div class="tab-container">
  <div class="tab-header" role="tablist">
    <button class="tab-btn active" data-tab="jr-tab" ...>Junior Approach</button>
    <button class="tab-btn" data-tab="sr-tab" ...>Senior Approach</button>
  </div>

  <!-- Junior Tab -->
  <div class="tab-panel active" id="jr-tab" role="tabpanel">
    <h3 class="sub">How a Junior Thinks</h3>
    <p class="body-text">"{junior reasoning}"</p>
    <div class="macos-window"><!-- junior code --></div>

    <h3 class="sub">Problems</h3>
    <div class="problem-card">
      <div class="problem-card-title"><i class="fa-solid fa-circle-xmark"></i> {Problem Name}</div>
      <p class="problem-card-desc">{description}</p>
      <button class="solution-btn" data-popup="{popup-id}">
        <i class="fa-solid fa-lightbulb"></i> How a Senior Solves This
      </button>
    </div>
    <!-- repeat problem cards -->
  </div>

  <!-- Senior Tab -->
  <div class="tab-panel" id="sr-tab" role="tabpanel">
    <h3 class="sub">How a Senior Thinks</h3>
    <p class="body-text">"{senior reasoning}"</p>

    <!-- Nested tabs for multi-file solution -->
    <div class="tab-container">
      <div class="tab-header" role="tablist">
        <button class="tab-btn active" data-tab="sr-file1" ...>{File1.cs}</button>
        <button class="tab-btn" data-tab="sr-file2" ...>{File2.cs}</button>
        <button class="tab-btn" data-tab="sr-file3" ...>{Program.cs}</button>
      </div>
      <!-- tab-panels with macos-windows -->
    </div>

    <h3 class="sub">Design Decisions</h3>
    <div class="concept-card">
      <div class="concept-card-title"><i class="fa-solid fa-circle-check"></i> {Decision}</div>
      <p class="concept-card-desc">{why this matters}</p>
    </div>
    <!-- repeat concept cards -->
  </div>
</div>
```

### 5.21 Problem Card + Solution Button → Popup

Problem cards appear in Jr tab. They link to popup overlays. **A section can have MULTIPLE problem cards, each triggering a DIFFERENT popup.**

```html
<!-- In Junior tab — typically 3 problem cards -->
<div class="problem-card">
  <div class="problem-card-title"><i class="fa-solid fa-circle-xmark"></i> No Thread Safety</div>
  <p class="problem-card-desc">{description of the problem}</p>
  <button class="solution-btn" data-popup="popup-thread">
    <i class="fa-solid fa-lightbulb"></i> How a Senior Solves This
  </button>
</div>

<div class="problem-card">
  <div class="problem-card-title"><i class="fa-solid fa-circle-xmark"></i> Not Testable</div>
  <p class="problem-card-desc">{description}</p>
  <button class="solution-btn" data-popup="popup-test">
    <i class="fa-solid fa-lightbulb"></i> How a Senior Solves This
  </button>
</div>

<div class="problem-card">
  <div class="problem-card-title"><i class="fa-solid fa-circle-xmark"></i> Resource Leak</div>
  <p class="problem-card-desc">{description}</p>
  <button class="solution-btn" data-popup="popup-leak">
    <i class="fa-solid fa-lightbulb"></i> How a Senior Solves This
  </button>
</div>
```

**All popup overlays go AFTER `</main>`, BEFORE `<footer>`:**

```html
</main>

<!-- Popup Overlays (one per problem card) -->
<div class="popup-overlay" id="popup-thread">
  <div class="popup-content">
    <button class="popup-close" aria-label="Close">
      <i class="fa-solid fa-xmark" aria-hidden="true"></i>
    </button>
    <h3 class="sub text-green"><i class="fa-solid fa-lightbulb"></i> Senior Solution: Thread Safety</h3>
    <p class="body-text">{explanation}</p>
    <div class="macos-window mt-md">
      <!-- fix code -->
    </div>
  </div>
</div>

<div class="popup-overlay" id="popup-test">
  <div class="popup-content">
    <button class="popup-close" aria-label="Close">
      <i class="fa-solid fa-xmark" aria-hidden="true"></i>
    </button>
    <h3 class="sub text-green"><i class="fa-solid fa-lightbulb"></i> Senior Solution: Testability</h3>
    <p class="body-text">{explanation}</p>
    <div class="macos-window mt-md">
      <!-- fix code -->
    </div>
  </div>
</div>

<div class="popup-overlay" id="popup-leak">
  <div class="popup-content">
    <button class="popup-close" aria-label="Close">
      <i class="fa-solid fa-xmark" aria-hidden="true"></i>
    </button>
    <h3 class="sub text-green"><i class="fa-solid fa-lightbulb"></i> Senior Solution: Resource Management</h3>
    <p class="body-text">{explanation}</p>
    <div class="macos-window mt-md">
      <!-- fix code -->
    </div>
  </div>
</div>

<footer class="footer">...</footer>
```

**Rules:**
- Each `data-popup="{id}"` must match an `id="{id}"` on a `popup-overlay`
- All popups go in ONE place: after `</main>`, before `<footer>`
- Popup IDs must be globally unique (prefix with section context: `popup-thread`, `popup-test`, etc.)

### 5.22 Concept Card (in Senior tab — design decisions)

```html
<div class="concept-card">
  <div class="concept-card-title"><i class="fa-solid fa-circle-check"></i> {Decision Name}</div>
  <p class="concept-card-desc">{explanation of why}</p>
</div>
```

### 5.23 Related Topics Grid

```html
<div class="related-grid">
  <div class="related-card">    <!-- Use <div> not <a> — links don't exist yet -->
    <div class="related-card-icon"><i class="fa-solid fa-{icon}"></i></div>
    <div class="related-card-text">
      <h4>{Topic Name}</h4>
      <p>{one-line description of relationship}</p>
    </div>
  </div>
  <!-- repeat 4-6 cards -->
</div>
```

### 5.24 Performance Table

```html
<div class="table-wrapper">
  <table>
    <thead><tr><th>Method</th><th>Approx. Time</th><th>Use Case</th></tr></thead>
    <tbody>
      <tr><td><code>{method}</code></td><td>~{N} ns</td><td>{when}</td></tr>
    </tbody>
  </table>
</div>
```

### 5.25 Migration Guide Steps

Uses numbered cards with **blue** icons (informational steps, not quality progression). First step is `open`, rest collapsed.

```html
<!-- Step 1: OPEN -->
<div class="card open">
  <h3 class="card-title" role="button" tabindex="0" aria-expanded="true">
    <i class="fa-solid fa-1 text-blue" aria-hidden="true"></i> Step 1: {Title}
  </h3>
  <div class="card-body">
    <div class="macos-window">
      <div class="macos-titlebar">
        <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
        <span class="macos-filename">Step1_{Name}.cs</span>
      </div>
      <div class="macos-body">
<pre><code class="language-csharp">// BEFORE: {old approach}
public sealed class OldThing { ... }

// STEP 1: {what changes}
public interface INewThing { ... }
public sealed class OldThing : INewThing { ... }</code></pre>
      </div>
    </div>
    <p class="body-text mt-sm"><strong>Risk:</strong> Zero. {why this step is safe}</p>
  </div>
</div>

<!-- Step 2: COLLAPSED -->
<div class="card">
  <h3 class="card-title" role="button" tabindex="0" aria-expanded="false">
    <i class="fa-solid fa-2 text-blue" aria-hidden="true"></i> Step 2: {Title}
  </h3>
  <div class="card-body">
    <div class="macos-window"><!-- code --></div>
    <p class="body-text mt-sm"><strong>Risk:</strong> Minimal. {explanation}</p>
  </div>
</div>

<!-- Step 3: COLLAPSED -->
<div class="card">
  <h3 class="card-title" role="button" tabindex="0" aria-expanded="false">
    <i class="fa-solid fa-3 text-blue" aria-hidden="true"></i> Step 3: {Title}
  </h3>
  <div class="card-body">
    <div class="macos-window"><!-- code --></div>
  </div>
</div>
```

**Code shows BEFORE → AFTER in the same file** with comments marking the transformation.
**Risk line** appears after the code: `<p class="body-text mt-sm"><strong>Risk:</strong> {level}. {explanation}</p>`

### 5.26 Code Review Checklist

```html
<div class="table-wrapper">
  <table>
    <thead><tr><th>#</th><th>Check</th><th>Why It Matters</th><th>Red Flag</th></tr></thead>
    <tbody>
      <tr>
        <td>{N}</td>
        <td>{question}</td>
        <td>{reason}</td>
        <td><code>{code example of bad pattern}</code></td>
      </tr>
    </tbody>
  </table>
</div>

<!-- Roslyn analyzer callout after table -->
<div class="callout callout-blue mt-md">
  <i class="fa-solid fa-robot icon-gap"></i>
  <strong>Automate it:</strong> Enable these Roslyn analyzers to catch {pattern} issues at compile time:
  <ul class="mt-sm" style="margin-left: 1.5rem;">
    <li><code>CA1063</code> — Implement IDisposable correctly</li>
    <li><code>CA2000</code> — Dispose objects before losing scope</li>
    <li><code>CA1812</code> — Avoid uninstantiated internal classes</li>
    <li><strong>{Package name}</strong> — {description} (.NET 8+: <code>{feature}</code>)</li>
  </ul>
</div>
```

**Notes:** The `<ul>` uses inline `style="margin-left: 1.5rem;"` (not a CSS class). The `<strong>` tag wraps package names. The `mt-sm` on `<ul>` adds space between the intro text and the list.

### 5.27 Mini-Project (3-attempt progression)

**Full structure — every sub-component matters:**

```html
<!-- Intro paragraph -->
<p class="body-text">Let's build a production-grade {Thing} — from a naive first attempt
to a battle-tested implementation...</p>

<!-- Optional: production note callout -->
<div class="callout callout-blue mb-md">
  <i class="fa-solid fa-circle-info icon-gap"></i>
  <strong>Note:</strong> {context about the project}
</div>

<!-- ═══════ ATTEMPT 1: Naive (card open, RED) ═══════ -->
<div class="card open">
  <h3 class="card-title" role="button" tabindex="0" aria-expanded="true">
    <i class="fa-solid fa-1 text-red" aria-hidden="true"></i> Attempt 1: Naive (Broken)
  </h3>
  <div class="card-body">
    <div class="macos-window">
      <div class="macos-titlebar">
        <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
        <span class="macos-filename">NaiveThing.cs</span>
      </div>
      <div class="macos-body">
<pre><code class="language-csharp">// ATTEMPT 1: A junior's first try
public class Thing { ... }</code></pre>
      </div>
    </div>
    <div class="callout callout-danger mt-sm">
      <div class="callout-title"><i class="fa-solid fa-skull-crossbones"></i> {N} Critical Bugs</div>
      <p class="body-text"><strong>1.</strong> {bug}<br><strong>2.</strong> {bug}<br>...</p>
    </div>
  </div>
</div>

<!-- ═══════ ATTEMPT 2: Better (card collapsed, YELLOW) ═══════ -->
<div class="card">
  <h3 class="card-title" role="button" tabindex="0" aria-expanded="false">
    <i class="fa-solid fa-2 text-yellow" aria-hidden="true"></i> Attempt 2: {Title} (Better)
  </h3>
  <div class="card-body">
    <div class="macos-window">
      <div class="macos-titlebar">
        <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
        <span class="macos-filename">BetterThing.cs</span>
      </div>
      <div class="macos-body">
<pre><code class="language-csharp">// ATTEMPT 2: Thread-safe, but still has issues
public sealed class Thing { ... }</code></pre>
      </div>
    </div>
    <div class="callout callout-warning mt-sm">
      <div class="callout-title"><i class="fa-solid fa-triangle-exclamation"></i> Remaining Issues</div>
      <p class="body-text"><strong>1.</strong> {issue}<br>...</p>
    </div>
  </div>
</div>

<!-- ═══════ ATTEMPT 3: Production (card collapsed, GREEN, HAS TABS) ═══════ -->
<div class="card">
  <h3 class="card-title" role="button" tabindex="0" aria-expanded="false">
    <i class="fa-solid fa-3 text-green" aria-hidden="true"></i> Attempt 3: Production-Ready
  </h3>
  <div class="card-body">
    <!-- Multi-file tabs INSIDE the card -->
    <div class="tab-container">
      <div class="tab-header" role="tablist">
        <button class="tab-btn active" data-tab="mp-interface" role="tab" aria-selected="true" aria-controls="mp-interface">IThing.cs</button>
        <button class="tab-btn" data-tab="mp-impl" role="tab" aria-selected="false" aria-controls="mp-impl">ThingImpl.cs</button>
        <button class="tab-btn" data-tab="mp-reg" role="tab" aria-selected="false" aria-controls="mp-reg">Registration</button>
        <button class="tab-btn" data-tab="mp-test" role="tab" aria-selected="false" aria-controls="mp-test">Unit Test</button>
      </div>
      <div class="tab-panel active" id="mp-interface" role="tabpanel">
        <div class="macos-window">
          <div class="macos-titlebar">
            <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
            <span class="macos-filename">IThing.cs</span>
          </div>
          <div class="macos-body">
<pre><code class="language-csharp">public interface IThing { ... }</code></pre>
          </div>
        </div>
      </div>
      <div class="tab-panel" id="mp-impl" role="tabpanel">
        <div class="macos-window"><!-- implementation code --></div>
      </div>
      <div class="tab-panel" id="mp-reg" role="tabpanel">
        <div class="macos-window"><!-- DI registration --></div>
      </div>
      <div class="tab-panel" id="mp-test" role="tabpanel">
        <div class="macos-window"><!-- unit test code --></div>
      </div>
    </div>

    <div class="callout callout-success mt-sm">
      <div class="callout-title"><i class="fa-solid fa-check"></i> Production Ready</div>
      <p class="body-text">{what makes this production-grade — list the qualities}</p>
    </div>
  </div>
</div>
```

**Attempt callout progression:**
| Attempt | Card | Icon | Callout Type | Callout Icon |
|---------|------|------|--------------|--------------|
| 1 (Naive) | `card open` | `fa-1 text-red` | `callout-danger` | `fa-skull-crossbones` |
| 2 (Better) | `card` | `fa-2 text-yellow` | `callout-warning` | `fa-triangle-exclamation` |
| 3 (Production) | `card` | `fa-3 text-green` | `callout-success` | `fa-check` |

### 5.28 .NET Framework Examples (Section 8 pattern)

This section has: intro paragraph → SVG diagram → "Here are the most important ones in detail:" → series of collapsible cards.

```html
<p class="body-text">{intro explaining where this pattern appears in .NET}</p>

<!-- SVG diagram showing framework services grouped by category -->
<div class="uml-diagram-wrapper">
  <svg class="uml-svg" viewBox="0 0 720 400" ...>
    <!-- Grouped service pills by lifetime/category -->
  </svg>
</div>

<p class="body-text mt-md">Here are the most important ones in detail:</p>

<!-- Each .NET example is a collapsible card -->
<div class="card">
  <h3 class="card-title" role="button" tabindex="0" aria-expanded="false">
    <i class="fa-solid fa-gear text-blue" aria-hidden="true"></i> {ServiceName} (via {Interface})
  </h3>
  <div class="card-body">
    <p class="body-text">{explanation of how .NET uses this pattern}</p>
    <div class="macos-window mt-sm">
      <div class="macos-titlebar">
        <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
        <span class="macos-filename">{ExampleName}.cs</span>
      </div>
      <div class="macos-body">
<pre><code class="language-csharp">// Registration
builder.Services.AddSomething();

// Usage
public class MyService(ISomething svc) { ... }</code></pre>
      </div>
    </div>
  </div>
</div>
<!-- Repeat for each .NET example (typically 4-6 cards) -->
```

**Card icons vary per service category:**
- `fa-gear text-blue` — HTTP/infrastructure services
- `fa-database text-green` — data/cache services
- `fa-shield-halved text-purple` — auth services
- `fa-diagram-project text-cyan` — middleware/pipeline services

### 5.29 Tooltip Trigger (inline)

```html
<span class="tooltip-trigger">{visible text}
  <span class="tooltip-content">{tooltip explanation}</span>
</span>
```

Used in: body text, SOLID table cells, anywhere technical jargon needs explanation.

### 5.30 Badge

```html
<span class="badge badge-green">Easy</span>
<span class="badge badge-yellow">Medium</span>
<span class="badge badge-red">Hard</span>
<span class="badge badge-green">Supports</span>
<span class="badge badge-yellow">Depends</span>
<span class="badge badge-red">Can Violate</span>
```

### 5.31 Evolution Timeline Cards

Each era is a collapsible card with `fa-clock-rotate-left` icon. Colors rotate per era. Each card should have **code examples** (not just text) to show how the pattern was implemented in that .NET version.

```html
<div class="card open">  <!-- first era open -->
  <h3 class="card-title" role="button" tabindex="0" aria-expanded="true">
    <i class="fa-solid fa-clock-rotate-left text-yellow" aria-hidden="true"></i>
    .NET 1.0–2.0 (2002–2005): {Era Name}
  </h3>
  <div class="card-body">
    <p class="body-text">{context — include tooltips for era-specific terms}</p>
    <div class="macos-window mt-sm"><!-- code showing how this pattern was used in that era --></div>
    <div class="callout callout-warning mt-sm">
      <div class="callout-title"><i class="fa-solid fa-triangle-exclamation"></i> Problems</div>
      <p class="body-text">{what was wrong with this approach}</p>
    </div>
  </div>
</div>

<!-- Subsequent eras: card (collapsed), different icon colors -->
<!-- Colors rotate: text-yellow → text-blue → text-green → text-purple → text-cyan -->
```

**IMPORTANT — DO NOT use numbered icons (`fa-1`, `fa-2`, etc.) for Evolution cards.** Numbered icons are reserved for:
- **Mini-Project** attempts (`fa-1 text-red`, `fa-2 text-yellow`, `fa-3 text-green`)
- **Migration Guide** steps (`fa-1 text-blue`, `fa-2 text-blue`, etc.)

Evolution cards always use `fa-clock-rotate-left` with rotating colors.

**Every evolution card should contain code** — showing how the pattern was implemented in that era. Text-only evolution cards feel thin and don't teach effectively.
```

### 5.32 Deep Dive Section (topic-specific)

The Deep Dive section (Section 20) is topic-specific — the content varies per pattern. It uses collapsible cards with a mix of text, tables, code windows, and callouts.

```html
<p class="body-text">{intro paragraph explaining why this deep dive matters}</p>

<div class="card open">
  <h3 class="card-title" role="button" tabindex="0" aria-expanded="true">
    <i class="fa-solid fa-microchip text-blue" aria-hidden="true"></i> {Deep Topic 1}
  </h3>
  <div class="card-body">
    <p class="body-text">{explanation}</p>
    <div class="macos-window mt-sm"><!-- code example --></div>
    <div class="callout callout-danger mt-sm">
      <div class="callout-title"><i class="fa-solid fa-skull-crossbones"></i> {Warning Title}</div>
      <p class="body-text">{critical detail}</p>
    </div>
  </div>
</div>

<div class="card">
  <h3 class="card-title" role="button" tabindex="0" aria-expanded="false">
    <i class="fa-solid fa-bolt text-yellow" aria-hidden="true"></i> {Deep Topic 2}
  </h3>
  <div class="card-body">
    <p class="body-text">{explanation with <code>inline code</code>}</p>
    <!-- Tables work inside cards -->
    <div class="table-wrapper mt-sm">
      <table>
        <thead><tr><th>Scenario</th><th>Without</th><th>With</th></tr></thead>
        <tbody><tr><td>...</td><td>...</td><td>...</td></tr></tbody>
      </table>
    </div>
    <div class="macos-window mt-sm"><!-- code example --></div>
  </div>
</div>
```

**Card title can contain `<code>` tags:** `How <code>volatile</code> Fixes It`

**Icon variety:** Deep dive cards use different icons per topic (fa-microchip, fa-bolt, fa-shield-halved, fa-gauge-high, etc.) with varied colors.

### 5.33 HTML Entity Escaping in Code Blocks

**CRITICAL:** All `<`, `>`, `&` inside `<pre><code>` blocks MUST be escaped:
- `<` → `&lt;`
- `>` → `&gt;`
- `&` → `&amp;`

```html
<pre><code class="language-csharp">// Correct:
public interface IFactory&lt;T&gt; where T : class
{
    T Create();
}

// Generic type constraints:
where T : IProduct, new()      // &lt; and &gt; escaped
Task&lt;IProduct&gt; CreateAsync()   // nested generics escaped
Dictionary&lt;string, List&lt;int&gt;&gt; // all brackets escaped</code></pre>
```

**Common mistakes:** Forgetting to escape generics (`List<T>` → `List&lt;T&gt;`), lambda arrows (`=>` is fine, no escaping needed), and attribute syntax (`[Attribute]` is fine).

---

## 6. Footer + Back to Top

**Updated premium footer** (replaces old minimal footer as of Feb 2025):

```html
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-brand"><i class="fa-solid fa-book-open"></i>System Guide</div>
    <p class="footer-tagline">Master system design — from design patterns to distributed architectures</p>
    <div class="footer-links">
      <a href="../../../../index.html"><i class="fa-solid fa-house"></i>Home</a>
      <a href="../../../index.html"><i class="fa-solid fa-cubes"></i>LLD</a>
      <a href="https://github.com/rafik-786" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i>GitHub</a>
      <a href="mailto:contact.rafikulalam@gmail.com"><i class="fa-solid fa-envelope"></i>Contact</a>
    </div>
    <div class="footer-tech">
      <span><i class="fa-brands fa-html5"></i> HTML</span>
      <span><i class="fa-brands fa-css3-alt"></i> CSS</span>
      <span><i class="fa-brands fa-js"></i> Vanilla JS</span>
      <span><i class="fa-solid fa-feather"></i> Zero deps</span>
    </div>
    <div class="footer-divider"></div>
    <p class="footer-copy">&copy; 2025 Rafikul Alam. Built for learning, open for everyone.</p>
  </div>
</footer>

<button class="back-to-top" id="backToTop" aria-label="Back to top">
  <i class="fa-solid fa-arrow-up" aria-hidden="true"></i>
</button>
<script src="../../../../shared/scripts.js"></script>
```

**Note:** Adjust `../../../../` relative paths based on page depth. Topic pages at `lld/topics/design-patterns/{pattern}/csharp.html` use `../../../../`.

---

## 7. CSS Classes Quick Reference

| Class | Usage |
|-------|-------|
| `body-text` | All paragraph text |
| `sub` | Sub-headings within sections (h3) |
| `text-{color}` | Colored text: green, red, blue, yellow, purple, cyan |
| `mt-xs` | Extra-small top margin (used on footer sub-text) |
| `mt-sm` | Small top margin (code windows after text, callouts after code) |
| `mt-md` | Medium top margin (between major sub-sections, code in popups) |
| `mt-lg` | Large top margin (before major headings like "Senior Solution") |
| `mb-sm` | Small bottom margin |
| `mb-md` | Medium bottom margin (callout before tldr-card, callout before content) |
| `ml-sm` | Left margin |
| `text-xs` | Extra-small font size (footer sub-text) |
| `icon-gap` | Small right margin after inline icons |
| `grid-3` | 3-column responsive grid |
| `styled` | Styled list (`ul.styled`) |
| `styled red` / `styled green` | Colored bullet lists |
| `qa-list` | List inside Q&A answers (slightly different spacing) |
| `pad-card` | Padding wrapper inside comparison panels |
| `relative` | Relative positioning (hero inner) |
| `z-1` | z-index: 1 (hero content above background) |

**Spacing combination patterns commonly used:**
- `<div class="macos-window mt-sm">` — code window after a paragraph
- `<div class="macos-window mt-md">` — code window after a heading or in a popup
- `<div class="callout callout-danger mt-sm">` — callout after code window
- `<div class="callout callout-red mb-md">` — warning callout before main content
- `<div class="callout callout-blue mt-md">` — info callout at end of section
- `<p class="body-text mt-sm">` — paragraph after code (e.g., "Risk: Zero...")
- `<ul class="mt-sm" style="margin-left: 1.5rem;">` — list in Roslyn callout
- `<p class="mt-xs text-xs">` — footer sub-text (combines spacing + font size)

---

## 8. 24-Section Order (MUST follow this)

| # | Section | id |
|---|---------|-----|
| 1 | TL;DR | `tldr` |
| 2 | Prerequisites | `prereqs` |
| 3 | Real-World Analogies | `analogies` |
| 4 | Core Pattern & UML | `uml` |
| 5 | Code Implementations | `code` |
| 6 | Jr vs Sr Implementation | `jr-sr` |
| 7 | Evolution Timeline | `evolution` |
| 8 | Pattern in .NET Core | `dotnet-examples` |
| 9 | When To Use / When Not To | `when` |
| 10 | Comparisons | `comparison` |
| 11 | SOLID Mapping | `solid` |
| 12 | Bug Case Studies | `bugs` |
| 13 | Pitfalls & Anti-Patterns | `pitfalls` |
| 14 | Testing Strategies | `testing` |
| 15 | Performance Considerations | `performance` |
| 16 | How to Explain in Interview | `pitch` |
| 17 | Interview Q&As | `qa` |
| 18 | Practice Exercises | `exercises` |
| 19 | Cheat Sheet | `cheatsheet` |
| 20 | Deep Dive (topic-specific) | `deep-dive` or `thread-safety` |
| 21 | Real-World Mini-Project | `mini-project` |
| 22 | Migration Guide | `migration` |
| 23 | Code Review Checklist | `code-review` |
| 24 | Related Topics / What to Study Next | `related` |

---

## 9. Style Rules

### Content Formatting (Readability)
- **No grid wrappers on content-heavy cards** — if a card has a paragraph + metadata list, it should be full-width (one per row). Only use `grid-2`/`grid-3` for small callout-info cards (1-2 sentences) or cheat-cards.
- **Convert metadata bullet lists to `<p>` blocks** — where cards have Subject/Observer/Pattern Role mappings, use `<p class="mb-sm"><strong>Label:</strong> Value</p>` separated by subtle `<hr>` dividers instead of `<ul><li>` bullets.
- **Multi-concept lists** — where `<ul class="list-spaced">` has items with bold titles + multi-sentence explanations, convert each `<li>` to a `<p class="mb-sm">` block separated by `<hr style="border:none; border-top:1px solid rgba(255,255,255,0.06); margin:0.75rem 0;">`.

- **Tone:** Friendly learning — jokes welcome, casual remarks, personality. NOT stiff professional.
- **Tattoo joke** in Checklist section intro: "Print it, bookmark it, tattoo it on your forearm."
- **UML:** Generic GoF naming (getInstance(), operation()) — NOT language-specific
- **Code language:** Always C# / .NET Core (not legacy Framework)
- **`Startup.cs`** → always use **`Program.cs`** (modern .NET 6+ minimal hosting)
- **Dead links:** Use `<span>` or `<div>` instead of `<a href="#">` for non-existent pages
- **Comment separators:** `<!-- ========== {N}. {NAME} ========== -->` before each section
- **First line of `<pre><code>`:** Must start on the line IMMEDIATELY after `<div class="macos-body">` with NO leading whitespace
- **HTML entities in code:** `&lt;` `&gt;` `&amp;` — always escape in `<pre><code>` blocks

---

## 10. Anti-flash Theme Script (in `<head>`)

```html
<script>
(function(){
  var t=localStorage.getItem('wiki-theme');
  if(t&&t!=='navy')document.documentElement.setAttribute('data-theme',t);
})()
</script>
```

---

## 11. Differences: Prototype vs Final Singleton

Things that CHANGED from the prototype to the final singleton page:

1. **Section count:** 17 → 24 (added Evolution, .NET Examples, Testing, Performance, Deep Dive, Mini-Project, Migration, Checklist)
2. **Mermaid.js removed** → custom SVG diagrams
3. **Dot navigation removed** (user preference)
4. **`<a href="#">` for prereqs/related** → `<span>` / `<div>` (no dead links)
5. **Bug studies expanded** from 1 to 6, with narrative "Friday 5:47 PM" storytelling style
6. **Pitfalls expanded** from 2 to 10, using numbered collapsible pattern
7. **Exercises** added hints + solutions as nested collapsibles, plus difficulty badges
8. **Hero meta** added Testing Strategies count
9. **TL;DR** added anti-pattern warning callout above tldr-card
10. **SOLID table** added tooltip-trigger on principle abbreviations
11. **body** got `data-accent="{color}"` attribute (not in prototype)
12. **Favicon** changed from 📘 (generic) to unique per page
13. **Back link** href changed from `index.html` to `../../index.html` (proper relative path for nested pages)

---

## 12. Quality Standards (MUST meet before shipping)

Every topic page must meet these minimum thresholds:

| Metric | Minimum | Reference (Factory Method) |
|--------|---------|---------------------------|
| Total lines | 4500+ | 4837 |
| Tooltips | 50+ | 51 |
| Code windows (macos-window) | 40+ | ~45 |
| Bug studies with Buggy/Fix code tabs | 6 | 6 |
| Q&As with think/answer/bonus | 29 | 29 |
| Exercises with hints + full solutions | 4 | 4 |
| Evolution cards with code | 5-6 (all with code) | 5 |
| .NET Core examples with code | 5+ (all with code) | 7 |
| Pitfalls with code examples | 8+ of 10 should have code | ~8 |
| SVG diagrams (beyond UML) | 5+ | target 8 |

### SVG Diagram Requirements Per Section

Every page MUST have at least **5 SVG diagrams** beyond the S4 UML class diagram. SVGs are what separate "textbook depth + YouTube clarity" from walls of text. Below are the recommended SVG locations — not every one is required, but aim for 5+ across the page:

| Section | SVG Type | Purpose | Priority |
|---------|----------|---------|----------|
| S4 Core UML | Class diagram | Show pattern structure | **Required** (already exists) |
| S4 Core UML | Sequence/flow diagram | Show runtime notification/creation flow | High |
| S7 Evolution | Timeline bar/infographic | Visual progression of API eras | Medium |
| S8 .NET Core | Category grouping diagram | Show how pattern manifests across framework | Low |
| S9 When To Use | Decision flowchart | "Do you need X? → Yes → Pattern" tree | High |
| S15 Performance | Benchmark chart/bar graph | Visualize performance numbers from table | Medium |
| S20 Deep Dive | Concept visualization | Topic-specific (e.g., hot/cold streams, thread-safety levels) | Medium |
| S21 Mini-Project | Architecture diagram | Show data flow in the production solution | Medium |
| S22 Migration | Before/after dependency graph | Show coupling reduction visually | Low |

**SVG rules reminder:** All SVGs must use CSS variables for theme compatibility (see §5.9). Use `viewBox` for responsive sizing. Include `<title>` for accessibility.

### Section Depth Requirements

**Every section must have substantial content, not just text.** Common thin-section mistakes:

1. **Evolution cards without code** — WRONG. Every era must have a code example showing that era's idiom.
2. **Pitfalls as text-only collapsibles** — Most (8+/10) should show bad code + explain the fix.
3. **Exercise solutions missing** — ALL 4 exercises must have full working solution code in the Solution collapsible.
4. **.NET Core cards without code** — Each card should have a code example showing DI registration + usage.
5. **Bug studies with short code snippets** — Buggy tab should show the FULL problematic implementation (15-30 lines), not a 3-line snippet.

### Structural Integrity Checklist

Before shipping any page, verify:

- [ ] All 24 sections present in correct order (Section 8 table)
- [ ] Section icons match the icon/color table (Section 4)
- [ ] Section 6 uses Jr/Sr tabs with problem cards + popup overlays (not collapsible cards)
- [ ] Section 7 uses `fa-clock-rotate-left` icons (not numbered `fa-1` etc.)
- [ ] Popup overlays placed after `</main>`, before `<footer>`
- [ ] Premium footer with brand, links, tech stack, copyright
- [ ] Hero meta counts match actual content (Q&As, bugs, pitfalls, testing strategies)
- [ ] All code blocks use `macos-window` wrapper (never raw `<pre><code>`)
- [ ] HTML entities escaped in all code blocks (`&lt;` `&gt;` `&amp;`)
- [ ] Tooltips on first occurrence of technical terms throughout the page (50+ per page)
- [ ] Q&A items ALL have: `<div>` wrapper, Q numbering, `qa-think`, `qa-great` (see §5.17 rules)
- [ ] Section 9 when-items use `<span class="when-icon-yes"><i>` wrapper (not icon class directly on `<i>`)
- [ ] Section 9 headers: "Use When" / "Don't Use When" (not "When To Use" / "When NOT To Use")
- [ ] Section 15 has benchmark table + BenchmarkDotNet code example
- [ ] Section 16 uses `callout-purple` (not `callout-blue`) with structured pitch format
- [ ] Section 23 has 4-column table (# / Check / Why / Red Flag) + Roslyn callout
- [ ] All exercises (1-4) have both Hint AND Solution collapsibles with full working code
- [ ] Hard Q&As (Q13+) include code examples inside answers where concepts benefit from concrete code
- [ ] Migration Guide steps all have code examples (not just text descriptions)
- [ ] Comparison grids have tooltips on pattern names (Strategy, Builder, etc.)
- [ ] SOLID section has tooltips on all 5 principle abbreviations

### Common Build Mistakes (Do NOT Repeat)

These mistakes were made during the Abstract Factory build and must be avoided on all future pages:

1. **Q&A flat structure** — WRONG: `<div class="qa-question">` directly inside `qa-header` without a wrapping `<div>`. RIGHT: Always wrap `qa-question` + `qa-meta` in a `<div>` before the chevron `<i>`.
2. **Missing qa-think/qa-great** — WRONG: Answer body with just `<p class="body-text">`. RIGHT: Every Q&A must have `qa-think` at the top and `qa-great` at the bottom.
3. **Missing Q numbering** — WRONG: `What is the pattern?`. RIGHT: `Q1: What is the pattern?` — sequential across all difficulty groups.
4. **Section 6 as collapsible cards** — WRONG: Using generic collapsible cards for Jr vs Sr. RIGHT: Use the exact Jr/Sr tab structure from §5.20 with problem cards + popup overlays.
5. **Numbered icons on timeline** — WRONG: `fa-1`, `fa-2`, etc. on evolution cards. RIGHT: Use `fa-clock-rotate-left` with rotating colors. Numbered icons are ONLY for Mini-Project attempts and Migration Guide steps.
6. **When-item icon structure** — WRONG: `<i class="fa-solid fa-check-circle when-icon-yes">`. RIGHT: `<span class="when-icon-yes"><i class="fa-solid fa-check-circle"></i></span>`.
7. **Missing exercise solutions** — ALL 4 exercises must have complete, working solution code. Hard/Expert exercises should use tabbed solutions (Contracts/Implementation/Tests).
8. **Text-only evolution eras** — WRONG: Era 3 with only text description. RIGHT: Every evolution era MUST have a code example showing that era's idiom.
9. **Thin sections** — Target 4500+ lines. If a section is significantly shorter than Factory Method's equivalent, expand it.
10. **Missing tooltips** — Target 50+ tooltips per page. Add tooltips to first occurrences of: SOLID principles, DI terms (scoped, transient, singleton), .NET types (DbContext, IServiceCollection), pattern names, and technical terms.
11. **Cheat sheet without grid-3** — WRONG: Flat `cheat-card` with `<h3 class="sub">` headers and tables. RIGHT: `<div class="grid-3">` containing 3 cards with `cheat-card-title` + `cheat-card-body` + `<pre>` (see §5.19).
12. **Exercise hints singular** — WRONG: `<i class="..."></i>Hint`. RIGHT: `<span><i class="..."></i> Hints</span>` — plural, wrapped in `<span>`, space after icon. Same `<span>` wrapper for Solution headers.
13. **Generic section titles** — WRONG: "Pattern in .NET Core". RIGHT: "{Pattern Name} in .NET Core" — always include the specific pattern name in section titles.
14. **Wrong pattern attribution in Section 8** — Every ".NET Core example" card MUST be a genuine instance of the page's pattern. Verify each example creates the right kind of abstraction: Abstract Factory = multiple product types in swappable families. Factory Method = single product. Builder = step-by-step construction. Strategy = swappable algorithms. Do NOT label Builder/Strategy/Factory Method examples as Abstract Factory (or vice versa).
15. **Wrong .NET version in Evolution Timeline** — Double-check when each API was actually introduced. Common mistakes: `DbProviderFactory` = .NET 2.0 (NOT 1.0), `out`/`in` generic variance = .NET 4.0 (NOT 2.0), MEF = .NET 4.0 (NOT 3.5), keyed services = .NET 8 (NOT earlier). Always verify version attributions against official docs.
16. **Stale cross-references after Section 8 changes** — When replacing Section 8 examples, also update: TL;DR "Modern .NET" line, Q3 answer ("Name a real .NET example"), Evolution Timeline era code samples, Interview Pitch (Section 16), and Cheat Sheet references. Search the ENTIRE file for the old API name before considering the fix complete.

### Build Process: Per-Section Fact Check (MANDATORY)

After generating EACH section (before moving to the next), run a fact-check + content review using parallel agents:

1. **Agent 1 — Factual Accuracy**: Check all API names, .NET version attributions, code compilability, and pattern classifications are correct. No wrong facts.
2. **Agent 2 — Content Quality**: Check the section is comprehensive, has appropriate depth for its topic, and has no thin areas. Each pattern page stands on its own — do NOT force-match other pages' style or depth.
3. **Agent 3 — Cross-Reference Consistency**: Check that any APIs, examples, or terms introduced in this section are consistent with what's already written in earlier sections (no contradictions).
4. **Agent 4 — Relevance Check**: Verify every example, analogy, comparison, and code snippet in the section is genuinely relevant to THIS specific pattern. Flag anything that's filler, tangential, or better suited to a different pattern's page.

Run all 4 agents in parallel after each section. Fix any issues found BEFORE moving to the next section. This prevents error accumulation that requires expensive full-page reviews later.

---

## LEARNING PATH ORDER

Topics should be built and studied in this order (by learning dependency, NOT GoF category):

### Phase 1: SOLID Principles (5)
SRP → OCP → LSP → ISP → DIP

### Phase 2: Tier 1 Gateway Patterns (5)
Strategy → Singleton → Factory Method → Observer → Template Method

### Phase 3: Tier 2 Structural (5)
Decorator → Adapter → Facade → Proxy → Composite

### Phase 4: Tier 3 Core (5)
State → Command → Abstract Factory → Builder → Prototype
→ STARTER CASE STUDIES (9) after this phase

### Phase 5: Tier 4 Behavioral (4)
Chain of Responsibility → Mediator → Iterator → Memento
→ INTERMEDIATE CASE STUDIES (22) after this phase

### Phase 6: Tier 5 Specialized (4)
Bridge → Flyweight → Visitor → Interpreter
→ ADVANCED + SPECIALIZED CASE STUDIES (42) after this phase

### Phase 7: Advanced Topics (10)
Concurrency → Testing → DI Deep Dive → Repository/UoW → Refactoring → Reflection → DDD → CQRS → Clean Architecture → Event-Driven

---

## CASE STUDY PAGE TEMPLATE

Case study pages have a DIFFERENT structure from pattern pages. They focus on system design rather than pattern theory.

### Case Study Page Sections (12 sections)
| # | Section | HTML id | Description |
|---|---------|---------|-------------|
| 1 | TL;DR | `tldr` | Problem summary + key patterns used + difficulty level |
| 2 | Requirements | `requirements` | Functional + non-functional requirements |
| 3 | Core Classes & UML | `uml` | Class diagram showing all entities and relationships |
| 4 | Design Decisions | `decisions` | Which patterns and why — with alternatives considered |
| 5 | Code Implementation | `code` | Tabbed: Models → Services → Patterns → Usage |
| 6 | Pattern Spotting | `patterns` | Cards showing where each pattern appears in the code |
| 7 | Edge Cases & Concurrency | `edge-cases` | Thread safety, race conditions, boundary scenarios |
| 8 | Testing Strategy | `testing` | Unit + integration tests for key behaviors |
| 9 | Interview Q&As | `qa` | 5-8 questions specific to this case study |
| 10 | Scaling Considerations | `scaling` | What changes when load increases (bridge to HLD) |
| 11 | Practice Exercises | `exercises` | 2-3 extension challenges |
| 12 | Related Topics | `related` | Links to pattern pages + other case studies |

### Case Study Card Structure (on LLD hub)
Each card shows: icon + name + difficulty badge (Easy/Medium/Hard) + pattern tags + Coming Soon status.
Difficulty colors: Easy=green, Medium=yellow, Hard=red.
Pattern tags: small pills showing 2-4 key patterns used.

---

## UI/UX QUALITY CHECKLIST (Mandatory for Every Page)

> Discovered through comprehensive audits of ISP, DIP, Prototype, and Strategy pages.
> Every new page MUST pass all these checks before committing.

### Theme Compliance
1. **Use only supported `data-accent` values:** `purple`, `green`, `cyan`, `yellow`, `red`, `blue`, `orange`. If you need a new accent, add it to `shared/styles.css` under "Per-Page Accent Overrides" section first.
2. **NO hardcoded colors in inline styles** — use CSS variables (`var(--text-primary)`, `var(--bg-secondary)`, `var(--accent-primary)`, etc.). Exception: language swatches (brand colors like C# purple `#68217a`, Java orange `#f89820`).
3. **SVG diagrams must use CSS variables** — `fill="var(--text-primary, #e2e8f0)"`, `stroke="var(--accent-primary, #06b6d4)"`. Hardcoded colors in SVGs will NOT adapt to theme changes.
4. **"Coming Soon" cards** — use `opacity:0.6` sparingly. On light themes, this can push text below WCAG AA contrast. Prefer `color: var(--text-muted)` instead.

### Mobile Responsiveness
5. **SVG UML diagrams** — always use `viewBox` + `style="width:100%; max-width:720px"`. On screens < 375px, text becomes illegible. For complex diagrams, add `min-width: 500px` to trigger horizontal scroll inside the `.macos-body` container.
6. **Tables** — always wrap in `<div class="table-wrapper">`. The CSS provides `overflow-x: auto`.
7. **Side-by-side layouts** — `.comparison-grid`, `.when-use-grid`, `.grid-3` all have responsive breakpoints in CSS. Never add custom side-by-side flex layouts without `flex-wrap: wrap`.
8. **Code blocks** — always inside `.macos-body` containers which provide `overflow-x: auto`.

### Tooltip Rules
9. **NEVER put tooltips inside `<pre><code>` blocks** — highlight.js will break the tooltip HTML. Use plain text inside code blocks.
10. **Tooltips in table cells** — be aware that `.table-wrapper` `overflow-x: auto` can clip tooltips on mobile. For critical tooltips, consider placing the explanation as a footnote below the table instead.
11. **Tooltip content length** — CSS caps at `max-width: min(320px, 90vw)` with word-wrap. Content up to ~300 characters is fine. Beyond that, consider using a callout box instead.
12. **No nested tooltips** — never put a `tooltip-trigger` inside another `tooltip-trigger`.
13. **Tooltips in collapsible sections** — the CSS now sets `overflow: visible` on `.collapsible.active .collapsible-content`, so tooltips work when expanded.

### HTML Structure
14. **One footer, one `scripts.js`** — verify the page ends cleanly with `</footer>` → `<button class="back-to-top">` → `<script src="scripts.js">` → `</body></html>`. No duplicates.
15. **LLD Hub card CSS class** — when marking a page "Ready", the status `<span>` MUST have `lld-topic-status--ready` class AND the card must be an `<a>` tag (not `<div>`).
16. **Font Awesome icons** — only use icons from Font Awesome Free. Pro-only icons (like `fa-lambda`, `fa-function`) will render as blank. Check at https://fontawesome.com/search?o=r&m=free.

### Teaching Quality Standards
17. **Analogies** — must map accurately to the pattern. Cookie cutter = Factory (creates from raw material), NOT Prototype (copies existing object). Photocopier/Save As = Prototype.
18. **Code examples in Section 5** — focus on pattern structure, not algorithm internals. If showing a sorting strategy, stub the algorithm body (`// O(n²) — implementation details omitted`). The pattern is the lesson, not the algorithm.
19. **Q&A overlap** — check that Q&As don't repeat content already covered in earlier sections verbatim. If a Q matches Section 3 (Analogies) or Section 14 (Testing), reframe it to teach something NEW.
20. **Exercise overlap** — exercises should use different domains than the Mini-Project. If the mini-project builds a notification system, exercises should NOT also build notification systems.
21. **Comparison sections** — include at least one brief code snippet showing the relationship. Abstract bullet points ("Pattern A does X, Pattern B does Y") don't create understanding without concrete code.
22. **"Don't Use When" lists** — always include honest cases where the pattern/principle is overkill. This builds trust and teaches judgment, not just rules.

---

## 13. Typography & Enhancement Requirements (NEW — applies to ALL pages)

> **Reference:** `shared/REGISTRY.md` — full inventory of every CSS class and custom element.
> **All enhancements auto-load** from `enhance.css` (via @import) and `enhance.js` (via dynamic loader in scripts.js). No per-page config needed.

### Auto Features (every page gets these for FREE)
- Reading progress bar, back-to-top button, sidebar TOC, URL hash sync
- Section scroll fade-in animation
- Paragraph spacing, drop caps, enhanced strong/em, card h4 headings
- Custom scrollbar, ::selection color, focus rings
- Quiz ARIA roles + keyboard navigation
- Responsive fonts + SVG scaling on mobile

### Required Tier 2 Elements Per Page
Every page MUST include these at minimum:

| Element | Where | Required |
|---------|-------|----------|
| `<sg-reading-time>` | After section header in S1 | YES |
| `<sg-difficulty level="...">` | After section header in S1 | YES |
| `<sg-what-youll-learn>` | Top of S1 | YES |
| `<sg-key-terms terms="...">` | Top of S1 | YES |
| `<sg-section-summary>` | End of every section | YES (at least S1, S5, S12) |
| `<sg-feedback>` | End of S1 (or bottom of page) | YES |
| `<sg-practice-timer>` | S18 Exercises or S21 Mini-Project | Optional |
| `<sg-share>` | Bottom of page or hero | Optional |
| `<sg-prereq sections="...">` | Any section requiring prior knowledge | As needed |

### Typography Formatting Rules
When writing prose, apply these CSS classes to create visual variety:

| Class | When to Use | Frequency |
|-------|------------|-----------|
| `.hl` | Key terms the reader must remember | 5-10 per page |
| `.emphasis-p` | Standout statements that deserve attention | 3-5 per page |
| `<blockquote>` | Key insights worth quoting | 3-5 per page |
| `.big-idea` | Page-defining "hero" statements | 1-2 per page |
| `.gradient-text` | Inside `.big-idea` for maximum impact | 1-2 per page |
| `.code-term` | Tech terms in prose (Redis, Kafka, PostgreSQL) | 5-10 per page |
| `.aside-note` | Supplementary "by the way" context | 2-4 per page |
| `.divider-dots` | Between major conceptual shifts | 1-3 per page |
| `<hr>` | Between sub-sections (e.g., walkthrough 1 vs 2) | As needed |

### Typography Color Palette
- **Amber (#f59e0b)** — drop caps, `.emphasis-p` border
- **Purple (#c4b5fd)** — italic `<em>` text, italic quote blocks in cards
- **Blue (#60a5fa)** — `<blockquote>` border, card `<h4>` headings, bold list leads
- **Green (#6ee7b7)** — `.hl` highlight pills
- **Sky blue (#7dd3fc)** — `.code-term` pills
- **Teal gradient** — `.gradient-text`
