import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Check local session on load
    try {
      const savedUser = localStorage.getItem('dev_deakin_current_user');
      if (savedUser) {
        setCurrentUser(JSON.parse(savedUser));
      }
    } catch {
      // ignore
    }
  }, []);

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    localStorage.removeItem('dev_deakin_current_user');
    setCurrentUser(null);
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Navigation Bar: Shared identically across all pages */}
        <Header currentUser={currentUser} onLogout={handleLogout} />

        {/* Dynamic Route Content */}
        <div className="page-content-wrapper">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route 
              path="/login" 
              element={<LoginPage onLoginSuccess={handleLoginSuccess} />} 
            />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </div>

        {/* Footer: Shared identically across all pages */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
