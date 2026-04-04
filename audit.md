# SYSTEM GUIDE AUDIT PIPELINE

## CORE PROTOCOL (read this — the rest is reference)

You just generated content. Before presenting it, run this audit. The audit has 3 phases. Each phase produces a specific deliverable. Skip nothing.

---

### PHASE 1: QUOTE & JUDGE (mandatory — show your work)

For each check below, you MUST:
1. **QUOTE** the exact text/HTML from your output
2. **JUDGE** it against the rule
3. **FIX** if it fails — paste the corrected version

Do not write "Law 1: Pass." That's a lazy audit. Quote the actual sentence you're evaluating.

**Which checks to run depends on page type:**
- LLD Pattern Page → run checks marked [LLD]
- LLD Case Study → run checks marked [CASE]
- HLD Foundation → run checks marked [HLD]
- HLD Case Study → run checks marked [HLD-CS]
- All pages → run checks marked [ALL]

---

#### CHECK 1: First Sentences [ALL] — CRITICAL

Quote the first sentence of EVERY section in your output. For each one, answer:
- Contains a number? (yes/no)
- Describes pain/scenario? (yes/no)
- Opens with "X is a..." or any definition? (yes/no)

If ANY section opens definitionally → rewrite it before continuing.

```
EXAMPLE (from a real audit):

Section: The Scenario
QUOTED: "Your database is handling 100K reads/sec. Response time crossed 3 seconds."
  Number? ✅ (100K, 3 seconds)
  Pain? ✅ (response time degrading)
  Definition? ❌
  VERDICT: PASS

Section: How It Works
QUOTED: "Caching is a technique that stores frequently accessed data in faster storage."
  Number? ❌
  Pain? ❌
  Definition? ✅ ("is a technique that")
  VERDICT: FAIL → rewrite
  FIX: "Remember our 100K reads/sec problem? Here's the trick: what if the 1,000
  most popular items were already sitting in RAM? 100ns access instead of 4ms.
  That's what a cache does."
```

---

#### CHECK 2: Math Backing [ALL] — CRITICAL

Find every design decision in your output. Quote each one. Does it have math within 2 sentences?

```
EXAMPLE:

DECISION: "We add a cache layer to reduce database load."
MATH WITHIN 2 SENTENCES? → searching... "100K reads × 4ms = 400 CPU-seconds/sec"
VERDICT: PASS

DECISION: "We shard the database for scalability."
MATH WITHIN 2 SENTENCES? → searching... nothing found.
VERDICT: FAIL
FIX: Add "1B users × 8 bytes = 8GB (fits one node). But 6M writes/min = 100K
writes/sec. Single MySQL handles ~20K. THAT's why we shard — compute, not storage."
```

---

#### CHECK 3: Think First Challenges [ALL] — CRITICAL

Count every 🧠 Think First in your output. For each, quote it and answer:
- Has specific numbers/constraints? (yes/no)
- Comes BEFORE the reveal? (yes/no)
- Solvable in ~60 seconds? (yes/no)

Minimum counts: [LLD] 5+ | [CASE] 10+ | [HLD] 8+ | [HLD-CS] 10+

```
EXAMPLE:

🧠 #1: "Think about how you'd improve this."
  Specific? ❌ (no numbers, no constraints)
  VERDICT: FAIL → rewrite
  FIX: "🧠 Think First: You have 4 shards. Keys route via key % 4. Shard #3
  dies. You switch to key % 3. What percentage of ALL keys now map to a
  different shard? How much data physically moves?"
```

---

#### CHECK 4: Iterations [ALL] — CRITICAL

Count how many versions/approaches are shown for the core concept. Quote the transition between each (the moment the previous version breaks).

Minimum: 3 iterations with numbers showing why each previous version fails.

```
EXAMPLE:

VERSION 1: "Single server handles all requests"
BREAK POINT QUOTED: "At 10K users: 4.2s response time. 4× our 1-second SLA."
VERSION 2: "Add read replicas"
BREAK POINT QUOTED: "At 100K users: replica lag hits 8 seconds. Users see stale data."
VERSION 3: "Shard by user_id with consistent hashing"
VERDICT: PASS (3 iterations, each break has numbers)
```

