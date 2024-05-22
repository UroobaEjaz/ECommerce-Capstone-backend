import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import SignUp from "../signup/SignUp";
import About from "./About";
const Home = () => {
  return (
    <div className="flex">
      Home
      <Navbar />
      <Footer />
      <About />
    </div>
  );
};

export default Home;
