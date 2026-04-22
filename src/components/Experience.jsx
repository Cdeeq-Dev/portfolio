import React from 'react';
import { experience, contactInfo } from '../data';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="experience-sidebar">
          <div className="experience-intro">
            <h2 className="experience-intro-title">My Journey</h2>
            <p className="experience-intro-text">
              Over the years, I've had the opportunity to work with amazing teams and build impactful solutions.
              Here's a timeline of my professional experience.
            </p>
          </div>
          <a
            href={contactInfo.resumeLink}
            className="btn btn-primary experience-resume-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>

        <div className="experience-timeline">
          {experience.map(item => (
            <div key={item.id} className={`experience-item ${item.current ? 'current' : ''}`}>
              <h3 className="experience-item-company">{item.company}</h3>
              <h4 className="experience-item-position">{item.position}</h4>
              <span className="experience-item-duration">{item.duration}</span>
              <p className="experience-item-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;