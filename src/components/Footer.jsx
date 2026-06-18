import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <>
      <div className="register-banner">
        Cadastre-se na Falkon para conferir mais promoções! <a href="#">Entrar | Cadastrar-se</a>
      </div>

      <footer>
        <div className="footer-grid">
          <div className="footer-logo">Falkon</div>
          
          <div className="footer-col">
            <h4>Pagamento</h4>
            <ul>
              <li><a href="#">Meios de Pagamento</a></li>
              <li><a href="#">Frete e prazo de entrega</a></li>
              <li><a href="#">Compre com Pontos</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Fale conosco</h4>
            <ul>
              <li><a href="#">Sua conta</a></li>
              <li><a href="#">Frete e prazos de entrega</a></li>
              <li><a href="#">Devoluções e Reembolso</a></li>
              <li><a href="#">Ajuda</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Sobre</h4>
            <ul>
              <li><a href="#">Sobre a Falkon</a></li>
              <li><a href="#">Entrar</a></li>
              <li><a href="#">Cadastre-se</a></li>
              <li><a href="#">Comunidade</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Social</h4>
            <ul className="social-icons">
              <li><a href="#"><i className="fa-brands fa-instagram"></i> Instagram</a></li>
              <li><a href="#"><i className="fa-brands fa-x-twitter"></i> Twitter (X)</a></li>
              <li><a href="#"><i className="fa-brands fa-facebook"></i> Facebook</a></li>
              <li><a href="#"><i className="fa-brands fa-linkedin"></i> LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 Falkon Inc. All rights reserved.</div>
          <div className="footer-links">
            <a href="#">Português (Brasil)</a>
            <a href="#">Privacidade</a>
            <a href="#">Preferências de Cookies</a>
            <a href="#">Condições de Uso</a>
            <a href="#">Anúncios Baseados em Interesses</a>
          </div>
        </div>
      </footer>
    </>
  );
}