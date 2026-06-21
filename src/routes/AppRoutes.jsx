import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Promocoes from '../pages/Promocoes.jsx';

// Recebe textoPesquisa do App.jsx e repassa para ambas as páginas,
// já que a busca do header filtra tanto a Home quanto Promoções.
// A div .page-transition garante que toda a página anime como um
// bloco só ao trocar de rota, sem deslocar o restante do layout.
export default function AppRoutes({ textoPesquisa }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="page-transition">
            <Home textoPesquisa={textoPesquisa} />
          </div>
        }
      />
      <Route
        path="/promocoes"
        element={
          <div className="page-transition">
            <Promocoes textoPesquisa={textoPesquisa} />
          </div>
        }
      />
    </Routes>
  );
}