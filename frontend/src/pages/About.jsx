

/* reference; https://www.youtube.com/watch?v=oP-0wi0CRzc */
/* how to embed google maps in react */
/* https://chatgpt.com/c/deaa3004-8d11-48c0-845c-aba7ccfb6b64 */


import React, { useState } from "react";
import Navbar from "../components/Navbar";


export default function About() {
  const [location, setLocation] = useState(null);

  const locations = {
    SE: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10093.726404129077!2d-114.07675412907968!3d51.002751622735634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170ce0f71aaab%3A0x48a5f8f0f4a4d45a!2s208%20Haddon%20Rd%20SW%2C%20Calgary%2C%20AB%20T2V%202Y6%2C%20Canada!5e0!3m2!1sen!2sus!4v1620306795723!5m2!1sen!2sus",
    NE: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10642.16057937851!2d-114.0228835969256!3d51.096967660615785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716fe5c4a91369%3A0x507f6fb42d1b5a0!2s4440%2044%20Ave%20NE%2C%20Calgary%2C%20AB%20T1Y%204K9%2C%20Canada!5e0!3m2!1sen!2sus!4v1620306795723!5m2!1sen!2sus"
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Navbar />
      <h1 className="text-3xl font-bold mb-4 my-9">About Us</h1>
      <p className="mb-4">
        Welcome to our convenience store! Our current locations are in NE and SE. Pick one to display the map.
      </p>
      <div className="flex space-x-4 mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setLocation('SE')}
        >
          Show SE Map
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => setLocation('NE')}
        >
          Show NE Map
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => setLocation(null)}
        >
          Hide Map
        </button>
      </div>
      {location && (
        <div className="w-full h-96 mb-4">
          <iframe
            width="100%"
            height="100%"
            src={locations[location]}
            title={`${location} Location`}
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      )}
      <p>
        Come visit us for a wide range of products and excellent customer
        service!
      </p>
    </div>
  );
}
