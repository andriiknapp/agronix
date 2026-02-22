// src/pages/ThankYou.tsx
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../Layout/Footer";
import "./ThankYou.css";

export default function ThankYou() {
  return (
    <div className="thank-you-page">
      <main className="thank-you-main">
        <div className="thank-you-container">
          <div className="success-icon-wrapper">
            <CheckCircle2 className="success-icon" />
          </div>
          
          <h1 className="thank-you-title">
            Dziękujemy!
          </h1>
          
          <p className="thank-you-message">
            Twój formularz został pomyślnie wysłany. Nasz handlowiec oddzwoni w ciągu <strong className="highlight-text">15 minut</strong> z gotową wyceną.
          </p>
          
          <Link to="/">
            <button className="btn-back touch-target" data-testid="button-back-home">
              <ArrowLeft className="button-icon" />
              Wróć do strony głównej
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}