import { NavLink } from "react-router-dom";

function Footer() {
  return(
    <footer className="footer-container">
      <nav className="footer-links" aria-label="Footer navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </nav>

      <div className="footer-copywrite">
        <p>&copy; {new Date().getFullYear()} IronHide Supplies Co. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
