self.addEventListener('install', (e) => {
  console.log('[Service Worker] Terinstal');
});

self.addEventListener('fetch', (e) => {
  // Mengambil data dari jaringan seperti biasa
  e.respondWith(fetch(e.request).catch(() => console.log('Offline')));
});
