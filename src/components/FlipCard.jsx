import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import CVSection from './CVSection';

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen p-4 perspective-1000 overflow-hidden">
      
      {/* Card Container */}
      <div className={`relative w-full max-w-6xl h-[90vh] md:h-[85vh] min-h-[600px] transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* FRONT SIDE */}
        <div className="absolute inset-0 backface-hidden z-10">
          <ProfileCard onFlip={() => setIsFlipped(true)} />
        </div>

        {/* BACK SIDE */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 z-0">
          <CVSection onFlip={() => setIsFlipped(false)} />
        </div>

      </div>
    </div>
  );
};

export default FlipCard;