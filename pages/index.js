import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container10">
        <Head>
          <title>Prime Pathology Clinic</title>
          <meta property="og:title" content="Prime Pathology Clinic" />
          <meta
            property="og:description"
            content="Transforming healthcare with precision. Prime Pathology Clinic combines cutting-edge clinical testing with expert care to ensure reliable treatment for every patient."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8c302082-e6ba-41a0-9529-d6bf5ec33a06/2ed90a87-a0c5-42e0-91f2-87bf9dd64e29?org_if_sml=1&amp;force_format=original"
          />
          <link rel="canonical" href="https://patho.teleporthq.site/" />
          <meta property="og:url" content="https://patho.teleporthq.site/" />
        </Head>
        <Navigation></Navigation>
        <div className="home-container11">
          <div className="home-container12">
            <Script
              html={`<style>
details[open] {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-level-1);
}
details[open] .step-number {
  opacity: 1;
}
</style>`}
            ></Script>
          </div>
        </div>
        <section className="hero-cinematic">
          <div className="hero-video-wrapper">
            <video
              src="https://videos.pexels.com/video-files/9573751/9573751-hd_2048_1080_25fps.mp4"
              loop="true"
              muted="true"
              poster="https://images.pexels.com/videos/9573751/pictures/preview-0.jpeg"
              autoPlay="true"
              playsInline="true"
              className="hero-video-bg"
            ></video>
            <div className="hero-overlay"></div>
          </div>
          <div aria-hidden="true" className="hero-floating-elements">
            <div className="floating-item reagent-1"></div>
            <div className="floating-item molecule-1"></div>
            <div className="floating-item test-tube-1"></div>
          </div>
          <div className="hero-content">
            <div className="hero-text-block">
              <h1 className="home-hero-title hero-title">
                Advanced Diagnostic &amp; Pathology Services You Can Trust
              </h1>
              <p className="hero-subtitle">
                Experience world-class medical laboratory services driven by
                innovation, precision, and a commitment to global healthcare
                standards for every patient.
              </p>
              <div className="hero-actions">
                <a href="#book-test">
                  <div className="btn btn-primary btn-lg">
                    <span>Book Test</span>
                  </div>
                </a>
                <a href="#services">
                  <div className="btn btn-outline btn-lg">
                    <span>Get Diagnosis</span>
                  </div>
                </a>
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
                data-form-id="a33f611d-5fe3-4511-9995-cd119123db29"
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
        <section className="treatment-approach">
          <div className="approach-split">
            <div className="approach-visual home-thq-approach-visual-elm">
              <div className="workflow-animation-box">
                <img
                  alt="Laboratory Workflow Illustration"
                  src="https://images.pexels.com/photos/5726850/pexels-photo-5726850.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="workflow-img"
                />
                <div className="pulse-ring"></div>
              </div>
            </div>
            <div className="approach-text">
              <h2 className="section-title">Precision in Every Process</h2>
              <p className="section-content">
                In designing medical services for our clients and patients, we
                use standard pathology laboratory processes that assist
                consultants in carrying out tentative diagnosis to ensure
                reliable and effective treatment.
              </p>
              <div className="workflow-steps">
                <div className="step-item">
                  <div className="step-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
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
                  <span>Standardized Protocols</span>
                </div>
                <div className="step-item">
                  <div className="step-icon">
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
                  <span>Advanced Diagnostics</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          data-role="mission-vision-section"
          className="home-thq-mission-vision-section-elm"
        >
          <div className="section-header-centered">
            <h2 className="section-title">Our Foundation</h2>
            <p className="section-subtitle">
              Guided by excellence, driven by innovation
            </p>
          </div>
          <div data-role="mv-grid" className="home-thq-mv-grid-elm">
            <div data-role="mv-card" className="mv-card">
              <div className="mv-icon-wrapper">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                  className="mv-icon"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle r="10" cx="12" cy="12"></circle>
                    <circle r="6" cx="12" cy="12"></circle>
                    <circle r="2" cx="12" cy="12"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="mv-card-title">Our Mission</h3>
              <p className="mv-card-text">
                Delivering precise diagnostic results with cutting-edge
                technology to empower healthcare decisions.
              </p>
            </div>
            <div data-role="mv-card" className="mv-card">
              <div className="mv-icon-wrapper">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                  className="mv-icon"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0"></path>
                    <circle r="3" cx="12" cy="12"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="mv-card-title">Our Vision</h3>
              <p className="mv-card-text">
                To be Africa&apos;s most trusted pathology partner, setting the
                standard for medical excellence.
              </p>
            </div>
            <div data-role="mv-card" className="mv-card">
              <div className="mv-icon-wrapper">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                  className="mv-icon"
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
              <h3 className="mv-card-title">Our Methodologies</h3>
              <p className="mv-card-text">
                ISO-certified protocols, automated analyzers, and rigorous
                quality control at every step.
              </p>
            </div>
            <div data-role="mv-card" className="mv-card">
              <div className="mv-icon-wrapper">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                  className="mv-icon"
                >
                  <path
                    d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3 className="mv-card-title">Our Treatment Approach</h3>
              <p className="mv-card-text">
                Patient-centered diagnostics with compassionate service and
                rapid turnaround times.
              </p>
            </div>
          </div>
        </section>
        <section id="services" className="services-carousel-section">
          <div className="carousel-header">
            <h2 className="section-title">Specialized Laboratory Services</h2>
          </div>
          <div className="carousel-viewport">
            <div className="carousel-track">
              <div className="service-card">
                <div className="service-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
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
                  Precise genetic analysis for paternity, ancestry, and medical
                  screening.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
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
                  Comprehensive hematology and biochemistry panels for health
                  monitoring.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M17 12a5 5 0 1 0-5 5m0-10V3m-1 0h2m2.536 5.464l2.828-2.828m-.707-.707l1.414 1.414M17 12h4m0-1v2m-9 4v4m1 0h-2m-2.535-5.464l-2.829 2.828m.707.707L4.93 17.657M7 12H3m0 1v-2m5.464-2.536L5.636 5.636m-.707.707L6.343 4.93M15 17.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m4.5 2L22 22"
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
                  Rapid and accurate detection of viral, bacterial, and fungal
                  pathogens.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">
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
                  Expert cellular analysis to support definitive disease
                  diagnosis.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <svg height="48" width="48" viewBox="0 0 48 48">
                    <g
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <path d="M14 22v3l-3.491 5.985C8.954 33.65 10.877 37 13.964 37h7.072c3.087 0 5.01-3.349 3.455-6.015L21 25v-3a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1m8.763 9.992L19 25.541V22h-3v3.54l-3.763 6.452C11.459 33.326 12.42 35 13.964 35h7.072c1.543 0 2.505-1.674 1.727-3.008M15 18v2h5v-2zm17-1.321c2.282-1.52 4-2.99 4-5.679h2c0 3.411-2.077 5.381-4.188 6.865c.831.558 1.657 1.163 2.338 1.856C37.222 20.81 38 22.174 38 24s-.778 3.19-1.85 4.28c-.681.692-1.507 1.297-2.338 1.855C35.922 31.619 38 33.589 38 37h-2q-.001-.53-.086-1H31a1 1 0 1 1 0-2h4.065c-.722-1.019-1.808-1.841-3.065-2.678c-2.282 1.52-4 2.99-4 5.678h-2c0-3.411 2.077-5.381 4.188-6.865c-.831-.558-1.657-1.163-2.338-1.856C26.778 27.19 26 25.826 26 24s.778-3.19 1.85-4.28c.681-.692 1.507-1.297 2.338-1.855C28.078 16.381 26 14.411 26 11h2q.001.53.086 1H33a1 1 0 1 1 0 2h-4.065c.722 1.019 1.808 1.841 3.065 2.678m0 2.388c-1.004.653-1.896 1.251-2.6 1.933h5.2c-.703-.682-1.596-1.28-2.6-1.933M28 24q.001-.536.128-1h7.744q.127.464.128 1q-.001.536-.128 1h-7.744A3.8 3.8 0 0 1 28 24m1.4 3c.704.682 1.596 1.28 2.6 1.933c1.004-.653 1.897-1.251 2.6-1.933z"></path>
                      <path d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm31 3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1z"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">Hormonal Profile</h3>
                <p className="section-content">
                  Comprehensive endocrine evaluation to assess reproductive
                  health, metabolic function, and thyroid balance
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="ceo-message-section">
          <div className="ceo-container">
            <div className="ceo-split">
              <div className="ceo-image-wrapper">
                <img
                  alt="CEO of Prime Pathology Clinic"
                  src="https://images.pexels.com/photos/5452235/pexels-photo-5452235.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="ceo-img"
                />
                <div className="ceo-accent-frame"></div>
              </div>
              <div className="ceo-content-card">
                <h2 className="section-title">Message from the CEO</h2>
                <p className="section-content">
                  &quot;Our commitment to quality diagnostics is the bedrock of
                  patient-centered care. We believe that innovation in pathology
                  is not just about technology, but about saving lives through
                  precision and empathy. At Prime Pathology, every sample tells
                  a story, and we are dedicated to ensuring that story leads to
                  the best possible health outcome.&quot;
                </p>
                <div className="ceo-signature">
                  <span className="signature-text">Auwal Garba Hussain</span>
                  <span className="home-thq-signature-title-elm1 signature-title">
                    MPH/MBA/BMLS/MLT/MLA
                  </span>
                  <span className="signature-title">CEO &amp; Director</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-thq-departments-elm">
          <div className="departments-header">
            <h2 data-animate="fade-in" className="section-title">
              Our Departments
            </h2>
            <p data-animate="fade-in-delay" className="section-content">
              Advanced diagnostic units delivering precise and reliable results
            </p>
          </div>
          <div className="home-thq-flip-cards-grid-elm">
            <div data-animate="slide-up" className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    alt="Hematology Laboratory"
                    src="https://images.pexels.com/photos/3908179/pexels-photo-3908179.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="flip-card-img"
                  />
                  <div className="flip-card-front-content">
                    <h3 className="flip-card-title">Hematology</h3>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="flip-card-back-content">
                    <h4 className="flip-card-back-title">Hematology</h4>
                    <p className="flip-card-description">
                      Blood analysis and disorders
                    </p>
                    <Link href="/infection-screening">
                      <a>
                        <div className="flip-card-btn">
                          <span>Explore</span>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div data-animate="slide-up" className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    alt="Microbiology Laboratory"
                    src="https://images.pexels.com/photos/8539945/pexels-photo-8539945.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="flip-card-img"
                  />
                  <div className="flip-card-front-content">
                    <h3 className="flip-card-title">Microbiology</h3>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="flip-card-back-content">
                    <h4 className="flip-card-back-title">Microbiology</h4>
                    <p className="flip-card-description">
                      Detection of infections and pathogens
                    </p>
                    <Link href="/infection-screening">
                      <a>
                        <div className="flip-card-btn">
                          <span>Explore</span>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div data-animate="slide-up" className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    alt="Chemical Pathology Laboratory"
                    src="https://images.pexels.com/photos/8442504/pexels-photo-8442504.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="flip-card-img"
                  />
                  <div className="flip-card-front-content">
                    <h3 className="flip-card-title">Chemical Pathology</h3>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="flip-card-back-content">
                    <h4 className="flip-card-back-title">Chemical Pathology</h4>
                    <p className="flip-card-description">
                      Biochemical analysis of body fluids
                    </p>
                    <Link href="/infection-screening">
                      <a>
                        <div className="flip-card-btn">
                          <span>Explore</span>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div data-animate="slide-up" className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    alt="Histopathology Laboratory"
                    src="https://images.pexels.com/photos/36816507/pexels-photo-36816507.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="flip-card-img"
                  />
                  <div className="flip-card-front-content">
                    <h3 className="flip-card-title">Histopathology</h3>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="flip-card-back-content">
                    <h4 className="flip-card-back-title">Histopathology</h4>
                    <p className="flip-card-description">
                      Tissue examination and disease diagnosis
                    </p>
                    <Link href="/histopathology">
                      <a>
                        <div className="flip-card-btn">
                          <span>Explore</span>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div data-animate="slide-up" className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    alt="Immunology Laboratory"
                    src="https://images.pexels.com/photos/9574573/pexels-photo-9574573.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="flip-card-img"
                  />
                  <div className="flip-card-front-content">
                    <h3 className="flip-card-title">Immunology</h3>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="flip-card-back-content">
                    <h4 className="flip-card-back-title">Immunology</h4>
                    <p className="flip-card-description">
                      Immune system and antibody testing
                    </p>
                    <Link href="/infection-screening">
                      <a>
                        <div className="flip-card-btn">
                          <span>Explore</span>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div data-animate="slide-up" className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    alt="Molecular Diagnostics Laboratory"
                    src="https://images.pexels.com/photos/9574332/pexels-photo-9574332.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="flip-card-img"
                  />
                  <div className="flip-card-front-content">
                    <h3 className="flip-card-title">Molecular Diagnostics</h3>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="flip-card-back-content">
                    <h4 className="flip-card-back-title">
                      Molecular Diagnostics
                    </h4>
                    <p className="flip-card-description">
                      DNA, gene, and advanced testing
                    </p>
                    <Link href="/dna-paternity-testing">
                      <a>
                        <div className="flip-card-btn">
                          <span>Explore</span>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="home-container13">
          <div className="home-container14">
            <Script
              html={`<script>
(function(){
    // Flip Cards Touch Support - Tap to flip on mobile devices
    document.addEventListener("DOMContentLoaded", function () {
      const flipCards = document.querySelectorAll(".flip-card")

      flipCards.forEach((card) => {
        card.addEventListener("click", function (e) {
          // Only handle tap on touch devices or when not clicking the button
          if (e.target.tagName !== "A" && e.target.tagName !== "BUTTON") {
            this.classList.toggle("flipped")
          }
        })
      })
    })
  })()
</script>`}
            ></Script>
          </div>
        </div>
        <section className="lab-war-room">
          <div className="war-room-carousel">
            <div className="home-thq-parallax-slide-elm parallax-slide active">
              <div className="slide-content">
                <h2 className="home-hero-title hero-title">
                  Real-Time Diagnostics
                </h2>
                <p className="section-content">
                  Our &quot;War Room&quot; is where medical challenges meet
                  scientific solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="timeline-section">
          <div className="timeline-container">
            <h2 className="section-title">Your Journey to Results</h2>
            <div className="accordion-group">
              <details open="true" className="timeline-step">
                <summary className="step-header">
                  <span className="step-number">01</span>
                  <span className="section-subtitle">Sample Collection</span>
                </summary>
                <div className="step-content">
                  <p className="section-content">
                    Professional and comfortable collection of samples by our
                    trained phlebotomists using sterilized, high-grade
                    equipment.
                  </p>
                </div>
              </details>
              <details className="timeline-step">
                <summary className="step-header">
                  <span className="step-number">02</span>
                  <span className="section-subtitle">Lab Analysis</span>
                </summary>
                <div className="step-content">
                  <p className="section-content">
                    State-of-the-art diagnostic machines and expert scientists
                    process your sample with multi-stage verification.
                  </p>
                </div>
              </details>
              <details className="timeline-step">
                <summary className="step-header">
                  <span className="step-number">03</span>
                  <span className="section-subtitle">Diagnosis</span>
                </summary>
                <div className="step-content">
                  <p className="section-content">
                    Our consultant pathologists review the data to provide a
                    comprehensive and accurate medical diagnosis.
                  </p>
                </div>
              </details>
              <details className="timeline-step">
                <summary className="step-header">
                  <span className="step-number">04</span>
                  <span className="section-subtitle">Result Delivery</span>
                </summary>
                <div className="step-content">
                  <p className="section-content">
                    Receive your detailed report via secure digital portal or
                    in-person, ready for your healthcare provider.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <div className="home-container15">
          <div className="home-container16">
            <Script
              html={`<style>
        @keyframes float {0%,100% {transform: translateY(0) rotate(0deg);}
50% {transform: translateY(-20px) rotate(10deg);}}@keyframes pulse {0% {transform: translate(-50%, -50%) scale(1);
opacity: 1;}
100% {transform: translate(-50%, -50%) scale(2);
opacity: 0;}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="home-container17">
          <div className="home-container18">
            <Script
              html={`<script defer data-name="prime-pathology-animations">
(function(){
  // Simple scroll reveal observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Apply to sections
  document.querySelectorAll('.section-title, .cta-card, .service-card, .team-member').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    revealObserver.observe(el);
  });

  // Parallax Effect for Lab War Room
  window.addEventListener('scroll', () => {
    const warRoom = document.querySelector('.parallax-slide');
    if (warRoom) {
      const scrollValue = window.scrollY;
      const sectionTop = warRoom.offsetTop;
      const speed = 0.3;
      if (scrollValue > sectionTop - window.innerHeight) {
        warRoom.style.backgroundPositionY = \`\${(scrollValue - sectionTop) * speed}px\`;
      }
    }
  });

  // Handle form submission UX
  const ctaForm = document.querySelector('.cta-form');
  if (ctaForm) {
    ctaForm.addEventListener('submit', (e) => {
      // Native behavior is preserved, we just add a loading state
      const btn = ctaForm.querySelector('button');
      btn.innerText = 'Processing...';
      btn.style.opacity = '0.7';
    });
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
        <div>
          <div className="home-container20">
            <Script
              html={`<style>
@keyframes fadeInUp {
to {
  opacity: 1;
  transform: translateY(0);
}
}

@keyframes slideUpFade {
to {
  opacity: 1;
  transform: translateY(0);
}
}

@media (hover: none) {
.flip-card.flipped .flip-card-inner {
  transform: rotateY(180deg) scale(1.02);
}
.flip-card.flipped {
  box-shadow: 0 12px 40px rgba(0, 119, 217, 0.25);
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <div>
          <div className="home-container22">
            <Script
              html={`<style>
@keyframes mv-card-enter {
to {
  opacity: 1;
  transform: translateY(0);
}
}
</style>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container10 {
            width: 100%;
            min-height: 100vh;
          }
          .home-container11 {
            display: none;
          }
          .home-container12 {
            display: contents;
          }
          .home-thq-mission-vision-section-elm {
            padding: var(--spacing-4xl) var(--spacing-xl);
            background: var(--color-surface);
          }
          .home-thq-mv-grid-elm {
            gap: var(--spacing-2xl);
            margin: 0 auto;
            display: grid;
            max-width: var(--content-max-width);
            padding-top: var(--spacing-3xl);
            grid-template-columns: repeat(4, 1fr);
          }
          .home-thq-signature-title-elm1 {
            color: var(--color-accent);
            font-family: '' '' 'Inter' '' '';
          }
          .home-thq-departments-elm {
            padding: var(--spacing-4xl) var(--spacing-xl);
            overflow: hidden;
            background: var(--color-surface-elevated);
          }
          .home-thq-flip-cards-grid-elm {
            gap: var(--spacing-xl);
            margin: 0 auto;
            display: grid;
            max-width: var(--content-max-width);
            grid-template-columns: repeat(3, 1fr);
          }
          .home-container13 {
            display: none;
          }
          .home-container14 {
            display: contents;
          }
          .home-thq-parallax-slide-elm {
            background-image: url('https://images.pexels.com/photos/5726797/pexels-photo-5726797.jpeg?auto=compress&cs=tinysrgb&w=1500');
          }
          .home-container15 {
            display: none;
          }
          .home-container16 {
            display: contents;
          }
          .home-container17 {
            display: none;
          }
          .home-container18 {
            display: contents;
          }
          .home-container20 {
            display: contents;
          }
          .home-container22 {
            display: contents;
          }
          @media (max-width: 991px) {
            .home-thq-mv-grid-elm {
              gap: var(--spacing-xl);
              grid-template-columns: repeat(2, 1fr);
            }
            .home-thq-flip-cards-grid-elm {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 767px) {
            .home-thq-mv-grid-elm {
              gap: var(--spacing-lg);
              padding-top: var(--spacing-2xl);
              grid-template-columns: 1fr;
            }
            .home-thq-flip-cards-grid-elm {
              gap: var(--spacing-lg);
              grid-template-columns: 1fr;
            }
          }
          @media (max-width: 479px) {
            .home-thq-approach-visual-elm {
              align-self: stretch;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
