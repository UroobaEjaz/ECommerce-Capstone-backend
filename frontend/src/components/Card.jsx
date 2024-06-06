import { set } from "mongoose";
import React, { useEffect } from "react";
import { useState } from "react";

/* reference: https://chatgpt.com/c/0c9b5125-bd4a-4d11-afe8-0eb143669f0c */

function Card({ items }) {
  // if (item.length < 1 && (items = "{error : 'No item found'}")) {
  //   return (
  //     <div>
  //       <p>We dont currently has items for this catagory</p>
  //       <div>{items}</div>
  //     </div>
  //   );
  // }
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

export default Card;
