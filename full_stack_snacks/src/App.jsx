// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import ChatBot from './components/ChatBot'
import MoodTracker from './components/MoodTracker'
import QuickTips from './components/QuickTips'
import Resources from './components/Resources'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <ChatBot />
      <MoodTracker />
      <QuickTips />
      <Resources />
    </div>
  )
}

export default App
