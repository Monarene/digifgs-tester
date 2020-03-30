import React from "react";
import logo from "../images/digifigs.png";
import ncdc from "../images/ncdc.png";

function Header() {
  return (
    <div className="headercontainer">
      <img
        src={logo}
        alt="logo"
        height="30px"
        style={{ padding: "2px", borderLeft: "2px", marginTop: "3px" }}
      />
      <img src={ncdc} alt="ncdc" />
    </div>
  );
}

export default Header;
