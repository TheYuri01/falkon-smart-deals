import { useState } from 'react';

/**
 * Custom Hook responsável só pelo tema (claro/escuro).
 * Fica separado do useProducts porque não tem nenhuma relação
 * com regra de negócio de produtos — é puramente de interface.
 */
export default function useTheme() {
  const [tema, setTema] = useState('light'); // 'light' ou 'dark'

  function alternarTema() {
    setTema((temaAtual) => (temaAtual === 'light' ? 'dark' : 'light'));
  }

  return { tema, alternarTema };
}