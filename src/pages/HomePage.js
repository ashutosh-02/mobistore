//import
import React from 'react';
import ProductList from '../components/ProductList';
import './HomePage.css';
import { useLocation } from 'react-router-dom';
// end

//Home page function declaration
const HomePage = ({ products }) => {
  const location = useLocation();
  const {username} = location.state || {};
  const featuredProducts = products.slice(0, 4); // displaying only 4 products in home page

  return (
    <div className="homepage">
      <div className="hero-section">
        <h1>Welcome {username} to MobiStores</h1>
      </div>
      <div className="featured-products">
        <h2>Featured Products</h2> 
        <ProductList products={featuredProducts} /> {/*called ProductList components with props products*/}
      </div>
    </div>
  );
};
//end

export default HomePage;