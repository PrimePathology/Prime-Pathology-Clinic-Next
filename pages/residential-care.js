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
              Compassionate Residential Care Services for Your Loved Ones
            </h1>
            <p className="hero-section__subtext hero-subtitle">
              Providing safe, comfortable, and professional residential care
              with 24/7 medical support, personalized care plans, and a
              nurturing environment.
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
                <span>Our Care Philosophy</span>
              </div>
              <h2
                id="approach-heading"
                className="section-title approach-section__heading"
              >
                Our Residential Care Approach
              </h2>
              <p className="approach-section__body section-content">
                In designing our residential care services, we follow a
                compassionate, person-centered approach that ensures every
                resident receives individualized attention, dignity, and
                comfort. Our care plans are developed in partnership with
                families, medical professionals, and caregivers to create a
                supportive home environment.
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
                  <span>
                    Individualized care plans tailored to each resident
                  </span>
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
                  <span>Family-centered care with open communication</span>
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
                  <span>24/7 compassionate support and supervision</span>
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
                  <span>
                    Safe, comfortable, and dignified living environment
                  </span>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="approach-section__visual-col">
              <div className="approach-care-viz">
                <img
                  alt="Caregiver assisting elderly women with tea in a cozy nursing home setting"
                  src="https://images.pexels.com/photos/18459198/pexels-photo-18459198.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=500"
                  className="residential-care-thq-approach-care-vizimg-elm"
                />
                <div className="residential-care-thq-approach-care-vizoverlay-elm"></div>
                <div className="residential-care-thq-approach-care-vizcaption-elm">
                  <span className="residential-care-thq-approach-care-vizcaption-label-elm">
                    Residential Care
                  </span>
                  <span className="residential-care-thq-approach-care-vizcaption-text-elm">
                    Comfort, Dignity &amp; Compassion
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section aria-labelledby="why-heading" className="why-section">
          <div className="why-section__inner">
            <div className="why-section__header">
              <div className="why-section__label">
                <span>Our Care Pillars</span>
              </div>
              <h2 id="why-heading" className="section-title why-section__title">
                Why Choose Our Residential Care
              </h2>
              <p className="section-content why-section__subtitle">
                We combine compassion, flexibility, and innovation to deliver
                exceptional residential care for every resident.
              </p>
            </div>
            <div className="why-section__cards">
              <article
                aria-label="Professional Care Staff"
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
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12l2 2l4-4"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="why-card__title">Professional Care Staff</h3>
                <p className="why-card__body section-content">
                  Highly trained caregivers and nurses with compassionate
                  ethics, qualified in elderly and special-needs care.
                </p>
                <div className="why-card__detail">
                  <span className="why-card__detail-item">
                    Compassionate Ethics
                  </span>
                  <span className="why-card__detail-item">
                    Elderly &amp; Special-Needs Qualified
                  </span>
                </div>
                <div aria-hidden="true" className="why-card__glow"></div>
              </article>
              <article
                aria-label="Flexible Care Options"
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
                <h3 className="why-card__title">Flexible Care Options</h3>
                <p className="why-card__body section-content">
                  From short-term respite care to long-term residential stays,
                  we accommodate varying levels of need.
                </p>
                <div className="why-card__detail">
                  <span className="why-card__detail-item">
                    Short-Term Respite Care
                  </span>
                  <span className="why-card__detail-item">
                    Long-Term Residential Stays
                  </span>
                </div>
                <div aria-hidden="true" className="why-card__glow"></div>
              </article>
              <article
                aria-label="Partnership-Driven Care"
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
                <h3 className="why-card__title">Partnership-Driven Care</h3>
                <p className="why-card__body section-content">
                  Family-centered approach using modern care technology and
                  regular health monitoring.
                </p>
                <div className="why-card__detail">
                  <span className="why-card__detail-item">
                    Modern Care Technology
                  </span>
                  <span className="why-card__detail-item">
                    Regular Health Monitoring
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
                <span>Residential Care</span>
              </div>
              <h2
                id="services-heading"
                className="section-title services-section__title"
              >
                Our Residential Care Services
              </h2>
              <p className="services-section__subtitle section-content">
                Compassionate, round-the-clock residential care tailored to each
                resident&apos;s health, comfort, and dignity.
              </p>
            </div>
            <div
              id="servicesCarousel"
              aria-label="Services carousel"
              className="page-services-carousel"
            >
              <div id="servicesTrack" className="services-carousel__track">
                <article
                  aria-label="24/7 Medical Support"
                  className="page-service-card2"
                >
                  <div className="service-card__img-wrap">
                    <img
                      alt="Nurse providing round-the-clock care to a resident"
                      src="https://images.pexels.com/photos/6129685/pexels-photo-6129685.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
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
                          d="M12 5c2.941 0 6.685 1.537 9 3l-2 11H5L3 8c2.394-1.513 6.168-3.005 9-3m-2 7h4m-2-2v4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="service-card__title">
                      24/7 Medical Support
                    </h3>
                    <p className="service-card__desc section-content">
                      Round-the-clock nursing and health monitoring ensuring
                      every resident receives immediate attention and
                      compassionate care at any hour.
                    </p>
                    <a href="#">
                      <div
                        aria-label="Learn more about 24/7 Medical Support"
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
                  aria-label="Personalized Care Plans"
                  className="page-service-card2"
                >
                  <div className="service-card__img-wrap">
                    <img
                      alt="Caregiver organizing personalized medicine and care routine"
                      src="https://images.pexels.com/photos/7551634/pexels-photo-7551634.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
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
                    <h3 className="service-card__title">
                      Personalized Care Plans
                    </h3>
                    <p className="service-card__desc section-content">
                      Tailored daily routines and medical management designed
                      around each resident&apos;s unique needs, preferences, and
                      health goals.
                    </p>
                    <a href="#">
                      <div
                        aria-label="Learn more about Personalized Care Plans"
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
                  aria-label="Rehabilitation Therapy"
                  className="page-service-card2"
                >
                  <div className="service-card__img-wrap">
                    <img
                      alt="Physical therapist assisting a patient with rehabilitation exercises"
                      src="https://images.pexels.com/photos/4506160/pexels-photo-4506160.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
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
                    <h3 className="service-card__title">
                      Rehabilitation Therapy
                    </h3>
                    <p className="service-card__desc section-content">
                      Physical, occupational, and speech therapy services to
                      help residents regain strength, mobility, communication,
                      and independence.
                    </p>
                    <a href="#">
                      <div
                        aria-label="Learn more about Rehabilitation Therapy"
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
                  aria-label="Memory &amp; Dementia Care"
                  className="page-service-card2"
                >
                  <div className="service-card__img-wrap">
                    <img
                      alt="Elderly resident receiving specialized memory and dementia care"
                      src="https://images.pexels.com/photos/8172827/pexels-photo-8172827.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
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
                          <path d="M12 18V5m3 8a4.17 4.17 0 0 1-3-4a4.17 4.17 0 0 1-3 4m8.598-6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
                          <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
                          <path d="M18 18a4 4 0 0 0 2-7.464"></path>
                          <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
                          <path d="M6 18a4 4 0 0 1-2-7.464"></path>
                          <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
                        </g>
                      </svg>
                    </div>
                    <h3 className="service-card__title">
                      Memory &amp; Dementia Care
                    </h3>
                    <p className="service-card__desc section-content">
                      Specialized support for Alzheimer&apos;s and cognitive
                      conditions with structured routines, sensory engagement,
                      and a safe, nurturing environment.
                    </p>
                    <a href="#">
                      <div
                        aria-label="Learn more about Memory &amp; Dementia Care"
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
                <span>Our Facilities</span>
              </div>
              <h2
                id="equipment-heading"
                className="section-title equipment-section__title"
              >
                Our Residential Care Facilities &amp; Amenities
              </h2>
              <p className="equipment-section__subtitle section-content">
                Thoughtfully designed spaces that feel like home, with safety
                features and modern amenities for comfortable, dignified living.
              </p>
            </div>
            <div className="page-equipment-grid1">
              <article
                aria-label="Comfortable Resident Rooms"
                className="equipment-card--large page-equipment-card"
              >
                <img
                  alt="Comfortable resident room in care facility with cozy furnishings"
                  src="https://images.pexels.com/photos/18459209/pexels-photo-18459209.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                  className="equipment-card__img"
                />
                <div className="equipment-card__overlay">
                  <div className="equipment-card__tag">
                    <span>Living Spaces</span>
                  </div>
                  <h3 className="equipment-card__title">
                    Comfortable Resident Rooms
                  </h3>
                  <p className="equipment-card__desc section-content">
                    Private and semi-private rooms furnished with home-like
                    comforts, adjustable beds, climate control, and
                    accessibility features for safe, restful living.
                  </p>
                </div>
              </article>
              <article
                aria-label="Communal Dining Areas"
                className="page-equipment-card"
              >
                <img
                  alt="Residents enjoying meals together in a bright communal dining area"
                  src="https://images.pexels.com/photos/18459207/pexels-photo-18459207.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                  className="equipment-card__img"
                />
                <div className="equipment-card__overlay">
                  <div className="equipment-card__tag">
                    <span>Dining</span>
                  </div>
                  <h3 className="equipment-card__title">
                    Communal Dining Areas
                  </h3>
                  <p className="equipment-card__desc section-content">
                    Spacious, welcoming dining halls where residents enjoy
                    chef-prepared, nutritious meals in a social, family-style
                    atmosphere.
                  </p>
                </div>
              </article>
              <article
                aria-label="Therapy and Activity Spaces"
                className="page-equipment-card"
              >
                <img
                  alt="Senior resident engaging in therapeutic activity in a bright activity room"
                  src="https://images.pexels.com/photos/4566527/pexels-photo-4566527.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                  className="equipment-card__img"
                />
                <div className="equipment-card__overlay">
                  <div className="equipment-card__tag">
                    <span>Wellness</span>
                  </div>
                  <h3 className="equipment-card__title">
                    Therapy &amp; Activity Spaces
                  </h3>
                  <p className="equipment-card__desc section-content">
                    Dedicated rooms for physical therapy, creative arts, and
                    social activities that promote mental wellness and physical
                    mobility.
                  </p>
                </div>
              </article>
              <article
                aria-label="Medical Monitoring Stations"
                className="page-equipment-card"
              >
                <img
                  alt="Medical monitoring station with healthcare staff attending to residents"
                  src="https://images.pexels.com/photos/6129159/pexels-photo-6129159.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                  className="equipment-card__img"
                />
                <div className="equipment-card__overlay">
                  <div className="equipment-card__tag">
                    <span>Care &amp; Safety</span>
                  </div>
                  <h3 className="equipment-card__title">
                    Medical Monitoring Stations
                  </h3>
                  <p className="equipment-card__desc section-content">
                    On-site nursing stations equipped with modern monitoring
                    systems, emergency response protocols, and 24/7 professional
                    caregiving staff.
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
                Our Residential Care Partners
              </h2>
            </div>
            <div
              aria-label="Partners and affiliates logos"
              className="page-partners-slider"
            >
              <div id="partnersTrack" className="partners-slider__track">
                <div className="page-partner-logo1">
                  <div className="partner-logo__inner">
                    <span>Local Health Authority</span>
                  </div>
                </div>
                <div className="page-partner-logo1">
                  <div className="partner-logo__inner">
                    <span>National Elder Care Association</span>
                  </div>
                </div>
                <div className="page-partner-logo1">
                  <div className="partner-logo__inner">
                    <span>Community Rehab Center</span>
                  </div>
                </div>
                <div className="page-partner-logo1">
                  <div className="partner-logo__inner">
                    <span>District Health Board</span>
                  </div>
                </div>
                <div className="page-partner-logo1">
                  <div className="partner-logo__inner">
                    <span>Senior Wellness Alliance</span>
                  </div>
                </div>
                <div className="page-partner-logo1">
                  <div className="partner-logo__inner">
                    <span>Home Care Network</span>
                  </div>
                </div>
                <div className="page-partner-logo1">
                  <div className="partner-logo__inner">
                    <span>Rehabilitation Partners</span>
                  </div>
                </div>
                <div className="page-partner-logo1">
                  <div className="partner-logo__inner">
                    <span>Community Health Org</span>
                  </div>
                </div>
                <div className="page-partner-logo1">
                  <div className="partner-logo__inner">
                    <span>Local Health Authority</span>
                  </div>
                </div>
                <div className="page-partner-logo1">
                  <div className="partner-logo__inner">
                    <span>National Elder Care Association</span>
                  </div>
                </div>
                <div className="page-partner-logo1">
                  <div className="partner-logo__inner">
                    <span>Community Rehab Center</span>
                  </div>
                </div>
                <div className="page-partner-logo1">
                  <div className="partner-logo__inner">
                    <span>District Health Board</span>
                  </div>
                </div>
                <div className="page-partner-logo1">
                  <div className="partner-logo__inner">
                    <span>Senior Wellness Alliance</span>
                  </div>
                </div>
                <div className="page-partner-logo1">
                  <div className="partner-logo__inner">
                    <span>Home Care Network</span>
                  </div>
                </div>
                <div className="page-partner-logo1">
                  <div className="partner-logo__inner">
                    <span>Rehabilitation Partners</span>
                  </div>
                </div>
                <div className="page-partner-logo1">
                  <div className="partner-logo__inner">
                    <span>Community Health Org</span>
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
                <span>Our Care Process</span>
              </div>
              <h2
                id="timeline-heading"
                className="section-title timeline-section__title"
              >
                Residential Care Steps
              </h2>
              <p className="timeline-section__subtitle section-content">
                From initial assessment to ongoing family communication — every
                step is personalized, dignified, and family-centered.
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
                      Initial Assessment
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
                    Comprehensive health and needs evaluation to understand
                    individual requirements, medical history, and preferences
                    through detailed consultations with families and caregivers.
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
                      Care Plan Development
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
                    Personalized care plan created with family input, involving
                    medical, therapeutic, nutritional, and lifestyle
                    requirements tailored to each resident&apos;s unique needs.
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
                      Daily Care &amp; Monitoring
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
                    Ongoing support and health tracking with regular vital
                    checks, chronic condition management, medication assistance,
                    and coordination with physicians to ensure optimal
                    well-being.
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
                      Regular Reviews &amp; Family Updates
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
                    Continuous improvement and communication through scheduled
                    evaluations of care plans with transparent updates to
                    families, ensuring everyone stays informed and involved in
                    the care journey.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section
          aria-labelledby="day-in-care-heading"
          className="page-warroom-section"
        >
          <div className="warroom-section__bg-media">
            <img
              alt="Warm and welcoming residential care home interior with caregivers and residents"
              src="https://images.pexels.com/photos/18459198/pexels-photo-18459198.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              loading="lazy"
              className="warroom-section__bg-img"
            />
            <div className="warroom-section__overlay"></div>
          </div>
          <div className="warroom-section__content">
            <div aria-hidden="true" className="warroom-section__label">
              <span>Life at Our Home</span>
            </div>
            <h2
              id="day-in-care-heading"
              className="section-title warroom-section__title"
            >
              A Day in Our Care Home
            </h2>
            <p className="warroom-section__subtitle section-content">
              Every day is designed with compassion, dignity, and joy. Our
              caregivers create a warm, family-like atmosphere where residents
              feel at home — supported, engaged, and truly cared for.
            </p>
            <div className="page-warroom-stats">
              <div className="warroom-stat">
                <div className="warroom-stat__num">
                  <span>24/7</span>
                </div>
                <div className="warroom-stat__label">
                  <span>Care &amp; Support</span>
                </div>
              </div>
              <div className="warroom-stat">
                <div className="warroom-stat__num">
                  <span>50+</span>
                </div>
                <div className="warroom-stat__label">
                  <span>Daily Activities</span>
                </div>
              </div>
              <div className="warroom-stat">
                <div className="warroom-stat__num">
                  <span>1:4</span>
                </div>
                <div className="warroom-stat__label">
                  <span>Caregiver Ratio</span>
                </div>
              </div>
              <div className="warroom-stat">
                <div className="warroom-stat__num">
                  <span>100%</span>
                </div>
                <div className="warroom-stat__label">
                  <span>Personalized Care</span>
                </div>
              </div>
            </div>
            <div className="warroom-section__gallery">
              <div className="warroom-gallery-item">
                <img
                  alt="Caregiver assisting elderly residents with daily activities in a cozy care home"
                  src="https://images.pexels.com/photos/18429370/pexels-photo-18429370.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                  className="warroom-gallery-item__img"
                />
                <div className="warroom-gallery-item__caption">
                  <span>Personalized Daily Care</span>
                </div>
              </div>
              <div className="warroom-gallery-item--wide warroom-gallery-item">
                <img
                  alt="Residents and caregivers enjoying a communal meal together in a cheerful dining space"
                  src="https://images.pexels.com/photos/18459207/pexels-photo-18459207.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                  className="warroom-gallery-item__img"
                />
                <div className="warroom-gallery-item__caption">
                  <span>Communal Dining &amp; Nutrition</span>
                </div>
              </div>
              <div className="warroom-gallery-item">
                <img
                  alt="Senior residents engaging in social activities and companionship in a warm care home setting"
                  src="https://images.pexels.com/photos/36883131/pexels-photo-36883131.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                  className="warroom-gallery-item__img"
                />
                <div className="warroom-gallery-item__caption">
                  <span>Social Engagement</span>
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
                Visit Our Care Home
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
                Licenses &amp; Certifications
              </h2>
              <p className="cert-section__subtitle section-content">
                Fully accredited and compliant with national care standards,
                health &amp; safety regulations, and staff training
                requirements.
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
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <svg d="m9 12l2 2l4-4"></svg>
                    </g>
                  </svg>
                </div>
                <div className="cert-badge__body">
                  <div className="cert-badge__name">
                    <span>Care Quality Commission</span>
                  </div>
                  <div className="cert-badge__desc">
                    <span>
                      CQC Registered &amp; Approved Residential Care Provider
                    </span>
                  </div>
                  <div className="cert-badge__year">
                    <span>Registered Since 2018</span>
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
                      <path d="M12 15a3 3 0 1 0 6 0a3 3 0 1 0-6 0"></path>
                      <path d="M13 17.5V22l2-1.5l2 1.5v-4.5"></path>
                      <path d="M10 19H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-1 1.73M6 9h12M6 12h3m-3 3h2"></path>
                    </g>
                  </svg>
                </div>
                <div className="cert-badge__body">
                  <div className="cert-badge__name">
                    <span>Health &amp; Safety Certified</span>
                  </div>
                  <div className="cert-badge__desc">
                    <span>
                      Full Health &amp; Safety Compliance for Care Facilities
                    </span>
                  </div>
                  <div className="cert-badge__year">
                    <span>Certified 2024</span>
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
                      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                    </g>
                  </svg>
                </div>
                <div className="cert-badge__body">
                  <div className="cert-badge__name">
                    <span>Care Staff Training</span>
                  </div>
                  <div className="cert-badge__desc">
                    <span>
                      Certified Care Staff Training &amp; Professional
                      Development
                    </span>
                  </div>
                  <div className="cert-badge__year">
                    <span>Accredited 2023</span>
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
                      <path d="M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5M9 18h8m1-15h-3"></path>
                      <path d="M11 3a6 6 0 0 0-6 6v11m0-7h4m8-3a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z"></path>
                    </g>
                  </svg>
                </div>
                <div className="cert-badge__body">
                  <div className="cert-badge__name">
                    <span>Fire Safety &amp; Emergency</span>
                  </div>
                  <div className="cert-badge__desc">
                    <span>
                      Fire Safety &amp; Emergency Preparedness Badges for Care
                      Homes
                    </span>
                  </div>
                  <div className="cert-badge__year">
                    <span>Badge #FSE-2022-0114</span>
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
          .residential-care-thq-approach-care-vizimg-elm {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
            transition: transform 0.6s ease;
          }
          .residential-care-thq-approach-care-vizoverlay-elm {
            inset: 0;
            z-index: 1;
            position: absolute;
            background: linear-gradient(
              180deg,
              transparent 40%,
              color-mix(in oklab, var(--color-secondary) 75%, transparent) 100%
            );
          }
          .residential-care-thq-approach-care-vizcaption-elm {
            gap: var(--spacing-xs);
            display: flex;
            padding: var(--spacing-xl);
            z-index: 2;
            position: relative;
            flex-direction: column;
          }
          .residential-care-thq-approach-care-vizcaption-label-elm {
            color: var(--color-on-primary);
            opacity: 0.85;
            font-size: var(--font-size-xs);
            font-family: var(--font-family-heading);
            font-weight: var(--font-weight-medium);
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }
          .residential-care-thq-approach-care-vizcaption-text-elm {
            color: var(--color-on-primary);
            font-size: var(--font-size-xl);
            font-family: var(--font-family-heading);
            font-weight: var(--font-weight-heading);
            line-height: var(--line-height-heading);
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
