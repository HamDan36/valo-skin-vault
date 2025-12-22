//manages the cart state 
'use client'
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => { // wraps the app so it can access the cart
  const [cart, setCart] = useState([]); // set up cart, setCart is updater

  const addToCart = (skin) => {
    setCart((prev) => {
      if (prev.some((item) => item.uuid === skin.uuid)) return prev; // prevent duplicates
      return [...prev, skin]; // new array with skin added
    });
  };

  const removeFromCart = (uuid) => {
    setCart((prev) => prev.filter((item) => item.uuid !== uuid)); // new array without matching uuid
  };

  const clearCart = () => setCart([]); // set cart to empty

  return ( // wrap children so other components can manage cart state
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext); // Custom hook to access cart context

