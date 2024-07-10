/*import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Card from "../components/Cards";
import Cart from "../pages/Cart";

export default function Products() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    setCart([...cart, item]);
  };

  const getItems = (category) => async () => {
    try {
      const response = await fetch("/api/items/getByCategory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ category }),
      });

      const data = await response.json();
      setItems(data);
      console.log(data);
    } catch (error) {
      console.log("error getting items", error);
    }
  };
  return (
    <div className="p-4">
      <Navbar size={cart.length} />
      <div>
        <ul className="flex justify-around -mt-80 border border-solid border-black rounded-xl bg-stone-200 ">    */
          {/* Example of how to use the getItems function */}
 /*         <li className="mx-2">
            <button onClick={getItems("Sweet")} className=" hover:text-red-600">
              Sweets
            </button>
          </li>
          <li className="mx-2">
            <button
              onClick={getItems("Drinks")}
              className=" hover:text-gray-300"
            >
              Cold Drink
            </button>
          </li>
          <li className="mx-2">
            <button
              onClick={getItems("Chips")}
              className=" hover:text-gray-300"
            >
              Snacks
            </button>
          </li>
          <li className="mx-2">
            <Link to="/dairy" className=" hover:text-gray-300">
              Dairy Products
            </Link>
          </li>
          <li className="mx-2">
            <Link to="/baked-goods" className=" hover:text-gray-300">
              Baked Goods
            </Link>
          </li>
          <li className="mx-2">
            <Link to="/household-items" className=" hover:text-gray-300">
              Household Items
            </Link>
          </li>
          <li className="mx-2">
            <Link to="/personal-care" className=" hover:text-gray-300">
              Personal Care
            </Link>
          </li>
          s
          <li className="mx-2">
            <Link to="/frozen-foods" className=" hover:text-gray-300">
              Frozen Foods
            </Link>
          </li>
          <li className="mx-2">
            <Link to="/fresh-produce" className=" hover:text-gray-300">
              Fresh Produce
            </Link>
          </li>
        </ul>
      </div>
      <Card items={items} handleClick={handleClick} />
    </div>
  );
}  */
