

"use client";

import { useEffect } from "react";
import "./About.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".a-reveal");
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
}
export default function About() {
  useReveal();
  const whyCards = [
    { title: "Customer-Centric Approach", desc: "We work closely with clients to understand business challenges and deliver tailored solutions." },
    { title: "Technology Expertise", desc: "Strong expertise across ERP, SaaS, networking, cloud and infrastructure solutions." },
    { title: "End-To-End Solutions", desc: "From consulting and implementation to support and maintenance — we cover the full lifecycle." },
    { title: "Reliable Support", desc: "Dedicated technical assistance and enterprise-grade support services across India." },
  ];
  const services = [
    { icon: "⚙️", title: "ERP & CRM Software (Advitwala)", desc: "Manage sales, quotations, inventory and customer support with our flagship ERP platform." },
    { icon: "💻", title: "Software Development", desc: "Custom enterprise software engineered for performance, security and scalability." },
    { icon: "🌐", title: "Website Design & Development", desc: "Modern, conversion-focused websites built on robust, scalable architectures." },
    { icon: "🛰️", title: "IT Infrastructure & Networking", desc: "Networking company in Pune delivering reliable LAN, WAN and Wi-Fi infrastructure." },
    { icon: "🏗️", title: "Infrastructure Design & Installation", desc: "End-to-end IT infrastructure design, development and installation services." },
    { icon: "☁️", title: "Cloud Services", desc: "Cloud migration, hosting and managed services on AWS, Azure and private cloud." },
    { icon: "🖥️", title: "Server Management", desc: "Proactive server monitoring, hardening, patching and 24x7 administration." },
    { icon: "🛡️", title: "Security Solutions", desc: "Enterprise security, firewalls, endpoint protection and compliance frameworks." },
    { icon: "🔧", title: "IT AMC Support", desc: "Annual maintenance contracts that keep your IT environment running smoothly." },
    { icon: "🧩", title: "System Integration Services", desc: "Trusted system integrator for ERP, applications and enterprise platforms." },
  ];
  const expertise = [
    "ERP Platforms", "CRM Solutions", "SaaS Applications", "Cloud Infrastructure",
    "Networking Solutions", "Security Systems", "Server Management", "IT Support Services",
  ];
  const steps = [
    { n: "01", title: "Understand Business Requirements", desc: "Deep discovery of goals, processes and constraints." },
    { n: "02", title: "Plan & Design Solutions", desc: "Architecture, blueprints and solution design." },
    { n: "03", title: "Implementation & Integration", desc: "Seamless rollout integrated with existing systems." },
    { n: "04", title: "Testing & Optimization", desc: "Rigorous QA, performance tuning and hardening." },
    { n: "05", title: "Support & Continuous Improvement", desc: "Ongoing support, monitoring and enhancements." },
  ];
  const industries = [
    { icon: "🏭", name: "Manufacturing" },
    { icon: "🏥", name: "Healthcare" },
    { icon: "🎓", name: "Education" },
    { icon: "🛍️", name: "Retail" },
    { icon: "🏢", name: "Real Estate" },
    { icon: "🚚", name: "Logistics" },
    { icon: "💼", name: "Professional Services" },
    { icon: "🚀", name: "SMEs" },
  ];
  return (
    <main className="about-page">
      
      {/* HERO */}
      <section className="ab-hero">
        <div className="ab-grid-overlay" aria-hidden="true" />
        <div className="ab-blob ab-blob-1" aria-hidden="true" />
        <div className="ab-blob ab-blob-2" aria-hidden="true" />
        <div className="ab-blob ab-blob-3" aria-hidden="true" />
        <div className="ab-particles" aria-hidden="true">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className={`ab-particle ab-particle-${i + 1}`} />
          ))}
        </div>
        <div className="ab-hero-inner">
          <div className="ab-hero-copy">
            <span className="ab-eyebrow a-reveal">ABOUT iTSETU</span>
            <h1 className="ab-hero-title a-reveal">
              Driving Digital <span className="ab-gradient-text">Transformation</span> Through Innovation
            </h1>
            <p className="ab-hero-desc a-reveal">
              iTSetu Technosoft Pvt Ltd empowers businesses with ERP software, SaaS solutions,
              IT infrastructure, networking, cloud technologies and enterprise support services
              designed for long-term growth and operational excellence.
            </p>
            <div className="ab-hero-actions a-reveal">
              <a href="#services" className="ab-btn-primary"><span>Explore Services</span></a>
              <a href="#cta" className="ab-btn-ghost">Contact Us</a>
            </div>
          </div>
          <div className="ab-hero-visual a-reveal" aria-hidden="true">
            <div className="ab-vcard ab-vcard-main">
              <div className="ab-vglow" />
              <div className="ab-vbars"><span /><span /><span /><span /><span /></div>
              <div className="ab-vrows">
                <div className="ab-vrow"><i /><i /><i /></div>
                <div className="ab-vrow"><i /><i /></div>
                <div className="ab-vrow"><i /><i /><i /><i /></div>
              </div>
            </div>
            <div className="ab-vcard ab-vcard-mini ab-vcard-mini-1">
              <span className="ab-mini-dot" /><span>Cloud</span>
            </div>
            <div className="ab-vcard ab-vcard-mini ab-vcard-mini-2">
              <span className="ab-mini-dot alt" /><span>ERP</span>
            </div>
          </div>
        </div>
      </section>
      {/* WHO WE ARE */}
      <section className="ab-section ab-light">
        <div className="ab-container ab-split">
          <div className="ab-split-visual a-reveal">
  <div className="ab-image-wrapper">
  <img
    src="/NewBackground8.png"
    alt="ITSetu Team"
    className="ab-image"
  />
