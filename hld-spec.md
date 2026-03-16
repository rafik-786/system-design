# HLD Page Spec — The Complete Blueprint

> **What this is:** The master framework for building ALL HLD pages on System Guide — foundations AND case studies. Not a rigid template. A philosophy with tools.
>
> **The one rule:** After reading any page, the reader should be able to THINK about the problem, not recite facts about it.

---

## Part 1: Why This Exists

### The Landscape Is Broken

| Resource | What's wrong |
|----------|-------------|
| Textbooks (DDIA) | Incredible depth, but reads like a PhD thesis. You highlight everything, remember nothing. |
| YouTube (Gaurav Sen, etc.) | Fun to watch, but surface-level. You feel smart for 10 minutes, then forget. |
| Grokking | Formulaic. Every system: requirements → estimation → API → schema → HLD. Feels like filling out a form. |
| Blog posts | Scattered. One post covers caching in 800 words. Another covers Redis in 1200 words. No journey, no connections. |
| Interview prep sites | Optimized for memorization, not understanding. "Here are the 5 caching strategies. Memorize them." |

### What System Guide Does Differently

**Textbook depth + YouTube clarity + something neither has: the feeling of DISCOVERING it yourself.**

The reader doesn't learn "5 caching strategies." The reader faces a dying database, tries solutions, watches them break, discovers caching, discovers cache-aside, hits a staleness bug, discovers write-through, realizes it has trade-offs, and walks away with the THINKING SKILL to approach any caching problem — even ones they've never seen.

### The Outcome

After reading a System Guide HLD page, the reader can:

1. **Explain the concept to a non-engineer** ("It's like keeping a photocopy of a popular library book at the front desk so people don't have to walk to the back shelf every time")
2. **Know when to use it AND when NOT to** ("Caching makes sense here because reads >> writes, but NOT here because the data changes every second")
3. **Make architectural decisions with math** ("100M users × 20 bytes = 2GB — storage isn't the bottleneck, compute is, so we shard by user ID")
4. **Handle follow-up questions** ("What if the cache goes down?" → "We degrade to DB reads. Latency increases 10x but nothing breaks. Here's why...")
5. **Design systems they've never seen** by applying reusable thinking frameworks

---

## Part 2: The Philosophy

### The 10 Laws of System Guide HLD Content

**Law 1: Problems before solutions. Always.**
Every concept starts with a SCENARIO where the reader feels the PAIN that the concept solves. Never open with a definition. Never.

- ❌ "Caching is a technique to store frequently accessed data in fast storage to reduce latency."
- ✅ "Your database is handling 100K reads per second. Response time just crossed 3 seconds. Users are leaving. You've already added 5 read replicas. What do you do?"

**Law 2: Think First, then reveal.**
Before every major insight, the reader gets a 🧠 Think First challenge. This creates a GAP in their mind that the explanation FILLS. Without the gap, the explanation is just words.

```
🧠 Think First
You have 4 database shards. You route keys using key % 4.
Now one shard dies and you need to remove it.
What happens to the data? How much needs to move?
Think about it before scrolling down.
```

Then — and only then — reveal consistent hashing.

**Law 3: Multiple iterations, not one cycle.**
Real understanding comes from TRYING, FAILING, and TRYING AGAIN. Don't show one naive approach → one fix. Show 3-5 approaches, each better than the last, each with clear numbers.

Arpit's airline check-in: Approach 0 → 1 → 2 → 3 → 4 (FOR UPDATE, 1.7s) → 5 (SKIP LOCKED, 147ms). SIX iterations. The reader FEELS the improvement at each step.

**Law 4: Math at every decision.**
No decision without numbers. No numbers without context. Not "the database is slow" — "100K reads/sec × 4ms per read = 400 seconds of CPU per second on a single core. You need 400 cores just for reads."

Not "we need sharding" — "1 billion users × 8 bytes per user = 8GB storage (fits on one node easily). But 6 million heartbeat updates per minute = 100K writes/sec. THAT's why we shard — for compute, not storage."

**Law 5: Real code, real commands, real configs — inline.**
Don't just say "use Redis for distributed locking." Show:
```
SET lock:order:123 owner:server-7 EX 30 NX
```
And explain: SET the key only if it doesn't exist (NX), with a 30-second expiry (EX 30), so if the server dies, the lock auto-releases.

Don't say "use SKIP LOCKED for inventory." Show:
```sql
SELECT id FROM seats WHERE user_id IS NULL
ORDER BY id LIMIT 1 FOR UPDATE SKIP LOCKED;
```
And show the benchmark: 1.7s → 147ms. 10× faster with two words.

