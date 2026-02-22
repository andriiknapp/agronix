// src/pages/Home.tsx
import Navbar from "../Layout/Navbar";
import HeroText from "../components/HeroText";
import LeadForm from "../components/LeadForm";
import Footer from "../Layout/Footer";
import ProductSection from "../components/ProductSection";
import { ShieldCheck, Truck, Clock, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import "./Home.css";

export default function Home() {
  const [showFloatingBtn, setShowFloatingBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home-page">      
      <main className="main-content">
        <div className="home-grid">
          
          {/* 1. Левая колонка (Только текст) */}
          <div className="home-left-column">
            <HeroText />
          </div>

          {/* 2. Правая колонка (Форма) */}
          <div className="home-right-column">
            <LeadForm />
          </div>
          
          {/* 3. Trust Signals (Теперь идут после формы в HTML, но на десктопе встанут слева через CSS) */}
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

        <ProductSection />
      </main>

      {/* Floating Action Button for Mobile */}
      {showFloatingBtn && (
        <a 
          href="tel:+48000000000" 
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