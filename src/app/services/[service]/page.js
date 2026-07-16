"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";

const serviceDetails = {
  ac: {
    title: "AC Not Cooling? Get Expert AC Repair & Service in Kochi",
    h1: "AC Repair, Gas Filling & Servicing in Kochi",
    description: "Star Cool provides certified, fast, and high-integrity AC diagnostics, gas charging, filter cleanup, and compressor replacement. Get your split or window air conditioner serviced by experts.",
    longDesc: "Do not worry! Just Call Star Cool. Get your AC serviced by expert technicians. We resolve low cooling, water leakage, starting failures, and remote controls connectivity issues with genuine spare parts.",
    price: "From ₹399",
    img: "/images/ac.png",
    alt: "Home appliance technician servicing AC",
    bullets: [
      "Certified AC Engineers with 7+ years of experience",
      "Gas Charging / Refills with genuine refrigerants",
      "Leakage fixing and drain tube cleanup",
      "Compressor replacements with warranty"
    ]
  },
  "washing-machine": {
    title: "Washing Machine Service & Repair in Kochi | Front/Top Load",
    h1: "Professional Washing Machine Repair in Kochi",
    description: "Washing Machine repair at Affordable, Professional & Reliable Service. We fix top load, front load, and semi-automatic machines of all major brands.",
    longDesc: "If your washing machine is not spinning, making a loud noise, not draining water, or displaying error codes, our expert technicians can diagnose and repair it immediately.",
    price: "From ₹499",
    img: "/images/washing_machine.png",
    alt: "Appliance service in Kochi for washing machine",
    bullets: [
      "Drum and motor diagnostic checks",
      "Drain pump clearing and valve replacement",
      "Digital panel control card repairs",
      "Door lock and seal gasket replacements"
    ]
  },
  refrigerator: {
    title: "Refrigerator Not Working? Expert Fridge Repair in Kochi",
    h1: "Refrigerator Repair & Thermostat Servicing",
    description: "Star Cool is here to fix all the problems relating to refrigerators. From single-door, double-door, to premium French door refrigerators, we resolve cooling errors at your doorstep.",
    longDesc: "We address frost buildup, compressor failures, gas leakage, thermostat malfunction, and interior lighting issues. Get immediate doorstep response in Kochi Bypass near you.",
    price: "From ₹450",
    img: "/images/refrigerator.png",
    alt: "Kochi appliance repair for refrigerator",
    bullets: [
      "Thermostat and relay repairs",
      "Refrigerant gas leak checks and refilling",
      "Frost control timer & heater diagnostics",
      "Door magnetic gasket replacements"
    ]
  },
  microwave: {
    title: "Microwave Oven Repair & Service in Kochi | Professional Servicing",
    h1: "Microwave Oven Repairs & Servicing in Kochi",
    description: "It is the time for Microwave Oven repairs and services in Kochi from our professionals. We handle convection, grill, and solo ovens.",
    longDesc: "Our engineers diagnose heating tube failures, control pad issues, magnetron sparkings, turntable glass motor failures, and power board breakdowns.",
    price: "From ₹350",
    img: "/images/microwave.png",
    alt: "Fixing home appliances microwave",
    bullets: [
      "Magnetron heating element replacements",
      "Glass tray turntable motor fixes",
      "Keypad board and relay repairs",
      "Interlock door microswitch diagnostics"
    ]
  },
  freezer: {
    title: "Deep Freezer Repair & Service in Kochi | Star Cool",
    h1: "Trader of Deep Freezer Repair Service in Kochi",
    description: "We are the leading Trader of Deep Freezer Repair Service in Kochi. Get rapid diagnostics for commercial chest freezers and visual coolers.",
    longDesc: "From commercial display coolers, walk-in coolers, to chest freezers, we handle refrigerant leakage, temperature control failures, fan motor issues, and start capacitors.",
    price: "From ₹499",
    img: "/images/freezer.png",
    alt: "Affordable deep freezer repair service",
    bullets: [
      "Commercial chest freezer gas refilling",
      "Fan motor and start capacitor fixes",
      "Digital temperature control installations",
      "Defrost system diagnostic checks"
    ]
  },
  dishwasher: {
    title: "Professional Dishwasher Maintenance & Repair Service Kochi",
    h1: "Professional Dishwasher Maintenance & Repair",
    description: "Professional dishwasher maintenance and repairing service. Star Cool handles multi-brand built-in and free-standing dishwasher installations.",
    longDesc: "We resolve water standing errors, spray arm clogging, glass staining, door latch errors, control panel breakdowns, and heating element malfunctions.",
    price: "From ₹450",
    img: "/images/dishwasher.png",
    alt: "Professional dishwasher service",
    bullets: [
      "Spray arm descaling and replacements",
      "Drain pump motor clearing and fixes",
      "Heating element replacement with warranty",
      "Door latch sensor switch diagnostics"
    ]
  }
};

