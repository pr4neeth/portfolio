import "./Introduction.css";
import { Link } from "react-router-dom";


const Introduction = () => {
  return (
    <section className="intro-section" id="home">
      <div className="intro-container">
        <p className="intro-subtitle">Full-Stack Engineer</p>
        <h1 className="intro-title">Building software that just works.</h1>
        <p className="intro-text">
          Full-stack engineer with 3+ years building high-traffic, distributed applications end to end, from
          pixel-perfect UIs to high-throughput backends. I care about measurable wins: faster queries, steadier
          systems, and features that reach real users.
        </p>

        <div className="intro-buttons">
          <Link to="/full-journey" className="btn primary-btn">View Full Journey</Link>
          <a href="https://calendar.app.google/dqYteMDMvDuvb48XA" className="btn secondary-btn">Get in Touch</a>
        </div>

        <div className="signal-board-box">
          <h2 className="signal-heading">Operating Rhythm</h2>
          <ul className="signal-list">
            <li>Rebuilding FabLab's backend query layer, cutting dashboard response times from 6.2s to 800ms.</li>
            <li>Built event-driven pipelines at BYJU’S processing 500K+ events/day for 20,000+ active users.</li>
            <li>Owning performance, security, and reliability, not just shipping features.</li>
          </ul>
          <p className="signal-footer">MS CS, UT Arlington (4.0 GPA) | B.Tech CSE, IIT Bhubaneswar</p>
        </div>

        <div className="principles-box">
          <h2 className="principles-heading">Operating Principles</h2>
          <ul className="principles-list">
            <li>
              <strong>Code that leaves the comfort of localhost behind.</strong>
              <p>Build systems that run reliably not just on "my machine" but on deployment.</p>
            </li>
            <li>
              <strong>Problems before solutions</strong>
              <p>Understanding the “why” avoids building elegant answers to the wrong questions.</p>
            </li>
            <li>
              <strong>Systems scale people</strong>
              <p>Good architecture makes teams faster, communication cleaner, and decisions easier.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
