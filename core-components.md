# Core Components — System Guide

> **Use these FIRST** when building any page. These cover 90% of content needs.
> If none fits, check `extra-components.md`. If still nothing, create a new component.

---

## Layout & Structure

### 1. Card Accordion — `<sg-card>`
Expandable card with title + body. Used for bug studies, pitfalls, FAQ items.
```html
<sg-card title="Bug: Connection Pool Race" icon="fa-solid fa-bug" open>
  <p>Content here...</p>
</sg-card>
```

### 2. Collapsible — `<sg-collapse>`
Click-to-expand section. Used for hints, solutions, optional details.
```html
<sg-collapse title="Pitfall: SELECT * on Wide Tables" icon="fa-solid fa-circle-exclamation">
  <p>Hidden content...</p>
</sg-collapse>
```

### 3. Tab Container — `<sg-tabs>` + `<sg-tab>`
Tabbed content panels. Used for code comparisons (Buggy/Fix), multi-language, Bad/Good.
```html
<sg-tabs>
  <sg-tab title="Buggy Code" icon="fa-solid fa-bug">code here</sg-tab>
  <sg-tab title="Fix" icon="fa-solid fa-check">fixed code</sg-tab>
</sg-tabs>
```

---

## Callouts & Alerts

### 4. Callout — `<sg-callout>`
Universal alert/info box. **11 types** cover all needs:
```html
<sg-callout type="danger" title="Breaking Change">text</sg-callout>
<sg-callout type="success" title="Performance Win">text</sg-callout>
<sg-callout type="info" title="Note">text</sg-callout>
<sg-callout type="warning" title="Memory Alert">text</sg-callout>
<sg-callout type="purple" title="Design Insight">text</sg-callout>
<sg-callout type="trap">text</sg-callout>         <!-- Common Trap -->
<sg-callout type="insight">text</sg-callout>       <!-- Key Insight -->
<sg-callout type="tip">text</sg-callout>           <!-- Interview Tip -->
<sg-callout type="takeaway">text</sg-callout>      <!-- Key Takeaway -->
<sg-callout type="rule" title="...">text</sg-callout>     <!-- Rule -->
<sg-callout type="concept" title="...">text</sg-callout>  <!-- Concept -->
```

---

## Code Display

### 7. Code Window — `<sg-code>`
macOS-style code block with syntax highlighting, line numbers, copy button.
```html
<sg-code file="UserService.cs">public class UserService { ... }</sg-code>
<sg-code file="~/terminal — bash" terminal>$ curl http://api.com</sg-code>
```

### 30. Code Walkthrough — annotated code
Hover a highlighted line to see explanation tooltip.
```html
<div class="code-walkthrough">
  <div class="cw-line" data-cw-tip="Cache check — O(1) Redis lookup">
    <span class="cw-num">3</span><code>var cached = await _cache.Get(key);</code>
  </div>
</div>
```

### 41. Multi-File — `<sg-multi>` + `<sg-file>`
Tabbed code files with macOS chrome. VS Code-style tab bar.
```html
<sg-multi>
  <sg-file name="Controller.cs">code here</sg-file>
  <sg-file name="Service.cs">code here</sg-file>
</sg-multi>
```

### 87. Refactoring Diff — `<sg-refactor>`
Side-by-side before/after code with red/green tints and stats.
```html
<sg-refactor title="Strategy Pattern" pattern="Apply Strategy">
  <sg-before>old code</sg-before>
  <sg-after>new code</sg-after>
</sg-refactor>
```

### 94. Code Evolution — `<sg-code-evo>`
Multi-version code progression with timeline, slide transitions, line count deltas.
```html
<sg-code-evo title="Payment Processing" steps='[
  {"label":"Naive","why":"Hard-coded","code":"if (type == ...) ..."},
  {"label":"Strategy","why":"Open/Closed","code":"strategy.Pay(amount);"}
]'></sg-code-evo>
```

---

## Comparison & Decision

### 109. Comparison Grid — `<sg-compare>`
Side-by-side comparison with colored headers. Also used for Pros/Cons.
```html
<sg-compare left-title="Strategy" right-title="State"
  left-items="Client chooses|Independent strategies"
  right-items="Internal state drives|States know each other">
</sg-compare>
```

### 110. When-to-Use Grid — `<sg-when-use>`
Yes/No decision grid with section labels.
```html
<sg-when-use
  yes="Multiple algorithms|Isolate business logic"
  no="Only one algorithm|Logic is trivial">
</sg-when-use>
```

---

## Data & Visualization

### 10. Table
Standard HTML table with `.table-wrapper`. No custom tag needed.
```html
<div class="table-wrapper"><table>...</table></div>
```

