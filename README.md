# Falkon - Vitrine Inteligente de Promoções

O **Falkon - Vitrine Inteligente** é uma aplicação web SPA (Single Page Application) desenvolvida em **React** para a Falkon, um e-commerce em expansão voltado ao nicho Geek, Tech e Gamer. 

Este projeto resolve o **Desafio 5**, focado em criar uma experiência de busca agressiva, rápida e fluida para um público exigente que busca promoções sazonais sem perda de tempo.

> **Status do Projeto:** Em desenvolvimento acadêmico / Deploy ativo via GitHub Pages.

---

## 🚀 Funcionalidades do Desafio

* **Página de Busca Avançada:** Listagem elegante de produtos com barra de pesquisa por texto e filtros dinâmicos cruzados (categoria, preço, etc.).
* **Ordenação Inteligente:** Filtro de ordenação por preços (crescente e decrescente).
* **Rota Exclusiva de Conversão (`/promocoes`):** Página dedicada que consome o banco de dados e exibe apenas itens com a flag `"promocao": true`, destacando selos de oportunidade e porcentagens de desconto.
* **Dark Mode (Tema Dinâmico):** Alternância fluida entre temas claro e escuro, garantindo conforto visual ao usuário.

## ⚙️ Requisitos Técnicos e Arquitetura

Para atender aos critérios rigorosos de avaliação do projeto, a arquitetura segue os seguintes padrões:

* **Ferramental Moderno:** Projeto construído utilizando **Vite** para um *build* e carregamento ultrarrápidos.
* **React Router:** Gerenciamento de rotas fluído (SPA) sem *reload* total da página.
* **Custom Hooks:** Centralização e isolamento das regras de negócio (ex: `useProducts.jsx`, `useTheme.jsx`), mantendo os componentes visuais limpos.
* **Componentização e Código Limpo:** Componentes reutilizáveis, nomenclatura de variáveis em *camelCase* e separação estrita de responsabilidades.
* **Simulação de Back-end (JSON Server / Static Fetch):** O projeto utiliza um banco de dados estruturado em `.json` e foi arquitetado para funcionar em dois cenários:
  * **Ambiente de Desenvolvimento:** Utiliza o `json-server` localmente para simular uma API REST completa com rotas de requisição.
  * **Ambiente de Produção (GitHub Pages):** Para contornar as limitações de hospedagem estática da nuvem, os dados são consumidos diretamente de `public/db.json` via *static fetch*, garantindo o funcionamento e a integridade da SPA sem a necessidade de um servidor Node ativo.

## 📁 Estrutura de Diretórios Atual

A arquitetura do projeto foi escalada para manter a organização conforme novos utilitários e páginas foram adicionados:

```text
falkon-smart-deals/
├── public/                 # Arquivos públicos e Banco de Dados estático
│   └── db.json              # Simulação da API com a lista de produtos
├── src/
│   ├── assets/              # Imagens e banners estáticos da aplicação
│   ├── components/          # Componentes visuais isolados (Cards, Headers, etc.)
│   ├── hooks/               # Regras de negócio customizadas (useProducts, useTheme)
│   ├── pages/               # Componentes de nível de página (Home, Promocoes)
│   ├── routes/              # Configuração do React Router DOM
│   ├── styles/              # Modularização completa do CSS por componente/página
│   ├── utils/               # Mapeamento de imagens dinâmicas e helpers
│   ├── App.jsx              # Estrutura principal e provedores de contexto
│   └── main.jsx             # Ponto de entrada (Entrypoint) do React
├── index.html
├── package.json
└── vite.config.js
```
