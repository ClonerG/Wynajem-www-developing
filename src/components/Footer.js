import React from 'react';
import '../style/footer.css';
import '../adaptive-styles/AdFooter.css';

const Footer = () => {
  return (
    <div>
      <div class='m-footer'>
        <div class='SZYBKIE-LINKI-block'>
          <p class='SZYBKIELINKI-text'>SZYBKIE LINKI</p>
          <hr class='m-footer-hr' />
          <ul class='m-ul-footer'>
            <li class='m-li-footer'>
              <img alt='' src={require('../img/main/Group13.png')} class='znachki' />
              <a href=' ' class='m-a-footer'>O nas </a>
            </li>
            <li class='m-li-footer'>
              <img alt='' src={require('../img/main/Group13.png')} class='znachki' />
              <a href=' ' class='m-a-footer'>Oferta</a>
            </li>
            <li class='m-li-footer'>
              <img alt='' src={require('../img/main/Group13.png')} class='znachki' />
              <a href=' ' class='m-a-footer'>Darmowa konsultacja</a>
            </li>
            <li class='m-li-footer'>
              <img alt='' src={require('../img/main/Group13.png')} class='znachki' />
              <a href=' ' class='m-a-footer'>Wynajem stron internetowych </a>
            </li>
            <li class='m-li-footer'>
              <img alt='' src={require('../img/main/Group13.png')} class='znachki' />
              <a href=' ' class='m-a-footer'>Gadżety firmowe</a>
            </li>
            <li class='m-li-footer'>
              <img alt='' src={require('../img/main/Group13.png')} class='znachki' />
              <a href=' ' class='m-a-footer'>Blog</a>
            </li>
          </ul>
          <hr class='m-footer-hr' />
          <p class='m-a-footer'>Kontakt z nami</p>
        </div>
        <div class='SZYBKIE-LINKI-block'>
          <p class='SZYBKIELINKI-text'>KONTAKT</p>
          <hr class='m-footer-hr' />
          <div class='m-num-footer'>
            <img alt='' src={require('../img/main/tel2.png')} class='znachki' />
            +48 603 101 536
          </div>
          <div class='m-num-footer'>
            <img alt='' src={require('../img/main/kon.png')} class='znachki' />
            biuro@e-adima.eu 
          </div>
          <hr class='m-footer-hr' />
          <p class='SZYBKIELINKI-text'>ADIMA DIGITAL MARKETING</p>
          <div class='m-num-footer'>
            <img alt='' src={require('../img/main/dest.png')} class='znachki' />
            ul . Centralna 1, 52-116 Wrocław
          </div>
          <div class='m-num-footer'>
            <img alt='' src={require('../img/main/dest.png')} class='znachki' />
            ul. Filipińska 16, 55-010 Wrocław
          </div>
          <hr class='m-footer-hr' />
          <p class='m-a-footer'>NIP: 8992745054</p>
          <p class='m-a-footer'>REGON: 022178689</p>
        </div>
        <div class='SZYBKIE-LINKI-block'>
          <img alt='' src={require('../img/main/Adiam.png')} class='adiam-img' />
          <p class='m-a-footer znajdz-nas'>ZNAJDŹ NAS </p>
          <hr class='m-footer-hr' />
          <div class='m-social'>
            <img alt='' src={require('../img/main/Vector28.png')} class='m-social-img' />
            <img alt='' src={require('../img/main/Instagram.png')} class='m-social-img' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

