// Cart.js
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios"; // Assuming you are using axios for HTTP requests
import Navbar from "./Navbar";
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

export default function Cart({ cart = [], setCart }) {
  const [price, setPrice] = useState(0);
  return (
    <article>
      <Navbar />
      {cart.map((item) => (
        <div className="Cart_box" key={item.id}>
          <div className="Cart_img">
            <img src={item.image} alt={item.name} />
          </div>
        </div>
      ))}
    </article>
  );
}
