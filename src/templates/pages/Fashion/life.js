import React from 'react';
import './style/life.css';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const Life = () => {
  return (
    <div class="life"> 
      <div class="f-title-l">
        <div class="search-log-l">
          <div class="search-life">
            <a href='' id='link' class="icon-search-life"><SearchIcon /></a>
            <input type="search" class="search-text-life" placeholder="Search..." />
          </div>
          <div class="log-bag-life">
            <a href='' id='link' class="account-life"><AccountCircleIcon fontSize='30px' /></a>
            <div class="log-in-life">
              <a id="link" href='' class="style-title-t-f">Log In</a>
            </div>
            <a href='' id='link' class="mall-icon-life"><LocalMallIcon fontSize='30px' /></a>
          </div>
        </div>
        <div class="life-etc">Life Etc.</div>
        <div class="s-a-j-c">
          <div class="bloc-sajc-f">
            <a href="" id="link" class="style-title-t-f">SHOP</a>
          </div>
          <div class="bloc-sajc-f">
            <a href="" id="link" class="style-title-t-f">ABOUT</a>
          </div>
          <div class="bloc-sajc-f">
            <a href="" id="link" class="style-title-t-f">JOURNAL</a>
          </div>
          <div class="bloc-sajc-f">
            <a href="" id="link" class="style-title-t-f">CONTACT</a>
          </div>
        </div>
      </div>
      <div class="line-wom-life">
        <div class="line-l" />
        <div class="text-line-l">WOMEN&#39;S APPAREL BRAND</div>
        <div class="line-l" />
      </div>
      <div class="img-slider"> 
        <div class="sliders">
          <input type="radio" id="radio-1" name="contact" />
          <input type="radio" id="radio-2" name="contact" />
          <input type="radio" id="radio-3" name="contact" />
          <input type="radio" id="radio-4" name="contact" />
          <div class="slider-1 slide first" />
          <div class="slider-2 slide" />
          <div class="slider-3 slide" />
          <div class="slider-4 slide" />
          <div class="navigation-auto">
            <div class="auto-btn-1" />
            <div class="auto-btn-2" />
            <div class="auto-btn-3" />
            <div class="auto-btn-4" />
          </div>
        </div>
        <div class="navigation-manual">
          <label for='radio-1' class='manual-btn' />
          <label for='radio-2' class='manual-btn' />
          <label for='radio-3' class='manual-btn' />
          <label for='radio-4' class='manual-btn' />
        </div>
      </div>   
      <div class="fuer-it-life">
        <div class="line-l" />
        <div class="text-line-l">FEATURED ITEMS </div>
        <div class="line-l" />
      </div>
      <div class="img-3-l">
        <a href='' class="link-href-img-l">
          <div class="card-img-1 card-img-l" />      
        </a>
        <a href='' class="link-href-img-l">
          <div class="card-img-2 card-img-l" />
        </a>
        <a href='' class="link-href-img-l">
          <div class="card-img-3 card-img-l">
            <div class="bests-seller-life">Best Seller</div>
          </div>
        </a>
      </div>
      <div class="name-price-l">
        <div class="shop-text-life">
          <div class="shop-title-life flex-it-l">Lola Pants</div>
          <div class="shop-price-life flex-it-l">$85.00</div>
        </div>
        <div class="shop-text-life">
          <div class="shop-title-life flex-it-l">Tote Bag</div>
          <div class="shop-price-life flex-it-l">$20.00</div>
        </div>
        <div class="shop-text-life">
          <div class="shop-title-life flex-it-l">Anna Blouse</div>
          <div class="shop-price-life flex-it-l">$75.00</div>
        </div>
      </div>
      <div class="bloc-for-shop-l">
        <a href='' id='link' class="link-shop-l">
          <div class="shop-all-l">Shop All</div>
        </a>
      </div>
      <div class='title-addit-life'>
        <div class="position-title-l">
          <div class='name-t-l'>Life Etc.</div> 
          <div class='line-t-l' /> 
        </div>          
      </div>
      <div class="additional-information-life">
        <div class="addit-flex">
          <div class="addit-c-1-l">
            <div class="bloc-addit">
              <a href='' id='link' class="style-addit-life">Shop All</a>
            </div>
            <div class="bloc-addit">
              <a href='' id='link' class="style-addit-life">About</a>
            </div>
            <div class="bloc-addit">
              <a href='' id='link' class="style-addit-life">Journal</a>
            </div>
            <div class="bloc-addit">
              <a href='' id='link' class="style-addit-life">Contact</a>
            </div>
          </div>
          <div class="addit-c-2-l">
            <div class="bloc-addit">
              <a href='' id='link' class="style-addit-life">FAQ</a>       
            </div>
            <div class="bloc-addit">
              <a href='' id='link' class="style-addit-life">Shipping & Returns</a>
            </div>
            <div class="bloc-addit">
              <a href='' id='link' class="style-addit-life">Store Policy</a>
            </div>
            <div class="bloc-addit">
              <a href='' id='link' class="style-addit-life">Payments</a>
            </div>
          </div>
          <div class="addit-c-3-l">
            <div class="bloc-addit">
              <a href='' id='link' class="style-addit-life">info@my-domain.com</a>
            </div>
            <div class="bloc-addit">
              <a href='' id='link' class="style-addit-life">Pi500 Terry Francois Street nterest</a>
            </div>
            <div class="bloc-addit">
              <a href='' id='link' class="style-addit-life">San Francisco, CA 94158 </a>
            </div>
            <div class="bloc-addit">
              <a href='' id='link' class="style-addit-life">Tel: 123-456-7890  </a>
            </div>
          </div>
          <div class="addit-c-4-l">
            <div class="text-join-life">Sign up. Stay stylish</div>
            <input type="email" class="email-life" placeholder="Enter your email here*" />
            <a href='' id='link'>
              <div class="subscribe-life">Subscribe Now</div>
            </a>
          </div>
        </div>
      </div>
      <div class="by-adima">© 2023 by NOUS. Proudly created with Adima.com</div>
    </div>
  );
};

// let counter=1;
// setInterval(function(){
//   document.getElementById('radio'+ counter).cheked = true;
//   counter +=1;
//   if(counter > 4){
//     counter = 1;
//   }
// }, 5000);

export default Life;