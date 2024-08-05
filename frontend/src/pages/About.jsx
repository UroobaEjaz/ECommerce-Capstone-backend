/* reference; https://www.youtube.com/watch?v=oP-0wi0CRzc */
/* how to embed google maps in react */
/* https://chatgpt.com/c/deaa3004-8d11-48c0-845c-aba7ccfb6b64 */

import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function About() {
  const [location, setLocation] = useState(null);

  const locations = {
    SW: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10093.726404129077!2d-114.07675412907968!3d51.002751622735634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170ce0f71aaab%3A0x48a5f8f0f4a4d45a!2s208%20Haddon%20Rd%20SW%2C%20Calgary%2C%20AB%20T2V%202Y6%2C%20Canada!5e0!3m2!1sen!2sus!4v1620306795723!5m2!1sen!2sus",
    NE: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10642.16057937851!2d-114.0228835969256!3d51.096967660615785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716fe5c4a91369%3A0x507f6fb42d1b5a0!2s4440%2044%20Ave%20NE%2C%20Calgary%2C%20AB%20T1Y%204K9%2C%20Canada!5e0!3m2!1sen!2sus!4v1620306795723!5m2!1sen!2sus",
  };

  return (
    <div className="">
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-16 px-6 pt-36">
        <div className="container mx-auto max-w-4xl p-8 rounded-xl shadow-lg">
          <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
            About Us
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Welcome to our convenience store! We have locations in NE and SW
            Calgary. Choose a location below to view its map.
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-1"
              onClick={() => setLocation("SW")}
            >
              SW Location
            </button>
            <button
              className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-1"
              onClick={() => setLocation("NE")}
            >
              NE Location
            </button>
            <button
              className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-1"
              onClick={() => setLocation(null)}
            >
              Hide Map
            </button>
          </div>
          {location && (
            <div className="w-full h-80 mb-8 overflow-hidden rounded-xl shadow-lg transition-transform duration-500 ease-in-out transform scale-100 hover:scale-105">
              <iframe
                width="100%"
                height="100%"
                src={locations[location]}
                title={`${location} Location`}
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                className="transition-transform transform scale-100 duration-500 ease-in-out"
              ></iframe>
            </div>
          )}
          <p className="text-lg text-center text-gray-700">
            We look forward to your visit! Explore our wide range of products
            and enjoy exceptional customer service.
          </p>
        </div>
      </div>
    </div>
  );
}
