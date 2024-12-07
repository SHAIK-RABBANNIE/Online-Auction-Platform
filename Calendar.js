import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Cal.css'; // Import the CSS file for styling

const Calendar = () => {
    const [dateTime, setDateTime] = useState(new Date());
    const [currentMonth, setCurrentMonth] = useState(dateTime.getMonth());
    const [currentYear, setCurrentYear] = useState(dateTime.getFullYear());
    const [registeredDates, setRegisteredDates] = useState(new Set());
    const [cancelledDates, setCancelledDates] = useState(new Set());
    const navigate = useNavigate(); // Initialize the navigate function

    useEffect(() => {
        const timerId = setInterval(() => {
            setDateTime(new Date());
        }, 1000); // Update every second

        return () => clearInterval(timerId);
    }, []);

    useEffect(() => {
        setCurrentMonth(dateTime.getMonth());
        setCurrentYear(dateTime.getFullYear());
    }, [dateTime]);

    // Function to get the days of the current month
    const getDaysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    // Function to get the first day of the month
    const getFirstDayOfMonth = (month, year) => {
        return new Date(year, month, 1).getDay();
    };

    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);

    // Create an array for the calendar days
    const calendarDays = Array(daysInMonth).fill(null).map((_, index) => index + 1);

    // Function to handle date click
    const handleDateClick = (day) => {
        if (registeredDates.has(day)) {
            // If already registered, prompt to cancel
            const confirmCancel = window.confirm(`Do you want to cancel registration for ${day} ${dateTime.toLocaleString('en-IN', { month: 'long' })} ${currentYear}?`);
            if (confirmCancel) {
                setCancelledDates(prev => new Set(prev).add(day)); // Add the date to cancelled set
                setRegisteredDates(prev => {
                    const newSet = new Set(prev);
                    newSet.delete(day); // Remove the date from registered set
                    return newSet;
                });
            }
        } else {
            // If not registered, prompt to register
            const confirmRegister = window.confirm(`Do you want to register for ${day} ${dateTime.toLocaleString('en-IN', { month: 'long' })} ${currentYear}?`);
            if (confirmRegister) {
                setRegisteredDates(prev => new Set(prev).add(day)); // Add the date to registered set
                navigate('/myevents', { state: Array.from(registeredDates).concat(day) }); // Navigate to MyEvents page and pass the registered dates
            }
        }
    };

    return (
        <div className="calendar-container">
            <h2>Live Calendar</h2>
            <div className="date-time">
                <p>{dateTime.toLocaleDateString('en-IN')}</p>
                <p>{dateTime.toLocaleTimeString('en-IN')}</p>
            </div>
            <div className="calendar-grid">
                <div className="calendar-header">
                    <h3>{dateTime.toLocaleString('en-IN', { month: 'long' })} {currentYear}</h3>
                </div>
                <div className="calendar-weekdays">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                        <div className="weekday" key={day}>{day}</div>
                    ))}
                </div>
                <div className="calendar-days">
                    {/* Empty cells for days before the first day of the month */}
                    {Array(firstDayOfMonth).fill(null).map((_, index) => (
                        <div className="calendar-day empty" key={index}></div>
                    ))}
                    {calendarDays.map((day) => (
                        <div
                            className={`calendar-day ${registeredDates.has(day) ? 'registered' : ''} ${cancelledDates.has(day) ? 'cancelled' : ''}`}
                            key={day}
                            onClick={() => handleDateClick(day)}
                        >
                            {day}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calendar;
