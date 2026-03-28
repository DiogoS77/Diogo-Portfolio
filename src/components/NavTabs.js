import React from "react";
import "../css/NavTabs.css";
import Logo from "../images/D-logo.png";

function NavTabs() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      <ul className="nav-tabs">
        <li className="nav-item">
          <a href="#home">Home</a>
        </li>

        <li className="nav-item">
          <a href="#skills">Skills</a>
        </li>

        <li className="nav-item">
          <a href="#experience">Work Experience</a>
        </li>

        <li className="nav-item">
          <a href="#projects">Projects</a>
        </li>

        <li className="nav-item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;
