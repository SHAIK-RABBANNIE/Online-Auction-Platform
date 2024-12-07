import React, { useState } from 'react';
import './BidCancellation.css';

const BidCancellation = () => {
  const [bids, setBids] = useState([
    { id: 1, item: 'Laptop', amount: '$500', status: 'Active' },
    { id: 2, item: 'Smartphone', amount: '$300', status: 'Active' },
    { id: 3, item: 'Headphones', amount: '$50', status: 'Active' },
    { id: 4, item: 'Tablet', amount: '$400', status: 'Active' },
    { id: 5, item: 'Smartwatch', amount: '$200', status: 'Active' },
    { id: 6, item: 'Gaming Console', amount: '$700', status: 'Active' },
    { id: 7, item: 'Wireless Earbuds', amount: '$100', status: 'Active' },
    { id: 8, item: 'Camera', amount: '$600', status: 'Active' },
    { id: 9, item: 'Drone', amount: '$1200', status: 'Active' },
    { id: 10, item: 'Keyboard', amount: '$80', status: 'Active' },
    { id: 11, item: 'Office Chair', amount: '$150', status: 'Active' },
    { id: 12, item: 'Monitor', amount: '$250', status: 'Active' },
    { id: 13, item: 'Graphics Card', amount: '$400', status: 'Active' },
    { id: 14, item: 'VR Headset', amount: '$350', status: 'Active' },
    { id: 15, item: 'Electric Scooter', amount: '$800', status: 'Active' },
    { id: 16, item: 'Smart TV', amount: '$1000', status: 'Active' },
    { id: 17, item: 'Fitness Tracker', amount: '$120', status: 'Active' },
    { id: 18, item: 'Bluetooth Speaker', amount: '$60', status: 'Active' },
    { id: 19, item: 'E-Reader', amount: '$130', status: 'Active' },
    { id: 20, item: 'Portable Projector', amount: '$220', status: 'Active' },
  ]);

  const cancelBid = (id) => {
    const updatedBids = bids.map((bid) =>
      bid.id === id ? { ...bid, status: 'Cancelled' } : bid
    );
    setBids(updatedBids);
  };

  return (
    <div className="bid-cancellation-container">
      <h2>Cancel Your Bids</h2>
      <table className="bid-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Bid Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bids.map((bid) => (
            <tr key={bid.id} className={bid.status === 'Cancelled' ? 'cancelled' : ''}>
              <td>{bid.item}</td>
              <td>{bid.amount}</td>
              <td>{bid.status}</td>
              <td>
                {bid.status === 'Active' && (
                  <button
                    className="cancel-button"
                    onClick={() => cancelBid(bid.id)}
                  >
                    Cancel Bid
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BidCancellation;
