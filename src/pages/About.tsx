import { Truck, Handshake, Award, CheckCircle2 } from "lucide-react";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        {/* Header Section */}
        <div className="about-header">
          <h1 className="about-title">O firmie AGRONIX</h1>
          <p className="about-subtitle">
            Twój wiarygodny partner w nowoczesnym rolnictwie i przemyśle.
          </p>
        </div>

        {/* Content Section */}
        <div className="about-content">
          <p className="about-lead-text">
            Jesteśmy firmą z wieloletnim doświadczeniem, specjalizującą się w handlu nawozami 
            oraz surowcami dla rolnictwa i przemysłu. Naszą misją jest wspieranie nowoczesnego 
            rolnictwa poprzez dostarczanie wysokiej jakości produktów w konkurencyjnych cenach.
          </p>

          {/* Features Grid */}
          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Truck className="feature-icon" />
              </div>
              <h3 className="feature-title">Bezpośredni importer</h3>
              <p className="feature-desc">
                Jesteśmy bezpośrednim importerem, co pozwala nam zapewnić stabilność dostaw 
                oraz pełną kontrolę nad jakością oferowanych produktów.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Award className="feature-icon" />
              </div>
              <h3 className="feature-title">Gwarancja jakości</h3>
              <p className="feature-desc">
                Dostarczamy surowiec o stabilnych parametrach, pochodzący od sprawdzonych 
                producentów, spełniający wymagania nowoczesnej produkcji.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Handshake className="feature-icon" />
              </div>
              <h3 className="feature-title">Relacje i zaufanie</h3>
              <p className="feature-desc">
                Współpracujemy z partnerami w całej Europie, budując długoterminowe relacje 
                oparte na zaufaniu i indywidualnym podejściu do klienta.
              </p>
            </div>
          </div>

          {/* Offer Section */}
          <div className="about-section">
            <h2 className="section-heading">Nasza oferta</h2>
            <ul className="offer-list">
              <li className="offer-item">
                <CheckCircle2 className="offer-icon" />
                <span>
                  <strong>Nawozy mineralne i specjalistyczne</strong>
                </span>
              </li>
              <li className="offer-item">
                <CheckCircle2 className="offer-icon" />
                <span>
                  <strong>Śruta sojowa HI-PRO</strong> – wysokobiałkowy komponent paszowy 
                  o podwyższonej zawartości białka, przeznaczony dla wymagających hodowli. 
                  Stanowi jeden z kluczowych produktów w naszej ofercie.
                </span>
              </li>
              <li className="offer-item">
                <CheckCircle2 className="offer-icon" />
                <span>
                  <strong>Śruta słonecznikowa</strong> – wartościowe źródło białka i energii 
                  w produkcji pasz.
                </span>
              </li>
            </ul>
          </div>

          {/* Conclusion */}
          <div className="about-section">
            <p className="about-text">
              Dzięki bezpośredniemu importowi jesteśmy w stanie zapewnić ciągłość dostaw oraz 
              konkurencyjne ceny, co czyni nas wiarygodnym partnerem dla firm paszowych, 
              dystrybutorów oraz gospodarstw rolnych.
            </p>
            <p className="about-text">
              Dzięki doświadczeniu naszego zespołu oraz znajomości rynku pomagamy dobrać 
              optymalne rozwiązania dopasowane do konkretnych potrzeb klientów.
            </p>
          </div>

          {/* Footer Highlight */}
          <div className="about-footer-highlight">
            <h2>AGRONIX to nie tylko dostawca – to partner w rozwoju Twojego biznesu.</h2>
          </div>
        </div>
      </div>
    </div>
  );
}