"use client";

import React, { useState, useEffect } from "react";

const commonIssues = {
  ac: [
    "AC is not cooling properly",
    "Water is leaking from indoor unit",
    "Making loud clicking or whirring noise",
    "AC unit does not power on / start",
    "Filter cleanup & general servicing"
  ],
  washing_machine: [
    "Machine does not spin / drum stuck",
    "Water is not draining out",
    "Excessive vibration or noise during spin",
    "Door lock or lid error code",
    "Water leaking on the floor"
  ],
  refrigerator: [
    "Not cooling / freezer section warm",
    "Excessive ice buildup / frost issue",
    "Loud humming noise from rear",
    "Water pooling inside or underneath",
    "Door gasket replacement / seal issue"
  ],
  tv: [
    "Black screen / no display display",
    "No sound / crackling audio",
    "Vertical or horizontal lines on panel",
    "HDMI / connection port failure",
    "Power indicator blinking, no start"
  ],
  microwave: [
    "Microwave not heating food",
    "Sparking inside heating chamber",
    "Glass turntable not rotating",
    "Button keys / touch screen not responding"
  ],
  freezer: [
    "Deep freezer high temperature warning",
    "Loud vibration from compressor",
    "Extreme ice sheet accumulation"
  ],
  dishwasher: [
    "Dishes coming out dirty / wet",
    "Water leak from front door seal",
    "Standing water / drainage failure",
    "Cycle not starting / selector error"
  ]
};

export default function BookingForm({ selectedService, setSelectedService }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedIssue, setSelectedIssue] = useState("");
  const [customIssueText, setCustomIssueText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Automatically reset issue state when selected appliance changes
  useEffect(() => {
    setSelectedIssue("");
    setCustomIssueText("");
  }, [selectedService]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const finalIssueDescription = selectedIssue === "custom" 
      ? customIssueText 
      : selectedIssue;

    try {
      const response = await fetch("https://bloggfeature.certifyied.workers.dev/adminApiBlog/api/contact?projectId=17a41d82-d567-4fa8-a9a7-b1397d471e83", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          sender_name: name,
          sender_email: email,
          phone_number: phone,
          subject: `Star Cool Kochi Service Request: ${selectedService.toUpperCase()}`,
          message: `Appliance Type: ${selectedService}\nIssue Details: ${finalIssueDescription}`
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Failed to submit request. Please try again or call us directly.");
      }
    } catch (err) {
      console.error("Star Cool Submission Error:", err);
      alert("Something went wrong. Please check your internet connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const currentIssuesList = selectedService ? commonIssues[selectedService] || [] : [];

  return (
    <section className="booking-section" id="booking">
      <div className="container booking-container">
        <div className="booking-info">
          <h2>Schedule your home visit today!</h2>
          <p>
            Fill out the service inquiry form. Our support desk will reach out to you within 10 minutes to verify details and allocate a technician nearby in Kochi.
          </p>
          
          <div className="direct-contact">
            <div className="contact-icon">
              <i className="fa-solid fa-headset text-cyan"></i>
            </div>
            <div>
              <span>Need emergency repair?</span>
              <a href="tel:+919846012345" className="direct-tel">
                +91 98460 12345
              </a>
            </div>
          </div>
        </div>

        <div className="booking-form-wrapper">
          {!submitted ? (
            <form className="booking-form" onSubmit={handleSubmit} id="service-booking-form">
              <div className="form-group">
                <label htmlFor="booking-name">Full Name</label>
                <input 
                  type="text" 
                  id="booking-name" 
                  placeholder="E.g., Rahul Sharma" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="booking-email">Email Address</label>
                <input 
                  type="email" 
                  id="booking-email" 
                  placeholder="E.g., rahul@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="booking-phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="booking-phone" 
                  placeholder="E.g., +91 98460 12345" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="booking-service">Appliance Service Needed</label>
                <select 
                  id="booking-service" 
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  required
                >
                  <option value="" disabled>Select Appliance</option>
                  <option value="ac">Air Conditioner (AC)</option>
                  <option value="washing_machine">Washing Machine</option>
                  <option value="refrigerator">Refrigerator / Fridge</option>
                  <option value="tv">Television (LED / OLED)</option>
                  <option value="microwave">Microwave Oven</option>
                  <option value="freezer">Deep Freezer</option>
                  <option value="dishwasher">Dishwasher</option>
                </select>
              </div>

              {/* Dynamic Common Issues Dropdown */}
              <div className="form-group">
                <label htmlFor="booking-issue-select">What is the Issue?</label>
                <select
                  id="booking-issue-select"
                  value={selectedIssue}
                  onChange={(e) => setSelectedIssue(e.target.value)}
                  disabled={!selectedService}
                  required
                >
                  <option value="" disabled>
                    {selectedService ? "Select common problem" : "Select appliance first"}
                  </option>
                  {currentIssuesList.map((issueOption, index) => (
                    <option key={index} value={issueOption}>
                      {issueOption}
                    </option>
                  ))}
                  {selectedService && (
                    <option value="custom">Other / Custom Issue (describe below)</option>
                  )}
                </select>
              </div>

              {/* Reveal text box for typing custom details if 'custom' is selected */}
              {selectedIssue === "custom" && (
                <div className="form-group">
                  <label htmlFor="booking-custom-issue">Describe your Problem</label>
                  <textarea 
                    id="booking-custom-issue" 
                    rows={3} 
                    placeholder="E.g. The AC turns on but runs for only 5 minutes before shutting off entirely..." 
                    value={customIssueText}
                    onChange={(e) => setCustomIssueText(e.target.value)}
                    required
                  ></textarea>
                </div>
              )}

              <button type="submit" className="btn btn-gradient btn-full" id="submit-booking" disabled={submitting}>
                {submitting ? "Submitting Request..." : "Submit Service Request"}
              </button>
            </form>
          ) : (
            <div className="form-success-message" id="form-success">
              <div className="success-icon">
                <i className="fa-solid fa-circle-check text-cyan"></i>
              </div>
              <h3>Request Submitted!</h3>
              <p>Thank you, {name}. We will contact you at {phone} shortly.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
