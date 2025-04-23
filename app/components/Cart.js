// import React from 'react';
// import { useCart } from '../context/CartContext';

// function Cart() {
//   const { cartItems, removeFromCart } = useCart();

//   const totalVP = cartItems.length * 875; // Example value per skin

//   return (
//     <div className="fixed top-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg w-64">
//       <h3 className="font-bold text-lg mb-2">Cart</h3>
//       <ul>
//         {cartItems.map((item) => (
//           <li key={item.id} className="flex justify-between items-center py-1">
//             {item.name}
//             <button
//               onClick={() => removeFromCart(item.id)}
//               className="text-red-500 text-sm"
//             >
//               Remove
//             </button>
//           </li>
//         ))}
//       </ul>
//       <p className="mt-3 font-semibold">Total VP: {totalVP}</p>
//     </div>
//   );
// }

// export default Cart;


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
