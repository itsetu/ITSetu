"use client";

import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const contactCards = [
  { icon: "📍", title: "Office Address", lines: ["Address: Office No. 236, 2nd Floor, Vision 9, Kunal Icon Road, Pimple Saudagar, Pune -411027."] },
  { icon: "📞", title: "Phone Support", lines: ["+91 8237165766"] },
  { icon: "✉️", title: "Email Address", lines: ["info@itsetu.com"] },
  { icon: "🕒", title: "Business Hours", lines: ["Monday – Saturday", "9:00 AM – 7:00 PM"] },
];

const services = [
  { icon: "🧩", title: "ERP & CRM Software (Advitwala)" },
  { icon: "💻", title: "Software Development" },
  { icon: "🌐", title: "Website Design & Development" },
  { icon: "☁️", title: "Cloud Services" },
  { icon: "🛰️", title: "Networking Solutions" },
  { icon: "🏗️", title: "IT Infrastructure" },
  { icon: "🖥️", title: "Server Management" },
  { icon: "🛡️", title: "Security Solutions" },
  { icon: "🛠️", title: "IT AMC Support" },
  { icon: "🔗", title: "System Integration" },
];

const whyCards = [
  { icon: "🏆", title: "Enterprise Expertise", desc: "Deep expertise across ERP, cloud, networking and infrastructure." },
  { icon: "🎯", title: "Tailored Solutions", desc: "Customized technology solutions aligned with business goals." },
  { icon: "🤝", title: "Reliable Support", desc: "Dedicated technical support and enterprise assistance." },
  { icon: "🚀", title: "End-To-End Services", desc: "From consultation to implementation and support." },
];

const processSteps = [
  { n: "01", title: "Requirement Discussion" },
  { n: "02", title: "Solution Planning" },
  { n: "03", title: "Implementation Strategy" },
  { n: "04", title: "Deployment & Integration" },
  { n: "05", title: "Support & Optimization" },
];

const partners = ["Microsoft", "AWS", "Google Cloud", "Cisco", "Oracle", "VMware", "Fortinet", "Dell", "HP", "Zoho", "SAP", "Linux"];

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal") || [];
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
}

