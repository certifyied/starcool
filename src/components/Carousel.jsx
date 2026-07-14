"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const slideData = [
  {
    id: "ac",
    title: "AC Not Cooling?",
    tag: "AC Service",
    desc: "Do not worry! Just Call Star Cool. Get your AC serviced by expert technicians.",
    price: "₹399",
    img: "/images/ac.png",
    alt: "Home appliance technician servicing AC"
  },
  {
    id: "washing_machine",
    title: "Washing Machine Service",
    tag: "Washing Machine",
    desc: "Washing Machine repair at Affordable, Professional & Reliable Service.",
    price: "₹499",
    img: "/images/washing_machine.png",
    alt: "Appliance service in Kochi for washing machine"
  },
  {
    id: "refrigerator",
    title: "Refrigerator Not Working?",
    tag: "Refrigerator",
    desc: "Star Cool is here to fix all the problems relating to refrigerators.",
    price: "₹450",
    img: "/images/refrigerator.png",
    alt: "Kochi appliance repair for refrigerator"
  },
  {
    id: "tv",
    title: "TV Service",
    tag: "TV Service",
    desc: "Dedicated and highly Technical Engineers who can perform Branded LED, LCD, HD, Plasma TV and OLED TV’s of any brand.",
    price: "₹599",
    img: "/images/tv.png",
    alt: "Appliance diagnosis and repair for Branded TV"
  },
  {
    id: "microwave",
    title: "Microwave Service",
    tag: "Microwave",
    desc: "It is the time for Microwave Oven repairs and services in Kochi from our professionals.",
    price: "₹350",
    img: "/images/microwave.png",
    alt: "Fixing home appliances microwave"
  },
  {
    id: "freezer",
    title: "Freezer Service",
    tag: "Freezer Service",
    desc: "We are the leading Trader of Deep Freezer Repair Service in Kochi.",
    price: "₹499",
    img: "/images/freezer.png",
    alt: "Affordable deep freezer repair service"
  },
  {
    id: "dishwasher",
    title: "Dishwasher Service",
    tag: "Dishwasher",
    desc: "Professional dishwasher maintenance and repairing service",
    price: "₹450",
    img: "/images/dishwasher.png",
    alt: "Professional dishwasher service"
  }
];

