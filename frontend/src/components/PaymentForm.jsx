import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

export default function PaymentForm() {
    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        if (!error) {
            try {
                const { id } = paymentMethod;
                const response = await fetch('/api/payment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        amount: 1000, // Replace with your desired amount in cents
                        id: id,
                    }),
                });

                const data = await response.json();

                if (response.ok) {
                    console.log('Successful payment');
                    setSuccess(true);
                } else {
                    console.error('Payment failed:', data.error);
                }
            } catch (error) {
                console.error('Error processing payment:', error);
            }
        } else {
            console.error(error.message);
        }
    };

    return (
       <div className='max-w-lg'>
            {!success ? (
                <div className="w-full max-w-2xl bg-white shadow-md rounded-lg px-8 py-6 mb-4">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="card-element">
                                Card details
                            </label>
                            <div className="border border-gray-300 rounded-lg p-4">
                                <CardElement
                                    id="card-element"
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
                            </div>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
                            >
                                Pay
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="text-center">
                    <h2 className="text-3xl text-green-700 font-bold">Payment successful!</h2>
                </div>
            )}
        </div>
    );
}
