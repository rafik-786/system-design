# 120-Day System Design Study Plan
**Daily commitment:** 2-3 hours | **Total:** ~300 hours
**Start:** March 17, 2026 | **End:** July 15, 2026

---

## How to use this plan
- Each day has a **Learn** block (concepts) and a **Practice** block (code/design)
- Check off each day as you complete it: `[ ]` → `[x]`
- If you miss a day, don't skip — just shift forward
- Weekends have lighter loads for breathing room

---

## Phase 1: SOLID Foundations (Days 1-7)
> You already have pages built for these. This is revision + deep understanding.

| Day | Topic | Learn (1-1.5h) | Practice (1h) |
|-----|-------|----------------|---------------|
| 1 | SRP | Single Responsibility — read your page, understand why classes should have one reason to change | Refactor a God class into SRP-compliant classes |
| 2 | OCP | Open/Closed — extending behavior without modifying source | Add a new payment type to existing code without touching old classes |
| 3 | LSP | Liskov Substitution — subtypes must be substitutable | Find and fix LSP violations (Square-Rectangle, Bird-Penguin) |
| 4 | ISP | Interface Segregation — no client should depend on methods it doesn't use | Split a fat interface into focused ones |
| 5 | DIP | Dependency Inversion — depend on abstractions, not concretions | Refactor hard-coded dependencies to use DI |
| 6 | Revision | Re-read all 5, focus on how they connect | Write a small app that follows all 5 SOLID principles |
| 7 | Rest day | Light review of notes | - |

---

## Phase 2: Starter Design Patterns (Days 8-22)
> Learn the 5 most common patterns + practice with 3 case studies.

| Day | Topic | Learn | Practice |
|-----|-------|-------|----------|
| 8 | Strategy | What, why, when — read your page | Implement payment strategy (Credit, PayPal, UPI) |
| 9 | Strategy Practice | Review S12 bugs, S13 pitfalls | **Parking Lot** case study — design classes |
| 10 | Singleton | Lazy init, thread safety, DI alternative | Implement thread-safe Singleton + understand why DI is better |
| 11 | Factory Method | Creator/Product hierarchy, when to use | Build a document creator (PDF, Word, Excel) |
| 12 | Factory + Practice | Factory vs Abstract Factory clarity | **Tic-Tac-Toe** — design with patterns |
| 13 | Observer | Subject/Observer, event-driven thinking | Build a stock price notifier |
| 14 | Observer Practice | Reactive extensions, event aggregator | **Vending Machine** — state + observer design |
| 15 | Template Method | Algorithm skeleton, hook methods | Build a data pipeline with Template Method |
| 16 | Practice Day | Revise all 5 patterns | **Snake & Ladder** — design from scratch |
| 17 | Practice Day | How patterns combine | **Shopping Cart** — which patterns? Design it |
| 18 | Practice Day | Review & Rating system | Design Review & Rating — Observer + Strategy |
| 19 | Practice Day | Logging Framework | Design a plugin-based logger |
| 20 | Practice Day | Plugin System | Design an extensible plugin architecture |
| 21 | Revision | All 5 patterns — explain each in 2 minutes | Write pattern selection flowchart from memory |
| 22 | Rest day | Light review | - |

---

## Phase 3: Structural Patterns (Days 23-35)
> How objects compose together.

| Day | Topic | Learn | Practice |
|-----|-------|-------|----------|
| 23 | Decorator | Wrapping behavior dynamically — read your page | Build a pizza/coffee ordering system with decorators |
| 24 | Adapter | Making incompatible interfaces work together | Wrap a 3rd-party API with an adapter |
| 25 | Facade | Simplifying complex subsystems | Build a home theater facade |
| 26 | Proxy | Controlling access — virtual, protection, remote | Implement a caching proxy + access control proxy |
| 27 | Composite | Tree structures, uniform leaf/node treatment | Build a file system (files + folders) |
| 28 | Practice | Notification System | Design multi-channel notification (Email, SMS, Push) |
| 29 | Practice | Library Management | Design with Composite + Strategy |
| 30 | Practice | Restaurant Management | Order, kitchen, billing — which patterns? |
| 31 | Practice | Task Management | Kanban board — State + Observer + Composite |
| 32 | Revision | All 5 structural patterns | Compare: Adapter vs Facade vs Proxy (know the differences cold) |
| 33 | Rest day | - | - |

