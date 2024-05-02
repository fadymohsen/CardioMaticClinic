import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function PatientRecord() {
  const navigate = useNavigate();

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

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <>
      <Navbar />
      <div className="overflow-x-auto mt-8">
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
              {diagnosisRecords.map((record) => (
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
              {medicineRecords.map((record) => (
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
              {visits.map((visit) => (
                <tr key={visit.id}>
                  <td className="px-4 py-2 whitespace-nowrap">{visit.doctor}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{visit.date}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{visit.time}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{visit.visitType}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                   
                  </td>
                </tr>

              ))}
              
            </tbody>
          </table>
          <button className="text-appointment-btn" type="button" onClick={handleBookAppointmentClick}>
                      <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
                    </button>
        </div>

        {/* Tests and Treatment Table */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Tests and Treatment</h2>
          <table className="min-w-full bg-white rounded-md overflow-hidden shadow-md">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold uppercase">Visit Date</th>
                <th className="px-4 py-2 text-left text-sm font-semibold uppercase">Diagnoses</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {testsAndTreatments.map((item) => (
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