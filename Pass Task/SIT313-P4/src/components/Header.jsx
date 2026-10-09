import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, User, LogOut } from 'lucide-react';

const Header = ({ currentUser, onLogout }) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-container">
        {/* Brand link to home page */}
        <Link to="/" className="brand-link">
          <span className="brand-title">DEV@Deakin</span>
        </Link>

        {/* Center search bar */}
        <div className="header-search">
          <Search className="search-icon" size={18} />
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-input"
          />
        </div>

        {/* Navigation Action Buttons matching P4 wireframe */}
        <div className="header-actions">
          <button className="btn-header-post" onClick={() => alert('Post feature will be implemented in a future task!')}>
            Post
          </button>

          {currentUser ? (
            <div className="user-profile-badge">
              <User size={16} />
              <span className="user-name">{currentUser.name || currentUser.email}</span>
              <button 
                onClick={onLogout} 
                className="btn-header-logout" 
                title="Sign out"
              >
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn-header-login">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
