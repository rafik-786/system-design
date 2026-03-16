# HLD Learning Path — Content Generation Order (v3)

> **Structure:** ALL foundations first → then ALL case studies (simple → complex) → then paper deep dives.
> **Why:** Build the complete mental toolkit first. Then apply it to increasingly complex systems.
> **No dependency headaches** — by the time case studies start, every concept is already learned.

---

# PART 1: FOUNDATIONS (88 pages)

---

## Phase 1: Core Principles (8 pages)
*Goal: The thinking framework that underlies everything.*

| # | Topic | Source |
|---|-------|--------|
| 1 | **How to Approach System Design** — methodology, structured thinking, top-down vs bottom-up | L2, L3, L4 |
| 2 | **Scalability** — horizontal vs vertical, linear amplification, unit economics, auto-scaling limits | L7, Live 1-2 |
| 3 | **Reliability & Fault Tolerance** — failure modes, redundancy, graceful degradation, chaos engineering | L19, L20 |
| 4 | **Availability** — nines (99.9→99.999%), SLA/SLO/SLI, failover (active-active, active-passive) | scattered |
| 5 | **Performance** — latency vs throughput, P50/P95/P99, latency numbers every programmer should know | original |
| 6 | **CAP Theorem & PACELC** — what they actually mean, real-world implications, why "pick 2 of 3" is misleading | original |
| 7 | **ACID vs BASE** — strong consistency vs eventual consistency, when each makes sense | L5 + original |
| 8 | **Back-of-Envelope Estimation** — traffic, storage, bandwidth, QPS calculations, the METHOD with worked examples | scattered |

---

## Phase 2: Networking & Communication (8 pages)
*Goal: How machines talk to each other — the plumbing of every system.*

| # | Topic | Source |
|---|-------|--------|
| 9 | **How the Internet Works** — TCP/IP stack, OSI model, NAT, what happens when you type a URL | L21 |
| 10 | **DNS** — hierarchical resolution, caching, GeoDNS, record types (A, CNAME, MX), failover, TTL | original |
| 11 | **TCP & UDP** — handshakes, congestion control, windowing, retransmission, when to use each | L21 |
| 12 | **HTTP/1.1, HTTP/2, HTTP/3 & QUIC** — multiplexing, server push, header compression, QUIC over UDP | L21 (partial) + original |
| 13 | **REST API Design** — resources, versioning, pagination, filtering, idempotency, error codes, HATEOAS | original |
| 14 | **Webhooks** — design, retry logic, idempotency, signature verification, vs polling | original |
| 15 | **Real-time Communication** — WebSockets, SSE, long polling, short polling, scaling challenges | L21, Live 2, Live 4 |
| 16 | **Proxies** — forward vs reverse, transparent proxies, use cases, Nginx/HAProxy/Envoy | original |

---

## Phase 3: Databases — Fundamentals (8 pages)
*Goal: "Database is the most brittle component of any architecture." — Arpit*

| # | Topic | Source |
|---|-------|--------|
| 17 | **Relational Databases** — ACID deep dive, indexing (B+ tree, hash, composite), normalization, denormalization | L5, Live 1 |
| 18 | **Isolation Levels & Locking** — 4 levels (live demo), pessimistic (FOR UPDATE, SKIP LOCKED), optimistic, MVCC, deadlocks | L6, Live 3 |
| 19 | **Schema Design & Data Modeling** — ER diagrams, normalization forms, denormalization, soft deletes, date-time storage, migrations | Live 1 + original |
| 20 | **SQL Tuning & Query Optimization** — EXPLAIN plans, index strategies, N+1, connection pooling internals, prepared statements | Live 1 + original |
| 21 | **Scaling Databases** — replication (sync/async/semi-sync), read replicas, connection pooling, failover, read-your-writes consistency | L7, Live 1-2 |
| 22 | **Sharding & Partitioning** — horizontal/vertical, range/hash/directory, hotspots, rebalancing, cross-shard queries, partition key selection, 2×2 matrix | L8, Live 9 |
| 23 | **Database Internals** — B+ Tree vs LSM Tree, SSTables, WAL, compaction strategies, buffer pools, page structure | Live 10, Live 12 |
| 24 | **Write-Ahead Logging (WAL)** — crash recovery, checkpointing, log-structured storage, replication from WAL | original |

