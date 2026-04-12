import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container1">
        <Head>
          <title>Contact - Prime Pathology Clinic</title>
          <meta
            property="og:title"
            content="Contact - Prime Pathology Clinic"
          />
          <meta
            property="og:description"
            content="Transforming healthcare with precision. Prime Pathology Clinic combines cutting-edge clinical testing with expert care to ensure reliable treatment for every patient."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8c302082-e6ba-41a0-9529-d6bf5ec33a06/2ed90a87-a0c5-42e0-91f2-87bf9dd64e29?org_if_sml=1&amp;force_format=original"
          />
          <link rel="canonical" href="https://patho.teleporthq.site/contact" />
          <meta
            property="og:url"
            content="https://patho.teleporthq.site/contact"
          />
        </Head>
        <Navigation></Navigation>
        <section className="contact-hero">
          <div className="contact-hero__media">
            <video
              src="https://videos.pexels.com/video-files/8325856/8325856-hd_1280_720_30fps.mp4"
              loop="true"
              muted="true"
              poster="https://images.pexels.com/videos/8325856/pictures/preview-0.jpeg"
              autoPlay="true"
              playsInline="true"
              className="contact-hero__video"
            ></video>
            <div className="contact-hero__overlay"></div>
          </div>
          <div className="contact-hero__container">
            <div className="contact-hero__content">
              <h1 className="contact-hero-title hero-title">
                <span>
                  Advanced Diagnostics
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
              </h1>
              <p className="hero-subtitle">
                Our laboratory team is committed to providing reliable support
                and fast, accurate diagnostic results for every patient and
                clinical partner.
              </p>
              <div className="contact-hero__actions">
                <a href="#form">
                  <div className="btn btn-primary btn-lg">
                    <span>Book Test</span>
                  </div>
                </a>
                <a href="#callback">
                  <div className="btn btn-outline btn-lg">
                    <span>Request Callback</span>
                  </div>
                </a>
              </div>
              <div className="contact-hero__chips">
                <div className="contact-hero__chip">
                  <div className="contact-hero__chip-icon">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <span>+234 (0) 800-PRIME-LAB</span>
                </div>
                <div className="contact-hero__chip">
                  <div className="contact-hero__chip-icon">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <span>support@primepathology.com</span>
                </div>
                <div className="contact-hero__chip contact-hero__chip--emergency">
                  <div className="contact-hero__chip-icon">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path>
                    </svg>
                  </div>
                  <span>Emergency Hotline: 911-LAB</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="visit-map">
          <div className="visit-map__grid">
            <div className="visit-map__info">
              <div className="visit-map__header">
                <h2 className="section-title">Visit Our Laboratory</h2>
                <p className="section-content">
                  Find our state-of-the-art diagnostic facilities at multiple
                  convenient locations. Each branch is equipped with the latest
                  pathology technology.
                </p>
              </div>
              <div className="visit-map__locations">
                <div className="visit-map__card">
                  <div className="visit-map__card-icon">
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
                  <div className="visit-map__card-details">
                    <span className="visit-map__card-title">
                      Main Headquarters
                    </span>
                    <address className="visit-map__card-address">
                      <span>
                        12 Medical Plaza, Victoria Island, Lagos, Nigeria
                      </span>
                    </address>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div target="_blank" className="btn-link">
                        <span>Get Directions</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="visit-map__card">
                  <div className="visit-map__card-icon">
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
                  <div className="visit-map__card-details">
                    <span className="visit-map__card-title">
                      Abuja Diagnostic Center
                    </span>
                    <address className="visit-map__card-address">
                      <span>Plot 45, Garki District, Abuja, Nigeria</span>
                    </address>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div target="_blank" className="btn-link">
                        <span>Get Directions</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="visit-map__frame-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.72834589373!2d3.4180413147701784!3d6.4301140953478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8ad7876a3809%3A0x769b764d84a7e6e5!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1654321098765!5m2!1sen!2sng"
                title="Prime Pathology Clinic Locations"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                allowFullScreen="true"
                className="visit-map__iframe"
              ></iframe>
            </div>
          </div>
        </section>
        <section className="office-info">
          <div className="office-info__container">
            <div className="office-info__header">
              <h2 className="section-title">Our Branches</h2>
              <p className="section-content">
                Reach out to any of our dedicated centers for sample collection
                and consultation.
              </p>
            </div>
            <div className="office-info__grid">
              <div className="office-info__card">
                <div className="office-info__badge">
                  <span>Main Hub</span>
                </div>
                <img
                  alt="Lagos Lab"
                  src="https://images.pexels.com/photos/5721680/pexels-photo-5721680.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="office-info__img"
                />
                <div className="office-info__body">
                  <div className="office-info__row">
                    <svg
                      fill="none"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </svg>
                    <span>Victoria Island, Lagos</span>
                  </div>
                  <div className="office-info__row">
                    <svg
                      fill="none"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle r="10" cx="12" cy="12"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>Mon - Sat: 7:00 AM - 9:00 PM</span>
                  </div>
                  <div className="office-info__row">
                    <svg
                      fill="none"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle r="4" cx="12" cy="7"></circle>
                    </svg>
                    <span>Contact: Dr. Amara Oke</span>
                  </div>
                </div>
              </div>
              <div className="office-info__card">
                <div className="office-info__badge">
                  <span>Northern Center</span>
                </div>
                <img
                  alt="Abuja Lab"
                  src="https://images.pexels.com/photos/5726702/pexels-photo-5726702.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="office-info__img"
                />
                <div className="office-info__body">
                  <div className="office-info__row">
                    <svg
                      fill="none"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </svg>
                    <span>Garki District, Abuja</span>
                  </div>
                  <div className="office-info__row">
                    <svg
                      fill="none"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle r="10" cx="12" cy="12"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>Mon - Sat: 8:00 AM - 7:00 PM</span>
                  </div>
                  <div className="office-info__row">
                    <svg
                      fill="none"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle r="4" cx="12" cy="7"></circle>
                    </svg>
                    <span>Contact: Mallam Ibrahim Yusuf</span>
                  </div>
                </div>
              </div>
              <div className="office-info__card">
                <div className="office-info__badge">
                  <span>Delta Hub</span>
                </div>
                <img
                  alt="PH Lab"
                  src="https://images.pexels.com/photos/5726716/pexels-photo-5726716.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="office-info__img"
                />
                <div className="office-info__body">
                  <div className="office-info__row">
                    <svg
                      fill="none"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </svg>
                    <span>Trans Amadi, Port Harcourt</span>
                  </div>
                  <div className="office-info__row">
                    <svg
                      fill="none"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle r="10" cx="12" cy="12"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="office-info__row">
                    <svg
                      fill="none"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle r="4" cx="12" cy="7"></circle>
                    </svg>
                    <span>Contact: Mrs. Blessing Enoh</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="form" className="inquiry-form">
          <div className="inquiry-form__container">
            <div className="inquiry-form__card">
              <div className="inquiry-form__header">
                <h2 className="section-title">
                  Send an Inquiry or Book a Test
                </h2>
                <p className="section-content">
                  Fill out the form below and our medical liaison will contact
                  you within 30 minutes.
                </p>
              </div>
              <form
                action="/submit"
                method="POST"
                data-form-id="4c4c9949-0ce5-4a35-a245-2c50571b8d83"
                className="inquiry-form__element"
              >
                <div className="inquiry-form__row">
                  <div className="inquiry-form__group">
                    <label htmlFor="full-name" className="inquiry-form__label">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="full-name"
                      name="true"
                      required="true"
                      placeholder="John Doe"
                      data-form-field-id="full-name"
                      className="inquiry-form__input"
                    />
                  </div>
                  <div className="inquiry-form__group">
                    <label
                      htmlFor="email-address"
                      className="inquiry-form__label"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email-address"
                      name="email"
                      required="true"
                      placeholder="john@example.com"
                      data-form-field-id="email-address"
                      className="inquiry-form__input"
                    />
                  </div>
                </div>
                <div className="inquiry-form__row">
                  <div className="inquiry-form__group">
                    <label
                      htmlFor="branch-select"
                      className="inquiry-form__label"
                    >
                      Preferred Branch *
                    </label>
                    <select
                      id="branch-select"
                      name="branch"
                      required="true"
                      data-form-field-id="branch-select"
                      className="inquiry-form__input"
                    >
                      <option value="true">Select a Location</option>
                      <option value="lagos">Victoria Island, Lagos</option>
                      <option value="abuja">Garki District, Abuja</option>
                      <option value="ph">Trans Amadi, PH</option>
                    </select>
                  </div>
                  <div className="inquiry-form__group">
                    <label htmlFor="test-type" className="inquiry-form__label">
                      Test Type
                    </label>
                    <select
                      id="test-type"
                      name="test"
                      data-form-field-id="test-type"
                      className="inquiry-form__input"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="blood">Blood Tests</option>
                      <option value="dna">DNA Testing</option>
                      <option value="screening">Infection Screening</option>
                      <option value="histopathology">Histopathology</option>
                    </select>
                  </div>
                </div>
                <div className="inquiry-form__group">
                  <label
                    htmlFor="referral-file"
                    className="inquiry-form__label"
                  >
                    Upload Referral (Optional)
                  </label>
                  <div className="inquiry-form__file-wrapper">
                    <input
                      type="file"
                      id="referral-file"
                      name="referral"
                      data-form-field-id="referral-file"
                      className="inquiry-form__file"
                    />
                    <span className="inquiry-form__file-hint">
                      PDF or Image (Max 5MB)
                    </span>
                  </div>
                </div>
                <div className="inquiry-form__group">
                  <label
                    htmlFor="message-content"
                    className="inquiry-form__label"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message-content"
                    name="message"
                    required="true"
                    minlength="10"
                    placeholder="Please describe your symptoms or inquiry..."
                    data-form-field-id="message-content"
                    className="inquiry-form__textarea"
                  ></textarea>
                </div>
                <div className="inquiry-form__footer">
                  <button
                    id="thq_button_GUNF"
                    name="button"
                    type="submit"
                    data-form-field-id="thq_button_GUNF"
                    className="btn btn-primary btn-lg"
                  >
                    Submit Request
                  </button>
                  <p className="inquiry-form__disclaimer">
                    By submitting, you agree to our patient privacy policy and
                    data protection terms.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className="support-hub">
          <div className="support-hub__container">
            <div className="support-hub__header">
              <h2 className="section-title">Support &amp; Quick Help</h2>
              <p className="section-content">
                Need immediate answers? Explore our support channels and
                frequently accessed resources.
              </p>
            </div>
            <div className="support-hub__grid">
              <div className="support-hub__card">
                <div className="support-hub__icon">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="var(--color-primary)"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">WhatsApp Support</h3>
                <p className="section-content">
                  Chat directly with our lab technicians for real-time updates
                  on your samples.
                </p>
                <a href="#">
                  <div className="btn btn-sm btn-outline">
                    <span>Start Chat</span>
                  </div>
                </a>
              </div>
              <div className="support-hub__card">
                <div className="support-hub__icon">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="var(--color-primary)"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle r="10" cx="12" cy="12"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Results FAQ</h3>
                <p className="section-content">
                  Learn about turnaround times, how to interpret your results,
                  and next steps.
                </p>
                <a href="#">
                  <div className="btn btn-sm btn-outline">
                    <span>Read FAQs</span>
                  </div>
                </a>
              </div>
              <div className="support-hub__card">
                <div className="support-hub__icon">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="var(--color-primary)"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Priority Support</h3>
                <p className="section-content">
                  Exclusive channel for hospitals and corporate health partners.
                </p>
                <span className="support-hub__badge">Partner Only</span>
              </div>
            </div>
          </div>
        </section>
        <section className="specialist-team">
          <div className="specialist-team__container">
            <div className="specialist-team__header">
              <h2 className="section-title">Specialist Contacts</h2>
              <p className="section-content">
                Direct access to our senior management for clinical
                consultations and partnerships.
              </p>
            </div>
            <div className="specialist-team__grid">
              <div className="specialist-team__card">
                <div className="specialist-team__image-wrapper">
                  <img
                    alt="Chief Pathologist"
                    src="https://images.pexels.com/photos/9574348/pexels-photo-9574348.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="specialist-team__img"
                  />
                </div>
                <div className="specialist-team__info">
                  <h3 className="section-subtitle">Dr. Zahra Mansour</h3>
                  <span className="specialist-team__role">
                    Chief Pathologist
                  </span>
                  <div className="specialist-team__status">
                    <span className="specialist-team__dot specialist-team__dot--active"></span>
                    <span>
                      {' '}
                      Available for Consult
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <button className="btn btn-primary btn-sm">
                    Email Specialist
                  </button>
                </div>
              </div>
              <div className="specialist-team__card">
                <div className="specialist-team__image-wrapper">
                  <img
                    alt="Lab Coordinator"
                    src="https://images.pexels.com/photos/5726811/pexels-photo-5726811.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="specialist-team__img"
                  />
                </div>
                <div className="specialist-team__info">
                  <h3 className="section-subtitle">Kofi Mensah</h3>
                  <span className="specialist-team__role">
                    Lab Operations Manager
                  </span>
                  <div className="specialist-team__status">
                    <span className="specialist-team__dot specialist-team__dot--active"></span>
                    <span>
                      {' '}
                      On-Site Support
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <button className="btn btn-primary btn-sm">
                    Contact Admin
                  </button>
                </div>
              </div>
              <div className="specialist-team__card">
                <div className="specialist-team__image-wrapper">
                  <img
                    alt="Patient Liaison"
                    src="https://images.pexels.com/photos/8442574/pexels-photo-8442574.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="specialist-team__img"
                  />
                </div>
                <div className="specialist-team__info">
                  <h3 className="section-subtitle">Amina Belhadj</h3>
                  <span className="specialist-team__role">
                    Patient Liaison Officer
                  </span>
                  <div className="specialist-team__status">
                    <span className="specialist-team__dot specialist-team__dot--away"></span>
                    <span>
                      {' '}
                      In Meeting
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <button className="btn btn-primary btn-sm">
                    Request Callback
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="emergency-strip">
          <div className="emergency-strip__container">
            <div className="emergency-strip__content">
              <div className="emergency-strip__alert">
                <div className="emergency-strip__pulse"></div>
                <span className="emergency-strip__tag">
                  Urgent Support Required?
                </span>
              </div>
              <h2 className="emergency-strip__title">
                <span>
                  Call our 24/7 Emergency Hotline:
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a href="tel:911-LAB">
                  <div className="contact-thq-emergency-striplink-elm">
                    <span>911-PRIME-LAB</span>
                  </div>
                </a>
              </h2>
            </div>
            <div className="emergency-strip__actions">
              <a href="#form">
                <div className="btn-accent btn btn-lg">
                  <span>Book Urgent Test</span>
                </div>
              </a>
              <a href="#">
                <div className="btn btn-outline btn-lg">
                  <span>Home Collection</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <div className="contact-container2">
          <div className="contact-container3">
            <Script
              html={`<style>
        @keyframes pulse {0% {transform: scale(0.95);
box-shadow: 0 0 0 0 rgba(226, 51, 51, 0.7);}
70% {transform: scale(1);
box-shadow: 0 0 0 10px rgba(226, 51, 51, 0);}
100% {transform: scale(0.95);
box-shadow: 0 0 0 0 rgba(226, 51, 51, 0);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="contact-container4">
          <div className="contact-container5">
            <Script
              html={`<script defer data-name="contact-page-interactions">
(function(){
// Form Interactivity Enhancement
const contactForm = document.querySelector('.inquiry-form__element');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    // Native validation handles the rest
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.textContent = 'Processing...';
    btn.disabled = true;
  });
}

// Simple Scroll Reveal for cards
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Apply initial styles and observe
const animatedElements = document.querySelectorAll('.office-info__card, .support-hub__card, .specialist-team__card');
animatedElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.6s ease-out';
  observer.observe(el);
});

// Emergency Hotline Click Tracking (Mock)
const emergencyLink = document.querySelector('.emergency-strip__link');
if (emergencyLink) {
  emergencyLink.addEventListener('click', () => {
    console.log('Emergency hotline initiated');
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
          .contact-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .contact-thq-emergency-striplink-elm {
            color: var(--color-accent);
            text-decoration: none;
          }
          .contact-container2 {
            display: none;
          }
          .contact-container3 {
            display: contents;
          }
          .contact-container4 {
            display: none;
          }
          .contact-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Contact
