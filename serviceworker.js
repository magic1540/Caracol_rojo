var CACHE_STATIC_NAME = 'my_site_cache';

self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME_1)
      .then(function(cache) {
        console.log('[Service Worker] Precaching App Shell');
        cache.addAll([
          '/',
          '/static/css/estilo-base.css',
          '/static/css/estilo-catalogo-xone.css',
          '/static/css/estilo-index.css',
          '/static/css/materialize.css',
          '/static/css/materialize.min.css',
          '/static/imagenes/logo.png',
          '/static/imagenes/img-registro',

        ]);
      })
  )
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ...', event);
   event.waitUntil(
      caches.keys()
         .then(function (keyList){
            return Promise.all(keyList.map(function (key){
               if(key!==CACHE_STATIC_NAME){
                  return caches.delete(key);
               }
            }));
         })
   );
  return self.clients.claim();
});



self.addEventListener('fetch', function(event) {
   console.log('[Service Worker] Fetching something ....', event);
    event.respondWith(

      fetch(event.request)
      .then((result)=>{
        return caches.open(CACHE_STATIC_NAME)
        .then(function(c) {
          c.put(event.request.url, result.clone())
          return result;
        })

      })
      .catch(function(e){
          return caches.match(event.request)
      })



    );
});
