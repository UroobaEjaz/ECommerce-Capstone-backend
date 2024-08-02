import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate login process (replace with actual login logic)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen">
        {/* Form Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-10 animate-slideIn">
          <div className="w-full max-w-md bg-gray-200 p-8 shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Login
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 sm:text-sm transition-transform duration-300 ease-in-out transform hover:scale-105"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 sm:text-sm transition-transform duration-300 ease-in-out transform hover:scale-105"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-gray-700">
                  Don't have an account?
                </p>
                <Link
                  to="/signup"
                  className="text-sm text-blue-500 hover:text-blue-700"
                >
                  Sign Up
                </Link>
              </div>
              <button
                type="submit"
                className="bg-red-900 hover:bg-red-600 text-white font-semibold py-2 px-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-transform duration-300 ease-in-out transform hover:scale-105"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
        {/* Decorative Section */}
        <div className="w-1/2 flex items-center justify-center bg-red-900 p-10 animate-fadeIn">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome Back!</h1>
            <p className="text-lg">
              Log in to access your account and continue where you left off.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-slideIn {
          animation: slideIn 0.5s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-in;
        }
      `}</style>
    </>
  );
};

export default Login;
