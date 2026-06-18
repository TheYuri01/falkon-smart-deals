import './styles/App.css';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <Sidebar />
        <ProductGrid />
      </div>
      <Footer />
    </>
  );
}
