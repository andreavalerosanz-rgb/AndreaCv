import React from 'react';

const SocialIcon = ({ Icon, handle, href = "#" }) => (
  <div className="relative group z-10"> 
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label={handle} 
      className="block transform transition-all duration-300 hover:-translate-y-1"
    >
      <Icon 
        className="w-5 h-5 text-zinc-400 hover:text-orange-600 dark:text-zinc-500 dark:hover:text-orange-500 transition-colors duration-300" 
      />
    </a>
    
    {/* Tooltip */}
    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 
                     bg-zinc-900 dark:bg-zinc-100 
                     text-white dark:text-zinc-900 
                     text-[10px] font-mono font-bold uppercase tracking-wider
                     px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 
                     transition-all duration-300 pointer-events-none whitespace-nowrap 
                     shadow-lg -translate-y-1 group-hover:translate-y-0">
      {handle}
    </span>
  </div>
);

export default SocialIcon;