import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {




  return (
    // used chatgpt to get the syntax on navbar url="build a simple navbar "
    <nav className="bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10 ">
      {/* searched on chat gpt for the tailwind and logo syntax url="https://chatgpt.com/c/a8500a72-5c40-4bb6-af94-9817af802cee"*/}
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
          <Link to="/About" className="text-gray-600 hover:text-blue-600">
            About
          </Link>
        </li>
        <li>
          <a href="/Contact" className="text-gray-600 hover:text-blue-600">
            Contact
          </a>
        </li>
        <li>
          <Link href="/login" className="text-gray-600 hover:text-blue-600">
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
