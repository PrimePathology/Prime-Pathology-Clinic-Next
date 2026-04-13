import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const FaqAccordion = (props) => {
  return (
    <>
      <div className="faq-accordion-container1">
        <div className="faq-accordion-container2">
          <div className="faq-accordion-container3">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
.faq-accordion-container, .faq-accordion-content, .faq-accordion-icon {
  animation: none !important;
  transition: none !important;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <section id="faq-section" className="faq-accordion-section">
          <div className="faq-accordion-container">
            <div className="faq-accordion-header">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">
                Find quick answers to common inquiries about our pathology
                services and diagnostic processes.
              </p>
            </div>
            <div className="faq-accordion-list">
              <details open="true" className="faq-accordion-item">
                <summary className="faq-accordion-trigger">
                  <span className="faq-accordion-question">
                    How long do test results take?
                  </span>
                  <div className="faq-accordion-icon-wrapper">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      className="plus faq-accordion-icon"
                    >
                      <path
                        d="M5 12h14m-7-7v14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      className="faq-accordion-icon minus"
                    >
                      <path
                        d="M5 12h14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </summary>
                <div className="faq-accordion-content">
                  <p className="section-content">
                    Most routine tests are ready within 24-48 hours. Specialized
                    diagnostics may take 3-5 business days.
                  </p>
                </div>
              </details>
              <details className="faq-accordion-item">
                <summary className="faq-accordion-trigger">
                  <span className="faq-accordion-question">
                    Do I need to fast before my test?
                  </span>
                  <div className="faq-accordion-icon-wrapper">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      className="plus faq-accordion-icon"
                    >
                      <path
                        d="M5 12h14m-7-7v14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      className="faq-accordion-icon minus"
                    >
                      <path
                        d="M5 12h14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </summary>
                <div className="faq-accordion-content">
                  <p className="section-content">
                    Fasting is required for glucose and lipid profiles (8-12
                    hours). Water is permitted. Other tests may not require
                    fasting.
                  </p>
                </div>
              </details>
              <details className="faq-accordion-item">
                <summary className="faq-accordion-trigger">
                  <span className="faq-accordion-question">
                    Can I book appointments online?
                  </span>
                  <div className="faq-accordion-icon-wrapper">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      className="plus faq-accordion-icon"
                    >
                      <path
                        d="M5 12h14m-7-7v14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      className="faq-accordion-icon minus"
                    >
                      <path
                        d="M5 12h14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </summary>
                <div className="faq-accordion-content">
                  <p className="section-content">
                    Yes, use our online booking system or call any of our
                    branches directly for same-day scheduling.
                  </p>
                </div>
              </details>
              <details className="faq-accordion-item">
                <summary className="faq-accordion-trigger">
                  <span className="faq-accordion-question">
                    Are my results confidential?
                  </span>
                  <div className="faq-accordion-icon-wrapper">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      className="plus faq-accordion-icon"
                    >
                      <path
                        d="M5 12h14m-7-7v14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      className="faq-accordion-icon minus"
                    >
                      <path
                        d="M5 12h14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </summary>
                <div className="faq-accordion-content">
                  <p className="section-content">
                    Absolutely. All results are encrypted and only shared with
                    you and your authorized healthcare provider.
                  </p>
                </div>
              </details>
              <details className="faq-accordion-item">
                <summary className="faq-accordion-trigger">
                  <span className="faq-accordion-question">
                    Do you offer home sample collection?
                  </span>
                  <div className="faq-accordion-icon-wrapper">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      className="plus faq-accordion-icon"
                    >
                      <path
                        d="M5 12h14m-7-7v14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      className="faq-accordion-icon minus"
                    >
                      <path
                        d="M5 12h14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </summary>
                <div className="faq-accordion-content">
                  <p className="section-content">
                    Yes, we provide home collection services in select areas.
                    Contact us to check availability in your location.
                  </p>
                </div>
              </details>
            </div>
            <div className="faq-accordion-footer">
              <p className="section-content">
                <span>
                  {' '}
                  Still have questions?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <Link href="/contact">
                  <a>
                    <div className="btn-link">
                      <span>Contact our support team</span>
                    </div>
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </section>
        <div className="faq-accordion-container4">
          <div className="faq-accordion-container5">
            <Script
              html={`<style>
        @keyframes faqFadeIn {from {opacity: 0;
transform: translateY(30px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes faqContentSlide {from {opacity: 0;
transform: translateY(-10px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="faq-accordion-container6">
          <div className="faq-accordion-container7">
            <Script
              html={`<script defer data-name="faq-accordion-handler">
(function(){
  // This script enhances the native <details> behavior by ensuring only one item is open at a time (optional UX enhancement)
  // and providing smooth interaction feedback.

  const faqItems = document.querySelectorAll(".faq-accordion-item")

  faqItems.forEach((item) => {
    const trigger = item.querySelector(".faq-accordion-trigger")

    trigger.addEventListener("click", (e) => {
      // If the item is already open, we let the native behavior close it
      if (item.hasAttribute("open")) return

      // If we want to close other items when one opens (exclusive accordion)
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.hasAttribute("open")) {
          otherItem.removeAttribute("open")
        }
      })
    })
  })

  // Intersection Observer for the entrance animation
  const observerOptions = {
    threshold: 0.1,
  }

  const faqObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        faqObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  const container = document.querySelector(".faq-accordion-container")
  if (container) {
    container.style.opacity = "0"
    container.style.transform = "translateY(30px)"
    container.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out"
    faqObserver.observe(container)
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .faq-accordion-container1 {
            display: contents;
          }
          .faq-accordion-container2 {
            display: none;
          }
          .faq-accordion-container3 {
            display: contents;
          }
          .faq-accordion-container4 {
            display: none;
          }
          .faq-accordion-container5 {
            display: contents;
          }
          .faq-accordion-container6 {
            display: none;
          }
          .faq-accordion-container7 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default FaqAccordion
