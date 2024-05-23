const CACHE_NAME = "jikan api cache";
const JIKAN_API_URL_PATTERN = /^https:\/\/api\.jikan\.moe\/v4\//;
const CACHE_EXPIRATION_IN_SECONDS = 60 * 30; // INFO: 30 minutes

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Check if the request URL matches the Jikan API pattern
  if (JIKAN_API_URL_PATTERN.test(request.url)) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        const cachedResponse = await cache.match(request);
        if (cachedResponse) {
          const cachedDate = new Date(
            cachedResponse.headers.get("sw-cache-date"),
          );
          const now = new Date();
          const age = (now - cachedDate) / 1000;

          if (age < CACHE_EXPIRATION_IN_SECONDS) {
            return cachedResponse;
          }
        }

        return fetch(request)
          .then((networkResponse) => {
            if (networkResponse.ok) {
              const responseClone = networkResponse.clone();
              const headers = new Headers(networkResponse.headers);
              headers.append("sw-cache-date", new Date().toISOString());

              const responseWithHeaders = new Response(responseClone.body, {
                status: responseClone.status,
                statusText: responseClone.statusText,
                headers: headers,
              });

              cache.put(request, responseWithHeaders);
            }
            return networkResponse;
          })
          .catch(() => {
            return new Response("Offline and no cache available", {
              status: 503,
              statusText: "Service Unavailable",
            });
          });
      }),
    );
  }
});
