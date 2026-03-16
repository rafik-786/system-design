# HLD Topic List — v2 (Comprehensive)

> Cross-referenced from: Arpit's transcripts, Grokking, DDIA, System Design Primer, ByteByteGo, Azure Patterns, microservices.io, roadmap.sh
> Goal: Beyond any existing resource. Miss nothing.

---

## PART 1: FOUNDATIONS

### A. Core Principles & Trade-offs (6)
1. **Scalability** — Horizontal vs vertical, linear amplification, auto-scaling limits, unit economics
2. **Reliability & Fault Tolerance** — Failure modes, redundancy, graceful degradation, chaos engineering
3. **Availability** — Nines (99.9% → 99.999%), SLA/SLO/SLI, active-active vs active-passive failover
4. **Performance** — Latency vs throughput, P50/P95/P99 percentiles, latency numbers every programmer should know
5. **CAP Theorem & PACELC** — What they actually mean, real-world examples, why "pick 2 of 3" is misleading
6. **Back-of-Envelope Estimation** — Traffic, storage, bandwidth, QPS calculations, methodology with worked examples

### B. Networking & Communication (9)
7. **How the Internet Works** — OSI model, TCP/IP stack, NAT, DNS resolution, what happens when you type a URL
8. **DNS** — Hierarchical resolution, caching, GeoDNS, failover, TTL, record types (A, CNAME, MX, etc.)
9. **TCP & UDP** — Handshakes, congestion control, windowing, retransmission, when to use each
10. **HTTP/1.1, HTTP/2, HTTP/3 & QUIC** — Multiplexing, server push, header compression, UDP-based QUIC
11. **REST API Design** — Resource modeling, versioning, pagination, filtering, idempotency, error codes, HATEOAS
12. **gRPC & Protocol Buffers** — Binary serialization, streaming, service definitions, vs REST trade-offs
13. **GraphQL** — Schema, resolvers, query optimization, N+1 problem, vs REST trade-offs
14. **Real-time Communication** — WebSockets, SSE, long polling, short polling — when to use each, scaling challenges
15. **Webhooks** — Design, retry logic, idempotency, security (signature verification), vs polling

### C. Proxies & Load Balancing (5)
16. **Proxies** — Forward vs reverse, transparent proxies, use cases, Nginx/HAProxy/Envoy
17. **Load Balancers** — L4 vs L7, algorithms (round robin, weighted, least connections, hash), health checks, connection draining, DNS-based LB
18. **API Gateway** — Authentication, rate limiting, request routing, aggregation, transformation, Kong/AWS API Gateway
19. **Rate Limiting** — Token bucket, leaky bucket, sliding window, fixed window, distributed rate limiting, library vs service
20. **Circuit Breaker & Resilience Patterns** — 3-state model (closed/open/half-open), bulkhead, retry with exponential backoff, timeout strategies, backpressure

### D. Databases — Fundamentals (8)
21. **Relational Databases** — ACID, normalization, denormalization, indexing (B+ tree, hash, composite), query optimization, EXPLAIN plans
22. **Isolation Levels & Locking** — 4 isolation levels, pessimistic (FOR UPDATE, SKIP LOCKED) vs optimistic (versioning), MVCC, deadlock detection
23. **Scaling Databases** — Replication (sync/async/semi-sync), read replicas, connection pooling, failover, read-your-writes consistency
24. **Sharding & Partitioning** — Horizontal vs vertical, range vs hash vs directory, hotspots, rebalancing, cross-shard queries, partition key selection
25. **Database Internals** — Storage engines (B+ Tree vs LSM Tree), SSTables, WAL, compaction strategies, buffer pools, page structure
26. **ACID vs BASE** — Strong consistency (transactions) vs eventual consistency (availability-first), when each makes sense
27. **Data Modeling & Schema Design** — ER diagrams, normalization forms, denormalization strategies, schema evolution, migration patterns
28. **SQL Tuning & Query Optimization** — Index strategies, query plans, N+1 problem, connection pooling internals, prepared statements

