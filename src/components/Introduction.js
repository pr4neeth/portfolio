import "./Introduction.css";
import { Link } from "react-router-dom";


const Introduction = () => {
  return (
    <section className="intro-section" id="home">
      <div className="intro-container">
        <p className="intro-subtitle">Full-Stack Engineer</p>
        <h1 className="intro-title">Building software that just works.</h1>
        <p className="intro-text">
          I approach software with intention, thoughtfulness, and precision, building systems that last and
          turning complex ideas into elegant, scalable solutions people love to use.
        </p>

        <div className="intro-buttons">
          <Link to="/full-journey" className="btn primary-btn">View Full Journey</Link>
          <a href="https://calendar.app.google/dqYteMDMvDuvb48XA" className="btn secondary-btn">Get in Touch</a>
        </div>

        <div className="signal-board-box">
          <h2 className="signal-heading">Operating Rhythm</h2>
          <ul className="signal-list">
            <li>Upgrading outdated systems at FabLab and refining old code to improve performance, reliability, and long-term flexibility.</li>
            <li>Developing scalable web pages and piplelines for BYJU’S products, improving UX and lead conversion.</li>
            <li>Owning performance, not just shipping features.</li>
          </ul>
          <p className="signal-footer">Working with early teams | experienced teams</p>
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
