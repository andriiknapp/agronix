import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";
import "./App.css";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;