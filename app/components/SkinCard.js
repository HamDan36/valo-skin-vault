import React from 'react';
import { useCart } from '../context/CartContext';

function SkinCard({ skin }) {
  const { addToCart } = useCart();

  return (
    <div className="border dark:border-gray-700 rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800">
      <img src={skin.displayIcon} alt={skin.displayName} className="w-full h-40 object-contain p-2" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{skin.displayName}</h2>
        <p className="text-sm text-gray-500">Weapon: {skin.weaponType || 'N/A'}</p>
        <button
          onClick={() => addToCart({ id: skin.uuid, name: skin.displayName })}
          className="mt-3 w-full bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default SkinCard;
