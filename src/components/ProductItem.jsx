import React, { useState, useContext } from "react";
import "@styles/ProductItem.scss";
import AppContext from "../context/AppContext";
import ADDTOCART from "@icons/bt_add_to_cart.svg";
const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);
  const ID = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
  };
  const handleClick = (item) => {
    console.log(item, "iteem");
    const ADD_ITEM = `OrderItemAdd-${ID()}`;
    item.cart_id = ADD_ITEM;
    addToCart(item);
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
        <figure onClick={() => handleClick(product)}>
          <img src={ADDTOCART} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
