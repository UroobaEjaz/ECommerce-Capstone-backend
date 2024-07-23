import React, { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom

const SuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set a timeout to redirect after 7 seconds (7000 milliseconds)
    const timer = setTimeout(() => {
      navigate('/');
    }, 7000);

    // Cleanup the timer if the component unmounts before the timeout
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <FaCheckCircle className="text-green-500" size={100} />
      <h1 className="text-4xl font-bold mt-4">Success!</h1>
      <p className="text-xl mt-2 text-center">Thank you for shopping at JK Convenience store</p>
    </div>
  );
};

export default SuccessPage;
