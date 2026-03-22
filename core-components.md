# Core Components — System Guide

> **Check here FIRST** when building any page. These ~35 components cover 90% of content needs.
> If none fits → check `extra-components.md`. If still nothing → create a new component.

---

## Layout & Structure

| # | Component | Custom Tag | When to Use |
|---|-----------|-----------|-------------|
| 1 | Card Accordion | `<sg-card>` | Bug studies, FAQ items, any expandable section |
| 2 | Collapsible | `<sg-collapse>` | Hints, solutions, optional details |
| 3 | Tab Container | `<sg-tabs>` | Code comparisons (Buggy/Fix), multi-language, Bad/Good |
| 4 | Exercise Card | `<sg-exercise>` | Practice problems with difficulty + hint |
| 5 | Cheat Cards | `<sg-cheat>` | Quick-reference cards in a grid |
| 6 | Table | `<table>` | Data comparison, feature lists |
| 7 | Multi-File | `<sg-multi>` | Multiple code files with VS Code-style tabs |
| 11 | Comparison Grid | `<sg-compare>` | Side-by-side comparison, also Pros/Cons |
| 12 | When-to-Use | `<sg-when-use>` | Use when ✓ / Avoid when ✗ decision grid |
| 13 | Related Cards | `<sg-related>` | Links to related topics with icons |

### Usage Examples

```html
<!-- Card Accordion -->
<sg-card title="Bug: Connection Pool Race" icon="fa-solid fa-bug" open>
  <p>Content here...</p>
</sg-card>

<!-- Collapsible -->
<sg-collapse title="Pitfall: SELECT *" icon="fa-solid fa-circle-exclamation">
  <p>Hidden content...</p>
</sg-collapse>

<!-- Tab Container -->
<sg-tabs>
  <sg-tab title="Buggy Code" icon="fa-solid fa-bug">code here</sg-tab>
  <sg-tab title="Fix" icon="fa-solid fa-check">fixed code</sg-tab>
</sg-tabs>

<!-- Multi-File -->
<sg-multi>
  <sg-file name="Controller.cs">code</sg-file>
  <sg-file name="Service.cs">code</sg-file>
</sg-multi>

<!-- Comparison Grid (also works for Pros/Cons) -->
<sg-compare left-title="Strategy" right-title="State"
  left-items="Client chooses|Independent strategies"
  right-items="Internal state drives|Auto transitions">
</sg-compare>

<!-- When-to-Use -->
<sg-when-use
  yes="Multiple algorithms|Isolate business logic"
  no="Only one algorithm|Logic is trivial">
</sg-when-use>

<!-- Related Cards -->
<sg-related items='[
  {"icon":"fa-solid fa-shuffle","title":"Strategy","desc":"Swap algorithms","href":"strategy.html"}
]'></sg-related>
```

---

## Callouts & Alerts

| # | Component | Custom Tag | When to Use |
|---|-----------|-----------|-------------|
| 14 | Callouts | `<sg-callout>` | **11 types** — danger, success, info, warning, purple, trap, insight, tip, takeaway, rule, concept |
| 15 | Think-First | `<sg-think>` | Pause-and-think before revealing answer |

### Usage Examples

```html
<!-- Standard callouts -->
<sg-callout type="danger" title="Breaking Change">text</sg-callout>
<sg-callout type="success" title="Performance Win">text</sg-callout>
<sg-callout type="info" title="Note">text</sg-callout>
<sg-callout type="warning" title="Memory Alert">text</sg-callout>
<sg-callout type="purple" title="Design Insight">text</sg-callout>

<!-- Merged variants (no separate components needed) -->
<sg-callout type="trap">Caching trap description...</sg-callout>
<sg-callout type="insight">Key insight about B+ trees...</sg-callout>
<sg-callout type="tip">Interview tip about OCP...</sg-callout>
<sg-callout type="takeaway">Key takeaway summary...</sg-callout>
<sg-callout type="rule" title="Composition Over Inheritance">text</sg-callout>
<sg-callout type="concept" title="Polymorphism">text</sg-callout>

<!-- Think-First -->
<sg-think hint="Consider p99 latency under 10K concurrent requests">
  What happens if every request hits the database directly?
</sg-think>
```

