import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const COLORS = []; //insert hex codes

const CustomPieChart = ({happyC, sadC, angryC, calmC, motivatedC, anxiousC, sickC, stressedC, energeticC}) => {
    const data = [
        {name: 'Happy', value: happyC},
        {name: 'Sad', value: sadC},
        {name: 'Angry', value: angryC},
        {name: 'Calm', value: calmC},
        {name: 'Motivated', value: motivatedC},
        {name: 'Anxious', value: anxiousC},
        {name: 'Sick', value: sickC},
        {name: 'Stressed', value: stressedC},
        {name: 'Energetic', value: energeticC}
    ];
    return (
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
    );
}

export default ModdInsight;