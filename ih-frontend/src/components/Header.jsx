import "../App.css"
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";

function Header({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="header-container">
      <NavLink to="/" className="header-brand" aria-label="Go to home page">
        <img className="header-logo" src={Logo} alt="IronHide Supplies logo" />
      </NavLink>

      <nav
        id="primary-navigation"
        className={`header-links ${menuOpen ? "is-open" : ""}`}
        aria-label="Primary navigation"
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </nav>

      <div className="header-actions">
        <button
          type="button"
          className={`header-menuButton ${menuOpen ? "is-open" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <NavLink to="/cart" className="header-cartLink" aria-label="Open cart">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M3 4h2l2.2 10.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.8L20 7H7"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="10" cy="19" r="1.4" fill="currentColor" />
            <circle cx="17" cy="19" r="1.4" fill="currentColor" />
          </svg>
          {cartCount > 0 && <span className="header-cartBadge">{cartCount}</span>}
        </NavLink>
      </div>
    </header>
  )
}

export default Header;
