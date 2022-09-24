import React, { useState } from 'react';

const SubNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">Kategorie</span>
      <div class="fmbna" />
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/subscriptions">Social Media</a>
        <a href="/develop">Tworzenia stron</a>
        <a href="/kampania-google-ads">Kampania Google ADS</a>
        <a href="/seo-blog">SEO/BLOG</a>
        <a href="/creating-page">Projektowanie grafik</a>
        <a href="/deviceF">Gadżety firmowe</a>
        <a href="/technical">Servicy/Wsparcie techniczne</a>
      </div>
      <div
        aria-hidden="true"
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default SubNavbar;
