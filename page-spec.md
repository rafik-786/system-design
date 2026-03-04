# Topic Page Specification — Build Guide

> **Source of truth:** `lld/topics/design-patterns/singleton.html` (3977 lines, 24 sections)
> **Original prototype:** `prototype.html` (1065 lines, 17 sections) from commit `d17f7f3`
> Every future topic page MUST match these patterns exactly.

---

## 1. File Skeleton (Top to Bottom)

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" ...>
  <title>{Pattern Name} — System Design Wiki</title>
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

**Note:** `qa-think` and `qa-great` are optional but should be present on most questions.
**Note:** Some Hard questions may have code examples inside the answer using macos-window.

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

```html
<div class="card open">  <!-- first era open -->
  <h3 class="card-title" role="button" tabindex="0" aria-expanded="true">
    <i class="fa-solid fa-clock-rotate-left text-yellow" aria-hidden="true"></i>
    .NET 1.0–2.0 (2002–2005): {Era Name}
  </h3>
  <div class="card-body">
    <p class="body-text">{context}</p>
    <div class="macos-window mt-sm"><!-- code of that era --></div>
    <div class="callout callout-warning mt-sm">
      <div class="callout-title"><i class="fa-solid fa-triangle-exclamation"></i> Problems</div>
      <p class="body-text">{what was wrong}</p>
    </div>
  </div>
</div>

<!-- Subsequent eras: card (collapsed), different icon colors -->
<!-- Colors rotate: text-yellow → text-blue → text-green → text-purple → text-cyan -->
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

```html
<footer class="footer">
  <p>System Design Wiki — by Rafikul Alam</p>
  <p class="mt-xs text-xs">Built with vanilla HTML, CSS &amp; JS — no frameworks</p>
</footer>

<button class="back-to-top" id="backToTop" aria-label="Back to top">
  <i class="fa-solid fa-arrow-up" aria-hidden="true"></i>
</button>
<script src="../../../shared/scripts.js"></script>
```

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
| 24 | Related Topics | `related` |

---

## 9. Style Rules

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
