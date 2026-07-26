// Service worker mínimo — su único propósito es cumplir el requisito técnico
// de Chrome/Android para poder mostrar el botón "Instalar app". No cachea
// nada de forma agresiva: deja pasar todas las peticiones normalmente.
const CACHE_NAME = 'gestion-politica-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Estrategia "network first": intenta la red, y si falla (sin internet),
  // devuelve lo último que se haya guardado en caché para esa misma página.
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)).catch(() => {});
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
