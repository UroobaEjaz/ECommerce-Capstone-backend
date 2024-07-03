import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { CartItemsContextProvider } from "./context/CartItemsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // for the bot to work and display the message one time, I removed the StrictMode
  // <React.StrictMode>

  <BrowserRouter>
    <AuthContextProvider>
      <CartItemsContextProvider>
        <App />
      </CartItemsContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
