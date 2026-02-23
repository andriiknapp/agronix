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
    image: "https://i.ebayimg.com/thumbs/images/g/6AMAAOSwivhhpO2W/s-l500.jpg",
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
    image: "https://nodral.com/upload/iblock/d0b/xbkf5xb4narywbta932fk41hp9z6kte0.webp",
    desc: "Uniwersalny nawóz dwuskładnikowy o bardzo wysokiej zawartości fosforu.",
    benefits: ["Szybki start roślin", "Wysoka koncentracja", "Odporność na stres"]
  },
  {
    name: "Salmiak N 24%",
    image: "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/467865541_8841558665891214_5239872888075804261_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=HIA39ILTbYMQ7kNvwGVi7oo&_nc_oc=AdnYbrbegvbQb9RC7Y0dBRsvVDmIKLY_y1xCIxAxUm4tGf47SWRfZXfeAOmi_-z3N9m0-_zR6wnklqhz7heYmPVw&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=hsSB5J_fZPmeY8z3YNHEig&oh=00_AfvpCat-Ki0LztsP0wUYIRZ-fT992B_8eBGx0nIr8EcHCA&oe=69A2726A",
    desc: "Nawóz azotowy o działaniu zakwaszającym, doskonały na gleby zasadowe i obojętne.",
    benefits: ["Dobre zakorzenienie", "Zawiera siarkę", "Obniża pH gleby"]
  },
  {
    name: "Saletrosan 26",
    image: "https://terragrain.eu/wp-content/uploads/2018/11/saletrosan26-dywan90-1-zm.jpg",
    desc: "Azot z siarką w idealnych proporcjach, polecany pod rzepak i pszenicę ozimą.",
    benefits: ["Zwiększa plon białka", "Wspiera odporność", "Doskonały wiosną"]
  },
  {
    name: "Siarczan amonu",
    image: "https://sklep-galvet.pl/images/siarczan-21makro0.jpg",
    desc: "Nawóz dostarczający roślinom łatwo dostępny azot oraz dużo cennej siarki.",
    benefits: ["Poprawia jakość plonu", "Dobra rozpuszczalność", "Zakwasza glebę"]
  },
  {
    name: "Siarczan magnezu",
    image: "https://gemini.pl/poradnik/wp-content/uploads/2022/02/AdobeStock_204539681-784x441.jpeg",
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
    image: "https://martus.com.pl/wp-content/uploads/2022/03/kreda-granulowana.jpg",
    desc: "Naturalny nawóz wapniowy, skutecznie i bardzo szybko podnoszący pH gleby.",
    benefits: ["Szybka dekarbonizacja", "Poprawia strukturę", "Bezpieczna dla roślin"]
  },
  {
    name: "NS 33-12",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxhrAizJv6yTN4nRYJGMn2pkSt1I5nKhFGhw&s",
    desc: "Skuteczny nawóz azotowo-siarkowy, optymalny dla upraw wymagających dużo siarki.",
    benefits: ["Lepsze przyswajanie N", "Wysoki plon", "Doskonała rozpuszczalność"]
  },
  {
    name: "Rotogran 7-20-30",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuk8FbDBWl_hD405fpsmDuZJrvR3IyygRTog&s",
    desc: "Zbilansowany nawóz wieloskładnikowy, świetny do nawożenia przedsiewnego.",
    benefits: ["Równomierny rozwój", "Bogaty w P i K", "Wygodna granula"]
  },
  {
    name: "NPK 5-15-30",
    image: "https://static.wixstatic.com/media/9848f7_5b8b534205514f24a14e3d6421590a85~mv2.png/v1/fill/w_640,h_474,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9848f7_5b8b534205514f24a14e3d6421590a85~mv2.png",
    desc: "Klasyczny nawóz NPK z dużą dawką potasu, idealny pod uprawy okopowe.",
    benefits: ["Wspiera budowę plonu", "Zwiększa odporność", "Kompleksowy skład"]
  },
  {
    name: "NPK (S) 6-20-30 (5)",
    image: "https://www.zielonowogrodzie.pl/environment/cache/images/productGfx_13501_616_616/5dd7c615467b9701ad7ad3465b21.webp",
    desc: "Nawóz wzbogacony o siarkę, wspierający jakość plonów i lepsze pobieranie azotu.",
    benefits: ["Zwiększa plon białka", "Pełne odżywianie", "Uniwersalne zastosowanie"]
  },
  {
    name: "NPK 7-19-29+1S",
    image: "https://ireland.apollo.olxcdn.com/v1/files/458acudtp2ha3-PL/image;s=823x1097",
    desc: "Wieloskładnikowy nawóz o wysokiej zawartości potasu i fosforu na start dla roślin.",
    benefits: ["Optymalny start", "Zwiększa mrozoodporność", "Łatwy wysiew"]
  },
  {
    name: "NPK (S) 8-20-30",
    image: "https://nodral.com/upload/iblock/fda/4wyd6mvqcfqo8bxl3rof5m8usoqx26i1.webp",
    desc: "Skoncentrowany nawóz pod rośliny o najwyższych wymaganiach pokarmowych.",
    benefits: ["Wysoka wydajność", "Pełne pokrycie potrzeb", "Równomierna granula"]
  },
  {
    name: "NPK 15-15-15",
    image: "https://nodral.com/upload/iblock/f30/qep2jbeh8b031mpbsgwq7fdr3mfct9bh.webp",
    desc: "Uniwersalny nawóz o równych proporcjach głównych makroskładników (azot, fosfor, potas).",
    benefits: ["Harmonijny rozwój", "Bezpieczny dla gleby", "Wszechstronność"]
  },
  {
    name: "NPK 10-26-26",
    image: "https://djwagro.pl/wp-content/uploads/brizy/imgs/NPK-10-26-26-945x1260x0x422x945x289x1694440652.jpg",
    desc: "Nawóz z przewagą fosforu i potasu, doskonały do nawożenia jesiennego.",
    benefits: ["Buduje silny korzeń", "Przygotowuje do zimy", "Wysoka koncentracja"]
  },
  {
    name: "Inny nawóz",
    image: "https://cdn-icons-png.flaticon.com/512/2740/2740648.png",
    desc: "Oferujemy również inne specyficzne nawozy dopasowane do Twoich indywidualnych potrzeb.",
    benefits: ["Elastyczność", "Indywidualne podejście", "Dostępność na zapytanie"]
  }
];

