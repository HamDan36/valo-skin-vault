"use client";
import React from "react";

const WelcomeCard = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 max-w-md shadow-xl border border-zinc-300 dark:border-zinc-700">
        <h2 className="text-2xl font-bold mb-2 text-center">
          Welcome to ValoSkinVault!
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-300 text-center mb-4">
          Use this website to explore and calculate the total cost of your
          Valorant account. Prices are based on the vp spent on skin purchases
          and displayed in USD. <br />
          This is a personal project and strictly for educational purposes. It
          is not affiliated with Riot Games or tenCent in any way.
        </p>
        <button
          onClick={onClose}
          className="block mx-auto px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition"
        >
          Got it!
        </button>
      </div>
    </div>
  );
};

export default WelcomeCard;
