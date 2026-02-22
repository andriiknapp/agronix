import React from 'react';
import './LegalPages.css';

export const TermsOfService: React.FC = () => {
    return (
      <div className="legal-container">
        <h1 className="legal-title">Regulamin serwisu internetowego agronix.co</h1>
  
        <div className="legal-section">
          <h2 className="legal-section-title">1. Postanowienia ogólne</h2>
          <p className="legal-text">1.1. Niniejszy regulamin określa zasady korzystania z serwisu internetowego dostępnego pod adresem agronix.co.</p>
          <p className="legal-text">1.2. Właścicielem serwisu jest <strong>AGRONIX SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ</strong> z siedzibą w Warszawie, ul. Wolińska 4, 03-699 Warszawa, NIP: 5243036236, REGON: 541391740, KRS: 0001165991.</p>
          <p className="legal-text">1.3. Serwis ma charakter informacyjny i umożliwia zapoznanie się z asortymentem nawozów oferowanych przez Spółkę oraz złożenie zapytania ofertowego.</p>
        </div>
  
        <div className="legal-section">
          <h2 className="legal-section-title">2. Usługi świadczone drogą elektroniczną</h2>
          <p className="legal-text">2.1. Za pośrednictwem serwisu Właściciel świadczy bezpłatnie następujące usługi:</p>
          <ul className="legal-list">
            <li>udostępnianie informacji o produktach (katalog produktów),</li>
            <li>udostępnianie formularza kontaktowego w celu złożenia zapytania o ofertę.</li>
          </ul>
          <p className="legal-text">2.2. Do korzystania z serwisu niezbędne jest urządzenie z dostępem do sieci Internet oraz standardowa przeglądarka internetowa.</p>
        </div>
  
        <div className="legal-section">
          <h2 className="legal-section-title">3. Zapytanie ofertowe i zasady sprzedaży</h2>
          <p className="legal-text">3.1. Informacje prezentowane na stronie internetowej, w tym lista produktów, nie stanowią oferty w rozumieniu art. 66 § 1 Kodeksu Cywilnego, lecz stanowią zaproszenie do zawarcia umowy (zgodnie z art. 71 Kodeksu Cywilnego).</p>
          <p className="legal-text">3.2. Ceny produktów nie są podane na stronie internetowej i podlegają indywidualnym negocjacjom.</p>
          <p className="legal-text">3.3. W celu uzyskania wyceny oraz dokonania zakupu, Użytkownik powinien wypełnić formularz znajdujący się na stronie, wskazując: interesujący go produkt, docelowe województwo dostawy oraz podając swój numer telefonu.</p>
          <p className="legal-text">3.4. Po przesłaniu formularza, przedstawiciel AGRONIX sp. z o.o. skontaktuje się z Użytkownikiem telefonicznie w celu przedstawienia wiążącej oferty cenowej, kosztów dostawy oraz ustalenia warunków ewentualnego zamówienia.</p>
          <p className="legal-text">3.5. Umowa sprzedaży zostaje zawarta dopiero po akceptacji warunków przez obie strony podczas kontaktu telefonicznego lub mailowego, poza systemem strony internetowej agronix.co.</p>
        </div>
  
        <div className="legal-section">
          <h2 className="legal-section-title">4. Reklamacje dotyczące działania serwisu</h2>
          <p className="legal-text">4.1. Wszelkie reklamacje związane z funkcjonowaniem strony internetowej należy zgłaszać na adres e-mail: biuro@agronix.co.</p>
          <p className="legal-text">4.2. Właściciel rozpatruje reklamacje w terminie do 14 dni od ich otrzymania.</p>
        </div>
  
        <div className="legal-section">
          <h2 className="legal-section-title">5. Postanowienia końcowe</h2>
          <p className="legal-text">5.1. W sprawach nieuregulowanych w niniejszym Regulaminie mają zastosowanie powszechnie obowiązujące przepisy prawa polskiego.</p>
          <p className="legal-text">5.2. Właściciel zastrzega sobie prawo do wprowadzania zmian w Regulaminie. O zmianach Użytkownicy będą informowani poprzez publikację nowej wersji na stronie.</p>
        </div>
      </div>
    );
  };