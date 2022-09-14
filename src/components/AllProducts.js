import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux";

function AllProducts() {
  const products = useSelector((state) => state.shopping.products);

  return (
    <div id="allProducts">
      {products.map((item) => (
        <Product key={item.id} product={item} />
      ))}
    </div>
  );
}

export default AllProducts;
