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
          <span>About Us</span>
        </h3>
        <p className="about-description">
          At CardioMatic Clinic, we understand that entrusting your
          cardiovascular health to a medical institution requires confidence
          and assurance.
        </p>

        <h4 className="about-text-title">Why You Should Trust Us?</h4>

        <div className="about-list">
          <p className="about-list-item">
            <span className="about-list-icon">&#10004;</span> Expertise: With a
            team of experienced cardiologists at the forefront of cardiac care
            and cutting-edge technology ensuring accurate diagnoses and
            interventions, we stand as your trusted partner in heart health.
          </p>
          <p className="about-list-item">
            <span className="about-list-icon">&#10004;</span> Compassionate
            Care: We provide compassionate support throughout your journey,
            ensuring you feel understood and cared for every step of the way.
          </p>
          <p className="about-list-item">
            <span className="about-list-icon">&#10004;</span> Comprehensive
            Approach: Our commitment to a comprehensive approach means we
            consider every aspect of your health and well-being, tailoring
            treatment plans to suit your individual needs.
          </p>
          <p className="about-list-item">
            <span className="about-list-icon">&#10004;</span> Commitment to
            Excellence: We strive for excellence in every aspect of our
            services, ensuring you receive the highest quality care possible.
          </p>
        </div>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Choose a Specialist"
          description="Find your perfect specialist and book with ease at Health Plus. Expert doctors prioritize your health, offering tailored care."
        />

        <SolutionStep
          title="Make a Schedule"
          description="Choose the date and time that suits you best, and let our dedicated team of medical professionals ensure your well-being with personalized care."
        />

        <SolutionStep
          title="Get Your Solutions"
          description="Our experienced doctors and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health."
        />
      </div>
    </div>
  );
}

export default About;
