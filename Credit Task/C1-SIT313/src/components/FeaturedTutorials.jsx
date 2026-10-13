import React from 'react';
import TutorialCard from './TutorialCard';
import { tutorials } from '../data';

const FeaturedTutorials = () => {
  return (
    <section className="featured-section">
      <h2 className="section-title">Featured Tutorials</h2>
      <div className="cards-grid">
        {tutorials.map((tutorial) => (
          <TutorialCard key={tutorial.id} tutorial={tutorial} />
        ))}
      </div>
      <div className="action-center">
        <button className="btn-see-all">See all tutorials</button>
      </div>
    </section>
  );
};

export default FeaturedTutorials;
