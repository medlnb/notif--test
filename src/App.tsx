import './App.css';




function App() {
  navigator.serviceWorker.register('service-worker.js')

  // Client-Side JavaScript (App.tsx or another appropriate file)
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
      .then(function (registration) {
        console.log('Service Worker registered with scope:', registration.scope);

        // Wait until the service worker is activated
        return navigator.serviceWorker.ready;
      })
      .then(function () {
        showWelcomeNotification();
      })
      .catch(function (error) {
        console.error('Service Worker registration failed:', error);
      });
  }

  function showWelcomeNotification() {
    if (Notification.permission === 'granted') {
      new Notification('Welcome!', {
        body: 'Hello, welcome to our website!',
        icon: 'path/to/icon.png',
      });
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(function (permission) {
        if (permission === 'granted') {
          new Notification('Welcome!', {
            body: 'Hello, welcome to our website!',
          });
        }
      });
    }
  }

  return (
    <>
      <button >
        Request Notification Permission
      </button>
    </>
  );
}

export default App;
