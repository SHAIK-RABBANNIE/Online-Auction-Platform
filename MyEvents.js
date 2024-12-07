import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './MyEvents.css';

const MyEvents = () => {
    const location = useLocation(); // Get the state passed from Calendar
    const registeredDates = location.state || [];
    const navigate = useNavigate();

    return (
        <div className="myevents-container">
            <h2>My Registered Events</h2>
            {registeredDates.length > 0 ? (
                <ul className="events-list">
                    {registeredDates.map((date, index) => (
                        <li key={index} className="event-item">
                            {`Dear Customer , We have got a New Response from you That You have Registered on : ${date}`}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No events registered.</p>
            )}
            <button className="back-button" onClick={() => navigate(-1)}>
                Back to Calendar
            </button>
        </div>
    );
};

export default MyEvents;
