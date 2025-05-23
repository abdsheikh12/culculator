self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('calculator-cache-v1').then(function (cache) {
      return cache.addAll([
        './',
        './index.html',
        './style.css',
        './Calculator_512.webp'
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
