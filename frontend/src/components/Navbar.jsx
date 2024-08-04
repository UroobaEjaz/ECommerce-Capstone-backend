import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useCartItemsContext } from "../context/CartItemsContext";

const Navbar = () => {
  const { cartItems } = useCartItemsContext();
  return (
    <nav className="bg-gradient-to-r from-slate-200 via-red-400 to-amber-900
    shadow-md p-2 flex justify-between items-center fixed top-0 left-0 w-full z-10 font-bold text-base font-sans h-16">
      <Link to="/" className="p-3">
        <img src="/logo.jpg" alt="Logo" className="w-11 h-11 rounded-full ml-5" />
      </Link>
      <ul className="flex space-x-3 items-center text-lg m-3">
        <li>
          <Link
            to="/"
            className="text-black-600 font-bold hover:text-white p-3"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/Products"
            className="text-black-600 font-bold hover:text-white p-3"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/About"
            className="text-black-600 font-bold hover:text-white p-3"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/Contact"
            className="text-black-600 font-bold hover:text-white p-3"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/Careers"
            className="text-black-600 font-bold hover:text-white p-3"
          >
            Careers
          </Link>
        </li>
        <li>
          <Link
            to="/Login"
            className="text-black-600 font-bold hover:text-white p-3"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/WishList"
            className="text-black-600 font-bold hover:text-white p-3"
          >
            Wishlist
          </Link>
        </li>
        <li className="relative">
          <Link to="/Cart" className="flex items-center p-2">
            <BiCart className="text-white hover:text-red-600 text-3xl" />
            <span className="absolute -top-1 -right-1 text-xs text-white bg-red-600 rounded-full px-2 py-0.5 ">
              {cartItems.length}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
