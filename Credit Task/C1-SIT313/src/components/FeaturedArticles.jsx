import React from 'react';
import ArticleCard from './ArticleCard';
import { articles } from '../data';

const FeaturedArticles = () => {
  return (
    <section className="featured-section">
      <h2 className="section-title">Featured Articles</h2>
      <div className="cards-grid">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      <div className="action-center">
        <button className="btn-see-all">See all articles</button>
      </div>
    </section>
  );
};

export default FeaturedArticles;
