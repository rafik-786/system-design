# Extra Components — System Guide

> Use these when **core components don't fit**. These are specialized visualizations.
> Numbers match `component-test.html`.

---

## Layout Extras

| # | Name | Tag | Purpose |
|---|------|-----|---------|
| 8 | TL;DR Card | `.tldr-card` | Quick summary at top of section |
| 9 | Level Badge | `.level-progress` | Learning progress indicators |
| 10 | Compare Table | `.compare-table` | Feature comparison matrix |

---

## Callout Extras

| # | Name | Tag | Purpose |
|---|------|-----|---------|
| 16 | Monologue | `.monologue` | Internal thought process narration |
| 17 | Smell Card | `.smell-card` | Code smell identification |
| 18 | Myth Buster | `<sg-myth>` | Myth vs Truth format |
| 19 | What-If Card | `<sg-whatif>` | "What if X fails?" scenario with recovery |
| 20 | Proof Block | `<sg-proof>` | Given → Therefore → Conclusion |

---

## Code Extras

| # | Name | Tag | Purpose |
|---|------|-----|---------|
| 24 | Git Diff | `<sg-diff>` | Code diff with +/- lines |
| 26 | Debug Template | `<sg-debug>` | Observe → Hypothesize → Verify walkthrough |
| 29 | Version Compare | `.version-compare` | .NET 6 vs .NET 8 side-by-side |

---

## Data Extras

| # | Name | Tag | Purpose |
|---|------|-----|---------|
| 33 | Cost Calc | `<sg-cost-calc>` | AWS/cloud cost breakdown table |
| 36 | Scorecard | `<sg-scorecard>` | Interview performance gauge rings |
| 37 | Dashboard | `<sg-dashboard>` | Metric cards (QPS, latency, error rate) |
| 38 | Learning Progress | `.learning-progress` | Segment bar showing topic coverage |
| 39 | Capacity Grid | `.capacity-grid` | Input → Output capacity calculation |
| 40 | SLA Calc | `.sla-calc` | Uptime percentage calculator |
| 42 | Concept Map | `.concept-map` | Topic relationship graph |
| 43 | Prereq Check | `.prereq-check` | Prerequisites checklist with done/todo |
| 45 | Company Card | `<sg-company>` | Real company tech stack + lesson |
| 46 | Enum Display | `.enum-display` | Enum values with descriptions |

---

## Interactive Extras

| # | Name | Tag | Purpose |
|---|------|-----|---------|
| 47 | Tradeoff Slider | `<sg-tradeoff>` | Consistency ↔ Availability spectrum |
| 48 | Architecture Diff | `<sg-arch-diff>` | Before/After architecture text |
| 49 | Evolution Stepper | `<sg-evolution>` | System scaling v1→v2→v3 with break points |
| 51 | Interview Chat | `<sg-chat>` | Mock interview conversation with scores |
| 52 | A/B Split | `.ab-split` | A/B test traffic distribution |
| 53 | Feature Rollout | `.feature-rollout` | Canary/blue-green deployment viz |
| 54 | Complexity Badges | `.complexity-badge` | O(n) complexity indicators |
| 55 | Design Decision | `.design-decision` | Decision rationale with alternatives |

---

## System Design Visualizations

