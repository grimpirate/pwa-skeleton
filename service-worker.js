const CACHE_VERSION = 103;
const CURRENT_CACHE = `pwa-cache-v${CACHE_VERSION}`;
const prefetch = [
    '',
    'index.html',
    'css/style.css',
    'js/import.js',
    'js/script.js',
    'js/lib/react-dom.production.min.js',
    'js/lib/react.production.min.js',
    'js/elements/custom-icon.js',
    'js/components/Install.js',
    'js/components/Share.js',
    'js/views/App.js',
    'media/vector/icon.svg'
].map(f => `/pwa-skeleton/${f}`);

self.addEventListener('install', ev => ev.waitUntil(self.skipWaiting().then(() => caches.open(CURRENT_CACHE).then(cache => cache.addAll(prefetch)))), {once: true});
self.addEventListener('activate', ev => ev.waitUntil(caches.keys().then(cacheNames => Promise.all(cacheNames.filter(cacheName => CURRENT_CACHE !== cacheName).map(cacheName => caches.delete(cacheName))))), {once: true});
self.addEventListener('fetch', ev => ev.respondWith(caches.match(ev.request, {ignoreSearch:true, cacheName: CURRENT_CACHE}).then(res => res || fetch(ev.request))));