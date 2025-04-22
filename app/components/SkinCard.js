import React from "react";

const SkinCard = ({ skin, onAddToCart }) => {
  return (
    <div className="relative flex flex-col justify-between border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-4">
      <div className="flex flex-col items-center text-center">
        <img
          src={skin.displayIcon}
          alt={skin.displayName}
          className="w-full h-40 object-contain mb-3"
        />

        <h3 className="text-base font-semibold mb-1">{skin.displayName}</h3>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          {skin.themeUuid ? "Skin Line" : "Single Skin"}
        </p>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <span
          className={`inline-block w-3 h-3 rounded-full ${
            skin.tier === "Exclusive"
              ? "bg-yellow-500"
              : skin.tier === "Ultra"
              ? "bg-purple-600"
              : skin.tier === "Premium"
              ? "bg-blue-500"
              : skin.tier === "Deluxe"
              ? "bg-green-500"
              : "bg-gray-400"
          }`}
        ></span>
        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {skin.tier} Tier
        </span>
      </div>

      {/* Add to Cart button in bottom-right */}
      <div className="absolute bottom-4 right-4">
        <button
          onClick={() => onAddToCart(skin)}
          className="px-3 py-1 text-sm bg-violet-600 hover:bg-violet-700 text-white rounded-md shadow"
        >
          Add to Vault
        </button>
      </div>
    </div>
  );
};

export default SkinCard;
