/*import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button } from 'react-bootstrap';

const PaymentForm = ({ cartTotal }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      // Handle successful payment here, e.g., send paymentMethod.id to your server
      setPaymentError(null);
      setPaymentSuccess('Payment successful!');
    }
  };

  return (
    <div className="flex justify-center items-center h-96 ">
      <form onSubmit={handleSubmit} className="w-full p-6 bg-white  rounded-lg">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <Button type="submit" disabled={!stripe} className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg">
          Pay ${cartTotal}
        </Button>
        {paymentError && <p className="text-red-500 mt-4 text-sm">{paymentError}</p>}
        {paymentSuccess && <p className="text-green-500 mt-4 text-sm">{paymentSuccess}</p>}
      </form>
    </div>
  );
};

export default PaymentForm;*/

// src/components/PaymentForm.js
/*
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCartItemsContext } from "../context/CartItemsContext";

const PaymentForm = () => {
  const { cartItems } = useCartItemsContext();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Checkout</h2>   
      <Form>    */
        {/* Optionally, you can add additional form fields here */}
    {/*    <Button
          type="button"
          onClick={handleCheckout}
          variant="primary"
          disabled={loading}
        >
          {loading ? "Processing..." : "Proceed to Checkout"}
        </Button>
      </Form>
    </div>
  );
};   */}


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

