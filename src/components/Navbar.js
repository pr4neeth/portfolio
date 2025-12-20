import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import profilePic from "../assets/profile.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Prevent body scroll when overlay is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  const activeLink =
    location.pathname === "/"
      ? "home"
      : location.pathname === "/full-journey"
      ? "journey"
      : "";

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left: Logo */}
        <div className="navbar-logo">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <img src={profilePic} alt="Praneeth" className="logo-image" />
            <span className="logo-text">PRANEETH PALADUGU</span>
          </Link>
        </div>

        {/* Links wrapper (desktop inline / mobile overlay) */}
        <div className={`navbar-links-wrapper ${isOpen ? "active" : ""}`}>
          {/* Mobile overlay backdrop (click to close) */}
          <div className="navbar-backdrop" onClick={closeMenu} />

          {/* Mobile panel (on desktop it becomes "contents" via CSS) */}
          <div className="navbar-panel" role="dialog" aria-modal="true">
            {/* ✅ Render panel header ONLY when menu is open (prevents desktop duplicate) */}
            {isOpen && (
              <div className="navbar-panel-header">
                <div className="navbar-panel-brand">
                  <img src={profilePic} alt="Praneeth" className="logo-image" />
                  <span className="panel-title">PRANEETH PALADUGU</span>
                </div>

                <button
                  className="panel-close"
                  onClick={closeMenu}
                  aria-label="Close menu"
                  type="button"
                >
                  <X size={22} />
                </button>
              </div>
            )}

            {/* Center links */}
            <ul className="navbar-links main-links">
              <li>
                <Link
                  to="/"
                  className={activeLink === "home" ? "active" : ""}
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/full-journey"
                  className={activeLink === "journey" ? "active" : ""}
                  onClick={closeMenu}
                >
                  Journey
                </Link>
              </li>
            </ul>

            {/* Right links */}
            <ul className="navbar-links secondary-links">
              <li>
                <a
                  href="https://github.com/pr4neeth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-link"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/paladugupraneeth/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-link"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1QLUGICqmwTEcMRmBnxN8ZabwtOA6rwK3/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-link"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="mailto:praneeth.paladugu2@gmail.com"
                  className="pill-link highlight-link"
                  onClick={closeMenu}
                >
                  Send Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="menu-icon"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          type="button"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
