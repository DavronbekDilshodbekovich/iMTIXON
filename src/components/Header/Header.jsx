import React from "react";
import { CiSearch } from "react-icons/ci";
import { PiPlantLight } from "react-icons/pi";
import { CiShoppingCart } from "react-icons/ci";
import { IoExitOutline } from "react-icons/io5";
// import { IoExitOutline } from "react-icons/io5";
import Leave from "../../assets/Leave.svg"


import { Link, NavLink } from "react-router-dom";
import Icon1 from"../../assets/iconariginal.svg"
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-logo">
        <img src={Icon1} className="header-logo-icon" />
        <h1 className="header-logo-text">GREENSHOP</h1>
      </div>

      <nav className="header-nav">
        <NavLink exact to="/" className="header-nav-link" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/Shop" className="header-nav-link" activeClassName="active">
          Shop
        </NavLink>
        <NavLink to="/Plant Care" className="header-nav-link" activeClassName="active">
          Plant Care
        </NavLink>
        <NavLink to="/Blogs" className="header-nav-link" activeClassName="active">
          Blogs
        </NavLink>
      </nav>

      <div className="header-actions">
        <CiSearch className="header-action-icon" />
        <CiShoppingCart className="header-action-icon" />
        <div className="header-login">  
          <Link  className="header-login-link">
          <img src={Leave} className="header-action-icon"/>Login</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
