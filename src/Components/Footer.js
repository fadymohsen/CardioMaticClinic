import React from "react";
import "../Styles/Footer.css";
import cardiomaticLogo from "../Assets/mainLogo.png";
function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1 flex justify-center items-center">
            <img
              src={cardiomaticLogo}
              alt="CardioMatic Logo"
              className="w-10 h-10 inline-block mr-2"
            />
            <p className="ft-title">CardioMatic</p>
          </div>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Quick Links</p>
          <ul className="ft-list-items">
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
          </ul>
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Talk To Us</p>
          <ul className="ft-list-items">
            <li>
              <a href="mailto:support@healthplus.com">
                Cairo Uni, Faculty of Engineering
              </a>
            </li>

            <li>
              <a href="tel:+022 5454 5252">+20 1211235578</a>
            </li>
            <li>
              <a href="tel:+022 2326 6232">cardiomatic.info@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
