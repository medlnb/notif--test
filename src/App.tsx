import './App.css'
function showNotification(title:string, options:any) {
  if ("Notification" in window && Notification.permission === "granted") {
    navigator.serviceWorker.ready.then((registration) => {
      registration.showNotification(title, options);
    });
    console.log("kaka")
  }
}
function App() {
  if ("Notification" in window) {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Notification permission granted");
      } else {
        console.warn("Notification permission denied");
      }
    });
  }
  showNotification("New Task Added", {
    body: "Check out the new task from your teacher.",
  });
  return (
    <>
    </>
  )
}

export default App
