 importScripts('https://www.gstatic.com/firebasejs/5.8.5/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/5.8.5/firebase-messaging.js');
 
 firebase.initializeApp({
   'messagingSenderId': '419458027222'
 });

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  var notificationTitle = payload.notification.title;
  var notificationOptions = {
    body: payload.notification.body,
    icon: '/img/moutakuto.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