### E. Databases — Technologies (7)
29. **Document Databases (MongoDB)** — BSON, flexible schema, aggregation pipeline, sharding, replica sets, partial updates, when to use
30. **Key-Value Stores (Redis)** — Data structures (strings, lists, sets, sorted sets, hashes, streams), persistence (RDB/AOF), clustering, Lua scripting, pub/sub, bloom filters, HyperLogLog
31. **Wide-Column Stores (Cassandra)** — Partition key, clustering key, data modeling, gossip protocol, tunable consistency, compaction, time-series patterns
32. **Graph Databases (Neo4j)** — Cypher queries, traversal algorithms, when (and when NOT) to use, relationship modeling
33. **Search Engines (Elasticsearch)** — Inverted index, tokenization, analyzers, relevance scoring (TF-IDF, BM25), aggregations, sharding
34. **Time-Series Databases** — InfluxDB, TimescaleDB, retention policies, downsampling, continuous queries, compression
35. **NewSQL & Distributed SQL** — Google Spanner, CockroachDB, TiDB — how they achieve distributed ACID, TrueTime

### F. Caching (5)
36. **Caching Strategies** — Cache-aside, write-through, write-behind, read-through, refresh-ahead — when to use each
37. **Cache Internals & Eviction** — LRU, LFU, random eviction, Redis TTL sampling (20-key, Central Limit Theorem), jemalloc, memory management
38. **Distributed Caching** — Consistent hashing for sharding, replication, cache stampede/thundering herd, hot keys, warm-up strategies
39. **Cache Invalidation** — Time-based (TTL), event-based, version-based, pub/sub invalidation, multi-layer invalidation challenges
40. **CDN** — How it works, PoPs, BGP routing, push vs pull, cache invalidation, edge computing, origin shielding, signed URLs

### G. Messaging & Event Systems (6)
41. **Message Queues** — SQS, RabbitMQ — FIFO vs standard, dead letter queues, visibility timeout, exactly-once, at-least-once, poison messages
42. **Event Streaming (Kafka)** — Partitions, ISR, consumer groups, exactly-once semantics, Kafka Connect, Kafka Streams, KSQL, retention, compaction
43. **Pub/Sub Systems** — Redis Pub/Sub, Google Cloud Pub/Sub, fan-out patterns, zero-buffering vs durable pub/sub
44. **Event-Driven Architecture** — Event sourcing, CQRS, saga (choreography vs orchestration), transactional outbox, inbox pattern, dual-write problem
45. **Stream Processing** — Apache Flink, Kafka Streams, Spark Streaming — windowing (tumbling, sliding, session), watermarks, late data, exactly-once
46. **Async Patterns & Backpressure** — Task queues, competing consumers, priority queues, queue-based load leveling, flow control

### H. Distributed Systems Core (10)
47. **Consistency Models** — Strong, eventual, causal, read-your-writes, monotonic reads, linearizability, sequential consistency
48. **Consensus Protocols** — Raft (leader election, log replication), Paxos, ZAB — how distributed nodes agree
49. **Distributed Locking** — Redis SETNX + TTL, Red Lock, Zookeeper recipes, fencing tokens, Kleppmann's critique, Google Chubby
50. **Leader Election** — Bully algorithm, Raft leader election, Zookeeper/etcd ephemeral nodes, split-brain prevention
51. **Consistent Hashing** — Ring, virtual nodes (vnodes), weighted nodes, replication, data migration, jump consistent hashing
52. **Bloom Filters & Probabilistic Data Structures** — Bloom filters (K hash functions), counting bloom filters, cuckoo filters, HyperLogLog, Count-Min Sketch
53. **Distributed ID Generation** — Twitter Snowflake, Flickr tickets, ULID, UUID trade-offs (index bloat), Instagram's Snowflake-in-DB, cursor pagination
54. **Distributed Transactions** — 2PC, 3PC, saga pattern, compensating transactions, idempotency keys, exactly-once delivery
55. **Clocks & Ordering** — Lamport timestamps, vector clocks, hybrid logical clocks, TrueTime (Spanner), wall clock vs logical clock
56. **Failure Detection & Recovery** — Heartbeats, phi accrual detector, gossip protocol, hinted handoff, read repair, anti-entropy, Merkle trees

