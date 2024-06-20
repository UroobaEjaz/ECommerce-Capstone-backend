import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Card from "../components/Cards";
import Cart from "../components/Cart";
//Reference: Chat gpt for css and Tailwind website:https://tailwindcss.com/ for tailwind css
// for Cart length Reference: https://www.youtube.com/watch?v=P9-zbdMTwjM&ab_channel=CodeForU

const Home = () => {
  const [item, setItem] = useState([]);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    // let isPresent = false;
    // Cart.forEach((product) => {
    //   if (product._id === item._id) {
    //     isPresent = true;
    //   }
    // });
    // if (isPresent) return;
    setCart([...cart, item]);
  };
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
    <div className="flex flex-col items-center">
      <Navbar size={cart.length} />
      {<cart cart={cart} setCart={setCart} />}
      <div className="flex flex-row justify-between items-center p-4">
        <h1 className="text-6xl font-bold">
          Welcome To <br />
          JK Convenience Store
        </h1>
        <img src="/logo.jpg" alt="Store Logo" className="rounded-full w-1/3" />
      </div>
      <div className="flex flex-row">
        <Card items={item} handleClick={handleClick} />
      </div>
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
};

export default Home;
