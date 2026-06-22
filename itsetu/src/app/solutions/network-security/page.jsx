"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Services.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll("[data-reveal]") || [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
};

const typesOfSecurity = [
  { icon: "🛡️", title: "Antivirus and Antimalware Software" },
  { icon: "🧩", title: "Application Security" },
  { icon: "📊", title: "Behavioral Analytics" },
  { icon: "🔒", title: "Data Loss Prevention (DLP)" },
  { icon: "✉️", title: "Email Security" },
  { icon: "🔥", title: "Firewalls" },
  { icon: "📱", title: "Mobile Device Security" },
  { icon: "🧱", title: "Network Segmentation" },
  { icon: "📡", title: "Security Information and Event Management (SIEM)" },
  { icon: "🌐", title: "Virtual Private Network (VPN)" },
  { icon: "💻", title: "Endpoint Security" },
  { icon: "🎛️", title: "Network Access Control (NAC)" },
];

const coreServices = [
  {
    icon: "🛡️",
    title: "Antivirus and Antimalware Software",
    desc: "Protection against malicious software, ransomware and evolving cyber threats.",
  },
  {
    icon: "🔥",
    title: "Firewalls",
    desc: "Advanced firewall solutions for monitoring and controlling network traffic.",
  },
  {
    icon: "💻",
    title: "Endpoint Security",
    desc: "Securing devices, endpoints and enterprise systems against vulnerabilities.",
  },
  {
    icon: "🌐",
    title: "Virtual Private Network (VPN)",
    desc: "Secure remote access and encrypted communication across business networks.",
  },
  {
    icon: "✉️",
    title: "Email Security",
    desc: "Protection against phishing attacks, spam, malware and email-based threats.",
  },
];

const approachSteps = [
  { n: "01", title: "Security Assessment" },
  { n: "02", title: "Risk Identification" },
  { n: "03", title: "Security Planning" },
  { n: "04", title: "Implementation & Configuration" },
  { n: "05", title: "Monitoring & Protection" },
  { n: "06", title: "Continuous Improvement" },
];

const whyChoose = [
  { icon: "🏢", title: "Enterprise Security Expertise" },
  { icon: "🧱", title: "Reliable Infrastructure Protection" },
  { icon: "⚡", title: "Modern Security Technologies" },
  { icon: "🔗", title: "End-To-End Security Solutions" },
];

const whyMatters = [
  "Protect sensitive business data",
  "Prevent unauthorized access",
  "Reduce cyber risks",
  "Secure enterprise infrastructure",
  "Maintain operational continuity",
  "Improve data privacy",
];