---

## Phase 4: NoSQL & Picking Databases (9 pages)
*Goal: Know ALL your database options, then build a decision framework.*

| # | Topic | Source |
|---|-------|--------|
| 25 | **Document Databases (MongoDB)** — BSON, flexible schema, aggregation pipeline, sharding, replica sets, partial updates | L9, Live 4, Live 13 |
| 26 | **Key-Value Stores (Redis Deep Dive)** — data structures (strings, lists, sets, sorted sets, hashes, streams), persistence (RDB/AOF), clustering, Lua scripting, pub/sub, bloom filters, HyperLogLog, geospatial | L9, Live 3 (TTL internals), Live 9 |
| 27 | **Wide-Column Stores (Cassandra)** — partition key, clustering key, data modeling, gossip protocol, tunable consistency, compaction, time-series patterns | Live 4 + original |
| 28 | **Graph Databases (Neo4j)** — Cypher queries, adjacency list storage, traversal algorithms, when and when NOT to use | L9, Live 4 |
| 29 | **Search Engines (Elasticsearch)** — inverted index, tokenization, analyzers, relevance scoring (TF-IDF, BM25), aggregations, sharding | original |
| 30 | **Time-Series Databases** — InfluxDB, TimescaleDB, retention policies, downsampling, continuous queries, compression | original |
| 31 | **NewSQL & Distributed SQL** — Spanner, CockroachDB, TiDB, how they achieve distributed ACID, TrueTime | original |
| 32 | **Picking the Right Database** — decision framework, "select database last", myth-busting ("relational DBs don't scale"), piggyback pattern | L10 |
| 33 | **Multi-Model & Polyglot Persistence** — using multiple databases together, data synchronization challenges | original |

---

## Phase 5: Caching (5 pages)
*Goal: Make reads fast. But know when NOT to cache.*

