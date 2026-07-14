import React from "react";

export default function Footer({ setSelectedService }) {
  const handleServiceClick = (serviceId) => {
    setSelectedService(serviceId);
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="main-footer" id="contact">
      <div className="container footer-grid">
        <div className="footer-about">
          <a href="#" className="logo">
            <span className="logo-text">
              STAR <span className="text-cyan">COOL</span>
            </span>
          </a>
          <p className="footer-desc">
            Professional and high-integrity multi-brand home appliances repair, servicing, and installation in Kochi. Experienced experts at your service.
          </p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Services</h3>
          <ul>
            <li>
              <button className="btn-link-raw" style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }} onClick={() => handleServiceClick("ac")}>
                AC Repair
              </button>
            </li>
            <li>
              <button className="btn-link-raw" style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }} onClick={() => handleServiceClick("washing_machine")}>
                Washing Machine Repair
              </button>
            </li>
            <li>
              <button className="btn-link-raw" style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }} onClick={() => handleServiceClick("refrigerator")}>
                Refrigerator Repair
              </button>
            </li>
            <li>
              <button className="btn-link-raw" style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }} onClick={() => handleServiceClick("tv")}>
                TV Diagnostics
              </button>
            </li>
            <li>
              <button className="btn-link-raw" style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }} onClick={() => handleServiceClick("microwave")}>
                Microwave Servicing
              </button>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Details</h3>
          <p>
            <i className="fa-solid fa-location-dot text-cyan"></i> Kochi Bypass Road, Near Vyttila, Kochi, Kerala - 682019
          </p>
          <p>
            <i className="fa-solid fa-phone text-cyan"></i> <a href="tel:+919846012345">+91 98460 12345</a>
          </p>
          <p>
            <i className="fa-solid fa-envelope text-cyan"></i> <a href="mailto:support@starcoolkochi.com">support@starcoolkochi.com</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>&copy; 2026 Star Cool Kochi. All rights reserved.</p>
          <p>Designed with ❤️ for premium customer experiences.</p>
        </div>
      </div>
    </footer>
  );
}
