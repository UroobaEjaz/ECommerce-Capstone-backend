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


// Cart.jsx

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

export default Cart;
