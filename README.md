# System Guide

**[Live Site](https://rafik-786.github.io/system-design/)**

A comprehensive guide for mastering **Low-Level Design (LLD)** and **High-Level Design (HLD)** concepts — built with vanilla HTML, CSS & JS. No frameworks, no build tools.

## What's Inside

### Low-Level Design
- **23 GoF Design Patterns** — Creational, Structural, Behavioral (C# / .NET)
- **SOLID Principles** — with real-world violations and fixes
- **Case Studies** — Parking Lot, Elevator System, Tic-Tac-Toe
- **Advanced Topics** — DI Deep Dive, Reflection, Unit Testing Patterns

### High-Level Design *(Coming Soon)*
- Distributed Systems, Scalability, Caching, Message Queues, System Architecture

## Each Topic Page Includes
- TL;DR summary with one-line definition
- Real-world analogies and use cases
- Production-ready C# implementations
- UML class diagrams (Mermaid)
- Common pitfalls and anti-patterns
- Bug studies from real codebases
- Interview Q&As with "Think First" prompts and "Great Answer" bonuses
- Practice exercises ranked by difficulty

## Features
- **4 Dark Themes** — Navy, Purple, Emerald, Charcoal (persisted via localStorage)
- **Per-page accent colors** — each topic gets its own color identity
- **Right-edge dot navigation** — auto-generated from page sections
- **Click-to-activate code blocks** — page scrolls freely over code, click to scroll inside
- **Cmd+K search** *(planned)* — fuzzy search across all topics
- **Fully responsive** — desktop, tablet, mobile

## Project Structure

```
System Design/
├── index.html              # Master landing page
├── prototype.html          # Singleton pattern (prototype/reference page)
├── lld/
│   ├── index.html          # LLD hub — all topics listed
│   └── topics/
│       ├── design-patterns/
│       ├── principles/
│       ├── case-studies/
│       └── advanced/
├── hld/                    # (Coming Soon)
└── shared/
    ├── styles.css          # Design system — tokens, components, themes
    └── scripts.js          # Shared JS — nav, themes, accordions, scroll
```

## Tech Stack
- **HTML** — semantic, accessible markup
- **CSS** — custom properties, glass-morphism, responsive grid
- **JavaScript** — vanilla ES6, IntersectionObserver, no dependencies
- **Mermaid.js** — UML diagrams rendered client-side
- **Highlight.js** — syntax highlighting for C# code blocks
- **Font Awesome** — icons

## Getting Started

Just open `index.html` in a browser — no server or build step required.

```bash
# Or serve locally
npx serve .
```

## Author

**Rafikul Alam** — [GitHub](https://github.com/rafik-786)
