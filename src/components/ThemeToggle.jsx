import React from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <div className="fixed top-4 right-16 lg:top-8 lg:right-8 z-50">
      <button 
        onClick={toggleTheme}
        className="flex items-center justify-center w-10 h-10 rounded-sm border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm shadow-sm transition-all hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
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