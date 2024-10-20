// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import ChatBot from './components/ChatBot'
import MoodTracker from './components/MoodTracker'
import QuickTips from './components/QuickTips'
import Resources from './components/Resources'
import Calendar1 from './components/Calendar1'
import './App.css'


function App() {
  // const [count, setCount] = useState(0)

  return (
  <div className = "grid-container">
    <div className = "upperleft"></div>
    <div className = "Welcome1">
      <h1>Mindful Hawks</h1>
    </div>
    <div className = "upperright"></div>


    { <div className = "nav1">
        <nav>
          <a href = "#">ChatBot</a>
          <a href = "#">MoodTracker</a>
          <a href = "#">QuickTips</a>
          <a href = "#">Resources</a>
        </nav>

    </div> }



  {<div className="playlist1">
    <iframe
      style={{ borderRadius: '12px' }} 
      src="https://open.spotify.com/embed/playlist/6dQz1ZnwnluFiUhBOMrJQC?utm_source=generator" 
      width="100%" 
      height="370" 
      frameBorder="0" 
      allowFullScreen 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      loading="lazy">
    </iframe>
  </div>}


    

    {<div className = "funfact1">
      <p>Did you know...?</p>
    </div>}

    {<div className = "revealedFact">
    <p>Lehigh is the 2nd most studious college in the US!</p>
    </div>}

    {<div className = "body1">
      <p>body goes here</p>
    </div>}

    {<div className = "moodInsights">
      <Calendar1 />
    </div>}

   {<div className = "footer1">
      <p>footer goes here</p>
    </div>}

    
  </div>

  )

}


export default App