### I. Data Serialization & Encoding (2)
57. **Serialization Formats** — JSON, Protocol Buffers, Avro, Thrift, MessagePack — schema evolution, backward/forward compatibility, performance comparison
58. **Compression** — Data compression (gzip, zstd, snappy, LZ4), network compression, storage compression (columnar: Parquet, ORC), when to compress where

### J. Storage & File Systems (4)
59. **Blob Storage & Object Storage (S3)** — Internals, signed URLs, multipart upload, storage classes (Standard/IA/Glacier), 11 nines durability, erasure coding
60. **Distributed File Systems** — GFS, HDFS — chunk/block storage, NameNode, replication, fault tolerance, erasure coding vs replication
61. **Tiered Storage & Data Lifecycle** — Hot/warm/cold/glacier, automatic tiering, archival strategies, cost optimization
62. **Write-Ahead Logging (WAL)** — How databases ensure durability, crash recovery, checkpointing, log-structured storage

### K. Data Processing & Analytics (4)
63. **Batch Processing** — MapReduce, Spark (RDDs, DAGs, stages, shuffles), data locality, fault tolerance (lineage)
64. **Data Warehousing & Data Lakes** — OLAP vs OLTP, Redshift/BigQuery/Snowflake, star vs snowflake schema, lakehouse architecture, Parquet/ORC
65. **ETL & Change Data Capture (CDC)** — Extract-Transform-Load pipelines, Debezium, binlog streaming, Airflow for orchestration
66. **Real-Time Analytics** — Lambda vs Kappa architecture, streaming aggregation, materialized views, OLAP cubes

### L. Security (4)
67. **Authentication & Authorization** — OAuth 2.0 flows, JWT (structure, signing, verification), SAML, SSO, API keys, RBAC vs ABAC, session management
68. **TLS/SSL & Encryption** — Handshake, certificates, mTLS, encryption at rest vs in transit, key management (KMS)
69. **API Security** — CORS, CSRF, input validation, SQL injection prevention, rate limiting, DDoS protection, OWASP top 10
70. **Zero Trust & Network Security** — Never trust always verify, service-to-service authentication, network segmentation, VPC, security groups

### M. Observability (4)
71. **Logging** — Structured logging, log levels, ELK stack (Elasticsearch + Logstash + Kibana), Fluentd, correlation IDs, log aggregation
72. **Metrics & Monitoring** — Prometheus, Grafana, RED method (Rate/Errors/Duration), USE method (Utilization/Saturation/Errors), alerting strategies
73. **Distributed Tracing** — Jaeger, Zipkin, OpenTelemetry, trace/span/context propagation, sampling strategies
74. **Alerting & Incident Response** — PagerDuty, on-call, runbooks, SLO-based alerting, alert fatigue prevention

### N. Infrastructure & Deployment (5)
75. **Containers & Orchestration** — Docker internals, Kubernetes (pods, services, deployments, scaling, service discovery, ingress)
76. **CI/CD Pipelines** — Build, test, deploy, artifact storage, rollback strategies, GitOps
77. **Deployment Strategies** — Blue-green, canary, rolling, A/B testing, feature flags, dark launches
78. **Serverless** — AWS Lambda, cold starts, event-driven, concurrency limits, when to use vs containers
79. **Infrastructure as Code** — Terraform, CloudFormation, GitOps, immutable infrastructure

### O. Architecture Patterns (6)
80. **Monolith vs Microservices** — Trade-offs, decomposition by business capability, DDD bounded contexts, database per service
81. **Service Mesh** — Istio, Linkerd, sidecar proxies, mTLS, observability, traffic management
82. **Service Discovery** — Client-side vs server-side, service registry (Consul, etcd, Zookeeper), DNS-based
83. **Microservice Communication Patterns** — Sync (REST, gRPC) vs async (events), API composition, BFF (Backends for Frontends)
84. **Migration Patterns** — Strangler fig, anti-corruption layer, parallel run, database migration strategies
85. **Multi-Region Architecture** — Active-active, active-passive, data replication across regions, geo-routing, anycast, latency-based routing

