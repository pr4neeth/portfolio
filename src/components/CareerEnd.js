import React from "react";
import { useLocation } from "react-router-dom";
import "./CareerEnd.css";

const CareerEnd = () => {
  const location = useLocation();

  // Check if we are on the home page
  const isHomePage = location.pathname === "/";
  return (
    <section className="career-end-section">
      <div className="career-end-border">
        <div className="career-end-container">
          <p className="career-end-title">Building with Impact</p>
          <h2 className="career-end-subtitle">
            Focus on building software that’s calm, reliable, and scalable.
          </h2>
          <p className="career-end-description">
            If you’re looking for someone who can define the product story and implement robust systems, let’s connect.
          </p>
          <div className="career-end-actions">
            {isHomePage && <a href="/portfolio/full-journey" className="career-end-btn">Review the Work</a>}
            <a href="mailto:praneeth.paladugu2@gmail.com" className="career-end-btn">Send an Email</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerEnd;
