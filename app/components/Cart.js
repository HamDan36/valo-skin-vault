import React from 'react';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const totalVP = cartItems.length * 875; // Example value per skin

  return (
    <div className="fixed top-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg w-64">
      <h3 className="font-bold text-lg mb-2">Cart</h3>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between items-center py-1">
            {item.name}
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 text-sm"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-3 font-semibold">Total VP: {totalVP}</p>
    </div>
  );
}

export default Cart;
