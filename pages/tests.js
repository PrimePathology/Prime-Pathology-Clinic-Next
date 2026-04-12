import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Tests = (props) => {
  return (
    <>
      <div className="tests-container10">
        <Head>
          <title>Tests - Prime Pathology Clinic</title>
          <meta property="og:title" content="Tests - Prime Pathology Clinic" />
          <meta
            property="og:description"
            content="Transforming healthcare with precision. Prime Pathology Clinic combines cutting-edge clinical testing with expert care to ensure reliable treatment for every patient."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8c302082-e6ba-41a0-9529-d6bf5ec33a06/2ed90a87-a0c5-42e0-91f2-87bf9dd64e29?org_if_sml=1&amp;force_format=original"
          />
          <link rel="canonical" href="https://patho.teleporthq.site/tests" />
          <meta
            property="og:url"
            content="https://patho.teleporthq.site/tests"
          />
        </Head>
        <Navigation></Navigation>
        <div className="tests-container11">
          <div className="tests-container12">
            <Script
              html={`<style>
section {
  position: relative;
  overflow: hidden;
}
details {
  background: var(--color-surface);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-border);
  overflow: hidden;
}
summary {
  padding: var(--spacing-lg);
  cursor: pointer;
  font-weight: var(--font-weight-medium);
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
summary::after {
  content: '+';
  font-size: 1.5rem;
  color: var(--color-primary);
}
details[open] summary::after {
  content: '−';
}
</style>`}
            ></Script>
          </div>
        </div>
        <section className="tests-hero">
          <div className="tests-hero-video-container">
            <video
              src="https://videos.pexels.com/video-files/4121061/4121061-hd_1280_720_50fps.mp4"
              loop="true"
              muted="true"
              autoPlay="true"
              playsInline="true"
              className="tests-hero-video"
            ></video>
            <div className="tests-hero-overlay"></div>
          </div>
          <div className="tests-hero-content-wrapper">
            <div className="tests-hero-content">
              <span className="tests-hero-badge">Prime Pathology Clinic</span>
              <h1 className="hero-title tests-hero-title">
                Advanced Diagnostic &amp; Pathology Services You Can Trust
              </h1>
              <p className="hero-subtitle">
                Comprehensive test catalog featuring real-time tracking, expert
                analysis, and rapid digital results. Your health, our priority.
              </p>
              <div className="tests-hero-actions">
                <div className="tests-hero-search-bar">
                  <div className="tests-hero-search-icon">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle r="8" cx="11" cy="11"></circle>
                      <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
                    </svg>
                  </div>
                  <input
                    type="text"
                    aria-label="Search tests"
                    placeholder="Search for a test (e.g. Blood Sugar, DNA)..."
                  />
                  <button className="btn btn-primary btn-lg">
                    Search Catalog
                  </button>
                </div>
                <div className="tests-hero-stats">
                  <div className="tests-hero-stat-item">
                    <span className="tests-hero-stat-value">500+</span>
                    <span className="tests-hero-stat-label">
                      Available Tests
                    </span>
                  </div>
                  <div className="tests-hero-stat-item">
                    <span className="tests-hero-stat-value">24h</span>
                    <span className="tests-hero-stat-label">
                      Avg. Turnaround
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="tests-hero-floating-elements">
            <div className="floating-molecule molecule-1"></div>
            <div className="floating-molecule molecule-2"></div>
          </div>
        </section>
        <section className="test-categories">
          <div className="test-categories-container">
            <div className="test-categories-header">
              <h2 className="section-title">Comprehensive Test Categories</h2>
              <p className="section-content">
                Filter through our extensive range of pathology services
                designed for precision and reliability.
              </p>
            </div>
            <div className="test-categories-grid">
              <div className="test-category-card">
                <div className="test-category-icon-wrapper">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12.42 17.1a7 7 0 1 0-7.72-7.72 4 4 0 1 1 7.72 7.72z"></path>
                    <path d="M12 2v2"></path>
                    <path d="M12 18v2"></path>
                    <path d="M2 12h2"></path>
                    <path d="M18 12h2"></path>
                    <path d="m4.9 4.9 1.4 1.4"></path>
                    <path d="m16.3 16.3 1.4 1.4"></path>
                    <path d="m4.9 19.1 1.4-1.4"></path>
                    <path d="m16.3 7.7 1.4-1.4"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Blood Chemistry</h3>
                <p className="section-content">
                  Complete metabolic panels, glucose monitoring, and lipid
                  profiles for general health assessment.
                </p>
                <button className="btn btn-sm btn-outline">Book Sample</button>
              </div>
              <div className="test-category-card">
                <div className="test-category-icon-wrapper">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m10 16 1.5 1.5"></path>
                    <path d="M14 8l-1.5-1.5"></path>
                    <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"></path>
                    <path d="M16.5 10.5l1 1"></path>
                    <path d="M17 6l-2.891-2.891"></path>
                    <path d="M2 15c6.667-6 13.333 0 20-6"></path>
                    <path d="m18 9 .891.891"></path>
                    <path d="M3.109 14.109 4 15"></path>
                    <path d="m6.5 12.5 1 1"></path>
                    <path d="M7 18l2.891 2.891"></path>
                    <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">DNA &amp; Genetics</h3>
                <p className="section-content">
                  Paternity testing, ancestry analysis, and genetic screening
                  for hereditary conditions.
                </p>
                <button className="btn btn-sm btn-outline">Book Sample</button>
              </div>
              <div className="test-category-card">
                <div className="test-category-icon-wrapper">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5V2"></path>
                    <path d="M8.5 2h7"></path>
                    <path d="M14.5 16h-5"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Infection Screening</h3>
                <p className="section-content">
                  Rapid detection of viral, bacterial, and fungal infections
                  using molecular diagnostic techniques.
                </p>
                <button className="btn btn-sm btn-outline">Book Sample</button>
              </div>
              <div className="test-category-card">
                <div className="test-category-icon-wrapper">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 18h8"></path>
                    <path d="M3 22h18"></path>
                    <path d="M14 22a7 7 0 1 0 0-14h-1"></path>
                    <path d="M9 14h2"></path>
                    <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path>
                    <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Histopathology</h3>
                <p className="section-content">
                  Detailed tissue analysis and biopsy examinations for accurate
                  disease staging and diagnosis.
                </p>
                <button className="btn btn-sm btn-outline">Book Sample</button>
              </div>
              <div className="test-category-card">
                <div className="test-category-icon-wrapper">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Immunoassay</h3>
                <p className="section-content">
                  Hormonal profiling, allergy testing, and tumor marker
                  detection for specialized care.
                </p>
                <button className="btn btn-sm btn-outline">Book Sample</button>
              </div>
              <div className="test-category-card">
                <div className="test-category-icon-wrapper">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.71-2.16 0-3"></path>
                    <path d="m10 15 5-5"></path>
                    <path d="m14 10 1.5-1.5"></path>
                    <path d="M18 5.94a2 2 0 1 0-3-3"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Toxicology</h3>
                <p className="section-content">
                  Comprehensive drug screening and heavy metal analysis for
                  occupational and forensic health.
                </p>
                <button className="btn btn-sm btn-outline">Book Sample</button>
              </div>
            </div>
          </div>
        </section>
        <section className="collection-workflow">
          <div className="workflow-container">
            <div className="workflow-header">
              <h2 className="section-title">Your Sample Collection Journey</h2>
              <p className="section-content">
                A seamless, hygienic, and professional process from the moment
                you walk in to the final results.
              </p>
            </div>
            <div className="tests-workflow-steps">
              <div className="workflow-step">
                <div className="workflow-step-visual">
                  <div className="workflow-step-number">
                    <span>01</span>
                  </div>
                  <div className="workflow-step-icon">
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
                      <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                      <path d="M3 10h18"></path>
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                    </svg>
                  </div>
                </div>
                <div className="workflow-step-content">
                  <h3 className="section-subtitle">
                    Registration &amp; Intake
                  </h3>
                  <p className="section-content">
                    Verify identity, provide medical history, and receive unique
                    patient tracking ID.
                  </p>
                </div>
              </div>
              <div className="workflow-step">
                <div className="workflow-step-visual">
                  <div className="workflow-step-number">
                    <span>02</span>
                  </div>
                  <div className="workflow-step-icon">
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
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path>
                      <circle r="3" cx="12" cy="12"></circle>
                    </svg>
                  </div>
                </div>
                <div className="workflow-step-content">
                  <h3 className="section-subtitle">Sample Collection</h3>
                  <p className="section-content">
                    Professional collection by certified phlebotomists using
                    sterile, single-use equipment.
                  </p>
                </div>
              </div>
              <div className="workflow-step">
                <div className="workflow-step-visual">
                  <div className="workflow-step-number">
                    <span>03</span>
                  </div>
                  <div className="workflow-step-icon">
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
                      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                      <path d="M15 18H9"></path>
                      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                      <circle r="2" cx="17" cy="18"></circle>
                      <circle r="2" cx="7" cy="18"></circle>
                    </svg>
                  </div>
                </div>
                <div className="workflow-step-content">
                  <h3 className="section-subtitle">Secure Transport</h3>
                  <p className="section-content">
                    Samples are labeled with QR codes and transported in
                    climate-controlled containers.
                  </p>
                </div>
              </div>
              <div className="workflow-step">
                <div className="workflow-step-visual">
                  <div className="workflow-step-number">
                    <span>04</span>
                  </div>
                  <div className="workflow-step-icon">
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
                      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                      <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                      <path d="M10 9H8m8 4H8m8 4H8"></path>
                    </svg>
                  </div>
                </div>
                <div className="workflow-step-content">
                  <h3 className="section-subtitle">Analysis &amp; Report</h3>
                  <p className="section-content">
                    State-of-the-art laboratory analysis followed by expert
                    pathologist validation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="timelines-section">
          <div className="timelines-container">
            <div className="timelines-header">
              <h2 className="section-title">
                Processing &amp; Delivery Timelines
              </h2>
              <p className="section-content">
                We value your time. Choose between standard and priority
                processing to suit your medical needs.
              </p>
            </div>
            <div className="tabs-container">
              <div role="tablist" className="tests-tabs-nav">
                <button
                  role="tab"
                  data-target="standard"
                  aria-selected="true"
                  className="tab-trigger active"
                >
                  Standard Processing
                </button>
                <button
                  role="tab"
                  data-target="stat"
                  aria-selected="false"
                  className="tab-trigger"
                >
                  Priority (STAT) Options
                </button>
                <button
                  role="tab"
                  data-target="special"
                  aria-selected="false"
                  className="tab-trigger"
                >
                  Specialized Diagnostics
                </button>
              </div>
              <div id="standard" className="tab-panel active">
                <div className="timeline-grid">
                  <div className="timeline-item">
                    <span className="timeline-category">
                      Routine Blood Work
                    </span>
                    <span className="timeline-duration">6 - 12 Hours</span>
                    <p className="section-content">
                      Includes CBC, Glucose, and basic electrolyte panels.
                    </p>
                  </div>
                  <div className="timeline-item">
                    <span className="timeline-category">
                      Infection Screening
                    </span>
                    <span className="timeline-duration">12 - 24 Hours</span>
                    <p className="section-content">
                      Standard viral and bacterial culture screenings.
                    </p>
                  </div>
                  <div className="timeline-item">
                    <span className="timeline-category">Hormonal Panels</span>
                    <span className="timeline-duration">24 - 48 Hours</span>
                    <p className="section-content">
                      Thyroid, reproductive, and adrenal function tests.
                    </p>
                  </div>
                </div>
              </div>
              <div id="stat" className="tab-panel">
                <div className="timeline-grid">
                  <div className="highlight timeline-item">
                    <span className="timeline-category">Emergency Panels</span>
                    <span className="timeline-duration">1 - 2 Hours</span>
                    <p className="section-content">
                      Critical markers for immediate clinical decision making.
                    </p>
                  </div>
                  <div className="highlight timeline-item">
                    <span className="timeline-category">Rapid PCR</span>
                    <span className="timeline-duration">3 - 4 Hours</span>
                    <p className="section-content">
                      Fast-track molecular detection for urgent cases.
                    </p>
                  </div>
                </div>
              </div>
              <div id="special" className="tab-panel">
                <div className="timeline-grid">
                  <div className="timeline-item">
                    <span className="timeline-category">DNA Testing</span>
                    <span className="timeline-duration">
                      5 - 7 Working Days
                    </span>
                    <p className="section-content">
                      Detailed genomic sequencing and relationship verification.
                    </p>
                  </div>
                  <div className="timeline-item">
                    <span className="timeline-category">
                      Biopsy / Histology
                    </span>
                    <span className="timeline-duration">
                      3 - 5 Working Days
                    </span>
                    <p className="section-content">
                      Complex tissue analysis and staining procedures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="lab-showcase">
          <div className="lab-showcase-container">
            <div className="lab-showcase-header">
              <h2 className="section-title">Precision at the Core</h2>
              <p className="section-content">
                Peek inside our world-class laboratory facility where advanced
                technology meets medical expertise.
              </p>
            </div>
            <div className="lab-grid">
              <div className="lab-card">
                <img
                  alt="High-resolution digital microscope"
                  src="https://images.pexels.com/photos/5726795/pexels-photo-5726795.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="lab-card-img"
                />
                <div className="lab-card-overlay">
                  <h3 className="section-subtitle">Digital Microscopy</h3>
                  <p className="section-content">
                    4K resolution imaging for cellular-level diagnostic
                    accuracy.
                  </p>
                </div>
              </div>
              <div className="lab-card">
                <img
                  alt="Automated blood analyzer"
                  src="https://images.pexels.com/photos/5726838/pexels-photo-5726838.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="lab-card-img"
                />
                <div className="lab-card-overlay">
                  <h3 className="section-subtitle">Hematology Suite</h3>
                  <p className="section-content">
                    Fully automated systems processing 200+ samples hourly.
                  </p>
                </div>
              </div>
              <div className="lab-card">
                <img
                  alt="PCR Molecular testing"
                  src="https://images.pexels.com/photos/5726789/pexels-photo-5726789.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="lab-card-img"
                />
                <div className="lab-card-overlay">
                  <h3 className="section-subtitle">Molecular Lab</h3>
                  <p className="section-content">
                    Advanced PCR technology for genetic and viral detection.
                  </p>
                </div>
              </div>
              <div className="lab-card">
                <img
                  alt="Centrifuge machines"
                  src="https://images.pexels.com/photos/5726850/pexels-photo-5726850.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="lab-card-img"
                />
                <div className="lab-card-overlay">
                  <h3 className="section-subtitle">Centrifugation</h3>
                  <p className="section-content">
                    High-speed separation for plasma and serum purity.
                  </p>
                </div>
              </div>
              <div className="lab-card">
                <img
                  alt="Chemical reagents"
                  src="https://images.pexels.com/photos/4031323/pexels-photo-4031323.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="lab-card-img"
                />
                <div className="lab-card-overlay">
                  <h3 className="section-subtitle">Biochemistry</h3>
                  <p className="section-content">
                    Precision reagent handling for metabolic profiling.
                  </p>
                </div>
              </div>
              <div className="lab-card">
                <img
                  alt="Technician working"
                  src="https://images.pexels.com/photos/8770727/pexels-photo-8770727.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="lab-card-img"
                />
                <div className="lab-card-overlay">
                  <h3 className="section-subtitle">Expert Analysis</h3>
                  <p className="section-content">
                    Human expertise validating every automated result.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="tests-support-hub">
          <div className="support-hub-container">
            <div className="support-hub-header">
              <h2 className="section-title">Accessing Your Results</h2>
              <p className="section-content">
                Flexible delivery options designed for your convenience and data
                security.
              </p>
            </div>
            <div className="support-grid">
              <div className="support-card">
                <div className="support-icon">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="11"
                      rx="2"
                      ry="2"
                      width="18"
                      height="11"
                    ></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Secure Online Portal</h3>
                <p className="section-content">
                  Log in with your unique ID to view, download, and print your
                  reports 24/7.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Access Portal</span>
                  </div>
                </a>
              </div>
              <div className="support-card">
                <div className="support-icon">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z"></path>
                    <path d="M22 2 11 13"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Direct Email &amp; SMS</h3>
                <p className="section-content">
                  Encrypted PDF reports sent directly to your inbox with instant
                  SMS notifications.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Setup Alerts</span>
                  </div>
                </a>
              </div>
              <div className="support-card">
                <div className="support-icon">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                    <circle r="2" cx="17" cy="18"></circle>
                    <circle r="2" cx="7" cy="18"></circle>
                    <path d="M15 18H9"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Home Delivery</h3>
                <p className="section-content">
                  Physical copies delivered via secure courier for official
                  medical documentation.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Request Courier</span>
                  </div>
                </a>
              </div>
              <div className="support-card">
                <div className="support-icon">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle r="4" cx="9" cy="7"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Pathologist Consultation</h3>
                <p className="section-content">
                  Need help interpreting your results? Schedule a brief call
                  with our expert team.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Book Consultation</span>
                  </div>
                </a>
              </div>
              <div className="support-card">
                <div className="support-icon">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Second Opinion Hub</h3>
                <p className="section-content">
                  We facilitate result verification with international partners
                  for complex cases.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="support-card">
                <div className="support-icon">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Sample Report Preview</h3>
                <p className="section-content">
                  Download a template to see how we present your medical data
                  clearly.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Download Sample</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="booking-section">
          <div className="booking-container">
            <div className="tests-booking-card">
              <div className="booking-content">
                <h2 className="section-title">Ready to Book Your Test?</h2>
                <p className="section-content">
                  Schedule your visit or request a home sample collection in
                  less than 2 minutes. Professional care is just a click away.
                </p>
                <div className="booking-highlights">
                  <div className="highlight-item">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Next available slot: Today, 2:00 PM</span>
                  </div>
                  <div className="highlight-item">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Estimated turnaround: 12-24 Hours</span>
                  </div>
                </div>
                <form
                  action="/book"
                  method="POST"
                  data-form-id="e353dc51-191d-4b5e-9b2e-d05ad8dce3b4"
                  className="tests-booking-form"
                >
                  <div className="form-row">
                    <div className="tests-form-group">
                      <label htmlFor="test-select">Select Test</label>
                      <select
                        id="test-select"
                        name="select"
                        required="true"
                        data-form-field-id="test-select"
                      >
                        <option value="true">Choose a test category...</option>
                        <option value="blood">Blood Chemistry</option>
                        <option value="dna">DNA &amp; Genetics</option>
                        <option value="infection">Infection Screening</option>
                      </select>
                    </div>
                    <div className="tests-form-group">
                      <label htmlFor="location-select">Collection Type</label>
                      <select
                        id="location-select"
                        name="select"
                        required="true"
                        data-form-field-id="location-select"
                      >
                        <option value="clinic">In-Clinic Visit</option>
                        <option value="home">Home Sample Pickup</option>
                      </select>
                    </div>
                  </div>
                  <button
                    id="thq_button_MpwM"
                    name="button"
                    type="submit"
                    data-form-field-id="thq_button_MpwM"
                    className="btn btn-primary btn-xl"
                  >
                    Get Diagnosis Now
                  </button>
                </form>
              </div>
              <div className="booking-visual">
                <img
                  alt="Friendly lab technician"
                  src="https://images.pexels.com/photos/5726811/pexels-photo-5726811.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="booking-img"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="stats-faq">
          <div className="stats-faq-container">
            <div className="stats-column">
              <h2 className="section-title">Our Impact in Numbers</h2>
              <p className="section-content">
                Trusted by thousands of patients and leading medical consultants
                across the region.
              </p>
              <div className="tests-stats-grid">
                <div className="stat-box">
                  <span className="stat-number">250k+</span>
                  <span className="stat-desc">Tests Processed Yearly</span>
                </div>
                <div className="stat-box">
                  <span className="stat-number">99.9%</span>
                  <span className="stat-desc">Diagnostic Accuracy</span>
                </div>
                <div className="stat-box">
                  <span className="stat-number">ISO</span>
                  <span className="stat-desc">Certified Laboratory</span>
                </div>
                <div className="stat-box">
                  <span className="stat-number">15+</span>
                  <span className="stat-desc">Years of Excellence</span>
                </div>
              </div>
            </div>
            <div className="faq-column">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <div className="faq-accordion">
                <details>
                  <summary>
                    <span>Do I need to fast before my blood test?</span>
                  </summary>
                  <div className="faq-content">
                    <p className="section-content">
                      For most metabolic and lipid panels, fasting for 8-12
                      hours is required. You may drink water, but avoid coffee,
                      tea, or food. Check your specific test instructions on the
                      booking confirmation.
                    </p>
                  </div>
                </details>
                <details>
                  <summary>
                    <span>What should I bring for my sample collection?</span>
                  </summary>
                  <div className="faq-content">
                    <p className="section-content">
                      Please bring a valid government-issued ID and your
                      doctor&apos;s referral (if applicable). If you have a
                      pre-paid booking, have your QR code ready on your mobile
                      device.
                    </p>
                  </div>
                </details>
                <details>
                  <summary>
                    <span>How will I receive my results?</span>
                  </summary>
                  <div className="faq-content">
                    <p className="section-content">
                      Results are primarily delivered via our secure online
                      portal and encrypted email. You will receive an SMS
                      notification as soon as your report is validated by our
                      pathologist.
                    </p>
                  </div>
                </details>
                <details>
                  <summary>
                    <span>
                      Are your labs certified for travel requirements?
                    </span>
                  </summary>
                  <div className="faq-content">
                    <p className="section-content">
                      Yes, Prime Pathology Clinic is fully certified by national
                      health authorities and international bodies for all
                      travel-related diagnostic screenings, including fit-to-fly
                      certificates.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>
        <div className="tests-container21">
          <div className="tests-container22">
            <Script
              html={`<style>
        @keyframes fadeIn {from {opacity: 0;
transform: translateY(10px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="tests-container23">
          <div className="tests-container24">
            <Script
              html={`<script defer data-name="prime-pathology-logic">
(function(){
const tabTriggers = document.querySelectorAll('.tab-trigger');
const tabPanels = document.querySelectorAll('.tab-panel');

tabTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const target = trigger.getAttribute('data-target');
    
    // Update Nav
    tabTriggers.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    trigger.classList.add('active');
    trigger.setAttribute('aria-selected', 'true');
    
    // Update Panels
    tabPanels.forEach(panel => {
      panel.classList.remove('active');
      if (panel.id === target) {
        panel.classList.add('active');
      }
    });
  });
});

// Subtle Parallax for Hero
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroVideo = document.querySelector('.tests-hero-video');
  if (heroVideo) {
    heroVideo.style.transform = \`translateY(\${scrolled * 0.2}px)\`;
  }
  
  const molecules = document.querySelectorAll('.floating-molecule');
  molecules.forEach((m, index) => {
    const speed = (index + 1) * 0.1;
    m.style.transform = \`translateY(\${scrolled * speed}px)\`;
  });
});

// Form submission visual feedback
const bookingForm = document.querySelector('.booking-form');
if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    const btn = bookingForm.querySelector('button[type="submit"]');
    btn.textContent = 'Processing...';
    btn.style.opacity = '0.7';
  });
}
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .tests-container10 {
            width: 100%;
            min-height: 100vh;
          }
          .tests-container11 {
            display: none;
          }
          .tests-container12 {
            display: contents;
          }
          .tests-container21 {
            display: none;
          }
          .tests-container22 {
            display: contents;
          }
          .tests-container23 {
            display: none;
          }
          .tests-container24 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Tests
