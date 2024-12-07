import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const storedCredentials = JSON.parse(localStorage.getItem('autoLoginCredentials'));
        if (storedCredentials) {
            setEmail(storedCredentials.email);
            setPassword(storedCredentials.password);
        }
    }, []);

    const handleLogin = () => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some((user) => user.email === email && user.password === password);

        if (userExists) {
            alert('Login successful!');
            window.location.href = "/home";
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login Page</h2>
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
                <button onClick={handleLogin}>Login</button>
                {error && <p className="error-message">{error}</p>}
                <p>
                    Don't have an account?{' '}
                    <Link to="/signup" className="toggle-link">Sign up here</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
