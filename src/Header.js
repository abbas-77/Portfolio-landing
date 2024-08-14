import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <div className="header">
        <div className="logo">logo</div>
        <div className="menu">
          <div className="menu-items">About</div>
          <div className="menu-items">Journal</div>
          <div className="menu-items">Contact</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