---

#### CHECK 5: Structural Scan [ALL] — CRITICAL

Search your output for these exact strings. Report what you find:

```
SEARCH: "tab-content"    FOUND: [yes/no, count]  → if yes, replace ALL with "tab-panel"
SEARCH: "data-target="   FOUND: [yes/no, count]  → if yes, replace ALL with "data-tab="
SEARCH: "tab-nav"        FOUND: [yes/no, count]  → if yes, replace ALL with "tab-header"
SEARCH: "table-wrap"     FOUND: [yes/no, count]  → if yes, verify it's "table-wrapper" not "table-wrap"
SEARCH: "collapsible-toggle" FOUND: [yes/no]      → if yes, replace with "collapsible-header"
SEARCH: "â€"" or "â†'"   FOUND: [yes/no]          → if yes, fix encoding
SEARCH: "<rect transform=\"rotate(45" FOUND: [yes/no] → if yes, replace with <polygon>
```

Then verify: each section present uses the correct component type (see REFERENCE A).

---

#### CHECK 6: Memory Anchors [ALL] — MAJOR

Fill in these 4 blanks from your content. If you can't fill one, add it.

```
THE ANALOGY the reader will borrow:   "[                                        ]"
THE NUMBER the reader will cite:       "[                                        ]"
THE SURPRISE that violates expectation:"[                                        ]"
THE WARNING they'll remember:          "[                                        ]"
```

If any blank is empty → add the missing anchor to the content before continuing.

---

#### CHECK 7: Filler Scan [ALL] — MAJOR

Quote any paragraph that matches these filler patterns:

```
PATTERN                SIGNAL PHRASES
The Restater           "In other words..." / "Put simply..." / "Essentially..."
The Hedger             "It's worth noting..." / "It's important to mention..."
The Connector          "Now let's look at..." / "Moving on to..." / "Next we'll..."
The Disclaimer         "There are many ways..." / "This is just one approach..."
The Vague Motivator    "This is really useful..." / "This comes up a lot..."
```

For each match: delete it, or rewrite it to earn its place (add specificity/numbers/insight).

---

#### CHECK 8: Unique Content [ALL] — MAJOR

Quote 3 examples/analogies from your content. For each, answer: "Could this appear in ByteByteGo, Grokking, or the first page of Google for this topic?"

```
EXAMPLE:

QUOTED: "Think of a cache like a library's front desk keeping copies of popular books."
COULD APPEAR IN BYTEBYTEGO? → Yes, this is the most common caching analogy on Earth.
VERDICT: FAIL → replace with a specific, real example no other resource uses.

QUOTED: "Run redis-cli INFO replication. See master_repl_offset: 48291847. That's bytes
written to the replication stream. Compare with slave_repl_offset on the replica.
The gap? That's your replication lag in bytes, right now, on your server."
COULD APPEAR IN BYTEBYTEGO? → No. This is specific, runnable, unique.
VERDICT: PASS
```

---

#### CHECK 9: Anti-Lesson [ALL] — MAJOR

Quote your anti-lesson section (when NOT to use this concept). Answer:
- Is it more than 2 sentences? (yes/no)
- Does it name a real company/system? (yes/no)
- Does it show real consequences of misuse? (yes/no)

All three must be yes. If any is no → expand the anti-lesson.

---

#### CHECK 10: Hostile Read [ALL] — MAJOR

Read your content wearing a "hostile senior engineer" hat. Quote any claim where a senior engineer would say "well, actually..." and add the caveat.

```
EXAMPLE:

QUOTED: "Redis is single-threaded, which means it's simple and fast."
HOSTILE RESPONSE: "Well, actually — I/O threads exist since Redis 6. And 'simple'
is misleading; Redis's event loop is sophisticated. The single-threaded claim
applies to command execution, not the entire server."
FIX: "Redis executes commands on a single thread — no locks, no context switches,
pure speed. (Since Redis 6, I/O is multi-threaded, but command execution stays
single-threaded.)"
```

