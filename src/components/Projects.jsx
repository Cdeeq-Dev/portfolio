import React, { useState } from 'react';
import { projects } from '../data';
import '../styles/Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'frontend', 'backend', 'fullstack'];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects-header">
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">
            Here are some of the projects I've worked on recently. Each one represents a unique challenge and learning experience.
          </p>
        </div>

        <div className="projects-filters">
          {filters.map(filter => (
            <button
              key={filter}
              className={`projects-filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="projects-card">
              <div
                className="projects-card-thumbnail"
                style={{ '--gradient': project.gradient }}
              >
                <span>{project.emoji}</span>
              </div>
              <div className="projects-card-content">
                <h3 className="projects-card-title">{project.title}</h3>
                <p className="projects-card-description">{project.description}</p>
                <div className="projects-card-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="projects-card-tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="projects-card-links">
                  <a
                    href={project.liveLink}
                    className="projects-card-link primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="projects-card-link secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;