# System Guide — Complete Project Knowledge Base

---

## 1. PROJECT OVERVIEW

**What:** A comprehensive LLD (Low-Level Design) guide as a static HTML website. Dark themed with teal/cyan accent, premium visual design (Linear/Vercel-tier). C# / .NET Core focused.

**Location:** `c:/Users/Rafikul/Desktop/Learn/System Design/`

**Scope:** 110 topics across 4 page types (23 Design Patterns, 5 SOLID, 72 Case Studies, 10 Advanced). Currently 15 complete pages (Singleton, Factory Method, Abstract Factory, Builder, Prototype, SRP, OCP, LSP, ISP, DIP, Strategy, Observer, Decorator, Parking Lot), 95 coming soon.

**GitHub:** `https://github.com/rafik-786/system-design.git` (branch: `main`)

**Key Files:**
- Master Plan: `C:\Users\Rafikul\.claude\plans\dynamic-tumbling-ritchie.md`
- Session State: `c:/Users/Rafikul/Desktop/Learn/System Design/.claude/SESSION.md`
- Build Spec: `page-spec.md` (root of project — 1600+ lines, 33 component patterns + build rules)
- Case Study Spec: `case-study-spec.md` (root of project — 18-part framework for all case study pages)

---

## 2. USER PREFERENCES

