import { useRef } from "react";
import "./Navbar.css";

const Navbar = () => {
  const menuRef = useRef();
  const headRef = useRef();
  const handleClick = (event) => {
    menuRef.current.classList.toggle("active");
    headRef.current.classList.toggle("heading-increase");
    console.log(menuRef.current);
  };
  return (
    <nav className="navbar">
      <div className="logo" ref={headRef}>
        logo
      </div>
      <div className="burger__menu" onClick={handleClick}>
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
