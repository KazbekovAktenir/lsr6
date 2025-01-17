import React, { useEffect } from "react";
import { useProducts } from "../context/ProductContextProvider";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { getProducts, products } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="postList">
      {products.map((elem) => (
        <ProductCard key={elem.id} {...elem} />
      ))}
    </div>
  );
};

export default ProductList;
