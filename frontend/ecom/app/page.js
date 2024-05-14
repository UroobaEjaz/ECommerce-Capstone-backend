
import React from "react";

//To check the working of the card component, we need to import it in the page.js file.
import Card from "../components/card.jsx";



export default function Home() {
  return (
    <div className="App">
      {/* The card component working */}
      <Card
        productName="Product Name"
        imageSrc="product-image.jpg"
        description="Description of the product goes here."
        price="$XX.XX"
      />
    </div>
  );
}
