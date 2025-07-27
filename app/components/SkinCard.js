import React from "react";
import { useCart } from "../context/CartContext";

const SkinCard = ({ skin, onAddToCart }) => {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col justify-between border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-4">
      <div className="flex flex-col items-center text-center">
        <img
          src={skin.image}
          alt={skin.displayName}
          className="w-full h-40 object-contain mb-3"
        />

        <h3 className="text-base font-semibold mb-1">{skin.displayName}</h3>

        {skin.tierName && (
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
            <strong>{skin.tierName}</strong> – {skin.tierCost} VP
          </p>
        )}
      </div>

      <button
        onClick={() => addToCart(skin)}
        className="mt-auto px-3 py-2 text-sm bg-violet-600 hover:bg-violet-700 text-white rounded-md shadow"
      >
        Add to Vault
      </button>
    </div>
  );
};

export default SkinCard;
