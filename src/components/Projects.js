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
    name: "CIFAR-10 Image Classifier",
    tag: "Deep learning",
    description:
      "Convolutional neural network for CIFAR-10, tuned with dropout and data augmentation to lift accuracy from 77.36% to 78.50%.",
    highlights: ["CNN", "78.50% accuracy", "Data augmentation"],
  },
  {
    name: "Spam Message Classifier",
    tag: "Machine learning",
    description:
      "Compared Multinomial and Gaussian Naive Bayes on 1,393 test messages; Multinomial NB with Laplace smoothing hit ~98% accuracy with 0.98 spam precision.",
    highlights: ["~98% accuracy", "Naive Bayes", "Team of 4"],
  },
  {
    name: "Data Mining Projects",
    tag: "NLP · prediction · clustering",
    description:
      "Fake job posting detection (98.2% accuracy), diabetes prediction (0.84 ROC-AUC), market basket analysis, Spotify clustering and EDA on 119K hotel bookings.",
    highlights: ["NLTK · scikit-learn", "Apriori · FP-Growth", "Python & R"],
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
