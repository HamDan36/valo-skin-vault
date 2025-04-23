// components/Cart.js
import React from "react";

const Cart = ({ cart, onRemove }) => {
  const total = cart.reduce((sum, skin) => sum + (skin.tierCost || 0), 0);

  return (
    <div className="p-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow">
      <h2 className="text-lg font-bold mb-4">Vault ({cart.length} items)</h2>

      {cart.length === 0 ? (
        <p className="text-sm text-zinc-500">No skins yet.</p>
      ) : (
        <ul className="space-y-3">
          {cart.map((skin) => (
            <li key={skin.uuid} className="flex items-center justify-between">
              <span className="text-sm">
                {skin.displayName} ({skin.tierName}) – {skin.tierCost} VP
              </span>
              <button
                onClick={() => onRemove(skin.uuid)}
                className="text-red-500 text-xs hover:underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 font-semibold text-sm">
        Total: <span className="text-violet-600">{total} VP</span>
      </div>
    </div>
  );
};

export default Cart;
