import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { CartItemsProvider } from "./context/CartItemsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // for the bot to work and display the message one time, I removed the StrictMode
  // <React.StrictMode>

  <BrowserRouter>
    <AuthContextProvider>
      <CartItemsProvider>
        <App />
      </CartItemsProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
  

  // main.jsx (or your main application file)


