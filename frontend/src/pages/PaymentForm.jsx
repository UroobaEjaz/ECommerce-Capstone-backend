// PaymentForm.jsx

import React, { useEffect } from "react";
import { useCartItemsContext } from "../context/CartItemsContext";

const PaymentForm = () => {
  const { cartItems } = useCartItemsContext();

  useEffect(() => {
    const initiateCheckout = async () => {
      try {
        const response = await fetch("/api/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ items: cartItems }),
        });

        if (!response.ok) {
          throw new Error("Failed to initiate checkout session");
        }

        const { url } = await response.json();
        window.location.href = url; // Redirect to Stripe Checkout
      } catch (error) {
        console.error("Error during checkout:", error.message);
      }
    };

    initiateCheckout();
  }, [cartItems]);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Redirecting to Checkout...</h2>
    </div>
  );
};

export default PaymentForm;


// reference: https://www.youtube.com/watch?v=_8M-YVY76O8

