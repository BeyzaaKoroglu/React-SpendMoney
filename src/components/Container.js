import React from "react";
import "../styles/container.css";
import AllProducts from "./AllProducts";
import Balance from "./Balance";
import Header from "./Header";
import Receipt from "./Receipt";

function Container() {
  return (
    <div className="container">
      <Header />
      <Balance />
      <AllProducts />
      <Receipt />
    </div>
  );
}

export default Container;
