import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
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
        <div className="home-container2">
          <div className="home-container3">
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
                <h2 className="section-title">A Vision for Health</h2>
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
        <section className="management-team">
          <div className="team-header">
            <h2 className="section-title">Our Departments</h2>
            <p className="section-content">
              Guided by world-class scientists and healthcare professionals.
            </p>
          </div>
          <div className="team-grid">
            <div className="team-member">
              <img
                alt="Chief Pathologist"
                src="https://images.pexels.com/photos/8442620/pexels-photo-8442620.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="member-img"
              />
              <div className="member-info">
                <h3 className="section-subtitle">Dr. Sarah Mensah</h3>
                <p className="member-role">Chief Pathologist</p>
                <div className="member-bio">
                  <span>
                    Expert in cellular pathology with over 15 years of clinical
                    experience.
                  </span>
                </div>
              </div>
            </div>
            <div className="team-member">
              <img
                alt="Senior Lab Scientist"
                src="https://images.pexels.com/photos/9574332/pexels-photo-9574332.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="member-img"
              />
              <div className="member-info">
                <h3 className="section-subtitle">Kofi Boateng</h3>
                <p className="member-role">Senior Lab Scientist</p>
                <div className="member-bio">
                  <span>
                    Leading our molecular diagnostics and DNA sequencing
                    department.
                  </span>
                </div>
              </div>
            </div>
            <div className="team-member">
              <img
                alt="Operations Director"
                src="https://images.pexels.com/photos/9574542/pexels-photo-9574542.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="member-img"
              />
              <div className="member-info">
                <h3 className="section-subtitle">Layla Al-Fassi</h3>
                <p className="member-role">Operations Director</p>
                <div className="member-bio">
                  <span>
                    Streamlining laboratory workflows for maximum efficiency and
                    accuracy.
                  </span>
                </div>
              </div>
            </div>
            <div className="team-member">
              <img
                alt="Microbiology Lead"
                src="https://images.pexels.com/photos/6129879/pexels-photo-6129879.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="member-img"
              />
              <div className="member-info">
                <h3 className="section-subtitle">Dr. Omar Benani</h3>
                <p className="member-role">Microbiology Lead</p>
                <div className="member-bio">
                  <span>
                    Specializing in infectious disease screening and antibiotic
                    sensitivity.
                  </span>
                </div>
              </div>
            </div>
            <div className="team-member">
              <img
                alt="Quality Assurance"
                src="https://images.pexels.com/photos/8442371/pexels-photo-8442371.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="member-img"
              />
              <div className="member-info">
                <h3 className="section-subtitle">Elena Vance</h3>
                <p className="member-role">Quality Assurance</p>
                <div className="member-bio">
                  <span>
                    Ensuring every test meets international ISO and medical
                    standards.
                  </span>
                </div>
              </div>
            </div>
            <div className="team-member">
              <img
                alt="Technical Supervisor"
                src="https://images.pexels.com/photos/5726811/pexels-photo-5726811.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="member-img"
              />
              <div className="member-info">
                <h3 className="section-subtitle">Tunde Adeyemi</h3>
                <p className="member-role">Technical Supervisor</p>
                <div className="member-bio">
                  <span>
                    Managing advanced diagnostic equipment and laboratory
                    automation.
                  </span>
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
        <div className="home-container4">
          <div className="home-container5">
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
        <div className="home-container6">
          <div className="home-container7">
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
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-thq-signature-title-elm1 {
            color: var(--color-accent);
            font-family: 'Inter';
          }
          .home-thq-parallax-slide-elm {
            background-image: url('https://images.pexels.com/photos/5726797/pexels-photo-5726797.jpeg?auto=compress&cs=tinysrgb&w=1500');
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
          .home-container6 {
            display: none;
          }
          .home-container7 {
            display: contents;
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
