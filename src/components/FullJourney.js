import React from "react";
import "./FullJourney.css";

const experiences = [
  {
    role: "Software Developer",
    company: "FabLab – The University of Texas at Arlington",
    timeline: "Jan 2025 – Present",
    location: "Arlington, TX",
    description:
      "Engineering FabApp, a large-scale ticketing and resource-management platform used by 15,000+ students. Architected scalable backend systems and built responsive dashboards with role-based access.",
    tools: ["React.js", "Hapi.js", "REST APIs", "Hapi.js", "MySQL"],
    achievements: [
      "Served over 15,000 students by designing a seamless registration and authentication system, ensuring smooth access to all tools and resources available in the makerspace.",
      "Optimized workflows and dashboards by implementing real-time updates and intuitive role-based interfaces, significantly reducing manual intervention and improving operational productivity for staff and students.",
      "Enhanced operational efficiency by identifying bottlenecks in backend API performance and introducing caching strategies, resulting in faster response times and improved user satisfaction.",
      "Streamlined resource management processes by integrating automated ticket assignment and tracking, enabling staff to allocate equipment efficiently while minimizing delays and conflicts."
    ]
  },
  {
    role: "Software Engineer",
    company: "BYJU’S – Think & Learn Pvt. Ltd.",
    timeline: "Jun 2022 – May 2023",
    location: "Hyderabad, India",
    description:
      "Built high-performance UIs and backend services for major learning platforms, impacting 20,000+ users. Developed internal automation tools and achieved 80% test coverage on critical APIs.",
    tools: ["React.js", "Node.js", "Express.js","MongoDB", "Jest"],
    achievements: [
      "Reduced third-party dependency costs by 30% by developing an internal FAQ automation system that replaced expensive external tools and improved efficiency across multiple teams.",
      "Boosted user conversion funnels by analyzing user engagement and implementing responsive UI improvements, personalized notifications, and streamlined onboarding experiences for thousands of learners.",
      "Improved overall system reliability by introducing unit and integration testing with 80% coverage, identifying and resolving critical backend API issues before production deployment.",
      "Developed and deployed automation tools that minimized manual operational tasks, allowing the team to focus on high-impact engineering work while maintaining quality and timeliness."
    ]
  },
  {
    role: "Web Development Engineer",
    company: "Odisha Design Council",
    timeline: "Jun 2021 – May 2022",
    location: "Bhubaneswar, India",
    description:
      "Developed an event-focused website showcasing sessions, speakers, and schedules. Implemented a smooth registration pipeline and led a team of five for timely delivery.",
    tools: ["HTML", "CSS", "JavaScript"],
    achievements: [
      "Successfully launched a fully responsive event website ahead of schedule, ensuring smooth navigation and visibility for all sessions, speakers, and schedule details for attendees.",
      "Improved registration flow by implementing a step-by-step sign-up system with validations, enabling attendees to register for sessions seamlessly without errors or delays.",
      "Led a team of five interns, delegating responsibilities effectively, tracking progress, and providing guidance to ensure all project milestones were achieved on time.",
      "Aligned the website design with the council’s branding guidelines by collaborating with designers and stakeholders, resulting in a professional, cohesive, and visually appealing platform for the event."
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
            Each project drove measurable improvements - students empowered, systems optimized, workflows streamlined.
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
