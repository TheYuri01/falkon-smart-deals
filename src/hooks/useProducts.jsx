import { useState, useEffect } from 'react';

// File: src/hooks/useProducts.jsx
const API_URL = import.meta.env.DEV
  ? 'http://localhost:3001/produtos'
  : getStaticDataUrl();

function getStaticDataUrl() {
  const segments = window.location.pathname.split('/').filter(Boolean);
  const basePath = segments.length > 0 ? `/${segments[0]}` : '';
  return `${basePath}/db.json`;
}

export default function useProducts(textoPesquisa = '') {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [precoMax, setPrecoMax] = useState(1500);
  const [categoria, setCategoria] = useState('Todos');
  const [ordenacao, setOrdenacao] = useState('maior');

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Erro ao buscar produtos');
        return res.json();
      })
      .then((data) => {
        const arrayDeProdutos = Array.isArray(data) ? data : data.produtos || [];

        setProducts(arrayDeProdutos);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  let produtosFiltrados = products.filter((produto) => {
    const matchesPreco = produto.preco <= precoMax;
    const matchesPesquisa = produto.nome
      .toLowerCase()
      .includes(textoPesquisa.toLowerCase());
    const matchesCategoria =
      categoria === 'Todos' || produto.categoria === categoria;

    return matchesPreco && matchesPesquisa && matchesCategoria;
  });

  produtosFiltrados = [...produtosFiltrados].sort((a, b) =>
    ordenacao === 'maior' ? b.preco - a.preco : a.preco - b.preco
  );

  const promoProducts = products.filter(
    (produto) =>
      produto.promocao === true &&
      produto.nome.toLowerCase().includes(textoPesquisa.toLowerCase())
  );

  return {
    products: produtosFiltrados,
    promoProducts,
    loading,
    error,
    precoMax,
    setPrecoMax,
    categoria,
    setCategoria,
    ordenacao,
    setOrdenacao,
  };
}