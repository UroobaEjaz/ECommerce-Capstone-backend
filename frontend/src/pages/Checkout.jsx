/*import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../components/PaymentForm";
const PUBLIC_KEY = "pk_test_51PcvRw2NAyVt2xlZwRAfUTenUciVAU25L6g7ce8iC3jrhfvgjIfjOXgE3NHM0UNqbJsM5tgjwediHPajDGujy0rc00baHVM7DQ"

const stripeTestPromise = loadStripe(PUBLIC_KEY);
const Checkout = () => {
    return (
        <Elements stripe={stripeTestPromise}>
        <PaymentForm />
      </Elements>
    );
    };

export default Checkout; */


import React from 'react';
import PaymentForm from '../components/PaymentForm'; // Adjust the path based on your file structure
import { useCartItemsContext } from '../context/CartItemsContext'; // Adjust path as per your context setup

const Checkout = () => {
  const { cartItems } = useCartItemsContext();

  // Calculate total cart amount
  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        {/* Display cart items here */}
        <ul>
          {cartItems.map((item) => (
            <li key={item._id}>
                <li>{item.name}</li>
                <span>{item.price}</span>
             {/* {item.name} - ${item.price}  */}
             <li>{item.image}</li>
             <li>{item.price}</li>
            </li>
          ))}
        </ul>
        <hr />
        {/* Include payment form */}
        <PaymentForm cartTotal={cartTotal} />
      </div>
    </div>
  );
};

export default Checkout;
