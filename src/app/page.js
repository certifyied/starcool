"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function Home() {
  const [selectedService, setSelectedService] = useState("");

  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section with two column layout and embedded curved carousel */}
        <section className="hero-section">
          <div className="container">
            
            {/* Top row: Headline left, Paragraph + Actions right */}
            <div className="hero-header-grid">
              <div>
                <h1 className="hero-title" id="main-heading">
                  Seek the timely assistance of experts in <span className="hero-highlight">home appliance repair services!</span>
                </h1>
              </div>
              
              <div className="hero-description-col">
                <p className="hero-subtitle">
                  Star Cool provides fast, certified, and budget-friendly troubleshooting and maintenance for all your home appliances. Experience premium repair at your doorstep in Kochi.
                </p>
                <div className="hero-actions">
                  <a href="#booking" className="btn btn-gradient btn-lg">
                    <i className="fa-solid fa-phone-volume"></i> Schedule Service
                  </a>
                  <a href="#services" className="btn btn-secondary btn-lg">
                    Explore Services
                  </a>
                </div>
              </div>
            </div>

            {/* 3D Curved Carousel (embedded in Hero) */}
            <Carousel setSelectedService={setSelectedService} />
            
          </div>
        </section>

        {/* Key Services Grid */}
        <section className="services-overview-section" id="services">
          <div className="container">
            <div className="section-header">
              <span className="subtitle">Complete Coverage</span>
              <h2>What we fix with master skills</h2>
              <p>
                Whether it is cooling, heating, or electronic diagnostic issues, our Kochi-based team resolves them with OEM genuine replacement parts.
              </p>
            </div>

            <div className="grid services-grid">
              <div className="feature-card">
                <div className="card-icon">
                  <i className="fa-solid fa-snowflake"></i>
                </div>
                <h3>Air Conditioners</h3>
                <p>Leak fixing, gas refills, compressor replacement, filter cleaning, and breakdown repairs.</p>
              </div>
              <div className="feature-card">
                <div className="card-icon">
                  <i className="fa-solid fa-circle-nodes"></i>
                </div>
                <h3>Washing Machines</h3>
                <p>Drum fixes, spin issues, water discharge problems, digital panel repairs, and sound minimization.</p>
              </div>
              <div className="feature-card">
                <div className="card-icon">
                  <i className="fa-solid fa-temperature-arrow-down"></i>
                </div>
                <h3>Refrigerators</h3>
                <p>No cooling fixes, frost control errors, gas leak repairs, thermostat and relay changes.</p>
              </div>
              <div className="feature-card">
                <div className="card-icon">
                  <i className="fa-solid fa-tv"></i>
                </div>
                <h3>Smart TVs</h3>
                <p>Panel replacement, backlight diagnostics, audio boards, motherboard repairs for all major brands.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-us-section" id="why-us">
          <div className="container why-container">
            <div className="why-text">
              <span className="subtitle font-bold text-teal">Why Star Cool?</span>
              <h2>Top-tier repairs with absolute transparency</h2>
              <p>
                Our customers choose us because of our immediate support response and the skilled precision of our engineers. We provide a full transparent diagnosis before starting any repair work.
              </p>
              
              <ul className="why-list">
                <li>
                  <div className="list-bullet">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <div>
                    <strong>Quick Response</strong>
                    <p>We arrive at your doorstep in Kochi within 90 minutes of call confirmation.</p>
                  </div>
                </li>
                <li>
                  <div className="list-bullet">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <div>
                    <strong>Highly Trained Engineers</strong>
                    <p>All our service engineers are certified with 7+ years of diagnostic experience.</p>
                  </div>
                </li>
                <li>
                  <div className="list-bullet">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <div>
                    <strong>Service Warranty</strong>
                    <p>Get up to 90 days warranty on both spare parts replacements and labor services.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="why-stats">
              <div className="stat-card">
                <span className="stat-number">15K+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">98%</span>
                <span className="stat-label">Repair Success Rate</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">90m</span>
                <span className="stat-label">Average Arrival Time</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">100%</span>
                <span className="stat-label">Genuine Spare Parts</span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Booking Form */}
        <BookingForm selectedService={selectedService} setSelectedService={setSelectedService} />
      </main>

      <Footer setSelectedService={setSelectedService} />
    </>
  );
}
