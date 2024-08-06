import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import ChatbotComponent from "./Chatbot.jsx";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "23e62f53-73c6-4963-ba24-01de24f35a87");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen bg-red-100 pt-16 w-full">
        <div className=" p-8 bg-white ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form Section */}
            <div>
              <h2 className="text-3xl font-extrabold mb-6 text-gray-800">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Have a question or want to work together? Fill out the form
                below and we'll get back to you as soon as possible.
              </p>
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Enter your message"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-red-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Submit
                </button>
                <div className="mt-4 text-center text-lg text-gray-600">
                  {result}
                </div>
              </form>
            </div>

            {/* Contact Info Section */}
            <div>
              <h2 className="text-3xl font-extrabold mb-6 text-gray-800">
                Contact Info
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                You can reach us at the following address, phone number, and
                email.
              </p>
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700">Address</h3>
                <p>4440 44 Ave NE Unit #5, Calgary, AB T1Y 4W5</p>
                <p>208 Haddon Rd SW, Calgary, AB T2V 2Y6</p>
              </div>
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700">Phone</h3>
                <p>+1 403-285-3824</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Email</h3>
                <p>kapilpopli1992@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <ChatbotComponent />
      </div>
    </div>
  );
}
