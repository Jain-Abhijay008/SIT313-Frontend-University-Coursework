import React from 'react';
import { Star } from 'lucide-react';

const ArticleCard = ({ article }) => {
  const { title, description, image, rating, author } = article;

  return (
    <div className="card article-card">
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
          <span className="meta-label">Author:</span> {author}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
