import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function EditPatient() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [visitDate, setVisitDate] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [medicine, setMedicine] = useState("");
  const [dosage, setDosage] = useState("");
  const [frequency, setFrequency] = useState("");
  const [tests, setTests] = useState("");
  const [treatment, setTreatment] = useState("");
  const [medicalHistory, setMedicalHistory] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

    // Add validation for other fields
    // Age validation
    if (!age.trim()) {
      errors.age = "Age is required";
    }

    // Gender validation
    if (!gender.trim()) {
      errors.gender = "Gender is required";
    }

    // Mobile validation
    if (!mobile.trim()) {
      errors.mobile = "Mobile is required";
    } else if (isNaN(mobile.trim())) {
      errors.mobile = "Mobile must be a number";
    }

    // Visit date validation
    if (!visitDate.trim()) {
      errors.visitDate = "Visit date is required";
    }

    // Diagnosis validation
    if (!diagnosis.trim()) {
      errors.diagnosis = "Diagnosis is required";
    }

    // Medicine validation
    if (!medicine.trim()) {
      errors.medicine = "Medicine is required";
    }

    // Dosage validation
    if (!dosage.trim()) {
      errors.dosage = "Dosage is required";
    }

    // Frequency validation
    if (!frequency.trim()) {
      errors.frequency = "Frequency is required";
    }

    // Tests validation
    if (!tests.trim()) {
      errors.tests = "Tests are required";
    }

    // Treatment validation
    if (!treatment.trim()) {
      errors.treatment = "Treatment is required";
    }

    // Medical history validation
    if (!medicalHistory.trim()) {
      errors.medicalHistory = "Medical history is required";
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
    setMobile("");
    setVisitDate("");
    setDiagnosis("");
    setMedicine("");
    setDosage("");
    setFrequency("");
    setTests("");
    setTreatment("");
    setMedicalHistory("");
    setError("");
    setLoading(false);
    setFormErrors({});

    toast.success("Appointment Scheduled!", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
    navigate("/ViewPatient");
  };

  return (
    <div className="appointment-form-section flex flex-col mt-20 items-center ">
      <div className="form-container w-5/12 p-8 border border-gray-300 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Edit Patient</h2>
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
            {/* Age */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="date"
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                id="age"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  formErrors.age ? "border-red-500" : ""
                }`}
                placeholder=" "
                required
              />
              <label
                htmlFor="age"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Age
              </label>
              {formErrors.age && (
                <p className="error-message">{formErrors.age}</p>
              )}
            </div>
            {/* Gender */}
            <div className="relative z-0 w-full mb-5 group">
              <select
                id="gender"
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className={`bg-transparent border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 block w-full py-2.5 px-0 text-sm text-gray-900 dark:text-white dark:bg-transparent ${
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
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Gender
              </label>
              {formErrors.gender && (
                <p className="error-message">{formErrors.gender}</p>
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
            {/* Mobile */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="tel"
                name="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                id="mobile"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  formErrors.mobile ? "border-red-500" : ""
                }`}
                placeholder=" "
                required
              />
              <label
                htmlFor="mobile"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Mobile
              </label>
              {formErrors.mobile && (
                <p className="error-message">{formErrors.mobile}</p>
              )}
            </div>
            {/* Visit Date */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="date"
                name="visitDate"
                value={visitDate}
                onChange={(e) => setVisitDate(e.target.value)}
                id="visitDate"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  formErrors.visitDate ? "border-red-500" : ""
                }`}
                placeholder=" "
                required
              />
              <label
                htmlFor="visitDate"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Visit Date
              </label>
              {formErrors.visitDate && (
                <p className="error-message">{formErrors.visitDate}</p>
              )}
            </div>
            {/* Diagnosis */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="diagnosis"
                value={diagnosis}
                onChange={(e) => setDiagnosis(e.target.value)}
                id="diagnosis"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  formErrors.diagnosis ? "border-red-500" : ""
                }`}
                placeholder=" "
                required
              />
              <label
                htmlFor="diagnosis"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Diagnosis
              </label>
              {formErrors.diagnosis && (
                <p className="error-message">{formErrors.diagnosis}</p>
              )}
            </div>
            {/* Medicine */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="medicine"
                value={medicine}
                onChange={(e) => setMedicine(e.target.value)}
                id="medicine"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  formErrors.medicine ? "border-red-500" : ""
                }`}
                placeholder=" "
                required
              />
              <label
                htmlFor="medicine"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Medicine
              </label>
              {formErrors.medicine && (
                <p className="error-message">{formErrors.medicine}</p>
              )}
            </div>
            {/* Dosage */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="dosage"
                value={dosage}
                onChange={(e) => setDosage(e.target.value)}
                id="dosage"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  formErrors.dosage ? "border-red-500" : ""
                }`}
                placeholder=" "
                required
              />
              <label
                htmlFor="dosage"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Dosage
              </label>
              {formErrors.dosage && (
                <p className="error-message">{formErrors.dosage}</p>
              )}
            </div>
            {/* Frequency */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="frequency"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                id="frequency"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  formErrors.frequency ? "border-red-500" : ""
                }`}
                placeholder=" "
                required
              />
              <label
                htmlFor="frequency"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Frequency
              </label>
              {formErrors.frequency && (
                <p className="error-message">{formErrors.frequency}</p>
              )}
            </div>
            {/* Tests */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="tests"
                value={tests}
                onChange={(e) => setTests(e.target.value)}
                id="tests"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  formErrors.tests ? "border-red-500" : ""
                }`}
                placeholder=" "
                required
              />
              <label
                htmlFor="tests"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Tests
              </label>
              {formErrors.tests && (
                <p className="error-message">{formErrors.tests}</p>
              )}
            </div>
            {/* Treatment */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="treatment"
                value={treatment}
                onChange={(e) => setTreatment(e.target.value)}
                id="treatment"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  formErrors.treatment ? "border-red-500" : ""
                }`}
                placeholder=" "
                required
              />
              <label
                htmlFor="treatment"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Treatment
              </label>
              {formErrors.treatment && (
                <p className="error-message">{formErrors.treatment}</p>
              )}
            </div>
            {/* Medical History */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="medicalHistory"
                value={medicalHistory}
                onChange={(e) => setMedicalHistory(e.target.value)}
                id="medicalHistory"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  formErrors.medicalHistory ? "border-red-500" : ""
                }`}
                placeholder=" "
                required
              />
              <label
                htmlFor="medicalHistory"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Medical History
              </label>
              {formErrors.medicalHistory && (
                <p className="error-message">{formErrors.medicalHistory}</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}
