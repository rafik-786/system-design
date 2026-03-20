# Component Selection Guide — Which Component for Which Content

> **Rule:** Before writing ANY section, scan this guide. Pick the BEST component for the content, not the easiest.

---

## BY CONTENT TYPE

### When you're explaining HOW something works step-by-step:
| Content | Component | Why |
|---------|-----------|-----|
| Data flowing through a pipeline | `.flow-stepper` | Reader clicks through each hop, sees state at each step |
| Protocol exchange (TCP handshake, TLS, DNS) | `.sequence-diagram` | Shows message arrows between participants with timing |
| Mathematical derivation | `.math-stepper` | Each step shows operation + result + WHY |
| Proof/reasoning chain | `.proof-block` | Given → Therefore → Conclusion with mathematical rigor |
| Back-of-envelope calculation | `.estimation-calc` | Structured grid: label × value = result, with WHY per row |
| Version evolution (V1 → V2 → V3) | `.evolution-stepper` | Timeline with break points showing WHY each version fails |

### When you're showing WHAT something looks like in real life:
| Content | Component | Why |
|---------|-----------|-----|
| Database table structure | `.schema-viewer` | pgAdmin-style with PK/FK highlighting |
| API request/response | `.api-viewer` | Postman-style with method badges, status codes |
| Log output | `.log-viewer` | CloudWatch-style with color-coded levels |
| Terminal command + output | `.macos-window` | Existing component — dark terminal with dots |
| Error message | `.error-block` | Real PostgreSQL/MySQL/HTTP error styling |
| Network packet fields | `.packet-viewer` | Wireshark-style field layout |
| Query execution plan | `.query-plan` | EXPLAIN tree with color-coded node types |
| Config file changes | `.git-diff` or `.config-diff` | Red/green diff for before/after |
| Multiple source files | `.multi-file` | IDE-style tabs for switching between files |

### When you're COMPARING two or more things:
| Content | Component | Why |
|---------|-----------|-----|
| Trade-off between two extremes | `.tradeoff-slider` | Visual spectrum with marker |
| Before/after architecture | `.arch-diff` | Side-by-side with highlighted changes |
| Feature comparison table | `.compare-table` | Color-coded wins (green) and losses (red) |
| Myth vs reality | `.myth-buster` | Strikethrough myth → bold reality → evidence |
| Two code approaches (bad/good) | Tab container (existing) | Side-by-side tabbed code |
| PostgreSQL vs MySQL vs Redis | `.compare-table` | Multi-column with color coding |

### When you're showing REAL company data:
| Content | Component | Why |
|---------|-----------|-----|
| Company's tech stack + scale | `.company-card` | Logo, stats, stack, key lesson |
| System metrics in production | `.dashboard` | Grafana-style QPS, latency, error rate |
| Interview scoring rubric | `.scorecard` | Criteria, rating badges, notes |
| Cost breakdown | `.cost-calc` | Line items with subtotals and total |

### When you're teaching the reader to THINK:
| Content | Component | Why |
|---------|-----------|-----|
| "What would happen if X fails?" | `.whatif-card` | Trigger → consequence → recovery, collapsible |
| "Test your understanding" | `.knowledge-check` | Radio options with reveal + explanation |
| Problem-solving template | `.debug-template` | Structured: symptom → change → where → fix |
| Interview Q&A | `.interview-chat` | Chat bubbles with score feedback |
| Common trap to avoid | `.callout-trap` | Danger-striped, more alarming than callout-danger |
| Key insight to remember | `.callout-insight` | Gold lightbulb, stands out from regular callouts |

### When you're showing DATA STRUCTURES or STORAGE:
| Content | Component | Why |
|---------|-----------|-----|
| Memory/disk layout (pages, blocks) | `.storage-viz` | Colored horizontal blocks with percentages |
| Relative speeds/latencies | `.latency-ruler` | Proportional bars from green (fast) to red (slow) |
| B+ tree traversal | `.btree-nav` | Clickable tree levels showing search path |
| Shard distribution | `.shard-map` | Grid with load/size per shard, hot shards highlighted |
| Bloom filter bits | `.bloom-viz` | Bit array with hash positions colored |
| Consistent hashing ring | `.hash-ring` | Circular ring with nodes and data points |

