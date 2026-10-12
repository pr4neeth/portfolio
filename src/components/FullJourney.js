import React from "react";
import "./FullJourney.css";

const experiences = [
  {
    role: "Software Developer",
    company: "FabLab – The University of Texas at Arlington",
    timeline: "Feb 2025 – Present",
    location: "Arlington, TX",
    description:
      "Owning the backend and performance of the makerspace platform: a rebuilt query layer, RESTful microservices that scale without new infrastructure, and privacy-safe, observable systems shipped with zero release incidents.",
    tools: ["Java", "TypeScript", "React.js", "Hapi.js", "REST Microservices", "MySQL"],
    achievements: [
      "Rebuilt the core backend query layer, cutting average response time from 6.2s to 800ms (8×) and eliminating the top user-reported complaint about dashboard load speed.",
      "Architected RESTful microservices sustaining 500+ concurrent users with zero downtime, letting the platform scale without additional infrastructure spend.",
      "Introduced caching, connection pooling and rate limiting, reducing server load by ~40% during peak traffic windows.",
      "Applied memoization and render optimizations that reduced unnecessary re-renders by 60% and improved Time-to-Interactive by 1.2 seconds.",
      "Enforced audit logging, field-level access controls and PII-handling guardrails across 3 core modules, and closed a class of input-validation vulnerabilities through OWASP-based code reviews.",
      "Drove the full SDLC for 3 major backend modules with feature flags and phased rollouts: all shipped on schedule, with zero incidents across releases.",
      "Championed SOLID and design-pattern practices adopted across the team, cutting bug recurrence in reviewed modules by ~30%.",
      "Led root cause analysis on the top production incident and instrumented telemetry and latency dashboards for early degradation detection."
    ]
  },
  {
    role: "Software Engineer",
    company: "BYJU’S – Think & Learn Pvt. Ltd.",
    timeline: "Jun 2022 – Mar 2023",
    location: "Hyderabad, India",
    description:
      "Engineered backend services powering 20,000+ active users at 99.9% uptime across a microservices architecture, from real-time event pipelines to a secure authentication layer.",
    tools: ["Node.js", "Express.js", "Kafka", "MongoDB", "JWT · RBAC", "Jest"],
    achievements: [
      "Built an event-driven pipeline ingesting 500,000+ events/day with sub-second latency, enabling real-time analytics for the product team.",
      "Cut report generation time from 9s to 1.3s (7×) by re-architecting ORM queries and adding targeted database indexes, improving retention for power users.",
      "Delivered an end-to-end authentication overhaul with stateless JWT and role-based access, securing all API endpoints and meeting internal data-protection policy.",
      "Implemented privacy-safe event handling in the Kafka pipeline: data minimization, consent-aware filtering and PII redaction before downstream consumption.",
      "Raised test coverage from ~40% to 80%+ with unit and integration suites, reducing production regressions by ~50% across owned services.",
      "Established telemetry, alerting thresholds and incident runbooks that reduced mean time to resolution by ~40%.",
      "Built web front-end proofs of concept for several BYJU’S products, researched automated-mailing products, and took an internal FAQ and onboarding tool from POC to production."
    ]
  },
  {
    role: "Web Development Engineer",
    company: "Odisha Design Council",
    timeline: "Jun 2021 – Dec 2021",
    location: "Bhubaneswar, India",
    description:
      "Full-stack engineering on core data pipelines and client-facing modules, with a focus on schema design and data-processing performance.",
    tools: ["JavaScript", "HTML", "CSS", "SQL"],
    achievements: [
      "Redesigned the relational schema and query patterns for core data pipelines, improving overall system performance by 60% and handling 3× the previous data volume.",
      "Delivered full-stack features across 3 client-facing modules from requirements through deployment, consistently meeting weekly sprint milestones.",
      "Applied algorithmic optimizations to data-processing workflows, reducing batch job runtimes from hours to minutes on large datasets."
    ]
  }
];

