import React, { useState, useEffect } from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const AdminCheckout = () => {
  return (
    <div>
      <h1>Admin Checkout</h1>
      <p>Admin Checkout page</p>
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
    </div>
  );
};

export default AdminCheckout;