---

## Code Display

| # | Component | Custom Tag | When to Use |
|---|-----------|-----------|-------------|
| 21-22 | Terminal / Code Window | `<sg-code>` | Any code block with syntax highlighting |
| 23 | Code Walkthrough | `.code-walkthrough` | Annotated code with hover tooltips per line |
| 25 | Config Diff | `<sg-config>` | Before/After config params with "why" |
| 27 | Code Evolution | `<sg-code-evo>` | Multi-version code progression with timeline |
| 28 | Refactoring Diff | `<sg-refactor>` | Side-by-side before/after code |

### Usage Examples

```html
<!-- Code Window -->
<sg-code file="UserService.cs">public class UserService { ... }</sg-code>
<sg-code file="~/terminal — bash" terminal>$ curl http://api.com</sg-code>

<!-- Config Diff -->
<sg-config title="PostgreSQL Tuning" file="postgresql.conf" params='[
  {"name":"max_connections","old":"100","new":"500","why":"Support 4× fleet"},
  {"name":"shared_buffers","old":"256MB","new":"4GB","why":"25% of 16GB RAM"}
]'></sg-config>

<!-- Code Evolution -->
<sg-code-evo title="Payment Processing" steps='[
  {"label":"Naive","why":"Hard-coded","code":"if (type == ...) ..."},
  {"label":"Strategy","why":"Open/Closed","code":"strategy.Pay(amount);"}
]'></sg-code-evo>

<!-- Refactoring Diff -->
<sg-refactor title="Strategy Pattern" pattern="Apply Strategy">
  <sg-before>if (type == "credit") charge(card);</sg-before>
  <sg-after>strategy.Pay(amount);</sg-after>
</sg-refactor>
```

---

## Data & Estimation

| # | Component | Custom Tag | When to Use |
|---|-----------|-----------|-------------|
| 30 | Math Block | `<sg-math>` | Simple inline calculation |
| 31 | Math Stepper | `<sg-math-steps>` | Step-by-step numbered calculation |
| 32 | Estimation Calc | `<sg-estimate>` | Back-of-envelope dashboard with count-up |
| 34-35 | Tooltips | `data-tooltip` / `.tooltip-rich` | Inline term definitions |
| 41 | Glossary Panel | `<sg-glossary>` | Searchable terms + auto-links in page text |

### Usage Examples

```html
<!-- Estimation Calc -->
<sg-estimate title="QPS Estimation" tag="URL Shortener">
  <sg-input label="DAU" value="10M" note="Daily active users"></sg-input>
  <sg-op>×</sg-op>
  <sg-input label="Req/Day" value="20" note="Per user"></sg-input>
  <sg-eq label="Daily Requests" value="200M"></sg-eq>
  <sg-result label="QPS" value="~2,315" formula="200M ÷ 86,400"></sg-result>
</sg-estimate>

<!-- Glossary (auto-links terms in page text as tooltips) -->
<sg-glossary terms='[
  {"term":"QPS","def":"Queries Per Second"},
  {"term":"CAP Theorem","def":"Consistency, Availability, Partition tolerance — pick 2"}
]'></sg-glossary>

<!-- Inline Tooltip -->
<span class="tooltip-trigger" data-tooltip="Queries Per Second">QPS</span>
```

---

## Interactive & Visualization

| # | Component | Custom Tag | When to Use |
|---|-----------|-----------|-------------|
| 44 | Knowledge Check | `<sg-quiz>` | Multiple-choice quiz with explanation |
| 50 | Flow Stepper | `<sg-flow>` | Step-by-step walkthrough with navigation |
| 56 | Sequence Diagram | `<sg-sequence>` | Request/response flow between services |
| 58 | Latency Ruler | `<sg-latency>` | Logarithmic latency comparison |
| 66 | Dependency Graph | `<sg-dep-graph>` | Interactive service architecture graph |

