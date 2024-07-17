/*import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import ListItems from "./pages/ListItems";
import Search from "./pages/Search";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { useCartContext } from './context/CartItemsContext';


// Used ChatGPT to get the syntax for the Router and the Routes URL:https://chatgpt.com/c/eed16b61-cd05-4273-bf35-cdd64b66b642
// Watched Youtube videos as well url:https://www.youtube.com/watch?v=17l6AOc8s10&ab_channel=CodeComplete , https://www.youtube.com/watch?v=SLfhMt5OUPI&ab_channel=WebDevSimplified
export default function App() {
  const { authUser } = useAuthContext();
  const { cartItems, setCartItems } = useCartContext();
  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center bg-white">
        <Routes>
          <Route
            path="/"
            element={!authUser ? <Home /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!authUser ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!authUser ? <SignUp /> : <Navigate to="/" />}
          />   */
        {/*  <Route
            path="/Products"
            element={!authUser ? <Products /> : <Navigate to="/" />}
          />  */}  
       /*   <Route
            path="/About"
            element={!authUser ? <About /> : <Navigate to="/" />}
          />
          <Route
            path="/Contact"
            element={!authUser ? <Contact /> : <Navigate to="/" />}
          />
          <Route
            path="/listitems"
            element={!authUser ? <ListItems /> : <Navigate to="/" />}
          />
          <Route
            path="/search"
            element={!authUser ? <Search /> : <Navigate to="/" />}
          />
          <Route path="/Cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        </Routes>
      </div>
    </>
  );
}
*/


import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ListItems from "./pages/ListItems";
import Search from "./pages/Search";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart"; // Ensure correct path to Cart component
import { useCartItemsContext } from './context/CartItemsContext'; // Adjusted to useCartItemsContext
import Checkout from "./pages/Checkout";

export default function App() {
  const { authUser } = useAuthContext();
  const { cartItems, setCartItems } = useCartItemsContext(); // Updated to useCartItemsContext

  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center bg-white">
        <Routes>
          <Route
            path="/"
            element={!authUser ? <Home /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!authUser ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!authUser ? <SignUp /> : <Navigate to="/" />}
          />
          {/* Uncomment if you have a Products route */}
          {/* <Route
            path="/Products"
            element={!authUser ? <Products /> : <Navigate to="/" />}
          /> */}
          <Route
            path="/About"
            element={!authUser ? <About /> : <Navigate to="/" />}
          />
          <Route
            path="/Contact"
            element={!authUser ? <Contact /> : <Navigate to="/" />}
          />
          <Route
            path="/listitems"
            element={!authUser ? <ListItems /> : <Navigate to="/" />}
          />
          <Route
            path="/search"
            element={!authUser ? <Search /> : <Navigate to="/" />}
          />
          <Route
            path="/Cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} // Pass cartItems and setCartItems props
          />
           <Route
            path="/Checkout"
            element={!authUser ? <Checkout/> : <Navigate to="/" />}
          />
        </Routes>
      </div>
      <Toaster /> {/* Toast notifications */}
    </>
  );
}
