"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="announcement-bar">
        <div className="container announcement-content">
          <span>
            <i className="fa-solid fa-circle-check text-cyan"></i> Kochi's #1 Rated Home Appliance Service Center
          </span>
          <a href="tel:+919846012345" className="phone-link">
            <i className="fa-solid fa-phone"></i> Call Now: +91 98460 12345
          </a>
        </div>
      </div>

      {/* Header / Navigation */}
      <header className="main-header">
        <div className="container header-container">
          <a href="#" className="logo" id="header-logo">
            <span className="logo-text">
              STAR <span className="text-cyan">COOL</span>
            </span>
          </a>

          <nav 
            className="nav-menu" 
            id="nav-menu"
            style={{
              display: menuOpen ? "flex" : undefined,
              flexDirection: menuOpen ? "column" : undefined,
              position: menuOpen ? "absolute" : undefined,
              top: menuOpen ? "80px" : undefined,
              left: menuOpen ? "0" : undefined,
              width: menuOpen ? "100vw" : undefined,
              backgroundColor: menuOpen ? "rgba(8, 12, 20, 0.95)" : undefined,
              padding: menuOpen ? "20px" : undefined,
              gap: menuOpen ? "16px" : undefined,
              borderBottom: menuOpen ? "1px solid rgba(255, 255, 255, 0.08)" : undefined,
            }}
          >
            <a href="#services" className="nav-link" onClick={() => setMenuOpen(false)}>
              Our Services
            </a>
            <a href="#why-us" className="nav-link" onClick={() => setMenuOpen(false)}>
              Why Choose Us
            </a>
            <a href="#booking" className="nav-link" onClick={() => setMenuOpen(false)}>
              Book Repair
            </a>
            <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </nav>

          <a href="#booking" className="btn btn-primary nav-cta" id="nav-cta-btn">
            <i className="fa-regular fa-calendar-check"></i> Book Online
          </a>

          <button 
            className="mobile-menu-toggle" 
            id="mobile-toggle" 
            aria-label="Toggle Navigation Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </button>
        </div>
      </header>
    </>
  );
}
