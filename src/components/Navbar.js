import "./Navbar.css";

import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
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
  );
}

export default NavBar;

