const CACHE_VERSION = 0;
const CURRENT_CACHE = `pwa-cache-v${CACHE_VERSION}`;
const prefetch = [
    '/',
    '/index.html',
    '/script.js',
    '/style.css',
    '/custom-icon.js'
];

self.addEventListener('install', ev => ev.waitUntil(self.skipWaiting().then(() => caches.open(CURRENT_CACHE).then(cache => cache.addAll(prefetch)))), {once: true});
self.addEventListener('activate', ev => ev.waitUntil(caches.keys().then(cacheNames => cacheNames.map(cacheName => CURRENT_CACHE !== cacheName ? caches.delete(cacheName) : null))), {once: true});
self.addEventListener('fetch', ev => ev.respondWith(caches.match(ev.request, {ignoreSearch:true, cacheName: CURRENT_CACHE}).then(res => res || fetch(ev.request))));