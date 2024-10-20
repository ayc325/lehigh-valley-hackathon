import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {useEffect } from "react";
import './MoodTracker.css';


const MoodTracker = () =>{
    const [mood, setMood] = useState('');
    const [message, setMessage] = useState(''); 
    const [randomPhrase, setRandomPhrase] = useState('');
    
    const moodPhrases = {
        Happy: [
          "That's awesome! Keep the positive energy going—consider heading to Taylor Gym to keep those good vibes flowing.",
          "Happiness looks great on you! If you're up for it, why not stop by the UC lawn for some outdoor relaxation?",
          "It's a beautiful day to feel good! Check out some fun activities at the Wilbur Powerhouse.",
        ],
        Sad: [
          "It's okay to feel sad sometimes. Take a deep breath and consider visiting the Counseling Center at Johnson Hall for support.",
          "Don't forget, brighter days are ahead. Reach out to Lehigh's mental health services if you need someone to talk to.",
          "Feeling down? That's alright. You're not alone—take some time for self-care or check out the campus health resources.",
        ],
        Angry: [
          "Anger is a valid emotion. Take a moment to cool off—maybe a walk around the Campus could help.",
          "Take a step back. You can regain control. Consider reaching out to the Counseling Center for tips on managing frustration.",
          "Deep breaths can help release the tension. If you need a break, head to the Linderman Library for a peaceful study spot.",
        ],
        Calm: [
          "It's good to be calm. How about a relaxing walk along the South Bethlehem?",
          "Being calm is a superpower. Enjoy the tranquility, and if you need some mindfulness, Lehigh offers yoga sessions at Taylor Gym.",
          "Enjoy the serenity. If you’re looking for a peaceful place, the Silent Study Room in FML could be just the spot.",
        ],
        Stressed: [
          "Stress is temporary. You've got this! Try using the study spaces in Linderman Library for a focused session.",
          "Take a break and give yourself space to breathe. The Counseling Center offers stress management workshops you might find helpful.",
          "Don’t let stress consume you. One step at a time—consider dropping by the Health & Wellness Center in Johnson Hall for tips.",
        ],
        Anxious: [
          "Anxiety can be overwhelming, but you're stronger than you think. Check out Lehigh's mental health services for some help.",
          "Pause and breathe. This moment will pass. Don’t forget you can always visit the Health & Wellness Center if it gets too much.",
          "It's okay to feel anxious. Try talking to our chatbot or visiting the Counseling Center at Johnson Hall.",
        ],
        Motivated: [
          "You're on fire! This is a great time to knock out some study sessions—head to the FML study lounges.",
          "Stay driven and watch your goals unfold. Lehigh’s career center in Maginnes Hall can help you get a head start on your professional goals.",
          "Your energy is contagious! Check out resources at the Center for Career and Professional Development in Maginnes Hall.",
        ],
        Sick: [
          "Take it easy. Rest is your best friend right now. If you need assistance, Johnson Hall is the place for medical care.",
          "Focus on getting better. Grab some tea from The Grind or Common Grounds for a little comfort.",
          "Feeling under the weather? Be kind to yourself today. If it gets worse, stop by Johnson Hall for a check-up.",
        ],
        Energetic: [
          "You're buzzing with energy! How about hitting Taylor Gym for a workout to channel that energy?.",
          "Channel that energy into something awesome! Check out group fitness classes at Taylor Gym or the Fitness Center in Welch.",
          "You’re unstoppable right now! Go seize the day with some physical activities on the Asa Packer Campus or join an intramural sport.",
        ],
      };
    
    const getRandomPhrase = (selectedMood) => {
        const phrases = moodPhrases[selectedMood] || [];
        return phrases[Math.floor(Math.random() * phrases.length)];
      };

    const handleMoodChange = (selectedMood) => {
        setMood(selectedMood);
        setRandomPhrase(getRandomPhrase(selectedMood))
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
            <div className= "mood-options">
                <button button className="mood-button" onClick={() => handleMoodChange('Happy')}>😊 Happy</button>
                <button button className="mood-button" onClick={() => handleMoodChange('Sad')}>😔 Sad</button>
                <button button className="mood-button" onClick={() => handleMoodChange('Angry')}> 😡 Angry </button>
                <button button className="mood-button" onClick={() => handleMoodChange('Calm')}>🙂‍↕️ Calm</button>
                <button button className="mood-button" onClick={() => handleMoodChange('Motivated')}> 💪Motivated </button>
                <button button className="mood-button" onClick={() => handleMoodChange('Anxious')}> 😰 Anxious </button>
                <button button className="mood-button" onClick={() => handleMoodChange('Sick')}> 🤒 Sick </button>
                <button button className="mood-button" onClick={() => handleMoodChange('Stressed')}>😣 Stressed</button>
                <button button className="mood-button" onClick={() => handleMoodChange('Energetic')}>😁Energetic</button>
            </div>
            {mood && <p className = "mood-message">{message}</p>}
            {mood && <p className="random-phrase">{randomPhrase}</p>}

            {mood === 'Sad' ||mood === 'Angry' || mood === 'Stressed' || mood === 'Anxious' ? (
                <div> <p className="chatbot-prompt">
                Try chatting with our <a href="#">ChatBot</a>.
            </p>
            
            </div>
            ):null}
        </div>
    
    );
} //stuff

export default MoodTracker;