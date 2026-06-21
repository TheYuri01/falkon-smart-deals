// File: src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Promocoes from '../pages/Promocoes.jsx';

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