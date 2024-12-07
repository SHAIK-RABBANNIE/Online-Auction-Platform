import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css'; // Ensure this file exists for styles

const Logout = () => {
    const navigate = useNavigate();

    const gotoLogin = () => {
        console.log("Navigating to login..."); // For debugging
        navigate("/");
    }

    return (
        <div className="logout-container">
            <h2>You have been logged out.</h2>
            <button onClick={gotoLogin} className="logout-button">
                Go to Login
            </button>
        </div>
    );
};

export default Logout;
