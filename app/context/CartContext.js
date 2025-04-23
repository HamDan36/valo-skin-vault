//cartContext.js
'use client'
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (skin) => {
    setCart((prev) => {
      if (prev.some((item) => item.uuid === skin.uuid)) return prev;
      return [...prev, skin];
    });
  };

  const removeFromCart = (uuid) => {
    setCart((prev) => prev.filter((item) => item.uuid !== uuid));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

