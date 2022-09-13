import React from "react";
import "../styles/receipt.css";
import ReceiptProduct from "./ReceiptProduct";

function Receipt() {
  return (
    <div id="receipt">
      <h2>Your Receipt</h2>
      <ul id="receipt_list">
        <ReceiptProduct />
      </ul>
      <hr />
      <span id="totalText">TOTAL</span>
      <span id="totalPrice">$15,003,968</span>
    </div>
  );
}

export default Receipt;
