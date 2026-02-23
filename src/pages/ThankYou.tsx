// src/pages/ThankYou.tsx
import { CheckCircle2, ArrowLeft, Package, MapPin, Calendar, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../Layout/Footer";
import "./ThankYou.css";

interface OrderSummary {
  product: string;
  voivodeship: string;
  delivery: string;
  phone: string;
}

export default function ThankYou() {
  const location = useLocation();
  const data = location.state as OrderSummary | null;

  return (
    <div className="thank-you-page">
      <main className="thank-you-main">
        <div className="thank-you-container">
          
          {/* Иконка успеха */}
          <div className="success-icon-wrapper">
            <div className="success-circle">
              <CheckCircle2 className="success-icon" />
            </div>
          </div>
          
          <h1 className="thank-you-title">
            Dziękujemy!
          </h1>
          
          <p className="thank-you-message">
            Twoje zgłoszenie zostało przyjęte. Nasz handlowiec skontaktuje się z Tobą w ciągu <strong className="highlight-text">15 minut</strong>.
          </p>

          {/* Карточка с деталями заказа (показываем только если есть данные) */}
          {data && (
            <div className="order-summary-card">
              <h3 className="summary-title">Podsumowanie zgłoszenia</h3>
              
              <div className="summary-row">
                <div className="summary-icon-box">
                  <Package size={20} />
                </div>
                <div className="summary-content">
                  <span className="summary-label">Produkt</span>
                  <span className="summary-value">{data.product}</span>
                </div>
              </div>

              <div className="summary-row">
                <div className="summary-icon-box">
                  <MapPin size={20} />
                </div>
                <div className="summary-content">
                  <span className="summary-label">Województwo</span>
                  <span className="summary-value">{data.voivodeship}</span>
                </div>
              </div>

              <div className="summary-row">
                <div className="summary-icon-box">
                  <Calendar size={20} />
                </div>
                <div className="summary-content">
                  <span className="summary-label">Termin dostawy</span>
                  <span className="summary-value">{data.delivery}</span>
                </div>
              </div>

              <div className="summary-row">
                <div className="summary-icon-box">
                  <Phone size={20} />
                </div>
                <div className="summary-content">
                  <span className="summary-label">Telefon</span>
                  <span className="summary-value">{data.phone}</span>
                </div>
              </div>
            </div>
          )}
          
          <Link to="/" className="back-link-wrapper">
            <button className="btn-back touch-target">
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