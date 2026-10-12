import React from "react";
import "./Career.css";
import "./Projects.css";

const projects = [
  {
    name: "Distributed URL Shortener",
    tag: "Real-time analytics",
    description:
      "Distributed system benchmarked at 50,000+ requests/second with sub-10ms redirects, deployed on AWS with a fully automated CI/CD pipeline and live telemetry dashboards.",
    highlights: ["50K+ req/s", "<10ms redirects", "AWS · CI/CD"],
  },
  {
    name: "Personal Finance Tracker",
    tag: "AI insights & reminders",
    description:
      "Full-stack finance platform with parallel aggregation pipelines, LLM-powered anomaly detection, async bill reminders and privacy-safe handling of PII.",
    highlights: ["LLM anomaly detection", "60fps dashboards", "PII encrypted at rest"],
  },
  {
    name: "Hospital Management System",
    tag: "Role-based platform",
    description:
      "Multi-user platform with role-based access handling 200+ daily transactions on a normalized schema that enforces referential integrity.",
    highlights: ["200+ daily transactions", "RBAC", "Normalized schema"],
  },
];

export default function Projects() {
  return (
    <section className="career-container" id="projects">
      <div className="career-inner">
        <p className="career-title">Projects</p>
        <h2 className="career-subtitle">Systems built end to end.</h2>
        <div className="projects-grid">
          {projects.map((proj) => (
            <article key={proj.name} className="career-card project-card">
              <p className="project-tag">{proj.tag}</p>
              <h3 className="career-role">{proj.name}</h3>
              <p className="career-description">{proj.description}</p>
              <div className="career-achievements">
                {proj.highlights.map((h) => (
                  <span key={h} className="career-pill">
                    {h}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
