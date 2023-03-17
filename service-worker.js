const CACHE_VERSION = 36;
const CURRENT_CACHE = `pwa-cache-v${CACHE_VERSION}`;
const prefetch = [
    '/',
    '/index.html',
    '/js/script.js',
    '/css/style.css',
    '/js/lib/react-dom.production.min.js',
    '/js/lib/react.production.min.js',
    '/js/elements/custom-icon.js'
].map(f => `/pwa-skeleton${f}`);

self.addEventListener('install', ev => ev.waitUntil(self.skipWaiting().then(() => caches.open(CURRENT_CACHE).then(cache => cache.addAll(prefetch)))), {once: true});
self.addEventListener('activate', ev => ev.waitUntil(caches.keys().then(cacheNames => cacheNames.map(cacheName => CURRENT_CACHE !== cacheName ? caches.delete(cacheName) : null))), {once: true});
self.addEventListener('fetch', ev => ev.respondWith(caches.match(ev.request, {ignoreSearch:true, cacheName: CURRENT_CACHE}).then(res => res || fetch(ev.request))));