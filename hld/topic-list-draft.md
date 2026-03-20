# HLD Topic List — DRAFT

> Goal: Miss nothing. Go deeper than any existing resource.

---

## PART 1: FOUNDATIONS (~35 topics)

### A. Networking & Communication (7)
1. Client-Server Model & How the Internet Works
2. TCP & UDP — Deep Internals (handshakes, congestion control, windowing)
3. HTTP 1.1 / 2 / 3 — Evolution, multiplexing, QUIC
4. WebSockets, SSE, Long Polling — Real-time Communication
5. gRPC & Protocol Buffers
6. REST API Design — Versioning, pagination, idempotency, error handling
7. DNS — Resolution, caching, GeoDNS, failover

### B. Databases (12)
8. Relational Databases — ACID, indexing, normalization, denormalization, query optimization
9. Database Isolation Levels & Locking — Pessimistic, optimistic, MVCC, SKIP LOCKED
10. Scaling Databases — Replication, read replicas, connection pooling, failover
11. Sharding & Partitioning — Strategies, hotspots, rebalancing, cross-shard queries
12. Document Databases — MongoDB internals, when to use, partial updates, aggregation pipeline
13. Key-Value Stores — Redis deep dive (data structures, persistence, clustering, Lua scripting)
14. Column-Family Stores — Cassandra, HBase, wide-column design, time-series patterns
15. Graph Databases — Neo4j, traversal algorithms, when (and when NOT) to use
16. Search Engines — Elasticsearch, inverted index, tokenization, relevance scoring (TF-IDF, BM25)
17. Time-Series Databases — InfluxDB, TimescaleDB, retention policies, downsampling
18. NewSQL — CockroachDB, Google Spanner, TiDB — distributed SQL
19. Storage Engine Internals — B+ Trees, LSM Trees, SSTables, WAL, compaction strategies

### C. Caching (4)
20. Caching Strategies — Cache-aside, write-through, write-behind, read-through, refresh-ahead
21. Cache Eviction & Internals — LRU, LFU, random, Redis TTL sampling, jemalloc
22. Distributed Caching — Consistent hashing, replication, cache stampede, thundering herd
23. CDN — How it works, PoPs, BGP routing, cache invalidation, push vs pull, edge computing

### D. Messaging & Event Systems (5)
24. Message Queues — SQS, RabbitMQ, dead letter queues, exactly-once, FIFO vs standard
25. Event Streaming — Kafka deep dive (partitions, ISR, consumer groups, exactly-once, Kafka Connect)
26. Pub/Sub Systems — Redis Pub/Sub, Google Pub/Sub, fan-out patterns
27. Event-Driven Architecture — Event sourcing, CQRS, saga pattern, outbox pattern
28. Stream Processing — Kafka Streams, Apache Flink, windowing, watermarks, late data

### E. Distributed Systems Core (8)
29. CAP Theorem & PACELC — What they actually mean, real-world implications
30. Consistency Models — Strong, eventual, causal, read-your-writes, monotonic reads
31. Consensus Protocols — Raft, Paxos, ZAB — how distributed agreement works
32. Distributed Locking — Redis Red Lock, Zookeeper, fencing tokens, Kleppmann's critique
33. Leader Election — Bully algorithm, Raft leader election, Zookeeper/etcd/Consul
34. Consistent Hashing — Ring, virtual nodes, replication, data migration, jump consistent hashing
35. Bloom Filters & Probabilistic Data Structures — HyperLogLog, Count-Min Sketch, cuckoo filters
36. Distributed ID Generation — Snowflake, Flickr tickets, ULID, UUID tradeoffs, cursor pagination

### F. Load Balancing & Traffic Management (4)
37. Load Balancers — L4 vs L7, algorithms, health checks, DNS-based LB, Nginx/HAProxy/Envoy
38. API Gateway — Authentication, rate limiting, request routing, throttling, Kong/AWS API Gateway
39. Rate Limiting — Token bucket, sliding window, leaky bucket, distributed rate limiting
40. Circuit Breaker & Resilience — 3-state model, bulkhead, retry with backoff, timeout strategies

### G. Storage & File Systems (3)
41. Blob Storage & Object Storage — S3 internals, signed URLs, multipart upload, storage classes
42. Distributed File Systems — HDFS, GFS, erasure coding, replication strategies
43. Tiered Storage — Hot/warm/cold/glacier, data lifecycle, archival strategies

