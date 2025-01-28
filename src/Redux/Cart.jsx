// src/Redux/Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, clearCart } from './cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  
  // Example item to add to the cart
  const exampleItem = {
    id: '1',
    name: 'Sample Product',
    price: 20,
  };

  return (
    <div>
      <h2>Shopping Cart</h2>

      <button onClick={() => dispatch(addItem(exampleItem))}>
        Add Sample Product
      </button>
      
      <div>
        <h3>Cart Items:</h3>
        <ul>
          {cart.items.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h3>Total Amount: ${cart.totalAmount}</h3>
        <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