---

### PHASE 2: SCORE & VERDICT

After all checks, calculate:

```
CHECK  │ WEIGHT │ YOUR SCORE │ WEIGHTED
───────┼────────┼────────────┼─────────
C1  First Sentences    │ ×15 │ pass=15, fail=0  │
C2  Math Backing       │ ×15 │ pass=15, fail=0  │
C3  Think Firsts       │ ×10 │ (count/minimum)×10│
C4  Iterations         │ ×10 │ 3+=10, 2=5, 1=0  │
C5  Structural         │ ×10 │ 0 issues=10, any=0│
C6  Memory Anchors     │ ×10 │ (filled/4)×10    │
C7  Filler             │ ×5  │ 0 filler=5, any=-N│
C8  Unique Content     │ ×10 │ (unique/3)×10    │
C9  Anti-Lesson        │ ×5  │ all 3 yes=5      │
C10 Hostile            │ ×10 │ 0 issues=10, -3/ea│
────────────────────────┼─────┼──────────────────
TOTAL                        │            /100

85-100 → PASS ✅
65-84  → CONDITIONAL ⚠️  (ship, but note remaining issues)
<65    → FAIL ❌  (do not present — fix and re-audit)
```

---

### PHASE 3: FEEDBACK LOOP (mandatory deliverable)

This is NOT optional. Produce this table:

```
NEW MISTAKES FOUND:
│ Mistake │ Which MD │ Entry to Add │
├─────────┼──────────┼──────────────┤
│ [desc]  │ [file]   │ [exact text] │

RECURRING MISTAKES (already in MDs but agent did it anyway):
│ Mistake │ Which MD │ Existing Rule # │
├─────────┼──────────┼─────────────────┤
│ [desc]  │ [file]   │ [#]             │
```

**Where to update:**

| Mistake Type | File | Section |
|-------------|------|---------|
| CSS/HTML class bug | design-reference.md | "Key Mistakes Made" (continue numbering) |
| Component misuse | design-reference.md | "Section Component Rules" |
| Section title | design-reference.md | "Section title mistakes" |
| Layout mistake | design-reference.md | "Content/layout mistakes" |
| .NET version | project-state.md | ".NET Version Attribution Cheat Sheet" |
| Pattern misattribution | project-state.md | "Pattern Attribution Rules" |
| Encoding bug | project-state.md | "COMMON MISTAKES" section 26 |
| Writing/tone issue | hld-spec.md | "Quality Checklist" Part 8 |
| Case study structure | case-study-spec.md | Relevant part template |
| New audit pattern | THIS FILE | Relevant check + reference appendix |

**Entry format** (matches existing MDs):

```markdown
### [Category] Fix (Applied YYYY-MM-DD)
- **Pages affected**: [list]
- **Bug**: [what was wrong]
- **Fix**: [what's correct]
- **Rule**: NEVER [X]. ALWAYS [Y]. [Why in one sentence.]
```

If no new mistakes → write "No new patterns. All issues were pre-documented." This confirms the feedback loop was checked.

---

---

# WORKED EXAMPLE: FULL AUDIT OF A REAL SECTION

Here's what a complete audit looks like on a hypothetical "Caching Strategies" HLD section. Study this — it's the quality bar.

---

