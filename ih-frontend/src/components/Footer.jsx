import { NavLink } from "react-router-dom";

function Footer() {
  return(
    <div className="footer-container">
      <div className="footer-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </div>

      <div className="footer-copywrite">
        <p> &copy; {new Date().getFullYear()} IronHide Supplies Co. </p>
      </div>
    </div>
  )
}

export default Footer;
