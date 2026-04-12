import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const HormonalProfile = (props) => {
  return (
    <>
      <div className="hormonal-profile-container10">
        <Head>
          <title>Hormonal-Profile - Prime Pathology Clinic</title>
          <meta
            property="og:title"
            content="Hormonal-Profile - Prime Pathology Clinic"
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
            href="https://patho.teleporthq.site/hormonal-profile"
          />
          <meta
            property="og:url"
            content="https://patho.teleporthq.site/hormonal-profile"
          />
        </Head>
        <Navigation></Navigation>
        <div className="hormonal-profile-container11">
          <div className="hormonal-profile-container12">
            <Script
              html={`<style>
:where(section) {
  padding: var(--spacing-4xl) 5%;
  overflow: hidden;
  position: relative;
}
</style>`}
            ></Script>
          </div>
        </div>
        <section className="page1-hero-container1">
          <video
            src="https://videos.pexels.com/video-files/8325856/8325856-hd_1280_720_30fps.mp4"
            loop="true"
            muted="true"
            poster="https://images.pexels.com/videos/8325856/pictures/preview-0.jpeg"
            autoPlay="true"
            playsInline="true"
            className="page1-hero-video hero-video"
          ></video>
          <div className="page1-hero-overlay2"></div>
          <div className="page1-hero-content2">
            <div className="hero-badges">
              <span className="page1-badge-item">Hormonal Health</span>
              <span className="page1-badge-item">Advanced Pathology</span>
            </div>
            <h1 className="page1-hero-title1 hero-title">
              Advanced Diagnostic &amp; Pathology Services You Can Trust
            </h1>
            <p className="hero-subtitle">
              Leading the way in hormonal profiling and comprehensive medical
              diagnostics with global standards and precision technology.
            </p>
            <div className="page1-hero-actions hero-actions">
              <button className="btn btn-primary btn-lg">Book Test Now</button>
              <button className="btn btn-outline btn-lg">View Services</button>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="floating-elements page1-floating-elements"
          >
            <div className="dna-icon page1-float-item">
              <svg
                fill="none"
                width="48"
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m10 16l1.5 1.5M14 8l-1.5-1.5M15 2c-1.798 1.998-2.518 3.995-2.807 5.993M16.5 10.5l1 1M17 6l-2.891-2.891M2 15c6.667-6 13.333 0 20-6m-2 0l.891.891M3.109 14.109L4 15m2.5-2.5l1 1M7 18l2.891 2.891M9 22c1.798-1.998 2.518-3.995 2.807-5.993"></path>
              </svg>
            </div>
            <div className="molecule-icon page1-float-item"></div>
          </div>
        </section>
        <section className="page1-approach-section1">
          <div className="approach-wrapper">
            <div className="approach-visual">
              <div className="page1-workflow-animation2">
                <div className="hormonal-profile-thq-workflow-node-elm1 page1-workflow-node1">
                  <span>Collection</span>
                </div>
                <div className="hormonal-profile-thq-workflow-node-elm2 page1-workflow-node1">
                  <span>Analysis</span>
                </div>
                <div className="hormonal-profile-thq-workflow-node-elm3 page1-workflow-node1">
                  <span>Diagnosis</span>
                </div>
              </div>
              <img
                alt="Laboratory Workflow"
                src="https://images.pexels.com/photos/9574401/pexels-photo-9574401.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="page1-approach-img"
              />
            </div>
            <div className="approach-content-box">
              <h2 className="section-title">Our Treatment Approach</h2>
              <p className="section-content">
                In designing medical services for our clients and patients, we
                use standard pathology laboratory processes that assist
                consultants in carrying out tentative diagnosis to ensure
                reliable and effective treatment.
              </p>
              <div className="page1-approach-features approach-features">
                <div className="feature-mini">
                  <div className="icon-wrap">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    </svg>
                  </div>
                  <span>Standardized Protocol</span>
                </div>
                <div className="feature-mini">
                  <div className="icon-wrap">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7l-8.5 8.5l-5-5L2 17"></path>
                    </svg>
                  </div>
                  <span>Effective Recovery</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="engage-section">
          <div className="engage-header">
            <h2 className="section-title">Why You Should Engage Us</h2>
          </div>
          <div className="page1-engage-grid">
            <div className="page1-engage-card">
              <div className="card-icon">
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
              <h3 className="section-subtitle">Professionalism</h3>
              <p className="section-content">
                We maintain the highest ethics and conduct, staffed by qualified
                doctors and world-class scientists committed to medical
                excellence.
              </p>
            </div>
            <div className="page1-engage-card">
              <div className="card-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="m3 17 6-6 4 4 8-8"></path>
                  <path d="M14 7h7v7"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Scalability</h3>
              <p className="section-content">
                Our infrastructure is built to handle multiple complex diagnoses
                simultaneously without compromising on speed or accuracy.
              </p>
            </div>
            <div className="page1-engage-card">
              <div className="card-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M6 9a6 6 0 1 0 12 0A6 6 0 1 0 6 9"></path>
                  <path d="m12 15 3.4 5.89 1.598-3.233 3.598.232l-3.4-5.889"></path>
                  <path d="M6.802 12l-3.4 5.89L7 17.657l1.598 3.232l3.4-5.889"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Competence &amp; Value</h3>
              <p className="section-content">
                We provide partnership-driven care utilizing advanced technology
                to deliver superior diagnostic value for every patient.
              </p>
            </div>
          </div>
        </section>
        <section className="page1-services-carousel-section">
          <div className="carousel-header">
            <h2 className="section-title">Hormonal Profile Services</h2>
          </div>
          <div id="servicesCarousel" className="carousel-container">
            <div className="page1-carousel-track">
              <div className="page1-service-card2">
                <div className="page1-service-icon2">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="M12 2v20M2 12h20"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Thyroid Profile</h3>
                <p className="section-content">
                  Comprehensive analysis of T3, T4, and TSH levels for metabolic
                  health.
                </p>
              </div>
              <div className="page1-service-card2">
                <div className="page1-service-icon2">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Fertility Screening</h3>
                <p className="section-content">
                  Evaluation of reproductive hormones including FSH, LH, and
                  Prolactin.
                </p>
              </div>
              <div className="page1-service-card2">
                <div className="page1-service-icon2">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Stress Hormones</h3>
                <p className="section-content">
                  Accurate measurement of Cortisol and Adrenaline for systemic
                  wellness.
                </p>
              </div>
              <div className="page1-service-card2">
                <div className="page1-service-icon2">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="M12 2v10l4 2"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Growth Profile</h3>
                <p className="section-content">
                  Monitoring HGH and IGF-1 for developmental and adult health.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-controls">
            <button id="prevBtn" className="prev page1-carousel-btn2">
              ←
            </button>
            <button id="nextBtn" className="next page1-carousel-btn2">
              →
            </button>
          </div>
        </section>
        <section className="equipment-section">
          <div className="equipment-header">
            <h2 className="section-title">
              Precision Laboratory Infrastructure
            </h2>
          </div>
          <div className="page1-equipment-grid1">
            <div className="equipment-item large">
              <img
                alt="Advanced Microscope"
                src="https://images.pexels.com/photos/5726850/pexels-photo-5726850.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="equipment-img"
              />
              <div className="page1-equipment-overlay">
                <span className="equipment-tag">Digital Pathology</span>
                <h4 className="section-subtitle">High-Res Microscopes</h4>
              </div>
            </div>
            <div className="equipment-item">
              <img
                alt="Centrifuge System"
                src="https://images.pexels.com/photos/5721680/pexels-photo-5721680.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="equipment-img"
              />
              <div className="page1-equipment-overlay">
                <h4 className="section-subtitle">Automated Centrifuges</h4>
              </div>
            </div>
            <div className="equipment-item">
              <img
                alt="Diagnostic Machine"
                src="https://images.pexels.com/photos/33658644/pexels-photo-33658644.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="equipment-img"
              />
              <div className="page1-equipment-overlay">
                <h4 className="section-subtitle">Immunoassay Analyzers</h4>
              </div>
            </div>
            <div className="equipment-item wide">
              <img
                alt="Lab Reagents"
                src="https://images.pexels.com/photos/9574332/pexels-photo-9574332.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="equipment-img"
              />
              <div className="page1-equipment-overlay">
                <h4 className="section-subtitle">Certified Reagent Systems</h4>
              </div>
            </div>
          </div>
        </section>
        <section className="page1-ceo-section1">
          <div className="page1-ceo-container2">
            <div className="ceo-image-wrap">
              <img
                alt="CEO Prime Pathology"
                src="https://images.pexels.com/photos/5726811/pexels-photo-5726811.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="page1-ceo-img2"
              />
            </div>
            <div className="page1-ceo-card1">
              <div className="page1-quote-icon">
                <span>“</span>
              </div>
              <h2 className="section-title">
                Commitment to Quality Diagnostics
              </h2>
              <p className="section-content">
                At Prime Pathology Clinic, our vision is built on the pillars of
                innovation and patient-centered care. We believe that every
                diagnostic result is a life in our hands, and we treat it with
                the utmost precision and ethical responsibility.
              </p>
              <div className="page1-ceo-signature1 ceo-signature">
                <div className="sig-line"></div>
                <p className="page1-sig-name1">Dr. Amadi Chenge</p>
                <p className="sig-title">CEO &amp; Chief Medical Director</p>
              </div>
            </div>
          </div>
        </section>
        <section className="team-section">
          <div className="team-header">
            <h2 className="section-title">Our Management Team</h2>
          </div>
          <div className="page1-team-grid2 team-grid">
            <div className="page1-team-member1 team-member">
              <div className="page1-member-photo1">
                <img
                  alt="Chief Pathologist"
                  src="https://images.pexels.com/photos/5726702/pexels-photo-5726702.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="page1-member-hover">
                  <p>Expert in hormonal profiling with 15+ years experience.</p>
                </div>
              </div>
              <h4 className="section-subtitle">Dr. Sarah Okafor</h4>
              <p className="section-content">Chief Pathologist</p>
            </div>
            <div className="page1-team-member1 team-member">
              <div className="page1-member-photo1">
                <img
                  alt="Lab Scientist"
                  src="https://images.pexels.com/photos/8442504/pexels-photo-8442504.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="page1-member-hover">
                  <p>Specialist in Molecular Biology and DNA forensics.</p>
                </div>
              </div>
              <h4 className="section-subtitle">Ibrahim Mansour</h4>
              <p className="section-content">Lead Lab Scientist</p>
            </div>
            <div className="page1-team-member1 team-member">
              <div className="page1-member-photo1">
                <img
                  alt="Operations Lead"
                  src="https://images.pexels.com/photos/9574348/pexels-photo-9574348.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="page1-member-hover">
                  <p>Optimizing clinical workflows for rapid delivery.</p>
                </div>
              </div>
              <h4 className="section-subtitle">Layla Al-Fassi</h4>
              <p className="section-content">Operations Director</p>
            </div>
            <div className="page1-team-member1 team-member">
              <div className="page1-member-photo1">
                <img
                  alt="Quality Control"
                  src="https://images.pexels.com/photos/8442371/pexels-photo-8442371.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="page1-member-hover">
                  <p>Ensuring every test meets international ISO standards.</p>
                </div>
              </div>
              <h4 className="section-subtitle">Chidi Eze</h4>
              <p className="section-content">Quality Assurance</p>
            </div>
          </div>
        </section>
        <section className="page1-partners-section">
          <div className="page1-partners-track1">
            <div className="page1-partner-logo2">
              <span>HealthConnect</span>
            </div>
            <div className="page1-partner-logo2">
              <span>Global Labs</span>
            </div>
            <div className="page1-partner-logo2">
              <span>MedTrust</span>
            </div>
            <div className="page1-partner-logo2">
              <span>BioGen</span>
            </div>
            <div className="page1-partner-logo2">
              <span>Unity Hospital</span>
            </div>
            <div className="page1-partner-logo2">
              <span>PathoLink</span>
            </div>
            <div className="page1-partner-logo2">
              <span>HealthConnect</span>
            </div>
            <div className="page1-partner-logo2">
              <span>Global Labs</span>
            </div>
            <div className="page1-partner-logo2">
              <span>MedTrust</span>
            </div>
            <div className="page1-partner-logo2">
              <span>BioGen</span>
            </div>
            <div className="page1-partner-logo2">
              <span>Unity Hospital</span>
            </div>
            <div className="page1-partner-logo2">
              <span>PathoLink</span>
            </div>
          </div>
        </section>
        <section className="timeline-section">
          <div className="timeline-header">
            <h2 className="section-title">Our Diagnostic Process</h2>
          </div>
          <div className="page1-timeline-container1">
            <details open="true" className="page1-timeline-step">
              <summary>
                <div className="page1-step-num1">
                  <span>01</span>
                </div>
                <span className="section-subtitle">Sample Collection</span>
                <div className="step-icon"></div>
              </summary>
              <div className="page1-step-content">
                <p className="section-content">
                  Painless and sterile collection of biological samples by our
                  trained phlebotomists in a comfortable environment.
                </p>
              </div>
            </details>
            <details className="page1-timeline-step">
              <summary>
                <div className="page1-step-num1">
                  <span>02</span>
                </div>
                <span className="section-subtitle">Lab Analysis</span>
                <div className="step-icon"></div>
              </summary>
              <div className="page1-step-content">
                <p className="section-content">
                  Advanced automated processing using state-of-the-art reagents
                  and molecular diagnostic equipment.
                </p>
              </div>
            </details>
            <details className="page1-timeline-step">
              <summary>
                <div className="page1-step-num1">
                  <span>03</span>
                </div>
                <span className="section-subtitle">Diagnosis</span>
                <div className="step-icon"></div>
              </summary>
              <div className="page1-step-content">
                <p className="section-content">
                  Review by our board-certified pathologists to ensure clinical
                  correlation and diagnostic accuracy.
                </p>
              </div>
            </details>
            <details className="page1-timeline-step">
              <summary>
                <div className="page1-step-num1">
                  <span>04</span>
                </div>
                <span className="section-subtitle">Result Delivery</span>
                <div className="step-icon"></div>
              </summary>
              <div className="page1-step-content">
                <p className="section-content">
                  Secure digital delivery of reports via encrypted portal with
                  optional consultant explanation.
                </p>
              </div>
            </details>
          </div>
        </section>
        <section className="warroom-section">
          <div className="warroom-bg">
            <video
              src="https://videos.pexels.com/video-files/4114797/4114797-hd_1920_1080_25fps.mp4"
              loop="true"
              muted="true"
              autoPlay="true"
              playsInline="true"
              className="warroom-video"
            ></video>
            <div className="warroom-overlay"></div>
          </div>
          <div className="warroom-content">
            <h2 className="page1-hero-title1 hero-title">
              Precision in Motion
            </h2>
            <p className="hero-subtitle">
              Our &quot;War Room&quot; is where science meets strategy. Every
              reagent, every test tube, and every professional movement is
              synchronized for life-saving accuracy.
            </p>
            <div className="warroom-stats">
              <div className="page1-stat-item">
                <span className="stat-val">50k+</span>
                <span className="page1-stat-label1 stat-label">
                  Tests Monthly
                </span>
              </div>
              <div className="page1-stat-item">
                <span className="stat-val">99.9%</span>
                <span className="page1-stat-label1 stat-label">
                  Accuracy Rate
                </span>
              </div>
              <div className="page1-stat-item">
                <span className="stat-val">24/7</span>
                <span className="page1-stat-label1 stat-label">
                  Lab Activity
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="location-section">
          <div className="location-wrapper">
            <div className="page1-map-container">
              <div className="map-placeholder">
                <div className="map-info">
                  <h3 className="section-title">Visit Our Laboratory</h3>
                  <p className="section-content">
                    12 Medical District Avenue, Victoria Island, Lagos
                  </p>
                  <button className="btn btn-primary">Get Directions</button>
                </div>
              </div>
            </div>
            <div className="certification-container">
              <h2 className="section-title">Licenses &amp; Certifications</h2>
              <div className="badge-grid">
                <div className="page1-cert-badge2">
                  <div className="badge-icon">
                    <svg
                      fill="none"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                      height="32"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <span className="badge-text">MLSCN Certified</span>
                </div>
                <div className="page1-cert-badge2">
                  <div className="badge-icon">
                    <svg
                      fill="none"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                      height="32"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path d="M12 15l3.5 3.5L22 12"></path>
                    </svg>
                  </div>
                  <span className="badge-text">ISO 15189</span>
                </div>
                <div className="page1-cert-badge2">
                  <div className="badge-icon">
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
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <span className="badge-text">Gov Approved</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="hormonal-profile-container17">
          <div className="hormonal-profile-container18">
            <Script
              html={`<style>
        @keyframes float {0%,100% {transform: translateY(0) rotate(0);}
50% {transform: translateY(-30px) rotate(10deg);}}@keyframes pulseNode {0%,100% {transform: scale(1);
opacity: 0.8;}
50% {transform: scale(1.05);
opacity: 1;}}@keyframes scrollLogos {from {transform: translateX(0);}
to {transform: translateX(-50%);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="hormonal-profile-container19">
          <div className="hormonal-profile-container20">
            <Script
              html={`<script defer data-name="pathology-interactions">
(function(){
  const track = document.querySelector(".carousel-track")
  const nextBtn = document.getElementById("nextBtn")
  const prevBtn = document.getElementById("prevBtn")
  let scrollAmount = 0

  if (nextBtn && prevBtn && track) {
    nextBtn.addEventListener("click", () => {
      const maxScroll = track.scrollWidth - track.parentElement.clientWidth
      scrollAmount = Math.min(scrollAmount + 320, maxScroll)
      track.style.transform = \`translateX(-\${scrollAmount}px)\`
    })

    prevBtn.addEventListener("click", () => {
      scrollAmount = Math.max(scrollAmount - 320, 0)
      track.style.transform = \`translateX(-\${scrollAmount}px)\`
    })
  }

  // Simple Intersection Observer for scroll reveals
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

  document.querySelectorAll(".engage-card, .team-member, .service-card").forEach((el) => {
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
          .hormonal-profile-container10 {
            width: 100%;
            min-height: 100vh;
          }
          .hormonal-profile-container11 {
            display: none;
          }
          .hormonal-profile-container12 {
            display: contents;
          }
          .hormonal-profile-thq-workflow-node-elm1 {
            -delay: 0s;
          }
          .hormonal-profile-thq-workflow-node-elm2 {
            -delay: 1.5s;
          }
          .hormonal-profile-thq-workflow-node-elm3 {
            -delay: 3s;
          }
          .hormonal-profile-container17 {
            display: none;
          }
          .hormonal-profile-container18 {
            display: contents;
          }
          .hormonal-profile-container19 {
            display: none;
          }
          .hormonal-profile-container20 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default HormonalProfile
