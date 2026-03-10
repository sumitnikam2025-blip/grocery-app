```javascript
const CACHE_NAME = "grocery-app-v1";

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        "./",
        "index.html",
        "manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

fetch("https://script.google.com/macros/s/AKfycbwM7JjEVImTA1UNESvOmvjGc0GUQtAgX8PKtAzuQrUeQE9lxjkPnoj13WXIibxKefrO/exec", {
  method: "POST",
  body: JSON.stringify({
    product: product,
    qty: qty,
    unit: unit,
    price: total,
    store: store
  })
});
```