const projects = [
  {
    name: "Distributed URL Shortener with Real-Time Analytics",
    tools: ["AWS EC2 · S3 · CloudFront", "CI/CD", "Telemetry"],
    achievements: [
      "Designed a distributed system capable of 50,000+ requests/second with sub-10ms redirection latency, benchmarked under simulated load.",
      "Deployed on AWS with a full CI/CD pipeline: zero manual steps from commit to production.",
      "Built telemetry dashboards for live-site monitoring and incident triage."
    ]
  },
  {
    name: "Personal Finance Tracker with AI Insights and Reminders",
    tools: ["Full-Stack", "LLM Integration", "Async Scheduling"],
    achievements: [
      "Parallel aggregation pipelines for real-time transaction categorization and budget analytics across thousands of entries with no perceptible lag.",
      "LLM-powered anomaly detection that flags unusual transactions and sharpens projected-savings accuracy.",
      "Async reminder scheduling to reduce missed bill payments, plus dashboards with 60fps scrolling via virtualized rendering and debounced fetching.",
      "PII encrypted at rest, role-based access control, and audit logging on every sensitive operation."
    ]
  },
  {
    name: "Convolutional Neural Network for CIFAR-10",
    meta: "Academic project · Oct 2024 – Dec 2024",
    tools: ["Python", "CNN", "Data Augmentation"],
    achievements: [
      "Built a CNN for the CIFAR-10 image dataset reaching 77.36% baseline accuracy.",
      "Experimented with dropout (76.35%) and data augmentation, which raised accuracy to 78.50%."
    ]
  },
  {
    name: "Spam Message Classification",
    meta: "Academic project · CSE 5301 · Team of 4 · Apr 2024",
    tools: ["Python", "scikit-learn", "Naive Bayes"],
    achievements: [
      "Built a spam-vs-ham classifier comparing Multinomial and Gaussian Naive Bayes on a 1,393-message test set.",
      "Multinomial NB with Laplace smoothing reached ~98% accuracy (spam precision 0.98, recall 0.89), against ~91% for Gaussian NB.",
      "Evaluated with confusion matrices and classification reports covering precision, recall and F1-score."
    ]
  },
  {
    name: "Data Mining Projects",
    meta: "Academic · Team of 3",
    tools: ["pandas", "scikit-learn", "NLTK", "mlxtend", "R · ggplot2", "PandasAI"],
    achievements: [
      "Fake job posting detection (NLP): NLTK cleaning and lemmatization, Bag-of-Words vs. TF-IDF bigrams on imbalanced data (~4.8% fraud). Logistic Regression + BoW reached 98.2% accuracy with fraud-class precision 0.99.",
      "Diabetes prediction: class-balanced Logistic Regression vs. Random Forest with repeated stratified k-fold CV; Logistic Regression scored 0.843 CV ROC-AUC and 0.81 on test.",
      "Market basket analysis: Apriori and FP-Growth on ~9.7K transactions (21,293 line items), with a lift-ranked item recommendation function.",
      "Clustering: K-Means (elbow + silhouette) and Ward/average-linkage agglomerative clustering on Spotify top-2000 audio features, separating energetic and acoustic tracks.",
      "EDA on 119,390 hotel bookings in Python and R (cleaning, imputation, feature engineering, seasonality), using PandasAI to query the data in natural language."
    ]
  },
  {
    name: "Hospital Management System",
    tools: ["RBAC", "Relational Modeling"],
    achievements: [
      "Role-based, multi-user platform handling 200+ daily transactions.",
      "Normalized database schema that eliminates redundancy and enforces referential integrity."
    ]
  }
];