</div>
          </div>
          <div className="ab-split-content a-reveal">
            <span className="ab-eyebrow dark">Who We Are</span>
            <h2 className="ab-section-title">A Trusted IT Solutions Company in Pune</h2>
            <p className="ab-text">
              iTSetu Technosoft Pvt Ltd is a Pune-based technology company focused on delivering
              enterprise-grade digital solutions that help organizations modernize operations,
              improve efficiency and accelerate growth.
            </p>
            <p className="ab-text">
              Our expertise spans ERP platforms, CRM systems, networking, cloud solutions, security
              services, infrastructure management and software development — making us a complete
              system integrator for ERP and enterprise technology.
            </p>
            <p className="ab-text">
              We partner with businesses to build reliable, scalable and future-ready technology ecosystems.
            </p>
          </div>
        </div>
      </section>
      {/* MISSION & VISION */}
      <section className="ab-section ab-soft">
        <div className="ab-container">
          <div className="ab-head a-reveal">
            <span className="ab-eyebrow dark">Purpose</span>
            <h2 className="ab-section-title">Our Mission & Vision</h2>
          </div>
          <div className="ab-grid-2">
            <div className="ab-mv-card a-reveal">
              <div className="ab-mv-icon">◆</div>
              <h3>Mission</h3>
              <p>
                To help businesses achieve operational excellence through innovative technology
                solutions, enterprise software and digital transformation services.
              </p>
            </div>
            <div className="ab-mv-card a-reveal" style={{ transitionDelay: "120ms" }}>
              <div className="ab-mv-icon">◇</div>
              <h3>Vision</h3>
              <p>
                To become a trusted technology partner helping organizations build smarter,
                more connected and future-ready enterprises.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* WHY ITSETU */}
      <section className="ab-section ab-light">
        <div className="ab-container">
          <div className="ab-head a-reveal">
            <span className="ab-eyebrow dark">What Makes Us Different</span>
            <h2 className="ab-section-title">Why Businesses Choose iTSetu</h2>
          </div>
          <div className="ab-grid-4">
            {whyCards.map((c, i) => (
              <div key={c.title} className="ab-glow-card a-reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="ab-glow-bg" />
                <div className="ab-glow-num">0{i + 1}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* SERVICES */}
      <section id="services" className="ab-section ab-dark">
        <div className="ab-dark-blobs" aria-hidden="true">
          <div className="ab-dblob ab-dblob-1" />
          <div className="ab-dblob ab-dblob-2" />
        </div>
        <div className="ab-container">
          <div className="ab-head a-reveal">
            <span className="ab-eyebrow light">Our Services</span>
            <h2 className="ab-section-title light">Enterprise Technology Services</h2>
            <p className="ab-sub light">
              A complete suite of services from a leading IT solutions company in Pune.
            </p>
          </div>
          <div className="ab-grid-3">
            {services.map((s, i) => (
              <div key={s.title} className="ab-glass-card a-reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="ab-glass-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* EXPERTISE */}
      <section className="ab-section ab-soft">
        <div className="ab-container">
          <div className="ab-head a-reveal">
            <span className="ab-eyebrow dark">Our Technology Expertise</span>
            <h2 className="ab-section-title">Technology Solutions That Drive Growth</h2>
            <p className="ab-sub">
              We help organizations build secure, scalable and high-performance technology
              environments through integrated enterprise solutions — from CRM software in Pune
              to cloud infrastructure across India.
            </p>
          </div>
          <div className="ab-exp-grid">
            {expertise.map((e, i) => (
              <div key={e} className="ab-exp-chip a-reveal" style={{ transitionDelay: `${i * 50}ms` }}>
                <span className="ab-exp-dot" />
                {e}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* APPROACH / TIMELINE */}
      <section className="ab-section ab-light">
        <div className="ab-container">
          <div className="ab-head a-reveal">
            <span className="ab-eyebrow dark">Our Approach</span>
            <h2 className="ab-section-title">Our Approach To Success</h2>
          </div>
          <div className="ab-timeline">
            <div className="ab-rail" aria-hidden="true" />
            {steps.map((p, i) => (
              <div key={p.n} className={`ab-tl-row a-reveal ${i % 2 ? "right" : "left"}`}>
                <div className="ab-tl-node" />
                <div className="ab-tl-card">
                  <span className="ab-tl-step">{p.n}</span>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* INDUSTRIES */}
      <section className="ab-section ab-soft">
        <div className="ab-container">
          <div className="ab-head a-reveal">
            <span className="ab-eyebrow dark">Industries</span>
            <h2 className="ab-section-title">Industries We Empower</h2>
          </div>
          <div className="ab-ind-grid">
            {industries.map((ind, i) => (
              <div key={ind.name} className="ab-ind-card a-reveal" style={{ transitionDelay: `${i * 50}ms` }}>
                <div className="ab-ind-icon">{ind.icon}</div>
                <div className="ab-ind-name">{ind.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* WHY ITSETU LARGE */}
      <section className="ab-section ab-light">
        <div className="ab-container ab-split ab-split-reverse">
          <div className="ab-split-content a-reveal">
            <span className="ab-eyebrow dark">Why iTSetu</span>
            <h2 className="ab-section-title">Building Technology That Powers Business Growth</h2>
            <p className="ab-text">
              At iTSetu, we believe technology should simplify operations, strengthen customer
              relationships and unlock new opportunities for growth.
            </p>
            <p className="ab-text">
              Our focus is on delivering reliable, scalable and business-driven technology
              solutions — including ERP software in Pune, quotation management software and
              SaaS platforms — that create measurable impact.
            </p>
            <ul className="ab-check">
              <li>Trusted IT infrastructure company in Pune</li>
              <li>Proven system integrator for ERP platforms</li>
              <li>End-to-end enterprise support services</li>
              <li>Long-term customer partnerships</li>
            </ul>
          </div>
          <div className="ab-split-visual a-reveal">
            <div className="ab-bal-frame">
              <div className="ab-bal-circle ab-bal-circle-1" />
              <div className="ab-bal-circle ab-bal-circle-2" />
              <div className="ab-bal-circle ab-bal-circle-3" />
              <div className="ab-bal-grid" />
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section id="cta" className="ab-cta">
        <div className="ab-cta-blob" aria-hidden="true" />
        <div className="ab-container ab-cta-inner a-reveal">
          <h2>Ready To Transform Your Business?</h2>
          <p>
            Partner with iTSetu to accelerate digital transformation through ERP software,
            cloud services, networking solutions and enterprise technology support.
          </p>
          <div className="ab-cta-actions">
            <a href="#" className="ab-btn-primary"><span>Get Started</span></a>
            <a href="mailto:contact@itsetu.com" className="ab-btn-ghost light">Contact Us</a>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
}