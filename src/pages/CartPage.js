// src/pages/CartPage.js
import React from 'react';
import Cart from '../components/Cart';
import './CartPage.css';

const CartPage = ({ cartItems, onRemove, onUpdateQuantity }) => {
  return (
    <div className="cart-page">
      <Cart cartItems={cartItems} onRemove={onRemove} onUpdateQuantity={onUpdateQuantity} />
    </div>
  );
};

export default CartPage;
