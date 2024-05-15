import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
    <div className="appointment-form-section flex mt-20 justify-center ">
      <div className="form-container w-5/12 p-8 border border-gray-300 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Book Appointment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                id="fullName"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  formErrors.fullName ? "border-red-500" : ""
                }`}
                placeholder=" "
                required
              />
              <label
                htmlFor="fullName"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Full Name
              </label>
              {formErrors.fullName && (
                <p className="error-message">{formErrors.fullName}</p>
              )}
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  formErrors.email ? "border-red-500" : ""
                }`}
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email Address
              </label>
              {formErrors.email && (
                <p className="error-message">{formErrors.email}</p>
              )}
            </div>
          </div>
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