export default function Contact() {
  const pageRef = useReveal();
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", service: "", message: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! Our team will reach out to you shortly.");
  };

  return (
    <main className="itsetu-contact" ref={pageRef}>
      <Navbar></Navbar>
      {/* SECTION 1 — HERO */}
      <section className="its-hero">
        <div className="its-hero-bg">
          <div className="its-grid-overlay" />
          <div className="its-blob its-blob-1" />
          <div className="its-blob its-blob-2" />
          <div className="its-blob its-blob-3" />
          <div className="its-particles">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} style={{ "--i": i }} />
            ))}
          </div>
        </div>

        <div className="its-container its-hero-grid">
          <div className="its-hero-copy">
            <span className="its-eyebrow reveal">CONTACT ITSETU</span>
            <h1 className="its-hero-title reveal">
              Let's Build Something <span className="its-gradient-text">Great Together</span>
            </h1>
            <p className="its-hero-desc reveal">
              Whether you're looking for ERP software, cloud services, networking
              solutions, IT infrastructure support or enterprise technology
              consulting, our team is ready to help.
            </p>
            <div className="its-hero-cta reveal">
              <a href="#contact-form" className="its-btn its-btn-primary"><span>Get In Touch</span></a>
              <a href="#contact-form" className="its-btn its-btn-ghost"><span>Schedule Consultation</span></a>
            </div>
          </div>

          <div className="its-hero-visual reveal">
            <div className="its-orbit">
              <div className="its-orbit-core"><span>ITSetu</span></div>
              <div className="its-orbit-ring its-ring-1"><span className="its-orbit-dot">☁️</span></div>
              <div className="its-orbit-ring its-ring-2"><span className="its-orbit-dot">🛡️</span></div>
              <div className="its-orbit-ring its-ring-3"><span className="its-orbit-dot">🧩</span></div>
              <div className="its-orbit-glow" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — CONTACT INFO */}
      <section className="its-section its-light">
        <div className="its-container">
          <header className="its-section-head reveal">
            <h2>Get In Touch</h2>
            <p>Reach out to our team for ERP software, cloud services, networking solutions, IT infrastructure projects and enterprise technology support.</p>
          </header>

          <div className="its-contact-grid">
            {contactCards.map((c, i) => (
              <div className="its-contact-card reveal" style={{ "--d": `${i * 80}ms` }} key={c.title}>
                <div className="its-card-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                {c.lines.map((l) => <p key={l}>{l}</p>)}
                <div className="its-card-glow" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — CONTACT FORM */}
      <section className="its-section its-dark" id="contact-form">
        <div className="its-bg-soft" />
        <div className="its-container its-form-grid">
          <div className="its-form-copy reveal">
            <h2>Send Us A Message</h2>
            <p>Tell us about your project requirements and our experts will get back to you. We support businesses with ERP Software in Pune, CRM solutions, SaaS platforms and IT infrastructure across India.</p>
            <ul className="its-form-points">
              <li><span>✓</span> Trusted IT Solutions Company in Pune</li>
              <li><span>✓</span> Enterprise-grade SaaS & ERP delivery</li>
              <li><span>✓</span> Dedicated networking & infrastructure team</li>
            </ul>
          </div>

          <form className="its-form reveal" onSubmit={handleSubmit}>
            <div className="its-form-row">
              <div className="its-field">
                <input name="name" value={form.name} onChange={handleChange} placeholder=" " required />
                <label>Full Name</label>
              </div>
              <div className="its-field">
                <input name="company" value={form.company} onChange={handleChange} placeholder=" " />
                <label>Company Name</label>
              </div>
            </div>
            <div className="its-form-row">
              <div className="its-field">
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder=" " required />
                <label>Email Address</label>
              </div>
              <div className="its-field">
                <input name="phone" value={form.phone} onChange={handleChange} placeholder=" " />
                <label>Phone Number</label>
              </div>
            </div>
            <div className="its-field">
              <select name="service" value={form.service} onChange={handleChange} required>
                <option value="" disabled>Select a service</option>
                {services.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
              </select>
              <label className="its-label-static">Service Required</label>
            </div>
            <div className="its-field">
              <textarea name="message" rows="5" value={form.message} onChange={handleChange} placeholder=" " required />
              <label>Message</label>
            </div>
            <button type="submit" className="its-btn its-btn-primary its-btn-block">
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </section>

      {/* SECTION 4 — SERVICES */}
      <section className="its-section its-light">
        <div className="its-container">
          <header className="its-section-head reveal">
            <h2>How Can We Help You?</h2>
            <p>From ERP Software Pune to System Integrator ERP and Networking Company Pune — explore our enterprise capabilities.</p>
          </header>

          <div className="its-services-grid">
            {services.map((s, i) => (
              <div className="its-service-card reveal" style={{ "--d": `${i * 50}ms` }} key={s.title}>
                <div className="its-service-icon">{s.icon}</div>
                <h4>{s.title}</h4>
                <div className="its-arrow">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHY ITSETU */}
      <section className="its-section its-tinted">
        <div className="its-container">
          <header className="its-section-head reveal">
            <h2>Why Businesses Choose ITSetu</h2>
            <p>A trusted IT Solutions Company in Pune delivering measurable outcomes.</p>
          </header>
          <div className="its-why-grid">
            {whyCards.map((c, i) => (
              <div className="its-why-card reveal" style={{ "--d": `${i * 90}ms` }} key={c.title}>
                <div className="its-why-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — PROCESS */}
      <section className="its-section its-dark">
        <div className="its-bg-soft" />
        <div className="its-container">
          <header className="its-section-head its-head-light reveal">
            <h2>Our Engagement Process</h2>
            <p>A clear path from discovery to long-term optimization.</p>
          </header>

          <div className="its-timeline">
            <div className="its-timeline-line" />
            {processSteps.map((s, i) => (
              <div className={`its-step reveal ${i % 2 ? "right" : "left"}`} key={s.n} style={{ "--d": `${i * 120}ms` }}>
                <div className="its-step-card">
                  <span className="its-step-num">{s.n}</span>
                  <h4>{s.title}</h4>
                </div>
                <div className="its-step-dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — MAP */}
    

      {/* SECTION 8 — PARTNERS */}
      <section className="its-section its-tinted">
        <div className="its-container">
          <header className="its-section-head reveal">
            <h2>Technology Ecosystem</h2>
            <p>We work with leading enterprise technologies and modern digital platforms to deliver reliable business solutions.</p>
          </header>

          <div className="its-partners">
            {partners.map((p, i) => (
              <div className="its-partner reveal" style={{ "--d": `${i * 40}ms` }} key={p}>{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — FINAL CTA */}
      <section className="its-cta">
        <div className="its-cta-bg">
          <div className="its-blob its-blob-1" />
          <div className="its-blob its-blob-2" />
        </div>
        <div className="its-container its-cta-inner reveal">
          <h2>Ready To Transform Your Business?</h2>
          <p>Partner with ITSetu for ERP software, SaaS solutions, networking, cloud services and enterprise IT infrastructure support.</p>
          <div className="its-hero-cta">
            <a href="#contact-form" className="its-btn its-btn-primary"><span>Contact Our Experts</span></a>
            <a href="#contact-form" className="its-btn its-btn-ghost"><span>Request Consultation</span></a>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
}
