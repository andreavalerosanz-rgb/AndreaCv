import React from 'react';
import { MapPin, Briefcase, Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { LiquidButton } from '@/components/animate-ui/primitives/buttons/liquid'; 
import SocialIcon from './SocialIcon';

const ProfileCard = ({ onFlip }) => {
  const { content, toggleLanguage, language } = useLanguage();
  const t = content.profile;

  return (
    <div className="flex flex-col lg:flex-row w-full h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-sm shadow-sm overflow-hidden relative">

      {/* Language Switcher - Absolute Positioned */}
      <div className="absolute top-4 right-4 z-20 flex bg-white/90 dark:bg-zinc-900/90 backdrop-blur border border-zinc-200 dark:border-zinc-700 rounded-sm overflow-hidden shadow-sm">
        {['en', 'es', 'ca'].map((lang) => (
          <button
            key={lang}
            onClick={(e) => { e.stopPropagation(); toggleLanguage(lang); }}
            className={`text-xs font-mono font-bold px-3 py-1.5 transition-colors uppercase ${
              language === lang 
              ? 'bg-zinc-800 text-white dark:bg-white dark:text-zinc-900' 
              : 'text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }`}
          >
            {lang}
          </button>
        ))}
      </div>

{/* Left Column */}
      <div className="w-full lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center relative z-10">
        
        {/* Mobile Avatar */}
        <div className="lg:hidden w-28 h-28 mx-auto mb-6 rounded-sm bg-cover bg-center border border-zinc-200 dark:border-zinc-700 shadow-inner"
             style={{ backgroundImage: "url('/mia.png')" }}></div>

        <h1 className="text-3xl lg:text-5xl font-bold text-zinc-900 dark:text-white text-center lg:text-left tracking-tight mb-2">
          Andrea Valero
        </h1>
        
        {/* Orange Accent Line */}
        <div className="w-12 h-1 bg-orange-600 dark:bg-orange-500 mx-auto lg:mx-0 mb-8"></div>

        <div className="space-y-3 mb-8 text-center lg:text-left">
          <p className="text-lg font-medium text-zinc-600 dark:text-zinc-300 flex items-center justify-center lg:justify-start gap-2">
            <Briefcase className="w-4 h-4 text-orange-600 dark:text-orange-500" /> 
            {t.role}
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 flex items-center justify-center lg:justify-start gap-2">
            <MapPin className="w-4 h-4 text-orange-600 dark:text-orange-500" /> 
            {t.location}
          </p>
        </div>

        <p className="text-zinc-600 dark:text-zinc-400 text-center lg:text-left leading-relaxed mb-10 max-w-md mx-auto lg:mx-0 font-light">
          {t.bio}
        </p>

        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
          <LiquidButton
            onClick={onFlip}
            className="rounded-sm text-sm font-semibold px-6 py-3
             [--liquid-button-color:#18181b] dark:[--liquid-button-color:#e4e4e7]
             [--liquid-button-background-color:#ea580c] dark:[--liquid-button-background-color:#c2410c]
             text-white hover:text-white dark:hover:text-black"
          >
            {t.btn_cv}
          </LiquidButton>
          
          <button className="px-6 py-3 rounded-sm font-semibold text-sm border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-orange-500 dark:hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-500 transition-all">
            {t.btn_contact}
          </button>
        </div>

        {/* Social Icons - Removed 'mt-auto' so it stays grouped in the center */}
        <div className="flex justify-center lg:justify-around gap-8 w-full">
           <SocialIcon Icon={Github} handle="GitHub" href="https://github.com/andreavalerosanz-rgb"/>
           <SocialIcon Icon={Linkedin} handle="LinkedIn" />
           <SocialIcon Icon={Twitter} handle="Twitter" />
           <SocialIcon Icon={Instagram} handle="Instagram" />
        </div>
      </div>

      {/* Right Column: Image */}

      
      <div className="hidden lg:block w-2/5 relative h-full bg-zinc-100 dark:bg-zinc-800 border-l border-zinc-200 dark:border-zinc-700">
       
        <div className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700 ease-in-out" 
             style={{ backgroundImage: "url('/mia.png')" }}>
          <div className="absolute inset-0 bg-orange-900/20 mix-blend-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;