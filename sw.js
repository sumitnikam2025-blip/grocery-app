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
function saveToGoogleSheet(product, qty, unit, price) {

fetch("https://script.google.com/macros/s/AKfycbzHV-W6XkQYWL_5CDYK7GVpVKrEJ5jRAzznS8zaMrSUR0Ba8-ZyzqKGKaBjfVFExGuY/exec", {

method: "POST",

body: JSON.stringify({
product: product,
qty: qty,
unit: unit,
price: price,
store: "Manual Entry"
})

})
.then(response => response.json())
.then(data => console.log("Saved:", data))
.catch(error => console.error("Error:", error));

}
```

