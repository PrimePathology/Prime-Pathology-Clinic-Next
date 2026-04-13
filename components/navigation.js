import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container1">
        <nav className="navigation-wrapper">
          <div className="navigation-container">
            <a href="Homepage">
              <div className="navigation-logo-link">
                <div className="navigation-logo-icon">
                  <img
                    alt="image"
                    src="/ppclogo-200h.png"
                    className="navigation-image1"
                  />
                </div>
                <span className="navigation-text10">
                  <span>
                    Prime Pathology
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="navigation-text12">Clinic</span>
                </span>
              </div>
            </a>
            <ul className="navigation-desktop-menu">
              <li className="navigation-menu-item">
                <Link href="/">
                  <a>
                    <div className="navigation-thq-navigation-menu-link-elm10 navigation-menu-link">
                      <span>Home</span>
                    </div>
                  </a>
                </Link>
              </li>
              <Link href="/about">
                <a>
                  <li className="navigation-thq-navigation-menu-item-elm11 navigation-menu-item">
                    <div className="navigation-menu-link">
                      <span>About</span>
                    </div>
                  </li>
                </a>
              </Link>
              <Link href="/services">
                <a>
                  <li className="navigation-thq-navigation-menu-item-elm12 navigation-menu-item">
                    <div className="navigation-menu-link">
                      <span>Services</span>
                    </div>
                  </li>
                </a>
              </Link>
              <Link href="/infection-screening">
                <a>
                  <li className="navigation-thq-navigation-menu-item-elm13 navigation-menu-item">
                    <div className="navigation-menu-link">
                      <span>Infection Screening</span>
                    </div>
                  </li>
                </a>
              </Link>
              <Link href="/team">
                <a>
                  <li className="navigation-thq-navigation-menu-item-elm14 navigation-menu-item">
                    <div className="navigation-menu-link">
                      <span>Team</span>
                    </div>
                  </li>
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <li className="navigation-thq-navigation-menu-item-elm15 navigation-menu-item">
                    <div className="navigation-menu-link">
                      <span>Contact</span>
                    </div>
                  </li>
                </a>
              </Link>
              <div data-thq="thq-dropdown" className="navigation-thq-dropdown1">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="navigation-thq-dropdown-toggle1"
                >
                  <span>More</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="navigation-thq-dropdown-arrow1"
                  >
                    <svg viewBox="0 0 1024 1024" className="navigation-icon1">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="navigation-thq-dropdown-list1"
                >
                  <li className="navigation-menu-item">
                    <Link href="/privacy-policy">
                      <a>
                        <div className="navigation-menu-link">
                          <span>Privacy Policy</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li className="navigation-menu-item">
                    <Link href="/terms-of-service">
                      <a>
                        <div className="navigation-menu-link">
                          <span>Terms of Service</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li className="navigation-menu-item">
                    <Link href="/team">
                      <a>
                        <div className="navigation-menu-link">
                          <span>Team</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li className="navigation-menu-item">
                    <Link href="/team">
                      <a>
                        <div className="navigation-menu-link">
                          <span>Team</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li className="navigation-menu-item">
                    <Link href="/blood-analysis">
                      <a>
                        <div className="navigation-menu-link">
                          <span>Blood Analysis</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li className="navigation-menu-item">
                    <Link href="/dna-paternity-testing">
                      <a>
                        <div className="navigation-menu-link">
                          <span>DNA Paternity Testing</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li className="navigation-menu-item">
                    <Link href="/hormonal-profile">
                      <a>
                        <div className="navigation-menu-link">
                          <span>Hormonal Profile</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li className="navigation-menu-item">
                    <Link href="/histopathology">
                      <a>
                        <div className="navigation-menu-link">
                          <span>Histopathology</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </ul>
            <div className="navigation-actions">
              <Link href="/infection-screening">
                <a>
                  <div className="btn navigation-cta-desktop btn-primary">
                    <span>Book Test</span>
                  </div>
                </a>
              </Link>
              <button
                id="navigation-mobile-toggle"
                aria-label="Open Menu"
                aria-expanded="false"
                className="navigation-toggle-btn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M10 6a4 4 0 1 0-8 0a4 4 0 0 0 8 0m0 12a4 4 0 1 0-8 0a4 4 0 0 0 8 0M22 6a4 4 0 1 0-8 0a4 4 0 0 0 8 0m0 12a4 4 0 1 0-8 0a4 4 0 0 0 8 0"
                    fill="none"
                    color="currentColor"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <div
          id="navigation-mobile-overlay"
          className="navigation-mobile-overlay"
        >
          <div className="navigation-overlay-header">
            <a href="Homepage">
              <div className="navigation-logo-link">
                <div className="navigation-logo-icon">
                  <img
                    alt="image"
                    src="/ppclogo-200h.png"
                    className="navigation-image2"
                  />
                </div>
              </div>
            </a>
            <button
              id="navigation-mobile-close"
              aria-label="Close Menu"
              className="navigation-close-btn"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-5.5-3.5l-5 5m0-5l5 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="navigation-overlay-content">
            <ul className="navigation-mobile-menu">
              <li className="navigation-mobile-item">
                <a href="Homepage">
                  <div className="navigation-mobile-link">
                    <span>Home</span>
                  </div>
                </a>
              </li>
              <li className="navigation-mobile-item">
                <Link href="/about">
                  <a>
                    <div className="navigation-mobile-link">
                      <span>About</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li className="navigation-mobile-item">
                <Link href="/services">
                  <a>
                    <div className="navigation-mobile-link">
                      <span>Services</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li className="navigation-mobile-item">
                <Link href="/infection-screening">
                  <a>
                    <div className="navigation-mobile-link">
                      <span>Infection Screening</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li className="navigation-mobile-item">
                <Link href="/team">
                  <a>
                    <div className="navigation-thq-navigation-mobile-link-elm14 navigation-mobile-link">
                      <span>Team</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li className="navigation-mobile-item">
                <Link href="/contact">
                  <a>
                    <div className="navigation-mobile-link">
                      <span>Contact</span>
                    </div>
                  </a>
                </Link>
              </li>
              <div data-thq="thq-dropdown" className="navigation-thq-dropdown2">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="navigation-thq-dropdown-toggle2"
                >
                  <span>More</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="navigation-thq-dropdown-arrow2"
                  >
                    <svg viewBox="0 0 1024 1024" className="navigation-icon7">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="navigation-thq-dropdown-list2"
                >
                  <li className="navigation-mobile-item">
                    <Link href="/privacy-policy">
                      <a>
                        <div className="navigation-mobile-link">
                          <span>Privacy Policy</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li className="navigation-mobile-item">
                    <Link href="/terms-of-service">
                      <a>
                        <div className="navigation-mobile-link">
                          <span>Terms of Service</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li className="navigation-mobile-item">
                    <Link href="/team">
                      <a>
                        <div className="navigation-mobile-link">
                          <span>Team</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li className="navigation-mobile-item">
                    <Link href="/team">
                      <a>
                        <div className="navigation-mobile-link">
                          <span>Team</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li className="navigation-mobile-item"></li>
                  <li className="navigation-mobile-item">
                    <Link href="/blood-analysis">
                      <a>
                        <div className="navigation-mobile-link">
                          <span>Blood Analysis</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li className="navigation-mobile-item">
                    <Link href="/dna-paternity-testing">
                      <a>
                        <div className="navigation-mobile-link">
                          <span>DNA Paternity Testing</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li className="navigation-mobile-item">
                    <Link href="/hormonal-profile">
                      <a>
                        <div className="navigation-mobile-link">
                          <span>Hormonal Profile</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li className="navigation-mobile-item">
                    <Link href="/histopathology">
                      <a>
                        <div className="navigation-mobile-link">
                          <span>Histopathology</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </ul>
            <div className="navigation-overlay-footer">
              <Link href="/infection-screening">
                <a>
                  <div className="btn btn-primary navigation-cta-mobile btn-lg">
                    <span>Get Diagnosis</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<script defer data-name="navigation-logic">
