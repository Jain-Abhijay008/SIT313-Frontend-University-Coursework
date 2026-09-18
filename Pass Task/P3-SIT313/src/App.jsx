import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import AuthorProfile from './components/AuthorProfile';
import Portfolio from './components/Portfolio';
import Gallery from './components/Gallery';
import FeaturedArticles from './components/FeaturedArticles';
import FeaturedTutorials from './components/FeaturedTutorials';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Banner name="Abhijay Jain" />
        <AuthorProfile />
        <Portfolio />
        <Gallery />
        <FeaturedArticles />
        <FeaturedTutorials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
