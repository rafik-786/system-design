# System Design Wiki — Complete Project Knowledge Base

---

## 1. PROJECT OVERVIEW

**What:** A comprehensive LLD (Low-Level Design) wiki as a static HTML website. Dark themed, production-quality notes for a senior/principal engineer. C# / .NET Core focused.

**Location:** `c:/Users/Rafikul/Desktop/Learn/System Design/`

**Scope:** 106 topics across 4 page types (Design Patterns, SOLID, Case Studies, Advanced). Currently 2 complete pages (Singleton, Factory Method), 33+ coming soon.

**GitHub:** `https://github.com/rafik-786/system-design.git` (branch: `main`)

**Key Files:**
- Master Plan: `C:\Users\Rafikul\.claude\plans\dynamic-tumbling-ritchie.md`
- Session State: `c:/Users/Rafikul/Desktop/Learn/System Design/.claude/SESSION.md`
- Build Spec: `page-spec.md` (root of project — 1490+ lines, 33 component patterns)

---

## 2. USER PREFERENCES

- Don't ask permission for file operations in the project folder
- Don't ask what to do — read SESSION.md and resume
- Keep English simple but use proper jargon with tooltips
- No arbitrary limits on content
- Code windows: scrollable + tabbed, never long blocks
- **Tone: friendly learning, NOT stiff professional** — jokes, casual remarks, personality welcome
- **Never add Co-Authored-By in commits**
- Git email: rafikulalam2000@gmail.com
- User is a .NET Core developer (not legacy .NET Framework)
- Each topic page gets its own emoji favicon
- No dot navigation on pages (JS generates it but user doesn't want it)
- UML diagrams should be generic GoF (not language-specific)
- Prefers custom SVG diagrams over Mermaid.js
- `Startup.cs` → always use `Program.cs` (modern .NET 6+ minimal hosting)

---

## 3. FILE STRUCTURE

```
c:\Users\Rafikul\Desktop\Learn\System Design\
├── index.html                              — Home page (LLD + HLD cards)
├── page-spec.md                            — Page build spec (THE source of truth)
├── shared/
│   ├── styles.css                          — Master stylesheet (~25K tokens, theme system, all components)
│   └── scripts.js                          — Shared JS (theme, tabs, cards, search, tooltips, copy, etc.)
├── lld/
│   ├── index.html                          — LLD hub (23 patterns + 5 SOLID + 3 case studies + 3 advanced)
│   └── topics/
│       └── design-patterns/
│           ├── singleton.html              — COMPLETE (3977+ lines, 24 sections, favicon: 1️⃣)
│           └── factory-method.html         — COMPLETE (4831 lines, 24 sections, favicon: 🏭)
└── hld/                                    — Coming soon
```

### Relative Path Patterns
- Home to shared: `shared/styles.css`
- LLD hub to shared: `../shared/styles.css`
- Topic page to shared: `../../../shared/styles.css` (3 levels deep)

---

## 4. LLD HUB — ALL TOPICS & STATUS

### Creational Patterns (5)
| Pattern | Status | Accent |
|---------|--------|--------|
| Singleton | **Ready** | cyan/blue |
| Factory Method | **Ready** | purple |
| Abstract Factory | Coming Soon | — |
| Builder | Coming Soon | — |
| Prototype | Coming Soon | — |

### Structural Patterns (7)
Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy — ALL Coming Soon

### Behavioral Patterns (11)
Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor — ALL Coming Soon

### SOLID Principles (5)
Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion — ALL Coming Soon

### Case Studies (3)
Parking Lot System, Elevator System, Tic-Tac-Toe — ALL Coming Soon

### Advanced Topics (3)
Dependency Injection Deep Dive, Reflection & Metaprogramming, Unit Testing Patterns — ALL Coming Soon

---

## 5. 24-SECTION ORDER (MANDATORY FOR ALL TOPIC PAGES)

| # | Section | HTML id | Icon Color |
|---|---------|---------|------------|
| 1 | TL;DR | `tldr` | blue |
| 2 | Prerequisites | `prereqs` | purple |
| 3 | Real-World Analogies | `analogies` | yellow |
| 4 | Core Pattern & UML | `uml` | purple |
| 5 | Code Implementations | `code` | green |
| 6 | Jr vs Sr Implementation | `jr-sr` | red/green |
| 7 | Evolution Timeline | `evolution` | cyan |
| 8 | Pattern in .NET Core | `dotnet-examples` | blue |
| 9 | When To Use / When Not To | `when` | green |
| 10 | Comparisons | `comparison` | purple |
| 11 | SOLID Mapping | `solid` | purple |
| 12 | Bug Case Studies | `bugs` | red |
| 13 | Pitfalls & Anti-Patterns | `pitfalls` | yellow |
| 14 | Testing Strategies | `testing` | green |
| 15 | Performance Considerations | `performance` | cyan |
| 16 | How to Explain in Interview | `pitch` | cyan |
| 17 | Interview Q&As | `qa` | blue |
| 18 | Practice Exercises | `exercises` | yellow |
| 19 | Cheat Sheet | `cheatsheet` | green |
| 20 | Deep Dive (topic-specific) | `deep-dive` | purple |
| 21 | Real-World Mini-Project | `mini-project` | purple |
| 22 | Migration Guide | `migration` | cyan |
| 23 | Code Review Checklist | `code-review` | yellow |
| 24 | Related Topics | `related` | blue |

---

## 6. THEME SYSTEM

### 4 Themes (via `[data-theme]` on `<html>`)
| Theme | `--bg-primary` | `--bg-secondary` | `--accent-primary` |
|-------|---------------|------------------|-------------------|
| Navy (default) | `#0f172a` | `#1e293b` | `#3b82f6` |
| Purple | `#13091f` | `#1e1533` | `#a78bfa` |
| Green | `#0a1a14` | `#132d22` | `#34d399` |
| Charcoal | `#121212` | `#1e1e1e` | `#60a5fa` |

### Per-Page Accent Colors (via `[data-accent]` on `<body>`)
| Accent | Hex | RGB |
|--------|-----|-----|
| blue | `#3b82f6` | `59,130,246` |
| purple | `#8b5cf6` | `139,92,246` |
| green | `#10b981` | `16,185,129` |
| cyan | `#06b6d4` | `6,182,212` |
| yellow | `#f59e0b` | `245,158,11` |
| red | `#ef4444` | `239,68,68` |

### Anti-Flash Script (inline in `<head>`)
```html
<script>(function(){var t=localStorage.getItem('wiki-theme');if(t&&t!=='navy')document.documentElement.setAttribute('data-theme',t);})()</script>
```
Reads localStorage before any paint — prevents white flash on theme-enabled pages.

---

## 7. CSS COMPONENT CLASSES (CRITICAL — get these right)

### Tabs
- Container: `tab-container`
- Header: `tab-header` with `role="tablist"`
- Buttons: `tab-btn active` with `data-tab="{id}"`, `role="tab"`, `aria-selected="true/false"`, `aria-controls="{id}"`
- Panels: `tab-panel active` with `id="{id}"`, `role="tabpanel"`
- **WRONG (will break):** `tabs`, `tab-buttons`, `tab-content`

### Cards (Accordion)
- Collapsed: `card` (body hidden via `max-height: 0`)
- Expanded: `card open`
- Title: `card-title` with `role="button"`, `tabindex="0"`, `aria-expanded`
- Body: `card-body`

### Collapsibles (simpler toggle)
- Container: `collapsible`
- Header: `collapsible-header` with `role="button"`, `tabindex="0"`, `aria-expanded`
- Content: `collapsible-content` > `collapsible-body`
- Chevron: `collapsible-chevron` (auto-rotates)

### Code Windows
- Container: `macos-window`
- Title bar: `macos-titlebar` > 3 dots (`dot dot-red`, `dot-yellow`, `dot-green`) + `macos-filename`
- Body: `macos-body` > `pre` > `code class="language-csharp"`
- Max height: 280px, scrollable when `.scroll-active`
- Copy button: auto-injected by JS into titlebar

### Callouts
- Types: `callout-danger` (red), `callout-warning` (yellow), `callout-info` (blue), `callout-success` (green), `callout-purple`, `callout-blue`
- Structure: `callout callout-{type}` > `callout-title` (with icon) + content
- Left border: 4px solid, color-coded

### Q&A Items
- Container: `qa-item` (toggle via `.active`)
- Header: `qa-header` > `qa-question` + `qa-meta` (badge) + `qa-chevron`
- Body: `qa-body` > `qa-content` > `qa-think` (purple) + body text + `qa-great` (green)
- Badges: `badge badge-green` (Easy), `badge badge-yellow` (Medium), `badge badge-red` (Hard)

### Exercise Cards
- Container: `exercise-card`
- Title: `exercise-card-title` with `fa-code` icon + badge
- Description: `exercise-card-desc`
- Nested collapsibles for Hints (`fa-lightbulb text-yellow`) and Solution (`fa-check text-green`)

### Tables
- Wrapper: `table-wrapper` (adds border + overflow-x scroll)
- Standard `table > thead > tr > th` + `tbody > tr > td`
- Headers: uppercase, small font, colored bg

### Popups / Overlays
- Container: `popup-overlay` with `id` matching `data-popup` on trigger buttons
- Trigger: `solution-btn` with `data-popup="{id}"`
- Structure: `popup-overlay` > `popup-content` > `popup-close` + content
- Close: click overlay bg, click X, or ESC key

### Badges
- Base: `badge`
- Colors: `badge-blue`, `badge-green`, `badge-red`, `badge-yellow`, `badge-purple`

### Grids
- `grid-2` / `grid-3` / `grid-4` / `grid-9` — responsive, collapse to 1 col at 768px
- `span-full` — spans full grid width

### Comparison Panels
- `comparison-grid` > `comparison-panel` + `vs-badge` (VS) + `comparison-panel good`
- Each panel: `comparison-header` + `pad-card` > `ul.styled` / `ul.styled.green`

### When To Use Grid
- `when-use-grid` > two divs (Use When + Don't Use When)
- `when-item` > `when-icon-yes` / `when-icon-no` + text span

---

## 8. SPACING & UTILITY CLASSES

| Class | Usage |
|-------|-------|
| `body-text` | All paragraph text |
| `sub` | Sub-headings within sections (h3) |
| `text-{color}` | green, red, blue, yellow, purple, cyan |
| `mt-xs` | Extra-small top margin |
| `mt-sm` | Small top margin (code after text, callout after code) |
| `mt-md` | Medium top margin (between sub-sections) |
| `mt-lg` | Large top margin (before major headings) |
| `mb-sm` / `mb-md` | Bottom margins |
| `ml-sm` | Left margin |
| `text-xs` | Extra-small font |
| `icon-gap` | Small right margin after inline icons |
| `pad-card` | Padding inside comparison panels |
| `relative` / `z-1` | Positioning utilities |

### Common Spacing Combos
- `<div class="macos-window mt-sm">` — code after paragraph
- `<div class="callout callout-danger mt-sm">` — callout after code
- `<div class="callout callout-blue mt-md">` — info callout at section end
- `<div class="tab-container mt-sm">` — tabs after intro text

---

## 9. JAVASCRIPT FEATURES (shared/scripts.js)

All interactivity is in one file. Key features:

1. **Card accordion** — click `.card-title` toggles `.card.open`, smooth max-height animation
2. **Expand/Collapse All** — `#expandAllBtn` toggles all cards
3. **Code block scroll** — click to activate scroll, ESC to deactivate, only one active at a time
4. **Theme switcher** — `#themeBtn` dropdown, saves to `localStorage('wiki-theme')`
5. **Progress bar** — `--scroll-pct` CSS variable updated on scroll
6. **Back to top** — `.back-to-top.visible` when scrollY > 400
7. **Q&A accordion** — `.qa-header` click toggles `.qa-item.active`
8. **Collapsible toggle** — `.collapsible-header` click
9. **Tab switcher** — `.tab-btn[data-tab]` switches `.tab-panel` visibility, scoped to parent container
10. **Highlight.js** — `hljs.highlightAll()` on load, line numbers injected
11. **Tooltip touch** — tap to show `.tooltip-content.visible`
12. **Popup system** — `data-popup` triggers `openPopup(id)`, close via overlay/X/ESC
13. **Keyboard a11y** — Enter/Space on `role="button"` elements
14. **ARIA updates** — `aria-expanded` auto-updated after clicks
15. **Copy to clipboard** — button injected into `.macos-titlebar`, 1.5s checkmark feedback
16. **Scroll-reveal** — IntersectionObserver fades in cards/callouts (respects prefers-reduced-motion)
17. **Cmd+K search** — command palette searches all `.section[id]` titles

---

## 10. HTML PAGE BOILERPLATE

### Topic Page Head
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{Pattern Name} — System Design Wiki</title>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>{EMOJI}</text></svg>">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/csharp.min.js"></script>
  <link rel="stylesheet" href="../../../shared/styles.css">
  <script>(function(){var t=localStorage.getItem('wiki-theme');if(t&&t!=='navy')document.documentElement.setAttribute('data-theme',t);})()</script>
</head>
<body data-accent="{color}">
```

### Topic Page Structure
```html
<header class="top-toolbar">
  <div class="toolbar-left">
    <button class="fab-btn" id="expandAllBtn" aria-label="Expand or collapse all sections">
      <i class="fa-solid fa-angles-down"></i>
    </button>
    <a href="../../index.html" class="fab-btn fab-back" aria-label="Back to LLD Hub">
      <i class="fa-solid fa-arrow-left"></i>
    </a>
  </div>
  <div class="toolbar-right">
    <!-- theme switcher + fullscreen -->
  </div>
</header>

<div class="hero" id="hero">
  <div class="hero-badge"><i class="fa-solid fa-shapes icon-gap"></i>GoF Creational Pattern</div>
  <h1>{Pattern Name}</h1>
  <p class="hero-subtitle">{GoF definition}</p>
  <div class="hero-meta">
    <span><i class="fa-solid fa-comments"></i> {N} Q&As</span>
    <span><i class="fa-solid fa-bug"></i> {N} Bug Studies</span>
    <span><i class="fa-solid fa-triangle-exclamation"></i> {N} Pitfalls</span>
    <span><i class="fa-solid fa-flask-vial"></i> {N} Testing Strategies</span>
    <span><i class="fa-solid fa-code"></i> C# / .NET</span>
  </div>
</div>

<main class="wiki-container">
  <!-- 24 sections with comment separators -->
  <!-- ========== 1. TL;DR ========== -->
  <!-- ========== 2. PREREQUISITES ========== -->
  <!-- ... through ... -->
  <!-- ========== 24. RELATED TOPICS ========== -->
</main>

<!-- popup overlays (Section 6 Jr vs Sr solutions) -->
<footer class="footer">...</footer>
<button class="back-to-top" id="backToTop">...</button>
<script src="../../../shared/scripts.js"></script>
</body></html>
```

---

## 11. SVG DIAGRAM CONVENTIONS

- Custom SVGs (NOT Mermaid.js — CDN removed)
- Use CSS variables for theme support: `var(--accent-primary)`, `var(--bg-secondary)`, `var(--text-primary)`, `var(--text-muted)`, `var(--border-color)`
- RGB versions for opacity: `rgba(var(--accent-primary-rgb), 0.06)`
- Wrapper: `<div class="uml-diagram-wrapper">`
- SVG: `<svg class="uml-svg" viewBox="..." xmlns="..." role="img" aria-labelledby="{title-id}">`
- Must include `<title id="{title-id}">` for accessibility
- Generic GoF naming (Creator, Product, ConcreteCreator — not C#-specific)
- Font families: `'Inter', sans-serif` for labels, `'JetBrains Mono', monospace` for code
- Legend explaining relationship arrows (extends, implements, uses, creates)

---

## 12. BUG CASE STUDY FORMAT (Two-Tab Pattern)

Each bug uses a tab-container with Buggy Code and Fix tabs:

```html
<div class="card">
  <h3 class="card-title" ...><i class="fa-solid fa-skull-crossbones text-red"></i> Bug N: Title</h3>
  <div class="card-body">
    <div class="callout callout-danger">
      <div class="callout-title"><i class="fa-solid fa-bolt"></i> The Incident</div>
      <p class="body-text"><strong>Year, context, .NET version.</strong> What happened...</p>
    </div>
    <h3 class="sub">Time to Diagnose</h3>
    <p class="body-text">X hours — why it was hard to find.</p>

    <div class="tab-container mt-sm">
      <div class="tab-header" role="tablist">
        <button class="tab-btn active" data-tab="bugN-bad" ...>Buggy Code</button>
        <button class="tab-btn" data-tab="bugN-fix" ...>Fix</button>
      </div>
      <div class="tab-panel active" id="bugN-bad" role="tabpanel">
        <!-- Full buggy implementation with // ❌ annotations -->
      </div>
      <div class="tab-panel" id="bugN-fix" role="tabpanel">
        <!-- Full fix with // ✅ annotations -->
      </div>
    </div>

    <div class="callout callout-info mt-sm">
      <div class="callout-title"><i class="fa-solid fa-circle-info"></i> Lesson Learned</div>
      <p class="body-text">Key takeaway...</p>
    </div>
  </div>
</div>
```

**Tab ID convention:** `bug{N}-bad` / `bug{N}-fix` for factory, `sbug{N}-bad` / `sbug{N}-fix` for singleton (avoid collision).

---

## 13. SINGLETON PAGE — COMPLETED CONTENT

**File:** `lld/topics/design-patterns/singleton.html` (~3977 lines)
**Accent:** cyan/blue | **Favicon:** 1️⃣

| # | Section | Key Content |
|---|---------|------------|
| 1 | TL;DR | Anti-pattern warning callout |
| 2 | Prerequisites | Static members, thread safety, Lazy<T>, DI |
| 3 | Analogies | President, Sun, Task Manager, Clipboard |
| 4 | UML | SVG: Singleton + Client, 2 participants |
| 5 | Code | 3 tabs: Lazy<T>, Double-Check Lock, DI |
| 6 | Jr vs Sr | Logger problem, 3 popup solutions |
| 7 | Evolution | 6 eras: .NET 1.0 → .NET 9 HybridCache |
| 8 | .NET Core | SVG DI lifetime diagram + 5 framework examples |
| 9 | When To Use | 5+5 items + decision framework |
| 10 | Comparisons | vs Static, vs Monostate, vs DI AddSingleton |
| 11 | SOLID | Honest: SRP=Depends, ISP=Depends, DIP=Can Violate |
| 12 | Bug Studies | 6 bugs, two-tab format (race condition, captive dep, lazy exception, socket exhaustion, mutable state leak, event leak) |
| 13 | Pitfalls | 10 (includes Generic Singleton<T>, event leaks) |
| 14 | Testing | 4 strategies with code |
| 15 | Performance | Access overhead, memory impact, contention |
| 16 | Pitch | 90-second interview script |
| 17 | Q&As | 29 (Easy/Medium/Hard, Blazor, lock-free, LazyThreadSafetyMode) |
| 18 | Exercises | 4 with hints + solutions |
| 19 | Cheat Sheet | 3 cards: classic, DI, key rules |
| 20 | Deep Dive | CPU memory model, volatile, Lazy<T> internals |
| 21 | Mini-Project | Rate Limiter, 3-attempt progression |
| 22 | Migration | 4-step Classic→DI |
| 23 | Checklist | 12 items + Roslyn analyzers |
| 24 | Related | Factory Method, DI, Strategy |

---

## 14. FACTORY METHOD PAGE — COMPLETED CONTENT

**File:** `lld/topics/design-patterns/factory-method.html` (4831 lines)
**Accent:** purple (`data-accent="purple"`) | **Favicon:** 🏭

| # | Section | Key Content |
|---|---------|------------|
| 1 | TL;DR | Red callout: "just need DI?" + quick code |
| 2 | Prerequisites | Interfaces, DI, Generics, OCP, Singleton |
| 3 | Analogies | Restaurant Kitchen (main) + Uber, Printer, Pizza Franchise |
| 4 | UML | SVG: 4 GoF participants (Creator, ConcreteCreator, Product, ConcreteProduct) |
| 5 | Code | 3 tabs: Classic virtual, Interface-based, DI-integrated |
| 6 | Jr vs Sr | Payment processor, 3 popup solutions (popup-hardcoded, popup-switch, popup-untestable) |
| 7 | Evolution | 6 eras: .NET 1.0 → .NET 9+ HybridCache + assembly scanning |
| 8 | .NET Core | SVG category diagram + 8 examples (IHttpClientFactory, IDbContextFactory, IAuthenticationHandlerProvider, IServiceScopeFactory, IOptionsFactory, Keyed Services, IHealthCheck, IMiddlewareFactory) |
| 9 | When To Use | 5+5 items + ASCII decision flowchart (DI vs Keyed vs Factory vs Abstract Factory vs Builder) |
| 10 | Comparisons | 4 grids: vs Simple Factory, Abstract Factory, Builder, Strategy |
| 11 | SOLID | OCP=Superpower⭐, LSP=Depends, ISP=Depends (honest trade-offs) |
| 12 | Bug Studies | 6 bugs, two-tab format (Service Locator disguise, Scoped-from-Singleton, Stale cache, Undisposed, Circular dependency, Thread-unsafe dict init) |
| 13 | Pitfalls | 10 (single type, God factory, object/dynamic, static, leaking, side effects, disposal, non-exhaustive, swallowing exceptions, config coupling) |
| 14 | Testing | 4 strategies: mock factory, test products, integration (WebApplicationFactory), exhaustiveness (enum loop) |
| 15 | Performance | Benchmark table (new→Func→interface→Activator→reflection), GC pressure analysis, FrozenDictionary benchmarks, ObjectPool, source generators |
| 16 | Pitch | 90-second interview script (5 talking points) |
| 17 | Q&As | 29 (5 Easy, 7 Medium, 17 Hard — versioning, lifetime-aware, FrozenDictionary, hot-reload, MediatR, IOptionsFactory internals) |
| 18 | Exercises | 4: Easy middleware, Medium payment+OCP, Medium export+decorator, Hard plugin |
| 19 | Cheat Sheet | 3 cards: Classic, DI-Integrated, Decision Rules |
| 20 | Deep Dive | Open generic registration internals, Func<T> as factory, generic constraints, covariance |
| 21 | Mini-Project | Report Generator, 3 attempts, 6-tab Attempt 3 (Interface, PdfGenerator, Program.cs, Tests, HealthCheck, LoggingDecorator) + Production Wins callout |
| 22 | Migration | 4-step: Extract static → Interface → DI → Keyed Services |
| 23 | Checklist | 12 items + 5 Roslyn analyzers (CS8509, CA1822, CA1063, CA2000, DI analyzers) |
| 24 | Related | Abstract Factory, Builder, Strategy, Prototype, Singleton, DI |

---

## 15. KEY TECHNICAL DECISIONS & AUDIT HISTORY

### Architecture Decisions
- Replaced all Mermaid diagrams with custom SVGs (CSS variables for theme support)
- Mermaid.js CDN removed from singleton.html
- Dead `href="#"` links changed to `<span>` / `<div>` for non-existent pages
- Bug case studies use two-tab format (Buggy Code / Fix) — updated in BOTH singleton and factory-method
- Exercise cards use `exercise-card` pattern with nested collapsible Hints/Solution

### Audit Fixes Applied (Singleton)
- Q16: Fixed incorrect .NET 8 disposal claim (externally-created instances are NOT disposed by container)
- Q8: Replaced AppDomain→AssemblyLoadContext, BinaryFormatter→System.Text.Json
- Pitfall 4: Fixed incorrect "subclass calls private ctor" wording
- AutoMapper wrongly listed as Transient → replaced with IEmailSender
- AsyncLazy: Removed Task.Run wrapper, runs on calling thread
- Hero metadata updated to match actual counts

### Factory Method Quality Passes
- Section 8 expanded from 4 to 8 framework examples
- Section 12 expanded from 5 to 6 bug studies (added thread-unsafe dict init)
- Section 13 expanded from 9 to 10 pitfalls (added config coupling)
- Section 17 expanded from 25 to 29 Q&As (added versioning, lifetime-aware, FrozenDictionary, hot-reload)
- Section 7 expanded from 5 to 6 eras (added .NET 9+)
- Section 9 added ASCII decision flowchart
- Section 11 made honest (LSP/ISP → Depends instead of all-green)
- Section 15 deepened with GC pressure + FrozenDictionary benchmarks
- Section 21 expanded from 4 to 6 tabs (added HealthCheck + LoggingDecorator)
- Hero meta badges updated to match actual counts (29 Q&As, 6 Bugs, 10 Pitfalls)

---

## 16. CODE BLOCK RULES

- First line of `<pre><code>` must start IMMEDIATELY after `<div class="macos-body">` with NO leading whitespace
- HTML entities in code: `&lt;` `&gt;` `&amp;` — always escape in `<pre><code>` blocks
- Language class: `language-csharp`
- Comment separators before sections: `<!-- ========== {N}. {NAME} ========== -->`
- Buggy code annotations: `// ❌ Description`
- Fix code annotations: `// ✅ Description`
- Runtime walkthrough comments explain what happens step by step

---

## 17. SECTION ICON CONVENTIONS

### Section Header Colors Used
| Color Class | Icon Color | Used For |
|-------------|-----------|----------|
| `blue` | Blue | TL;DR, .NET Core, Q&As, Related Topics |
| `purple` | Purple | Prerequisites, UML, Comparisons, SOLID, Deep Dive, Mini-Project |
| `green` | Green | Code, When To Use, Testing, Cheat Sheet |
| `yellow` | Yellow | Analogies, Pitfalls, Exercises, Checklist |
| `red` | Red | Bugs |
| `cyan` | Cyan | Evolution, Performance, Pitch, Migration |

### Common Font Awesome Icons
- TL;DR: `fa-bolt`
- Prerequisites: `fa-list-check`
- Analogies: `fa-lightbulb`
- UML: `fa-diagram-project`
- Code: `fa-code`
- Jr vs Sr: `fa-graduation-cap`
- Evolution: `fa-clock-rotate-left`
- .NET Core: `fa-cube`
- When To Use: `fa-check-double`
- Comparisons: `fa-scale-balanced`
- SOLID: `fa-scale-balanced`
- Bugs: `fa-bug`
- Pitfalls: `fa-triangle-exclamation`
- Testing: `fa-flask-vial`
- Performance: `fa-gauge-high`
- Pitch: `fa-microphone`
- Q&As: `fa-comments`
- Exercises: `fa-dumbbell`
- Cheat Sheet: `fa-rectangle-list`
- Deep Dive: `fa-microscope`
- Mini-Project: `fa-rocket`
- Migration: `fa-right-left`
- Checklist: `fa-clipboard-check`
- Related: `fa-signs-post`

---

## 18. RESPONSIVE BREAKPOINTS

- `max-width: 768px` — grids collapse to 1 column, comparison panels stack
- `max-width: 1023px` — dot navigation hidden
- `@media (hover: hover)` — card hover effects only on desktop
- Container max-width: 960px
- Hero padding: 4rem 2rem 3.5rem

---

## 19. ACCESSIBILITY CHECKLIST

- `role="button"` + `tabindex="0"` on all clickable non-button elements
- `aria-expanded="true/false"` on cards, Q&As, collapsibles (auto-updated by JS)
- `aria-selected="true/false"` on tab buttons
- `aria-controls="{id}"` on tab buttons
- `aria-label` on icon-only buttons
- SVG diagrams: `role="img"` + `aria-labelledby="{title-id}"` + `<title>`
- Search results: `role="listbox"` + `role="option"`
- `prefers-reduced-motion: reduce` disables scroll-reveal animations
- Keyboard: Enter/Space activates, Arrow keys navigate search, ESC closes overlays

---

## 20. PATTERNS TO FOLLOW FOR NEXT PAGES

When building the next topic page (Abstract Factory, Builder, etc.):

1. **Read `page-spec.md` first** — it's the definitive build guide
2. **Copy factory-method.html as template** — it has the most polished structure
3. **Follow the 24-section order exactly** — same IDs, same comment separators
4. **Match quality bars:**
   - 6+ bug studies (two-tab format)
   - 10+ pitfalls
   - 29+ Q&As (5 Easy, 7 Medium, 17+ Hard)
   - 4+ exercises with hints + solutions
   - 3-attempt mini-project with production concerns (health checks, metrics, disposal)
   - Honest SOLID mapping (not all green)
   - Decision flowchart in When To Use
   - Performance benchmarks with numbers
5. **SVG diagrams** — custom, using CSS variables, generic GoF naming
6. **Pick unique accent color** per page
7. **Pick unique emoji favicon** per page
8. **Update `lld/index.html`** — change card from "Coming Soon" to "Ready" with link
9. **Update hero meta badges** to match actual counts after all additions
