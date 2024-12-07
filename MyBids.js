import React from 'react';
import './MyBids.css';

function MyBids() {
  const myBids = JSON.parse(localStorage.getItem('myBids')) || [];

  return (
    <div className="my-bids-container">
      <h2>My Bids</h2>
      {myBids.length > 0 ? (
        <div className="bids-grid">
          {myBids.map((bid, index) => (
            <div className="bid-card" key={index}>
              <img src={bid.product.image} alt={bid.product.name} className="bid-image" />
              <div className="bid-details">
                <h3>{bid.product.name}</h3>
                <p><strong>Amount:</strong> ${bid.bidAmount}</p>
                <p><strong>Transaction ID:</strong> {bid.transactionId}</p>
                <p><strong>Date:</strong> {bid.date}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>You have no bids yet.</p>
      )}
    </div>
  );
}

export default MyBids;
