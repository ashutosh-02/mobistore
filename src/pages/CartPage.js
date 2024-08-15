// src/pages/CartPage.js
import React from 'react';
import Cart from '../components/Cart';
import './CartPage.css';

const CartPage = ({ cartItems, onRemove, onUpdateQuantity }) => {
  const handleProceedToCheckout = () => {
    alert('Proceeding to checkout with your items.');
  };

  return (
    <div className="cart-page">
      <Cart 
        cartItems={cartItems} 
        onRemove={onRemove} 
        onUpdateQuantity={onUpdateQuantity}
        onProceedToCheckout={handleProceedToCheckout} 
      />
    </div>
  );
};

export default CartPage;
