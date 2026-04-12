import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const LocationMap = (props) => {
  return (
    <>
      <div className="location-map-container1">
        <section
          aria-labelledby="location-map-title"
          className="location-map-section"
        >
          <div className="location-map-container">
            <div className="location-map-header">
              <h2 id="location-map-title" className="section-title">
                Visit Our Laboratory
              </h2>
              <p className="location-map-description section-content">
                Our state-of-the-art diagnostic facility is strategically
                located to serve the community with premium pathology services.
              </p>
            </div>
            <div className="location-map-content">
              <div className="location-map-info-panel">
                <div className="location-map-card">
                  <div className="location-map-card-icon">
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
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </svg>
                  </div>
                  <div className="location-map-card-text">
                    <h3 className="location-map-card-title">
                      Laboratory Address
                    </h3>
                    <p className="section-content">243 Kano State, Nigeria</p>
                    <button
                      id="copyAddressBtn"
                      aria-label="Copy address to clipboard"
                      className="btn-link btn-sm"
                    >
                      <svg
                        fill="none"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="8"
                          y="8"
                          rx="2"
                          ry="2"
                          width="14"
                          height="14"
                        ></rect>
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                      </svg>
                      <span>
                        {' '}
                        Copy Address
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </button>
                  </div>
                </div>
                <div className="location-map-card">
                  <div className="location-map-card-icon">
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
                      <circle r="10" cx="12" cy="12"></circle>
                      <path d="M12 6v6l4 2"></path>
                    </svg>
                  </div>
                  <div className="location-map-card-text">
                    <h3 className="location-map-card-title">Opening Hours</h3>
                    <p className="section-content">
                      Mon - Sat: 08:00 AM - 06:00 PM
                    </p>
                    <p className="section-content">Sunday: Emergency Only</p>
                  </div>
                </div>
                <div className="location-map-card">
                  <div className="location-map-card-icon">
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
                      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"></path>
                    </svg>
                  </div>
                  <div className="location-map-card-text">
                    <h3 className="location-map-card-title">Contact Support</h3>
                    <p className="section-content">+234 (0) 800 PRIME LAB</p>
                    <Link href="/contact">
                      <a>
                        <div className="btn btn-primary btn-sm">
                          <span>Get Directions</span>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="location-map-frame-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124921.28581079317!2d8.441113615364172!3d11.99615469440615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae81395e49929d%3A0x7d2879685387f34!2sKano!5e0!3m2!1sen!2sng!4v1715421234567!5m2!1sen!2sng"
                  title="Prime Pathology Clinic Location Map"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  allowFullScreen="true"
                  className="location-map-iframe"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        <div className="location-map-container2">
          <div className="location-map-container3">
            <Script
              html={`<style>
#copyAddressBtn {
  margin-top: var(--spacing-xs);
  padding: 0;
  width: fit-content;
  font-weight: var(--font-weight-medium);
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="location-map-container4">
          <div className="location-map-container5">
            <Script
              html={`<script defer data-name="location-map-interactions">
(function(){
  const copyAddressBtn = document.getElementById("copyAddressBtn")
  const addressText = "243 Kano State, Nigeria"

  if (copyAddressBtn) {
    copyAddressBtn.addEventListener("click", () => {
      navigator.clipboard
        .writeText(addressText)
        .then(() => {
          const originalText = copyAddressBtn.innerHTML
          copyAddressBtn.innerHTML = \`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
        Copied!
      \`
          copyAddressBtn.style.color = "#2ecc71"

          setTimeout(() => {
            copyAddressBtn.innerHTML = originalText
            copyAddressBtn.style.color = ""
          }, 2000)
        })
        .catch((err) => {
          console.error("Failed to copy: ", err)
        })
    })
  }

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const mapObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        mapObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  const animatedElements = document.querySelectorAll(".location-map-card, .location-map-frame-wrapper, .location-map-header")
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
    mapObserver.observe(el)
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .location-map-container1 {
            display: contents;
          }
          .location-map-container2 {
            display: none;
          }
          .location-map-container3 {
            display: contents;
          }
          .location-map-container4 {
            display: none;
          }
          .location-map-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default LocationMap