### When you're showing DISTRIBUTED SYSTEMS behavior:
| Content | Component | Why |
|---------|-----------|-----|
| Consensus/leader election | `.consensus-viz` | Nodes in ring with leader/follower states |
| Replication lag | `.repl-lag` | Primary → Replica with timing delay |
| Connection pool state | `.conn-pool` | Active/idle/waiting connections |
| Cascading failure | `.cascade-viz` | Domino chain of services failing |
| Lock contention | `.lock-viz` | Transactions waiting on resources |
| Circuit breaker states | `.circuit-state` | Three-state machine with transitions |
| Message queue depth | `.mq-viz` | Producer → Queue → Consumer with depth |
| Cache hit/miss pattern | `.cache-sim` | Entries with HIT (green) / MISS (red) |

### When you're showing PROGRESS or NAVIGATION:
| Content | Component | Why |
|---------|-----------|-----|
| Learning path position | `.learning-progress` | Segmented bar: done/current/upcoming |
| Concept prerequisites | `.prereq-check` | Checklist with understood/study-first |
| Topic dependency graph | `.dep-graph` | Horizontal chain: done → current → locked |
| CI/CD stages | `.pipeline` | Pass/running/fail/pending stages |
| Feature rollout percentage | `.feature-rollout` | Progress bar with stage labels |

---

## BY SECTION TYPE (which components go in which section)

| Section | Primary Components | Why |
|---------|-------------------|-----|
| S1 TL;DR | SVG mental model, `callout-insight`, `.tradeoff-slider` | Crystallize the concept visually |
| S2 Scenario | `.dashboard` (showing the problem), `.log-viewer` (showing errors), SVG | Make the reader FEEL the pain with real metrics |
| S3 First Attempt | `.macos-window` (code that fails), `.error-block` | Show the naive approach breaking |
| S4 Where It Breaks | `.cascade-viz`, `.whatif-card`, `.math-stepper` (failure math) | Prove with numbers WHY it fails |
| S5 Breakthrough | `.evolution-stepper`, `.arch-diff`, `.proof-block` | Show the AHA moment visually |
| S6 How It Works | `.flow-stepper`, `.sequence-diagram`, `.schema-viewer`, `.packet-viewer` | Deep mechanics with real artifacts |
| S7 Going Deeper | `.btree-nav`, `.storage-viz`, `.consensus-viz`, `.proof-block` | Internals visualization |
| S8 Variations | `.compare-table`, `.tradeoff-slider` | Compare options with trade-offs |
| S9 At Scale | `.company-card`, `.dashboard`, `.cost-calc` | Real company data |
| S10 Anti-Lesson | `.myth-buster`, `.callout-trap`, `.whatif-card` | Debunk misconceptions vividly |
| S11 Common Mistakes | `.error-block`, `.git-diff` (bad→good config), `.callout-trap` | Show real errors and fixes |
| S12 Interview Playbook | `.interview-chat`, `.scorecard`, `.estimation-calc` | Simulate real interviews |
| S13 Exercises | `.knowledge-check`, `.debug-template`, `.macos-window` | Interactive practice |
| S14 Cheat Cards | `.cheat-card` (existing), `.formula-float` | Quick reference |
| S15 Connected Topics | `.dep-graph`, `.concept-map`, `.learning-progress` | Navigation |

---

## QUICK DECISION FLOWCHART

```
Is it a step-by-step process?
├── Protocol/network exchange? → .sequence-diagram
├── Data pipeline flow? → .flow-stepper
├── Math calculation? → .math-stepper or .estimation-calc
├── Logical proof? → .proof-block
└── System evolution? → .evolution-stepper

Is it showing real-world output?
├── Database structure? → .schema-viewer
├── API call? → .api-viewer
├── Error message? → .error-block
├── Logs? → .log-viewer
├── Query plan? → .query-plan
├── Terminal command? → .macos-window
├── Config change? → .git-diff or .config-diff
└── Packet/frame? → .packet-viewer

Is it a comparison?
├── Two extremes? → .tradeoff-slider
├── Before/after? → .arch-diff
├── Multiple options? → .compare-table
├── Myth vs truth? → .myth-buster
└── Code bad/good? → tab-container

Is it about distributed systems?
├── Consensus? → .consensus-viz
├── Replication? → .repl-lag
├── Sharding? → .shard-map or .hash-ring
├── Failure cascade? → .cascade-viz
├── Locking? → .lock-viz
├── Circuit breaker? → .circuit-state
└── Queue depth? → .mq-viz

Is it teaching the reader to think?
├── "What if X fails?" → .whatif-card
├── Quiz? → .knowledge-check
├── Debugging exercise? → .debug-template
├── Interview practice? → .interview-chat
├── Key warning? → .callout-trap
└── Key insight? → .callout-insight
```

---

*Every page agent MUST read this guide before building content.*
