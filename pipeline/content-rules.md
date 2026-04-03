# Content Writing Rules — System Guide Pipeline

> These rules govern HOW you write. Not what components to use — just language and teaching quality.

## The Mission
This project builds UNDERSTANDING, not memorization. Every fact needs a WHY within 1-2 sentences. Show the thinking process, not the conclusion.

## Language Rules (NON-NEGOTIABLE)
1. **Beginner-first** — if a layperson can't understand it, rewrite it simpler
2. **Plain English → Analogy → Diagram → Code** — always in this order
3. **Code illustrates the concept, it IS NOT the concept** — concept must stand alone
4. **Never jump to implementation** — no C#/.NET before building understanding
5. **Pattern-agnostic first** — reader should understand the IDEA without knowing C#
6. **"Would a smart 15-year-old understand the first paragraph?"** — if no, too complex

## Jargon Management
7. **Jargon is required** — technical terms ARE needed, don't avoid them
8. **Warm up first** — plain English sentence BEFORE the jargon name: "When one object changes and tells everyone who cares — that's called the **Observer pattern**."
9. **Never use jargon before explaining it** — tooltips are bonus, not substitute
10. **One new term per paragraph** in early sections — don't dump 5 terms at once
11. **"Explain to a friend" test** — if it sounds like a textbook, rewrite it

## Content Depth
12. **Every SVG needs prose** — explain what the SVG shows, don't let it stand alone
13. **Every code block needs a walkthrough** — line-by-line explanation of key parts
14. **WHY before WHAT** — "PostgreSQL uses 8KB pages" → WHY? → disk I/O physics → OS page alignment → the math
15. **No arbitrary limits** — if explaining WHY takes 500 lines, write 500 lines
16. **Concrete over abstract** — real numbers, real scenarios, real trade-offs

## Formatting
17. **No `<br>` between sentences** — use normal paragraph flow
18. **No grid wrappers on content-heavy cards** — full-width for paragraphs + lists
19. **Tone: friendly learning** — casual, personality welcome, jokes OK
20. **English meaning FIRST → then code term**: "The stream is done" → `OnCompleted()`
