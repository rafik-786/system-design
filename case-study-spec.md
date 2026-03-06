# Case Study Framework — The Complete Reusable Blueprint

> **What this is:** The master framework for building ALL case study pages on System Guide. Every case study follows this structure. The Parking Lot was the first implementation — this document extracts the reusable patterns so every future case study (Elevator, Vending Machine, Chess, Uber, etc.) achieves the same depth.
>
> **Where this will live:** `case-study-spec.md` in project root (alongside `page-spec.md`)

---

## Part 1: The Philosophy

### Why This Approach Exists

Most LLD resources teach like this: "Here's a parking lot design. Here are the classes. Memorize it." The reader finishes, feels smart for 10 minutes, and forgets everything by next week.

Our approach teaches THINKING, not solutions. The case study is just the canvas — the real product is a set of reusable cognitive skills that work for ANY system.

### The 7 Teaching Principles

| # | Principle | What It Means | How It Manifests |
|---|-----------|---------------|------------------|
| 1 | **Questions before answers** | Every concept starts with a challenge | "🧠 Think First" boxes before every reveal |
| 2 | **Real world before code** | Observe the physical system first | Section 2: "See the Real World" walkthrough |
| 3 | **Build wrong, feel the pain, discover the fix** | Wrong answers taught WITH consequences | Constraint Game: each level breaks the previous |
| 4 | **Progressive complexity** | One concept at a time | 7 levels, each adding ONE constraint |
| 5 | **Multiple paths explored** | Dead ends are as valuable as correct paths | "What Would You Do?" forks with ALL tabs |
| 6 | **Make learning visible** | The reader knows what changed in their brain | "Before/After Your Brain" at every level |
| 7 | **Transferable skills** | Every technique works beyond this case study | Explicit transfer examples to other systems |

### The Reader's Emotional Arc

Every case study should create this emotional journey:

```
"This seems simple" (Level 0)
→ "Oh, it's getting more complex" (Levels 1-2)
→ "Wait, my code broke!" (Level 3 — concurrency)
→ "There's so much that can go wrong" (Level 5 — edge cases)
→ "Now I see how it all connects" (Levels 6-7)
→ "I could design ANYTHING with these techniques" (Transfer section)
→ "I'll never forget this" (Memory anchors)
```

---

## Part 2: The 24-Section Template

Every case study has exactly 24 sections organized into 6 phases:

### Phase Overview

| Phase | Sections | Purpose | Emotional State |
|-------|----------|---------|-----------------|
| **Prologue** | 1-2 | Hook + ground in reality | Curious, oriented |
| **The Constraint Game** | 3-10 | Build the system level by level | Learning, struggling, discovering |
| **The Complete Picture** | 11-13 | See everything assembled | Satisfaction, clarity |
| **Learn From Failure** | 14-15 | Study anti-patterns + find bugs | Critical thinking activated |
| **Master the Interview** | 16-19 | Communication + articulation | Confidence building |
| **Never Forget** | 20-24 | Memory anchors + transfer + practice | Permanence, readiness |

### Section-by-Section Template

---

#### PROLOGUE

**Section 1: The Hook (id="tldr")** — `fa-bolt` blue
- "What If You Never Had to Memorize a Design Again?" opener
- The Pact: "Stop and think at each challenge = 80% retention. Just scroll = 20%."
- The Constraint Game visual: 7 levels with icons and difficulty colors
- Growing Diagram preview (7 mini-stages)
- Quick stats: levels, diagrams, challenges, tooltips

**Adaptation notes:**
- Levels always go 🟢🟢🟡🟡🟡🔴🔴 (easy → medium → hard)
- Stats vary per case study but always include: levels, Think First challenges, SVG diagrams, interview questions
- The "pact" text is IDENTICAL across all case studies (consistency builds trust)

---

**Section 2: Before You Code — See the Real World (id="real-world")** — `fa-eye` orange
- "🧠 Think First #1": Walk through the system in your mind. List every noun and action.
- Physical walkthrough: 4-5 stages of the real-world experience
- Each stage has: what you SEE / what you INTERACT with / 🧠 what's happening behind the scenes
- Summary: entities, operations, state changes, variable algorithms, concurrency risks discovered WITHOUT code
- "🧠 Skill Unlocked" card: Real-World Walkthrough technique

**Adaptation guide:**
| Case Study | Walkthrough Stages |
|---|---|
| Parking Lot | Approach → Find spot → Park → Exit → Pay |
| Elevator | Press button → Wait → Board → Ride → Exit |
| Vending Machine | Insert coin → Browse → Select → Dispense → Change |
| Chess | Setup board → Choose piece → Validate move → Capture → Check |
| Uber | Request ride → Match driver → Track → Ride → Pay → Rate |
| Chat App | Open app → Select conversation → Type → Send → Receive → Notify |

**Rules:**
- 4-5 stages maximum (more gets tedious)
- Each stage must reveal at least one entity, operation, or design concern
- The final summary should naturally contain 80%+ of the system's entities
- End with: "The real world is your first diagram. Senior engineers start here."

---

#### THE CONSTRAINT GAME (Sections 3-10)

This is the heart of every case study. 7-8 levels, each following a strict rhythm.

---

### The Constraint Game: Level Design Guide

#### How to Design Levels for Any System

**Step 1: Identify the "stupidest possible version"** — What's the absolute minimum that technically works?
- Parking lot: park a car, return a fee
- Elevator: go to a floor
- Chess: move a piece
- Uber: connect rider to driver

**Step 2: List all the constraints** — Everything the real system needs:
- Multiple types/variants
- Different algorithms/strategies for the same operation
- Concurrent access
- State tracking and data flow
- Failure handling and edge cases
- Testability and architecture
- Scalability

**Step 3: Order constraints by dependency** — Each level should:
- Add exactly ONE constraint
- Break the previous level's code in a CLEAR way
- Introduce exactly ONE concept/pattern
- Be solvable in a "🧠 Think First" challenge (not too easy, not too hard)

**Step 4: Map concepts to levels:**

| Level | Constraint Type | Concept Introduced | Difficulty |
|-------|----------------|-------------------|-----------|
| 0 | "Just do the basic thing" | Simplest possible code | 🟢 |
| 1 | "Different types/variants" | Entities, enums, data modeling | 🟢 |
| 2 | "Multiple algorithms" | Strategy pattern (or primary behavioral pattern) | 🟡 |
| 3 | "Concurrent/simultaneous access" | Thread safety, locks, atomicity | 🟡 |
| 4 | "Track state and data flow" | Records, tickets/events, sequence diagrams | 🟡 |
| 5 | "Everything that can go wrong" | Edge cases via What If? framework | 🔴 |
| 6 | "Make it testable/maintainable" | DI, interfaces, testing | 🔴 |
| 7 | "Make it scale" | Bridge to HLD | 🔴 |

**Note:** Levels 0-4 vary by case study. Levels 5-7 are nearly identical across ALL case studies (edge cases, testability, scaling are universal concerns).

#### Level Design Examples for Different Case Studies

**Parking Lot:**
| Level | Constraint | Concept |
|---|---|---|
| 0 | Park a car | Simplest code |
| 1 | Different vehicle sizes | Enums, records, SpotSizeMapping |
| 2 | Multiple pricing types | Strategy pattern |
| 3 | Multiple entry gates | Concurrency (lock + ConcurrentDictionary) |
| 4 | Tickets, timestamps, fees | Data flow, records, sequence diagrams |
| 5 | Lot full, payment fail, lost ticket | What If? framework |
| 6 | DI singleton vs static, testing | Testability, DI |
| 7 | Multi-lot chain, real-time display | Scaling, events, HLD bridge |

**Elevator System:**
| Level | Constraint | Concept |
|---|---|---|
| 0 | Go to a floor | Simplest code |
| 1 | Multiple floors, up/down direction | State, Direction enum |
| 2 | Multiple scheduling algorithms | Strategy (FCFS, SCAN, LOOK) |
| 3 | Multiple elevators serving same building | Concurrency, Mediator |
| 4 | Request queue, pickup/dropoff tracking | Command pattern, data flow |
| 5 | Overweight, stuck doors, power failure | What If? framework |
| 6 | Testable scheduling, mock elevators | DI, testing |
| 7 | Multiple buildings, peak-hour optimization | Scaling, analytics |

**Vending Machine:**
| Level | Constraint | Concept |
|---|---|---|
| 0 | Insert coin, get item | Simplest code |
| 1 | Multiple products, different prices | Inventory, Product entity |
| 2 | Machine states (idle/has-money/dispensing) | State pattern |
| 3 | Multiple payment methods (coin/card/mobile) | Strategy pattern |
| 4 | Transaction tracking, change calculation | Data flow, receipts |
| 5 | Out of stock, insufficient payment, stuck item | What If? framework |
| 6 | Testable states and payments | DI, testing |
| 7 | Chain of vending machines, remote monitoring | Scaling, IoT bridge |

