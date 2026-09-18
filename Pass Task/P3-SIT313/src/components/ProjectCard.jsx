import React from 'react';

const ProjectCard = ({ project }) => {
  const { name, image, githubUrl } = project;

  return (
    <div className="portfolio-row-item">
      <div className="portfolio-image-wrapper">
        <img src={image} alt={name} className="portfolio-image" />
      </div>
      <div className="portfolio-content">
          {name}
        
      </div>
    </div>
  );
};

export default ProjectCard;