export default function ProductSection({ onNavigateToForm }: { onNavigateToForm?: () => void }) {
  const [isExpanded, setIsExpanded] = useState(false);
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
          {displayedProducts.map((product, idx) => {
            // 1. Проверяем, является ли товар "Inny nawóz"
            const isOtherFertilizer = product.name === "Inny nawóz";
            
            return (
              <div 
                key={idx} 
                className={`product-card ${isOtherFertilizer ? 'clickable-card' : ''}`}
                // 2. Если это "Inny nawóz", добавляем обработчик клика
                onClick={isOtherFertilizer ? onNavigateToForm : undefined}
                data-testid={`card-product-${idx}`}
                style={isOtherFertilizer ? { cursor: 'pointer', transition: 'transform 0.2s' } : {}}
                onMouseEnter={isOtherFertilizer ? (e) => e.currentTarget.style.transform = 'translateY(-5px)' : undefined}
                onMouseLeave={isOtherFertilizer ? (e) => e.currentTarget.style.transform = 'translateY(0)' : undefined}
              >
                {/* Left Side */}
                <div className="card-image-wrapper">
                  <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
                  {/* Добавим визуальную подсказку, что это кнопка */}
                  {isOtherFertilizer && (
                    <div style={{
                      position: 'absolute', top: 10, right: 10, 
                      background: '#2E7D32', color: 'white', 
                      padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold'
                    }}>
                      Zamów
                    </div>
                  )}
                </div>

                {/* Right Side */}
                <div className="card-content">
                  {/* ... Emblem ... */}
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
            );
          })}
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