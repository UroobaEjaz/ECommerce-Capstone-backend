import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import Card from "../../components/Card";
import About from "../about/aboutPage";
//Reference: Chat gpt for css and Tailwind website:https://tailwindcss.com/ for tailwind css
const Home = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex justify-between items-center p-4">
        <h1 className="text-6xl font-bold">
          Welcome To <br />
          JK Convenience Store
        </h1>
        <img src="/logo.jpg" className="rounded-full w-1/3" />
      </div>

      {/* <About /> */}

      {/* <Footer /> */}

      {/* <About /> */}
    </div>
  );
};

export default Home;
