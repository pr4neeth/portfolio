import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import profilePic from "../assets/profile.jpg"; // 👈 Add your photo in assets folder

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  // Determine active link based on current path
  const activeLink =
    location.pathname === "/"
      ? "home"
      : location.pathname === "/full-journey"
      ? "journey"
      : "";

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left: Logo with Photo */}
        <div className="navbar-logo">
          <Link to="/" className="logo-link">
            <img src={profilePic} alt="Praneeth" className="logo-image" />
            PRANEETH PALADUGU
          </Link>
        </div>

        {/* Center & Right Links */}
        <div className={`navbar-links-wrapper ${isOpen ? "active" : ""}`}>
          {/* Center: Home / Journey */}
          <ul className="navbar-links main-links">
            <li>
              <Link
                to="/"
                className={activeLink === "home" ? "active" : ""}
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/full-journey"
                className={activeLink === "journey" ? "active" : ""}
                onClick={handleLinkClick}
              >
                Journey
              </Link>
            </li>
          </ul>

          {/* Right: Other links */}
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
                href="https://drive.google.com/file/d/1qxFT7dZRM3IfRBXez6AZC2aN2hdgIr7Y/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-link"
              >
                Resume
              </a>
            </li>
            <li>
              <Link
                to="mailto:praneeth.paladugu2@gmail.com"
                className="pill-link highlight-link"
                onClick={handleLinkClick}
              >
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Toggle */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
