import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-sidebar">
                <h2>General</h2>
                <ul>
                    <li>Personal</li>
                    <li>Professional</li>
                    <li>Login</li>
                    <li>Change Username</li>
                    <li>Notifications</li>
                    <li>Privacy</li>
                </ul>
            </div>
            <div className="profile-content">
                <h1>Edit Profile</h1>
                <div className="profile-info">
                    <img src="https://tse2.mm.bing.net/th?id=OIP.58t72HiyqKUNI4D4xHj1gQHaHa&pid=Api&P=0&h=180" alt="Profile" className="profile-image" />
                    <h3>Shaik.Rabbannie</h3>
                    <h4>Id Number : 2300090093</h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="upload">Upload picture of yourself:</label>
                            <input type="file" id="upload" accept="image/jpeg, image/png" />
                        </div>
                        <div className="form-group">
                            <input type="checkbox" id="delete-picture" />
                            <label htmlFor="delete-picture">Delete Profile Picture</label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Your Name: *</label>
                            <input type="text" id="name" value="kL_2300090093" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dob">Your Date of Birth:</label>
                            <input type="date" id="dob" />
                        </div>
                        <div className="form-group">
                            <label>Gender:</label>
                            <div>
                                <input type="radio" id="female" name="gender" value="female" />
                                <label htmlFor="female">Female</label>
                                <input type="radio" id="male" name="gender" value="male" />
                                <label htmlFor="male">Male</label>
                                <input type="radio" id="other" name="gender" value="other" />
                                <label htmlFor="other">Other</label>
                            </div>
                        </div>
                        <button type="submit" className="save-button">Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;
