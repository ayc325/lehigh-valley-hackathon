import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import './MoodTracker.css'; // Assuming the CSS is for styling

const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#FF4500', '#32CD32', '#FF9F9F'];

const MoodTracker = () => {
    // States for mood tracking and random phrase generation
    const [mood, setMood] = useState('');
    const [randomPhrase, setRandomPhrase] = useState('');

    // State for emotion counts
    const [happyC, setHappyC] = useState(0);
    const [sadC, setSadC] = useState(0);
    const [angryC, setAngryC] = useState(0);
    const [calmC, setCalmC] = useState(0);
    const [motivatedC, setMotivatedC] = useState(0);
    const [anxiousC, setAnxiousC] = useState(0);
    const [sickC, setSickC] = useState(0);
    const [stressedC, setStressedC] = useState(0);
    const [energeticC, setEnergeticC] = useState(0);

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

    const data = [
        { name: 'Happy', value: happyC },
        { name: 'Sad', value: sadC },
        { name: 'Angry', value: angryC },
        { name: 'Calm', value: calmC },
        { name: 'Motivated', value: motivatedC },
        { name: 'Anxious', value: anxiousC },
        { name: 'Sick', value: sickC },
        { name: 'Stressed', value: stressedC },
        { name: 'Energetic', value: energeticC }
    ];

    const getRandomPhrase = (selectedMood) => {
        const phrases = moodPhrases[selectedMood] || [];
        return phrases[Math.floor(Math.random() * phrases.length)];
    };

    const handleMoodChange = (selectedMood) => {
        setMood(selectedMood);
        setRandomPhrase(getRandomPhrase(selectedMood));

        // Update emotion counts
        switch (selectedMood) {
            case 'Happy':
                setHappyC(happyC + 1);
                break;
            case 'Sad':
                setSadC(sadC + 1);
                break;
            case 'Angry':
                setAngryC(angryC + 1);
                break;
            case 'Calm':
                setCalmC(calmC + 1);
                break;
            case 'Motivated':
                setMotivatedC(motivatedC + 1);
                break;
            case 'Anxious':
                setAnxiousC(anxiousC + 1);
                break;
            case 'Sick':
                setSickC(sickC + 1);
                break;
            case 'Stressed':
                setStressedC(stressedC + 1);
                break;
            case 'Energetic':
                setEnergeticC(energeticC + 1);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        document.body.classList.remove('sad-theme', 'happy-theme', 'stressed-theme', 'anxious-theme');
        if (mood === 'Sad') document.body.classList.add('sad-theme');
        if (mood === 'Happy') document.body.classList.add('happy-theme');
        if (mood === 'Stressed') document.body.classList.add('stressed-theme');
        if (mood === 'Anxious') document.body.classList.add('anxious-theme');
    }, [mood]);

    return (
        <div className="mood">
            <h2>How Are You Feeling Today?</h2>
            <div className="mood-options">
                <button className="mood-button" onClick={() => handleMoodChange('Happy')}>😊 Happy</button>
                <button className="mood-button" onClick={() => handleMoodChange('Sad')}>😔 Sad</button>
                <button className="mood-button" onClick={() => handleMoodChange('Angry')}>😡 Angry</button>
                <button className="mood-button" onClick={() => handleMoodChange('Calm')}>🙂 Calm</button>
                <button className="mood-button" onClick={() => handleMoodChange('Motivated')}>💪 Motivated</button>
                <button className="mood-button" onClick={() => handleMoodChange('Anxious')}>😰 Anxious</button>
                <button className="mood-button" onClick={() => handleMoodChange('Sick')}>🤒 Sick</button>
                <button className="mood-button" onClick={() => handleMoodChange('Stressed')}>😣 Stressed</button>
                <button className="mood-button" onClick={() => handleMoodChange('Energetic')}>😁 Energetic</button>
            </div>
            {mood && <p className="random-phrase">{randomPhrase}</p>}

            {/* Display ChatBot prompt based on mood */}
            {['Sad', 'Angry', 'Stressed', 'Anxious'].includes(mood) && (
                <p className="chatbot-prompt">
                    Try chatting with our <a href="#">ChatBot</a>.
                </p>
            )}

            {/* Pie Chart for visualizing mood counts */}
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                    label
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default MoodTracker;
