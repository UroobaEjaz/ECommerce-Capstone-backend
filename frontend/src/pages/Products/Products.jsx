import React from "react";
import { Link } from "react-router-dom";

export default ProductCategoryNav = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-around">
        <li className="mx-2">
          <Link to="/beverages" className="text-white hover:text-gray-300">
            Beverages
          </Link>
        </li>
        <li className="mx-2">
          <Link to="/snacks" className="text-white hover:text-gray-300">
            Snacks
          </Link>
        </li>
        <li className="mx-2">
          <Link to="/dairy" className="text-white hover:text-gray-300">
            Dairy Products
          </Link>
        </li>
        <li className="mx-2">
          <Link to="/baked-goods" className="text-white hover:text-gray-300">
            Baked Goods
          </Link>
        </li>
        <li className="mx-2">
          <Link
            to="/household-items"
            className="text-white hover:text-gray-300"
          >
            Household Items
          </Link>
        </li>
        <li className="mx-2">
          <Link to="/personal-care" className="text-white hover:text-gray-300">
            Personal Care
          </Link>
        </li>
        <li className="mx-2">
          <Link to="/frozen-foods" className="text-white hover:text-gray-300">
            Frozen Foods
          </Link>
        </li>
        <li className="mx-2">
          <Link to="/fresh-produce" className="text-white hover:text-gray-300">
            Fresh Produce
          </Link>
        </li>
      </ul>
    </nav>
  );
};
