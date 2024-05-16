import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function EditPatient() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [treatment, setTreatment] = useState("");
  const [allergies, setAllergies] = useState("");
  const [smokingStatus, setSmokingStatus] = useState("");
  const [alcoholIntake, setAlcoholIntake] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!date.trim()) {
      errors.date = "Date is required";
    }

    if (!reason.trim()) {
      errors.reason = "Reason is required";
    }

    if (!diagnosis.trim()) {
      errors.diagnosis = "Diagnosis is required";
    }

    if (!treatment.trim()) {
      errors.treatment = "Treatment is required";
    }

    if (!allergies.trim()) {
      errors.allergies = "Allergies is required";
    }

    if (!smokingStatus.trim()) {
      errors.smokingStatus = "Smoking status is required";
    }

    if (!alcoholIntake.trim()) {
      errors.alcoholIntake = "Alcohol intake is required";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form fields and errors after successful submission
    setDate("");
    setReason("");
    setDiagnosis("");
    setTreatment("");
    setAllergies("");
    setSmokingStatus("");
    setAlcoholIntake("");
    setFormErrors({});

    toast.success("Patient Information Updated!", {
      position: toast.POSITION.TOP_CENTER,
    });
    navigate("/ViewPatient");
  };

  return (
    <div className="edit-patient-form-section flex flex-col mt-20 items-center">
      <div className="form-container w-5/12 p-8 border border-gray-300 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Edit Medical Record</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 md:gap-6">
            {/* Date */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                id="date"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  formErrors.date ? "border-red-500" : ""
                }`}
                placeholder=" "
                required
              />
              <label
                htmlFor="date"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600"
              >
                Date
              </label>
              {formErrors.date && (
                <p className="text-red-500 text-sm mt-2">{formErrors.date}</p>
              )}
            </div>
            {/* Reason */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                id="reason"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  formErrors.reason ? "border-red-500" : ""
                }`}
                placeholder=" "
                required
              />
              <label
                htmlFor="reason"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600"
              >
                Reason
              </label>
              {formErrors.reason && (
                <p className="text-red-500 text-sm mt-2">{formErrors.reason}</p>
              
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
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  formErrors.diagnosis ? "border-red-500" : ""
                }`}
                placeholder=" "
                required
              />
              <label
                htmlFor="diagnosis"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600"
              >
                Diagnosis
              </label>
              {formErrors.diagnosis && (
                <p className="text-red-500 text-sm mt-2">{formErrors.diagnosis}</p>
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
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  formErrors.treatment ? "border-red-500" : ""
                }`}
                placeholder=" "
                required
              />
              <label
                htmlFor="treatment"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600"
              >
                Treatment
              </label>
              {formErrors.treatment && (
                <p className="text-red-500 text-sm mt-2">{formErrors.treatment}</p>
              )}
            </div>
            {/* Allergies */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="allergies"
                value={allergies}
                onChange={(e) => setAllergies(e.target.value)}
                id="allergies"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  formErrors.allergies ? "border-red-500" : ""
                }`}
                placeholder=" "
                required
              />
              <label
                htmlFor="allergies"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600"
              >
                Allergies
              </label>
              {formErrors.allergies && (
                <p className="text-red-500 text-sm mt-2">{formErrors.allergies}</p>
              )}
            </div>
            {/* Smoking Status */}
            <div className="relative z-0 w-full mb-5 group">
              <select
                id="smokingStatus"
                name="smokingStatus"
                value={smokingStatus}
                onChange={(e) => setSmokingStatus(e.target.value)}
                className={`bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 block w-full py-2.5 px-0 text-sm text-gray-900 ${
                  formErrors.smokingStatus ? "border-red-500" : ""
                }`}
                required
              >
                <option value="">Select Smoking Status</option>
                <option value="smoker">Smoker</option>
                <option value="non-smoker">Non-Smoker</option>
              </select>
              <label
                htmlFor="smokingStatus"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600"
              >
                Smoking Status
              </label>
              {formErrors.smokingStatus && (
                <p className="text-red-500 text-sm mt-2">{formErrors.smokingStatus}</p>
              )}
            </div>
            {/* Alcohol Intake */}
            <div className="relative z-0 w-full mb-5 group">
              <select
                id="alcoholIntake"
                name="alcoholIntake"
                value={alcoholIntake}
                onChange={(e) => setAlcoholIntake(e.target.value)}
                className={`bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 block w-full py-2.5 px-0 text-sm text-gray-900 ${
                  formErrors.alcoholIntake ? "border-red-500" : ""
                }`}
                required
              >
                <option value="">Select Alcohol Intake</option>
                <option value="heavy">Heavy</option>
                <option value="moderate">Moderate</option>
                <option value="light">Light</option>
                <option value="none">None</option>
              </select>
              <label
                htmlFor="alcoholIntake"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600"
              >
                Alcohol Intake
              </label>
              {formErrors.alcoholIntake && (
                <p className="text-red-500 text-sm mt-2">{formErrors.alcoholIntake}</p>
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
