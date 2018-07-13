var siteCacheName = 'restaurantreview-cache-v1';


self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(siteCacheName).then(function(cache) {
      // WE ARE CACHING SOME OF THE ITEMS HERE SO THEY'LL GET ADDED TO THE CACHE IN THEIR OWN GOOD TIME AND WILL NOT
      // DELAY THE INSTALLATION OF THE SERVICE WORKER.
      cache.addAll([
        'img/1-400_small.jpg',
        'img/2-400_small.jpg',
        'img/3-400_small.jpg',
        'img/4-400_small.jpg',
        'img/5-400_small.jpg',
        'img/6-400_small.jpg',
        'img/7-400_small.jpg',
        'img/8-400_small.jpg',
        'img/9-400_small.jpg',
        'img/10-400_small.jpg',
        'img/1-600_medium.jpg',
        'img/2-600_medium.jpg',
        'img/3-600_medium.jpg',
        'img/4-600_medium.jpg',
        'img/5-600_medium.jpg',
        'img/6-600_medium.jpg',
        'img/7-600_medium.jpg',
        'img/8-600_medium.jpg',
        'img/9-600_medium.jpg',
        'img/10-600_medium.jpg',
        'img/1-800_large_1X.jpg',
        'img/2-800_large_1X.jpg',
        'img/3-800_large_1X.jpg',
        'img/4-800_large_1X.jpg',
        'img/5-800_large_1X.jpg',
        'img/6-800_large_1X.jpg',
        'img/7-800_large_1X.jpg',
        'img/8-800_large_1X.jpg',
        'img/9-800_large_1X.jpg',
        'img/10-800_large_1X.jpg',
        ]);
      // The items below are part of the return statement for the promise created by caches.open. Since the service worker
      // will not install until all these items are in cache, we try to keep them to a minimum
      return cache.addAll([
        '/',
        '/restaurant.html',
        'js/serviceworkerController.js',
        'js/dbhelper.js',
        'js/main.js',
        'js/restaurant_info.js',
        'css/styles.css',
        'data/restaurants.json',
        'img/icons/Icon.svg',
        'img/icons/Icon-512.png',
      ]);
    })
  );
});

// This fires once the old service worker is gone, and your new service worker is able to control the client
// At this point, we can delete the old cache
self.addEventListener('activate', function(event) {
  event.waitUntil(
    self.clients.claim(),
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('restaurantreview-') &&
                 cacheName != siteCacheName;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

// This intercepts the requests made to the domain
self.addEventListener('fetch', function(event) {
  var requestUrl = new URL(event.request.url);

  if (requestUrl.origin === location.origin){
      if (requestUrl.pathname.startsWith('/restaurant.html')) {
          event.respondWith(caches.match('restaurant.html'));
          return;
      }
  }

  event.respondWith(
    caches.open(siteCacheName).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );


});

// This message will cause the service worker to kick out the current active worker and activate itself
self.addEventListener('message', function(event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});