// File: src/components/Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

export default function Header({ tema, alternarTema, textoPesquisa, setTextoPesquisa }) {
  return (
    <header>
      <div className="header-top">
        <div className="logo">Falkon</div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Encontre na Falkon"
            value={textoPesquisa}
            onChange={(e) => setTextoPesquisa(e.target.value)}
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="header-actions">
          <a href="#">Entre</a> | <a href="#">Cadastra-se</a>
          <i
            className={tema === 'light' ? 'fa-solid fa-sun btn-tema' : 'fa-solid fa-moon btn-tema'}
            onClick={alternarTema}
          ></i>
          <i className="fa-solid fa-cart-shopping"></i>
          <i className="fa-solid fa-headphones"></i>
        </div>
      </div>

      <nav>
        <NavLink to="/promocoes" className="nav-btn btn-promo">Promoções</NavLink>
        <NavLink to="/" className="nav-btn btn-cupom">Início</NavLink>
        <a href="#" className="nav-btn btn-frete">Frete Grátis</a>
        <a href="#" className="nav-btn btn-hw">Hardware</a>
        <a href="#" className="nav-btn btn-geek">Geek</a>
      </nav>
    </header>
  );
}