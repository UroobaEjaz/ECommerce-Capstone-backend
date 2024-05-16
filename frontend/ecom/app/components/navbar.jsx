import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10">
      <Link href="/" className="text-xl font-bold text-gray-800">
        Logo
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-gray-600 hover:text-blue-600">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-gray-600 hover:text-blue-600">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/login" className="text-gray-600 hover:text-blue-600">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
