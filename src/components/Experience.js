import React from "react";
import "./Experience.css";
import { Link } from "react-router-dom";

const experience = {
  title: "FabLab · Makerspace for students",
  headline: "Built a large-scale ticketing system empowering students",
  description: [
    "Led the development of FabApp, a comprehensive ticketing platform designed to simplify and streamline resource management for students and staff across the makerspace, ensuring seamless access to equipment and services.",
    "Enhanced the platform’s usability by optimizing workflows, designing intuitive dashboards, and implementing role-based views, enabling personalized experiences and improving operational efficiency for all users."
  ],
  systems: [
    "Redesigned MySQL schemas and API contracts.",
    "Responsive front-end with dynamic dashboards",
    "Role-based access and personalized views"
  ]
};

const Experience = () => {
  return (
    <section className="exp-section" id="experience">
      <div className="exp-border">
        <div className="exp-main">
          <div className="exp-left">
            <h2 className="exp-title-curved">{experience.title}</h2>
            <p className="exp-headline">{experience.headline}</p>
            <div className="exp-description">
              {experience.description.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
            <div className="full-case-btn-container">
            <Link to="/full-journey" className="full-case-btn">
              Read Full Case →
            </Link>
            </div>
          </div>

          <div className="exp-right">
            <h3>Systems Checklist</h3>
            <ul>
              {experience.systems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
