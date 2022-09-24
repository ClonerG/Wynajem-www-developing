/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react';
import '../style/navbar.css';
import '../adaptive-styles/AdNavbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div class="navbar">
      <a href="/main" className="gvwbr-nav-logo">
        <div class="rxsws">

        </div>
      </a>
      <div className={`efdhv-nav-items ${isOpen && "open"}`}>
        <a href="/main">Główna</a>
        <a href="/subscriptions">Oferta</a>
        <a href="/templates">Sklep</a>
        <a href="/formularz-zapis">Zamów</a>
      </div>
      <div
        aria-hidden="true"
        className={`efdhv-nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="efdhv-bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
