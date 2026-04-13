import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Services = (props) => {
  return (
    <>
      <div className="services-container1">
        <Head>
          <title>Services - Prime Pathology Clinic</title>
          <meta
            property="og:title"
            content="Services - Prime Pathology Clinic"
          />
          <meta
            property="og:description"
            content="Transforming healthcare with precision. Prime Pathology Clinic combines cutting-edge clinical testing with expert care to ensure reliable treatment for every patient."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8c302082-e6ba-41a0-9529-d6bf5ec33a06/2ed90a87-a0c5-42e0-91f2-87bf9dd64e29?org_if_sml=1&amp;force_format=original"
          />
          <link rel="canonical" href="https://patho.teleporthq.site/services" />
          <meta
            property="og:url"
            content="https://patho.teleporthq.site/services"
          />
        </Head>
        <Navigation></Navigation>
        <section className="services-hero">
          <div className="services-hero-video-wrapper">
            <video
              src="https://videos.pexels.com/video-files/3195444/3195444-hd_1280_720_25fps.mp4"
              loop="true"
              muted="true"
              autoPlay="true"
              playsInline="true"
              className="services-hero-video"
            ></video>
            <div className="services-hero-overlay"></div>
          </div>
          <div className="services-hero-content">
            <h1 className="services-hero-title hero-title">
              Advanced Diagnostic &amp; Pathology Services You Can Trust
            </h1>
            <p className="hero-subtitle">
              Leading the way in precision medicine with state-of-the-art
              laboratory technology and expert diagnostic analysis for
              comprehensive patient care.
            </p>
            <div className="services-hero-actions">
              <div className="btn btn-primary btn-xl">
                <span>Book a Test Now</span>
              </div>
              <a href="#services">
                <div className="btn btn-xl btn-outline">
                  <span>Explore Services </span>
                </div>
              </a>
            </div>
          </div>
          <div className="services-hero-floating-elements">
            <div className="floating-molecule molecule-1"></div>
            <div className="floating-molecule molecule-2"></div>
          </div>
        </section>
        <section id="services" className="interactive-services">
          <div className="interactive-services-header">
            <h2 className="section-title">Our Specialized Diagnostics</h2>
            <p className="section-content">
              Comprehensive pathology solutions tailored to your health needs.
            </p>
          </div>
          <div className="interactive-services-carousel-container">
            <div id="servicesTrack" className="interactive-services-track">
              <div className="services-service-card">
                <div className="service-card-icon">
                  <svg
                    fill="none"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v20"></path>
                    <path d="M2 12h20"></path>
                    <path d="m4.93 4.93 14.14 14.14"></path>
                    <path d="m4.93 19.07 14.14-14.14"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Blood Tests</h3>
                <p className="section-content">
                  Complete blood counts, biochemistry profiles, and specialized
                  hormonal assays with rapid turnaround.
                </p>
                <button
                  data-target="blood-panel"
                  className="btn btn-secondary btn-sm"
                >
                  View Details
                </button>
              </div>
              <div className="services-service-card">
                <div className="service-card-icon">
                  <svg
                    fill="none"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 7c-3 0-4 3-4 5.5s1 5.5 4 5.5"></path>
                    <path d="M15 7c3 0 4 3 4 5.5s-1 5.5-4 5.5"></path>
                    <path d="M15 12h-6"></path>
                    <path d="M12 7v10"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">DNA Testing</h3>
                <p className="section-content">
                  Advanced genetic sequencing for paternity, ancestry, and
                  hereditary disease risk assessment.
                </p>
                <button
                  data-target="dna-panel"
                  className="btn btn-secondary btn-sm"
                >
                  View Details
                </button>
              </div>
              <div className="services-service-card">
                <div className="service-card-icon">
                  <svg
                    fill="none"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Infection Screening</h3>
                <p className="section-content">
                  Comprehensive viral and bacterial screening including
                  COVID-19, Malaria, and STI panels.
                </p>
                <button
                  data-target="infection-panel"
                  className="btn btn-secondary btn-sm"
                >
                  View Details
                </button>
              </div>
              <div className="services-service-card">
                <div className="service-card-icon">
                  <svg
                    fill="none"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle r="10" cx="12" cy="12"></circle>
                    <path d="M12 8v4l3 3"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Histopathology</h3>
                <p className="section-content">
                  Expert tissue analysis and cytology for precise cancer
                  diagnosis and tumor characterization.
                </p>
                <button
                  data-target="histo-panel"
                  className="btn btn-secondary btn-sm"
                >
                  View Details
                </button>
              </div>
            </div>
            <div className="carousel-controls">
              <button id="prevBtn" className="carousel-btn prev">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </button>
              <button id="nextBtn" className="carousel-btn next">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </button>
            </div>
          </div>
        </section>
        <section className="service-detail-panels">
          <div className="detail-accordion-wrapper">
            <details id="blood-panel" className="detail-panel">
              <summary className="detail-summary">
                <span className="section-subtitle">
                  Blood Testing Specifications
                </span>
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </summary>
              <div className="detail-content">
                <div className="detail-grid">
                  <div className="detail-info">
                    <h4 className="section-content">
                      <span className="services-text12">
                        Sample Requirements:
                      </span>
                      <span> 5ml Venous Blood (Fasting preferred)</span>
                    </h4>
                    <p className="section-content">
                      Our hematology suite utilizes automated flow cytometry for
                      100% precision in cell counting. We provide comprehensive
                      reports that include clinical interpretations by our
                      senior pathologists.
                    </p>
                  </div>
                  <div className="detail-metrics">
                    <div className="metric-item">
                      <span>Turnaround:</span>
                      <strong>4-6 Hours</strong>
                    </div>
                    <div className="metric-item">
                      <span>Accuracy:</span>
                      <strong>99.9%</strong>
                    </div>
                    <div className="metric-item">
                      <span>Pricing:</span>
                      <strong>From $45</strong>
                    </div>
                  </div>
                </div>
                <div className="btn btn-primary btn-md">
                  <span>Book Blood Test</span>
                </div>
              </div>
            </details>
            <details id="dna-panel" className="detail-panel">
              <summary className="detail-summary">
                <span className="section-subtitle">
                  DNA &amp; Genetic Analysis
                </span>
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </summary>
              <div className="detail-content">
                <div className="detail-grid">
                  <div className="detail-info">
                    <h4 className="section-content">
                      <span className="services-text21">
                        Sample Requirements:
                      </span>
                      <span> Buccal Swab or Blood Sample</span>
                    </h4>
                    <p className="section-content">
                      Utilizing Next-Generation Sequencing (NGS), we decode your
                      genetic blueprint for health risks, ancestry, and legal
                      paternity verification with absolute confidentiality.
                    </p>
                  </div>
                  <div className="detail-metrics">
                    <div className="metric-item">
                      <span>Turnaround:</span>
                      <strong>7-14 Days</strong>
                    </div>
                    <div className="metric-item">
                      <span>Accuracy:</span>
                      <strong>99.99%</strong>
                    </div>
                    <div className="metric-item">
                      <span>Pricing:</span>
                      <strong>From $250</strong>
                    </div>
                  </div>
                </div>
                <div className="btn btn-primary btn-md">
                  <span>Book DNA Test</span>
                </div>
              </div>
            </details>
            <details id="infection-panel" className="detail-panel">
              <summary className="detail-summary">
                <span className="section-subtitle">
                  Infection Screening Protocol
                </span>
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </summary>
              <div className="detail-content">
                <div className="detail-grid">
                  <div className="detail-info">
                    <h4 className="section-content">
                      <span className="services-text30">
                        Sample Requirements:
                      </span>
                      <span> Swab, Blood, or Urine</span>
                    </h4>
                    <p className="section-content">
                      Rapid PCR and ELISA testing for a wide range of pathogens.
                      Our lab is equipped to handle emerging infectious diseases
                      with strict biosafety level protocols.
                    </p>
                  </div>
                  <div className="detail-metrics">
                    <div className="metric-item">
                      <span>Turnaround:</span>
                      <strong>2-24 Hours</strong>
                    </div>
                    <div className="metric-item">
                      <span>Accuracy:</span>
                      <strong>99.7%</strong>
                    </div>
                    <div className="metric-item">
                      <span>Pricing:</span>
                      <strong>From $60</strong>
                    </div>
                  </div>
                </div>
                <div className="btn btn-primary btn-md">
                  <span>Schedule Screening</span>
                </div>
              </div>
            </details>
          </div>
        </section>
        <section className="testing-process-timeline">
          <div className="services-timeline-container">
            <h2 className="section-title">Your Journey to Diagnosis</h2>
            <div className="timeline-accordion">
              <details open="true" className="services-timeline-step">
                <summary className="services-step-header">
                  <div className="services-step-number">
                    <span>01</span>
                  </div>
                  <span className="section-subtitle">Sample Collection</span>
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </summary>
                <div className="step-body">
                  <p className="section-content">
                    Visit our premium clinic or request home collection. Our
                    certified phlebotomists ensure a painless and professional
                    experience following international safety standards.
                  </p>
                </div>
              </details>
              <details className="services-timeline-step">
                <summary className="services-step-header">
                  <div className="services-step-number">
                    <span>02</span>
                  </div>
                  <span className="section-subtitle">Laboratory Analysis</span>
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </summary>
                <div className="step-body">
                  <p className="section-content">
                    Samples are barcoded and processed using advanced robotics
                    and high-throughput diagnostic machines to eliminate human
                    error and ensure consistency.
                  </p>
                </div>
              </details>
              <details className="services-timeline-step">
                <summary className="services-step-header">
                  <div className="services-step-number">
                    <span>03</span>
                  </div>
                  <span className="section-subtitle">
                    Pathologist Diagnosis
                  </span>
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </summary>
                <div className="step-body">
                  <p className="section-content">
                    Our team of expert pathologists reviews complex data and
                    tissue samples, providing clear, clinical insights that
                    guide your physician&apos;s treatment plan.
                  </p>
                </div>
              </details>
              <details className="services-timeline-step">
                <summary className="services-step-header">
                  <div className="services-step-number">
                    <span>04</span>
                  </div>
                  <span className="section-subtitle">Result Delivery</span>
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </summary>
                <div className="step-body">
                  <p className="section-content">
                    Receive your secure, digital results via our patient portal,
                    email, or physical pick-up. We provide a complimentary
                    consultation call for critical findings.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="lab-equipment-methods">
          <div className="equipment-grid-wrapper">
            <div className="equipment-header">
              <h2 className="section-title">Precision Infrastructure</h2>
              <p className="section-content">
                We invest in the world&apos;s most advanced diagnostic
                technology to ensure your health results are never in doubt.
              </p>
            </div>
            <div className="equipment-grid">
              <div className="equipment-card">
                <img
                  alt="High-resolution microscopy"
                  src="https://images.pexels.com/photos/8442033/pexels-photo-8442033.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="equipment-image"
                />
                <div className="equipment-info">
                  <h3 className="section-subtitle">Digital Microscopy</h3>
                  <p className="section-content">
                    AI-enhanced imaging for cellular analysis with 4K
                    resolution.
                  </p>
                </div>
              </div>
              <div className="equipment-card">
                <img
                  alt="Automated Centrifuge"
                  src="https://images.pexels.com/photos/6627687/pexels-photo-6627687.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="equipment-image"
                />
                <div className="equipment-info">
                  <h3 className="section-subtitle">Robotic Centrifuges</h3>
                  <p className="section-content">
                    Precise component separation with temperature-controlled
                    stability.
                  </p>
                </div>
              </div>
              <div className="equipment-card">
                <img
                  alt="Molecular Diagnostics"
                  src="https://images.pexels.com/photos/8442110/pexels-photo-8442110.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="equipment-image"
                />
                <div className="equipment-info">
                  <h3 className="section-subtitle">PCR Sequencers</h3>
                  <p className="section-content">
                    Rapid DNA amplification for ultra-sensitive pathogen
                    detection.
                  </p>
                </div>
              </div>
              <div className="equipment-card">
                <img
                  alt="Bio-analyzers"
                  src="https://images.pexels.com/photos/6627690/pexels-photo-6627690.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="equipment-image"
                />
                <div className="equipment-info">
                  <h3 className="section-subtitle">Immunoassay Systems</h3>
                  <p className="section-content">
                    High-throughput analyzers for hormones and tumor markers.
                  </p>
                </div>
              </div>
              <div className="equipment-card">
                <img
                  alt="Histology Lab"
                  src="https://images.pexels.com/photos/8442096/pexels-photo-8442096.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="equipment-image"
                />
                <div className="equipment-info">
                  <h3 className="section-subtitle">Tissue Processors</h3>
                  <p className="section-content">
                    Automated staining and mounting for histological
                    examination.
                  </p>
                </div>
              </div>
              <div className="equipment-card">
                <img
                  alt="Hematology Suite"
                  src="https://images.pexels.com/photos/8442098/pexels-photo-8442098.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="equipment-image"
                />
                <div className="equipment-info">
                  <h3 className="section-subtitle">Flow Cytometers</h3>
                  <p className="section-content">
                    Multiparametric analysis of single cells for blood
                    disorders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="turnaround-stats">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <circle r="10" cx="12" cy="12"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <div className="stat-value">
                <span>6 Hours</span>
              </div>
              <div className="stat-label">
                <span>Average Turnaround</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div className="stat-value">
                <span>99.9%</span>
              </div>
              <div className="stat-label">
                <span>Diagnostic Accuracy</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle r="4" cx="9" cy="7"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="stat-value">
                <span>5,000+</span>
              </div>
              <div className="stat-label">
                <span>Daily Sample Capacity</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
              </div>
              <div className="stat-value">
                <span>ISO 15189</span>
              </div>
              <div className="stat-label">
                <span>Accredited Laboratory</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="m12 14 4-4 4 4-4 4-4-4Z"></path>
                  <path d="M3.34 7a10 10 0 1 1 17.32 10"></path>
                </svg>
              </div>
              <div className="stat-value">
                <span>24/7</span>
              </div>
              <div className="stat-label">
                <span>Emergency Processing</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle r="4" cx="9" cy="7"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="stat-value">
                <span>150+</span>
              </div>
              <div className="stat-label">
                <span>Specialist Pathologists</span>
              </div>
            </div>
          </div>
        </section>
        <section className="service-faqs">
          <div className="faqs-container">
            <h2 className="section-title">Support Hub</h2>
            <div className="tabs-wrapper">
              <div className="tabs-nav">
                <button data-tab="prep" className="tab-btn active">
                  Preparation
                </button>
                <button data-tab="faq" className="tab-btn">
                  Common FAQs
                </button>
                <button data-tab="collection" className="tab-btn">
                  Home Collection
                </button>
              </div>
              <div className="tab-panels">
                <div id="prep" className="tab-panel active">
                  <ul className="prep-list">
                    <li>
                      <strong>Fasting:</strong>
                      <span>
                        {' '}
                        Most blood tests require 8-12 hours of fasting (water
                        only).
                      </span>
                    </li>
                    <li>
                      <strong>Medication:</strong>
                      <span>
                        {' '}
                        Consult your doctor before pausing any prescribed
                        medication.
                      </span>
                    </li>
                    <li>
                      <strong>Hydration:</strong>
                      <span>
                        {' '}
                        Drink plenty of water to make sample collection easier.
                      </span>
                    </li>
                    <li>
                      <strong>Identification:</strong>
                      <span>
                        {' '}
                        Bring a valid government ID for all DNA and legal tests.
                      </span>
                    </li>
                  </ul>
                </div>
                <div id="faq" className="tab-panel">
                  <div className="faq-item">
                    <h4 className="section-subtitle">
                      How do I receive my results?
                    </h4>
                    <p className="section-content">
                      Results are sent via secure email and uploaded to our
                      patient portal. Critical results are communicated directly
                      by our pathology team.
                    </p>
                  </div>
                  <div className="faq-item">
                    <h4 className="section-subtitle">
                      Are your tests internationally recognized?
                    </h4>
                    <p className="section-content">
                      Yes, Prime Pathology is ISO accredited and our results are
                      accepted by global health organizations and foreign
                      embassies.
                    </p>
                  </div>
                </div>
                <div id="collection" className="tab-panel">
                  <p className="section-content">
                    Can&apos;t make it to the lab? Our mobile phlebotomy team
                    can visit your home or office. We maintain strict cold-chain
                    logistics to ensure sample integrity during transport.
                  </p>
                  <div className="btn btn-secondary btn-md">
                    <span>Request Home Visit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="book-test" className="quick-book-cta">
          <div className="cta-container">
            <div className="cta-card">
              <div className="cta-header">
                <h2 className="section-title">Schedule Your Screening</h2>
                <p className="section-content">
                  Fast, reliable, and confidential testing at your convenience.
                </p>
              </div>
              <form
                action="/book-test"
                method="POST"
                data-form-id="ed08020a-12bc-4db9-bab3-7f42be0c2406"
                className="cta-form"
              >
                <div className="form-group">
                  <input
                    type="text"
                    id="thq_true_hLmC"
                    name="true"
                    required="true"
                    placeholder="Full Name"
                    data-form-field-id="thq_true_hLmC"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    id="thq_phone"
                    name="phone"
                    required="true"
                    placeholder="Phone Number"
                    data-form-field-id="thq_phone"
                    className="form-input input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="thq_email"
                    name="email"
                    required="true"
                    placeholder="Email Address"
                    data-form-field-id="thq_email"
                    className="form-input input"
                  />
                </div>
                <div className="form-group">
                  <select
                    id="thq_location"
                    name="location"
                    required="true"
                    data-form-field-id="thq_location"
                    className="form-input"
                  >
                    <option value="true" disabled="true" selected="true">
                      Select Your Closest Location
                    </option>
                    <option value="bauchi-nigeria">Bauchi State Nigeria</option>
                    <option value="buchanan-liberia">Buchanan Liberia</option>
                    <option value="dar-es-salaam-tanzania">
                      Dar Es Salaam Tanzania
                    </option>
                    <option value="kigali-rwanda">Kigali Rwanda</option>
                  </select>
                </div>
                <div className="form-group">
                  <select
                    id="thq_test-type_NmUp"
                    name="test-type"
                    required="true"
                    data-form-field-id="thq_test-type_NmUp"
                    className="form-input"
                  >
                    <option value="true" disabled="true" selected="true">
                      Select Test Type
                    </option>
                    <option value="blood">Full Blood Count</option>
                    <option value="dna">DNA Paternity</option>
                    <option value="infection">Infection Screening</option>
                    <option value="histopathology">Histopathology</option>
                    <option value="hemoglobin-electrophoresis">
                      Hemoglobin Electrophoresis
                    </option>
                    <option value="malaria-parasite">
                      Malaria Parasite (MP) Testing
                    </option>
                    <option value="urinalysis-stool">
                      Urinalysis &amp; Stool Microscopy
                    </option>
                    <option value="biopsy-analysis">Biopsy Analysis</option>
                    <option value="pap-smear">Pap Smear</option>
                    <option value="fine-needle-aspiration">
                      Fine Needle Aspiration
                    </option>
                    <option value="digital-xray">Digital X-Ray</option>
                    <option value="ultrasonography">Ultrasonography</option>
                    <option value="lipid-profile">Lipid Profile</option>
                    <option value="blood-glucose-hba1c">
                      Blood Glucose &amp; HbA1c
                    </option>
                    <option value="comprehensive-metabolic">
                      Comprehensive Metabolic Panel
                    </option>
                    <option value="oncogenomics">Oncogenomics</option>
                    <option value="dna-sequencing">DNA Sequencing</option>
                    <option value="pcr-testing">PCR Testing</option>
                    <option value="others">Others</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    id="thq_date_CETC"
                    name="date"
                    required="true"
                    data-form-field-id="thq_date_CETC"
                    className="form-input"
                  />
                </div>
                <button
                  id="thq_button_ENOX"
                  name="button"
                  type="submit"
                  data-form-field-id="thq_button_ENOX"
                  className="btn-accent btn btn-lg"
                >
                  Confirm Booking
                </button>
              </form>
            </div>
          </div>
        </section>
        <div className="services-container2">
          <div className="services-container3">
            <Script
              html={`<style>
        @keyframes fadeInDown {from {opacity: 0;
transform: translateY(-30px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes slideInUp {from {opacity: 0;
transform: translateY(10px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes fadeIn {from {opacity: 0;}
to {opacity: 1;}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="services-container4">
          <div className="services-container5">
            <Script
              html={`<script defer data-name="services-logic">
(function(){
  // Carousel Logic
  const track = document.getElementById('servicesTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentPos = 0;

  const updateCarousel = () => {
    const cardWidth = track.querySelector('.service-card').offsetWidth + 24; // Card width + gap
    track.style.transform = \`translateX(-\${currentPos * cardWidth}px)\`;
  };

  nextBtn.addEventListener('click', () => {
    const maxPos = track.children.length - (window.innerWidth > 991 ? 4 : (window.innerWidth > 767 ? 2 : 1));
    if (currentPos < maxPos) {
      currentPos++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentPos > 0) {
      currentPos--;
      updateCarousel();
    }
  });

  // Tab Logic
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));
      
      btn.classList.add('active');
      document.getElementById(target).classList.add('active');
    });
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Auto-expand detail panels from carousel
  const detailPanelBtns = document.querySelectorAll('.service-card .btn');
  detailPanelBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.open = true;
        targetPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });

  // Interaction: Molecule Floating Effect
  document.addEventListener('mousemove', (e) => {
    const molecules = document.querySelectorAll('.floating-molecule');
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;
    
    molecules.forEach((mol, index) => {
      const speed = (index + 1) * 2;
      mol.style.transform = \`translateX(\${x * speed}px) translateY(\${y * speed}px)\`;
    });
  });
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .services-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .services-text12 {
            font-weight: 700;
          }
          .services-text21 {
            font-weight: 700;
          }
          .services-text30 {
            font-weight: 700;
          }
          .services-container2 {
            display: none;
          }
          .services-container3 {
            display: contents;
          }
          .services-container4 {
            display: none;
          }
          .services-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Services
