# Component Guide — Complete Reference for Page Agents

> **Every agent building a page reads this FIRST.** Before writing ANY section, scan this guide. Pick the BEST component for the content, not the easiest.

---

## Table of Contents

1. [Existing Core Components (E1-E18)](#existing-core-components)
2. [Visual Explanation (#1-10)](#category-1-visual-explanation-1-10)
3. [Real-World Simulation (#11-18)](#category-2-real-world-simulation-11-18)
4. [Learning Interaction (#19-26)](#category-3-learning-interaction-19-26)
5. [Visual Distinction (#27-33)](#category-4-visual-distinction-27-33)
6. [System Simulation (#34-42)](#category-5-system-simulation-34-42)
7. [Distributed Systems (#43-52)](#category-6-distributed-systems-43-52)
8. [Network & Protocol (#53-56)](#category-7-network--protocol-53-56)
9. [Architecture Patterns (#57-63)](#category-8-architecture-patterns-57-63)
10. [Calculators & Reference (#64-70)](#category-9-calculators--reference-64-70)
11. [Decision Flowchart](#decision-flowchart)
12. [Section Type Mapping](#section-type-mapping)

---

## EXISTING CORE COMPONENTS

These components existed before the 70 new ones. They are the backbone of every page.

---

### E1. Card (Accordion)
**CSS class:** `.card`, `.card-title`, `.card-body`
**When to use:** Collapsible content blocks — bug studies (S12), stage breakdowns, grouped content
**Section types:** S2, S5, S6, S7, S12, S14

```html
<div class="card open">
  <h3 class="card-title"><i class="fa-solid fa-bug"></i> Bug #1 — Title Here</h3>
  <div class="card-body">
    <p>Content goes here. First card uses <code>class="card open"</code>.</p>
  </div>
</div>
<div class="card">
  <h3 class="card-title"><i class="fa-solid fa-bug"></i> Bug #2 — Title Here</h3>
  <div class="card-body">
    <p>This card starts collapsed (no <code>open</code> class).</p>
  </div>
</div>
```

**CRITICAL RULES:**
- Every `<div class="card">` that toggles MUST have `<div class="card-body">` wrapping content after `</h3>`. Without it, accordion CANNOT close.
- First card in bad-solution sets: `class="card open"` (starts expanded)
- Title is `<h3 class="card-title">` — NOT `<div class="card-header">`
- NO `card-chevron` icon — the CSS `::after` pseudo-element handles the chevron automatically

---

### E2. Collapsible
**CSS class:** `.collapsible`, `.collapsible-header`, `.collapsible-content`, `.collapsible-body`
**When to use:** Hints, solutions, optional details — S13 pitfalls, S18 exercise hints
**Section types:** S13, S18, S21

```html
<div class="collapsible">
  <div class="collapsible-header">
    <span><i class="fa-solid fa-lightbulb"></i> Hint</span>
    <i class="fa-solid fa-chevron-down collapsible-chevron"></i>
  </div>
  <div class="collapsible-content">
    <div class="collapsible-body">
      <p>Hidden content revealed on click.</p>
    </div>
  </div>
</div>
```

**CRITICAL RULES:**
- Header class: `collapsible-header` (NOT `collapsible-toggle`)
- Must have `collapsible-content` wrapper around `collapsible-body`

---

### E3. Tab Container
**CSS class:** `.tab-container`, `.tab-header`, `.tab-btn`, `.tab-panel`
**When to use:** Bad/Good code, Before/After, multi-file code, language variants
**Section types:** S5, S6, S12, S13, S17 — anywhere with code comparisons

```html
<div class="tab-container">
  <div class="tab-header" role="tablist">
    <button class="tab-btn active" data-tab="example-bad" role="tab" aria-selected="true">Bad Code</button>
    <button class="tab-btn" data-tab="example-good" role="tab" aria-selected="false">Good Code</button>
  </div>
  <div class="tab-panel active" id="example-bad" role="tabpanel">
    <p>Bad code example here.</p>
  </div>
  <div class="tab-panel" id="example-good" role="tabpanel">
    <p>Good code example here.</p>
  </div>
</div>
```

**CRITICAL RULES:**
- Tab panels: `class="tab-panel"` — NEVER `class="tab-content"`
- Tab buttons: `data-tab=` — NEVER `data-target=`
- Tab header: `class="tab-header"` — NEVER `class="tab-nav"`
- First tab-btn gets `class="tab-btn active"` + `aria-selected="true"`
- First tab-panel gets `class="tab-panel active"`
- All other panels: just `class="tab-panel"` (no active = hidden)
- ID on each panel must match the `data-tab` value on its button

---

### E4. Callouts
**CSS class:** `.callout`, `.callout-title` + variant: `.callout-info`, `.callout-success`, `.callout-danger`, `.callout-warning`, `.callout-purple`, `.callout-cyan`
**When to use:** Tips, warnings, key info, rules — everywhere
**Section types:** All sections

```html
<div class="callout callout-info">
  <div class="callout-title"><i class="fa-solid fa-circle-info"></i> Key Point</div>
  <p>Important information the reader should know.</p>
</div>

<div class="callout callout-danger">
  <div class="callout-title"><i class="fa-solid fa-triangle-exclamation"></i> Warning</div>
  <p>Something to watch out for.</p>
</div>

<div class="callout callout-success">
  <div class="callout-title"><i class="fa-solid fa-check"></i> Best Practice</div>
  <p>Recommended approach.</p>
</div>

<div class="callout callout-warning">
  <div class="callout-title"><i class="fa-solid fa-exclamation"></i> Caution</div>
  <p>Proceed carefully here.</p>
</div>
```

---

### E5. macOS Code Window
**CSS class:** `.macos-window`, `.macos-titlebar`, `.dot`, `.dot-red`, `.dot-yellow`, `.dot-green`, `.macos-filename`, `.macos-body`
**When to use:** Terminal output, code files, command-line examples
**Section types:** S3, S5, S6, S13, S18

```html
<div class="macos-window">
  <div class="macos-titlebar">
    <span class="dot dot-red"></span>
    <span class="dot dot-yellow"></span>
    <span class="dot dot-green"></span>
    <span class="macos-filename">Program.cs</span>
  </div>
  <div class="macos-body">
    <pre><code class="language-csharp">public class Example {
    // Code here
}</code></pre>
  </div>
</div>
```

---

### E6. Table Wrapper
**CSS class:** `.table-wrapper`
**When to use:** Any data table — comparisons, specs, timelines
**Section types:** S5, S7, S8, S10, S17, S22

```html
<div class="table-wrapper">
  <table>
    <thead>
      <tr><th>Feature</th><th>Option A</th><th>Option B</th></tr>
    </thead>
    <tbody>
      <tr><td>Speed</td><td>Fast</td><td>Slow</td></tr>
    </tbody>
  </table>
</div>
```

---

### E7. Q&A Accordion
**CSS class:** `.qa-item`, `.qa-header`, `.qa-question`, `.qa-chevron`, `.qa-body`, `.qa-content`, `.qa-think`, `.qa-great`
**When to use:** Interview Q&A section (S17)
**Section types:** S17

```html
<div class="qa-item">
  <div class="qa-header" role="button" tabindex="0" aria-expanded="false">
    <div>
      <div class="qa-question">Q1: What is the Observer pattern?</div>
      <div class="qa-meta">
        <span class="difficulty-tag difficulty-beginner"><i class="fa-solid fa-signal"></i> Beginner</span>
      </div>
    </div>
    <i class="fa-solid fa-chevron-down qa-chevron"></i>
  </div>
  <div class="qa-body">
    <div class="qa-content">
      <div class="qa-think">
        <strong><i class="fa-solid fa-brain"></i> Think First</strong>
        Pause and think about it before reading the answer.
      </div>
      <div class="body-text">
        <p>The answer goes here with rich prose.</p>
      </div>
      <div class="qa-great">
        <strong><i class="fa-solid fa-star"></i> Great Answer</strong>
        Bonus points for mentioning this.
      </div>
    </div>
  </div>
</div>
```

---

### E8. TL;DR Card
**CSS class:** `.tldr-card`
**When to use:** Section 1 summary — the quick takeaway
**Section types:** S1

```html
<div class="tldr-card">
  <p><strong>One-liner:</strong> The pattern in plain English.</p>
  <p>A few more sentences expanding the core idea.</p>
</div>
```

---

### E9. Cheat Card
**CSS class:** `.cheat-card`, `.cheat-card-title`, `.cheat-card-body`
**When to use:** Quick reference snippets in S19 cheat sheet
**Section types:** S19 (in `grid-3`)

```html
<div class="grid-3">
  <div class="cheat-card">
    <div class="cheat-card-title">When To Use</div>
    <div class="cheat-card-body">
      Use when you need X.<br>
      Avoid when Y.
    </div>
  </div>
  <div class="cheat-card">
    <div class="cheat-card-title">Key Methods</div>
    <div class="cheat-card-body">
      Subscribe()<br>
      Notify()<br>
      Unsubscribe()
    </div>
  </div>
  <div class="cheat-card">
    <div class="cheat-card-title">Remember</div>
    <div class="cheat-card-body">
      Always unsubscribe to avoid memory leaks.
    </div>
  </div>
</div>
```

---

### E10. Exercise Card
**CSS class:** `.exercise-card`, `.exercise-card-title`, `.exercise-card-desc`
**When to use:** Practice exercises in S18
**Section types:** S18

```html
<div class="exercise-card">
  <div class="exercise-card-title"><i class="fa-solid fa-code"></i> Exercise 1: Build a Chat System</div>
  <div class="exercise-card-desc">
    <p>Implement a publish-subscribe chat room where users can join channels.</p>
  </div>
  <div class="collapsible">
    <div class="collapsible-header">
      <span><i class="fa-solid fa-lightbulb"></i> Hints</span>
      <i class="fa-solid fa-chevron-down collapsible-chevron"></i>
    </div>
    <div class="collapsible-content">
      <div class="collapsible-body">
        <p>Start with an interface for message listeners.</p>
      </div>
    </div>
  </div>
</div>
```

---

### E11. Related Card (What to Study Next)
**CSS class:** `.related-grid`, `.related-card`, `.related-card-icon`, `.related-card-text`
**When to use:** S24 Related Topics / What to Study Next
**Section types:** S24

```html
<div class="related-grid">
  <a href="../strategy/index.html" class="related-card">
    <div class="related-card-icon"><i class="fa-solid fa-chess"></i></div>
    <div class="related-card-text">
      <h4>Strategy Pattern</h4>
      <p>Swap algorithms at runtime without changing the client.</p>
    </div>
  </a>
  <a href="../decorator/index.html" class="related-card">
    <div class="related-card-icon"><i class="fa-solid fa-layer-group"></i></div>
    <div class="related-card-text">
      <h4>Decorator Pattern</h4>
      <p>Add responsibilities dynamically by wrapping objects.</p>
    </div>
  </a>
</div>
```

---

### E12. When-Use Grid
**CSS class:** `.when-use-grid`, `.when-item`, `.when-icon-yes`, `.when-icon-no`
**When to use:** S9 When To Use / When Not To Use
**Section types:** S9

```html
<div class="when-use-grid">
  <div>
    <h3>When To Use</h3>
    <div class="when-item">
      <i class="fa-solid fa-check when-icon-yes"></i>
      <span>When you need to notify multiple objects about state changes.</span>
    </div>
    <div class="when-item">
      <i class="fa-solid fa-check when-icon-yes"></i>
      <span>When the set of observers changes at runtime.</span>
    </div>
  </div>
  <div>
    <h3>When NOT To Use</h3>
    <div class="when-item">
      <i class="fa-solid fa-xmark when-icon-no"></i>
      <span>When you only have one listener that never changes.</span>
    </div>
  </div>
</div>
```

---

### E13. Comparison Grid
**CSS class:** `.comparison-grid`, `.comparison-panel`, `.comparison-header`, `.vs-badge`
**When to use:** S10 side-by-side comparisons (Bad vs Good approach)
**Section types:** S10

```html
<div class="comparison-grid">
  <div class="comparison-panel bad">
    <div class="comparison-header"><i class="fa-solid fa-xmark"></i> Tight Coupling</div>
    <div style="padding: 1rem 1.25rem;">
      <p>Direct calls between classes. Hard to change.</p>
    </div>
  </div>
  <div class="vs-badge">VS</div>
  <div class="comparison-panel good">
    <div class="comparison-header"><i class="fa-solid fa-check"></i> Loose Coupling</div>
    <div style="padding: 1rem 1.25rem;">
      <p>Objects communicate through abstractions.</p>
    </div>
  </div>
</div>
```

---

### E14. Tooltip (Jargon Terms)
**CSS class:** `.tooltip-trigger`, `.tooltip-content`
**When to use:** Inline jargon explanations — everywhere a technical term needs a quick definition
**Section types:** All sections

```html
<span class="tooltip-trigger" tabindex="0">polymorphism
  <span class="tooltip-content">The ability of different classes to respond to the same method call in different ways. Think of it as "one interface, many implementations."</span>
</span>
```

---

### E15. Prerequisite Card
**CSS class:** `.prereq-card`, `.prereq-title`, `.prereq-list`, `.prereq-item`
**When to use:** Top of page — what the reader should know first
**Section types:** S0 (prereqs)

```html
<div class="prereq-card">
  <div class="prereq-title"><i class="fa-solid fa-book-open"></i> Prerequisites</div>
  <div class="prereq-list">
    <div class="prereq-item"><i class="fa-solid fa-check"></i> Basic C# classes and interfaces</div>
    <div class="prereq-item"><i class="fa-solid fa-check"></i> Understanding of inheritance</div>
  </div>
</div>
```

---

### E16. Think First Box
**CSS class:** `.think-first-box`, `.think-label`, `.think-hint`
**When to use:** Pause-and-think prompts before revealing an answer or approach
**Section types:** S2, S5, S6, S17 (case study pages)

```html
<div class="think-first-box">
  <span class="think-label">Think First</span>
  <p>Before reading the solution, think: how would YOU handle state transitions in a vending machine?</p>
  <span class="think-hint">Hint: What happens when someone inserts a coin but the machine is out of stock?</span>
</div>
```

---

### E17. Math Block
**CSS class:** `.math-block`, `.math-label`, `.math-result`
**When to use:** Back-of-envelope calculations, numeric reasoning
**Section types:** S4, S6, S17 (HLD pages)

```html
<div class="math-block">
  <span class="math-label">Storage Calculation</span>
  Users = 100M<br>
  Avg tweets/day = 500M<br>
  Avg tweet size = 300 bytes<br>
  <span class="math-result">Daily storage = 500M x 300B = 150 GB/day</span>
</div>
```

---

### E18. Grid System
**CSS class:** `.grid-2`, `.grid-3`, `.grid-4`, `.span-full`
**When to use:** Layout — placing callouts, cheat cards, or small items side by side
**Section types:** All sections

```html
<div class="grid-2">
  <div class="callout callout-success">
    <div class="callout-title"><i class="fa-solid fa-check"></i> Do</div>
    <p>Use interfaces for abstraction.</p>
  </div>
  <div class="callout callout-danger">
    <div class="callout-title"><i class="fa-solid fa-xmark"></i> Don't</div>
    <p>Hardcode concrete classes.</p>
  </div>
</div>
```

**RULE:** No grid wrappers on content-heavy cards. If a card has paragraphs + lists, use full-width (one per row).

---

## CATEGORY 1: Visual Explanation (#1-10)

---

### #1. Rich Tooltip
**CSS class:** `.tooltip-rich`, `.tooltip-rich-content`
**When to use:** Complex hover explanations with headings, lists, code snippets, or SVGs inside the tooltip bubble
**Section types:** S1, S4, S6, S7 — anywhere a term needs a rich popup (not just a one-liner)

```html
<span class="tooltip-rich">CAP theorem
  <div class="tooltip-rich-content">
    <h4>CAP Theorem</h4>
    <p>A distributed system can guarantee at most 2 of 3 properties:</p>
    <ul>
      <li><strong>Consistency</strong> — every read gets the most recent write</li>
      <li><strong>Availability</strong> — every request gets a response</li>
      <li><strong>Partition tolerance</strong> — system works despite network splits</li>
    </ul>
  </div>
</span>
```

Use `.tooltip-rich--below` variant to show the popup below instead of above.

---

### #2. Math Stepper
**CSS class:** `.math-stepper`, `.math-step`, `.math-step-number`, `.math-step-content`, `.math-step-operation`, `.math-step-result`, `.math-step-why`
**When to use:** Step-by-step mathematical derivations where each step has an operation, result, and explanation
**Section types:** S4 (Where It Breaks), S6 (How It Works), S12 (Interview Playbook)

```html
<div class="math-stepper">
  <div class="math-step">
    <div class="math-step-number">1</div>
    <div class="math-step-content">
      <div class="math-step-operation">100M users x 5 requests/day</div>
      <div class="math-step-result">= 500M requests/day</div>
      <div class="math-step-why">Average user makes 5 API calls per session</div>
    </div>
  </div>
  <div class="math-step">
    <div class="math-step-number">2</div>
    <div class="math-step-content">
      <div class="math-step-operation">500M / 86,400 seconds</div>
      <div class="math-step-result">= ~5,787 QPS</div>
      <div class="math-step-why">Converting daily requests to per-second load</div>
    </div>
  </div>
</div>
```

---

### #3. Trade-off Slider
**CSS class:** `.tradeoff-slider`, `.tradeoff-left`, `.tradeoff-right`, `.tradeoff-track`, `.tradeoff-marker`, `.tradeoff-label`
**When to use:** Visualizing a spectrum between two extremes (consistency vs availability, latency vs throughput)
**Section types:** S1 (TL;DR), S8 (Variations), S10 (Comparisons)

```html
<div class="tradeoff-slider">
  <div class="tradeoff-left">Strong Consistency</div>
  <div class="tradeoff-track">
    <div class="tradeoff-marker" style="left: 35%;">
      <div class="tradeoff-label">DynamoDB Default</div>
    </div>
  </div>
  <div class="tradeoff-right">Eventual Consistency</div>
</div>
```

Position the marker with `style="left: X%;"` where 0% = fully left, 100% = fully right.

---

### #4. Architecture Diff
**CSS class:** `.arch-diff`, `.arch-diff-before`, `.arch-diff-after`, `.arch-diff-divider`, `.arch-diff-label`, `.arch-diff-label--before`, `.arch-diff-label--after`, `.arch-diff-highlight`
**When to use:** Before/after architecture comparisons showing what changed
**Section types:** S5 (Breakthrough), S8 (Variations), S10 (Comparisons)

```html
<div class="arch-diff">
  <div class="arch-diff-before">
    <div class="arch-diff-label arch-diff-label--before">Before</div>
    <p>Monolithic service handling all requests. Single point of failure.</p>
    <!-- SVG diagram here -->
  </div>
  <div class="arch-diff-divider"><span>→</span></div>
  <div class="arch-diff-after">
    <div class="arch-diff-label arch-diff-label--after">After</div>
    <p>Microservices with load balancer. <span class="arch-diff-highlight">New: Circuit breaker</span></p>
    <!-- SVG diagram here -->
  </div>
</div>
```

---

### #5. Evolution Stepper
**CSS class:** `.evolution-stepper`, `.evo-step`, `.evo-step--active`, `.evo-step-badge`, `.evo-step-title`, `.evo-step-desc`, `.evo-step-break`
**When to use:** Showing V1 → V2 → V3 evolution with break points explaining why each version fails
**Section types:** S5 (Breakthrough), S7 (Going Deeper), S21 (Mini-Project)

```html
<div class="evolution-stepper">
  <div class="evo-step">
    <div class="evo-step-badge">V1</div>
    <div class="evo-step-title">Single Server</div>
    <div class="evo-step-desc">Everything runs on one machine. Simple but fragile.</div>
  </div>
  <div class="evo-step-break"><span>Breaks at 10K QPS — CPU maxes out</span></div>
  <div class="evo-step evo-step--active">
    <div class="evo-step-badge">V2</div>
    <div class="evo-step-title">Horizontal Scaling + Load Balancer</div>
    <div class="evo-step-desc">Multiple servers behind a load balancer. Handles 100K QPS.</div>
  </div>
  <div class="evo-step-break"><span>Breaks when database becomes bottleneck</span></div>
  <div class="evo-step">
    <div class="evo-step-badge">V3</div>
    <div class="evo-step-title">Read Replicas + Cache Layer</div>
    <div class="evo-step-desc">Cache hot data, replicate reads. Handles 1M QPS.</div>
  </div>
</div>
```

---

### #6. Sequence Diagram
**CSS class:** `.sequence-diagram`, `.seq-participants`, `.seq-participant`, `.seq-messages`, `.seq-message`, `.seq-message--right`, `.seq-message--left`, `.seq-arrow`, `.seq-label`, `.seq-time`
**When to use:** Protocol exchanges (TCP handshake, TLS, DNS resolution, API call flows)
**Section types:** S6 (How It Works), S7 (Going Deeper)

```html
<div class="sequence-diagram">
  <div class="seq-participants">
    <div class="seq-participant">Client</div>
    <div class="seq-participant">Server</div>
  </div>
  <div class="seq-messages">
    <div class="seq-message seq-message--right">
      <div><span class="seq-arrow">→</span> <span class="seq-label">SYN</span></div>
      <span class="seq-time">0ms</span>
    </div>
    <div class="seq-message seq-message--left">
      <div><span class="seq-arrow">←</span> <span class="seq-label">SYN-ACK</span></div>
      <span class="seq-time">15ms</span>
    </div>
    <div class="seq-message seq-message--right">
      <div><span class="seq-arrow">→</span> <span class="seq-label">ACK</span></div>
      <span class="seq-time">30ms</span>
    </div>
  </div>
</div>
```

---

### #7. Annotated Diagram
**CSS class:** `.annotated-diagram`, `.annotation-markers`, `.annotation-marker`, `.annotation-panel`
**When to use:** An SVG diagram with clickable numbered markers that reveal explanation panels
**Section types:** S4 (UML), S6 (How It Works), S7 (Going Deeper)

```html
<div class="annotated-diagram">
  <!-- Your SVG goes here -->
  <svg viewBox="0 0 600 300">...</svg>
  <div class="annotation-markers">
    <div class="annotation-marker" style="top: 20%; left: 30%;" data-panel="ann-1">1</div>
    <div class="annotation-marker" style="top: 50%; left: 70%;" data-panel="ann-2">2</div>
  </div>
  <div class="annotation-panel" id="ann-1">
    <h4>Load Balancer</h4>
    <p>Distributes incoming requests across multiple servers using round-robin.</p>
  </div>
  <div class="annotation-panel" id="ann-2">
    <h4>Cache Layer</h4>
    <p>Redis stores hot data with a 5-minute TTL to reduce database load.</p>
  </div>
</div>
```

---

### #8. Storage Visualizer
**CSS class:** `.storage-viz`, `.storage-row`, `.storage-row-label`, `.storage-block`, `.storage-block--header`, `.storage-block--data`, `.storage-block--free`, `.storage-block--dead`, `.storage-block--index`, `.storage-legend`, `.storage-legend-item`
**When to use:** Memory/disk page layout, showing how data is organized in blocks
**Section types:** S7 (Going Deeper), S6 (How It Works)

```html
<div class="storage-viz">
  <div class="storage-row-label">Page 0 (8 KB)</div>
  <div class="storage-row">
    <div class="storage-block storage-block--header" style="flex: 1;">Header</div>
    <div class="storage-block storage-block--data" style="flex: 4;">Row Data</div>
    <div class="storage-block storage-block--index" style="flex: 2;">Index</div>
    <div class="storage-block storage-block--free" style="flex: 1;">Free</div>
  </div>
  <div class="storage-legend">
    <span class="storage-legend-item storage-legend-item--header">Header</span>
    <span class="storage-legend-item storage-legend-item--data">Data</span>
    <span class="storage-legend-item storage-legend-item--index">Index</span>
    <span class="storage-legend-item storage-legend-item--free">Free</span>
  </div>
</div>
```

---

### #9. Latency Ruler
**CSS class:** `.latency-ruler`, `.ruler-item`, `.ruler-label`, `.ruler-bar`, `.ruler-value`
**When to use:** Comparing relative speeds/latencies (L1 cache vs RAM vs disk vs network)
**Section types:** S6 (How It Works), S7 (Going Deeper), S8 (Variations)

```html
<div class="latency-ruler">
  <div class="ruler-item">
    <div class="ruler-label">L1 Cache</div>
    <div class="ruler-bar" style="--ruler-width: 2%;"></div>
    <div class="ruler-value">0.5 ns</div>
  </div>
  <div class="ruler-item">
    <div class="ruler-label">RAM</div>
    <div class="ruler-bar" style="--ruler-width: 15%;"></div>
    <div class="ruler-value">100 ns</div>
  </div>
  <div class="ruler-item">
    <div class="ruler-label">SSD Read</div>
    <div class="ruler-bar" style="--ruler-width: 40%;"></div>
    <div class="ruler-value">150 us</div>
  </div>
  <div class="ruler-item">
    <div class="ruler-label">HDD Seek</div>
    <div class="ruler-bar" style="--ruler-width: 70%;"></div>
    <div class="ruler-value">10 ms</div>
  </div>
  <div class="ruler-item">
    <div class="ruler-label">Cross-region</div>
    <div class="ruler-bar" style="--ruler-width: 100%;"></div>
    <div class="ruler-value">150 ms</div>
  </div>
</div>
```

Bar widths auto-color based on nth-child (green → yellow → red).

---

### #10. Data Flow Stepper
**CSS class:** `.flow-stepper`, `.flow-step`, `.flow-step-header`, `.flow-step-num`, `.flow-step-title`, `.flow-step-body`, `.flow-stepper-controls`, `.flow-prev`, `.flow-next`, `.flow-progress`, `.flow-dots`, `.flow-dot`
**When to use:** Interactive step-through of a data pipeline (click Next/Prev to advance)
**Section types:** S6 (How It Works), S7 (Going Deeper)

```html
<div class="flow-stepper">
  <div class="flow-step active">
    <div class="flow-step-header">
      <div class="flow-step-num">1</div>
      <div class="flow-step-title">Client sends request</div>
    </div>
    <div class="flow-step-body">
      <p>The client sends an HTTP POST to the API gateway with a JSON payload.</p>
    </div>
  </div>
  <div class="flow-step">
    <div class="flow-step-header">
      <div class="flow-step-num">2</div>
      <div class="flow-step-title">API Gateway routes to service</div>
    </div>
    <div class="flow-step-body">
      <p>The gateway authenticates the token and routes to the order service.</p>
    </div>
  </div>
  <div class="flow-stepper-controls">
    <button class="flow-prev" disabled>Prev</button>
    <div class="flow-dots">
      <span class="flow-dot active"></span>
      <span class="flow-dot"></span>
    </div>
    <button class="flow-next">Next</button>
  </div>
</div>
```

Requires JS to toggle `.active` on `.flow-step` and `.flow-dot` elements.

---

## CATEGORY 2: Real-World Simulation (#11-18)

---

### #11. Network Packet Viewer
**CSS class:** `.packet-viewer`, `.packet-header`, `.packet-fields`, `.packet-field`, `.packet-field-name`, `.packet-field-value`, `.packet-field-note`, `.packet-field--highlight`
**When to use:** Wireshark-style field layout for network packets (TCP/IP headers, DNS, HTTP frames)
**Section types:** S6, S7

```html
<div class="packet-viewer">
  <div class="packet-header">TCP Header</div>
  <div class="packet-fields">
    <div class="packet-field" style="width: 50%;">
      <span class="packet-field-name">Source Port</span>
      <span class="packet-field-value">54321</span>
    </div>
    <div class="packet-field" style="width: 50%;">
      <span class="packet-field-name">Dest Port</span>
      <span class="packet-field-value">443</span>
    </div>
    <div class="packet-field packet-field--highlight" style="width: 100%;">
      <span class="packet-field-name">Sequence Number</span>
      <span class="packet-field-value">0x00A3F2B1</span>
      <span class="packet-field-note">Initial SYN sequence</span>
    </div>
  </div>
</div>
```

---

### #12. Database Schema Viewer
**CSS class:** `.schema-viewer`, `.schema-table`, `.schema-table-header`, `.schema-columns`, `.schema-col`, `.schema-col--pk`, `.schema-col--fk`, `.schema-col-icon`, `.schema-col-name`, `.schema-col-type`, `.schema-col-constraint`
**When to use:** pgAdmin-style database table visualization with PK/FK highlighting
**Section types:** S6, S7, S9

```html
<div class="schema-viewer">
  <div class="schema-table">
    <div class="schema-table-header"><i class="fa-solid fa-table"></i> users</div>
    <div class="schema-columns">
      <div class="schema-col schema-col--pk">
        <span class="schema-col-icon">🔑</span>
        <span class="schema-col-name">id</span>
        <span class="schema-col-type">BIGINT</span>
        <span class="schema-col-constraint">PK</span>
      </div>
      <div class="schema-col">
        <span class="schema-col-icon"></span>
        <span class="schema-col-name">email</span>
        <span class="schema-col-type">VARCHAR(255)</span>
        <span class="schema-col-constraint">UNIQUE</span>
      </div>
      <div class="schema-col schema-col--fk">
        <span class="schema-col-icon">🔗</span>
        <span class="schema-col-name">org_id</span>
        <span class="schema-col-type">BIGINT</span>
        <span class="schema-col-constraint">FK → orgs.id</span>
      </div>
    </div>
  </div>
</div>
```

---

### #13. API Request/Response Viewer
**CSS class:** `.api-viewer`, `.api-request`, `.api-method`, `.api-method--get/post/put/delete`, `.api-url`, `.api-headers`, `.api-header`, `.api-body`, `.api-response`, `.api-status`, `.api-status--200/400/500`, `.api-response-time`
**When to use:** Postman-style API call visualization with method badges and status codes
**Section types:** S6, S7, S9

```html
<div class="api-viewer">
  <div class="api-request">
    <span class="api-method api-method--post">POST</span>
    <span class="api-url">/api/v1/orders</span>
  </div>
  <div class="api-headers">
    <div class="api-header"><span>Authorization:</span> Bearer eyJhbGci...</div>
    <div class="api-header"><span>Content-Type:</span> application/json</div>
  </div>
  <div class="api-body">
    <pre><code>{ "product_id": 42, "quantity": 2 }</code></pre>
  </div>
  <div class="api-response">
    <span class="api-status api-status--201">201 Created</span>
    <span class="api-response-time">142ms</span>
  </div>
  <div class="api-body">
    <pre><code>{ "order_id": "ord_x7k9", "status": "pending" }</code></pre>
  </div>
</div>
```

---

### #14. Log Viewer
**CSS class:** `.log-viewer`, `.log-entry`, `.log-entry--info/warn/error/debug/fatal`, `.log-timestamp`, `.log-level`, `.log-message`
**When to use:** CloudWatch-style log output with color-coded severity levels
**Section types:** S2 (Scenario), S3 (First Attempt), S11 (Common Mistakes)

```html
<div class="log-viewer">
  <div class="log-entry log-entry--info">
    <span class="log-timestamp">2024-03-15 14:23:01</span>
    <span class="log-level">INFO</span>
    <span class="log-message">Server started on port 8080</span>
  </div>
  <div class="log-entry log-entry--warn">
    <span class="log-timestamp">2024-03-15 14:23:05</span>
    <span class="log-level">WARN</span>
    <span class="log-message">Connection pool at 80% capacity</span>
  </div>
  <div class="log-entry log-entry--error">
    <span class="log-timestamp">2024-03-15 14:23:12</span>
    <span class="log-level">ERROR</span>
    <span class="log-message">TimeoutException: Database query exceeded 5000ms</span>
  </div>
  <div class="log-entry log-entry--fatal">
    <span class="log-timestamp">2024-03-15 14:23:15</span>
    <span class="log-level">FATAL</span>
    <span class="log-message">OOM: Heap space exhausted. Shutting down.</span>
  </div>
</div>
```

---

### #15. Error Message Block
**CSS class:** `.error-block`, `.error-block-header`, `.error-block-code`, `.error-block-message`, `.error-block-detail` + variants: `.error-block--postgres`, `.error-block--mysql`, `.error-block--http`, `.error-block--redis`
**When to use:** Real database/HTTP/Redis error message styling
**Section types:** S3 (First Attempt), S11 (Common Mistakes), S4 (Where It Breaks)

```html
<div class="error-block error-block--postgres">
  <div class="error-block-header">PostgreSQL Error</div>
  <div class="error-block-code">ERROR 23505</div>
  <div class="error-block-message">duplicate key value violates unique constraint "users_email_key"</div>
  <div class="error-block-detail">Key (email)=(john@example.com) already exists.</div>
</div>
```

---

### #16. Query Plan Viewer
**CSS class:** `.query-plan`, `.plan-node`, `.plan-node--root`, `.plan-node--child`, `.plan-node-type`, `.plan-node-type--seq-scan/index-scan/hash-join/sort`, `.plan-node-stats`, `.plan-node-note`
**When to use:** EXPLAIN tree with color-coded node types (red = seq scan bad, green = index scan good)
**Section types:** S6, S7, S11

```html
<div class="query-plan">
  <div class="plan-node plan-node--root">
    <span class="plan-node-type plan-node-type--hash-join">Hash Join</span>
    <div class="plan-node-stats">cost=150.25..3200.10 rows=50000</div>
    <div class="plan-node--child">
      <span class="plan-node-type plan-node-type--seq-scan">Seq Scan on orders</span>
      <div class="plan-node-stats">cost=0.00..1500.00 rows=100000</div>
      <div class="plan-node-note">Consider adding an index on orders.user_id</div>
    </div>
    <div class="plan-node--child">
      <span class="plan-node-type plan-node-type--index-scan">Index Scan on users_pkey</span>
      <div class="plan-node-stats">cost=0.29..8.31 rows=1</div>
    </div>
  </div>
</div>
```

---

### #17. Monitoring Dashboard
**CSS class:** `.dashboard`, `.dashboard-metric`, `.dashboard-metric--alert`, `.dashboard-metric--good`, `.dashboard-metric-label`, `.dashboard-metric-value`, `.dashboard-metric-trend`, `.dashboard-metric-trend--up/down`
**When to use:** Grafana-style metrics grid (QPS, latency, error rate, CPU)
**Section types:** S2 (Scenario), S9 (At Scale)

```html
<div class="dashboard">
  <div class="dashboard-metric dashboard-metric--good">
    <div class="dashboard-metric-label">Requests/sec</div>
    <div class="dashboard-metric-value">12,450</div>
    <span class="dashboard-metric-trend dashboard-metric-trend--up">+15%</span>
  </div>
  <div class="dashboard-metric">
    <div class="dashboard-metric-label">P99 Latency</div>
    <div class="dashboard-metric-value">42ms</div>
    <span class="dashboard-metric-trend dashboard-metric-trend--down">-8%</span>
  </div>
  <div class="dashboard-metric dashboard-metric--alert">
    <div class="dashboard-metric-label">Error Rate</div>
    <div class="dashboard-metric-value">4.2%</div>
    <span class="dashboard-metric-trend dashboard-metric-trend--up">+280%</span>
  </div>
</div>
```

---

### #18. Interview Chat
**CSS class:** `.interview-chat`, `.chat-message`, `.chat-message--interviewer`, `.chat-message--candidate`, `.chat-avatar`, `.chat-bubble`, `.chat-score`, `.chat-score--bad`
**When to use:** Simulated interview Q&A with chat bubbles and score feedback
**Section types:** S12 (Interview Playbook)

```html
<div class="interview-chat">
  <div class="chat-message chat-message--interviewer">
    <div class="chat-avatar">👤</div>
    <div class="chat-bubble">Design a URL shortener that handles 100M URLs per day.</div>
  </div>
  <div class="chat-message chat-message--candidate">
    <div class="chat-avatar">🧑‍💻</div>
    <div class="chat-bubble">I'd start by estimating the QPS: 100M / 86400 = ~1,157 writes/sec, and assuming a 100:1 read:write ratio, ~115K reads/sec.</div>
  </div>
  <div class="chat-score">Strong — shows estimation skills</div>
  <div class="chat-message chat-message--candidate">
    <div class="chat-avatar">🧑‍💻</div>
    <div class="chat-bubble">For storage, I'd just use a single MySQL instance.</div>
  </div>
  <div class="chat-score chat-score--bad">Weak — doesn't address scale</div>
</div>
```

---

## CATEGORY 3: Learning Interaction (#19-26)

---

### #19. Knowledge Check
**CSS class:** `.knowledge-check`, `.kc-question`, `.kc-options`, `.kc-option`, `.kc-selected`, `.kc-option--correct`, `.kc-revealed`, `.kc-explanation`, `.kc-visible`
**When to use:** Multiple-choice quiz with reveal and explanation
**Section types:** S13 (Exercises), S18 (Practice)

```html
<div class="knowledge-check">
  <div class="kc-question">Which data structure provides O(1) average lookup time?</div>
  <div class="kc-options">
    <label class="kc-option">
      <input type="radio" name="kc-1" value="a"> Binary Search Tree
    </label>
    <label class="kc-option kc-option--correct">
      <input type="radio" name="kc-1" value="b"> Hash Table
    </label>
    <label class="kc-option">
      <input type="radio" name="kc-1" value="c"> Linked List
    </label>
  </div>
  <div class="kc-explanation">
    Hash tables use a hash function to map keys to buckets, giving O(1) average lookup.
    BSTs give O(log n) and linked lists give O(n).
  </div>
</div>
```

JS adds `.kc-selected`, `.kc-revealed`, `.kc-visible` classes on interaction.

---

### #20. Code Walkthrough
**CSS class:** `.code-walkthrough`, `.cw-line`, `.cw-line--highlight`, `.cw-num`
**When to use:** Line-by-line code explanation with hover annotations on highlighted lines
**Section types:** S5 (Code), S6 (How It Works)

```html
<div class="code-walkthrough">
  <div class="cw-line">
    <span class="cw-num">1</span>
    <code>public class OrderService {</code>
  </div>
  <div class="cw-line cw-line--highlight" data-annotation="This is the key method — it validates and processes the order">
    <span class="cw-num">2</span>
    <code>    public Order PlaceOrder(Cart cart) {</code>
  </div>
  <div class="cw-line">
    <span class="cw-num">3</span>
    <code>        ValidateStock(cart);</code>
  </div>
  <div class="cw-line cw-line--highlight" data-annotation="Publishes an event to the message queue for async processing">
    <span class="cw-num">4</span>
    <code>        _eventBus.Publish(new OrderPlaced(cart));</code>
  </div>
  <div class="cw-line">
    <span class="cw-num">5</span>
    <code>    }</code>
  </div>
  <div class="cw-line">
    <span class="cw-num">6</span>
    <code>}</code>
  </div>
</div>
```

---

### #21. Interview Scorecard
**CSS class:** `.scorecard`, `.scorecard-header`, `.scorecard-row`, `.scorecard-criteria`, `.scorecard-rating`, `.scorecard-rating--strong/mixed/weak/na`, `.scorecard-note`
**When to use:** Structured interview rubric with criteria, ratings, and notes
**Section types:** S12 (Interview Playbook)

```html
<div class="scorecard">
  <div class="scorecard-header">System Design Interview Rubric</div>
  <div class="scorecard-row">
    <div class="scorecard-criteria">Requirements Gathering</div>
    <span class="scorecard-rating scorecard-rating--strong">Strong</span>
    <div class="scorecard-note">Asked about scale, users, read/write ratio before designing</div>
  </div>
  <div class="scorecard-row">
    <div class="scorecard-criteria">High-Level Design</div>
    <span class="scorecard-rating scorecard-rating--mixed">Mixed</span>
    <div class="scorecard-note">Good API design but missed caching layer</div>
  </div>
  <div class="scorecard-row">
    <div class="scorecard-criteria">Deep Dive</div>
    <span class="scorecard-rating scorecard-rating--weak">Weak</span>
    <div class="scorecard-note">Couldn't explain sharding strategy when pressed</div>
  </div>
</div>
```

---

### #22. Estimation Calculator
**CSS class:** `.estimation-calc`, `.calc-row`, `.calc-label`, `.calc-value`, `.calc-why`, `.calc-row--operation`, `.calc-row--result`
**When to use:** Structured back-of-envelope calculations with label, value, and reasoning per row
**Section types:** S4 (Where It Breaks), S12 (Interview Playbook)

```html
<div class="estimation-calc">
  <div class="calc-row">
    <div class="calc-label">Daily Active Users</div>
    <div class="calc-value">100M</div>
    <div class="calc-why">Given in requirements</div>
  </div>
  <div class="calc-row">
    <div class="calc-label">Avg requests per user/day</div>
    <div class="calc-value">10</div>
    <div class="calc-why">Based on social media usage patterns</div>
  </div>
  <div class="calc-row--operation">x</div>
  <div class="calc-row calc-row--result">
    <div class="calc-label">Total daily requests</div>
    <div class="calc-value">1B</div>
    <div class="calc-why">100M x 10 = 1 billion requests/day</div>
  </div>
</div>
```

---

### #23. Proof / Derivation Block
**CSS class:** `.proof-block`, `.proof-title`, `.proof-step`, `.proof-given`, `.proof-therefore`, `.proof-conclusion`
**When to use:** Logical proofs, formal reasoning chains (Given → Therefore → Conclusion)
**Section types:** S5 (Breakthrough), S7 (Going Deeper)

```html
<div class="proof-block">
  <div class="proof-title">Why eventual consistency is unavoidable with partitions</div>
  <div class="proof-step">
    <span class="proof-given">Given:</span> Network partitions WILL happen (proven by real-world data)
  </div>
  <div class="proof-step">
    <span class="proof-given">Given:</span> CAP theorem says we pick 2 of 3 (C, A, P)
  </div>
  <div class="proof-step">
    <span class="proof-therefore">∴</span> If we need P (we do), we choose between C and A
  </div>
  <div class="proof-conclusion">
    Most distributed systems choose AP (availability + partition tolerance) and accept eventual consistency as the trade-off.
  </div>
</div>
```

---

### #24. Debug Template
**CSS class:** `.debug-template`, `.debug-step`, `.debug-step-label`, `.debug-step-example`
**When to use:** Structured debugging/troubleshooting template (Symptom → Change → Where → Fix)
**Section types:** S11 (Common Mistakes), S13 (Exercises)

```html
<div class="debug-template">
  <div class="debug-step">
    <div class="debug-step-label">1. What's the symptom?</div>
    <div class="debug-step-example">HTTP 503 errors spike every day at 9 AM</div>
  </div>
  <div class="debug-step">
    <div class="debug-step-label">2. What changed recently?</div>
    <div class="debug-step-example">Deployed new feature flag service yesterday</div>
  </div>
  <div class="debug-step">
    <div class="debug-step-label">3. Where's the bottleneck?</div>
    <div class="debug-step-example">Connection pool maxed: 50/50 active connections</div>
  </div>
  <div class="debug-step">
    <div class="debug-step-label">4. Fix</div>
    <div class="debug-step-example">Increase pool size to 100, add circuit breaker</div>
  </div>
</div>
```

---

### #25. Myth Buster
**CSS class:** `.myth-buster`, `.myth-claim`, `.myth-label`, `.myth-reality`, `.reality-label`, `.myth-evidence`, `.evidence-label`
**When to use:** Debunking misconceptions with strikethrough myth, bold reality, and evidence
**Section types:** S10 (Anti-Lesson), S17 (Q&A)

```html
<div class="myth-buster">
  <div class="myth-claim">
    <div class="myth-label">Myth</div>
    <p>"NoSQL databases are always faster than SQL databases."</p>
  </div>
  <div class="myth-reality">
    <div class="reality-label">Reality</div>
    <p>Performance depends on access patterns, not the database type. PostgreSQL with proper indexing outperforms MongoDB on many workloads.</p>
  </div>
  <div class="myth-evidence">
    <div class="evidence-label">Evidence</div>
    <p>Uber migrated from Postgres to MySQL (not NoSQL). Benchmarks show RDBMS wins on structured queries with joins.</p>
  </div>
</div>
```

---

### #26. What-If Scenario Card
**CSS class:** `.whatif-card`, `.whatif-trigger`, `.whatif-consequence`, `.whatif-recovery`
**When to use:** "What happens if X fails?" scenarios with collapsible consequence and recovery
**Section types:** S4 (Where It Breaks), S10 (Anti-Lesson), S11 (Common Mistakes)

```html
<div class="whatif-card">
  <div class="whatif-trigger">
    <i class="fa-solid fa-bolt"></i> What if the primary database goes down?
  </div>
  <div class="whatif-consequence">
    <p><strong>Impact:</strong> All write operations fail. Read replicas continue serving stale data for ~30 seconds until they detect the primary is gone.</p>
  </div>
  <div class="whatif-recovery">
    <p><strong>Recovery:</strong> Automated failover promotes a replica to primary within 15-30 seconds. During this window, writes are queued in the application layer.</p>
  </div>
</div>
```

Clicking the trigger toggles `.open` class on `.whatif-card` to show/hide consequence + recovery.

---

## CATEGORY 4: Visual Distinction (#27-33)

---

### #27. Company Profile Card
**CSS class:** `.company-card`, `.company-card-logo`, `.company-card-info`, `.company-card-name`, `.company-card-stats`, `.company-card-stack`, `.company-card-lesson`
**When to use:** Real company tech stack, scale numbers, and key lesson
**Section types:** S9 (At Scale)

```html
<div class="company-card">
  <div class="company-card-logo">🔵</div>
  <div class="company-card-info">
    <h4 class="company-card-name">Netflix</h4>
    <div class="company-card-stats">
      <span>200M subscribers</span>
      <span>15K microservices</span>
      <span>500B events/day</span>
    </div>
    <div class="company-card-stack">Java, Spring Boot, Cassandra, Kafka, Zuul</div>
    <div class="company-card-lesson">Key lesson: Netflix built Hystrix (circuit breaker library) after a cascading failure took down their entire streaming service in 2012.</div>
  </div>
</div>
```

---

### #28. Trap Callout
**CSS class:** `.callout-trap`, `.callout-trap-header`, `.callout-trap-body`
**When to use:** Danger-striped warning that's more alarming than a regular callout-danger — traps, gotchas, common mistakes
**Section types:** S10 (Anti-Lesson), S11 (Common Mistakes), S13 (Pitfalls)

```html
<div class="callout-trap">
  <div class="callout-trap-header"><i class="fa-solid fa-skull-crossbones"></i> Connection Leak Trap</div>
  <div class="callout-trap-body">
    <p>If you open a database connection in a try block but close it in the try body (not finally), any exception causes a leak. Over time, this exhausts the connection pool and the entire service hangs.</p>
  </div>
</div>
```

---

### #29. Dependency Graph
**CSS class:** `.dep-graph`, `.dep-node`, `.dep-node--done`, `.dep-node--current`, `.dep-node--locked`, `.dep-arrow`
**When to use:** Horizontal chain showing learning prerequisites (done → current → locked)
**Section types:** S15 (Connected Topics), S24 (Related Topics)

```html
<div class="dep-graph">
  <span class="dep-node dep-node--done">OOP Basics</span>
  <span class="dep-arrow">→</span>
  <span class="dep-node dep-node--done">SOLID</span>
  <span class="dep-arrow">→</span>
  <span class="dep-node dep-node--current">Observer</span>
  <span class="dep-arrow">→</span>
  <span class="dep-node dep-node--locked">Strategy</span>
  <span class="dep-arrow">→</span>
  <span class="dep-node dep-node--locked">Decorator</span>
</div>
```

---

### #30. Git Diff Block
**CSS class:** `.git-diff`, `.diff-header`, `.diff-line`, `.diff-line--remove`, `.diff-line--add`, `.diff-line--context`
**When to use:** Red/green diff for before/after configuration or code changes
**Section types:** S11 (Common Mistakes), S22 (Migration)

```html
<div class="git-diff">
  <div class="diff-header">appsettings.json</div>
  <div class="diff-line diff-line--context"> {</div>
  <div class="diff-line diff-line--context">   "ConnectionStrings": {</div>
  <div class="diff-line diff-line--remove">-    "MaxPoolSize": 10,</div>
  <div class="diff-line diff-line--add">+    "MaxPoolSize": 100,</div>
  <div class="diff-line diff-line--remove">-    "Timeout": 30</div>
  <div class="diff-line diff-line--add">+    "Timeout": 5</div>
  <div class="diff-line diff-line--context">   }</div>
  <div class="diff-line diff-line--context"> }</div>
</div>
```

---

### #31. Multi-File Code Viewer
**CSS class:** `.multi-file`, `.multi-file-tabs`, `.multi-file-tab`, `.multi-file-panel`
**When to use:** IDE-style tabs for switching between related source files
**Section types:** S5, S6, S8

```html
<div class="multi-file">
  <div class="multi-file-tabs">
    <button class="multi-file-tab active" data-file="iobs">IObserver.cs</button>
    <button class="multi-file-tab" data-file="sub">Subject.cs</button>
    <button class="multi-file-tab" data-file="main">Program.cs</button>
  </div>
  <div class="multi-file-panel active" id="iobs">
    <pre><code class="language-csharp">public interface IObserver { void Update(string message); }</code></pre>
  </div>
  <div class="multi-file-panel" id="sub">
    <pre><code class="language-csharp">public class Subject { ... }</code></pre>
  </div>
  <div class="multi-file-panel" id="main">
    <pre><code class="language-csharp">var subject = new Subject(); ...</code></pre>
  </div>
</div>
```

---

### #32. Config Diff
**CSS class:** `.config-diff`, `.config-diff-before`, `.config-diff-after`, `.config-diff-label`
**When to use:** Side-by-side config file comparison (before/after)
**Section types:** S11, S22

```html
<div class="config-diff">
  <div class="config-diff-before">
    <div class="config-diff-label">Before</div>
    <pre>max_connections = 100
shared_buffers = 128MB
work_mem = 4MB</pre>
  </div>
  <div class="config-diff-after">
    <div class="config-diff-label">After</div>
    <pre>max_connections = 500
shared_buffers = 4GB
work_mem = 64MB</pre>
  </div>
</div>
```

---

### #33. CI/CD Pipeline
**CSS class:** `.pipeline`, `.pipeline-stage`, `.pipeline-stage--pass/running/fail/pending`, `.pipeline-connector`
**When to use:** CI/CD pipeline stages with status indicators
**Section types:** S9 (At Scale), S11, S22

```html
<div class="pipeline">
  <div class="pipeline-stage pipeline-stage--pass"><i class="fa-solid fa-check"></i> Build</div>
  <div class="pipeline-connector"></div>
  <div class="pipeline-stage pipeline-stage--pass"><i class="fa-solid fa-check"></i> Test</div>
  <div class="pipeline-connector"></div>
  <div class="pipeline-stage pipeline-stage--running"><i class="fa-solid fa-spinner"></i> Deploy</div>
  <div class="pipeline-connector"></div>
  <div class="pipeline-stage pipeline-stage--pending"><i class="fa-solid fa-clock"></i> Monitor</div>
</div>
```

---

## CATEGORY 5: System Simulation (#34-42)

---

### #34. Cache Simulator
**CSS class:** `.cache-sim`, `.cache-sim-entry`, `.cache-sim-entry--hit`, `.cache-sim-entry--miss`, `.cache-key`, `.cache-result`, `.cache-time`
**When to use:** Cache hit/miss patterns showing key lookups with results
**Section types:** S6, S7, S8

```html
<div class="cache-sim">
  <div class="cache-sim-entry cache-sim-entry--miss">
    <span class="cache-key">user:42</span>
    <span class="cache-result">MISS</span>
    <span class="cache-time">2.3ms → DB</span>
  </div>
  <div class="cache-sim-entry cache-sim-entry--hit">
    <span class="cache-key">user:42</span>
    <span class="cache-result">HIT</span>
    <span class="cache-time">0.1ms</span>
  </div>
  <div class="cache-sim-entry cache-sim-entry--hit">
    <span class="cache-key">product:99</span>
    <span class="cache-result">HIT</span>
    <span class="cache-time">0.08ms</span>
  </div>
  <div class="cache-sim-entry cache-sim-entry--miss">
    <span class="cache-key">order:7</span>
    <span class="cache-result">MISS</span>
    <span class="cache-time">4.1ms → DB</span>
  </div>
</div>
```

---

### #35. Rate Limiter Visualizer
**CSS class:** `.rate-viz`, `.rate-viz-bucket`, `.rate-viz-token`, `.rate-viz-token--empty`, `.rate-viz-requests`, `.rate-viz-dot`, `.rate-viz-dot--accepted/rejected`, `.rate-viz-label`
**When to use:** Token bucket visualization for rate limiting
**Section types:** S6, S7

```html
<div class="rate-viz">
  <div class="rate-viz-label">Token Bucket (capacity: 5)</div>
  <div class="rate-viz-bucket">
    <div class="rate-viz-token" style="height: 100%;"></div>
    <div class="rate-viz-token" style="height: 100%;"></div>
    <div class="rate-viz-token" style="height: 100%;"></div>
    <div class="rate-viz-token rate-viz-token--empty" style="height: 100%;"></div>
    <div class="rate-viz-token rate-viz-token--empty" style="height: 100%;"></div>
  </div>
  <div class="rate-viz-label">Incoming requests:</div>
  <div class="rate-viz-requests">
    <div class="rate-viz-dot rate-viz-dot--accepted"></div>
    <div class="rate-viz-dot rate-viz-dot--accepted"></div>
    <div class="rate-viz-dot rate-viz-dot--accepted"></div>
    <div class="rate-viz-dot rate-viz-dot--rejected"></div>
    <div class="rate-viz-dot rate-viz-dot--rejected"></div>
  </div>
</div>
```

---

### #36. Circuit Breaker State
**CSS class:** `.circuit-state`, `.circuit-node`, `.circuit-node--closed/open/half`, `.circuit-node--active`, `.circuit-arrow`
**When to use:** Three-state machine visualization (Closed → Open → Half-Open)
**Section types:** S6, S7

```html
<div class="circuit-state">
  <div class="circuit-node circuit-node--closed circuit-node--active">CLOSED</div>
  <span class="circuit-arrow">5 failures →</span>
  <div class="circuit-node circuit-node--open">OPEN</div>
  <span class="circuit-arrow">timeout →</span>
  <div class="circuit-node circuit-node--half">HALF-OPEN</div>
</div>
```

---

### #37. Message Queue Viz
**CSS class:** `.mq-viz`, `.mq-viz-producer`, `.mq-viz-consumer`, `.mq-viz-queue`, `.mq-viz-msg`, `.mq-viz-arrow`, `.mq-viz-depth`
**When to use:** Producer → Queue → Consumer visualization with queue depth
**Section types:** S6, S7

```html
<div class="mq-viz">
  <div class="mq-viz-producer">Producer</div>
  <span class="mq-viz-arrow">→</span>
  <div class="mq-viz-queue">
    <div class="mq-viz-msg">M1</div>
    <div class="mq-viz-msg">M2</div>
    <div class="mq-viz-msg">M3</div>
    <div class="mq-viz-msg">M4</div>
  </div>
  <span class="mq-viz-arrow">→</span>
  <div class="mq-viz-consumer">Consumer</div>
</div>
<div class="mq-viz-depth">Queue depth: 4 messages</div>
```

---

### #38. Shard Map
**CSS class:** `.shard-map`, `.shard`, `.shard--hot`, `.shard--cold`, `.shard-id`, `.shard-load`, `.shard-size`
**When to use:** Grid showing shard distribution with load/size and hot-shard highlighting
**Section types:** S6, S7, S9

```html
<div class="shard-map">
  <div class="shard shard--hot">
    <div class="shard-id">Shard 0</div>
    <div class="shard-load">CPU: 92%</div>
    <div class="shard-size">450 GB</div>
  </div>
  <div class="shard">
    <div class="shard-id">Shard 1</div>
    <div class="shard-load">CPU: 45%</div>
    <div class="shard-size">280 GB</div>
  </div>
  <div class="shard">
    <div class="shard-id">Shard 2</div>
    <div class="shard-load">CPU: 38%</div>
    <div class="shard-size">260 GB</div>
  </div>
  <div class="shard shard--cold">
    <div class="shard-id">Shard 3</div>
    <div class="shard-load">CPU: 5%</div>
    <div class="shard-size">40 GB</div>
  </div>
</div>
```

---

### #39. Cost Calculator
**CSS class:** `.cost-calc`, `.cost-calc-subtotal`, `.cost-calc-total`
**When to use:** Line-item cost breakdown with subtotals and grand total
**Section types:** S9 (At Scale)

```html
<div class="cost-calc">
  <table>
    <thead>
      <tr><th>Resource</th><th>Quantity</th><th>Unit Cost</th><th>Monthly</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>EC2 c5.2xlarge</td>
        <td>10 instances</td>
        <td>$0.34/hr</td>
        <td class="cost-calc-subtotal">$2,448</td>
      </tr>
      <tr>
        <td>RDS db.r5.2xlarge</td>
        <td>2 instances</td>
        <td>$0.96/hr</td>
        <td class="cost-calc-subtotal">$1,382</td>
      </tr>
      <tr class="cost-calc-total">
        <td colspan="3">Total Monthly</td>
        <td>$3,830</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

### #40. Glossary Panel
**CSS class:** `.glossary-panel`, `.glossary-panel-title`, `.glossary-panel-list`, `.glossary-item`, `.glossary-term`, `.glossary-def`, `.glossary-letter`
**When to use:** Scrollable glossary of terms for a topic page
**Section types:** S14 (Cheat Cards), S19

```html
<div class="glossary-panel">
  <div class="glossary-panel-title">Key Terms</div>
  <ul class="glossary-panel-list">
    <li class="glossary-letter">C</li>
    <li class="glossary-item">
      <span class="glossary-term">Consistency</span>
      <span class="glossary-def">All nodes see the same data at the same time</span>
    </li>
    <li class="glossary-letter">P</li>
    <li class="glossary-item">
      <span class="glossary-term">Partition Tolerance</span>
      <span class="glossary-def">System continues operating despite network failures</span>
    </li>
  </ul>
</div>
```

---

### #41. Learning Progress Bar
**CSS class:** `.learning-progress`, `.learning-progress-label`, `.learning-progress-pct`, `.learning-progress-bar`, `.learning-progress-seg`, `.learning-progress-seg--done/current/upcoming`, `.learning-progress-markers`
**When to use:** Segmented progress bar showing learning journey position
**Section types:** S15 (Connected Topics)

```html
<div class="learning-progress">
  <div class="learning-progress-label">
    <span>Your progress in Behavioral Patterns</span>
    <span class="learning-progress-pct">40%</span>
  </div>
  <div class="learning-progress-bar">
    <div class="learning-progress-seg learning-progress-seg--done" style="width: 20%;"></div>
    <div class="learning-progress-seg learning-progress-seg--done" style="width: 20%;"></div>
    <div class="learning-progress-seg learning-progress-seg--current" style="width: 20%;"></div>
    <div class="learning-progress-seg learning-progress-seg--upcoming" style="width: 20%;"></div>
    <div class="learning-progress-seg learning-progress-seg--upcoming" style="width: 20%;"></div>
  </div>
  <div class="learning-progress-markers">
    <span>Observer</span>
    <span>Strategy</span>
    <span>Template</span>
    <span>State</span>
    <span>Command</span>
  </div>
</div>
```

---

### #42. Comparison Table Enhanced
**CSS class:** `.compare-table`, `.compare-win`, `.compare-lose`, `.compare-neutral`, `.compare-draw`
**When to use:** Multi-column feature comparison with color-coded cells (green wins, red loses)
**Section types:** S8 (Variations), S10 (Comparisons)

```html
<div class="compare-table">
  <table>
    <thead>
      <tr><th>Feature</th><th>Redis</th><th>Memcached</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>Data Structures</td>
        <td class="compare-win">Strings, Lists, Sets, Hashes, Sorted Sets</td>
        <td class="compare-lose">Strings only</td>
      </tr>
      <tr>
        <td>Persistence</td>
        <td class="compare-win">RDB + AOF</td>
        <td class="compare-lose">None</td>
      </tr>
      <tr>
        <td>Memory Efficiency</td>
        <td class="compare-lose">Higher overhead</td>
        <td class="compare-win">Slab allocator, very efficient</td>
      </tr>
      <tr>
        <td>Multi-threading</td>
        <td class="compare-draw">Single-threaded (I/O threads in 6.0+)</td>
        <td class="compare-draw">Multi-threaded</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

## CATEGORY 6: Distributed Systems (#43-52)

---

### #43. Consensus Round Viz
**CSS class:** `.consensus-viz`, `.consensus-ring`, `.consensus-node`, `.leader`, `.follower`, `.candidate`, `.dead`, `.consensus-log`, `.consensus-log-entry`, `.committed`, `.pending`, `.consensus-stats`
**When to use:** Raft/Paxos leader election and consensus log visualization
**Section types:** S6, S7

```html
<div class="consensus-viz">
  <div class="consensus-ring">
    <div class="consensus-node leader" style="top: 0; left: 50%; transform: translate(-50%, -50%);">N1</div>
    <div class="consensus-node follower" style="top: 50%; left: 100%; transform: translate(-50%, -50%);">N2</div>
    <div class="consensus-node follower" style="top: 100%; left: 50%; transform: translate(-50%, -50%);">N3</div>
    <div class="consensus-node dead" style="top: 50%; left: 0; transform: translate(-50%, -50%);">N4</div>
  </div>
  <div class="consensus-log">
    <div class="consensus-log-entry committed">1</div>
    <div class="consensus-log-entry committed">2</div>
    <div class="consensus-log-entry committed">3</div>
    <div class="consensus-log-entry pending">4</div>
  </div>
  <div class="consensus-stats">
    Term: <span>5</span> | Leader: <span>N1</span> | Committed: <span>3</span>
  </div>
</div>
```

---

### #44. Replication Lag Viz
**CSS class:** `.repl-lag`, `.repl-lag-node`, `.primary`, `.replica`, `.repl-lag-arrow`, `.repl-lag-delay`, `.lag-green/lag-yellow/lag-red`, `.repl-lag-stats`
**When to use:** Primary → Replica with timing delay visualization
**Section types:** S6, S7

```html
<div class="repl-lag">
  <div class="repl-lag-node primary">Primary</div>
  <div class="repl-lag-arrow">
    <div class="repl-lag-delay lag-green">2ms</div>
  </div>
  <div class="repl-lag-node replica">Replica 1</div>
  <div class="repl-lag-arrow">
    <div class="repl-lag-delay lag-red">850ms</div>
  </div>
  <div class="repl-lag-node replica">Replica 2</div>
  <div class="repl-lag-stats">
    Avg lag: <span>426ms</span> | Max lag: <span>850ms</span>
  </div>
</div>
```

---

### #45. Connection Pool Viz
**CSS class:** `.conn-pool`, `.conn-pool-label`, `.conn-pool-grid`, `.conn-slot`, `.active`, `.idle`, `.waiting`, `.conn-pool-max`, `.conn-pool-stats`
**When to use:** Active/idle/waiting connection pool state
**Section types:** S6, S7, S11

```html
<div class="conn-pool">
  <div class="conn-pool-label">Connection Pool (max: 20)</div>
  <div class="conn-pool-grid">
    <div class="conn-slot active"></div>
    <div class="conn-slot active"></div>
    <div class="conn-slot active"></div>
    <div class="conn-slot idle"></div>
    <div class="conn-slot idle"></div>
    <div class="conn-slot waiting"></div>
  </div>
  <div class="conn-pool-max"></div>
  <dl class="conn-pool-stats">
    <dt>Active:</dt><dd>3</dd>
    <dt>Idle:</dt><dd>2</dd>
    <dt>Waiting:</dt><dd>1</dd>
  </dl>
</div>
```

---

### #46. Failure Cascade Viz
**CSS class:** `.cascade-viz`, `.cascade-service`, `.healthy`, `.struggling`, `.dead`, `.cascade-arrow`, `.failing`, `.cascade-service-icon`
**When to use:** Domino chain showing cascading service failures
**Section types:** S4 (Where It Breaks), S10

```html
<div class="cascade-viz">
  <div class="cascade-service healthy">
    <div class="cascade-service-icon">🌐</div>
    API Gateway
  </div>
  <div class="cascade-arrow"></div>
  <div class="cascade-service struggling">
    <div class="cascade-service-icon">📦</div>
    Order Svc
  </div>
  <div class="cascade-arrow failing"></div>
  <div class="cascade-service dead">
    <div class="cascade-service-icon">💳</div>
    Payment Svc
  </div>
  <div class="cascade-arrow failing"></div>
  <div class="cascade-service dead">
    <div class="cascade-service-icon">🗄️</div>
    Database
  </div>
</div>
```

---

### #47. Lock Contention Viz
**CSS class:** `.lock-viz`, `.lock-cell`, `.held`, `.waiting`, `.free`, `.lock-txn-label`
**When to use:** Database lock contention visualization (transactions waiting on resources)
**Section types:** S6, S7

```html
<div class="lock-viz">
  <table>
    <thead>
      <tr><th>Transaction</th><th>Row A</th><th>Row B</th><th>Row C</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="lock-txn-label">T1</span></td>
        <td><span class="lock-cell held">HELD</span></td>
        <td><span class="lock-cell waiting">WAIT</span></td>
        <td><span class="lock-cell free">—</span></td>
      </tr>
      <tr>
        <td><span class="lock-txn-label">T2</span></td>
        <td><span class="lock-cell waiting">WAIT</span></td>
        <td><span class="lock-cell held">HELD</span></td>
        <td><span class="lock-cell free">—</span></td>
      </tr>
    </tbody>
  </table>
</div>
```

---

### #48. Bloom Filter Viz
**CSS class:** `.bloom-viz`, `.bloom-viz-label`, `.bloom-bits`, `.bloom-bit`, `.set`, `.highlight`, `.false-pos`, `.bloom-result`, `.found`, `.not-found`, `.false-positive`
**When to use:** Bit array visualization with hash positions for Bloom filter explanation
**Section types:** S6, S7

```html
<div class="bloom-viz">
  <div class="bloom-viz-label">Bloom Filter (16 bits, 3 hash functions)</div>
  <div class="bloom-bits">
    <div class="bloom-bit">0</div>
    <div class="bloom-bit set">1</div>
    <div class="bloom-bit">0</div>
    <div class="bloom-bit set">1</div>
    <div class="bloom-bit">0</div>
    <div class="bloom-bit highlight">1</div>
    <div class="bloom-bit">0</div>
    <div class="bloom-bit set">1</div>
  </div>
  <div class="bloom-result found">Probably in set</div>
</div>
```

---

### #49. Consistent Hashing Ring
**CSS class:** `.hash-ring`, `.hash-ring-circle`, `.hash-ring-node`, `.node-a/node-b/node-c`, `.node-add`, `.hash-ring-key`, `.moving`, `.hash-ring-legend`
**When to use:** Circular consistent hashing ring with nodes and data points
**Section types:** S6, S7

```html
<div class="hash-ring">
  <div class="hash-ring-circle">
    <div class="hash-ring-node node-a" style="top: 10%; left: 75%;">A</div>
    <div class="hash-ring-node node-b" style="top: 75%; left: 90%;">B</div>
    <div class="hash-ring-node node-c" style="top: 75%; left: 10%;">C</div>
    <div class="hash-ring-key" style="top: 30%; left: 90%;">k1</div>
    <div class="hash-ring-key" style="top: 60%; left: 15%;">k2</div>
  </div>
  <div class="hash-ring-legend">
    <span>Node A</span>
    <span>Node B</span>
    <span>Node C</span>
  </div>
</div>
```

Position nodes and keys with absolute CSS (`top`, `left` percentages).

---

### #50. Vector Clock Viz
**CSS class:** `.vector-clock`, `.vc-timeline`, `.vc-process`, `.vc-process-label`, `.vc-line`, `.vc-event`, `.proc-a/proc-b/proc-c`, `.vc-stamp`, `.vc-arrow`, `.vc-concurrent`
**When to use:** Visualizing vector clocks and concurrent events across processes
**Section types:** S6, S7

```html
<div class="vector-clock">
  <div class="vc-timeline">
    <div class="vc-process">
      <div class="vc-process-label">P1</div>
      <div class="vc-line">
        <div class="vc-event proc-a" style="left: 20%;">e1
          <span class="vc-stamp">[1,0,0]</span>
        </div>
        <div class="vc-event proc-a" style="left: 60%;">e4
          <span class="vc-stamp">[2,1,0]</span>
        </div>
      </div>
    </div>
    <div class="vc-process">
      <div class="vc-process-label">P2</div>
      <div class="vc-line">
        <div class="vc-event proc-b" style="left: 40%;">e2
          <span class="vc-stamp">[0,1,0]</span>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

### #51. Write Amplification Calc
**CSS class:** `.write-amp`, `.write-amp-flow`, `.write-amp-input`, `.write-amp-arrow`, `.write-amp-outputs`, `.write-amp-out`, `.write-amp-total`
**When to use:** Showing how one logical write turns into many physical writes (LSM trees, SSDs)
**Section types:** S7

```html
<div class="write-amp">
  <div class="write-amp-flow">
    <div class="write-amp-input">1 Write (4 KB)</div>
    <div class="write-amp-arrow">→</div>
    <div class="write-amp-outputs">
      <div class="write-amp-out">WAL: 4 KB</div>
      <div class="write-amp-out">MemTable flush: 4 KB</div>
      <div class="write-amp-out">L0 compaction: 4 KB</div>
      <div class="write-amp-out">L1 compaction: 4 KB</div>
    </div>
  </div>
  <div class="write-amp-total">Write Amplification: 4x</div>
</div>
```

---

### #52. B+ Tree Navigator
**CSS class:** `.btree-nav`, `.btree-level`, `.btree-level-label`, `.btree-node`, `.active`, `.leaf`, `.btree-key`, `.highlight`, `.btree-leaf-link`, `.btree-leaf-link-arrow`
**When to use:** Clickable B+ tree levels showing search path through nodes
**Section types:** S7

```html
<div class="btree-nav">
  <div class="btree-level">
    <span class="btree-level-label">Root</span>
    <div class="btree-node active">
      <span class="btree-key">20</span>
      <span class="btree-key highlight">50</span>
      <span class="btree-key">80</span>
    </div>
  </div>
  <div class="btree-level">
    <span class="btree-level-label">Internal</span>
    <div class="btree-node">
      <span class="btree-key">10</span>
      <span class="btree-key">15</span>
    </div>
    <div class="btree-node active">
      <span class="btree-key">30</span>
      <span class="btree-key highlight">42</span>
    </div>
  </div>
  <div class="btree-level">
    <span class="btree-level-label">Leaf</span>
    <div class="btree-node leaf">
      <span class="btree-key highlight">42</span>
      <span class="btree-key">43</span>
      <span class="btree-key">45</span>
    </div>
  </div>
</div>
```

---

## CATEGORY 7: Network & Protocol (#53-56)

---

### #53. Network Topology
**CSS class:** `.net-topology`, `.net-hop`, `.net-hop-icon`, `.net-hop-label`, `.net-hop-location`, `.net-link`, `.net-link-latency`, `.net-topology-total`
**When to use:** Network path visualization showing hops with latency between each
**Section types:** S6, S7

```html
<div class="net-topology">
  <div class="net-hop">
    <div class="net-hop-icon">💻</div>
    <div class="net-hop-label">Client</div>
    <div class="net-hop-location">NYC</div>
  </div>
  <div class="net-link">
    <span class="net-link-latency">2ms</span>
  </div>
  <div class="net-hop">
    <div class="net-hop-icon">🌐</div>
    <div class="net-hop-label">CDN Edge</div>
    <div class="net-hop-location">NYC PoP</div>
  </div>
  <div class="net-link">
    <span class="net-link-latency">45ms</span>
  </div>
  <div class="net-hop">
    <div class="net-hop-icon">🏢</div>
    <div class="net-hop-label">Origin</div>
    <div class="net-hop-location">us-east-1</div>
  </div>
  <div class="net-topology-total">Total: 47ms</div>
</div>
```

---

### #54. DNS Resolution Trace
**CSS class:** `.dns-trace`, `.dns-trace-steps`, `.dns-step`, `.cache-hit`, `.cache-miss`, `.dns-step-num`, `.dns-step-server`, `.dns-step-result`, `.dns-step-time`
**When to use:** Step-by-step DNS resolution path with cache hit/miss indicators
**Section types:** S6, S7

```html
<div class="dns-trace">
  <div class="dns-trace-steps">
    <div class="dns-step cache-hit">
      <div class="dns-step-num">1</div>
      <div class="dns-step-server">Browser Cache</div>
      <div class="dns-step-result">MISS</div>
      <div class="dns-step-time">0ms</div>
    </div>
    <div class="dns-step cache-miss">
      <div class="dns-step-num">2</div>
      <div class="dns-step-server">Recursive Resolver</div>
      <div class="dns-step-result">api.example.com → 93.184.216.34</div>
      <div class="dns-step-time">12ms</div>
    </div>
  </div>
</div>
```

---

### #55. HTTP Request Lifecycle
**CSS class:** `.http-lifecycle`, `.http-phases`, `.http-phase`, `.phase-dns/phase-tcp/phase-tls/phase-http/phase-resp`, `.http-phase-dur`, `.http-total`, `.http-total-val`
**When to use:** Showing the phases of an HTTP request (DNS, TCP, TLS, HTTP, Response)
**Section types:** S6, S7

```html
<div class="http-lifecycle">
  <div class="http-phases">
    <div class="http-phase phase-dns" style="flex: 1;">DNS<span class="http-phase-dur">12ms</span></div>
    <div class="http-phase phase-tcp" style="flex: 1;">TCP<span class="http-phase-dur">15ms</span></div>
    <div class="http-phase phase-tls" style="flex: 2;">TLS<span class="http-phase-dur">30ms</span></div>
    <div class="http-phase phase-http" style="flex: 1;">HTTP<span class="http-phase-dur">5ms</span></div>
    <div class="http-phase phase-resp" style="flex: 3;">Response<span class="http-phase-dur">85ms</span></div>
  </div>
  <div class="http-total">
    <span>Total Request Time</span>
    <span class="http-total-val">147ms</span>
  </div>
</div>
```

---

### #56. Retry Pattern Viz
**CSS class:** `.retry-viz`, `.retry-timeline`, `.retry-attempt`, `.retry-attempt-dot`, `.fail`, `.success`, `.retry-attempt-label`, `.retry-gap`, `.retry-gap-label`, `.retry-viz-legend`
**When to use:** Retry pattern with exponential backoff visualization
**Section types:** S6, S7

```html
<div class="retry-viz">
  <div class="retry-timeline">
    <div class="retry-attempt">
      <div class="retry-attempt-dot fail">1</div>
      <div class="retry-attempt-label">Attempt 1</div>
    </div>
    <div class="retry-gap" style="width: 40px;">
      <span class="retry-gap-label">1s</span>
    </div>
    <div class="retry-attempt">
      <div class="retry-attempt-dot fail">2</div>
      <div class="retry-attempt-label">Attempt 2</div>
    </div>
    <div class="retry-gap" style="width: 80px;">
      <span class="retry-gap-label">2s</span>
    </div>
    <div class="retry-attempt">
      <div class="retry-attempt-dot success">3</div>
      <div class="retry-attempt-label">Attempt 3</div>
    </div>
  </div>
  <div class="retry-viz-legend">
    Exponential backoff: 1s → 2s → 4s (max 3 retries)
  </div>
</div>
```

---

## CATEGORY 8: Architecture Patterns (#57-63)

---

### #57. Event Sourcing Timeline
**CSS class:** `.event-timeline`, `.event-timeline-track`, `.event-card`, `.event-card-header`, `.create`, `.update`, `.delete`, `.event-card-body`, `.event-state`, `.event-replay-indicator`
**When to use:** Event sourcing event log with state reconstruction
**Section types:** S6, S7

```html
<div class="event-timeline">
  <div class="event-timeline-track">
    <div class="event-card">
      <div class="event-card-header create">OrderCreated</div>
      <div class="event-card-body">{ orderId: "x7k9", items: 2 }</div>
      <div class="event-state">State: { status: "pending", total: $50 }</div>
    </div>
    <div class="event-card">
      <div class="event-card-header update">PaymentReceived</div>
      <div class="event-card-body">{ amount: $50, method: "card" }</div>
      <div class="event-state">State: { status: "paid", total: $50 }</div>
    </div>
    <div class="event-card">
      <div class="event-card-header update">OrderShipped</div>
      <div class="event-card-body">{ tracking: "UPS123" }</div>
      <div class="event-state">State: { status: "shipped" }</div>
    </div>
  </div>
  <div class="event-replay-indicator"><i class="fa-solid fa-rotate-left"></i> Replay to rebuild state</div>
</div>
```

---

### #58. CQRS Flow
**CSS class:** `.cqrs-flow`, `.cqrs-side`, `.write-side`, `.read-side`, `.cqrs-side-title`, `.cqrs-box`, `.cqrs-arrow-down`, `.cqrs-event-store`
**When to use:** CQRS write-side/read-side separation with event store
**Section types:** S6, S7

```html
<div class="cqrs-flow">
  <div class="cqrs-side write-side">
    <div class="cqrs-side-title"><i class="fa-solid fa-pen"></i> Write Side</div>
    <div class="cqrs-box">Command Handler</div>
    <div class="cqrs-arrow-down">↓</div>
    <div class="cqrs-box">Domain Model</div>
    <div class="cqrs-arrow-down">↓</div>
    <div class="cqrs-box">Write DB</div>
  </div>
  <div class="cqrs-event-store"><i class="fa-solid fa-database"></i> Event Store</div>
  <div class="cqrs-side read-side">
    <div class="cqrs-side-title"><i class="fa-solid fa-eye"></i> Read Side</div>
    <div class="cqrs-box">Event Projector</div>
    <div class="cqrs-arrow-down">↓</div>
    <div class="cqrs-box">Read Model</div>
    <div class="cqrs-arrow-down">↓</div>
    <div class="cqrs-box">Query Handler</div>
  </div>
</div>
```

---

### #59. Service Dependency Map
**CSS class:** `.service-map`, `.service-map-grid`, `.service-box`, `.healthy`, `.degraded`, `.down`, `.service-box-name`, `.service-box-status`
**When to use:** Grid of microservices with health status
**Section types:** S6, S9

```html
<div class="service-map">
  <div class="service-map-grid">
    <div class="service-box healthy">
      <div class="service-box-name">API Gateway</div>
      <div class="service-box-status">200ms avg</div>
    </div>
    <div class="service-box healthy">
      <div class="service-box-name">User Service</div>
      <div class="service-box-status">45ms avg</div>
    </div>
    <div class="service-box degraded">
      <div class="service-box-name">Order Service</div>
      <div class="service-box-status">1.2s avg</div>
    </div>
    <div class="service-box down">
      <div class="service-box-name">Payment Service</div>
      <div class="service-box-status">DOWN</div>
    </div>
  </div>
</div>
```

---

### #60. Feature Flag Rollout
**CSS class:** `.feature-rollout`, `.feature-rollout-bar`, `.rollout-stage`, `.canary`, `.partial`, `.majority`, `.full`, `.current`, `.inactive`, `.feature-rollout-labels`
**When to use:** Showing gradual feature rollout stages (canary → partial → full)
**Section types:** S9

```html
<div class="feature-rollout">
  <div class="feature-rollout-bar">
    <div class="rollout-stage canary" style="flex: 1;">1%</div>
    <div class="rollout-stage partial current" style="flex: 2;">10%</div>
    <div class="rollout-stage majority inactive" style="flex: 4;">50%</div>
    <div class="rollout-stage full inactive" style="flex: 3;">100%</div>
  </div>
  <div class="feature-rollout-labels">
    <span>Canary</span>
    <span class="active-label">Partial</span>
    <span>Majority</span>
    <span>Full</span>
  </div>
</div>
```

---

### #61. A/B Test Split
**CSS class:** `.ab-split`, `.ab-split-groups`, `.ab-group`, `.control`, `.variant`, `.ab-group-pct`, `.ab-group-label`, `.ab-metrics`, `.ab-metric`, `.ab-metric-name`, `.ab-metric-val`, `.winner`, `.loser`
**When to use:** A/B test group split with metrics comparison
**Section types:** S9

```html
<div class="ab-split">
  <div class="ab-split-groups">
    <div class="ab-group control">
      <span class="ab-group-pct">50%</span>
      <span class="ab-group-label">Control (A)</span>
    </div>
    <div class="ab-group variant">
      <span class="ab-group-pct">50%</span>
      <span class="ab-group-label">Variant (B)</span>
    </div>
  </div>
  <div class="ab-metrics">
    <div class="ab-metric">
      <div class="ab-metric-name">Conversion</div>
      <div class="ab-metric-val loser">2.1%</div>
    </div>
    <div class="ab-metric">
      <div class="ab-metric-name">Conversion</div>
      <div class="ab-metric-val winner">3.4%</div>
    </div>
    <div class="ab-metric">
      <div class="ab-metric-name">P-value</div>
      <div class="ab-metric-val">0.003</div>
    </div>
  </div>
</div>
```

---

### #62. Merkle Tree Diff
**CSS class:** `.merkle-diff`, `.merkle-level`, `.merkle-node`, `.match`, `.mismatch`, `.path`, `.merkle-connector`
**When to use:** Merkle tree anti-entropy comparison (matching vs mismatching nodes)
**Section types:** S7

```html
<div class="merkle-diff">
  <div class="merkle-level">
    <div class="merkle-node mismatch">H(root): abc1</div>
  </div>
  <div class="merkle-connector">/ \</div>
  <div class="merkle-level">
    <div class="merkle-node match">H(L): d4e2</div>
    <div class="merkle-node mismatch">H(R): f8a3</div>
  </div>
  <div class="merkle-connector">/ \ / \</div>
  <div class="merkle-level">
    <div class="merkle-node match">H1: ok</div>
    <div class="merkle-node match">H2: ok</div>
    <div class="merkle-node match">H3: ok</div>
    <div class="merkle-node mismatch">H4: DIFF</div>
  </div>
</div>
```

---

### #63. Docker Compose Viz
**CSS class:** `.compose-viz`, `.compose-services`, `.compose-svc`, `.db`, `.app`, `.cache`, `.queue`, `.compose-svc-name`, `.compose-detail`, `.compose-detail-label`, `.compose-dep-arrow`
**When to use:** Docker compose service topology with ports, volumes, and dependencies
**Section types:** S6, S9

```html
<div class="compose-viz">
  <div class="compose-services">
    <div class="compose-svc app">
      <div class="compose-svc-name">web-api</div>
      <div class="compose-detail"><span class="compose-detail-label">Port:</span> 8080:80</div>
      <div class="compose-detail"><span class="compose-detail-label">Image:</span> myapp:latest</div>
      <div class="compose-dep-arrow">↓ depends_on</div>
    </div>
    <div class="compose-svc db">
      <div class="compose-svc-name">postgres</div>
      <div class="compose-detail"><span class="compose-detail-label">Port:</span> 5432</div>
      <div class="compose-detail"><span class="compose-detail-label">Vol:</span> pgdata:/var/lib/pg</div>
    </div>
    <div class="compose-svc cache">
      <div class="compose-svc-name">redis</div>
      <div class="compose-detail"><span class="compose-detail-label">Port:</span> 6379</div>
    </div>
    <div class="compose-svc queue">
      <div class="compose-svc-name">rabbitmq</div>
      <div class="compose-detail"><span class="compose-detail-label">Port:</span> 5672</div>
    </div>
  </div>
</div>
```

---

## CATEGORY 9: Calculators & Reference (#64-70)

---

### #64. SLA Calculator
**CSS class:** `.sla-calc`, `.sla-nines`, `.sla-pct`, `.sla-downtime`, `.safe`, `.warn`, `.danger`, `.sla-calc-highlight`
**When to use:** SLA nines table with availability percentages and allowed downtime
**Section types:** S6, S9, S12

```html
<div class="sla-calc">
  <table>
    <thead>
      <tr><th>SLA</th><th>Uptime %</th><th>Downtime/year</th><th>Downtime/month</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="sla-nines">99%</span></td>
        <td><span class="sla-pct">99.0%</span></td>
        <td><span class="sla-downtime danger">3.65 days</span></td>
        <td><span class="sla-downtime danger">7.3 hours</span></td>
      </tr>
      <tr class="sla-calc-highlight">
        <td><span class="sla-nines">99.9%</span></td>
        <td><span class="sla-pct">99.9%</span></td>
        <td><span class="sla-downtime warn">8.76 hours</span></td>
        <td><span class="sla-downtime warn">43.8 min</span></td>
      </tr>
      <tr>
        <td><span class="sla-nines">99.99%</span></td>
        <td><span class="sla-pct">99.99%</span></td>
        <td><span class="sla-downtime safe">52.6 min</span></td>
        <td><span class="sla-downtime safe">4.38 min</span></td>
      </tr>
    </tbody>
  </table>
</div>
```

---

### #65. Capacity Planning Grid
**CSS class:** `.capacity-grid`, `.capacity-inputs`, `.capacity-outputs`, `.capacity-item`, `.input`, `.output`, `.capacity-item-label`, `.capacity-item-val`, `.capacity-divider`
**When to use:** Input parameters → derived output metrics for capacity estimation
**Section types:** S4, S12

```html
<div class="capacity-grid">
  <div class="capacity-inputs">
    <div class="capacity-item input">
      <div class="capacity-item-label">DAU</div>
      <div class="capacity-item-val">100M</div>
    </div>
    <div class="capacity-item input">
      <div class="capacity-item-label">Req/User</div>
      <div class="capacity-item-val">10</div>
    </div>
    <div class="capacity-item input">
      <div class="capacity-item-label">Payload</div>
      <div class="capacity-item-val">500 B</div>
    </div>
  </div>
  <div class="capacity-divider">↓ Derived</div>
  <div class="capacity-outputs">
    <div class="capacity-item output">
      <div class="capacity-item-label">QPS</div>
      <div class="capacity-item-val">~11.5K</div>
    </div>
    <div class="capacity-item output">
      <div class="capacity-item-label">Bandwidth</div>
      <div class="capacity-item-val">5.75 MB/s</div>
    </div>
    <div class="capacity-item output">
      <div class="capacity-item-label">Storage/day</div>
      <div class="capacity-item-val">500 GB</div>
    </div>
  </div>
</div>
```

---

### #66. Bandwidth Estimator
**CSS class:** `.bw-estimator`, `.bw-inputs`, `.bw-input`, `.bw-input-label`, `.bw-input-val`, `.bw-operator`, `.bw-result`, `.bw-result-val`, `.bw-result-label`, `.bw-bar`, `.bw-bar-fill`, `.low/mid/high`, `.bw-bar-label`
**When to use:** Bandwidth calculation with visual bar showing utilization level
**Section types:** S4, S12

```html
<div class="bw-estimator">
  <div class="bw-inputs">
    <div class="bw-input">
      <div class="bw-input-label">QPS</div>
      <div class="bw-input-val">10,000</div>
    </div>
    <div class="bw-operator">x</div>
    <div class="bw-input">
      <div class="bw-input-label">Avg Payload</div>
      <div class="bw-input-val">50 KB</div>
    </div>
    <div class="bw-operator">=</div>
  </div>
  <div class="bw-result">
    <div class="bw-result-val">500 MB/s</div>
    <div class="bw-result-label">Required Bandwidth</div>
  </div>
  <div class="bw-bar">
    <div class="bw-bar-fill mid" style="width: 50%;"></div>
    <span class="bw-bar-label">50% of 1 Gbps link</span>
  </div>
</div>
```

---

### #67. Key Insight Callout
**CSS class:** `.callout-insight`, `.callout-insight-title`
**When to use:** Gold lightbulb callout for key insights that stand out from regular callouts
**Section types:** S1 (TL;DR), S5, S6, S10

```html
<div class="callout-insight">
  <div class="callout-insight-title">The Real Insight</div>
  <p>Horizontal scaling is not just about adding more servers. The hard part is making your application stateless so that any server can handle any request.</p>
</div>
```

---

### #68. Formula Reference Float
**CSS class:** `.formula-float`, `.collapsed`, `.formula-float-header`, `.formula-float-title`, `.formula-float-toggle`, `.formula-float-body`, `.formula-item`, `.formula-name`, `.formula-expr`
**When to use:** Fixed-position floating panel with key formulas (sticky reference while reading)
**Section types:** S14 (Cheat Cards), HLD pages

```html
<div class="formula-float">
  <div class="formula-float-header">
    <span class="formula-float-title">Key Formulas</span>
    <button class="formula-float-toggle">_</button>
  </div>
  <div class="formula-float-body">
    <div class="formula-item">
      <div class="formula-name">QPS</div>
      <div class="formula-expr">DAU x Req/User / 86400</div>
    </div>
    <div class="formula-item">
      <div class="formula-name">Storage</div>
      <div class="formula-expr">QPS x Payload x 86400</div>
    </div>
    <div class="formula-item">
      <div class="formula-name">Bandwidth</div>
      <div class="formula-expr">QPS x Payload</div>
    </div>
  </div>
</div>
```

---

### #69. Prerequisite Checker
**CSS class:** `.prereq-check`, `.prereq-check-title`, `.prereq-list`, `.prereq-item`, `.prereq-icon`, `.done`, `.todo`
**When to use:** Checklist of prerequisites with understood/study-first status
**Section types:** S0, S15

```html
<div class="prereq-check">
  <div class="prereq-check-title">Before You Start</div>
  <div class="prereq-list">
    <div class="prereq-item">
      <div class="prereq-icon done"><i class="fa-solid fa-check"></i></div>
      <span class="checked">TCP/IP basics</span>
    </div>
    <div class="prereq-item">
      <div class="prereq-icon done"><i class="fa-solid fa-check"></i></div>
      <span class="checked">HTTP protocol</span>
    </div>
    <div class="prereq-item">
      <div class="prereq-icon todo"><i class="fa-solid fa-book"></i></div>
      <a href="../dns/index.html">DNS resolution</a>
    </div>
  </div>
</div>
```

---

### #70. Concept Map
**CSS class:** `.concept-map`, `.concept-map-grid`, `.concept-node`, `.current`, `.completed`, `.locked`, `.concept-map-category`
**When to use:** Grid of related topics showing where the reader is in the topic graph
**Section types:** S15, S24

```html
<div class="concept-map">
  <div class="concept-map-grid">
    <div class="concept-map-category">Behavioral Patterns</div>
    <a class="concept-node completed" href="../observer/">Observer</a>
    <a class="concept-node current" href="../strategy/">Strategy</a>
    <a class="concept-node" href="../template-method/">Template Method</a>
    <a class="concept-node locked">Command</a>
    <div class="concept-map-category">Structural Patterns</div>
    <a class="concept-node completed" href="../decorator/">Decorator</a>
    <a class="concept-node locked">Adapter</a>
    <a class="concept-node locked">Facade</a>
  </div>
</div>
```

---

## DECISION FLOWCHART

```
Is it a step-by-step process?
├── Protocol/network exchange? → #6 .sequence-diagram
├── Data pipeline flow? → #10 .flow-stepper
├── Math calculation? → #2 .math-stepper or #22 .estimation-calc
├── Logical proof? → #23 .proof-block
└── System evolution? → #5 .evolution-stepper

Is it showing real-world output?
├── Database structure? → #12 .schema-viewer
├── API call? → #13 .api-viewer
├── Error message? → #15 .error-block
├── Logs? → #14 .log-viewer
├── Query plan? → #16 .query-plan
├── Terminal command? → E5 .macos-window
├── Config change? → #30 .git-diff or #32 .config-diff
└── Packet/frame? → #11 .packet-viewer

Is it a comparison?
├── Two extremes? → #3 .tradeoff-slider
├── Before/after architecture? → #4 .arch-diff
├── Multiple options table? → #42 .compare-table
├── Myth vs truth? → #25 .myth-buster
└── Code bad/good? → E3 .tab-container

Is it about distributed systems?
├── Consensus/election? → #43 .consensus-viz
├── Replication lag? → #44 .repl-lag
├── Sharding? → #38 .shard-map or #49 .hash-ring
├── Failure cascade? → #46 .cascade-viz
├── Locking? → #47 .lock-viz
├── Circuit breaker? → #36 .circuit-state
├── Queue depth? → #37 .mq-viz
└── Cache pattern? → #34 .cache-sim

Is it about network/protocol?
├── Network path? → #53 .net-topology
├── DNS resolution? → #54 .dns-trace
├── HTTP request phases? → #55 .http-lifecycle
└── Retry pattern? → #56 .retry-viz

Is it showing architecture patterns?
├── Event sourcing? → #57 .event-timeline
├── CQRS? → #58 .cqrs-flow
├── Service topology? → #59 .service-map
├── Feature rollout? → #60 .feature-rollout
├── A/B test? → #61 .ab-split
├── Merkle tree? → #62 .merkle-diff
└── Docker compose? → #63 .compose-viz

Is it a calculation/reference?
├── SLA table? → #64 .sla-calc
├── Capacity estimation? → #65 .capacity-grid
├── Bandwidth calculation? → #66 .bw-estimator
├── Key insight? → #67 .callout-insight
├── Floating formula ref? → #68 .formula-float
├── Prereq checklist? → #69 .prereq-check
└── Topic map? → #70 .concept-map

Is it teaching the reader to think?
├── "What if X fails?" → #26 .whatif-card
├── Quiz? → #19 .knowledge-check
├── Debugging exercise? → #24 .debug-template
├── Interview practice? → #18 .interview-chat
├── Key warning? → #28 .callout-trap
└── Key insight? → #67 .callout-insight

Is it data structures / storage?
├── Memory/disk layout? → #8 .storage-viz
├── Relative speeds? → #9 .latency-ruler
├── B+ tree traversal? → #52 .btree-nav
├── Bloom filter bits? → #48 .bloom-viz
├── Vector clocks? → #50 .vector-clock
└── Write amplification? → #51 .write-amp

Is it company data?
├── Company profile? → #27 .company-card
├── System metrics? → #17 .dashboard
├── Interview rubric? → #21 .scorecard
└── Cost breakdown? → #39 .cost-calc

Is it progress/navigation?
├── Learning path position? → #41 .learning-progress
├── Prerequisites? → #69 .prereq-check
├── Topic dependencies? → #29 .dep-graph
├── CI/CD pipeline? → #33 .pipeline
└── Concept map? → #70 .concept-map
```

---

## SECTION TYPE MAPPING

Which components go in which section:

| Section | Primary Components | Why |
|---------|-------------------|-----|
| **S1 TL;DR** | E8 `.tldr-card`, #67 `.callout-insight`, #3 `.tradeoff-slider`, SVG | Crystallize the concept visually |
| **S2 Scenario** | #17 `.dashboard`, #14 `.log-viewer`, E16 `.think-first-box`, SVG | Make the reader FEEL the pain |
| **S3 First Attempt** | E5 `.macos-window`, #15 `.error-block`, SVG | Show the naive approach breaking |
| **S4 Where It Breaks** | #46 `.cascade-viz`, #26 `.whatif-card`, #2 `.math-stepper` | Prove with numbers WHY it fails |
| **S5 Breakthrough** | #5 `.evolution-stepper`, #4 `.arch-diff`, #23 `.proof-block`, E3 tabs | Show the AHA moment |
| **S6 How It Works** | #10 `.flow-stepper`, #6 `.sequence-diagram`, #12 `.schema-viewer`, #11 `.packet-viewer`, #20 `.code-walkthrough` | Deep mechanics with real artifacts |
| **S7 Going Deeper** | #52 `.btree-nav`, #8 `.storage-viz`, #43 `.consensus-viz`, #23 `.proof-block` | Internals visualization |
| **S8 Variations** | #42 `.compare-table`, #3 `.tradeoff-slider`, #4 `.arch-diff` | Compare options with trade-offs |
| **S9 At Scale** | #27 `.company-card`, #17 `.dashboard`, #39 `.cost-calc`, #60 `.feature-rollout` | Real company data |
| **S10 Anti-Lesson** | #25 `.myth-buster`, #28 `.callout-trap`, #26 `.whatif-card` | Debunk misconceptions |
| **S11 Common Mistakes** | #15 `.error-block`, #30 `.git-diff`, #28 `.callout-trap`, #45 `.conn-pool` | Show real errors and fixes |
| **S12 Interview Playbook** | #18 `.interview-chat`, #21 `.scorecard`, #22 `.estimation-calc` | Simulate real interviews |
| **S13 Pitfalls** | E2 `.collapsible`, #28 `.callout-trap`, E3 tabs (Bad/Good code) | Pitfall patterns with fixes |
| **S14 Cheat Cards** | E9 `.cheat-card`, #68 `.formula-float`, #40 `.glossary-panel` | Quick reference |
| **S15 Connected Topics** | #29 `.dep-graph`, #70 `.concept-map`, #41 `.learning-progress` | Navigation |
| **S17 Q&A** | E7 `.qa-item`, SVGs, E3 tabs, #25 `.myth-buster` | Interview prep |
| **S18 Practice** | E10 `.exercise-card`, #19 `.knowledge-check`, #24 `.debug-template` | Interactive practice |
| **S19 Cheat Sheet** | E9 `.cheat-card` in `grid-3` | Quick reference |
| **S22 Migration** | #30 `.git-diff`, #32 `.config-diff`, #33 `.pipeline` | Step-by-step migration |
| **S24 Related** | E11 `.related-card` in `.related-grid`, #70 `.concept-map` | What to study next |

---

*Every page agent MUST read this guide before building content. Pick the BEST component for the content, not the easiest.*
