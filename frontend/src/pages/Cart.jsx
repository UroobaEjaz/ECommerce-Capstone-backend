// // Cart.js
// import { Link } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import axios from "axios"; // Assuming you are using axios for HTTP requests
// import Navbar from "./Navbar";

// export default function Cart() {
//   const [cart, setCart] = useState(null);
//   const [loading, setLoading] = useState(true
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


// Cart.jsx
/*
import React from "react";
import { useCartItemsContext } from '../context/CartItemsContext';
import { Card, Button, Badge } from "react-bootstrap";

const Cart = () => {
  const { cartItems, removeFromCart } = useCartItemsContext();

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  return (
    <div className="p-4">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <Card key={item._id} className="mb-3">
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text>${item.price}</Card.Text>
              <Button onClick={() => handleRemoveFromCart(item)} variant="danger">
                Remove from Cart
              </Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart; */
/*
import React, { useEffect } from "react";
import { useCartItemsContext } from '../context/CartItemsContext';
import { Card, Button, Badge } from "react-bootstrap";

const Cart = () => {

  const [CartItemsName, setCartItemsName] = useState([]);
  const [CartItemsPrice, setCartItemsPrice] = useState([]);
  const [CartItemsQuantity, setCartItemsQuantity] = useState([]);

  const getCartItems = async () => {
    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
     

      const data = await response.json();
      setCartItemsName(data.name);
      setCartItemsPrice(data.price);
      setCartItemsQuantity(data.quantity);
      console.log(data);
    } catch (error) {
      console.log("error getting cart items", error);
    }
  };

  const addCartItems = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", CartItemsName);
    formData.append("price", CartItemsPrice);
    formData.append("quantity", CartItemsQuantity);

    try {
      const response = await fetch("/api/cart/add", {
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
    <div className="p-4">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <Card key={item._id} className="mb-3">
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>Description: {item.description}</Card.Text>
              <Card.Text>Price: ${item.price}</Card.Text>
              <Button onClick={() => addCartItem(item)} variant="danger">
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}; */
import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useCartItemsContext } from '../context/CartItemsContext';
import { Link } from "react-router-dom";


const Cart = () => {
  const { cartItems, removeFromCart, setCartItems } = useCartItemsContext();

  useEffect(() => {
    // Fetch cart items on component mount
    getCartItems();
  }, []);

  const getCartItems = async () => {
    try {
      const response = await fetch("/api/cart/items", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch cart items');
      }

      const data = await response.json();
      // Update cartItems context state with fetched items
     
      console.log(data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const handleRemoveFromCart = async (item) => {
    try {
      await removeFromCart(item); // Call removeFromCart function from context
      getCartItems(); // Refresh cart items after removal
    } catch (error) {
      console.error("Error removing item:", error.message);
    }
  };

  

  return (
    <div className="p-4">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
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
                <Card.Text>Description: {item.description}</Card.Text>
                <Card.Text>Price: ${item.price}</Card.Text>
                <Button onClick={() => handleRemoveFromCart(item)} variant="danger">
                  Remove from Cart
                </Button>
              </Card.Body>
            </Card>
            <Link to ='/StripeContainer'>
            <Button variant="primary">Proceed to Checkout</Button>
            </Link>
           
           
          
          </motion.div>
          
        ))
      ) : (
        <p>Your cart is empty.</p>
      )
      }
    </div>
  );
};

export default Cart;
