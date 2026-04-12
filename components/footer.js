import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container1">
        <footer className="footer-wrapper">
          <div className="footer-background">
            <img
              alt="Prime Pathology Clinic Exterior"
              src="https://images.pexels.com/photos/9538591/pexels-photo-9538591.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
              loading="lazy"
              className="footer-bg-image"
            />
            <div className="footer-overlay"></div>
          </div>
          <div className="footer-container">
            <div className="footer-top-row">
              <div className="footer-brand-column">
                <div className="footer-logo-group">
                  <img
                    src="/prime%20pathology%20t%20logo-200h.png"
                    alt="image"
                    className="footer-image"
                  />
                  <span className="footer-logo-text">Prime Pathology</span>
                </div>
                <p className="footer-description section-content">
                  {' '}
                  Delivering global-standard diagnostic services with precision
                  and care. Our advanced laboratory processes ensure reliable
                  results for better health outcomes across Africa and beyond.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="footer-social-links">
                  <a href="#">
                    <div aria-label="Facebook" className="footer-social-item">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M18 2a1 1 0 0 1 .993.883L19 3v4a1 1 0 0 1-.883.993L18 8h-3v1h3a1 1 0 0 1 .991 1.131l-.02.112l-1 4a1 1 0 0 1-.858.75L17 15h-2v6a1 1 0 0 1-.883.993L14 22h-4a1 1 0 0 1-.993-.883L9 21v-6H7a1 1 0 0 1-.993-.883L6 14v-4a1 1 0 0 1 .883-.993L7 9h2V8a6 6 0 0 1 5.775-5.996L15 2z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="Twitter" className="footer-social-item">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M14.058 3.41c-1.807.767-2.995 2.453-3.056 4.38L11 7.972l-.243-.023C8.365 7.68 6.259 6.437 4.813 4.418a1 1 0 0 0-1.685.092l-.097.186l-.049.099c-.719 1.485-1.19 3.29-1.017 5.203l.03.273c.283 2.263 1.5 4.215 3.779 5.679l.173.107l-.081.043c-1.315.663-2.518.952-3.827.9c-1.056-.04-1.446 1.372-.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06-1.18 7.152-4.223 8.335-8.433l.127-.495c.238-.993.372-2.006.401-3.024l.003-.332l.393-.779l.44-.862l.214-.434l.118-.247c.265-.565.456-1.033.574-1.43l.014-.056l.008-.018c.22-.593-.166-1.358-.941-1.358l-.122.007a1 1 0 0 0-.231.057l-.086.038a8 8 0 0 1-.88.36l-.356.115l-.271.08l-.772.214c-1.336-1.118-3.144-1.254-5.012-.554l-.211.084z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="LinkedIn" className="footer-social-item">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm-9 8a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1m6 0a3 3 0 0 0-1.168.236l-.125.057A1 1 0 0 0 11 11v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0-3-3M8 7a1 1 0 0 0-.993.883L7 8.01a1 1 0 0 0 1.993.117L9 8a1 1 0 0 0-1-1"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="Instagram" className="footer-social-item">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm-4 5a4 4 0 0 0-3.995 3.8L8 12a4 4 0 1 0 4-4m4.5-1.5a1 1 0 0 0-.993.883l-.007.127a1 1 0 0 0 1.993.117L17.5 7.5a1 1 0 0 0-1-1"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer-links-grid">
                <div className="footer-link-column">
                  <h4 className="section-subtitle footer-column-title">
                    Quick Links
                  </h4>
                  <nav className="footer-nav-list">
                    <Link href="/">
                      <a>
                        <div className="footer-thq-footer-nav-link-elm10 footer-nav-link">
                          <span>Home</span>
                        </div>
                      </a>
                    </Link>
                    <Link href="/about">
                      <a>
                        <div className="footer-thq-footer-nav-link-elm11 footer-nav-link">
                          <span>About Us</span>
                        </div>
                      </a>
                    </Link>
                    <Link href="/services">
                      <a>
                        <div className="footer-thq-footer-nav-link-elm12 footer-nav-link">
                          <span>Our Services</span>
                        </div>
                      </a>
                    </Link>
                    <Link href="/infection-screening">
                      <a>
                        <div className="footer-nav-link">
                          <span>Available Tests</span>
                        </div>
                      </a>
                    </Link>
                    <Link href="/contact">
                      <a>
                        <div className="footer-thq-footer-nav-link-elm14 footer-nav-link">
                          <span>Contact Us</span>
                        </div>
                      </a>
                    </Link>
                  </nav>
                </div>
                <div className="footer-link-column">
                  <h4 className="section-subtitle footer-column-title">
                    Our Services
                  </h4>
                  <nav className="footer-nav-list">
                    <Link href="/blood-analysis">
                      <a>
                        <div className="footer-thq-footer-nav-link-elm15 footer-nav-link">
                          <span>Blood Analysis</span>
                        </div>
                      </a>
                    </Link>
                    <Link href="/dna-paternity-testing">
                      <a>
                        <div className="footer-thq-footer-nav-link-elm16 footer-nav-link">
                          <span>DNA Paternity Testing</span>
                        </div>
                      </a>
                    </Link>
                    <Link href="/infection-screening">
                      <a>
                        <div className="footer-thq-footer-nav-link-elm17 footer-nav-link">
                          <span>Infection Screening</span>
                        </div>
                      </a>
                    </Link>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Histopathology</span>
                      </div>
                    </a>
                    <Link href="/hormonal-profile">
                      <a>
                        <div className="footer-thq-footer-nav-link-elm19 footer-nav-link">
                          <span>Hormonal Profiles</span>
                        </div>
                      </a>
                    </Link>
                  </nav>
                </div>
                <div className="footer-address-column footer-link-column">
                  <h4 className="section-subtitle footer-column-title">
                    Our Locations
                  </h4>
                  <div className="footer-address-list">
                    <div className="footer-address-item">
                      <div className="footer-address-icon">
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="m12 18l-2-4l-7-3.5a.55.55 0 0 1 0-1L21 3l-2.901 8.034m3.022 9.087a3 3 0 1 0-4.242 0Q17.506 20.749 19 22q1.577-1.335 2.121-1.879M19 18v.01"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <div className="footer-address-content">
                        <p className="section-content">
                          <span className="footer-text20">Lagos HQ:</span>
                          <span>
                            {' '}
                            45 Medical Drive, Victoria Island, Lagos, Nigeria
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="footer-address-item">
                      <div className="footer-address-icon">
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="m12 18l-2-4l-7-3.5a.55.55 0 0 1 0-1L21 3l-2.901 8.034m3.022 9.087a3 3 0 1 0-4.242 0Q17.506 20.749 19 22q1.577-1.335 2.121-1.879M19 18v.01"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <div className="footer-address-content">
                        <p className="section-content">
                          Tubman Street, Buchanan Grand Bassa County, Liberia
                        </p>
                      </div>
                    </div>
                    <div className="footer-address-item">
                      <div className="footer-address-icon">
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="m12 18l-2-4l-7-3.5a.55.55 0 0 1 0-1L21 3l-2.901 8.034m3.022 9.087a3 3 0 1 0-4.242 0Q17.506 20.749 19 22q1.577-1.335 2.121-1.879M19 18v.01"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <div className="footer-address-content">
                        <p className="section-content">
                          Gwamaka Street, Salasala Dar Es Salaam, Tanzania
                        </p>
                      </div>
                    </div>
                    <div className="footer-address-item">
                      <div className="footer-address-icon">
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="m12 18l-2-4l-7-3.5a.55.55 0 0 1 0-1L21 3l-2.901 8.034m3.022 9.087a3 3 0 1 0-4.242 0Q17.506 20.749 19 22q1.577-1.335 2.121-1.879M19 18v.01"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <div className="footer-address-content">
                        <p className="section-content">
                          Gwamaka Street, Salasala Dar Es Salaam, Tanzania
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-middle-row">
              <div className="footer-contact-bar">
                <a href="tel:+2347062068132">
                  <div className="footer-thq-footer-contact-pill-elm1 footer-contact-pill">
                    <div className="footer-contact-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
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
                    <span className="section-content">
                      +234 (0) 800-PRIME-LAB
                    </span>
                  </div>
                </a>
                <a href="mailto:auwalgarbahussain@primepathologyclinic.com?subject=">
                  <div className="footer-thq-footer-contact-pill-elm2 footer-contact-pill">
                    <div className="footer-contact-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                          <rect
                            x="2"
                            y="4"
                            rx="2"
                            width="20"
                            height="16"
                          ></rect>
                        </g>
                      </svg>
                    </div>
                    <span className="section-content">
                      diagnostics@primepathologyclinic.com
                    </span>
                  </div>
                </a>
              </div>
              <div className="footer-certifications">
                <div className="footer-cert-badge">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
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
                  <span>ISO 15189 Certified</span>
                </div>
                <div className="footer-cert-badge">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></path>
                      <path d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2m1 9h4m-2-2v4"></path>
                    </g>
                  </svg>
                  <span>MLSCN Approved</span>
                </div>
              </div>
            </div>
            <div className="footer-bottom-bar">
              <div className="footer-copyright">
                <p className="section-content">
                  2026 Prime Pathology Clinic. All Rights Reserved.
                </p>
              </div>
              <div className="footer-legal-links">
                <Link href="/privacy-policy">
                  <a>
                    <div className="footer-thq-footer-legal-link-elm1 footer-legal-link">
                      <span>Privacy Policy</span>
                    </div>
                  </a>
                </Link>
                <Link href="/terms-of-service">
                  <a>
                    <div className="footer-thq-footer-legal-link-elm2 footer-legal-link">
                      <span>Terms of Service</span>
                    </div>
                  </a>
                </Link>
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Sitemap</span>
                  </div>
                </a>
              </div>
              <div className="footer-credit">
                <p className="section-content">
                  <span>
                    Designed &amp; Developed by
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="footer-text28">Volues</span>
                </p>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<script defer data-name="footer-animations">
