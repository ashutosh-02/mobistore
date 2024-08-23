import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import SearchBar from './components/SearchBar';

import products from './components/productData';


const App = () => {

  const [cartItems, setCartItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    alert("Product added to cart, To checkout click on CART")
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };
  
  const handleUpdateQuantity = (productId, quantity) => {
    setCartItems(cartItems.map(item => 
      item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
    ));
  };

  const handleSearch = (searchTerm) => {
    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <Router>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<HomePage products={products} />} />
        <Route path="/shop" element={<ShopPage products={products} />} />
        <Route path="/product/:id" element={<ProductDetailPage products={products} onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} onRemove={handleRemoveFromCart} onUpdateQuantity={handleUpdateQuantity} />} />
        <Route path="/search" element={<ShopPage products={searchResults} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
