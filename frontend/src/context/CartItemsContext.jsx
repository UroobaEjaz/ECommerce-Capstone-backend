/*import React, { createContext, useContext, useReducer } from "react";

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

export const useCartItemsContext = () => useContext(CartItemsContext); */
/*
import React, { createContext, useContext, useReducer } from "react";

// Define initial state
const initialCartItemsState = {
  cartItems: [],
};

// Create context
const CartItemsContext = createContext();

// Reducer function to handle state updates
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item._id !== action.payload._id),
      };
    default:
      return state;
  }
};

// Context Provider component
export const CartItemsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartItemsState);

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeFromCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  return (
    <CartItemsContext.Provider value={{ cartItems: state.cartItems, addToCart, removeFromCart }}>
      {children}
    </CartItemsContext.Provider>
  );
};

// Custom hook to use the CartItemsContext
export const useCartItemsContext = () => useContext(CartItemsContext);
*/

/*
import React, { createContext, useContext, useReducer } from "react";

// Define your initial state for cart items
const initialCartItemsState = {
  cartItems: [],
};

// Create context
const CartItemsContext = createContext();

// Reducer function to handle state updates
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.cartItems.find(item => item._id === action.payload._id);
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item._id === action.payload._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    case "INCREASE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item._id === action.payload._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item._id === action.payload._id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    default:
      return state;
  }
};

// Context Provider component
export const CartItemsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartItemsState);

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const increaseQuantity = (item) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: item });
  };

  const decreaseQuantity = (item) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: item });
  };

  return (
    <CartItemsContext.Provider value={{ cartItems: state.cartItems, addToCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartItemsContext.Provider>
  );
};

// Custom hook to consume the context
export const useCartItemsContext = () => useContext(CartItemsContext);*/

import React, { createContext, useContext, useState } from 'react';

const CartItemsContext = createContext();

export const useCartItemsContext = () => {
  return useContext(CartItemsContext);
};

export const CartItemsProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCartContext = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem._id === item._id);
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem._id === item._id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevItems, item];
      }
    });
  };

  const removeFromCartContext = (item) => {
    setCartItems(prevItems => prevItems.filter(cartItem => cartItem._id !== item._id));
  };

  return (
    <CartItemsContext.Provider value={{ cartItems, addToCartContext, removeFromCartContext }}>
      {children}
    </CartItemsContext.Provider>
  );
};

