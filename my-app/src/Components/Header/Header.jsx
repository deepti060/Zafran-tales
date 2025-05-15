import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <div className="header">
      <Link to="/">
        <img src="/logo.png" alt="Logo" className="logo-img" />
      </Link>

      <div className="toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`nav ${menuOpen ? "open" : ""}`}>
        <Link to="/" className={isActive("/") ? "active" : ""} onClick={closeMenu}>
          Home
        </Link>
        <Link to="/about" className={isActive("/AboutUs") ? "active" : ""} onClick={closeMenu}>
          About
        </Link>

        <div className="dropdown">
          <Link
            to="/ZafranServices"
            className={isActive("/ZafranServices") ? "active" : ""}
            onClick={closeMenu}
          >
            Services
          </Link>
          <div className="dropdown-content">
            <Link to="/ZafranServices" onClick={closeMenu}>Zafran Services</Link>
          </div>
        </div>

        <Link to="/contact" className={isActive("/ContactUs") ? "active" : ""} onClick={closeMenu}>
          Contact
        </Link>
        <Link to="/career" className={isActive("/ContactUs") ? "active" : ""} onClick={closeMenu}>
          Career
        </Link>
      </div>
    </div>
  );
};

export default Header;
