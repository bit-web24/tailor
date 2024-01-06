import "./Navbar.css";
import logo from "../images/logo.jpg";

import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
    <div className="logo"><img className="logo-img" src={logo}/></div>
    <nav className="nav" >
      <ul className="nav-list">
        <li className="nav-list-item">
          Tailor Near Me
        </li>
        <li className="nav-list-item">
          Saree
        </li>
        <li className="nav-list-item">
          Party
        </li>
        <li className="nav-list-item">
          Formal
        </li>
        <li className="nav-list-item">
          Uniform
        </li>
        <li className="nav-list-item">
          Stitching
        </li>
        <li className="nav-list-item">
          Login
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default NavBar;

