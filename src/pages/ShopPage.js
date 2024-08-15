// src/pages/ShopPage.js
import React from 'react';
import ProductList from '../components/ProductList';
import './ShopPage.css';

const ShopPage = ({ products }) => {
  return (
    <div className="shop-page">
      <h1>Shop</h1>
      <ProductList products={products} />
    </div>
  );
};

export default ShopPage;
