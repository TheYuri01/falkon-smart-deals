import React from 'react';
import '../styles/Header.css';

export default function Header() {
  return (
    <header>
      <div className="header-top">
        <div className="logo">Falkon</div>
        <div className="search-bar">
          <input type="text" placeholder="Encontre na Falkon" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="header-actions">
          <a href="#">Entre | Cadastra-se</a>
          <i className="fa-solid fa-sun"></i>
          <i className="fa-solid fa-cart-shopping"></i>
          <i className="fa-solid fa-headphones"></i>
        </div>
      </div>
      
      <nav>
        <a href="#" className="nav-btn btn-promo">Promoções</a>
        <a href="#" className="nav-btn btn-cupom">Cupons</a>
        <a href="#" className="nav-btn btn-frete">Frete Grátis</a>
        <a href="#" className="nav-btn btn-hw">Hardware</a>
        <a href="#" className="nav-btn btn-geek">Geek</a>
      </nav>
    </header>
  );
}
