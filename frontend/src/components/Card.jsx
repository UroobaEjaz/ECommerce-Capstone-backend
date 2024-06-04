import { set } from "mongoose";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios"; // for making the card component // API made for the getItems ; "http://localhost:5000/api/items"

/* reference: https://chatgpt.com/c/0c9b5125-bd4a-4d11-afe8-0eb143669f0c */

function Card({ items }) {
  return (
    <div>
      {items.map((item) => (
        <div className="" style={{ width: "18rem" }}>
          <img
            src={`http://localhost:5000/api/items/images/${item.image}`}
            className=""
            alt="..."
          />
          <div className="">
            <h5 className="">{item.name}</h5>
            <p className="">{item.description}</p>
            <p className="">{item.price}</p>
            <a href="#" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
