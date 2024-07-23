import React, { useEffect } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CancelledPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set a timeout to redirect after 5 seconds (5000 milliseconds)
    const timer = setTimeout(() => {
      navigate('/Payment'); // Adjust the path to your payment form route
    }, 5000);

    // Cleanup the timer if the component unmounts before the timeout
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-100">
      <FaTimesCircle className="text-red-500" size={100} />
      <h1 className="text-4xl font-bold mt-4">Payment Cancelled</h1>
      <p className="text-xl mt-2 text-center">You have cancelled the payment. Redirecting to the payment form...</p>
    </div>
  );
};

export default CancelledPage;


// reference: 