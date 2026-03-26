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

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

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
        <div className="navbar-logo">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <img src={profilePic} alt="Praneeth" className="logo-image" />
            <span className="logo-text">PRANEETH PALADUGU</span>
          </Link>
        </div>

        <div className={`navbar-links-wrapper ${isOpen ? "active" : ""}`}>
          <div className="navbar-backdrop" onClick={closeMenu} />

          <div className="navbar-panel" role="dialog" aria-modal="true">
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

            <ul className="navbar-links main-links">
              <li>
                <a
                  href="/"
                  className={activeLink === "home" ? "active" : ""}
                  onClick={closeMenu}
                >
                  Home
                </a>
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
                  href="https://drive.google.com/file/d/1i4Ud_w8cVCU-OHz7Sm35dUNv9QntWTBH/view?usp=drive_link"
                  target="_blank"
                  className="pill-link"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="mailto:praneethpaladugu4@gmail.com"
                  className="pill-link highlight-link"
                  onClick={closeMenu}
                >
                  Send Email
                </a>
              </li>
            </ul>
          </div>
        </div>

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
