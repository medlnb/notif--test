import './App.css'

function App() {
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      new Notification('notificationText')
    }
  })
new Notification("kaka")
  return (
    <>

    </>
  )
}

export default App
