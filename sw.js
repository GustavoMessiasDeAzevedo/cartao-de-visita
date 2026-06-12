const CACHE_NAME = "gustavo-card-v1";
const assets = [
  "./",
  "./index.html",
  "./style.css",
  "./assets/manifest.json",
  "./assets/script.js",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets);
    }),
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    }),
  );
});
