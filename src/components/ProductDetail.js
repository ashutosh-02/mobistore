// src/components/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './css/ProductDetail.css'; // Import a CSS file for styling

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>₹{product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
