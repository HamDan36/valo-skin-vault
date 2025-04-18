import React from "react";

const SkinCard = ({ skin }) => {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-md overflow-hidden p-4 flex flex-col items-center">
      <img
        src={skin.displayIcon}
        alt={skin.displayName}
        className="w-full h-40 object-contain mb-4"
      />
      <h3 className="text-lg font-semibold text-center">{skin.displayName}</h3>
      <p className="text-sm text-zinc-500 text-center">
        {skin.themeUuid ? "Skin Line" : "Single Skin"}
      </p>
      {/* Add "Add to Cart" button here later */}
    </div>
  );
};

export default SkinCard;
