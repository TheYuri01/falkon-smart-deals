# Falkon - Vitrine Inteligente de Promoções

O **Falkon - Vitrine Inteligente** é uma aplicação web SPA (Single Page Application) desenvolvida em **React** para a Falkon, um e-commerce em expansão voltado ao nicho Geek, Tech e Gamer. 

Este projeto resolve o **Desafio 5**, focado em criar uma experiência de busca agressiva, rápida e fluida para um público exigente que busca promoções sazonais sem perda de tempo.

> **Status do Projeto:** Em desenvolvimento acadêmico.

---

## Funcionalidades do Desafio
* **Página de Busca Avançada:** Listagem elegante de produtos com barra de pesquisa por texto e filtros dinâmicos por categoria.
* **Ordenação Inteligente:** Filtro de ordenação por preços (crescente e decrescente).
* **Rota Exclusiva de Conversão:** Página dedicada (`/promocoes` ou `/limpa-estoque`) que consome o banco de dados e exibe apenas itens com a flag `"promocao": true`, destacando selos de oportunidade e porcentagens de desconto.

---

## Requisitos Técnicos Implementados
Para atender aos critérios rigorosos de avaliação do projeto, a arquitetura segue os seguintes padrões:
* **React Router:** Gerenciamento de rotas fluído (SPA) sem reload total da página.
* **Custom Hooks:** Centralização e isolamento das regras de negócio e consumo da API fake.
* **Componentização e Código Limpo:** Componentes reutilizáveis, estilização dinâmica e nomenclatura de variáveis em `camelCase`.
* **Simulação de Back-end:** Uso obrigatório do `json-server` para ler e simular a base de dados em tempo real (`db.json`).

---

## Estrutura de Diretórios Proposta

```text
src/
├── components/     # Componentes reutilizáveis (Cards, Filtros, Navbar)
├── routes/         # Páginas e configurações do React Router
├── hooks/          # Custom Hooks para regras de negócio e fetch de dados
├── styles/         # Arquivos de CSS separados e CSS dinâmico
├── App.jsx         # Arquivo principal limpo
└── main.jsx        # Ponto de entrada da aplicação
