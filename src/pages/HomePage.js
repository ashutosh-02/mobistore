import React from 'react';
import ProductList from '../components/ProductList';
import './HomePage.css';

const HomePage = ({ products }) => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="homepage">
      <div className="hero-section">
        <h1>Welcome to MobiStores</h1>
      </div>
      <div className="featured-products">
        <h2>Featured Products</h2>
        <ProductList products={featuredProducts} />
      </div>
    </div>
  );
};

export default HomePage;