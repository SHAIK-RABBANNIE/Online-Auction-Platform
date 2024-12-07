import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './payment-success.css';

function PaymentSuccess() {
  const location = useLocation();
  const navigate = useNavigate();

  // Destructure and set default values for fallback
  const {
    product = { name: 'Unknown Product', image: 'https://via.placeholder.com/150' }, // Default placeholder image
    bidAmount = 0,
    transactionId = `TXN${Math.floor(1000000000 + Math.random() * 9000000000)}`, // Random 10-digit ID
    paymentMethod = 'Credit Card',
    date = new Date().toLocaleString(),
  } = location.state || {};

  // Save the auction item in "My Bids"
  const saveToMyBids = () => {
    const myBids = JSON.parse(localStorage.getItem('myBids')) || [];
    const newBid = {
      product,
      bidAmount,
      transactionId,
      paymentMethod,
      date,
    };

    // Add the new bid to the list and save it to localStorage
    localStorage.setItem('myBids', JSON.stringify([...myBids, newBid]));
  };

  // Save bid when the component renders
  React.useEffect(() => {
    saveToMyBids();
  }, []);

  return (
    <div className="success-container">
      <div className="success-card">
        <h2>Payment Successful!</h2>
        <p>Thank you for your payment.</p>

        <div className="order-details">
          <h3>Transaction Details</h3>
          <p><strong>Product:</strong> {product.name}</p>
          <img src={product.image} alt={product.name} className="product-image" />
          <p><strong>Amount Paid:</strong> ${bidAmount}</p>
          <p><strong>Payment Method:</strong> {paymentMethod}</p>
          <p><strong>Transaction ID:</strong> {transactionId}</p>
          <p><strong>Date:</strong> {date}</p>
        </div>

        <button
          className="back-btn"
          onClick={() => navigate('/Home')}
        >
          Back to Auctions
        </button>
      </div>
    </div>
  );
}

export default PaymentSuccess;
