import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Research = (props) => {
  return (
    <>
      <div className="research-container10">
        <Head>
          <title>Research - Prime Pathology Clinic</title>
          <meta
            property="og:title"
            content="Research - Prime Pathology Clinic"
          />
          <meta
            property="og:description"
            content="Transforming healthcare with precision. Prime Pathology Clinic combines cutting-edge clinical testing with expert care to ensure reliable treatment for every patient."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8c302082-e6ba-41a0-9529-d6bf5ec33a06/2ed90a87-a0c5-42e0-91f2-87bf9dd64e29?org_if_sml=1&amp;force_format=original"
          />
          <link rel="canonical" href="https://patho.teleporthq.site/research" />
          <meta
            property="og:url"
            content="https://patho.teleporthq.site/research"
          />
        </Head>
        <Navigation></Navigation>
        <div className="research-container11">
          <div className="research-container12">
            <Script
              html={`<style>
section {
  position: relative;
  overflow: hidden;
}
details {
  background: var(--color-surface);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-border);
  overflow: hidden;
}
summary {
  padding: var(--spacing-lg);
  cursor: pointer;
  font-weight: var(--font-weight-medium);
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
summary::after {
  content: '+';
  font-size: 1.5rem;
  color: var(--color-primary);
}
details[open] summary::after {
  content: '−';
}
</style>`}
            ></Script>
          </div>
        </div>
        <section className="tests-hero">
          <div className="tests-hero-video-container">
            <video
              src="https://videos.pexels.com/video-files/4121061/4121061-hd_1280_720_50fps.mp4"
              loop="true"
              muted="true"
              autoPlay="true"
              playsInline="true"
              className="tests-hero-video"
            ></video>
            <div className="tests-hero-overlay"></div>
          </div>
          <div className="tests-hero-content-wrapper">
            <div className="tests-hero-content">
              <span className="tests-hero-badge">
                Prime Pathology Research Institute
              </span>
              <h1 className="hero-title tests-hero-title">
                Advanced Pathology Research &amp; Diagnostic Innovation
              </h1>
              <p className="hero-subtitle">
                Pioneering translational research in molecular diagnostics,
                immunopathology, and clinical biomarker discovery. Advancing
                precision medicine through rigorous scientific inquiry and
                peer-reviewed investigation.
              </p>
              <div className="tests-hero-actions">
                <div className="tests-hero-stats">
                  <div className="tests-hero-stat-item">
                    <span className="tests-hero-stat-value">120+</span>
                    <span className="tests-hero-stat-label">
                      Peer-Reviewed Publications
                    </span>
                  </div>
                  <div className="tests-hero-stat-item">
                    <span className="tests-hero-stat-value">15+</span>
                    <span className="tests-hero-stat-label">
                      Active Research Grants
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="tests-hero-floating-elements">
            <div className="floating-molecule molecule-1"></div>
            <div className="floating-molecule molecule-2"></div>
          </div>
        </section>
        <section className="test-categories">
          <section className="test-categories">
            <div className="test-categories-container">
              <div className="test-categories-header">
                <h2 className="section-title">Research Specialties</h2>
                <p className="section-content">
                  Our institute conducts advanced investigations across six core
                  pathology disciplines, driving innovation in diagnostic
                  science and translational medicine.
                </p>
              </div>
              <div className="test-categories-grid">
                <div className="test-category-card">
                  <div className="test-category-icon-wrapper">
                    <svg
                      fill="none"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                      height="32"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m10 16l1.5 1.5M14 8l-1.5-1.5M15 2c-1.798 1.998-2.518 3.995-2.807 5.993M16.5 10.5l1 1M17 6l-2.891-2.891M2 15c6.667-6 13.333 0 20-6m-2 0l.891.891M3.109 14.109L4 15m2.5-2.5l1 1M7 18l2.891 2.891M9 22c1.798-1.998 2.518-3.995 2.807-5.993"></path>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">Molecular Diagnostics</h3>
                  <p className="section-content">
                    Nucleic acid amplification, next-generation sequencing, and
                    real-time PCR assays for pathogen detection,
                    pharmacogenomics, and cancer mutation profiling.
                  </p>
                  <button className="btn btn-sm btn-outline">
                    View Protocols
                  </button>
                </div>
                <div className="test-category-card">
                  <div className="test-category-icon-wrapper">
                    <svg
                      fill="none"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                      height="32"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 18h8M3 22h18m-7 0a7 7 0 1 0 0-14h-1m-4 6h2m-2-2a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Zm3-6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">Immunohistochemistry</h3>
                  <p className="section-content">
                    Tissue-based biomarker expression studies using monoclonal
                    antibody panels for cancer subtyping, prognostic
                    stratification, and therapeutic target validation.
                  </p>
                  <button className="btn btn-sm btn-outline">
                    View Protocols
                  </button>
                </div>
                <div className="test-category-card">
                  <div className="test-category-icon-wrapper">
                    <svg
                      fill="none"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                      height="32"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0m5-5V3m-1 0h2m2.536 5.464l2.828-2.828m-.707-.707l1.414 1.414M17 12h4m0-1v2m-5.465 2.536l2.829 2.828m.707-.707l-1.414 1.414M12 17v4m1 0h-2m-2.535-5.464l-2.829 2.828m.707.707L4.93 17.657M7 12H3m0 1v-2m5.464-2.536L5.636 5.636m-.707.707L6.343 4.93"></path>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">Clinical Microbiology</h3>
                  <p className="section-content">
                    Antimicrobial resistance surveillance, pathogen whole-genome
                    sequencing, and culture-independent diagnostic testing for
                    infectious disease epidemiology.
                  </p>
                  <button className="btn btn-sm btn-outline">
                    View Protocols
                  </button>
                </div>
                <div className="test-category-card">
                  <div className="test-category-icon-wrapper">
                    <svg
                      fill="none"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                      height="32"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                      <path d="M3.22 13H9.5l.5-1l2 4.5l2-7l1.5 3.5h5.27"></path>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">Hematopathology</h3>
                  <p className="section-content">
                    Morphologic and flow cytometric analysis of hematologic
                    malignancies, coagulation disorder research, and bone marrow
                    engraftment monitoring protocols.
                  </p>
                  <button className="btn btn-sm btn-outline">
                    View Protocols
                  </button>
                </div>
                <div className="test-category-card">
                  <div className="test-category-icon-wrapper">
                    <svg
                      fill="none"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                      height="32"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <g>
                        <path d="M12 21v-6m0-6V3M3 15h18M3 9h18"></path>
                        <rect x="3" y="3" rx="2" width="18" height="18"></rect>
                      </g>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">Cytopathology</h3>
                  <p className="section-content">
                    Fine-needle aspiration cytology research, liquid-based
                    cytology validation, and AI-assisted screening algorithms
                    for early neoplastic detection.
                  </p>
                  <button className="btn btn-sm btn-outline">
                    View Protocols
                  </button>
                </div>
                <div className="test-category-card">
                  <div className="test-category-icon-wrapper">
                    <svg
                      fill="none"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                      height="32"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <g>
                        <circle r="1" cx="12" cy="12"></circle>
                        <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9c-4.54-4.52-9.87-6.54-11.9-4.5c-2.04 2.03-.02 7.36 4.5 11.9c4.54 4.52 9.87 6.54 11.9 4.5"></path>
                        <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9c-2.03-2.04-7.36-.02-11.9 4.5c-4.52 4.54-6.54 9.87-4.5 11.9c2.03 2.04 7.36.02 11.9-4.5"></path>
                      </g>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">Molecular Genetics</h3>
                  <p className="section-content">
                    Cytogenetic karyotyping, fluorescence in situ hybridization,
                    and chromosomal microarray analysis for constitutional and
                    acquired genetic disorder research.
                  </p>
                  <button className="btn btn-sm btn-outline">
                    View Protocols
                  </button>
                </div>
              </div>
            </div>
          </section>
          <div className="workflow-container">
            <div className="workflow-header">
              <h2 className="section-title">
                Research Methodology &amp; Lab Capabilities
              </h2>
              <p className="section-content">
                A rigorous, peer-reviewed pipeline from hypothesis formulation
                through clinical translation, ensuring reproducible and
                publication-grade outcomes.
              </p>
            </div>
            <div className="tests-workflow-steps">
              <div className="workflow-step">
                <div className="workflow-step-visual">
                  <div className="workflow-step-number">
                    <span>01</span>
                  </div>
                  <div className="workflow-step-icon">
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
                      <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                      <path d="M3 10h18"></path>
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                    </svg>
                  </div>
                </div>
                <div className="workflow-step-content">
                  <h3 className="section-subtitle">
                    Hypothesis &amp; Protocol Design
                  </h3>
                  <p className="section-content">
                    Literature synthesis, power analysis, and IRB-compliant
                    protocol development with predefined primary and secondary
                    endpoints.
                  </p>
                </div>
              </div>
              <div className="workflow-step">
                <div className="workflow-step-visual">
                  <div className="workflow-step-number">
                    <span>02</span>
                  </div>
                  <div className="workflow-step-icon">
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
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path>
                      <circle r="3" cx="12" cy="12"></circle>
                    </svg>
                  </div>
                </div>
                <div className="workflow-step-content">
                  <h3 className="section-subtitle">
                    Sample Processing &amp; QC
                  </h3>
                  <p className="section-content">
                    Standardized pre-analytical workflows, chain-of-custody
                    documentation, and multi-parameter quality control for
                    specimen integrity.
                  </p>
                </div>
              </div>
              <div className="workflow-step">
                <div className="workflow-step-visual">
                  <div className="workflow-step-number">
                    <span>03</span>
                  </div>
                  <div className="workflow-step-icon">
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
                      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                      <path d="M15 18H9"></path>
                      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                      <circle r="2" cx="17" cy="18"></circle>
                      <circle r="2" cx="7" cy="18"></circle>
                    </svg>
                  </div>
                </div>
                <div className="workflow-step-content">
                  <h3 className="section-subtitle">
                    Advanced Analytical Testing
                  </h3>
                  <p className="section-content">
                    High-throughput sequencing, mass spectrometry, digital
                    pathology, and multiplex immunoassay platforms operated
                    under GLP standards.
                  </p>
                </div>
              </div>
              <div className="workflow-step">
                <div className="workflow-step-visual">
                  <div className="workflow-step-number">
                    <span>04</span>
                  </div>
                  <div className="workflow-step-icon">
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
                      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                      <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                      <path d="M10 9H8m8 4H8m8 4H8"></path>
                    </svg>
                  </div>
                </div>
                <div className="workflow-step-content">
                  <h3 className="section-subtitle">
                    Data Validation &amp; Peer Review
                  </h3>
                  <p className="section-content">
                    Biostatistical analysis, inter-laboratory concordance
                    studies, and independent expert review prior to manuscript
                    submission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="research-thq-collection-workflow-elm collection-workflow"></section>
        <section className="timelines-section">
          <div className="timelines-container">
            <div className="timelines-header">
              <h2 className="section-title">Research Processing Timelines</h2>
              <p className="section-content">
                Standard and expedited analytical pipelines to accommodate grant
                deadlines, clinical trial milestones, and publication schedules.
              </p>
            </div>
            <div className="tabs-container">
              <div role="tablist" className="tests-tabs-nav">
                <button
                  role="tab"
                  data-target="standard"
                  aria-selected="true"
                  className="tab-trigger active"
                >
                  Standard Research Pipeline
                </button>
                <button
                  role="tab"
                  data-target="stat"
                  aria-selected="false"
                  className="tab-trigger"
                >
                  Expedited Analysis
                </button>
                <button
                  role="tab"
                  data-target="special"
                  aria-selected="false"
                  className="tab-trigger"
                >
                  Complex Multi-Omic Studies
                </button>
              </div>
              <div id="standard" className="tab-panel active">
                <div className="timeline-grid">
                  <div className="timeline-item">
                    <span className="timeline-category">
                      Immunohistochemistry Panels
                    </span>
                    <span className="timeline-duration">3 - 5 Days</span>
                    <p className="section-content">
                      Tissue sectioning, antigen retrieval, antibody
                      optimization, and digital slide scanning with pathologist
                      scoring.
                    </p>
                  </div>
                  <div className="timeline-item">
                    <span className="timeline-category">
                      Quantitative PCR &amp; Genotyping
                    </span>
                    <span className="timeline-duration">5 - 7 Days</span>
                    <p className="section-content">
                      DNA/RNA extraction, assay validation, triplicate runs, and
                      statistical fold-change analysis with biological
                      replicates.
                    </p>
                  </div>
                  <div className="timeline-item">
                    <span className="timeline-category">
                      Flow Cytometry Profiling
                    </span>
                    <span className="timeline-duration">7 - 10 Days</span>
                    <p className="section-content">
                      Panel design, compensation matrix setup, acquisition on
                      calibrated cytometers, and automated gating with manual
                      review.
                    </p>
                  </div>
                </div>
              </div>
              <div id="stat" className="tab-panel">
                <div className="timeline-grid">
                  <div className="highlight timeline-item">
                    <span className="timeline-category">
                      Emergency Biomarker Quantification
                    </span>
                    <span className="timeline-duration">24 - 48 Hours</span>
                    <p className="section-content">
                      Single-plex ELISA or chemiluminescence assays for
                      time-sensitive clinical trial enrollment or grant
                      milestone reporting.
                    </p>
                  </div>
                  <div className="highlight timeline-item">
                    <span className="timeline-category">
                      Rapid Pathogen Sequencing
                    </span>
                    <span className="timeline-duration">48 - 72 Hours</span>
                    <p className="section-content">
                      Library preparation, MiSeq or MinION nanopore run, and
                      phylogenetic analysis for outbreak investigation support.
                    </p>
                  </div>
                </div>
              </div>
              <div id="special" className="tab-panel">
                <div className="timeline-grid">
                  <div className="timeline-item">
                    <span className="timeline-category">
                      Whole-Exome / Genome Sequencing
                    </span>
                    <span className="timeline-duration">4 - 6 Weeks</span>
                    <p className="section-content">
                      Sample QC, library construction, Illumina NovaSeq run,
                      bioinformatics pipeline (GATK/DRAGEN), and variant
                      annotation with ACMG classification.
                    </p>
                  </div>
                  <div className="timeline-item">
                    <span className="timeline-category">
                      Spatial Transcriptomics
                    </span>
                    <span className="timeline-duration">6 - 8 Weeks</span>
                    <p className="section-content">
                      Tissue optimization, Visium or Xenium slide processing,
                      imaging, and computational mapping of gene expression to
                      histological architecture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="lab-showcase">
          <div className="lab-showcase-container">
            <div className="lab-showcase-header">
              <h2 className="section-title">
                Research Areas &amp; Specialties
              </h2>
              <p className="section-content">
                Our principal investigators lead multi-disciplinary programs
                spanning oncology, infectious disease, genetics, and chronic
                disease pathology.
              </p>
            </div>
            <div className="lab-grid">
              <div className="lab-card">
                <img
                  alt="Oncology biomarker research laboratory"
                  src="https://images.pexels.com/photos/7723622/pexels-photo-7723622.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="lab-card-img"
                />
                <div className="lab-card-overlay">
                  <h3 className="section-subtitle">
                    Oncology Biomarker Research
                  </h3>
                  <p className="section-content">
                    Discovery and validation of circulating tumor DNA, PD-L1
                    expression profiles, and MSI/MMR status for precision
                    immuno-oncology.
                  </p>
                </div>
              </div>
              <div className="lab-card">
                <img
                  alt="Infectious disease surveillance laboratory"
                  src="https://images.pexels.com/photos/8442498/pexels-photo-8442498.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="lab-card-img"
                />
                <div className="lab-card-overlay">
                  <h3 className="section-subtitle">
                    Infectious Disease Surveillance
                  </h3>
                  <p className="section-content">
                    Genomic epidemiology of antimicrobial resistance, viral
                    variant tracking, and point-of-care diagnostic assay
                    development.
                  </p>
                </div>
              </div>
              <div className="lab-card">
                <img
                  alt="Genetic disorder screening research"
                  src="https://images.pexels.com/photos/35967917/pexels-photo-35967917.png?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="lab-card-img"
                />
                <div className="lab-card-overlay">
                  <h3 className="section-subtitle">
                    Genetic Disorder Screening
                  </h3>
                  <p className="section-content">
                    Carrier screening panels, newborn metabolic disorder
                    expansion, and prenatal cell-free DNA aneuploidy detection
                    research.
                  </p>
                </div>
              </div>
              <div className="lab-card">
                <img
                  alt="Cardiovascular risk stratification research"
                  src="https://images.pexels.com/photos/9629693/pexels-photo-9629693.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="lab-card-img"
                />
                <div className="lab-card-overlay">
                  <h3 className="section-subtitle">
                    Cardiovascular Risk Stratification
                  </h3>
                  <p className="section-content">
                    Lipoprotein subfraction analysis, high-sensitivity troponin
                    protocols, and inflammatory biomarker panels for
                    atherosclerosis prediction.
                  </p>
                </div>
              </div>
              <div className="lab-card">
                <img
                  alt="Endocrine and metabolic studies"
                  src="https://images.pexels.com/photos/8533016/pexels-photo-8533016.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="lab-card-img"
                />
                <div className="lab-card-overlay">
                  <h3 className="section-subtitle">
                    Endocrine &amp; Metabolic Studies
                  </h3>
                  <p className="section-content">
                    Insulin resistance metabolomics, thyroid autoantibody
                    profiling, and adrenal steroid pathway mass spectrometry
                    research.
                  </p>
                </div>
              </div>
              <div className="lab-card">
                <img
                  alt="Neurodegenerative disease markers research"
                  src="https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="lab-card-img"
                />
                <div className="lab-card-overlay">
                  <h3 className="section-subtitle">
                    Neurodegenerative Disease Markers
                  </h3>
                  <p className="section-content">
                    CSF amyloid-beta and tau quantification, neurofilament light
                    chain assays, and alpha-synuclein seed amplification
                    protocol development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="tests-support-hub">
          <div className="support-hub-container">
            <div className="support-hub-header">
              <h2 className="section-title">
                Publications &amp; Clinical Trials
              </h2>
              <p className="section-content">
                Selected peer-reviewed manuscripts and active interventional
                studies led by our principal investigators and collaborative
                research networks.
              </p>
            </div>
            <div className="support-grid">
              <div className="support-card">
                <div className="support-icon">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  Journal of Clinical Pathology (2024)
                </h3>
                <p className="section-content">
                  &quot;Validation of a multiplex PCR panel for rapid detection
                  of carbapenem-resistant Enterobacteriaceae in sub-Saharan
                  African tertiary centers.&quot;
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Read Abstract</span>
                  </div>
                </a>
              </div>
              <div className="support-card">
                <div className="support-icon">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">The Lancet Oncology (2023)</h3>
                <p className="section-content">
                  &quot;Circulating tumor DNA dynamics predict pathologic
                  complete response in neoadjuvant breast cancer therapy: a
                  prospective biomarker study.&quot;
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Read Abstract</span>
                  </div>
                </a>
              </div>
              <div className="support-card">
                <div className="support-icon">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  PLOS Neglected Tropical Diseases (2024)
                </h3>
                <p className="section-content">
                  &quot;Genomic epidemiology of Lassa virus in West Africa:
                  real-time nanopore sequencing for outbreak surveillance and
                  phylogenetic mapping.&quot;
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Read Abstract</span>
                  </div>
                </a>
              </div>
              <div className="support-card">
                <div className="support-icon">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                    <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                    <path d="M10 9H8m8 4H8m8 4H8"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  ACTIV-5 / Big Effect Trial (Phase III)
                </h3>
                <p className="section-content">
                  Multi-center randomized controlled trial evaluating
                  host-directed immunomodulatory therapy in severe
                  community-acquired pneumonia across 12 African sites.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>View Protocol</span>
                  </div>
                </a>
              </div>
              <div className="support-card">
                <div className="support-icon">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                    <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                    <path d="M10 9H8m8 4H8m8 4H8"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  Sickle Cell Genomics Consortium (Observational)
                </h3>
                <p className="section-content">
                  Longitudinal whole-genome sequencing study of 5,000 pediatric
                  and adult patients to identify modifier loci associated with
                  vaso-occlusive crisis frequency.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>View Protocol</span>
                  </div>
                </a>
              </div>
              <div className="support-card">
                <div className="support-icon">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                    <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                    <path d="M10 9H8m8 4H8m8 4H8"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  ENDO-Africa Diabetes Biobank (Cohort)
                </h3>
                <p className="section-content">
                  Prospective metabolic phenotyping and multi-omic profiling of
                  10,000 participants across East and West Africa to establish
                  population-specific reference intervals.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>View Protocol</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="booking-section">
          <div className="booking-container">
            <div className="tests-booking-card">
              <div className="booking-content">
                <h2 className="section-title">
                  Collaborate With Our Research Team
                </h2>
                <p className="section-content">
                  Submit a research inquiry, propose a partnership, or request
                  sample analysis services. Our scientific affairs office will
                  respond within two business days.
                </p>
                <div className="booking-highlights">
                  <div className="highlight-item">
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
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Multi-site clinical trial partnerships welcome</span>
                  </div>
                  <div className="highlight-item">
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
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>
                      Biospecimen procurement and biobanking services available
                    </span>
                  </div>
                </div>
                <form
                  action="https://formspree.io/f/mgoroeqb"
                  method="POST"
                  data-form-id="e353dc51-191d-4b5e-9b2e-d05ad8dce3b4"
                  className="tests-booking-form"
                >
                  <input
                    type="hidden"
                    id="test-category-hidden"
                    name="testCategory"
                    value="true"
                    data-form-field-id="test-category-hidden"
                    className="input"
                  />
                  <div className="form-row">
                    <div className="tests-form-group">
                      <label htmlFor="inquiry-type">Inquiry Type</label>
                      <select
                        id="test-select"
                        name="inquiryType"
                        onchange="document.getElementById('test-category-hidden').value = this.options[this.selectedIndex].text"
                        required="true"
                        data-form-field-id="test-select"
                      >
                        <option value>Select inquiry category...</option>
                        <option value="research-collaboration">
                          Research Collaboration Proposal
                        </option>
                        <option value="sample-submission">
                          Sample Submission Request
                        </option>
                        <option value="grant-partnership">
                          Grant Partnership / Co-Investigator
                        </option>
                        <option value="technology-transfer">
                          Technology Transfer Inquiry
                        </option>
                        <option value="consultation">
                          Scientific Consultation
                        </option>
                        <option value="student-research">
                          Student / Fellowship Application
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="tests-form-group">
                      <label htmlFor="institution-select">
                        Institution Type
                      </label>
                      <select
                        id="location-select"
                        name="institutionType"
                        required="true"
                        data-form-field-id="location-select"
                      >
                        <option value="academic">Academic / University</option>
                        <option value="pharma">Pharmaceutical / Biotech</option>
                        <option value="hospital">
                          Hospital / Health System
                        </option>
                        <option value="ngo">NGO / Public Health Agency</option>
                        <option value="independent">
                          Independent Researcher
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="tests-form-group">
                      <label htmlFor="full-name">
                        Principal Investigator / Contact Name
                      </label>
                      <input
                        type="text"
                        id="full-name"
                        name="principal investigator  contact name"
                        required="true"
                        placeholder="Enter full name"
                        data-form-field-id="full-name"
                        className="input"
                      />
                    </div>
                    <div className="tests-form-group">
                      <label htmlFor="email">Institutional Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="institutional email address"
                        required="true"
                        placeholder="Enter institutional email"
                        data-form-field-id="email"
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="tests-form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required="true"
                        placeholder="Enter phone number"
                        data-form-field-id="phone"
                        className="input"
                      />
                    </div>
                    <div className="tests-form-group">
                      <label htmlFor="preferred-date">
                        Preferred Consultation Date
                      </label>
                      <input
                        type="date"
                        id="preferred-date"
                        name="preferred consultation date"
                        required="true"
                        data-form-field-id="preferred-date"
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="tests-form-group">
                      <label htmlFor="message">
                        Research Summary / Objectives (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="research summary  objectives optional"
                        rows="3"
                        placeholder="Briefly describe your research objectives, sample types, and expected timeline..."
                        data-form-field-id="message"
                        className="textarea"
                      ></textarea>
                    </div>
                  </div>
                  <button
                    id="thq_button_MpwM"
                    name="button"
                    type="submit"
                    data-form-field-id="thq_button_MpwM"
                    className="btn btn-primary btn-xl"
                  >
                    Submit Research Inquiry
                  </button>
                </form>
              </div>
              <div className="booking-visual">
                <img
                  alt="Research scientist in advanced pathology laboratory"
                  src="https://images.pexels.com/photos/8442096/pexels-photo-8442096.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="booking-img"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="stats-faq">
          <div className="stats-faq-container">
            <div className="stats-column">
              <h2 className="section-title">Our Impact in Numbers</h2>
              <p className="section-content">
                Trusted by thousands of patients and leading medical consultants
                across the region.
              </p>
              <div className="tests-stats-grid">
                <div className="stat-box">
                  <span className="stat-number">250k+</span>
                  <span className="stat-desc">Tests Processed Yearly</span>
                </div>
                <div className="stat-box">
                  <span className="stat-number">99.9%</span>
                  <span className="stat-desc">Diagnostic Accuracy</span>
                </div>
                <div className="stat-box">
                  <span className="stat-number">ISO</span>
                  <span className="stat-desc">Certified Laboratory</span>
                </div>
                <div className="stat-box">
                  <span className="stat-number">15+</span>
                  <span className="stat-desc">Years of Excellence</span>
                </div>
              </div>
            </div>
            <div className="faq-column">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <div className="faq-accordion">
                <details>
                  <summary>
                    <span>Do I need to fast before my blood test?</span>
                  </summary>
                  <div className="faq-content">
                    <p className="section-content">
                      For most metabolic and lipid panels, fasting for 8-12
                      hours is required. You may drink water, but avoid coffee,
                      tea, or food. Check your specific test instructions on the
                      booking confirmation.
                    </p>
                  </div>
                </details>
                <details>
                  <summary>
                    <span>What should I bring for my sample collection?</span>
                  </summary>
                  <div className="faq-content">
                    <p className="section-content">
                      Please bring a valid government-issued ID and your
                      doctor&apos;s referral (if applicable). If you have a
                      pre-paid booking, have your QR code ready on your mobile
                      device.
                    </p>
                  </div>
                </details>
                <details>
                  <summary>
                    <span>How will I receive my results?</span>
                  </summary>
                  <div className="faq-content">
                    <p className="section-content">
                      Results are primarily delivered via our secure online
                      portal and encrypted email. You will receive an SMS
                      notification as soon as your report is validated by our
                      pathologist.
                    </p>
                  </div>
                </details>
                <details>
                  <summary>
                    <span>
                      Are your labs certified for travel requirements?
                    </span>
                  </summary>
                  <div className="faq-content">
                    <p className="section-content">
                      Yes, Prime Pathology Clinic is fully certified by national
                      health authorities and international bodies for all
                      travel-related diagnostic screenings, including fit-to-fly
                      certificates.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>
        <div className="research-container21">
          <div className="research-container22">
            <Script
              html={`<style>
        @keyframes fadeIn {from {opacity: 0;
transform: translateY(10px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="research-container23">
          <div className="research-container24">
            <Script
              html={`<script defer data-name="prime-pathology-logic">
(function(){
const tabTriggers = document.querySelectorAll('.tab-trigger');
const tabPanels = document.querySelectorAll('.tab-panel');

tabTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const target = trigger.getAttribute('data-target');
    
    // Update Nav
    tabTriggers.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    trigger.classList.add('active');
    trigger.setAttribute('aria-selected', 'true');
    
    // Update Panels
    tabPanels.forEach(panel => {
      panel.classList.remove('active');
      if (panel.id === target) {
        panel.classList.add('active');
      }
    });
  });
});

// Subtle Parallax for Hero
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroVideo = document.querySelector('.tests-hero-video');
  if (heroVideo) {
    heroVideo.style.transform = \`translateY(\${scrolled * 0.2}px)\`;
  }
  
  const molecules = document.querySelectorAll('.floating-molecule');
  molecules.forEach((m, index) => {
    const speed = (index + 1) * 0.1;
    m.style.transform = \`translateY(\${scrolled * speed}px)\`;
  });
});

// Form submission visual feedback
const bookingForm = document.querySelector('.booking-form');
if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    const btn = bookingForm.querySelector('button[type="submit"]');
    btn.textContent = 'Processing...';
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
          .research-container10 {
            width: 100%;
            min-height: 100vh;
          }
          .research-container11 {
            display: none;
          }
          .research-container12 {
            display: contents;
          }
          .research-thq-collection-workflow-elm {
            border: 2px dashed rgba(120, 120, 120, 0.4);
          }
          .research-container21 {
            display: none;
          }
          .research-container22 {
            display: contents;
          }
          .research-container23 {
            display: none;
          }
          .research-container24 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Research
