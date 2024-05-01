import React, { useState, useEffect } from "react";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./Navbar";

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const [patientName, setPatientName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [patientGender, setPatientGender] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [preferredMode, setPreferredMode] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!patientName.trim()) {
      errors.patientName = "Patient name is required";
    } else if (patientName.trim().length < 8) {
      errors.patientName = "Patient name must be at least 8 characters";
    }

    if (!patientNumber.trim()) {
      errors.patientNumber = "Patient phone number is required";
    } else if (patientNumber.trim().length !== 10) {
      errors.patientNumber = "Patient phone number must be of 10 digits";
    }

    if (patientGender === "default") {
      errors.patientGender = "Please select patient gender";
    }
    if (!appointmentTime) {
      errors.appointmentTime = "Appointment time is required";
    } else {
      const selectedTime = new Date(appointmentTime).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.appointmentTime = "Please select a future appointment time";
      }
    }
    if (preferredMode === "default") {
      errors.preferredMode = "Please select preferred mode";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form fields and errors after successful submission
    setPatientName("");
    setPatientNumber("");
    setPatientGender("default");
    setAppointmentTime("");
    setPreferredMode("default");
    setFormErrors({});

    toast.success("Appointment Scheduled !", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="appointment-form-section">
      <Navbar></Navbar>

      <div className="flex justify-center align-middle">
        <div className="form-container w-5/12 ">
          <h2 className="form-title">
            <span>Book Appointment</span>
          </h2>

          <form className="form-content" onSubmit={handleSubmit}>
            <label>
              Patient Full Name:
              <input
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                required
              />
              {formErrors.patientName && (
                <p className="error-message">{formErrors.patientName}</p>
              )}
            </label>

            <br />
            <label>
              Patient Phone Number:
              <input
                type="text"
                value={patientNumber}
                onChange={(e) => setPatientNumber(e.target.value)}
                required
              />
              {formErrors.patientNumber && (
                <p className="error-message">{formErrors.patientNumber}</p>
              )}
            </label>

            <br />
            <label>
              Patient Gender:
              <select
                value={patientGender}
                onChange={(e) => setPatientGender(e.target.value)}
                required
              >
                <option value="default">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="private">I will inform Doctor only</option>
              </select>
              {formErrors.patientGender && (
                <p className="error-message">{formErrors.patientGender}</p>
              )}
            </label>

            <br />
            <label>
              Preferred Appointment Time:
              <input
                type="datetime-local"
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.target.value)}
                required
              />
              {formErrors.appointmentTime && (
                <p className="error-message">{formErrors.appointmentTime}</p>
              )}
            </label>

            <br />
            <div className="flex justify-center">
              <button type="submit" className="text-appointment-btn font-bold">
                Confirm Appointment
              </button>
            </div>

            <p
              className="success-message"
              style={{ display: isSubmitted ? "block" : "none" }}
            >
              Appointment details has been sent to the patients phone number via
              SMS.
            </p>
          </form>
        </div>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
