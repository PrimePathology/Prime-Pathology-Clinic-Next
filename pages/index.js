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
                Comprehensive Multispecialty Clinic &amp; Healthcare Services
                You Can Trust
              </h1>
              <p className="hero-subtitle">
                Prime Pathology Clinic is a comprehensive Multispecialty
                healthcare center dedicated to delivering world-class clinical,
                pharmaceutical, residential, and consultancy services. We
                provide integrated medical care across multiple
                specialties—ensuring every patient receives personalized,
                compassionate, and effective treatment they can trust.
              </p>
              <div className="hero-actions">
                <a href="#book-test">
                  <div className="btn btn-primary btn-lg">
                    <span>Book Appointment</span>
                  </div>
                </a>
                <a href="#services">
                  <div className="btn btn-outline btn-lg">
                    <span>Our Services</span>
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
                <h2 className="section-title">Book an Appointment</h2>
                <p className="section-content">
                  Schedule your consultation or service with our expert
                  healthcare team at your convenience.
                </p>
              </div>
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                id="launch-form"
                data-form-id="a33f611d-5fe3-4511-9995-cd119123db29"
                className="cta-form"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="2ba3f6aa-99d0-4789-9589-197107268d04"
                  id="thq_access_key_FCnp"
                  data-form-field-id="thq_access_key_FCnp"
                  className="input"
                />
                <input
                  type="checkbox"
                  name="botcheck"
                  id="thq_botcheck_A_GP"
                  data-form-field-id="thq_botcheck_A_GP"
                  className="home-thq-hidden-elm input"
                />
                <div className="form-group">
                  <input
                    type="text"
                    id="thq_true_hLmC"
                    name="name"
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
                    <option value="bauchi-nigeria">
                      Dutse, Jigawa State Nigeria
                    </option>
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
                      Select Service Type
                    </option>
                    <option value="clinical-hospital">
                      Clinical &amp; Hospital Services
                    </option>
                    <option value="pharmaceutical">
                      Pharmaceutical &amp; Medical Supply
                    </option>
                    <option value="residential-care">
                      Specialized Residential Care
                    </option>
                    <option value="research-consultancy">
                      Research &amp; Professional Consultancy
                    </option>
                    <option value="general-consultation">
                      General Medical Consultation
                    </option>
                    <option value="dental-services">Dental Services</option>
                    <option value="diagnostic-imaging">
                      Diagnostic Imaging &amp; Lab
                    </option>
                    <option value="pharmacy-services">Pharmacy Services</option>
                    <option value="elderly-care">
                      Elderly &amp; Disabled Care
                    </option>
                    <option value="mental-health">
                      Mental Health &amp; Substance Abuse Care
                    </option>
                    <option value="management-consultancy">
                      Management Consultancy
                    </option>
                    <option value="scientific-research">
                      Scientific Research Activities
                    </option>
                    <option value="equipment-supply">
                      Medical Equipment Supply
                    </option>
                    <option value="wholesale-retail">
                      Wholesale &amp; Retail Supply
                    </option>
                    <option value="assisted-living">
                      Assisted Living Services
                    </option>
                    <option value="social-sciences">
                      Social Sciences &amp; Humanities Research
                    </option>
                    <option value="technical-consultancy">
                      Technical &amp; Scientific Consultancy
                    </option>
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
                  Confirm Appointment
                </button>
              </form>
              <div className="home-container13">
                <div className="home-container14">
                  <Script
                    html={`<script>
(function(){
          ;(function () {
            var form = document.getElementById("launch-form")
            if (!form) return
            form.addEventListener("submit", function (e) {
              e.preventDefault()
              var data = new FormData(form)
              fetch(form.action, {
                method: "POST",
                body: data,
              })
                .then(function (response) {
                  if (response.ok) {
                    var notif = document.createElement("div")
                    notif.style.cssText = "position:fixed;top:20px;right:20px;z-index:9999;background:#22c55e;color:#fff;padding:16px 20px;border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,0.22);display:flex;align-items:center;gap:12px;font-family:Inter,system-ui,sans-serif;font-size:14px;transform:translateX(120%);transition:transform 0.5s ease;"
                    notif.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Thank you for submitting! We\'ll reach out soon.</span>'
                    document.body.appendChild(notif)
                    requestAnimationFrame(function () {
                      notif.style.transform = "translateX(0)"
                    })
                    setTimeout(function () {
                      notif.style.opacity = "0"
                      notif.style.transform = "translateX(120%)"
                      notif.style.transition = "transform 0.5s ease, opacity 0.5s ease"
                      setTimeout(function () {
                        if (notif.parentNode) notif.parentNode.removeChild(notif)
                      }, 500)
                    }, 4000)
                    form.reset()
                  } else {
                    alert("Something went wrong. Please try again.")
                  }
                })
                .catch(function () {
                  alert("Something went wrong. Please try again.")
                })
            })
          })()
        })()
</script>`}
                  ></Script>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="treatment-approach">
          <div className="approach-split">
            <div className="approach-visual home-thq-approach-visual-elm">
              <div className="workflow-animation-box">
                <img
                  alt="Clinical Workflow Illustration"
                  src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fERpYWdub3N0aWN8ZW58MHx8fHwxNzc4NTY3MTU1fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
                  className="workflow-img"
                />
                <div className="pulse-ring"></div>
              </div>
            </div>
            <div className="approach-text">
              <h2 className="section-title">Precision in Every Process</h2>
              <p className="section-content">
                In designing healthcare services for our clients and patients,
                we use integrated multispecialty clinical processes that assist
                consultants in carrying out comprehensive diagnosis and holistic
                care to ensure reliable and effective treatment across all
                departments.
              </p>
              <div className="workflow-steps">
                <div
                  data-info-card="protocols"
                  data-info-title="Standardized Protocols"
                  data-info-body="We follow globally recognized clinical guidelines and evidence-based protocols to ensure every patient receives consistent, safe, and high-quality care across all our departments."
                  className="step-item"
                >
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
                <div
                  data-info-card="healthcare"
                  data-info-title="Integrated Healthcare"
                  data-info-body="Our departments work seamlessly together — from diagnostics and pharmacy to residential care and research — delivering coordinated, patient-centered treatment under one roof."
                  className="step-item"
                >
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
                  <span>Integrated Healthcare</span>
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
                Delivering comprehensive healthcare services with cutting-edge
                technology and compassionate care to empower healthier lives.
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
                To be Africa&amp;apos;s most trusted multispecialty healthcare
                partner, setting the standard for integrated medical excellence.
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
                Patient-centered healthcare with compassionate service and
                comprehensive treatment across all specialties.
              </p>
            </div>
          </div>
        </section>
        <section id="services" className="services-carousel-section">
          <div className="carousel-header">
            <h2 className="section-title">Our Comprehensive Services</h2>
          </div>
          <div className="carousel-viewport">
            <div className="carousel-track">
              <div
                aria-hidden="true"
                className="home-thq-carousel-swipe-hint-elm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M5 12h14m-7-7l7 7l-7 7"
                  ></path>
                </svg>
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
                      d="M20 14h-6.5A2.5 2.5 0 0 0 11 16.5V21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v10M13 21v-4.5a.5.5 0 0 1 .5-.5H17"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  Clinical &amp; Hospital Services
                </h3>
                <p className="section-content">
                  Comprehensive Hospital Activities, Medical &amp; Dental
                  Practice, and Diagnostic &amp; Laboratory Services.
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
                      d="M19 5h-2V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M9 4h6v1H9zm9 15H6V7h12z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  Pharmaceutical &amp; Medical Supply
                </h3>
                <p className="section-content">
                  Pharmacy Services, Manufacturing, Wholesale &amp; Retail
                  Supply, and Equipment Supply.
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
                      d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19m0 0v2.5M12 2V4.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  Specialized Residential Care
                </h3>
                <p className="section-content">
                  Elderly &amp; Disabled Care, Mental Health &amp; Substance
                  Abuse Care, and General Residential Care.
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
                      d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 7H20v13H6.5A2.5 2.5 0 0 1 4 17.5z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  Research &amp; Professional Consultancy
                </h3>
                <p className="section-content">
                  Management Consultancy, Technical &amp; Scientific Activities,
                  and Research Services.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48">
                    <g
                      fill="currentColor"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    >
                      <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4m0 36c-8.837 0-16-7.163-16-16S15.163 8 24 8s16 7.163 16 16-7.163 16-16 16m-4-16a4 4 0 1 0 8 0 4 4 0 0 0-8 0"></path>
                      <path
                        d="M24 12v4m0 16v4M12 24h4m16 0h4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">All Services</h3>
                <p className="section-content">
                  Explore our full range of clinical, pharmaceutical,
                  residential, and consultancy healthcare services.
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
                  alt="CEO of Prime Multispecialty Clinic"
                  src="/ceo3-1500w.jpg"
                  className="ceo-img"
                />
                <div className="ceo-accent-frame"></div>
              </div>
              <div className="ceo-content-card">
                <h2 className="section-title">Message from the CEO</h2>
                <p className="section-content">
                  &quot;Our commitment to quality healthcare is the bedrock of
                  patient-centered care. We believe that innovation in medicine
                  is not just about technology, but about transforming lives
                  through comprehensive, compassionate, and integrated services.
                  At Prime Multispecialty Clinic, every patient journey matters,
                  and we are dedicated to ensuring that journey leads to the
                  best possible health outcome.&quot;
                </p>
                <div className="ceo-signature">
                  <span className="signature-text">
                    Auwalu Garba Hussain PhD
                  </span>
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
              Integrated healthcare departments delivering comprehensive and
              reliable care
            </p>
          </div>
          <div className="home-thq-flip-cards-grid-elm">
            <div data-animate="slide-up" className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    alt="Clinical &amp; Hospital Department"
                    src="https://images.pexels.com/photos/6129677/pexels-photo-6129677.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="flip-card-img"
                  />
                  <div className="flip-card-front-content">
                    <h3 className="flip-card-title">
                      Clinical &amp; Hospital Dept
                    </h3>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="flip-card-back-content">
                    <h4 className="flip-card-back-title">
                      Clinical &amp; Hospital Department
                    </h4>
                    <p className="flip-card-description">
                      General Hospital Services, Medical &amp; Dental Practice,
                      Prime Diagnostic Center
                    </p>
                    <Link href="/services">
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
                    alt="Pharmacy &amp; Medical Supplies Department"
                    src="https://images.unsplash.com/photo-1577401132921-cb39bb0adcff?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDYyfHxQaGFybWFjeXxlbnwwfHx8fDE3Nzg1NjY3OTN8MA&amp;ixlib=rb-4.1.0&amp;w=1500"
                    className="flip-card-img"
                  />
                  <div className="flip-card-front-content">
                    <h3 className="flip-card-title">
                      Pharmacy &amp; Supplies Dept
                    </h3>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="flip-card-back-content">
                    <h4 className="flip-card-back-title">
                      Pharmacy &amp; Medical Supplies
                    </h4>
                    <p className="flip-card-description">
                      Retail &amp; Wholesale Pharmacy, Pharmaceutical
                      Manufacturing, Medical Equipment Division
                    </p>
                    <Link href="/services">
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
                    alt="Specialized Residential Care Department"
                    src="https://images.unsplash.com/photo-1772791002745-e9d5a1ff81bd?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxyZXNpZGVudGlhbCUyMENhcmV8ZW58MHx8fHwxNzc4NTY2ODY5fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
                    className="flip-card-img"
                  />
                  <div className="flip-card-front-content">
                    <h3 className="flip-card-title">Residential Care Dept</h3>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="flip-card-back-content">
                    <h4 className="flip-card-back-title">
                      Specialized Residential Care
                    </h4>
                    <p className="flip-card-description">
                      Elderly &amp; Disabled Care, Mental Health &amp; Substance
                      Abuse, Assisted Living Services
                    </p>
                    <Link href="/services">
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
                    alt="Research &amp; Strategy Department"
                    src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxSZXNlYXJjaHxlbnwwfHx8fDE3Nzg1NjY5MzB8MA&amp;ixlib=rb-4.1.0&amp;w=1500"
                    className="flip-card-img"
                  />
                  <div className="flip-card-front-content">
                    <h3 className="flip-card-title">
                      Research &amp; Strategy Dept
                    </h3>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="flip-card-back-content">
                    <h4 className="flip-card-back-title">
                      Research &amp; Strategy
                    </h4>
                    <p className="flip-card-description">
                      Scientific Research Lab, Social Sciences &amp; Humanities
                      Research, Management Consultancy
                    </p>
                    <Link href="/services">
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
                    alt="Prime Diagnostic Center"
                    src="https://images.unsplash.com/photo-1582719367079-bc1b8e5fed9d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fERpYWdub3N0aWN8ZW58MHx8fHwxNzc4NTY3MTU1fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
                    className="flip-card-img"
                  />
                  <div className="flip-card-front-content">
                    <h3 className="flip-card-title">Prime Diagnostic Center</h3>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="flip-card-back-content">
                    <h4 className="flip-card-back-title">
                      Prime Diagnostic Center
                    </h4>
                    <p className="flip-card-description">
                      Advanced diagnostic imaging, laboratory services, and
                      health screenings
                    </p>
                    <Link href="/services">
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
                    alt="Medical Equipment Division"
                    src="https://images.unsplash.com/photo-1559000357-f6b52ddfbe37?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxtZWRpY2FsJTIwRXF1aXBtZW50fGVufDB8fHx8MTc3ODU2NzEwM3ww&amp;ixlib=rb-4.1.0&amp;w=1500"
                    className="flip-card-img"
                  />
                  <div className="flip-card-front-content">
                    <h3 className="flip-card-title">
                      Medical Equipment Division
                    </h3>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="flip-card-back-content">
                    <h4 className="flip-card-back-title">
                      Medical Equipment Division
                    </h4>
                    <p className="flip-card-description">
                      Supply of state-of-the-art medical devices, diagnostics,
                      and hospital equipment
                    </p>
                    <Link href="/services">
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
        <div className="home-container15">
          <div className="home-container16">
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
        <section className="team-section">
          <div className="team-container">
            <h2 className="section-title text-center">Our Leadership Team</h2>
            <div className="team-layout">
              <div className="branch-grid">
                <div className="branch-card">
                  <div className="branch-frame">
                    <img
                      alt="Nigeria Branch"
                      src="/ceo5-1500w.png"
                      className="branch-img"
                    />
                    <div className="branch-overlay home-thq-branch-overlay-elm1">
                      <span className="home-thq-branch-location-elm10 branch-location">
                        Auwal Garba Hussain
                      </span>
                      <span className="home-thq-branch-location-elm11 branch-location">
                        CEO &amp; Director
                      </span>
                    </div>
                  </div>
                </div>
                <div className="branch-card">
                  <div className="branch-frame">
                    <img
                      alt="Nigeria Branch"
                      src="/maryam-1500w.jpg"
                      className="branch-img"
                    />
                    <div className="branch-overlay home-thq-branch-overlay-elm2">
                      <span className="home-thq-branch-location-elm12 branch-location">
                        Maryam Mohammed Maitama
                      </span>
                      <span className="home-thq-branch-location-elm13 branch-location">
                        Country Director, Liberia
                      </span>
                    </div>
                  </div>
                </div>
                <div className="branch-card">
                  <div className="branch-frame">
                    <img
                      alt="Nigeria Branch"
                      src="/aisha2-1500w.jpg"
                      className="branch-img"
                    />
                    <div className="branch-overlay home-thq-branch-overlay-elm3">
                      <span className="home-thq-branch-location-elm14 branch-location">
                        Aisha Garba  Othman
                      </span>
                      <span className="home-thq-branch-location-elm15 branch-location">
                        Country Director, Tanzania
                      </span>
                    </div>
                  </div>
                </div>
                <div className="branch-card">
                  <div className="branch-frame">
                    <img
                      alt="Nigeria Branch"
                      src="/fauziyya-1500w.jpg"
                      className="branch-img"
                    />
                    <div className="branch-overlay home-thq-branch-overlay-elm4">
                      <span className="home-thq-branch-location-elm16 branch-location">
                        Fauziya Ahmed Bello
                      </span>
                      <span className="home-thq-branch-location-elm17 branch-location">
                        Country Director, Rwanda
                      </span>
                    </div>
                  </div>
                </div>
                <div className="branch-card">
                  <div className="branch-frame">
                    <img
                      alt="Nigeria Branch"
                      src="/karimatu-1500w.jpg"
                      className="branch-img"
                    />
                    <div className="branch-overlay home-thq-branch-overlay-elm5">
                      <span className="home-thq-branch-location-elm18 branch-location">
                        Karimatu Abdullahi Zakari
                      </span>
                      <span className="home-thq-branch-location-elm19 branch-location">
                        Country Director, Nigeria
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="lab-war-room">
          <div className="war-room-carousel">
            <div className="home-thq-parallax-slide-elm parallax-slide active">
              <div className="slide-content">
                <h2 className="home-hero-title hero-title">
                  Integrated Healthcare Operations
                </h2>
                <p className="section-content">
                  Our coordinated care hub is where medical expertise meets
                  compassionate service across all specialties.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="timeline-section">
          <div className="timeline-container">
            <h2 className="section-title">Your Journey to Wellness</h2>
            <div className="accordion-group">
              <details open="true" className="timeline-step">
                <summary className="step-header">
                  <span className="step-number">01</span>
                  <span className="section-subtitle">Initial Consultation</span>
                </summary>
                <div className="step-content">
                  <p className="section-content">
                    Professional and personalized consultation with our
                    experienced healthcare providers to assess your needs and
                    develop a tailored care plan.
                  </p>
                </div>
              </details>
              <details className="timeline-step">
                <summary className="step-header">
                  <span className="step-number">02</span>
                  <span className="section-subtitle">Clinical Assessment</span>
                </summary>
                <div className="step-content">
                  <p className="section-content">
                    Comprehensive clinical evaluation using advanced diagnostics
                    and expert medical review across all relevant specialties.
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
                    Our multidisciplinary team reviews findings to provide a
                    comprehensive diagnosis and personalized treatment plan.
                  </p>
                </div>
              </details>
              <details className="timeline-step">
                <summary className="step-header">
                  <span className="step-number">04</span>
                  <span className="section-subtitle">
                    Ongoing Care &amp; Follow-up
                  </span>
                </summary>
                <div className="step-content">
                  <p className="section-content">
                    Receive continuous care, follow-up appointments, and
                    wellness support to ensure lasting health outcomes.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <div className="home-container17">
          <div className="home-container18">
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
        <div className="home-container19">
          <div className="home-container20">
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
          <div className="home-container22">
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
          <div className="home-container24">
            <Script
              html={`<div id="info-card-overlay" class="info-card-overlay" aria-hidden="true"><div class="info-card"><button class="info-card-close" aria-label="Dismiss information card">&times;</button><h4 class="info-card-title"></h4><p class="info-card-body"></p></div></div><script>
      ;(function () {
        const overlay = document.getElementById("info-card-overlay")
        const card = overlay.querySelector(".info-card")
        const titleEl = card.querySelector(".info-card-title")
        const bodyEl = card.querySelector(".info-card-body")
        const closeBtn = card.querySelector(".info-card-close")
        let activeTimer = null

        function showCard(stepItem) {
          // Close any existing card first
          hideCard()

          const title = stepItem.getAttribute("data-info-title")
          const body = stepItem.getAttribute("data-info-body")
          if (!title || !body) return

          titleEl.textContent = title
          bodyEl.textContent = body

          // Position near the step item
          const rect = stepItem.getBoundingClientRect()
          const scrollTop = window.scrollY || document.documentElement.scrollTop
          const scrollLeft = window.scrollX || document.documentElement.scrollLeft

          overlay.style.top = rect.bottom + scrollTop + 8 + "px"
          overlay.style.left = rect.left + scrollLeft + "px"
          overlay.style.width = rect.width + "px"

          overlay.classList.add("active")
          overlay.setAttribute("aria-hidden", "false")

          // Auto-dismiss after 6 seconds with smooth fade-out
          activeTimer = setTimeout(() => {
            overlay.classList.add("fading")
            overlay.classList.remove("active")
            setTimeout(() => {
              overlay.classList.remove("fading")
              overlay.setAttribute("aria-hidden", "true")
            }, 500)
          }, 6000)
        }

        function hideCard() {
          if (activeTimer) {
            clearTimeout(activeTimer)
            activeTimer = null
          }
          overlay.classList.add("fading")
          overlay.classList.remove("active")
          setTimeout(() => {
            overlay.classList.remove("fading")
            overlay.setAttribute("aria-hidden", "true")
          }, 500)
        }

        // Close button click
        closeBtn.addEventListener("click", (e) => {
          e.stopPropagation()
          hideCard()
        })

        // Bind to step items
        document.querySelectorAll("[data-info-card]").forEach((step) => {
          step.addEventListener("click", (e) => {
            e.stopPropagation()
            showCard(step)
          })
          step.addEventListener("mouseenter", () => {
            showCard(step)
          })
          step.addEventListener("mouseleave", () => {
            // Optional: hide on mouseleave if desired; currently kept open for readability
          })
        })

        // Hide when clicking outside
        document.addEventListener("click", (e) => {
          if (!overlay.contains(e.target)) {
            hideCard()
          }
        })
      })()
    </script><div class="container24"><style>
        @keyframes mv-card-enter {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      </style></div>`}
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
          .home-thq-hidden-elm {
            display: none;
          }
          .home-container13 {
            display: none;
          }
          .home-container14 {
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
          .home-thq-carousel-swipe-hint-elm {
            top: 50%;
            color: var(--color-primary);
            right: 12px;
            width: 48px;
            height: 48px;
            display: flex;
            z-index: 10;
            position: absolute;
            transform: translateY(-50%);
            background: var(--color-surface);
            box-shadow: var(--shadow-level-2);
            align-items: center;
            border-radius: var(--border-radius-full);
            pointer-events: none;
            justify-content: center;
          }
          .home-thq-signature-title-elm1 {
            color: var(--color-accent);
            font-family: '' '' '' '' '' '' '' Inter '' '' '' '' '' '' '';
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
          .home-container15 {
            display: none;
          }
          .home-container16 {
            display: contents;
          }
          .home-thq-branch-location-elm10 {
            display: flex;
            font-size: 32px;
            flex-direction: row;
          }
          .home-thq-branch-location-elm11 {
            display: flex;
            font-size: 32px;
            flex-direction: row;
          }
          .home-thq-branch-location-elm12 {
            display: flex;
            font-size: 32px;
            flex-direction: row;
          }
          .home-thq-branch-location-elm13 {
            display: flex;
            font-size: 32px;
            flex-direction: row;
          }
          .home-thq-branch-location-elm14 {
            display: flex;
            font-size: 32px;
            flex-direction: row;
          }
          .home-thq-branch-location-elm15 {
            display: flex;
            font-size: 32px;
            flex-direction: row;
          }
          .home-thq-branch-location-elm16 {
            display: flex;
            font-size: 32px;
            flex-direction: row;
          }
          .home-thq-branch-location-elm17 {
            display: flex;
            font-size: 32px;
            flex-direction: row;
          }
          .home-thq-branch-location-elm18 {
            display: flex;
            font-size: 32px;
            flex-direction: row;
          }
          .home-thq-branch-location-elm19 {
            display: flex;
            font-size: 32px;
            flex-direction: row;
          }
          .home-thq-parallax-slide-elm {
            background-image: url('https://images.pexels.com/photos/5726797/pexels-photo-5726797.jpeg?auto=compress&cs=tinysrgb&w=1500');
          }
          .home-container17 {
            display: none;
          }
          .home-container18 {
            display: contents;
          }
          .home-container19 {
            display: none;
          }
          .home-container20 {
            display: contents;
          }
          .home-container22 {
            display: contents;
          }
          .home-container24 {
            display: contents;
          }
          @media (max-width: 991px) {
            .home-thq-mv-grid-elm {
              gap: var(--spacing-xl);
              grid-template-columns: repeat(2, 1fr);
            }
            .home-thq-carousel-swipe-hint-elm {
              right: 8px;
              width: 44px;
              height: 44px;
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
            .home-thq-carousel-swipe-hint-elm {
              right: 6px;
              width: 40px;
              height: 40px;
            }
            .home-thq-branch-overlay-elm1 {
              top: -96px;
              right: -819px;
            }
            .home-thq-branch-location-elm10 {
              display: flex;
              font-size: 20px;
              flex-direction: row;
            }
            .home-thq-branch-location-elm11 {
              display: flex;
              font-size: 20px;
              flex-direction: row;
            }
            .home-thq-branch-overlay-elm2 {
              top: -96px;
              right: -819px;
            }
            .home-thq-branch-location-elm12 {
              display: flex;
              font-size: 20px;
              flex-direction: row;
            }
            .home-thq-branch-location-elm13 {
              display: flex;
              font-size: 20px;
              flex-direction: row;
            }
            .home-thq-branch-overlay-elm3 {
              top: -96px;
              right: -819px;
            }
            .home-thq-branch-location-elm14 {
              display: flex;
              font-size: 20px;
              flex-direction: row;
            }
            .home-thq-branch-location-elm15 {
              display: flex;
              font-size: 20px;
              flex-direction: row;
            }
            .home-thq-branch-overlay-elm4 {
              top: -96px;
              right: -819px;
            }
            .home-thq-branch-location-elm16 {
              display: flex;
              font-size: 20px;
              flex-direction: row;
            }
            .home-thq-branch-location-elm17 {
              display: flex;
              font-size: 20px;
              flex-direction: row;
            }
            .home-thq-branch-overlay-elm5 {
              top: -96px;
              right: -819px;
            }
            .home-thq-branch-location-elm18 {
              display: flex;
              font-size: 20px;
              flex-direction: row;
            }
            .home-thq-branch-location-elm19 {
              display: flex;
              font-size: 20px;
              flex-direction: row;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
