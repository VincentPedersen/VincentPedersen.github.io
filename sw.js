self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./","./src/master.css","./Images/logo192.png"])
        })
    );
});


self.addEventListener("fetch", e => {
    console.log(`intercepting fetch request for: ${e.request.url}`);
});