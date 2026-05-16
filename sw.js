const CACHE_NAME = "muzaflix-cache-v1";

// Instalar el Service Worker
self.addEventListener("install", (e) => {
  self.skipWaiting();
});

// Activar y tomar el control
self.addEventListener("activate", (e) => {
  e.waitUntil(clients.claim());
});

// Escuchar peticiones (Requisito obligatorio de PWA)
self.addEventListener("fetch", (e) => {
  // Dejamos que las peticiones vayan directo a internet para el streaming
  e.respondWith(fetch(e.request));
});
