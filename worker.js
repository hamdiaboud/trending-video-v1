self.addEventListener('push', e => {
    const data = e.data.json();
    self.registration.showNotification(data.title, {
        body: data.body,
        icon: data.icon || 'https://img.icons8.com/color/96/tiktok--v1.png',
        data: { url: data.link },
        vibrate: [300, 100, 300]
    });
});

self.addEventListener('notificationclick', e => {
    e.notification.close();
    clients.openWindow(e.notification.data.url);
});
