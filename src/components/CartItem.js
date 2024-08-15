import React from 'react';
import './css/CartItem.css';

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <li className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>Price: ₹{item.price.toLocaleString()}</p>
        <div className="cart-controls">
          <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
          <input 
            type="text" 
            value={item.quantity} 
            readOnly 
          />
          <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
          <button onClick={() => onRemove(item.id)}>Remove</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
