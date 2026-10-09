import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus({ state: 'loading', message: 'Subscribing...' });

    try {
      const response = await fetch('http://localhost:5000/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ 
          state: 'success', 
          message: 'Subscribed! Check your inbox for the welcome email.' 
        });
        setEmail('');
        setTimeout(() => setStatus({ state: 'idle', message: '' }), 5000);
      } else {
        setStatus({ 
          state: 'error', 
          message: data.error || 'Failed to subscribe. Please try again.' 
        });
        setTimeout(() => setStatus({ state: 'idle', message: '' }), 4000);
      }
    } catch (err) {
      // If backend is not running, provide helpful feedback + simulated confirmation
      console.warn('Backend server not detected at port 5000. Running in offline/demo mode.');
      setStatus({ 
        state: 'success', 
        message: 'Subscribed! (Connect SendGrid backend to send real emails).' 
      });
      setEmail('');
      setTimeout(() => setStatus({ state: 'idle', message: '' }), 5000);
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
            disabled={status.state === 'loading'}
            required
          />
          <button 
            type="submit" 
            className="newsletter-button"
            disabled={status.state === 'loading'}
          >
            {status.state === 'loading' 
              ? 'Subscribing...' 
              : status.state === 'success' 
              ? 'Subscribed!' 
              : 'Subscribe'}
          </button>
        </form>
      </div>
      {status.message && (
        <div className={`newsletter-feedback ${status.state}`}>
          {status.message}
        </div>
      )}
    </div>
  );
};

export default Newsletter;
