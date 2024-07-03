import { createContext, useContext, useState } from "react";

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
};
