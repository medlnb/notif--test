// sw.js

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('my-cache').then(function (cache) {
      return cache.addAll([
        '/',
        '../index.html',
        // Add other static assets you want to cache
      ]);
    })
  );
});

self.addEventListener('activate', function (event) {
  // Perform any necessary updates or cleanup tasks
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
