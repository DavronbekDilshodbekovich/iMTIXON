import React from "react";
import "./Services.css";
import { GiCactusPot } from "react-icons/gi";
const Services = () => (
  <div className="services">
    <div className="service">
    <GiCactusPot className="cactus"/>

      <h3 className="uhuh">Garden Care</h3>
      <p className="ohuh">We are an online plant shop <br /> offering a wide range of cheap <br /> and trendy plants.</p>
    </div>
    <div className="service">
    <GiCactusPot className="cactus"/>

      <h3 className="uhuh">Plant Renovation</h3>
      <p  className="ohuh">We are an online plant shop <br /> offering a wide range of cheap <br /> and trendy plants.</p>
    </div>
    <div className="service">
    <GiCactusPot className="cactus"/>

      <h3 className="uhuh">Watering Garden</h3>
      <p  className="ohuh">We are an online plant shop <br /> offering a wide range of cheap <br /> and trendy plants.</p>
    </div>
  </div>
);

export default Services;
