import React, { useState } from "react";
import "@styles/ProductItem.scss";
import ADDTOCART from "@icons/bt_add_to_cart.svg";
const ProductItem = ({ product }) => {
  const [cart, setCart] = useState("");
  console.log(product, "PRODUCT");
  const handleClick = () => {
    setCart();
  };
  const { images, title, price } = product;

  return (
    <div className="ProductItem">
      <img src={images[0]} alt={title} />
      <div className="product-info">
        <div>
          <p>${price}</p>
          <p>{title}</p>
        </div>
        <figure onClick={handleClick}>
          <img src={ADDTOCART} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
