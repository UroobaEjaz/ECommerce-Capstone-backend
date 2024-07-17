import React, { useState } from 'react';
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

export default PaymentForm;