```
AUDIT: Caching Strategies — Sections S1-S4 (The Scenario through Variations)
DATE: 2026-03-20

═══════════════════════════════════════════════════
PHASE 1: QUOTE & JUDGE
═══════════════════════════════════════════════════

CHECK 1: First Sentences
─────────────────────────
S1 (TL;DR):
  QUOTED: "Caching = a faster, smaller copy. Fresh enough is good enough."
  Number? ❌  Pain? ❌  Definition? ❌ (it's a mental model — correct for TL;DR)
  VERDICT: PASS (TL;DR is exempt from pain-first — it's a crystallized model)

S2 (The Scenario):
  QUOTED: "Your database is handling 100K reads per second. Response time
  just crossed 3 seconds. Users are leaving. You've already added 5 read
  replicas and they're all at 92% CPU."
  Number? ✅ (100K, 3s, 5 replicas, 92%)
  Pain? ✅ (users leaving, CPUs maxed)
  Definition? ❌
  VERDICT: PASS ✅

S3 (The First Attempt):
  QUOTED: "Your first instinct: add more read replicas. You're at 5,
  let's go to 10."
  Number? ✅ (5→10)
  Pain? ✅ (implied — this won't work)
  Definition? ❌
  VERDICT: PASS ✅

S4 (The Breakthrough):
  QUOTED: "Caching is a mechanism that stores copies of frequently accessed data
  in a faster storage layer to reduce read latency."
  Number? ❌
  Pain? ❌
  Definition? ✅ ← "is a mechanism that" = TEXTBOOK OPENING
  VERDICT: ❌ FAIL

  FIX: "What if the 1,000 most-requested items were already sitting in RAM?
  Your DB does 4ms per read. RAM does 100 nanoseconds. That's 40,000× faster.
  Instead of asking the database 100K times per second, you ask it once —
  and serve the other 99,999 from memory. That's caching."

CHECK 2: Math Backing
─────────────────────
DECISION: "We add a cache layer."
  MATH WITHIN 2 SENTENCES: "100K reads/sec × 4ms = 400 CPU-seconds per second.
  With 95% cache hit ratio: only 5K reads hit DB. 5K × 4ms = 20 CPU-seconds."
  VERDICT: PASS ✅

DECISION: "We use cache-aside over write-through."
  MATH WITHIN 2 SENTENCES: searching... not found.
  VERDICT: ❌ FAIL
  FIX: Add "Our read:write ratio is 50:1. Cache-aside optimizes reads (cache on miss).
  Write-through would write to cache on EVERY write — 2K writes/sec hitting cache
  unnecessarily. For read-heavy (>10:1), cache-aside wins."

CHECK 3: Think Firsts
─────────────────────
Count: 4 found. Minimum for HLD: 8. ❌ SHORT BY 4.

🧠 #1: "You have 100K reads/sec and 5 replicas at 92% CPU. What do you try?"
  Specific? ✅  Before reveal? ✅  60-second solvable? ✅
  VERDICT: PASS

🧠 #2: "Think about how caching helps."
  Specific? ❌ (no numbers, no constraints)
  VERDICT: FAIL → rewrite to: "🧠 Your cache has space for 10,000 items.
  Your catalog has 2 million products. What percentage of items should you
  cache? How do you decide WHICH 10,000? What hit ratio do you expect?"

🧠 #3, #4: [similar evaluation]

ACTION: Need to add 4 more Think Firsts in sections S3, S4, and S5.

CHECK 4: Iterations
────────────────────
V1: "Add more read replicas" (5→10)
  BREAK: "10 replicas × $800/mo = $8,000. And replication lag is now 6 seconds."
V2: "Add application-level caching (in-process)"
  BREAK: "Each of your 8 API servers has its own cache. 8× memory, 8× stale."
V3: "Centralized Redis cache with cache-aside"
  BREAK: "Cache stampede — 1,000 requests for the same expired key hit DB simultaneously."
V4: "Redis with stampede protection (locking + stale-while-revalidate)"
  No break — this is the production answer.
VERDICT: PASS ✅ (4 iterations with numbers at each break)

CHECK 5: Structural Scan
─────────────────────────
SEARCH "tab-content":    0 found ✅
SEARCH "data-target=":   0 found ✅
SEARCH "tab-nav":        0 found ✅
SEARCH "table-wrap":     1 found → verified it's "table-wrapper" ✅
SEARCH "â€"":            0 found ✅
SEARCH "rotate(45":      0 found ✅
Component types: S9 uses when-use-grid ✅, S12 uses card+tab ✅
VERDICT: PASS ✅

CHECK 6: Memory Anchors
────────────────────────
ANALOGY: "A cache is a photocopy of a popular library book kept at the front desk"
  → ❌ GENERIC. Everyone uses this. Replace with something specific.
  FIX: "A cache is like the specials board at a busy restaurant. The full menu
  is in the kitchen (database). But the 5 dishes 80% of customers order? Written
  on a board right at the entrance. Faster to read, and the kitchen updates it
  whenever the chef changes a recipe."
  → Actually, still not unique enough. Better:
  FIX: "CricBuzz stores 12KB per cricket match in Redis. During an IPL final,
  50 million people are reading the same 12KB. Without the cache, that's 50M
  database queries for identical data. With it, one query every 2 seconds."
  → ✅ REAL, SPECIFIC, MEMORABLE.

NUMBER: "40,000× faster (RAM vs disk: 100ns vs 4ms)" ✅
SURPRISE: "Random eviction barely hurts hit ratio at scale (Arpit's production story)" ✅
WARNING: "GitHub Gists — files accessed 5-50 times. Caching 10MB files in Redis?
  You'd burn $500/mo in RAM to save 12ms. Don't cache that." ✅

VERDICT: PASS after fix (3/4 had to fix 1)

CHECK 7: Filler Scan
─────────────────────
FOUND: "Now let's look at the different caching strategies available."
  → FILLER (The Connector). Section header already says "The Variations."
  → DELETE.

FOUND: "It's important to understand that caching has trade-offs."
  → FILLER (The Hedger). Every reader knows this. The next paragraph shows the trade-offs.
  → DELETE.

FOUND: 2 filler paragraphs out of 34 total = 5.8% → PASS (<20%)

CHECK 8: Unique Content
────────────────────────
EXAMPLE 1: "Like a library's front desk" → ByteByteGo? YES. FAIL. (already fixed in C6)
EXAMPLE 2: "CricBuzz 12KB per match, 50M reads" → ByteByteGo? NO. PASS. ✅
EXAMPLE 3: "redis-cli INFO stats — instantaneous_ops_per_sec shows your current
throughput. Run it. If it's >80K on a single instance, you're approaching limits."
  → ByteByteGo? NO. This is runnable, specific. PASS. ✅

CHECK 9: Anti-Lesson
─────────────────────
QUOTED: "GitHub Gists: files typically accessed 5-50 times total. Average file: 10MB.
Caching them in Redis? 10,000 Gists × 10MB = 100GB of RAM. At AWS pricing: $500/month.
Saved latency: ~12ms per access. Total accesses saved: maybe 200K/month.
Cost per millisecond saved: $0.21. That's insane. Arpit explicitly rejected caching
for this system."
  > 2 sentences? ✅
  Names a real system? ✅ (GitHub Gists)
  Real consequences? ✅ ($500/mo for 12ms)
  VERDICT: PASS ✅

CHECK 10: Hostile Read
──────────────────────
QUOTED: "Redis handles about 100K operations per second."
HOSTILE: "That depends hugely on operation type, pipeline usage, value size, and
whether you're using cluster mode. Simple GETs with small values and pipelining
can hit 500K+. Large values or complex operations: much less."
FIX: "A single Redis instance handles ~100K simple GET/SET operations per second
with default configuration. With pipelining, this jumps to 500K+. Complex operations
(sorted set ranges, Lua scripts) are slower — benchmark YOUR workload."

═══════════════════════════════════════════════════
PHASE 2: SCORE
═══════════════════════════════════════════════════

CHECK  │ WEIGHT │ SCORE │ WEIGHTED
───────┼────────┼───────┼─────────
C1     │ ×15    │ 1 fail of 4 sections, fixed → 15 │ 15
C2     │ ×15    │ 1 of 2 decisions had math, fixed → 15 │ 15
C3     │ ×10    │ 4/8 minimum, need to add 4 → 5 │ 5
C4     │ ×10    │ 4 iterations ✅ → 10 │ 10
C5     │ ×10    │ 0 issues → 10 │ 10
C6     │ ×10    │ 3/4 filled, 1 fixed → 10 │ 10
C7     │ ×5     │ 2 filler deleted → 5 │ 5
C8     │ ×10    │ 2/3 unique → 7 │ 7
C9     │ ×5     │ all 3 yes → 5 │ 5
C10    │ ×10    │ 1 issue fixed → 7 │ 7
─────────────────────────────────────
TOTAL                          │ 89/100

VERDICT: PASS ✅ (after fixes applied during audit)

═══════════════════════════════════════════════════
PHASE 3: FEEDBACK LOOP
═══════════════════════════════════════════════════

NEW MISTAKES:
│ Mistake                          │ MD File         │ Entry                              │
├──────────────────────────────────┼─────────────────┼────────────────────────────────────┤
│ Definition-first in Breakthrough │ hld-spec.md     │ ### Breakthrough Opening Fix       │
│ section (the ONE section that    │                 │ (Applied 2026-03-20)               │
│ should never be definitional)    │                 │ - Bug: "Caching is a mechanism..." │
│                                  │                 │ - Rule: NEVER open The Breakthrough│
│                                  │                 │   with a definition. This is the   │
│                                  │                 │   AHA moment — it must SHOW the    │
│                                  │                 │   insight through an example.      │

RECURRING MISTAKES:
│ Mistake                          │ MD File         │ Rule #                │
├──────────────────────────────────┼─────────────────┼───────────────────────┤
│ Generic library analogy          │ hld-spec.md     │ Law 1 (example given) │
│ (already documented as bad)      │                 │ Add ⚠️ RECURRING tag  │

═══════════════════════════════════════════════════
```

