import React from 'react';
import './LegalPages.css';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="legal-container">
      <h1 className="legal-title">Polityka Prywatności serwisu agronix.co</h1>

      <div className="legal-section">
        <h2 className="legal-section-title">1. Administrator danych osobowych</h2>
        <p className="legal-text">
          Administratorem Twoich danych osobowych zbieranych za pośrednictwem strony internetowej agronix.co jest <strong>AGRONIX SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ</strong> z siedzibą w Warszawie, ul. Wolińska 4, 03-699 Warszawa, wpisana do Rejestru Przedsiębiorców pod numerem KRS: 0001165991, NIP: 5243036236, REGON: 541391740, Numer Weterynaryjny: PL14654682.
        </p>
        <p className="legal-text">
          Kontakt z Administratorem jest możliwy pod numerami telefonu: <span className="legal-contact">+48 510 513 337</span>, <span className="legal-contact">+48 517 828 584</span> oraz adresem e-mail: <span className="legal-contact">biuro@agronix.co</span>.
        </p>
      </div>

      <div className="legal-section">
        <h2 className="legal-section-title">2. Cel i zakres zbierania danych</h2>
        <p className="legal-text">
          Przetwarzamy dane osobowe podane przez Ciebie w formularzu kontaktowym w celu obsługi Twojego zapytania ofertowego. Zbieramy następujące dane:
        </p>
        <ul className="legal-list">
          <li>Numer telefonu,</li>
          <li>Informacje o wybranym produkcie (nawozie),</li>
          <li>Preferowane województwo dostawy.</li>
        </ul>
      </div>

      <div className="legal-section">
        <h2 className="legal-section-title">3. Podstawa prawna przetwarzania</h2>
        <p className="legal-text">
          Podstawą prawną przetwarzania Twoich danych jest podjęcie działań na żądanie osoby, której dane dotyczą, przed zawarciem umowy (art. 6 ust. 1 lit. b RODO) oraz prawnie uzasadniony interes Administratora polegający na udzielaniu odpowiedzi na zapytania klientów (art. 6 ust. 1 lit. f RODO).
        </p>
      </div>

      <div className="legal-section">
        <h2 className="legal-section-title">4. Odbiorcy danych</h2>
        <p className="legal-text">
          Twoje dane osobowe mogą być udostępniane podmiotom, z którymi współpracujemy w celu utrzymania strony internetowej (np. dostawca hostingu), przy czym podmioty te przetwarzają dane wyłącznie na nasze polecenie.
        </p>
      </div>

      <div className="legal-section">
        <h2 className="legal-section-title">5. Prawa użytkownika</h2>
        <p className="legal-text">Posiadasz prawo do:</p>
        <ul className="legal-list">
          <li>dostępu do treści swoich danych oraz ich poprawiania,</li>
          <li>żądania usunięcia danych ("prawo do bycia zapomnianym"),</li>
          <li>ograniczenia przetwarzania,</li>
          <li>przenoszenia danych,</li>
          <li>wniesienia sprzeciwu wobec przetwarzania.</li>
        </ul>
        <p className="legal-text">
          W celu realizacji swoich praw skontaktuj się z nami mailowo: biuro@agronix.co. Masz również prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (PUODO).
        </p>
      </div>
    </div>
  );
};

