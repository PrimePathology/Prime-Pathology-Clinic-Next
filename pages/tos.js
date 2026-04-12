import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const TOS = (props) => {
  return (
    <>
      <div className="tos-container1">
        <Head>
          <title>TOS - Prime Pathology Clinic</title>
          <meta property="og:title" content="TOS - Prime Pathology Clinic" />
          <meta
            property="og:description"
            content="Transforming healthcare with precision. Prime Pathology Clinic combines cutting-edge clinical testing with expert care to ensure reliable treatment for every patient."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8c302082-e6ba-41a0-9529-d6bf5ec33a06/2ed90a87-a0c5-42e0-91f2-87bf9dd64e29?org_if_sml=1&amp;force_format=original"
          />
          <link rel="canonical" href="https://patho.teleporthq.site/tos" />
          <meta property="og:url" content="https://patho.teleporthq.site/tos" />
        </Head>
        <Navigation></Navigation>
        <section className="hero-section">
          <div className="hero-video-wrapper">
            <video
              src="https://videos.pexels.com/video-files/4114797/4114797-hd_1920_1080_25fps.mp4"
              loop="true"
              muted="true"
              autoPlay="true"
              playsInline="true"
              className="hero-bg-video"
            ></video>
            <div className="page-hero-overlay1"></div>
          </div>
          <div className="floating-elements">
            <div className="page-floating-item page-reagent-1"></div>
            <div className="page-floating-item reagent-2"></div>
            <div className="page-floating-item molecule-1"></div>
          </div>
          <div className="page-hero-content1">
            <div className="hero-text-card">
              <h1 className="hero-title page-hero-title1">
                Advanced Diagnostic &amp; Pathology Services You Can Trust
              </h1>
              <p className="hero-subtitle">
                Utilizing state-of-the-art laboratory technology and expert
                medical insights to deliver precision diagnostics for better
                healthcare outcomes.
              </p>
              <div className="hero-cta-group">
                <a href="#">
                  <div className="btn btn-primary btn-lg">
                    <span>Explore Our Tests</span>
                  </div>
                </a>
                <a href="#">
                  <div className="btn btn-outline btn-lg">
                    <span>View Lab Facilities</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="page-treatment-approach">
          <div className="approach-container">
            <div className="approach-content">
              <h2 className="section-title">Our Treatment Approach</h2>
              <p className="section-content">
                In designing medical services for our clients and patients, we
                use standard pathology laboratory processes that assist
                consultants in carrying out tentative diagnosis to ensure
                reliable and effective treatment.
              </p>
              <div className="approach-features">
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11"></polyline>
                    </svg>
                  </div>
                  <span>Standardized Protocols</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    </svg>
                  </div>
                  <span>Certified Reliability</span>
                </div>
              </div>
            </div>
            <div className="page-approach-visual">
              <div className="workflow-animation">
                <div className="tos-thq-workflow-node-elm1 workflow-node"></div>
                <div className="tos-thq-workflow-node-elm2 workflow-node"></div>
                <div className="tos-thq-workflow-node-elm3 workflow-node"></div>
                <svg width="100%" height="100%" className="workflow-lines">
                  <path
                    d="M 50 50 Q 150 100 250 250"
                    fill="transparent"
                    stroke="var(--color-primary)"
                    strokeDasharray="5 5"
                  ></path>
                </svg>
                <img
                  alt="Lab Workflow"
                  src="https://images.pexels.com/photos/5726789/pexels-photo-5726789.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="page-workflow-img"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="why-engage">
          <div className="section-header-centered">
            <h2 className="section-title">Why You Should Engage Us</h2>
          </div>
          <div className="engage-grid">
            <div className="engage-card">
              <div className="card-icon-wrapper">
                <svg
                  fill="none"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  stroke="var(--color-primary)"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Professionalism</h3>
              <p className="section-content">
                High ethics and conduct with a team of qualified doctors and
                scientists dedicated to accuracy.
              </p>
            </div>
            <div className="engage-card">
              <div className="card-icon-wrapper">
                <svg
                  fill="none"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  stroke="var(--color-primary)"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="m3 21 1.9-1.9a8.5 8.5 0 1 1 3.8 3.8L6.8 21Z"></path>
                  <path d="M9 12h.01"></path>
                  <path d="M12 12h.01"></path>
                  <path d="M15 12h.01"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Scalability</h3>
              <p className="section-content">
                Ability to handle multiple diagnoses simultaneously without
                compromising on speed or quality.
              </p>
            </div>
            <div className="engage-card">
              <div className="card-icon-wrapper">
                <svg
                  fill="none"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  stroke="var(--color-primary)"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M12 2v20"></path>
                  <path d="m4.93 4.93 14.14 14.14"></path>
                  <path d="M2 12h20"></path>
                  <path d="m19.07 4.93-14.14 14.14"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Competence &amp; Value</h3>
              <p className="section-content">
                Partnership-driven care using advanced technology to provide
                maximum clinical value.
              </p>
            </div>
          </div>
        </section>
        <section className="page-services-carousel-section">
          <div className="page-carousel-header">
            <h2 className="section-title">Our Specialized Services</h2>
            <div className="page-carousel-controls">
              <button id="servPrev" className="prev page-carousel-btn">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </button>
              <button id="servNext" className="next page-carousel-btn">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="carousel-track-container">
            <div id="servTrack" className="page-carousel-track">
              <div className="page-service-card">
                <div className="service-icon-box">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Blood Tests</h3>
                <p className="section-content">
                  Comprehensive hematology and biochemistry analysis for
                  complete health screening.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="page-service-card">
                <div className="service-icon-box">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="var(--color-primary)"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="M2 15c6.667-2 13.333-2 20 0"></path>
                    <path d="M2 9c6.667-2 13.333-2 20 0"></path>
                    <path d="M9 22c0-6 0-12 0-18"></path>
                    <path d="M15 22c0-6 0-12 0-18"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">DNA Testing</h3>
                <p className="section-content">
                  Advanced genetic mapping for paternity, ancestry, and
                  hereditary health risk assessment.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="page-service-card">
                <div className="service-icon-box">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Infection Screening</h3>
                <p className="section-content">
                  Rapid and accurate detection of viral, bacterial, and fungal
                  pathogens.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="page-service-card">
                <div className="service-icon-box">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="var(--color-primary)"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="M10 2v7.31"></path>
                    <path d="M14 9.3V1.99"></path>
                    <path d="M8.5 2h7"></path>
                    <path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path>
                    <path d="M5.52 16h12.96"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Histopathology</h3>
                <p className="section-content">
                  Expert tissue analysis for oncology and complex diagnostic
                  investigations.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="equipment-showcase">
          <div className="showcase-container">
            <div className="showcase-header">
              <h2 className="section-title">
                Lab Equipment &amp; Tests Showcase
              </h2>
            </div>
            <div className="page-equipment-grid">
              <div className="equipment-item large">
                <img
                  alt="Microscopes"
                  src="https://images.pexels.com/photos/5726834/pexels-photo-5726834.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="eq-img"
                />
                <div className="eq-overlay">
                  <h3 className="section-subtitle">Microscopes</h3>
                  <p className="section-content">
                    High-resolution optical imaging for cellular analysis.
                  </p>
                </div>
              </div>
              <div className="equipment-item">
                <img
                  alt="Centrifuges"
                  src="https://images.pexels.com/photos/8442534/pexels-photo-8442534.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="eq-img"
                />
                <div className="eq-overlay">
                  <h3 className="section-subtitle">Centrifuges</h3>
                </div>
              </div>
              <div className="equipment-item">
                <img
                  alt="Reagents"
                  src="https://images.pexels.com/photos/5726813/pexels-photo-5726813.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="eq-img"
                />
                <div className="eq-overlay">
                  <h3 className="section-subtitle">Reagents</h3>
                </div>
              </div>
              <div className="equipment-item wide">
                <img
                  alt="Diagnostic machines"
                  src="https://images.pexels.com/photos/9574459/pexels-photo-9574459.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="eq-img"
                />
                <div className="eq-overlay">
                  <h3 className="section-subtitle">Diagnostic Machines</h3>
                  <p className="section-content">
                    Automated high-throughput testing systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="partners-slider">
          <div className="slider-wrapper">
            <div className="slider-track">
              <div className="page-partner-logo">
                <span>St. Mary&apos;s Hospital</span>
              </div>
              <div className="page-partner-logo">
                <span>HealthPlus Org</span>
              </div>
              <div className="page-partner-logo">
                <span>MedLab Global</span>
              </div>
              <div className="page-partner-logo">
                <span>City Diagnostics</span>
              </div>
              <div className="page-partner-logo">
                <span>Unity Health</span>
              </div>
              <div className="page-partner-logo">
                <span>BioTech Labs</span>
              </div>
              <div className="page-partner-logo">
                <span>St. Mary&apos;s Hospital</span>
              </div>
              <div className="page-partner-logo">
                <span>HealthPlus Org</span>
              </div>
              <div className="page-partner-logo">
                <span>MedLab Global</span>
              </div>
              <div className="page-partner-logo">
                <span>City Diagnostics</span>
              </div>
              <div className="page-partner-logo">
                <span>Unity Health</span>
              </div>
              <div className="page-partner-logo">
                <span>BioTech Labs</span>
              </div>
            </div>
          </div>
        </section>
        <section className="process-timeline">
          <div className="page-timeline-container1">
            <div className="timeline-header">
              <h2 className="section-title">Our Diagnostic Journey</h2>
            </div>
            <div className="accordion-group">
              <details open="true" className="page-timeline-item1">
                <summary className="timeline-summary">
                  <span className="step-num">01</span>
                  <span className="step-label">Sample Collection</span>
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    className="chevron"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </summary>
                <div className="timeline-content">
                  <p className="section-content">
                    Our professional phlebotomists ensure a painless and sterile
                    collection process at our clinic or your home.
                  </p>
                </div>
              </details>
              <details className="page-timeline-item1">
                <summary className="timeline-summary">
                  <span className="step-num">02</span>
                  <span className="step-label">Lab Analysis</span>
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    className="chevron"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </summary>
                <div className="timeline-content">
                  <p className="section-content">
                    Samples are processed using advanced reagents and diagnostic
                    machinery under strict quality control.
                  </p>
                </div>
              </details>
              <details className="page-timeline-item1">
                <summary className="timeline-summary">
                  <span className="step-num">03</span>
                  <span className="step-label">Diagnosis</span>
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    className="chevron"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </summary>
                <div className="timeline-content">
                  <p className="section-content">
                    Expert pathologists review the data to provide accurate
                    medical insights and tentative diagnoses.
                  </p>
                </div>
              </details>
              <details className="page-timeline-item1">
                <summary className="timeline-summary">
                  <span className="step-num">04</span>
                  <span className="step-label">Result Delivery</span>
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    className="chevron"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </summary>
                <div className="timeline-content">
                  <p className="section-content">
                    Fast and secure delivery of digital reports via email and
                    physical copies available at the clinic.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="war-room">
          <div className="cinematic-overlay"></div>
          <div className="war-room-content">
            <div className="war-room-grid">
              <div className="war-room-text">
                <h2 className="hero-title page-hero-title1">
                  Inside the Lab Activity
                </h2>
                <p className="section-content">
                  Watch our dedicated team of scientists and technicians operate
                  cutting-edge equipment in real-time. Precision is our
                  language, and accuracy is our promise.
                </p>
                <button className="btn-accent btn btn-lg">
                  View Live Stats
                </button>
              </div>
              <div className="war-room-visuals">
                <div className="video-card">
                  <img
                    alt="Lab Activity"
                    src="https://images.pexels.com/photos/5726795/pexels-photo-5726795.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="video-thumb"
                  />
                  <div className="play-pulse">
                    <svg
                      fill="white"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <path d="m7 4 12 8-12 8V4z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="license-certification">
          <div className="cert-container">
            <h2 className="section-title">License &amp; Certification</h2>
            <div className="badge-row">
              <div className="cert-badge">
                <div className="badge-inner">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="var(--color-primary)"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                  <span>ISO 9001:2015</span>
                </div>
              </div>
              <div className="cert-badge">
                <div className="badge-inner">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="var(--color-accent)"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="M12 2v20"></path>
                    <path d="m4.93 4.93 14.14 14.14"></path>
                    <path d="M2 12h20"></path>
                    <path d="m19.07 4.93-14.14 14.14"></path>
                  </svg>
                  <span>MLSCN Approved</span>
                </div>
              </div>
              <div className="cert-badge">
                <div className="badge-inner">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="var(--color-primary)"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>Govt. Certified</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="location-section">
          <div className="location-container">
            <div className="location-info">
              <h2 className="section-title">Visit Our Laboratory</h2>
              <p className="section-content">
                State-of-the-art facilities located in the heart of the Kano, 
                for easy access and rapid diagnostics.
              </p>
            </div>
            <div className="map-wrapper">
              <div className="map-placeholder">
                <div className="map-pin"></div>
              </div>
            </div>
          </div>
        </section>
        <div className="tos-container2">
          <div className="tos-container3">
            <Script
              html={`<style>
        @keyframes slideUp {from {opacity: 0;
transform: translateY(30px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes float {from {transform: translate(0, 0);}
to {transform: translate(20px, 40px);}}@keyframes scroll {from {transform: translateX(0);}
to {transform: translateX(-50%);}}@keyframes pulse {0% {box-shadow: 0 0 0 0 rgba(0, 119, 217, 0.7);}
70% {box-shadow: 0 0 0 20px rgba(0, 119, 217, 0);}
100% {box-shadow: 0 0 0 0 rgba(0, 119, 217, 0);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="tos-container4">
          <div className="tos-container5">
            <Script
              html={`<script defer data-name="prime-pathology-js">
(function(){
  // Mobile Menu Toggle
  const menuToggle = document.getElementById("menuToggle")
  const nav = document.getElementById("mainNav")

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active")
      const lines = menuToggle.querySelectorAll(".hamburger-line")
      lines[0].style.transform = nav.classList.contains("active") ? "rotate(45deg) translate(5px, 5px)" : "none"
      lines[1].style.opacity = nav.classList.contains("active") ? "0" : "1"
      lines[2].style.transform = nav.classList.contains("active") ? "rotate(-45deg) translate(5px, -5px)" : "none"
    })
  }

  // Simple Carousel Logic
  const track = document.getElementById("servTrack")
  const nextBtn = document.getElementById("servNext")
  const prevBtn = document.getElementById("servPrev")

  if (track && nextBtn && prevBtn) {
    let scrollAmount = 0
    const step = 320 // Card width + gap approx

    nextBtn.addEventListener("click", () => {
      const maxScroll = track.scrollWidth - track.clientWidth
      scrollAmount = Math.min(scrollAmount + step, maxScroll)
      track.style.transform = \`translateX(-\${scrollAmount}px)\`
    })

    prevBtn.addEventListener("click", () => {
      scrollAmount = Math.max(scrollAmount - step, 0)
      track.style.transform = \`translateX(-\${scrollAmount}px)\`
    })
  }

  // Scroll Reveal Observer
  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  document.querySelectorAll(".engage-card, .service-card, .equipment-item, .team-member").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "all 0.6s ease-out"
    observer.observe(el)
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .tos-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .tos-thq-workflow-node-elm1 {
            top: 10%;
            left: 10%;
          }
          .tos-thq-workflow-node-elm2 {
            top: 50%;
            left: 80%;
          }
          .tos-thq-workflow-node-elm3 {
            top: 80%;
            left: 30%;
          }
          .tos-container2 {
            display: none;
          }
          .tos-container3 {
            display: contents;
          }
          .tos-container4 {
            display: none;
          }
          .tos-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default TOS
