import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Careers() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="text-center">
        <h1 className="text-5xl font-bold mt-[500px] mb-10 md:mb-20 mx-4">
          Join JK Convenience's Team
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mx-auto max-w-6xl px-4">
        <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0">
          <h2 className="text-3xl font-bold mb-4 text-left">
            How to apply for a job at JK
          </h2>
          <p className="text-gray-600 text-xl text-left">
            Applying for a job at JK Convenience is easy! <br />
            Simply fill out the form with your information and upload your
            resume. <br />
            Receive notifications upon successful submission.
          </p>
        </div>
        <div className="md:w-1/2 md:pl-10">
          <img
            src="/logo.jpg"
            alt="Careers"
            className="w-64 h-auto mx-auto md:float-right rounded-full mt-4"
          />
        </div>
      </div>
      <div className="text-center mt-10 mb-10">
        <h1 className="text-4xl font-bold">Apply Here</h1>
      </div>
      <div className="mx-auto max-w-6xl px-4">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="Enter your first name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="Enter your last name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="mobileNumber"
            >
              Mobile Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mobileNumber"
              type="text"
              placeholder="Enter your mobile number"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="linkedin"
            >
              LinkedIn URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="linkedin"
              type="text"
              placeholder="Enter your LinkedIn URL"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="resume"
            >
              Upload Resume
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="resume"
              type="file"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
