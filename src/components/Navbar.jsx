"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

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
          <Link href="/" className="logo" id="header-logo">
            <span className="logo-text">
              STAR <span className="text-cyan">COOL</span>
            </span>
          </Link>

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
              backgroundColor: menuOpen ? "rgba(15, 118, 110, 0.98)" : undefined,
              padding: menuOpen ? "24px" : undefined,
              gap: menuOpen ? "16px" : undefined,
              borderBottom: menuOpen ? "1px solid rgba(255, 255, 255, 0.1)" : undefined,
            }}
          >
            <Link href="/#why-us" className="nav-link" onClick={handleLinkClick}>
              About
            </Link>

            {/* Services Dropdown */}
            <div 
              className="nav-item-dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button 
                className="nav-link dropdown-toggle" 
                style={{ background: "none", border: "none", cursor: "pointer", width: "100%", textAlign: "left" }}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Services <i className="fa-solid fa-chevron-down" style={{ fontSize: "11px" }}></i>
              </button>
              
              <div 
                className="dropdown-menu"
                style={{
                  display: dropdownOpen ? "flex" : undefined,
                  opacity: dropdownOpen ? 1 : undefined,
                  visibility: dropdownOpen ? "visible" : undefined,
                  transform: dropdownOpen ? "translateX(-50%) translateY(4px)" : undefined,
                  // Mobile adjustment overrides:
                  position: menuOpen ? "static" : undefined,
                  transform: menuOpen ? "none" : undefined,
                  minWidth: menuOpen ? "100%" : undefined,
                  boxShadow: menuOpen ? "none" : undefined,
                  backgroundColor: menuOpen ? "transparent" : undefined,
                  border: menuOpen ? "none" : undefined,
                  padding: menuOpen ? "0 0 0 16px" : undefined,
                }}
              >
                <Link href="/services/ac" className="dropdown-item" onClick={handleLinkClick} style={{ color: menuOpen ? "#ffffff" : undefined }}>
                  AC Service
                </Link>
                <Link href="/services/washing-machine" className="dropdown-item" onClick={handleLinkClick} style={{ color: menuOpen ? "#ffffff" : undefined }}>
                  Washing Machine Service
                </Link>
                <Link href="/services/refrigerator" className="dropdown-item" onClick={handleLinkClick} style={{ color: menuOpen ? "#ffffff" : undefined }}>
                  Refrigerator Service
                </Link>
                <Link href="/services/microwave" className="dropdown-item" onClick={handleLinkClick} style={{ color: menuOpen ? "#ffffff" : undefined }}>
                  Microwave Service
                </Link>
                <Link href="/services/freezer" className="dropdown-item" onClick={handleLinkClick} style={{ color: menuOpen ? "#ffffff" : undefined }}>
                  Freezer Service
                </Link>
                <Link href="/services/dishwasher" className="dropdown-item" onClick={handleLinkClick} style={{ color: menuOpen ? "#ffffff" : undefined }}>
                  Dishwasher Service
                </Link>
              </div>
            </div>

            <Link href="/#booking" className="nav-link" onClick={handleLinkClick}>
              Complaint Register
            </Link>
            <Link href="/#services" className="nav-link" onClick={handleLinkClick}>
              Blog
            </Link>
            <Link href="/#contact" className="nav-link" onClick={handleLinkClick}>
              Contact Us
            </Link>
          </nav>

          <Link href="/#booking" className="btn btn-primary nav-cta" id="nav-cta-btn">
            <i className="fa-regular fa-calendar-check"></i> Book Online
          </Link>

          <button 
            className="mobile-menu-toggle" 
            id="mobile-toggle" 
            aria-label="Toggle Navigation Menu"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "#ffffff" }}
          >
            <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </button>
        </div>
      </header>
    </>
  );
}