- Don't ask permission for file operations in the project folder
- Don't ask what to do — read SESSION.md and resume
- Keep English simple but use proper jargon with tooltips
- No arbitrary limits on content
- Code windows: scrollable + tabbed, never long blocks
- **Tone: friendly learning, NOT stiff professional** — jokes, casual remarks, personality welcome
- **CRITICAL — Beginner-first writing (USER MANDATE):**
  - **WHY this project exists:** Books are too hard to understand (dense academic language), YouTube videos don't cover everything (surface-level). System Guide = textbook depth + YouTube clarity. If our content is hard to read, we've failed at the project's core purpose.
  - If a layperson/non-technical person can't understand it, the content is BAD
  - ALWAYS explain core concepts in plain English FIRST, then code
  - Code is just an illustration of the concept, NOT the concept itself
  - Never jump to C#/.NET implementation without building understanding first
  - A reader should understand the pattern as an IDEA even without knowing C#
  - Progression: Plain English → Analogy → Visual/Diagram → Then code
  - Test: "Would a smart 15-year-old understand the first paragraph?"
  - **Jargon is NOT banned** — technical terms ARE needed for career growth
  - **But warm up first** — introduce with plain English, THEN give the jargon name
  - **Never use jargon before explaining it in main text** — tooltips are bonus, not substitute
  - **One new term per paragraph** in early sections — don't dump 5 terms in one sentence
  - **"Explain to a friend" test** — if it sounds like a textbook, rewrite it
  - **Page structure is GOOD** (24 sections, tabs, cards) — language within is the problem
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
│   ├── index.html                          — LLD hub (23 patterns + 5 SOLID + 72 case studies + 10 advanced)
│   └── topics/
│       └── design-patterns/
│           ├── singleton/
│           │   └── csharp.html             — COMPLETE (4220+ lines, 24 sections, favicon: 1️⃣)
│           ├── factory-method/
│           │   ├── csharp.html             — COMPLETE (4837 lines, 24 sections, favicon: 🏭)
│           │   └── java.html               — COMING SOON placeholder
│           └── abstract-factory/
│               ├── csharp.html             — COMPLETE (4478 lines, 24 sections, favicon: 🏗️)
│               └── java.html               — COMING SOON placeholder
│       └── principles/
│           ├── srp/
│           │   ├── csharp.html             — COMPLETE (4515 lines, 24 sections, favicon: 🎯)
│           │   └── java.html               — COMING SOON placeholder
│           ├── ocp/
│           │   ├── csharp.html             — COMPLETE (3944 lines, 24 sections, favicon: 🚪)
│           │   └── java.html               — COMING SOON placeholder
│           └── lsp/
│               ├── csharp.html             — COMPLETE (3604 lines, 24 sections, favicon: 🔄)
│               └── java.html               — COMING SOON placeholder
│       └── case-studies/
│           └── parking-lot/
│               ├── csharp.html             — COMPLETE (5862 lines, 24 sections, 107 tooltips, 23 SVGs, favicon: 🅿️) ← RE-ENRICHED
│               └── java.html               — COMING SOON placeholder
│       └── design-patterns/
│           └── observer/
│               ├── csharp.html             — COMPLETE (5827 lines, 24 sections, 60 tooltips, favicon: 👁️)
│               └── java.html               — COMING SOON placeholder
│           └── decorator/
│               ├── csharp.html             — COMPLETE (5775 lines, 24 sections, 50 tooltips, favicon: 🎁)
│               └── java.html               — COMING SOON placeholder
└── hld/                                    — Coming soon
```

### Multi-Language Architecture (NEW)
- Each topic is a **folder** (not a file): `factory-method/csharp.html`, `factory-method/java.html`
- Each language file is a **complete standalone page** (theory duplicated, not shared)
- Language switcher in toolbar navigates between sibling files (e.g. `csharp.html` ↔ `java.html`)
- JS detects current language from filename, saves preference to `localStorage('wiki-language')`
- Languages without content show a "Coming Soon" page with hero + link back to C# version
- CSS: `.lang-switcher`, `.lang-dropdown`, `.lang-option`, `.lang-swatch` (cloned from theme switcher)
- JS: Section 4c in scripts.js — navigation-based (not toggle-based)

### Relative Path Patterns
- Home to shared: `shared/styles.css`
- LLD hub to shared: `../shared/styles.css`
- Topic page to shared: `../../../../shared/styles.css` (4 levels deep — topic/lang/csharp.html)

---

## 4. LLD HUB — ALL TOPICS & STATUS

### Ready Pages (14 complete)
| Page | Type | Lines | Tooltips | Accent |
|------|------|-------|----------|--------|
| SRP | SOLID | 4,991 | 54 | green |
| OCP | SOLID | 4,446 | 53 | purple |
| LSP | SOLID | 4,907 | 48 | cyan |
| ISP | SOLID | 4,752 | 52 | — |
| DIP | SOLID | 4,496 | 50 | — |
| Strategy | Pattern | 5,316 | 45 | purple |
| Singleton | Pattern | 5,333 | 47 | cyan/blue |
| Factory Method | Pattern | 5,862 | 49 | purple |
| Observer | Pattern | 6,503 | 56 | green |
| Decorator | Pattern | 7,006 | 50 | purple |
| Abstract Factory | Pattern | 5,415 | 53 | green |
| Builder | Pattern | 5,321 | 51 | cyan |
| Prototype | Pattern | 5,071 | 55 | — |
| Parking Lot | Case Study | 6,709 | 103 | orange |

### LLD Hub Features (`lld/index.html`)
- Floating "Study Next" widget — 110 topics, localStorage persistence, full list view, reset button
- Case studies: Starter visible, +63 upcoming behind inline toggle
- Coming-soon items as compact `soon-pill` pills (not full cards)
- Sticky nav: SOLID | Patterns | Case Studies | Advanced

### Case Studies (72) — ALL Coming Soon

**Starter (9)** — after Phase 4 (15 patterns):
1. Parking Lot System (Easy) — **Ready** — Strategy, Result Pattern, Singleton (DI), Decorator | accent: orange, 4902 lines, 60 tooltips, 13 SVGs ← ENRICHED
2. Tic-Tac-Toe (Easy) — Strategy, State, Observer
3. Vending Machine (Easy) — State, Strategy
4. LRU Cache (Medium) — Proxy, Strategy, Singleton
5. Logging Framework (Medium) — Decorator, Singleton, Strategy
6. Snake & Ladder (Medium) — Strategy, State, Factory
7. Shopping Cart System (Easy) — Strategy, Observer, Composite
8. Review & Rating System (Easy) — Strategy, Observer
9. Plugin System (Medium) — Strategy, Factory, Composite

**Intermediate (22)** — after Phase 5 (19 patterns):
10. Library Management (Medium) — Factory, Strategy, Observer
11. Hotel Booking (Medium) — Builder, Strategy, Observer
12. Movie Ticket Booking (Medium) — Builder, Strategy, State
13. Elevator System (Medium) — Strategy, State, Command
14. Car Rental System (Medium) — Factory, State, Strategy
15. Restaurant Management (Medium) — Command, Observer, Strategy
16. Task Management (Medium) — Command, Observer, State
17. Digital Wallet Service (Medium) — Command, Observer, State
18. Notification System (Medium) — Observer, Strategy, Chain of Resp
19. Calendar App (Medium) — Observer, Composite, Builder
20. Inventory Management (Medium) — Observer, Strategy, Singleton
21. In-Memory File System (Medium) — Composite, Iterator, Strategy
22. Rate Limiter (Medium) — Strategy, Singleton, Proxy
23. Stack Overflow / Q&A (Medium) — Observer, Strategy, State
24. Pub-Sub Messaging (Medium) — Observer, Mediator
25. Course Registration (Medium) — Observer, State, Strategy
26. Minesweeper (Medium) — State, Observer, Strategy
27. ATM System (Medium) — State, Chain of Resp
28. Deck of Cards (Easy) — Factory, Iterator
29. Traffic Signal Control (Easy) — State, Observer, Mediator
30. Customer Support Ticketing (Medium) — State, Chain of Resp, Observer
31. Online Examination System (Medium) — Strategy, State, Factory

**Advanced (20)** — after learning all 23 patterns:
32. Chess Game (Hard) — Strategy, State, Command, Memento
33. Splitwise / Expense Sharing (Hard) — Strategy, Observer, Mediator
34. Online Shopping / Amazon (Hard) — Abstract Factory, Strategy, State
35. Ride-Sharing / Uber (Hard) — Strategy, Observer, State, Mediator
36. Music Streaming / Spotify (Hard) — Iterator, Strategy, Observer
37. Stock Brokerage (Hard) — Observer, Strategy, Command
38. Food Delivery / Swiggy (Hard) — Strategy, Observer, State, Chain of Resp
39. Airline Management (Hard) — Strategy, State, Builder
40. Social Network / LinkedIn (Hard) — Observer, Mediator, Composite
41. CricInfo / Sports Scoring (Hard) — Observer, State, Strategy
42. Online Auction System (Hard) — Observer, State, Strategy
43. Payment Gateway / Stripe (Hard) — Strategy, State, Observer
44. Chat Application / WhatsApp (Hard) — Mediator, Observer, State
45. Collaborative Text Editor (Hard) — Command, Observer, Memento
46. Task / Job Scheduler (Hard) — Strategy, Command, State
47. Social Media Feed (Hard) — Observer, Strategy, Iterator
48. Circuit Breaker (Hard) — State, Proxy, Observer
49. Workflow Engine (Hard) — State, Command, Template Method
50. Rules Engine (Hard) — Strategy, Interpreter, Chain of Resp
51. Event Sourcing System (Hard) — Command, Memento, Observer

**Specialized — Healthcare & HR (4):**
52. Appointment Booking (Medium) — State, Observer, Factory
53. Employee Management (Medium) — Composite, Observer, State
54. Payroll System (Hard) — Strategy, Command, Template Method
55. Permission / RBAC (Medium) — Composite, Strategy, Chain of Resp

**Specialized — Logistics & Reservations (3):**
56. Order & Delivery System (Medium) — State, Strategy, Observer
57. Train / Bus Ticket Booking (Medium) — State, Observer, Strategy
58. Flight Booking System (Hard) — State, Strategy, Builder

**Specialized — Media & Content (3):**
59. Video Platform / YouTube (Hard) — Observer, Strategy, Decorator
60. Streaming Service / Netflix (Hard) — State, Strategy, Decorator
61. Blog / CMS Platform (Medium) — Template Method, Observer, Strategy

**Specialized — Smart / IoT (2):**
62. Smart Home System (Hard) — Observer, Command, Facade
63. Thermostat Control (Medium) — State, Mediator, Observer

**Specialized — Design Tools (2):**
64. Whiteboard / Drawing App (Hard) — Command, Memento, Composite
65. Spreadsheet / Excel-like (Hard) — Observer, Composite, Command

**Specialized — Classic Data Structures (3):**
66. HashMap Implementation (Medium) — Iterator, Strategy
67. Thread Pool (Hard) — Command, State, Template Method
68. Connection Pool (Medium) — Factory, Singleton

**Specialized — Auth & Infrastructure (4):**
69. Authentication System (Hard) — Chain of Resp, Strategy, Observer
70. URL Shortener (Medium) — Factory, Strategy, Singleton
71. In-Memory Key-Value Store (Hard) — Strategy, Observer, Factory
72. Autocomplete / Typeahead (Medium) — Strategy, Observer

**Specialized — Enterprise (1):**
73. Multi-Tenant SaaS App (Hard) — Abstract Factory, Strategy, Proxy

### Advanced Topics (10) — ALL Coming Soon
1. Concurrency Patterns — async/await, Task, Channel<T>, SemaphoreSlim
2. Unit Testing Patterns — Test doubles, AAA, mocking
3. DI Deep Dive — Lifetimes, scopes, keyed services
4. Repository & Unit of Work — EF Core abstraction debate
5. Refactoring Patterns — Extract Method, Replace Conditional with Polymorphism
6. Reflection & Metaprogramming — Source generators, expression trees
7. DDD Tactical Patterns — Entities, Value Objects, Aggregates, Domain Events
8. CQRS — Command/Query separation, MediatR
9. Clean Architecture — Dependency rule, layers, ports & adapters
10. Event-Driven Architecture — Domain events, integration events

### Learning Path Order (13 phases — also the CONTENT GENERATION ORDER)
**Key principle:** Learn patterns → practice immediately → next group. Case studies interleaved, not dumped at end.
**Content should be built in this exact order** — each new page extends the unbroken playable path.

1. **SOLID Foundations** (5) ✅ all done
2. **Starter Patterns** (5): Strategy ✅, Singleton ✅, Factory Method ✅, Observer ✅, Template Method ❌
3. **Practice · after Starter** (8): Parking Lot ✅, Tic-Tac-Toe, Vending Machine, Snake & Ladder, Shopping Cart, Review & Rating, Logging Framework, Plugin System
4. **Structural Patterns** (5): Decorator ✅, Adapter, Facade, Proxy, Composite
5. **Practice · after Structural** (4): Notification System, Library Management, Restaurant Management, Task Management
6. **Creational Depth** (3): Abstract Factory ✅, Builder ✅, Prototype ✅ — all done
7. **Practice · after Creational** (4): ATM System, Deck of Cards, Hotel Booking, Car Rental
8. **Behavioral Patterns** (6): State, Command, Chain of Responsibility, Mediator, Iterator, Memento
9. **Practice · after Behavioral** (7): Traffic Signal, Elevator System, Movie Ticket Booking, Digital Wallet, Calendar App, Minesweeper, Chess Game
10. **Specialized Patterns** (4): Bridge, Flyweight, Visitor, Interpreter
11. **Practice · after Specialized** (3): In-Memory File System, Spreadsheet, Whiteboard App
12. **Complex Systems** (11): Uber, Food Delivery, Online Shopping, Music Streaming, Stock Brokerage, Social Network, WhatsApp, Collaborative Editor, Online Auction, Splitwise, Social Media Feed
13. **Infrastructure** (15): LRU Cache, Rate Limiter, HashMap, Thread Pool, Connection Pool, Key-Value Store, Job Scheduler, Circuit Breaker, Pub-Sub Messaging, Event Sourcing, URL Shortener, Autocomplete, Payment Gateway, Workflow Engine, Rules Engine
14. **Booking & Commerce** (6): Appointment Booking, Ticket Booking, Flight Booking, Airline Management, Order & Delivery, Inventory Management
15. **Enterprise & SaaS** (6): Employee Management, Payroll System, Permission/RBAC, Authentication, Support Ticketing, Multi-Tenant SaaS
16. **Content & Media** (6): Video Platform, Streaming Service, Blog/CMS, Course Registration, Online Examination, Sports Scoring
17. **IoT & Simulation** (2): Smart Home, Thermostat Control
18. **Mastery** (10): Concurrency Patterns, Unit Testing Patterns, DI Deep Dive, Repository & Unit of Work, Refactoring Patterns, Reflection & Metaprogramming, DDD Tactical Patterns, CQRS, Clean Architecture, Event-Driven Architecture

**Next to build:** Template Method → Tic-Tac-Toe → Vending Machine → ...

---

## 5. 24-SECTION ORDER (MANDATORY FOR ALL TOPIC PAGES)

| # | Section | HTML id | Icon Color | Icon |
|---|---------|---------|------------|------|
| 1 | TL;DR | `tldr` | blue | `fa-bolt` |
| 2 | Prerequisites | `prereqs` | yellow | `fa-book-open` |
| 3 | Real-World Analogies | `analogies` | purple | `fa-lightbulb` |
| 4 | Core Pattern & UML | `uml` | blue | `fa-diagram-project` |
| 5 | Code Implementations | `code` | green | `fa-code` |
| 6 | Jr vs Sr Implementation | `jr-sr` | cyan | `fa-users` |
| 7 | Evolution of [Pattern] in .NET | `evolution` | green | `fa-timeline` |
| 8 | [Pattern] in the .NET Framework | `dotnet-examples` | blue | `fa-cube` |
| 9 | When To Use / When Not To | `when` | green | `fa-check-double` |
| 10 | Comparisons | `comparison` | purple | `fa-scale-balanced` |
| 11 | SOLID Mapping | `solid` | purple | `fa-scale-balanced` |
| 12 | Bug Case Studies | `bugs` | red | `fa-bug` |
| 13 | Pitfalls & Anti-Patterns | `pitfalls` | yellow | `fa-triangle-exclamation` |
| 14 | Testing Strategies | `testing` | green | `fa-flask-vial` |
| 15 | Performance Considerations | `performance` | yellow | `fa-gauge-high` |
| 16 | How to Explain in an Interview | `pitch` | cyan | `fa-microphone` |
| 17 | Interview Q&As | `qa` | blue | `fa-comments` |
| 18 | Practice Exercises | `exercises` | cyan | `fa-dumbbell` |
| 19 | Cheat Sheet | `cheatsheet` | green | `fa-table-cells` |
| 20 | Deep Dive (topic-specific) | varies | red | `fa-shield-halved` (varies) |
| 21 | Real-World Mini-Project | `mini-project` | purple | `fa-rocket` |
| 22 | Migration Guide | `migration` | cyan | `fa-right-left` |
| 23 | Code Review Checklist | `code-review` | green | `fa-clipboard-check` |
| 24 | Related Topics / What to Study Next | `related` | blue | `fa-arrow-right` |

---

## 6. THEME SYSTEM & VISUAL DESIGN

### Brand: "System Guide" (formerly "System Design Wiki")
- Rebranded across ALL files (HTML titles, footers, README, page-spec, scripts comment)
- Primary accent: teal `#14b8a6` (was blue `#3b82f6`)
- Secondary accent: sky-blue `#38bdf8`
- Link color: `#5eead4` (was `#93c5fd`)
- RGB tokens: `--accent-primary-rgb: 20, 184, 166`