---

## Phase 4: Remaining Behavioral Patterns (Days 34-48)
> The meaty patterns for interviews.

| Day | Topic | Learn | Practice |
|-----|-------|-------|----------|
| 34 | State | Object changes behavior based on internal state | Implement a traffic light / vending machine state |
| 35 | Command | Encapsulate requests as objects — undo/redo | Build a text editor with undo/redo |
| 36 | Chain of Responsibility | Pass request along a chain of handlers | Build a middleware pipeline / approval chain |
| 37 | Mediator | Centralized communication between objects | Build a chat room mediator |
| 38 | Iterator | Traverse collections without exposing internals | Custom iterator over a tree structure |
| 39 | Memento | Capture and restore object state | Add save/load to a game or editor |
| 40 | Practice | Traffic Signal system | State + Observer + Command |
| 41 | Practice | Elevator System | State + Strategy + Command |
| 42 | Practice | Movie Ticket Booking | Strategy + Observer + State |
| 43 | Practice | Digital Wallet | State + Command + Observer |
| 44 | Practice | Calendar App | Observer + Composite + Command |
| 45 | Practice | Chess Game | Strategy + State + Command + Composite |
| 46 | Revision | All 6 behavioral patterns | Explain when to use each — decision matrix |
| 47 | Rest day | - | - |

---

## Phase 5: Specialized Patterns + Creational Depth (Days 48-55)
> Less common but still asked.

| Day | Topic | Learn | Practice |
|-----|-------|-------|----------|
| 48 | Abstract Factory | Families of related objects — read your page | Build a cross-platform UI factory |
| 49 | Builder | Step-by-step construction, fluent API | Build a query builder / meal builder |
| 50 | Prototype | Cloning objects, deep vs shallow copy | Implement prototype registry |
| 51 | Bridge | Separate abstraction from implementation | Remote control + device example |
| 52 | Flyweight | Share common state to save memory | Text editor character rendering |
| 53 | Visitor | Add operations without modifying classes | Build a tax calculator visitor |
| 54 | Practice | ATM System + In-Memory File System | Design both from scratch |
| 55 | Revision + Rest | Review all 23 patterns | Pattern cheat sheet from memory |

---

## --- LLD COMPLETE (Day 55) --- HLD BEGINS ---

---

## Phase 6: HLD Fundamentals — Core Concepts (Days 56-70)
> The building blocks every system design answer needs.

| Day | Topic | Learn (1.5h) | Practice (1h) |
|-----|-------|-------------|---------------|
| 56 | System Design Basics | What is HLD, monolith vs microservices, vertical vs horizontal scaling | Draw architecture of a simple web app |
| 57 | CAP Theorem | Consistency, Availability, Partition Tolerance — you pick 2 | Classify real systems: is DynamoDB AP or CP? |
| 58 | PACELC + Consistency Models | If no Partition: latency vs consistency tradeoff | Compare: eventual vs strong vs causal consistency |
| 59 | Networking Basics | DNS, TCP/UDP, HTTP/HTTPS, WebSockets | Trace a request from browser to server and back |
| 60 | APIs | REST vs GraphQL vs gRPC, API design best practices | Design a REST API for a TODO app |
| 61 | Databases — SQL | ACID, normalization, indexing, joins, transactions | Design schema for an e-commerce product catalog |
| 62 | Databases — NoSQL | Key-Value, Document, Column-family, Graph — when to pick what | Same product catalog in MongoDB vs Cassandra — trade-offs |
| 63 | Database Scaling | Sharding (hash, range, geo), replication (leader-follower, multi-leader) | Shard a user table by userID — walk through edge cases |
| 64 | Caching | Cache-aside, write-through, write-back, TTL, eviction (LRU/LFU) | Add caching layer to an API — where and why |
| 65 | Redis Deep Dive | Data structures, pub/sub, persistence, clustering | Design a session store with Redis |
| 66 | CDN | How CDNs work, push vs pull, cache invalidation | Draw CDN architecture for a media-heavy site |
| 67 | Message Queues | Async processing, decoupling, at-least-once/exactly-once delivery | Compare RabbitMQ vs Kafka for an order system |
| 68 | Kafka Deep Dive | Topics, partitions, consumer groups, offset management | Design an event pipeline with Kafka |
| 69 | Load Balancing | L4 vs L7, algorithms (round-robin, least-connections, consistent hash) | Add load balancer to a 3-tier architecture |
| 70 | Revision | Review all fundamentals | Draw a complete system with all components labeled |