---

---

# REFERENCE A: SECTION COMPONENT TYPES (for Check 5)

```
Section │ Correct Component                         │ Never Use
────────┼───────────────────────────────────────────┼──────────────────
S9      │ when-use-grid + when-item                 │ table, grid-2
S10     │ comparison-grid + vs-badge                │ table, grid-2
S11     │ table-wrapper > table + badges            │ grid-2 with cards
S12     │ card → tab-container (Buggy/Fix)          │ grid-2, stacked
S13     │ collapsible (Mistake/Why/Fix)             │ card accordion
S14     │ card accordion                            │ tab-container
S15     │ card accordion (first open)               │ tab-container
S16     │ callout callout-purple prose              │ grid-2 + callouts
S18     │ exercise-card + collapsible               │ card accordion
S19     │ cheat-card in grid-3                      │ plain cards
S20     │ card accordion (first open)               │ tab-container
S21     │ card → nested tab-container in #3         │ outer tab-container
S24     │ related-grid + related-card               │ grid-3 + callouts
```

---

# REFERENCE B: CARD OPEN/CLOSED STATES (for Check 5)

```
Section │ First    │ Rest
────────┼──────────┼──────────
S3      │ open     │ callout-info
S7      │ open     │ closed
S8      │ closed   │ closed
S12     │ closed   │ closed
S13     │ closed   │ closed (collapsibles)
S15     │ open     │ closed
S20     │ open     │ closed
S21     │ open(#1) │ closed
```

