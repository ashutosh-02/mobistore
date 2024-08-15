// src/components/Footer.js
import React from 'react';
import './css/Footer.css'; // Import a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 MobiStore. All rights reserved.</p>
      <nav>
        <a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
