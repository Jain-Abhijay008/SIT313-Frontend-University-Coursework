import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <div className="newsletter-banner">
      <div className="newsletter-container">
        <h3 className="newsletter-title">SIGN UP FOR OUR DAILY INSIDER</h3>
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="newsletter-input"
            required
          />
          <button type="submit" className="newsletter-button">
            {submitted ? 'Subscribed!' : 'Subscribe'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
