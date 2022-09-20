import { useRef } from "react";
import crypticHuntLogo from "../../assets/cryptic-logo.svg";
import "./Navbar.css";

const Navbar = () => {
  const menuRef = useRef();
  const burgerRef = useRef();
  const handleClick = (event) => {
    menuRef.current.classList.toggle("active");
    burgerRef.current.classList.toggle("is-active");
  };
  return (
    <nav className="navbar">
      <a href="#">
        <div className="logo">
          <img src={crypticHuntLogo} alt="Logo" className="cryptic-hunt-logo" />
          <h1 className="heading-logo">Cryptic Hunt</h1>
        </div>
      </a>
      <div className="burger__menu" ref={burgerRef} onClick={handleClick}>
        <div className="burger__line"></div>
        <div className="burger__line"></div>
        <div className="burger__line"></div>
      </div>
      <ul className="nav__menu" ref={menuRef}>
        <li>
          <a href="#About" className="nav__links">
            About
          </a>
        </li>
        <li>
          <a href="#Register" className="nav__links">
            Register
          </a>
        </li>
        <li>
          <a href="#Faq" className="nav__links">
            FAQ
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
