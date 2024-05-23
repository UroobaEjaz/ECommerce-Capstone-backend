
/* reference; https://www.youtube.com/watch?v=oP-0wi0CRzc */
/* how to embed google maps in react */
/* styling from the chatgpt */


import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-4">Welcome to our convenience store! We are located at 208 Haddon Rd SW, Calgary, AB T2V 2Y6.</p>
      <div className="w-full h-96 mb-4">
        <iframe
          width="100%"
          height="100%"
          src="https://maps.google.com/maps?width=100%25&amp;height=700&amp;hl=en&amp;q=208%20Haddon%20Rd%20SW,%20Calgary,%20AB%20T2V%202Y6+(JK%20Convenience%20Store)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="JK Convenience Store Location"
        ></iframe>
      </div>
      <p>Come visit us for a wide range of products and excellent customer service!</p>
    </div>
  );
};

export default About;