**Chess Game:**
| Level | Constraint | Concept |
|---|---|---|
| 0 | Move a piece on a board | Simplest code |
| 1 | Different pieces with different movement rules | Strategy per piece type |
| 2 | Move validation (can't move through pieces, etc.) | Validation chain |
| 3 | Check, checkmate, stalemate detection | State pattern (game states) |
| 4 | Move history, undo/redo | Command + Memento patterns |
| 5 | En passant, castling, pawn promotion, draw rules | Edge cases |
| 6 | Testable game logic, mock board states | DI, testing |
| 7 | Online multiplayer, matchmaking, ELO rating | Scaling, real-time |

**Online Shopping (Amazon):**
| Level | Constraint | Concept |
|---|---|---|
| 0 | Browse items, add to cart | Simplest code |
| 1 | Different product types, categories | Entity hierarchy, Composite |
| 2 | Multiple payment methods | Strategy pattern |
| 3 | Multiple users shopping simultaneously | Concurrency, inventory race conditions |
| 4 | Orders, tracking, receipts | Data flow, State pattern (order lifecycle) |
| 5 | Out of stock after adding to cart, payment failure | What If? framework |
| 6 | Testable order pipeline | DI, testing |
| 7 | Warehouse distribution, recommendation engine | Scaling, microservices |

---

#### The Level Rhythm (10 Steps Per Level)

Every level in every case study follows this EXACT rhythm:

```
1. THE CONSTRAINT       — One sentence. Clear. Specific.
2. "WHAT BREAKS?"       — Red callout showing how current code fails.
3. "🧠 THINK FIRST"     — Challenge: solve it yourself. 60 seconds.
4. INTERNAL MONOLOGUE   — The messy, real thinking process with doubts.
5. "WHAT WOULD YOU DO?" — 2-3 options as tabs. ALL paths explored. Dead ends shown.
6. THE SOLUTION         — Code evolution as DIFF from previous level.
7. GROWING DIAGRAM      — The system diagram gains new elements.
8. "BEFORE/AFTER"       — One sentence each. Makes learning visible.
9. "SMELL → PATTERN"    — Reusable instinct (if applicable to this level).
10. TRANSFER            — Same technique on a different system (if applicable).
```

**Step details:**

**1. THE CONSTRAINT**
- One sentence maximum
- Phrased as a real-world requirement, not a technical task
- Examples:
  - ✅ "Motorcycles, cars, vans, and trucks need different sized spots."
  - ❌ "Add an enum for vehicle types and implement size matching."
- The constraint is what the BUSINESS says, not what the DEVELOPER does

**2. "WHAT BREAKS?"**
- Red callout with a `fa-circle-xmark` icon
- Show the SPECIFIC line or method from the previous level that can't handle the constraint
- Make the reader FEEL the limitation before offering the fix
- Example: "Our Level 1 has `return 5.00m`. Three pricing types? That's three if/else branches stuffed into one method."

**3. "🧠 THINK FIRST"**
- Always numbered sequentially across the whole page (#1, #2, ... #15)
- Phrased as a question or design challenge
- Should be solvable in 60 seconds of focused thinking
- Include "60 seconds" time suggestion
- Use collapsible reveal (the answer is NOT visible by default)
- The challenge should be SPECIFIC enough that the reader can actually attempt it, not vague like "think about how to improve this"

**Think First Quality Rubric:**
| Quality | Example |
|---|---|
| ❌ Too vague | "How would you improve the pricing?" |
| ❌ Too easy | "Should we use an interface?" |
| ✅ Just right | "Design it so adding a NEW pricing type requires ZERO changes to existing code. How?" |
| ❌ Too hard | "Implement a lock-free concurrent spot assignment algorithm." |

**4. INTERNAL MONOLOGUE**
- Styled as a blockquote or chat bubble
- Shows REAL thinking: hesitations, wrong turns, corrections
- Must include at least ONE moment of doubt ("I could use a switch... but...")
- Must include the AHA moment ("Wait — that's Strategy! I didn't try to use it, I just asked 'what varies?'")
- Must feel AUTHENTIC, not scripted
- Use "..." for pauses, "Wait —" for corrections, "Actually," for revisions

**Internal Monologue Quality Rubric:**
| Quality | Example |
|---|---|
| ❌ Too clean | "I'll use Strategy because pricing varies." |
| ❌ Too messy | Rambling for 500 words with no resolution |
| ✅ Just right | "Switch works for 2 types. But the 4th type? I'd modify this method every time. That feels fragile... Wait, this is OCP. I need each type to be its OWN thing. An interface?" |

**5. "WHAT WOULD YOU DO?" FORKS**
- 2-3 options presented as TABS (using existing tab component)
- EVERY tab is fully developed — not just the "right" answer
- Dead-end tabs show WHERE the approach fails and WHY
- The "winning" tab explains why it wins FOR THIS PROBLEM (not universally)
- Always include: "When IS [the losing approach] actually better?" — shows judgment, not dogma

**Fork Rules:**
- At least 2 tabs, maximum 3
- Each tab has: code example + consequence + when it's appropriate
- The winning tab is the LAST tab (reader should explore wrong paths first)
- Wrong paths must be PLAUSIBLE (not straw men)
- Every fork must end with a "decision compass" — a one-line rule for choosing

**Decision Compass Examples:**
- "Does it have behavior? → class hierarchy. Pure data? → enum + record."
- "Will the algorithm change independently? → Strategy. Truly fixed? → inline method."
- "Need it testable? → DI singleton. Script/console app? → static is fine."

**6. THE SOLUTION (Code Evolution)**
- Show as a DIFF from the previous level, not a complete rewrite
- Highlight: GREEN = new additions, YELLOW = changes to existing code
- Every added line has a comment explaining which constraint demanded it
- After the diff: show the complete current state of the relevant file/class
- Use the `.macos-window` component with appropriate filename

**7. GROWING DIAGRAM**
- The same SVG diagram from Section 1, but grown by this level's additions
- New elements are highlighted/colored differently
- Previous elements are slightly dimmed
- The diagram should be recognizable as the SAME diagram at every stage
- By Level 7, it's the complete class diagram

**Growing Diagram Design Rules:**
- Use consistent positioning — entities that appear in Level 1 stay in the same position in Level 7
- New elements appear in a logical position relative to existing ones
- Use color to show what's new:
  - Existing elements: `var(--text-secondary)` (muted)
  - New elements: `var(--accent-primary)` (bright)
  - Connections: solid for existing, dashed+colored for new
- Each stage should be understandable WITHOUT reading the previous stages

**8. "BEFORE/AFTER YOUR BRAIN"**
- Exactly 2 lines: "Before this level, you would..." / "After this level, you now..."
- Must be SPECIFIC, not generic
- Must describe a THINKING change, not a knowledge fact

**Before/After Quality Rubric:**
| Quality | Example |
|---|---|
| ❌ Too generic | "Before: didn't know Strategy. After: know Strategy." |
| ❌ Knowledge, not thinking | "Before: didn't know IPricingStrategy. After: know IPricingStrategy." |
| ✅ Thinking change | "Before: you see 'multiple pricing types' and think 'switch statement.' After: you smell 'multiple algorithms, same interface' and instinctively reach for Strategy." |

**9. "SMELL → PATTERN" (where applicable)**
- Not every level has a smell. Only levels introducing a new pattern/concept.
- Format: 👃 **"The [Name] smell"** — "When you [observe X] → [pattern/technique Y]"
- Must be phrased as a SENSORY experience, not a rule
- The smell should be REUSABLE across many case studies

**Smell → Pattern Catalog (grow this over time):**
| Smell | Signal | Response |
|---|---|---|
| "Categories Without Behavior" | Types that differ in identity but not in actions | Enum, not class hierarchy |
| "Multiple Algorithms, Same Interface" | 3+ ways to do the same thing, choice at runtime | Strategy pattern |
| "Simultaneous Access to Shared Resource" | Multiple actors modifying same data | Lock/atomicity around composite operations |
| "Fixed After Creation" | Data that should never change after it's born | Record (immutable type) |
| "Happy Path Only" | Code handles success but not failure | Apply What If? framework |
| "Need One Instance But Testable" | Global state that must be mockable | DI Singleton, not static Singleton |
| "Wrap and Extend" | Add behavior without modifying the original | Decorator pattern |
| "Step-by-Step Process" | Operations must happen in a specific sequence | Template Method |
| "Mode-Dependent Behavior" | Object acts differently based on its current state | State pattern |
| "Notify When Something Happens" | Other parts need to react to events | Observer pattern |
| "Undo/Redo Needed" | User needs to reverse actions | Command + Memento |
| "Tree of Same-Type Things" | Leaf and composite treated the same | Composite pattern |
| "Translate Between Incompatible Interfaces" | External system speaks a different language | Adapter pattern |
| "Pipeline of Handlers" | Request passes through multiple processors | Chain of Responsibility |
| "Centralized Communication" | Everyone talks through a hub, not to each other | Mediator pattern |

**10. TRANSFER (where applicable)**
- Not every level has a transfer. Use for levels with reusable techniques.
- Format: "Technique X works for [different system]: [brief example]"
- Must be SPECIFIC (actual entities/patterns), not generic ("this works for other systems too")
- Prefer systems the reader might study NEXT (from the case study list)

---

#### Standard Level Sections (Sections 3-10)

**Section 3: Level 0 — "[Just do the basic thing]" (id="level-0")** — `fa-[icon]` green
**Section 4: Level 1 — "[Different types/variants]" (id="level-1")** — `fa-[icon]` yellow
**Section 5: Level 2 — "[Multiple algorithms]" (id="level-2")** — `fa-[icon]` purple
**Section 6: Level 3 — "[Concurrent access]" (id="level-3")** — `fa-[icon]` red
**Section 7: Level 4 — "[Track state/data]" (id="level-4")** — `fa-[icon]` cyan
**Section 8: Level 5 — "[Handle failures]" (id="level-5")** — `fa-[icon]` red
**Section 9: Level 6 — "[Make it testable]" (id="level-6")** — `fa-[icon]` green
**Section 10: Level 7 — "[Make it scale]" (id="level-7")** — `fa-[icon]` cyan

**Icon selection:** Each level gets a unique icon relevant to its constraint. Examples:
- Parking Level 0: `fa-square-parking`, Level 3: `fa-door-open` (gates)
- Elevator Level 0: `fa-elevator`, Level 2: `fa-route` (scheduling)
- Chess Level 0: `fa-chess`, Level 3: `fa-shield` (check/checkmate)

---

#### THE COMPLETE PICTURE (Sections 11-13)

**Section 11: The Full Code (id="full-code")** — `fa-code` green
- Complete production-grade code in 4-5 tabs
- Every code section annotated with "// Level N" comments showing which constraint introduced it
- Tab structure depends on the system but generally:
  - Tab 1: Models/Entities
  - Tab 2: Primary pattern implementations (e.g., Strategy)
  - Tab 3: Secondary patterns/helpers
  - Tab 4: Main service/controller
  - Tab 5: DI wiring (Program.cs)

**Section 12: Pattern Spotting — X-Ray Vision (id="patterns")** — `fa-eye` purple
- SVG "X-Ray View": class diagram with colored overlays showing pattern boundaries
- 3-4 pattern cards: Where / What it enables / What happens without it
- "Hidden Patterns" callout: patterns that emerged naturally (Decorator, Specification, etc.)
- "🧠 Think First": "Find 2 more patterns hiding in the code"

**Section 13: The Growing Diagram — Complete Evolution (id="evolution")** — `fa-diagram-project` blue
- The signature visual: 7 mini-diagrams OR one interactive diagram showing all stages
- Entity summary table with: Type, Kind, Level Introduced, Why This Kind
- This is the VISUAL SUMMARY of the entire Constraint Game

---

#### LEARN FROM FAILURE (Sections 14-15)

**Section 14: Three Bad Solutions (id="bad-solutions")** — `fa-skull-crossbones` red

Every case study has THREE anti-solutions. They follow a fixed template:

**Bad Solution 1: "The God Class"**
- WHAT: Everything in one class. No separation of concerns.
- CODE: ~80 lines showing one massive class with all logic inline
- CONSEQUENCE: Show what happens at 6 months (800 lines, nobody can find anything, changing one thing breaks another)
- THE MOMENT IT DIES: A specific scenario where it becomes unmaintainable
- LESSON: Maps to SRP

**Bad Solution 2: "The Over-Engineer"**
- WHAT: Every design pattern in the book. Abstraction layers upon layers.
- CODE: ~40 lines of class declarations showing absurd names (`AbstractVehicleParkingStrategyFactoryProviderMediator`)
- CONSEQUENCE: Simple changes take days because nobody can trace the code flow
- THE MOMENT IT DIES: A new developer asks "where does [simple thing] happen?" and the answer requires a 20-step sequence diagram
- LESSON: YAGNI. Patterns solve problems. No problem → no pattern.

**Bad Solution 3: "The Happy-Path Hero"**
- WHAT: Actually well-structured! Clean patterns, good naming. BUT: no error handling, no concurrency, no edge cases.
- CODE: ~60 lines of clean code that looks production-ready
- CONSEQUENCE: Works perfectly in dev. First week in production: data corruption, crashes, stuck gates/elevators/orders
- THE MOMENT IT DIES: 2 AM pager alert. System is in an unrecoverable state.
- LESSON: Clean code ≠ robust code. Edge cases aren't optional.

**"🧠 Think First":** "Which bad solution is most dangerous? Why?"
**Answer:** Always Bad Solution 3. It LOOKS professional. It passes code review. But it's a wolf in sheep's clothing. Solutions 1 and 2 are obviously bad — someone catches them. Solution 3 sails through.

**Adaptation guide — how to create bad solutions for any system:**
| System | God Class | Over-Engineer | Happy Path Hero |
|---|---|---|---|
| Parking Lot | `ParkingLot` with parking + pricing + display + ticketing | `AbstractPricingStrategyFactoryProvider` | Clean Strategy but no lock, no error handling |
| Elevator | `ElevatorSystem` with scheduling + movement + doors + display | `ElevatorRequestCommandHandlerChainMediator` | Clean scheduling but no overweight check, no stuck-door handling |
| Chess | `ChessGame` with rules + validation + display + history | `AbstractPieceMoveStrategyValidatorVisitorFactory` | Clean piece movement but no check/checkmate detection |
| Uber | `RideService` with matching + pricing + tracking + payments | `DriverMatchingStrategyFactoryMediatorObserver` | Clean matching but no concurrent ride requests, no payment failure |

---

**Section 15: Code Review Challenge (id="code-review")** — `fa-magnifying-glass-chart` red

Every case study has a "candidate's solution" with exactly 5 bugs to find.

**Standard Bug Categories (pick 5 for each system):**
1. **Thread safety bug** — Using non-concurrent data structure or missing lock
2. **Race condition** — Multi-step operation without atomicity
3. **Time/timezone bug** — DateTime.Now instead of DateTimeOffset.UtcNow
4. **OCP violation** — Switch/case or if/else chain for extensible behavior
5. **Testability problem** — Static singleton, hardcoded dependencies
6. **Missing validation** — No bounds checking, no null guards at system boundaries
7. **State corruption** — Mutable shared state without protection
8. **Resource leak** — Not disposing IDisposable, not releasing resources
9. **Wrong abstraction** — Deep inheritance where composition fits better
10. **Magic numbers** — Hardcoded values that should be configurable

**Bug Design Rules:**
- Bugs must be PLAUSIBLE (a real developer would write this)
- Bugs should be SPREAD across the code (not clustered in one method)
- At least one bug should be SUBTLE (thread safety or timezone — things juniors miss)
- At least one bug should be OBVIOUS (God class or missing error handling)
- Each bug must map to a SOLID principle or design concept

**Scoring (identical across all case studies):**
- All 5: Senior-level thinking
- 3-4: Solid mid-level
- 1-2: Review the relevant levels

---

#### MASTER THE INTERVIEW (Sections 16-19)

**Section 16: The Interview — Both Sides of the Table (id="walkthrough")** — `fa-person-chalkboard` orange

**The Dual-Timeline Format:**

Two-column layout (stacks on mobile):

| Time | 🧑‍💻 Candidate | 📋 Interviewer's Notes |
|------|------------|----------------------|
| 0:00-2:00 | Clarifying questions | "✅ Good — scoping. Shows system thinking." |
| 2:00-4:00 | Requirements (F + NF) | "✅ Structured. +1 for separating F/NF." |
| 4:00-8:00 | Entity identification | "✅ Systematic. Using noun extraction." |
| 8:00-10:00 | Design decisions + patterns | "✅ Pattern fits naturally. Explained WHY." |
| 10:00-22:00 | Code implementation | "Watching for: C# idioms, naming, type choices" |
| 22:00-26:00 | Edge cases | "✅ Proactive. Most candidates miss this." |
| 26:00-30:00 | Scaling bridge | "✅ LLD→HLD. Shows breadth." |

**Two Tabs:**
- **Tab 1: "The Clean Run"** — Ideal walkthrough
- **Tab 2: "The Realistic Run"** — With stumbles, interviewer pushback, recovery

**Tab 2 MUST include:**
1. At least one moment where the candidate FORGETS something
2. An interviewer challenge ("Why not just X?") the candidate must defend against
3. A pause where the candidate says "Let me think..." (normalizes thinking time)
4. A recovery where the candidate corrects themselves

**Interviewer Notes Content Rules:**
- Use ✅ for positive signals, 🔶 for neutral, 🔴 for red flags
- Notes must be REALISTIC (what actual interviewers write)
- Include scoring categories: Problem Decomposition, Design Quality, Code Quality, Edge Cases, Communication
- Final verdict with clear reasoning

**Adaptation by system:**
Each walkthrough follows the CREATES structure: Clarify → Requirements → Entities → API → Trade-offs → Edge cases → Scale
The CONTENT changes per system but the STRUCTURE is identical.

---

**Section 17: Articulation Guide (id="articulation")** — `fa-microphone` cyan

**8 Cards per case study — same CATEGORIES, different CONTENT:**

| # | Category | Universal Template |
|---|----------|-------------------|
| 1 | Opening the problem | "Before I start, let me understand the scope..." |
| 2 | Entity decisions | "[Entity] is [type] because [reasoning about data vs behavior]..." |
| 3 | Pattern choice | "I'll use [Pattern] here because [what varies independently]..." |
| 4 | Defending a trade-off | "The cost is [X]. The gain is [Y]. For this problem, [Y] wins because..." |
| 5 | Concurrency | "[Concurrent scenario] means [operation] must be atomic..." |
| 6 | Edge cases | "Let me think about what could go wrong..." |
| 7 | Scaling bridge | "This works for [current scope]. If we need to scale..." |
| 8 | "I don't know" | "I haven't worked with that, but here's how I'd think about it..." |

**Each card has:**
- **Situation** — When this comes up
- **What to SAY** — Exact phrase (bold)
- **What NOT to say** — Common mistake (with explanation of why it's bad)
- **Why it works** — What impression it creates with the interviewer

---

**Section 18: Interview Q&As (id="qa")** — `fa-comments` blue

**8-12 questions per case study, following standard format:**

Each question has:
- **The Question** (bold) + difficulty badge (🟢 Easy / 🟡 Medium / 🔴 Hard)
- **"🧠 Think"** — What to consider before answering (collapsible)
- **"Answer"** — Solid response
- **"Great Answer"** — The response that gets "Strong Hire"
- **"What to SAY"** — The actual words to use in the interview

**Standard Question Categories (pick 8-12 per system):**
1. **"How would you handle [new variant]?"** (🟢) — Tests extensibility thinking
2. **"How do you ensure thread safety for [critical operation]?"** (🟡) — Tests concurrency knowledge
3. **"How would you add [new feature]?"** (🟡) — Tests design flexibility
4. **"What about [advanced requirement]?"** (🟡) — Tests forward thinking
5. **"How would this scale to [bigger scope]?"** (🔴) — Tests HLD bridge
6. **"How would you handle [accessibility/compliance]?"** (🟢) — Tests real-world awareness
7. **"What happens if [failure scenario]?"** (🟢) — Tests edge case thinking
8. **"How would you add [UI/external integration]?"** (🔴) — Tests system boundaries
9. **"What if [constraint changes]?"** (🟡) — Tests adaptability
10. **"How would you persist/recover state?"** (🟡) — Tests durability thinking

---

**Section 19: Mistakes & Red Flags (id="mistakes")** — `fa-triangle-exclamation` yellow

**10 Deadliest Mistakes — IDENTICAL structure across all case studies, different examples:**

| # | Severity | Mistake | Universal? | Adapts per system? |
|---|----------|---------|-----------|-------------------|
| 1 | 🔴 | Jumping to code without requirements | Universal | Same text |
| 2 | 🔴 | God class | Universal | Different class name |
| 3 | 🔴 | Deep inheritance hierarchy | Universal | Different hierarchy example |
| 4 | 🔴 | Ignoring concurrency | Universal | Different race condition |
| 5 | 🟡 | Over-engineering | Universal | Different pattern abuse example |
| 6 | 🟡 | Never mentioning tests | Universal | Same text |
| 7 | 🟡 | Static singleton without trade-off | Universal | Same text |
| 8 | 🟡 | Magic numbers | Universal | Different magic number example |
| 9 | 🟢 | Only handling happy path | Universal | Different failure scenario |
| 10 | 🟢 | Not bridging to HLD | Universal | Different scaling example |

**Interviewer Scoring Rubric — IDENTICAL across all case studies:**
| Level | Requirements | Design | Code | Edge Cases | Communication |
|---|---|---|---|---|---|
| Strong Hire | Structured F+NF | Patterns natural | Clean modern C# | 3+ proactive | Explains WHY |
| Hire | Key ones | 1-2 patterns | Mostly correct | When asked | Clear |
| Lean No | Partial | Forced/wrong | Messy | Misses obvious | Quiet/verbose |
| No Hire | None | No abstractions | Can't code | None | Can't explain |

---

#### NEVER FORGET (Sections 20-24)

**Section 20: Memory Anchors (id="memory")** — `fa-brain` purple

**Standard components (present in every case study):**

1. **"CREATES" Mnemonic** — THE universal LLD approach:
   > **C**larify → **R**equirements → **E**ntities → **A**PI → **T**rade-offs → **E**dge cases → **S**cale
   > "Every system design CREATES a solution."
   (Identical text in every case study. Repetition = permanence.)

2. **"Memory Palace" SVG** — UNIQUE per case study:
   A visual illustration of the system where each LOCATION maps to a concept.

   **How to design a Memory Palace:**
   - Use the physical layout of the real-world system
   - Map each major location to one of the 7 CREATES steps
   - The spatial layout should feel NATURAL (entry = start, exit = end)

   | System | Entry Point | Middle | Exit Point |
   |---|---|---|---|
   | Parking Lot | Gate = Clarify | Floor = Entities, Spot = API | Exit = Edge cases |
   | Elevator | Lobby = Clarify | Shaft = Entities, Buttons = API | Floor = Edge cases |
   | Chess | Board setup = Clarify | Pieces = Entities, Rules = API | Endgame = Edge cases |

3. **"Smell → Pattern" Quick Reference** — All smells introduced in THIS case study's levels (3-6 smells per case study)

4. **"5 Always Mention" Checklist** — CASE-STUDY-SPECIFIC items:
   | System | 5 Must-Mentions |
   |---|---|
   | Parking Lot | Thread safety, Strategy for pricing, DI > static Singleton, 2+ edge cases, scaling bridge |
   | Elevator | Scheduling algorithm, State pattern for elevator, Concurrent requests, Weight limit edge case, Multi-elevator scaling |
   | Chess | Move validation, Check/checkmate detection, Command for undo/redo, Special rules (castling/en passant), Online scaling |

5. **"Pattern Detection Tree" SVG** — Reusable flowchart (same across ALL case studies but with THIS system's patterns highlighted)

6. **"The Level Map"** — Visual of all 7 levels + concept per level (unique per case study)

---

**Section 21: Transfer (id="transfer")** — `fa-right-left` orange

**The 7 techniques applied to 3 OTHER systems:**

Choose 3 systems that:
1. Are in the SAME difficulty tier or one tier above
2. Share at least 2 techniques with the current case study
3. Are likely NEXT in the reader's learning path

**Table format:**
| Technique | [This System] | [System B] | [System C] |
|---|---|---|---|
| Real-world walkthrough | [stages] | [stages] | [stages] |
| Key nouns (entities) | [list] | [list] | [list] |
| What varies? | [X] | [Y] | [Z] |
| Primary pattern | [P] | [P] | [P] |
| Concurrency risk | [scenario] | [scenario] | [scenario] |
| Key edge case | [case] | [case] | [case] |
| Scale path | [direction] | [direction] | [direction] |

**Closing insight (same across all case studies):**
> "Systems share STRUCTURE even when domains differ. The skills transfer because they target the structure, not the domain."

---

**Section 22: The Reusable Toolkit (id="toolkit")** — `fa-toolbox` green

**Purpose:** All cognitive frameworks extracted as portable tools. IDENTICAL across all case studies (because they're universal):

1. **SCOPE** — Clarifying question framework: Size, Complexity, Operations, Performance, Extensions
2. **What If?** — Edge case framework: Concurrency, Failure, Boundary, Weird Input
3. **What Varies?** — Pattern detection: what changes independently?
4. **Record vs Class** — Decision tree: mutable → class, immutable → record
5. **CREATES** — The 7-step LLD approach
6. **Smell → Pattern Catalog** — The growing master list

Each as a compact visual card. These are the same on every case study page (repetition is intentional — seeing them in EVERY case study cements them).

---

**Section 23: Practice Exercises (id="exercises")** — `fa-dumbbell` yellow

**3 exercises per case study:**

| # | Difficulty | Type | Purpose |
|---|-----------|------|---------|
| 1 | 🟡 Medium | Add a new feature | Tests entity extension + pattern application |
| 2 | 🟡 Medium | Handle a new edge case | Tests What If? framework + error handling |
| 3 | 🔴 Hard | Scale the system | Tests Composite/architectural thinking |

**Each exercise has:**
- Task description (2-3 sentences)
- "Use the thinking process": What entity changes? What varies? What pattern?
- Collapsible Hint (nudge toward the right approach)
- Collapsible Full Solution (complete code)

**The exercises should use the CONSTRAINT GAME approach:**
"Here's a new constraint. What breaks? How do you fix it?"

---

**Section 24: Related Topics (id="related")** — `fa-arrow-right` blue

**6 cards per case study:**
- 3 pattern pages (the patterns used in this case study)
- 2 other case studies (one at same level, one slightly harder)
- 1 SOLID principles page (the most relevant principle)

---

## Part 3: Reusable Cognitive Frameworks

These frameworks appear in EVERY case study. They're the portable toolkit.

### Framework 1: SCOPE (Clarifying Questions)

| Letter | Category | Questions to Ask | Why |
|--------|----------|-----------------|-----|
| **S** | Size | How many [entities]? How much [throughput]? | Determines data structures + persistence |
| **C** | Complexity | What types/variants? What rules/algorithms? | Determines patterns needed |
| **O** | Operations | What does the system DO? What are the user actions? | Determines API + service design |
| **P** | Performance | Concurrent access? Latency requirements? | Determines threading + architecture |
| **E** | Extensions | What might change? What might be added? | Shows forward thinking |

### Framework 2: What If? (Edge Cases)

| Category | Question Template | Examples |
|----------|------------------|---------|
| **Concurrency** | What if two [actors] do [same thing] simultaneously? | Two gates, one spot. Two users, one seat. |
| **Failure** | What if [operation] fails mid-way? | Payment fails at exit. Motor dies mid-floor. |
| **Boundary** | What if we hit [a limit]? | Lot full. Queue overflow. Max weight. |
| **Weird Input** | What if [unexpected thing] happens? | Lost ticket. Invalid move. Cancelled ride. |

### Framework 3: What Varies? (Pattern Detection)

```
1. Look at each operation in your system
2. Ask: "Is there more than one way to do this?"
3. If YES: "Can the choice change at runtime?"
4. If YES: → That's a Strategy candidate
5. Ask: "Does the behavior depend on current state?"
6. If YES: → That's a State candidate
7. Ask: "Do others need to be notified?"
8. If YES: → That's an Observer candidate
```

### Framework 4: CREATES (The 7-Step LLD Approach)

```
C — Clarify (ask SCOPE questions)
R — Requirements (extract F + NF, prioritize Must/Should/Could)
E — Entities (Noun Technique: highlight nouns in requirements)
A — API (what operations? what inputs/outputs?)
T — Trade-offs (What Varies? → pattern decisions with explicit costs)
E — Edge cases (What If? framework: Concurrency/Failure/Boundary/Weird)
S — Scale (bridge to HLD: what changes when load grows?)
```

### Framework 5: Smell → Pattern Catalog

Master list (grows with each case study built):

| Smell | Signal | Pattern/Response |
|---|---|---|
| Categories Without Behavior | Types differ in identity, not actions | Enum, not hierarchy |
| Multiple Algorithms, Same Interface | 3+ ways, runtime choice | Strategy |
| Simultaneous Shared Access | Multiple actors, same resource | Lock / atomicity |
| Fixed After Creation | Data never changes | Record (immutable) |
| Happy Path Only | No failure handling | What If? framework |
| One Instance, Must Be Testable | Global state + mockability | DI Singleton |
| Wrap and Extend | Add behavior without modifying | Decorator |
| Mode-Dependent Behavior | Actions change based on state | State pattern |
| Notify on Change | Others need to react | Observer |
| Undo/Redo Required | Actions must be reversible | Command + Memento |
| Tree of Same-Type | Leaf and composite treated equally | Composite |
| Incompatible Interfaces | External system speaks differently | Adapter |
| Pipeline of Handlers | Request → multiple processors | Chain of Responsibility |
| Everyone Through a Hub | Centralized communication | Mediator |
| Create Different Types Based on Input | Type decided at runtime | Factory Method |

---

## Part 4: Visual Design Standards

### SVG Diagrams Per Case Study

Every case study needs exactly **13 SVG diagrams:**

| # | Diagram | Section | Purpose |
|---|---------|---------|---------|
| 1 | Level progression bar | 1 (TL;DR) | Game-style visual of 7 levels |
| 2 | Growing diagram preview (7 thumbnails) | 1 (TL;DR) | Teaser of the full evolution |
| 3 | Physical walkthrough stages | 2 (Real World) | 4-5 stages of the real experience |
| 4 | Record vs Class decision tree | Level 1 | Reusable decision flowchart |
| 5 | Type/variant mapping visual | Level 1 | Entity relationships |
| 6 | Race condition sequence | Level 3 | Two threads, one resource, the bug |
| 7 | Race condition FIX sequence | Level 3 | Same scenario, with lock |
| 8 | What If? 4-quadrant | Level 5 | Reusable edge case framework |
| 9 | Primary flow sequence | Level 4 | Main operation data flow |
| 10 | Secondary flow sequence | Level 4 | Exit/completion data flow |
| 11 | Full class diagram + pattern overlay | 12 (Patterns) | X-ray view |
| 12 | Growing diagram complete evolution | 13 (Evolution) | All 7 stages in one |
| 13 | Memory palace | 20 (Memory) | Spatial mnemonic |

### SVG Technical Rules
- All colors via CSS variables: `fill="var(--text-primary, #e2e8f0)"`
- `viewBox` + `style="width:100%; max-width:720px"`
- Font: `font-family="var(--font-mono, 'JetBrains Mono', monospace)"`
- Glow filter for accent elements
- On mobile (<375px): `min-width: 500px` inside `.macos-body` for scroll

---

## Part 5: Quality Standards

### Per-Case-Study Metrics

| Metric | Target | Minimum |
|--------|--------|---------|
| Total lines | ~7500 | 6000 |
| Tooltips | 80+ | 60 |
| Sections | 24 | 24 (fixed) |
| SVG diagrams | 13 | 10 |
| Think First challenges | 12-15 | 10 |
| What Would You Do? forks | 4-6 | 3 |
| Code tabs (Section 11) | 4-5 | 4 |
| Interview Q&As | 8-12 | 8 |
| Practice exercises | 3 | 3 |
| Bad solutions | 3 | 3 |
| Code review bugs | 5 | 5 |

### Fact-Checking Process
After EACH section: 3 parallel agents:
1. **Factual accuracy** — C# code compiles, API names correct, .NET version accurate
2. **Content quality** — Teaching is clear, Think Firsts are the right difficulty, monologues feel authentic
3. **Cross-reference consistency** — Level diffs are accurate, growing diagram matches, pattern references match actual code

After each PHASE (every 4-5 sections): cross-section consistency check

After ALL sections: full page audit (tooltips, lines, SVGs, themes, mobile)

### Code Quality Rules
- All C# must be valid C# 12 / .NET 8 (primary constructors, records, sealed, file-scoped namespaces)
- Level diffs must be ACCURATE (Level N code = Level N-1 + diff)
- No broken generics (`List&lt;T&gt;` not `List<T>`)
- No tooltips inside `<pre><code>` blocks
- All code in `.macos-window` wrappers
- Real NuGet packages / BCL types only (no invented APIs)

### The "Pact" (Section 1)
IDENTICAL text across all case studies:
> "This page has [N] 'Think First' challenges. Here's the deal: if you actually STOP and think for 60 seconds before expanding each answer, you'll retain 80% of everything on this page permanently. If you just scroll through, you'll retain maybe 20% and forget it in a week. Same page. Wildly different outcomes. Your choice."

---

## Part 6: Hub Card Integration

When a case study page is completed:

1. **Change card from `<div>` to `<a>`** with href to the page
2. **Remove `lld-topic-card--soon` class**
3. **Update status** from "Coming Soon" to "Ready" with `lld-topic-status--ready`
4. **Verify pattern tags** match the actual patterns used in the case study

---

## Part 7: Adaptation Complexity Guide

Not all case studies need the same depth. The framework scales:

### Easy Case Studies (Starter tier)
- All 24 sections present
- Levels 0-4: full detail (this is where the core teaching happens)
- Levels 5-7: medium detail (edge cases and scaling are simpler)
- 7500 lines target
- Internal monologues: longer, more hand-holding
- What Would You Do? forks: 2 options (simpler choices)

### Medium Case Studies (Intermediate tier)
- All 24 sections present
- Levels more balanced in detail
- More patterns introduced (3-4 per case study)
- 6500-7500 lines target
- Internal monologues: moderate (reader has seen the technique before)
- What Would You Do? forks: 2-3 options
- Cross-references to earlier case studies: "Remember in Parking Lot when we..."

### Hard Case Studies (Advanced tier)
- All 24 sections present
- Levels 0-2 faster (reader is experienced)
- Levels 3-7 deeper (more complex patterns, more edge cases)
- 6000-7000 lines target
- Internal monologues: shorter, denser (reader is familiar with the thinking process)
- What Would You Do? forks: 3 options (harder trade-offs)
- Transfer to HLD concepts is more detailed

---

## Part 8: Files Reference

| File | Purpose |
|------|---------|
| `case-study-spec.md` (this doc) | Master framework for all case studies |
| `page-spec.md` | Master framework for pattern pages (24-section) |
| `lld/index.html` | Hub with all case study cards |
| `shared/styles.css` | Shared CSS (verify no new classes needed) |
| `shared/scripts.js` | Shared JS (tabs, collapsibles, tooltips all work) |
| `.claude/memory/project-state.md` | Project state tracking |
| `.claude/SESSION.md` | Current session state |

---

## Appendix: The Parking Lot Implementation Plan

(Preserved from earlier planning — the first case study that implements this framework)

**File:** `lld/topics/case-studies/parking-lot/csharp.html`
**Accent:** `orange` | **Favicon:** 🅿️ | **Hub tags:** Strategy, Factory, Singleton

**Level Design:**
| Level | Constraint | Concept |
|---|---|---|
| 0 | Park a car | Simplest code (25 lines) |
| 1 | Different vehicle sizes | Enums, records, SpotSizeMapping, Noun Technique |
| 2 | Multiple pricing types | Strategy pattern (IPricingStrategy × 4) |
| 3 | Multiple entry gates | Lock + ConcurrentDictionary, race condition |
| 4 | Tickets + timestamps + fees | Data flow, records, sequence diagrams |
| 5 | Lot full, payment fail, lost ticket | What If? framework, 7 edge cases |
| 6 | DI singleton, testing | Testability, 4 testing strategies |
| 7 | Multi-lot chain, real-time | Scaling ladder, HLD bridge |

**Bad Solutions:** God Class / Over-Engineer / Happy-Path Hero
**Transfer Systems:** Elevator, Vending Machine, Online Bookstore
**Interview Q&As:** 10 questions (3 Easy, 4 Medium, 3 Hard)
**Exercises:** EV Charging (Medium), Reservations (Medium), Multi-Lot Chain (Hard)

---
---

## Part 9: Pattern Selection Methodology

> "Given a system, how do you SYSTEMATICALLY determine which patterns it needs?"

This is the gap most frameworks have. They list patterns per case study but don't explain HOW those patterns were chosen. Here's the systematic approach.

### Step 1: Extract Operations from Requirements

List every operation the system performs. For each operation, tag it:

| Tag | Meaning | Example |
|-----|---------|---------|
| **VARIES** | Multiple algorithms/strategies for this | Pricing: hourly, flat, tiered |
| **STATES** | Behavior depends on current state | Elevator: idle vs moving vs door-open |
| **CREATES** | Different types produced based on input | Vehicle types, product types |
| **NOTIFIES** | Other components need to react | Stock update → notify watchers |
| **SEQUENTIAL** | Steps must happen in order | Order: created → paid → shipped → delivered |
| **UNDOABLE** | Must support undo/redo | Text editor, chess moves |
| **WRAPS** | Adds behavior on top of existing | Logging around operations, weekend pricing multiplier |
| **PIPELINES** | Request passes through multiple handlers | Validation chain, middleware |

### Step 2: Map Tags to Patterns

| Tag | Primary Pattern | Secondary Options |
|-----|----------------|-------------------|
| VARIES | **Strategy** | Template Method (if steps are fixed but details vary) |
| STATES | **State** | Strategy (if states aren't sequential) |
| CREATES | **Factory Method** | Abstract Factory (if families of related objects) |
| NOTIFIES | **Observer** | Mediator (if many-to-many communication) |
| SEQUENTIAL | **State** (lifecycle) | Chain of Responsibility (if handlers are optional) |
| UNDOABLE | **Command + Memento** | |
| WRAPS | **Decorator** | Proxy (if controlling access, not adding behavior) |
| PIPELINES | **Chain of Responsibility** | Decorator (if order doesn't matter) |

### Step 3: Check for Structural Patterns

After behavioral patterns, check structural needs:

| Question | If Yes → Pattern |
|----------|-----------------|
| Do leaf and composite need same interface? | **Composite** (file system, org chart) |
| Do we need to adapt an external interface? | **Adapter** (third-party SDK wrapper) |
| Is there a complex subsystem to simplify? | **Facade** (API gateway) |
| Do we need to control access to something? | **Proxy** (lazy loading, auth) |
| Do we need to share expensive objects? | **Flyweight** (string interning, pools) |

### Step 4: Check for Creational Patterns

| Question | If Yes → Pattern |
|----------|-----------------|
| Do we create different types based on input? | **Factory Method** |
| Do we create families of related objects? | **Abstract Factory** |
| Is object construction complex (many params)? | **Builder** |
| Do we need copies of existing objects? | **Prototype** |
| Do we need exactly one shared instance? | **Singleton** (prefer DI) |

### Step 5: Validate (3 Questions)

For each selected pattern, ask:
1. **"Does this solve a REAL problem in this system?"** — If no, remove it. Patterns without problems are over-engineering.
2. **"Is the simplest alternative (if/else, direct code) genuinely worse?"** — For 2 variants, if/else may be fine. For 5+, Strategy wins.
3. **"Can I explain in ONE sentence why this pattern is here?"** — If the explanation needs a paragraph, the pattern might not fit.

### Worked Example: Parking Lot

| Operation | Tag | Pattern |
|-----------|-----|---------|
| Calculate fee | VARIES (hourly/flat/tiered/weekend) | **Strategy** (IPricingStrategy) |
| Find spot for vehicle | VARIES (first-available/nearest/spread) | **Strategy** (ISpotAssignmentStrategy) |
| One parking lot instance | Need one, testable | **DI Singleton** |
| Weekend pricing wraps base | WRAPS | **Decorator** (WeekendPricingStrategy) |
| Create different spots | CREATES (compact/regular/large) | **Factory** (but simple enough for constructor) |

Validate: 3 patterns (2 Strategy + DI Singleton). The Decorator emerged naturally. Factory was considered but rejected (constructors are sufficient). No over-engineering.

### Worked Example: Elevator System

| Operation | Tag | Pattern |
|-----------|-----|---------|
| Schedule which elevator handles request | VARIES (FCFS/SCAN/LOOK) | **Strategy** |
| Elevator behavior (idle/moving/stopped) | STATES | **State** |
| Coordinate multiple elevators | Many-to-many communication | **Mediator** |
| Button press → request | NOTIFIES | **Observer** (or Command) |

Validate: 4 patterns. All solve real problems. Mediator might be skippable for 2 elevators but necessary for 4+.

### Worked Example: Chess Game

| Operation | Tag | Pattern |
|-----------|-----|---------|
| Different pieces move differently | VARIES per piece | **Strategy** (IMoveStrategy per piece type) |
| Game phases (setup/playing/check/checkmate/draw) | STATES | **State** |
| Move history + undo | UNDOABLE | **Command + Memento** |
| Board notifies UI of changes | NOTIFIES | **Observer** |

Validate: 4-5 patterns. Command is essential for undo. State handles game lifecycle cleanly.

### The "Pattern Budget"

A guideline for how many patterns a system should use:

| Difficulty | Pattern Budget | Rationale |
|-----------|---------------|-----------|
| Easy | 2-3 patterns | Core concept learning. Don't overwhelm. |
| Medium | 3-4 patterns | Reader has seen patterns before. Can handle more. |
| Hard | 4-6 patterns | Complex systems need more. Reader is experienced. |

**Red flag:** If you find yourself using 7+ patterns, you're either over-engineering or the case study is actually two systems. Consider splitting.

---

## Part 10: Edge Case Discovery Engine

> "The What If? framework gives categories. This engine gives a SYSTEMATIC, EXHAUSTIVE process."

### The 5-Pass Discovery Process

Run 5 passes over your system. Each pass looks through a different lens.

**Pass 1: Operation-Level Edge Cases**
For EACH operation in the API, ask:
- What if the input is null/empty/invalid?
- What if the input is at the boundary (max int, empty string, midnight)?
- What if the operation is called twice with the same input?
- What if the operation is called in the wrong order?
- What if the operation takes too long?

| System | Operation | Edge Cases Found |
|--------|-----------|-----------------|
| Parking | Entry(vehicle) | Vehicle already parked? Null plate? |
| Parking | Exit(ticketId) | Invalid ID? Same ID twice? |
| Elevator | RequestFloor(n) | Current floor? Out of range? |
| Chess | Move(piece, to) | Piece doesn't exist? Move into check? |

**Pass 2: State-Level Edge Cases**
For EACH entity with state, ask:
- What if we try to transition to an invalid state?
- What if we're already in the target state?
- What if the state transition is interrupted?
- What if the state is corrupted?

| System | Entity/State | Edge Cases Found |
|--------|-------------|-----------------|
| Parking | Spot (available→occupied) | Already occupied? Released twice? |
| Elevator | Door (open→closing) | Obstruction? Power failure? |
| Chess | Game (playing→check) | Already in check? Stalemate vs checkmate? |

**Pass 3: Concurrency Edge Cases**
For EACH shared resource, ask:
- What if two actors access it simultaneously?
- What if one actor holds it and crashes?
- What if the order of operations matters but isn't guaranteed?

| System | Shared Resource | Edge Cases Found |
|--------|----------------|-----------------|
| Parking | ParkingSpot | Two cars, one spot (race condition) |
| Parking | ActiveTickets dictionary | Concurrent add + remove |
| Elevator | Request queue | Two requests for same floor |
| Chess | Board state | (Single-player: N/A. Multiplayer: both players move) |

**Pass 4: External Dependency Edge Cases**
For EACH external dependency (payment, network, database, time), ask:
- What if it's unavailable?
- What if it's slow?
- What if it returns unexpected data?
- What if it succeeds but we fail to process the result?

| System | External Dep | Edge Cases Found |
|--------|-------------|-----------------|
| Parking | Payment gateway | Timeout, declined, double-charge |
| Parking | System clock | Timezone, DST, midnight rollover |
| Uber | GPS/Maps API | Inaccurate location, API down |
| Chess | Timer | Clock runs out mid-move |

**Pass 5: Business Rule Edge Cases**
For EACH business rule, ask:
- What are the boundary values?
- What happens at exactly the threshold?
- What if the rule contradicts another rule?

| System | Business Rule | Edge Cases Found |
|--------|-------------|-----------------|
| Parking | "First hour free" | Exit at exactly 60:00 — free or charged? |
| Parking | "Truck needs Large spot" | No Large spots but 10 Regular — partial fit? |
| Elevator | "Max weight 1000kg" | At exactly 1000kg — allow or reject? |
| Chess | "50-move rule" | Player claims draw at move 49 |

### Edge Case Prioritization Matrix

After discovery, prioritize:

| Priority | Criteria | Action |
|----------|---------|--------|
| 🔴 P0 | Data corruption or safety | MUST handle. Include in Level 5. |
| 🟡 P1 | Bad UX but no data loss | SHOULD handle. Include in Level 5 or exercises. |
| 🟢 P2 | Rare, minor impact | COULD handle. Mention in interview Q&As. |

### Target: 7-10 Edge Cases Per Case Study

| Level 5 (detailed treatment) | Interview Q&As (mention) | Exercises (reader implements) |
|-----|-----|-----|
| 5-7 edge cases | 2-3 edge cases | 1-2 edge cases |

---

## Part 11: Emotional Pacing Map

> "Learning isn't just cognitive. Each emotion serves a PURPOSE."

### The Emotional Arc of a Case Study

```
Section 1-2:   CURIOSITY + SAFETY     "This is interesting and I'm going to be guided"
Section 3:     CONFIDENCE              "Level 0 is easy! I can do this!"
Section 4-5:   GROWING CHALLENGE       "OK, it's getting more complex, but I'm keeping up"
Section 6:     SHOCK + FRUSTRATION     "My code BROKE! The race condition!" ← PEAK TENSION
Section 7:     RECOVERY + DEPTH        "OK, I see how to fix it. And there's more to track."
Section 8:     ANXIETY + DISCOVERY     "So many edge cases! But the What If framework helps."
Section 9-10:  MASTERY                 "I understand DI, testing, scaling. This is coming together."
Section 11-13: SATISFACTION            "Look at the complete system. I built this level by level."
Section 14:    HUMILITY + INSIGHT      "These bad solutions taught me what NOT to do."
Section 15:    CHALLENGE + PRIDE       "I found the bugs! I can spot these in real code."
Section 16:    AWE + CONFIDENCE        "I can see both sides of the interview. I know what they want."
Section 17-19: EMPOWERMENT             "I know what to say, what to avoid, how to score well."
Section 20-22: PERMANENCE              "I'll never forget this. The memory palace, the mnemonics."
Section 23:    AGENCY                  "I can extend this system. I can apply this to other systems."
Section 24:    EXCITEMENT              "What should I learn next?"
```

### Section-by-Section Emotional Design

| Section | Target Emotion | How to Achieve It |
|---------|---------------|-------------------|
| 1 (Hook) | Curiosity + Trust | Promise transformation. Show the journey ahead. |
| 2 (Real World) | Wonder | "I never noticed all these design decisions in a parking lot!" |
| 3 (Level 0) | Confidence | Deliberately easy. "I can do this." |
| 4-5 (Levels 1-2) | Growing mastery | Each level adds ONE thing. Reader keeps up. |
| **6 (Level 3)** | **SHOCK** | **THE pivotal moment. Code breaks visually (sequence diagram). Reader FEELS the race condition.** |
| 7 (Level 4) | Depth | "There's more to this than I thought." |
| 8 (Level 5) | Productive anxiety → relief | "So many failure modes!" → "But the What If? framework makes it manageable." |
| 9-10 (Levels 6-7) | Completeness | "Now it's production-grade. I understand every line." |
| 11-13 (Full picture) | Pride | "Look what I built, one level at a time." |
| **14 (Bad solutions)** | **Humility** | **"The Happy-Path Hero LOOKED good but failed." Self-reflection.** |
| 15 (Code review) | Challenge → triumph | "Can I find all 5 bugs? ... Yes!" |
| 16 (Interview) | Awe | "I can see what the interviewer is thinking!" |
| 17-19 (Mastery) | Confidence | "I know exactly what to say and what to avoid." |
| 20 (Memory) | Security | "I'll never forget this." |
| 21-22 (Transfer) | Power | "These techniques work EVERYWHERE." |
| 23 (Exercises) | Agency | "I can do this myself now." |
| 24 (Related) | Hunger | "What's next?" |

### Peak Moments (must nail these)

1. **Level 3 (Concurrency Break)** — The code breaks FOR THE FIRST TIME. The reader has been building confidence for 3 levels. Then: race condition. Two cars, one spot. The sequence diagram makes it VISCERAL. This is the "boss fight" of the Constraint Game. The emotional whiplash from confidence to "oh no" creates the STRONGEST memory encoding.

2. **Bad Solution 3 (Happy-Path Hero)** — This is the "mirror moment." The reader sees a solution that LOOKS like what they would write. Clean code, good patterns. Then it explodes in production. The realization: "I would have made this mistake." Humility is the most powerful teacher.

3. **The Dual-Timeline Interview** — First time the reader sees what the interviewer is THINKING. The "✅ Good" notes create relief. The format is novel and feels like a secret peek behind the curtain.

### Pacing Rules

| Section Type | Density | Word Count | Code Lines | Reading Time |
|-------------|---------|-----------|-----------|-------------|
| Hook (1) | Light | 300-400 | 10 | 2 min |
| Real World (2) | Medium | 500-600 | 0 | 3 min |
| Levels 0-2 (3-5) | Medium-Dense | 600-800 each | 40-100 each | 5-7 min each |
| Level 3 (6) | DENSE | 800-1000 | 60 | 8 min |
| Levels 4-7 (7-10) | Medium-Dense | 600-800 each | 50-80 each | 5-7 min each |
| Full Code (11) | Dense (code-heavy) | 200 | 350 | 10 min |
| Patterns + Evolution (12-13) | Medium | 400 each | 20 | 3 min each |
| Bad Solutions (14) | Medium-Dense | 800 | 200 | 8 min |
| Code Review (15) | Medium | 400 | 60 | 5 min |
| Interview (16) | Medium | 700 | 0 | 7 min |
| Articulation (17) | Light | 500 | 0 | 4 min |
| Q&As (18) | Medium | 800 | 40 | 7 min |
| Mistakes (19) | Light-Medium | 500 | 0 | 4 min |
| Memory (20) | Light (visual-heavy) | 300 | 0 | 3 min |
| Transfer + Toolkit (21-22) | Light | 400 each | 0 | 3 min each |
| Exercises (23) | Medium | 400 | 100 | 5 min |
| Related (24) | Light | 100 | 0 | 1 min |
| **TOTAL** | | ~10,000 words | ~1,200 lines | ~95 min |

### Breathing Points

After dense sections, include a "breathing" element:
- After Level 3 (shock): a reflective "Before/After" that's calming
- After Level 5 (anxiety): a summary card that organizes everything
- After Bad Solutions (humility): the Code Review Challenge, which is FUN
- After Interview (awe): Articulation Guide, which is practical and calming

---

## Part 12: Fork Design Methodology

> "How do you create PLAUSIBLE wrong options that are genuinely educational?"

### The 3 Sources of Wrong Options

**Source 1: The Premature Approach**
Something that works for SIMPLE cases but fails for complex ones.
- Switch/case for 2 types → breaks at 6
- Regular Dictionary for single-threaded → breaks with concurrency
- Static singleton for scripts → breaks for testable services

**Source 2: The Over-Engineered Approach**
Something that's technically correct but disproportionately complex.
- AbstractFactoryProvider for a simple enum
- Full CQRS for a simple parking lot
- Event sourcing when a dictionary suffices

**Source 3: The Wrong Abstraction**
Something that SEEMS right but violates a principle.
- Inheritance hierarchy for data types (Vehicle → Car → ElectricCar)
- Vehicle.FindMySpot() — wrong ownership of behavior
- Mutable ticket (allows entry time to be overwritten)

### Fork Design Rules

1. **Every wrong option must WORK** — It compiles. It runs. It produces correct output for the happy path. This is what makes it plausible.

2. **Every wrong option must FAIL in a specific, demonstrable way** — Not "it's bad practice" but "here's the EXACT scenario where it breaks, with code showing the failure."

3. **Wrong options must be what a REAL developer would try** — Not straw men. If nobody would actually write it, it doesn't teach anything.

4. **The winning option must be explained relative to the others** — Not "Strategy is correct." But "Strategy wins HERE because pricing varies independently. If pricing never changed, Option A (switch) would be simpler and better."

5. **Always answer "When IS the wrong option right?"** — This teaches JUDGMENT, not dogma. Every approach has a context where it's the best choice.

### Fork Template

```
"What Would You Do?"
├── Tab A: [The Premature Approach]
│   ├── Code: 20-30 lines (working)
│   ├── Consequence: "Here's what happens at [scale/time/complexity]..."
│   ├── When it's actually fine: "[simple scenario]"
│   └── Why it fails here: "[specific reason for THIS system]"
├── Tab B: [The Wrong Abstraction] or [The Over-Engineered]
│   ├── Code: 20-30 lines (working)
│   ├── Consequence: "Here's what goes wrong..."
│   ├── When it's actually fine: "[different context]"
│   └── Why it fails here: "[specific reason]"
└── Tab C: [The Right Approach] ← always last
    ├── Code: 20-30 lines
    ├── Why it wins: "Because [specific trade-off analysis]"
    ├── What it costs: "[the honest downside]"
    └── Decision compass: "[one-line rule for choosing]"
```

---

## Part 13: Content Generation Techniques

> "The framework says WHAT to include. This section says HOW to write it."

### How to Write Internal Monologues

**The Formula:** Observation → Attempt → Doubt → Connection → Discovery

```
1. OBSERVATION: "OK, we need [feature]..."
2. ATTEMPT: "I could [simple approach]..."
3. DOUBT: "But what happens when [complication]? That feels [negative adjective]..."
4. CONNECTION: "Wait, this is exactly [the problem that SOLID/pattern addresses]..."
5. DISCOVERY: "[Pattern/technique]! If I [solution], then [benefit]."
```

**Language to use:**
- Hesitations: "...", "Hmm,", "Let me think..."
- Course corrections: "Wait —", "Actually,", "No, that's not right..."
- Realizations: "Oh!", "That's the key —", "So the real question is..."
- Validation: "Yeah.", "OK, that works.", "Let me try it..."

**Language to AVOID:**
- Textbook language: "According to the GOF..."
- False uncertainty: "I wonder if perhaps Strategy might be appropriate?"
- Overconfidence: "Obviously we use Strategy here."

**Example (GOOD):**
> "Multiple pricing types... I could use a switch. Works for 3 types. But the 4th? I'd modify this method again. And the 5th. This is the method that becomes 200 lines and nobody wants to touch...
>
> Wait — I need each pricing type to be its OWN thing. Its own class. Same interface, different behavior. That way adding a 4th type = new class. Zero changes to existing code.
>
> That's Strategy. I didn't try to use a pattern — I just asked 'what varies?' and ended up here."

**Example (BAD):**
> "We should use the Strategy pattern here because the Gang of Four defines it as a way to encapsulate interchangeable algorithms. According to the Open/Closed Principle, we should be open for extension and closed for modification."

### How to Write Bad Solutions

**The Formula:** Start good → reveal the flaw → show the consequence in a STORY

1. **Write the code FIRST** — Make it look plausible. Clean naming. Reasonable structure. A real developer would write this.
2. **Pick the SCENARIO that kills it** — Not a contrived edge case but a realistic production scenario.
3. **Tell the story of the failure** — Not "this has a race condition" but "It's Monday morning. 200 cars arrive. 3 minutes later, customer service gets a call: two cars were directed to the same spot."
4. **Timestamp the death** — "The moment it dies: [specific scenario when it becomes unmaintainable]"

### How to Write Think First Challenges

**The Goldilocks Rule:** The reader should be able to:
- Understand what's being asked (within 10 seconds)
- Form a partial answer (within 30 seconds)
- Feel uncertain about their complete answer (at 60 seconds)

If they can't understand the question → too vague.
If they solve it instantly → too easy.
If they have no idea where to start → too hard.

**Format:** Always phrased as a DESIGN challenge, not a knowledge question.
- ❌ "What is the Strategy pattern?" (knowledge test)
- ❌ "How would you improve this?" (too vague)
- ✅ "Design it so adding a NEW pricing type requires ZERO changes to existing code." (design challenge with clear success criteria)

### How to Design Memory Palaces

**Step 1:** Identify the physical layout of the real-world system (from Section 2 walkthrough)
**Step 2:** List the 7 CREATES steps
**Step 3:** Map each step to a LOCATION that feels natural:
- The ENTRY point = Clarify (you ENTER through questions)
- The CORE INTERACTION area = Requirements + Entities + API (the main activity)
- The PAYMENT/COMPLETION area = Trade-offs + Edge cases (settling up)
- The EXIT = Scale (leaving → growing beyond)

**Step 4:** The mapping should be MEMORABLE because it's SURPRISING or VISUAL:
- Parking lot: pricing SIGN = Strategy pattern (a sign that CHANGES)
- Elevator: BUTTONS = API (you PRESS inputs)
- Chess: PIECES = Entities (each one IS a class)

---

## Part 14: Cross-Case-Study Progression

> "How do later case studies BUILD ON earlier ones?"

### The Learning Dependency Graph

```
             ┌─ Vending Machine (State)
Parking Lot ─┤
(Strategy)   ├─ Elevator (Strategy + State + Mediator)
             └─ Tic-Tac-Toe (Strategy + State)

Elevator ────┬─ Library Management
             └─ Hotel Booking

Chess ───────┬─ Collaborative Editor (Command + Memento)
             └─ Online Auction (State + Observer)

Online Shopping ──┬─ Food Delivery
                  └─ Ride-Sharing
```

### Progressive Complexity Rules

1. **First case study (Parking Lot):** All techniques taught from scratch. Every Think First has maximum hand-holding. Every smell is explained in full.

2. **Second-third case studies (Vending Machine, Tic-Tac-Toe):** Techniques are RECALLED, not re-taught:
   > "Remember the 'Multiple Algorithms' smell from Parking Lot? We're seeing it again here — but this time with scheduling algorithms instead of pricing."

3. **Fourth+ case studies:** Techniques are ASSUMED. Brief reminders only:
   > "This is Strategy again (see Parking Lot, Level 2 if you need a refresher)."

4. **New patterns get the FULL treatment** regardless of case study number. If Elevator introduces State for the first time, it gets the full Internal Monologue + Fork + Before/After.

### The Smell Catalog Growth

| Case Study # | New Smells Added | Total Catalog Size |
|---|---|---|
| 1 (Parking Lot) | 6 | 6 |
| 2 (Vending Machine) | 2 (Mode-Dependent Behavior, Sequential Process) | 8 |
| 3 (Elevator) | 2 (Everyone Through a Hub, Pipeline of Handlers) | 10 |
| 4 (Chess) | 2 (Undo/Redo Required, Tree of Same-Type) | 12 |
| ... | 1-2 per case study | ~15 by case study 8 |

### Cross-Reference Format

When recalling a previous case study's technique:
```
"🔗 Recall: [Technique Name] — We first saw this in [Case Study Name], Level [N].
In that system: [brief reminder].
In THIS system: [how it applies differently]."
```

---

## Part 15: The Final Boss — Self-Assessment

> "Every case study ends with a CHALLENGE that tests if the reader truly learned."

### Section 23.5 (Between Exercises and Related): "The Final Boss" (id="final-boss")

**Located inside Section 23 (Exercises) as the LAST exercise, marked differently.**

**Format:** A collapsible "challenge" card with a timer suggestion (15 minutes).

**The Challenge:**
> "Close this page. Open a blank document. In 15 minutes, from memory:
> 1. List the core entities and their types (record/class/enum)
> 2. Draw the class diagram (rough sketch is fine)
> 3. Explain which patterns you'd use and WHY (not just names — the reasoning)
> 4. List 3 edge cases and how you'd handle them
> 5. Describe how you'd bridge to HLD
>
> Then come back and compare with the full solution in Section 11.
>
> **Scoring:**
> - Got 5/5 with decent detail? You've MASTERED this case study. Move to the next.
> - Got 3-4/5? Re-read the levels you missed. Then try again tomorrow.
> - Got 1-2/5? You scrolled without thinking. Go back to Level 0, and this time STOP at every 🧠.
>
> **The Spaced Repetition Hook:**
> - Try this challenge again in 3 days (without re-reading).
> - Then again in 1 week.
> - If you can do it after 1 week, it's permanent."

### Self-Assessment Rubric (per case study, adapted)

| Component | What to Check | Full Credit | Partial | Missing |
|-----------|--------------|------------|---------|---------|
| Entities | All core entities + correct types | 8+ entities, types correct | 5-7, some types wrong | <5 or types all wrong |
| Class Diagram | Relationships + pattern annotations | Accurate relationships | Missing some connections | Can't draw it |
| Pattern Reasoning | WHY each pattern, not just WHICH | "Pricing varies independently → Strategy" | Names patterns but no reasoning | Can't recall patterns |
| Edge Cases | Specific scenarios + fixes | 3+ with fix approaches | 1-2 generic ones | None |
| HLD Bridge | Scaling direction | 2+ specific scaling steps | Vague "use a database" | Nothing |

---

## Part 16: Framework Evolution Protocol

> "After building 5 case studies, we'll learn things. How does the framework update?"

### After Every Case Study

1. **New smells?** Add to the Smell → Pattern Catalog (Part 3, Framework 5)
2. **New fork patterns?** Add to Fork Design examples (Part 12)
3. **New edge case patterns?** Add to Edge Case Discovery worked examples (Part 10)
4. **Teaching technique that worked well?** Add to Content Generation Techniques (Part 13)
5. **Teaching technique that fell flat?** Note in a "Lessons Learned" section

### After Every 5 Case Studies

1. Review the Emotional Pacing Map — is the arc still effective or getting predictable?
2. Review the Constraint Game levels — are Levels 5-7 too repetitive across studies?
3. Review Think First challenge difficulty — are they too easy for returning readers?
4. Consider adding "speedrun mode" for experienced readers (collapsed versions of early levels)

### Version Control

The framework file (`case-study-spec.md`) gets a version at the top:
```
Version: 1.0 (Parking Lot)
Version: 1.1 (after Vending Machine — added State pattern guidance)
Version: 1.2 (after Elevator — added Mediator, revised Level 3 template)
...
```

---

## Part 17: HTML Markup Reference — Every Novel Element

> "The framework describes WHAT to build. This part shows the EXACT HTML for every new element case studies introduce."

All existing components (tabs, cards, collapsibles, Q&As, code blocks, SVGs, tooltips, callouts) follow the established patterns from pattern pages. This section specifies markup ONLY for elements that are NEW to case studies.

### 17.1: Think First Challenge

Reuses the existing `.collapsible` component with a custom wrapper for styling.

```html
<div class="callout callout-blue" style="border-color: rgba(59,130,246,0.4); background: rgba(59,130,246,0.06);">
  <p style="margin:0 0 0.75rem 0; font-weight:700; font-size:0.95rem;">
    <i class="fa-solid fa-brain icon-gap text-blue"></i> Think First #N
  </p>
  <p class="body-text" style="margin:0 0 0.75rem 0;">
    The challenge question here. Design it so adding a NEW pricing type requires ZERO changes to existing code. How?
  </p>
  <p style="margin:0 0 0.75rem 0; font-size:0.8rem; color:var(--text-muted);">
    <i class="fa-solid fa-clock icon-gap"></i> 60 seconds — pause and think before revealing.
  </p>
  <div class="collapsible">
    <div class="collapsible-header" role="button" tabindex="0" aria-expanded="false">
      <span><i class="fa-solid fa-eye icon-gap"></i> Reveal Answer</span>
      <i class="fa-solid fa-chevron-down collapsible-chevron"></i>
    </div>
    <div class="collapsible-content">
      <div class="collapsible-body">
        <!-- Answer content: text, code blocks, diagrams -->
      </div>
    </div>
  </div>
</div>
```

**Rules:**
- Numbering is sequential across the ENTIRE page (#1 through ~#15)
- Collapsible starts CLOSED (reader must actively choose to reveal)
- Reader CAN collapse it again after expanding (standard collapsible behavior)
- On mobile: same layout, no changes needed

### 17.2: Internal Monologue

Uses a styled `<blockquote>` with a speaker label.

```html
<blockquote style="border-left:3px solid var(--accent-primary); background:rgba(var(--accent-primary-rgb),0.04); padding:1.25rem 1.5rem; border-radius:0 0.5rem 0.5rem 0; margin:1rem 0; font-size:0.9rem; line-height:1.7; color:var(--text-secondary);">
  <p style="margin:0 0 0.5rem 0; font-weight:600; font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.05em;">
    <i class="fa-solid fa-thought-bubble icon-gap"></i> Your Internal Monologue
  </p>
  <p style="margin:0;">
    "Multiple pricing types... I could use a switch. Works for 3 types. But the 4th? I'd modify this method again. And the 5th. This is the method that becomes 200 lines and nobody wants to touch..."
  </p>
  <p style="margin:0.75rem 0 0 0;">
    "Wait — I need each pricing type to be its OWN thing. Its own class. Same interface, different behavior. That way adding a 4th type = new class. Zero changes to existing code."
  </p>
  <p style="margin:0.75rem 0 0 0;">
    "That's Strategy. I didn't try to use a pattern — I just asked <em>'what varies?'</em> and ended up here."
  </p>
</blockquote>
```

**Rules:**
- Use `<p>` tags for paragraph breaks within the monologue (represents thinking pauses)
- Italicize key realizations with `<em>`
- Keep the "Your Internal Monologue" label consistent across ALL case studies
- Use `fa-thought-bubble` icon (or `fa-comments` if unavailable)

### 17.3: "What Would You Do?" Forks

Reuses the existing `.tab-container` component. Embedded inside level content.

```html
<div style="margin:1.5rem 0;">
  <p style="font-weight:700; font-size:1.05rem; margin-bottom:0.75rem;">
    <i class="fa-solid fa-code-fork icon-gap text-purple"></i> What Would You Do?
  </p>

  <div class="tab-container">
    <div class="tab-header" role="tablist">
      <button class="tab-btn active" data-tab="fork-L2-a" role="tab" aria-selected="true" aria-controls="fork-L2-a">
        <i class="fa-solid fa-a icon-gap"></i> Switch / If-Else
      </button>
      <button class="tab-btn" data-tab="fork-L2-b" role="tab" aria-selected="false" aria-controls="fork-L2-b">
        <i class="fa-solid fa-b icon-gap"></i> Inheritance
      </button>
      <button class="tab-btn" data-tab="fork-L2-c" role="tab" aria-selected="false" aria-controls="fork-L2-c">
        <i class="fa-solid fa-c icon-gap"></i> Strategy ✓
      </button>
    </div>

    <!-- Tab A: Dead End -->
    <div class="tab-panel active" id="fork-L2-a" role="tabpanel">
      <div class="macos-window mt-sm"><!-- code --></div>
      <div class="callout callout-red" style="margin-top:1rem;">
        <i class="fa-solid fa-circle-xmark icon-gap"></i>
        <strong>Consequence:</strong> Every new pricing type = modify this method. OCP violated.
      </div>
      <div class="callout callout-blue" style="margin-top:0.5rem;">
        <i class="fa-solid fa-circle-check icon-gap"></i>
        <strong>When it IS fine:</strong> 2 types that will NEVER grow. Scripts. Prototypes.
      </div>
    </div>

    <!-- Tab B: Dead End -->
    <div class="tab-panel" id="fork-L2-b" role="tabpanel">
      <!-- Same structure: code + red consequence + blue "when fine" -->
    </div>

    <!-- Tab C: Winner (always last tab) -->
    <div class="tab-panel" id="fork-L2-c" role="tabpanel">
      <div class="macos-window mt-sm"><!-- code --></div>
      <div class="callout callout-success" style="margin-top:1rem;">
        <i class="fa-solid fa-circle-check icon-gap"></i>
        <strong>Why it wins:</strong> Each pricing type owns its logic. Adding = new class, zero changes to existing code.
      </div>
      <div class="callout callout-warning" style="margin-top:0.5rem;">
        <i class="fa-solid fa-scale-balanced icon-gap"></i>
        <strong>What it costs:</strong> More files. More indirection. Worth it when types grow beyond 2.
      </div>
      <p style="margin-top:1rem; padding:0.75rem 1rem; background:rgba(var(--accent-primary-rgb),0.06); border-radius:0.5rem; font-size:0.85rem; font-weight:600;">
        <i class="fa-solid fa-compass icon-gap"></i> Decision Compass:
        "Will the algorithm change independently? → Strategy. Truly fixed forever? → inline is fine."
      </p>
    </div>
  </div>
</div>
```

**Tab ID convention:** `fork-L{level}-{a|b|c}` (e.g., `fork-L2-a`, `fork-L5-b`)
**Rules:**
- Winner tab is ALWAYS the last tab (reader explores wrong paths first)
- Winner tab label has ` ✓` suffix
- Dead-end tabs use red callout for consequence, blue for "when it IS fine"
- Winner tab uses green callout for "why it wins", yellow for "what it costs"
- Decision Compass appears only in the winner tab

### 17.4: "What Breaks?" Callout

```html
<div class="callout callout-red">
  <div class="callout-title"><i class="fa-solid fa-circle-xmark"></i> What Breaks?</div>
  <p class="body-text">
    Our Level 1 code has <code>return 5.00m</code> hardcoded. Three pricing types?
    That's three if/else branches stuffed into one method — and every new type modifies it.
  </p>
</div>
```

Simple red callout. Already exists in the component library.

### 17.5: Before/After Your Brain

```html
<div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin:1.5rem 0;">
  <div style="padding:1rem 1.25rem; background:rgba(239,68,68,0.06); border:1px solid rgba(239,68,68,0.2); border-radius:0.75rem;">
    <p style="margin:0 0 0.5rem 0; font-weight:700; font-size:0.8rem; color:#fca5a5; text-transform:uppercase;">
      <i class="fa-solid fa-arrow-left icon-gap"></i> Before This Level
    </p>
    <p style="margin:0; font-size:0.9rem; color:var(--text-secondary); line-height:1.5;">
      You see "multiple pricing types" and think <strong>"switch statement."</strong>
    </p>
  </div>
  <div style="padding:1rem 1.25rem; background:rgba(34,197,94,0.06); border:1px solid rgba(34,197,94,0.2); border-radius:0.75rem;">
    <p style="margin:0 0 0.5rem 0; font-weight:700; font-size:0.8rem; color:#86efac; text-transform:uppercase;">
      <i class="fa-solid fa-arrow-right icon-gap"></i> After This Level
    </p>
    <p style="margin:0; font-size:0.9rem; color:var(--text-secondary); line-height:1.5;">
      You smell "multiple algorithms, same interface" and instinctively reach for <strong>Strategy.</strong>
    </p>
  </div>
</div>
```

**Mobile (<640px):** `grid-template-columns: 1fr` (stacks vertically).
Add a `<style>` block in the page head or use inline `@media` via a reusable class.

### 17.6: Smell → Pattern Card

```html
<div style="padding:1rem 1.25rem; background:rgba(168,85,247,0.06); border:1px solid rgba(168,85,247,0.2); border-radius:0.75rem; margin:1rem 0;">
  <p style="margin:0; font-size:0.95rem;">
    👃 <strong>"The Multiple Algorithms Smell"</strong>
  </p>
  <p style="margin:0.5rem 0 0 0; font-size:0.9rem; color:var(--text-secondary);">
    When you see <em>3+ ways to do the same thing, each chosen at runtime</em> → reach for <strong>Strategy</strong>.
  </p>
</div>
```

### 17.7: Constraint Level Header

Each level in the Constraint Game starts with this:

```html
<!-- ========== LEVEL N ========== -->
<div class="section" id="level-N">
  <div class="section-header">
    <div class="section-icon {color}"><i class="fa-solid fa-{icon}"></i></div>
    <div>
      <div class="section-num">Level N <span style="font-size:0.7rem; padding:0.15rem 0.5rem; border-radius:999px; background:rgba({r},{g},{b},0.15); color:#{hex}; margin-left:0.5rem;">DIFFICULTY</span></div>
      <h2 class="section-title">Level Title</h2>
    </div>
  </div>

  <!-- The Constraint (one sentence) -->
  <div class="callout callout-blue">
    <i class="fa-solid fa-bullseye icon-gap"></i>
    <strong>New Constraint:</strong> "Motorcycles, cars, vans, and trucks need different sized spots."
  </div>

  <!-- What Breaks? -->
  <!-- Think First -->
  <!-- Internal Monologue -->
  <!-- What Would You Do? Fork -->
  <!-- Code Solution (diff + complete) -->
  <!-- Growing Diagram -->
  <!-- Before/After Brain -->
  <!-- Smell → Pattern (if applicable) -->
  <!-- Transfer (if applicable) -->
</div>
```

**Difficulty badges:**
- 🟢 Easy: `background:rgba(34,197,94,0.15); color:#86efac;`
- 🟡 Medium: `background:rgba(234,179,8,0.15); color:#fde047;`
- 🔴 Hard: `background:rgba(239,68,68,0.15); color:#fca5a5;`

### 17.8: Code Diff Display

For showing level-by-level code evolution:

```html
<p style="font-weight:600; font-size:0.95rem; margin-bottom:0.75rem;">
  <i class="fa-solid fa-code-compare icon-gap text-green"></i> What Changed (Level N-1 → Level N)
</p>
<div class="macos-window">
  <div class="macos-titlebar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="macos-filename">ParkingLot.cs — Diff</span>
  </div>
  <div class="macos-body">
<pre><code class="language-diff">  // Existing code (context)
  public class ParkingLot
  {
      private readonly Dictionary&lt;string, ParkingSpot&gt; _spots;
+     private readonly IPricingStrategy _pricing;      // NEW: Strategy injection
+     private readonly object _lock = new();            // NEW: Thread safety

      public ParkingLot(
          Dictionary&lt;string, ParkingSpot&gt; spots,
+         IPricingStrategy pricing                      // NEW: Constructor parameter
      )
      {
          _spots = spots;
+         _pricing = pricing;
      }

-     public decimal CalculateFee(TimeSpan duration)    // OLD: Hardcoded
-     {
-         return duration.Hours * 5.00m;
-     }
+     public decimal CalculateFee(ParkingTicket ticket) // NEW: Delegates to strategy
+     {
+         return _pricing.Calculate(ticket);
+     }
  }</code></pre>
  </div>
</div>
```

**Diff syntax:** Uses `language-diff` for Prism/highlight.js highlighting:
- Lines starting with `+` = additions (highlighted green by syntax highlighter)
- Lines starting with `-` = removals (highlighted red)
- Lines starting with ` ` (space) = context (unchanged)
- Comment annotations (`// NEW:`, `// OLD:`) explain WHY each change exists

After the diff, show complete current state in a collapsible:

```html
<div class="collapsible" style="margin-top:1rem;">
  <div class="collapsible-header" role="button" tabindex="0" aria-expanded="false">
    <span><i class="fa-solid fa-file-code icon-gap"></i> View Complete File (Level N)</span>
    <i class="fa-solid fa-chevron-down collapsible-chevron"></i>
  </div>
  <div class="collapsible-content">
    <div class="collapsible-body">
      <div class="macos-window"><!-- Full code here --></div>
    </div>
  </div>
</div>
```

### 17.9: Growing Diagram

**Approach:** 7 separate SVGs (one per level), each embedded inline in its level section. NOT layers or interactive toggles — simple, reliable, static SVGs.

**Consistency rules:**
- All 7 SVGs share the SAME `viewBox` dimensions (e.g., `viewBox="0 0 720 500"`)
- Entities that appear in Level 1 KEEP the same x,y position in all later SVGs
- New elements use accent color; existing elements use `var(--text-secondary)` (dimmed)
- New connections use colored dashed lines; existing connections use solid muted lines

**Level N SVG template:**
```html
<p style="font-weight:600; font-size:0.95rem; margin-bottom:0.75rem;">
  <i class="fa-solid fa-diagram-project icon-gap text-cyan"></i> Growing Diagram — After Level N
</p>
<div class="macos-window">
  <div class="macos-titlebar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="macos-filename">Class Diagram — Level N</span>
  </div>
  <div class="macos-body" style="padding:1.5rem; background:var(--bg-secondary);">
    <svg viewBox="0 0 720 500" xmlns="http://www.w3.org/2000/svg"
         style="width:100%; max-width:720px; display:block; margin:0 auto;"
         role="img" aria-labelledby="diagram-level-N-title">
      <title id="diagram-level-N-title">Class diagram after Level N</title>
      <defs><!-- shared markers and filters --></defs>

      <!-- EXISTING elements (dimmed) -->
      <g opacity="0.5">
        <!-- Level 0-{N-1} entities, same positions as always -->
      </g>

      <!-- NEW elements (bright, accent-colored) -->
      <g>
        <!-- Level N additions -->
      </g>
    </svg>
  </div>
</div>
```

**Dimming:** `opacity="0.5"` on the group containing existing elements. Simple, theme-safe.

### 17.10: Dual-Timeline Interview

Two-column layout using CSS grid, with tabs for Clean Run vs Realistic Run:

```html
<div class="tab-container">
  <div class="tab-header" role="tablist">
    <button class="tab-btn active" data-tab="interview-clean" role="tab" aria-selected="true">
      <i class="fa-solid fa-check-circle icon-gap"></i> The Clean Run
    </button>
    <button class="tab-btn" data-tab="interview-real" role="tab" aria-selected="false">
      <i class="fa-solid fa-rotate icon-gap"></i> The Realistic Run
    </button>
  </div>

  <div class="tab-panel active" id="interview-clean" role="tabpanel">
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th style="width:80px;">Time</th>
            <th>🧑‍💻 Candidate Says</th>
            <th>📋 Interviewer Thinks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>0:00</code></td>
            <td>"Before I start coding, let me clarify the scope..."</td>
            <td><span class="text-green">✅ Good — scoping first. Shows system thinking.</span></td>
          </tr>
          <!-- more rows -->
        </tbody>
      </table>
    </div>
  </div>

  <div class="tab-panel" id="interview-real" role="tabpanel">
    <!-- Same table structure but with stumbles, recovery moments -->
  </div>
</div>
```

**Mobile:** The `.table-wrapper` provides horizontal scroll. Table is readable at any width.
**Interviewer icons:** `✅` = positive, `🔶` = neutral, `🔴` = red flag (Unicode, no special markup needed).

### 17.11: Code Review Challenge (Bug Finding)

```html
<!-- The "candidate's code" with hidden bugs -->
<p style="font-weight:600; font-size:0.95rem; margin-bottom:0.5rem;">
  <i class="fa-solid fa-magnifying-glass icon-gap text-red"></i>
  Find 5 Bugs in This Code
</p>
<p class="body-text" style="margin-bottom:1rem;">
  This looks like a solid implementation. But there are exactly 5 bugs hiding in it.
  Read carefully before revealing the answers below.
</p>

<div class="macos-window">
  <div class="macos-titlebar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="macos-filename">CandidateSolution.cs</span>
  </div>
  <div class="macos-body">
<pre><code class="language-csharp">// Lines with bugs are NOT marked — reader must find them
public class ParkingLotService { ... }</code></pre>
  </div>
</div>

<!-- Bugs as numbered collapsibles -->
<div style="margin-top:1.5rem;">
  <p style="font-weight:600; margin-bottom:0.75rem;">Bugs Found:</p>

  <div class="collapsible" style="margin-bottom:0.5rem;">
    <div class="collapsible-header" role="button" tabindex="0" aria-expanded="false">
      <span><i class="fa-solid fa-bug icon-gap text-red"></i> Bug #1: Thread Safety</span>
      <i class="fa-solid fa-chevron-down collapsible-chevron"></i>
    </div>
    <div class="collapsible-content">
      <div class="collapsible-body">
        <p><strong>Line:</strong> <code>Dictionary&lt;string, ParkingSpot&gt;</code> on line 4</p>
        <p><strong>Problem:</strong> Regular Dictionary is not thread-safe. Multiple gates = concurrent access.</p>
        <p><strong>Fix:</strong> <code>ConcurrentDictionary&lt;string, ParkingSpot&gt;</code></p>
        <p><strong>Principle:</strong> Thread Safety (Level 3)</p>
      </div>
    </div>
  </div>

  <!-- Bugs #2-#5: same collapsible structure -->
</div>

<!-- Scoring -->
<div class="callout callout-blue" style="margin-top:1rem;">
  <strong>Score Yourself:</strong><br/>
  All 5: Senior-level thinking 🏆<br/>
  3-4: Solid mid-level 👍<br/>
  1-2: Review Levels 3 and 5
</div>
```

**Rules:**
- Code is presented WITHOUT bug markers (reader must find them)
- Each bug is a separate collapsible (reader reveals one at a time)
- Bugs ordered from most obvious to most subtle
- Each bug links back to the Constraint Game level that teaches the fix

### 17.12: Skill Unlocked Card

```html
<div class="concept-card" style="border-color:rgba(34,197,94,0.3); background:rgba(34,197,94,0.06);">
  <div class="concept-card-title" style="color:#86efac;">
    <i class="fa-solid fa-unlock"></i> Skill Unlocked: Real-World Walkthrough
  </div>
  <p class="concept-card-desc">
    Before touching code, walk through the PHYSICAL system. List every noun (→ entity),
    every action (→ method), every rule (→ constraint). You'll discover 80% of your design
    without writing a single line.
  </p>
</div>
```

Reuses existing `.concept-card` with green accent override.

---

## Part 18: Navigation, URLs & Page Architecture

### 18.1: URL Structure

```
lld/topics/case-studies/parking-lot/csharp.html    ← Main page
lld/topics/case-studies/parking-lot/java.html      ← Coming Soon placeholder
lld/topics/case-studies/elevator/csharp.html       ← Future
```

Follows the established pattern: `lld/topics/{category}/{topic}/{language}.html`

### 18.2: Sidebar Navigation

Case study pages use the SAME sidebar structure as pattern pages (defined in `page-spec.md`). The sidebar lists all 24 sections. The 8 Constraint Game levels (Sections 3-10) are indented as sub-items:

```html
<nav class="sidebar" id="sidebar" role="navigation" aria-label="Page sections">
  <div class="sidebar-title">
    <i class="fa-solid fa-bars sidebar-close" id="sidebar-close" role="button" tabindex="0" aria-label="Close navigation"></i>
    Parking Lot System
  </div>
  <ul class="sidebar-links">
    <li><a href="#tldr"><i class="fa-solid fa-bolt text-blue"></i> TL;DR</a></li>
    <li><a href="#real-world"><i class="fa-solid fa-eye text-yellow"></i> Real World</a></li>

    <!-- Constraint Game levels — visually grouped -->
    <li class="sidebar-group-label" style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase; padding:0.75rem 1rem 0.25rem; letter-spacing:0.05em;">
      The Constraint Game
    </li>
    <li><a href="#level-0" style="padding-left:1.75rem;"><i class="fa-solid fa-square-parking text-green"></i> L0: Park a Car</a></li>
    <li><a href="#level-1" style="padding-left:1.75rem;"><i class="fa-solid fa-car text-green"></i> L1: Vehicle Sizes</a></li>
    <!-- ... levels 2-7 ... -->
    <li><a href="#level-7" style="padding-left:1.75rem;"><i class="fa-solid fa-building text-cyan"></i> L7: Scale It</a></li>

    <li><a href="#full-code"><i class="fa-solid fa-code text-green"></i> Full Code</a></li>
    <!-- ... remaining sections ... -->
    <li><a href="#related"><i class="fa-solid fa-arrow-right text-blue"></i> Related</a></li>
  </ul>
</nav>
```

**Mobile:** Same hamburger menu behavior as pattern pages (existing JS handles this).

### 18.3: Deep Linking

Every level and section has a stable `id` attribute:
- Sections: `#tldr`, `#real-world`, `#full-code`, `#patterns`, `#evolution`, etc.
- Levels: `#level-0` through `#level-7`
- Specific elements: `#think-first-1` through `#think-first-15` (optional, for direct linking to challenges)

### 18.4: Cross-Page Links

Pattern pages link TO case studies:
```html
<!-- In Strategy pattern page, Section 24 (Related) -->
<a href="../../case-studies/parking-lot/csharp.html">
  Parking Lot — Strategy in action
</a>
```

Case studies link TO pattern pages:
```html
<!-- In Parking Lot case study, Section 24 (Related) -->
<a href="../../design-patterns/strategy/csharp.html">
  Strategy Pattern — Full deep dive
</a>
```

### 18.5: Hub Card Update

When a case study page is completed, update `lld/index.html`:

```html
<!-- BEFORE (Coming Soon) -->
<div class="lld-topic-card lld-topic-card--soon" data-tags="factory state singleton">
  <div class="lld-topic-status lld-topic-status--soon">Coming Soon</div>
  ...
</div>

<!-- AFTER (Ready) -->
<a href="topics/case-studies/parking-lot/csharp.html"
   class="lld-topic-card" data-tags="strategy factory singleton">
  <div class="lld-topic-status lld-topic-status--ready">
    <i class="fa-solid fa-check-circle"></i> Ready
  </div>
  ...
</a>
```

Changes: `<div>` → `<a>`, remove `--soon` class, add `href`, update `data-tags`, update status.

### 18.6: Page Head & Meta

```html
<!DOCTYPE html>
<html lang="en" data-theme="dark" data-accent="orange">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Parking Lot System — C# Design | System Guide</title>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🅿️</text></svg>"/>
  <link rel="stylesheet" href="../../../../shared/styles.css"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet"/>
  <style>
    /* Case-study-specific overrides (Before/After grid, etc.) */
    @media (max-width: 640px) {
      .before-after-grid { grid-template-columns: 1fr !important; }
    }
  </style>
</head>
```

**Accent:** `data-accent="orange"` (confirmed by user).
**Favicon:** 🅿️ emoji SVG (same pattern as all pages).

### 18.7: Page Performance

For a 7500-line page:
- **No lazy loading needed** — All content is static HTML/SVG. Browser handles scroll efficiently.
- **SVGs are inline** — No external image requests.
- **Syntax highlighting:** Uses Prism.js (already loaded via shared scripts). Code blocks highlight on DOM ready.
- **Scroll reveal:** Existing IntersectionObserver in scripts.js handles `.visible` class addition. Works fine at any page length.
- **Mobile:** Existing `min-width: 500px` on `.macos-body` ensures code blocks scroll horizontally rather than wrapping.
