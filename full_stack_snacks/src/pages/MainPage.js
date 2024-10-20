
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App'; // Import your existing App component

function MainPage() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  );
}

export default MainPage;
