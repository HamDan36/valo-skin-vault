// components/Cart.js
import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalCost = cart.reduce((sum, item) => sum + item.tierCost, 0);

  return (
    <div className="w-full bg-zinc-100 dark:bg-zinc-800 px-4 py-3 border-t border-zinc-300 dark:border-zinc-700">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">Your Vault</h2>
          {cart.length > 0 && (
            <button
              onClick={clearCart}
              className="text-sm text-red-500 hover:underline"
            >
              Clear All
            </button>
          )}
        </div>

        {cart.length === 0 ? (
          <p className="text-sm text-zinc-600 dark:text-zinc-400">Your vault is empty.</p>
        ) : (
          <ul className="space-y-2">
            {cart.map((item) => (
              <li
                key={item.uuid}
                className="flex justify-between items-center p-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-md"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.displayIcon || item.image}
                    alt={item.displayName}
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <p className="text-sm font-medium">{item.displayName}</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      {item.tierName} – {item.tierCost} VP
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.uuid)}
                  className="text-sm text-red-500 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        {cart.length > 0 && (
          <div className="mt-4 text-sm text-right text-zinc-700 dark:text-zinc-200">
            <strong>Total:</strong> {totalCost} VP
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
