import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import useTheme from './hooks/useTheme.jsx';
import './styles/App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AppRoutes from './routes/AppRoutes.jsx';

export default function App() {
  // Estado do tema, compartilhado entre Header e o restante da aplicação.
  const { tema, alternarTema } = useTheme();

  // Estado da busca por texto. Vive aqui porque o input fica no Header,
  // mas o valor precisa chegar tanto na Home quanto em Promoções.
  const [textoPesquisa, setTextoPesquisa] = useState('');

  return (
    <BrowserRouter>
      <div className={tema === 'dark' ? 'app dark-theme' : 'app'}>
        <Header
          tema={tema}
          alternarTema={alternarTema}
          textoPesquisa={textoPesquisa}
          setTextoPesquisa={setTextoPesquisa}
        />
        <AppRoutes textoPesquisa={textoPesquisa} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}