(function(){
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const footerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const footer = entry.target;
      const columns = footer.querySelectorAll('.footer-brand-column, .footer-link-column');
      const bottomBar = footer.querySelector('.footer-bottom-bar');
      
      columns.forEach((col, index) => {
        col.style.opacity = '0';
        col.style.transform = 'translateY(20px)';
        col.style.transition = \`all 0.6s ease \${index * 0.1}s\`;
        
        requestAnimationFrame(() => {
          col.style.opacity = '1';
          col.style.transform = 'translateY(0)';
        });
      });

      if (bottomBar) {
        bottomBar.style.opacity = '0';
        bottomBar.style.transition = 'opacity 1s ease 0.8s';
        requestAnimationFrame(() => {
          bottomBar.style.opacity = '1';
        });
      }
      
      footerObserver.unobserve(footer);
    }
  });
}, observerOptions);

const footerElement = document.querySelector('.footer-wrapper');
if (footerElement) {
  footerObserver.observe(footerElement);
}

const socialIcons = document.querySelectorAll('.footer-social-item');
socialIcons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.style.boxShadow = '0 0 15px var(--color-primary)';
  });
  icon.addEventListener('mouseleave', () => {
    icon.style.boxShadow = 'none';
  });
});
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-image {
            width: 40px;
            height: 40px;
            object-fit: cover;
          }
          .footer-thq-footer-nav-link-elm10 {
            text-decoration: none;
          }
          .footer-thq-footer-nav-link-elm11 {
            text-decoration: none;
          }
          .footer-thq-footer-nav-link-elm12 {
            text-decoration: none;
          }
          .footer-thq-footer-nav-link-elm14 {
            text-decoration: none;
          }
          .footer-thq-footer-nav-link-elm15 {
            text-decoration: none;
          }
          .footer-thq-footer-nav-link-elm16 {
            text-decoration: none;
          }
          .footer-thq-footer-nav-link-elm17 {
            text-decoration: none;
          }
          .footer-thq-footer-nav-link-elm19 {
            text-decoration: none;
          }
          .footer-text20 {
            font-weight: 700;
          }
          .footer-thq-footer-contact-pill-elm1 {
            text-decoration: none;
          }
          .footer-thq-footer-contact-pill-elm2 {
            text-decoration: none;
          }
          .footer-thq-footer-legal-link-elm1 {
            text-decoration: none;
          }
          .footer-thq-footer-legal-link-elm2 {
            text-decoration: none;
          }
          .footer-text28 {
            font-weight: 700;
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Footer
