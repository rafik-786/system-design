# The 110-Day System Design Mastery Plan

**314 topics. 110 days. One unstoppable engineer.**

You don't need to memorize 314 topics. You need to *understand* how systems work — from a single class to a planet-scale service. This plan builds your knowledge like a skyscraper: foundations first, then floor by floor, until you're designing systems that handle millions of users without breaking a sweat.

**How to use this plan:**
- Spend 2-4 hours per day (adjust to your pace)
- Each day lists 2-5 topics grouped by theme
- LLD and HLD are interleaved so you see patterns at both scales
- Check off each day as you complete it
- If a day feels heavy, split it across two sittings — never skip

**What "Type" means:**
- **LLD** = Low-Level Design (classes, patterns, OOP — C#/.NET focused)
- **HLD** = High-Level Design (distributed systems, architecture — language-agnostic)
- **LLD+HLD** = Mixed day (both levels)

---

## Phase 1: The Ground Floor (Days 1-8)
*Core principles, SOLID, and networking. Everything else builds on this.*

| Day | Topics | Type | Difficulty |
|-----|--------|------|------------|
| 1 | How to Approach SD, Scalability, Reliability | HLD | Easy |
| 2 | Availability, Performance, CAP Theorem | HLD | Easy |
| 3 | ACID vs BASE, Back-of-Envelope Estimation, SRP | HLD+LLD | Easy |
| 4 | OCP, LSP, ISP, DIP | LLD | Easy |
| 5 | Internet Basics, DNS, TCP & UDP | HLD | Easy |
| 6 | HTTP Evolution, REST API Design, Webhooks | HLD | Easy |
| 7 | Real-time Protocols, Proxies, Serialization Formats | HLD | Easy |
| 8 | Compression, Relational DBs, Isolation & Locking | HLD | Easy |

> **Phase 1: 28 topics** (5 LLD + 23 HLD) | Running total: 28

---

## Phase 2: Creational Patterns + Databases & NoSQL (Days 9-17)
*How objects are born, how data is stored.*

| Day | Topics | Type | Difficulty |
|-----|--------|------|------------|
| 9 | Singleton, Schema Design, SQL Tuning | LLD+HLD | Easy |
| 10 | Factory Method, Scaling DBs, Sharding | LLD+HLD | Easy-Med |
| 11 | Abstract Factory, DB Internals, WAL | LLD+HLD | Medium |
| 12 | Builder, MongoDB, Redis Deep Dive | LLD+HLD | Medium |
| 13 | Prototype, Cassandra, Neo4j | LLD+HLD | Medium |
| 14 | Elasticsearch, Time-Series DBs, NewSQL | HLD | Medium |
| 15 | Picking DBs, Polyglot Persistence, Caching Strategies | HLD | Medium |
| 16 | Eviction Internals, Cache Invalidation, CDN | HLD | Medium |
| 17 | Caching Levels, Message Queues, Kafka Deep Dive | HLD | Medium |

> **Phase 2: 29 topics** (5 LLD + 24 HLD) | Running total: 57

---

## Phase 3: Structural Patterns + Messaging & Load Balancing (Days 18-24)
*How objects compose, how traffic flows.*

| Day | Topics | Type | Difficulty |
|-----|--------|------|------------|
| 18 | Decorator, Pub/Sub, Async Patterns | LLD+HLD | Easy-Med |
| 19 | Adapter, Stream Processing, Real-Time Analytics | LLD+HLD | Medium |
| 20 | Bridge, Composite, Load Balancers | LLD+HLD | Medium |
| 21 | Facade, API Gateway, Rate Limiting (HLD) | LLD+HLD | Medium |
| 22 | Flyweight, Circuit Breaker (HLD), Idempotency | LLD+HLD | Medium |
| 23 | Proxy, Consistency Models, Consensus | LLD+HLD | Medium |
| 24 | Clocks & Ordering, Consistent Hashing, Bloom Filters | HLD | Medium |

> **Phase 3: 22 topics** (7 LLD + 15 HLD) | Running total: 79

---

## Phase 4: Behavioral Patterns + Distributed Fundamentals (Days 25-35)
*How objects interact, how distributed systems stay sane.*

| Day | Topics | Type | Difficulty |
|-----|--------|------|------------|
| 25 | Observer, ID Generation, Distributed Locking | LLD+HLD | Medium |
| 26 | Strategy, Leader Election, Failure Detection | LLD+HLD | Medium |
| 27 | Template Method, Distributed Transactions | LLD+HLD | Medium-Hard |
| 28 | Chain of Responsibility, Command, S3/Blob Storage | LLD+HLD | Medium |
| 29 | Iterator, Mediator, Distributed FS | LLD+HLD | Medium |
| 30 | Memento, State, Tiered Storage | LLD+HLD | Medium |
| 31 | Interpreter, Visitor, Batch Processing | LLD+HLD | Medium |
| 32 | ETL & CDC, Data Warehousing, Monolith vs Micro | HLD | Medium |
| 33 | Event-Driven (HLD), Service Mesh, Communication (HLD) | HLD | Medium |
| 34 | Migration Patterns, Multi-Region, Multi-Tenancy | HLD | Medium |
| 35 | Anti-Patterns (HLD), Auth (HLD), TLS/Encryption | HLD | Medium |

> **Phase 4: 33 topics** (11 LLD + 22 HLD) | Running total: 112

---

## Phase 5: Security, Observability, Infrastructure + Starter Cases (Days 36-47)
*The support systems, then your first real designs.*

| Day | Topics | Type | Difficulty |
|-----|--------|------|------------|
| 36 | API Security, Zero Trust, Logging (HLD), Metrics | HLD | Medium |
| 37 | Tracing, Alerting, Containers & K8s | HLD | Medium |
| 38 | CI/CD (HLD), Deployment, Serverless, IaC | HLD | Medium |
| 39 | Parking Lot, Online/Offline Indicator, Recent Searches | LLD+HLD | Easy |
| 40 | Tic-Tac-Toe, Vending Machine, Leaderboard | LLD+HLD | Easy |
| 41 | Snake & Ladder, PasteBin, Shopping Cart (LLD) | LLD+HLD | Easy |
| 42 | Review & Rating, URL Shortener (HLD), Rate Limiter (HLD) | LLD+HLD | Easy |
| 43 | LRU Cache, Abuse Masker, Polling/Voting | LLD+HLD | Easy |
| 44 | Logging Framework, Comment System, Unread Count | LLD+HLD | Easy |
| 45 | Plugin System, E-commerce Listing, CricBuzz Commentary | LLD+HLD | Easy |
| 46 | Image Hosting, Feature Flags, Config Management | HLD | Easy |
| 47 | Concurrency Patterns, Unit Testing Patterns | LLD | Medium |

> **Phase 5: 40 topics** (11 LLD + 29 HLD) | Running total: 152

---

## Phase 6: Advanced LLD Topics + Intermediate Case Studies Begin (Days 48-58)
*Level up your LLD toolkit, then tackle harder systems.*

| Day | Topics | Type | Difficulty |
|-----|--------|------|------------|
| 48 | DI Deep Dive, Repository & Unit of Work | LLD | Medium |
| 49 | Refactoring Patterns, Reflection & Metaprogramming | LLD | Medium |
| 50 | DDD Tactical Patterns, CQRS | LLD | Medium-Hard |
| 51 | Clean Architecture, Event-Driven Architecture (LLD) | LLD | Medium-Hard |
| 52 | ATM System, Flash Sale | LLD+HLD | Medium |
| 53 | Deck of Cards, Notification System (HLD) | LLD+HLD | Medium |
| 54 | Traffic Signal, Tinder | LLD+HLD | Medium |
| 55 | Library Management, Load Balancer (HLD) | LLD+HLD | Medium |
| 56 | Hotel Booking, Web Crawler | LLD+HLD | Medium |
| 57 | Movie Ticket Booking, Distributed Cache | LLD+HLD | Medium |
| 58 | Elevator System, Key-Value Store (HLD) | LLD+HLD | Medium |

> **Phase 6: 24 topics** (14 LLD + 10 HLD) | Running total: 176

---

## Phase 7: Intermediate Case Studies Continued (Days 59-68)
*Real-world systems at both levels. Hitting your stride.*

| Day | Topics | Type | Difficulty |
|-----|--------|------|------------|
| 59 | Car Rental, Task Scheduler (HLD) | LLD+HLD | Medium |
| 60 | Restaurant Management, S3 Object Storage | LLD+HLD | Medium |
| 61 | Task Management, Recommendation | LLD+HLD | Medium |
| 62 | Digital Wallet (LLD), Fraud Detection | LLD+HLD | Medium |
| 63 | Notification System (LLD), Typeahead | LLD+HLD | Medium |
| 64 | Calendar App, Proximity Service, Digital Wallet (HLD) | LLD+HLD | Medium |
| 65 | Inventory Management, Payment System (HLD), A/B Testing | LLD+HLD | Medium |
| 66 | In-Memory File System, Rate Limiter (LLD), Logging System (HLD) | LLD+HLD | Medium |
| 67 | Pub-Sub Messaging (LLD), Monitoring System (HLD), CI/CD Pipeline (HLD) | LLD+HLD | Medium |
| 68 | Course Registration, Minesweeper, Message Queue (Kafka) (HLD) | LLD+HLD | Medium |

> **Phase 7: 30 topics** (14 LLD + 16 HLD) | Running total: 206

---

## Phase 8: Remaining Intermediate + Specialized LLD Begin (Days 69-76)
*Finishing intermediate, entering specialized territory.*

| Day | Topics | Type | Difficulty |
|-----|--------|------|------------|
| 69 | Support Ticketing, Online Examination, CDN Design | LLD+HLD | Medium |
| 70 | Locking Service, Data Pipeline, Ad Click Aggregation | HLD | Medium |
| 71 | Ad Serving, Appointment Booking, Employee Management | HLD+LLD | Medium |
| 72 | Payroll System, Permission/RBAC, Order & Delivery | LLD | Medium |
| 73 | Ticket Booking, Flight Booking, Video Platform | LLD | Medium |
| 74 | Streaming Service, Blog/CMS, Smart Home | LLD | Medium |
| 75 | Thermostat Control, Whiteboard App, Spreadsheet | LLD | Medium-Hard |
| 76 | HashMap, Thread Pool, Connection Pool | LLD | Medium-Hard |

> **Phase 8: 24 topics** (16 LLD + 8 HLD) | Running total: 230

---

## Phase 9: Remaining Specialized LLD + E-Commerce & Transport HLD (Days 77-83)
*Specialized systems and planet-scale commerce.*

| Day | Topics | Type | Difficulty |
|-----|--------|------|------------|
| 77 | Authentication (LLD), URL Shortener (LLD), Key-Value Store (LLD), Autocomplete (LLD) | LLD | Medium |
| 78 | Multi-Tenant SaaS, Amazon, Shopping Cart (HLD) | LLD+HLD | Medium-Hard |
| 79 | Product Search, Order Management, Inventory (HLD) | HLD | Medium |
| 80 | Coupons/Promos, Auction (eBay), Marketplace (Airbnb) | HLD | Hard |
| 81 | Google Search, News Feed, Trending/Hashtags, News Aggregator | HLD | Hard |
| 82 | Uber/Lyft, DoorDash/Zomato, Google Maps | HLD | Hard |
| 83 | Geofencing, Package Tracking, EV Charging, Parking Finder | HLD | Medium-Hard |

> **Phase 9: 25 topics** (6 LLD + 19 HLD) | Running total: 255

---

## Phase 10: Advanced LLD + Social HLD (Days 84-90)
*Chess, Uber, Twitter. The interview gauntlet begins.*

| Day | Topics | Type | Difficulty |
|-----|--------|------|------------|
| 84 | Chess Game, Twitter/X | LLD+HLD | Hard |
| 85 | Splitwise, Instagram | LLD+HLD | Hard |
| 86 | Online Shopping (LLD), Facebook Feed | LLD+HLD | Hard |
| 87 | Ride-Sharing (Uber) (LLD), TikTok | LLD+HLD | Hard |
| 88 | Music Streaming, Reddit | LLD+HLD | Hard |
| 89 | Stock Brokerage, LinkedIn | LLD+HLD | Hard |
| 90 | Food Delivery, Twitter Trends | LLD+HLD | Hard |

> **Phase 10: 14 topics** (7 LLD + 7 HLD) | Running total: 269

---

## Phase 11: Advanced LLD Continued + Messaging & Media HLD (Days 91-95)
*More advanced LLD cases paired with messaging and streaming platforms.*

| Day | Topics | Type | Difficulty |
|-----|--------|------|------------|
| 91 | Airline Management, WhatsApp (HLD), Slack | LLD+HLD | Hard |
| 92 | Social Network (LLD), Discord, Zoom | LLD+HLD | Hard |
| 93 | Sports Scoring, Gmail, In-App Chat | LLD+HLD | Hard |
| 94 | Online Auction, YouTube, Netflix (HLD) | LLD+HLD | Hard |
| 95 | Payment Gateway, Spotify (HLD), Twitch | LLD+HLD | Hard |

> **Phase 11: 15 topics** (5 LLD + 10 HLD) | Running total: 284

---

## Phase 12: Final Advanced LLD + Collaboration & E-Commerce HLD (Days 96-98)
*Event sourcing, collaboration tools, and planet-scale commerce.*

| Day | Topics | Type | Difficulty |
|-----|--------|------|------------|
| 96 | Chat App (WhatsApp) (LLD), Collaborative Editor, Video Pipeline | LLD+HLD | Hard |
| 97 | Job Scheduler (LLD), Social Media Feed (LLD), Podcast Platform | LLD+HLD | Hard |
| 98 | Circuit Breaker (LLD), Workflow Engine, Shazam, Clubhouse | LLD+HLD | Hard |

> **Phase 12: 10 topics** (5 LLD + 5 HLD) | Running total: 294

---

## Phase 13: Final LLD + Finance & Booking HLD (Days 99-103)
*The last LLD patterns and real-world finance/booking systems.*

| Day | Topics | Type | Difficulty |
|-----|--------|------|------------|
| 99 | Rules Engine, Event Sourcing (LLD), Dropbox | LLD+HLD | Hard |
| 100 | Google Docs, Notion, Figma | HLD | Hard |
| 101 | GitHub, Stock Trading, Banking | HLD | Hard |
| 102 | Crypto Exchange, UPI Payments, Billing System | HLD | Hard |
| 103 | Hotel Booking (HLD), Movie Tickets (HLD), Flight Booking (HLD) | HLD | Hard |

> **Phase 13: 15 topics** (2 LLD + 13 HLD) | Running total: 309

---

## Phase 14: Specialized HLD + Deep Dives (Days 104-110)
*Specialized systems and architecture papers from the giants.*

| Day | Topics | Type | Difficulty |
|-----|--------|------|------------|
| 104 | Calendar (HLD), Appointments (HLD), Ticketmaster | HLD | Hard |
| 105 | Stack Overflow, Medium, Pinterest | HLD | Hard |
| 106 | Analytics Platform, Code Execution (LeetCode), Content Moderation | HLD | Hard |
| 107 | ML Serving, AI Chatbot, IoT Platform | HLD | Hard |
| 108 | BitTorrent/P2P, Password Manager, Multiplayer Game | HLD | Hard |
| 109 | Amazon Dynamo, Google BigTable, Google GFS | HLD | Hard |
| 110 | Google Spanner, Meta TAO, Discord Architecture, Hotstar 50M Concurrent, Stripe Idempotency | HLD | Hard |

> **Phase 14: 25 topics** (0 LLD + 25 HLD) | Running total: 334

---

## Progress Tracker

| Phase | Days | LLD | HLD | Total | Running |
|-------|------|-----|-----|-------|---------|
| 1 — Ground Floor | 1-8 | 5 | 23 | 28 | 28 |
| 2 — Creational + DB | 9-17 | 5 | 24 | 29 | 57 |
| 3 — Structural + Messaging | 18-24 | 7 | 15 | 22 | 79 |
| 4 — Behavioral + Distributed | 25-35 | 11 | 22 | 33 | 112 |
| 5 — Security/Infra + Starters | 36-47 | 11 | 29 | 40 | 152 |
| 6 — Advanced LLD + Intermediate | 48-58 | 14 | 10 | 24 | 176 |
| 7 — Intermediate Continued | 59-68 | 14 | 16 | 30 | 206 |
| 8 — Specialized LLD Begin | 69-76 | 16 | 8 | 24 | 230 |
| 9 — Specialized + E-Commerce | 77-83 | 6 | 19 | 25 | 255 |
| 10 — Advanced + Social | 84-90 | 7 | 7 | 14 | 269 |
| 11 — Advanced + Media | 91-95 | 5 | 10 | 15 | 284 |
| 12 — Final Advanced LLD | 96-98 | 5 | 5 | 10 | 294 |
| 13 — Finance & Booking | 99-103 | 2 | 13 | 15 | 309 |
| 14 — Deep Dives | 104-110 | 0 | 25 | 25 | 334 |

> **Note:** The plan extends to 110 days (not 100) to keep hard topics at a human pace of 2-3 per day. Some HLD case studies share names with LLD case studies (e.g., URL Shortener, Rate Limiter, Digital Wallet) — these are different pages covering the same system at different design levels.

---

*You made it. 110 days. 314 topics. You now think in systems — from class design to planet-scale architecture. Go build something amazing.*
