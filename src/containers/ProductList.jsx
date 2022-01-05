import React from "react";
import ProductItem from "../components/ProductItem";
import "../styles/ProductList.scss";
import useGetProducst from "../hooks/useGetProducts";

const ProductList = () => {
  const API = "https://api.escuelajs.co/api/v1/products";

  const { products, load, error } = useGetProducst(API);

  return (
    <section className="main-container">
      <div className="ProductList">
        {load && <h1>LOADIIIIIIIIING</h1>}
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
