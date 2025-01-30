import React from "react";
import { Link } from "react-router-dom";
import Flower1 from "../../assets/flowerbig.svg";
import Flower2 from "../../assets/flowersmall.svg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="container">
    <div className="hero-container">
      <div className="hero-right">
        <strong className="hero-title">Welcome to GreenShop</strong>
        <h3 className="hero-heading">Let’s Make a Better <span className="sp">Planet</span></h3>
        <p className="hero-description">
          We are an online plant shop offering a wide range of cheap and trendy plants. Use <br /> our plants to create an unique Urban Jungle. Order your favorite plants!
        </p>
        <Link className="hero-shop-btn">SHOP NOW</Link>
      </div>
      <div className="hero-left">
        <img src={Flower2} alt="flower2" className="hero-small-img" />
        <img src={Flower1} alt="flower" className="hero-large-img" />
      </div>
    </div>
    </div>
    
  );
};

export default Hero;
