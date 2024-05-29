import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10 ----> used this as a reference to make the footer styling
    // used chatgpt to get the syntax on navbar url="build a simple navbar "
    // Reference for using router: https://chatgpt.com/c/cec6a917-8d3e-444f-a498-a6ad0c5706cb*/
    /* searched on chat gpt for the tailwind and logo syntax url="https://chatgpt.com/c/a8500a72-5c40-4bb6-af94-9817af802cee"*/
    <nav className="bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10 font-bold">
      <Link to="/" className="">
        <img src="/logo.jpg" alt="Logo " className="w-12 rounded-full" />
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-gray-600 hover:text-blue-600">
            Home
          </Link>
        </li>
        <li>
          <Link to="/Products" className="text-gray-600 hover:text-blue-600">
            Products
          </Link>
        </li>
        <li>
          <Link to="/About" className="text-gray-600 hover:text-blue-600">
            About
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="text-gray-600 hover:text-blue-600">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/Login" className="text-gray-600 hover:text-blue-600">
            Login
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <BiCart className="text-gray-600 hover:text-blue-600 text-2xl" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
