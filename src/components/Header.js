import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa';
import './css/Header.css';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">MobiStores</Link>
      </div>
      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="icons">
        <div className="user-icon" onClick={toggleDropdown}>
          <FaUserCircle className="icon" />
          {showDropdown && (
            <div className="dropdown-menu">
              <Link to="/login" onClick={() => setShowDropdown(false)}>Login</Link>
              <Link to="/registration" onClick={() => setShowDropdown(false)}>Register</Link>
            </div>
          )}
        </div>
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart className="icon" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
