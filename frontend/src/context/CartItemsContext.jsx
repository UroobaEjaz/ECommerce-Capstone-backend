import React, { createContext, useContext, useReducer } from "react";

const CartItemsContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      return state.filter(item => item._id !== action.payload._id);
    default:
      return state;
  }
};

export const CartItemsProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeFromCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  return (
    <CartItemsContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartItemsContext.Provider>
  );
};

export const useCartItemsContext = () => useContext(CartItemsContext);
