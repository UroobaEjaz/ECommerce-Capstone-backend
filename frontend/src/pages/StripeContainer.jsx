import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../components/PaymentForm";

const PUBLIC_KEY = "pk_test_51PcvRw2NAyVt2xlZwRAfUTenUciVAU25L6g7ce8iC3jrhfvgjIfjOXgE3NHM0UNqbJsM5tgjwediHPajDGujy0rc00baHVM7DQ";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <div style={{ 
        maxWidth: '400px', 
        marginTop: '100px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
      }}>
        <PaymentForm />
      </div>
    </Elements>
  );
}
