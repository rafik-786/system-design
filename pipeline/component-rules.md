# Component Rules — System Guide Pipeline

> Which sg-* component to use for each section type. ALWAYS use sg-* tags — NEVER raw HTML divs.

## Content Length Guidelines (PREVENTS VISUAL BUGS)
- **`<sg-when-use>`**: Items can be full sentences — component renders single-column, handles long text fine
- **`<sg-compare>`**: Keep items SHORT (5-10 words each) — renders 2-column side-by-side. For long comparisons, use a `<table>` or prose instead
- **`<sg-cheat>`**: Keep items to 1 short sentence each — renders in a grid. For long explanations, use `<sg-callout>` instead
- **`<sg-related>`**: Title max 4 words, desc max 15 words — cards are small
- **`<sg-quiz>`**: Options can be 1-2 sentences. Explanations can be longer.
- **General rule**: If your content is longer than a tweet, it probably doesn't belong in a grid/card component. Use full-width components (sg-callout, sg-collapse, sg-card) for paragraph-length content.

## Universal Rules
1. **ALWAYS `<sg-callout>`** — never `<div class="callout callout-info">`
2. **ALWAYS `<sg-card>`** — never `<div class="card"><h3 class="card-title">...<div class="card-body">`
3. **ALWAYS `<sg-collapse>`** — never `<div class="collapsible"><div class="collapsible-header">`
4. **ALWAYS `<sg-tabs>` + `<sg-tab>`** — never raw `tab-container`/`tab-header`/`tab-panel`
5. **ALWAYS `<sg-cheat>`** — never raw `<div class="cheat-card">`
6. **ALWAYS `<sg-exercise>`** — never raw `<div class="exercise-card">`
7. **ALWAYS `<sg-compare>`** — never raw `comparison-grid`
8. **ALWAYS `<sg-when-use>`** — never raw `when-use-grid`
9. **ALWAYS `<sg-related>`** — never raw `related-grid`
10. **ALWAYS `<sg-tldr>`** — never raw `<div class="tldr-card">`

## Section-by-Section Component Map (24-section pattern pages)

### S1 TL;DR
- `<sg-tldr>` for summary
- `<sg-callout type="concept">` for the one-liner definition

### S2 Prerequisites
- `<sg-callout type="info">` intro note
- `<ul>` with styled `<li>` items — each gets a colored left border + colored title
- Cycle colors: `var(--accent-blue)`, `var(--accent-purple)`, `var(--accent-green)`, `var(--accent-cyan)`, `var(--accent-yellow)`
- Format: `<li style="margin-bottom:1rem;border-left:3px solid var(--accent-blue);padding-left:1rem;"><p><strong style="color:var(--accent-blue)">Title</strong> — explanation</p></li>`

### S3 Real-World Analogies
- Primary analogy: `<sg-card open>` with mapping table + SVG
- Secondary analogies: full-width `<sg-callout type="info">` — **1 per row, NOT in grid-3** (content is too long for columns)
- `<sg-callout type="insight">` for the "aha moment"

### S4 Core Pattern & UML
- 1 large UML SVG
- Prose walkthrough of each participant
- `<sg-callout type="rule">` for GoF definition

### S5 Code Implementations
- `<sg-tabs>` for Classic | Modern | Minimal implementations
- Inside each tab: `<sg-multi>` + `<sg-file>` for multi-file code
- Prose walkthrough between/after code blocks
- 1 execution flow SVG

### S6 Jr vs Sr Implementation
- `<sg-tabs>` for Junior | Senior tabs
- `<sg-callout type="warning">` for common junior mistakes
- `<sg-compare>` for side-by-side bottom line table

### S7 Evolution in .NET
- `<sg-card>` accordion for each era (.NET 1.0, 2.0, 3.5, Core, 8+)
- Code examples inside each card
- Evolution summary table at end

### S8 Pattern in .NET Framework
- 1 overview SVG showing framework classes
- `<sg-card>` accordion for each framework example
- Code + prose inside each card

