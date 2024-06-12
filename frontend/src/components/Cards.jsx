/*import { set } from "mongoose";
import React, { useEffect } from "react";
import { useState } from "react"; */

/* reference: https://chatgpt.com/c/0c9b5125-bd4a-4d11-afe8-0eb143669f0c */
/*
function Card({ items }) {
  // if (item.length < 1 && (items = "{error : 'No item found'}")) {
  //   return (
  //     <div>
  //       <p>We dont currently has items for this catagory</p>
  //       <div>{items}</div>
  //     </div>
  //   );
  // }
  const [item, setItem] = useState([]);
  const getItems = async () => {
    try {
      const response = await fetch("/api/items/get", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setItem(data);
      console.log(data);
    } catch (error) {
      console.log("error getting items", error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);
  return (
    <div className="flex flex-col">
      {items &&
        items.map((item) => (
          <div className="" style={{ width: "18rem" }} key={item.name}>
            <img
              src={`/api/items/images/${item.image}`}
              className=""
              alt="..."
            />
            <div className="">
              <h5 className="">{item.name}</h5>
              <p className="">{item.description}</p>
              <p className="">{item.price}</p>
              <a href="#" className="">
                Add to Cart
              </a>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Card; */

// src/components/ItemGrid.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const Cards = ({ items }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {items.length > 0 ? (
        items.map((item) => (
          <Card key={item.name} style={{ margin: 16, maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={`/api/items/images/${item.image}`}
              alt={item.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
              <Typography variant="h6" color="text.primary">
                {item.price}
              </Typography>
              <Button size="small" color="primary">
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="h6" color="text.secondary">
          No items found.
        </Typography>
      )}
    </div>
  );
};

export default Cards;