### P. Performance Anti-Patterns (1 combined page)
86. **Performance Anti-Patterns** — Busy database, chatty I/O, extraneous fetching, N+1 queries, synchronous I/O where async fits, noisy neighbor, retry storms, monolithic persistence

---

**Foundation Total: 86 topics**

---

## PART 2: CASE STUDIES

### Category 1: Social Media & Content (10)
1. Design Twitter / X — Feed, trending, search, fanout-on-write vs read, timeline
2. Design Instagram — Photos, stories, reels, explore feed, CDN for media
3. Design Facebook News Feed — Ranking (EdgeRank), friend graph, privacy controls
4. Design TikTok — Short video recommendation (for-you page), content delivery, viral distribution
5. Design Reddit — Subreddits, voting algorithms (hot/best/top), comment threading, moderation
6. Design LinkedIn — Professional graph, job matching, feed, messaging, recruiter tools
7. Design Medium / Blogging Platform — Publishing, claps, recommendations, paywall
8. Design Pinterest — Visual discovery, pin boards, image similarity search
9. Design Quora / Stack Overflow — Q&A, voting, reputation, search, moderation, SEO
10. Design Twitter Spaces / Clubhouse — Live audio rooms, speaker management, recording

### Category 2: Messaging & Communication (8)
11. Design WhatsApp — E2E encryption, message delivery guarantees, group chat, status, voice/video calls
12. Design Slack — Channels, threads, search, file sharing, integrations, presence indicators
13. Design Discord — Voice channels, servers, roles, bots, real-time chat at gaming scale (millions per server)
14. Design Zoom / Video Conferencing — WebRTC, SFU vs MCU, screen share, recording, breakout rooms
15. Design Email Service (Gmail) — SMTP/IMAP, spam filtering, search, labels, storage
16. Design Push Notification System — Multi-channel (push/email/SMS), priority, dedup, delivery tracking, bloom filters
17. Design Comment System — Threading, moderation, real-time updates, ranking, abuse detection
18. Design In-App Chat (Intercom-like) — Customer support chat, bot integration, agent routing

### Category 3: Video & Media (8)
19. Design YouTube — Upload, transcoding pipeline, HLS streaming, recommendations, CDN, search
20. Design Netflix — Content delivery, adaptive bitrate, personalization, offline downloads, multi-device
21. Design Spotify — Music streaming, playlists, Discover Weekly, podcast, offline mode, social
22. Design Twitch / Live Streaming — Ultra-low latency, chat at scale, subscriptions, VOD, clips
23. Design Podcast Platform — RSS ingestion, audio processing, distribution, offline sync
24. Design Image Hosting (Imgur/Flickr) — Upload, resize on-demand, CDN delivery, galleries, tagging
25. Design Video Processing Pipeline — Transcoding (multi-resolution), thumbnails, captions, copyright detection (Content ID)
26. Design Audio Recognition (Shazam) — Audio fingerprinting, matching, database design

### Category 4: E-Commerce & Marketplace (10)
27. Design Amazon / E-Commerce Platform — Catalog, cart, checkout, inventory, recommendations, reviews, search
28. Design Shopping Cart — Session management, persistence, pricing rules, inventory reservation, guest vs logged-in
29. Design Payment System (Stripe/Razorpay) — Payment gateway, idempotency keys, refunds, webhooks, PCI compliance
30. Design Flash Sale System — High-demand inventory, queue fairness, SKIP LOCKED, scalping prevention
31. Design Product Search & Catalog — Faceted search, filtering, sorting, Elasticsearch, autocomplete
32. Design Order Management System — Order lifecycle, fulfillment, returns, tracking, state machine
33. Design Inventory Management — Stock tracking, warehouses, reserved stock, reconciliation, distributed inventory
34. Design Auction System (eBay) — Bidding engine, time-based closing, sniping protection, fraud prevention
35. Design Coupon / Promo System — Validation, stacking rules, usage limits, analytics, fraud detection
36. Design Marketplace (Airbnb/Etsy) — Two-sided marketplace, trust/reviews, search ranking, pricing, booking

