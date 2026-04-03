import { Phone, ChevronRight } from "lucide-react";
import "./HeroText.css";

interface HeroTextProps {
  onNavigateToForm?: () => void;
}

export default function HeroText({ onNavigateToForm }: HeroTextProps) {
  const handleButtonClick = () => {
    if (onNavigateToForm) {
      onNavigateToForm();
    } else {
      document.getElementById("lead-form-section")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="hero-header">
      <div className="hero-content">
        <h1 className="hero-title">
          Nawozy | Pasze – sprzedaż hurtowa
          <span className="hero-highlight">Cały samochód | Szybka wycena</span>
        </h1>
        <p className="hero-subtitle">
          Wycena w 10 minut. Dostawa 24–48h. <br className="hidden-mobile" />
          Profesjonalna obsługa dla rolnictwa i przemysłu.
        </p>
        
        <div className="hero-actions">
          <a 
            href="tel:+48510513337" 
            className="btn-hero btn-white-primary"
            data-testid="link-call-header"
          >
            <Phone size={20} className="btn-icon" />
            <span>Zadzwoń teraz</span>
          </a>
          <button 
            onClick={handleButtonClick}
            className="btn-hero btn-white-secondary"
            data-testid="button-scroll-to-form"
          >
            <span>Zapytaj o cenę</span>
            <ChevronRight size={20} className="btn-icon" />
          </button>
        </div>
      </div>
    </header>
  );
}