import React, { useState } from 'react';
import '../style/types.css';

const Types = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div class="types">
      <div class="hpsqz">
        Główne kategorie szablonów
      </div>
      <div className="types-Navbar">
        <span className="types-nav-logo"><a class="xninn" href="/templates">Glowna</a></span>
        <div class="types-fmbna" />
        <div className={`types-nav-items ${isOpen && "open"}`}>
          <a href="/templates/fashion">Moda i odzież</a>
          <a href="/templates/decor">Dom i wystrój</a>
          <a href="/templates/electronics">Sklep z elektroniką</a>
          <a href="/templates/sites">Sklepy online</a>
          <a href="/templates/accessories">Akcesoria</a>
        </div>
        <div
          aria-hidden="true"
          className={`types-nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="types-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Types;
