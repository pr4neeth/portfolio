import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./CareerEnd.css";

const CareerEnd = () => {
  const location = useLocation();
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
            If you’re looking for someone who can define the product story and
            implement robust systems, let’s connect.
          </p>

          <div className="career-end-actions">
            <a
              href="https://calendar.app.google/dqYteMDMvDuvb48XA"
              className="career-end-btn career-end-btn--outline"
            >
              Get in Touch
            </a>

            {isHomePage ? (
              <Link to="/full-journey" className="career-end-btn">
                Review the Work
              </Link>
            ) : (
              <a href="/" className="career-end-btn">
                Back to Home
              </a>
            )}

            <a
              href="mailto:praneethpaladugu4@gmail.com"
              className="career-end-btn"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerEnd;
