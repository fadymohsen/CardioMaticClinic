import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";
import AddPatient from "./Pages/Addpatient";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          <Route index element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="home" element={<Home />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="*" element={<NotFound />} />
          <Route path="add-patient" element={<AddPatient />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
