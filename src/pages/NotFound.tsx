// src/pages/NotFound.tsx
import { AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-icon-wrapper">
          <AlertCircle className="not-found-icon" />
        </div>
        
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Strona nie została znaleziona</h2>
        
        <p className="not-found-message">
          Wygląda na to, że ta strona nie istnieje lub została przeniesiona.
        </p>
        
        <Link to="/">
          <button className="btn-back-home touch-target" data-testid="button-back-home-notfound">
            Wróć do strony głównej
          </button>
        </Link>
      </div>
    </div>
  );
}