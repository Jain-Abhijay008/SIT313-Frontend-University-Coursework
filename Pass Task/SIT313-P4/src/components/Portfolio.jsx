import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data';

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="portfolio-heading">Here's what I have done so far</h2>
      <div className="portfolio-card-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
