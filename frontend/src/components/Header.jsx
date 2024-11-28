import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* <img
          src="/path-to-coca-cola-logo.png"
          alt="Coca-Cola Logo"
          className="logo-image"
        /> */}
        <span>Coca-Cola E-Marketing Hub</span>
      </div>
      <nav>
        {/* <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#objectives">Objectives</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul> */}
      </nav>
    </header>
  );
};

export default Header;
