// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';
import './css/ProductList.css'; // Import a CSS file for styling

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
