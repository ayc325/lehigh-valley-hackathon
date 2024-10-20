import React, {useState} from 'react';
import Calendar from 'react-calendar'; // from react library
import 'react-calendar/dist/Calendar.css';
import './Calendar1.css'
import { format } from "date-fns"

const Calendar1 = ({selectedDate, nav}) => {
    const [date, setDate] = useState(new Date()); 
    const [viewDate, setViewDate] = useState(new Date());

    //function called when a new date is selected
    const onChange = (date) => {
        setDate(date);
        selectedDate(date);
        nav(`/track/${format(date, 'yyyy-MM-dd')}`); 
        // Nav to mood tracker with the selected date
    };
   
    const onActiveStartDateChange = ({ activeStartDate }) => {
        setViewDate(activeStartDate); 
    };

    const getCurrentMonth = () => {
        return format(viewDate, 'yyyy-MM');
    };

    const handleMonthlyInsight = () => {
        const month = getCurrentMonth();
        navigate(`/insight/${month}`);
    };

    return (
        <div className="calendar-container">
            <h2>Select a Date to Record Your Mood</h2>
            <Calendar
                onChange={onChange}
                value={date}
                onActiveStartDateChange={onActiveStartDateChange} // Listen to view changes
            />
            <br />
            <button className="monthly-insight-button" onClick={handleMonthlyInsight}>
                Mood Insights
            </button>
        </div>
    )
}

export default Calendar1;