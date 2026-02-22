const CACHE_NAME = "dt-admin-v1";

// Network-first strategy for all admin routes
self.addEventListener("fetch", (event) => {
  // Only handle same-origin requests
  if (!event.request.url.startsWith(self.location.origin)) return;

  // Skip non-GET requests
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Cache successful responses for static assets
        if (
          response.ok &&
          (event.request.url.includes("/_next/static/") ||
            event.request.url.includes("/admin-icons/"))
        ) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clone);
          });
        }
        return response;
      })
      .catch(() => {
        // Fallback to cache for offline support
        return caches.match(event.request).then((cached) => {
          if (cached) return cached;

          // Return a simple offline page for navigation requests
          if (event.request.mode === "navigate") {
            return new Response(
              `<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Offline — DT Admin</title>
<style>body{background:#0F1A1F;color:#E8DDD3;font-family:system-ui;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;text-align:center}
h1{font-size:1.25rem;margin-bottom:0.5rem}p{color:rgba(232,221,211,0.5);font-size:0.875rem}</style>
</head><body><div><h1>You're offline</h1><p>Check your connection and try again.</p></div></body></html>`,
              {
                headers: { "Content-Type": "text/html" },
              }
            );
          }
        });
      })
  );
});

// Clean up old caches on activate
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
});
