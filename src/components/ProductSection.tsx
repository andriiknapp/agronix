import { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import "./ProductSection.css";

const PRODUCTS = [
  {
    name: "Sól potasowa 60%",
    image: "https://nodral.com/upload/iblock/5a6/v4d1mzuajfmwm31icvtj2aeq3bcowx9r.webp",
    desc: "Niezbędne źródło potasu dla upraw rolnych, zwiększające odporność na suszę i mróz.",
    benefits: ["Wzmacnia system korzeniowy", "Poprawia odporność na suszę", "Podnosi jakość plonów"]
  },
  {
    name: "Korn-KALI K+S",
    image: "https://sklepfarmera.pl/media/catalog/product/1/1/119160.jpg?width=454&height=454&store=farmer_pl&image-type=image",
    desc: "Wieloskładnikowy nawóz potasowo-magnezowy z siarką i sodem.",
    benefits: ["Źródło potasu i magnezu", "Granulowana struktura", "Wysoka przyswajalność"]
  },
  {
    name: "Mocznik granula N46",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhMp7TiFMPMvg5MQ6GkoEAFKEYmn2HKB1DDQ&s",
    desc: "Wysokiej jakości granulowany nawóz azotowy wspierający intensywny wzrost roślin.",
    benefits: ["Zwiększa zawartość azotu", "Dłuższe działanie", "Odporność na zgniatanie"]
  },
  {
    name: "Mocznik Prill N46",
    image: "https://api.eagro.pl/api/products/88/thumbnail/56",
    desc: "Szybko rozpuszczalny nawóz azotowy (prillowany) do wszechstronnego zastosowania.",
    benefits: ["Szybka przyswajalność", "Uniwersalne zastosowanie", "Łatwa aplikacja"]
  },
  {
    name: "Saletra 34,4%",
    image: "https://www.agrospec.pl/img/6026/6026.jpg",
    desc: "Szybko działający nawóz azotowy, idealny do nawożenia wiosennego i pogłównego.",
    benefits: ["Szybkie działanie", "Dwie formy azotu", "Dobra przyswajalność"]
  },
  {
    name: "Fosforan Amonu (10-46)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtsAL1eRiVsfaT3-fNrWHqUmLHwOdCjTBlTA&s",
    desc: "Skoncentrowany nawóz fosforowo-azotowy, optymalny do nawożenia przedsiewnego.",
    benefits: ["Silny rozwój korzeni", "Łatwo przyswajalny", "Idealny pod zasiew"]
  },
  {
    name: "DAP 18-46",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeA8OWCN5YUmGz6vTOja6BO3dP0wD3sXOMYA&s",
    desc: "Uniwersalny nawóz dwuskładnikowy o bardzo wysokiej zawartości fosforu.",
    benefits: ["Szybki start roślin", "Wysoka koncentracja", "Odporność na stres"]
  },
  {
    name: "Salmiak N 24%",
    image: "https://thumbs.img-sprzedajemy.pl/350x250c/78/ef/73/mocznik-46-nawoz-azotowy-569285443.jpg",
    desc: "Nawóz azotowy o działaniu zakwaszającym, doskonały na gleby zasadowe i obojętne.",
    benefits: ["Dobre zakorzenienie", "Zawiera siarkę", "Obniża pH gleby"]
  },
  {
    name: "Saletrosan 26",
    image: "https://thumbs.img-sprzedajemy.pl/350x250c/78/ef/73/mocznik-46-nawoz-azotowy-569285443.jpg",
    desc: "Azot z siarką w idealnych proporcjach, polecany pod rzepak i pszenicę ozimą.",
    benefits: ["Zwiększa plon białka", "Wspiera odporność", "Doskonały wiosną"]
  },
  {
    name: "Siarczan amonu",
    image: "https://thumbs.img-sprzedajemy.pl/350x250c/78/ef/73/mocznik-46-nawoz-azotowy-569285443.jpg",
    desc: "Nawóz dostarczający roślinom łatwo dostępny azot oraz dużo cennej siarki.",
    benefits: ["Poprawia jakość plonu", "Dobra rozpuszczalność", "Zakwasza glebę"]
  },
  {
    name: "Siarczan magnezu",
    image: "https://thumbs.img-sprzedajemy.pl/350x250c/78/ef/73/mocznik-46-nawoz-azotowy-569285443.jpg",
    desc: "Błyskawicznie uzupełnia niedobory magnezu i siarki, poprawiając proces fotosyntezy.",
    benefits: ["Zapobiega chlorozom", "Intensywna zieleń", "Wysoka czystość"]
  },
  {
    name: "RSM 32%",
    image: "https://thumbs.img-sprzedajemy.pl/350x250c/78/ef/73/mocznik-46-nawoz-azotowy-569285443.jpg",
    desc: "Płynny nawóz azotowy. Wysoce wydajny i niezwykle łatwy w równomiernej aplikacji.",
    benefits: ["3 formy azotu", "Brak strat wschodu", "Odporność na suszę"]
  },
  {
    name: "Kreda granulowana",
    image: "https://thumbs.img-sprzedajemy.pl/350x250c/78/ef/73/mocznik-46-nawoz-azotowy-569285443.jpg",
    desc: "Naturalny nawóz wapniowy, skutecznie i bardzo szybko podnoszący pH gleby.",
    benefits: ["Szybka dekarbonizacja", "Poprawia strukturę", "Bezpieczna dla roślin"]
  },
  {
    name: "NS 33-12",
    image: "https://thumbs.img-sprzedajemy.pl/350x250c/78/ef/73/mocznik-46-nawoz-azotowy-569285443.jpg",
    desc: "Skuteczny nawóz azotowo-siarkowy, optymalny dla upraw wymagających dużo siarki.",
    benefits: ["Lepsze przyswajanie N", "Wysoki plon", "Doskonała rozpuszczalność"]
  },
  {
    name: "Rotogran 7-20-30",
    image: "https://thumbs.img-sprzedajemy.pl/350x250c/78/ef/73/mocznik-46-nawoz-azotowy-569285443.jpg",
    desc: "Zbilansowany nawóz wieloskładnikowy, świetny do nawożenia przedsiewnego.",
    benefits: ["Równomierny rozwój", "Bogaty w P i K", "Wygodna granula"]
  },
  {
    name: "NPK 5-15-30",
    image: "https://thumbs.img-sprzedajemy.pl/350x250c/78/ef/73/mocznik-46-nawoz-azotowy-569285443.jpg",
    desc: "Klasyczny nawóz NPK z dużą dawką potasu, idealny pod uprawy okopowe.",
    benefits: ["Wspiera budowę plonu", "Zwiększa odporność", "Kompleksowy skład"]
  },
  {
    name: "NPK (S) 6-20-30 (5)",
    image: "https://thumbs.img-sprzedajemy.pl/350x250c/78/ef/73/mocznik-46-nawoz-azotowy-569285443.jpg",
    desc: "Nawóz wzbogacony o siarkę, wspierający jakość plonów i lepsze pobieranie azotu.",
    benefits: ["Zwiększa plon białka", "Pełne odżywianie", "Uniwersalne zastosowanie"]
  },
  {
    name: "NPK 7-19-29+1S",
    image: "https://thumbs.img-sprzedajemy.pl/350x250c/78/ef/73/mocznik-46-nawoz-azotowy-569285443.jpg",
    desc: "Wieloskładnikowy nawóz o wysokiej zawartości potasu i fosforu na start dla roślin.",
    benefits: ["Optymalny start", "Zwiększa mrozoodporność", "Łatwy wysiew"]
  },
  {
    name: "NPK (S) 8-20-30",
    image: "https://thumbs.img-sprzedajemy.pl/350x250c/78/ef/73/mocznik-46-nawoz-azotowy-569285443.jpg",
    desc: "Skoncentrowany nawóz pod rośliny o najwyższych wymaganiach pokarmowych.",
    benefits: ["Wysoka wydajność", "Pełne pokrycie potrzeb", "Równomierna granula"]
  },
  {
    name: "NPK 15-15-15",
    image: "https://thumbs.img-sprzedajemy.pl/350x250c/78/ef/73/mocznik-46-nawoz-azotowy-569285443.jpg",
    desc: "Uniwersalny nawóz o równych proporcjach głównych makroskładników (azot, fosfor, potas).",
    benefits: ["Harmonijny rozwój", "Bezpieczny dla gleby", "Wszechstronność"]
  },
  {
    name: "NPK 10-26-26",
    image: "https://thumbs.img-sprzedajemy.pl/350x250c/78/ef/73/mocznik-46-nawoz-azotowy-569285443.jpg",
    desc: "Nawóz z przewagą fosforu i potasu, doskonały do nawożenia jesiennego.",
    benefits: ["Buduje silny korzeń", "Przygotowuje do zimy", "Wysoka koncentracja"]
  },
  {
    name: "Inny nawóz",
    image: "https://thumbs.img-sprzedajemy.pl/350x250c/78/ef/73/mocznik-46-nawoz-azotowy-569285443.jpg",
    desc: "Oferujemy również inne specyficzne nawozy dopasowane do Twoich indywidualnych potrzeb.",
    benefits: ["Elastyczność", "Indywidualne podejście", "Dostępność na zapytanie"]
  }
];

export default function ProductSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Показываем 4 карточки, если не раскрыто, и все 22, если раскрыто
  const displayedProducts = isExpanded ? PRODUCTS : PRODUCTS.slice(0, 4);

  return (
    <section className="product-section" id="products">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">Nasze Produkty</h2>
          <p className="section-subtitle">
            Dostarczamy najwyższej jakości nawozy dla rolnictwa i przemysłu. 
            Gwarantujemy terminowe dostawy całosamochodowe (24t).
          </p>
        </div>

        {/* Grid - 2 columns */}
        <div className="products-grid">
          {displayedProducts.map((product, idx) => (
            <div 
              key={idx} 
              className="product-card"
              data-testid={`card-product-${idx}`}
            >
              {/* Left Side: Square Image */}
              <div className="card-image-wrapper">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="product-image"
                  loading="lazy"
                />
              </div>

              {/* Right Side: Content */}
              <div className="card-content">
                {/* Top Right Emblem */}
                <div className="card-emblem">
                  <span className="emblem-text">PREMIUM</span>
                </div>

                <div className="content-inner">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-desc">{product.desc}</p>
                  
                  <ul className="product-benefits">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="benefit-item">
                        <Check size={12} className="benefit-icon" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        {PRODUCTS.length > 4 && (
          <div className="show-more-container">
            <button 
              className="show-more-button"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <>
                  <span>Zwiń produkty</span>
                  <ChevronUp size={20} />
                </>
              ) : (
                <>
                  <span>Zobacz wszystkie produkty</span>
                  <ChevronDown size={20} />
                </>
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}