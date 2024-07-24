import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useCartItemsContext } from "../context/CartItemsContext"; // Adjust path as per your context setup
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';


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
  const { cartItems,  addToCartContext } = useCartItemsContext(); // Ensure correct usage
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
      if (cartItems.find(cartItem => cartItem._id === item._id)) {
        increaseQuantity(item);
      } else {
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
// wishlist adding function
// Function to handle adding item to wishlist
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
    <div className="d-flex flex-wrap justify-content-center">
      {items.length > 0 ? (
        items.map((item) => (
          <motion.div
            key={item._id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{ width: "18rem", margin: "1rem", display: "flex" }}
          >
            <Card>
              <Card.Img
                variant="top"
                src={`/api/items/images/${item.image}`}
                alt={item.name}
                onClick={() => nevigate(`/${item._id}`, { state: item._id })}
                className="cursor-pointer"
              />
              <Card.Body>
                <Card.Title
                  onClick={() => nevigate(`/${item._id}`, { state: item._id })}
                  className="cursor-pointer"
                >
                  {item.name}
                </Card.Title>
                <Card.Text
                  onClick={() => nevigate(`/${item._id}`, { state: item._id })}
                  className="cursor-pointer"
                >
                  {truncateText(item.description, 8)}
                </Card.Text>
                <Card.Text>${item.price}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <Button onClick={() => handleQuantityChange(item, -1)} variant="secondary">-</Button>
                  <span>{itemQuantities[item._id] || 0}</span>
                  <Button onClick={() => handleQuantityChange(item, 1)} variant="secondary">+</Button>
                </div>
                <Button onClick={() => handleAddToCart(item)} variant="primary">
                  Add to Cart
                </Button>
                <Button onClick={() => handleAddToWishlist(item)} variant="outline-danger">
                  ❤️ Add to Wishlist
                </Button>
              </Card.Body>
            </Card>
          </motion.div>
        ))
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
};

export default Cards;
