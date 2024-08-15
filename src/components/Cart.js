// src/components/Cart.js
import React from 'react';
import CartItem from './CartItem';
import './css/Cart.css';

const Cart = ({ cartItems, onRemove, onUpdateQuantity }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <CartItem 
              key={item.id} 
              item={item} 
              onRemove={onRemove} 
              onUpdateQuantity={onUpdateQuantity} 
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
