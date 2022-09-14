import React from "react";
import { useSelector } from "react-redux";
import "../styles/receipt.css";
import ReceiptProduct from "./ReceiptProduct";

function Receipt() {
  let products = useSelector((state) => state.shopping.products);
  products = products.filter((product) => product.quantity > 0);
  const totalPayment = useSelector((state) => state.shopping.totalPayment);

  if (products.length <= 0) {
    return;
  }

  return (
    <div id="receipt">
      <h2>Your Receipt</h2>
      <ul id="receipt_list">
        {products.map((item) => (
          <ReceiptProduct key={item.id} product={item} />
        ))}
      </ul>
      <hr />
      <span id="totalText">TOTAL</span>
      <span id="totalPrice">
        ${totalPayment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </span>
    </div>
  );
}

export default Receipt;
