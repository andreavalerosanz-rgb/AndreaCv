// src/App.js
import React, { useState, useEffect } from 'react';
import FlipCard from './components/FlipCard';
import ThemeToggle from './components/ThemeToggle';
import { LanguageProvider } from './LanguageContext';
import './index.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check system preference on load
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    setIsDarkMode(prev => {
      const newMode = !prev;
      newMode ? root.classList.add('dark') : root.classList.remove('dark');
      return newMode;
    });
  };

  return (
    <LanguageProvider>
      <div className="App min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500 overflow-hidden font-sans">
        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <FlipCard />
      </div>
    </LanguageProvider>
  );
}

export default App;