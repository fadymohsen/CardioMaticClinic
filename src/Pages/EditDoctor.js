import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function EditDoctor() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

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

    if (!age.trim()) {
      errors.age = "Age is required";
    }

    if (!gender.trim()) {
      errors.gender = "Gender is required";
    }

    if (!phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    } else if (isNaN(phoneNumber.trim())) {
      errors.phoneNumber = "Phone number must be a number";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form fields and errors after successful submission
    setFullName("");
    setAge("");
    setGender("");
    setEmail("");
    setPhoneNumber("");
    setFormErrors({});

    toast.success("Patient Information Updated!", {
      position: toast.POSITION.TOP_CENTER,
    });
    navigate("/ViewPatient");
  };

  return (
    <div className="edit-patient-form-section flex flex-col mt-20 items-center">
      <div className="form-container w-5/12 p-8 border border-gray-300 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Edit Doctor</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 md:gap-6">
            {/* Full Name */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                id="fullName"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  formErrors.fullName ? "border-red-500" : ""
                }`}
                placeholder=" "
                required
              />
              <label
                htmlFor="fullName"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600"
              >
                Full Name
              </label>
              {formErrors.fullName && (
                <p className="text-red-500 text-sm mt-2">{formErrors.fullName}</p>
              )}
            </div>
            {/* Age */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="date"
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                id="age"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  formErrors.age ? "border-red-500" : ""
                }`}
                placeholder=" "
                required
              />
              <label
                htmlFor="age"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600"
              >
                Age
              </label>
              {formErrors.age && (
                <p className="text-red-500 text-sm mt-2">{formErrors.age}</p>
              )}
            </div>
            {/* Gender */}
            <div className="relative z-0 w-full mb-5 group">
              <select
                id="gender"
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className={`bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 block w-full py-2.5 px-0 text-sm text-gray-900 ${
                  formErrors.gender ? "border-red-500" : ""
                }`}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <label
                htmlFor="gender"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600"
              >
                Gender
              </label>
              {formErrors.gender && (
                <p className="text-red-500 text-sm mt-2">{formErrors.gender}</p>
              )}
            </div>
            {/* Email */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  formErrors.email ? "border-red-500" : ""
                }`}
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600"
              >
                Email Address
              </label>
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-2">{formErrors.email}</p>
              )}
            </div>
            {/* Phone Number */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="tel"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                id="phoneNumber"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  formErrors.phoneNumber ? "border-red-500" : ""
                }`}
                placeholder=" "
                required
              />
              <label
                htmlFor="phoneNumber"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600"
              >
                Phone Number
              </label>
              {formErrors.phoneNumber && (
                <p className="text-red-500 text-sm mt-2">{formErrors.phoneNumber}</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}
