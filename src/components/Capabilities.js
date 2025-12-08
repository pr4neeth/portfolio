import React from "react";
import "./Capabilities.css";

const capabilities = [
  {
    title: "Systems architecture",
    description: "End-to-end product ownership across modern frameworks and tools with a bias for measurable performance.",
    items: ["Node.js", "React.js", "Express.js", "MongoDB", "MySQL", "Hapi.js", "Angular"]
  },
  {
    title: "Coding Languages",
    description: "Proficient in multiple programming languages to build robust and scalable software solutions.",
    items: ["Python", "Java", "C/C++", "JavaScript", "TypeScript", "JSP"]
  },
  {
    title: "Deployement and Maintanence",
    description: "Supporting processes like deployment, CI/CD, documentation, and API design to streamline workflows.",
    items: ["Hosting & Deployment", "CI/CD Pipelines", "Documentation", "API Design", "Testing & QA"]
  }
];

function Capabilities() {
  return (
    <section id="capabilities" className="capabilities-container">
      <p className="capabilities-p">Capabilities</p>
      <h2 className="capabilities-title">How I Operate.</h2>
      <div className="capabilities-grid">
        {capabilities.map((cap, index) => (
          <div key={index} className="capability-card">
            <h3>{cap.title}</h3>
            <p>{cap.description}</p>
            <div className="capability-items">
              {cap.items.map((item, i) => (
                <span key={i} className="capability-item">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Capabilities;
