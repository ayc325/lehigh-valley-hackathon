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
    // <div>
    //   <ChatBot />
    //   <MoodTracker />
    //   <QuickTips />
    //   <Resources />
    // </div>
  <div className = "grid-container">
    <div className = "upperleft"></div>
    <div className = "Welcome1">
      <h1>Mindful Hawks</h1>
    </div>
    <div className = "upperright"></div>


    { <div className = "nav1">
        <nav>
      <ul className = "navBar">
        <li><a href = "#">ChatBot</a></li>
        <li><a href = "#">MoodTracker</a></li>
        <li><a href = "#">QuickTips</a></li>
        <li><a href = "#">Resources</a></li>
      </ul>
    </nav>

    </div> }



    <div className = "playlist1">
      <h2>Playlist goes here</h2>
    </div>

    <div className = "funfact1">
      <h2>fun fact goes here</h2>
    </div>

    <div className = "body1">
      <p>body goes here</p>
    </div>

    <div className = "moodInsights">
      <p>mood insights goes here</p>
    </div>

    <div className = "footer1">
      <p>footer goes here</p>
    </div>
  </div>

   
  )
}

export default App
