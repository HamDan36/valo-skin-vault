import React from "react";
import { useCart } from "../context/CartContext";

const Cart = ({ onClose }) => {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalCost = cart.reduce((sum, item) => sum + (item.tierCost || 0), 0);

  return (
    <div className="absolute right-0 top-12 w-80 max-h-96 overflow-y-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-lg p-4 space-y-3 z-50">
      <div className="flex justify-between items-center">
        <h2 className="text-base font-semibold">Your Vault</h2>
        <button
          onClick={clearCart}
          className="text-xs text-red-500 hover:underline"
        >
          Clear All
        </button>
      </div>

      {cart.length === 0 ? (
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Your vault is empty.
        </p>
      ) : (
        <ul className="space-y-2">
          {cart.map((item) => (
            <li
              key={item.uuid}
              className="flex justify-between items-center border-b pb-2"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.displayIcon || item.image}
                  alt={item.displayName}
                  className="w-10 h-10 object-contain"
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
                className="text-xs text-red-500 hover:underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      {cart.length > 0 && (
        <div className="flex justify-between items-center pt-2 border-t border-zinc-200 dark:border-zinc-700 mt-4 text-sm">
          <div className="text-zinc-700 dark:text-zinc-300">
            ≈ <span className="font-medium">${(totalCost * 0.012).toFixed(2)} CAD</span>
          </div>
          <div className="font-semibold text-zinc-800 dark:text-zinc-100">
            Total: <span className="text-violet-600">{totalCost} VP</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