### Category 5: Search & Discovery (7)
37. Design Google Search — Web crawling, indexing, PageRank, query processing, autocomplete, spell check
38. Design Typeahead / Autocomplete — Trie, prefix matching, personalization, ranking, trending suggestions
39. Design Web Crawler — URL frontier, politeness, dedup (bloom filter), robots.txt, distributed crawling, consistent hashing
40. Design Recommendation Engine — Collaborative filtering, content-based, hybrid, cold start, A/B testing
41. Design News Feed / Personalized Feed — Fan-out-on-write vs read, ranking signals, engagement prediction
42. Design Trending / Hashtag System — Entity detection (NER), time-decay ranking, anti-gaming, real-world examples
43. Design News Aggregator (Google News) — Content crawling, dedup, clustering, personalization, trending

### Category 6: Transportation & Location (7)
44. Design Uber / Lyft — Ride matching, real-time location, ETA, surge pricing, dispatch, driver onboarding
45. Design Food Delivery (DoorDash/Zomato) — Order routing, driver matching, real-time tracking, restaurant integration, ETA
46. Design Google Maps — Routing (Dijkstra/A*), real-time traffic, map tiles, POI search, offline maps
47. Design Proximity Service (Nearby Friends/Yelp) — Geospatial indexing (geohash, quadtree, S2), real-time location, reviews
48. Design Geofencing System — Region monitoring, event triggers, fleet tracking, enter/exit events
49. Design Package Tracking System — Status updates, carrier integration, real-time tracking, notifications
50. Design EV Charging Network — Station availability, reservation, payment, routing optimization

### Category 7: Infrastructure & Platform (16)
51. Design URL Shortener (TinyURL) — ID generation (ticket server, encoding), redirection (301 vs 302), analytics
52. Design PasteBin / GitHub Gists — File storage (S3), expiration, sharing, derived paths, anti-caching argument
53. Design Rate Limiter — Algorithms, distributed consistency, library vs service, Redis sharding
54. Design Key-Value Store (DynamoDB-like) — Consistent hashing, replication, vector clocks, quorum, sloppy quorum
55. Design Distributed Cache (Redis-like) — Eviction, consistent hashing, replication factor, single-threaded design, jemalloc
56. Design Object Storage (S3-like) — Partition management, durability (erasure coding), signed URLs, tiered storage
57. Design Distributed File System (HDFS/GFS) — Block storage, NameNode/ChunkServer, replication, fault tolerance
58. Design CDN — Edge servers, cache invalidation, origin shielding, routing, multi-CDN
59. Design Load Balancer — L4/L7, health checks, connection draining, auto-scaling, DNS-based LB
60. Design Distributed Task Scheduler — Job queuing, cron-like scheduling, retries, priority, dead letters, at-least-once
61. Design Message Queue (Kafka-like) — Partitioned log, consumer groups, replication (ISR), exactly-once, compaction
62. Design Logging System (ELK-like) — Ingestion at scale, indexing, querying, retention, archival
63. Design Monitoring & Alerting (Datadog-like) — Metrics collection, time-series storage, dashboards, anomaly detection
64. Design Feature Flag System — Targeting rules, rollout percentage, kill switch, A/B testing integration
65. Design Configuration Management — Distributed config, versioning, hot reload, Zookeeper/etcd
66. Design Distributed Locking Service (Chubby/Zookeeper) — Consensus-based locks, fencing tokens, lease management

### Category 8: Real-Time & Gaming (7)
67. Design Stock Trading Platform — Order book, matching engine (price-time priority), market data feed, low latency
68. Design Live Sports Commentary (CricBuzz) — Real-time updates, caching for millions, write-light/read-heavy
69. Design Online Multiplayer Game — Game state sync, lag compensation, matchmaking, lobby, anti-cheat
70. Design Leaderboard — Real-time ranking (Redis sorted sets), sharded leaderboards, historical rankings
71. Design Live Collaboration (Google Docs) — OT vs CRDT, cursor sync, conflict resolution, offline mode
72. Design Real-Time Analytics Dashboard — Streaming aggregation, time windows, drill-down, sub-second latency
73. Design Polling / Voting System — Vote recording, real-time results, fraud prevention, scalability

