import React, { useState } from 'react';
import bannerImages from '../utils/BannerImages.jsx';
import '../styles/BannerCarousel.css';

export default function BannerCarousel() {
  const [slideAtual, setSlideAtual] = useState(0);

  function irParaAnterior() {
    setSlideAtual((atual) =>
      atual === 0 ? bannerImages.length - 1 : atual - 1
    );
  }

  function irParaProximo() {
    setSlideAtual((atual) =>
      atual === bannerImages.length - 1 ? 0 : atual + 1
    );
  }

  return (
    <div className="banner-carousel">
      <button
        className="carousel-arrow carousel-arrow-left"
        onClick={irParaAnterior}
        aria-label="Banner anterior"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <picture>
        <source
          media="(max-width: 600px)"
          srcSet={bannerImages[slideAtual].mobile}
        />
        <img
          src={bannerImages[slideAtual].desktop}
          alt={`Banner promocional ${slideAtual + 1}`}
          className="banner-image"
        />
      </picture>

      <button
        className="carousel-arrow carousel-arrow-right"
        onClick={irParaProximo}
        aria-label="Próximo banner"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      <div className="carousel-dots">
        {bannerImages.map((_, index) => (
          <span
            key={index}
            className={index === slideAtual ? 'dot dot-active' : 'dot'}
            onClick={() => setSlideAtual(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}