(function(){
  const mobileToggle = document.getElementById('navigation-mobile-toggle');
  const mobileClose = document.getElementById('navigation-mobile-close');
  const mobileOverlay = document.getElementById('navigation-mobile-overlay');
  const body = document.body;

  const openMenu = () => {
    mobileOverlay.classList.add('is-active');
    mobileToggle.setAttribute('aria-expanded', 'true');
    body.style.overflow = 'hidden';
    
    const menuLinks = mobileOverlay.querySelectorAll('.navigation-mobile-link');
    menuLinks.forEach((link, index) => {
      link.style.opacity = '0';
      link.style.transform = 'translateY(20px)';
      setTimeout(() => {
        link.style.transition = 'all 0.4s ease';
        link.style.opacity = '1';
        link.style.transform = 'translateY(0)';
      }, 100 + (index * 50));
    });
  };

  const closeMenu = () => {
    mobileOverlay.classList.remove('is-active');
    mobileToggle.setAttribute('aria-expanded', 'false');
    body.style.overflow = '';
  };

  mobileToggle.addEventListener('click', openMenu);
  mobileClose.addEventListener('click', closeMenu);

  mobileOverlay.querySelectorAll('.navigation-mobile-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileOverlay.classList.contains('is-active')) {
      closeMenu();
    }
  });

  let lastScroll = 0;
  const navWrapper = document.querySelector('.navigation-wrapper');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      navWrapper.style.boxShadow = 'var(--shadow-level-2)';
      navWrapper.style.background = 'color-mix(in srgb, var(--color-surface) 98%, transparent)';
    } else {
      navWrapper.style.boxShadow = 'none';
      navWrapper.style.background = 'var(--color-surface)';
    }

    if (currentScroll > lastScroll && currentScroll > 500) {
      navWrapper.style.transform = 'translateY(-100%)';
    } else {
      navWrapper.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
  });
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-image1 {
            width: 40px;
            object-fit: cover;
          }
          .navigation-text10 {
            color: var(--dl-color-theme-neutral-dark);
            font-size: 18px;
            font-style: normal;
            font-family: '' '' '' '' Poppins '' '' '' '';
            font-weight: 700;
          }
          .navigation-text12 {
            color: var(--color-accent);
          }
          .navigation-thq-navigation-menu-link-elm10 {
            text-decoration: none;
          }
          .navigation-thq-navigation-menu-item-elm11 {
            text-decoration: none;
          }
          .navigation-thq-navigation-menu-item-elm12 {
            text-decoration: none;
          }
          .navigation-thq-navigation-menu-item-elm13 {
            text-decoration: none;
          }
          .navigation-thq-navigation-menu-item-elm14 {
            text-decoration: none;
          }
          .navigation-thq-navigation-menu-item-elm15 {
            text-decoration: none;
          }
          .navigation-thq-dropdown1 {
            cursor: pointer;
            display: inline-block;
            padding: 4px 8px;
            position: relative;
            border-color: rgba(0, 0, 0, 0.45);
            border-style: solid;
            border-width: 1px;
            border-radius: 4px;
          }
          .navigation-thq-dropdown-toggle1 {
            gap: 4px;
            display: inline-flex;
            align-items: center;
          }
          .navigation-thq-dropdown-arrow1 {
            transition: 0.3s;
          }
          .navigation-icon1 {
            width: 18px;
            height: 18px;
          }
          .navigation-thq-dropdown-list1 {
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            flex-direction: column;
            list-style-type: none;
          }
          .navigation-image2 {
            width: 200px;
            object-fit: cover;
          }
          .navigation-thq-navigation-mobile-link-elm14 {
            text-decoration: none;
          }
          .navigation-thq-dropdown2 {
            cursor: pointer;
            display: inline-block;
            padding: 4px 8px;
            position: relative;
            border-color: rgba(0, 0, 0, 0.45);
            border-style: solid;
            border-width: 1px;
            border-radius: 4px;
          }
          .navigation-thq-dropdown-toggle2 {
            gap: 4px;
            display: inline-flex;
            align-items: center;
          }
          .navigation-thq-dropdown-arrow2 {
            transition: 0.3s;
          }
          .navigation-icon7 {
            width: 18px;
            height: 18px;
          }
          .navigation-thq-dropdown-list2 {
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            flex-direction: column;
            list-style-type: none;
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
          @media (max-width: 479px) {
            .navigation-image2 {
              width: 40px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Navigation
