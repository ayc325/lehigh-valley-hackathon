import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './MoodTracker.css';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const MoodTracker = () => {
    const [mood, setMood] = useState('');
    const [message, setMessage] = useState('');
    const [randomPhrase, setRandomPhrase] = useState('');
    
    const [moodCounts, setMoodCounts] = useState({
        Happy: 0,
        Sad: 0,
        Calm: 0,
        Angry: 0,
        Motivated: 0,
        Anxious: 0,
        Confident: 0,
        Embarrassed: 0,
        Energetic: 0,
        Sick: 0,
        Stressed: 0
    });
    const totalMoods = Object.values(moodCounts).reduce((acc, count) => acc + count, 0);
    const COLORS = ['#e3b0ff', '#00C49F', '#FFBB28', '#FF8042', '#FF6347', '#40E0D0', '#DAA520', '#8A2BE2', '#FF1493', '#ADFF2F', '#DC143C'];
    
    const moodPhrases  = {
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
        Confident: [
          "It's a great day to be bold! Why not take that confident energy and present your ideas at the Baker Institute for Innovation?",
          "Your confidence can inspire others. Take the stage and share your ideas, whether in a club or during your next presentation at Lehigh.",
          "You're unstoppable today! Consider mentoring a peer or getting involved in Lehigh's leadership development programs at the Office of Student Engagement.",
        ],
        Embarrassed: [
          "It’s totally okay to feel embarrassed—remember, everyone in your class has been there! Swing by the Linderman Library for some quiet time to regroup.",
          "Don’t let a small moment get you down. Next time, try some mindfulness exercises at Taylor Gym to shake off the embarrassment.",
          "You’re unstoppable right now! Go seize the day with some physical activities on the Asa Packer Campus or join an intramural sport.",
        ],
      };
  

    const data = Object.keys(moodCounts).map((mood, index) => ({
        name: mood,
        value: moodCounts[mood],
        percentage: totalMoods > 0 ? ((moodCounts[mood] / totalMoods) * 100).toFixed(1) : 0,
        fill: COLORS[index % COLORS.length],
    }));

    const getRandomPhrase = (selectedMood) => {
        const phrases = moodPhrases[selectedMood] || [];
        return phrases[Math.floor(Math.random() * phrases.length)];
      };

    const handleMoodChange = (selectedMood) => {
        setMood((prevMood) => {
            if (prevMood === selectedMood) {
                return '';  // Deselect if the same mood is clicked again
            } else {
                setRandomPhrase(getRandomPhrase(selectedMood));
                setMessage(`You selected ${selectedMood}`);
                incrementMoodCount(selectedMood);  // Update mood count
                return selectedMood;
            }
        });
    };

    const incrementMoodCount = (selectedMood) => {
        setMoodCounts((prevCounts) => ({
            ...prevCounts,
            [selectedMood]: prevCounts[selectedMood] + 1
        }));
    };

    useEffect(() => {
        // Remove all existing mood-related classes from body
        document.body.classList.remove(
            'sad-theme', 'happy-theme', 'angry-theme', 'stressed-theme',
            'anxious-theme', 'motivated-theme', 'calm-theme', 'embarrassed-theme',
            'confident-theme', 'energetic-theme', 'sick-theme'
        );

        // Add the appropriate class based on the selected mood
        if (mood) {
            document.body.classList.add(`${mood.toLowerCase()}-theme`);
        }
    }, [mood]);
    
    const createBubble = () => {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        document.body.appendChild(bubble);
    
        // Set bubble position and animate
        bubble.style.left = Math.random() * window.innerWidth + "px";
        bubble.style.animationDuration = Math.random() * 3 + 2 + "s";
    
        // Remove bubble after animation completes
        bubble.addEventListener("animationend", () => {
            bubble.remove();
        });
    };
    
    // Create bubbles on mood change
    useEffect(() => {
        const bubbleInterval = setInterval(() => {
            createBubble();
        }, 1000); // Adjust for how often you want new bubbles
    
        return () => clearInterval(bubbleInterval);
    }, [mood]);

    return(
            <div className="mood">
                <h2>How Are you Feeling today?</h2>
                <div className="mood-options">
                    <button
                        className={`mood-button ${mood === 'Happy' ? 'selected' : ''}`}
                        onClick={() => handleMoodChange('Happy')}
                    >
                        😊 Happy
                    </button>
                    <button
                        className={`mood-button ${mood === 'Sad' ? 'selected' : ''}`}
                        onClick={() => handleMoodChange('Sad')}
                    >
                        😔 Sad
                    </button>
                    <button
                        className={`mood-button ${mood === 'Calm' ? 'selected' : ''}`}
                        onClick={() => handleMoodChange('Calm')}
                    >
                        🙂 Calm
                    </button>
                    <button
                        className={`mood-button ${mood === 'Angry' ? 'selected' : ''}`}
                        onClick={() => handleMoodChange('Angry')}
                    >
                        😡 Angry
                    </button>
                    <button
                        className={`mood-button ${mood === 'Motivated' ? 'selected' : ''}`}
                        onClick={() => handleMoodChange('Motivated')}
                    >
                        💪 Motivated
                    </button>
                    <button
                        className={`mood-button ${mood === 'Anxious' ? 'selected' : ''}`}
                        onClick={() => handleMoodChange('Anxious')}
                    >
                        😰 Anxious
                    </button>
                    <button
                        className={`mood-button ${mood === 'Confident' ? 'selected' : ''}`}
                        onClick={() => handleMoodChange('Confident')}
                    >
                        😎 Confident
                    </button>
                    <button
                        className={`mood-button ${mood === 'Embarrassed' ? 'selected' : ''}`}
                        onClick={() => handleMoodChange('Embarrassed')}
                    >
                        😳 Embarrassed
                    </button>
                    <button
                        className={`mood-button ${mood === 'Energetic' ? 'selected' : ''}`}
                        onClick={() => handleMoodChange('Energetic')}
                    >
                        😁 Energetic
                    </button>
                    <button
                        className={`mood-button ${mood === 'Sick' ? 'selected' : ''}`}
                        onClick={() => handleMoodChange('Sick')}
                    >
                        😣 Sick
                    </button>
                </div>
            {mood && <p className="random-phrase">{randomPhrase}</p>}

            {mood === 'Sad' ||mood === 'Angry' || mood === 'Stressed'|| mood === 'Sick' || mood === 'Anxious' ? (
                <div> <p className="chatbot-prompt">
                Try chatting with our <a href="#">ChatBot</a>.
            </p>
            
            </div>
            ):null}
            {/* Pie Chart for visualizing mood counts */}
            <div className="pie-chart-container">
                <div className="pie-chart-box">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={data}
                            cx="50%" cy="50%" 
                            outerRadius={150}
                            fill="#8884d8"
                            dataKey="value"
                            isAnimationActive={true} // Ensure smooth transitions
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                        </Pie>
                        <Tooltip formatter={(value, name, props) => [`${value} (${props.payload.percentage}%)`, name]} />
                    </PieChart>
                </div>
            </div>
        </div>
    );
} //stuff

export default MoodTracker;