| # | Topic | Source |
|---|-------|--------|
| 34 | **Caching Strategies** — cache-aside, write-through, write-behind, read-through, refresh-ahead, predictive push | L12, L13, Live 1-2 |
| 35 | **Cache Internals & Eviction** — LRU, LFU, random eviction (Arpit's production story), Redis TTL sampling (20-key, Central Limit Theorem), jemalloc, memory management | Live 9 |
| 36 | **Cache Invalidation & Distributed Caching** — TTL-based, event-based, version-based, cache stampede/thundering herd, hot keys, consistent hashing for cache sharding, warm-up strategies | original + scattered |
| 37 | **CDN** — how it works, PoPs, BGP routing, push vs pull, cache invalidation, edge computing, origin shielding, signed URLs | Live 7 |
| 38 | **Caching at Different Levels** — client-side (browser), API server RAM, API server disk, CDN, remote (Redis), DB as cache (materialized views), "pick your battles — don't over-cache" | L13, Live 2 |

---

## Phase 6: Messaging & Async (6 pages)
*Goal: "Whatever does not need to be done in real-time should not be done in real-time."*

| # | Topic | Source |
|---|-------|--------|
| 39 | **Message Queues** — SQS, RabbitMQ, FIFO vs standard, DLQ, visibility timeout, exactly-once, at-least-once, poison messages | L14 |
| 40 | **Event Streaming (Kafka Deep Dive)** — partitions, ISR, consumer groups, exactly-once semantics, Kafka Connect, Kafka Streams, KSQL, retention, compaction, dual-write problem | L15, Live 2 |
| 41 | **Pub/Sub Systems** — Redis Pub/Sub (zero buffering), Google Cloud Pub/Sub (durable), fan-out patterns, configuration push | L16 |
| 42 | **Async Patterns & Backpressure** — task queues (Celery), competing consumers, priority queues, queue-based load leveling, flow control | original |
| 43 | **Stream Processing** — Flink, Kafka Streams, Spark Streaming, windowing (tumbling/sliding/session), watermarks, late data, exactly-once | original |
| 44 | **Real-Time Analytics** — Lambda vs Kappa architecture, streaming aggregation, materialized views, OLAP cubes | original |

---

## Phase 7: Distributed Systems Core (10 pages)
*Goal: The hardest part of system design. How to make things work across multiple machines.*

| # | Topic | Source |
|---|-------|--------|
| 45 | **Consistency Models** — strong, eventual, causal, read-your-writes, monotonic reads, linearizability, sequential consistency | original |
| 46 | **Consensus Protocols** — Raft (leader election, log replication, safety), Paxos, ZAB, how distributed nodes agree despite failures | original |
| 47 | **Clocks & Ordering** — Lamport timestamps, vector clocks, hybrid logical clocks, TrueTime (Spanner), wall clock vs logical clock | original |
| 48 | **Consistent Hashing** — ring, virtual nodes (vnodes), weighted nodes, replication, data migration, jump consistent hashing | L24, Live 9 |
| 49 | **Bloom Filters & Probabilistic DS** — K hash functions, counting bloom, cuckoo filters, HyperLogLog, Count-Min Sketch | L23, Live 12 |
| 50 | **Distributed ID Generation** — Snowflake, Flickr tickets, ULID, UUID trade-offs (index bloat), Instagram's Snowflake-in-DB, cursor pagination | Live 6 |
| 51 | **Distributed Locking** — Redis SETNX+TTL, Red Lock (5 servers, majority), Zookeeper recipes, fencing tokens, Kleppmann's critique, Google Chubby | Live 5 |
| 52 | **Leader Election** — Bully algorithm, Raft leader election, Zookeeper/etcd ephemeral nodes, split-brain prevention, "base condition of recursion" | L20, Live 5 |
| 53 | **Failure Detection & Recovery** — heartbeats, phi accrual failure detector, gossip protocol, hinted handoff, read repair, anti-entropy, Merkle trees | original |
| 54 | **Distributed Transactions** — 2PC, 3PC, saga (choreography vs orchestration), compensating transactions, transactional outbox, idempotency keys | original |

---

## Phase 8: Load Balancing & Resilience (5 pages)
*Goal: How traffic flows and what happens when things break.*

| # | Topic | Source |
|---|-------|--------|
| 55 | **Load Balancers** — L4 vs L7, algorithms (round robin, weighted, least connections, hash), health checks, connection draining, DNS-based LB, scaling LB itself | L17, Live 5 |
| 56 | **API Gateway** — authentication, rate limiting, routing, aggregation, transformation, Kong/AWS API Gateway | original |
| 57 | **Rate Limiting** — token bucket, leaky bucket, sliding window, fixed window, distributed rate limiting, library vs service | L27 |
| 58 | **Circuit Breaker & Resilience** — 3-state model (closed/open/half-open), bulkhead, retry with exponential backoff, timeout strategies, graceful degradation | L18 |
| 59 | **Idempotency** — why it matters in distributed systems, idempotency keys, exactly-once delivery patterns, Stripe's approach | original |

---

## Phase 9: Storage & Data Processing (6 pages)
*Goal: Where data lives long-term and how to process it at scale.*

| # | Topic | Source |
|---|-------|--------|
| 60 | **Blob Storage & S3** — internals, signed URLs, multipart upload, storage classes (Standard/IA/Glacier), erasure coding, 11 nines durability | L22, Live 11 |
| 61 | **Distributed File Systems** — GFS, HDFS, chunk/block storage, NameNode, replication, fault tolerance, erasure coding vs replication | original |
| 62 | **Tiered Storage & Data Lifecycle** — hot/warm/cold/glacier, automatic tiering, archival, cost optimization | original |
| 63 | **Batch Processing** — MapReduce, Spark (RDDs, DAGs, stages, shuffles), data locality, fault tolerance (lineage) | L25 |
| 64 | **ETL & Change Data Capture (CDC)** — pipelines, Debezium, binlog streaming, Airflow orchestration, data enrichment | Live 9 + original |
| 65 | **Data Warehousing & Data Lakes** — OLAP vs OLTP, Redshift/BigQuery/Snowflake, star/snowflake schema, lakehouse, Parquet/ORC | original |

---

## Phase 10: Serialization & Encoding (2 pages)

| # | Topic | Source |
|---|-------|--------|
| 66 | **Serialization Formats** — JSON, Protocol Buffers, Avro, Thrift, MessagePack, schema evolution, backward/forward compatibility | original |
| 67 | **Compression** — gzip, zstd, Snappy, LZ4, columnar (Parquet, ORC), when to compress where, network vs storage compression | original |

---

## Phase 11: Architecture Patterns (8 pages)
*Goal: How to structure systems at the macro level.*

| # | Topic | Source |
|---|-------|--------|
| 68 | **Monolith vs Microservices** — trade-offs, decomposition by business capability, DDD bounded contexts, database per service | original |
| 69 | **Event-Driven Architecture** — event sourcing, CQRS, saga, transactional outbox, inbox pattern, dual-write problem | original |
| 70 | **Service Mesh & Service Discovery** — Istio, Linkerd, sidecar proxies, Consul, etcd, Zookeeper, DNS-based | original |
| 71 | **Microservice Communication** — sync (REST, gRPC) vs async (events), API composition, BFF (Backends for Frontends) | original |
| 72 | **Migration Patterns** — strangler fig, anti-corruption layer, parallel run, DB migration strategies | original |
| 73 | **Multi-Region Architecture** — active-active, active-passive, geo-replication, geo-routing, anycast, latency-based routing | original |
| 74 | **Multi-Tenancy** — shared vs isolated infrastructure, tenant-level sharding, noisy neighbor, data isolation | original |
| 75 | **Performance Anti-Patterns** — busy DB, chatty I/O, N+1 queries, sync I/O, noisy neighbor, retry storms, monolithic persistence | original |

---

## Phase 12: Security (4 pages)

| # | Topic | Source |
|---|-------|--------|
| 76 | **Authentication & Authorization** — OAuth 2.0 flows, JWT (structure, signing, verification), SAML, SSO, API keys, RBAC/ABAC, session management | original |
| 77 | **TLS/SSL & Encryption** — handshake, certificates, mTLS, encryption at rest/transit, KMS | original |
| 78 | **API Security** — CORS, CSRF, input validation, SQL injection prevention, DDoS protection, OWASP top 10 | original |
| 79 | **Zero Trust & Network Security** — never trust always verify, service-to-service auth, VPC, security groups, network segmentation | original |

---

## Phase 13: Observability (4 pages)

| # | Topic | Source |
|---|-------|--------|
| 80 | **Logging** — structured logging, log levels, ELK stack, Fluentd, correlation IDs, log aggregation patterns | original |
| 81 | **Metrics & Monitoring** — Prometheus, Grafana, RED method, USE method, alerting strategies, SLO-based alerting | original |
| 82 | **Distributed Tracing** — Jaeger, Zipkin, OpenTelemetry, trace/span/context propagation, sampling strategies | original |
| 83 | **Alerting & Incident Response** — PagerDuty, on-call, runbooks, alert fatigue prevention, postmortems | original |

---

## Phase 14: Infrastructure & Deployment (5 pages)

| # | Topic | Source |
|---|-------|--------|
| 84 | **Containers & Kubernetes** — Docker internals, pods, services, deployments, scaling, service discovery, ingress | original |
| 85 | **CI/CD Pipelines** — build, test, deploy, artifact storage, rollback, GitOps | original |
| 86 | **Deployment Strategies** — blue-green, canary, rolling, A/B testing, feature flags, dark launches | original |
| 87 | **Serverless** — Lambda, cold starts, concurrency limits, event-driven, when to use vs containers | original |
| 88 | **Infrastructure as Code** — Terraform, CloudFormation, GitOps, immutable infrastructure | original |

---

# ✅ FOUNDATIONS COMPLETE (88 pages)
*At this point, the reader has the COMPLETE mental toolkit. Every concept, every tool, every pattern. Now it's time to apply ALL of it.*

---

# PART 2: CASE STUDIES (108 pages)
*Ordered from simplest → most complex. Each lists the key concepts it practices.*

---

## Tier 1: Simple Systems (15 pages)
*These use 3-5 foundation concepts each. Perfect first practice.*

| # | System | Key Concepts Practiced |
|---|--------|----------------------|
| 89 | **Online/Offline Indicator** | Redis TTL, heartbeat, estimation (6M updates/min) |
| 90 | **Recent Searches** | Redis list (LPUSH+LTRIM), Kafka async persistence, "don't backfill on delete" |
| 91 | **Leaderboard** | Redis sorted sets, sharding, historical rankings |
| 92 | **PasteBin / GitHub Gists** | S3, derived paths, "caching is NOT always the answer", archival |
| 93 | **URL Shortener** | ID generation (ticket server), encoding, estimation, range partitioning, Kafka analytics |
| 94 | **Rate Limiter** | Algorithms (token bucket, sliding window), library vs service, Redis sharding |
| 95 | **Abuse / Profanity Masker** | In-memory Trie, pub/sub config push, "not everything is a service" |
| 96 | **Polling / Voting System** | Vote recording, concurrency, real-time results, fraud prevention |
| 97 | **Comment System** | Threading, moderation, real-time updates, ranking algorithms |
| 98 | **Notification Aggregation (Unread Count)** | Auxiliary DB pattern, Redis SET, "protect your database" |
| 99 | **E-commerce Product Listing** | Read replicas, "master can serve reads", "don't cache just because you can" |
| 100 | **Live Sports Commentary (CricBuzz)** | Redis caching, read-heavy, replication lag (CPU-bound), 12KB per match |
| 101 | **Image Hosting (Imgur/Flickr)** | CDN, S3, on-demand resize, cache invalidation via Kafka |
| 102 | **Feature Flag System** | Targeting rules, rollout percentage, kill switch, A/B testing |
| 103 | **Configuration Management** | Distributed config, versioning, hot reload, Zookeeper/etcd |

---

## Tier 2: Medium Systems (25 pages)
*These use 5-10 foundation concepts. Core interview systems.*

| # | System | Key Concepts Practiced |
|---|--------|----------------------|
| 104 | **Flash Sale / Ticket Booking (BookMyShow)** | Pessimistic locking, SKIP LOCKED, fixed inventory + contention, queues |
| 105 | **Notification System** | SQS priority queues, bloom filter dedup, stateless workers, template engine |
| 106 | **Tinder / Dating App** | Redis geospatial, MongoDB, bloom filters, OAuth enrichment, feed generation |
| 107 | **Load Balancer Design** | L4/L7, Go source code, health checks, DNS-based scaling, connection proxying |
| 108 | **Web Crawler** | Bloom filters, consistent hashing, batch processing, inverted index, politeness |
| 109 | **Distributed Cache (Redis-like)** | Consistent hashing, eviction, replication, single-threaded, jemalloc |
| 110 | **Key-Value Store (DynamoDB-like)** | Consistent hashing, quorum, vector clocks, hinted handoff, sloppy quorum |
| 111 | **Distributed Task Scheduler** | Distributed locking, leader election, queues, retries, at-least-once |
| 112 | **S3-like Object Storage** | Partition management, leader election, signed URLs, tiered storage, 32GBps |
| 113 | **Recommendation Engine** | Graph DB, collaborative filtering, cosine similarity, Spark MLlib |
| 114 | **Fraud Detection System** | ML pipeline, Spark, real-time scoring (200ms SLA), decision trees |
| 115 | **Typeahead / Autocomplete** | Trie, prefix matching, ranking, personalization, distributed trie |
| 116 | **Proximity Service (Yelp/Nearby)** | Geospatial indexing (geohash, quadtree, S2), reviews, ranking |
| 117 | **Digital Wallet** | Double-entry bookkeeping, transactions, P2P transfer, concurrency |
| 118 | **Payment System (Stripe/Razorpay)** | Saga, idempotency keys, exactly-once, webhooks, distributed transactions |
| 119 | **A/B Testing Platform** | Experiment assignment (hashing), metrics collection, statistical significance |
| 120 | **Logging System (ELK-like)** | Ingestion at scale, indexing, retention, archival to S3 |
| 121 | **Monitoring & Alerting (Datadog-like)** | Time-series storage, dashboards, anomaly detection, alerting |
| 122 | **CI/CD Pipeline** | Build triggers, artifacts, deployment orchestration, rollback |
| 123 | **Distributed Message Queue (Kafka-like)** | Partitioned log, ISR, consumer groups, exactly-once, compaction |
| 124 | **CDN Design** | Edge servers, cache invalidation, origin shielding, routing, multi-CDN |
| 125 | **Distributed Locking Service (Chubby)** | Consensus-based locks, fencing tokens, lease management |
| 126 | **Data Pipeline (Airflow-like)** | DAG execution, scheduling, retries, monitoring, backfill |
| 127 | **Ad Click Aggregation** | Stream processing, dedup, MapReduce, exactly-once billing |
| 128 | **Ad Serving System** | Targeting, real-time bidding, click tracking, fraud detection |

---

## Tier 3: Complex Systems — Social & Messaging (13 pages)
*These use 10+ concepts. The headline interview systems.*

| # | System | Key Concepts Practiced |
|---|--------|----------------------|
| 129 | **Twitter / X** | Feed fanout, Kafka, Elasticsearch, caching, sharding, trending (NER) |
| 130 | **Twitter Trends** | Kafka multi-consumer, Elasticsearch, NER, entity clustering, time-decay |
| 131 | **Instagram** | CDN, S3, photo processing, feed ranking, stories, Cassandra |
| 132 | **Facebook News Feed** | Feed ranking (EdgeRank), friend graph, privacy, fanout-on-write vs read |
| 133 | **TikTok** | Recommendation (ML), video processing, CDN, for-you page, viral distribution |
| 134 | **Reddit** | Subreddits, voting algorithms (hot/best/top), comment threading, moderation |
| 135 | **LinkedIn** | Professional graph, job matching, feed, messaging, recruiter tools |
| 136 | **WhatsApp** | WebSockets, E2E encryption, delivery guarantees, group chat, voice/video |
| 137 | **Slack** | Channels, WebSocket scaling, Redis pub/sub, 3 persistence models, threads |
| 138 | **Discord** | Voice channels, Elixir→Rust, millions per server, data services |
| 139 | **Zoom / Video Conferencing** | WebRTC, SFU/MCU, screen sharing, recording, breakout rooms |
| 140 | **Email Service (Gmail)** | SMTP/IMAP, spam filtering, search, labels, storage |
| 141 | **In-App Chat (Intercom-like)** | Customer support, bot integration, agent routing, WebSockets |

---

## Tier 4: Complex Systems — Media & Streaming (8 pages)

| # | System | Key Concepts Practiced |
|---|--------|----------------------|
| 142 | **YouTube** | Video upload, transcoding (HLS/DASH), CDN, recommendations, search |
| 143 | **Netflix** | Adaptive bitrate, CDN (Open Connect), personalization, offline downloads |
| 144 | **Spotify** | Music streaming, playlists, Discover Weekly, podcast, offline mode |
| 145 | **Twitch / Live Streaming** | Ultra-low latency, chat at scale, subscriptions, VOD, clips |
| 146 | **Video Processing Pipeline** | Transcoding, thumbnails, captions, copyright (Content ID), Airflow DAG |
| 147 | **Podcast Platform** | RSS ingestion, audio processing, distribution, offline sync |
| 148 | **Audio Recognition (Shazam)** | Audio fingerprinting, matching, database design |
| 149 | **Clubhouse / Audio Rooms** | Live audio, speaker management, recording, moderation |

---

## Tier 5: Complex Systems — E-Commerce & Search (12 pages)

| # | System | Key Concepts Practiced |
|---|--------|----------------------|
| 150 | **Amazon / E-Commerce** | Catalog, cart, checkout, inventory, recommendations, reviews, search |
| 151 | **Shopping Cart** | Session management, persistence, pricing rules, inventory reservation |
| 152 | **Product Search & Catalog** | Faceted search, Elasticsearch, filtering, sorting, autocomplete |
| 153 | **Order Management System** | Order lifecycle, state machine, fulfillment, returns, tracking |
| 154 | **Inventory Management** | Stock tracking, warehouses, reserved stock, reconciliation |
| 155 | **Coupon / Promo System** | Validation, stacking rules, usage limits, fraud detection |
| 156 | **Auction System (eBay)** | Bidding engine, time-based closing, sniping protection, fraud |
| 157 | **Marketplace (Airbnb/Etsy)** | Two-sided marketplace, trust, search ranking, pricing, booking |
| 158 | **Google Search** | Web crawling, indexing, PageRank, query processing, autocomplete |
| 159 | **News Feed / Personalized Feed** | Fanout-on-write vs read, ranking signals, engagement prediction |
| 160 | **Trending / Hashtag System** | NER, time-decay ranking, anti-gaming, entity merging |
| 161 | **News Aggregator (Google News)** | Content crawling, dedup, clustering, personalization, trending |

---

## Tier 6: Complex Systems — Transportation & Location (7 pages)

| # | System | Key Concepts Practiced |
|---|--------|----------------------|
| 162 | **Uber / Lyft** | Ride matching, real-time location, ETA, surge pricing, dispatch |
| 163 | **Food Delivery (DoorDash/Zomato)** | Order routing, driver matching, real-time tracking, ETA |
| 164 | **Google Maps** | Routing (Dijkstra/A*), real-time traffic, map tiles, POI search |
| 165 | **Geofencing System** | Region monitoring, event triggers, fleet tracking, enter/exit |
| 166 | **Package Tracking** | Status updates, carrier integration, real-time notifications |
| 167 | **EV Charging Network** | Availability, reservation, payment, routing optimization |
| 168 | **Parking Finder** | Real-time availability, geospatial search, reservation |

---

## Tier 7: Complex Systems — Collaboration & Files (5 pages)

| # | System | Key Concepts Practiced |
|---|--------|----------------------|
| 169 | **Dropbox / Google Drive** | File sync (delta, chunking), dedup, versioning, conflict resolution |
| 170 | **Google Docs (Collaborative Editing)** | OT vs CRDT, cursor sync, conflict resolution, offline mode |
| 171 | **Notion** | Blocks-based content, workspaces, real-time collab, databases-as-pages |
| 172 | **Figma** | Collaborative design, multiplayer cursors, component library |
| 173 | **GitHub** | Repos, PRs, code review, CI/CD integration, issue tracking |

---

## Tier 8: Complex Systems — Finance & Booking (11 pages)

| # | System | Key Concepts Practiced |
|---|--------|----------------------|
| 174 | **Stock Trading Platform** | Event sourcing, matching engine (price-time priority), low latency |
| 175 | **Banking System** | Account management, transfers, compliance (KYC/AML), audit trail |
| 176 | **Cryptocurrency Exchange** | Order matching, hot/cold wallets, blockchain integration |
| 177 | **UPI / Real-Time Payments** | Inter-bank transfer, settlement, idempotency, reconciliation |
| 178 | **Invoice / Billing System** | Recurring billing, subscription, proration, dunning, tax |
| 179 | **Hotel Booking (Booking.com)** | Search, availability calendar, dynamic pricing, double-booking |
| 180 | **Movie Ticket Booking** | Seat map, concurrent selection, hold-then-pay, timeout release |
| 181 | **Flight Booking** | Fare rules, multi-leg, PNR management, overbooking algorithms |
| 182 | **Calendar System (Google Calendar)** | Events, recurring rules (RFC 5545), timezone, sharing, reminders |
| 183 | **Appointment Scheduling** | Availability slots, conflict resolution, multi-timezone, waitlist |
| 184 | **Ticketmaster** | High-demand events, virtual queue, inventory locking, scalping prevention |

---

## Tier 9: Specialized Systems (12 pages)

| # | System | Key Concepts Practiced |
|---|--------|----------------------|
| 185 | **Quora / Stack Overflow** | Q&A, voting, reputation, search, moderation, SEO |
| 186 | **Medium / Blogging Platform** | Publishing, claps, recommendations, paywall |
| 187 | **Pinterest** | Visual discovery, pin boards, image similarity search |
| 188 | **Analytics Platform (Mixpanel)** | Event tracking, funnels, cohorts, retention, dashboards |
| 189 | **Code Execution Platform (LeetCode)** | Sandboxed execution, multi-language, resource limits, queuing |
| 190 | **Content Moderation System** | ML classification + human review, appeal workflow, policy |
| 191 | **ML Model Serving Platform** | Model registry, A/B, canary, feature store, inference |
| 192 | **AI Chatbot Platform** | LLM integration, RAG, conversation state, rate limiting |
| 193 | **IoT Platform** | Device registry, telemetry ingestion, command dispatch, fleet |
| 194 | **BitTorrent / P2P System** | Peer discovery, chunk distribution, DHT, seeding/leeching |
| 195 | **Password Manager** | Client-side encryption, vault sync, zero-knowledge |
| 196 | **Multiplayer Game** | Game state sync, lag compensation, matchmaking, anti-cheat |

---

# PART 3: REAL-WORLD DEEP DIVES (8 pages)
*Study actual published architectures from companies and research papers.*

| # | System | Source |
|---|--------|--------|
| 197 | **Amazon Dynamo** — consistent hashing, vector clocks, sloppy quorum, hinted handoff, read repair | Dynamo paper (2007) |
| 198 | **Google BigTable** — tablets, SSTables, bloom filters, compaction, column-family model | BigTable paper (2006) |
| 199 | **Google File System (GFS)** — chunk servers, master, 64MB chunks, append-only writes | GFS paper (2003) |
| 200 | **Google Spanner** — TrueTime, globally distributed ACID, Paxos groups, external consistency | Spanner paper (2012) |
| 201 | **Meta's TAO** — social graph cache, read-after-write consistency, cache consistency at scale | TAO paper (2013) |
| 202 | **Discord Architecture** — Elixir→Rust migration, millions per server, data services | Discord eng blog |
| 203 | **Hotstar (50M Concurrent)** — auto-scaling, event-driven, handling cricket match spikes | Hotstar eng blog |
| 204 | **Stripe Idempotency** — preventing duplicate charges, idempotency keys, distributed safety | Stripe eng blog |

---

# GRAND SUMMARY

| Part | Pages | Content |
|------|-------|---------|
| Part 1: Foundations | 88 | ALL concepts, tools, patterns, protocols |
| Part 2: Case Studies | 108 | Simple → Complex systems |
| Part 3: Deep Dives | 8 | Real-world paper studies |
| **TOTAL** | **204** | |

### Milestones

| Milestone | Pages | What you can do after |
|-----------|-------|----------------------|
| **M1** | 1-54 | Core principles + all DBs + caching + messaging + distributed systems |
| **M2** | 1-88 | ALL foundations complete — full mental toolkit |
| **M3** | 89-128 | Simple + medium case studies — can handle most interviews |
| **M4** | 129-196 | All complex systems — can handle ANY interview |
| **M5** | 197-204 | Paper deep dives — PhD-level understanding |

---

*Build page #1, then #2, then #3... No skipping.*
