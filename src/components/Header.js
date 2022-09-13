import React from "react";
import "../styles/header.css";

function Header() {
  return (
    <div id="header">
      <img src={`/images/BillGates.avif`} alt="Bill Gates" />
      <h1>Spend Bill Gates' Money</h1>
    </div>
  );
}

export default Header;
