// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css'; // Import a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/shop/category/electronics">Electronics</Link></li>
        <li><Link to="/shop/category/fashion">Fashion</Link></li>
        <li><Link to="/shop/category/home">Home</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
