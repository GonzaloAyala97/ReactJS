import React from 'react';
import "./style.css";

const CartWidget = () => {
  return (
    <div className="navbar-menu-cart">
    <img className="navbar-menu-cart-img" src="https://cdn-icons-png.flaticon.com/512/4175/4175270.png " alt="cart"/>
    <div className="navbar-menu-cart-num-container">
      <span className="navbar-cart-num">0</span>
    </div>
  </div>

  );
};

export default CartWidget;