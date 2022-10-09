import React from "react";
import './style/glasses.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

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
      <div class='dealer'>
        <div class='dealer-text'>
          Authorized Dealer of The Best Luxury Designer and Sport Brands
        </div>
      </div>
      <div class='season-sale'>
        <div class='season-sale-img'></div>
        <div class='season-sale-text'>
          <div class='sst-1'>End of Season Sale</div>
          <div class='sst-2'>50% Off</div>
          <hr class='hr-second-panel' />
          <div class='sst-3'>ENTIRE STOCK</div>
        </div>
      </div>
      <div class='bagge'>
        <div class='bagge-img'></div>
        <div class='bagge-text'>
          <div class='bt-img'></div>
          <hr class='hr-third-panel' />
          <div class='bt-1'>since 1867</div>
          <div class='bt-2'></div>
        </div>
      </div>
      <div class='contacts'>
        <div>© 2023 by SUNGLASSES SHOP. Proudly created with Adima.com</div>
        <div class='contacts-icons'>
          <a><FacebookIcon class='contacts-icon'></FacebookIcon></a>
          <a><TwitterIcon class='contacts-icon'></TwitterIcon></a>
          <a><InstagramIcon class='contacts-icon'></InstagramIcon></a>
        </div>
      </div>
    </div>
  );
};

export default Glasses;
