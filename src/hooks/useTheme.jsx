import { useState } from 'react';

// File: src/hooks/useTheme.jsx
export default function useTheme() {
  const [tema, setTema] = useState('light');

  function alternarTema() {
    setTema((temaAtual) => (temaAtual === 'light' ? 'dark' : 'light'));
  }

  return { tema, alternarTema };
}