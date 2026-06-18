import React from 'react';
import '../styles/Sidebar.css'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="filter-section">
        <div className="filter-title">
          <span><i className="fa-solid fa-sliders"></i> Filtro</span>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-title">Departamento</div>
        <div className="filter-options">
          <label><input type="radio" name="dept" defaultChecked /> Todos</label>
          <label><input type="radio" name="dept" /> Hardware e Periféricos</label>
          <label><input type="radio" name="dept" /> Games</label>
          <label><input type="radio" name="dept" /> TV</label>
          <label><input type="radio" name="dept" /> Smartphones e Tablets</label>
          <label><input type="radio" name="dept" /> Escritório</label>
          <label><input type="radio" name="dept" /> Geek</label>
          <label><input type="radio" name="dept" /> Eletrodomésticos</label>
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-title">Preço Máx. <span style={{ color: 'var(--primary-red)' }}>R$ 2.000</span></div>
        <div className="price-slider-container">
          <input type="range" min="0" max="5000" defaultValue="2000" className="range-slider" />
          <div className="price-text">
            <span>R$ 0</span>
            <span>R$ 5.000+</span>
          </div>
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-title">Ordenação</div>
        <button className="sort-btn active"><i className="fa-solid fa-arrow-up-wide-short"></i> Maior Preço</button>
        <button className="sort-btn inactive"><i className="fa-solid fa-arrow-down-wide-short"></i> Menor Preço</button>
      </div>
    </aside>
  );
}