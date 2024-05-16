
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function EditPrescriptions() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [diseases, setDiseases] = useState("");
  const [medications, setMedications] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!id.trim()) {
      errors.id = "ID is required";
    }

    if (!title.trim()) {
      errors.title = "Title is required";
    }

    if (!date.trim()) {
      errors.date = "Date is required";
    }

    if (!createdBy.trim()) {
      errors.createdBy = "Created by is required";
    }

    if (!diseases.trim()) {
      errors.diseases = "Diseases are required";
    }

    if (!medications.trim()) {
      errors.medications = "Medications are required";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form fields and errors after successful submission
    setId("");
    setTitle("");
    setDate("");
    setCreatedBy("");
    setDiseases("");
    setMedications("");
    setFormErrors({});

    toast.success("Patient Information Updated!", {
      position: toast.POSITION.TOP_CENTER,
    });
    navigate("/ViewPatient");
  };

  return (
    <div className="edit-patient-form-section flex flex-col mt-20 items-center">
      <div className="form-container w-5/12 p-8 border border-gray-300 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Edit Prescription</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 md:gap-6">
            {/* ID */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="id"
                value={id}
                onChange={(e) => setId(e.target.value)}
                id="id"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  formErrors.id ? "border-red-500" : ""
                }`}
                placeholder=" "
                required
              />
              <label
                htmlFor="id"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600"
              >
                ID
              </label>
              {formErrors.id && (
                <p className="text-red-500 text-sm mt-2">{formErrors.id}</p>
              )}
            </div>
            {/* Title */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="title"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  formErrors.title ? "border-red-500" : ""
                }`}
                placeholder=" "
                required
              />
              <label
                htmlFor="title"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600"
              >
                Title
              </label>
              {formErrors.title && (
                <p className="text-red-500 text-sm mt-2">{formErrors.title}</p>
              )}
            </div>
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
            {/* Created By */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="createdBy"
                value={createdBy}
                onChange={(e) => setCreatedBy(e.target.value)}
                id="createdBy"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  formErrors.createdBy ? "border-red-500" : ""
                }`}
                placeholder=" "
                required
              />
              <label
                htmlFor="createdBy"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600"
              >
                Created By
              </label>
              {formErrors.createdBy && (
                <p className="text-red-500 text-sm mt-2">{formErrors.createdBy}</p>
              )}
            </div>
            {/* Diseases */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="diseases"
                value={diseases}
                onChange={(e) => setDiseases(e.target.value)}
                id="diseases"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  formErrors.diseases ? "border-red-500" : ""
                }`}
                placeholder=" "
                required
              />
              <label
                htmlFor="diseases"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600"
              >
                Diseases
              </label>
              {formErrors.diseases && (
                <p className="text-red-500 text-sm mt-2">{formErrors.diseases}</p>
              )}
            </div>
            {/* Medications */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="medications"
                value={medications}
                onChange={(e) => setMedications(e.target.value)}
                id="medications"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  formErrors.medications ? "border-red-500" : ""
                }`}
                placeholder=" "
                required
              />
              <label
                htmlFor="medications"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600"
              >
                Medications
              </label>
              {formErrors.medications && (
                <p className="text-red-500 text-sm mt-2">{formErrors.medications}</p>
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
