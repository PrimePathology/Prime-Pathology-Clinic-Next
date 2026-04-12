import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Team = (props) => {
  return (
    <>
      <div className="team-container1">
        <Head>
          <title>Team - Prime Pathology Clinic</title>
          <meta property="og:title" content="Team - Prime Pathology Clinic" />
          <meta
            property="og:description"
            content="Transforming healthcare with precision. Prime Pathology Clinic combines cutting-edge clinical testing with expert care to ensure reliable treatment for every patient."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8c302082-e6ba-41a0-9529-d6bf5ec33a06/2ed90a87-a0c5-42e0-91f2-87bf9dd64e29?org_if_sml=1&amp;force_format=original"
          />
          <link rel="canonical" href="https://patho.teleporthq.site/team" />
          <meta
            property="og:url"
            content="https://patho.teleporthq.site/team"
          />
        </Head>
        <Navigation></Navigation>
        <div className="team-container2">
          <div className="team-container3">
            <Script
              html={`<style>
section {
  position: relative;
  overflow: hidden;
  padding: var(--spacing-4xl) 0;
}
details[open] .chevron {
  transform: rotate(180deg);
}
</style>`}
            ></Script>
          </div>
        </div>
        <section className="page-hero-section">
          <video
            src="https://videos.pexels.com/video-files/4121061/4121061-hd_1280_720_50fps.mp4"
            loop="true"
            muted="true"
            poster="https://images.pexels.com/videos/4121061/pictures/preview-0.jpg"
            autoPlay="true"
            playsInline="true"
            className="page-hero-video-bg"
          ></video>
          <div className="hero-scrim"></div>
          <div aria-hidden="true" className="page-hero-floating-elements">
            <div className="item-1 page-floating-item1">
              <svg
                width="48"
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewbox="0 0 24 24"
              >
                <path
                  d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5V2m-1 0h7m-1 14h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className="item-2 page-floating-item1">
              <svg
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewbox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.828 14.828a4 4 0 1 0-5.656-5.656a4 4 0 0 0 5.656 5.656"></path>
                  <path d="M9.172 20.485a4 4 0 1 0-5.657-5.657M14.828 3.515a4 4 0 0 0 5.657 5.657"></path>
                </g>
              </svg>
            </div>
            <div className="item-3 page-floating-item1">
              <svg
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewbox="0 0 24 24"
              >
                <path
                  d="M6 18h8M3 22h18m-7 0a7 7 0 1 0 0-14h-1m-4 6h2m-2-2a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Zm3-6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <div className="hero-container">
            <div className="page-hero-content2">
              <h1 className="page-hero-title2 hero-title">
                Advanced Diagnostic &amp; Pathology Services You Can Trust
              </h1>
              <p className="hero-subtitle">
                Empowering healthcare through precision diagnostics and
                innovative laboratory solutions for a healthier tomorrow.
              </p>
              <div className="hero-actions">
                <button className="btn btn-primary btn-lg">
                  Book Test Now
                </button>
                <button className="btn btn-outline btn-lg">
                  View Our Services
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="treatment-section">
          <div className="page-treatment-container">
            <div className="treatment-grid">
              <div className="treatment-content">
                <h2 className="section-title">Our Treatment Approach</h2>
                <p className="section-content">
                  In designing medical services for our clients and patients, we
                  use standard pathology laboratory processes that assist
                  consultants in carrying out tentative diagnosis to ensure
                  reliable and effective treatment.
                </p>
                <div className="treatment-steps">
                  <div className="page-step-item">
                    <span className="page-step-num">01</span>
                    <span className="step-text">Standardized Collection</span>
                  </div>
                  <div className="page-step-item">
                    <span className="page-step-num">02</span>
                    <span className="step-text">
                      Advanced Molecular Analysis
                    </span>
                  </div>
                  <div className="page-step-item">
                    <span className="page-step-num">03</span>
                    <span className="step-text">Physician Collaboration</span>
                  </div>
                </div>
              </div>
              <div className="treatment-visual">
                <div className="visual-card">
                  <img
                    alt="Lab Workflow"
                    src="https://images.pexels.com/photos/5726797/pexels-photo-5726797.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="page-workflow-img1"
                  />
                  <div className="workflow-overlay">
                    <div className="pulse-dot"></div>
                    <div className="workflow-badge">
                      <span>Live Analysis</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="why-choose-section">
          <div className="why-choose-container">
            <h2 className="section-title text-center">
              Why You Should Engage Us
            </h2>
            <div className="why-grid">
              <div className="why-card">
                <div className="why-icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewbox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12l2 2l4-4"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">Professionalism</h3>
                <p className="section-content">
                  High ethics and conduct driven by qualified doctors and
                  world-class scientists committed to accuracy.
                </p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewbox="0 0 24 24"
                  >
                    <path
                      d="M18 21V7m-9 8l3-3l3 3m0-5l3-3l3 3M3 21h18m-9 0v-9M3 6l3-3l3 3M6 21V3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Scalability</h3>
                <p className="section-content">
                  Our infrastructure is built to handle multiple complex
                  diagnoses simultaneously without compromising speed.
                </p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewbox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9a6 6 0 1 0 12 0A6 6 0 1 0 6 9"></path>
                      <path d="m12 15l3.4 5.89l1.598-3.233l3.598.232l-3.4-5.889M6.802 12l-3.4 5.89L7 17.657l1.598 3.232l3.4-5.889"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">Competence &amp; Value</h3>
                <p className="section-content">
                  Partnership-driven care using advanced technology to provide
                  maximum clinical value to every patient.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="services-section">
          <div className="services-container">
            <div className="services-header">
              <h2 className="section-title">Diagnostic Specialties</h2>
              <div className="page-carousel-controls1">
                <button
                  id="prevBtn"
                  aria-label="Previous"
                  className="page-carousel-btn1"
                >
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                </button>
                <button
                  id="nextBtn"
                  aria-label="Next"
                  className="page-carousel-btn1"
                >
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="services-carousel-wrapper">
              <div id="servicesTrack" className="services-track">
                <div className="page-service-card1">
                  <div className="page-service-icon-box">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
                    >
                      <path
                        d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5V2m-1 0h7m-1 14h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">Blood Tests</h3>
                  <p className="section-content">
                    Comprehensive hematology and biochemistry profiles using
                    automated analyzers.
                  </p>
                </div>
                <div className="page-service-card1">
                  <div className="page-service-icon-box">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m10 16l1.5 1.5M14 8l-1.5-1.5M15 2c-1.798 1.998-2.518 3.995-2.807 5.993M16.5 10.5l1 1M17 6l-2.891-2.891M2 15c6.667-6 13.333 0 20-6m-2 0l.891.891M3.109 14.109L4 15m2.5-2.5l1 1M7 18l2.891 2.891M9 22c1.798-1.998 2.518-3.995 2.807-5.993"></path>
                      </g>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">DNA Testing</h3>
                  <p className="section-content">
                    Advanced genetic sequencing for paternity, ancestry, and
                    hereditary markers.
                  </p>
                </div>
                <div className="page-service-card1">
                  <div className="page-service-icon-box">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
                    >
                      <path
                        d="M6 18h8M3 22h18m-7 0a7 7 0 1 0 0-14h-1m-4 6h2m-2-2a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Zm3-6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">Histopathology</h3>
                  <p className="section-content">
                    Microscopic examination of tissue specimens to study the
                    manifestations of disease.
                  </p>
                </div>
                <div className="page-service-card1">
                  <div className="page-service-icon-box">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewbox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">Infection Screening</h3>
                  <p className="section-content">
                    Rapid detection of viral, bacterial, and fungal pathogens
                    using PCR technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="team-section">
          <div className="team-container">
            <h2 className="section-title text-center">
              Our Leadership &amp; Network
            </h2>
            <div className="team-layout">
              <div className="ceo-wrapper">
                <div className="ceo-frame">
                  <img
                    alt="Auwal Garba Hussain"
                    src="https://images.pexels.com/photos/8442102/pexels-photo-8442102.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="page-ceo-img1"
                  />
                  <div className="ceo-info">
                    <h3 className="ceo-name">Auwal Garba Hussain</h3>
                    <span className="ceo-title">The CEO</span>
                  </div>
                </div>
              </div>
              <div className="branch-grid">
                <div className="branch-card">
                  <div className="branch-frame">
                    <img
                      alt="Nigeria Branch"
                      src="https://images.pexels.com/photos/6129879/pexels-photo-6129879.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      className="branch-img"
                    />
                    <div className="branch-overlay">
                      <span className="branch-location">
                        Karimatu Abdullahi Zakari, Nigeria
                      </span>
                    </div>
                  </div>
                </div>
                <div className="branch-card">
                  <div className="branch-frame">
                    <img
                      alt="Liberia Branch"
                      src="https://images.pexels.com/photos/5726811/pexels-photo-5726811.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      className="branch-img"
                    />
                    <div className="branch-overlay">
                      <span className="branch-location">
                        Maryam Mohammed Maitama, Liberia
                      </span>
                    </div>
                  </div>
                </div>
                <div className="branch-card">
                  <div className="branch-frame">
                    <img
                      alt="Tanzania Branch"
                      src="https://images.pexels.com/photos/8442574/pexels-photo-8442574.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      className="branch-img"
                    />
                    <div className="branch-overlay">
                      <span className="branch-location">
                        Aisha Garba Othman, Dar es Salaam Tanzania
                      </span>
                    </div>
                  </div>
                </div>
                <div className="branch-card">
                  <div className="branch-frame">
                    <img
                      alt="Rwanda Branch"
                      src="https://images.pexels.com/photos/4031525/pexels-photo-4031525.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      className="branch-img"
                    />
                    <div className="branch-overlay">
                      <span className="branch-location">
                        Fauziya Ahmed Bello, Kigali, Rwanda
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="war-room-section">
          <div className="war-room-media">
            <video
              src="https://videos.pexels.com/video-files/6130218/6130218-hd_1920_1080_30fps.mp4"
              loop="true"
              muted="true"
              poster="https://images.pexels.com/videos/6130218/pictures/preview-0.jpg"
              autoPlay="true"
              playsInline="true"
              className="war-room-video"
            ></video>
            <div className="war-room-overlay"></div>
          </div>
          <div className="war-room-container">
            <div className="page-war-room-content">
              <h2 className="section-title">The Laboratory War Room</h2>
              <p className="section-content">
                Witness our scientists in action. Using state-of-the-art
                reagents and high-precision equipment, we transform biological
                samples into clinical intelligence.
              </p>
              <div className="war-room-stats">
                <div className="page-stat-box">
                  <span className="stat-num">24/7</span>
                  <span className="stat-label">Active Monitoring</span>
                </div>
                <div className="page-stat-box">
                  <span className="stat-num">99.9%</span>
                  <span className="stat-label">Accuracy Rate</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="process-section">
          <div className="process-container">
            <h2 className="section-title text-center">
              Our Diagnostic Journey
            </h2>
            <div className="page-timeline-accordion">
              <details open="true" className="page-timeline-item2">
                <summary className="page-timeline-header timeline-header">
                  <div className="timeline-marker">
                    <span>1</span>
                  </div>
                  <span className="section-subtitle">Sample Collection</span>
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="page-chevron chevron"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </summary>
                <div className="page-timeline-content">
                  <p className="section-content">
                    Professional collection using sterile, vacuum-sealed systems
                    to maintain sample integrity from the moment of extraction.
                  </p>
                </div>
              </details>
              <details className="page-timeline-item2">
                <summary className="page-timeline-header timeline-header">
                  <div className="timeline-marker">
                    <span>2</span>
                  </div>
                  <span className="section-subtitle">Lab Analysis</span>
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="page-chevron chevron"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </summary>
                <div className="page-timeline-content">
                  <p className="section-content">
                    Samples undergo rigorous processing through our automated
                    diagnostic machines and expert manual review by senior
                    scientists.
                  </p>
                </div>
              </details>
              <details className="page-timeline-item2">
                <summary className="page-timeline-header timeline-header">
                  <div className="timeline-marker">
                    <span>3</span>
                  </div>
                  <span className="section-subtitle">Diagnosis</span>
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="page-chevron chevron"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </summary>
                <div className="page-timeline-content">
                  <p className="section-content">
                    Final interpretation by specialist pathologists who
                    correlate clinical history with laboratory findings for
                    definitive results.
                  </p>
                </div>
              </details>
              <details className="page-timeline-item2">
                <summary className="page-timeline-header timeline-header">
                  <div className="timeline-marker">
                    <span>4</span>
                  </div>
                  <span className="section-subtitle">Result Delivery</span>
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="page-chevron chevron"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </summary>
                <div className="page-timeline-content">
                  <p className="section-content">
                    Secure digital delivery via our patient portal and physical
                    report dispatch, ensuring you and your doctor receive timely
                    updates.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="contact-section">
          <div className="contact-container">
            <div className="contact-grid">
              <div className="contact-info-panel">
                <h2 className="section-title">Visit Our Laboratory</h2>
                <div className="address-list">
                  <div className="address-item">
                    <span className="address-tag">HQ - Nigeria</span>
                    <p className="section-content">
                      Prime Pathology Clinic, Bauchi State, Nigeria
                    </p>
                  </div>
                  <div className="address-item">
                    <span className="address-tag">Liberia</span>
                    <p className="section-content">
                      Main Street, Buchanan, Liberia
                    </p>
                  </div>
                  <div className="address-item">
                    <span className="address-tag">Tanzania</span>
                    <p className="section-content">
                      Salasala District, Dar es Salaam, Tanzania
                    </p>
                  </div>
                </div>
                <div className="cert-badges">
                  <div className="badge-item">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
                    >
                      <path
                        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <span>ISO Certified</span>
                  </div>
                  <div className="badge-item">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
                    >
                      <path
                        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <span>Govt Approved</span>
                  </div>
                </div>
              </div>
              <div className="map-panel">
                <div className="page-map-placeholder">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10000!2d10.0!3d10.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDAwJzAwLjAiTiAxMMKwMDAnMDAuMCJF!5e0!3m2!1sen!2sng!4v1234567890"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    allowFullScreen="true"
                    className="team-iframe"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="team-container4">
          <div className="team-container5">
            <Script
              html={`<style>
        @keyframes float {0%,100% {transform: translateY(0) rotate(0);}
50% {transform: translateY(-30px) rotate(10deg);}}@keyframes fadeInSlideUp {from {opacity: 0;
transform: translateY(30px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes pulse {0% {transform: scale(0.9);
opacity: 0.7;}
50% {transform: scale(1.2);
opacity: 1;}
100% {transform: scale(0.9);
opacity: 0.7;}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="team-container6">
          <div className="team-container7">
            <Script
              html={`<script defer data-name="prime-pathology-team">
(function(){
  // Carousel Logic
  const track = document.getElementById("servicesTrack")
  const nextBtn = document.getElementById("nextBtn")
  const prevBtn = document.getElementById("prevBtn")

  if (track && nextBtn && prevBtn) {
    let currentIndex = 0

    const updateCarousel = () => {
      const cardWidth = track.children[0].offsetWidth + 24 // Width + gap
      track.style.transform = \`translateX(-\${currentIndex * cardWidth}px)\`
    }

    nextBtn.addEventListener("click", () => {
      const maxIndex = track.children.length - (window.innerWidth > 991 ? 3 : window.innerWidth > 767 ? 2 : 1)
      if (currentIndex < maxIndex) {
        currentIndex++
        updateCarousel()
      } else {
        currentIndex = 0
        updateCarousel()
      }
    })

    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--
        updateCarousel()
      }
    })

    window.addEventListener("resize", updateCarousel)
  }

  // Scroll Reveals
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        revealObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll(".why-card, .service-card, .branch-card, .timeline-item").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "all 0.6s ease-out"
    revealObserver.observe(el)
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
          .team-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .team-container2 {
            display: none;
          }
          .team-container3 {
            display: contents;
          }
          .team-iframe {
            border: 0;
          }
          .team-container4 {
            display: none;
          }
          .team-container5 {
            display: contents;
          }
          .team-container6 {
            display: none;
          }
          .team-container7 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Team
