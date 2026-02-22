import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Верхняя часть: Сетка */}
        <div className="footer-grid">
          
          {/* Колонка 1: Бренд */}
          <div className="footer-col brand-col">
            <h2 className="footer-logo">AGRONIX<span className="logo-dot">.</span></h2>
            <p className="footer-desc">
              Twój zaufany partner w branży rolniczej. Oferujemy najwyższej jakości rozwiązania i profesjonalną obsługę.
            </p>
          </div>

          {/* Колонка 2: Контакты */}
          <div className="footer-col contacts-col">
            <h3 className="footer-title">Kontakt</h3>
            <div className="contact-list">
              <a href="tel:+48510513337" className="contact-item">
                {/* Иконка телефона SVG */}
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+48 510 513 337</span>
              </a>
              <a href="tel:+48517828584" className="contact-item">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+48 517 828 584</span>
              </a>
              <a href="mailto:biuro@agronix.co" className="contact-item">
                {/* Иконка почты SVG */}
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>biuro@agronix.co</span>
              </a>
            </div>
          </div>

          {/* Колонка 3: Навигация */}
          <div className="footer-col links-col">
            <h3 className="footer-title">Informacje</h3>
            <nav className="footer-nav">
              <Link to="/privacy" className="footer-nav-link">Polityka Prywatności</Link>
              <Link to="/terms" className="footer-nav-link">Regulamin</Link>
              <Link to="/" className="footer-nav-link">Strona Główna</Link>
            </nav>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="footer-bottom">
          <div className="legal-info">
            <span>AGRONIX SP. Z O.O.</span>
            <span className="separator">|</span>
            <span>ul. Wolińska 4, 03-699 Warszawa</span>
            <span className="separator">|</span>
            <span>NIP: 5243036236</span>
          </div>
          <div className="copyright">
            &copy; {new Date().getFullYear()} AGRONIX.co
          </div>
        </div>
      </div>
    </footer>
  );
}