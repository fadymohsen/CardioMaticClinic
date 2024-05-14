import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import MedicalRecords from "./Pages/MedicalRecords";
import PrescriptionsPage from "./Pages/Prescriptions";
import AppointmentsPagePatient from "./Pages/Appointments";
import BookAppointment from "./Pages/BookAppointment";
import DoctorsListPage from "./Pages/Doctorlist";
import PatientListPage from "./Pages/Patientlist";
import AppointmentsListPage from "./Pages/Appointmentlist";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          <Route index element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<SignUp />} />
          <Route path="Dashboard" element={<Dashboard />}></Route>
          <Route path="Records" element={<MedicalRecords />}></Route>
          <Route path="Prescriptions" element={<PrescriptionsPage />}></Route>
          <Route
            path="AppointmentsPatient"
            element={<AppointmentsPagePatient />}
          ></Route>
          <Route path="BookAppointment" element={<BookAppointment />}></Route>
          <Route path="ViewPatient" element={<PatientListPage />}></Route>
          <Route path="ViewDoctor" element={<DoctorsListPage />}></Route>
          <Route
            path="ViewAppointments"
            element={<AppointmentsListPage />}
          ></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
