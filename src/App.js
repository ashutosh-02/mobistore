import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import SearchBar from './components/SearchBar';

import product1Img from './assets/images/product1.jpg';
import product2Img from './assets/images/product2.jpg';
import product3Img from './assets/images/product3.jpg';
import product4Img from './assets/images/product4.jpg';
import product5Img from './assets/images/product5.jpg';
import product6Img from './assets/images/product6.jpg';
import product7Img from './assets/images/product7.jpg';
import product8Img from './assets/images/product8.jpg';
import product10Img from './assets/images/product10.jpg';
import product11Img from './assets/images/product11.jpg';
import product12Img from './assets/images/product12.jpg';
import product13Img from './assets/images/product13.jpg';
import product14Img from './assets/images/product14.jpg';
import product15Img from './assets/images/product15.jpg';
import product16Img from './assets/images/product16.jpg';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'iQOO Neo9 Pro 5G ', price: 15754, image: product1Img, description: 'iQOO Neo9 Pro 5G (Conqueror Black, 8GB RAM, 256GB Storage) | Snapdragon 8 Gen 2 Processor | Supercomputing Chip Q1 | Flagship Level Sony IMX920 Camera' },
    { id: 2, name: 'Motorola G64 5G', price: 14850, image: product2Img, description: 'Motorola G64 5G (Ice Lilac, 8GB RAM, 128GB Storage) | Expandable Upto 2TB | Upto 16GB RAM with RAM Boost | 50MP (OIS) + 8MP | 16MP Front Camera | MediaTek Dimensity 7025 Processor | 6000 mAh Battery' },
    { id: 3, name: 'Motorola razr 50 ultra', price: 94998, image: product3Img, description: 'Motorola razr 50 ultra (Spring Green, 12GB RAM, 512GB Storage) | with moto buds+ | moto ai | 4.0" external AMOLED display | Snapdragon 8s Gen 3 | 6.9" AMOLED 165Hz display | 32MP selfie camera' },
    { id: 4, name: 'OnePlus Nord 4 5G', price: 2999, image: product4Img, description: 'OnePlus Nord 4 5G (Oasis Green, 8GB RAM, 128GB Storage)' },
    { id: 5, name: 'iQOO Z7 Pro 5G', price: 20998, image: product5Img, description: 'iQOO Z7 Pro 5G (Blue Lagoon, 8GB RAM, 128GB Storage) | 3D Curved AMOLED Display | 4nm MediaTek Dimesity 7200 5G Processor | 64MP Aura Light OIS Camera | Segments Slimmest & Lightest Smartphone' },
    { id: 6, name: 'Samsung Galaxy S24 Ultra 5G', price: 139990, image: product6Img, description: 'Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Gray, 12GB, 512GB Storage)' },
    { id: 7, name: 'Redmi Note 13 5G', price: 16999, image: product7Img, description: 'Redmi Note 13 5G (Arctic White, 6GB RAM, 128GB Storage) | 5G Ready | 120Hz Bezel-Less AMOLED | 7.mm Slimmest Note Ever | 108MP Pro-Grade Camera' },
    { id: 8, name: 'Redmi Note 13 Pro+', price: 24500, image: product8Img, description: 'Redmi Note 13 Pro+ (Fusion Purple, 8GB RAM, 256GB Storage) | Worlds First Mediatek 7200 Ultra 5G | 200MP Hi-Res Camera | 1.5K Curved AMOLED | 120W HyperCharge' },
    { id: 9, name: 'POCO X6 Neo 5G', price: 15754, image: product1Img, description: 'POCO X6 Neo 5G (Martian Orange, 8GB RAM, 128GB Storage)' },
    { id: 10, name: 'realme NARZO N65 5G', price: 14850, image: product10Img, description: 'realme NARZO N65 5G (Amber Gold 8GB RAM, 128GB Storage) India 1st D6300 5G Chipset | Ultra Slim Design | 120Hz Eye Comfort Display | 50MP AI Camera| Charger in The Box' },
    { id: 11, name: 'Redmi 12 5G', price: 12999, image: product11Img, description: 'Redmi 12 5G Jade Black 8GB RAM 256GB ROM' },
    { id: 12, name: 'Apple iPhone 15', price: 2999, image: product12Img, description: 'Apple iPhone 15 (128 GB) - Blue' },
    { id: 13, name: 'Apple iPhone 15 Pro Max', price: 189400, image: product13Img, description: 'Apple iPhone 15 Pro Max (1 TB) - White Titanium' },
    { id: 14, name: 'Apple iPhone 13', price: 20998, image: product14Img, description: 'Apple iPhone 13 (128GB) - Midnight' },
    { id: 15, name: 'Apple iPhone 14', price: 20998, image: product15Img, description: 'Apple iPhone 14 (128 GB) - Blue' },
    { id: 16, name: 'Apple iPhone 13', price: 20998, image: product16Img, description: 'Apple iPhone 13 (256GB) - (Product) RED' },
  ]);

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
