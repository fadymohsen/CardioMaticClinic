import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";
import AddPatient from "./Pages/Addpatient";
import PatientRecord from "./Pages/PatientRecord";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="*" element={<NotFound />} />
          <Route path="add-patient" element={<AddPatient />} />
          <Route path="patient-record" element={<PatientRecord />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
