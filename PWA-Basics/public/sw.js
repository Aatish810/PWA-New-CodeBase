self.addEventListener('install', function(event) {
    console.log('Installing service worker', event)
});

self.addEventListener('activate', function(event) {
    console.log('Activate Serive workker', event)
});

self.addEventListener('fetch', function(event) {
    console.log('Fetch request for service worker', event);
    event.respondWith(fetch(event.request))
})