**Law 6: The Anti-Lesson is mandatory.**
For every concept, explicitly teach when NOT to use it. This is what separates engineers from pattern-matchers.

- "Just because cache exists does not mean you add it." (Arpit, PasteBin lecture)
- "Not everything needs to be a service." (Arpit, Abuse Masker lecture)
- "More boxes does not mean better systems." (Arpit, Rate Limiter lecture)

The Anti-Lesson should be a PROMINENT section, not a footnote. It should include a real example where someone used the concept wrong and suffered for it.

**Law 7: Woven, not separated.**
Real-world examples, trade-offs, failure modes, code snippets — these are NOT separate sections to be read later. They're woven INTO the explanation at the exact moment they're relevant.

When explaining async replication, don't save "replication lag" for a "What Can Go Wrong" section. Show it RIGHT THERE: "Your master accepts the write. Returns 200 OK. The client refreshes. Reads from replica. Sees old data. The user thinks their write was lost. This is replication lag. This is the trade-off you accepted when you chose async over sync."

**Law 8: Connections to past and future concepts everywhere.**
Every concept connects to others. Make these connections explicit and frequent — not just in a "Related Topics" section at the end.

"Remember Redis Pub/Sub from the messaging page? Here's where circuit breakers use it — pushing config changes to all servers reactively."

"This is exactly the bloom filter we used in the Notification System case study — except here it's shielding our LSM tree from unnecessary disk reads."

**Law 9: One mental model per topic.**
Every topic should leave the reader with ONE clear mental model they can hold in their head forever.

- **Caching:** "A faster, smaller copy. Fresh enough is good enough."
- **Kafka:** "An append-only diary that everyone reads at their own pace."
- **Consistent hashing:** "Data owns a spot on the ring. Nodes come and go. Data barely moves."
- **CAP:** "Network breaks. Choose: wrong answers or no answers?"
- **Load balancer:** "One phone number for 100 people. Caller doesn't know who picks up."
- **Circuit breaker:** "Don't keep calling a friend who isn't picking up. Try again in 5 minutes."

This mental model appears in the TL;DR, reinforced in the analogy, and tested in the Q&A.

**Law 10: The reader should be able to TEACH this to someone else.**
That's the ultimate test. If your page is good enough that the reader can turn around and explain it to a colleague — with the analogy, the math, the trade-offs, and the "when not to use it" — you've succeeded.

---

### The Reader's Emotional Arc

Every page should create this journey:

```
"I've heard this term but don't really get it"          (opening)
→ "Oh, THIS is the problem it solves"                   (The Scenario)
→ "Let me try to solve it myself..."                    (🧠 Think First)
→ "My approach kind of works but..."                    (First Attempt)
→ "Ah, it falls apart at scale — I see why"             (Where It Breaks)
→ "THAT's clever. I wouldn't have thought of that"      (The Breakthrough)
→ "Wait, this goes really deep"                         (Under the Hood)
→ "So there are different flavors for different problems" (Variations)
→ "Now I know which tool to actually use"               (The Tools)
→ "Real companies deal with the same problems!"         (At Scale)
→ "Wow, so many ways this can go wrong"                 (Failures)
→ "OK, now I know WHEN to use it and when NOT to"       (Decisions)
→ "I could explain this in an interview right now"       (Interview Playbook)
→ "Let me build it."                                     (Hands-On)
```

---

## Part 3: The Section Menu

Not every topic needs every section. This is a MENU, not a checklist. Pick what fits.

### For Foundation / Concept Pages

