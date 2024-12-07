    import React, { useState } from 'react';
    import './Delivery.css';

    const Delivery = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [items, setItems] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOrder = () => {
        if (name && address && items) {
        // You can handle the order data here (e.g., saving it to a database)
        console.log('Order placed:', { name, address, items });

        // Show success message and clear form
        setSuccess(true);
        setName('');
        setAddress('');
        setItems('');
        } else {
        setError('Please fill in all fields');
        }
    };

    return (
        <div className="delivery-container">
        <div className="delivery-form">
            <h2>Place Your Order</h2>
            {success && <p className="success-message">Your order has been placed successfully!</p>}
            {error && <p className="error-message">{error}</p>}
            
            <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <input
            type="text"
            placeholder="Delivery Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            />
            <textarea
            placeholder="Items to Deliver"
            value={items}
            onChange={(e) => setItems(e.target.value)}
            ></textarea>
            <button onClick={handleOrder}>Place Order</button>
        </div>
        </div>
    );
    };

    export default Delivery;
