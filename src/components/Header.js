import React from "react";
import "./Header.css";
import logo from "../images/logo.png";

function Header() {
  return (
    <header className="header-container">
      <div className="header-left">
        <img src={logo} alt="header-logo" className="header-logo" />
        <p className="header-title"> &nbsp; GAME SUGGESTER</p>
      </div>
      <div className="header-right"></div>
      <div className="header-right"></div>
    </header>
  );
}

export default Header;
