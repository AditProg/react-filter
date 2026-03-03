import React from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <input className="search-input" type="text" placeholder="Search..." />
      </div>

      <div className="profile">
        Profile
        <a href="#">
          <FiHeart className="nav-icon" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icon" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icon" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
