import React from 'react';
import '../style/templates.css';
import Types from '../components/Types';
import DropMenu from '../components/DropMenu';

const Templates = () => {
  return (
    <div class="templates">
      {/* Intro */}
      <div class="templates_intro">
        <div class="templates_intro-container">
          <div class="templates_intro-text">
            Wybierzcie szablon strony internetowej, który wam podoba się
          </div>
        </div>
        <div class="templates_border" />
        <DropMenu />
        <div class="templates_border-buttons" />
      </div>
      {/* Main body */}
      <div class="template_main-body pattern-btns-body">
        <Types />
      </div>
      {/* Pattern */}
      <div class="products">
        <div class="container-222">

          <div class="product-items">
            {/* <!-- single product 1--> */}
            <div class="product lnzwb">
              <div class="pattern-content">
                <div class="product-img patter_img-1"></div>
                <div class="product-btns pattern-btns">
                  <button type="button" class="btn-cart pattern-cart pattern-cart">
                    <a class="btn-a" href="/templates/fashion">Otworzyć</a>
                    <span><i class="fas fa-plus"></i></span>
                  </button>
                </div>
              </div>

              <div class="pattern-info">
                <div class="product-info-top">
                  <h2 class="sm-title">Moda i odzież</h2>
                  <div class="rating">
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="far fa-star"></i></span>
                  </div>
                </div>
                <a href="#" class="product-name">mens shoes DN 23XX, new product</a>
              </div>
            </div>
            {/* <!-- end of single product --> */}
            {/* <!-- single product 2--> */}
            <div class="product lnzwb">
              <div class="pattern-content">
                <div class="product-img patter_img-2"></div>
                <div class="product-btns pattern-btns">
                  <button type="button" class="btn-cart pattern-cart">
                    <a class="btn-a" href="/templates/decor">Otworzyć</a>
                    <span><i class="fas fa-plus"></i></span>
                  </button>
                </div>
              </div>

              <div class="pattern-info">
                <div class="product-info-top">
                  <h2 class="sm-title">Dom i wystrój</h2>
                  <div class="rating">
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="far fa-star"></i></span>
                  </div>
                </div>
                <a href="#" class="product-name">mens shoes DN 23XX, new product</a>
              </div>
            </div>
            {/* <!-- end of single product --> */}
            {/* <!-- single product 3--> */}
            <div class="product lnzwb">
              <div class="pattern-content">
                <div class="product-img patter_img-3"></div>
                <div class="product-btns pattern-btns">
                  <button type="button" class="btn-cart pattern-cart">
                    <a class="btn-a" href="/templates/sites">Otworzyć</a>
                    <span><i class="fas fa-plus"></i></span>
                  </button>
                </div>
              </div>

              <div class="pattern-info">
                <div class="product-info-top">
                  <h2 class="sm-title">Sklepy online</h2>
                  <div class="rating">
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="far fa-star"></i></span>
                  </div>
                </div>
                <a href="#" class="product-name">mens shoes DN 23XX, new product</a>
              </div>
            </div>
            {/* <!-- end of single product --> */}
            {/* <!-- single product 4--> */}
            <div class="product lnzwb">
              <div class="pattern-content">
                <div class="product-img patter_img-4"></div>
                <div class="product-btns pattern-btns">
                  <button type="button" class="btn-cart pattern-cart">
                    <a class="btn-a" href="/templates/electronics">Otworzyć</a>
                    <span><i class="fas fa-plus"></i></span>
                  </button>
                </div>
              </div>

              <div class="pattern-info">
                <div class="product-info-top">
                  <h2 class="sm-title">Sklep z elektroniką</h2>
                  <div class="rating">
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="far fa-star"></i></span>
                  </div>
                </div>
                <a href="#" class="product-name">mens shoes DN 23XX, new product</a>
              </div>

              {/* <div class="off-info">
                <h2 class="sm-title">25% off</h2>
              </div> */}
            </div>
            {/* <!-- end of single product --> */}
            {/* <!-- single product 5--> */}
            <div class="product lnzwb">
              <div class="pattern-content">
                <div class="product-img patter_img-5"></div>
                <div class="product-btns pattern-btns">
                  <button type="button" class="btn-cart pattern-cart">
                    <a class="btn-a" href="/templates/books">Otworzyć</a>
                    <span><i class="fas fa-plus"></i></span>
                  </button>
                </div>
              </div>

              <div class="pattern-info">
                <div class="product-info-top">
                  <h2 class="sm-title">Książki</h2>
                  <div class="rating">
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="far fa-star"></i></span>
                  </div>
                </div>
                <a href="#" class="product-name">womens shoes DN 23XX, new product</a>
              </div>
            </div>
            {/* <!-- end of single product --> */}
            {/* <!-- single product 6--> */}
            <div class="product lnzwb">
              <div class="pattern-content">
                <div class="product-img patter_img-6"></div>
                <div class="product-btns pattern-btns">
                  <button type="button" class="btn-cart pattern-cart">
                    <a class="btn-a" href="/templates/accessories">Otworzyć</a>
                    <span><i class="fas fa-plus"></i></span>
                  </button>
                </div>
              </div>

              <div class="pattern-info">
                <div class="product-info-top">
                  <h2 class="sm-title">Akcesoria</h2>
                  <div class="rating">
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="far fa-star"></i></span>
                  </div>
                </div>
                <a href="#" class="product-name">womens shoes DN 23XX, new product</a>
              </div>
            </div>
            {/* <!-- end of single product --> */}
            {/* <!-- single product 7--> */}
            <div class="product lnzwb">
              <div class="pattern-content">
                <div class="product-img patter_img-7"></div>
                <div class="product-btns pattern-btns">
                  <button type="button" class="btn-cart pattern-cart">
                    <a class="btn-a" href="/templates/blissful">Otworzyć</a>
                    <span><i class="fas fa-plus"></i></span>
                  </button>
                </div>
              </div>

              <div class="pattern-info">
                <div class="product-info-top">
                  <h2 class="sm-title">Biżuteria</h2>
                  <div class="rating">
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="far fa-star"></i></span>
                  </div>
                </div>
                <a href="#" class="product-name">womens shoes DN 23XX, new product</a>
              </div>
            </div>
            {/* <!-- end of single product --> */}
            {/* <!-- single product 8--> */}
            <div class="product lnzwb">
              <div class="pattern-content">
                <div class="product-img patter_img-8"></div>
                <div class="product-btns pattern-btns">
                  <button type="button" class="btn-cart pattern-cart">
                    <a class="btn-a" href="/templates/sport">Otworzyć</a>
                    <span><i class="fas fa-plus"></i></span>
                  </button>
                </div>
              </div>

              <div class="pattern-info">
                <div class="product-info-top">
                  <h2 class="sm-title">Sport</h2>
                  <div class="rating">
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="far fa-star"></i></span>
                  </div>
                </div>
                <a href="#" class="product-name">womens shoes DN 23XX, new product</a>
              </div>

              {/* <div class="off-info">
                <h2 class="sm-title">35% off</h2>
              </div> */}
            </div>
            {/* <!-- end of single product --> */}
            {/* <!-- single product 9--> */}
            <div class="product lnzwb">
              <div class="pattern-content">
                <div class="product-img patter_img-9"></div>
                <div class="product-btns pattern-btns">
                  <button type="button" class="btn-cart pattern-cart">
                    <a class="btn-a" href="/templates/beauty">Otworzyć</a>
                    <span><i class="fas fa-plus"></i></span>
                  </button>
                </div>
              </div>

              <div class="pattern-info">
                <div class="product-info-top">
                  <h2 class="sm-title">Piękność</h2>
                  <div class="rating">
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="far fa-star"></i></span>
                  </div>
                </div>
                <a href="#" class="product-name">womens shoes DN 23XX, new product</a>
              </div>

              {/* <div class="off-info">
                <h2 class="sm-title">35% off</h2>
              </div> */}
            </div>
            {/* <!-- end of single product --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
