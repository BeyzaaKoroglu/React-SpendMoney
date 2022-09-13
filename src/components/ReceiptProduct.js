import React from "react";
import "../styles/receiptProduct.css";

function ReceiptProduct() {
  return (
    <li>
      <span className="receiptProduct">Car</span>
      <span className="receiptQuantity">x1</span>
      <span className="receiptPrice">$15m</span>
    </li>
  );
}

export default ReceiptProduct;
