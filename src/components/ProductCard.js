// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './css/ProductCard.css'; // Import a CSS file for styling

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;