### H. Data Processing & Pipelines (3)
44. Batch Processing — MapReduce, Spark, DAGs, fault tolerance, data locality
45. Data Warehousing & Lakes — Redshift, BigQuery, Snowflake, lakehouse architecture, Parquet/ORC
46. ETL & Data Pipelines — Airflow, CDC (Change Data Capture), Debezium, data enrichment

### I. Security (3)
47. Authentication & Authorization — OAuth 2.0, JWT, SAML, SSO, API keys, RBAC
48. TLS/SSL & Encryption — At rest, in transit, certificate management, mTLS
49. API Security — CORS, CSRF, input validation, rate limiting, DDoS protection

### J. Observability (3)
50. Logging — Structured logging, ELK stack, log aggregation, correlation IDs
51. Metrics & Monitoring — Prometheus, Grafana, RED/USE methods, alerting strategies
52. Distributed Tracing — Jaeger, Zipkin, OpenTelemetry, trace propagation, span analysis

### K. Infrastructure & Deployment (4)
53. Containers & Orchestration — Docker, Kubernetes, service discovery, pod scheduling
54. CI/CD Pipelines — Build, test, deploy, rollback strategies
55. Deployment Strategies — Blue-green, canary, rolling, feature flags, A/B testing
56. Serverless — Lambda, cold starts, event-driven, when to use/avoid

### L. Architecture Patterns (3)
57. Microservices — Decomposition, communication, data ownership, service mesh
58. Back-of-Envelope Estimation — Traffic, storage, bandwidth, QPS calculations, methodology
59. System Design Interview Framework — How to approach, structure, time management

---

## PART 2: CASE STUDIES (~70 systems)

### Category 1: Social Media & Content (8)
1. Design Twitter / X — Feed generation, trending, search, tweet fanout
2. Design Instagram — Photo sharing, stories, explore feed, reels
3. Design Facebook News Feed — Ranking, edge rank, friend-of-friend, privacy
4. Design TikTok / Short Video Platform — Recommendation, video processing, for-you page
5. Design Reddit — Subreddits, upvote/downvote ranking, comment threading
6. Design LinkedIn — Professional network, connections, job matching
7. Design Medium / Blogging Platform — Content publishing, recommendations, claps
8. Design Pinterest — Visual discovery, pin boards, image search

### Category 2: Messaging & Communication (7)
9. Design WhatsApp — End-to-end encryption, message delivery, group chat, status
10. Design Slack — Channels, threads, search, file sharing, presence
11. Design Discord — Voice channels, servers, roles, real-time chat at gaming scale
12. Design Zoom / Video Conferencing — WebRTC, SFU/MCU, screen sharing, recording
13. Design Email Service (Gmail) — SMTP, spam filtering, search, labels
14. Design Push Notification System — Multi-channel, priority, dedup, delivery tracking
15. Design Comment System — Threading, moderation, real-time updates, ranking

### Category 3: Media & Streaming (7)
16. Design YouTube — Video upload, transcoding, streaming (HLS/DASH), recommendations
17. Design Netflix — Content delivery, personalization, offline downloads, multi-device
18. Design Spotify — Music streaming, playlist, discover weekly, podcast
19. Design Twitch / Live Streaming — Low-latency streaming, chat, donations, clips
20. Design Podcast Platform — RSS ingestion, audio processing, offline sync
21. Design Image Hosting (Imgur/Flickr) — Upload, resize, CDN delivery, galleries
22. Design Video Processing Pipeline — Transcoding, thumbnails, captions, copyright detection

### Category 4: E-Commerce & Marketplace (9)
23. Design Amazon / E-Commerce Platform — Catalog, cart, checkout, recommendations, reviews
24. Design Shopping Cart — Session management, persistence, pricing rules, inventory check
25. Design Payment System (Stripe/Razorpay) — Payment gateway, idempotency, refunds, webhooks
26. Design Flash Sale System — Inventory locking, queue-based, fairness, SKIP LOCKED
27. Design Product Catalog & Search — Faceted search, filtering, sorting, Elasticsearch
28. Design Order Management System — Order lifecycle, fulfillment, returns, tracking
29. Design Inventory Management — Stock tracking, warehouses, reserved stock, reconciliation
30. Design Auction System (eBay) — Bidding, time-based closing, sniping, fraud prevention
31. Design Coupon / Promo Code System — Validation, stacking rules, usage limits, analytics

