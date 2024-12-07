import React from 'react';
import './MyLogins.css';

const MyLogins = ({ logins }) => {
  return (
    <div className="logins-container">
      <h1>Login Details</h1>
      <table className="logins-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {logins.length > 0 ? (
            logins.map((login, index) => (
              <tr key={login._id.$oid}>
                <td>{index + 1}</td>
                <td>{login.username}</td>
                <td>{login.email}</td>
                <td>{login.role}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="no-data">
                No login data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyLogins;
