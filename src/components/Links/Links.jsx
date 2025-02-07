import React from "react";
import "./Links.css";
import { FaFacebookSquare } from "react-icons/fa";
import img17 from "../../assets/img17.svg"


const Links = () => (
  <div className="links">
    <div className="logo-contact">
      <h2>GREENSHOP</h2>
      <p>70 West Buckingham Ave. Farmingdale, NY 11735</p>
      <p>contact@greenshop.com</p>
      <p>+88 01911 717 490</p>
    </div>

    <div className="sections-container">
      <div className="sections">
        <h4>My Account</h4>
        <ul>
          <li>My Account</li>
          <li>Our Stores</li>
          <li>Contact Us</li>
          <li>Career</li>
          <li>Specials</li>
        </ul>
      </div>
      <div className="sections">
        <h4>Help & Guide</h4>
        <ul>
          <li>Help Center</li>
          <li>How to Buy</li>
          <li>Shipping & Delivery</li>
          <li>Product Policy</li>
          <li>How to Return</li>
        </ul>
      </div>
      <div className="sections">
        <h4>Categories</h4>
        <ul>
          <li>House Plants</li>
          <li>Potter Plants</li>
          <li>Seeds</li>
          <li>Small Plants</li>
          <li>Accessories</li>
        </ul>
      </div>
      <div className="social-media">
        <h4>Social Media</h4>
        <div>
          <FaFacebookSquare className="gv" />
          <FaFacebookSquare  className="gv"/>
          <FaFacebookSquare className="gv" />
          <FaFacebookSquare  className="gv"/>
          <FaFacebookSquare  className="gv"/>

        </div>
        <p>We accept:</p>
       <img src={img17} alt="" />
      </div>
    </div>
  </div>
);

export default Links;