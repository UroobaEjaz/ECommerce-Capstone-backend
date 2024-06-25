import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Card from "../components/Cards";
import { Slides } from "../Data/CarouselData.json";
import Carousel from "../components/Carousel";
import ListItem from "./ListItems";
import Search from "./Search";

//Reference: Chat gpt for css and Tailwind website:https://tailwindcss.com/ for tailwind css
// for Cart length Reference: https://www.youtube.com/watch?v=P9-zbdMTwjM&ab_channel=CodeForU

const Home = () => {
  const [item, setItem] = useState([]);
  const [cart, setCart] = useState([]);

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
  }, []);

  return (
   <div className="">
    <Navbar/>
     {/* <Card items={item} /> */}
    
    <Carousel data = {Slides}/>    
     <Search/>
    {/* <ListItem /> */}
     
    </div>



  );
};

export default Home;
