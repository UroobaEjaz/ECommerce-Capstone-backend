import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Card from "../components/Cards";
import { Slides } from "../Data/CarouselData.json";
import ListItem from "./Admin";
import Search from "./Search";
import CarouselPage from "../components/CarouselPage";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./ProductList";
import SaltyCravings from "../components/SaltyCravings";

//Reference: Chat gpt for css and Tailwind website:https://tailwindcss.com/ for tailwind css
// for Cart length Reference: https://www.youtube.com/watch?v=P9-zbdMTwjM&ab_channel=CodeForU

const Home = () => {
  const [item, setItem] = useState([]);
  const [cart, setCart] = useState([]);
  const [id, setId] = useState(null);

  const getId = async () => {
    try {
      const id = await fetch("/api/cart/tempid", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await id.json();
      setId(data.email);
      console.log(data.email);
      localStorage.setItem("id", JSON.stringify(data.email));
    } catch (error) {
      console.log("error getting tempid", error);
    }
  };

  // const test = localStorage.getItem("id", JSON.stringify(id));

  if (localStorage.getItem("id") === null) {
    getId();
  }

  const handleClick = (item) => {
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
    setId(localStorage.getItem("id"));
  }, []);

  return (
    <div>
      <Navbar />
      <CarouselPage />
      <SaltyCravings />
    </div>
  );
};

export default Home;
