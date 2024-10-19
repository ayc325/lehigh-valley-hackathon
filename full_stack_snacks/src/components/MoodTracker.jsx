import React, { useState, useEffect } from "react";
import './MoodTracker.css';


const MoodTracker = () =>{
    const [mood, setMood] = useState('');
    const [message, setMessage] = useState('');

    const handleMoodChange = (selectedMood) => {
        setMood(selectedMood);
        setMessage('You selected: ${selectedMood}. Remember to take care of yourself!');
    };
     
    useEffect(() => {
    document.body.classList.remove('sad-theme', 'happy-theme', 'stressed-theme', 'anxious-theme');
    
    if (mood === 'Sad') document.body.classList.add('sad-theme');
    if (mood === 'Happy') document.body.classList.add('happy-theme');
    if (mood === 'Stressed') document.body.classList.add('stressed-theme');
    if (mood === 'Anxious') document.body.classList.add('anxious-theme');   
    }, [mood]);
    return(
        <div className = "mood">
            <h2>How Are you Feeling today?</h2>
            <div className="mood-options">
                <button onClick={() => handleMoodChange('Happy')}>😊 Happy</button>
                <button onClick={() => handleMoodChange('Sad')}>😔 Sad</button>
                <button onClick={() => handleMoodChange('Stressed')}>😣 Stressed</button>
                <button onClick={() => handleMoodChange('Anxious')}>😰 Anxious</button>
            </div>
            {mood && <p className = "mood-message">{message}</p>}

            {mood === 'Sad' || mood === 'Stressed' || mood === 'Anxious' ? (
                <div> <p className="chatbot-prompt">
                It might help to talk to someone. Try chatting with our <a href="#">Mental Health Bot</a>.
            </p>
            <button onClick={redirectToResources}>Go to Resources</button>
            </div>
            ):null}
        </div>
    
    );
}

export default MoodTracker;