import "../App.css"
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

function Header() {
  return (
    <div className="header-container">
        {/*<img className="header-logo" src={Logo} alt="IronHide Supplies logo" />*/}
        
         <div className="header-imgPlaceholder" />

        <div className="header-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
        </div>
    </div>
  )
}

export default Header;