export default function ServicePage() {
  const params = useParams();
  const serviceKey = params?.service;
  const details = serviceDetails[serviceKey];
  const [selectedService, setSelectedService] = useState("");

  // Map route URL keys to standard form keys
  useEffect(() => {
    if (serviceKey === "washing-machine") {
      setSelectedService("washing_machine");
    } else if (serviceDetails[serviceKey]) {
      setSelectedService(serviceKey);
    }
  }, [serviceKey]);

  if (!details) {
    return (
      <>
        <Navbar />
        <main className="container" style={{ padding: "100px 24px", textAlign: "center" }}>
          <h2>Service Category Not Found</h2>
          <p>Please browse our valid services using the header menu.</p>
          <Link href="/" className="btn btn-gradient btn-lg" style={{ marginTop: "24px" }}>
            Return Home
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main>
        {/* Dynamic Hero Section */}
        <section className="hero-section" style={{ paddingBottom: "40px" }}>
          <div className="container">
            <div className="hero-header-grid" style={{ marginBottom: "30px" }}>
              <div>
                <span className="badge-tag">
                  <i className="fa-screwdriver-wrench fa-solid"></i> Star Cool Service
                </span>
                <h1 className="hero-title" id="main-heading">
                  {details.h1}
                </h1>
                <p className="hero-subtitle" style={{ margin: "20px 0" }}>
                  {details.description}
                </p>
                <div className="hero-actions">
                  <a href="#booking" className="btn btn-gradient btn-lg">
                    <i className="fa-solid fa-phone-volume"></i> Schedule Service
                  </a>
                </div>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div 
                  className="slide-card" 
                  style={{ 
                    maxWidth: "100%", 
                    transform: "none", 
                    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                    border: "1.5px solid rgba(0,0,0,0.1)"
                  }}
                >
                  <div className="slide-img-wrapper" style={{ height: "300px" }}>
                    <Image 
                      src={details.img} 
                      alt={details.alt} 
                      width={600} 
                      height={300} 
                      priority
                      style={{ objectFit: "cover" }} 
                    />
                    <div className="service-tag">{details.price}</div>
                  </div>
                  <div className="slide-content">
                    <h3 className="slide-title">{details.title}</h3>
                    <p className="slide-desc">{details.longDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage details */}
        <section className="services-overview-section" style={{ backgroundColor: "#ffffff", padding: "80px 0" }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: "40px" }}>
              <span className="subtitle">Service Coverage</span>
              <h2>What we do under this category</h2>
            </div>
            
            <div 
              style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
                gap: "24px",
                maxWidth: "1000px",
                margin: "0 auto"
              }}
            >
              {details.bullets.map((bullet, idx) => (
                <div 
                  key={idx} 
                  className="feature-card" 
                  style={{ padding: "30px", border: "1.5px solid rgba(0, 0, 0, 0.12)" }}
                >
                  <div className="card-icon"><i className="fa-solid fa-circle-check"></i></div>
                  <h3>Service Quality</h3>
                  <p>{bullet}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic Booking form (prefilled selection) */}
        <BookingForm selectedService={selectedService} setSelectedService={setSelectedService} />
      </main>

      <Footer setSelectedService={setSelectedService} />
    </>
  );
}
