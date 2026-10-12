import React from "react";
import "./Career.css";

const careerData = [
  {
    role: "Software Developer",
    company: "FabLab | UTA",
    timeline: "02/2025 – Present",
    location: "Arlington, TX",
    description: "Rebuilt the backend query layer and REST microservices behind the makerspace platform, with caching, rate limiting and privacy-safe design.",
    achievements: [
      "8× faster responses",
      "500+ concurrent users",
      "~40% less peak load"
    ]
  },
  {
    role: "Software Engineer",
    company: "BYJU’S Think & Learn Pvt. Ltd.",
    timeline: "06/2022 – 03/2023",
    location: "Hyderabad, India",
    description: "Engineered backend services and a Kafka event pipeline for 20,000+ active users, and led an end-to-end JWT + RBAC authentication overhaul.",
    achievements: [
      "500K+ events/day",
      "99.9% uptime",
      "7× faster reports"
    ]
  },
  {
    role: "Web Development Engineer",
    company: "Odisha Design Council",
    timeline: "06/2021 – 12/2021",
    location: "Bhubaneswar, India",
    description: "Redesigned schemas and query patterns for core data pipelines and delivered full-stack features across 3 client-facing modules.",
    achievements: [
      "60% faster system",
      "3× data volume",
      "Batch jobs: hours → minutes"
    ]
  }
];

function Career() {
  return (
    <section className="career-container">
        <div className="career-inner">
            <p className="career-title">Career</p>
            <h2 className="career-subtitle">Career milestones that grow with impact and scale.</h2>
            <div className="career-grid">
            {careerData.map((job, index) => (
                <div key={index} className="career-card">
                <div className="career-left">
                    <h3 className="career-role">{job.role}</h3>
                    <p className="career-company">{job.company}</p>
                    <p className="career-description">{job.description}</p>
                    <div className="career-achievements">
                    {job.achievements.map((ach, i) => (
                        <span key={i} className="career-pill">{ach}</span>
                    ))}
                    </div>
                </div>
                <div className="career-right">
                    <p className="career-timeline">{job.timeline}</p>
                    <p className="career-location">{job.location}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
    </section>

  );
}

export default Career;
