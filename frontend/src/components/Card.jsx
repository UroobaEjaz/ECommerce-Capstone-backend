import { set } from "mongoose";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

/* reference: https://chatgpt.com/c/0c9b5125-bd4a-4d11-afe8-0eb143669f0c */// for making the card component

// API made for the getItems ; "http://localhost:5000/api/items"


function Card({ productName, imageSrc, description, price }) {

  const [items, setItems] = useState([]); 

  useEffect(() => {
    axios.get("http://localhost:3000/api/items")
      .then((items) => setItems(items.data))
      .then((err) => console.log(err));
  }, []);


  return (
    <div>
      {
        items.map((item) => (
          <div className="card" style={{ width: "18rem" }}>
            <img src={item.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <p className="card-text">{item.price}</p>
              <a href="#" className="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Card;
