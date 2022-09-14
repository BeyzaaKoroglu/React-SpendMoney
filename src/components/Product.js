import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/product.css";
import { sellProduct, buyProduct } from "../redux/shopping/shoppingSlice";

function Product({ product }) {
  const balance = useSelector((state) => state.shopping.balance);
  const dispatch = useDispatch();

  const handleClickSell = () => {
    if (product.quantity > 0) dispatch(sellProduct(product.id));
  };
  const handleClickBuy = () => {
    if (balance >= product.price) dispatch(buyProduct(product.id));
  };

  return (
    <div className="product">
      <img src={product.image} alt="" height={"200px"} />
      <p className="productName">{product.name}</p>
      <p className="productPrice">
        ${product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </p>
      <div className="transactions">
        <button
          onClick={handleClickSell}
          className={`buttons ${product.quantity > 0 ? "sellBtn" : ""}`}
          type="button"
        >
          Sell
        </button>
      </div>
      <div className="transactions productQuantity">{product.quantity}</div>
      <div className="transactions">
        <button
          onClick={handleClickBuy}
          className={`buttons ${balance >= product.price ? "buyBtn" : ""}`}
          type="button"
        >
          Buy
        </button>
      </div>
    </div>
  );
}

export default Product;
