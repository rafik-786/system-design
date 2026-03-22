# Extra Components — System Guide

> Use these when **core components don't fit**. These are specialized visualizations
> for specific system design or LLD topics.

---

## System Design Visualizations

| # | Component | Tag | Used For |
|---|-----------|-----|----------|
| 14 | Tradeoff Slider | `<sg-tradeoff>` | Consistency vs Availability spectrum |
| 15 | Architecture Diff | `<sg-arch-diff>` | Before/After architecture text |
| 16 | Evolution Stepper | `<sg-evolution>` | System scaling progression (v1→v2→v3) |
| 18 | Storage Visualizer | `<sg-storage>` | Disk page/block layout |
| 21 | Packet Viewer | `<sg-packet>` | TCP/UDP packet field layout |
| 22 | Schema Viewer | `<sg-schema>` | Database table schema with PK/FK |
| 26 | Query Plan | `<sg-query-plan>` | EXPLAIN query plan tree |
| 27 | Dashboard | `<sg-dashboard>` | Metrics dashboard (QPS, latency, errors) |
| 34 | Debug Template | `<sg-debug>` | Observe → Hypothesize → Verify steps |
| 35 | Myth Buster | `<sg-myth>` | Myth vs Truth |
| 36 | What-If Card | `<sg-whatif>` | "What if X fails?" scenario |
| 37 | Company Card | `<sg-company>` | Real company tech stack + lesson |
| 40 | Git Diff | `<sg-diff>` | Code diff with +/- lines |
| 44 | Cache Sim | — | Cache HIT/MISS simulation |
| 45 | Rate Viz | `<sg-rate-limit>` | Token bucket visualization |
| 46 | Circuit State | `<sg-circuit>` | Circuit breaker state machine |
| 47 | MQ Viz | `<sg-mq>` | Message queue producer → consumer |
| 48 | Shard Map | `<sg-shard-map>` | Database shard distribution |
| 49 | Cost Calc | `<sg-cost-calc>` | AWS/cloud cost breakdown table |
| 50 | Learning Progress | — | Level progression bar |
| 51 | Compare Table | — | Feature comparison table |
| 52 | Consensus Viz | — | Raft/Paxos voting visualization |
| 53 | Replication Lag | — | Primary → Replica delay |
| 54 | Connection Pool | — | Pool utilization viz |
| 55 | Cascade Viz | — | Cascading failure spread |
| 56 | Lock Viz | — | Distributed lock timeline |
| 57 | Bloom Filter | — | Probabilistic membership test |
| 58 | Hash Ring | — | Consistent hashing ring |
| 59 | Write Amplification | — | LSM tree write amp |
| 60 | Network Topology | — | Star/mesh/ring topology |
| 61 | DNS Trace | — | DNS resolution path |
| 62 | HTTP Lifecycle | — | Request → Response flow |
| 63 | Retry Viz | — | Exponential backoff timeline |
| 64 | Event Timeline | — | Time-ordered event sequence |
| 65 | CQRS Flow | — | Command/Query separation |
| 66 | Service Map | — | Service-to-service connections |
| 67 | Feature Rollout | — | Canary/blue-green deployment |
| 68 | A/B Split | — | A/B test traffic split |
| 69 | SLA Calc | — | Uptime percentage calculator |
| 70 | Capacity Grid | — | Input → Output capacity calc |
| 73 | B+ Tree Nav | `<sg-btree>` | Interactive B+ tree search |
| 74 | Merkle Tree Diff | — | Hash tree comparison |
| 75 | Docker Compose | — | Container orchestration viz |
| 77 | Concept Map | — | Topic relationship graph |
| 78 | Prereq Check | — | Prerequisites checklist |

---

## LLD-Specific Components

| # | Component | Tag | Used For |
|---|-----------|-----|----------|
| 13 | Math Stepper | `<sg-math-steps>` | Step-by-step calculations |
| 33 | Proof Block | `<sg-proof>` | Given → Therefore → Conclusion |
| 80 | Class Card | — | UML-style class display |
| 81 | Interface Contract | — | Interface method signatures |
| 82 | Inheritance Tree | — | Class hierarchy tree |
| 83 | Composition Viz | — | Has-a relationship diagram |
| 84 | State Machine | — | State transition diagram |
| 85 | Method Call Chain | — | Method execution trace |
| 86 | Pattern Card | — | Design pattern summary card |
| 88 | SOLID Indicator | — | SOLID principle badges |
| 89 | Responsibility Map | — | SRP responsibility visualization |
| 90 | Coupling Meter | — | Coupling score gauge |
| 91 | Object Lifecycle | — | Create → Use → Dispose flow |
| 92 | DI Flow | — | Dependency injection container flow |
| 93 | Test Case Card | — | Unit test input/expected/actual |
| 95 | Monologue | — | Internal thought process narration |
| 96 | Smell Card | — | Code smell detection card |
| 97 | Decorator Viz | — | Decorator wrapping visualization |
| 98 | Observer Event Flow | — | Publisher → Subscriber event flow |
| 99 | Factory Viz | — | Factory method class diagram |
| 100 | Design Decision | — | Decision rationale card |
| 101 | Complexity Badges | — | O(n) complexity indicators |
| 105 | Memory Layout | — | Stack/Heap memory visualization |
| 106 | Thread Safety | — | Thread contention diagram |
| 107 | Version Compare | — | .NET version side-by-side |
| 108 | Dependency Direction | — | Clean Architecture layer deps |
| 112 | TL;DR Card | — | Quick summary card |
| 114 | Level Badge | — | Learning progress badges |
| 120 | Enum Display | — | Enum values with descriptions |

---

## Removed/Merged Components
| Old # | Was | Merged Into |
|-------|-----|-------------|
| 38 | Callout Trap | Callout `type="trap"` |
| 71 | Callout Insight | Callout `type="insight"` |
| 76 | Bandwidth Estimator | Estimation Calc |
| 79 | Annotated Diagram | Inline SVGs + tooltips |
| 102 | Interview Tip | Callout `type="tip"` |
| 103 | Rule Card | Callout `type="rule"` |
| 104 | Anti-Pattern Card | Callout `type="trap"` |
| 113 | Before/After Grid | Architecture Diff |
| 115 | Concept Card | Callout `type="concept"` |
| 116 | Decision Compass | Callout |
| 117 | Code Review Comment | Code Walkthrough |
| 118 | Pros/Cons Split | Comparison Grid |
| 119 | Key Takeaway | Callout `type="takeaway"` |
