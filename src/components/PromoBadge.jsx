import React from 'react';
import '../styles/ProductCard.css';

export default function PromoBadge({ discountPercent }) {
  if (!discountPercent) return null;

  return (
    <div className="discount-badge promo-badge">
      🔥 {discountPercent}% OFF — Oportunidade única
    </div>
  );
}