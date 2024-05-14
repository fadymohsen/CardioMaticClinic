import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";
import Dashboard from "./Pages/DashboardAdmin";
import DoctorsListPage from "./Pages/Doctorlist";
import PatientListPage from "./Pages/Patientlist";
import AppointmentsListPage from "./Pages/Appointmentlist";






function AppAdmin() {
  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="dashboardAdmin" element={<Dashboard />}></Route>
          <Route path="ViewPatient" element={<PatientListPage />}></Route>
          <Route path="ViewDoctor" element={<DoctorsListPage/>}></Route>
          <Route path="ViewAppointments" element={<AppointmentsListPage/>}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default AppAdmin;
