import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { loginUser } from '../firebase';

const LoginPage = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Please enter both your email and password.');
      return;
    }

    setLoading(true);
    const result = await loginUser({ email, password });
    setLoading(false);

    if (result.success) {
      if (onLoginSuccess) {
        onLoginSuccess(result.user);
      }
      localStorage.setItem('dev_deakin_current_user', JSON.stringify(result.user));
      navigate('/');
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="auth-wireframe-page">
      <div className="wireframe-box login-box">
        {/* Top-right "Sign up" button link matching wireframe */}
        <div className="box-top-action">
          <Link to="/signup" className="btn-wireframe-signup">
            Sign up
          </Link>
        </div>

        {location.state?.message && (
          <div className="auth-success-banner">
            {location.state.message}
          </div>
        )}

        <form onSubmit={handleLogin} className="wireframe-form login-form">
          <div className="form-vertical-group">
            <label htmlFor="login-email" className="wireframe-label">Your email</label>
            <input
              id="login-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="wireframe-input"
              required
            />
          </div>

          <div className="form-vertical-group">
            <label htmlFor="login-password" className="wireframe-label">Your password</label>
            <input
              id="login-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="wireframe-input"
              required
            />
          </div>

          {error && (
            <div className="wireframe-error">
              <span>{error}</span>
              {error.includes('sign up') && (
                <div>
                  <Link to="/signup" className="error-signup-link">Click here to sign up for a free account</Link>
                </div>
              )}
            </div>
          )}

          <button 
            type="submit" 
            className="btn-wireframe-submit"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
