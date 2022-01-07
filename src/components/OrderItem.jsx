import React, { useContext } from "react";
import "../styles/OrderItem.scss";
import CLOSE from "@icons/icon_close.png";
import AppContext from "../context/AppContext";
const OrderItem = ({ product }) => {
  const { images, title, price } = product;

  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <div className="OrderItem">
      <figure>
        <img src={images[0]} alt={title} />
      </figure>
      <p>{title}</p>
      <p>${price}</p>
      <img
        style={{ cursor: "pointer" }}
        src={CLOSE}
        alt="close"
        onClick={() => handleRemove(product)}
      />
    </div>
  );
};

export default OrderItem;
