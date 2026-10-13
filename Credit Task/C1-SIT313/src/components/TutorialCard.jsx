import React from 'react';
import { Star } from 'lucide-react';

const TutorialCard = ({ tutorial }) => {
  const { title, description, image, rating, username } = tutorial;

  return (
    <div className="card tutorial-card">
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
      <div className="card-footer">
        <div className="card-rating">
          <Star className="star-icon" size={16} fill="#eab308" color="#eab308" />
          <span className="rating-value">{rating}</span>
        </div>
        <div className="card-meta">
          <span className="meta-label">User:</span> @{username}
        </div>
      </div>
    </div>
  );
};

export default TutorialCard;
