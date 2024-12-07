import React, { useState } from 'react';
import './Verification.css';

const Verification = () => {
    const [userDetails, setUserDetails] = useState({
        name: '',
        mobileNumber: '',
        kyc: '',
        address: '',
        city: '',
        pincode: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the verification process here
        console.log('User Details Verified:', userDetails);
    };

    return (
        <div className="verification-container">
            <h1>User Verification</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={userDetails.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Mobile Number:</label>
                    <input
                        type="text"
                        name="mobileNumber"
                        value={userDetails.mobileNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>KYC:</label>
                    <input
                        type="file"
                        name="kyc"
                        value={userDetails.kyc}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={userDetails.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>City:</label>
                    <input
                        type="text"
                        name="city"
                        value={userDetails.city}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Pincode:</label>
                    <input
                        type="text"
                        name="pincode"
                        value={userDetails.pincode}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="verify-button">Verify</button>
            </form>
        </div>
    );
};

export default Verification;
