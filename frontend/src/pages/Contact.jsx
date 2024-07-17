import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import ChatbotComponent from "./Chatbot.jsx";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
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
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-4xl p-8 bg-white shadow-lg rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
              <p className="mb-8">
                Have a question or want to work together? Fill out the form
                below and we'll get back to you as soon as possible.
              </p>
              <form onSubmit={onSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    name="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div>
                  <button
                    className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
              <div className="mt-4">
                <p>{result}</p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Info</h2>
              <p className="mb-4">
                You can reach us at the following address, phone number, and
                email.
              </p>
              <div className="mb-4">
                <h3 className="font-bold">Address</h3>
                <p>4440 44 Ave NE Unit #5, Calgary, AB T1Y 4W5</p>
                <p>208 Haddon Rd SW, Calgary, AB T2V 2Y6</p>
              </div>
              <div className="mb-4">
                <h3 className="font-bold">Phone</h3>
                <p>+14032853824</p>
              </div>
              <div>
                <h3 className="font-bold">Email</h3>
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
