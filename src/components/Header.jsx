import React, { useContext, useState } from "react";
import "@styles/Header.scss";
import Menu from "@components/Menu";
import MENU from "@icons/icon_menu.svg";
import LOGO from "@logos/logo_yard_sale.svg";
import SHOPPINGCART from "@icons/icon_shopping_cart.svg";
import AppContext from "../context/AppContext";
import MyOrder from "../containers/MyOrder";
export const Header = () => {
  const { state } = useContext(AppContext);
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <nav>
      <img src={MENU} alt="menu" className="menu" />

      <div className="navbar-left">
        <img src={LOGO} alt="logo" className="nav-logo" />

        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            platzi@example.com
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => setToggleOrders(!toggleOrders)}
          >
            <img src={SHOPPINGCART} alt="shopping cart" />
            <div>{state.cart ? state.cart.length : null}</div>
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};
