import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <div className="footer-name">PRANEETH PALADUGU</div>
        </div>

        <div className="footer-links">
          <a
            href="mailto:praneeth.paladugu2@gmail.com"
            className="footer-pill"
          >
            Email
          </a>
          <a
            href="https://github.com/pr4neeth"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-pill"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/paladugupraneeth/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-pill"
          >
            LinkedIn
          </a>
          <a
            href="https://drive.google.com/file/d/1QLUGICqmwTEcMRmBnxN8ZabwtOA6rwK3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-pill"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Praneeth Paladugu.</span>
        <span className="footer-muted">All rights reserved.</span>
      </div>
    </footer>
  );
}
