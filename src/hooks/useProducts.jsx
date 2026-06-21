import { useState, useEffect } from 'react';

// 1. A MUDANÇA PRINCIPAL: 
// Trocamos o localhost pelo nome do arquivo que vai ficar na pasta public
const API_URL = 'produtos.json'; 

export default function useProducts(textoPesquisa = '') {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [precoMax, setPrecoMax] = useState(1500);
  const [categoria, setCategoria] = useState('Todos');
  const [ordenacao, setOrdenacao] = useState('maior'); // 'maior' ou 'menor'

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Erro ao buscar produtos');
        return res.json();
      })
      .then((data) => {
        // 2. A SEGUNDA MUDANÇA (Prevenção de erro):
        // Como o json-server normalmente guarda os dados dentro de um bloco { "produtos": [...] },
        // essa linha garante que o React vai achar a lista de produtos, quer você tenha 
        // enviado o arquivo original do json-server ou apenas uma lista pura.
        const arrayDeProdutos = Array.isArray(data) ? data : data.produtos || [];
        
        setProducts(arrayDeProdutos);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filtros cruzados: preço, busca por texto e categoria (usado na Home)
  let produtosFiltrados = products.filter((produto) => {
    const matchesPreco = produto.preco <= precoMax;
    const matchesPesquisa = produto.nome
      .toLowerCase()
      .includes(textoPesquisa.toLowerCase());
    const matchesCategoria =
      categoria === 'Todos' || produto.categoria === categoria;

    return matchesPreco && matchesPesquisa && matchesCategoria;
  });

  // Ordenação por preço
  produtosFiltrados = [...produtosFiltrados].sort((a, b) =>
    ordenacao === 'maior' ? b.preco - a.preco : a.preco - b.preco
  );

  // Lista exclusiva de itens em promoção (usada na página /promocoes),
  // respeitando também o texto digitado na busca do header.
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