### Category 9: Finance & Payments (6)
74. Design Digital Wallet — Balance management, double-entry bookkeeping, transactions, P2P transfer, concurrency
75. Design Fraud Detection System — ML pipeline (decision trees, random forest), real-time scoring (200ms SLA), Spark training
76. Design Banking System — Account management, transfers, statements, compliance (KYC/AML), audit trail
77. Design Cryptocurrency Exchange — Order matching, wallet management, hot/cold wallets, blockchain integration
78. Design Invoice / Billing System — Recurring billing, subscription management, proration, dunning, tax
79. Design UPI / Real-Time Payment System — Inter-bank transfer, settlement, idempotency, reconciliation

### Category 10: Booking & Scheduling (6)
80. Design Hotel Booking (Booking.com) — Search, availability calendar, pricing (dynamic), double-booking prevention, overbooking
81. Design Movie Ticket Booking (BookMyShow) — Seat map, concurrent selection, hold-then-pay, payment timeout release
82. Design Flight Booking — Search (fare rules, multi-leg), PNR management, overbooking algorithms, pricing
83. Design Calendar System (Google Calendar) — Events, recurring rules (RFC 5545), timezone handling, sharing, reminders
84. Design Appointment Scheduling — Availability slots, conflict resolution, multi-timezone, reminders, waitlist
85. Design Ticketmaster — High-demand events, virtual queue fairness, inventory locking, scalping prevention

### Category 11: File & Collaboration (5)
86. Design Dropbox / Google Drive — File sync (delta sync, chunking), dedup, versioning, sharing, conflict resolution
87. Design Google Docs — Real-time collaboration (OT/CRDT), permissions, comment threads, offline mode, revision history
88. Design Notion — Blocks-based content, workspaces, real-time collab, templates, databases-as-pages
89. Design Figma — Collaborative design tool, multiplayer cursors, component library, plugin system
90. Design GitHub — Repositories, pull requests, code review, CI/CD integration, issue tracking, git internals

### Category 12: Analytics & Ads (5)
91. Design A/B Testing Platform — Experiment assignment (hashing), metrics collection, statistical significance, feature flags
92. Design Analytics Platform (Mixpanel/Amplitude) — Event tracking, funnel analysis, cohorts, retention, real-time dashboards
93. Design Ad Serving System — Targeting (demographics, behavior), real-time bidding (RTB), click tracking, fraud detection
94. Design Ad Click Aggregation — Real-time counting, dedup, MapReduce aggregation, exactly-once billing
95. Design Data Pipeline Platform (Airflow-like) — DAG execution, scheduling, retries, monitoring, backfill

### Category 13: AI & ML Systems (4)
96. Design ML Model Serving Platform — Model registry, A/B testing, canary deployment, feature store, low-latency inference
97. Design Recommendation System (ML) — Two-tower model, embedding, retrieval + ranking pipeline, online/offline features
98. Design Content Moderation System — ML classification + human review queue, appeal workflow, policy management
99. Design AI Chatbot Platform — LLM integration, RAG (retrieval-augmented generation), conversation state, rate limiting

### Category 14: Specialized Systems (6)
100. Design Tinder / Dating App — Geospatial matching, feed generation, bloom filter dedup, ELO/desirability scoring
101. Design Abuse / Profanity Masker — In-memory Trie, real-time matching, dictionary management, "not everything is a service"
102. Design Code Execution Platform (LeetCode) — Sandboxed execution, multi-language, resource limits, queue-based processing
103. Design IoT Platform — Device registry, telemetry ingestion, command dispatch, fleet management, edge processing
104. Design BitTorrent / P2P System — Peer discovery, chunk distribution, DHT, seeding/leeching, incentive mechanisms
105. Design Password Manager — Client-side encryption, vault sync, zero-knowledge architecture, breach detection

