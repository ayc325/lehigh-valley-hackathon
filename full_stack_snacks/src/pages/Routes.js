import { BrowserRouter as Router, Route, Routes, Route } from 'react-router-dom';
import App from './components/App';
import ChatBot from './components/ChatBot';
import MoodTracker from './components/MoodTracker';
import QuickTips from './components/QuickTips';
import Resources from './components/Resources';
import Calendar1 from './components/Calendar1';
import MoodInsight from './components/MoodInsight'
export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <App/>
                </Route>
                <Route path= "/moodtracker">
                    <MoodTracker/>
                </Route>
                <Route path = "/quicktips">
                    <QuickTips/>
                </Route>
                <Route path = "/chatbot">
                    <ChatBot/>
                </Route>
                <Route path = "/resources">
                    <Resources/>
                </Route>
                <Route path = "/calendar">
                    <Calendar1/>
                </Route>
                <Route path = "/moodinsight">
                    <MoodInsight/>
                </Route>
            </Switch>
        </Router>
    )

}