const academics = [
  {
    role: "Master of Science in Computer Science",
    company: "University of Texas at Arlington",
    timeline: "Jan 2024 – Dec 2025",
    location: "Arlington, TX",
    cgpa: "GPA: 4.0/4.0",
    coursework: "Relevant coursework: Machine Learning, Artificial Intelligence, Data Mining",
    achievements: [
      "Strengthened expertise in machine learning, AI, data analytics, and systems engineering by completing advanced projects and research with measurable outcomes.",
      "Built intelligent systems, participated in collaborative research-oriented projects, and solved real-world engineering problems with a focus on scalability and impact."
    ]
  },
  {
    role: "Bachelor of Technology in Computer Science and Engineering",
    company: "Indian Institute of Technology (IIT) Bhubaneswar",
    timeline: "Jul 2018 – May 2022",
    location: "Bhubaneswar, India",
    cgpa: "",
    achievements: [
      "Acquired a strong foundation in algorithms, systems design, and large-scale engineering challenges while participating in leadership roles during tech festivals and project initiatives.",
      "Developed problem-solving skills and teamwork by managing publicity and logistics teams, contributing to the success of large-scale academic and extracurricular projects."
    ]
  }
];

const FullJourney = () => {
  return (
    <section className="full-journey-section">
      <div className="full-journey-container">
        <div className="journey-top">
          <p className="journey-top-title">Work Archive</p>
          <h2 className="journey-top-subtitle">Case studies with measurable impact.</h2>
          <p className="journey-top-desc">
            Each role drove measurable improvements: faster systems, safer data, and smoother releases.
          </p>
        </div>

        {experiences.map((exp, idx) => (
          <div className="journey-experience" key={idx}>
            <div className="journ-header">
              <div className="journ-left">
                <p className="journ-role">{exp.role}</p>
                <p className="journ-company">{exp.company}</p>
              </div>
              <div className="journ-right">
                <p className="journ-timeline">{exp.timeline}</p>
                <p className="journ-location">{exp.location}</p>
              </div>
            </div>
            <div className="journ-description">
              <p>{exp.description}</p>
            </div>
            <div className="journ-tools">
              {exp.tools.map((tool, i) => (
                <span key={i} className="tool-pill">{tool}</span>
              ))}
            </div>
            <div className="journ-achievements">
              {exp.achievements.map((ach, i) => (
                <div key={i} className="achievement">
                  <span>{ach}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="journey-top" style={{ marginTop: "80px" }} id="projects">
          <p className="journey-top-title">Featured Projects</p>
          <h2 className="journey-top-subtitle">Systems built end to end.</h2>
          <p className="journey-top-desc">
            Projects spanning distributed systems, AI-assisted products, machine learning and data mining.
          </p>
        </div>

        {projects.map((proj, idx) => (
          <div className="journey-experience" key={idx}>
            <div className="journ-header">
              <div className="journ-left">
                <p className="journ-role">{proj.name}</p>
                {proj.meta && <p className="journ-company">{proj.meta}</p>}
              </div>
            </div>
            <div className="journ-tools">
              {proj.tools.map((tool, i) => (
                <span key={i} className="tool-pill">{tool}</span>
              ))}
            </div>
            <div className="journ-achievements">
              {proj.achievements.map((ach, i) => (
                <div key={i} className="achievement">
                  <span>{ach}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="journey-top" style={{ marginTop: "80px" }}>
          <p className="journey-top-title">Academic Journey</p>
          <h2 className="journey-top-subtitle">Academic milestones with measurable growth.</h2>
          <p className="journey-top-desc">
          Each program strengthened technical foundations, problem-solving skills, and leadership capabilities, preparing for real-world engineering challenges and impactful professional contributions.
          </p>
        </div>

        {academics.map((acad, idx) => (
          <div className="academic-card" key={idx}>
            <div className="journ-header">
              <div className="journ-left">
                <p className="journ-role">{acad.role}</p>
                <p className="journ-company">{acad.company}</p>
                {acad.cgpa && <p className="item-sub">{acad.cgpa}</p>}
                {acad.coursework && <p className="item-sub">{acad.coursework}</p>}
              </div>
              <div className="journ-right">
                <p className="journ-timeline">{acad.timeline}</p>
                <p className="journ-location">{acad.location}</p>
              </div>
            </div>
            <div className="journ-achievements">
              {acad.achievements.map((ach, i) => (
                <div key={i} className="achievement">
                  {ach}
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default FullJourney;
