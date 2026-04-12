import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const DNAPaternityTesting = (props) => {
  return (
    <>
      <div className="dna-paternity-testing-container1">
        <Head>
          <title>DNA-Paternity-Testing - Prime Pathology Clinic</title>
          <meta
            property="og:title"
            content="DNA-Paternity-Testing - Prime Pathology Clinic"
          />
          <meta
            property="og:description"
            content="Transforming healthcare with precision. Prime Pathology Clinic combines cutting-edge clinical testing with expert care to ensure reliable treatment for every patient."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8c302082-e6ba-41a0-9529-d6bf5ec33a06/2ed90a87-a0c5-42e0-91f2-87bf9dd64e29?org_if_sml=1&amp;force_format=original"
          />
          <link
            rel="canonical"
            href="https://patho.teleporthq.site/dna-paternity-testing"
          />
          <meta
            property="og:url"
            content="https://patho.teleporthq.site/dna-paternity-testing"
          />
        </Head>
        <Navigation></Navigation>
        <section className="page1-hero-section">
          <div className="hero-video-wrapper page1-hero-video-wrapper">
            <video
              src="https://videos.pexels.com/video-files/5752735/5752735-hd_1920_1080_30fps.mp4"
              loop="true"
              muted="true"
              autoPlay="true"
              playsInline="true"
              className="hero-video"
            ></video>
            <div className="page1-hero-overlay1"></div>
          </div>
          <div
            aria-hidden="true"
            className="page1-hero-floating-elements hero-floating-elements"
          >
            <div className="page1-molecule-1 molecule-1 molecule"></div>
            <div className="molecule molecule-2 page1-molecule-2"></div>
            <div className="beaker-float"></div>
          </div>
          <div className="page1-hero-container">
            <div className="page1-hero-content1">
              <h1 className="page1-hero-title hero-title">
                Advanced Diagnostic &amp; Pathology Services You Can Trust
              </h1>
              <p className="hero-subtitle">
                Experience global-standard medical diagnostics with Prime
                Pathology Clinic. Our precision-driven laboratory in the heart
                of Africa delivers reliable results for your health and peace of
                mind.
              </p>
              <div className="hero-actions">
                <a href="#services">
                  <div className="btn btn-primary btn-lg">
                    <span>Book DNA Test</span>
                  </div>
                </a>
                <a href="#about">
                  <div className="btn btn-outline btn-lg">
                    <span>Our Approach</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="page1-approach-section">
          <div className="page1-approach-container1">
            <div className="approach-grid">
              <div className="approach-text-block">
                <h2 className="section-title">Our Treatment Approach</h2>
                <p className="section-content">
                  In designing medical services for our clients and patients, we
                  use standard pathology laboratory processes that assist
                  consultants in carrying out tentative diagnosis to ensure
                  reliable and effective treatment.
                </p>
                <div className="approach-highlights">
                  <div className="page1-approach-item">
                    <div className="approach-icon-box">
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
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.71-2.13 0-3-.5-.61-1.44-.75-2.22-.5z"></path>
                        <path d="m5 15 9-9"></path>
                        <path d="M16 4a2 2 0 1 1 2.83 2.83L13.66 12"></path>
                        <path d="M18 10a2 2 0 1 1 2.83 2.83l-3.26 3.26"></path>
                      </svg>
                    </div>
                    <div className="approach-info">
                      <span className="approach-label">Precision Workflow</span>
                      <p className="section-content">
                        Standardized protocols for every sample.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="approach-visual">
                <div className="page1-workflow-animation1">
                  <img
                    alt="Lab Workflow"
                    src="https://images.pexels.com/photos/8442096/pexels-photo-8442096.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="page1-workflow-img"
                  />
                  <div className="workflow-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="page1-why-choose-section">
          <div className="why-choose-container">
            <div className="why-choose-header">
              <h2 className="section-title">Why You Should Engage Us</h2>
            </div>
            <div className="why-choose-grid">
              <div className="page1-why-card1">
                <div className="why-icon-wrapper">
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Professionalism</h3>
                <p className="section-content">
                  High ethics and conduct driven by qualified doctors and
                  world-class scientists committed to medical integrity.
                </p>
              </div>
              <div className="page1-why-card1">
                <div className="why-icon-wrapper">
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
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle r="4" cx="9" cy="7"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Scalability</h3>
                <p className="section-content">
                  Our infrastructure is built to handle multiple diagnoses
                  simultaneously without compromising on speed or accuracy.
                </p>
              </div>
              <div className="page1-why-card1">
                <div className="why-icon-wrapper">
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
                    <circle r="10" cx="12" cy="12"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Competence &amp; Value</h3>
                <p className="section-content">
                  Partnership-driven care utilizing advanced technology to
                  deliver premium diagnostic value to every patient.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="page1-services-section">
          <div className="services-container">
            <div className="services-header">
              <h2 className="section-title">
                Top Tier Medical Laboratory DNA Paternity test Page
              </h2>
              <p className="section-content">
                Comprehensive pathology services designed for accuracy and
                confidentiality.
              </p>
            </div>
            <div className="page1-services-carousel-wrapper1">
              <div id="servicesCarousel" className="page1-services-carousel">
                <div className="page1-service-card1">
                  <div className="page1-service-icon1">
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
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                      <circle r="3" cx="12" cy="12"></circle>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">DNA Testing</h3>
                  <p className="section-content">
                    Legal and peace-of-mind paternity testing with 99.9%
                    accuracy and strict confidentiality.
                  </p>
                </div>
                <div className="page1-service-card1">
                  <div className="page1-service-icon1">
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
                      <path d="M12 2v20"></path>
                      <path d="M2 12h20"></path>
                      <path d="m4.93 4.93 14.14 14.14"></path>
                      <path d="m4.93 19.07 14.14-14.14"></path>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">Blood Tests</h3>
                  <p className="section-content">
                    Full hematology and biochemistry panels for comprehensive
                    health monitoring.
                  </p>
                </div>
                <div className="page1-service-card1">
                  <div className="page1-service-icon1">
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
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">Infection Screening</h3>
                  <p className="section-content">
                    Advanced microbial and viral detection using latest PCR and
                    culture techniques.
                  </p>
                </div>
                <div className="page1-service-card1">
                  <div className="page1-service-icon1">
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
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                      <line x1="12" x2="12" y1="19" y2="22"></line>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">Histopathology</h3>
                  <p className="section-content">
                    Expert tissue analysis for oncology and cellular diagnostic
                    precision.
                  </p>
                </div>
              </div>
              <div className="carousel-controls">
                <button
                  id="prevBtn"
                  aria-label="Previous"
                  className="prev page1-carousel-btn1"
                >
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
                <button
                  id="nextBtn"
                  aria-label="Next"
                  className="next page1-carousel-btn1"
                >
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
          </div>
        </section>
        <section className="showcase-section">
          <div className="page1-showcase-container">
            <div className="showcase-header">
              <h2 className="section-title">Precision Instrumentation</h2>
            </div>
            <div className="showcase-grid">
              <div className="showcase-item tall">
                <img
                  alt="Centrifuge in use"
                  src="https://images.pexels.com/photos/6627687/pexels-photo-6627687.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="showcase-img"
                />
                <div className="showcase-caption">
                  <span className="badge-title">Centrifuges</span>
                  <p className="section-content">
                    High-speed separation for accurate plasma analysis.
                  </p>
                </div>
              </div>
              <div className="showcase-item">
                <img
                  alt="Microscope"
                  src="https://images.pexels.com/photos/8442438/pexels-photo-8442438.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="showcase-img"
                />
                <div className="showcase-caption">
                  <span className="badge-title">Microscopy</span>
                  <p className="section-content">
                    Cellular-level diagnostic clarity.
                  </p>
                </div>
              </div>
              <div className="showcase-item">
                <img
                  alt="Diagnostic Machine"
                  src="https://images.pexels.com/photos/6629397/pexels-photo-6629397.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="showcase-img"
                />
                <div className="showcase-caption">
                  <span className="badge-title">Automated Analyzers</span>
                  <p className="section-content">
                    Rapid processing of complex reagents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="page1-ceo-section">
          <div className="page1-ceo-container1">
            <div className="ceo-layout">
              <div className="ceo-image-wrapper">
                <img
                  alt="CEO Prime Pathology Clinic"
                  src="https://images.pexels.com/photos/5726811/pexels-photo-5726811.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="page1-ceo-img1"
                />
                <div className="ceo-experience-badge">
                  <span className="sig-title">Dr. Amadi</span>
                  <span className="section-content">
                    Chief Medical Director
                  </span>
                </div>
              </div>
              <div className="page1-ceo-content-card">
                <h2 className="section-title">A Message From Our CEO</h2>
                <div className="ceo-quotes">
                  <svg
                    fill="none"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                    height="40"
                    stroke="var(--color-primary)"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="quote-icon"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 2.5 1 4.066 2 5V21zm14 0c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 2.5 1 4.066 2 5V21z"></path>
                  </svg>
                </div>
                <p className="section-content">
                  Commitment to quality diagnostics, Patient-centered care,
                  Innovation in pathology. We believe that every test result
                  represents a human life, and we treat that responsibility with
                  the highest professional honor.
                </p>
                <div className="page1-ceo-signature ceo-signature">
                  <span className="sig-title">Prime Pathology Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="page1-team-section">
          <div className="team-container">
            <div className="page1-team-header team-header">
              <h2 className="section-title">Our Management Team</h2>
              <p className="section-content">
                Meet the experts behind our clinical excellence.
              </p>
            </div>
            <div className="team-grid page1-team-grid1">
              <div className="team-card">
                <div className="team-image-box">
                  <img
                    alt="Chief Pathologist"
                    src="https://images.pexels.com/photos/8442534/pexels-photo-8442534.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="team-img"
                  />
                  <div className="team-overlay">
                    <div className="social-links">
                      <span className="section-content">
                        Expert in Molecular Genetics
                      </span>
                    </div>
                  </div>
                </div>
                <div className="team-info">
                  <h3 className="section-subtitle">Dr. Sarah El-Amin</h3>
                  <span className="section-content">Chief Pathologist</span>
                </div>
              </div>
              <div className="team-card">
                <div className="team-image-box">
                  <img
                    alt="Lead Lab Scientist"
                    src="https://images.pexels.com/photos/9574332/pexels-photo-9574332.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="team-img"
                  />
                  <div className="team-overlay">
                    <div className="social-links">
                      <span className="section-content">
                        Specialist in DNA Sequencing
                      </span>
                    </div>
                  </div>
                </div>
                <div className="team-info">
                  <h3 className="section-subtitle">Kwame Mensah</h3>
                  <span className="section-content">Lead Lab Scientist</span>
                </div>
              </div>
              <div className="team-card">
                <div className="team-image-box">
                  <img
                    alt="Senior Technician"
                    src="https://images.pexels.com/photos/8442110/pexels-photo-8442110.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="team-img"
                  />
                  <div className="team-overlay">
                    <div className="social-links">
                      <span className="section-content">
                        Quality Assurance Expert
                      </span>
                    </div>
                  </div>
                </div>
                <div className="team-info">
                  <h3 className="section-subtitle">Amina Yusuf</h3>
                  <span className="section-content">Senior Technician</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="partners-section">
          <div className="page1-partners-track">
            <div className="partners-slide">
              <span className="page1-partner-logo1">HealthConnect</span>
              <span className="page1-partner-logo1">Global Lab Alliance</span>
              <span className="page1-partner-logo1">Ministry of Health</span>
              <span className="page1-partner-logo1">BioGen Africa</span>
              <span className="page1-partner-logo1">
                St. Mary&apos;s Hospital
              </span>
              <span className="page1-partner-logo1">MedTech Solutions</span>
            </div>
            <div aria-hidden="true" className="partners-slide">
              <span className="page1-partner-logo1">HealthConnect</span>
              <span className="page1-partner-logo1">Global Lab Alliance</span>
              <span className="page1-partner-logo1">Ministry of Health</span>
              <span className="page1-partner-logo1">BioGen Africa</span>
              <span className="page1-partner-logo1">
                St. Mary&apos;s Hospital
              </span>
              <span className="page1-partner-logo1">MedTech Solutions</span>
            </div>
          </div>
        </section>
        <section className="page1-process-section">
          <div className="page1-process-container">
            <div className="process-header">
              <h2 className="section-title">Our Diagnostic Journey</h2>
            </div>
            <div className="process-accordion-wrapper">
              <details open="true" className="process-details">
                <summary className="process-summary">
                  <div className="summary-content">
                    <span className="page1-step-number">01</span>
                    <span className="section-subtitle">Sample Collection</span>
                  </div>
                  <div className="summary-icon">
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
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </div>
                </summary>
                <div className="details-content">
                  <p className="section-content">
                    Walk-in or scheduled home collection using sterile, barcoded
                    kits for absolute traceability.
                  </p>
                </div>
              </details>
              <details className="process-details">
                <summary className="process-summary">
                  <div className="summary-content">
                    <span className="page1-step-number">02</span>
                    <span className="section-subtitle">Lab Analysis</span>
                  </div>
                  <div className="summary-icon">
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
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </div>
                </summary>
                <div className="details-content">
                  <p className="section-content">
                    Samples are processed in our state-of-the-art facility using
                    automated molecular diagnostics.
                  </p>
                </div>
              </details>
              <details className="process-details">
                <summary className="process-summary">
                  <div className="summary-content">
                    <span className="page1-step-number">03</span>
                    <span className="section-subtitle">Diagnosis</span>
                  </div>
                  <div className="summary-icon">
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
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </div>
                </summary>
                <div className="details-content">
                  <p className="section-content">
                    Expert pathologists review findings to ensure clinical
                    correlation and diagnostic accuracy.
                  </p>
                </div>
              </details>
              <details className="process-details">
                <summary className="process-summary">
                  <div className="summary-content">
                    <span className="page1-step-number">04</span>
                    <span className="section-subtitle">Result Delivery</span>
                  </div>
                  <div className="summary-icon">
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
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </div>
                </summary>
                <div className="details-content">
                  <p className="section-content">
                    Encrypted digital reports sent via email or secure portal,
                    with physical copies available on request.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="page1-war-room-section">
          <div className="page1-war-room-bg">
            <img
              alt="Lab Activity"
              src="https://images.pexels.com/photos/8442110/pexels-photo-8442110.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="war-room-img"
            />
            <div className="page1-war-room-overlay"></div>
          </div>
          <div className="page1-war-room-container">
            <div className="page1-war-room-content">
              <span className="badge-title">Active Operations</span>
              <h2 className="page1-hero-title hero-title">
                The Heart of Precision
              </h2>
              <p className="section-content">
                Watch our elite team of scientists and technicians as they
                harness the power of molecular pathology to solve medical
                mysteries in real-time.
              </p>
              <div className="live-indicator">
                <span className="dot"></span>
                <span className="section-content">
                  Live Lab Activity Monitoring
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="trust-section">
          <div className="trust-container">
            <div className="trust-card">
              <div className="trust-content">
                <div className="confidentiality-note">
                  <div className="trust-icon">
                    <svg
                      fill="none"
                      width="48"
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      stroke="var(--color-primary)"
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
                  <h2 className="section-title">Confidentiality note</h2>
                  <p className="section-content">
                    Your privacy is our utmost priority. All DNA and pathology
                    data are stored on isolated, encrypted servers and are never
                    shared with third parties without explicit legal consent.
                  </p>
                </div>
                <div className="page1-certifications-grid">
                  <div className="page1-cert-badge1">
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
                      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76M12 8v8m-4-4h8"></path>
                    </svg>
                    <span className="section-content">ISO 15189 Certified</span>
                  </div>
                  <div className="page1-cert-badge1">
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
                      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76M12 8v8m-4-4h8"></path>
                    </svg>
                    <span className="section-content">MLSCN Approved</span>
                  </div>
                  <div className="page1-cert-badge1">
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
                      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76M12 8v8m-4-4h8"></path>
                    </svg>
                    <span className="section-content">NCDC Accredited</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="page1-contact-section">
          <div className="contact-container">
            <div className="page1-contact-grid">
              <div className="contact-map">
                <div className="page1-map-placeholder1">
                  <img
                    alt="Laboratory Location Map"
                    src="https://images.pexels.com/photos/8940345/pexels-photo-8940345.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="map-img"
                  />
                  <div className="map-overlay-btn">
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div target="_blank" className="btn btn-primary">
                        <span>Open in Maps</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-info-block">
                <h2 className="section-title">Visit Our Laboratory</h2>
                <div className="contact-details-list">
                  <div className="contact-item">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="var(--color-primary)"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </svg>
                    <p className="section-content">
                      Plot 45, Medical Research Drive, Victoria Island, Lagos
                    </p>
                  </div>
                  <div className="contact-item">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="var(--color-primary)"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <p className="section-content">+234 (0) 800-PRIME-LAB</p>
                  </div>
                  <div className="contact-item">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="var(--color-primary)"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <p className="section-content">info@primepathology.com</p>
                  </div>
                </div>
                <div className="contact-cta">
                  <button className="btn btn-secondary btn-lg">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="dna-paternity-testing-container2">
          <div className="dna-paternity-testing-container3">
            <Script
              html={`<style>
        @keyframes float {0%,100% {transform: translateY(0) scale(1);}
50% {transform: translateY(-30px) scale(1.1);}}@keyframes scroll {from {transform: translateX(0);}
to {transform: translateX(-50%);}}@keyframes pulse {0% {transform: scale(1);
opacity: 1;}
50% {transform: scale(1.5);
opacity: 0.5;}
100% {transform: scale(1);
opacity: 1;}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="dna-paternity-testing-container4">
          <div className="dna-paternity-testing-container5">
            <Script
              html={`<script defer data-name="prime-lab-js">
(function(){
  const carousel = document.getElementById("servicesCarousel")
  const prevBtn = document.getElementById("prevBtn")
  const nextBtn = document.getElementById("nextBtn")

  if (carousel && prevBtn && nextBtn) {
    let scrollAmount = 0
    const cardWidth = carousel.firstElementChild.offsetWidth + 24 // Width + gap

    nextBtn.addEventListener("click", () => {
      const maxScroll = carousel.scrollWidth - carousel.clientWidth
      if (scrollAmount < maxScroll) {
        scrollAmount += cardWidth
        carousel.style.transform = \`translateX(-\${scrollAmount}px)\`
      } else {
        scrollAmount = 0
        carousel.style.transform = \`translateX(0px)\`
      }
    })

    prevBtn.addEventListener("click", () => {
      if (scrollAmount > 0) {
        scrollAmount -= cardWidth
        carousel.style.transform = \`translateX(-\${scrollAmount}px)\`
      } else {
        scrollAmount = carousel.scrollWidth - carousel.clientWidth
        carousel.style.transform = \`translateX(-\${scrollAmount}px)\`
      }
    })
  }

  // Subtle Parallax for Hero
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const heroVideo = document.querySelector(".hero-video")
    if (heroVideo) {
      heroVideo.style.transform = \`translateY(\${scrolled * 0.3}px)\`
    }

    const molecules = document.querySelectorAll(".molecule")
    molecules.forEach((m, index) => {
      const speed = (index + 1) * 0.1
      m.style.transform = \`translateY(\${scrolled * speed}px)\`
    })
  })

  // Reveal Animations on Scroll
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

  document.querySelectorAll(".why-card, .service-card, .team-card").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
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
          .dna-paternity-testing-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .dna-paternity-testing-container2 {
            display: none;
          }
          .dna-paternity-testing-container3 {
            display: contents;
          }
          .dna-paternity-testing-container4 {
            display: none;
          }
          .dna-paternity-testing-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default DNAPaternityTesting
