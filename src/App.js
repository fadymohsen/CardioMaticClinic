import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";
import Statistics from "./Pages/Statistics";
import MedicalRecords from "./Pages/MedicalRecords";
import PrescriptionsPage from "./Pages/Prescriptions";
import AppointmentsPagePatient from "./Pages/Appointments";
import BookAppointment from "./Pages/BookAppointment";
import DoctorsListPage from "./Pages/Doctorlist";
import PatientListPage from "./Pages/Patientlist";
import AppointmentsListPage from "./Pages/Appointmentlist";
import AddPatient from "./Pages/Addpatient";
import AddDoctor from "./Pages/AddDoctor";

import EditPatient from "./Pages/EditPatient";
import EditDoctor from "./Pages/EditDoctor";
import EditPrescriptions from "./Pages/EditPrescriptions";

import EditMedicalRecord from "./Pages/EditMedicalRecord";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          <Route index element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<SignUp />} />
          <Route path="Statistics" element={<Statistics />}></Route>
          <Route path="Records" element={<MedicalRecords />}></Route>
          <Route path="Prescriptions" element={<PrescriptionsPage />}></Route>
          <Route
            path="AppointmentsPatient"
            element={<AppointmentsPagePatient />}
          ></Route>
          <Route path="BookAppointment" element={<BookAppointment />}></Route>
          <Route path="ViewPatient" element={<PatientListPage />}></Route>
          <Route path="ViewDoctor" element={<DoctorsListPage />}></Route>
          <Route path="AddPatient" element={<AddPatient />}></Route>
          <Route path="AddDoctor" element={<AddDoctor />}></Route>


          <Route path="EditPatient" element={<EditPatient />}></Route>
          <Route path="EditDoctor" element={<EditDoctor />}></Route>
          <Route path="EditPrescriptions" element={<EditPrescriptions />}></Route>
          <Route path="EditMedicalRecord" element={<EditMedicalRecord />}></Route>


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
