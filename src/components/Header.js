
import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">MobiStores</Link>
      </div>
      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <div className="cart-icon">
        <Link to="/cart">🛒</Link>
      </div>
    </header>
  );
};

export default Header;
