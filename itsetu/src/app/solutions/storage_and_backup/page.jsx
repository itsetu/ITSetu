"use client";

import { useEffect, useRef } from "react";
import "./Service.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function StorageBackupPage() {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sb-in-view");
          }
        });
      },
      { threshold: 0.15 }
    );
    revealRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const capabilities = [
    { title: "Software Defined Storage", desc: "Flexible storage architecture designed for modern enterprise environments." },
    { title: "Backup Solutions", desc: "Reliable backup systems protecting critical business information." },
    { title: "Disaster Recovery", desc: "Recovery planning and infrastructure to minimize downtime." },
    { title: "Real-Time Analytics", desc: "Visibility into backup health, storage utilization and recovery readiness." },
    { title: "Scalable Infrastructure", desc: "Storage systems that grow with business requirements." },
    { title: "Data Mobility", desc: "Move and manage data seamlessly across environments." },
  ];

  const recoveryCards = [
    "Backup Management", "Data Restoration", "Disaster Recovery",
    "Real-Time Analytics", "Business Continuity", "Data Protection",
  ];

  const sdsBenefits = [
    "Simplified storage management", "Improved flexibility", "Cost optimization",
    "Scalable storage infrastructure", "Efficient resource utilization", "Centralized data control",
  ];

  const whyMatters = [
    "Reduce data loss risks", "Improve business continuity", "Support disaster recovery planning",
    "Optimize storage resources", "Improve operational efficiency", "Ensure data availability",
  ];

  const approach = [
    "Data Assessment", "Storage Planning", "Solution Design",
    "Implementation", "Backup Configuration", "Monitoring & Optimization",
  ];

  const whyChoose = [
    "Enterprise Infrastructure Expertise",
    "Scalable Storage Solutions",
    "Reliable Backup & Recovery",
    "End-To-End Technology Support",
  ];

  return (
    <main className="sb-page">
      
      {/* HERO */}
      <section className="sb-hero">
        <div className="sb-hero-bg">
          <div className="sb-grid-overlay" />
          <div className="sb-particles">
            {Array.from({ length: 18 }).map((_, i) => (
              <span key={i} className={`sb-particle sb-p-${i % 6}`} />
            ))}
          </div>
          <div className="sb-stream sb-stream-1" />
          <div className="sb-stream sb-stream-2" />
          <div className="sb-stream sb-stream-3" />
        </div>

        <div className="sb-hero-inner">
          <div className="sb-hero-left">
            <span className="sb-eyebrow sb-reveal" ref={addToRefs}>
              STORAGE &amp; BACKUP SOLUTIONS
            </span>
            <h1 className="sb-hero-title sb-reveal" ref={addToRefs}>
              Secure, Scalable And Intelligent{" "}
              <span className="sb-gradient-text">Data Protection Solutions</span>
            </h1>
            <p className="sb-hero-desc sb-reveal" ref={addToRefs}>
              iTSetu delivers enterprise storage and backup solutions designed to simplify data
              management, improve flexibility and ensure reliable business continuity through
              modern storage technologies and advanced recovery capabilities.
            </p>
            <div className="sb-hero-actions sb-reveal" ref={addToRefs}>
              <button className="sb-btn sb-btn-primary">Get Consultation</button>
              <button className="sb-btn sb-btn-ghost">Talk To Experts</button>
            </div>
          </div>

          <div className="sb-hero-right sb-reveal" ref={addToRefs}>
            <div className="sb-cloud-illustration">
              <div className="sb-orbit sb-orbit-1" />
              <div className="sb-orbit sb-orbit-2" />
              <div className="sb-orbit sb-orbit-3" />
              <div className="sb-core">
                <div className="sb-core-inner">
                  <div className="sb-core-bars">
                    <span /><span /><span /><span />
                  </div>
                  <p>Enterprise Storage</p>
                </div>
              </div>
              <div className="sb-node sb-node-1">DB</div>
              <div className="sb-node sb-node-2">SAN</div>
              <div className="sb-node sb-node-3">NAS</div>
              <div className="sb-node sb-node-4">SDS</div>
              <div className="sb-node sb-node-5">DR</div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="sb-section sb-overview">
        <div className="sb-container sb-two-col">
          <div className="sb-overview-media sb-reveal" ref={addToRefs}>
            <div className="sb-glass-frame">
              <div className="sb-rack">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="sb-rack-row">
                    <span className="sb-rack-led" />
                    <span className="sb-rack-line" />
                    <span className="sb-rack-line short" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="sb-overview-text sb-reveal" ref={addToRefs}>
            <span className="sb-eyebrow">SERVICE OVERVIEW</span>
            <h2 className="sb-h2">Enterprise Storage &amp; Backup Solutions</h2>
            <p>
              Modern organizations generate large volumes of critical business data that require
              secure storage, efficient management and reliable protection.
            </p>
            <p>
              iTSetu provides storage and backup solutions designed to help businesses manage data
              efficiently while ensuring business continuity and operational resilience as a
              trusted IT infrastructure company in Pune.
            </p>
          </div>
        </div>
      </section>

      {/* SDS */}
      <section className="sb-section sb-sds">
        <div className="sb-container">
          <div className="sb-section-head sb-reveal" ref={addToRefs}>
            <span className="sb-eyebrow">SOFTWARE DEFINED STORAGE</span>
            <h2 className="sb-h2">Software Defined Storage (SDS)</h2>
            <p className="sb-section-desc">
              Software-defined storage (SDS) has expanded rapidly as organizations realize the
              simplification and cost savings achieved by deploying storage as an application. This
              universal approach creates a flexible fabric of storage resources that enables
              seamless movement of data across multiple platforms and environments.
            </p>
          </div>
          <div className="sb-grid sb-grid-3">
            {sdsBenefits.map((b, i) => (
              <div
                key={b}
                className="sb-feature-card sb-reveal"
                ref={addToRefs}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="sb-feature-icon">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3>{b}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BACKUP & RECOVERY */}
      <section className="sb-section sb-recovery">
        <div className="sb-container">
          <div className="sb-section-head sb-reveal" ref={addToRefs}>
            <span className="sb-eyebrow">BACKUP &amp; RECOVERY</span>
            <h2 className="sb-h2">Reliable Backup &amp; Recovery Solutions</h2>
            <p className="sb-section-desc">
              With a combination of backup, restore and disaster recovery capabilities supported by
              real-time analytics, businesses can meet modern data protection requirements while
              ensuring business continuity. These solutions provide the scalability and flexibility
              needed to protect critical business information and recover quickly from unexpected
              disruptions.
            </p>
          </div>
          <div className="sb-grid sb-grid-3">
            {recoveryCards.map((title, i) => (
              <div
                key={title}
                className="sb-glass-card sb-reveal"
                ref={addToRefs}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="sb-glass-glow" />
                <div className="sb-card-num">0{i + 1}</div>
                <h3>{title}</h3>
                <p>Engineered for enterprise-grade reliability and seamless business continuity.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="sb-section sb-capabilities">
        <div className="sb-container">
          <div className="sb-section-head sb-reveal" ref={addToRefs}>
            <span className="sb-eyebrow">KEY CAPABILITIES</span>
            <h2 className="sb-h2">Storage &amp; Data Protection Capabilities</h2>
          </div>
          <div className="sb-grid sb-grid-3">
            {capabilities.map((c, i) => (
              <div
                key={c.title}
                className="sb-cap-card sb-reveal"
                ref={addToRefs}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="sb-cap-border" />
                <div className="sb-cap-icon">
                  <div className="sb-cap-icon-inner" />
                </div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="sb-section sb-matters">
        <div className="sb-container">
          <div className="sb-section-head sb-reveal" ref={addToRefs}>
            <span className="sb-eyebrow">WHY STORAGE &amp; BACKUP MATTERS</span>
            <h2 className="sb-h2">Protecting Business-Critical Data</h2>
            <p className="sb-section-desc">
              Business operations depend on continuous access to data. Modern storage and backup
              solutions help organizations build resilience against disruption.
            </p>
          </div>
          <div className="sb-grid sb-grid-3">
            {whyMatters.map((m, i) => (
              <div
                key={m}
                className="sb-benefit-card sb-reveal"
                ref={addToRefs}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="sb-benefit-dot" />
                <h3>{m}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH TIMELINE */}
      <section className="sb-section sb-approach">
        <div className="sb-container">
          <div className="sb-section-head sb-reveal" ref={addToRefs}>
            <span className="sb-eyebrow">OUR APPROACH</span>
            <h2 className="sb-h2">Our Storage &amp; Backup Strategy</h2>
          </div>
          <div className="sb-timeline">
            <div className="sb-timeline-line" />
            {approach.map((step, i) => (
              <div
                key={step}
                className={`sb-timeline-step sb-reveal ${i % 2 === 0 ? "left" : "right"}`}
                ref={addToRefs}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="sb-timeline-dot"><span>{i + 1}</span></div>
                <div className="sb-timeline-card">
                  <span className="sb-timeline-num">Step {i + 1}</span>
                  <h3>{step}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="sb-section sb-why">
        <div className="sb-container">
          <div className="sb-section-head sb-reveal" ref={addToRefs}>
            <span className="sb-eyebrow">WHY CHOOSE iTSETU</span>
            <h2 className="sb-h2">Why Businesses Choose iTSetu</h2>
          </div>
          <div className="sb-grid sb-grid-4">
            {whyChoose.map((w, i) => (
              <div
                key={w}
                className="sb-why-card sb-reveal"
                ref={addToRefs}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="sb-why-num">0{i + 1}</div>
                <h3>{w}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="sb-cta">
        <div className="sb-cta-bg">
          <div className="sb-grid-overlay" />
          <div className="sb-stream sb-stream-1" />
          <div className="sb-stream sb-stream-2" />
        </div>
        <div className="sb-container sb-cta-inner sb-reveal" ref={addToRefs}>
          <h2 className="sb-h2">Build A Stronger Data Protection Strategy</h2>
          <p>
            Protect business-critical information through intelligent storage, backup and disaster
            recovery solutions designed for modern enterprises.
          </p>
          <div className="sb-hero-actions">
            <button className="sb-btn sb-btn-primary">Get Consultation</button>
            <button className="sb-btn sb-btn-ghost">Contact Experts</button>
          </div>
        </div>
      </section>
    <Footer></Footer>
    </main>
  );
}
