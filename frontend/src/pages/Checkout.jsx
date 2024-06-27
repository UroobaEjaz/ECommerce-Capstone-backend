import React, { useEffect, useState } from "react";

const Checkout = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(localStorage.getItem("cartItems"));
  }, []);

  console.log("data", data);

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
    <div className="flex flex-col">
      <h1>hello</h1>
      <div></div>
    </div>
  );
};

export default Checkout;