---

## Phase 7: HLD Fundamentals — Advanced Building Blocks (Days 71-84)

| Day | Topic | Learn | Practice |
|-----|-------|-------|----------|
| 71 | Proxies & Reverse Proxies | Forward vs reverse proxy, Nginx, API gateway | Design an API gateway for microservices |
| 72 | Rate Limiting | Token bucket, sliding window, leaky bucket algorithms | Design a rate limiter for a public API |
| 73 | Consistent Hashing | Hash ring, virtual nodes, rebalancing | Implement/draw consistent hashing for a distributed cache |
| 74 | Data Partitioning | Horizontal, vertical, directory-based | Partition strategy for WhatsApp messages |
| 75 | Replication | Single-leader, multi-leader, leaderless, quorum reads/writes | Design replication for a banking system |
| 76 | Distributed Consensus | Raft, Paxos (conceptual), leader election | Walk through a Raft leader election step-by-step |
| 77 | Bloom Filters + Count-Min Sketch | Probabilistic data structures — when and why | Where would you use a Bloom filter in a web crawler? |
| 78 | Heartbeat + Gossip Protocol | Failure detection in distributed systems | Design health checking for a 100-node cluster |
| 79 | Circuit Breaker + Retry | Resilience patterns, exponential backoff | Add resilience to a payment service |
| 80 | Event-Driven Architecture | Event sourcing, CQRS, event bus | Design an event-sourced order system |
| 81 | Microservices Patterns | Saga, service mesh, sidecar, strangler fig | Design a saga for a travel booking |
| 82 | Observability | Logging, metrics, tracing (OpenTelemetry) | Design a monitoring stack for microservices |
| 83 | Security | OAuth 2.0, JWT, HTTPS, encryption at rest/transit | Design auth flow for a multi-service system |
| 84 | Revision | Review all advanced blocks | Full component reference sheet from memory |

---

## Phase 8: HLD Case Studies — Tier 1 Easy (Days 85-94)
> The classics. These WILL be asked in interviews.

| Day | System | Key Concepts |
|-----|--------|-------------|
| 85 | **URL Shortener** | Hashing, base62, read-heavy, caching, analytics |
| 86 | **Paste Bin** | Object storage, TTL, content-addressable storage |
| 87 | **Rate Limiter** (design) | Token bucket at scale, distributed counting, Redis |
| 88 | **Key-Value Store** | Consistent hashing, replication, conflict resolution |
| 89 | **TinyURL + KV Store revision** | Re-do both from scratch in 35 mins each |
| 90 | **Notification System** | Push, SMS, email — fan-out, priority queues, templates |
| 91 | **Chat System (WhatsApp)** | WebSockets, message queue, presence, delivery receipts |
| 92 | **Chat System contd.** | Group chat, media, E2E encryption, offline sync |
| 93 | **News Feed (Twitter/X)** | Fan-out on write vs read, ranking, timeline service |
| 94 | **News Feed contd.** | Celebrity problem, caching, real-time updates |

---

## Phase 9: HLD Case Studies — Tier 2 Medium (Days 95-107)

