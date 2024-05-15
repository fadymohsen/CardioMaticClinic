import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const openNav = () => {
    setNav(!nav);
  };

  const handleButton = (role) => {
    if (role !== "") {
      switch (role) {
        case "admin":
          navigate("/Statistics");
          break;
        case "patient":
          navigate("/Records");
          break;
        case "doctor":
          navigate("/ViewPatient");
          break;
        default:
          break;
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="#home">Pulse</Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <a href="#home" className="navbar-links">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="navbar-links">
            About
          </a>
        </li>
        <li>
          <a href="#book_appoint" className="navbar-links">
            Why Choose Us
          </a>
        </li>
        <li>
          <a href="#reviews" className="navbar-links">
            Reviews
          </a>
        </li>
        <li>
          <a href="#doctors" className="navbar-links">
            Doctors
          </a>
        </li>
        <li>
          <a href="#contact" className="navbar-links">
            Contact
          </a>
        </li>

        <li>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={() => handleButton(localStorage.getItem("role"))}
          >
            {localStorage.getItem("role") === ""
              ? "Log in | Register"
              : "Dashboard"}
          </button>
        </li>
      </ul>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#reviews">
              Reviews
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#doctors">
              Doctors
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
