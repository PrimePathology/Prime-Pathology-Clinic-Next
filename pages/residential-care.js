import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const ResidentialCare = (props) => {
  return (
    <>
      <div className="residential-care-container1">
        <Head>
          <title>ResidentialCare - Prime Pathology Clinic</title>
          <meta
            property="og:title"
            content="ResidentialCare - Prime Pathology Clinic"
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
            href="https://patho.teleporthq.site/residential-care"
          />
          <meta
            property="og:url"
            content="https://patho.teleporthq.site/residential-care"
          />
        </Head>
        <Navigation></Navigation>
        <div className="residential-care-container2">
          <div className="residential-care-container3">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
.hero-float, .approach-lab-viz__orbit, .approach-lab-viz__node--1, .approach-lab-viz__node--2, .approach-lab-viz__node--3, .partners-slider__track {
  animation: none;
}
.hero-section__badge, .hero-section__headline, .hero-section__subtext, .hero-section__cta-row, .hero-section__stats {
  animation: none;
  opacity: 1;
  transform: none;
}
.intro-section__img, .service-card__img, .equipment-card__img, .team-card__img, .warroom-gallery-item__img, .ceo-section__img {
  transition: none;
}
.why-card, .service-card, .who-card, .team-card, .cert-badge {
  transition: none;
}
.reveal-on-scroll {
  opacity: 1;
  transform: none;
  transition: none;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <section
          aria-label="Residential Care Hero"
          className="page-hero-section1"
        >
          <div className="hero-section__bg-media">
            <img
              alt="Medical laboratory professionals working"
              src="https://images.pexels.com/photos/8442102/pexels-photo-8442102.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="hero-section__bg-img"
            />
            <div className="hero-section__overlay"></div>
          </div>
          <div aria-hidden="true" className="hero-section__floating-elements">
            <div className="hero-float--1 hero-float"></div>
            <div className="hero-float hero-float--2"></div>
            <div className="hero-float hero-float--3"></div>
            <div className="hero-float--4 hero-float"></div>
            <div className="hero-float hero-float--5"></div>
          </div>
          <div className="hero-section__content">
            <div className="hero-section__badge">
              <svg
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path d="m9 12l2 2l4-4"></path>
              </svg>
              <span>ISO Certified Laboratory</span>
            </div>
            <h1 className="hero-section__headline hero-title">
              Advanced Diagnostic &amp; Pathology Services You Can Trust
            </h1>
            <p className="hero-section__subtext hero-subtitle">
              Delivering world-class pathology and diagnostic services with
              precision, compassion, and cutting-edge technology — trusted by
              thousands of patients and medical professionals.
            </p>
            <div className="hero-section__cta-row">
              <a href="#application-form">
                <div className="btn-accent btn btn-lg">
                  <span>Apply Today</span>
                </div>
              </a>
              <a href="#services-carousel">
                <div className="btn hero-section__btn-ghost btn-outline">
                  <span>Explore Services</span>
                </div>
              </a>
            </div>
            <div className="hero-section__stats">
              <div className="hero-section__stat">
                <span className="hero-section__stat-num">15K+</span>
                <span className="hero-section__stat-label">Tests Done</span>
              </div>
              <div
                aria-hidden="true"
                className="hero-section__stat-divider"
              ></div>
              <div className="hero-section__stat">
                <span className="hero-section__stat-num">98%</span>
                <span className="hero-section__stat-label">Accuracy Rate</span>
              </div>
              <div
                aria-hidden="true"
                className="hero-section__stat-divider"
              ></div>
              <div className="hero-section__stat">
                <span className="hero-section__stat-num">50+</span>
                <span className="hero-section__stat-label">Specialists</span>
              </div>
            </div>
          </div>
        </section>
        <section aria-labelledby="intro-heading" className="intro-section">
          <div className="intro-section__inner">
            <div className="intro-section__image-col">
              <div className="intro-section__img-frame">
                <img
                  alt="Caregiver warmly interacting with a resident in a comfortable care setting"
                  src="https://images.pexels.com/photos/18459209/pexels-photo-18459209.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                  className="intro-section__img"
                />
                <div aria-hidden="true" className="intro-section__img-badge">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
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
                  <span>24/7 Care</span>
                </div>
              </div>
            </div>
            <div className="intro-section__text-col">
              <div className="intro-section__label">
                <span>Compassionate Living</span>
              </div>
              <h2
                id="intro-heading"
                className="section-title intro-section__heading"
              >
                What is Residential Care?
              </h2>
              <p className="intro-section__body section-content">
                Residential care is a comprehensive, 24/7 supported living
                solution designed to provide individuals with the assistance
                they need in a warm, home-like environment. Unlike traditional
                hospital settings, our residential care facilities are built
                around the individual — ensuring dignity, comfort, and
                meaningful daily experiences.
              </p>
              <p className="intro-section__body section-content">
                Our dedicated team of healthcare professionals, compassionate
                caregivers, and support staff work around the clock to ensure
                that every resident receives personalized attention. From daily
                personal care to specialized medical support, we tailor every
                aspect of life at our facility to meet each resident&apos;s
                unique needs and preferences.
              </p>
              <p className="intro-section__body section-content">
                Whether you or a loved one needs ongoing nursing support, help
                with daily activities, or a safe and enriching community
                environment, our residential care program offers a trusted,
                professional, and deeply empathetic solution that feels like
                home.
              </p>
              <a href="#application-form">
                <div className="btn btn-primary intro-section__cta">
                  <span>Learn More &amp; Apply</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section
          aria-labelledby="approach-heading"
          className="page-approach-section"
        >
          <div className="approach-section__inner">
            <div className="approach-section__text-col">
              <div className="approach-section__label">
                <span>Our Methodology</span>
              </div>
              <h2
                id="approach-heading"
                className="section-title approach-section__heading"
              >
                Our Treatment Approach
              </h2>
              <p className="approach-section__body section-content">
                In designing medical services for our clients and patients, we
                use standard pathology laboratory processes that assist
                consultants in carrying out tentative diagnosis to ensure
                reliable and effective treatment.
              </p>
              <div className="approach-section__points">
                <div className="approach-section__point">
                  <span className="approach-section__point-icon">
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
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
                  </span>
                  <span>Evidence-based diagnostic protocols</span>
                </div>
                <div className="approach-section__point">
                  <span className="approach-section__point-icon">
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
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
                  </span>
                  <span>Integrated lab-to-consultant communication</span>
                </div>
                <div className="approach-section__point">
                  <span className="approach-section__point-icon">
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
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
                  </span>
                  <span>Rapid turnaround with quality assurance</span>
                </div>
                <div className="approach-section__point">
                  <span className="approach-section__point-icon">
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
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
                  </span>
                  <span>Patient-centered reporting and follow-up</span>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="approach-section__visual-col">
              <div className="approach-lab-viz">
                <div className="approach-lab-viz__center">
                  <svg
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
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
                <div className="approach-lab-viz__orbit--1 approach-lab-viz__orbit">
                  <div className="approach-lab-viz__node approach-lab-viz__node--1">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="approach-lab-viz__orbit--2 approach-lab-viz__orbit">
                  <div className="approach-lab-viz__node approach-lab-viz__node--2">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path d="m9 12l2 2l4-4"></path>
                    </svg>
                  </div>
                </div>
                <div className="approach-lab-viz__orbit approach-lab-viz__orbit--3">
                  <div className="approach-lab-viz__node approach-lab-viz__node--3">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
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
                </div>
                <div className="approach-lab-viz__step-row">
                  <div className="approach-lab-viz__step">
                    <span className="approach-lab-viz__step-num">01</span>
                    <span>Sample</span>
                  </div>
                  <div className="approach-lab-viz__step-arrow"></div>
                  <div className="approach-lab-viz__step">
                    <span className="approach-lab-viz__step-num">02</span>
                    <span>Analysis</span>
                  </div>
                  <div className="approach-lab-viz__step-arrow"></div>
                  <div className="approach-lab-viz__step">
                    <span className="approach-lab-viz__step-num">03</span>
                    <span>Results</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section aria-labelledby="why-heading" className="why-section">
          <div className="why-section__inner">
            <div className="why-section__header">
              <div className="why-section__label">
                <span>Our Strengths</span>
              </div>
              <h2 id="why-heading" className="section-title why-section__title">
                Why You Should Engage Us
              </h2>
              <p className="section-content why-section__subtitle">
                We combine expertise, scale, and innovation to deliver
                diagnostic excellence for every patient.
              </p>
            </div>
            <div className="why-section__cards">
              <article aria-label="Professionalism" className="page-why-card">
                <div className="why-card__icon-wrap">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
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
                <h3 className="why-card__title">Professionalism</h3>
                <p className="why-card__body section-content">
                  We uphold the highest standards of medical ethics and conduct.
                  Our team comprises qualified doctors, scientists, and
                  certified lab specialists dedicated to excellence in every
                  test and result we deliver.
                </p>
                <div className="why-card__detail">
                  <span className="why-card__detail-item">
                    High Ethics &amp; Conduct
                  </span>
                  <span className="why-card__detail-item">
                    Qualified Doctors &amp; Scientists
                  </span>
                </div>
                <div aria-hidden="true" className="why-card__glow"></div>
              </article>
              <article
                aria-label="Scalability"
                className="why-card--featured page-why-card"
              >
                <div className="why-card__icon-wrap">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="why-card__featured-badge">
                  <span>Most Valued</span>
                </div>
                <h3 className="why-card__title">Scalability</h3>
                <p className="why-card__body section-content">
                  Our facility is purpose-built to handle multiple diagnoses
                  simultaneously without compromising on quality. Whether you
                  are a single patient or a partnering hospital, we scale to
                  meet your demand efficiently and accurately.
                </p>
                <div className="why-card__detail">
                  <span className="why-card__detail-item">
                    Multiple Simultaneous Diagnoses
                  </span>
                  <span className="why-card__detail-item">
                    High Volume Throughput
                  </span>
                </div>
                <div aria-hidden="true" className="why-card__glow"></div>
              </article>
              <article
                aria-label="Competence and Value"
                className="page-why-card"
              >
                <div className="why-card__icon-wrap">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                      <circle r="6" cx="12" cy="8"></circle>
                    </g>
                  </svg>
                </div>
                <h3 className="why-card__title">Competence &amp; Value</h3>
                <p className="why-card__body section-content">
                  We believe in partnership-driven care, combining advanced
                  technology with human expertise to deliver value beyond
                  testing. Our results empower consultants to make confident
                  treatment decisions for every patient.
                </p>
                <div className="why-card__detail">
                  <span className="why-card__detail-item">
                    Advanced Technology
                  </span>
                  <span className="why-card__detail-item">
                    Partnership-Driven Care
                  </span>
                </div>
                <div aria-hidden="true" className="why-card__glow"></div>
              </article>
            </div>
          </div>
        </section>
        <section
          id="services-carousel"
          aria-labelledby="services-heading"
          className="page-services-section"
        >
          <div className="services-section__inner">
            <div className="services-section__header">
              <div className="services-section__label">
                <span>What We Offer</span>
              </div>
              <h2
                id="services-heading"
                className="section-title services-section__title"
              >
                Our Core Services
              </h2>
              <p className="services-section__subtitle section-content">
                Comprehensive diagnostics powered by cutting-edge technology and
                expert pathologists.
              </p>
            </div>
            <div
              id="servicesCarousel"
              aria-label="Services carousel"
              className="page-services-carousel"
            >
              <div id="servicesTrack" className="services-carousel__track">
                <article
                  aria-label="Blood Tests"
                  className="page-service-card2"
                >
                  <div className="service-card__img-wrap">
                    <img
                      alt="Blood test samples being handled in laboratory"
                      src="https://images.pexels.com/photos/8460340/pexels-photo-8460340.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                      loading="lazy"
                      className="service-card__img"
                    />
                    <div className="service-card__img-overlay"></div>
                  </div>
                  <div className="service-card__body">
                    <div className="service-card__icon">
                      <svg
                        width="28"
                        xmlns="http://www.w3.org/2000/svg"
                        height="28"
                        viewBox="0 0 24 24"
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
                    <h3 className="service-card__title">Blood Tests</h3>
                    <p className="service-card__desc section-content">
                      Complete blood count, metabolic panels, hormone levels,
                      and specialized hematology analysis performed with
                      clinical precision.
                    </p>
                    <a href="#">
                      <div
                        aria-label="Learn more about Blood Tests"
                        className="service-card__link"
                      >
                        <span>
                          {' '}
                          Learn More
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <svg
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
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
                      </div>
                    </a>
                  </div>
                </article>
                <article
                  aria-label="DNA Testing"
                  className="page-service-card2"
                >
                  <div className="service-card__img-wrap">
                    <img
                      alt="DNA testing microscope and vials in laboratory"
                      src="https://images.pexels.com/photos/8442033/pexels-photo-8442033.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                      loading="lazy"
                      className="service-card__img"
                    />
                    <div className="service-card__img-overlay"></div>
                  </div>
                  <div className="service-card__body">
                    <div className="service-card__icon">
                      <svg
                        width="28"
                        xmlns="http://www.w3.org/2000/svg"
                        height="28"
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
                    <h3 className="service-card__title">DNA Testing</h3>
                    <p className="service-card__desc section-content">
                      Advanced genetic profiling and DNA analysis for paternity,
                      ancestry, disease risk assessment, and pharmacogenomics.
                    </p>
                    <a href="#">
                      <div
                        aria-label="Learn more about DNA Testing"
                        className="service-card__link"
                      >
                        <span>
                          {' '}
                          Learn More
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <svg
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
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
                      </div>
                    </a>
                  </div>
                </article>
                <article
                  aria-label="Infection Screening"
                  className="page-service-card2"
                >
                  <div className="service-card__img-wrap">
                    <img
                      alt="Scientist with protective gear doing infection screening"
                      src="https://images.pexels.com/photos/9574332/pexels-photo-9574332.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                      loading="lazy"
                      className="service-card__img"
                    />
                    <div className="service-card__img-overlay"></div>
                  </div>
                  <div className="service-card__body">
                    <div className="service-card__icon">
                      <svg
                        width="28"
                        xmlns="http://www.w3.org/2000/svg"
                        height="28"
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
                    <h3 className="service-card__title">Infection Screening</h3>
                    <p className="service-card__desc section-content">
                      Rapid and comprehensive screening for bacterial, viral,
                      and fungal infections with PCR and culture-based
                      methodologies.
                    </p>
                    <a href="#">
                      <div
                        aria-label="Learn more about Infection Screening"
                        className="service-card__link"
                      >
                        <span>
                          {' '}
                          Learn More
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <svg
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
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
                      </div>
                    </a>
                  </div>
                </article>
                <article
                  aria-label="Histopathology"
                  className="page-service-card2"
                >
                  <div className="service-card__img-wrap">
                    <img
                      alt="Pathologist using microscope for histopathology"
                      src="https://images.pexels.com/photos/6129879/pexels-photo-6129879.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                      loading="lazy"
                      className="service-card__img"
                    />
                    <div className="service-card__img-overlay"></div>
                  </div>
                  <div className="service-card__body">
                    <div className="service-card__icon">
                      <svg
                        width="28"
                        xmlns="http://www.w3.org/2000/svg"
                        height="28"
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
                    <h3 className="service-card__title">Histopathology</h3>
                    <p className="service-card__desc section-content">
                      Expert tissue analysis and biopsy interpretation for
                      cancer diagnosis, organ disease assessment, and surgical
                      pathology reports.
                    </p>
                    <a href="#">
                      <div
                        aria-label="Learn more about Histopathology"
                        className="service-card__link"
                      >
                        <span>
                          {' '}
                          Learn More
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <svg
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
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
                      </div>
                    </a>
                  </div>
                </article>
              </div>
              <div
                aria-label="Carousel navigation"
                className="services-carousel__controls"
              >
                <button
                  id="carouselPrev"
                  aria-label="Previous service"
                  className="services-carousel__btn services-carousel__btn--prev"
                >
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
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
                <div
                  id="carouselDots"
                  aria-label="Slide indicators"
                  className="services-carousel__dots"
                >
                  <button
                    aria-label="Go to slide 1"
                    className="services-carousel__dot--active services-carousel__dot"
                  ></button>
                  <button
                    aria-label="Go to slide 2"
                    className="services-carousel__dot"
                  ></button>
                  <button
                    aria-label="Go to slide 3"
                    className="services-carousel__dot"
                  ></button>
                  <button
                    aria-label="Go to slide 4"
                    className="services-carousel__dot"
                  ></button>
                </div>
                <button
                  id="carouselNext"
                  aria-label="Next service"
                  className="services-carousel__btn services-carousel__btn--next"
                >
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
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
          </div>
        </section>
        <section aria-labelledby="who-heading" className="who-section">
          <div className="who-section__inner">
            <div className="who-section__header">
              <div className="who-section__label">
                <span>Residential Care</span>
              </div>
              <h2 id="who-heading" className="section-title who-section__title">
                Who Is It For?
              </h2>
              <p className="who-section__subtitle section-content">
                Our residential care is tailored for individuals with diverse
                needs — providing the right level of support in a compassionate,
                safe environment.
              </p>
            </div>
            <div className="who-section__cards">
              <article className="who-card">
                <div className="who-card__icon-wrap">
                  <svg
                    width="36"
                    xmlns="http://www.w3.org/2000/svg"
                    height="36"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle r="4" cx="12" cy="7"></circle>
                    </g>
                  </svg>
                </div>
                <div aria-hidden="true" className="who-card__number">
                  <span>01</span>
                </div>
                <h3 className="who-card__title">
                  Seniors Requiring Daily Assistance
                </h3>
                <p className="who-card__body section-content">
                  Elderly individuals who need help with daily activities such
                  as bathing, dressing, medication management, and mobility
                  support in a warm, dignified residential setting.
                </p>
              </article>
              <article className="who-card who-card--accent">
                <div className="who-card__icon-wrap">
                  <svg
                    width="36"
                    xmlns="http://www.w3.org/2000/svg"
                    height="36"
                    viewBox="0 0 24 24"
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
                <div aria-hidden="true" className="who-card__number">
                  <span>02</span>
                </div>
                <h3 className="who-card__title">
                  Individuals with Physical Disabilities
                </h3>
                <p className="who-card__body section-content">
                  Adults with physical disabilities who require specialized
                  equipment, adapted living spaces, and skilled nursing care to
                  live independently within a supported community.
                </p>
              </article>
              <article className="who-card">
                <div className="who-card__icon-wrap">
                  <svg
                    width="36"
                    xmlns="http://www.w3.org/2000/svg"
                    height="36"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                      <circle r="6" cx="12" cy="8"></circle>
                    </g>
                  </svg>
                </div>
                <div aria-hidden="true" className="who-card__number">
                  <span>03</span>
                </div>
                <h3 className="who-card__title">
                  Specialized Respite Care Needs
                </h3>
                <p className="who-card__body section-content">
                  Individuals or families seeking short-term or long-term
                  respite care with professional nursing oversight, allowing
                  primary caregivers to rest while loved ones receive quality
                  residential support.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section aria-labelledby="deliver-heading" className="deliver-section">
          <div className="deliver-section__inner">
            <div className="deliver-section__header">
              <div className="deliver-section__label">
                <span>Our Process</span>
              </div>
              <h2
                id="deliver-heading"
                className="section-title deliver-section__title"
              >
                How We Deliver Care
              </h2>
              <p className="deliver-section__subtitle section-content">
                A structured, compassionate, and evidence-based approach to
                residential care that puts the resident first at every step.
              </p>
            </div>
            <div className="deliver-steps">
              <div className="deliver-step">
                <div aria-hidden="true" className="deliver-step__number">
                  <span>1</span>
                </div>
                <div
                  aria-hidden="true"
                  className="deliver-step__connector"
                ></div>
                <div className="deliver-step__content">
                  <div className="deliver-step__icon">
                    <svg
                      width="28"
                      xmlns="http://www.w3.org/2000/svg"
                      height="28"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                        <path d="M14 2v5a1 1 0 0 0 1 1h5m-5 4H9m6 4H9m2-8H9"></path>
                      </g>
                    </svg>
                  </div>
                  <h3 className="deliver-step__title">
                    Personalized Care Plans
                  </h3>
                  <p className="deliver-step__body section-content">
                    Every resident receives a fully individualized care plan
                    developed by our clinical team in consultation with the
                    resident and their family. We assess medical history, daily
                    needs, preferences, and goals to build a roadmap that
                    supports well-being at every level.
                  </p>
                </div>
              </div>
              <div className="deliver-step">
                <div aria-hidden="true" className="deliver-step__number">
                  <span>2</span>
                </div>
                <div
                  aria-hidden="true"
                  className="deliver-step__connector"
                ></div>
                <div className="deliver-step__content">
                  <div className="deliver-step__icon">
                    <svg
                      width="28"
                      xmlns="http://www.w3.org/2000/svg"
                      height="28"
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
                  <h3 className="deliver-step__title">Skilled Nursing Staff</h3>
                  <p className="deliver-step__body section-content">
                    Our team of registered nurses, care assistants, and
                    specialist therapists provides round-the-clock professional
                    care. Each staff member is trained in geriatric care,
                    disability support, and emergency response to ensure
                    residents are always safe and well-cared for.
                  </p>
                </div>
              </div>
              <div className="deliver-step">
                <div aria-hidden="true" className="deliver-step__number">
                  <span>3</span>
                </div>
                <div className="deliver-step__content">
                  <div className="deliver-step__icon">
                    <svg
                      width="28"
                      xmlns="http://www.w3.org/2000/svg"
                      height="28"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="deliver-step__title">Enrichment Activities</h3>
                  <p className="deliver-step__body section-content">
                    We believe that quality of life goes beyond medical care.
                    Our enrichment programs include social activities,
                    therapeutic exercises, arts and crafts, music sessions, and
                    community outings — all designed to foster joy, connection,
                    and a sense of purpose for every resident.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          aria-labelledby="equipment-heading"
          className="page-equipment-section"
        >
          <div className="equipment-section__inner">
            <div className="equipment-section__header">
              <div className="equipment-section__label">
                <span>Our Capabilities</span>
              </div>
              <h2
                id="equipment-heading"
                className="section-title equipment-section__title"
              >
                Lab Equipment &amp; Tests Showcase
              </h2>
              <p className="equipment-section__subtitle section-content">
                State-of-the-art instruments operated by certified professionals
                for precise, reliable diagnostics.
              </p>
            </div>
            <div className="page-equipment-grid1">
              <article
                aria-label="Microscopy Analysis"
                className="equipment-card--large page-equipment-card"
              >
                <img
                  alt="Female scientist using microscope in laboratory"
                  src="https://images.pexels.com/photos/9574398/pexels-photo-9574398.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                  className="equipment-card__img"
                />
                <div className="equipment-card__overlay">
                  <div className="equipment-card__tag">
                    <span>Microscopy</span>
                  </div>
                  <h3 className="equipment-card__title">
                    Advanced Microscopy Analysis
                  </h3>
                  <p className="equipment-card__desc section-content">
                    High-resolution optical and electron microscopes for
                    cellular-level diagnostics.
                  </p>
                </div>
              </article>
              <article
                aria-label="Centrifuge Processing"
                className="page-equipment-card"
              >
                <img
                  alt="Lab technician using centrifuge to process blood samples"
                  src="https://images.pexels.com/photos/6627661/pexels-photo-6627661.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                  className="equipment-card__img"
                />
                <div className="equipment-card__overlay">
                  <div className="equipment-card__tag">
                    <span>Centrifuge</span>
                  </div>
                  <h3 className="equipment-card__title">
                    High-Speed Centrifugation
                  </h3>
                  <p className="equipment-card__desc section-content">
                    Precision blood and sample separation for accurate component
                    analysis.
                  </p>
                </div>
              </article>
              <article
                aria-label="Diagnostic Machines"
                className="page-equipment-card"
              >
                <img
                  alt="Well-equipped laboratory with diagnostic equipment"
                  src="https://images.pexels.com/photos/8442033/pexels-photo-8442033.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                  className="equipment-card__img"
                />
                <div className="equipment-card__overlay">
                  <div className="equipment-card__tag">
                    <span>Diagnostics</span>
                  </div>
                  <h3 className="equipment-card__title">
                    Automated Diagnostic Systems
                  </h3>
                  <p className="equipment-card__desc section-content">
                    Computer-assisted diagnostic machines for rapid,
                    multi-parameter testing.
                  </p>
                </div>
              </article>
              <article
                aria-label="Reagent Laboratory"
                className="equipment-card--large page-equipment-card"
              >
                <img
                  alt="Two scientists working in laboratory with equipment"
                  src="https://images.pexels.com/photos/8533094/pexels-photo-8533094.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                  className="equipment-card__img"
                />
                <div className="equipment-card__overlay">
                  <div className="equipment-card__tag">
                    <span>Reagents &amp; Analysis</span>
                  </div>
                  <h3 className="equipment-card__title">
                    Reagent-Based Testing Lab
                  </h3>
                  <p className="equipment-card__desc section-content">
                    ISO-certified reagents and controlled reaction environments
                    for reliable test results.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section
          aria-labelledby="partners-heading"
          className="page-partners-section"
        >
          <div className="partners-section__inner">
            <div className="partners-section__header">
              <div className="partners-section__label">
                <span>Trusted By</span>
              </div>
              <h2
                id="partners-heading"
                className="partners-section__title section-title"
              >
                Our Partners &amp; Affiliates
              </h2>
            </div>
            <div
              aria-label="Partners and affiliates logos"
              className="page-partners-slider"
            >
              <div id="partnersTrack" className="partners-slider__track">
                <div className="page-partner-logo1">
                  <div className="partner-logo__inner">
                    <span>Lagos University Teaching Hospital</span>
                  </div>
                </div>
                <div className="page-partner-logo1">
                  <div className="partner-logo__inner">
                    <span>WHO Africa Regional Office</span>
                  </div>
                </div>
                <div className="page-partner-logo1">
                  <div className="partner-logo__inner">
                    <span>Cairo Medical Center</span>
                  </div>
                </div>
                <div className="page-partner-logo1">
                  <div className="partner-logo__inner">
                    <span>Abuja National Hospital</span>
                  </div>
                </div>
                <div className="page-partner-logo1">
                  <div className="partner-logo__inner">
                    <span>Tunis HealthLab</span>
                  </div>
                </div>
                <div className="page-partner-logo1">
                  <div className="partner-logo__inner">
                    <span>Rabat Clinique Royale</span>
                  </div>
                </div>
                <div className="page-partner-logo1">
                  <div className="partner-logo__inner">
                    <span>Africa CDC Network</span>
                  </div>
                </div>
                <div className="page-partner-logo1">
                  <div className="partner-logo__inner">
                    <span>MedPath International</span>
                  </div>
                </div>
                <div className="page-partner-logo1">
                  <div className="partner-logo__inner">
                    <span>Lagos University Teaching Hospital</span>
                  </div>
                </div>
                <div className="page-partner-logo1">
                  <div className="partner-logo__inner">
                    <span>WHO Africa Regional Office</span>
                  </div>
                </div>
                <div className="page-partner-logo1">
                  <div className="partner-logo__inner">
                    <span>Cairo Medical Center</span>
                  </div>
                </div>
                <div className="page-partner-logo1">
                  <div className="partner-logo__inner">
                    <span>Abuja National Hospital</span>
                  </div>
                </div>
                <div className="page-partner-logo1">
                  <div className="partner-logo__inner">
                    <span>Tunis HealthLab</span>
                  </div>
                </div>
                <div className="page-partner-logo1">
                  <div className="partner-logo__inner">
                    <span>Rabat Clinique Royale</span>
                  </div>
                </div>
                <div className="page-partner-logo1">
                  <div className="partner-logo__inner">
                    <span>Africa CDC Network</span>
                  </div>
                </div>
                <div className="page-partner-logo1">
                  <div className="partner-logo__inner">
                    <span>MedPath International</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          aria-labelledby="timeline-heading"
          className="timeline-section page-timeline-section"
        >
          <div className="timeline-section__inner">
            <div className="timeline-section__header">
              <div className="timeline-section__label">
                <span>Our Residential Care Journey</span>
              </div>
              <h2
                id="timeline-heading"
                className="section-title timeline-section__title"
              >
                Residential Care Timeline
              </h2>
              <p className="timeline-section__subtitle section-content">
                From the first inquiry to lifelong alumni support — every stage
                is personalized, dignified, and family-centered.
              </p>
            </div>
            <div className="timeline-accordion">
              <details open="true" className="page-timeline-item3">
                <summary className="timeline-item__summary">
                  <div aria-hidden="true" className="timeline-item__step-num">
                    <span>01</span>
                  </div>
                  <div className="timeline-item__header-content">
                    <div className="timeline-item__icon">
                      <svg
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                        height="22"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
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
                        </g>
                      </svg>
                    </div>
                    <span className="timeline-item__title">
                      Initial Inquiry &amp; Needs Assessment
                    </span>
                  </div>
                  <div aria-hidden="true" className="timeline-item__chevron">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m6 9l6 6l6-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </summary>
                <div className="timeline-item__body">
                  <p className="section-content">
                    Understanding individual needs, medical history, and
                    preferences through detailed consultations with families and
                    caregivers.
                  </p>
                </div>
              </details>
              <details className="page-timeline-item3">
                <summary className="timeline-item__summary">
                  <div aria-hidden="true" className="timeline-item__step-num">
                    <span>02</span>
                  </div>
                  <div className="timeline-item__header-content">
                    <div className="timeline-item__icon">
                      <svg
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                        height="22"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8L4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1l3 2l2 3l1-1v-3l3-2l3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <span className="timeline-item__title">
                      Personalized Care Plan Development
                    </span>
                  </div>
                  <div aria-hidden="true" className="timeline-item__chevron">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m6 9l6 6l6-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </summary>
                <div className="timeline-item__body">
                  <p className="section-content">
                    Crafting a tailored care strategy involving medical,
                    therapeutic, nutritional, and lifestyle requirements.
                  </p>
                </div>
              </details>
              <details className="page-timeline-item3">
                <summary className="timeline-item__summary">
                  <div aria-hidden="true" className="timeline-item__step-num">
                    <span>03</span>
                  </div>
                  <div className="timeline-item__header-content">
                    <div className="timeline-item__icon">
                      <svg
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                        height="22"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                          <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        </g>
                      </svg>
                    </div>
                    <span className="timeline-item__title">
                      Home Visit &amp; Environment Assessment
                    </span>
                  </div>
                  <div aria-hidden="true" className="timeline-item__chevron">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m6 9l6 6l6-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </summary>
                <div className="timeline-item__body">
                  <p className="section-content">
                    Evaluating the living space for safety, accessibility, and
                    comfort before admission.
                  </p>
                </div>
              </details>
              <details className="page-timeline-item3">
                <summary className="timeline-item__summary">
                  <div aria-hidden="true" className="timeline-item__step-num">
                    <span>04</span>
                  </div>
                  <div className="timeline-item__header-content">
                    <div className="timeline-item__icon">
                      <svg
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                        height="22"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <circle r="4" cx="9" cy="7"></circle>
                          <path d="M19 8v6m3-3h-6"></path>
                        </g>
                      </svg>
                    </div>
                    <span className="timeline-item__title">
                      Admission &amp; Onboarding
                    </span>
                  </div>
                  <div aria-hidden="true" className="timeline-item__chevron">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m6 9l6 6l6-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </summary>
                <div className="timeline-item__body">
                  <p className="section-content">
                    Welcoming residents with guided orientation, documentation,
                    and introduction to staff and routines.
                  </p>
                </div>
              </details>
              <details className="page-timeline-item3">
                <summary className="timeline-item__summary">
                  <div aria-hidden="true" className="timeline-item__step-num">
                    <span>05</span>
                  </div>
                  <div className="timeline-item__header-content">
                    <div className="timeline-item__icon">
                      <svg
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                        height="22"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle r="10" cx="12" cy="12"></circle>
                          <path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>
                        </g>
                      </svg>
                    </div>
                    <span className="timeline-item__title">
                      Orientation &amp; Settling In
                    </span>
                  </div>
                  <div aria-hidden="true" className="timeline-item__chevron">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m6 9l6 6l6-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </summary>
                <div className="timeline-item__body">
                  <p className="section-content">
                    Helping residents adapt through social integration,
                    familiarization with facilities, and emotional support.
                  </p>
                </div>
              </details>
              <details className="page-timeline-item3">
                <summary className="timeline-item__summary">
                  <div aria-hidden="true" className="timeline-item__step-num">
                    <span>06</span>
                  </div>
                  <div className="timeline-item__header-content">
                    <div className="timeline-item__icon">
                      <svg
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                        height="22"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                          <path d="M3.22 13H9.5l.5-1l2 4.5l2-7l1.5 3.5h5.27"></path>
                        </g>
                      </svg>
                    </div>
                    <span className="timeline-item__title">
                      Daily Living &amp; Personal Care Support
                    </span>
                  </div>
                  <div aria-hidden="true" className="timeline-item__chevron">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m6 9l6 6l6-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </summary>
                <div className="timeline-item__body">
                  <p className="section-content">
                    Assisting with bathing, dressing, mobility, meals, and
                    medication management with dignity.
                  </p>
                </div>
              </details>
              <details className="page-timeline-item3">
                <summary className="timeline-item__summary">
                  <div aria-hidden="true" className="timeline-item__step-num">
                    <span>07</span>
                  </div>
                  <div className="timeline-item__header-content">
                    <div className="timeline-item__icon">
                      <svg
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                        height="22"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M11 2v2M5 2v2m0-1H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
                          <path d="M8 15a6 6 0 0 0 12 0v-3"></path>
                          <circle r="2" cx="20" cy="10"></circle>
                        </g>
                      </svg>
                    </div>
                    <span className="timeline-item__title">
                      Health Monitoring &amp; Medical Oversight
                    </span>
                  </div>
                  <div aria-hidden="true" className="timeline-item__chevron">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m6 9l6 6l6-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </summary>
                <div className="timeline-item__body">
                  <p className="section-content">
                    Regular vital checks, chronic condition management, and
                    coordination with physicians.
                  </p>
                </div>
              </details>
              <details className="page-timeline-item3">
                <summary className="timeline-item__summary">
                  <div aria-hidden="true" className="timeline-item__step-num">
                    <span>08</span>
                  </div>
                  <div className="timeline-item__header-content">
                    <div className="timeline-item__icon">
                      <svg
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                        height="22"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <span className="timeline-item__title">
                      Therapeutic &amp; Rehabilitation Services
                    </span>
                  </div>
                  <div aria-hidden="true" className="timeline-item__chevron">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m6 9l6 6l6-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </summary>
                <div className="timeline-item__body">
                  <p className="section-content">
                    Physical, occupational, and speech therapy sessions tailored
                    to resident goals.
                  </p>
                </div>
              </details>
              <details className="page-timeline-item3">
                <summary className="timeline-item__summary">
                  <div aria-hidden="true" className="timeline-item__step-num">
                    <span>09</span>
                  </div>
                  <div className="timeline-item__header-content">
                    <div className="timeline-item__icon">
                      <svg
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                        height="22"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <circle r="4" cx="9" cy="7"></circle>
                        </g>
                      </svg>
                    </div>
                    <span className="timeline-item__title">
                      Social &amp; Recreational Engagement
                    </span>
                  </div>
                  <div aria-hidden="true" className="timeline-item__chevron">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m6 9l6 6l6-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </summary>
                <div className="timeline-item__body">
                  <p className="section-content">
                    Organized activities, community events, hobbies, and outings
                    to promote mental well-being.
                  </p>
                </div>
              </details>
              <details className="page-timeline-item3">
                <summary className="timeline-item__summary">
                  <div aria-hidden="true" className="timeline-item__step-num">
                    <span>10</span>
                  </div>
                  <div className="timeline-item__header-content">
                    <div className="timeline-item__icon">
                      <svg
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                        height="22"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20m14-7V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zm0 0v7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <span className="timeline-item__title">
                      Nutritional Planning &amp; Dietary Management
                    </span>
                  </div>
                  <div aria-hidden="true" className="timeline-item__chevron">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m6 9l6 6l6-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </summary>
                <div className="timeline-item__body">
                  <p className="section-content">
                    Customized meal plans accommodating medical diets,
                    allergies, and personal preferences.
                  </p>
                </div>
              </details>
              <details className="page-timeline-item3">
                <summary className="timeline-item__summary">
                  <div aria-hidden="true" className="timeline-item__step-num">
                    <span>11</span>
                  </div>
                  <div className="timeline-item__header-content">
                    <div className="timeline-item__icon">
                      <svg
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                        height="22"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <span className="timeline-item__title">
                      Regular Care Reviews &amp; Family Updates
                    </span>
                  </div>
                  <div aria-hidden="true" className="timeline-item__chevron">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m6 9l6 6l6-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </summary>
                <div className="timeline-item__body">
                  <p className="section-content">
                    Scheduled evaluations of care plans with transparent
                    communication to families.
                  </p>
                </div>
              </details>
              <details className="page-timeline-item3">
                <summary className="timeline-item__summary">
                  <div aria-hidden="true" className="timeline-item__step-num">
                    <span>12</span>
                  </div>
                  <div className="timeline-item__header-content">
                    <div className="timeline-item__icon">
                      <svg
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                        height="22"
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
                    <span className="timeline-item__title">
                      Specialized Interventions &amp; Crisis Response
                    </span>
                  </div>
                  <div aria-hidden="true" className="timeline-item__chevron">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m6 9l6 6l6-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </summary>
                <div className="timeline-item__body">
                  <p className="section-content">
                    Rapid response to emergencies, behavioral support, and
                    specialized medical interventions.
                  </p>
                </div>
              </details>
              <details className="page-timeline-item3">
                <summary className="timeline-item__summary">
                  <div aria-hidden="true" className="timeline-item__step-num">
                    <span>13</span>
                  </div>
                  <div className="timeline-item__header-content">
                    <div className="timeline-item__icon">
                      <svg
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                        height="22"
                        viewBox="0 0 24 24"
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
                    <span className="timeline-item__title">
                      Palliative &amp; End-of-Life Care
                    </span>
                  </div>
                  <div aria-hidden="true" className="timeline-item__chevron">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m6 9l6 6l6-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </summary>
                <div className="timeline-item__body">
                  <p className="section-content">
                    Compassionate, dignified support focusing on comfort, pain
                    management, and emotional care.
                  </p>
                </div>
              </details>
              <details className="page-timeline-item3">
                <summary className="timeline-item__summary">
                  <div aria-hidden="true" className="timeline-item__step-num">
                    <span>14</span>
                  </div>
                  <div className="timeline-item__header-content">
                    <div className="timeline-item__icon">
                      <svg
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                        height="22"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M5 12h14m-7-7l7 7l-7 7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <span className="timeline-item__title">
                      Discharge or Transition Planning
                    </span>
                  </div>
                  <div aria-hidden="true" className="timeline-item__chevron">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m6 9l6 6l6-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </summary>
                <div className="timeline-item__body">
                  <p className="section-content">
                    Preparing residents for return home or transfer to other
                    facilities with continuity of care.
                  </p>
                </div>
              </details>
              <details className="page-timeline-item3">
                <summary className="timeline-item__summary">
                  <div aria-hidden="true" className="timeline-item__step-num">
                    <span>15</span>
                  </div>
                  <div className="timeline-item__header-content">
                    <div className="timeline-item__icon">
                      <svg
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                        height="22"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <span className="timeline-item__title">
                      Post-Care Follow-Up &amp; Alumni Support
                    </span>
                  </div>
                  <div aria-hidden="true" className="timeline-item__chevron">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m6 9l6 6l6-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </summary>
                <div className="timeline-item__body">
                  <p className="section-content">
                    Ongoing check-ins, community access, and support even after
                    leaving the facility.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section
          aria-labelledby="warroom-heading"
          className="page-warroom-section"
        >
          <div className="warroom-section__bg-media">
            <img
              alt="Scientists actively working in laboratory"
              src="https://images.pexels.com/photos/8533094/pexels-photo-8533094.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              loading="lazy"
              className="warroom-section__bg-img"
            />
            <div className="warroom-section__overlay"></div>
          </div>
          <div className="warroom-section__content">
            <div aria-hidden="true" className="warroom-section__label">
              <span>Inside Our Lab</span>
            </div>
            <h2
              id="warroom-heading"
              className="section-title warroom-section__title"
            >
              The War Room — Lab Activity
            </h2>
            <p className="warroom-section__subtitle section-content">
              Where science meets urgency. Our lab is in constant motion —
              professionals working at the intersection of precision and speed
              to deliver life-changing results.
            </p>
            <div className="page-warroom-stats">
              <div className="warroom-stat">
                <div className="warroom-stat__num">
                  <span>24/7</span>
                </div>
                <div className="warroom-stat__label">
                  <span>Lab Operation</span>
                </div>
              </div>
              <div className="warroom-stat">
                <div className="warroom-stat__num">
                  <span>200+</span>
                </div>
                <div className="warroom-stat__label">
                  <span>Tests Daily</span>
                </div>
              </div>
              <div className="warroom-stat">
                <div className="warroom-stat__num">
                  <span>3 hrs</span>
                </div>
                <div className="warroom-stat__label">
                  <span>Avg. Turnaround</span>
                </div>
              </div>
              <div className="warroom-stat">
                <div className="warroom-stat__num">
                  <span>98%</span>
                </div>
                <div className="warroom-stat__label">
                  <span>Precision Rate</span>
                </div>
              </div>
            </div>
            <div className="warroom-section__gallery">
              <div className="warroom-gallery-item">
                <img
                  alt="Scientists in PPE conducting experiment"
                  src="https://images.pexels.com/photos/5726700/pexels-photo-5726700.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                  className="warroom-gallery-item__img"
                />
                <div className="warroom-gallery-item__caption">
                  <span>PCR Analysis Unit</span>
                </div>
              </div>
              <div className="warroom-gallery-item--wide warroom-gallery-item">
                <img
                  alt="Two scientists using microscope for sample analysis"
                  src="https://images.pexels.com/photos/8770716/pexels-photo-8770716.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                  className="warroom-gallery-item__img"
                />
                <div className="warroom-gallery-item__caption">
                  <span>Microscopy Division</span>
                </div>
              </div>
              <div className="warroom-gallery-item">
                <img
                  alt="Close-up of hands in gloves holding blood sample"
                  src="https://images.pexels.com/photos/6629363/pexels-photo-6629363.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                  className="warroom-gallery-item__img"
                />
                <div className="warroom-gallery-item__caption">
                  <span>Sample Processing</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="application-form"
          aria-labelledby="form-heading"
          className="application-section"
        >
          <div className="application-section__inner">
            <div className="application-section__header">
              <div className="application-section__label">
                <span>Get Started</span>
              </div>
              <h2
                id="form-heading"
                className="section-title application-section__title"
              >
                Residential Care Application
              </h2>
              <p className="application-section__subtitle section-content">
                Fill out the form below and our care coordination team will be
                in touch within 24 hours to discuss your needs.
              </p>
            </div>
            <div className="application-section__form-wrap">
              <form
                action="/submit"
                method="POST"
                data-form-id="dd924582-2f69-458f-aff3-9d03c245a64a"
                noValidate="true"
                className="application-form"
              >
                <div className="application-form__row">
                  <div className="application-form__group">
                    <label
                      htmlFor="fullName"
                      className="application-form__label"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required="true"
                      maxlength="100"
                      minlength="2"
                      placeholder="Enter your full name"
                      data-form-field-id="fullName"
                      className="application-form__input"
                    />
                  </div>
                  <div className="application-form__group">
                    <label
                      htmlFor="emailAddr"
                      className="application-form__label"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="emailAddr"
                      name="email"
                      required="true"
                      placeholder="your@email.com"
                      data-form-field-id="emailAddr"
                      className="application-form__input"
                    />
                  </div>
                </div>
                <div className="application-form__row">
                  <div className="application-form__group">
                    <label
                      htmlFor="phoneNum"
                      className="application-form__label"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phoneNum"
                      name="phone"
                      required="true"
                      placeholder="+234 000 000 0000"
                      data-form-field-id="phoneNum"
                      className="application-form__input"
                    />
                  </div>
                  <div className="application-form__group">
                    <label
                      htmlFor="careType"
                      className="application-form__label"
                    >
                      Type of Care Needed
                    </label>
                    <select
                      id="careType"
                      name="careType"
                      required="true"
                      data-form-field-id="careType"
                      className="application-form__select application-form__input"
                    >
                      <option value="true" disabled="true" selected="true">
                        Select care type
                      </option>
                      <option value="senior-daily">
                        Senior Daily Assistance
                      </option>
                      <option value="disability-support">
                        Physical Disability Support
                      </option>
                      <option value="respite">Respite Care</option>
                      <option value="nursing">Skilled Nursing Care</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>
                </div>
                <div className="application-form__group application-form__group--full">
                  <label htmlFor="notes" className="application-form__label">
                    Message / Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows="5"
                    maxlength="1000"
                    minlength="10"
                    placeholder="Tell us about your care needs, timeline, or any questions..."
                    data-form-field-id="notes"
                    className="application-form__input application-form__textarea"
                  ></textarea>
                </div>
                <div className="application-form__submit-row">
                  <button
                    id="thq_button_DjQr"
                    name="button"
                    type="submit"
                    data-form-field-id="thq_button_DjQr"
                    className="btn-accent btn btn-lg application-form__submit"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section aria-labelledby="map-heading" className="map-section">
          <div className="map-section__inner">
            <div className="map-section__header">
              <div className="map-section__label">
                <span>Find Us</span>
              </div>
              <h2 id="map-heading" className="section-title map-section__title">
                Visit Our Laboratory
              </h2>
              <p className="map-section__subtitle section-content">
                We have three locations serving patients across the region. Find
                the one nearest to you.
              </p>
            </div>
            <div className="map-section__locations">
              <div className="map-location-card">
                <div className="map-location-card__icon">
                  <svg
                    width="22"
                    xmlns="http://www.w3.org/2000/svg"
                    height="22"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </g>
                  </svg>
                </div>
                <h3 className="map-location-card__name">Main Laboratory</h3>
                <p className="map-location-card__address">
                  14 Pathology Way, Victoria Island, Lagos, Nigeria
                </p>
                <span className="map-location-card__phone">
                  +234 (0) 803 456 7890
                </span>
              </div>
              <div className="map-location-card map-location-card--featured">
                <div className="map-location-card__icon">
                  <svg
                    width="22"
                    xmlns="http://www.w3.org/2000/svg"
                    height="22"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </g>
                  </svg>
                </div>
                <h3 className="map-location-card__name">Abuja Branch</h3>
                <p className="map-location-card__address">
                  7 Diagnostics Road, Central Business District, Abuja, FCT,
                  Nigeria
                </p>
                <span className="map-location-card__phone">
                  +234 (0) 906 123 4567
                </span>
              </div>
              <div className="map-location-card">
                <div className="map-location-card__icon">
                  <svg
                    width="22"
                    xmlns="http://www.w3.org/2000/svg"
                    height="22"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </g>
                  </svg>
                </div>
                <h3 className="map-location-card__name">Port Harcourt Lab</h3>
                <p className="map-location-card__address">
                  22 Lab Scientists Ave, GRA Phase 2, Port Harcourt, Rivers
                  State, Nigeria
                </p>
                <span className="map-location-card__phone">
                  +234 (0) 701 987 6543
                </span>
              </div>
            </div>
            <div className="map-section__embed">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.4631624591!2d3.1191401!3d6.5480359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2s!4v1698000000000!5m2!1sen!2s"
                title="Prime Pathology Clinic locations in Lagos Nigeria"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                allowFullScreen="true"
                className="map-section__iframe"
              ></iframe>
            </div>
          </div>
        </section>
        <section aria-labelledby="cert-heading" className="cert-section">
          <div className="cert-section__inner">
            <div className="cert-section__header">
              <div className="cert-section__label">
                <span>Trust &amp; Compliance</span>
              </div>
              <h2
                id="cert-heading"
                className="section-title cert-section__title"
              >
                License &amp; Certification
              </h2>
              <p className="cert-section__subtitle section-content">
                Recognized and approved by leading medical and government bodies
                across Africa and internationally.
              </p>
            </div>
            <div className="page-cert-badges">
              <div className="page-cert-badge">
                <div className="cert-badge__icon">
                  <svg
                    width="36"
                    xmlns="http://www.w3.org/2000/svg"
                    height="36"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                      <circle r="6" cx="12" cy="8"></circle>
                    </g>
                  </svg>
                </div>
                <div className="cert-badge__body">
                  <div className="cert-badge__name">
                    <span>ISO 15189</span>
                  </div>
                  <div className="cert-badge__desc">
                    <span>Medical Laboratories Accreditation</span>
                  </div>
                  <div className="cert-badge__year">
                    <span>Since 2018</span>
                  </div>
                </div>
              </div>
              <div className="page-cert-badge cert-badge--featured">
                <div className="cert-badge__icon">
                  <svg
                    width="36"
                    xmlns="http://www.w3.org/2000/svg"
                    height="36"
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
                <div className="cert-badge__body">
                  <div className="cert-badge__name">
                    <span>MLSCN Certified</span>
                  </div>
                  <div className="cert-badge__desc">
                    <span>Medical Laboratory Science Council of Nigeria</span>
                  </div>
                  <div className="cert-badge__year">
                    <span>License #NML-2019-0047</span>
                  </div>
                </div>
              </div>
              <div className="page-cert-badge">
                <div className="cert-badge__icon">
                  <svg
                    width="36"
                    xmlns="http://www.w3.org/2000/svg"
                    height="36"
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
                <div className="cert-badge__body">
                  <div className="cert-badge__name">
                    <span>WHO GLP Standards</span>
                  </div>
                  <div className="cert-badge__desc">
                    <span>Good Laboratory Practice Compliance</span>
                  </div>
                  <div className="cert-badge__year">
                    <span>Verified 2024</span>
                  </div>
                </div>
              </div>
              <div className="page-cert-badge">
                <div className="cert-badge__icon">
                  <svg
                    width="36"
                    xmlns="http://www.w3.org/2000/svg"
                    height="36"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="cert-badge__body">
                  <div className="cert-badge__name">
                    <span>NAFDAC Approved</span>
                  </div>
                  <div className="cert-badge__desc">
                    <span>
                      National Agency for Food &amp; Drug Administration
                    </span>
                  </div>
                  <div className="cert-badge__year">
                    <span>Approval #PCN-LAB-2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="residential-care-container4">
          <div className="residential-care-container5">
            <Script
              html={`<style>
        @keyframes heroFloat {0%,100% {transform: translateY(0px) scale(1);}
50% {transform: translateY(-20px) scale(1.05);}}@keyframes slideDown {from {opacity: 0;
transform: translateY(-16px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes heroSlideUp {from {opacity: 0;
transform: translateY(24px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes orbit1 {from {transform: rotate(0deg);}
to {transform: rotate(360deg);}}@keyframes orbit2 {from {transform: rotate(0deg);}
to {transform: rotate(360deg);}}@keyframes counterOrbit1 {from {transform: rotate(0deg);}
to {transform: rotate(360deg);}}@keyframes scrollPartners {from {transform: translateX(0);}
to {transform: translateX(-50%);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="residential-care-container6">
          <div className="residential-care-container7">
            <Script
              html={`<script defer data-name="prime-pathology-interactions">
(function(){
  const hamburgerBtn = document.getElementById("hamburgerBtn")
  const mainNav = document.getElementById("mainNav")

  if (hamburgerBtn && mainNav) {
    hamburgerBtn.addEventListener("click", () => {
      const isExpanded = hamburgerBtn.getAttribute("aria-expanded") === "true"
      hamburgerBtn.setAttribute("aria-expanded", !isExpanded)
      mainNav.classList.toggle("nav-open")
    })

    document.addEventListener("click", (e) => {
      if (!hamburgerBtn.contains(e.target) && !mainNav.contains(e.target)) {
        hamburgerBtn.setAttribute("aria-expanded", "false")
        mainNav.classList.remove("nav-open")
      }
    })

    mainNav.querySelectorAll(".site-header__nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        hamburgerBtn.setAttribute("aria-expanded", "false")
        mainNav.classList.remove("nav-open")
      })
    })
  }

  const siteHeader = document.getElementById("siteHeader")
  if (siteHeader) {
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 10) {
          siteHeader.style.boxShadow = "0 4px 30px rgba(0,119,217,0.15)"
        } else {
          siteHeader.style.boxShadow = "0 2px 20px rgba(0,119,217,0.08)"
        }
      },
      { passive: true }
    )
  }

  const track = document.getElementById("servicesTrack")
  const prevBtn = document.getElementById("carouselPrev")
  const nextBtn = document.getElementById("carouselNext")
  const dots = document.querySelectorAll(".services-carousel__dot")

  if (track && prevBtn && nextBtn) {
    let currentIndex = 0
    const cards = track.querySelectorAll(".service-card")
    const totalCards = cards.length

    const getVisibleCount = () => {
      if (window.innerWidth <= 767) return 1
      if (window.innerWidth <= 991) return 2
      return 4
    }

    const getCardWidth = () => {
      if (!cards[0]) return 0
      const cardRect = cards[0].getBoundingClientRect()
      const gap = 24
      return cardRect.width + gap
    }

    const maxIndex = () => Math.max(0, totalCards - getVisibleCount())

    const updateCarousel = () => {
      const offset = getCardWidth() * currentIndex
      track.style.transform = \`translateX(-\${offset}px)\`
      dots.forEach((dot, i) => {
        dot.classList.toggle("services-carousel__dot--active", i === currentIndex)
      })
      prevBtn.disabled = currentIndex === 0
      nextBtn.disabled = currentIndex >= maxIndex()
    }

    nextBtn.addEventListener("click", () => {
      if (currentIndex < maxIndex()) {
        currentIndex++
        updateCarousel()
      }
    })

    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--
        updateCarousel()
      }
    })

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        currentIndex = Math.min(i, maxIndex())
        updateCarousel()
      })
    })

    window.addEventListener(
      "resize",
      () => {
        currentIndex = Math.min(currentIndex, maxIndex())
        updateCarousel()
      },
      { passive: true }
    )

    updateCarousel()
  }

  const revealElements = document.querySelectorAll(".why-card, .who-card, .deliver-step, .equipment-card, .team-card, .cert-badge, .intro-section__inner, .ceo-section__inner, .approach-section__inner, .timeline-item, .warroom-stat")

  revealElements.forEach((el, index) => {
    el.classList.add("reveal-on-scroll")
    const siblingIndex = Array.from(el.parentElement ? el.parentElement.children : []).indexOf(el)
    if (siblingIndex === 1) el.classList.add("delay-1")
    if (siblingIndex === 2) el.classList.add("delay-2")
    if (siblingIndex === 3) el.classList.add("delay-3")
  })

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed")
          revealObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  )

  document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
    revealObserver.observe(el)
  })

  const applicationForm = document.querySelector(".application-form")
  if (applicationForm) {
    const inputs = applicationForm.querySelectorAll(".application-form__input")

    inputs.forEach((input) => {
      input.addEventListener("blur", () => {
        if (!input.checkValidity() && input.value !== "") {
          input.style.borderColor = "var(--color-accent)"
        } else {
          input.style.borderColor = ""
        }
      })

      input.addEventListener("input", () => {
        if (input.checkValidity()) {
          input.style.borderColor = ""
        }
      })
    })
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
          .residential-care-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .residential-care-container2 {
            display: none;
          }
          .residential-care-container3 {
            display: contents;
          }
          .residential-care-container4 {
            display: none;
          }
          .residential-care-container5 {
            display: contents;
          }
          .residential-care-container6 {
            display: none;
          }
          .residential-care-container7 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default ResidentialCare
