import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Histopathology = (props) => {
  return (
    <>
      <div className="histopathology-container1">
        <Head>
          <title>Histopathology - Prime Pathology Clinic</title>
          <meta
            property="og:title"
            content="Histopathology - Prime Pathology Clinic"
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
            href="https://patho.teleporthq.site/histopathology"
          />
          <meta
            property="og:url"
            content="https://patho.teleporthq.site/histopathology"
          />
        </Head>
        <Navigation></Navigation>
        <section className="page1-hero-section1">
          <div className="hero-media-container">
            <video
              src="https://videos.pexels.com/video-files/8326501/8326501-hd_1280_720_30fps.mp4"
              loop="true"
              muted="true"
              poster="https://images.pexels.com/videos/8326501/pictures/preview-0.jpeg"
              autoPlay="true"
              playsInline="true"
              className="page1-hero-video1 hero-video"
            ></video>
            <div className="page1-hero-overlay3"></div>
            <div className="hero-floating-elements page1-hero-floating-elements1">
              <div className="floating-molecule page1-molecule-11 page1-floating-molecule1 molecule-1"></div>
              <div className="floating-molecule page1-floating-molecule1 molecule-2 page1-molecule-21"></div>
              <div className="floating-molecule page1-floating-molecule1 page1-molecule-3"></div>
            </div>
          </div>
          <div className="hero-content-wrapper">
            <div className="hero-text-content">
              <h1 className="page1-hero-title2 hero-title">
                Advanced Diagnostic &amp; Pathology Services You Can Trust
              </h1>
              <p className="hero-subtitle page1-hero-subtitle">
                Prime Pathology Clinic delivers precision-driven medical
                insights through state-of-the-art laboratory technology and
                expert clinical expertise.
              </p>
              <div className="page1-hero-cta-group">
                <button className="btn btn-primary btn-xl">Book Test</button>
                <button className="btn btn-xl btn-outline">Our Services</button>
              </div>
            </div>
          </div>
        </section>
        <section className="page1-approach-section2">
          <div className="page1-approach-container2">
            <div className="page1-approach-grid">
              <div className="approach-text-block">
                <h2 className="section-title">Our Treatment Approach</h2>
                <p className="section-content">
                  In designing medical services for our clients and patients, we
                  use standard pathology laboratory processes that assist
                  consultants in carrying out tentative diagnosis to ensure
                  reliable and effective treatment.
                </p>
                <div className="approach-workflow-visual">
                  <div className="page1-workflow-step">
                    <div className="workflow-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M10 2v6.292a7 7 0 1 0 4 0V2M5 15h14M8.5 2h7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <span>Standardization</span>
                  </div>
                  <div className="page1-workflow-line"></div>
                  <div className="page1-workflow-step">
                    <div className="workflow-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
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
                    <span>Analysis</span>
                  </div>
                  <div className="page1-workflow-line"></div>
                  <div className="page1-workflow-step">
                    <div className="workflow-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"></path>
                          <path d="m9 12l2 2l4-4"></path>
                        </g>
                      </svg>
                    </div>
                    <span>Reliability</span>
                  </div>
                </div>
              </div>
              <div className="approach-media-block">
                <img
                  alt="Laboratory workflow animation"
                  src="https://images.pexels.com/photos/8442102/pexels-photo-8442102.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="page1-approach-img1"
                />
                <div className="approach-accent-box"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="why-engage-section">
          <div className="why-engage-container">
            <div className="why-header">
              <h2 className="section-title">Why You Should Engage Us</h2>
              <p className="section-subtitle">
                Excellence in diagnostic medicine through three core pillars.
              </p>
            </div>
            <div className="page1-why-grid1">
              <div className="page1-why-card2">
                <div className="page1-why-card-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
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
                  High ethics and conduct maintained by qualified doctors and
                  scientists committed to patient integrity.
                </p>
              </div>
              <div className="page1-why-card2">
                <div className="page1-why-card-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 3v1q-.015 5.028-5.008 8.014c-3.328 1.99 3.336-2 .008-.014c-3.328 1.99-5 4.662-5.008 8.014v1"></path>
                      <path d="M17 21.014v-1q-.015-5.028-5.008-8.014c-3.328-1.99 3.336 2 .008.014C8.672 10.023 7 7.352 6.992 4V3M7 4h10M7 20h10M8 8h8m-8 8h8"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">Scalability</h3>
                <p className="section-content">
                  Ability to handle multiple diagnoses simultaneously without
                  compromising on speed or accuracy of results.
                </p>
              </div>
              <div className="page1-why-card2">
                <div className="page1-why-card-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
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
                  Partnership-driven care using advanced technology to deliver
                  clinical value at every touchpoint.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="page1-services-carousel-section1">
          <div className="page1-services-container services-container">
            <div className="services-header">
              <h2 className="section-title">Histopathology &amp; Services</h2>
              <div className="page1-carousel-controls1 carousel-controls">
                <button id="prevService" className="prev page1-carousel-btn3">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m15 18l-6-6l6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <button id="nextService" className="page1-carousel-btn3 next">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m9 18l6-6l-6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="services-track-wrapper">
              <div id="servicesTrack" className="page1-services-track">
                <div className="page1-service-card3">
                  <div className="page1-service-icon3">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
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
                    Microscopic examination of tissue specimens for precise
                    disease identification and staging.
                  </p>
                </div>
                <div className="page1-service-card3">
                  <div className="page1-service-icon3">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M10 2v6.292a7 7 0 1 0 4 0V2M5 15h14M8.5 2h7"
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
                    Comprehensive hematology and biochemistry panels to monitor
                    your internal health indicators.
                  </p>
                </div>
                <div className="page1-service-card3">
                  <div className="page1-service-icon3">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17 3v1q-.015 5.028-5.008 8.014c-3.328 1.99 3.336-2 .008-.014c-3.328 1.99-5 4.662-5.008 8.014v1"></path>
                        <path d="M17 21.014v-1q-.015-5.028-5.008-8.014c-3.328-1.99 3.336 2 .008.014C8.672 10.023 7 7.352 6.992 4V3M7 4h10M7 20h10M8 8h8m-8 8h8"></path>
                      </g>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">DNA Testing</h3>
                  <p className="section-content">
                    Advanced genetic screening for ancestry, paternity, and
                    predisposition to hereditary conditions.
                  </p>
                </div>
                <div className="page1-service-card3">
                  <div className="page1-service-icon3">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">Infection Screening</h3>
                  <p className="section-content">
                    Rapid and sensitive detection of viral, bacterial, and
                    fungal pathogens using molecular methods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="equipment-showcase-section">
          <div className="equipment-container">
            <div className="page1-equipment-header equipment-header">
              <h2 className="section-title">
                Lab Equipment &amp; Tests Showcase
              </h2>
              <p className="section-subtitle">
                Our facility is equipped with world-class diagnostic machinery.
              </p>
            </div>
            <div className="page1-equipment-grid2">
              <div className="equipment-item large">
                <img
                  alt="Microscope"
                  src="https://images.pexels.com/photos/5721680/pexels-photo-5721680.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="page1-equipment-img equipment-img"
                />
                <div className="page1-equipment-overlay1">
                  <h4 className="section-subtitle">
                    High-Resolution Microscopes
                  </h4>
                </div>
              </div>
              <div className="equipment-item">
                <img
                  alt="Centrifuges"
                  src="https://images.pexels.com/photos/5726850/pexels-photo-5726850.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="page1-equipment-img equipment-img"
                />
                <div className="page1-equipment-overlay1">
                  <h4 className="section-subtitle">Precision Centrifuges</h4>
                </div>
              </div>
              <div className="equipment-item">
                <img
                  alt="Diagnostic Machines"
                  src="https://images.pexels.com/photos/8940352/pexels-photo-8940352.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="page1-equipment-img equipment-img"
                />
                <div className="page1-equipment-overlay1">
                  <h4 className="section-subtitle">Molecular Analyzers</h4>
                </div>
              </div>
              <div className="equipment-item wide">
                <img
                  alt="Lab Technicians"
                  src="https://images.pexels.com/photos/33105678/pexels-photo-33105678.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="page1-equipment-img equipment-img"
                />
                <div className="page1-equipment-overlay1">
                  <h4 className="section-subtitle">
                    Automated Diagnostic Systems
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="page1-ceo-message-section">
          <div className="ceo-container">
            <div className="page1-ceo-grid">
              <div className="ceo-image-wrapper">
                <img
                  alt="CEO of Prime Pathology Clinic"
                  src="https://images.pexels.com/photos/6129879/pexels-photo-6129879.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="page1-ceo-img3"
                />
                <div className="page1-ceo-experience-badge">
                  <span className="badge-number">15+</span>
                  <span className="page1-badge-text">Years of Excellence</span>
                </div>
              </div>
              <div className="page1-ceo-content-card1">
                <h2 className="section-title">CEO Message</h2>
                <div className="ceo-quote">
                  <p className="section-content">
                    &quot;Our commitment to quality diagnostics is the
                    foundation of our patient-centered care. At Prime Pathology,
                    we don&apos;t just process samples; we provide the clarity
                    needed for life-saving decisions through constant innovation
                    in pathology.&quot;
                  </p>
                </div>
                <div className="ceo-signature-block">
                  <div className="page1-ceo-signature2 ceo-signature">
                    <span>Dr. Amadi Oluchi</span>
                  </div>
                  <div className="ceo-title">
                    <span>Chief Executive Officer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="management-team-section">
          <div className="team-container page1-team-container">
            <div className="page1-team-header1 team-header">
              <h2 className="section-title">Management Team</h2>
              <p className="section-subtitle">
                The experts behind our diagnostic precision.
              </p>
            </div>
            <div className="team-grid page1-team-grid3">
              <div className="team-member page1-team-member2">
                <div className="member-image">
                  <img
                    alt="Chief Pathologist"
                    src="https://images.pexels.com/photos/5726811/pexels-photo-5726811.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                  <div className="member-reveal">
                    <p>
                      Specialist in Histopathology and Clinical Diagnostics.
                    </p>
                  </div>
                </div>
                <h4 className="section-subtitle">Dr. Kwame Mensah</h4>
                <p className="section-content">Chief Pathologist</p>
              </div>
              <div className="team-member page1-team-member2">
                <div className="member-image">
                  <img
                    alt="Lab Scientist"
                    src="https://images.pexels.com/photos/8442561/pexels-photo-8442561.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                  <div className="member-reveal">
                    <p>Expert in Molecular Biology and DNA Sequencing.</p>
                  </div>
                </div>
                <h4 className="section-subtitle">Sarah El-Sayed</h4>
                <p className="section-content">Senior Lab Scientist</p>
              </div>
              <div className="team-member page1-team-member2">
                <div className="member-image">
                  <img
                    alt="Lead Technician"
                    src="https://images.pexels.com/photos/4031525/pexels-photo-4031525.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                  <div className="member-reveal">
                    <p>Managing laboratory operations and quality control.</p>
                  </div>
                </div>
                <h4 className="section-subtitle">Youssef Mansour</h4>
                <p className="section-content">Operations Manager</p>
              </div>
              <div className="team-member page1-team-member2">
                <div className="member-image">
                  <img
                    alt="Clinical Technician"
                    src="https://images.pexels.com/photos/8442574/pexels-photo-8442574.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                  <div className="member-reveal">
                    <p>Specialized in rapid infection screening protocols.</p>
                  </div>
                </div>
                <h4 className="section-subtitle">Zainab Al-Farsi</h4>
                <p className="section-content">Clinical Technician</p>
              </div>
            </div>
          </div>
        </section>
        <section className="partners-slider-section">
          <div className="page1-partners-track2">
            <div className="partners-group">
              <div className="page1-partner-logo3">
                <span>St. Jude Hospital</span>
              </div>
              <div className="page1-partner-logo3">
                <span>HealthPlus</span>
              </div>
              <div className="page1-partner-logo3">
                <span>MedLab Int</span>
              </div>
              <div className="page1-partner-logo3">
                <span>Lagos Health</span>
              </div>
              <div className="page1-partner-logo3">
                <span>Global Bio</span>
              </div>
              <div className="page1-partner-logo3">
                <span>Crestview</span>
              </div>
            </div>
            <div aria-hidden="true" className="partners-group">
              <div className="page1-partner-logo3">
                <span>St. Jude Hospital</span>
              </div>
              <div className="page1-partner-logo3">
                <span>HealthPlus</span>
              </div>
              <div className="page1-partner-logo3">
                <span>MedLab Int</span>
              </div>
              <div className="page1-partner-logo3">
                <span>Lagos Health</span>
              </div>
              <div className="page1-partner-logo3">
                <span>Global Bio</span>
              </div>
              <div className="page1-partner-logo3">
                <span>Crestview</span>
              </div>
            </div>
          </div>
        </section>
        <section className="diagnostic-timeline-section">
          <div className="page1-timeline-container2">
            <div className="timeline-header">
              <h2 className="section-title">Diagnostic Process Timeline</h2>
              <p className="section-subtitle">
                Our seamless journey from sample to solution.
              </p>
            </div>
            <div className="timeline-accordion">
              <details open="true" className="page1-timeline-item1">
                <summary className="page1-timeline-summary1">
                  <div className="page1-timeline-marker">
                    <span>01</span>
                  </div>
                  <h3 className="section-subtitle">Sample Collection</h3>
                  <div className="timeline-toggle"></div>
                </summary>
                <div className="timeline-content">
                  <p className="section-content">
                    Professional collection of samples using sterile,
                    standardized protocols to ensure specimen integrity from the
                    very first step.
                  </p>
                </div>
              </details>
              <details className="page1-timeline-item1">
                <summary className="page1-timeline-summary1">
                  <div className="page1-timeline-marker">
                    <span>02</span>
                  </div>
                  <h3 className="section-subtitle">Lab Analysis</h3>
                  <div className="timeline-toggle"></div>
                </summary>
                <div className="timeline-content">
                  <p className="section-content">
                    Advanced processing using automated systems and expert
                    microscopic review by our senior scientists.
                  </p>
                </div>
              </details>
              <details className="page1-timeline-item1">
                <summary className="page1-timeline-summary1">
                  <div className="page1-timeline-marker">
                    <span>03</span>
                  </div>
                  <h3 className="section-subtitle">Diagnosis</h3>
                  <div className="timeline-toggle"></div>
                </summary>
                <div className="timeline-content">
                  <p className="section-content">
                    Clinical correlation and interpretation by our
                    board-certified pathologists to provide a definitive medical
                    verdict.
                  </p>
                </div>
              </details>
              <details className="page1-timeline-item1">
                <summary className="page1-timeline-summary1">
                  <div className="page1-timeline-marker">
                    <span>04</span>
                  </div>
                  <h3 className="section-subtitle">Result Delivery</h3>
                  <div className="timeline-toggle"></div>
                </summary>
                <div className="timeline-content">
                  <p className="section-content">
                    Secure digital and physical delivery of comprehensive
                    reports, ready for consultant review and patient action.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="page1-war-room-section1">
          <div className="page1-war-room-container1">
            <div className="war-room-header">
              <h2 className="section-title">Lab Activity War Room</h2>
              <p className="section-subtitle">
                Precision in motion. Our high-intensity diagnostic hub.
              </p>
            </div>
            <div className="page1-war-room-grid">
              <div className="war-room-cell">
                <video
                  src="https://videos.pexels.com/video-files/8326892/8326892-hd_1920_1080_30fps.mp4"
                  loop="true"
                  muted="true"
                  autoPlay="true"
                  playsInline="true"
                  className="war-room-video"
                ></video>
              </div>
              <div className="war-room-cell">
                <img
                  alt="Active lab work"
                  src="https://images.pexels.com/photos/5726795/pexels-photo-5726795.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="war-room-img"
                />
              </div>
              <div className="war-room-cell">
                <img
                  alt="Specimen analysis"
                  src="https://images.pexels.com/photos/5721687/pexels-photo-5721687.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="war-room-img"
                />
              </div>
              <div className="active war-room-cell">
                <div className="active-status">
                  <div className="status-dot"></div>
                  <span>LIVE OPERATIONS</span>
                </div>
                <h3 className="section-subtitle">Real-Time Diagnostics</h3>
                <p className="section-content">
                  Our team works around the clock to ensure critical results are
                  delivered with zero delay.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="certifications-location-section">
          <div className="page1-cert-container">
            <div className="cert-grid">
              <div className="location-block">
                <h2 className="section-title">Visit Our Laboratory</h2>
                <div className="page1-map-wrapper">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.9529122865456!2d3.375295414770757!3d6.527631644554371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a397c7d60e!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1650000000000!5m2!1sen!2sng"
                    width="100%"
                    height="350"
                    loading="lazy"
                    allowFullScreen="true"
                    className="histopathology-iframe"
                  ></iframe>
                </div>
                <div className="address-details">
                  <p className="section-content">
                    <span className="histopathology-text36">Headquarters:</span>
                    <span>
                      {' '}
                      45 Medical Drive, Victoria Island, Lagos
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                  <p className="section-content">
                    <span className="histopathology-text38">Regional Lab:</span>
                    <span>
                      {' '}
                      12 Science Park, Garki, Abuja
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                </div>
              </div>
              <div className="badges-block">
                <h2 className="section-title">License &amp; Certification</h2>
                <div className="page1-badge-grid">
                  <div className="page1-cert-badge3">
                    <div className="page1-badge-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"></path>
                          <path d="m9 12l2 2l4-4"></path>
                        </g>
                      </svg>
                    </div>
                    <span>MLSCN Certified</span>
                  </div>
                  <div className="page1-cert-badge3">
                    <div className="page1-badge-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <span>ISO 15189 Accredited</span>
                  </div>
                  <div className="page1-cert-badge3">
                    <div className="page1-badge-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <span>Gov. Approved Lab</span>
                  </div>
                  <div className="page1-cert-badge3">
                    <div className="page1-badge-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <span>Quality Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="histopathology-container2">
          <div className="histopathology-container3">
            <Script
              html={`<style>
        @keyframes float {0%,100% {transform: translate(0, 0) scale(1);}
50% {transform: translate(30px, -50px) scale(1.1);}}@keyframes scroll {from {transform: translateX(0);}
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
        <div className="histopathology-container4">
          <div className="histopathology-container5">
            <Script
              html={`<script defer data-name="pathology-interactions">
(function(){
  // Services Carousel Logic
  const track = document.getElementById("servicesTrack")
  const prevBtn = document.getElementById("prevService")
  const nextBtn = document.getElementById("nextService")

  if (track && prevBtn && nextBtn) {
    let index = 0
    const cards = track.children

    const updateCarousel = () => {
      const cardWidth = cards[0].offsetWidth + 24 // Including gap
      track.style.transform = \`translateX(-\${index * cardWidth}px)\`
    }

    nextBtn.addEventListener("click", () => {
      const visibleCards = window.innerWidth > 991 ? 3 : window.innerWidth > 479 ? 2 : 1
      if (index < cards.length - visibleCards) {
        index++
        updateCarousel()
      } else {
        index = 0 // Loop back
        updateCarousel()
      }
    })

    prevBtn.addEventListener("click", () => {
      if (index > 0) {
        index--
        updateCarousel()
      }
    })

    window.addEventListener("resize", updateCarousel)
  }

  // Reveal Animations on Scroll
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

  document.querySelectorAll(".why-card, .service-card, .team-member, .cert-badge").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "all 0.6s ease-out"
    revealObserver.observe(el)
  })

  // Parallax Effect for Hero
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const molecules = document.querySelectorAll(".floating-molecule")
    molecules.forEach((m, i) => {
      const speed = (i + 1) * 0.1
      m.style.transform = \`translateY(\${scrolled * speed}px)\`
    })
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
          .histopathology-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .histopathology-iframe {
            border: 0;
          }
          .histopathology-text36 {
            font-weight: 700;
          }
          .histopathology-text38 {
            font-weight: 700;
          }
          .histopathology-container2 {
            display: none;
          }
          .histopathology-container3 {
            display: contents;
          }
          .histopathology-container4 {
            display: none;
          }
          .histopathology-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Histopathology
