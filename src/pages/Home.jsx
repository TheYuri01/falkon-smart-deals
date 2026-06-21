import React from 'react';
import FilterBar from '../components/FilterBar.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import BannerCarousel from '../components/BannerCarousel.jsx';
import useProducts from '../hooks/useProducts.jsx';

// Recebe textoPesquisa de fora (originado no input do Header,
// passado através do App.jsx -> AppRoutes.jsx -> aqui).
export default function Home({ textoPesquisa }) {
  const {
    products,
    loading,
    error,
    precoMax,
    setPrecoMax,
    categoria,
    setCategoria,
    ordenacao,
    setOrdenacao,
  } = useProducts(textoPesquisa);

  return (
    <>
      <BannerCarousel />

      {loading && <p className="status-msg">Carregando produtos...</p>}
      {error && <p className="status-msg error">Erro: {error}</p>}

      {!loading && !error && (
        <div className="main-container">
          <FilterBar
            precoMax={precoMax}
            setPrecoMax={setPrecoMax}
            categoria={categoria}
            setCategoria={setCategoria}
            ordenacao={ordenacao}
            setOrdenacao={setOrdenacao}
          />
          <ProductGrid products={products} />
        </div>
      )}
    </>
  );
}