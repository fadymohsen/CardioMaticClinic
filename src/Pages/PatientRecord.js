import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function PatientRecord() {
  const navigate = useNavigate();

  // State for search query
  const [searchQuery, setSearchQuery] = useState("");

  // State for records with diagnosis
  const [diagnosisRecords, setDiagnosisRecords] = useState([
    { id: 1, visitDate: "2024-05-15", diagnosis: "Fever" },
    { id: 2, visitDate: "2024-05-16", diagnosis: "Headache" },
    { id: 3, visitDate: "2024-05-17", diagnosis: "Stomachache" },
  ]);

  // State for records with medicine
  const [medicineRecords, setMedicineRecords] = useState([
    { id: 1, medicine: "Paracetamol", dosage: "500mg", frequencyPerDay: 3 },
    { id: 2, medicine: "Ibuprofen", dosage: "400mg", frequencyPerDay: 2 },
    { id: 3, medicine: "Omeprazole", dosage: "20mg", frequencyPerDay: 1 },
  ]);

  const [visits, setVisits] = useState([
    { id: 1, doctor: "Dr. Smith", date: "2024-05-15", time: "10:00 AM", visitType: "Checkup" },
    { id: 2, doctor: "Dr. Johnson", date: "2024-05-16", time: "11:30 AM", visitType: "Follow-up" },
    { id: 3, doctor: "Dr. Brown", date: "2024-05-17", time: "2:00 PM", visitType: "Consultation" },
  ]);

  const [testsAndTreatments, setTestsAndTreatments] = useState([
    { id: 1, visitDate: "2024-05-15", diagnoses: "Fever" },
    { id: 2, visitDate: "2024-05-16", diagnoses: "High Blood Pressure" },
    { id: 3, visitDate: "2024-05-17", diagnoses: "Stomach Ulcer" },
  ]);

  // Pagination state
  const [pageIndex, setPageIndex] = useState(0);
  const pageSize = 5;

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  // Function to filter patient records based on search query
  const filteredDiagnosisRecords = diagnosisRecords.filter(record =>
    record.diagnosis.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredMedicineRecords = medicineRecords.filter(record =>
    record.medicine.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredVisits = visits.filter(visit =>
    visit.doctor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTestsAndTreatments = testsAndTreatments.filter(item =>
    item.diagnoses.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Functions for pagination
  const totalPages = Math.ceil(filteredVisits.length / pageSize);

  const handlePreviousPage = () => {
    setPageIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const handleNextPage = () => {
    setPageIndex(prevIndex => Math.min(prevIndex + 1, totalPages - 1));
  };

  const handleAddMemberClick = () => {
    window.open("/add-member", "Add Member", "width=600,height=400");
  };

  return (
    <>
      <Navbar />
      <div className="overflow-x-auto mt-8" style={{ background: "linear-gradient(to right, #ECF2FF, #FBFCFF)", paddingBottom: "2rem" }}>
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search Patient..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Records with Diagnosis */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Records with Diagnosis</h3>
          <table className="min-w-full bg-white rounded-md overflow-hidden shadow-md">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold uppercase">Visit Date</th>
                <th className="px-4 py-2 text-left text-sm font-semibold uppercase">Diagnosis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredDiagnosisRecords.map((record) => (
                <tr key={record.id}>
                  <td className="px-4 py-2 whitespace-nowrap">{record.visitDate}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{record.diagnosis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Records with Medicine */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Records with Medicine</h3>
          <table className="min-w-full bg-white rounded-md overflow-hidden shadow-md">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold uppercase">Medicine</th>
                <th className="px-4 py-2 text-left text-sm font-semibold uppercase">Dosage</th>
                <th className="px-4 py-2 text-left text-sm font-semibold uppercase">Frequency per Day</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredMedicineRecords.map((record) => (
                <tr key={record.id}>
                  <td className="px-4 py-2 whitespace-nowrap">{record.medicine}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{record.dosage}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{record.frequencyPerDay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Visits Table */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Visits</h2>
          <table className="min-w-full bg-white rounded-md overflow-hidden shadow-md">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold uppercase">Doctor</th>
                <th className="px-4 py-2 text-left text-sm font-semibold uppercase">Date</th>
                <th className="px-4 py-2 text-left text-sm font-semibold uppercase">Time</th>
                <th className="px-4 py-2 text-left text-sm font-semibold uppercase">Visit Type</th>
                <th className="px-4 py-2 text-left text-sm font-semibold uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredVisits.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize).map((visit) => (
                <tr key={visit.id}>
                  <td className="px-4 py-2 whitespace-nowrap">{visit.doctor}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{visit.date}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{visit.time}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{visit.visitType}</td>
                  <td className="px-4 py-2 whitespace-nowrap"></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between mt-4">
            <button className="text-gray-500" onClick={handlePreviousPage} disabled={pageIndex === 0}>Previous</button>
            <button className="text-gray-500" onClick={handleNextPage} disabled={pageIndex === totalPages - 1}>Next</button>
          </div>
          <button className="text-appointment-btn" type="button" onClick={handleBookAppointmentClick}>
            <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
          </button>
          <button className="text-appointment-btn" type="button" onClick={handleAddMemberClick}>
            Add Member
          </button>
        </div>

        {/* Tests and Treatment Table */}
        <div style={{ marginBottom: "2rem" }}>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Tests and Treatment</h2>
          <table className="min-w-full bg-white rounded-md overflow-hidden shadow-md">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold uppercase">Visit Date</th>
                <th className="px-4 py-2 text-left text-sm font-semibold uppercase">Diagnoses</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredTestsAndTreatments.map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-2 whitespace-nowrap">{item.visitDate}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{item.diagnoses}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}
