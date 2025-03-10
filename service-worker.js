self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('blackjack-cache').then(function(cache) {
            return cache.addAll([
                'index.html',
                'manifest.json',
                'icon.png'  // Make sure this file exists in your repo!
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
