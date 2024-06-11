// src/Signup.js
import React, { useState } from 'react';
import './signup.css'

function Signup() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Form submitted!');
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} id="signup-form">
      <input type="email" id="email" name="email" placeholder="Email" required />
      <input type="password" id="password" name="password" placeholder="Password" required />
      <button type="submit" id="signup-button" className={`button ${loading ? 'loading' : ''}`}>
        Sign Up
        {loading && <span className="loading-spinner"></span>}
      </button>
    </form>
  );
}

export default Signup;
