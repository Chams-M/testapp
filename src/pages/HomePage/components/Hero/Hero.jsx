import React from "react";
import Image from "../../../../assets/images/signup.png";
import "./hero.css";
import Carousel from "./carousel";
import SearchBar from "../../../../assets/svg/SearchBar";
import PhotoSlider from "./carousel";
const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div classname="hero-container">
        <PhotoSlider />
      </div>
      <div className="">
        <SearchBar />
      </div>
    </div>
  );
};

export default Hero;
