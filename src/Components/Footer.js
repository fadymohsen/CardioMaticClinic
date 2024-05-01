import React from "react";
import "../Styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">Pulse</p>
          </div>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Quick Links</p>
          <ul className="ft-list-items">
            <li>
              <Link to="/home" className="navbar-links">
                Home
              </Link>
            </li>
            <li>
              <Link to="/patient-record" className="navbar-links">
                Patient Record
              </Link>
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
