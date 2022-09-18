import { useRef } from "react";
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
      <div className="logo">
        <h1 className="heading-logo">Cryptic Hunt</h1>
      </div>
      <div className="burger__menu" ref={burgerRef} onClick={handleClick}>
        <div className="burger__line"></div>
        <div className="burger__line"></div>
        <div className="burger__line"></div>
      </div>
      <ul className="nav__menu" ref={menuRef}>
        <li>
          <a href="#Home" className="nav__links">
            Home
          </a>
        </li>
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
      </ul>
    </nav>
  );
};

export default Navbar;
