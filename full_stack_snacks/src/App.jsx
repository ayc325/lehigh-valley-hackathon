import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ChatBot from './components/ChatBot';
import MoodTracker from './components/MoodTracker';
import QuickTips from './components/QuickTips';
import Resources from './components/Resources';
import Calendar1 from './components/Calendar1';
import MoodInsight from './components/MoodInsight';
import './App.css';

function App() {
  return (
    <Router>
      <div className="grid-container">
        <div className="Welcome1">
          <h1>Mindful Hawks</h1>
        </div>

        <div className="nav1">
          <Link to="/chatbot">Chat Bot</Link>
          <Link to="/moodtracker">Mood Tracker</Link>
          <Link to="/quicktips">Quick Tips</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/">Home</Link>
        </div>

        <main className="body2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chatbot" element={<ChatBot />} />
            <Route path="/moodtracker" element={<MoodTracker />} />
            <Route path="/quicktips" element={<QuickTips />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/moodinsight" element={<MoodInsight />} />
            <Route path="*" element={<h2>404 - Page Not Found</h2>} />
          </Routes>
        </main>

        <div className="footer1">
          <p>(c) 2024 Full Stack Snacks</p>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Welcome! Please select a section.</h2>
      <div className="playlist1">
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
      </div>
      <div className="fact">
        <div className="funfact1">
          <p>Did you know...?</p>
        </div>
        <div className="revealedFact">
          <p>Lehigh is the 2nd most studious college in the US!</p>
        </div>
      </div>
      <div className="moodInsights">
        <Calendar1 />
      </div>
    </div>
  );
}

export default App;
