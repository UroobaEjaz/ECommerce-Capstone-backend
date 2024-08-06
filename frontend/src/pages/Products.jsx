import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Card from "../components/Cards";
import Footer from "@/components/footer";

const Products = () => {
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
    <div className="p-32 -mt-20">
      <Navbar />
      <div>
        <ul className="flex justify-around  border border-solid border-black  bg-red-800 p-1 text-white">
          <li className="mx-2">
            <button onClick={getItems("Sweet")} className=" hover:text-red-600">
              Candy
            </button>
          </li>
          <li className="mx-2">
            <button
              onClick={getItems("Chocolate")}
              className=" hover:text-gray-300"
            >
              Chocolates
            </button>
          </li>
          <li className="mx-2">
            <button
              onClick={getItems("Soft Drinks")}
              className=" hover:text-gray-300"
            >
              Soft Drink
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
            <button
              onClick={getItems("Household")}
              className=" hover:text-gray-300"
            >
              Households
            </button>
          </li>
          <li className="mx-2">
            <button
              onClick={getItems("Energy")}
              className=" hover:text-gray-300"
            >
              Energy Drinks
            </button>
          </li>
        </ul>
      </div>
      <Card items={items} handleClick={handleClick} />
    </div>
  );
};

export default Products;
