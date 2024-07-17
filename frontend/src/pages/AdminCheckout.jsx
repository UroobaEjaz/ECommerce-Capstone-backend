import React, { useState, useEffect } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";

const AdminCheckout = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [categoryTotals, setCategoryTotals] = useState([]);
  const [monthlySales, setMonthlySales] = useState([]);
  const [sortedItems, setSortedItems] = useState([]);

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
    const totalPrice = items.reduce((acc, sale) => {
      sale.items.forEach((item) => {
        acc += item.price * item.quantity;
      });
      return acc;
    }, 0);

    setTotal(totalPrice);
  };

  // used chatgpt
  const totalPerCategory = () => {
    const categoryMap = items.reduce((acc, sale) => {
      sale.items.forEach((item) => {
        if (!acc[item.category]) {
          acc[item.category] = 0;
        }
        acc[item.category] += item.price * item.quantity;
      });
      return acc;
    }, {});

    const categoryData = Object.entries(categoryMap).map(
      ([category, value], id) => ({
        id,
        label: category,
        value,
      })
    );

    setCategoryTotals(categoryData);
  };

  const sortItems = () => {
    const itemMap = items.reduce((acc, sale) => {
      sale.items.forEach((item) => {
        if (!acc[item.name]) {
          acc[item.name] = { ...item, quantity: 0 };
        }
        acc[item.name].quantity += item.quantity;
      });
      return acc;
    }, {});

    const combinedItems = Object.values(itemMap);

    const sorted = [...combinedItems].sort((a, b) => b.quantity - a.quantity);
    setSortedItems(sorted);
  };

  // needs work
  const salesPerMonth = () => {
    const monthMap = items.reduce((acc, item) => {
      try {
        // Ensure item.date is a valid date string
        const date = new Date(item.date);
        if (isNaN(date.getTime())) {
          console.warn(`Invalid date format for item: ${item._id}`);
          return acc;
        }

        // Calculate total sales per month
        const month = date.getMonth();
        if (!acc[month]) {
          acc[month] = 0;
        }
        acc[month] += item.price * item.quantity;
      } catch (error) {
        console.error(`Error processing item: ${item._id}, ${error}`);
      }
      return acc;
    }, {});

    // Format monthData for display
    const monthData = Object.entries(monthMap).map(([month, total], id) => ({
      id,
      label: new Date(0, month).toLocaleString("default", { month: "long" }),
      value: total,
    }));

    // Set the state with updated monthData
    setMonthlySales(monthData);
  };

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    getTotalPrice();
    totalPerCategory();
    sortItems();
    salesPerMonth();
  }, [items]);

  // used chatgpt
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl">Admin Sales Data</h1>
        <nav className="mt-2">
          <ul className="flex space-x-4">
            <li>
              <a href="#overview" className="hover:underline">
                Overview
              </a>
            </li>
            <li>
              <a href="#category-totals" className="hover:underline">
                Category Totals
              </a>
            </li>
            <li>
              <a href="#monthly-sales" className="hover:underline">
                Monthly Sales
              </a>
            </li>
            <li>
              <a href="#item-details" className="hover:underline">
                Item Details
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="flex">
        <aside className="w-1/4 bg-white shadow-md p-4">
          <ul className="space-y-2">
            <li>
              <a
                href="#overview"
                className="block text-gray-700 hover:text-blue-600"
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="#category-totals"
                className="block text-gray-700 hover:text-blue-600"
              >
                Category Totals
              </a>
            </li>
            <li>
              <a
                href="#monthly-sales"
                className="block text-gray-700 hover:text-blue-600"
              >
                Monthly Sales
              </a>
            </li>
            <li>
              <a
                href="#item-details"
                className="block text-gray-700 hover:text-blue-600"
              >
                Item Details
              </a>
            </li>
          </ul>
        </aside>
        <main className="w-3/4 p-4">
          <section id="overview" className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Sales Overview</h2>
            <p>Total Sales: ${total.toFixed(2)}</p>
          </section>
          <section id="category-totals" className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Sales per Category</h2>
            <PieChart
              series={[{ data: categoryTotals }]}
              width={400}
              height={200}
            />
          </section>
          <section id="monthly-sales" className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Sales per Month</h2>
            <BarChart
              series={[
                {
                  data: monthlySales.map((month) => ({
                    x: month.label,
                    y: month.value,
                  })),
                  label: "Total Sales",
                },
              ]}
              xAxis={[
                {
                  data: monthlySales.map((month) => month.label),
                  scaleType: "band",
                },
              ]}
              width={400}
              height={200}
            />
          </section>
          <section id="item-details">
            <h2 className="text-xl font-semibold mb-2">Item Details</h2>
            {sortedItems.map((item) => (
              <div
                key={item._id}
                className="border-b border-gray-300 pb-2 mb-2"
              >
                <p>Name: {item.name}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminCheckout;
