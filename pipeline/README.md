# Page Build Pipeline — System Guide

## Per-Page Execution

### Phase 1: BUILD FRESH (3-4 agents, SEQUENTIAL, **model: opus**)
- Input: golden template (their section batch) + content-rules.md + component-rules.md + svg-cookbook.html
- **DO NOT read old pages** — write from scratch using pattern knowledge
- Output: complete HTML with gold-standard prose, code, sg-* components, inline SVGs
- Agent A: Head + Hero + S1-S6
- Agent B: S7-S12
- Agent C: S13-S18
- Agent D: S19-S24 + footer
- Each agent gets ~550 lines of input (template section + rules) — NOT 5000+ lines of old HTML
- SVGs created inline using cookbook patterns (no separate SVG phase needed)

### Phase 4: LINT (Bash, zero tokens)
```bash
bash validate.sh path/to/page.html
```
Catches: wrong class names, missing footer, duplicate IDs, SVG count

### Phase 5: VISUAL QA (preview server, **model: sonnet**)
**Lint can't catch visual bugs.** This phase catches:
- Cramped layouts (content too long for grid components)
- Overflow/wrapping issues
- Broken SVG rendering
- Missing tooltips
- Spacing problems

Steps:
1. Start dev server (`preview_start`)
2. Navigate to the page
3. Screenshot each major section (S1, S5, S9, S12, S13, S17, S19)
4. Check for layout issues
5. Fix any visual bugs found

### Phase 6: FIX (1 agent, only if Phase 4 or 5 found issues, **model: sonnet**)
- Input: lint report + screenshot issues + targeted line ranges
- Surgical fixes only

### Model Usage Summary

**Default: Use Opus for everything until we have data.**

| Phase | Model | Notes |
|-------|-------|-------|
| Blueprint | **Opus** | Can test Sonnet after 3-4 successful pages |
| Build | **Opus** | Can test Sonnet on rebuilds after validating quality |
| SVG | **Opus** | Always Opus — geometry precision is critical |
| Lint | Bash | No model |
| Visual QA | **Opus** | Can test Sonnet later |
| Fix | **Opus** | Always Opus — needs deep understanding |

**Model optimization plan:** After 3-4 clean page rebuilds, test Sonnet on one build batch. Compare output quality. Only switch if zero regressions. Measure first, optimize second.

## Files in this directory

| File | Purpose |
|------|---------|
| `content-rules.md` | Writing philosophy for content agents (20 rules) |
| `svg-rules.md` | SVG-only rules for SVG agents (25 rules) |
| `component-rules.md` | Section-by-section sg-* component map + content length guidelines |
| `template-pattern-page.html` | Golden template for 24-section pattern pages |
| `template-case-study.html` | (TODO) Golden template for 18-part case study pages |

## What each phase catches

| Issue Type | Phase 4 (Lint) | Phase 5 (Visual QA) |
|------------|----------------|---------------------|
| Wrong class names | YES | — |
| Missing card-body | YES | — |
| SVG ID conflicts | YES | — |
| Cramped layouts | — | YES |
| Overflow/wrapping | — | YES |
| Broken SVG rendering | — | YES |
| Missing tooltips | — | YES |
| Wrong component for content | — | YES |
| Content quality | — | Manual review |