### Category 5: Search & Discovery (6)
32. Design Google Search — Web crawling, indexing, PageRank, query processing, autocomplete
33. Design Typeahead / Autocomplete — Trie, prefix matching, personalization, ranking
34. Design Web Crawler — URL frontier, politeness, dedup, distributed crawling
35. Design Recommendation Engine — Collaborative filtering, content-based, hybrid, cold start
36. Design News Feed / Personalized Feed — Ranking, fanout-on-write vs read, engagement signals
37. Design Hashtag / Trending System — Entity detection, time-decay ranking, anti-gaming

### Category 6: Transportation & Location (6)
38. Design Uber / Lyft — Ride matching, ETA, surge pricing, driver tracking
39. Design Uber Eats / Food Delivery — Restaurant discovery, order routing, delivery tracking, ETA
40. Design Google Maps — Routing, real-time traffic, map tiles, place search
41. Design Proximity Service (Nearby Friends) — Geospatial indexing, real-time location sharing
42. Design Geofencing System — Region monitoring, event triggers, fleet tracking
43. Design Parking Finder — Availability tracking, reservation, real-time updates

### Category 7: Infrastructure & Platform Tools (14)
44. Design URL Shortener — ID generation, encoding, redirection, analytics
45. Design PasteBin / GitHub Gists — File storage, expiration, sharing, syntax highlighting
46. Design Rate Limiter — Algorithms, distributed, library vs service
47. Design Distributed Cache (Redis-like) — Eviction, consistent hashing, replication
48. Design Object Storage (S3-like) — Partition management, durability, signed URLs
49. Design Distributed File System (HDFS-like) — Block storage, replication, namenode
50. Design CDN — Edge servers, cache invalidation, origin shielding, routing
51. Design Load Balancer — L4/L7, health checks, connection draining, auto-scaling
52. Design Distributed Task Scheduler — Job queuing, cron-like, retries, priority, dead letters
53. Design Logging System (ELK-like) — Ingestion, indexing, querying, retention
54. Design Monitoring & Alerting (Datadog-like) — Metrics collection, dashboards, anomaly detection
55. Design CI/CD Pipeline — Build triggers, artifact storage, deployment orchestration
56. Design Feature Flag System — Targeting rules, rollout percentage, kill switch
57. Design Configuration Management — Distributed config, versioning, hot reload

### Category 8: Real-Time & Gaming (6)
58. Design Stock Trading Platform — Order book, matching engine, market data feed
59. Design Live Sports Commentary (CricBuzz) — Real-time updates, caching, millions of readers
60. Design Online Multiplayer Game — Game state sync, lag compensation, matchmaking
61. Design Leaderboard — Real-time ranking, sorted sets, sharded leaderboards
62. Design Live Collaboration (Google Docs) — OT/CRDT, cursor sync, conflict resolution
63. Design Real-Time Analytics Dashboard — Streaming aggregation, time windows, drill-down

### Category 9: Finance & Payments (5)
64. Design Digital Wallet — Balance management, transactions, top-up, P2P transfer
65. Design Fraud Detection System — ML pipeline, real-time scoring, decision trees
66. Design Banking System — Account management, transfers, statements, compliance
67. Design Cryptocurrency Exchange — Order matching, wallet management, blockchain integration
68. Design Invoice / Billing System — Recurring billing, proration, dunning, tax calculation

### Category 10: Booking & Scheduling (5)
69. Design Hotel Booking (Booking.com) — Search, availability, pricing, double-booking prevention
70. Design Movie Ticket Booking (BookMyShow) — Seat selection, locking, payment timeout
71. Design Flight Booking — Search, fare rules, PNR management, overbooking
72. Design Calendar System (Google Calendar) — Events, recurring rules, timezone, sharing
73. Design Appointment Scheduling — Availability slots, conflict resolution, reminders

### Category 11: File & Document (4)
74. Design Dropbox / Google Drive — File sync, versioning, sharing, conflict resolution
75. Design Google Docs — Real-time collaboration, OT/CRDT, permissions, offline mode
76. Design Document Management System — Upload, indexing, search, access control
77. Design Digital Signature Platform (DocuSign) — Signing workflow, audit trail, legal validity

