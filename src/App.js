import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import MedicalRecords from "./Pages/MedicalRecords";
function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="records" element={<MedicalRecords />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
