import React from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <div className="fixed z-50 
      /* Mobile: Bottom Left */
      bottom-12 right-7
      /* Desktop: Top Right (and reset bottom/left) */
      lg:bottom-auto lg:left-auto lg:top-8 lg:right-8"
    >
      <button 
        onClick={toggleTheme}
        className="flex items-center justify-center w-10 h-10 rounded-sm border border-zinc-200 dark:border-zinc-700 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm shadow-sm transition-all hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? 
          <Moon className="w-5 h-5 text-orange-500" /> : 
          <Sun className="w-5 h-5 text-orange-600" />
        }
      </button>
    </div>
  );
};

export default ThemeToggle;