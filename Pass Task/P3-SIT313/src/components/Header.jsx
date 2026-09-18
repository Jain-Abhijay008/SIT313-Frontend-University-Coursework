import React from 'react';
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-brand">
          <span className="brand-title">DEV@Deakin</span>
        </div>
        <div className="header-search">
          <Search className="search-icon" size={18} />
          <input 
            type="text" 
            placeholder="Search articles, tutorials..." 
            className="search-input"
          />
        </div>
        <nav className="header-nav">
          <a href="#about" className="nav-link">About</a>
          <a href="#work" className="nav-link">Work</a>
          <a href="#contact" className="nav-link">Contact</a>
          <button className="btn-secondary">Post</button>
          <button className="btn-primary">Login</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
