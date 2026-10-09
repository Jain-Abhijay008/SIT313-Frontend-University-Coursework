import React from 'react';
import Banner from '../components/Banner';
import AuthorProfile from '../components/AuthorProfile';
import Portfolio from '../components/Portfolio';
import Gallery from '../components/Gallery';
import FeaturedArticles from '../components/FeaturedArticles';
import FeaturedTutorials from '../components/FeaturedTutorials';

const HomePage = () => {
  return (
    <main className="main-content">
      <Banner name="Manender" />
      <AuthorProfile />
      <Portfolio />
      <Gallery />
      <FeaturedArticles />
      <FeaturedTutorials />
    </main>
  );
};

export default HomePage;
