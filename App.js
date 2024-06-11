// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Signup from './signup';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
      <button onClick={toggleTheme} aria-label="Toggle Dark Mode">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
      <Signup />
    </div>
  );
}

export default App;
