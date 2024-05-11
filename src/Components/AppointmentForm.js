import React, { useState, useEffect } from "react";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./Navbar";

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!fullName.trim()) {
      errors.fullName = "Full name is required";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email format";
    }

    if (selectedSlot === "default") {
      errors.selectedSlot = "Please select an available slot";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form fields and errors after successful submission
    setFullName("");
    setEmail("");
    setSelectedSlot("default");
    setFormErrors({});

    toast.success("Appointment Scheduled!", {
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
              Full Name:
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
              {formErrors.fullName && (
                <p className="error-message">{formErrors.fullName}</p>
              )}
            </label>

            <br />
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {formErrors.email && (
                <p className="error-message">{formErrors.email}</p>
              )}
            </label>

            <br />
            <label>
              Available Slots:
              <select
                value={selectedSlot}
                onChange={(e) => setSelectedSlot(e.target.value)}
                required
              >
                <option value="default">Select</option>
                
              </select>
              {formErrors.selectedSlot && (
                <p className="error-message">{formErrors.selectedSlot}</p>
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
              Appointment details have been sent to the patient's email.
            </p>
          </form>
        </div>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
