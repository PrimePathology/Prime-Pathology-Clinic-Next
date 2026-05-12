import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Hospital = (props) => {
  return (
    <>
      <div className="hospital-container1">
        <Head>
          <title>Hospital - Prime Pathology Clinic</title>
          <meta
            property="og:title"
            content="Hospital - Prime Pathology Clinic"
          />
          <meta
            property="og:description"
            content="Transforming healthcare with precision. Prime Pathology Clinic combines cutting-edge clinical testing with expert care to ensure reliable treatment for every patient."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8c302082-e6ba-41a0-9529-d6bf5ec33a06/2ed90a87-a0c5-42e0-91f2-87bf9dd64e29?org_if_sml=1&amp;force_format=original"
          />
          <link rel="canonical" href="https://patho.teleporthq.site/hospital" />
          <meta
            property="og:url"
            content="https://patho.teleporthq.site/hospital"
          />
        </Head>
        <Navigation></Navigation>
        <div id="mobile-menu-overlay" className="mobile-overlay">
          <div className="mobile-menu-content">
            <button id="mobile-menu-close" className="menu-close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M9 16l3-3l3 3"></path>
                </g>
              </svg>
            </button>
            <div className="mobile-links">
              <a href="#">
                <div className="page-mobile-link">
                  <span>Home</span>
                </div>
              </a>
              <a href="#">
                <div className="page-mobile-link">
                  <span>About</span>
                </div>
              </a>
              <a href="#">
                <div className="page-mobile-link">
                  <span>Services</span>
                </div>
              </a>
              <a href="#">
                <div className="page-mobile-link">
                  <span>Tests</span>
                </div>
              </a>
              <a href="#">
                <div className="page-mobile-link">
                  <span>Team</span>
                </div>
              </a>
              <a href="#">
                <div className="page-mobile-link">
                  <span>Contact</span>
                </div>
              </a>
            </div>
            <button className="btn btn-primary btn-lg">Get Diagnosis</button>
          </div>
        </div>
        <section className="page-intro-section">
          <div className="intro-container">
            <h2 className="intro-title section-title">
              Clinical &amp; Hospital Department
            </h2>
            <div className="intro-content">
              <p className="section-content">
                Our Clinical and Hospital Departments represent the core of our
                integrated healthcare delivery system. By bridging the gap
                between advanced diagnostic precision and compassionate bedside
                care, we ensure a seamless patient journey from initial
                consultation to full recovery. We operate with a commitment to
                clinical excellence, utilizing a multidisciplinary approach
                where specialists across all divisions collaborate to achieve
                the best possible patient outcomes.
              </p>
            </div>
          </div>
        </section>
        <section className="pillars-section">
          <div className="pillars-container">
            <div className="pillar-item">
              <div className="pillar-image-wrapper">
                <img
                  src="https://images.pexels.com/photos/30688589/pexels-photo-30688589.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="African healthcare professional checking patient"
                  className="pillar-img"
                />
                <div className="pillar-icon-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M12 7v4m2 10v-3a2 2 0 0 0-4 0v3m4-12h-4"></path>
                      <path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"></path>
                      <path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="pillar-text">
                <h2 className="section-title">General Hospital Services</h2>
                <p className="section-content">
                  {' '}
                  Our General Hospital Services division is the core of our
                  inpatient care and emergency response infrastructure. We
                  provide comprehensive medical management for patients
                  requiring hospitalization, ensuring that every individual
                  receives round-the-clock monitoring and specialized nursing
                  care tailored to their recovery needs. From acute illness
                  management to post-operative recovery, our facilities are
                  equipped with the latest medical technologies to maintain the
                  highest standards of safety and clinical efficacy.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <p className="section-content">
                  {' '}
                  Beyond inpatient care, this department manages our 24/7
                  emergency response unit, designed to handle critical medical
                  situations with speed and precision. Our multi-disciplinary
                  teams of doctors and specialists work in tandem to stabilize
                  patients and implement life-saving interventions. The core
                  hospital infrastructure is built to support complex medical
                  workflows, ensuring seamless coordination between emergency
                  admission, diagnostic assessment, and long-term clinical
                  management.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="pillar-item pillar-reverse">
              <div className="pillar-image-wrapper">
                <img
                  src="https://images.pexels.com/photos/6129040/pexels-photo-6129040.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Doctor consulting with patient in modern clinic"
                  className="pillar-img"
                />
                <div className="pillar-icon-box accent-red">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    >
                      <path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87q.11.06.22.127c.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a8 8 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a7 7 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a7 7 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a7 7 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124q.108-.066.22-.128c.332-.183.582-.495.644-.869z"></path>
                      <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="pillar-text">
                <h2 className="section-title">Medical &amp; Dental Practice</h2>
                <p className="section-content">
                  {' '}
                  The Medical &amp; Dental Practice at Prime Pathology Clinic
                  focuses on outpatient consultations and specialized medical
                  expertise. We offer a wide range of primary and specialty care
                  services, ranging from internal medicine and family health to
                  highly specialized surgical consultations. Our approach is
                  rooted in preventive medicine, ensuring that patients receive
                  comprehensive oral healthcare and general medical screenings
                  designed to detect potential health issues before they
                  escalate.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <p className="section-content">
                  {' '}
                  Our dental division provides world-class oral healthcare
                  services, including restorative procedures, orthodontics, and
                  preventive dental hygiene. Utilizing advanced digital imaging
                  and minimally invasive techniques, our dental surgeons ensure
                  patient comfort and long-term oral health. By integrating
                  medical and dental expertise under one roof, we provide a
                  holistic healthcare experience that addresses the
                  interconnected nature of systemic and oral health for patients
                  of all ages.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="pillar-item">
              <div className="pillar-image-wrapper">
                <img
                  src="https://images.pexels.com/photos/7089013/pexels-photo-7089013.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Advanced MRI scanner in a modern medical facility"
                  className="pillar-img"
                />
                <div className="pillar-icon-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18h8M3 22h18m-7 0a7 7 0 1 0 0-14h-1m-4 6h2m-2-2a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Zm3-6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="pillar-text">
                <h2 className="section-title">Prime Diagnostic Center</h2>
                <p className="section-content">
                  {' '}
                  The Prime Diagnostic Center is the technological heart of our
                  clinic, specializing in advanced laboratory testing and
                  medical imaging. We utilize state-of-the-art precision
                  screening technologies, including high-resolution MRI, CT
                  scans, and digital X-rays, to provide clinicians with clear
                  and accurate insights into patient health. Our imaging
                  department is staffed by expert radiologists who ensure that
                  every scan is interpreted with the highest degree of
                  diagnostic accuracy.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <p className="section-content">
                  {' '}
                  Our pathology laboratory is equipped with automated diagnostic
                  machines capable of handling complex biochemical,
                  hematological, and molecular analyses. By adhering to
                  international laboratory standards, we guarantee fast
                  turnaround times without compromising on the reliability of
                  results. Whether it is routine blood work or advanced genetic
                  screening, the Prime Diagnostic Center provides the critical
                  data needed for effective clinical decision-making and
                  personalized treatment planning.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="hospital-container2">
          <div className="hospital-container3">
            <Script
              html={`<style>
        @keyframes fadeInUp {to {opacity: 1;
transform: translateY(0);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="hospital-container4">
          <div className="hospital-container5">
            <Script
              html={`<script defer data-name="prime-pathology-logic">
(function(){
  // Mobile Menu Logic
  const mobileTrigger = document.getElementById("mobile-menu-trigger")
  const mobileClose = document.getElementById("mobile-menu-close")
  const mobileOverlay = document.getElementById("mobile-menu-overlay")

  if (mobileTrigger && mobileOverlay) {
    mobileTrigger.addEventListener("click", () => {
      mobileOverlay.classList.add("active")
      document.body.style.overflow = "hidden"
    })
  }

  if (mobileClose && mobileOverlay) {
    mobileClose.addEventListener("click", () => {
      mobileOverlay.classList.remove("active")
      document.body.style.overflow = ""
    })
  }

  // Close menu on backdrop click
  mobileOverlay?.addEventListener("click", (e) => {
    if (e.target === mobileOverlay) {
      mobileOverlay.classList.remove("active")
      document.body.style.overflow = ""
    }
  })

  // Intersection Observer for Scroll Reveals
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up")
        revealObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Apply to pillars and intro
  document.querySelectorAll(".pillar-item, .intro-container, .footer-col").forEach((el) => {
    revealObserver.observe(el)
  })

  // Parallax Effect for Pillar Images
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    document.querySelectorAll(".pillar-img").forEach((img) => {
      const speed = 0.05
      const rect = img.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const yPos = -(rect.top * speed)
        img.style.transform = \`scale(1.1) translateY(\${yPos}px)\`
      }
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
          .hospital-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .hospital-container2 {
            display: none;
          }
          .hospital-container3 {
            display: contents;
          }
          .hospital-container4 {
            display: none;
          }
          .hospital-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Hospital
