import React from 'react';
import '../styles/ProductCard.css'

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      {product.discount && <div className="discount-badge">{product.discount}</div>}
      <img src={product.image} alt={product.title} className="product-image" />
      <div>
        <div className="tag-container">
          {product.freeShipping && <span className="tag tag-shipping">Frete Grátis</span>}
          {product.statusTag && <span className="tag tag-status">{product.statusTag}</span>}
        </div>
        <h3 className="product-title">{product.title}</h3>
        <div className="rating">
          {/* Renderiza 5 estrelas baseadas na nota (simplificado) */}
          {[...Array(5)].map((_, i) => (
            <i key={i} className={i < product.stars ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
          ))}
          <span className="rating-count">({product.ratingCount})</span>
        </div>
      </div>
      <div>
        <div className="product-price">
          R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} <span className="price-cash">à vista</span>
        </div>
        <div className="installment">{product.installment}</div>
      </div>
    </div>
  );
}