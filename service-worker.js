
const CACHE_NAME = 'bakehub-v1';
const urlsToCache = [
  '/bakesuperhub/',
  '/bakesuperhub/index.html',
  '/bakesuperhub/app-icon-192.png',
  '/bakesuperhub/app-icon-512.png',
  '/bakesuperhub/manifest.json'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