| Section | When to use | What it does |
|---------|------------|-------------|
| **Hero** | Always | Title, one-liner, accent color, breadcrumb |
| **TL;DR** | Always | 30-second mental model + revision card. NOT a summary of the page — a crystallized understanding. "Caching = faster copy, fresh enough is good enough." |
| **The Scenario** | Always | A real, concrete problem that creates the NEED for this concept. The reader should feel the pain. Include 🧠 Think First. |
| **The First Attempt** | When there's a natural naive approach | What you'd try first. Show it working for small scale. Do the math. Show why it seems reasonable. |
| **Where It Breaks** | When there's a first attempt | Scale it up. Show exact numbers where it fails. "At 100K users, this takes 400 CPU-seconds per second. You need 400 cores." The reader should think "oh no." |
| **The Breakthrough** | Always | The concept in plain English + a real-world analogy. No jargon yet. "What if we kept a copy of the popular stuff somewhere faster?" This is the AHA moment. |
| **How It Works** | Always | Step-by-step mechanics. Heavy SVGs. Walk through an example end-to-end. THIS is where you first introduce the proper terminology — after the reader already understands the idea. |
| **Going Deeper** | When internals matter (most topics) | Algorithms, data structures, protocols behind the concept. jemalloc for Redis. B+ trees for indexes. Raft log replication for consensus. This is where we go BEYOND Arpit. Include actual code/commands. |
| **The Variations** | When there are multiple strategies/types | Each variation introduced through a NEW PROBLEM that the basic version can't solve. Not a list of 5 types — a series of "but what if THIS happens?" scenarios. |
| **The Tools** | When there are real technologies | Real technologies with architecture SVGs, actual commands, configs, and "when to pick which." Redis vs Memcached. Kafka vs RabbitMQ vs SQS. With benchmarks and trade-offs. |
| **At Scale** | When real-world data exists | How real companies use this. WITH NUMBERS. "Discord: 15M users per server." "Netflix: 100 petabytes on S3." "CricBuzz: 12KB per match, all reads from Redis." Woven with trade-off analysis. |
| **What Can Go Wrong** | Always for infrastructure topics | Failure modes with SVGs. Cache stampede, split brain, cascading failures, thundering herd. Each failure: what happens → why → how to detect → how to fix → how to prevent. |
| **The Anti-Lesson** | Always | When NOT to use this concept. With a real example of someone using it wrong. "GitHub Gists: files accessed 5-50 times. Caching 10MB files in Redis? Wasteful." |
| **Decision Framework** | When there are multiple options to choose from | Flowchart SVG. Given your constraints → pick this variation / this tool / this approach. The reader follows the arrows and lands on the right answer. |
| **Common Mistakes** | Always | What engineers and interview candidates get wrong. Each mistake: what people think → why it's wrong → the truth. "'Relational DBs don't scale' — worst justification for a design decision ever." |
| **Interview Playbook** | Always | How this concept shows up in interviews. What to say. What NOT to say. How to bring it up naturally. Sample dialogue. |
| **Hands-On Challenges** | Always | 3-5 exercises. Not theory questions — BUILD something. "Set up two MySQL instances, make one a replica, route reads to replica from your API server." Each with difficulty level and estimated time. |
| **Quick Reference** | Always | Cheat card. The entire topic on one screen. For revision before interviews. |
| **Connected Topics** | Always | What to study next. Links to related foundations AND to case studies that use this concept. "This concept is used in: URL Shortener (for X), Notification System (for Y), Twitter (for Z)." |

**Typical page size:** 12-16 sections for small topics (Bloom Filters, Webhooks). 16-19 for medium topics (Caching, Load Balancers). For massive topics (Databases, Distributed Systems), split into multiple pages — each following the same menu.

---

### For System Design Case Study Pages