---

# REFERENCE C: CSS CLASS NAMES (for Check 5)

```
✅ CORRECT           │ ❌ WRONG (breaks functionality)
─────────────────────┼──────────────────────────────
tab-panel            │ tab-content, tabpanel, tab-pane
data-tab=            │ data-target=, data-panel=
tab-header           │ tab-nav, tab-buttons
tab-btn active       │ tab-button, tab-link
table-wrapper        │ table-wrap, table-container
<table> (bare)       │ <table class="table">
collapsible-header   │ collapsible-toggle, collapsible-trigger
```

---

# REFERENCE D: .NET VERSIONS (for LLD pages)

```
Feature              │ Correct              │ Common Mistake
─────────────────────┼──────────────────────┼────────────────
DbProviderFactory    │ .NET 2.0 (2005)      │ .NET 1.0
out/in variance      │ .NET 4.0 / C# 4.0   │ .NET 2.0
MEF                  │ .NET 4.0 (2010)      │ .NET 3.5
Built-in DI          │ .NET Core 1.0 (2016) │ —
Keyed services       │ .NET 8 (2023)        │ earlier
FrozenDictionary     │ .NET 8 (2023)        │ —
Primary constructors │ C# 12 / .NET 8       │ —
Covariant returns    │ C# 9 / .NET 5        │ interfaces (classes only)
```

