"use client";

import { useEffect, useRef, useState } from "react";
import "./carrers.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
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

export default function Career() {
  useReveal();
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const whyCards = [
    { title: "Continuous Learning", desc: "We encourage employees to continuously upgrade their technical and professional skills." },
    { title: "Career Growth", desc: "Structured growth opportunities and challenging projects help individuals achieve their career goals." },
    { title: "Innovation Culture", desc: "We believe innovation happens when people are free to explore ideas and technologies." },
    { title: "Work Life Balance", desc: "Healthy work environments create productive and successful teams." },
  ];

  const evpCards = [
    { title: "Professional Growth", desc: "Real-world enterprise project exposure that accelerates your career trajectory." },
    { title: "Technology Exposure", desc: "Work with ERP, SaaS, cloud, networking and modern enterprise tech stacks." },
    { title: "Team Collaboration", desc: "Cross-functional teams that value ownership, respect and shared success." },
    { title: "Career Advancement", desc: "Clear ladders, mentorship and pathways to leadership roles." },
  ];

  const induction = [
    { step: "01", title: "Welcome Onboarding", desc: "Introduction to ITSetu's vision, mission and values." },
    { step: "02", title: "Culture Immersion", desc: "Deep-dive into our collaborative, customer-first culture." },
    { step: "03", title: "Technology Orientation", desc: "Hands-on training across our enterprise platforms." },
    { step: "04", title: "Workflow Training", desc: "Learn our delivery, quality and engineering processes." },
    { step: "05", title: "Mentor Pairing", desc: "Get paired with a senior mentor for your first 90 days." },
  ];

  const learning = [
    { icon: "🎓", title: "Technical Training", desc: "Structured programs across modern enterprise technologies." },
    { icon: "📜", title: "Certification Programs", desc: "Sponsored certifications on AWS, Azure, Cisco and more." },
    { icon: "🛠️", title: "Skill Workshops", desc: "Hands-on workshops led by senior engineers and partners." },
    { icon: "🤝", title: "Knowledge Sharing", desc: "Weekly tech talks and internal engineering forums." },
    { icon: "🧭", title: "Mentorship", desc: "1:1 mentorship programs designed for accelerated growth." },
    { icon: "🚀", title: "Leadership Development", desc: "Programs that prepare high-performers for leadership." },
  ];

  const cultureChips = ["Innovation", "Learning", "Experimentation", "Teamwork", "Leadership", "Ownership"];

  return (
    
    <main className="career-page">
      <Navbar></Navbar>
      {/* HERO */}
      <section className="career-hero">
        <div className="hero-grid-overlay" aria-hidden="true" />
        <div className="hero-blob hero-blob-1" aria-hidden="true" />
        <div className="hero-blob hero-blob-2" aria-hidden="true" />
        <div className="hero-blob hero-blob-3" aria-hidden="true" />
        <div className="hero-particles" aria-hidden="true">
          {Array.from({ length: 18 }).map((_, i) => (
            <span key={i} className={`particle particle-${i + 1}`} />
          ))}
        </div>

        <div className="hero-inner">
          <div className="hero-copy">
            <span className="hero-eyebrow reveal">CAREERS AT ITSETU</span>
            <h1 className="hero-title reveal">
              People <span className="hero-gradient-text">Power</span> Innovation
            </h1>
            <p className="hero-desc reveal">
              At ITSetu, our people are our greatest strength. We believe in building careers
              that are multifaceted, future-ready and focused on continuous growth. We create
              opportunities for passionate individuals to innovate, learn and make meaningful
              impact through technology.
            </p>
            <div className="hero-actions reveal">
              <a href="#evp" className="btn-primary">
                <span>Explore Careers</span>
              </a>
              <a href="#form" className="btn-ghost">Join Our Team</a>
            </div>
          </div>

          <div className="hero-visual reveal" aria-hidden="true">
            <div className="visual-card visual-card-main">
              <div className="visual-glow" />
              <div className="visual-bars">
                <span /><span /><span /><span /><span />
              </div>
              <div className="visual-rows">
                <div className="visual-row"><i /><i /><i /></div>
                <div className="visual-row"><i /><i /></div>
                <div className="visual-row"><i /><i /><i /><i /></div>
              </div>
            </div>
            <div className="visual-card visual-card-mini visual-card-mini-1">
              <span className="mini-dot" />
              <span className="mini-label">Cloud Ops</span>
            </div>
            <div className="visual-card visual-card-mini visual-card-mini-2">
              <span className="mini-dot mini-dot-alt" />
              <span className="mini-label">ERP Build</span>
            </div>
          </div>
        </div>
      </section>

      {/* PEOPLE STRENGTH */}
      <section className="section section-light">
        <div className="container split-section">
          <div className="split-visual reveal">
            <div className="split-frame">
              <div className="split-frame-inner">
                <div className="frame-shape frame-shape-1" />
                <div className="frame-shape frame-shape-2" />
                <div className="frame-shape frame-shape-3" />
              </div>
            </div>
          </div>
          <div className="split-content reveal">
            <span className="eyebrow">Our People</span>
            <h2 className="section-title">Our People Are Our Strength</h2>
            <p className="section-text">
              At ITSetu, we invest in ensuring career paths are holistic, rewarding and
              growth-oriented.
            </p>
            <p className="section-text">
              We encourage every individual to challenge themselves, take ownership and
              continuously strive for excellence.
            </p>
            <p className="section-text">
              We believe innovation comes from people who are empowered to learn, experiment
              and grow.
            </p>
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Our Culture</span>
            <h2 className="section-title">A Culture Built On Learning And Innovation</h2>
            <p className="section-sub">
              We foster an inclusive environment driven by diversity, curiosity, passion and respect.
            </p>
          </div>
          <div className="culture-chips">
            {cultureChips.map((c, i) => (
              <div key={c} className="culture-chip reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <span className="chip-dot" />
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WORK */}
      <section className="section section-light">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Why ITSetu</span>
            <h2 className="section-title">Why Work With ITSetu</h2>
          </div>
          <div className="grid-4">
            {whyCards.map((c, i) => (
              <div key={c.title} className="glow-card reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="glow-card-bg" />
                <div className="glow-card-num">0{i + 1}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVP */}
      <section id="evp" className="section section-dark">
        <div className="dark-blobs" aria-hidden="true">
          <div className="dark-blob dark-blob-1" />
          <div className="dark-blob dark-blob-2" />
        </div>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow eyebrow-light">Employee Value Proposition</span>
            <h2 className="section-title light">What Makes ITSetu Different</h2>
            <p className="section-sub light">
              At ITSetu, employees gain exposure to real-world enterprise projects involving
              ERP platforms, SaaS products, cloud infrastructure, networking and system integration.
            </p>
          </div>
          <div className="grid-4">
            {evpCards.map((c, i) => (
              <div key={c.title} className="glass-card reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="glass-card-icon" />
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      {/* LEARNING */}
      <section className="section section-light">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Learning & Development</span>
            <h2 className="section-title">Never Stop Learning</h2>
            <p className="section-sub">
              We encourage continuous improvement through programs designed for every stage
              of your career.
            </p>
          </div>
          <div className="grid-3">
            {learning.map((l, i) => (
              <div key={l.title} className="learn-card reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="learn-icon">{l.icon}</div>
                <h3>{l.title}</h3>
                <p>{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK LIFE BALANCE */}
      <section className="section section-soft">
        <div className="container split-section split-reverse">
          <div className="split-content reveal">
            <span className="eyebrow">Wellbeing</span>
            <h2 className="section-title">Work Life Balance Matters</h2>
            <p className="section-text">
              We believe exceptional work comes from motivated and balanced professionals.
            </p>
            <p className="section-text">
              We promote healthy work culture, flexibility, collaboration and employee wellbeing.
            </p>
            <ul className="check-list">
              <li>Flexible work arrangements</li>
              <li>Wellness and mental health programs</li>
              <li>Team offsites and recharge breaks</li>
              <li>Inclusive, respectful environment</li>
            </ul>
          </div>
          <div className="split-visual reveal">
            <div className="balance-frame">
              <div className="balance-circle balance-circle-1" />
              <div className="balance-circle balance-circle-2" />
              <div className="balance-circle balance-circle-3" />
              <div className="balance-grid" />
            </div>
          </div>
        </div>
      </section>

    

      {/* FORM */}
      <section id="form" className="section section-light">
        <div className="container container-narrow">
          <div className="section-head reveal">
            <span className="eyebrow">Apply</span>
            <h2 className="section-title">Send Us Your Profile</h2>
            <p className="section-sub">
              Share your details and our talent team will reach out shortly.
            </p>
          </div>
          <form
            ref={formRef}
            className="glass-form reveal"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="cname">Full Name</label>
                <input id="cname" type="text" required placeholder="Your name" />
              </div>
              <div className="form-field">
                <label htmlFor="cemail">Email Address</label>
                <input id="cemail" type="email" required placeholder="you@email.com" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="cphone">Phone Number</label>
                <input id="cphone" type="tel" required placeholder="+91 ..." />
              </div>
              <div className="form-field">
                <label htmlFor="cresume">Resume Upload</label>
                <input id="cresume" type="file" accept=".pdf,.doc,.docx" />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="cmsg">Message</label>
              <textarea id="cmsg" rows={5} placeholder="Tell us about yourself..." />
            </div>
            <button type="submit" className="btn-primary btn-block">
              <span>{submitted ? "Application Received ✓" : "Submit Application"}</span>
            </button>
          </form>
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
}