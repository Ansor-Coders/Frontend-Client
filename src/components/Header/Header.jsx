import React, { useState } from "react";
import "./Header.scss";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ title, toggleSidebar }) => {
  return (
    <header className="header">
      <div className="hamburger" onClick={toggleSidebar}>
        <GiHamburgerMenu />
      </div>
      <div className="input_box">
        <input type="text" placeholder="search" />
      </div>
    </header>
  );
};

export default Header;
