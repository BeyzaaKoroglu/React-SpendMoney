import React from "react";
import "../styles/product.css";

function Product({ product }) {
  return (
    <div className="product">
      <img src={product.image} alt="" height={"200px"} />
      <p className="productName">{product.name}</p>
      <p className="productPrice">
        ${product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </p>
      <div className="transactions">
        <button className="buttons sellBtn" type="button">
          Sell
        </button>
      </div>
      <div className="transactions productQuantity">{product.quantity}</div>
      <div className="transactions">
        <button className="buttons buyBtn" type="button">
          Buy
        </button>
      </div>
    </div>
  );
}

export default Product;
