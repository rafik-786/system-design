# SVG Rules — System Guide Pipeline

> These rules govern ONLY SVG creation. Nothing about content or components.
> **CRITICAL: Read `pipeline/svg-cookbook.html` FIRST** — it has copy-paste SVG patterns with correct geometry. Copy a pattern and modify it. NEVER draw SVGs from scratch.

## Dimensions
1. **viewBox max width: 760px** — sidebar pages have limited width
2. **Typical viewBox**: `0 0 760 400` (adjust height as needed)
3. **Font sizes**: labels 13-15px, titles 16-18px, annotations 11-12px

## ID Scoping (CRITICAL)
4. **Every SVG ID must be scoped with a unique prefix** — e.g., `s5-`, `q3-`, `b2-`
5. **Prefix format**: section abbreviation + number: `s5-flow`, `q3-tree`, `b2-arr`
6. **This includes marker IDs**: `<marker id="q15-arr">` not `<marker id="arrow">`
7. **WHY**: Multiple SVGs on one page — duplicate IDs break references silently

## Shapes
8. **Diamonds: use `<polygon>`** — NEVER `<rect transform="rotate(45)">`
9. **Correct diamond**: `<polygon points="0,-42 90,0 0,42 -90,0"/>` (centered at 0,0 inside a `<g transform="translate(cx,cy)">`)
10. **Rounded rectangles**: `rx="8"` for cards, `rx="4"` for small boxes

## Arrow Lines (CRITICAL — agents always get this wrong)
11. **Lines must connect to shape EDGES, not centers** — if a diamond is at x=360 with radius 90, left tip is x=270, right tip is x=450. Lines must start/end at these edge coordinates, NOT at x=360.
12. **Stroke width: minimum 2px** — 1.5px is too thin on dark backgrounds
13. **Arrow markers: minimum markerWidth=10, markerHeight=8** — smaller markers are invisible
14. **Calculate connection points from shape geometry**: diamond tip = center ± radius, rect edge = x + width or y + height

## Colors (use CSS variables where possible)
11. **Dark theme compatible** — no pure white (#fff) backgrounds
12. **Text on dark**: `#e2e8f0` (primary), `#94a3b8` (secondary)
13. **Accent colors**: use the page's `data-accent` color for highlights
14. **Common fills**: `#1e293b` (box bg), `#334155` (border), `rgba(var(--accent-primary-rgb), 0.15)` (accent bg)
15. **Arrows/lines**: `#64748b` (muted), accent color for emphasis

## Layout
16. **Left-to-right flow** for processes/pipelines
17. **Top-to-bottom** for hierarchies/trees
18. **Group related elements** with `<g>` and translate
19. **Consistent spacing** — 20-40px between elements
20. **Always include arrow markers** for directional flows

## Accessibility
21. **Add `role="img"` and `aria-label`** to every `<svg>`
22. **Use `<title>` inside SVG** for screen readers

## Density Target
23. **Pattern pages: 20-25 SVGs minimum**
24. **Case studies: 30+ SVGs**
25. **Every section with a concept that can be visualized SHOULD have an SVG**
