// Service Worker
self.addEventListener('push', function(event) {
  const options = {
    body: 'Hello, this is a notification!',
    icon: 'path/to/icon.png',
  };

  event.waitUntil(
    self.registration.showNotification('Hello Notification', options)
  );
});