| Day | System | Key Concepts |
|-----|--------|-------------|
| 95 | **Instagram** | Image storage, CDN, feed ranking, stories TTL |
| 96 | **YouTube** | Video upload pipeline, transcoding, adaptive streaming |
| 97 | **Google Drive / Dropbox** | File sync, chunking, deduplication, conflict resolution |
| 98 | **Web Crawler** | BFS/DFS, politeness, URL frontier, dedup, robots.txt |
| 99 | **Search Autocomplete** | Trie, top-K, offline pipeline, per-user personalization |
| 100 | **Search Engine** | Inverted index, ranking, crawl → index → serve |
| 101 | **Uber / Ride Sharing** | Geospatial index, matching, ETA, surge pricing |
| 102 | **Food Delivery (Zomato)** | Restaurant search, order tracking, delivery assignment |
| 103 | **Ticket Booking (BookMyShow)** | Seat locking, distributed transactions, payment |
| 104 | **E-Commerce (Amazon)** | Catalog, cart, inventory, order, payment pipeline |
| 105 | **Payment System** | Idempotency, double-entry ledger, reconciliation |
| 106 | **Hotel / Flight Booking** | Availability search, overbooking, reservation pattern |
| 107 | Revision | Re-attempt 3 weakest systems from scratch |

---

## Phase 10: HLD Case Studies — Tier 3 Hard (Days 108-116)

| Day | System | Key Concepts |
|-----|--------|-------------|
| 108 | **Distributed Cache (Memcached/Redis)** | Consistent hashing, eviction, cluster topology |
| 109 | **Message Queue (Kafka)** | Broker design, partition, replication, exactly-once |
| 110 | **Metrics & Logging (Datadog)** | Time-series DB, aggregation, alerting pipeline |
| 111 | **Google Maps** | Graph algorithms, tile rendering, shortest path at scale |
| 112 | **Collaborative Editor (Google Docs)** | OT vs CRDT, operational transform, cursor sync |
| 113 | **Stock Exchange** | Order matching engine, low-latency, sequencer |
| 114 | **Spotify / Music Streaming** | Audio CDN, recommendation, offline mode, DRM |
| 115 | **Distributed Job Scheduler** | Task queue, cron at scale, exactly-once execution |
| 116 | **Ad Click Aggregation** | Stream processing, MapReduce, real-time vs batch |

---

## Phase 11: Mock Interviews + Revision (Days 117-120)

| Day | Activity | Details |
|-----|----------|---------|
| 117 | **Mock LLD** | Pick 2 random case studies, solve each in 45 mins — classes, patterns, SOLID |
| 118 | **Mock HLD** | Pick 2 random systems, solve each in 35 mins — requirements → API → schema → architecture → deep dive |
| 119 | **Weak spots** | Re-study your 5 weakest topics (you'll know by now) |
| 120 | **Final mock** | 1 LLD + 1 HLD, fully timed, simulate real interview |

---

## Summary

| Phase | Days | Topics |
|-------|------|--------|
| 1. SOLID | 1-7 | 5 principles |
| 2. Starter Patterns + Practice | 8-22 | 5 patterns + 6 case studies |
| 3. Structural Patterns | 23-33 | 5 patterns + 4 case studies |
| 4. Behavioral Patterns | 34-47 | 6 patterns + 6 case studies |
| 5. Specialized + Creational | 48-55 | 7 patterns + 2 case studies |
| **LLD Done** | **Day 55** | **23 patterns + 5 SOLID + 18 case studies** |
| 6. HLD Fundamentals | 56-70 | 15 core concepts |
| 7. HLD Advanced Blocks | 71-84 | 14 advanced concepts |
| 8. HLD Easy Systems | 85-94 | 8 system designs |
| 9. HLD Medium Systems | 95-107 | 12 system designs |
| 10. HLD Hard Systems | 108-116 | 9 system designs |
| 11. Mock Interviews | 117-120 | 4 days of practice |
| **Total** | **120 days** | **23 patterns + 5 SOLID + 29 HLD concepts + 29 systems + 18 LLD cases** |

---

## Tips for 2-3 hours/day
1. **First 30 mins** — revise yesterday's topic (spaced repetition)
2. **Next 60-90 mins** — new topic (read, understand, draw diagrams)
3. **Last 30-60 mins** — practice (code for LLD, draw architecture for HLD)
4. **Keep a notebook** — write 1-line summaries of each topic, build your own cheat sheet
5. **If stuck on a day** — don't spend 3 hours grinding. Move on, revisit on the next rest day.
