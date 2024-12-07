import React, { useState } from 'react';
import './Admin.css';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [empId, setEmpId] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [auctions, setAuctions] = useState([
    { id: 1, itemName: 'Laptop', description: 'Brand new gaming laptop', price: '$1200', status: 'Active' },
    { id: 2, itemName: 'Smartphone', description: 'Latest model', price: '$800', status: 'Inactive' },
    { id: 3, itemName: 'Headphones', description: 'Noise-cancelling headphones', price: '$200', status: 'Active' },
  ]);
  const [logins, setLogins] = useState([
    { id: 1, username: 'john_doe', email: 'john.doe@example.com', role: 'User' },
    { id: 2, username: 'jane_smith', email: 'jane.smith@example.com', role: 'Admin' },
    { id: 3, username: 'mary_jones', email: 'mary.jones@example.com', role: 'User' },
  ]);
  const [newAuction, setNewAuction] = useState({ itemName: '', description: '', price: '', status: '' });
  const [editedAuction, setEditedAuction] = useState(null);
  const [error, setError] = useState('');
  const [websiteContent, setWebsiteContent] = useState('Welcome to the Auction Platform!');

  const adminCredentials = {
    empId: '12345',
    password: 'adminpass',
  };

  const handleLogin = () => {
    if (empId === adminCredentials.empId && password === adminCredentials.password) {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Invalid Employee ID or Password');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-auth-container">
        <h2>Admin Login</h2>
        {authError && <p className="error-message">{authError}</p>}
        <input
          type="text"
          placeholder="Employee ID"
          value={empId}
          onChange={(e) => setEmpId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <h2>Admin Panel</h2>

      {/* Auctions Section */}
      <div className="auctions-list">
        <h3>All Auctions</h3>
        {auctions.length === 0 ? (
          <p>No auctions available</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Description</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {auctions.map((auction) => (
                <tr key={auction.id}>
                  <td>{auction.itemName}</td>
                  <td>{auction.description}</td>
                  <td>{auction.price}</td>
                  <td>{auction.status}</td>
                  <td>
                    <button onClick={() => setEditedAuction(auction)}>Edit</button>
                    <button onClick={() => setAuctions(auctions.filter((a) => a.id !== auction.id))}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* My Logins Section */}
      <div className="logins-list">
        <h3>User Logins</h3>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {logins.map((login) => (
              <tr key={login.id}>
                <td>{login.username}</td>
                <td>{login.email}</td>
                <td>{login.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Auction Section */}
      <div className="add-auction-form">
        <h3>Add New Auction</h3>
        {error && <p className="error-message">{error}</p>}
        <input
          type="text"
          placeholder="Item Name"
          value={newAuction.itemName}
          onChange={(e) => setNewAuction({ ...newAuction, itemName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newAuction.description}
          onChange={(e) => setNewAuction({ ...newAuction, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Price"
          value={newAuction.price}
          onChange={(e) => setNewAuction({ ...newAuction, price: e.target.value })}
        />
        <select
          value={newAuction.status}
          onChange={(e) => setNewAuction({ ...newAuction, status: e.target.value })}
        >
          <option value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button onClick={() => setAuctions([...auctions, { ...newAuction, id: auctions.length + 1 }])}>
          Add Auction
        </button>
      </div>

      {/* Website Content Section */}
      <div className="website-content">
        <h3>Website Content</h3>
        <textarea
          value={websiteContent}
          onChange={(e) => setWebsiteContent(e.target.value)}
          rows="4"
          cols="50"
        />
        <button onClick={() => alert('Website content updated!')}>Update Content</button>
      </div>
    </div>
  );
};

export default Admin;
