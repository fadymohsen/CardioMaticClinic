import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>Why You Should Trust Us? Get To Know About Us!</span>
        </h3>
        <p className="about-description">
        At CardioMatic Clinic, we understand that entrusting your cardiovascular health to a medical institution requires confidence and assurance.
        With a team of experienced cardiologists at the forefront of cardiac care, cutting-edge technology ensuring accurate diagnoses and interventions, compassionate support throughout your journey, and a commitment to excellence in every aspect of your health and well-being, CardioMatic Clinic stands as your trusted partner in heart health.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Expertise"
  
        />

        <SolutionStep
          title="Compassionate Care "
        />

        <SolutionStep
          title="Comprehensive Approach"
        />
         <SolutionStep
          title="Commitment to Excellence"
        />
      </div>
    </div>
  );
}

export default About;
