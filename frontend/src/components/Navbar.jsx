import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10">
      <Link to="/login" className="text-xl font-bold text-gray-800">
        Logo
      </Link>
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="text-gray-600 hover:text-blue-600">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="text-gray-600 hover:text-blue-600">
            About
          </a>
        </li>
        <li>
          <a href="/contact" className="text-gray-600 hover:text-blue-600">
            Contact
          </a>
        </li>
        <li>
          <a href="/login" className="text-gray-600 hover:text-blue-600">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
