import React from "react";
import './style/glasses.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Glasses = () => {
  return (
    <div class='one-chapter'>
      <div class='sunglasses-shop'>
        <div class='sunglasses-shop-s'></div>
        <div class='sunglasses-shop-text'>SUNGLASSES SHOP</div>
      </div>
      <div class='navbar'>
        <a class='navbar-text'>HOME</a>
        <a class='navbar-text'>WOMEN&#39;S</a>
        <a class='navbar-text'>MEN&#39;S</a>
        <a class='navbar-text'>SALE</a>
        <a class='navbar-text'>CONTACT</a>
        <div class='navbar-login'>
          <a><AccountCircleIcon class='navbar-icon'></AccountCircleIcon></a>
          <a class='navbar-login-text'>LOG IN</a>
          <a><ShoppingBagIcon class='navbar-icon'>0</ShoppingBagIcon></a>
        </div>
      </div>
    </div>
  );
};

export default Glasses;
