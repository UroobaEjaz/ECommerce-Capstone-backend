/*import { createContext, useContext, useState } from "react";

export const CartItemsContext = createContext();

export const useCartItemsContext = () => {
  return useContext(CartItemsContext);
};

export const CartItemsContextProvider = ({ children }) => {
  const [cartItemsNumber, setCartItemsNumber] = useState("0");
  const [cartItemsContext, setCartItemsContext] = useState([]);
  return (
    <CartItemsContext.Provider
      value={{
        cartItemsContext,
        setCartItemsContext,
        cartItemsNumber,
        setCartItemsNumber,
      }}
    >
      {children}
    </CartItemsContext.Provider>
  );
};   */



import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context
const CartItemsContext = createContext();

// Create a provider component
export const CartItemsProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsNumber, setCartItemsNumber] = useState(0);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
    setCartItemsNumber(storedCartItems.length);
  }, []);

  return (
    <CartItemsContext.Provider value={{ cartItems, setCartItems, cartItemsNumber, setCartItemsNumber }}>
      {children}
    </CartItemsContext.Provider>
  );
};

// Custom hook to use the CartItemsContext
export const useCartItemsContext = () => {
  return useContext(CartItemsContext);
};
