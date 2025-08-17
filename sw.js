const CACHE_NAME = 'el-pozo-del-saber-v1';
const urlsToCache = [
	'/',
	'/index.html',
	'/404.html',
	'/manifest.json',
	'/placeholder-logo.png',
	'/placeholder-logo.svg'
];

// Instalación del Service Worker
self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then((cache) => {
				console.log('Cache abierto');
				return cache.addAll(urlsToCache);
			})
	);
});

// Activación del Service Worker
self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames.map((cacheName) => {
					if (cacheName !== CACHE_NAME) {
						console.log('Eliminando cache antiguo:', cacheName);
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});

// Interceptar peticiones
self.addEventListener('fetch', (event) => {
	event.respondWith(
		caches.match(event.request)
			.then((response) => {
				// Devolver desde cache si está disponible
				if (response) {
					return response;
				}
				
				// Si no está en cache, hacer la petición a la red
				return fetch(event.request)
					.then((response) => {
						// Verificar que la respuesta sea válida
						if (!response || response.status !== 200 || response.type !== 'basic') {
							return response;
						}
						
						// Clonar la respuesta para cachearla
						const responseToCache = response.clone();
						
						caches.open(CACHE_NAME)
							.then((cache) => {
								cache.put(event.request, responseToCache);
							});
						
						return response;
					})
					.catch(() => {
						// Si falla la red, devolver página offline
						if (event.request.destination === 'document') {
							return caches.match('/404.html');
						}
					});
			})
	);
});

// Mensajes del Service Worker
self.addEventListener('message', (event) => {
	if (event.data && event.data.type === 'SKIP_WAITING') {
		self.skipWaiting();
	}
});