### Usage Examples

```html
<!-- Knowledge Check -->
<sg-quiz question="What happens when load factor exceeds 0.75?"
  options='[{"text":"Drops entries"},{"text":"Resizes and rehashes","correct":true}]'
  explanation="Table doubles and rehashes every key.">
</sg-quiz>

<!-- Flow Stepper -->
<sg-flow>
  <sg-flow-step title="Client sends request"><p>Browser sends HTTP GET...</p></sg-flow-step>
  <sg-flow-step title="Load balancer routes"><p>ALB picks server #3...</p></sg-flow-step>
</sg-flow>

<!-- Sequence Diagram -->
<sg-sequence participants="Client,API,Cache,DB">
  <sg-msg from="0" to="1" label="GET /users/42" time="0ms"></sg-msg>
  <sg-msg from="1" to="2" label="GET user:42" time="1ms"></sg-msg>
  <sg-msg from="2" to="1" label="MISS" time="1ms" resp></sg-msg>
</sg-sequence>

<!-- Latency Ruler -->
<sg-latency entries='[
  {"label":"L1 Cache","ns":1,"note":"CPU register"},
  {"label":"RAM","ns":100,"note":"Main memory"},
  {"label":"SSD","ns":150000,"note":"NVMe flash"}
]'></sg-latency>

<!-- Dependency Graph -->
<sg-dep-graph graph='{
  "title":"Architecture",
  "layerLabels":["Ingress","Services","Data"],
  "layers":[
    [{"name":"API Gateway","icon":"fa-shield-halved","status":"done"}],
    [{"name":"Auth","icon":"fa-key","status":"done"},{"name":"Orders","icon":"fa-cart-shopping","status":"current"}],
    [{"name":"PostgreSQL","icon":"fa-database","status":"done"},{"name":"Redis","icon":"fa-bolt","status":"done"}]
  ],
  "edges":[[0,0,1,0],[0,0,1,1],[1,0,2,1],[1,1,2,0]]
}'></sg-dep-graph>
```

---

## System Design Specific

| # | Component | Custom Tag | When to Use |
|---|-----------|-----------|-------------|
| 36 | Scorecard | `<sg-scorecard>` | Interview performance gauges |
| 37 | Dashboard | `<sg-dashboard>` | Metrics cards (QPS, latency, errors) |
| 51 | Interview Chat | `<sg-chat>` | Mock interview conversation |
| 61 | API Viewer | tabs + `.api-viewer` | REST API request/response |
| 62 | Log Viewer | `<sg-logs>` | Colorized log entries |
| 63 | Error Block | `<sg-error>` | Database/system error display |
| 65 | Pipeline | `<sg-pipeline>` | CI/CD stages with status |

---

## Quick Decision Tree

```
Need to show code?
  ├─ Single file → <sg-code>
  ├─ Multiple files → <sg-multi>
  ├─ Before/After → <sg-refactor>
  ├─ Config changes → <sg-config>
  ├─ Code evolution → <sg-code-evo>
  └─ Annotated lines → .code-walkthrough

Need to compare things?
  ├─ Two sides → <sg-compare>
  ├─ Use/Avoid → <sg-when-use>
  └─ Feature table → <table>

Need an alert/info box?
  └─ <sg-callout type="danger|success|info|warning|purple|trap|insight|tip|takeaway|rule|concept">

Need math/estimation?
  ├─ Simple → <sg-math>
  ├─ Step-by-step → <sg-math-steps>
  └─ Dashboard → <sg-estimate>

Need interaction?
  ├─ Quiz → <sg-quiz>
  ├─ Step walkthrough → <sg-flow>
  └─ Think prompt → <sg-think>

Need visualization?
  ├─ Request flow → <sg-sequence>
  ├─ Architecture → <sg-dep-graph>
  ├─ Latency → <sg-latency>
  └─ Timeline → check extra-components.md
```