### 4 Themes (via `[data-theme]` on `<html>`)
| Theme | `--bg-primary` | `--bg-secondary` | `--accent-primary` |
|-------|---------------|------------------|-------------------|
| Navy (default) | `#0f172a` | `#1e293b` | `#14b8a6` (teal) |
| Purple | `#13091f` | `#1e1533` | `#a78bfa` |
| Emerald (was "Green") | `#0a1a14` | `#132d22` | `#34d399` |
| Charcoal | `#121212` | `#1e1e1e` | `#5eead4` (teal-light) |

### Per-Page Accent Colors (via `[data-accent]` on `<body>`)
| Accent | Hex | RGB |
|--------|-----|-----|
| blue | `#3b82f6` | `59,130,246` |
| purple | `#8b5cf6` | `139,92,246` |
| green | `#10b981` | `16,185,129` |
| cyan | `#06b6d4` | `6,182,212` |
| yellow | `#f59e0b` | `245,158,11` |
| red | `#ef4444` | `239,68,68` |

### Premium Visual Effects (CSS-only, in styles.css)
- **Hero**: Animated gradient bg (`heroGradientShift` 15s), dual glowing teal orbs (`::before`), dot grid overlay (`::after`), badge shimmer animation (`badgeShimmer` 4s), animated h1 gradient (`h1GradientFlow` 8s) with drop-shadow
- **Landing cards**: `backdrop-filter: blur(12px)`, entrance animation (`landingCardEntrance` 0.6s with stagger), gradient border glow `::after` on hover, 3D perspective tilt on hover (`perspective(800px) rotateX(1deg)`), icon glow, CTA arrow slide
- **Section headers**: Gradient text on `.section-title`, icon glow + border per color
- **Cards**: Open state glow + depth shadow, hover glow
- **Code windows**: Teal-tinted border, gradient titlebar
- **UML containers**: Radial gradient bg, deeper box-shadows with teal glow, inset top highlight
- **SVG UML diagrams**: Dual-layer `feDropShadow` glow filter, `linearGradient` header fills, teal color scheme fallbacks
- **Progress bar**: Teal glow trail (`box-shadow`)
- **Section dividers**: Wider gradient spread + glow
- **Footer**: Premium redesign — brand mark, nav links, tech stack pill badges, gradient divider, copyright (see section 21)
- **FAB buttons**: Hover glow
- **Back-to-top**: Triple ring glow on hover
- **Scroll-reveal**: 16px travel with spring easing (`cubic-bezier(0.16, 1, 0.3, 1)`)
- **Content links**: Animated underline (`background-size: 0% → 100%`)
- **Q&A items**: Active state glow
- **TL;DR card**: Inner glow + shadow
- **Exercise cards**: Cyan shadow