### S9 When To Use / When Not To
- `<sg-when-use yes="..." no="...">`
- 1 decision flowchart SVG
- `<sg-callout type="tip">` for decision heuristic

### S10 Comparisons
- `<sg-compare>` for each pattern comparison
- 1 visual comparison SVG
- Prose explaining WHEN to pick which

### S11 SOLID Mapping
- `<sg-card>` for each SOLID principle
- Brief explanation of how the pattern supports/violates each

### S12 Bug Case Studies
- `<sg-card open>` for first bug (starts expanded)
- `<sg-card>` for subsequent bugs
- Inside each card:
  - `<sg-callout type="danger">` for incident description
  - "What Went Wrong" paragraph
  - 1 SVG diagram per bug
  - `<sg-tabs>` with "Buggy Code" | "Fix" tabs
  - `<sg-callout type="info">` for lesson
  - `<sg-callout type="warning">` for "How to Spot"

### S13 Pitfalls & Anti-Patterns
- `<sg-collapse>` for each pitfall (NOT sg-card)
- Inside each:
  - Mistake / Why Bad / Fix text
  - 1 SVG per pitfall
  - `<sg-tabs>` for Bad | Good code

### S14 Testing Strategies
- 1 overview SVG
- `<sg-tabs>` for different test types
- `<sg-code>` or `<sg-multi>` for test examples

### S15 Performance
- `<sg-callout type="warning">` for performance gotchas
- Benchmark data in tables
- `<sg-math-steps>` for complexity analysis

### S16 How to Explain in Interview
- `<sg-monologue>` for thought process
- `<sg-callout type="tip">` for key phrases
- Structured pitch format

### S17 Interview Q&As (MINIMUM 30 QUESTIONS — QUALITY OVER QUANTITY)
- **30 Q&As minimum per page** — but NEVER pad with filler. Every question must be one that:
  - Interviewers actually ask, OR
  - Covers a common mistake/misconception developers make, OR
  - Tests deep understanding (not just definition regurgitation)
- **Do NOT add generic questions** like "What is X?" repeated 5 ways. Each Q must teach something different.
- Grouped by difficulty: ~10 Easy, ~10 Medium, ~10 Hard
- `qa-item` div structure (NOT sg-card) — see template for exact HTML
- SVGs in key answers (Q1, comparison Qs, architecture Qs) — 8-10 SVGs in this section
- `<sg-tabs>` for any code comparisons within answers
- Each question MUST have: Think First prompt, rich prose answer, badge color (green/yellow/red)
- **Focus on**: real interview questions, common bugs/mistakes, "gotcha" scenarios, design trade-offs, code smells
- This is the LONGEST section on the page — budget 800-1200 lines for S17 alone

### S18 Practice Exercises
- `<sg-exercise>` with `<sg-hint>` for each exercise
- Difficulty badges (Easy/Medium/Hard)

### S19 Cheat Sheet
- `<sg-cheat>` cards in a `<div class="grid-2">` or `<div class="grid-3">`

### S20 Deep Dive (topic-specific)
- Varies by topic — use appropriate components

### S21 Real-World Mini-Project
- 1 evolution SVG
- Step-by-step build instructions
- `<sg-tabs>` for code files

### S22 Migration Guide
- `<sg-card>` for each migration step
- `<sg-callout type="warning">` for risk assessment
- `<sg-tabs>` for before/after code

### S23 Code Review Checklist
- Table or `<sg-cheat>` cards for checklist items

### S24 Related Topics
- `<sg-related items='[...]'>` — JSON array of related topics

## Code Display Priority
- Single file: `<sg-code file="Name.cs">`
- Multiple files: `<sg-multi>` + `<sg-file>`
- Before/After: `<sg-refactor>` with `<sg-before>` + `<sg-after>`
- Bad/Good comparison: `<sg-tabs>` with "Bad" | "Good" tabs
- Config changes: `<sg-config>`
- Evolution: `<sg-code-evo>`
