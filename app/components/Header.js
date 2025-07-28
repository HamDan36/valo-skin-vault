import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Cart from "./Cart";
import { useCart } from "../context/CartContext";

const Header = ({ searchTerm, setSearchTerm }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useCart();

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <header className="w-full py-4 border-b border-zinc-200 dark:border-zinc-700 shadow-sm bg-white dark:bg-zinc-900 relative z-50">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-center sm:text-left">ValoSkinVault</h1>

        <div className="flex items-center gap-4 relative">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          {/* Vault toggle button */}
          <button
            onClick={toggleCart}
            className="text-sm bg-violet-600 text-white px-3 py-1 rounded-full hover:bg-violet-700 transition"
          >
            Vault ({cart.length})
          </button>

          {/* Cart dropdown */}
          {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