### Keyframes Added
1. `heroGradientShift` — 15s, background-position shift
2. `badgeShimmer` — 4s, left-to-right sweep
3. `h1GradientFlow` — 8s, background-position shift
4. `landingCardEntrance` — 0.6s, opacity + translateY
5. `landingCardEntranceDim` — same but caps at 0.55 opacity (for --soon cards)

### Code Block Scrollbar Fix
```css
.macos-body pre code { overflow-x: auto !important; scrollbar-width: none; }
.macos-body pre code::-webkit-scrollbar { display: none; }
.macos-body .hljs { overflow-x: auto !important; scrollbar-width: none; }
.macos-body .hljs::-webkit-scrollbar { display: none; }
```
Scrollbar hidden visually but content is still horizontally scrollable.

### Mobile Fixes Applied
- **Prereq items**: Changed from `display: flex` pill layout to `display: block` with absolute-positioned icon. Text flows naturally on all screens. No more word-grid chaos with inline `<code>` and tooltip spans.
- **Callout variants**: Added `callout-red` and `callout-blue` CSS classes (were missing, only `callout-danger` and `callout-info` existed).

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

### Cheat Cards
- Container: `grid-3` > multiple `cheat-card`
- Each: `cheat-card-title` + `cheat-card-body` > `pre` (monospace content)

### Related Topics Section (S24) — UPDATED from Singleton (ground truth)
- Uses `related-grid` > `related-card` pattern (NOT grid-3 + callouts):
  ```html
  <div class="related-grid">
    <div class="related-card">
      <div class="related-card-icon"><i class="fa-solid fa-[icon]"></i></div>
      <div class="related-card-text">
        <h4>[Topic Name]</h4>
        <p>[Brief relationship description]</p>
      </div>
    </div>
  </div>
  ```
- **OLD/WRONG pattern** (Observer has this — needs fixing): `grid-3` + `<a class="card">` callouts / plain callouts with `opacity:0.6`

### CRITICAL: Section → Component Pattern Rules (verified from Singleton PDF)
1. **S6 (Jr vs Sr)**: `callout-info` (Problem Statement) → `tab-container` (Junior | Senior tabs) → Junior has `problem-card` + `solution-btn[data-popup]` → Senior has nested file tabs + `concept-card`. Popup overlays placed outside `<main>` before footer.
2. **S9 (When To Use)**: `when-use-grid` + `when-item` + `when-icon-yes`/`when-icon-no` (NOT `grid-2` with cards)
3. **S10 (Comparisons)**: `comparison-grid` + `comparison-panel` + `vs-badge` (NOT `grid-2` side-by-side)
4. **S12 (Bug Case Studies)**: `card` accordion → `callout-danger` (Incident) → `tab-container` with "Buggy Code" | "Fix" tabs → `callout-info` (Lesson Learned). **NOT** grid-2 side-by-side code.
5. **S13 (Pitfalls)**: `collapsible` elements with Mistake/Why Bad/Fix format. **NOT** `card` accordion.
6. **S18 (Exercises)**: `exercise-card` + nested `collapsible` for Hints/Solution (NOT nested `card`)
7. **S19 (Cheat Sheet)**: `cheat-card` in `grid-3` (NOT plain cards)
8. **S24 (Related)**: `related-grid` + `related-card` (NOT `grid-3` + callout cards)
9. **Tabs**: `tab-header` + `tab-btn[data-tab]` + `tab-panel` (NEVER `tab-nav`, `data-target`, `tab-content`)

