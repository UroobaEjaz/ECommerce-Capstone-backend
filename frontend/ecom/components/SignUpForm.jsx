// components/SignUpForm.js
import React from "react";

const SignUpForm = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold">Sign Up</h1>

      <form className="w-full space-y-4">
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-1/2 px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-1/2 px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Sign Up
          </button>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
