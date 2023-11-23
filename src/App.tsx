import './App.css';




function App() {
  navigator.serviceWorker.register('sw.js');

  Notification.requestPermission().then(function (permission) {
    if (permission != "granted") {
      alert("Notification failed!");
      return;
    }

    navigator.serviceWorker.ready.then(function (registration) {
      registration.showNotification("Hello world", { body: "Here is the body!" });
    });

  });

  return (
    <>
      <button >
        Request Notification Permission
      </button>
    </>
  );
}

export default App;