### CRITICAL: Standard Section Titles (from Singleton — the ground truth)
| # | Correct Title |
|---|--------------|
| 1 | TL;DR |
| 2 | Prerequisites |
| 3 | Real-World Analogies |
| 4 | Core Pattern & UML |
| 5 | Code Implementations |
| 6 | Jr vs Sr Implementation |
| 7 | Evolution of [Pattern] in .NET |
| 8 | [Pattern] in the .NET Framework |
| 9 | When To Use / When Not To |
| 10 | Comparisons |
| 11 | SOLID Mapping |
| 12 | Bug Case Studies |
| 13 | Pitfalls & Anti-Patterns |
| 14 | Testing Strategies |
| 15 | Performance Considerations |
| 16 | How to Explain in an Interview |
| 17 | Interview Q&As |
| 18 | Practice Exercises |
| 19 | Cheat Sheet |
| 20 | [Topic] Deep Dive |
| 21 | Real-World Mini-Project: [Name] |
| 22 | Migration Guide: [From → To] |
| 23 | Code Review Checklist |
| 24 | Related Topics / What to Study Next |

### Full design reference: See `memory/design-reference.md` for complete section-by-section HTML patterns

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
4c. **Language switcher** — `#langBtn` dropdown, navigation-based (navigates to sibling file e.g. `csharp.html` ↔ `java.html`), saves to `localStorage('wiki-language')`
5. **Progress bar** — `--scroll-pct` CSS variable updated on scroll
6. **Back to top** — `.back-to-top.visible` when scrollY > 400
7. **Q&A accordion** — `.qa-header` click toggles `.qa-item.active`
8. **Collapsible toggle** — `.collapsible-header` click
9. **Tab switcher** — `.tab-btn[data-tab]` switches `.tab-panel` visibility, scoped to parent container
10. **Highlight.js** — `hljs.highlightAll()` on load, line numbers injected
11. **Tooltip smart positioning** — JS-based `position:fixed`, moved to `<body>` to escape transformed ancestors, viewport edge detection, flip below if near top
12. **Popup system** — `data-popup` triggers `openPopup(id)`, close via overlay/X/ESC
13. **Keyboard a11y** — Enter/Space on `role="button"` elements
14. **ARIA updates** — `aria-expanded` auto-updated after clicks
15. **Copy to clipboard** — button injected into `.macos-titlebar`, 1.5s checkmark feedback
16. **Scroll-reveal** — IntersectionObserver fades in cards/callouts (respects prefers-reduced-motion)
17. **Cmd+K search** — command palette searches all `.section[id]` titles

### UML Diagram Zoom (Section 9 in scripts.js)
- **Ctrl+Wheel zoom**: delta ±0.04 per tick (was ±0.1, reduced for finer control)
- **Pinch zoom**: dampened to 40% sensitivity — `scale = 1 + (rawScale - 1) * 0.4`
- **Drag pan**: mouse drag when zoom > 1, touch single-finger pan when zoom > 1
- **Double-click/tap reset**: resets to zoom=1, panX=0, panY=0
- **Pinch-zoom fix**: `justPinched` flag prevents double-tap reset from false-triggering after pinch (two touchend events within 300ms)
- **CSS**: `.uml-diagram-wrapper` has `touch-action: pan-x pan-y` to prevent browser native pinch-zoom from fighting JS zoom
- **State storage**: `svg.dataset.zoom`, `svg.dataset.panX`, `svg.dataset.panY`
- **Transform**: `svg.style.transform = 'translate(panX, panY) scale(zoom)'` with `transformOrigin: '0 0'`
- **Limits**: ZOOM_MIN = 0.5, ZOOM_MAX = 3

---

## 10. HTML PAGE BOILERPLATE

### Topic Page Head
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{Pattern Name} — System Guide</title>
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

## 15. ABSTRACT FACTORY PAGE — COMPLETED CONTENT

**File:** `lld/topics/design-patterns/abstract-factory/csharp.html` (4478 lines)
**Accent:** green (`data-accent="green"`) | **Favicon:** 🏗️

| # | Section | Key Content |
|---|---------|------------|
| 1 | TL;DR | Warning callout: "Don't reach for AF when Factory Method suffices" + quick IUIFactory code |
| 2 | Prerequisites | Factory Method, Interfaces, DI, Generics |
| 3 | Analogies | Furniture Store (IKEA), Car Manufacturer (BMW), Phone Ecosystem (Apple/Android), Restaurant Kitchen |
| 4 | UML | SVG: 8 GoF participants (AbstractFactory, ConcreteFactory1/2, AbstractProductA/B, ProductA1/A2/B1/B2, Client) |
| 5 | Code | 3 tabs: Classic GoF, Modern DI, Keyed Services (.NET 8+) |
| 6 | Jr vs Sr | Giant switch God Factory, 3 popup solutions (proper hierarchy, DI keyed, convention-based) |
| 7 | Evolution | 6 eras: .NET 1.0 provider-specific → .NET 2.0 DbProviderFactory+generics → .NET 3.5-4.0 IoC → .NET Core DI → .NET 6 minimal APIs → .NET 8+ keyed services |
| 8 | .NET Core | 7 GENUINE AF examples: DbProviderFactory, CultureInfo, IHttpClientFactory (named clients), EF Core providers, IFileProvider, IServiceProviderFactory, Encoding |
| 9 | When To Use | 5+5 items + Q1-Q5 decision tree flowchart |
| 10 | Comparisons | 4 grids: vs Factory Method, vs Builder, vs Strategy, vs Service Locator |
| 11 | SOLID | SRP=Green, OCP=Green, LSP=Green, ISP=Yellow (fat interfaces), DIP=Green |
| 12 | Bug Studies | 6 bugs: mixed families, captive dependency, missing family member, keyed service typo, circular dependency, thread-unsafe cache |
| 13 | Pitfalls | 10 (God Factory, family explosion, leaking concrete, ignoring DI, AF for single product, string keys, unsealed factories, mixing at boundary, fat interface, partial registration) |
| 14 | Testing | 4 strategies: test double factory, family consistency, DI container tests, WebApplicationFactory override |
| 15 | Performance | Benchmark table (direct new → Factory Method → AF → DI → reflection), FrozenDictionary, BenchmarkDotNet code |
| 16 | Pitch | 90-second interview script (IKEA analogy → DbProviderFactory → modern DI) |
| 17 | Q&As | 29 (5 Easy, 7 Medium, 17 Hard — keyed services, AOT, covariant returns, plugin arch, parallel creation, ValueTask) |
| 18 | Exercises | 4: Easy notification, Medium cross-database, Hard theme system, Expert cloud provider |
| 19 | Cheat Sheet | 3 cards: Classic AF, DI + Keyed Services, Decision Rules |
| 20 | Deep Dive | Plugin architecture with AssemblyLoadContext, hot-reload factories |
| 21 | Mini-Project | Multi-Database Report Generator, 3 attempts (junior switch → mid interfaces → senior DI+tests) |
| 22 | Migration | 4 steps: identify families → extract interfaces → concrete factories → DI registration |
| 23 | Checklist | 12 items + 4th "Red Flag" column + Roslyn callout |
| 24 | Related | Factory Method, Builder, Prototype, Bridge, DI/IoC |

