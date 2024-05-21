import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [selectedSlot, setSelectedSlot] = useState("default");
  const [selectedDoctor, setSelectedDoctor] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (selectedSlot === "default") {
      errors.selectedSlot = "Please select an available slot";
    }

    if (selectedDoctor === "default") {
      errors.selectedDoctor = "Please select a doctor";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form fields and errors after successful submission
    setSelectedSlot("default");
    setSelectedDoctor("default");
    setFormErrors({});

    toast.success("Appointment Scheduled!", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="appointment-form-section flex mt-20 justify-center">
      <div className="form-container w-5/12 p-8 border border-gray-300 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Book Appointment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative z-0 w-full group">
            <label
              htmlFor="slots"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Available Slots
            </label>
            <select
              id="slots"
              value={selectedSlot}
              onChange={(e) => setSelectedSlot(e.target.value)}
              className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                formErrors.selectedSlot ? "border-red-500" : ""
              }`}
            >
              <option value="default">Select</option>
              <option value="19/5/2024">19/5/2024</option>
              <option value="20/5/2024">20/5/2024</option>
              <option value="21/5/2024">21/5/2024</option>
              <option value="22/5/2024">22/5/2024</option>
            </select>
            {formErrors.selectedSlot && (
              <p className="error-message">{formErrors.selectedSlot}</p>
            )}
          </div>
          <div className="relative z-0 w-full group">
            <label
              htmlFor="doctors"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select Doctor
            </label>
            <select
              id="doctors"
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                formErrors.selectedDoctor ? "border-red-500" : ""
              }`}
            >
              <option value="default">Select</option>
              <option value="Mohamed Sayed">Mohamed Sayed</option>
              <option value="Sondos Mahmoud">Sondos Mahmoud</option>
              <option value="Rana Mohamed">Rana Mohamed</option>
            </select>
            {formErrors.selectedDoctor && (
              <p className="error-message">{formErrors.selectedDoctor}</p>
            )}
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Book Appointment
          </button>
        </form>
      </div>
      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
         
    </div>
  );
}