### Category 15: Real-World System Deep Dives (8)
*(Study actual published architectures from engineering blogs)*
106. Amazon Dynamo — Consistent hashing, vector clocks, sloppy quorum, hinted handoff, read repair
107. Google BigTable — Tablets, SSTables, bloom filters, compaction, column-family model
108. Google File System (GFS) — Chunk servers, master, 64MB chunks, append-only writes
109. Google Spanner — TrueTime, globally distributed ACID, Paxos groups, external consistency
110. Meta's TAO — Social graph cache, read-after-write consistency, cache consistency at scale
111. Discord Architecture — Elixir → Rust migration, millions per server, data services
112. Hotstar (50M Concurrent) — Auto-scaling, event-driven, handling cricket match spikes
113. Stripe Idempotency — Preventing duplicate charges, idempotency keys, distributed payment safety

---

**Case Study Total: 113**

---

## GRAND TOTAL

| Category | Count |
|----------|-------|
| Foundation topics | 86 |
| Case studies | 113 |
| **TOTAL** | **199 topics** |
| Sub-pages (× 3 per topic) | **~597** |

---

## WHAT'S IN TRANSCRIPTS vs WHAT NEEDS RESEARCH

### Foundation topics with transcript material: ~30 of 86
### Foundation topics needing 100% research: ~56 of 86
### Case studies with transcript material: ~19 of 113
### Case studies needing 100% research: ~94 of 113

---

## LEARNING PATH (Suggested Order)

### Phase 1: Core Principles (build the mental model)
→ Scalability → Reliability → Availability → Performance → CAP/PACELC → Back-of-Envelope

### Phase 2: Networking & Communication (how things talk)
→ Internet fundamentals → DNS → TCP/UDP → HTTP evolution → REST → gRPC → GraphQL → Real-time → Webhooks

### Phase 3: Proxies & Traffic (how traffic flows)
→ Proxies → Load Balancers → API Gateway → Rate Limiting → Circuit Breakers

### Phase 4: Databases (where data lives)
→ Relational → Isolation & Locking → Scaling DBs → Sharding → DB Internals → ACID vs BASE → Schema Design → SQL Tuning
→ MongoDB → Redis → Cassandra → Neo4j → Elasticsearch → Time-Series → NewSQL

### Phase 5: Caching (make it fast)
→ Caching Strategies → Cache Internals → Distributed Caching → Cache Invalidation → CDN

### Phase 6: Messaging (make it async)
→ Message Queues → Kafka → Pub/Sub → Event-Driven Architecture → Stream Processing → Async Patterns

### Phase 7: Distributed Systems (make it distributed)
→ Consistency Models → Consensus (Raft/Paxos) → Distributed Locking → Leader Election → Consistent Hashing → Bloom Filters → ID Generation → Distributed Transactions → Clocks & Ordering → Failure Detection

### Phase 8: Data & Storage (store and process)
→ Serialization → Compression → S3/Blob Storage → HDFS → Tiered Storage → WAL → Batch Processing → Warehousing → ETL/CDC → Real-Time Analytics

### Phase 9: Security, Observability, Infrastructure
→ Auth → TLS → API Security → Zero Trust → Logging → Metrics → Tracing → Alerting → Containers/K8s → CI/CD → Deployment Strategies → Serverless → IaC

### Phase 10: Architecture
→ Monolith vs Microservices → Service Mesh → Service Discovery → Communication Patterns → Migration Patterns → Multi-Region → Performance Anti-Patterns

### Phase 11: Case Studies (apply everything)
→ Start with infrastructure systems (URL shortener, rate limiter, KV store, cache)
→ Then social/messaging (Twitter, WhatsApp, Slack)
→ Then media (YouTube, Netflix, Spotify)
→ Then e-commerce (Amazon, payments, flash sale)
→ Then search/location (Google Search, Uber, Maps)
→ Then specialized (trading, booking, collaboration)
→ Then deep dives (Dynamo, BigTable, GFS, Spanner)
