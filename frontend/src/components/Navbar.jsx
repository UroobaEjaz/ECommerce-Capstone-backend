
import React from "react";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useCartItemsContext } from "../context/CartItemsContext";




const Navbar = ({ size }) => {
  const { cartItems } = useCartItemsContext();
  return (   
    // bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10 ----> used this as a reference to make the footer styling
    // used chatgpt to get the syntax on navbar url="build a simple navbar "
    // Reference for using router: https://chatgpt.com/c/cec6a917-8d3e-444f-a498-a6ad0c5706cb*/
    /* searched on chat gpt for the tailwind and logo syntax url="https://chatgpt.com/c/a8500a72-5c40-4bb6-af94-9817af802cee"*/          
    
   <nav className="Container bg-white shadow-md p-4 flex justify-between top-0 left-0 z-10 fixed items-center w-full font-bold">
      <Link to="/" className="p-3">
        <img src="/logo.jpg" alt="Logo " className="w-12 rounded-full" />
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link
            to="/"
            className="text-black-600 font-large hover:text-red-600 p-3"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/Products"
            className="text-black-600 font-large hover:text-red-600 p-3"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/About"
            className="text-black-600 font-large hover:text-red-600 p-3"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/Contact"
            className="text-black-600 font-large hover:text-red-600 p-3 mt-2"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/Login"
            className="text-black-600 font-large hover:text-red-600 p-3"
          >
            Login
          </Link>
        </li>
        <li>
          <Link to="/Cart" className="py-6">
            <BiCart className="text-black-600 font-large hover:text-red-600 text-2xl" />
            <span className="mt-8 mr-1 absolute -top-1 -right-0 text-xs text-white bg-red-600 rounded-full px-2 py-1">
              ({cartItems.length})
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

  


export default Navbar;   