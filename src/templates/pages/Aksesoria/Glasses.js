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
      <div class="first-image">
        <div class='first-image-panel'>
          <div class='first-panel-text-1'>New</div>
          <div class='first-panel-text-2'>ARRIVALS</div>
          <hr class='hr-first-panel' />
          <div class='first-panel-text-3'>Shop Now</div>
        </div>
      </div>
      <hr class='hr-first-1' />
      <div class='text-as-seen'>AS SEEN ON CELEBRITIES</div>
      <div class='glasses-example'>
        <div class='example-1'>
          <div class='example-1-image'></div>
          <div class='example-1-text'>
            <div class='example-1-text-1'>Yuzu Sunglasses</div>
            <hr class='hr-example-1' />
            <div class='example-1-text-1'>$260.00</div>
          </div>
        </div>
        <div class='example-2'>
          <div class='example-2-image'></div>
          <div class='example-1-text'>
            <div class='example-1-text-1'>Luka Sunglasses</div>
            <hr class='hr-example-1' />
            <div class='example-1-text-1'>$220.00</div>
          </div>
        </div>
        <div class='example-3'>
          <div class='example-3-image'></div>
          <div class='example-1-text'>
            <div class='example-1-text-1'>Stromboli Sunglasses</div>
            <hr class='hr-example-1' />
            <div class='example-1-text-1'>$230.00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glasses;
