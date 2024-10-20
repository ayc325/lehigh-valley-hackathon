import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import MoodTracker from'./MoodTracker.jsx';



const COLORS = []; //insert hex codes

const MoodInsight = () => {
    // Local state to manage the counts
    const [happyC, setHappyC] = useState(0);
    const [sadC, setSadC] = useState(0);
    const [angryC, setAngryC] = useState(0);
    const [calmC, setCalmC] = useState(0);
    const [motivatedC, setMotivatedC] = useState(0);
    const [anxiousC, setAnxiousC] = useState(0);
    const [sickC, setSickC] = useState(0);
    const [stressedC, setStressedC] = useState(0);
    const [energeticC, setEnergeticC] = useState(0);

    // You can either manually set these counts or retrieve them from another component
    // Pass these setters to MoodTracker to update counts based on user interaction

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

    return (
        <div>
            <MoodTracker 
                setHappyC={setHappyC} 
                setSadC={setSadC} 
                setAngryC={setAngryC} 
                setCalmC={setCalmC} 
                setMotivatedC={setMotivatedC} 
                setAnxiousC={setAnxiousC} 
                setSickC={setSickC} 
                setStressedC={setStressedC} 
                setEnergeticC={setEnergeticC}
            />
        
            <PieChart width = {400} height = {400}>
                <Pie   
                    data={data}
                    cx={200}
                    cy={200}
                    outerRadius = {150}
                    fill="#8884d8"
                    dataKey = "value"
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
}

export default ModdInsight;