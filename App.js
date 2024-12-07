import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login'; 
import Home from './components/Home'; 
import Profile from './components/Profile'; 
import SignUp from './components/SignUp'; 
import Video from './components/Video'; 
import Calendar from './components/Calendar'; 
import MyEvents from './components/MyEvents'; 
import AuctionItem from './components/AuctionItem'; 
import AboutUs from './components/AboutUs';
import Verification from './components/Verification';
import Logout from './components/Logout';
import Payment from './components/payment'; 
import PaymentSuccess from './components/payment-success';  
import Delivery from './components/Delivery';
import MyBids from './components/MyBids'; 
import Admin from './components/Admin';
import BidCancellation from './components/BidCancellation';
import MyLogins from './components/MyLogins'; // Import MyLogins component

// Sample login data
const sampleLogins = [
    {
        _id: { $oid: "675447b4268075e6a362e4ad" },
        username: "john_doe",
        email: "john.doe@example.com",
        role: "user",
    },
    {
        _id: { $oid: "675447b4268075e6a362e4ae" },
        username: "jane_smith",
        email: "jane.smith@example.com",
        role: "admin",
    },
    {
        _id: { $oid: "675447b4268075e6a362e4af" },
        username: "mary_jones",
        email: "mary.jones@example.com",
        role: "user",
    },
];

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} /> {/* Main entry point is the Login page */}
                <Route path="/home" element={<Home />} /> {/* Home page after login */}
                <Route path="/profile" element={<Profile />} /> {/* Profile editing page */}
                <Route path="/MyBids" element={<MyBids />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/signup" element={<SignUp />} /> {/* SignUp page */}
                <Route path="/video" element={<Video />} /> {/* Video page after login */}
                <Route path="/Delivery" element={<Delivery />} />
                <Route path="/BidCancellation" element={<BidCancellation />} />
                <Route path="/Calendar" element={<Calendar />} /> {/* Calendar page after login */}
                <Route path="/MyEvents" element={<MyEvents />} /> {/* MyEvents page after login */}
                <Route path="/auction-item/:id" element={<AuctionItem />} /> {/* Auction item details page */}
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/Verification" element={<Verification />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/payment-success" element={<PaymentSuccess />} />
                <Route path="/MyLogins" element={<MyLogins logins={sampleLogins} />} /> {/* Add MyLogins Route */}
            </Routes>
        </Router>
    );
};

export default App;