| Section | When to use | What it does |
|---------|------------|-------------|
| **Hero** | Always | Title, system type, accent color |
| **TL;DR** | Always | The architecture in 30 seconds + mental model |
| **The System** | Always | What we're building, who uses it, why it matters, what makes it interesting. Make the reader CARE. Not "Design a URL shortener" but "Every day, 500 million links are shortened. Behind that simple redirect is a system that generates collision-free IDs at 100K/sec, stores billions of mappings, and redirects in under 50ms. Let's build it." |
| **Scoping It Out** | Always | Requirements framed as an interview conversation. "The interviewer says: design a notification system. What questions do you ask BEFORE drawing anything?" Functional + non-functional. Include 🧠 Think First: "Write down 5 questions you'd ask." |
| **Napkin Math** | Always | Back-of-envelope estimation. But teach the METHOD, not just the numbers. "Step 1: How many users? Step 2: How active? Step 3: What's each action's data size? Step 4: Multiply." The reader should be able to do this for ANY system after reading 3-4 case studies. |
| **V1: The Simplest Thing** | Always | One server, one database. It works for 100 users. Draw it. 🧠 Think First: "Before scrolling, draw the simplest architecture that works." Then show V1 and explain every component. |
| **What Breaks** | Always (between each version) | At 10K users → Y breaks. At 100K → Z melts. Show the MATH. "10K users × 10 writes/sec = 100K writes/sec. One MySQL instance handles ~20K writes/sec. We're 5× over capacity." This section can repeat between each V. |
| **V2, V3, V-Final** | Always (progressive build) | Each version introduces ONE building block motivated by the problem from "What Breaks." V2 might add a cache. V3 might shard the DB. V4 might add a message queue. Each version has a before/after architecture SVG. The number of versions depends on the system complexity (2-5 typically). |
| **The Full Architecture** | Always | The complete system SVG with EVERY component. This is the masterpiece. All the V1→V2→V3 evolution visible in one diagram. |
| **The Data Model** | Always | Schema + APIs. AFTER the architecture (because the schema only makes sense once you understand the system). Include: tables/collections, key fields, why certain fields exist (linking back to architecture decisions), actual CREATE TABLE or JSON schema. API endpoints with request/response examples. |
| **Deep Dives** | For complex systems | Zoom into the most interesting/tricky component(s). The thing that makes this system UNIQUE. For URL shortener: the ID generation scheme. For Twitter: the feed fanout. For Uber: the matching algorithm. Each deep dive has its own SVGs and code. |
| **Data Flows** | Always | Read path and write path as step-by-step SVGs. "User clicks short URL → Load balancer → API server → check Redis cache → cache hit? return → cache miss? check DB → update cache → redirect." Numbered steps on the SVG. |
| **When Things Go Wrong** | Always | Failure scenarios. "The cache dies. What happens?" "A database shard goes down. What happens?" "The message queue fills up. What happens?" Each with: what the user experiences → what the system does → how it recovers. |
| **The Other Way** | When meaningful alternatives exist | Different architecture approaches. "We chose fan-out-on-write. What if we'd done fan-out-on-read?" Show the alternative, compare trade-offs. "Instagram does fan-out-on-write. Twitter does a hybrid. Here's why." |
| **Extensions** | Always | Follow-up features interviewers love: "Now add search." "Now support 50 countries." "Now add analytics." Each with a mini-architecture delta showing what changes. |
| **How They Actually Did It** | When public info exists | Real architecture from engineering blogs. "Twitter's actual feed architecture uses..." "Uber's matching system actually..." With links to the original engineering posts. Compare with our design. |
| **Interview Playbook** | Always | Step-by-step guide: how to present this in 35-45 minutes. Minute 0-5: clarify scope. Minute 5-10: estimation. Minute 10-25: high-level design. Minute 25-35: deep dives. Minute 35-45: failures + extensions. What to say FIRST. What to save for the end. |
| **Common Traps** | Always | What candidates mess up. "Jumping to microservices before justifying them." "Forgetting to estimate." "Not discussing trade-offs." Each trap with: what people do → why it's wrong → what to do instead. |
| **Hands-On Challenges** | Always | Build parts of this system. "Implement the URL encoding function." "Set up Redis caching with TTL." "Build the estimation spreadsheet." |
| **Quick Reference** | Always | One-screen summary: architecture diagram + key numbers + key decisions + key trade-offs. |
| **Connected Topics** | Always | Foundation concepts used in this design + related case studies. "This system uses: Consistent Hashing (for DB sharding), Bloom Filters (for dedup), Kafka (for analytics pipeline)." |

**Typical page size:** 18-23 sections. Simple systems (PasteBin) ~18. Complex systems (Uber, Twitter) ~23. For very complex systems, deep dives + failures + extensions may go on a second page.

---

## Part 4: The Writing Method

### How to Write ANY Section

Every section, regardless of type, follows this pattern:

```
1. HOOK — Why should I care about this section? (1-2 sentences)
2. 🧠 THINK FIRST — Challenge the reader (for major sections)
3. DISCOVERY — Walk through the idea, building understanding step by step
4. EVIDENCE — SVGs, code, math, real-world examples (WOVEN IN, not appended)
5. SO WHAT? — Trade-offs, implications, connections to other concepts (1-2 sentences)
```

### Concrete Example: Writing "The Variations" Section for Caching

❌ **Textbook approach:**
> "There are 5 caching strategies:
> 1. Cache-aside: Application reads cache first...
> 2. Write-through: Application writes to both cache and DB...
> 3. Write-behind: Application writes to cache, async to DB...
> 4. Read-through: Cache loads from DB on miss...
> 5. Refresh-ahead: Cache refreshes before expiry..."

✅ **System Guide approach:**