### 17. Sequence Diagram — `<sg-sequence>`
Interactive sequence diagram with lifelines and messages.
```html
<sg-sequence participants="Client,API,DB">
  <sg-msg from="0" to="1" label="GET /users/42" time="0ms"></sg-msg>
  <sg-msg from="1" to="2" label="SELECT..." time="2ms"></sg-msg>
  <sg-msg from="2" to="1" label="Row" time="4ms" resp></sg-msg>
</sg-sequence>
```

### 19. Latency Ruler — `<sg-latency>`
Logarithmic latency comparison chart.
```html
<sg-latency entries='[
  {"label":"L1 Cache","ns":1,"note":"CPU register speed"},
  {"label":"RAM","ns":100,"note":"Main memory"},
  {"label":"SSD","ns":150000,"note":"NVMe flash"}
]'></sg-latency>
```

### 32. Estimation Calc — `<sg-estimate>`
Back-of-envelope calculation dashboard with count-up animation.
```html
<sg-estimate title="QPS Estimation" tag="URL Shortener">
  <sg-input label="DAU" value="10M" note="Daily active users"></sg-input>
  <sg-op>×</sg-op>
  <sg-input label="Req/Day" value="20" note="Per user"></sg-input>
  <sg-eq label="Daily Requests" value="200M"></sg-eq>
  <sg-result label="QPS" value="~2,315" formula="200M ÷ 86,400"></sg-result>
</sg-estimate>
```

### 39. Dependency Graph — `<sg-dep-graph>`
Interactive draggable service architecture graph with SVG connectors.
```html
<sg-dep-graph graph='{
  "title":"Architecture",
  "layers":[[{"name":"API Gateway","icon":"fa-shield-halved","status":"done"}]],
  "edges":[[0,0,1,0]]
}'></sg-dep-graph>
```

---

## Interactive & Learning

### 5. Think-First Box — `<sg-think>`
Pause-and-think question before revealing answer.
```html
<sg-think hint="Consider the 95th-percentile latency">
  What happens if every request hits the database directly?
</sg-think>
```

### 20. Flow Stepper — `<sg-flow>` + `<sg-flow-step>`
Step-by-step walkthrough with timeline and navigation.
```html
<sg-flow>
  <sg-flow-step title="Client sends request"><p>Browser sends HTTP GET...</p></sg-flow-step>
  <sg-flow-step title="Load balancer routes"><p>ALB picks server #3...</p></sg-flow-step>
</sg-flow>
```

### 29. Knowledge Check — `<sg-quiz>`
Multiple-choice question with explanation.
```html
<sg-quiz question="What happens when load factor exceeds 0.75?"
  options='[{"text":"Drops entries"},{"text":"Resizes and rehashes","correct":true}]'
  explanation="Table doubles and rehashes every key.">
</sg-quiz>
```

### 72. Glossary Panel — `<sg-glossary>`
Searchable term list that auto-links terms in page text as tooltips.
```html
<sg-glossary terms='[
  {"term":"QPS","def":"Queries Per Second"},
  {"term":"CAP Theorem","def":"Consistency, Availability, Partition tolerance — pick 2"}
]'></sg-glossary>
```

---

## Reference & Navigation

### 8. Exercise Card — `<sg-exercise>`
Practice problem with difficulty badge and hint.
```html
<sg-exercise title="Design a URL Shortener" difficulty="medium">
  <p>Given 100M URLs/day, design a system that generates short URLs...</p>
  <sg-hint><p>Base62 encoding gives 3.5 trillion unique keys.</p></sg-hint>
</sg-exercise>
```

### 9. Cheat Cards — `<sg-cheat>`
Small reference cards in a grid.
```html
<div class="grid-3">
  <sg-cheat color="blue" title="CAP Theorem">Choose CP or AP during partition.</sg-cheat>
  <sg-cheat color="green" title="ACID">All-or-nothing transactions.</sg-cheat>
</div>
```

### 111. Related Card Grid — `<sg-related>`
Links to related topics with icons.
```html
<sg-related items='[
  {"icon":"fa-solid fa-shuffle","title":"Strategy","desc":"Swap algorithms","href":"strategy.html"}
]'></sg-related>
```

### 11-12. Tooltips
Inline term definitions.
```html
<span class="tooltip-trigger" data-tooltip="Queries Per Second">QPS</span>
```

---

## System Design Specific

### 23. API Viewer
REST API request/response viewer with JSON highlighting.

### 24. Log Viewer — `<sg-logs>`
Colorized log entries (INFO/DEBUG/WARN/ERROR/FATAL).

### 25. Error Block — `<sg-error>`
Database/system error display.

### 28. Interview Chat
Mock interview conversation with scores.

### 31. Scorecard — `<sg-scorecard>`
Interview performance gauges with criteria breakdown.

### 42. Config Diff — `<sg-config>`
Inline config parameter changes with "why" annotations.

### 43. Pipeline — `<sg-pipeline>`
CI/CD stage visualization with status and durations.

---

**Total: ~30 core components covering all content needs.**
