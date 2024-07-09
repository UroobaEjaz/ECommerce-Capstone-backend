// // Cart.js
// import { Link } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import axios from "axios"; // Assuming you are using axios for HTTP requests
// import Navbar from "./Navbar";

// export default function Cart() {
//   const [cart, setCart] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCartData = async () => {
//       try {
//         const response = await axios.get("/api/addItem"); // Adjust URL based on your backend route
//         setCart(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching cart:", error);
//         setError("Error fetching cart. Please try again later.");
//         setLoading(false);
//       }
//     };

//     fetchCartData();
//   }, []);

//   if (loading) return <p>Loading cart...</p>;
//   if (error) return <p>{error}</p>;
//   if (!cart) return <p>No items in cart.</p>;

//   return (
//     <div>
//       <Navbar />
//       <h2>Cart</h2>
//       <ul>
//         {cart.cartItems.map((item, index) => (
//           <li key={index}>
//             <div>{item.name}</div>
//             <div>Quantity: {item.quantity}</div>
//             <div>Price: ${item.price}</div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// Cart component
// Cart.js
// export default function Cart({ cart }) {
//   if (!cart || cart.length === 0) {
//     return (
//       <div>
//         <Navbar />
//         <h2>Cart</h2>
//         <p>No items in cart.</p>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <Navbar />
//       <h2>Cart</h2>
//       <ul>
//         {cart.map((item, index) => (
//           <li key={index}>
//             <div>{item.name}</div>
//             <div>Quantity: {item.quantity}</div>
//             <div>Price: ${item.price}</div>
//           </li>
//         ))}
//       </ul>
//       <Cart cart={cart} />
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { ListGroup, Button, Image } from "react-bootstrap";
import { useCartItemsContext } from '../context/CartItemsContext'; // Adjust path as per your context setup

const Cart = () => {
  const { cartItems, setCartItems, setCartItemsNumber } = useCartItemsContext();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('/api/cart');
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, [setCartItems]);

  const removeFromCart = async (itemId) => {
    try {
      const response = await fetch('/api/cart/remove', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemId }),
      });

      if (response.ok) {
        const updatedCartItems = cartItems.filter((cartItem) => cartItem.itemId._id !== itemId);
        setCartItems(updatedCartItems);
        setCartItemsNumber(updatedCartItems.length);
      }
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.itemId.price * item.quantity, 0).toFixed(2);
  };

  return (
    <ListGroup>
      {cartItems.length > 0 ? (
        cartItems.map((cartItem) => (
          <ListGroup.Item key={cartItem._id} className="d-flex justify-content-between align-items-center">
            <div>
              <strong>{cartItem.itemId.name}</strong>
              <br />
              <Image src={`/api/items/images/${cartItem.itemId.image}`} alt={cartItem.itemId.name} thumbnail />
              <br />
              Quantity: {cartItem.quantity}
              <br />
              Price: ${cartItem.itemId.price}
            </div>
            <Button variant="danger" onClick={() => removeFromCart(cartItem.itemId._id)}>
              Remove
            </Button>
          </ListGroup.Item>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      <ListGroup.Item>
        <h5>Total: ${calculateTotal()}</h5>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Cart;
