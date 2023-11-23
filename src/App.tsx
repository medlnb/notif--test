import './App.css';




function App() {
  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    registrations[0].showNotification("title");
  });
  // navigator.serviceWorker.register('sw.js');
  // Notification.requestPermission(function (result) {
  //   if (result === 'granted') {
  //     navigator.serviceWorker.ready.then(function (registration) {
  //       registration.showNotification('Notification with ServiceWorker');
  //     });
  //   }
  // });
  return (
    <>
      <button >
        Request Notification Permission
      </button>
    </>
  );
}

export default App;
