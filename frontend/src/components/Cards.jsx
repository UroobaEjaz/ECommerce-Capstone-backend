import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useCartItemsContext } from "../context/CartItemsContext";
import { useNavigate } from "react-router-dom";

// Function to truncate text
const truncateText = (text, wordLimit) => {
  if (!text) return "";

  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};

// Cards component to display items
const Cards = ({ items }) => {
  // State to manage cart items and item quantities
  const [itemQuantities, setItemQuantities] = useState({});
  const { cartItems, setCartItems, setCartItemsNumber } = useCartItemsContext(); // Ensure correct usage
  const nevigate = useNavigate();

  // Function to add item to cart
  const addToCart = async (item) => {
    try {
      const response = await fetch("/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: item._id }),
      });

      if (response.ok) {
        const existingItem = cartItems.find(
          (cartItem) => cartItem.itemId._id === item._id
        );
        const updatedCartItems = existingItem
          ? cartItems.map((cartItem) =>
              cartItem.itemId._id === item._id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            )
          : [...cartItems, { itemId: item, quantity: 1 }];

        setCartItems(updatedCartItems);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

        setItemQuantities((prevQuantities) => ({
          ...prevQuantities,
          [item._id]: (prevQuantities[item._id] || 0) + 1,
        }));

        setCartItemsNumber(updatedCartItems.length);
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
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
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{truncateText(item.description, 8)}</Card.Text>
                <Card.Text>${item.price}</Card.Text>
                {itemQuantities[item._id] ? (
                  <div>
                    <Button onClick={() => addToCart(item)} variant="success">
                      Add More
                    </Button>
                  </div>
                ) : (
                  <Button onClick={() => addToCart(item)} variant="primary">
                    Add to Cart
                  </Button>
                )}
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
