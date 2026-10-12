import React from "react";
import "./Experience.css";
import { Link } from "react-router-dom";

const experience = {
  title: "FabLab · UT Arlington",
  headline: "Made the makerspace platform 8× faster and ready to scale",
  description: [
    "Rebuilt the core backend query layer, taking average response time from 6.2s to 800ms and eliminating the top user complaint about dashboard load speed.",
    "Architected RESTful microservices that sustain 500+ concurrent users with zero downtime, and added caching, connection pooling and rate limiting that cut peak server load by ~40%.",
    "Drove the full SDLC for 3 major backend modules, shipped on schedule with feature flags and phased rollouts, with zero release incidents."
  ],
  systems: [
    "6.2s → 800ms average response time",
    "500+ concurrent users, zero downtime",
    "~40% lower server load at peak",
    "60% fewer re-renders, 1.2s faster Time-to-Interactive",
    "Audit logging, field-level access control and PII guardrails",
    "Telemetry and latency dashboards for early warning"
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
