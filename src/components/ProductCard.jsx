// File: src/components/ProductCard.jsx
import React from 'react';
import productImages from '../utils/productImages.jsx';
import '../styles/ProductCard.css';

const DESCONTOS = [10, 15, 20, 25, 30];
function getDescontoFicticio(id) {
  return DESCONTOS[Number(id) % DESCONTOS.length];
}

export default function ProductCard({ product }) {
  const desconto = getDescontoFicticio(product.id);
  const estoqueZerado = product.estoque === 0;
  const estoqueBaixo = product.estoque > 0 && product.estoque <= 3;
  const imagem = productImages[product.id];

  return (
    <div className="product-card">
      <div className="discount-badge">{desconto}% OFF ▼</div>

      <img src={imagem} alt={product.nome} className="product-image" />

      <div>
        <div className="tag-container">
          {product.promocao && <span className="tag tag-shipping">Promoção</span>}
          {estoqueZerado && <span className="tag tag-status">Esgotado</span>}
          {estoqueBaixo && <span className="tag tag-status">Estoque Baixo</span>}
        </div>

        <h3 className="product-title" title={product.nome}>
          {product.nome}
        </h3>

        <div className="rating">
          {[...Array(5)].map((_, i) => (
            <i
              key={i}
              className={
                i < Math.round(product.nota) ? 'fa-solid fa-star' : 'fa-regular fa-star'
              }
            ></i>
          ))}
          <span className="rating-count">({product.nota})</span>
        </div>
      </div>

      <div>
        <div className="product-price">
          R${' '}
          {product.preco.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}{' '}
          <span className="price-cash">à vista</span>
        </div>
        <div className="installment">
          12x de R${' '}
          {(product.preco / 12).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}{' '}
          sem juros
        </div>
      </div>
    </div>
  );
}