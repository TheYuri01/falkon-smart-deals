import React from 'react';
import ProductCard from './ProductCard.jsx';
import '../styles/ProductGrid.css';

export default function ProductGrid({ products }) {
  if (!products || products.length === 0) {
    return (
      <main className="products-grid">
        <p style={{ gridColumn: '1/-1', textAlign: 'center', color: 'var(--text-muted)', padding: '40px' }}>
          Nenhum produto encontrado com os filtros aplicados.
        </p>
      </main>
    );
  }

  return (
    <main className="products-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
}