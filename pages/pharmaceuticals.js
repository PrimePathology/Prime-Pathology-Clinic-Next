import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Pharmaceuticals = (props) => {
  return (
    <>
      <div className="pharmaceuticals-container1">
        <Head>
          <title>Pharmaceuticals - Prime Pathology Clinic</title>
          <meta
            property="og:title"
            content="Pharmaceuticals - Prime Pathology Clinic"
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
            href="https://patho.teleporthq.site/pharmaceuticals"
          />
          <meta
            property="og:url"
            content="https://patho.teleporthq.site/pharmaceuticals"
          />
        </Head>
        <Navigation></Navigation>
        <section className="page1-hero-section">
          <div className="hero-video-wrapper page1-hero-video-wrapper">
            <video
              src="https://videos.pexels.com/video-files/8670925/8670925-hd_1080_1920_25fps.mp4"
              loop="true"
              muted="true"
              poster="https://images.pexels.com/videos/7033622/pictures/preview-0.jpeg"
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
                Expert Pharmaceutical Care &amp; Clinical Pharmacy
              </h1>
              <p className="hero-subtitle">
                Prime Pathology Clinic&apos;s pharmaceutical wing delivers
                trusted medication management, prescription fulfillment, and
                clinical pharmacy services—ensuring safe, effective, and
                personalized pharmaceutical care for every patient.
              </p>
              <div className="hero-actions">
                <a
                  href="#pharma-form-section"
                  className="pharmaceuticals-thq-thq-btn-elm1-elm btn btn-primary btn-lg button"
                >
                  <span>Inquire About Prescription</span>
                </a>
                <a href="#about">
                  <div className="btn btn-outline btn-lg">
                    <span>Our Services</span>
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
                <h2 className="section-title">The Prime Standard</h2>
                <p className="section-content">
                  We are committed to authentic medication sourcing,
                  temperature-controlled storage, and rigorous quality
                  assurance. Every product on our shelves is verified, tracked,
                  and handled with pharmaceutical-grade care to protect your
                  health.
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
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      </svg>
                    </div>
                    <div className="approach-info">
                      <span className="approach-label">Authentic Sourcing</span>
                      <p className="section-content">
                        All medications sourced from verified, licensed
                        distributors.
                      </p>
                    </div>
                  </div>
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
                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                        <line x1="12" x2="12" y1="19" y2="22"></line>
                      </svg>
                    </div>
                    <div className="approach-info">
                      <span className="approach-label">Cold Chain Storage</span>
                      <p className="section-content">
                        Temperature-controlled environments for sensitive
                        pharmaceuticals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="approach-visual">
                <div className="page1-workflow-animation1">
                  <img
                    alt="Modern Pharmacy Interior"
                    src="https://images.pexels.com/photos/19471013/pexels-photo-19471013.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="page1-workflow-img"
                  />
                  <div className="workflow-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="pharmaceuticals-container2">
          <div className="pharmaceuticals-container3">
            <Script
              html={`<script>
        ;(function () {
          ;(function () {
            var inlineNotification = document.querySelector('[data-role="pharma-inline-notification"]')
            var inlineClose = document.querySelector('[data-action="pharma-inline-notification-close"]')
            if (inlineClose && inlineNotification) {
              inlineClose.addEventListener("click", function () {
                inlineNotification.style.display = "none"
              })
            }
          })()
        })()
      </script>`}
            ></Script>
          </div>
        </div>
        <section className="page1-why-choose-section">
          <div className="why-choose-container">
            <div className="why-choose-header">
              <h2 className="section-title">Why Our Pharmacy</h2>
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
                <h3 className="section-subtitle">Safety First</h3>
                <p className="section-content">
                  Rigorous drug interaction checks, allergy screening, and
                  pharmacist verification on every prescription.
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
                <h3 className="section-subtitle">Quality Assured</h3>
                <p className="section-content">
                  Only genuine, registered medications from licensed
                  distributors with full batch traceability.
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
                <h3 className="section-subtitle">Patient-Centered</h3>
                <p className="section-content">
                  Private consultations, medication therapy management, and
                  ongoing support for chronic conditions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="page1-services-section">
          <div className="services-container">
            <div className="services-header">
              <h2 className="section-title">Our Pharmaceutical Services</h2>
              <p className="section-content">
                Comprehensive pharmacy and medication management services
                designed for your safety and wellbeing.
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
                      <path d="m10.5 20.5l10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7m-2-12l7 7"></path>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">Prescription Dispensing</h3>
                  <p className="section-content">
                    Accurate and timely fulfillment of medical prescriptions
                    with pharmacist verification.
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
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle r="4" cx="12" cy="7"></circle>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">Clinical Consultation</h3>
                  <p className="section-content">
                    Private sessions with pharmacists regarding medication
                    therapy and wellness.
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
                      <path d="M8 2v4m8-4v4"></path>
                      <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">
                    Chronic Medication Management
                  </h3>
                  <p className="section-content">
                    Specialized support for long-term health conditions and
                    adherence programs.
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
                      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">
                    Over-the-Counter (OTC) Advice
                  </h3>
                  <p className="section-content">
                    Professional guidance on non-prescription wellness products
                    and self-care.
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
                      <path d="m18 2l4 4m-5 1l3-3m-1 5L8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5m-6 6l4 4m-8 4l-3 3M14 4l6 6"></path>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">
                    Vaccination &amp; Immunization
                  </h3>
                  <p className="section-content">
                    Secure administration of essential vaccines by trained
                    clinical staff.
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
                      <rect
                        x="8"
                        y="2"
                        rx="1"
                        ry="1"
                        width="8"
                        height="4"
                      ></rect>
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">Diagnostic Integration</h3>
                  <p className="section-content">
                    Seamless coordination with Prime Pathology lab results for
                    targeted medication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="showcase-section">
          <div className="page1-showcase-container">
            <div className="showcase-header">
              <h2 className="section-title">
                Pharmacovigilance &amp; Drug Safety
              </h2>
            </div>
            <div className="showcase-grid">
              <div className="showcase-item wide">
                <div className="showcase-caption">
                  <p className="pharmaceuticals-thq-section-content-elm23">
                    <span>
                      At Prime Pathology Clinic, patient safety extends beyond
                      the laboratory. Our pharmacy team is dedicated to
                    </span>
                    <span className="pharmaceuticals-text4">
                      pharmacovigilance
                    </span>
                    <span>
                      —the science of monitoring, assessing, and preventing
                      adverse drug reactions. We track side effects, screen for
                      drug interactions, and maintain open communication with
                      patients to ensure every medication is as safe as it is
                      effective. Your wellbeing is our highest priority.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="page1-team-section">
          <div className="team-container">
            <div className="page1-team-header team-header">
              <h2 className="section-title">Our Pharmacy Team</h2>
              <p className="section-content">
                Meet the licensed pharmacists and technicians ensuring safe
                medication use.
              </p>
            </div>
            <div className="team-grid page1-team-grid1">
              <div className="team-card">
                <div className="team-image-box">
                  <img
                    alt="Chief Pharmacist"
                    src="https://images.pexels.com/photos/19471013/pexels-photo-19471013.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="team-img"
                  />
                  <div className="team-overlay">
                    <div className="social-links">
                      <span className="section-content">
                        Clinical Pharmacy Specialist
                      </span>
                    </div>
                  </div>
                </div>
                <div className="team-info">
                  <h3 className="section-subtitle">Pharm. Aisha Bello</h3>
                  <span className="section-content">Chief Pharmacist</span>
                </div>
              </div>
              <div className="team-card">
                <div className="team-image-box">
                  <img
                    alt="Pharmacy Technician"
                    src="https://images.pexels.com/photos/9629685/pexels-photo-9629685.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="team-img"
                  />
                  <div className="team-overlay">
                    <div className="social-links">
                      <span className="section-content">
                        Medication Dispensing Expert
                      </span>
                    </div>
                  </div>
                </div>
                <div className="team-info">
                  <h3 className="section-subtitle">Ibrahim Danladi</h3>
                  <span className="section-content">
                    Senior Pharmacy Technician
                  </span>
                </div>
              </div>
              <div className="team-card">
                <div className="team-image-box">
                  <img
                    alt="Clinical Pharmacist"
                    src="https://images.pexels.com/photos/8657373/pexels-photo-8657373.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="team-img"
                  />
                  <div className="team-overlay">
                    <div className="social-links">
                      <span className="section-content">
                        Patient Counseling Specialist
                      </span>
                    </div>
                  </div>
                </div>
                <div className="team-info">
                  <h3 className="section-subtitle">Fatima Osei</h3>
                  <span className="section-content">Clinical Pharmacist</span>
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
              <h2 className="section-title">Your Pharmacy Experience</h2>
            </div>
            <div className="process-accordion-wrapper">
              <details open="true" className="process-details">
                <summary className="process-summary">
                  <div className="summary-content">
                    <span className="page1-step-number">01</span>
                    <span className="section-subtitle">
                      Prescription Drop-Off
                    </span>
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
                    Bring your prescription or have it sent directly from your
                    physician. We verify and prepare your order immediately.
                  </p>
                </div>
              </details>
              <details className="process-details">
                <summary className="process-summary">
                  <div className="summary-content">
                    <span className="page1-step-number">02</span>
                    <span className="section-subtitle">Pharmacist Review</span>
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
                    Our licensed pharmacist reviews your prescription for
                    interactions, allergies, and optimal dosing.
                  </p>
                </div>
              </details>
              <details className="process-details">
                <summary className="process-summary">
                  <div className="summary-content">
                    <span className="page1-step-number">03</span>
                    <span className="section-subtitle">
                      Dispensing &amp; Counseling
                    </span>
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
                    Medications are prepared with care, and our team provides
                    clear instructions on usage, storage, and side effects.
                  </p>
                </div>
              </details>
              <details className="process-details">
                <summary className="process-summary">
                  <div className="summary-content">
                    <span className="page1-step-number">04</span>
                    <span className="section-subtitle">
                      Follow-Up &amp; Refills
                    </span>
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
                    We monitor your progress, manage refills, and coordinate
                    with your care team for ongoing medication therapy.
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
                Medication Safety in Action
              </h2>
              <p className="section-content">
                Inside our pharmacy wing, every prescription is verified, every
                dose is checked, and every patient receives personalized
                pharmaceutical care from our dedicated team.
              </p>
              <div className="live-indicator">
                <span className="dot"></span>
                <span className="section-content">
                  Live Pharmacy Operations
                </span>
              </div>
            </div>
          </div>
        </section>
        <section
          id="pharma-form-section"
          data-section="pharma-form-section"
          className="pharmaceuticals-thq-page1-pharma-form-section-elm"
        >
          <div className="pharmaceuticals-thq-pharma-form-container-elm">
            <div className="pharma-form-header">
              <h2 className="section-title">Pharmaceutical Services Inquiry</h2>
              <p className="section-content">
                Submit your prescription or pharmaceutical inquiry and our team
                will reach out to you shortly.
              </p>
            </div>
            <form
              id="launch-form"
              action="https://api.web3forms.com/submit"
              method="POST"
              data-form-id="492e2d76-4bfc-4884-9143-5ba341dfe6da"
              encType="multipart/form-data"
              className="pharmaceuticals-thq-pharma-inline-form-elm"
            >
              <input
                type="hidden"
                id="thq_access_key_qJkA"
                name="access_key"
                value="2ba3f6aa-99d0-4789-9589-197107268d04"
                data-form-field-id="thq_access_key_qJkA"
                className="input"
              />
              <input
                type="checkbox"
                id="thq_botcheck_s5qt"
                name="botcheck"
                autoComplete="off"
                data-form-field-id="thq_botcheck_s5qt"
                tabIndex="-1"
                className="pharmaceuticals-thq-hidden-elm input"
              />
              <div className="pharmaceuticals-thq-pharma-form-grid-elm">
                <div className="pharma-form-field">
                  <label
                    htmlFor="inline-pharma-name"
                    className="pharma-form-label"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="inline-pharma-name"
                    name="name"
                    required="true"
                    placeholder="Your full name"
                    data-form-field-id="inline-pharma-name"
                    className="pharma-form-input input"
                  />
                </div>
                <div className="pharma-form-field">
                  <label
                    htmlFor="inline-pharma-email"
                    className="pharma-form-label"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="inline-pharma-email"
                    name="email"
                    required="true"
                    placeholder="you@example.com"
                    data-form-field-id="inline-pharma-email"
                    className="pharma-form-input input"
                  />
                </div>
                <div className="pharma-form-field">
                  <label
                    htmlFor="inline-pharma-phone"
                    className="pharma-form-label"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="inline-pharma-phone"
                    name="phone"
                    placeholder="+234 ..."
                    data-form-field-id="inline-pharma-phone"
                    className="pharma-form-input input"
                  />
                </div>
                <div className="pharma-form-field pharma-form-field--full">
                  <label
                    htmlFor="inline-pharma-message"
                    className="pharma-form-label"
                  >
                    Message / Request
                  </label>
                  <textarea
                    id="inline-pharma-message"
                    name="message"
                    rows="4"
                    required="true"
                    placeholder="Describe your prescription or pharmaceutical inquiry..."
                    data-form-field-id="inline-pharma-message"
                    className="textarea pharma-form-textarea"
                  ></textarea>
                </div>
              </div>
              <button
                id="thq_button_Ikv8"
                name="button"
                type="submit"
                data-form-field-id="thq_button_Ikv8"
                className="pharmaceuticals-thq-pharma-form-submit-elm btn btn-primary btn-lg button"
              >
                Submit Inquiry
              </button>
            </form>
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
                  <h2 className="section-title">Medication Safety Promise</h2>
                  <p className="section-content">
                    Every medication dispensed is verified for authenticity,
                    stored under optimal conditions, and cross-checked against
                    your medical history to prevent adverse reactions.
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
                <h2 className="section-title">Visit Our Pharmacy</h2>
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
                      Prime Pathology Clinic — Pharmacy Wing, Plot 45, Medical
                      Research Drive, Victoria Island, Lagos
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
                  <Link href="/contact">
                    <a className="pharmaceuticals-link3 btn btn-secondary btn-lg">
                      Inquire About Prescription
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="pharmaceuticals-container4">
          <div className="pharmaceuticals-container5">
            <Script
              html={`<style>
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.1);
          }
        }
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.5;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        html {
          scroll-behavior: smooth;
        }
      </style>`}
            ></Script>
          </div>
        </div>
        <div className="pharmaceuticals-container6">
          <div className="pharmaceuticals-container7">
            <Script
              html={`<script>
        ;(function () {
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
                carousel.style.transform = \`translateX(-\\\${scrollAmount}px)\`
              } else {
                scrollAmount = 0
                carousel.style.transform = \`translateX(0px)\`
              }
            })
            prevBtn.addEventListener("click", () => {
              if (scrollAmount > 0) {
                scrollAmount -= cardWidth
                carousel.style.transform = \`translateX(-\\\${scrollAmount}px)\`
              } else {
                scrollAmount = carousel.scrollWidth - carousel.clientWidth
                carousel.style.transform = \`translateX(-\\\${scrollAmount}px)\`
              }
            })
          }
          // Subtle Parallax for Hero
          window.addEventListener("scroll", () => {
            const scrolled = window.pageYOffset
            const heroVideo = document.querySelector(".hero-video")
            if (heroVideo) {
              heroVideo.style.transform = \`translateY(\\\${scrolled * 0.3}px)\`
            }
            const molecules = document.querySelectorAll(".molecule")
            molecules.forEach((m, index) => {
              const speed = (index + 1) * 0.1
              m.style.transform = \`translateY(\\\${scrolled * speed}px)\`
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
      </script><script>
        ;(function () {
          const form = document.getElementById("launch-form")
          if (!form) return
          form.addEventListener("submit", function (e) {
            e.preventDefault()
            const formData = new FormData(form)
            fetch("https://api.web3forms.com/submit", {
              method: "POST",
              body: formData,
            })
              .then(function (response) {
                if (response.ok) {
                  // Hide the pharma form section
                  const section = document.getElementById("pharma-form-section")
                  if (section) section.style.display = "none"
                  // Show success toast
                  showToast("Thank you for submitting! We'll reach out soon.")
                } else {
                  showToast("Submission failed. Please try again.", true)
                }
              })
              .catch(function () {
                showToast("Submission failed. Please try again.", true)
              })
          })
          function showToast(message, isError) {
            const existing = document.querySelector('[data-role="web3form-toast"]')
            if (existing) existing.remove()
            const toast = document.createElement("div")
            toast.setAttribute("data-role", "web3form-toast")
            toast.setAttribute("aria-live", "polite")
            toast.style.cssText = "position:fixed;top:16px;right:16px;z-index:9999;max-width:320px;padding:14px 18px;border-radius:12px;background:" + (isError ? "#E23333" : "#16a34a") + ";color:#fff;font-family:Inter,system-ui,sans-serif;font-size:0.95rem;line-height:1.4;box-shadow:0 8px 24px rgba(0,0,0,0.22);display:flex;align-items:center;gap:10px;transform:translateX(120%);transition:transform 0.45s cubic-bezier(0.22,1,0.36,1);pointer-events:auto;"
            const icon = document.createElement("span")
            icon.innerHTML = isError ? "✕" : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>'
            icon.style.cssText = "display:inline-flex;flex-shrink:0;"
            const text = document.createElement("span")
            text.textContent = message
            text.style.flex = "1"
            const closeBtn = document.createElement("button")
            closeBtn.setAttribute("aria-label", "Dismiss notification")
            closeBtn.innerHTML = "✕"
            closeBtn.style.cssText = "background:none;border:none;color:#fff;font-size:1rem;cursor:pointer;padding:0 0 0 6px;line-height:1;opacity:0.85;"
            closeBtn.addEventListener("click", function () {
              toast.style.transform = "translateX(120%)"
              setTimeout(function () {
                toast.remove()
              }, 500)
            })
            toast.appendChild(icon)
            toast.appendChild(text)
            toast.appendChild(closeBtn)
            document.body.appendChild(toast)
            // Force reflow
            toast.getBoundingClientRect()
            toast.style.transform = "translateX(0)"
            // Auto dismiss after 4 seconds
            setTimeout(function () {
              if (toast.parentNode) {
                toast.style.transform = "translateX(120%)"
                setTimeout(function () {
                  toast.remove()
                }, 500)
              }
            }, 4000)
          }
        })()
      </script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
        <div>
          <div className="pharmaceuticals-container9">
            <Script
              html={`<div data-role="pharma-inline-notification" class="pharma-notification"><span class="pharma-notification__icon"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span class="pharma-notification__text">Thank you for submitting! We&apos;ll reach out soon.</span><button type="button" aria-label="Dismiss notification" data-action="pharma-inline-notification-close" class="pharma-notification__close"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg></button></div><div class="container23"><style>
        @keyframes pharmaToastCheck {
          from {
            transform: scale(0.6);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      </style></div>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .pharmaceuticals-container1 {
            width: 100%;
            max-width: 100vw;
            min-height: 100vh;
            overflow-x: hidden;
          }
          .pharmaceuticals-thq-thq-btn-elm1-elm {
            text-align: center;
            text-decoration: none;
          }
          .pharmaceuticals-container2 {
            display: none;
          }
          .pharmaceuticals-container3 {
            display: contents;
          }
          .pharmaceuticals-thq-section-content-elm23 {
            font-size: 1.1rem;
            line-height: 1.7;
          }
          .pharmaceuticals-thq-page1-pharma-form-section-elm {
            padding: var(--spacing-4xl) 0;
            background: var(--color-medical-blue-light);
          }
          .pharmaceuticals-thq-pharma-form-container-elm {
            margin: 0 auto;
            padding: 0 var(--spacing-xl);
            max-width: var(--content-max-width);
          }
          .pharmaceuticals-thq-pharma-inline-form-elm {
            margin: 0 auto;
            padding: var(--spacing-2xl);
            max-width: 48rem;
            background: var(--color-surface);
            box-shadow: var(--shadow-level-2);
            border-radius: var(--border-radius-xl);
          }
          .pharmaceuticals-thq-hidden-elm {
            display: none;
          }
          .pharmaceuticals-thq-pharma-form-grid-elm {
            gap: var(--spacing-lg);
            display: grid;
            margin-bottom: var(--spacing-xl);
            grid-template-columns: repeat(2, 1fr);
          }
          .pharmaceuticals-thq-pharma-form-submit-elm {
            width: 100%;
          }
          .pharmaceuticals-link3 {
            text-align: center;
            text-decoration: none;
          }
          .pharmaceuticals-container4 {
            display: none;
          }
          .pharmaceuticals-container5 {
            display: contents;
          }
          .pharmaceuticals-container6 {
            display: none;
          }
          .pharmaceuticals-container7 {
            display: contents;
          }
          .pharmaceuticals-container9 {
            display: contents;
          }
          @media (max-width: 767px) {
            .pharmaceuticals-thq-pharma-form-grid-elm {
              grid-template-columns: 1fr;
            }
          }
          @media (max-width: 479px) {
            .pharmaceuticals-text4 {
              font-weight: bold;
            }
          }
        `}
      </style>
    </>
  )
}

export default Pharmaceuticals
