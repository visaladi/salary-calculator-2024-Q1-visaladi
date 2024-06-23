// src/components/AppBar.js
import React from 'react';
import './AppBar.css'; // Import the CSS for styling the app bar

const AppBar = ({ user }) => {
  return (
    <div className="app-bar">
      <div className="app-bar-left">
        <h1>ACMY Solutions</h1>
      </div>
      <div className="app-bar-right">
        {user ? (
          <div className="user-info">
            <img src={user.image} alt={user.name} className="user-image" />
            <span>{user.name}</span>
          </div>
        ) : (
          <button className="login-button">Login</button>
        )}
      </div>
    </div>
  );
};

export default AppBar;
