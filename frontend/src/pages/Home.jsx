import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Card from "../components/Cards";
//Reference: Chat gpt for css and Tailwind website:https://tailwindcss.com/ for tailwind css

const Home = () => {
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
    <div className="flex flex-col mt-[800px]">
      <Navbar />
      <div className="flex justify-between items-center p-4">
        <h1 className="text-6xl font-bold">
          Welcome To <br />
          JK Convenience Store
        </h1>
        <img src="/logo.jpg" className="rounded-full w-1/3" />
      </div>
      <div className="">
      <Card items={item} /> 
      </div>
    </div>
  );
};

export default Home;
