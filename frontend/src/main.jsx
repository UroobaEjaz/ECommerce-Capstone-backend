import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { CartItemsProvider } from './context/CartItemsContext';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { WishlistProvider } from "./context/WishListContext.jsx";


const stripePromise = loadStripe('pk_test_51PYndvHxPts9QUETEV1U87HCoGLMj2Ry7v0MGJtgU5xlRYLWZ0sVqvwnhPAOtpjSdPCL0FcE3uIYoLxtFwiHA7Yc008Sa0mhT1');




ReactDOM.createRoot(document.getElementById("root")).render(
  // for the bot to work and display the message one time, I removed the StrictMode
  // <React.StrictMode>
  
  <BrowserRouter>
  <CartItemsProvider>
    <AuthContextProvider>
    <Elements stripe={stripePromise}>
      <WishlistProvider>
          <App />
      </WishlistProvider>

</Elements>
    </AuthContextProvider>
    </CartItemsProvider>
  </BrowserRouter>
  
);
