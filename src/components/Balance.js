import React from "react";
import { useSelector } from "react-redux";
import "../styles/balance.css";

function Balance() {
  const balance = useSelector((state) => state.shopping.balance);
  return (
    <h1 id="balance">
      ${balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
    </h1>
  );
}

export default Balance;
