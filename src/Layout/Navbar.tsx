import logo from "../assets/agronix_logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="/" className="brand-link">
            <img src={logo} alt="Agronix Logo" className="brand-logo" />
          </a>
        </div>
      </div>
    </nav>
  );
}