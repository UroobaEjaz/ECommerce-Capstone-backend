//reference: https://www.google.com/search?sca_esv=b8996be4c462e1ec&sca_upv=1&rlz=1C1OPNX_enCA1057CA1057&sxsrf=ADLYWILNwRNlDNp1RIm4pU8diULUBW20LA:1718222177946&q=how+to+create+cards+when+data+is+being+fetched+from+api&tbm=vid&source=lnms&fbs=AEQNm0DVrIRjdA3gRKfJJ-deMT8ZtYOjoIt1NWOMRkEKym4u5PkAZgxJOmIgPx6WieMhF6q1Hq7W6nME2Vp0eHuijF3ZElaTgD0zbj1gkQrti2r6HtU_FSIC_TOIRePmNlS6X7JM5HBW5XbZDBZ4_7u7u_1S0lBKWZanVrzOMi5iZT88U7e3_wgsAQOPU_p9Gb66BSsVUXKxPRPH2pqhwDp-oi5jONlpDQ&sa=X&ved=2ahUKEwiV7b607NaGAxWwADQIHakRAsYQ0pQJegQIDBAB&biw=1396&bih=632&dpr=1.38#fpstate=ive&vld=cid:15d3deed,vid:RYF4_pqhS38,st:0
// to run this install : npm install @mui/material @emotion/react @emotion/styled

import React, { useState, useEffect } from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import { useCartItemsContext } from "../context/CartItemsContext"; // Adjust path as per your context setup

// Function to truncate text
const truncateText = (text, wordLimit) => {
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

  const { cartItems, addToCart } = useCartItemsContext(); // Ensure correct usage
  const [CartItemsQuantity, setCartItemsQuantity] = useState(0);
  const [CartItemsPrice, setCartItemsPrice] = useState(0);

  const getCartItems = async () => {
    try {
      const response = await fetch("/api/cart/items", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      //setItems(data);
      console.log(data);
    } catch (error) {
      console.log("error getting items", error);
    }
  };

  const addCartItem = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("price", CartItemsPrice);
    formData.append("quantity", CartItemsQuantity);

    try {
      const response = await fetch("/api/items/add", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data);
      getCartItems();
    } catch (error) {
      console.log("error adding item", error);
    }
  };

  useEffect(() => {
    getCartItems();
  }, []);

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
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{truncateText(item.description, 8)}</Card.Text>
                <Card.Text>${item.price}</Card.Text>
                {itemQuantities[item._id] ? (
                  <div>
                    <Button onClick={() => addCartItem()} variant="success">
                      Add More
                    </Button>
                    <Badge pill variant="info" className="ml-2">
                      {itemQuantities[item._id]}
                    </Badge>
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
