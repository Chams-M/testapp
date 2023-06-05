import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      <Navbar />
      <Hero />
      <Body />
      <Footer />
    </div>
  );
};

export default HomePage;