export default function Carousel({ setSelectedService }) {
  const scrollerRef = useRef(null);
  const itemsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const isScrollDrivenSupported = CSS.supports('(animation-timeline: view()) and (animation-range: entry)');

    const handleScroll = () => {
      // 1. Fallback 3D cylinder calculations
      if (!isScrollDrivenSupported) {
        const scrollerRect = scroller.getBoundingClientRect();
        const scrollerCenter = scrollerRect.left + scrollerRect.width / 2;
        const maxDist = scrollerRect.width / 1.6;

        itemsRef.current.forEach((item) => {
          if (!item) return;
          const itemRect = item.getBoundingClientRect();
          const itemCenter = itemRect.left + itemRect.width / 2;
          const distFromCenter = itemCenter - scrollerCenter;
          
          let ratio = distFromCenter / maxDist;
          ratio = Math.max(-1, Math.min(1, ratio));

          const rotateY = -ratio * 28;
          const translateY = (1 - Math.abs(ratio)) * 12 - Math.abs(ratio) * 24;
          const translateZ = (1 - Math.abs(ratio)) * 50 - Math.abs(ratio) * 160;
          const scale = 0.85 + (1 - Math.abs(ratio)) * 0.21;
          const opacity = 0.5 + (1 - Math.abs(ratio)) * 0.5;
          const blurVal = Math.abs(ratio) * 3;

          item.style.transform = `perspective(1200px) rotateY(${rotateY}deg) translateY(${translateY}px) translateZ(${translateZ}px) scale(${scale})`;
          item.style.opacity = opacity;
          item.style.filter = `blur(${blurVal}px)`;
          
          if (Math.abs(ratio) < 0.25) {
            item.style.zIndex = 10;
          } else {
            item.style.zIndex = 1;
          }
        });
      }

      // 2. Active Indicator Highlights
      const scrollerRect = scroller.getBoundingClientRect();
      const scrollerCenter = scrollerRect.left + scrollerRect.width / 2;
      let minDistance = Infinity;
      let calculatedActiveIndex = 0;

      itemsRef.current.forEach((item, idx) => {
        if (!item) return;
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.left + itemRect.width / 2;
        const distance = Math.abs(itemCenter - scrollerCenter);

        if (distance < minDistance) {
          minDistance = distance;
          calculatedActiveIndex = idx;
        }
      });

      setActiveIndex(calculatedActiveIndex);
    };

    scroller.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Initial offset scroll
    const timer = setTimeout(() => {
      const firstItem = itemsRef.current[0];
      if (firstItem && scroller) {
        const initialScroll = firstItem.offsetLeft - (scroller.clientWidth / 2) + (firstItem.clientWidth / 2);
        scroller.scrollLeft = initialScroll;
      }
      handleScroll();
    }, 100);

    return () => {
      scroller.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleIndicatorClick = (index) => {
    const targetItem = itemsRef.current[index];
    const scroller = scrollerRef.current;
    if (targetItem && scroller) {
      const scrollOffset = targetItem.offsetLeft - (scroller.clientWidth / 2) + (targetItem.clientWidth / 2);
      scroller.scrollTo({
        left: scrollOffset,
        behavior: "smooth"
      });
    }
  };

  const handleScrollBtnClick = (direction) => {
    const scroller = scrollerRef.current;
    const firstItem = itemsRef.current[0];
    if (scroller && firstItem) {
      const itemWidth = firstItem.offsetWidth;
      const gap = 30;
      scroller.scrollBy({
        left: (itemWidth + gap) * direction,
        behavior: "smooth"
      });
    }
  };

  const handleBookNow = (serviceId) => {
    setSelectedService(serviceId);
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container" id="services-carousel-container">
        
        <button 
          className="carousel-nav-btn prev-btn" 
          onClick={() => handleScrollBtnClick(-1)}
          aria-label="Previous Slide"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button 
          className="carousel-nav-btn next-btn" 
          onClick={() => handleScrollBtnClick(1)}
          aria-label="Next Slide"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>

        <div className="carousel-scroller" ref={scrollerRef} id="carousel-scroller">
          {slideData.map((slide, idx) => (
            <div 
              className="carousel-item" 
              key={slide.id}
              ref={(el) => (itemsRef.current[idx] = el)}
              id={`slide-${slide.id}`}
            >
              <div className="slide-card">
                <div className="slide-img-wrapper">
                  <Image 
                    src={slide.img} 
                    alt={slide.alt} 
                    width={340}
                    height={220}
                    priority={idx === 0}
                    style={{ objectFit: "cover" }}
                  />
                  <div className="service-tag">{slide.tag}</div>
                </div>
                <div className="slide-content">
                  <h3 className="slide-title">{slide.title}</h3>
                  <p className="slide-desc">{slide.desc}</p>
                  <div className="slide-footer">
                    <span className="price-indicator">From {slide.price}</span>
                    <button 
                      className="btn-arrow" 
                      onClick={() => handleBookNow(slide.id)}
                    >
                      Book Now <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-indicators">
          {slideData.map((_, idx) => (
            <button 
              key={idx}
              className={`indicator ${activeIndex === idx ? "active" : ""}`}
              onClick={() => handleIndicatorClick(idx)}
              aria-label={`Slide ${idx + 1}`}
            ></button>
          ))}
        </div>

        <div className="scroll-helper">
          <span>Scroll to view gallery</span>
          <div className="scroll-arrow">
            <i className="fa-solid fa-arrow-down-long"></i>
          </div>
        </div>

      </div>
    </div>
  );
}
