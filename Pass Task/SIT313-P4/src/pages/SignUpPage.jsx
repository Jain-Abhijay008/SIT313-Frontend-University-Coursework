import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../firebase';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    const { name, email, password, confirmPassword } = formData;

    const nameParts = name.trim().split(/\s+/);
    if (!name.trim() || nameParts.length < 2) {
      return 'Please enter your full name (both first and last name).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return 'Please enter a valid email address.';
    }

    if (password.length < 6) {
      return 'Password must be at least 6 characters long.';
    }

    if (password !== confirmPassword) {
      return 'Passwords do not match.';
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    const result = await registerUser({
      name: formData.name,
      email: formData.email,
      password: formData.password
    });
    setLoading(false);

    if (result.success) {
      navigate('/login', { 
        state: { message: 'Account created successfully! Please log in.' } 
      });
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="auth-wireframe-page">
      <div className="wireframe-box signup-box">
        {/* Title centered in bright blue text matching wireframe */}
        <h2 className="wireframe-signup-title">Create a DEV@Deakin Account</h2>

        <form onSubmit={handleSubmit} className="wireframe-form signup-form">
          <div className="form-horizontal-row">
            <label htmlFor="signup-name" className="wireframe-row-label">Name*</label>
            <input
              id="signup-name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="wireframe-input"
              required
            />
          </div>

          <div className="form-horizontal-row">
            <label htmlFor="signup-email" className="wireframe-row-label">Email*</label>
            <input
              id="signup-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="wireframe-input"
              required
            />
          </div>

          <div className="form-horizontal-row">
            <label htmlFor="signup-password" className="wireframe-row-label">Password*</label>
            <input
              id="signup-password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="wireframe-input"
              required
            />
          </div>

          <div className="form-horizontal-row">
            <label htmlFor="signup-confirm-password" className="wireframe-row-label">Confirm password*</label>
            <input
              id="signup-confirm-password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="wireframe-input"
              required
            />
          </div>

          {error && <div className="wireframe-error">{error}</div>}

          <button 
            type="submit" 
            className="btn-wireframe-submit"
            disabled={loading}
          >
            {loading ? 'Creating account...' : 'Create'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
