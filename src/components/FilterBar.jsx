// File: src/components/FilterBar.jsx
import React from 'react';
import '../styles/FilterBar.css';

const CATEGORIAS = [
  { valor: 'Todos', label: 'Todos' },
  { valor: 'perifericos', label: 'Periféricos' },
  { valor: 'monitores', label: 'Monitores' },
  { valor: 'geek', label: 'Geek' },
  { valor: 'livros', label: 'Livros' },
];

export default function FilterBar({
  precoMax,
  setPrecoMax,
  categoria,
  setCategoria,
  ordenacao,
  setOrdenacao,
}) {
  return (
    <aside className="sidebar">
      <div className="filter-section">
        <div className="filter-title">
          <span><i className="fa-solid fa-sliders"></i> Filtro</span>
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-title">Departamento</div>
        <div className="filter-options">
          {CATEGORIAS.map((cat) => (
            <label key={cat.valor}>
              <input
                type="radio"
                name="dept"
                checked={categoria === cat.valor}
                onChange={() => setCategoria(cat.valor)}
              />{' '}
              {cat.label}
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-title">
          Preço Máx. <span style={{ color: 'var(--primary-red)' }}>
            R$ {precoMax.toLocaleString('pt-BR')}
          </span>
        </div>
        <div className="price-slider-container">
          <input
            type="range"
            min="0"
            max="1500"
            value={precoMax}
            onChange={(e) => setPrecoMax(Number(e.target.value))}
            className="range-slider"
          />
          <div className="price-text">
            <span>R$ 0</span>
            <span>R$ 1.500+</span>
          </div>
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-title">Ordenação</div>
        <button
          className={`sort-btn ${ordenacao === 'maior' ? 'active' : 'inactive'}`}
          onClick={() => setOrdenacao('maior')}
        >
          <i className="fa-solid fa-arrow-up-wide-short"></i> Maior Preço
        </button>
        <button
          className={`sort-btn ${ordenacao === 'menor' ? 'active' : 'inactive'}`}
          onClick={() => setOrdenacao('menor')}
        >
          <i className="fa-solid fa-arrow-down-wide-short"></i> Menor Preço
        </button>
      </div>
    </aside>
  );
}