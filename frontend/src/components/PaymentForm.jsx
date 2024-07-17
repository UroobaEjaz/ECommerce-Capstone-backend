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
    <form onSubmit={handleSubmit} style={{ maxWidth: '500px'
    ,margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
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
      <Button type="submit" disabled={!stripe} style={{ marginTop: '20px', width: '100%', fontSize: '18px' }}>
        Pay ${cartTotal}
      </Button>
      {paymentError && <p style={{ color: 'red', marginTop: '10px', fontSize: '14px' }}>{paymentError}</p>}
      {paymentSuccess && <p style={{ color: 'green', marginTop: '10px', fontSize: '14px' }}>{paymentSuccess}</p>}
    </form>
  );
};

export default PaymentForm;
