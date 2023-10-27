import React from 'react';
import './Header.css'; // Import stylesheet for Header component

function Header() {
  return (
    <div className="header-container">
      <div className="header-item">Home</div>
      <div className="header-item">About</div>
      <div className="header-item">Shop</div>
    </div>
  );
}

export default Header;