export default function Page() {
  const rootRef = useReveal();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <main ref={rootRef} className={`nds-root ${loaded ? "nds-loaded" : ""}`}>
      
      {/* HERO */}
      <section className="nds-hero">
        <div className="nds-grid-bg" aria-hidden="true" />
        <div className="nds-particles" aria-hidden="true">
          {Array.from({ length: 18 }).map((_, i) => (
            <span key={i} className={`nds-particle p${i % 6}`} />
          ))}
        </div>
        <div className="nds-glow nds-glow-1" aria-hidden="true" />
        <div className="nds-glow nds-glow-2" aria-hidden="true" />

        <div className="nds-container nds-hero-grid">
          <div className="nds-hero-left">
            <span className="nds-eyebrow" data-reveal>
              <span className="nds-dot" /> NETWORK & DATA SECURITY
            </span>
            <h1 className="nds-h1" data-reveal>
              Protecting Modern Businesses Through{" "}
              <span className="nds-gradient-text">Advanced Security Solutions</span>
            </h1>
            <p className="nds-lead" data-reveal>
              iTSetu provides enterprise-grade network and data security solutions designed to
              prevent unauthorized access, secure digital assets and protect critical business
              infrastructure from modern cyber threats.
            </p>
            <div className="nds-cta-row" data-reveal>
              <a className="nds-btn nds-btn-primary" href="#contact">
                Get Consultation <span className="nds-arrow">→</span>
              </a>
              <a className="nds-btn nds-btn-ghost" href="#contact">
                Contact Security Experts
              </a>
            </div>
          </div>

          <div className="nds-hero-right" data-reveal>
            <div className="nds-shield-wrap">
              <div className="nds-orbit nds-orbit-1" />
              <div className="nds-orbit nds-orbit-2" />
              <div className="nds-orbit nds-orbit-3" />
              <div className="nds-shield">
                <div className="nds-shield-inner">
                  <div className="nds-shield-icon">🛡️</div>
                  <div className="nds-shield-label">Secure Network</div>
                  <div className="nds-shield-sub">Enterprise Grade</div>
                </div>
              </div>
              <span className="nds-node n1">🔒</span>
              <span className="nds-node n2">🌐</span>
              <span className="nds-node n3">📡</span>
              <span className="nds-node n4">💻</span>
              <span className="nds-node n5">✉️</span>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="nds-section">
        <div className="nds-container nds-two-col">
          <div className="nds-col" data-reveal>
            <span className="nds-tag">OVERVIEW</span>
            <h2 className="nds-h2">What Is Network & Data Security?</h2>
            <p>
              Network security consists of the policies and practices adopted to prevent and monitor
              unauthorized access, misuse, modification or denial of a computer network and
              network-accessible resources.
            </p>
            <p>
              Network security involves authorization of access to data within a network through
              user authentication, passwords and security controls managed by network
              administrators.
            </p>
            <p>
              It protects both public and private networks used by businesses, government
              organizations and individuals for communication, operations and transactions.
            </p>
            <p>
              Network security ensures secure operations, protects business resources and
              safeguards sensitive information against threats.
            </p>
          </div>
          <div className="nds-col nds-visual-card" data-reveal>
            <div className="nds-visual-inner">
              <div className="nds-visual-grid">
                {["🔐", "🛰️", "🧠", "⚙️", "📈", "🔍"].map((e, i) => (
                  <div key={i} className="nds-vcell">
                    <span>{e}</span>
                  </div>
                ))}
              </div>
              <div className="nds-visual-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY MATTERS */}
      <section className="nds-section nds-section-alt">
        <div className="nds-container">
          <div className="nds-section-head" data-reveal>
            <span className="nds-tag">WHY IT MATTERS</span>
            <h2 className="nds-h2">Securing Business Operations In A Connected World</h2>
            <p className="nds-sub">
              Modern organizations rely on secure networks for communication, transactions,
              collaboration and business operations. Effective network security helps:
            </p>
          </div>
          <div className="nds-matters-grid">
            {whyMatters.map((item, i) => (
              <div className="nds-matter-card" data-reveal key={i} style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="nds-matter-check">✓</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section className="nds-section">
        <div className="nds-container">
          <div className="nds-section-head" data-reveal>
            <span className="nds-tag">CAPABILITIES</span>
            <h2 className="nds-h2">Comprehensive Security Solutions</h2>
            <p className="nds-sub">
              A full spectrum of network protection services for enterprise-grade defense.
            </p>
          </div>
          <div className="nds-types-grid">
            {typesOfSecurity.map((t, i) => (
              <div className="nds-type-card" data-reveal key={i} style={{ transitionDelay: `${i * 40}ms` }}>
                <div className="nds-type-icon">{t.icon}</div>
                <h3 className="nds-type-title">{t.title}</h3>
                <div className="nds-type-border" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="nds-section nds-section-alt">
        <div className="nds-container">
          <div className="nds-section-head" data-reveal>
            <span className="nds-tag">CORE SERVICES</span>
            <h2 className="nds-h2">Our Security Capabilities</h2>
          </div>
          <div className="nds-core-grid">
            {coreServices.map((s, i) => (
              <article className="nds-core-card" data-reveal key={i} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="nds-core-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="nds-core-link">Learn more →</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH TIMELINE */}
      <section className="nds-section">
        <div className="nds-container">
          <div className="nds-section-head" data-reveal>
            <span className="nds-tag">METHODOLOGY</span>
            <h2 className="nds-h2">Our Approach To Enterprise Security</h2>
          </div>
          <div className="nds-timeline">
            <div className="nds-timeline-line" />
            {approachSteps.map((s, i) => (
              <div className={`nds-step ${i % 2 === 0 ? "left" : "right"}`} data-reveal key={i}>
                <div className="nds-step-card">
                  <div className="nds-step-num">{s.n}</div>
                  <h4>{s.title}</h4>
                </div>
                <div className="nds-step-dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="nds-section nds-section-alt">
        <div className="nds-container">
          <div className="nds-section-head" data-reveal>
            <span className="nds-tag">WHY iTSETU</span>
            <h2 className="nds-h2">Why Businesses Trust iTSetu For Security</h2>
          </div>
          <div className="nds-why-grid">
            {whyChoose.map((w, i) => (
              <div className="nds-why-card" data-reveal key={i} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="nds-why-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <div className="nds-why-shine" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="nds-cta" id="contact">
        <div className="nds-cta-bg" aria-hidden="true" />
        <div className="nds-grid-bg" aria-hidden="true" />
        <div className="nds-container nds-cta-inner" data-reveal>
          <h2 className="nds-h2 nds-cta-heading">Strengthen Your Security Infrastructure</h2>
          <p className="nds-cta-text">
            Protect your business networks, data and enterprise systems through advanced security
            solutions designed for modern organizations.
          </p>
          <div className="nds-cta-row center">
            <a className="nds-btn nds-btn-primary" href="#contact">
              Talk To Experts <span className="nds-arrow">→</span>
            </a>
            <a className="nds-btn nds-btn-ghost" href="#contact">
              Get Security Consultation
            </a>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
}
