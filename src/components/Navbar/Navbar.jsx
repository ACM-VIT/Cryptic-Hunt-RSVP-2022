import { useRef } from "react";
import crypticHuntLogo from "../../assets/logo.png";
import { signOut } from "firebase/auth";
import "./Navbar.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const menuRef = useRef();
  const burgerRef = useRef();
  const handleClick = (event) => {
    menuRef.current.classList.toggle("active");
    burgerRef.current.classList.toggle("is-active");
  };
  const [user] = useAuthState(auth);
  return (
    <nav className="navbar">
      <a href="/">
        <div className="logo">
          <img src={crypticHuntLogo} alt="Logo" className="cryptic-hunt-logo" />
          <h1 className="heading-logo">Cryptic Hunt</h1>
        </div>
      </a>
      {window.location.pathname === "/" ? (
        <>
          <div className="burger__menu" ref={burgerRef} onClick={handleClick}>
            <div className="burger__line"></div>
            <div className="burger__line"></div>
            <div className="burger__line"></div>
          </div>
          <ul className="nav__menu" ref={menuRef}>
            <li>
              <a href="#About" className="nav__links" onClick={handleClick}>
                About
              </a>
            </li>
            <li>
              <a href="#CheckIn" className="nav__links" onClick={handleClick}>
                Check In
              </a>
            </li>
            <li>
              <a href="#Faq" className="nav__links" onClick={handleClick}>
                FAQ
              </a>
            </li>
            {user ? (
              <li>
                <a
                  onClick={async () => {
                    await signOut(auth);
                    navigate(`/`);
                  }}
                  className="nav__links"
                >
                  {`Logout`}
                </a>
              </li>
            ) : null}
          </ul>
        </>
      ) : (
        <>
          {user ? (
            <button
              onClick={async () => {
                await signOut(auth);
                navigate(`/`);
              }}
              className="logout"
            >
              {`Logout`}
            </button>
          ) : null}
        </>
      )}
    </nav>
  );
};

export default Navbar;
