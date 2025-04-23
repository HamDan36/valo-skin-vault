// Header.js
import React from "react";
import SearchBar from "./SearchBar";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cart, clearCart } = useCart();

  return (
    <header className="w-full py-4 border-b border-zinc-200 dark:border-zinc-700 shadow-sm bg-white dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-center sm:text-left">
          ValoSkinVault
        </h1>

        <div className="flex items-center gap-4">
          <SearchBar />

          {/* Vault label and count */}
          <div className="flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-300">
            <span className="font-medium">Vault</span>
            <span className="bg-violet-600 text-white px-2 py-0.5 rounded-full text-xs">
              {cart.length}
            </span>
          </div>

          {/* Clear Vault button */}
          {cart.length > 0 && (
            <button
              onClick={clearCart}
              className="text-xs text-red-500 hover:underline"
            >
              Clear Vault
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
