import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';

const Signup = () => {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();  // Use the useNavigate hook for programmatic navigation

    const handleSignup = () => {
        if (name && dob && email && password) {
            // Format the date of birth
            const formattedDob = new Date(dob).toLocaleDateString('en-India');

            // Check if users already exist in local storage
            const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

            // Check if the email is already registered
            const emailExists = existingUsers.some((user) => user.email === email);
            if (emailExists) {
                setError('Email is already registered. Please use a different email.');
                return;
            }

            // Create a new user object
            const newUser = { name, dob: formattedDob, email, password };

            // Save the user to local storage
            existingUsers.push(newUser);
            localStorage.setItem('users', JSON.stringify(existingUsers));

            alert('Signup successful! Please log in.');

            // Store credentials for auto-filling in the login form
            localStorage.setItem('autoLoginCredentials', JSON.stringify({ email, password }));

            // Redirect to login page
            navigate('/');  // Use navigate to go to the login page
        } else {
            setError('Please fill in all fields');
        }
    };

    return (
        <div className="signup-container">
            <video autoPlay loop muted>
                <source src="https://cdn.pixabay.com/video/2016/11/04/6266-190550868_tiny.mp4" type="video/mp4" />
            </video>
            <div className="signup-box">
                <h2>Sign Up</h2>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <input 
                    type="date" 
                    placeholder="Date of Birth" 
                    value={dob} 
                    onChange={(e) => setDob(e.target.value)} 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button onClick={handleSignup}>Sign Up</button>
                {error && <p className="error-message">{error}</p>}
                <p>
                    Already have an account?{' '}
                    <Link to="/" className="toggle-link">Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
