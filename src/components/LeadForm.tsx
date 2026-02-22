import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AlertTriangle, Send, ChevronDown } from "lucide-react";
import emailjs from "@emailjs/browser";
import "./LeadForm.css";

const PRODUCTS = [
  { name: "Sól potasowa 60%", image: "https://nodral.com/upload/iblock/5a6/v4d1mzuajfmwm31icvtj2aeq3bcowx9r.webp" },
  { name: "Korn-KALI K+S", image: "https://sklepfarmera.pl/media/catalog/product/1/1/119160.jpg?width=454&height=454&store=farmer_pl&image-type=image" },
  { name: "Mocznik granula N46", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhMp7TiFMPMvg5MQ6GkoEAFKEYmn2HKB1DDQ&s" },
  { name: "Mocznik Prill N46", image: "https://api.eagro.pl/api/products/88/thumbnail/56" },
  { name: "Saletra 34,4%", image: "https://www.agrospec.pl/img/6026/6026.jpg" },
  { name: "Fosforan Amonu (10-46)", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtsAL1eRiVsfaT3-fNrWHqUmLHwOdCjTBlTA&s" },
  { name: "DAP 18-46", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeA8OWCN5YUmGz6vTOja6BO3dP0wD3sXOMYA&s" },
  { 
    name: "Salmiak N 24%", 
    image: "https://thumbs.img-sprzedajemy.pl/350x250c/78/ef/73/mocznik-46-nawoz-azotowy-569285443.jpg" 
  },
  { 
    name: "Saletrosan 26", 
    image: "https://thumbs.img-sprzedajemy.pl/350x250c/78/ef/73/mocznik-46-nawoz-azotowy-569285443.jpg" 
  },
  { 
    name: "Siarczan amonu", 
    image: "https://thumbs.img-sprzedajemy.pl/350x250c/78/ef/73/mocznik-46-nawoz-azotowy-569285443.jpg" 
  },
  { 
    name: "Siarczan magnezu", 
    image: "https://thumbs.img-sprzedajemy.pl/350x250c/78/ef/73/mocznik-46-nawoz-azotowy-569285443.jpg" 
  },
  { 
    name: "RSM 32%", 
    image: "https://thumbs.img-sprzedajemy.pl/350x250c/78/ef/73/mocznik-46-nawoz-azotowy-569285443.jpg" 
  },
  { 
    name: "Kreda granulowana", 
    image: "https://thumbs.img-sprzedajemy.pl/350x250c/78/ef/73/mocznik-46-nawoz-azotowy-569285443.jpg" 
  },
  { 
    name: "NS 33-12", 
    image: "https://thumbs.img-sprzedajemy.pl/350x250c/78/ef/73/mocznik-46-nawoz-azotowy-569285443.jpg" 
  },
  { 
    name: "Rotogran 7-20-30", 
    image: "https://thumbs.img-sprzedajemy.pl/350x250c/78/ef/73/mocznik-46-nawoz-azotowy-569285443.jpg" 
  },
  { 
    name: "NPK 5-15-30", 
    image: "https://thumbs.img-sprzedajemy.pl/350x250c/78/ef/73/mocznik-46-nawoz-azotowy-569285443.jpg" 
  },
  { 
    name: "NPK (S) 6-20-30 (5)", 
    image: "https://thumbs.img-sprzedajemy.pl/350x250c/78/ef/73/mocznik-46-nawoz-azotowy-569285443.jpg" 
  },
  { 
    name: "NPK 7-19-29+1S", 
    image: "https://thumbs.img-sprzedajemy.pl/350x250c/78/ef/73/mocznik-46-nawoz-azotowy-569285443.jpg" 
  },
  { 
    name: "NPK (S) 8-20-30", 
    image: "https://thumbs.img-sprzedajemy.pl/350x250c/78/ef/73/mocznik-46-nawoz-azotowy-569285443.jpg" 
  },
  { 
    name: "NPK 15-15-15", 
    image: "https://thumbs.img-sprzedajemy.pl/350x250c/78/ef/73/mocznik-46-nawoz-azotowy-569285443.jpg" 
  },
  { 
    name: "NPK 10-26-26", 
    image: "https://thumbs.img-sprzedajemy.pl/350x250c/78/ef/73/mocznik-46-nawoz-azotowy-569285443.jpg" 
  },
  { 
    name: "Inny nawóz", 
    image: "https://thumbs.img-sprzedajemy.pl/350x250c/78/ef/73/mocznik-46-nawoz-azotowy-569285443.jpg" 
  }
];

const VOIVODESHIPS = [
  "Dolnośląskie", "Kujawsko-pomorskie", "Lubelskie", "Lubuskie",
  "Łódzkie", "Małopolskie", "Mazowieckie", "Opolskie",
  "Podkarpackie", "Podlaskie", "Pomorskie", "Śląskie",
  "Świętokrzyskie", "Warmińsko-mazurskie", "Wielkopolskie", "Zachodniopomorskie"
];

const DELIVERY_OPTIONS = ["1-2 dni", "7 dni", "14 dni", "Inny termin"];

type DropdownType = "product" | "voivodeship" | "delivery" | null;

export default function LeadForm() {
  const navigate = useNavigate();
  
  // Refs для обработки клика вне элемента
  const productRef = useRef<HTMLDivElement>(null);
  const voivodeshipRef = useRef<HTMLDivElement>(null);
  const deliveryRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Единое состояние для управления тем, какой список сейчас открыт
  const [openDropdown, setOpenDropdown] = useState<DropdownType>(null);
  
  const [formData, setFormData] = useState({
    product: "",
    customProduct: "",
    voivodeship: "",
    deliveryDate: "",
    customDeliveryDate: "", // Новое поле для ввода своего термина
    phone: "",
    rodo: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Обработка клика вне выпадающих списков
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown === "product" && productRef.current && !productRef.current.contains(event.target as Node)) setOpenDropdown(null);
      if (openDropdown === "voivodeship" && voivodeshipRef.current && !voivodeshipRef.current.contains(event.target as Node)) setOpenDropdown(null);
      if (openDropdown === "delivery" && deliveryRef.current && !deliveryRef.current.contains(event.target as Node)) setOpenDropdown(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  const toggleDropdown = (dropdownName: DropdownType) => {
    setOpenDropdown(prev => prev === dropdownName ? null : dropdownName);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    // Валидация продукта
    if (!formData.product) {
      newErrors.product = "Proszę wybrać produkt";
    } else if (formData.product === "Inny nawóz" && !formData.customProduct.trim()) {
      newErrors.customProduct = "Proszę wpisać nazwę nawozu";
    }

    // Валидация воеводства
    if (!formData.voivodeship) newErrors.voivodeship = "Proszę wybrać województwo";

    // Валидация термина доставки
    if (!formData.deliveryDate) {
      newErrors.deliveryDate = "Proszę wybrać termin dostawy";
    } else if (formData.deliveryDate === "Inny termin" && !formData.customDeliveryDate.trim()) {
      newErrors.customDeliveryDate = "Proszę podać preferowany termin";
    }

    // Валидация телефона
    const phoneRegex = /^[0-9\+\-\s]{9,15}$/;
    if (!formData.phone) {
      newErrors.phone = "Proszę podać numer telefonu";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Niepoprawny format numeru";
    }

    // Валидация RODO
    if (!formData.rodo) newErrors.rodo = "Zgoda jest wymagana";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    
    if (!validate()) return;

    setIsSubmitting(true);

    // Подготовка финальных значений для отправки
    const finalProductName = formData.product === "Inny nawóz" ? formData.customProduct : formData.product;
    const finalDeliveryDate = formData.deliveryDate === "Inny termin" ? formData.customDeliveryDate : formData.deliveryDate;

    const hiddenProductInput = document.querySelector('input[name="product_final"]') as HTMLInputElement;
    if (hiddenProductInput) hiddenProductInput.value = finalProductName;

    const hiddenDeliveryInput = document.querySelector('input[name="delivery_date_final"]') as HTMLInputElement;
    if (hiddenDeliveryInput) hiddenDeliveryInput.value = finalDeliveryDate;

    if (formRef.current) {
      emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        navigate("/thank-you");
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setSubmitError("Wystąpił błąd. Spróbuj ponownie lub zadzwoń.");
        setIsSubmitting(false);
      });
    }
  };

  const selectedProduct = PRODUCTS.find(p => p.name === formData.product);

  return (
    <div className="lead-form-wrapper">
      <div className="warning-box">
        <AlertTriangle className="warning-icon" />
        <p className="warning-text">
          Sprzedaż tylko całosamochodowa (24 t)
        </p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="lead-form" name="contact-form">

        {/* 1. PRODUCT DROPDOWN */}
        <div className="form-group">
          <label className="form-label">Produkt</label>
          <div className={`custom-select ${errors.product ? "input-error" : ""}`} ref={productRef}>
            <div className="select-trigger" onClick={() => toggleDropdown("product")}>
              {selectedProduct ? (
                <div className="selected-option">
                  <img src={selectedProduct.image} alt="" />
                  <span>{selectedProduct.name}</span>
                </div>
              ) : (
                <span className="placeholder">Wybierz produkt...</span>
              )}
              <ChevronDown size={18} />
            </div>

            {openDropdown === "product" && (
              <div className="select-dropdown">
                {PRODUCTS.map(product => (
                  <div
                    key={product.name}
                    className="select-option"
                    onClick={() => {
                      setFormData({ ...formData, product: product.name });
                      if (product.name !== "Inny nawóz") {
                         setFormData(prev => ({...prev, customProduct: ""}));
                      }
                      setOpenDropdown(null);
                    }}
                  >
                    <img src={product.image} alt="" />
                    <span>{product.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          {errors.product && <p className="error-message">{errors.product}</p>}
          
          {formData.product === "Inny nawóz" && (
            <div style={{ marginTop: '10px' }}>
              <input
                type="text"
                placeholder="Wpisz nazwę nawozu..."
                className={`form-input ${errors.customProduct ? 'input-error' : ''}`}
                value={formData.customProduct}
                onChange={(e) => setFormData({...formData, customProduct: e.target.value})}
              />
              {errors.customProduct && <p className="error-message">{errors.customProduct}</p>}
            </div>
          )}
          <input type="hidden" name="product_final" value="" />
        </div>

        {/* 2. VOIVODESHIP DROPDOWN */}
        <div className="form-group">
          <label className="form-label">Województwo</label>
          <div className={`custom-select ${errors.voivodeship ? "input-error" : ""}`} ref={voivodeshipRef}>
            <div className="select-trigger" onClick={() => toggleDropdown("voivodeship")}>
              {formData.voivodeship ? (
                <div className="selected-option text-only">
                  <span>{formData.voivodeship}</span>
                </div>
              ) : (
                <span className="placeholder">Wybierz województwo...</span>
              )}
              <ChevronDown size={18} />
            </div>

            {openDropdown === "voivodeship" && (
              <div className="select-dropdown">
                {VOIVODESHIPS.map(v => (
                  <div
                    key={v}
                    className="select-option text-only"
                    onClick={() => {
                      setFormData({ ...formData, voivodeship: v });
                      setOpenDropdown(null);
                    }}
                  >
                    <span>{v}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          {errors.voivodeship && <p className="error-message">{errors.voivodeship}</p>}
          <input type="hidden" name="voivodeship" value={formData.voivodeship} />
        </div>

        {/* 3. DELIVERY DATE DROPDOWN */}
        <div className="form-group">
          <label className="form-label">Preferowany termin dostawy</label>
          <div className={`custom-select ${errors.deliveryDate ? "input-error" : ""}`} ref={deliveryRef}>
            <div className="select-trigger" onClick={() => toggleDropdown("delivery")}>
              {formData.deliveryDate ? (
                <div className="selected-option text-only">
                  <span>{formData.deliveryDate}</span>
                </div>
              ) : (
                <span className="placeholder">Wybierz termin...</span>
              )}
              <ChevronDown size={18} />
            </div>

            {openDropdown === "delivery" && (
              <div className="select-dropdown">
                {DELIVERY_OPTIONS.map(option => (
                  <div
                    key={option}
                    className="select-option text-only"
                    onClick={() => {
                      setFormData({ ...formData, deliveryDate: option });
                      if (option !== "Inny termin") {
                        setFormData(prev => ({...prev, customDeliveryDate: ""}));
                      }
                      setOpenDropdown(null);
                    }}
                  >
                    <span>{option}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          {errors.deliveryDate && <p className="error-message">{errors.deliveryDate}</p>}

          {formData.deliveryDate === "Inny termin" && (
            <div style={{ marginTop: '10px' }}>
              <input
                type="text"
                placeholder="np. do końca miesiąca"
                className={`form-input ${errors.customDeliveryDate ? 'input-error' : ''}`}
                value={formData.customDeliveryDate}
                onChange={(e) => setFormData({...formData, customDeliveryDate: e.target.value})}
              />
              {errors.customDeliveryDate && <p className="error-message">{errors.customDeliveryDate}</p>}
            </div>
          )}
          <input type="hidden" name="delivery_date_final" value="" />
        </div>

        {/* PHONE */}
        <div className="form-group">
          <label className="form-label">Telefon kontaktowy</label>
          <input
            type="tel"
            name="phone"
            placeholder="+48 ___ ___ ___"
            className={`form-input ${errors.phone ? 'input-error' : ''}`}
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          {errors.phone && <p className="error-message">{errors.phone}</p>}
        </div>

        {/* RODO */}
        <div className="form-group rodo-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="rodo"
              className="checkbox-input"
              checked={formData.rodo}
              onChange={(e) => setFormData({...formData, rodo: e.target.checked})}
            />
            <span className="checkbox-text">
              Wyrażam zgodę na przetwarzanie danych osobowych.
            </span>
          </label>
          {errors.rodo && <p className="error-message">{errors.rodo}</p>}
        </div>

        {submitError && (
          <div className="error-message" style={{ textAlign: 'center', marginBottom: '16px' }}>
            {submitError}
          </div>
        )}

        <button 
          type="submit" 
          className="submit-button" 
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="spinner"></span>
              Wysyłanie...
            </>
          ) : (
            <>
              <Send size={18} />
              Otrzymaj wycenę
            </>
          )}
        </button>
      </form>
    </div>
  );
}