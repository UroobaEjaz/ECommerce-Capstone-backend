import React, { useState, useEffect } from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const AdminCheckout = () => {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState("");

  const getItems = async () => {
    try {
      const response = await fetch("/api/admin/get", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setItems(data);
      console.log(data);
    } catch (error) {
      console.log("error getting items", error);
    }
  };

  const getTotalPrice = () => {
    let total = 0;
    items.map((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  };

  const totalPerCatagory = () => {
    items.map((item) => {});
  };

  const run = async () => {
    await getItems();
    await getTotalPrice();
  };

  useEffect(() => {
    run();
  }, []);
  return (
    <div>
      <h1>Admin Checkout</h1>
      <p>Admin Checkout page</p>
      <button onClick={() => totalPerCatagory()}>click</button>
      <div>
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: "series A" },
                { id: 1, value: 15, label: "series B" },
                { id: 2, value: 20, label: "series C" },
              ],
            },
          ]}
          width={400}
          height={200}
        />
      </div>
      {items.map((item) => (
        <div key={item._id}>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>{item.quantity}</p>
          <p>{item.show}</p>
        </div>
      ))}
      <div>total: {totalPrice}</div>
    </div>
  );
};

export default AdminCheckout;
