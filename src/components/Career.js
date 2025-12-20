import React from "react";
import "./Career.css";

const careerData = [
  {
    role: "Software Developer",
    company: "FabLab | UTA",
    timeline: "01/2025 – Present",
    location: "Arlington, TX",
    description: "Scaled FabApp from PHP to React/Node for 15K students, layering Azure SSO and ticketing automation.",
    achievements: [
      "15K+ students",
      "3× faster",
      "Scalable REST APIs"
    ]
  },
  {
    role: "Software Engineer",
    company: "BYJU’S Think & Learn Pvt. Ltd.",
    timeline: "06/2022 – 05/2023",
    location: "Hyderabad, India",
    description: "Developed scalable UIs & APIs improving user experience and conversion rates.",
    achievements: [
      "20K+ impacted users",
      "60% increased leads",
      "30% cost reduction"
    ]
  },
  {
    role: "Web Development Engineer",
    company: "Odisha Design Council",
    timeline: "06/2021 – 05/2022",
    location: "Bhubaneswar, India",
    description: "Developed responsive web pages for an upcoming design event, ensuring alignment with event branding.",
    achievements: [
      "Responsive",
      "Leadership",
      "Collaboration"
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
