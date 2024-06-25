import React, { useEffect, useState } from "react";

const Checkout = () => {
  const [data, setData] = useState(null);
  setData(localStorage.getItem("cartItems"));
  // setData(() => {
  //   fetch("/api/items/getById/?id=" + data._id, {
  //     method: "POST",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     })
  //     .catch((err) => console.log(err));
  // });
  return (
    <div>
      <h1>Checkout</h1>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <div>{item.name}</div>
            <div>Quantity: {item.quantity}</div>
            <div>Price: ${item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkout;
