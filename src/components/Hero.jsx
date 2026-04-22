import React from 'react';
import { personalInfo } from '../data';
import '../styles/Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background-layer"></div>
      <div className="container">
        <div className="hero-left">
          <div className="hero-badge">
            <div className="hero-dot"></div>
            Available for work
          </div>

          <h1 className="hero-title">
           
            <span>Hi, I'm {personalInfo.name}</span>
          </h1>

          <p className="hero-subtitle">
            I design and code polished web interfaces with React and build reliable backend systems that scale smoothly.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              View My Work
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              Get In Touch
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">{personalInfo.yearsExperience}+</span>
              <span className="hero-stat-label">Years Experience</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">{personalInfo.projectsShipped}+</span>
              <span className="hero-stat-label">Projects Shipped</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">{personalInfo.happyClients}+</span>
              <span className="hero-stat-label">Happy Clients</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-avatar">
            <div className="hero-avatar-frame">
              <img src="/hero-image.png" alt={personalInfo.name} className="hero-avatar-img" />
            </div>
            <div className="hero-chip hero-chip-1">{personalInfo.title}</div>
            <div className="hero-chip hero-chip-2">{personalInfo.yearsExperience}+ Years</div>
            <div className="hero-chip hero-chip-3">{personalInfo.location}</div>
          </div>
        </div>

        <div className="hero-offers">
          <div className="hero-offer offer-left">
            <div className="hero-offer-icon">🚀</div>
            <h3>Modern Web Products</h3>
            <p>Fast, polished websites and applications with strong UI and reliable backend integration.</p>
          </div>

          <div className="hero-offer offer-center">
            <div className="hero-offer-icon">⚡</div>
            <h3>Smart Delivery</h3>
            <p>Highly optimized builds, smooth releases, and precise craftsmanship for every project.</p>
          </div>

          <div className="hero-offer offer-right">
            <div className="hero-offer-icon">🔒</div>
            <h3>Secure Systems</h3>
            <p>Secure APIs, clean architecture, and thoughtful data flows to protect every experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;