import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const PrivacyPolicy = (props) => {
  return (
    <>
      <div className="privacy-policy-container1">
        <Head>
          <title>Privacy-Policy - Prime Pathology Clinic</title>
          <meta
            property="og:title"
            content="Privacy-Policy - Prime Pathology Clinic"
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
            href="https://patho.teleporthq.site/privacy-policy"
          />
          <meta
            property="og:url"
            content="https://patho.teleporthq.site/privacy-policy"
          />
        </Head>
        <Navigation></Navigation>
        <section className="privacy-hero">
          <div className="hero-bg-container">
            <img
              alt="Advanced Lab Environment"
              src="https://images.pexels.com/photos/8442105/pexels-photo-8442105.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="hero-video-fallback"
            />
            <div className="page-hero-overlay"></div>
            <div aria-hidden="true" className="floating-elements">
              <div className="float-item tube-1"></div>
              <div className="float-item tube-2"></div>
              <div className="float-item molecule-1 page-molecule-1"></div>
            </div>
          </div>
          <div className="page-hero-content">
            <h1 className="page-hero-title hero-title">Privacy and Policy</h1>
            <p className="hero-subtitle">
              Your data protection is our highest priority. Learn how Prime
              Pathology Clinic safeguards your diagnostic information.
            </p>
          </div>
        </section>
        <section className="policy-content">
          <div className="policy-container">
            <div className="policy-text-block">
              <h2 className="section-title">Data Protection Commitment</h2>
              <p className="section-content">
                At Prime Pathology Clinic, we understand that medical data is
                deeply personal. Our privacy framework is built on international
                healthcare standards to ensure that every test result, patient
                record, and personal detail is handled with absolute
                confidentiality and state-of-the-art security.
              </p>
            </div>
            <div className="policy-grid">
              <div className="policy-card">
                <div className="icon-box">
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
                <h3 className="card-title">Information Collection</h3>
                <p className="section-content">
                  We collect only necessary information required for accurate
                  diagnosis, including personal identification, medical history,
                  and sample data provided during the registration process.
                </p>
              </div>
              <div className="policy-card">
                <div className="icon-box">
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
                <h3 className="card-title">Secure Storage</h3>
                <p className="section-content">
                  All medical records are stored in encrypted, HIPAA-compliant
                  servers with multi-factor authentication and strict access
                  logs monitored by our security team.
                </p>
              </div>
              <div className="policy-card">
                <div className="icon-box">
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
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M3 5v14a9 3 0 0 0 18 0V5"></path>
                    <path d="M3 12a9 3 0 0 0 18 0"></path>
                  </svg>
                </div>
                <h3 className="card-title">Data Sharing</h3>
                <p className="section-content">
                  Diagnostic results are only shared with authorized medical
                  professionals or the patients themselves. We never sell or
                  lease patient data to third parties for marketing purposes.
                </p>
              </div>
            </div>
            <div className="policy-legal-box">
              <h3 className="section-subtitle">Legal Compliance</h3>
              <p className="section-content">
                Our operations comply with the National Health Act and local
                data protection regulations in Nigeria, Liberia, Tanzania, and
                Uganda, ensuring a global standard of medical ethics and legal
                accountability.
              </p>
            </div>
          </div>
        </section>
        <section className="policy-timeline">
          <div className="page-timeline-container">
            <div className="timeline-header">
              <h2 className="section-title">Data Lifecycle Process</h2>
              <p className="section-subtitle">
                How we manage your information from collection to delivery.
              </p>
            </div>
            <div className="page-accordion-group">
              <details open="true" className="page-timeline-item">
                <summary className="timeline-trigger">
                  <span className="timeline-number">01</span>
                  <span className="timeline-label">
                    Sample Collection &amp; Registration
                  </span>
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
                    className="chevron"
                  >
                    <path d="m6 9l6 6l6-6"></path>
                  </svg>
                </summary>
                <div className="timeline-panel">
                  <p className="section-content">
                    At the point of collection, patient data is anonymized using
                    unique barcodes. No personal identifiers are visible to
                    laboratory technicians during the analysis phase to ensure
                    unbiased processing and privacy.
                  </p>
                </div>
              </details>
              <details className="page-timeline-item">
                <summary className="timeline-trigger">
                  <span className="timeline-number">02</span>
                  <span className="timeline-label">
                    Advanced Laboratory Analysis
                  </span>
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
                    className="chevron"
                  >
                    <path d="m6 9l6 6l6-6"></path>
                  </svg>
                </summary>
                <div className="timeline-panel">
                  <p className="section-content">
                    Our scientists process samples using automated machinery.
                    Analysis data is transmitted through a closed-loop internal
                    network, isolated from the public internet to prevent
                    unauthorized interception.
                  </p>
                </div>
              </details>
              <details className="page-timeline-item">
                <summary className="timeline-trigger">
                  <span className="timeline-number">03</span>
                  <span className="timeline-label">
                    Pathologist Review &amp; Validation
                  </span>
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
                    className="chevron"
                  >
                    <path d="m6 9l6 6l6-6"></path>
                  </svg>
                </summary>
                <div className="timeline-panel">
                  <p className="section-content">
                    Senior pathologists review diagnostic data via secure
                    workstations. Access to full patient history is granted only
                    for clinical correlation necessary for accurate diagnosis.
                  </p>
                </div>
              </details>
              <details className="page-timeline-item">
                <summary className="timeline-trigger">
                  <span className="timeline-number">04</span>
                  <span className="timeline-label">
                    Encrypted Result Delivery
                  </span>
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
                    className="chevron"
                  >
                    <path d="m6 9l6 6l6-6"></path>
                  </svg>
                </summary>
                <div className="timeline-panel">
                  <p className="section-content">
                    Final results are delivered through password-protected PDFs
                    or our secure patient portal. We use SSL/TLS encryption for
                    all digital communications to guarantee end-to-end security.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <div className="privacy-policy-container2">
          <div className="privacy-policy-container3">
            <Script
              html={`<style>
        @keyframes float {0%,100% {transform: translate(0, 0) rotate(15deg);}
50% {transform: translate(20px, -40px) rotate(20deg);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="privacy-policy-container4">
          <div className="privacy-policy-container5">
            <Script
              html={`<script defer data-name="prime-privacy-logic">
(function(){
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileNav = document.getElementById("mobileNav")

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener("click", () => {
      const isOpen = mobileNav.style.display === "block"
      mobileNav.style.display = isOpen ? "none" : "block"

      // Toggle icon animation could be added here
      mobileMenuBtn.innerHTML = isOpen
        ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
    })
  }

  // Simple scroll reveal observer
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

  document.querySelectorAll(".policy-card, .timeline-item").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "all 0.6s ease-out"
    revealObserver.observe(el)
  })

  // Parallax effect for hero
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const heroBg = document.querySelector(".hero-bg-container")
    if (heroBg) {
      heroBg.style.transform = \`translateY(\${scrolled * 0.3}px)\`
    }
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
          .privacy-policy-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .privacy-policy-container2 {
            display: none;
          }
          .privacy-policy-container3 {
            display: contents;
          }
          .privacy-policy-container4 {
            display: none;
          }
          .privacy-policy-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default PrivacyPolicy