### Abstract Factory Content Accuracy Fixes Applied
These were caught during multi-round content reviews:

**Section 7 (Evolution Timeline):**
- DbProviderFactory moved from Era 1 (.NET 1.0) to Era 2 (.NET 2.0) — it didn't exist in .NET 1.0
- Era 1 now shows pre-factory provider-specific code (SqlConnection, OleDbConnection)
- Removed `out` variance from Era 2 generics — covariance was .NET 4.0, not 2.0
- Clarified MEF shipped with .NET 4.0 (third-party IoC containers were .NET 3.5)

**Section 8 (.NET Core Examples) — 6 of 7 original cards were wrong or questionable:**
- Card 2: ILoggerFactory → **CultureInfo** (ILoggerFactory is Factory Method — single product type)
- Card 3: AuthenticationBuilder → **IHttpClientFactory** (AuthenticationBuilder is Builder pattern)
- Card 4: IOptionsFactory → **EF Core Database Providers** (IOptionsFactory is Factory Method)
- Card 5: WebApplicationFactory → **IFileProvider** (WebApplicationFactory is a test fixture/builder)
- Card 6: IDistributedCache → **IServiceProviderFactory** (IDistributedCache is Strategy pattern)
- Card 7: IHostBuilder → **Encoding** (IHostBuilder is Builder pattern)

**Key lesson:** Most .NET APIs that "feel like" Abstract Factory are actually Factory Method (single product), Builder (step-by-step), or Strategy (swappable algorithms). True AF requires: (1) multiple distinct product types, (2) swappable families, (3) products within a family guaranteed compatible.

---

## 16. KEY TECHNICAL DECISIONS & AUDIT HISTORY

### Architecture Decisions
- Replaced all Mermaid diagrams with custom SVGs (CSS variables for theme support)
- Mermaid.js CDN removed from singleton.html
- Dead `href="#"` links changed to `<span>` / `<div>` for non-existent pages
- Bug case studies use two-tab format (Buggy Code / Fix) — updated in BOTH singleton and factory-method
- Exercise cards use `exercise-card` pattern with nested collapsible Hints/Solution
- Browser scrollbar hidden (`scrollbar-width: none` + `::-webkit-scrollbar { display: none }`) — gradient progress bar in toolbar replaces it
- Multi-language: separate files per language in topic folders (e.g. `factory-method/csharp.html`, `factory-method/java.html`) — NOT data-lang toggling in single file

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

### Section Header Colors Used (verified from Singleton HTML — ground truth)
| Color Class | Used For |
|-------------|----------|
| `blue` | S1 TL;DR, S4 UML, S8 .NET Framework, S17 Q&As, S24 Related |
| `purple` | S3 Analogies, S10 Comparisons, S11 SOLID, S21 Mini-Project |
| `green` | S5 Code, S7 Evolution, S9 When To Use, S14 Testing, S19 Cheat Sheet, S23 Checklist |
| `yellow` | S2 Prerequisites, S13 Pitfalls, S15 Performance |
| `red` | S12 Bugs, S20 Deep Dive |
| `cyan` | S6 Jr vs Sr, S16 Pitch, S18 Exercises, S22 Migration |

### Font Awesome Icons (verified from Singleton HTML)
- S1 TL;DR: `fa-bolt`
- S2 Prerequisites: `fa-book-open`
- S3 Analogies: `fa-lightbulb`
- S4 UML: `fa-diagram-project`
- S5 Code: `fa-code`
- S6 Jr vs Sr: `fa-users`
- S7 Evolution: `fa-timeline`
- S8 .NET Framework: `fa-cube`
- S9 When To Use: `fa-check-double`
- S10 Comparisons: `fa-scale-balanced`
- S11 SOLID: `fa-scale-balanced`
- S12 Bugs: `fa-bug`
- S13 Pitfalls: `fa-triangle-exclamation`
- S14 Testing: `fa-flask-vial`
- S15 Performance: `fa-gauge-high`
- S16 Pitch: `fa-microphone`
- S17 Q&As: `fa-comments`
- S18 Exercises: `fa-dumbbell`
- S19 Cheat Sheet: `fa-table-cells`
- S20 Deep Dive: `fa-shield-halved` (varies per topic)
- S21 Mini-Project: `fa-rocket`
- S22 Migration: `fa-right-left`
- S23 Checklist: `fa-clipboard-check`
- S24 Related: `fa-arrow-right`

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

## 20. TOOLTIP SYSTEM

### Architecture
- **137 tooltips** across 4 pages: index.html (10), lld/index.html (35), singleton/csharp.html (51), factory-method/csharp.html (41)
- Pattern: `<span class="tooltip-trigger">TERM<span class="tooltip-content">DEFINITION</span></span>`
- Only first occurrence of each term in body text (NOT inside `<code>` blocks)
- Dashed underline (`border-bottom: 1px dashed`) + cursor: help

### Positioning (scripts.js section 11)
- **Problem**: CSS `transform` on parent elements (cards, animations) creates a new containing block, making `position: fixed` relative to the card instead of the viewport
- **Solution**: On show, tooltip-content is **moved to `document.body`** via `appendChild()`, positioned with `position: fixed` using viewport coordinates from `getBoundingClientRect()`, then moved back to original parent on hide
- `_tooltipContent` reference stored on trigger element so `querySelector` still works after reparenting
- `_originalParent` stored on content element for cleanup
- Edge detection: shifts horizontally if overflowing left/right, flips below if near viewport top
- Desktop: `mouseenter`/`mouseleave` with capture phase (`true`) for event delegation
- Touch: click to toggle, click-outside to close

### CSS (styles.css section 28)
- `.tooltip-content`: absolute positioning (CSS fallback), fixed width (`max-content`, `max-width: min(320px, 90vw)`), glass-style bg, teal border, arrow via `::after`
- `.tooltip-content.visible`: `opacity: 1; visibility: visible; pointer-events: auto`
- `.tooltip-content.below`: arrow points up instead of down
- No CSS hover rules — fully JS-controlled

