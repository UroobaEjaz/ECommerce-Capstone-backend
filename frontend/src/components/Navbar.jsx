import { useState } from "react";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useCartItemsContext } from "../context/CartItemsContext";
// Refrence for the toggle button: https://www.youtube.com/watch?v=J0BL6d1j-sg&ab_channel=MpCodes
const Navbar = ({ size }) => {
  const { cartItems } = useCartItemsContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between top-0 left-0 z-10 fixed items-center w-full font-bold">
      <Link to="/" className="p-3">
        <img src="/logo.jpg" alt="Logo" className="w-12 rounded-full" />
      </Link>
      <button
        onClick={toggleNavbar}
        className="text-black-600 font-large hover:text-red-600 p-3 lg:hidden"
      >
        ☰
      </button>
      <ul className={`flex space-x-4 ${isOpen ? "block" : "hidden"} lg:flex`}>
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
            to="/Careers"
            className="text-black-600 font-large hover:text-red-600 p-3 mt-2"
          >
            Careers
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