---

# REFERENCE E: PATTERN ATTRIBUTION (for LLD pages)

```
Pattern          │ True Signature                              │ NOT This
─────────────────┼─────────────────────────────────────────────┼──────────────
Abstract Factory │ Multiple product types, swappable families  │ Single product = Factory Method
Factory Method   │ Single product, subclass decides            │ Multiple = Abstract Factory
Builder          │ Step-by-step, fluent, Build()               │ Ready-made = Factory
Strategy         │ Swappable algorithms, same interface        │ Creates objects = Factory
Observer         │ One-to-many notification                    │ Bidirectional = Mediator
State            │ Behavior changes with internal state        │ External swap = Strategy
Decorator        │ Wraps to add behavior                       │ Wraps to simplify = Facade

Known .NET misattributions:
  ILoggerFactory         → Factory Method, NOT Abstract Factory
  IHostBuilder           → Builder, NOT Abstract Factory
  IDistributedCache      → Strategy, NOT Abstract Factory
  WebApplicationFactory  → Test fixture, NOT Abstract Factory
  AuthenticationBuilder  → Builder, NOT Abstract Factory
```

---

# REFERENCE F: MINIMUM COUNTS

```
                    │ LLD Pattern │ LLD Case Study │ HLD Foundation │ HLD Case Study
────────────────────┼─────────────┼────────────────┼────────────────┼───────────────
Think Firsts        │ 5-10        │ 10-15          │ 8-15           │ 10-20
Iterations          │ 3+ (S21)    │ 7-8 levels     │ 3-5 versions   │ V1→V2→V3→VF
SVG Diagrams        │ 12+         │ 20+            │ 15-40          │ 25-40
Tooltips            │ 50+         │ 60+            │ 30+            │ 40+
Q&As                │ 29+         │ 25+            │ 50-100         │ 30-50
Bug Studies (S12)   │ 6+          │ 5+             │ —              │ —
Pitfalls (S13)      │ 10+         │ —              │ —              │ —
Exercises (S18)     │ 4+          │ 3-5            │ 3-5            │ 3-5
Cross-references    │ 5+          │ 5+             │ 5+             │ all concepts used
```

---

# REFERENCE G: FILLER PATTERNS

```
Pattern              │ Signal Phrases                              │ Action
─────────────────────┼─────────────────────────────────────────────┼────────
The Restater         │ "In other words" / "Put simply"             │ Delete
The Hedger           │ "It's worth noting" / "Important to mention"│ Delete hedge, keep content
The Connector        │ "Now let's look at" / "Moving on"           │ Delete (header IS the transition)
The Summarizer       │ Summary after <5 paragraph section           │ Delete
The Universal Truth  │ "System design is critical for engineers"    │ Delete
The Disclaimer       │ "There are many ways" / "Just one approach"  │ Delete
The Repeat           │ Same idea in paragraph N and N+2             │ Merge into stronger version
The Vague Motivator  │ "Really useful in practice" / "Comes up a lot"│ Replace with specific example
```

---

# REFERENCE H: MISCONCEPTIONS TO CATCH

```
Topic                │ Misconception                    │ Correct
─────────────────────┼──────────────────────────────────┼─────────────────────────
CAP Theorem          │ "Pick 2 of 3"                    │ Always have P. Choose C or A during partition.
Sharding             │ "For big data"                   │ Often for compute, not storage.
Microservices        │ "Better than monoliths"          │ Monoliths win for small teams.
NoSQL                │ "Scales better than SQL"         │ SQL scales fine without FK/cross-shard txns.
Eventual Consistency │ "Will be consistent eventually"  │ Only if writes stop. Might be never.
Redis                │ "Just a cache"                   │ Data structure server with persistence.
Singleton            │ "Global variable"                │ DI-managed singletons are testable.
Strategy             │ "Just polymorphism"              │ RUNTIME algorithm swap vs compile-time type.
```

---

*This pipeline is alive. Every audit makes it smarter. The bar only goes up.*