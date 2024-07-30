import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
//import Products from "./pages/Products";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Search from "./pages/Search";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import About from "./pages/About";
import Contact from "./pages/Contact";
//import Checkout from "./pages/Checkout";
import AdminCheckout from "./pages/AdminCheckout";
import Careers from "./pages/Careers";
import ItemDetails from "./pages/itemDetails";
//import StripeContainer from "./pages/StripeContainer";
import WishList from "./pages/WishList";
import Cancel from "./pages/Cancel";
import Success from "./pages/Success";
import { Payment } from "@mui/icons-material";
import PaymentPage from "./pages/PaymentForm";
// Used ChatGPT to get the syntax for the Router and the Routes URL:https://chatgpt.com/c/eed16b61-cd05-4273-bf35-cdd64b66b642
// Watched Youtube videos as well url:https://www.youtube.com/watch?v=17l6AOc8s10&ab_channel=CodeComplete , https://www.youtube.com/watch?v=SLfhMt5OUPI&ab_channel=WebDevSimplified
export default function App() {
  const { authUser } = useAuthContext();

  // https://stackoverflow.com/questions/39128931/clear-localstorage-on-tab-browser-close-but-not-on-refresh
  window.onbeforeunload = function(e) {
    window.localStorage.removeItem("cartItems");
    // window.localStorage.removeItem("id");
  };

  const [id, setId] = useState(null);

  const getId = async () => {
    try {
      const id = await fetch("/api/cart/tempid", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await id.json();
      setId(data.email);
      console.log(data.email);
      localStorage.setItem("id", data.email);
    } catch (error) {
      console.log("error getting tempid", error);
    }
  };

  if (localStorage.getItem("id") === null) {
    getId();
  }

  useEffect(() => {
    setId(localStorage.getItem("id"));
    console.log(localStorage.getItem("id"));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={!authUser ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUp /> : <Navigate to="/" />}
        />
        {/* <Route
            path="/Products"
            element={!authUser ? <Products /> : <Navigate to="/" />}
          />   */}
        {/*   <Route
          path="/StripeContainer"
          element={<StripeContainer />}
        /> */}
        <Route path="/About" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Contact" element={<Contact />} />
        <Route
          path="/Admin"
          element={!authUser ? <Admin /> : <Navigate to="/" />}
        />
        <Route
          path="/AdminCheckout"
          element={!authUser ? <AdminCheckout /> : <Navigate to="/" />}
        />
        <Route path="/search" element={<Search />} />

        <Route path="/Careers" element={<Careers />} />
        <Route path="/:details" element={<ItemDetails />} />
        <Route path = "/WishList" element = {<WishList />} />

        <Route path="/Cancel" element={<Cancel />} />

        <Route path="/Success" element={<Success />} />
        <Route path = "/Payment" element ={<PaymentPage />} />
      </Routes>
    </>
  );
}
