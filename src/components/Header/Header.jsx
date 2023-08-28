// Header.js
import React from "react";
import "./Header.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../redux/actions/actions";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="hamburger" onClick={() => dispatch(toggleSidebar())}>
        <GiHamburgerMenu />
      </div>
      <div className="input_box">
        <input type="text" placeholder="search" />
      </div>
    </header>
  );
};

export default Header;
