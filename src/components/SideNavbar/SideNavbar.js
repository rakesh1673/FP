import React from "react";
import "./SideNavbar.css";

import {
  MdOutlineHome,
  MdOutlineRestaurantMenu,
  MdOutlineInventory2,
  MdOutlineSource,
} from "react-icons/md";
import { GiLargePaintBrush } from "react-icons/gi";
import { FaHeartbeat } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";

function SideNavbar() {
  return (
    <nav className="side-navbar">
      <div className="title">FP</div>
      <div className="side-navbar-options">
        <div className="side-navbar-option">
          <MdOutlineHome size="20px" />
          <div>Home</div>
        </div>
        <div className="side-navbar-option">
          <AiOutlineSetting size="20px" />
          <div>Settings</div>
        </div>
        <div className="side-navbar-option">
          <MdOutlineRestaurantMenu size="20px" />
          <div>Menu</div>
        </div>
        <div className="side-navbar-option">
          <MdOutlineInventory2 size="20px" />
          <div>Inventory</div>
        </div>
        <div className="side-navbar-option">
          <GiLargePaintBrush size="20px" />
          <div>Clean</div>
        </div>
        <div className="side-navbar-option">
          <FaHeartbeat size="20px" />
          <div>Health</div>
        </div>
        <div className="side-navbar-option">
          <MdOutlineSource size="20px" />
          <div>Resources</div>
        </div>
      </div>
    </nav>
  );
}

export default SideNavbar;
