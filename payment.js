import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './payment.css'; // Import the CSS file for styling

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, bidAmount } = location.state;

  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    paypalEmail: '',
    bankAccount: '',
    upiId: '',
  });

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    alert(`Payment of $${bidAmount} for ${product.name} was successful!`);
    navigate('/payment-success', { state: { product, bidAmount } });
  };

  return (
    <div className="payment-container">
      <h2>Payment Page</h2>
      <div className="payment-summary">
        <h3>Order Summary</h3>
        <p><strong>Product:</strong> {product.name}</p>
        <p><strong>Your Bid:</strong> ${bidAmount}</p>
        <p><strong>Total Amount:</strong> ${bidAmount}</p>
      </div>

      <form onSubmit={handlePaymentSubmit} className="payment-form">
        <h3>Select Payment Method</h3>
        <div className="payment-options">
          <label>
            <input
              type="radio"
              value="creditCard"
              checked={paymentMethod === 'creditCard'}
              onChange={() => setPaymentMethod('creditCard')}
            />
            Credit/Debit Card
          </label>
          <label>
            <input
              type="radio"
              value="paypal"
              checked={paymentMethod === 'paypal'}
              onChange={() => setPaymentMethod('paypal')}
            />
            PayPal
          </label>
          <label>
            <input
              type="radio"
              value="bankTransfer"
              checked={paymentMethod === 'bankTransfer'}
              onChange={() => setPaymentMethod('bankTransfer')}
            />
            Bank Transfer
          </label>
          <label>
            <input
              type="radio"
              value="upi"
              checked={paymentMethod === 'upi'}
              onChange={() => setPaymentMethod('upi')}
            />
            UPI Payment
          </label>
        </div>

        {paymentMethod === 'creditCard' && (
          <div className="payment-details">
            <h4>Credit/Debit Card Details</h4>
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={paymentDetails.cardNumber}
              onChange={handlePaymentChange}
              required
            />
            <input
              type="text"
              name="expiryDate"
              placeholder="Expiry Date (MM/YY)"
              value={paymentDetails.expiryDate}
              onChange={handlePaymentChange}
              required
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={paymentDetails.cvv}
              onChange={handlePaymentChange}
              required
            />
          </div>
        )}

        {paymentMethod === 'paypal' && (
          <div className="payment-details">
            <h4>PayPal Email</h4>
            <input
              type="email"
              name="paypalEmail"
              placeholder="PayPal Email"
              value={paymentDetails.paypalEmail}
              onChange={handlePaymentChange}
              required
            />
          </div>
        )}

        {paymentMethod === 'bankTransfer' && (
          <div className="payment-details">
            <h4>Bank Transfer Details</h4>
            <input
              type="text"
              name="bankAccount"
              placeholder="Bank Account Number"
              value={paymentDetails.bankAccount}
              onChange={handlePaymentChange}
              required
            />
          </div>
        )}

        {paymentMethod === 'upi' && (
          <div className="payment-details">
            <h4>UPI Payment</h4>
            <input
              type="text"
              name="upiId"
              placeholder="Enter UPI ID (e.g., 1234567890@upi)"
              value={paymentDetails.upiId}
              onChange={handlePaymentChange}
              required
            />
          </div>
        )}

        <button type="submit" className="payment-btn">Proceed to Payment</button>
      </form>

      <button
        className="payment-btn"
        style={{ backgroundColor: '#007bff', marginTop: '10px' }}
        onClick={() => navigate('/Delivery')}
      >
        place order 
      </button>
    </div>
  );
}

export default Payment;
