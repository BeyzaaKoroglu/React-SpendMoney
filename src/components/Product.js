import React from "react";
import "../styles/product.css";

function Product() {
  return (
    <div className="product">
      <img src="/images/car.jpg" alt="" />
      <p className="productName">Car</p>
      <p className="productPrice">$15,003,968</p>
      <div className="transactions">
        <button className="buttons sellBtn" type="button">
          Sell
        </button>
      </div>
      <div className="transactions productQuantity">0</div>
      <div className="transactions">
        <button className="buttons buyBtn" type="button">
          Buy
        </button>
      </div>
    </div>
  );
}

export default Product;