> ### The Variations — Each Flavor Exists Because of a Specific Problem
>
> **Problem 1: "My first request is always slow."**
>
> With lazy population (cache-aside), the very first request for any data ALWAYS hits the database. The cache only fills up after someone asks for it. For most systems, this is fine — the first user pays the cost, everyone after benefits.
>
> But what about a live cricket score? Millions of people are about to refresh the page at the same time. If the cache is empty, ALL of them hit the database simultaneously. That's called a **cache stampede** — and it can kill your DB in seconds.
>
> 🧠 *Think about it: how would you prevent this?*
>
> **Solution: Eager population (write-through).** Every time the score changes, the commentator's save button writes to BOTH the database AND the cache. When the millions arrive, the cache is already warm.
>
> [SVG: Lazy vs Eager population — side by side showing the request flow difference]
>
> ```
> // Lazy (cache-aside) — cache fills on demand
> value = redis.get(key)
> if value is None:
>     value = db.query(key)    // DB hit on miss
>     redis.set(key, value, ex=300)
> return value
>
> // Eager (write-through) — cache fills on write
> db.update(key, new_value)
> redis.set(key, new_value, ex=300)  // Cache always fresh
> ```
>
> **Trade-off:** Eager caching means every WRITE is slightly slower (two writes instead of one). You're paying more on the write path to guarantee the read path is always fast. For CricBuzz, where writes happen once every 30 seconds but reads happen millions of times? Easy trade-off.
>
> **Problem 2: "I'm caching data that I KNOW will be popular before anyone asks for it."**
>
> YouTube's recommendation engine just decided to feature a 3-year-old video on 50 million users' home feeds. That video's metadata hasn't been accessed in months — it's definitely not in cache.
>
> Do you wait for the first cache miss? That would be 50 million simultaneous DB reads.
>
> **Solution: Predictive push.** Before the recommendations go live, a background job pre-warms the cache with every video that's about to appear in feeds.
>
> This isn't write-through (no one wrote new data). It's not lazy loading (no user requested it). It's a third pattern: **proactive cache warming based on predicted access.**
>
> [SVG: YouTube recommendation pre-warming flow — recommendation engine → cache warm-up job → Redis, THEN users hit warmed cache]
>
> **Problem 3: "The data changes every second and I can't afford ANY staleness."**
>
> [Continue the pattern — each variation emerges from a problem the previous one can't solve...]

---

### Concrete Example: Writing the Progressive Build for URL Shortener

❌ **Grokking approach:**
> "Requirements: ...
> API: POST /shorten, GET /{code}
> Schema: id, original_url, short_code, created_at
> Architecture: [complete diagram with all components]"

✅ **System Guide approach:**

> ### V1: The Simplest Thing That Works
>
> 🧠 **Think First:** Before scrolling, draw the simplest architecture that turns a long URL into a short one and redirects back. Just boxes and arrows. What do you need?
>
> [reveal]
>
> One API server. One database. That's it.
>
> [SVG: User → API Server → PostgreSQL. Two arrows: POST /shorten writes, GET /{code} reads]
>
> **How V1 works:**
> - User sends long URL → API server generates a unique short code → stores mapping in PostgreSQL → returns short URL
> - Someone clicks short URL → API server looks up code in PostgreSQL → returns HTTP 301 redirect to original URL
>
> **How do we generate the short code?** The simplest thing: use the database auto-increment ID and encode it.
> - ID 1 → "1", ID 1000 → "1000", ID 999999 → "999999"
>
> **Does V1 work?** Yes! For 100 users and 1000 URLs, this is perfectly fine. Response time: ~5ms. Storage: negligible.
>
> ---
>
> ### What Breaks
>
> 🧠 **Think First:** We're getting popular. 10 million new URLs per month. What breaks first?
>
> **Problem 1: Predictable IDs.**
> sml.url/1, sml.url/2, sml.url/3... Anyone can iterate through every URL you've ever shortened. That's a privacy and security nightmare.
>
> **Problem 2: Why not just hash it?**
> SHA-256("https://example.com/very/long/url") → produces a hex string. But SHA-256 output is 64 characters. We want 6-8 characters. If we truncate, collisions become likely. And hashing is deterministic — the same URL always produces the same short code. If two users shorten the same URL, they share analytics. That's wrong.
>
> **Problem 3: Why not random strings?**
> Generate "xK9mQ2" randomly. But how do you guarantee no collisions? You'd have to check the database before every insert. At 100 million URLs, that check gets expensive.
>
> ---
>
> ### V2: The Ticket Server
>
> We need IDs that are:
> - Unpredictable (can't iterate)
> - Collision-free (no checking needed)
> - Fast to generate (no DB round-trip per ID)
>
> 🧠 **Think First:** How would you generate IDs that satisfy all three requirements?
>
> **The insight:** Split the entire ID space into RANGES. Pre-assign ranges to servers.
>
> [SVG: ID space 0 to 2^48 divided into ranges → Range 0-1M assigned to Ticket Server A, Range 1M-2M to Ticket Server B, etc.]
>
> ...
>
> [Continue building: V2 handles ID generation, V3 adds caching for hot URLs, V4 adds the analytics pipeline via Kafka, V5 handles the full system]

---

## Part 5: The Q&A Page

The Q&A page is a SEPARATE page (always). It's the largest page — 50 to 100 questions per topic.

### Structure

**Grouped by sub-topic.** For Caching:
- Core Concepts (10-15 questions)
- Eviction Strategies (8-12 questions)
- Cache Consistency & Invalidation (10-15 questions)
- Redis Specific (8-12 questions)
- Distributed Caching (8-12 questions)
- Interview Scenarios (10-15 questions)

**Each question tagged with difficulty:**
- 🟢 Beginner — "What happens on a cache miss?"
- 🟡 Intermediate — "Compare LRU vs LFU. When would you pick each?"
- 🟠 Advanced — "How does Redis approximately implement LRU with sampling?"
- 🔴 Expert — "Your cache hit ratio dropped from 95% to 60% overnight. Walk me through your investigation."

### Question Types

**1. Concept questions** — "What is X?" but framed as a scenario:
- ❌ "What is cache-aside?"
- ✅ "A junior developer asks you: we added Redis but the first request for every key is slow. Why?"

**2. Comparison questions** — always with trade-offs:
- "You're choosing between Redis and Memcached for a session store. What do you pick and why?"

**3. Design micro-questions** — mini architecture problems:
- "Design a cache warming strategy for a product catalog that updates daily."

**4. Debugging questions** — real scenarios:
- "Users report seeing stale profile data for up to 5 minutes after updating. Your system uses cache-aside with 5-minute TTL. What's happening and how do you fix it without removing caching?"

**5. War story questions** — based on real incidents:
- "A cache node goes down during peak traffic. Suddenly your database receives 10x its normal load and response times spike to 30 seconds. What's happening? (Hint: thundering herd)"

**6. Expert opinion questions** — no single right answer:
- "Should you cache at the application level or at the database level? Argue both sides."

### Answer Format

Each answer includes:
1. **Short answer** (2-3 sentences — for quick review)
2. **Deep answer** (full prose explanation with examples)
3. **SVG diagram** (when the answer benefits from visualization — roughly 30-40% of answers)
4. **Code/config snippet** (when applicable)
5. **Key takeaway** (one-liner to remember)
6. **Related questions** (links to other Q&As that deepen understanding)

---

## Part 6: Visual & Component Standards

### SVG Density

| Page type | SVG target |
|-----------|-----------|
| Foundation (small topic — Bloom Filters) | 15-25 |
| Foundation (medium topic — Caching) | 25-40 |
| Foundation (large topic — Databases part) | 30-50 |
| Case study (main page) | 25-40 |
| Case study (deep-dive page) | 15-25 |
| Q&A page | 20-40 (30-40% of answers) |
| **Per topic total** | **60-100+** |

### SVG Conventions
- IDs scoped with prefix: `cache-s3-` for caching section 3, `url-v2-` for URL shortener V2
- Max width: 760px for sidebar pages
- Colors: CSS variables `var(--text-primary)`, `var(--accent-primary)`, etc.
- Style: Clean, minimal, consistent with LLD pages

### Component Reuse (from LLD)
All existing CSS/JS components work:
- **Tab containers:** `tab-header` + `tab-btn` + `tab-panel` (NEVER `tab-content`)
- **Cards:** `card` with `card-title` + `card-body` (for accordion sections)
- **Collapsibles:** `collapsible` + `collapsible-header` + `collapsible-content`
- **Callouts:** `callout-danger`, `callout-warning`, `callout-info`, `callout-success`, `callout-purple`
- **macOS windows:** `macos-window` + `macos-titlebar` + `macos-body` (for code blocks)
- **Tooltips:** `<span class="tooltip">term<span class="tooltip-text">definition</span></span>`

### New Components Needed for HLD
- **🧠 Think First box:** A distinctive callout that stands out. Could be `callout-think` with a brain icon and a subtle "try before scrolling" visual cue.
- **Difficulty tags:** `<span class="difficulty-beginner">🟢 Beginner</span>` etc.
- **Version badges:** `<span class="version-badge">V1</span>`, `<span class="version-badge">V2</span>` for progressive builds
- **Architecture comparison:** Side-by-side before/after SVGs with a clear diff indicator
- **Math block:** A styled block for back-of-envelope calculations (distinguished from code blocks)

---

## Part 7: Page Sizing Guide

| Topic type | Pages | Total lines (est.) | Sections |
|-----------|-------|-------------------|----------|
| Small foundation (Bloom Filters, Webhooks) | 2 (journey + Q&A) | 8,000-12,000 | 12-14 + Q&A |
| Medium foundation (Caching, Load Balancers) | 2 (journey + Q&A) | 12,000-18,000 | 15-18 + Q&A |
| Large foundation (Databases, Kafka) | 3+ (multiple journey pages + Q&A) | 20,000-30,000 | 18-22 per page + Q&A |
| Simple case study (PasteBin, Rate Limiter) | 2 (build + Q&A) | 10,000-15,000 | 18-20 + Q&A |
| Medium case study (URL Shortener, Notifications) | 2-3 (build + deep-dive + Q&A) | 15,000-22,000 | 20-23 + Q&A |
| Complex case study (Twitter, Uber, Netflix) | 3 (build + deep-dive + Q&A) | 22,000-30,000 | 22-25 + Q&A |

---

## Part 8: Quality Checklist

Before a page ships, verify:

### Content Quality
- [ ] Opens with a SCENARIO, not a definition
- [ ] Has 🧠 Think First challenges before every major reveal (minimum 5 per page)
- [ ] Shows multiple iterations (minimum 3 approaches/versions)
- [ ] Math justifies every major decision
- [ ] Real code/commands shown inline (not just prose descriptions)
- [ ] Anti-Lesson section present with real example
- [ ] Connections to other topics woven throughout (minimum 5 cross-references)
- [ ] Mental model clearly stated in TL;DR
- [ ] Hands-on challenges are BUILD exercises (not theory questions)

### Visual Quality
- [ ] SVG count meets target for topic size
- [ ] SVG IDs are scoped with unique prefixes
- [ ] Every flow/process has a step-by-step SVG
- [ ] Every comparison has a visual (not just a table)
- [ ] Decision frameworks are flowchart SVGs

### Technical Quality
- [ ] Tab panels use `class="tab-panel"` (NOT `tab-content`)
- [ ] Tab buttons use `data-tab=` (NOT `data-target=`)
- [ ] First card in accordion groups has `class="card open"`
- [ ] All cards have `card-body` wrapper
- [ ] SVG viewBox max 760px wide
- [ ] SVG marker IDs scoped with prefixes
- [ ] Collapsibles use `collapsible-header` (NOT `collapsible-toggle`)
- [ ] Exactly 1 `<footer>`, 1 `scripts.js`, 1 `</body>`

### Q&A Quality
- [ ] 50-100 questions
- [ ] Grouped by sub-topic
- [ ] Every question has difficulty tag
- [ ] Mix of concept, comparison, design, debugging, war story, and opinion questions
- [ ] 30-40% of answers have SVG diagrams
- [ ] Scenario-based questions dominate over "what is X?" questions

---

## Part 9: Interleaved Learning Path

Foundation and case study pages are built and studied in interleaved order. Each case study practices concepts from the preceding foundation pages.

### Phase 1: Core Principles + First Case Studies
1. Scalability, Reliability, Availability, Performance
2. Back-of-Envelope Estimation
3. **→ Case Study: URL Shortener** (practices: estimation, simple architecture, ID generation)
4. **→ Case Study: PasteBin** (practices: estimation, S3, "not everything needs caching")

### Phase 2: Networking + Databases
5. How the Internet Works, DNS, TCP/UDP
6. HTTP Evolution, REST API Design
7. Relational Databases (ACID, Indexing, Normalization)
8. Isolation Levels & Locking
9. **→ Case Study: Flash Sale / Ticket Booking** (practices: locking, SKIP LOCKED, inventory management)
10. Scaling Databases (Replication, Read Replicas)
11. Sharding & Partitioning
12. **→ Case Study: E-commerce Product Listing** (practices: read replicas, sharding decisions)

### Phase 3: NoSQL + Caching
13. Document Databases (MongoDB)
14. Key-Value Stores (Redis deep dive)
15. Caching Strategies + Eviction + Invalidation
16. **→ Case Study: Live Sports Commentary (CricBuzz)** (practices: Redis caching, read-heavy patterns)
17. CDN
18. **→ Case Study: Image Hosting / Imgur** (practices: CDN, S3, on-demand resize)

### Phase 4: Messaging + Async
19. Message Queues (SQS, RabbitMQ)
20. Event Streaming (Kafka deep dive)
21. **→ Case Study: Notification System** (practices: queues, priority, bloom filter dedup)
22. Pub/Sub Systems
23. **→ Case Study: Abuse Masker** (practices: pub/sub for config push, "not everything is a service")

### Phase 5: Distributed Systems
24. CAP Theorem & Consistency Models
25. Consensus (Raft, Paxos)
26. Consistent Hashing
27. Bloom Filters & Probabilistic DS
28. Distributed ID Generation (Snowflake)
29. **→ Case Study: Distributed Cache (Redis-like)** (practices: consistent hashing, eviction, replication)
30. **→ Case Study: Key-Value Store (DynamoDB-like)** (practices: consistent hashing, quorum, vector clocks)
31. Distributed Locking
32. Leader Election
33. **→ Case Study: Distributed Task Scheduler** (practices: locking, leader election, queues)

### Phase 6: Load Balancing + Resilience
34. Proxies, Load Balancers
35. Rate Limiting
36. Circuit Breaker & Resilience
37. API Gateway
38. **→ Case Study: Rate Limiter** (practices: algorithms, library vs service, Redis sharding)
39. **→ Case Study: Load Balancer** (practices: L4/L7, health checks, DNS-based)

### Phase 7: Storage + Data Processing
40. Blob Storage (S3 internals)
41. Storage Engine Internals (B+ Tree, LSM Tree)
42. Distributed File Systems
43. Batch Processing (Spark)
44. ETL & CDC
45. **→ Case Study: S3-like Object Storage** (practices: partition management, erasure coding)
46. **→ Case Study: Web Crawler** (practices: bloom filters, consistent hashing, batch processing)

### Phase 8: Advanced Databases
47. Column-Family (Cassandra)
48. Graph Databases (Neo4j)
49. Search Engines (Elasticsearch)
50. Time-Series Databases
51. NewSQL (Spanner)
52. **→ Case Study: Google Search** (practices: inverted index, PageRank, crawling)
53. **→ Case Study: Recommendation Engine** (practices: graph DB, collaborative filtering, Spark)

### Phase 9: Real-time + Communication
54. Real-time Communication (WebSockets, SSE, Long Polling)
55. gRPC & Protocol Buffers
56. GraphQL
57. **→ Case Study: WhatsApp** (practices: WebSockets, E2E encryption, delivery guarantees)
58. **→ Case Study: Slack** (practices: channels, WebSocket scaling, Redis pub/sub)
59. **→ Case Study: Zoom** (practices: WebRTC, SFU/MCU, real-time)

### Phase 10: Architecture Patterns
60. Event-Driven Architecture (CQRS, Event Sourcing, Saga)
61. Microservices Patterns
62. Service Mesh, Service Discovery
63. Stream Processing (Flink, Kafka Streams)
64. **→ Case Study: Payment System** (practices: saga, idempotency, exactly-once)
65. **→ Case Study: Stock Trading Platform** (practices: event sourcing, low latency, matching engine)

### Phase 11: Security + Observability + Infrastructure
66. Auth (OAuth, JWT), TLS, API Security
67. Logging, Metrics, Tracing, Alerting
68. Containers & K8s, CI/CD, Deployment Strategies
69. **→ Case Study: Logging System (ELK-like)** (practices: ingestion at scale, indexing, retention)
70. **→ Case Study: Monitoring System (Datadog-like)** (practices: time-series, alerting, dashboards)

### Phase 12: Big Case Studies (apply everything)
71. **→ Case Study: Twitter** (feed, trending, search, fanout)
72. **→ Case Study: Instagram** (photos, stories, reels, CDN)
73. **→ Case Study: YouTube** (upload, transcoding, streaming, recommendations)
74. **→ Case Study: Netflix** (content delivery, personalization)
75. **→ Case Study: Uber** (matching, ETA, surge pricing)
76. **→ Case Study: Google Maps** (routing, traffic, map tiles)
77. **→ Case Study: Amazon E-commerce** (catalog, cart, checkout, recommendations)
78. **→ Case Study: Dropbox** (file sync, dedup, versioning)
79. **→ Case Study: Google Docs** (OT/CRDT, real-time collaboration)

### Phase 13: Real-World Deep Dives
80. **→ Amazon Dynamo paper**
81. **→ Google BigTable paper**
82. **→ Google File System paper**
83. **→ Google Spanner paper**
84. **→ Meta's TAO**
85. **→ Discord Architecture**
86. **→ Hotstar (50M concurrent)**
87. **→ Stripe Idempotency**

### Remaining case studies fill in throughout based on concept dependencies.

---

*Last updated: 2026-03-16*
*This spec is the single source of truth for all HLD page development.*
