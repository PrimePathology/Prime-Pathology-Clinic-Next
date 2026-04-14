import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const About = (props) => {
  return (
    <>
      <div className="about-container1">
        <Head>
          <title>About - Prime Pathology Clinic</title>
          <meta property="og:title" content="About - Prime Pathology Clinic" />
          <meta
            property="og:description"
            content="Transforming healthcare with precision. Prime Pathology Clinic combines cutting-edge clinical testing with expert care to ensure reliable treatment for every patient."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8c302082-e6ba-41a0-9529-d6bf5ec33a06/2ed90a87-a0c5-42e0-91f2-87bf9dd64e29?org_if_sml=1&amp;force_format=original"
          />
          <link rel="canonical" href="https://patho.teleporthq.site/about" />
          <meta
            property="og:url"
            content="https://patho.teleporthq.site/about"
          />
        </Head>
        <Navigation></Navigation>
        <section className="about-hero">
          <div className="about-hero-media">
            <video
              src="https://videos.pexels.com/video-files/4121061/4121061-hd_1280_720_50fps.mp4"
              loop="true"
              muted="true"
              poster="https://images.pexels.com/videos/4121061/pictures/preview-0.jpg"
              autoPlay="true"
              playsInline="true"
              className="about-hero-video"
            ></video>
            <div className="about-hero-overlay"></div>
          </div>
          <div className="about-hero-container">
            <div className="about-hero-content">
              <h1 className="about-hero-title hero-title">
                Advanced Diagnostic &amp; Pathology Services You Can Trust
              </h1>
              <p className="hero-subtitle about-hero-text">
                Prime Pathology Clinic is dedicated to pioneering
                patient-centered, innovative diagnostics. Our mission is to
                provide reliable medical insights through advanced laboratory
                processes, led by a diverse team of world-class African
                professionals.
              </p>
              <div className="about-hero-actions">
                <a href="#approach">
                  <div className="btn btn-primary btn-lg">
                    <span>Our Approach</span>
                  </div>
                </a>
                <a href="#team">
                  <div className="btn btn-outline btn-lg">
                    <span>Meet Our Team</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="about-hero-floating-elements">
            <div className="about-molecule-1 molecule-1 about-floating-molecule"></div>
            <div className="about-molecule-2 about-floating-molecule"></div>
            <div className="molecule-3 about-floating-molecule"></div>
          </div>
        </section>
        <section id="approach" className="about-treatment-approach">
          <div className="treatment-container">
            <div className="treatment-grid">
              <div className="treatment-text-side">
                <h2 className="section-title">Our Treatment Approach</h2>
                <p className="treatment-description section-content">
                  In designing medical services for our clients and patients, we
                  use standard pathology laboratory processes that assist
                  consultants in carrying out tentative diagnosis to ensure
                  reliable and effective treatment.
                </p>
                <div className="treatment-workflow-list">
                  <div className="workflow-item">
                    <div className="workflow-icon-wrapper">
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
                        className="lucide-test-tube-diagonal lucide"
                      >
                        <path d="M21 7L6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3m-1-1l6 6m-10 8H4"></path>
                      </svg>
                    </div>
                    <div className="workflow-content">
                      <span className="workflow-title">
                        Standardized Collection
                      </span>
                      <p className="section-content">
                        Precise sample handling using international protocols.
                      </p>
                    </div>
                  </div>
                  <div className="workflow-item">
                    <div className="workflow-icon-wrapper">
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
                        className="lucide lucide-dna"
                      >
                        <path d="m10 16l1.5 1.5M14 8l-1.5-1.5M15 2c-1.798 1.998-2.518 3.995-2.807 5.993M16.5 10.5l1 1M17 6l-2.891-2.891M2 15c6.667-6 13.333 0 20-6m-2 0l.891.891M3.109 14.109L4 15m2.5-2.5l1 1M7 18l2.891 2.891M9 22c1.798-1.998 2.518-3.995 2.807-5.993"></path>
                      </svg>
                    </div>
                    <div className="workflow-content">
                      <span className="workflow-title">Molecular Analysis</span>
                      <p className="section-content">
                        Advanced genomic and biochemical screening technology.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="treatment-visual-side">
                <div className="treatment-image-wrapper">
                  <img
                    alt="Scientists analyzing samples in a modern lab"
                    src="https://images.pexels.com/photos/5726789/pexels-photo-5726789.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="treatment-main-img"
                  />
                  <div className="treatment-floating-card">
                    <div className="floating-card-icon">
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
                        className="lucide-shield-check lucide"
                      >
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        <path d="m9 12l2 2l4-4"></path>
                      </svg>
                    </div>
                    <div className="floating-card-text">
                      <strong>99.9% Accuracy</strong>
                      <span>Validated diagnostic results</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="certifications">
          <div className="certifications-container">
            <div className="certifications-header">
              <h2 className="section-title">Licensed &amp; Certified</h2>
              <p className="section-subtitle">
                Our laboratory maintains the highest global standards of
                clinical excellence.
              </p>
            </div>
            <div className="certifications-grid">
              <div className="cert-card">
                <div className="cert-icon-box">
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
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="cert-title">ISO 15189:2012</h3>
                <p className="section-content">
                  International standard for medical laboratory quality and
                  competence.
                </p>
              </div>
              <div className="cert-card">
                <div className="cert-icon-box">
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
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="cert-title">MLSCN Approved</h3>
                <p className="section-content">
                  Fully registered with the Medical Laboratory Science Council.
                </p>
              </div>
              <div className="cert-card">
                <div className="cert-icon-box">
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
                    <circle r="3" cx="12" cy="11"></circle>
                  </svg>
                </div>
                <h3 className="cert-title">WHO Compliant</h3>
                <p className="section-content">
                  Adhering to World Health Organization diagnostic protocols.
                </p>
              </div>
              <div className="cert-card">
                <div className="cert-icon-box">
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
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                    <line x1="12" x2="12" y1="22" y2="12"></line>
                  </svg>
                </div>
                <h3 className="cert-title">Bio-Safety Level 2</h3>
                <p className="section-content">
                  Certified for handling diverse infectious clinical samples
                  safely.
                </p>
              </div>
              <div className="cert-card">
                <div className="cert-icon-box">
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
                <h3 className="cert-title">Patient Data Privacy</h3>
                <p className="section-content">
                  Strict HIPAA-aligned data encryption and patient
                  confidentiality.
                </p>
              </div>
              <div className="cert-card">
                <div className="cert-icon-box">
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
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="cert-title">Govt. Accredited</h3>
                <p className="section-content">
                  Verified by the Federal Ministry of Health for pathology
                  services.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="patient-journey">
          <div className="journey-container">
            <div className="journey-header">
              <h2 className="section-title">The Patient Journey</h2>
              <p className="section-subtitle">
                Transparency and speed from sample to solution.
              </p>
            </div>
            <div className="journey-accordion-stack">
              <details open="true" className="journey-step">
                <summary className="journey-step-header">
                  <div className="about-step-number">
                    <span>01</span>
                  </div>
                  <span className="step-title">Sample Collection</span>
                  <div className="step-arrow"></div>
                </summary>
                <div className="journey-step-content">
                  <div className="step-inner">
                    <p className="section-content">
                      Whether at our clinic or via home service, our certified
                      phlebotomists ensure a painless, sterile, and accurately
                      labeled collection process.
                    </p>
                    <div className="step-visual">
                      <div className="step-tag">
                        <span>Fast Processing</span>
                      </div>
                      <div className="step-tag">
                        <span>Sterile Environment</span>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
              <details className="journey-step">
                <summary className="journey-step-header">
                  <div className="about-step-number">
                    <span>02</span>
                  </div>
                  <span className="step-title">Lab Analysis</span>
                  <div className="step-arrow"></div>
                </summary>
                <div className="journey-step-content">
                  <div className="step-inner">
                    <p className="section-content">
                      Samples enter our automated workflow. Using high-precision
                      reagents and microscopes, our scientists analyze every
                      detail with meticulous care.
                    </p>
                  </div>
                </div>
              </details>
              <details className="journey-step">
                <summary className="journey-step-header">
                  <div className="about-step-number">
                    <span>03</span>
                  </div>
                  <span className="step-title">Diagnosis &amp; Validation</span>
                  <div className="step-arrow"></div>
                </summary>
                <div className="journey-step-content">
                  <div className="step-inner">
                    <p className="section-content">
                      Results are cross-verified by senior pathologists. We
                      ensure every finding is backed by clinical evidence and
                      peer-reviewed standards.
                    </p>
                  </div>
                </div>
              </details>
              <details className="journey-step">
                <summary className="journey-step-header">
                  <div className="about-step-number">
                    <span>04</span>
                  </div>
                  <span className="step-title">Result Delivery</span>
                  <div className="step-arrow"></div>
                </summary>
                <div className="journey-step-content">
                  <div className="step-inner">
                    <p className="section-content">
                      Secure delivery via our patient portal, email, or physical
                      pickup. We provide clear interpretations to help your
                      doctor move forward with treatment.
                    </p>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section id="team" className="about-management-team">
          <div className="team-wrapper">
            <div className="team-header">
              <h2 className="section-title">Our Management Team</h2>
              <p className="section-subtitle">
                The brilliant minds driving diagnostic excellence.
              </p>
            </div>
            <div className="about-team-grid">
              <div className="about-team-member">
                <div className="member-image-box">
                  <img
                    alt="Chief Pathologist"
                    src="https://images.pexels.com/photos/18828740/pexels-photo-18828740.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="member-img"
                  />
                  <div className="member-overlay">
                    <p className="section-content">
                      Expert in histopathology with over 15 years of clinical
                      experience across Africa and Europe.
                    </p>
                  </div>
                </div>
                <div className="about-member-info">
                  <h3 className="member-name">Dr. Kwame Mensah</h3>
                  <span className="about-member-role">Chief Pathologist</span>
                </div>
              </div>
              <div className="about-team-member">
                <div className="member-image-box">
                  <img
                    alt="Lab Scientist"
                    src="https://images.pexels.com/photos/18828738/pexels-photo-18828738.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="member-img"
                  />
                  <div className="member-overlay">
                    <p className="section-content">
                      Specializing in molecular diagnostics and genomic
                      sequencing for personalized medicine.
                    </p>
                  </div>
                </div>
                <div className="about-member-info">
                  <h3 className="member-name">Sarah Al-Fassi</h3>
                  <span className="about-member-role">
                    Senior Lab Scientist
                  </span>
                </div>
              </div>
              <div className="about-team-member">
                <div className="member-image-box">
                  <img
                    alt="Operations Manager"
                    src="https://images.pexels.com/photos/5721682/pexels-photo-5721682.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="member-img"
                  />
                  <div className="member-overlay">
                    <p className="section-content">
                      Ensuring seamless laboratory operations and international
                      logistics for sample transport.
                    </p>
                  </div>
                </div>
                <div className="about-member-info">
                  <h3 className="member-name">Chidi Okoro</h3>
                  <span className="about-member-role">Operations Director</span>
                </div>
              </div>
              <div className="about-team-member">
                <div className="member-image-box">
                  <img
                    alt="Quality Assurance"
                    src="https://images.pexels.com/photos/5726783/pexels-photo-5726783.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="member-img"
                  />
                  <div className="member-overlay">
                    <p className="section-content">
                      Overseeing ISO compliance and rigorous internal quality
                      control measures.
                    </p>
                  </div>
                </div>
                <div className="about-member-info">
                  <h3 className="member-name">Dr. Fatima Zahra</h3>
                  <span className="about-member-role">
                    Head of Quality Assurance
                  </span>
                </div>
              </div>
              <div className="about-team-member">
                <div className="member-image-box">
                  <img
                    alt="Technician Lead"
                    src="https://images.pexels.com/photos/5726804/pexels-photo-5726804.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="member-img"
                  />
                  <div className="member-overlay">
                    <p className="section-content">
                      Managing our fleet of automated diagnostic machines and
                      robotic lab systems.
                    </p>
                  </div>
                </div>
                <div className="about-member-info">
                  <h3 className="member-name">Ibrahim Bakare</h3>
                  <span className="about-member-role">Lead Lab Technician</span>
                </div>
              </div>
              <div className="about-team-member">
                <div className="member-image-box">
                  <img
                    alt="Patient Care Lead"
                    src="https://images.pexels.com/photos/18828743/pexels-photo-18828743.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="member-img"
                  />
                  <div className="member-overlay">
                    <p className="section-content">
                      Dedicated to ensuring every patient feels heard, cared
                      for, and supported.
                    </p>
                  </div>
                </div>
                <div className="about-member-info">
                  <h3 className="member-name">Nneka Williams</h3>
                  <span className="about-member-role">
                    Patient Experience Lead
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials">
          <div className="testimonials-container">
            <div className="testimonials-header">
              <h2 className="section-title">Voices of Care</h2>
              <p className="section-subtitle">
                Real stories from our local and international patients.
              </p>
            </div>
            <div className="testimonials-carousel-wrapper">
              <div id="testimonialCarousel" className="testimonials-carousel">
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="testimonial-rating">
                      <span>★★★★★</span>
                    </div>
                    <p className="section-content">
                      &quot;The level of professionalism at Prime Pathology is
                      unmatched. As an expat living in Lagos, I was worried
                      about finding a lab that meets my home standards. They
                      exceeded them.&quot;
                    </p>
                    <div className="testimonial-author">
                      <img
                        alt="Patient"
                        src="https://images.pexels.com/photos/6234990/pexels-photo-6234990.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                        className="author-img"
                      />
                      <div className="author-info">
                        <span className="author-name">David Anderson</span>
                        <span className="author-origin">
                          International Patient
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="testimonial-rating">
                      <span>★★★★★</span>
                    </div>
                    <p className="section-content">
                      &quot;I received my DNA results much faster than expected.
                      The staff was incredibly kind and explained everything
                      clearly. Truly a world-class experience in the heart of
                      the city.&quot;
                    </p>
                    <div className="testimonial-author">
                      <img
                        alt="Patient"
                        src="https://images.pexels.com/photos/18828739/pexels-photo-18828739.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                        className="author-img"
                      />
                      <div className="author-info">
                        <span className="author-name">Amara Okafor</span>
                        <span className="author-origin">Local Patient</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-carousel-controls">
                <button
                  id="prevTestimonial"
                  aria-label="Previous testimonial"
                  className="prev about-carousel-btn"
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
                  id="nextTestimonial"
                  aria-label="Next testimonial"
                  className="about-carousel-btn next"
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
        <section className="partners-cta">
          <div className="partners-container">
            <div className="partners-scroller-wrapper">
              <div className="partners-scroller">
                <div className="partner-logo">
                  <span>HealthConnect</span>
                </div>
                <div className="partner-logo">
                  <span>GlobalLabs</span>
                </div>
                <div className="partner-logo">
                  <span>UniHealth</span>
                </div>
                <div className="partner-logo">
                  <span>MedTech</span>
                </div>
                <div className="partner-logo">
                  <span>PharmaPlus</span>
                </div>
                <div className="partner-logo">
                  <span>SafeCare</span>
                </div>
                <div className="partner-logo">
                  <span>HealthConnect</span>
                </div>
                <div className="partner-logo">
                  <span>GlobalLabs</span>
                </div>
                <div className="partner-logo">
                  <span>UniHealth</span>
                </div>
                <div className="partner-logo">
                  <span>MedTech</span>
                </div>
              </div>
            </div>
            <div className="cta-box">
              <div className="cta-content">
                <h2 className="section-title">Partner With Excellence</h2>
                <p className="section-content">
                  Join our network of healthcare providers and hospitals.
                  Let&apos;s elevate diagnostic accuracy together.
                </p>
                <div className="cta-buttons">
                  <a href="#">
                    <div className="btn-accent btn btn-lg">
                      <span>Refer a Patient</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="btn btn-outline btn-lg">
                      <span>Collaborate With Us</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="about-container2">
          <div className="about-container3">
            <Script
              html={`<style>
        @keyframes floatAround {0%,100% {transform: translate(0, 0) scale(1);}
33% {transform: translate(30px, -50px) scale(1.2);}
66% {transform: translate(-20px, 40px) scale(0.9);}}@keyframes scrollLogos {0% {transform: translateX(0);}
100% {transform: translateX(-50%);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="about-container4">
          <div className="about-container5">
            <Script
              html={`<script defer data-name="about-interactions">
(function(){
const testimonialCarousel = document.getElementById('testimonialCarousel');
const prevBtn = document.getElementById('prevTestimonial');
const nextBtn = document.getElementById('nextTestimonial');

if (testimonialCarousel && prevBtn && nextBtn) {
  let currentIndex = 0;
  const cards = testimonialCarousel.querySelectorAll('.testimonial-card');
  const totalCards = cards.length;

  const updateCarousel = () => {
    testimonialCarousel.style.transform = \`translateX(-\${currentIndex * 100}%)\`;
  };

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalCards;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    updateCarousel();
  });

  // Auto-play
  let interval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalCards;
    updateCarousel();
  }, 6000);

  testimonialCarousel.addEventListener('mouseenter', () => clearInterval(interval));
  testimonialCarousel.addEventListener('mouseleave', () => {
    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalCards;
      updateCarousel();
    }, 6000);
  });
}

// Simple reveal animation on scroll
const revealElements = document.querySelectorAll('.cert-card, .team-member, .workflow-item');
const revealOnScroll = () => {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 100;
    if (isVisible) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
  });
};

// Initial state for reveal elements
revealElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.6s ease-out';
});

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Trigger once on load
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .about-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .about-container2 {
            display: none;
          }
          .about-container3 {
            display: contents;
          }
          .about-container4 {
            display: none;
          }
          .about-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default About
