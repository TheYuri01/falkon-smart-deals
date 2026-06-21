import React from 'react';
import useProducts from '../hooks/useProducts.jsx';
import PromoBadge from '../components/PromoBadge.jsx';
import BannerCarousel from '../components/BannerCarousel.jsx';
import productImages from '../utils/productImages.jsx';
import '../styles/Promocoes.css';

const DESCONTOS = [10, 15, 20, 25, 30];
function getDescontoFicticio(id) {
  return DESCONTOS[Number(id) % DESCONTOS.length];
}

export default function Promocoes({ textoPesquisa }) {
  const { promoProducts, loading, error } = useProducts(textoPesquisa);

  return (
    <>
      <BannerCarousel />

      {loading && <p className="status-msg">Carregando promoções...</p>}
      {error && <p className="status-msg error">Erro: {error}</p>}

      {!loading && !error && promoProducts.length === 0 && (
        <p className="status-msg">
          {textoPesquisa
            ? 'Nenhuma promoção encontrada para essa busca.'
            : 'Nenhuma promoção disponível no momento.'}
        </p>
      )}

      {!loading && !error && promoProducts.length > 0 && (
        <main className="products-grid">
          {promoProducts.map((product) => (
            <div key={product.id} className="product-card">
              <PromoBadge discountPercent={getDescontoFicticio(product.id)} />
              <img
                src={productImages[product.id]}
                alt={product.nome}
                className="product-image"
              />
              <h3 className="product-title" title={product.nome}>
                {product.nome}
              </h3>
              <p className="product-description">{product.descricao}</p>
              <div className="product-price">
                R${' '}
                {product.preco.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </div>
            </div>
          ))}
        </main>
      )}
    </>
  );
}