| # | Name | Tag | Purpose |
|---|------|-----|---------|
| 57 | Storage Visualizer | `<sg-storage>` | Disk page/block layout |
| 59 | Packet Viewer | `<sg-packet>` | TCP/UDP packet field layout |
| 60 | Schema Viewer | `<sg-schema>` | Database table schema with PK/FK |
| 61 | API Viewer | tabs + `.api-viewer` | REST endpoint with headers + JSON body |
| 62 | Log Viewer | `<sg-logs>` | Colorized INFO/WARN/ERROR/FATAL |
| 63 | Error Block | `<sg-error>` | PostgreSQL/system error display |
| 64 | Query Plan | `<sg-query-plan>` | EXPLAIN query plan tree |
| 65 | Pipeline | `<sg-pipeline>` | CI/CD stages with status + durations |
| 67 | Cache Sim | `.cache-sim` | Cache HIT/MISS simulation |
| 68 | Rate Viz | `<sg-rate-limit>` | Token bucket visualization |
| 69 | Circuit State | `<sg-circuit>` | Circuit breaker Closed→Open→Half-Open |
| 70 | MQ Viz | `<sg-mq>` | Producer → Queue → Consumer |
| 71 | Shard Map | `<sg-shard-map>` | Shard distribution with load % |
| 72 | Connection Pool | `.connection-pool` | Pool utilization visualization |
| 73 | Cascade Viz | `.cascade-viz` | Cascading failure spread |
| 74 | Lock Viz | `.lock-viz` | Distributed lock timeline |
| 75 | Bloom Filter | `.bloom-filter` | Probabilistic membership test |
| 76 | Hash Ring | `.hash-ring` | Consistent hashing ring |
| 77 | Write Amplification | `.write-amp` | LSM tree write amplification |
| 78 | Network Topology | `.network-topo` | Star/mesh/ring network layout |
| 79 | DNS Trace | `.dns-trace` | DNS resolution path |
| 80 | HTTP Lifecycle | `.http-lifecycle` | Request → Response flow |
| 81 | Retry Viz | `.retry-viz` | Exponential backoff timeline |
| 82 | Event Timeline | `.event-timeline` | Time-ordered event sequence |
| 83 | CQRS Flow | `.cqrs-flow` | Command/Query separation diagram |
| 84 | Service Map | `.service-map` | Service-to-service connections |
| 85 | Consensus Viz | `.consensus-viz` | Raft/Paxos voting rounds |
| 86 | Replication Lag | `.replication-lag` | Primary → Replica delay |
| 87 | B+ Tree Nav | `<sg-btree>` | Interactive B+ tree search with animation |
| 88 | Merkle Tree Diff | `.merkle-diff` | Hash tree comparison |
| 89 | Docker Compose | `.docker-compose` | Container orchestration layout |

---

## LLD Components

| # | Name | Tag | Purpose |
|---|------|-----|---------|
| 90 | Class Card | `.class-card` | UML-style class with fields + methods |
| 91 | Interface Contract | `.interface-contract` | Interface method signatures |
| 92 | Inheritance Tree | `.inheritance-tree` | Class hierarchy visualization |
| 93 | Composition Viz | `.composition-viz` | Has-a relationship diagram |
| 94 | State Machine | `.state-machine` | State transition diagram |
| 95 | Method Call Chain | `.method-chain` | Method execution trace |
| 96 | Pattern Card | `.pattern-card` | Design pattern summary (Intent/When/Participants) |
| 97 | SOLID Indicator | `.solid-indicator` | SOLID principle badges |
| 98 | Responsibility Map | `.responsibility-map` | SRP responsibility visualization |
| 99 | Coupling Meter | `.coupling-meter` | Coupling score gauge |
| 100 | Object Lifecycle | `.object-lifecycle` | Create → Use → Dispose flow |
| 101 | DI Flow | `.di-flow` | Container → Register → Resolve |
| 102 | Test Case Card | `.test-card` | Unit test input/expected/actual |
| 103 | Decorator Viz | `.decorator-viz` | Decorator wrapping layers |
| 104 | Observer Event Flow | `.observer-flow` | Publisher → Subscriber events |
| 105 | Factory Viz | `.factory-viz` | Factory method class diagram |
| 106 | Memory Layout | `.memory-layout` | Stack/Heap memory visualization |
| 107 | Thread Safety | `.thread-safety` | Thread contention diagram |
| 108 | Dependency Direction | `.dep-direction` | Clean Architecture layer dependencies |

---

## Merged Components (no longer separate)

| Was | Merged Into | Use Instead |
|-----|-------------|-------------|
| Callout Trap | Callout | `<sg-callout type="trap">` |
| Callout Insight | Callout | `<sg-callout type="insight">` |
| Interview Tip | Callout | `<sg-callout type="tip">` |
| Key Takeaway | Callout | `<sg-callout type="takeaway">` |
| Rule Card | Callout | `<sg-callout type="rule">` |
| Concept Card | Callout | `<sg-callout type="concept">` |
| Anti-Pattern Card | Callout | `<sg-callout type="trap">` |
| Pros/Cons Split | Comparison Grid | `<sg-compare>` |
| Bandwidth Estimator | Estimation Calc | `<sg-estimate>` |
| Before/After Grid | Architecture Diff | `<sg-arch-diff>` |
| Decision Compass | Callout | `<sg-callout type="insight">` |
| Code Review Comment | Code Walkthrough | `.code-walkthrough` |
| Annotated Diagram | — | Use inline SVGs + tooltips |
