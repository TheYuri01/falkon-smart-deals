// File: src/App.jsx
import { HashRouter } from 'react-router-dom';
import { useState } from 'react';
import useTheme from './hooks/useTheme.jsx';
import './styles/App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AppRoutes from './routes/AppRoutes.jsx';

export default function App() {
  const { tema, alternarTema } = useTheme();
  const [textoPesquisa, setTextoPesquisa] = useState('');

  return (
    <HashRouter>
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
    </HashRouter>
  );
}