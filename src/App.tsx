import './App.css'
import addNotification from 'react-push-notification'

function App() {
  const clicktonotify = () => {
    addNotification({
      title: "khra",
      message: "chkopi ya chkopi",
      duration: 4000,
      native: true
    })
  }

  return (
    <>
      <button onClick={() => clicktonotify()}>
        click here
      </button>
    </>
  )
}

export default App
