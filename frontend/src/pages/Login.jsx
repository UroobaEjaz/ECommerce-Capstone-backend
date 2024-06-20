import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="">
      <div className="max-w-md w-full bg-darkred p-8 shadow-lg rounded-lg outline">
        <img src="/logo.jpg" alt="Logo" className="h-22 w-12 mr-9 mb-6" />
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
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
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
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
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-black-500 mr-4">
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
            className=" bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 mx-40 mt-4 rounded focus:outline-none focus:ring focus:ring-red-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
