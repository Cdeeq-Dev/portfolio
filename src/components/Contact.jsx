import React, { useState } from 'react';
import { personalInfo, contactInfo } from '../data';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 2000);
  };

  const contactLinks = [
  {
    label: 'Email',
    value: 'abubakarbellosdk@gmail.com',
    href: 'mailto:abubakarbellosdk@gmail.com',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    )
  },
  {
    label: 'GitHub',
    value: 'github.com/cdeeqano',
    href: 'https://github.com/cdeeqano',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    )
  },
  {
    label: 'LinkedIn',
    value: 'Abubakar Bello SDK',
    href: 'https://www.linkedin.com/in/abubakar-bello-sdk',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
    },


  ];

  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-info">
            <div className="contact-intro">
              <h2 className="contact-intro-title">Get In Touch</h2>
              <p className="contact-intro-text">{contactInfo.intro}</p>
            </div>

            <div className="contact-links">
              {contactLinks.map((link, index) => (
                <a key={index} href={link.href} className="contact-link" target="_blank" rel="noopener noreferrer">
                  <div className="contact-link-icon">{link.icon}</div>
                  <div className="contact-link-content">
                    <span className="contact-link-label">{link.label}</span>
                    <span className="contact-link-value">{link.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-group">
              <label className="contact-form-label" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="contact-form-input"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="contact-form-group">
              <label className="contact-form-label" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="contact-form-input"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="contact-form-group">
              <label className="contact-form-label" htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="contact-form-input"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="contact-form-group">
              <label className="contact-form-label" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="contact-form-textarea"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className={`contact-form-submit ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>

            <div className={`contact-success ${isSuccess ? 'show' : ''}`}>
              Thank you for your message! I'll get back to you soon.
            </div>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;