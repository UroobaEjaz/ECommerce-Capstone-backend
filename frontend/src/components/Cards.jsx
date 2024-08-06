import React, { useState } from "react";
//import { Card, Button } from "react-bootstrap";
import { useCartItemsContext } from "../context/CartItemsContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFillCartFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Function to truncate text
const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};

// Cards component to display items
const Cards = ({ items = [] }) => {
  const { cartItems, addToCartContext } = useCartItemsContext(); // Ensure correct usage
  const [itemQuantities, setItemQuantities] = useState({});
  const nevigate = useNavigate();
  // wishlist added
  //const [wishlist, setWishlist] = useState([]);

  // Function to handle quantity change
  const handleQuantityChange = (item, change) => {
    setItemQuantities((prevQuantities) => {
      const currentQuantity = prevQuantities[item._id] || 0;
      const newQuantity = Math.max(0, currentQuantity + change); // Ensure quantity is not negative
      return { ...prevQuantities, [item._id]: newQuantity };
    });
  };

  // Function to handle adding item to cart
  const handleAddToCart = async (item) => {
    const quantity = itemQuantities[item._id] || 1; // Default to 1 if not set

    try {
      const response = await fetch("/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "uroobanumair", // Replace with actual user email
          itemId: item._id,
          cartItemsPrice: item.price,
          cartItemsQuantity: quantity,
        }),
      });

      const data = await response.json();
      console.log(data);

      // Add or update item in context
      if (cartItems.find((cartItem) => cartItem._id === item._id)) {
        // If item already in cart, update quantity
        addToCartContext({ ...item, quantity: itemQuantities[item._id] });
      } else {
        // If item not in cart, add new item
        addToCartContext({ ...item, quantity });
      }

      // Reset the quantity for this item after adding to cart
      setItemQuantities((prevQuantities) => ({
        ...prevQuantities,
        [item._id]: 0,
      }));
    } catch (error) {
      console.log("Error adding item", error);
    }
  };

  // Function to handle adding item to wishlist
  const handleAddToWishlist = async (item) => {
    try {
      const response = await fetch("/api/wishlist/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          itemId: item._id,
        }),
      });

      const data = await response.json();
      console.log(data);

      // Show success toast message
      toast.success("Item successfully added to the wishlist!");
    } catch (error) {
      console.log("Error adding item to wishlist", error);
      // Show error toast message
      toast.error("Failed to add item to wishlist.");
    }
  };

  return (
    <div className="flex flex-wrap justify-center ">
      {items.length > 0 ? (
        items.map((item) => (
          <div
            key={item._id}
            className="w-72 m-4 bg-slate-100 shadow-lg rounded-lg overflow-hidden flex flex-col"
          >
            <img
              src={`/api/items/images/${item.image}`}
              alt={item.name}
              className="w-full h-50 object-cover cursor-pointer"
              onClick={() => nevigate(`/${item._id}`, { state: item._id })}
            />
            <div className="p-4 flex flex-col flex-grow">
              <h2
                className="text-xl font-semibold mb-2 cursor-pointer"
                onClick={() => nevigate(`/${item._id}`, { state: item._id })}
              >
                {item.name}
              </h2>
              <p
                className="text-black mb-2 cursor-pointer"
                onClick={() => nevigate(`/${item._id}`, { state: item._id })}
              >
                {truncateText(item.description, 8)}
              </p>
              <div className="flex items-center justify-between mb-4 mt-3">
                <p className="text-lg font-bold">${item.price}</p>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(item, -1)}
                    className="px-2 py-1 bg-red-700 text-white focus:outline-none"
                  >
                    -
                  </button>
                  <span className="mx-4 text-lg">
                    {itemQuantities[item._id] || 0}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(item, 1)}
                    className=" px-2 py-1 bg-red-700 text-white hover:bg-gray-700 focus:outline-none"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between gap-2 mb-0">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none flex items-center"
                >
                  <BsFillCartFill className="mr-2" />
                </button>
                <button
                  onClick={() => handleAddToWishlist(item)}
                  className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none flex items-center"
                >
                  <FaRegHeart />
                  <span className="sr-only">Add to Wishlist</span>
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
};

export default Cards;

// reference: https://www.youtube.com/watch?v=tjLXot9FsGE  (TOAST MESSAGE)
// REFERENCE: https://www.youtube.com/watch?v=dGYs8I9XY98
