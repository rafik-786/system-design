/* ============================================================
 * sw.js — Service Worker for System Guide PWA
 * Caches pages for offline reading. Auto-updates on new deploys.
 * ============================================================ */

var CACHE_NAME = 'sg-v2';
// No precache list — cache pages on first visit instead (network-first)
// This avoids 404s from wrong absolute paths on different deployments

// Install — skip waiting (no precache, cache on visit)
self.addEventListener('install', function(event) {
  event.waitUntil(self.skipWaiting());
});

// Activate — clean old caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME; })
          .map(function(k) { return caches.delete(k); })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// Fetch — network first, fall back to cache
self.addEventListener('fetch', function(event) {
  // Only cache same-origin GET requests
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    fetch(event.request).then(function(response) {
      // Cache successful responses
      if (response.ok) {
        var clone = response.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(event.request, clone);
        });
      }
      return response;
    }).catch(function() {
      // Network failed — try cache
      return caches.match(event.request).then(function(cached) {
        return cached || new Response('Offline — page not cached yet.', {
          status: 503,
          headers: { 'Content-Type': 'text/plain' }
        });
      });
    })
  );
});
