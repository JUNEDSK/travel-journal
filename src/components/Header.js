import React from "react";
import logo from "../images/logo.png";

function Header(props) {
  return (
    <div>
      <div className="card--logo">
        <img src={logo} className="nav-logo" alt="logo" />
      </div>
    </div>
  );
}

export default Header;
