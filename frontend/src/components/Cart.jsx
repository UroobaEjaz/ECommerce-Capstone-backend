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


import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useCartItemsContext } from '../context/CartItemsContext'; // Adjust path as per your context setup

const Cart = () => {
  const { cartItems, setCartItems, setCartItemsNumber } = useCartItemsContext();

  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem._id !== item._id);

    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCartItemsNumber(updatedCartItems.length);
  };

  return (
    <ListGroup>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <ListGroup.Item key={item._id} className="d-flex justify-content-between align-items-center">
            <div>
              <strong>{item.name}</strong>
              <br />
              Quantity: {item.quantity}
              <br />
              Price: ${item.price}
            </div>
            <Button variant="danger" onClick={() => removeFromCart(item)}>
              Remove
            </Button>
          </ListGroup.Item>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </ListGroup>
  );
};

export default Cart;