### Tooltip Categories Added
- **Home page**: Design patterns, SOLID, OOP, DI containers, reflection, distributed systems, scalability, load balancing, caching, message queues
- **LLD hub**: All 23 GoF pattern names with definitions, 5 SOLID principles, 3 pattern category headers, DI, Reflection, Metaprogramming, Unit Testing
- **Singleton page**: GoF, DI, ASP.NET Core, thread safety, volatile, lazy init, double-check lock, race condition, captive dependency, socket exhaustion, GC, CLR, memory barriers, instruction reordering, connection pool, request pipeline, live reload + many more
- **Factory Method page**: GoF, DI, polymorphism, OCP, runtime data, handler pooling, JWT, captive dependency, Service Locator, FrozenDictionary, hot path, GC pressure, Gen 0, O(1), virtual methods, inheritance, tight coupling, downcasting, immutable + many more

---

## 21. FOOTER DESIGN

### Structure (all 5 pages)
```html
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-brand"><i class="fa-solid fa-book-open"></i>System Guide</div>
    <p class="footer-tagline">Master system design — ...</p>
    <div class="footer-links"><!-- Home, LLD, GitHub --></div>
    <div class="footer-tech"><!-- HTML, CSS, JS, Zero deps badges --></div>
    <div class="footer-divider"></div>
    <p class="footer-copy">&copy; 2025 Rafikul Alam. Built for learning, open for everyone.</p>
  </div>
</footer>
```

### CSS Classes
- `.footer-inner`: max-width 720px, centered
- `.footer-brand`: 1.125rem bold, teal icon
- `.footer-tagline`: muted, 0.8rem
- `.footer-links`: flex row, icon + text links, hover → teal
- `.footer-tech`: pill badges with teal bg/border, monospace font
- `.footer-divider`: 60px gradient line
- `.footer-copy`: 0.75rem, muted, 70% opacity

### Navigation Links
- Home page: #tracks, #about, GitHub
- LLD hub: ../ (home), GitHub
- Topic pages: ../../../../ (home), ../../../ (LLD), GitHub

---

## 22. CLEAN URLS

### Approach
- Stripped `.html` from ALL internal `<a href>` links across all 5 pages
- `index.html` references → folder path (e.g., `lld/index.html` → `lld/`)
- Topic pages → extensionless (e.g., `singleton/csharp.html` → `singleton/csharp`)
- Works on GitHub Pages, Netlify, Vercel (all resolve extensionless URLs to .html files)

### SPA Router Updates (scripts.js)
- Changed interception rule: now intercepts all internal links, not just `.html` links
- `if (/\.\w+$/.test(href) && !href.endsWith('.html')) return;` — skips .css/.js/.png but allows both clean and .html URLs
- Language switcher: handles both clean (`/csharp`) and `.html` (`/csharp.html`) URL formats
- `pathParts` parsing strips trailing slashes before extracting current file name

---

## 23. SVG UML SPACING CONVENTIONS

### Header Heights
- **Stereotyped boxes** (<<abstract>>, <<interface>>): **58px** header — stereotype at y=42, class name at y=64, divider at y=78
- **Plain boxes** (concrete classes): **48px** header — class name at ~y=36, divider at ~y=48

### Padding Rules
- Left text padding: x=320 for glyphs, x=336 for text content
- Row gaps: 28px between member rows
- Bottom padding: ≥22px from last text to box bottom
- Note tspan dy: 20px

### Singleton SVG
- viewBox: `0 0 680 380`
- Singleton box: height=320, header=48px
- Client box: width=190, height=130, header=48px
- Legend at y=300

### Factory Method SVG
- viewBox: `0 0 820 480`
- Creator: height=164, header=58px (stereotyped)
- Product: height=138, header=58px (stereotyped)
- ConcreteCreator: at y=286, height=116, header=48px
- ConcreteProduct: at y=286, height=96, header=48px
- Legend at y=430

---

## 24. DESIGN STRUCTURAL FIX (2026-03-07)

**Observer page restructured** to match Singleton ground-truth design. 7 sections fixed:

| Section | Before (WRONG) | After (CORRECT) |
|---------|---------------|-----------------|
| S8 (.NET Framework) | `grid-2` wrapping 6 cards | Flow-based cards (no grid) + `<p>` intro |
| S11 (SOLID Mapping) | `grid-2` with 5 `card open` + code | `table-wrapper` > `<table>` with badges |
| S14 (Testing) | `tab-container` with 4 tabs | 4 `card` accordion elements |
| S15 (Performance) | `tab-container` with 4 tabs | 4 `card` accordion elements |
| S16 (Pitch) | `grid-2` + nested callouts + cards | Single `callout callout-purple` prose |
| S20 (Deep Dive) | `tab-container` with 4 tabs | 4 `card` accordion elements |
| S21 (Mini-Project) | `tab-container` for 3 attempts | 3 `card` accordion + nested tabs in Attempt 3 |

Also fixed: `table-wrap` → `table-wrapper` across entire file (5 occurrences).

**Design-reference.md updated** with extensive ground-truth patterns + critical rules + common mistakes to never repeat.

**Key rule added to memory:** Components MAY be added if needed, but the structural component TYPE for each section MUST NOT deviate from Singleton's design. Extra content = OK; changing card→tab or table→cards = NOT OK.

---

## 25. CONTENT LAYOUT & FORMATTING FIX (2026-03-07)

**Rule**: Content-heavy cards (paragraphs + lists) should be full-width — do NOT wrap in `grid-2`/`grid-3`. Small callout-info cards and cheat-cards CAN stay in grids.

**Observer layout fixes:**
- S3 (Real-World Analogies): Removed `grid-3` wrapper — 3 analogy cards now full-width
- S4 (Core Concepts): Removed `grid-2` wrapper — Four Roles + Push vs Pull cards now full-width
- S3 metadata converted from `<ul>` to `<p class="mb-sm">` blocks with `<hr>` dividers

**Observer encoding fixes (219 broken UTF-8 chars):**
- 164x `â€"` → `—` (em dash)
- 50x `â†'` → `→` (right arrow)
- 5x `â†` → `←` (left arrow)
- Multiple `â"€` → `─`, `âœ"` → `✓`, `âœ—` → `✗`

**Observer bug fixes:**
- Hero-meta: `25 Q&As` → `29 Q&As`
- `class="table-wrapperper"` → `class="table-wrapper"` typo

**Strategy structural fixes:**
- S12 title: "Bug Studies" → "Bug Case Studies"
- S13 title: "Pitfalls" → "Pitfalls &amp; Anti-Patterns"
- S18 title: "Exercises" → "Practice Exercises"
- S24 title: "Related Topics" → "Related Topics / What to Study Next"
- S24 component: `grid-3` + `callout callout-info` → `related-grid` + `related-card`

