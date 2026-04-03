import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroText from "../components/HeroText";
import LeadForm from "../components/LeadForm";
import ProductSection from "../components/ProductSection";
import { ShieldCheck, Truck, Clock, Phone, ArrowRight } from "lucide-react";
import "./Home.css";

export default function Home() {
  const [showFloatingBtn, setShowFloatingBtn] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigateToForm = () => {
    // Находим элемент формы по ID и скроллим к нему
    const formElement = document.getElementById("lead-form-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    
    // Запускаем анимацию через ref
    if (formRef.current) {
      formRef.current.highlightForm();
    }
  };

  return (
    <div className="home-page">      
      <main className="main-content">
        <div className="home-grid">
          
          {/* 1. Левая колонка (Только текст) */}
          <div className="home-left-column">
            <HeroText onNavigateToForm={handleNavigateToForm} />
          </div>

          {/* 2. Правая колонка (Форма) */}
          <div className="home-right-column">
            <LeadForm ref={formRef} />
          </div>
          
          {/* 3. Trust Signals */}
          <div className="trust-signals-container">
            <div className="trust-signals">
              <div className="trust-card">
                <div className="trust-icon-wrapper">
                  <ShieldCheck className="trust-icon" />
                </div>
                <div className="trust-content">
                  <span className="trust-title">Sprawdzony sprzedawca</span>
                  <span className="trust-description">NIP: 5243036236</span>
                </div>
              </div>
              
              <div className="trust-card">
                <div className="trust-icon-wrapper">
                  <Truck className="trust-icon" />
                </div>
                <div className="trust-content">
                  <span className="trust-title">Dostawa w 24-48h</span>
                  <span className="trust-description">W całej Polsce</span>
                </div>
              </div>
              
              <div className="trust-card">
                <div className="trust-icon-wrapper">
                  <Clock className="trust-icon" />
                </div>
                <div className="trust-content">
                  <span className="trust-title">Wycena w 10 min</span>
                  <span className="trust-description">Gwarancja ceny</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Продукты */}
        <ProductSection onNavigateToForm={handleNavigateToForm} />

        {/* НОВЫЙ БЛОК: Превью "О фирме" */}
        <section className="about-preview-section">
          <div className="about-preview-container">
            <h2 className="preview-title">O firmie AGRONIX</h2>
            <p className="preview-text">
            Jesteśmy firmą z wieloletnim doświadczeniem, specjalizującą się w handlu nawozami oraz surowcami dla rolnictwa i przemysłu. Naszą misją jest wspieranie nowoczesnego rolnictwa poprzez dostarczanie wysokiej jakości produktów w konkurencyjnych cenach.
            </p>
            <Link to="/about" className="preview-button">
              Dowiedz się więcej <ArrowRight size={18} />
            </Link>
          </div>
        </section>

      </main>

      {/* Floating Action Button for Mobile */}
      {showFloatingBtn && (
        <a 
          href="tel:+48510513337" 
          className="floating-call-btn"
          data-testid="button-floating-call"
        >
          <Phone className="button-icon" />
          Zadzwoń teraz
        </a>
      )}
    </div>
  );
}