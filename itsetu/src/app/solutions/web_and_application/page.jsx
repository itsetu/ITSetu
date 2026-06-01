"use client";

import { useEffect, useRef } from "react";
import "./Service.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function WebAppDevelopmentPage() {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("wa-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    revealRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const mobileFeatures = [
    { t: "Cross Platform Development", d: "Single codebase for iOS, Android, Windows Phone and mobile web." },
    { t: "Hybrid Applications", d: "Blend native performance with web flexibility for faster delivery." },
    { t: "Rapid Deployment", d: "Distribute through App Store and Google Play with streamlined releases." },
    { t: "Device Hardware Access", d: "Leverage camera, GPS, sensors and storage through unified APIs." },
    { t: "Faster Time To Market", d: "Reduce development effort and accelerate launch cycles." },
    { t: "MVP Development", d: "Validate ideas quickly with lean, high-quality mobile builds." },
    { t: "Enterprise App Extensions", d: "Extend internal systems into secure mobile experiences." },
    { t: "Mobile Web Solutions", d: "Responsive, performant mobile web tailored to every screen." },
  ];

  const enterpriseCaps = [
    "Native / Hybrid / HTML5 IOS",
    "Mobile Strategy & Ideation",
    "UX Design / Prototype / POC",
    "Brand Manipulation",
    "Insights / Analytics",
    "App Security / Identity",
    "App Framework Development",
    "Automation",
    "App Management",
  ];

  const uxCards = [
    { t: "User Interface Design", d: "Crisp, accessible interfaces aligned with your brand identity." },
    { t: "User Experience Design", d: "Frictionless flows that guide users toward meaningful outcomes." },
    { t: "Wireframing", d: "Structured blueprints that validate layout and hierarchy early." },
    { t: "Prototyping", d: "Interactive prototypes that de-risk decisions before development." },
    { t: "Customer Journey Design", d: "End-to-end journeys that elevate engagement and retention." },
    { t: "Design Systems", d: "Scalable component libraries that ensure consistency at scale." },
  ];

  const supportCards = [
    "Technical Support",
    "Performance Optimization",
    "Platform Updates",
    "Security Improvements",
    "Bug Fixes",
    "App Monitoring",
    "OS Compatibility Updates",
    "Code Optimization",
  ];

  const whyCards = [
    { t: "Modern Application Development", d: "Future-ready architectures built with proven engineering practices." },
    { t: "Enterprise Mobility Expertise", d: "Secure, scalable mobility solutions for complex organizations." },
    { t: "UI & UX Excellence", d: "Design-led thinking that elevates every customer touchpoint." },
    { t: "Long-Term Support & Maintenance", d: "Reliable partnership that keeps your software performing." },
  ];

  const steps = [
    "Requirement Analysis",
    "Strategy & Planning",
    "UI / UX Design",
    "Development & Integration",
    "Testing & Optimization",
    "Deployment & Support",
  ];

  return (
    <main className="wa-root">
      <Navbar></Navbar>
      {/* HERO */}
      <section className="wa-hero">
        <div className="wa-hero-bg">
          <div className="wa-blob wa-blob-1" />
          <div className="wa-blob wa-blob-2" />
          <div className="wa-blob wa-blob-3" />
          <div className="wa-grid-overlay" />
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={i} className={`wa-particle wa-particle-${i % 6}`} />
          ))}
        </div>

        <div className="wa-container wa-hero-inner">
          <div className="wa-hero-text">
            <span className="wa-eyebrow wa-reveal" ref={addToRefs}>
              <span className="wa-dot" /> WEB & APPLICATION DEVELOPMENT
            </span>
            <h1 className="wa-h1 wa-reveal" ref={addToRefs}>
              Building <span className="wa-grad-text">Intelligent Digital Experiences</span> For Modern Businesses
            </h1>
            <p className="wa-hero-desc wa-reveal" ref={addToRefs}>
              ITSetu develops modern web applications, mobile applications and enterprise software solutions
              designed to improve productivity, customer engagement and business growth.
            </p>
            <div className="wa-hero-cta wa-reveal" ref={addToRefs}>
              <a href="#contact" className="wa-btn wa-btn-primary">
                <span>Get Consultation</span>
                <span className="wa-shine" />
              </a>
              <a href="#contact" className="wa-btn wa-btn-ghost">Contact Experts</a>
            </div>
          </div>

          <div className="wa-hero-visual wa-reveal" ref={addToRefs}>
            <div className="wa-stack-card wa-stack-1">
              <div className="wa-stack-head">
                <span className="wa-tdot wa-r" /><span className="wa-tdot wa-y" /><span className="wa-tdot wa-g" />
                <span className="wa-stack-title">itsetu / app</span>
              </div>
              <div className="wa-code-lines">
                <div className="wa-cl" style={{ width: "60%" }} />
                <div className="wa-cl" style={{ width: "82%" }} />
                <div className="wa-cl" style={{ width: "44%" }} />
                <div className="wa-cl" style={{ width: "70%" }} />
                <div className="wa-cl" style={{ width: "55%" }} />
              </div>
            </div>
            <div className="wa-stack-card wa-stack-2">
              <div className="wa-mini-metric">
                <span>Performance</span>
                <strong>99%</strong>
              </div>
              <div className="wa-bar"><span style={{ width: "92%" }} /></div>
            </div>
            <div className="wa-stack-card wa-stack-3">
              <div className="wa-orbit">
                <span className="wa-orb wa-o1" />
                <span className="wa-orb wa-o2" />
                <span className="wa-orb wa-o3" />
                <div className="wa-orb-core">UX</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE OVERVIEW */}
      <section className="wa-section">
        <div className="wa-container wa-split">
          <div className="wa-split-visual wa-reveal" ref={addToRefs}>
            <div className="wa-glow-frame">
              <div className="wa-window">
                <div className="wa-window-bar"><span /><span /><span /></div>
                <div className="wa-window-grid">
                  <div className="wa-tile" /><div className="wa-tile" /><div className="wa-tile" />
                  <div className="wa-tile wa-tile-wide" />
                  <div className="wa-tile" /><div className="wa-tile" />
                </div>
              </div>
            </div>
          </div>
          <div className="wa-split-text wa-reveal" ref={addToRefs}>
            <span className="wa-tag">SERVICE OVERVIEW</span>
            <h2 className="wa-h2">What Kind Of Services We Provide</h2>
            <p className="wa-p">
              ITSetu helps businesses build scalable web applications, enterprise software and mobile solutions
              that support digital transformation and operational excellence. As a trusted Software Development
              Company in Pune, we partner with organizations to engineer reliable, future-ready platforms.
            </p>
          </div>
        </div>
      </section>

      {/* MOBILE APP DEVELOPMENT */}
      <section className="wa-section wa-section-alt">
        <div className="wa-container">
          <div className="wa-section-head wa-reveal" ref={addToRefs}>
            <span className="wa-tag">MOBILE APP DEVELOPMENT</span>
            <h2 className="wa-h2">Mobile App Development</h2>
            <p className="wa-p wa-p-center">
              Single code base can be used to create apps for iOS, Android, Windows Phone and mobile web.
              Applications developed using PhoneGap can be distributed through App Store and Google Play.
              PhoneGap enables rapid testing, deployment and hybrid application development while reducing
              development effort and accelerating time to market.
            </p>
          </div>

          <div className="wa-grid wa-grid-4">
            {mobileFeatures.map((f, i) => (
              <article key={f.t} className="wa-card wa-reveal" ref={addToRefs} style={{ transitionDelay: `${i * 40}ms` }}>
                <div className="wa-card-num">0{i + 1}</div>
                <h3>{f.t}</h3>
                <p>{f.d}</p>
                <span className="wa-card-glow" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ENTERPRISE */}
      <section className="wa-section">
        <div className="wa-container">
          <div className="wa-section-head wa-reveal" ref={addToRefs}>
            <span className="wa-tag">ENTERPRISE</span>
            <h2 className="wa-h2">Enterprise Application Development</h2>
            <p className="wa-p wa-p-center">
              Introducing mobility into enterprise workflows has become a critical business requirement.
              Organizations need applications that provide employees, customers and partners with seamless
              access to services, content and data across devices while maintaining security and management
              capabilities. Enterprise applications require expertise across mobility, security, user
              experience and digital strategy.
            </p>
          </div>

          <div className="wa-grid wa-grid-3">
            {enterpriseCaps.map((c, i) => (
              <div key={c} className="wa-cap-card wa-reveal" ref={addToRefs} style={{ transitionDelay: `${i * 50}ms` }}>
                <div className="wa-cap-icon">
                  <span />
                  <span />
                  <span />
                </div>
                <h3>{c}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UI/UX */}
      <section className="wa-section wa-section-light">
        <div className="wa-container">
          <div className="wa-section-head wa-reveal" ref={addToRefs}>
            <span className="wa-tag wa-tag-dark">DESIGN</span>
            <h2 className="wa-h2 wa-h2-dark">UI & UX Design</h2>
            <p className="wa-p wa-p-dark wa-p-center">
              UI and UX design play a vital role in customer satisfaction, business success and brand reputation.
              Businesses require intuitive digital experiences that guide users efficiently through websites and
              applications. The focus is on improving usability, engagement and customer experience through our
              UI UX Design Services in Pune.
            </p>
          </div>

          <div className="wa-grid wa-grid-3">
            {uxCards.map((c, i) => (
              <article key={c.t} className="wa-light-card wa-reveal" ref={addToRefs} style={{ transitionDelay: `${i * 50}ms` }}>
                <div className="wa-light-icon" />
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT & MAINTENANCE */}
      <section className="wa-section">
        <div className="wa-container">
          <div className="wa-section-head wa-reveal" ref={addToRefs}>
            <span className="wa-tag">SUPPORT & MAINTENANCE</span>
            <h2 className="wa-h2">Support & Maintenance</h2>
            <p className="wa-p wa-p-center">
              ITSetu provides comprehensive support and maintenance services that keep applications updated,
              secure and optimized. The team continuously improves performance, resolves issues and ensures
              compatibility with evolving operating systems and technologies.
            </p>
          </div>

          <div className="wa-grid wa-grid-4">
            {supportCards.map((c, i) => (
              <div key={c} className="wa-pill-card wa-reveal" ref={addToRefs} style={{ transitionDelay: `${i * 40}ms` }}>
                <span className="wa-pill-dot" />
                <h3>{c}</h3>
              </div>
            ))}
          </div>

          <div className="wa-note wa-reveal" ref={addToRefs}>
            <p>
              Application glitches can be resolved through coding adjustments and continuous maintenance.
              Regular updates help applications remain stable and compatible with changing operating systems —
              ensuring long-term reliability for ERP Software, CRM Software and enterprise IT Solutions in Pune.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="wa-section wa-section-alt">
        <div className="wa-container">
          <div className="wa-section-head wa-reveal" ref={addToRefs}>
            <span className="wa-tag">WHY ITSETU</span>
            <h2 className="wa-h2">Why Businesses Choose ITSetu</h2>
          </div>

          <div className="wa-grid wa-grid-4">
            {whyCards.map((c, i) => (
              <article key={c.t} className="wa-why-card wa-reveal" ref={addToRefs} style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="wa-why-num">{String(i + 1).padStart(2, "0")}</div>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="wa-section">
        <div className="wa-container">
          <div className="wa-section-head wa-reveal" ref={addToRefs}>
            <span className="wa-tag">PROCESS</span>
            <h2 className="wa-h2">Our Development Approach</h2>
          </div>

          <div className="wa-timeline">
            <div className="wa-timeline-line" />
            {steps.map((s, i) => (
              <div key={s} className={`wa-tl-step ${i % 2 === 0 ? "left" : "right"} wa-reveal`} ref={addToRefs}>
                <div className="wa-tl-dot"><span /></div>
                <div className="wa-tl-card">
                  <div className="wa-tl-step-num">Step {i + 1}</div>
                  <h3>{s}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="wa-cta" id="contact">
        <div className="wa-cta-bg">
          <div className="wa-blob wa-blob-1" />
          <div className="wa-blob wa-blob-2" />
        </div>
        <div className="wa-container wa-cta-inner wa-reveal" ref={addToRefs}>
          <h2 className="wa-cta-h">Ready To Build Your Next Digital Solution?</h2>
          <p className="wa-cta-p">
            Partner with ITSetu for enterprise applications, mobile apps, UI/UX design and modern web development
            solutions — delivered by a trusted Web Development Company in Pune.
          </p>
          <div className="wa-cta-buttons">
            <a href="#contact" className="wa-btn wa-btn-primary">
              <span>Contact Experts</span>
              <span className="wa-shine" />
            </a>
            <a href="#contact" className="wa-btn wa-btn-ghost">Get Consultation</a>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
}