### Category 12: Analytics & Data (4)
78. Design A/B Testing Platform — Experiment assignment, metrics collection, statistical significance
79. Design Analytics Platform (Mixpanel/Amplitude) — Event tracking, funnel analysis, cohorts
80. Design Ad Serving System — Targeting, bidding, click tracking, fraud detection
81. Design Data Pipeline Platform (Airflow-like) — DAG execution, scheduling, monitoring

### Category 13: Unique / Specialized (5)
82. Design Tinder / Dating App — Geospatial matching, feed generation, bloom filter dedup
83. Design Stack Overflow / Q&A Platform — Voting, reputation, search, moderation
84. Design Yelp / Review System — Business search, reviews, photos, ranking
85. Design Ticket Booking (Ticketmaster) — High-demand inventory, queue fairness, scalping prevention
86. Design IoT Platform — Device registry, telemetry ingestion, command dispatch, fleet management

---

## SUMMARY

| Category | Count |
|----------|-------|
| Foundation topics | ~59 |
| Case studies | ~86 |
| **TOTAL** | **~145 pages** |

Each foundation topic = 3 sub-pages (main + practice + Q&A with 50-100 questions)
Each case study = 3 sub-pages (build + deep-dive + Q&A with 50-100 questions)
Total sub-pages = ~435

---

## FROM TRANSCRIPTS vs ORIGINAL RESEARCH

### Foundation topics with transcript base (supplement needed)
- Client-Server & Protocols (L21)
- Relational DBs + ACID (L5, L6, Live 3)
- Isolation Levels + Locking (L6, Live 3)
- Scaling DBs (L7, L8, Live 1-2)
- Sharding (L8, Live 9)
- Document DBs (L9, Live 4)
- Key-Value / Redis (L9, Live 9)
- Graph DBs (L9, Live 4)
- Storage Engine Internals (Live 10, 12)
- Caching Strategies (L12, L13, Live 1-2)
- Cache Eviction (Live 9)
- CDN (Live 7)
- Message Queues (L14)
- Kafka (L15, Live 2)
- Pub/Sub (L16)
- Load Balancers (L17, Live 5)
- Circuit Breakers (L18)
- Data Redundancy (L19)
- Leader Election (L20, Live 5)
- Blob Storage / S3 (L22, Live 11)
- Bloom Filters (L23, Live 12)
- Consistent Hashing (L24, Live 9)
- Big Data / Spark (L25)
- Distributed Locking (Live 5)
- Distributed ID Gen (Live 6)
- Back-of-Envelope (scattered across all)

### Foundation topics needing 100% original research
- HTTP 2/3, QUIC
- gRPC & Protocol Buffers
- DNS Internals
- REST API Design
- Column-Family Stores (Cassandra deep dive)
- Search Engines (Elasticsearch deep dive)
- Time-Series DBs
- NewSQL (Spanner, CockroachDB)
- Distributed Caching (thundering herd, stampede)
- Event-Driven Architecture (CQRS, event sourcing, saga, outbox)
- Stream Processing (Flink, windowing, watermarks)
- CAP Theorem & PACELC
- Consistency Models
- Consensus (Raft, Paxos, ZAB)
- Rate Limiting Algorithms
- Distributed File Systems
- Tiered Storage
- Data Warehousing & Lakes
- ETL & CDC
- Auth (OAuth, JWT, SAML)
- TLS/Encryption
- API Security
- Logging, Metrics, Tracing
- Containers & K8s
- CI/CD
- Deployment Strategies
- Serverless
- Microservices Patterns
- System Design Interview Framework

### Case studies with transcript base
- E-commerce Product Listing (L26)
- Rate Limiter (L27)
- Notification System (L28)
- Abuse Masker (L29)
- Tinder Feed (L30)
- Twitter Trends (L31)
- URL Shortener (L32)
- PasteBin/Gists (L33)
- Fraud Detection (L34)
- Recommendation Engine (L35)
- Web Crawler (L36)
- Social Network (Live 7-8)
- Slack/WhatsApp Chat (Live 4)
- CricBuzz Commentary (Live 13)
- S3 Design (Live 11)
- Distributed Cache (Live 9)
- Recent Searches (Live 13)
- Online/Offline Indicator (Live 1)
- Airline Check-in / Flash Sale (Live 3)

### Case studies needing 100% original research
- All the remaining ~67 systems
