import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const BloodAnalysis = (props) => {
  return (
    <>
      <div className="blood-analysis-container1">
        <Head>
          <title>Blood-Analysis - Prime Pathology Clinic</title>
          <meta
            property="og:title"
            content="Blood-Analysis - Prime Pathology Clinic"
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
            href="https://patho.teleporthq.site/blood-analysis"
          />
          <meta
            property="og:url"
            content="https://patho.teleporthq.site/blood-analysis"
          />
        </Head>
        <Navigation></Navigation>
        <section className="hero-blood">
          <div className="hero-bg-media">
            <video
              src="https://videos.pexels.com/video-files/4121061/4121061-hd_1280_720_50fps.mp4"
              loop="true"
              muted="true"
              autoPlay="true"
              playsInline="true"
              className="hero-video"
            ></video>
            <div className="page1-hero-overlay"></div>
          </div>
          <div aria-hidden="true" className="hero-floating-elements">
            <div className="blood-analysis-thq-floating-reagent-elm floating-reagent"></div>
            <div className="blood-analysis-thq-floating-molecule-elm page1-floating-molecule floating-molecule"></div>
            <div className="blood-analysis-thq-floating-bubble-elm floating-bubble"></div>
          </div>
          <div className="page1-hero-content">
            <div className="hero-text-wrapper">
              <h1 className="hero-title">
                Advanced Diagnostic &amp; Pathology Services You Can Trust
              </h1>
              <p className="hero-subtitle">
                Experience world-class medical analysis driven by precision,
                elite technology, and compassionate care from Africa&apos;s
                leading specialists.
              </p>
              <div className="hero-btn-group">
                <button className="btn btn-primary btn-lg">Book Test</button>
                <button className="btn btn-outline btn-lg">
                  Explore Services
                </button>
              </div>
            </div>
            <div className="hero-stats-grid">
              <div className="stat-card">
                <span data-target="99" className="page1-stat-number">
                  99.9%
                </span>
                <span className="stat-suffix">%</span>
                <span className="stat-label page1-stat-label">
                  Accuracy Rate
                </span>
              </div>
              <div className="stat-card">
                <span data-target="250" className="page1-stat-number">
                  500
                </span>
                <span className="stat-suffix">+</span>
                <span className="stat-label page1-stat-label">
                  Specialized Tests
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="approach-section">
          <div className="page1-approach-container">
            <div className="approach-content">
              <h2 className="section-title">Our Treatment Approach</h2>
              <p className="section-content">
                In designing medical services for our clients and patients, we
                use standard pathology laboratory processes that assist
                consultants in carrying out tentative diagnosis to ensure
                reliable and effective treatment.
              </p>
              <div className="approach-features">
                <div className="approach-item">
                  <div className="approach-icon">
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
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        <path d="m9 12l2 2l4-4"></path>
                      </g>
                    </svg>
                  </div>
                  <span>Gold-Standard Validation</span>
                </div>
                <div className="approach-item">
                  <div className="approach-icon">
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
                  <span>Real-time Digital Tracking</span>
                </div>
              </div>
            </div>
            <div className="approach-visual">
              <div className="page1-workflow-animation">
                <div id="node-1" className="page1-workflow-node">
                  <div className="node-pulse"></div>
                  <span className="node-label">Collection</span>
                </div>
                <div className="workflow-line"></div>
                <div id="node-2" className="page1-workflow-node">
                  <div className="node-pulse"></div>
                  <span className="node-label">Analysis</span>
                </div>
                <div className="workflow-line"></div>
                <div id="node-3" className="page1-workflow-node">
                  <div className="node-pulse"></div>
                  <span className="node-label">Report</span>
                </div>
              </div>
              <img
                alt="Laboratory Workflow"
                src="https://images.pexels.com/photos/8442560/pexels-photo-8442560.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="approach-img"
              />
            </div>
          </div>
        </section>
        <section className="why-us">
          <div className="section-header-centered">
            <h2 className="section-title">Why You Should Engage Us</h2>
            <p className="section-subtitle">
              The Prime Standard of Pathology Excellence
            </p>
          </div>
          <div className="page1-why-grid">
            <div className="page1-why-card">
              <div className="why-card-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewbox="0 0 24 24"
                >
                  <path
                    d="M12.516 2.17a.75.75 0 0 0-1.032 0a11.2 11.2 0 0 1-7.877 3.08a.75.75 0 0 0-.722.515A12.7 12.7 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348c0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08m3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094z"
                    fill="currentColor"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Professionalism</h3>
              <p className="section-content">
                Maintaining high ethics and conduct through our team of
                qualified doctors and world-renowned scientists.
              </p>
            </div>
            <div className="page1-why-card">
              <div className="why-card-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewbox="0 0 24 24"
                >
                  <path
                    d="M12 7v4m2 10v-3a2 2 0 0 0-4 0v3m4-12h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"></path>
                  <path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Scalability</h3>
              <p className="section-content">
                Engineered with the capacity to handle thousands of complex
                diagnoses simultaneously without compromising speed.
              </p>
            </div>
            <div className="page1-why-card">
              <div className="why-card-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewbox="0 0 24 24"
                >
                  <path
                    d="m10 16l1.5 1.5M14 8l-1.5-1.5M15 2c-1.798 1.998-2.518 3.995-2.807 5.993M16.5 10.5l1 1M17 6l-2.891-2.891M2 15c6.667-6 13.333 0 20-6m-2 0l.891.891M3.109 14.109L4 15m2.5-2.5l1 1M7 18l2.891 2.891M9 22c1.798-1.998 2.518-3.995 2.807-5.993"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Competence &amp; Value</h3>
              <p className="section-content">
                Partnership-driven care leveraging the most advanced diagnostic
                technology for actionable medical insights.
              </p>
            </div>
          </div>
        </section>
        <section className="page1-services-carousel-wrapper">
          <div className="page1-carousel-header">
            <h2 className="section-title">Our Specialized Services</h2>
            <div className="page1-carousel-controls">
              <button aria-label="Previous" className="prev page1-carousel-btn">
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
              <button aria-label="Next" className="next page1-carousel-btn">
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
          <div id="servicesCarousel" className="services-carousel">
            <div className="page1-service-card">
              <div className="page1-service-icon">
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
                Comprehensive hematology and biochemical profiling for total
                health monitoring.
              </p>
              <a href="#">
                <div className="btn-link">
                  <span>Learn More</span>
                </div>
              </a>
            </div>
            <div className="page1-service-card">
              <div className="page1-service-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewbox="0 0 24 24"
                >
                  <path
                    d="m10 16l1.5 1.5M14 8l-1.5-1.5M15 2c-1.798 1.998-2.518 3.995-2.807 5.993M16.5 10.5l1 1M17 6l-2.891-2.891M2 15c6.667-6 13.333 0 20-6m-2 0l.891.891M3.109 14.109L4 15m2.5-2.5l1 1M7 18l2.891 2.891M9 22c1.798-1.998 2.518-3.995 2.807-5.993"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3 className="section-subtitle">DNA Testing</h3>
              <p className="section-content">
                Advanced genetic mapping for ancestry, paternity, and hereditary
                health risk assessment.
              </p>
              <a href="#">
                <div className="btn-link">
                  <span>Learn More</span>
                </div>
              </a>
            </div>
            <div className="page1-service-card">
              <div className="page1-service-icon">
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
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12l2 2l4-4"></path>
                  </g>
                </svg>
              </div>
              <h3 className="section-subtitle">Infection Screening</h3>
              <p className="section-content">
                Rapid molecular detection of viral and bacterial pathogens using
                PCR technology.
              </p>
              <a href="#">
                <div className="btn-link">
                  <span>Learn More</span>
                </div>
              </a>
            </div>
            <div className="page1-service-card">
              <div className="page1-service-icon">
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
                Expert cellular analysis and biopsies for oncology and complex
                disease diagnosis.
              </p>
              <a href="#">
                <div className="btn-link">
                  <span>Learn More</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="page1-equipment-showcase">
          <div className="page1-showcase-header">
            <h2 className="section-title">Precision Infrastructure</h2>
            <p className="section-content">
              Our laboratory is equipped with the world&apos;s most advanced
              diagnostic machinery.
            </p>
          </div>
          <div className="page1-equipment-grid">
            <div className="large page1-equipment-item">
              <img
                alt="Advanced Microscope"
                src="https://images.pexels.com/photos/8442033/pexels-photo-8442033.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="equipment-img"
              />
              <div className="equipment-overlay">
                <h4 className="section-subtitle">High-Resolution Microscopy</h4>
                <p className="section-content">
                  Digital imaging for precise cellular identification.
                </p>
              </div>
            </div>
            <div className="page1-equipment-item">
              <img
                alt="Centrifuge"
                src="https://images.pexels.com/photos/9574325/pexels-photo-9574325.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="equipment-img"
              />
              <div className="equipment-overlay">
                <h4 className="section-subtitle">Automated Centrifugation</h4>
              </div>
            </div>
            <div className="page1-equipment-item">
              <img
                alt="Reagents"
                src="https://images.pexels.com/photos/5721677/pexels-photo-5721677.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="equipment-img"
              />
              <div className="equipment-overlay">
                <h4 className="section-subtitle">Elite Grade Reagents</h4>
              </div>
            </div>
          </div>
        </section>
        <section className="ceo-section">
          <div className="page1-ceo-container">
            <div className="ceo-image-wrapper">
              <img
                alt="CEO of Prime Pathology"
                src="https://images.pexels.com/photos/8442105/pexels-photo-8442105.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="page1-ceo-img"
              />
              <div className="page1-ceo-badge">
                <span className="badge-title">CEO Message</span>
              </div>
            </div>
            <div className="page1-ceo-card">
              <h2 className="section-title">Commitment to Innovation</h2>
              <p className="section-content">
                &quot;At Prime Pathology, we believe that every sample tells a
                story, and every story deserves the highest level of scientific
                integrity. Our mission is to bridge the gap between complex
                diagnostics and patient-centered care through relentless
                innovation and African excellence.&quot;
              </p>
              <div className="ceo-signature">
                <span className="page1-sig-name">Dr. Amadi Olusegun</span>
                <span className="sig-title">Chief Executive Officer</span>
              </div>
            </div>
          </div>
        </section>
        <section className="team-grid-wrapper">
          <div className="section-header-centered">
            <h2 className="section-title">Management Team</h2>
            <p className="section-subtitle">The Minds Behind the Science</p>
          </div>
          <div className="team-grid page1-team-grid">
            <div className="page1-team-member team-member">
              <div className="page1-member-photo">
                <img
                  alt="Team Member"
                  src="https://images.pexels.com/photos/8770727/pexels-photo-8770727.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="member-hover">
                  <p className="section-content">
                    15+ Years in Clinical Histopathology
                  </p>
                </div>
              </div>
              <h4 className="page1-member-name">Dr. Fatma Mansour</h4>
              <span className="page1-member-role">Chief Pathologist</span>
            </div>
            <div className="page1-team-member team-member">
              <div className="page1-member-photo">
                <img
                  alt="Team Member"
                  src="https://images.pexels.com/photos/5726716/pexels-photo-5726716.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="member-hover">
                  <p className="section-content">
                    Expert in Molecular Diagnostics
                  </p>
                </div>
              </div>
              <h4 className="page1-member-name">Kofi Mensah</h4>
              <span className="page1-member-role">Lead Lab Scientist</span>
            </div>
            <div className="page1-team-member team-member">
              <div className="page1-member-photo">
                <img
                  alt="Team Member"
                  src="https://images.pexels.com/photos/5726696/pexels-photo-5726696.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="member-hover">
                  <p className="section-content">
                    Specialist in Genetic Sequencing
                  </p>
                </div>
              </div>
              <h4 className="page1-member-name">Zainab Al-Fassi</h4>
              <span className="page1-member-role">Senior Technician</span>
            </div>
          </div>
        </section>
        <section className="partners-slider-wrapper">
          <div className="partners-track">
            <div className="page1-partner-logo">
              <span>St. Mary Hospital</span>
            </div>
            <div className="page1-partner-logo">
              <span>Global Health Org</span>
            </div>
            <div className="page1-partner-logo">
              <span>BioTech Labs</span>
            </div>
            <div className="page1-partner-logo">
              <span>National Med Center</span>
            </div>
            <div className="page1-partner-logo">
              <span>Unity Clinic</span>
            </div>
            <div className="page1-partner-logo">
              <span>St. Mary Hospital</span>
            </div>
            <div className="page1-partner-logo">
              <span>Global Health Org</span>
            </div>
            <div className="page1-partner-logo">
              <span>BioTech Labs</span>
            </div>
            <div className="page1-partner-logo">
              <span>National Med Center</span>
            </div>
            <div className="page1-partner-logo">
              <span>Unity Clinic</span>
            </div>
          </div>
        </section>
        <section className="timeline-accordion-section">
          <div className="page1-timeline-container">
            <div className="timeline-header">
              <h2 className="section-title">Diagnostic Journey</h2>
              <p className="section-content">
                Transparent, efficient, and professional processing from start
                to finish.
              </p>
            </div>
            <div className="accordion-list">
              <details open="true" className="page1-timeline-item">
                <summary className="page1-timeline-summary">
                  <span className="page1-step-num">01</span>
                  <span className="page1-step-title">Sample Collection</span>
                </summary>
                <div className="page1-timeline-content">
                  <p className="section-content">
                    Painless and hygienic collection by our certified
                    phlebotomists in a sterile environment or at your home.
                  </p>
                </div>
              </details>
              <details className="page1-timeline-item">
                <summary className="page1-timeline-summary">
                  <span className="page1-step-num">02</span>
                  <span className="page1-step-title">Lab Analysis</span>
                </summary>
                <div className="page1-timeline-content">
                  <p className="section-content">
                    Rigorous testing using automated systems and manual
                    verification by senior pathologists.
                  </p>
                </div>
              </details>
              <details className="page1-timeline-item">
                <summary className="page1-timeline-summary">
                  <span className="page1-step-num">03</span>
                  <span className="page1-step-title">Medical Diagnosis</span>
                </summary>
                <div className="page1-timeline-content">
                  <p className="section-content">
                    Final interpretation of results by our consultants to ensure
                    clinical relevance and accuracy.
                  </p>
                </div>
              </details>
              <details className="page1-timeline-item">
                <summary className="page1-timeline-summary">
                  <span className="page1-step-num">04</span>
                  <span className="page1-step-title">Result Delivery</span>
                </summary>
                <div className="page1-timeline-content">
                  <p className="section-content">
                    Secure digital delivery via email and patient portal, with
                    physical copies available on request.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="page1-war-room">
          <div className="war-room-bg">
            <video
              src="https://videos.pexels.com/video-files/8326170/8326170-hd_1280_720_30fps.mp4"
              loop="true"
              muted="true"
              autoPlay="true"
              playsInline="true"
              className="war-video"
            ></video>
            <div className="war-overlay"></div>
          </div>
          <div className="war-content">
            <h2 className="hero-title">The War Room</h2>
            <p className="hero-subtitle">
              Where science meets life. Our labs operate 24/7 with reagents in
              constant motion and experts tirelessly pursuing precision.
            </p>
            <div className="war-indicators">
              <div className="indicator">
                <div className="indicator-dot"></div>
                <span>Live Analysis Tracking</span>
              </div>
              <div className="indicator">
                <div className="indicator-dot"></div>
                <span>Sterile Environment Active</span>
              </div>
            </div>
          </div>
        </section>
        <section className="location-certs">
          <div className="location-grid">
            <div className="map-container">
              <h2 className="section-title">Visit Our Laboratory</h2>
              <div className="page1-map-placeholder">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.9529122860647!2d3.375295414770757!3d6.514244795287955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8cf000000001%3A0x1234567890abcdef!2sLagos!5e0!3m2!1sen!2sng!4v1625000000000!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  allowFullScreen="true"
                  className="blood-analysis-iframe"
                ></iframe>
              </div>
            </div>
            <div className="certs-container">
              <h3 className="section-subtitle">
                Accreditations &amp; Licenses
              </h3>
              <div className="certs-grid">
                <div className="page1-cert-badge">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewbox="0 0 24 24"
                  >
                    <path
                      d="M12.516 2.17a.75.75 0 0 0-1.032 0a11.2 11.2 0 0 1-7.877 3.08a.75.75 0 0 0-.722.515A12.7 12.7 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348c0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08m3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094z"
                      fill="currentColor"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                  <span>ISO 15189 Certified</span>
                </div>
                <div className="page1-cert-badge">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewbox="0 0 24 24"
                  >
                    <path
                      d="M12.516 2.17a.75.75 0 0 0-1.032 0a11.2 11.2 0 0 1-7.877 3.08a.75.75 0 0 0-.722.515A12.7 12.7 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348c0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08m3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094z"
                      fill="currentColor"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                  <span>MLSCN Licensed</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="blood-analysis-container2">
          <div className="blood-analysis-container3">
            <Script
              html={`<style>
        @keyframes float {0%,100% {transform: translate(0, 0);}
50% {transform: translate(20px, -40px);}}@keyframes pulse {0% {transform: scale(1);
opacity: 1;}
100% {transform: scale(2.5);
opacity: 0;}}@keyframes scroll {0% {transform: translateX(0);}
100% {transform: translateX(-50%);}}@keyframes blink {0%,100% {opacity: 1;}
50% {opacity: 0.3;}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="blood-analysis-container4">
          <div className="blood-analysis-container5">
            <Script
              html={`<script defer data-name="prime-pathology-logic">
(function(){
  // Numerical Counter Animation for Hero Stats
  function animateNumbers() {
    const stats = document.querySelectorAll(".stat-number")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute("data-target"))
            let count = 0
            const duration = 2000
            const increment = target / (duration / 16)

            const updateCount = () => {
              count += increment
              if (count < target) {
                entry.target.innerText = Math.ceil(count)
                requestAnimationFrame(updateCount)
              } else {
                entry.target.innerText = target
              }
            }
            updateCount()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    stats.forEach((stat) => observer.observe(stat))
  }

  // Carousel Functionality
  function initCarousel() {
    const carousel = document.getElementById("servicesCarousel")
    const nextBtn = document.querySelector(".carousel-btn.next")
    const prevBtn = document.querySelector(".carousel-btn.prev")

    if (!carousel || !nextBtn || !prevBtn) return

    let scrollAmount = 0
    const cardWidth = carousel.querySelector(".service-card").offsetWidth + 24

    nextBtn.addEventListener("click", () => {
      scrollAmount += cardWidth
      if (scrollAmount > carousel.scrollWidth - carousel.offsetWidth) {
        scrollAmount = 0
      }
      carousel.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    })

    prevBtn.addEventListener("click", () => {
      scrollAmount -= cardWidth
      if (scrollAmount < 0) {
        scrollAmount = carousel.scrollWidth - carousel.offsetWidth
      }
      carousel.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    })
  }

  // Mobile Menu Toggle
  function initMobileMenu() {
    const toggle = document.querySelector(".mobile-toggle")
    const nav = document.querySelector(".header-nav")

    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("active")
        toggle.classList.toggle("open")

        // Simple toggle styling if not in CSS
        if (nav.classList.contains("active")) {
          nav.style.display = "block"
          nav.style.position = "absolute"
          nav.style.top = "100%"
          nav.style.left = "0"
          nav.style.width = "100%"
          nav.style.background = "white"
          nav.style.padding = "20px"
          const list = nav.querySelector(".nav-list")
          list.style.display = "flex"
          list.style.flexDirection = "column"
        } else {
          nav.style.display = "none"
        }
      })
    }
  }

  // Workflow Animation Trigger
  function initWorkflow() {
    const nodes = document.querySelectorAll(".workflow-node")
    let activeNode = 0

    setInterval(() => {
      nodes.forEach((node) => (node.querySelector(".node-pulse").style.background = "var(--color-border)"))
      nodes[activeNode].querySelector(".node-pulse").style.background = "var(--color-primary)"
      activeNode = (activeNode + 1) % nodes.length
    }, 3000)
  }

  // Initialize all features
  animateNumbers()
  initCarousel()
  initMobileMenu()
  initWorkflow()
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .blood-analysis-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .blood-analysis-thq-floating-reagent-elm {
            top: 15%;
            left: 10%;
          }
          .blood-analysis-thq-floating-molecule-elm {
            top: 40%;
            right: 15%;
          }
          .blood-analysis-thq-floating-bubble-elm {
            left: 20%;
            bottom: 20%;
          }
          .blood-analysis-iframe {
            border: 0;
          }
          .blood-analysis-container2 {
            display: none;
          }
          .blood-analysis-container3 {
            display: contents;
          }
          .blood-analysis-container4 {
            display: none;
          }
          .blood-analysis-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default BloodAnalysis