**Builder structural fixes:**
- S9: Plain `table` → `when-use-grid` with 14 `when-item` elements
- S10: Plain `table` → `comparison-grid` with 3 `comparison-panel` + `vs-badge`
- S13: `card` accordion → `collapsible` elements with Mistake/Why Bad/Fix
- S24 title: "Related Topics" → "Related Topics / What to Study Next"

**page-spec.md updates:**
- Added SVG Diagram Requirements table (9 recommended SVG locations, 5+ minimum)
- S24 title corrected in section order table
- Content formatting rules (no grid on heavy cards, metadata format)

**Structural compliance — ALL PAGES VERIFIED:**
- Singleton: Ground truth (reference page)
- Observer: Fixed S8/S11/S14/S15/S16/S20/S21 (session 24)
- Strategy: Fixed S12/S13/S18/S24 titles + S24 component (this session)
- Builder: Fixed S9/S10/S13/S24 (this session)
- Factory Method: All 4 sections compliant — no changes needed
- Abstract Factory: S9/S10/S13 compliant, S24 title fixed ("Related Topics" → "Related Topics / What to Study Next")

---

## 26. COMMON MISTAKES (FIXED — NEVER REPEAT)

**Full catalog**: `memory/common-mistakes.md` in global auto-memory directory.

### SVG Diamond Fix (Applied 2026-03-08)
- **5 pages fixed**: Singleton, Strategy, Builder, Abstract Factory, Prototype
- **Bug**: `<rect transform="rotate(45)">` created duplicate floating diamonds
- **Fix**: Replaced with `<polygon points="0,-42 84,0 0,42 -84,0">` — proper diamond shape
- **Rule**: NEVER use rotated rect for diamonds. Always use polygon.

### S12/S13/S17 Enrichment (Applied 2026-03-08)
- **Decorator**: 5775→7006 lines. 6 bug SVGs, 8 pitfall code pairs, 15+ Q&A enrichments
- **Singleton**: 4220→5334 lines. 12 SVGs, 16 code windows, 6 "How to Spot" callouts
- **Strategy**: 4447→5316 lines. 15 SVGs, expanded narratives, 10 pitfall code pairs

### User Mandates for Content Quality
- **Extensive SVG usage**: Add SVGs EVERYWHERE a concept can be visualized. Not optional.
- **Tabbed code**: Bad/Good, Before/After, Buggy/Fix comparisons MUST be tabbed, not stacked.
- **Rich prose**: Every answer must be beginner-friendly, self-contained, with walkthroughs.
- **No thin content**: Single-paragraph answers are NOT acceptable for Medium/Hard Q&As.

## 27. PATTERNS TO FOLLOW FOR NEXT PAGES

When building the next topic page (Builder, Prototype, etc.):

1. **Read `page-spec.md` first** — it's the definitive build guide (especially "Common Build Mistakes" and "Build Process" sections)
2. **Follow the 24-section order exactly** — same IDs, same comment separators
3. **Quality bars (minimum):**
   - 6+ bug studies (two-tab format)
   - 10+ pitfalls
   - 29+ Q&As (5 Easy, 7 Medium, 17+ Hard) — ALL with div wrapper, Q numbering, qa-think, qa-great
   - 4+ exercises with complete solutions (Hard/Expert use tabbed solutions)
   - 3-attempt mini-project with production concerns
   - Honest SOLID mapping (not all green)
   - Decision flowchart in When To Use
   - Performance benchmarks with numbers
   - 50+ tooltips on first occurrences
4. **SVG diagrams** — custom, using CSS variables, generic GoF naming
5. **Pick unique accent color** per page
6. **Pick unique emoji favicon** per page
7. **Update `lld/index.html`** — change card from "Coming Soon" to "Ready" with link
8. **Update hero meta badges** to match actual counts after all additions

### Per-Section Build Process (MANDATORY)

After writing EACH section, run 4 parallel review agents BEFORE moving to the next:

1. **Agent 1 — Factual Accuracy**: API names, .NET version attributions, code compilability, pattern classifications
2. **Agent 2 — Content Quality**: Comprehensive depth appropriate for the topic, no thin areas (each page stands on its own)
3. **Agent 3 — Cross-Reference Consistency**: No contradictions with earlier sections on the same page
4. **Agent 4 — Relevance Check**: Every example, analogy, and code snippet genuinely belongs to THIS pattern (not filler or misattributed)

Fix all issues BEFORE moving to the next section. This prevents expensive full-page reviews later.

### Pattern Attribution Rules (Critical — learned from Abstract Factory mistakes)

When listing ".NET Core examples" (Section 8), verify EACH example is genuinely the page's pattern:

| Pattern | Signature | NOT this pattern |
|---------|-----------|-----------------|
| **Abstract Factory** | Multiple distinct product types, swappable families, products compatible within family | Single product = Factory Method, step-by-step = Builder, swappable algo = Strategy |
| **Factory Method** | Single product type, subclasses decide which concrete to create | Multiple products = Abstract Factory |
| **Builder** | Step-by-step construction, fluent API, final Build() call | Creates ready objects = Factory |
| **Strategy** | Swappable algorithms, same interface, different behavior | Creates objects = Factory |

Common .NET misattributions to avoid:
- `ILoggerFactory` = Factory Method (single product: ILogger), NOT Abstract Factory
- `AuthenticationBuilder` = Builder, NOT Abstract Factory
- `IOptionsFactory<T>` = Factory Method, NOT Abstract Factory
- `IHostBuilder` = Builder, NOT Abstract Factory
- `IDistributedCache` providers = Strategy, NOT Abstract Factory
- `WebApplicationFactory<T>` = Test fixture, NOT Abstract Factory

### .NET Version Attribution Cheat Sheet

| Feature | Correct Version | Common Mistake |
|---------|----------------|----------------|
| DbProviderFactory | .NET 2.0 (2005) | NOT .NET 1.0 |
| Generics | .NET 2.0 (2005) | — |
| `out`/`in` variance | .NET 4.0 / C# 4.0 (2010) | NOT .NET 2.0 |
| MEF | .NET 4.0 (2010) | NOT .NET 3.5 |
| Built-in DI | .NET Core 1.0 (2016) | — |
| Keyed services | .NET 8 (2023) | NOT earlier |
| FrozenDictionary | .NET 8 (2023) | — |
| Primary constructors | C# 12 / .NET 8 (2023) | — |
| Covariant returns | C# 9 / .NET 5 (2020) | Classes only, NOT interfaces |
