import React from "react";

function Card({ productName, imageSrc, description, price }) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageSrc} alt="Product Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{productName}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <p className="text-gray-900 font-bold text-xl mt-2">{price}</p>
      </div>
    </div>
  );
}

export default Card;
