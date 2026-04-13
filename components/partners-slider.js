import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const PartnersSlider = (props) => {
  return (
    <>
      <div className={`partners-slider-container1 ${props.rootClassName} `}>
        <div className="partners-slider-container2">
          <div className="partners-slider-container3">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
.partners-slider-track {
  animation: none;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
.partners-slider-viewport {
  mask-image: none;
  -webkit-mask-image: none;
}
.partners-slider {
  opacity: 1;
  transform: none;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <section className="partners-slider-partners-slider">
          <div className="partners-slider-container">
            <div className="partners-slider-header">
              <h2 className="section-title partners-slider-title">
                Trusted By Leading Healthcare Organizations
              </h2>
              <div className="partners-slider-decoration"></div>
            </div>
            <div className="partners-slider-viewport">
              <div className="partners-slider-track">
                <div className="partners-slider-item">
                  <div className="partners-slider-logo-wrapper">
                    <svg
                      fill="none"
                      width="48"
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle r="10" cx="12" cy="12"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                      <path d="M2 12h20"></path>
                      <path d="M12 2a14.5 14.5 0 0 1 0 20 14.5 14.5 0 0 1 0-20"></path>
                    </svg>
                    <span className="partners-slider-label">WHO</span>
                  </div>
                </div>
                <div className="partners-slider-item">
                  <div className="partners-slider-logo-wrapper">
                    <svg
                      fill="none"
                      width="48"
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M13 3a1 1 0 0 1 1 1v4.535l3.928-2.267a1 1 0 0 1 1.366.366l1 1.732a1 1 0 0 1-.366 1.366L16.001 12l3.927 2.269a1 1 0 0 1 .366 1.366l-1 1.732a1 1 0 0 1-1.366.366L14 15.464V20a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-4.536l-3.928 2.268a1 1 0 0 1-1.366-.366l-1-1.732a1 1 0 0 1 .366-1.366L7.999 12L4.072 9.732a1 1 0 0 1-.366-1.366l1-1.732a1 1 0 0 1 1.366-.366L10 8.535V4a1 1 0 0 1 1-1z"></path>
                    </svg>
                    <span className="partners-slider-label">
                      African Medical Association
                    </span>
                  </div>
                </div>
                <div className="partners-slider-item">
                  <div className="partners-slider-logo-wrapper">
                    <svg
                      fill="none"
                      width="48"
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path>
                      <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4M10 9h4m-2-2v4"></path>
                    </svg>
                    <span className="partners-slider-label">
                      Nigerian Medical Council
                    </span>
                  </div>
                </div>
                <div className="partners-slider-item">
                  <div className="partners-slider-logo-wrapper">
                    <svg
                      fill="none"
                      width="48"
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 21s9.286-9.841 9.286-13.841a3.86 3.86 0 0 0-1.182-3.008A4.13 4.13 0 0 0 12 3.007A4.13 4.13 0 0 0 8.896 4.15a3.86 3.86 0 0 0-1.182 3.01C7.714 11.16 17 21 17 21"></path>
                    </svg>
                    <span className="partners-slider-label">
                      East African Health Alliance
                    </span>
                  </div>
                </div>
                <div className="partners-slider-item">
                  <div className="partners-slider-logo-wrapper">
                    <svg
                      fill="none"
                      width="48"
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 11v4m2-2h-4m6-7V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m10 0v14M6 6v14"></path>
                        <rect x="2" y="6" rx="2" width="20" height="14"></rect>
                      </g>
                    </svg>
                    <span className="partners-slider-label">
                      West African College of Physicians
                    </span>
                  </div>
                </div>
                <div className="partners-slider-item">
                  <div className="partners-slider-logo-wrapper">
                    <svg
                      fill="none"
                      width="48"
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9-4v8m3.5-6l-7 4m7 0l-7-4"></path>
                    </svg>
                    <span className="partners-slider-label">CDC Africa</span>
                  </div>
                </div>
                <div className="partners-slider-item">
                  <div className="partners-slider-logo-wrapper">
                    <svg
                      fill="none"
                      width="48"
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 7v4m2 10v-3a2 2 0 0 0-4 0v3m4-12h-4"></path>
                      <path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"></path>
                      <path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    <span className="partners-slider-label">
                      Ministry of Health Nigeria
                    </span>
                  </div>
                </div>
                <div className="partners-slider-item">
                  <div className="partners-slider-logo-wrapper">
                    <svg
                      fill="none"
                      width="48"
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle r="10" cx="12" cy="12"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <span className="partners-slider-label">
                      Laboratory Quality Certification
                    </span>
                  </div>
                </div>
                <div aria-hidden="true" className="partners-slider-item">
                  <div className="partners-slider-logo-wrapper">
                    <svg
                      fill="none"
                      width="48"
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle r="10" cx="12" cy="12"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                      <path d="M2 12h20"></path>
                      <path d="M12 2a14.5 14.5 0 0 1 0 20 14.5 14.5 0 0 1 0-20"></path>
                    </svg>
                    <span className="partners-slider-label">WHO</span>
                  </div>
                </div>
                <div aria-hidden="true" className="partners-slider-item">
                  <div className="partners-slider-logo-wrapper">
                    <svg
                      fill="none"
                      width="48"
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M13 3a1 1 0 0 1 1 1v4.535l3.928-2.267a1 1 0 0 1 1.366.366l1 1.732a1 1 0 0 1-.366 1.366L16.001 12l3.927 2.269a1 1 0 0 1 .366 1.366l-1 1.732a1 1 0 0 1-1.366.366L14 15.464V20a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-4.536l-3.928 2.268a1 1 0 0 1-1.366-.366l-1-1.732a1 1 0 0 1 .366-1.366L7.999 12L4.072 9.732a1 1 0 0 1-.366-1.366l1-1.732a1 1 0 0 1 1.366-.366L10 8.535V4a1 1 0 0 1 1-1z"></path>
                    </svg>
                    <span className="partners-slider-label">
                      African Medical Association
                    </span>
                  </div>
                </div>
                <div aria-hidden="true" className="partners-slider-item">
                  <div className="partners-slider-logo-wrapper">
                    <svg
                      fill="none"
                      width="48"
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path>
                      <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4M10 9h4m-2-2v4"></path>
                    </svg>
                    <span className="partners-slider-label">
                      Nigerian Medical Council
                    </span>
                  </div>
                </div>
                <div aria-hidden="true" className="partners-slider-item">
                  <div className="partners-slider-logo-wrapper">
                    <svg
                      fill="none"
                      width="48"
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 21s9.286-9.841 9.286-13.841a3.86 3.86 0 0 0-1.182-3.008A4.13 4.13 0 0 0 12 3.007A4.13 4.13 0 0 0 8.896 4.15a3.86 3.86 0 0 0-1.182 3.01C7.714 11.16 17 21 17 21"></path>
                    </svg>
                    <span className="partners-slider-label">
                      East African Health Alliance
                    </span>
                  </div>
                </div>
                <div aria-hidden="true" className="partners-slider-item">
                  <div className="partners-slider-logo-wrapper">
                    <svg
                      fill="none"
                      width="48"
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 11v4m2-2h-4m6-7V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m10 0v14M6 6v14"></path>
                        <rect x="2" y="6" rx="2" width="20" height="14"></rect>
                      </g>
                    </svg>
                    <span className="partners-slider-label">
                      West African College of Physicians
                    </span>
                  </div>
                </div>
                <div aria-hidden="true" className="partners-slider-item">
                  <div className="partners-slider-logo-wrapper">
                    <svg
                      fill="none"
                      width="48"
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9-4v8m3.5-6l-7 4m7 0l-7-4"></path>
                    </svg>
                    <span className="partners-slider-label">CDC Africa</span>
                  </div>
                </div>
                <div aria-hidden="true" className="partners-slider-item">
                  <div className="partners-slider-logo-wrapper">
                    <svg
                      fill="none"
                      width="48"
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 7v4m2 10v-3a2 2 0 0 0-4 0v3m4-12h-4"></path>
                      <path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"></path>
                      <path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    <span className="partners-slider-label">
                      Ministry of Health Nigeria
                    </span>
                  </div>
                </div>
                <div aria-hidden="true" className="partners-slider-item">
                  <div className="partners-slider-logo-wrapper">
                    <svg
                      fill="none"
                      width="48"
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle r="10" cx="12" cy="12"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <span className="partners-slider-label">
                      Laboratory Quality Certification
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="partners-slider-container4">
          <div className="partners-slider-container5">
            <Script
              html={`<style>
        @keyframes partnersMarquee {0% {transform: translateX(0);}
100% {transform: translateX(calc(-50% - (var(--spacing-4xl) / 2)));}}@keyframes partnersPulse {0% {transform: translate(-50%, -50%) scale(0.8);
opacity: 0;}
50% {opacity: 1;}
100% {transform: translate(-50%, -50%) scale(1.4);
opacity: 0;}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="partners-slider-container6">
          <div className="partners-slider-container7">
            <Script
              html={`<script defer data-name="partners-slider-logic">
(function(){
  const partnersSection = document.querySelector(".partners-slider")

  const partnersObserverOptions = {
    threshold: 0.15,
    rootMargin: "0px",
  }

  const partnersObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible")
        partnersObserver.unobserve(entry.target)
      }
    })
  }, partnersObserverOptions)

  if (partnersSection) {
    partnersObserver.observe(partnersSection)
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .partners-slider-container1 {
            display: contents;
          }
          .partners-slider-container2 {
            display: none;
          }
          .partners-slider-container3 {
            display: contents;
          }
          .partners-slider-container4 {
            display: none;
          }
          .partners-slider-container5 {
            display: contents;
          }
          .partners-slider-container6 {
            display: none;
          }
          .partners-slider-container7 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

PartnersSlider.defaultProps = {
  rootClassName: '',
}

PartnersSlider.propTypes = {
  rootClassName: PropTypes.string,
}

export default PartnersSlider
