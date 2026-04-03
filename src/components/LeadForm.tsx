import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import { useNavigate } from "react-router-dom";
import { AlertTriangle, Send, ChevronDown, CheckSquare, Square, X } from "lucide-react";
import emailjs from "@emailjs/browser";
import "./LeadForm.css";
import RSM from "../assets/rsm32.png";

export interface LeadFormRef {
  highlightForm: () => void;
}

const NAWOZY = [
  { name: "Sól potasowa 60%", image: "https://nodral.com/upload/iblock/5a6/v4d1mzuajfmwm31icvtj2aeq3bcowx9r.webp" },
  { name: "Korn-KALI K+S", image: "https://sklepfarmera.pl/media/catalog/product/1/1/119160.jpg?width=454&height=454&store=farmer_pl&image-type=image" },
  { name: "Mocznik granula N46", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhMp7TiFMPMvg5MQ6GkoEAFKEYmn2HKB1DDQ&s" },
  { name: "Mocznik Prill N46", image: "https://i.ebayimg.com/thumbs/images/g/6AMAAOSwivhhpO2W/s-l500.jpg" },
  { name: "Saletra 34,4%", image: "https://www.agrospec.pl/img/6026/6026.jpg" },
  { name: "Fosforan Amonu (10-46)", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtsAL1eRiVsfaT3-fNrWHqUmLHwOdCjTBlTA&s" },
  { name: "DAP 18-46", image: "https://nodral.com/upload/iblock/d0b/xbkf5xb4narywbta932fk41hp9z6kte0.webp" },
  { name: "Salmiak N 24%", image: "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/467865541_8841558665891214_5239872888075804261_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=HIA39ILTbYMQ7kNvwGVi7oo&_nc_oc=AdnYbrbegvbQb9RC7Y0dBRsvVDmIKLY_y1xCIxAxUm4tGf47SWRfZXfeAOmi_-z3N9m0-_zR6wnklqhz7heYmPVw&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=hsSB5J_fZPmeY8z3YNHEig&oh=00_AfvpCat-Ki0LztsP0wUYIRZ-fT992B_8eBGx0nIr8EcHCA&oe=69A2726A" },
  { name: "Saletrosan 26", image: "https://terragrain.eu/wp-content/uploads/2018/11/saletrosan26-dywan90-1-zm.jpg" },
  { name: "Siarczan amonu", image: "https://sklep-galvet.pl/images/siarczan-21makro0.jpg" },
  { name: "Siarczan magnezu", image: "https://gemini.pl/poradnik/wp-content/uploads/2022/02/AdobeStock_204539681-784x441.jpeg" },
  { name: "RSM 32%", image: RSM },
  { name: "Kreda granulowana", image: "https://martus.com.pl/wp-content/uploads/2022/03/kreda-granulowana.jpg" },
  { name: "NS 33-12", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxhrAizJv6yTN4nRYJGMn2pkSt1I5nKhFGhw&s" },
  { name: "Rotogran 7-20-30", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuk8FbDBWl_hD405fpsmDuZJrvR3IyygRTog&s" },
  { name: "NPK 5-15-30", image: "https://static.wixstatic.com/media/9848f7_5b8b534205514f24a14e3d6421590a85~mv2.png/v1/fill/w_640,h_474,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9848f7_5b8b534205514f24a14e3d6421590a85~mv2.png" },
  { name: "NPK (S) 6-20-30 (5)", image: "https://www.zielonowogrodzie.pl/environment/cache/images/productGfx_13501_616_616/5dd7c615467b9701ad7ad3465b21.webp" },
  { name: "NPK 7-19-29+1S", image: "https://ireland.apollo.olxcdn.com/v1/files/458acudtp2ha3-PL/image;s=823x1097" },
  { name: "NPK (S) 8-20-30", image: "https://nodral.com/upload/iblock/fda/4wyd6mvqcfqo8bxl3rof5m8usoqx26i1.webp" },
  { name: "NPK 15-15-15", image: "https://nodral.com/upload/iblock/f30/qep2jbeh8b031mpbsgwq7fdr3mfct9bh.webp" },
  { name: "NPK 10-26-26", image: "https://djwagro.pl/wp-content/uploads/brizy/imgs/NPK-10-26-26-945x1260x0x422x945x289x1694440652.jpg" },
  { name: "Inny nawóz", image: "https://cdn-icons-png.flaticon.com/512/2740/2740648.png" }
];

const PASZE = [
  { name: "Śruta sojowa (HI PRO 46-48%) luzem", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhMp7TiFMPMvg5MQ6GkoEAFKEYmn2HKB1DDQ&s" },
  { name: "Śruta sojowa (HI PRO 46-48%) w big bagach", image: "https://sklepfarmera.pl/media/catalog/product/1/1/119160.jpg?width=454&height=454&store=farmer_pl&image-type=image" },
  { name: "Śruta słonecznikowa luzem", image: "https://nodral.com/upload/iblock/5a6/v4d1mzuajfmwm31icvtj2aeq3bcowx9r.webp" },
  { name: "Śruta słonecznikowa w big bagach", image: "https://www.agrospec.pl/img/6026/6026.jpg" },
  { name: "Śruta słonecznikowa granulowana", image: "https://terragrain.eu/wp-content/uploads/2018/11/saletrosan26-dywan90-1-zm.jpg" },
  { name: "Inna pasza", image: "https://cdn-icons-png.flaticon.com/512/2740/2740648.png" }
];

const ALL_PRODUCTS = [...NAWOZY, ...PASZE];

const VOIVODESHIPS = [
  "Dolnośląskie", "Kujawsko-pomorskie", "Lubelskie", "Lubuskie",
  "Łódzkie", "Małopolskie", "Mazowieckie", "Opolskie",
  "Podkarpackie", "Podlaskie", "Pomorskie", "Śląskie",
  "Świętokrzyskie", "Warmińsko-mazurskie", "Wielkopolskie", "Zachodniopomorskie"
];

const DELIVERY_OPTIONS = ["1-2 dni", "7 dni", "14 dni", "Inny termin"];

type DropdownType = "product" | "voivodeship" | "delivery" | null;

const LeadForm = forwardRef<LeadFormRef>((_props, ref) => {
  const navigate = useNavigate();
  
  const productRef = useRef<HTMLDivElement>(null);
  const voivodeshipRef = useRef<HTMLDivElement>(null);
  const deliveryRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [openDropdown, setOpenDropdown] = useState<DropdownType>(null);
  
  const [formData, setFormData] = useState({
    products: [] as string[],
    customFertilizer: "",
    customFeed: "",
    voivodeship: "",
    deliveryDate: "",
    customDeliveryDate: "",
    phone: "",
    rodo: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isHighlighted, setIsHighlighted] = useState(false);

  useImperativeHandle(ref, () => ({
    highlightForm: () => {
      setIsHighlighted(true);
      setTimeout(() => setIsHighlighted(false), 1000);
    }
  }));

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

  const toggleProduct = (productName: string) => {
    setFormData(prev => {
      const isSelected = prev.products.includes(productName);
      let newProducts;
      
      if (isSelected) {
        newProducts = prev.products.filter(p => p !== productName);
        if (productName === "Inny nawóz") prev.customFertilizer = "";
        if (productName === "Inna pasza") prev.customFeed = "";
      } else {
        newProducts = [...prev.products, productName];
      }
      
      return { ...prev, products: newProducts };
    });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (formData.products.length === 0) {
      newErrors.products = "Proszę wybrać co najmniej jeden produkt";
    } 
    
    if (formData.products.includes("Inny nawóz") && !formData.customFertilizer.trim()) {
      newErrors.customFertilizer = "Proszę wpisać nazwę nawozu";
    }
    
    if (formData.products.includes("Inna pasza") && !formData.customFeed.trim()) {
      newErrors.customFeed = "Proszę wpisać nazwę paszy";
    }

    if (!formData.voivodeship) newErrors.voivodeship = "Proszę wybrać województwo";

    if (!formData.deliveryDate) {
      newErrors.deliveryDate = "Proszę wybrać termin dostawy";
    } else if (formData.deliveryDate === "Inny termin" && !formData.customDeliveryDate.trim()) {
      newErrors.customDeliveryDate = "Proszę podać preferowany termin";
    }

    const phoneRegex = /^[0-9\+\-\s]{9,15}$/;
    if (!formData.phone) {
      newErrors.phone = "Proszę podać numer telefonu";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Niepoprawny format numeru";
    }

    if (!formData.rodo) newErrors.rodo = "Zgoda jest wymagana";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Текст теперь простой, так как товары видны ниже
  const getProductTriggerText = () => {
    if (formData.products.length === 0) {
      return <span className="placeholder">Wybierz produkty...</span>;
    }
    return <span className="selected-text" style={{fontWeight: 600}}>Dodaj więcej produktów...</span>;
  };

  const getFinalProductsString = () => {
    return formData.products.map(p => {
      if (p === "Inny nawóz") return `Inny nawóz: ${formData.customFertilizer}`;
      if (p === "Inna pasza") return `Inna pasza: ${formData.customFeed}`;
      return p;
    }).join("; ");
  };

  const finalDeliveryDate = formData.deliveryDate === "Inny termin" ? formData.customDeliveryDate : formData.deliveryDate;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    
    if (!validate()) return;

    setIsSubmitting(true);

    if (formRef.current) {
      emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        navigate("/thank-you", { 
          state: { 
            product: getFinalProductsString(), 
            voivodeship: formData.voivodeship, 
            delivery: finalDeliveryDate,
            phone: formData.phone 
          } 
        });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setSubmitError("Wystąpił błąd. Spróbuj ponownie lub zadzwoń.");
        setIsSubmitting(false);
      });
    }
  };

  return (
    <div 
      id="lead-form-section" 
      className={`lead-form-wrapper ${isHighlighted ? "form-highlighted" : ""}`}
    >
      <div className="warning-box">
        <AlertTriangle className="warning-icon" />
        <p className="warning-text">
          Sprzedaż tylko całosamochodowa (24 t)
        </p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="lead-form" name="contact-form">
        
        {/* 1. PRODUCT DROPDOWN (MULTI-SELECT) */}
        <div className="form-group">
          <label className="form-label">Produkty</label>
          <div className={`custom-select ${errors.products ? "input-error" : ""}`} ref={productRef}>
            <div className="select-trigger" onClick={() => toggleDropdown("product")}>
              {getProductTriggerText()}
              <ChevronDown size={18} />
            </div>

            {openDropdown === "product" && (
              <div className="select-dropdown">
                {/* NAWOZY */}
                <div className="dropdown-category-title">NAWOZY</div>
                {NAWOZY.map(product => {
                  const isSelected = formData.products.includes(product.name);
                  return (
                    <div
                      key={product.name}
                      className={`select-option multi-option ${isSelected ? 'selected' : ''}`}
                      onClick={() => toggleProduct(product.name)}
                    >
                      <div className="checkbox-icon">
                        {isSelected ? <CheckSquare size={18} color="#2E7D32" /> : <Square size={18} color="#9CA3AF" />}
                      </div>
                      <img src={product.image} alt="" />
                      <span>{product.name}</span>
                    </div>
                  );
                })}

                {/* PASZE */}
                <div className="dropdown-category-title">PASZE</div>
                {PASZE.map(product => {
                  const isSelected = formData.products.includes(product.name);
                  return (
                    <div
                      key={product.name}
                      className={`select-option multi-option ${isSelected ? 'selected' : ''}`}
                      onClick={() => toggleProduct(product.name)}
                    >
                      <div className="checkbox-icon">
                        {isSelected ? <CheckSquare size={18} color="#2E7D32" /> : <Square size={18} color="#9CA3AF" />}
                      </div>
                      <img src={product.image} alt="" />
                      <span>{product.name}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {errors.products && <p className="error-message">{errors.products}</p>}

          {/* ВЫВОД ВЫБРАННЫХ ТОВАРОВ ПОД ПОЛЕМ */}
          {formData.products.length > 0 && (
            <div className="selected-products-container">
              {formData.products.map(productName => {
                const prod = ALL_PRODUCTS.find(p => p.name === productName);
                return (
                  <div key={productName} className="selected-product-item">
                    <img src={prod?.image} alt={productName} />
                    <span className="selected-product-name">{productName}</span>
                    <button 
                      type="button" 
                      className="remove-product-btn" 
                      onClick={() => toggleProduct(productName)}
                      title="Usuń produkt"
                    >
                      <X size={16} />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
          
          {/* Кастомное поле для навоза */}
          {formData.products.includes("Inny nawóz") && (
            <div style={{ marginTop: '10px' }}>
              <input
                type="text"
                placeholder="Wpisz nazwę nawozu..."
                className={`form-input ${errors.customFertilizer ? 'input-error' : ''}`}
                value={formData.customFertilizer}
                onChange={(e) => setFormData({...formData, customFertilizer: e.target.value})}
              />
              {errors.customFertilizer && <p className="error-message">{errors.customFertilizer}</p>}
            </div>
          )}

          {/* Кастомное поле для корма */}
          {formData.products.includes("Inna pasza") && (
            <div style={{ marginTop: '10px' }}>
              <input
                type="text"
                placeholder="Wpisz nazwę paszy..."
                className={`form-input ${errors.customFeed ? 'input-error' : ''}`}
                value={formData.customFeed}
                onChange={(e) => setFormData({...formData, customFeed: e.target.value})}
              />
              {errors.customFeed && <p className="error-message">{errors.customFeed}</p>}
            </div>
          )}
          
          {/* Скрытый инпут для отправки */}
          <input type="hidden" name="product" value={getFinalProductsString()} />
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
          
          <input type="hidden" name="delivery_date" value={finalDeliveryDate} />
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
});

export default LeadForm;