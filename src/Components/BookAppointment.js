import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/BookAppointment.css";
import DoctorImage from "../Assets/doctor-book-appointment.png"; // Import the image

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    if (role === "patient") {
      navigate("/BookAppointment");
    }
  };

  const role = localStorage.getItem("role");

  let isPatient = false;

  if (role === "patient") {
    isPatient = true;
  }

  return (
    <div className="ba-section" id="book_appoint">
      <div className="ba-image-content">
        <img src={DoctorImage} alt="Doctor Group" className="ba-image1" />
      </div>
      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose Us</span>
        </h3>
        <p className="ba-description">
          Choose CardioMatic Clinic for specialized care from experienced
          cardiologists, empathetic support every step of the way, personalized
          services to suit your needs, cutting-edge facilities for precise
          diagnostics and interventions, and a dedication to optimizing your
          health and happiness.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          Experience
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          Doctors
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          Quality Services
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          Positive Consultation
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          Detailed Reports
        </p>

        {isPatient && (
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
          </button>
        )}
      </div>
    </div>
  );
}

export default BookAppointment;
