import React from "react";
import "../styles/receiptProduct.css";

function ReceiptProduct({ product }) {
  return (
    <li>
      <span className="receiptProduct">{product.name}</span>
      <span className="receiptQuantity">x{product.quantity}</span>
      <span className="receiptPrice">
        $
        {(product.price * product.quantity)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </span>
    </li>
  );
}

export default ReceiptProduct;
