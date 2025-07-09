const CACHE_NAME = 'mi-pwa-v2';
const FILES_TO_CACHE = [
  'index.html',
  'page2.html',
  'css/estilos.css',
  'js/app.js',
  'manifest.json',
  'icon-192.png',
  'icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      })
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cachedRes => {
      if (cachedRes) {
        return cachedRes;
      }
      return fetch(e.request).then(networkRes => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(e.request, networkRes.clone());
          return networkRes;
        });
      }).catch(() => {
    
      });
    })
  );
});

self.addEventListener('push', event => {
  console.log('Notificación push recibida', event);
});
