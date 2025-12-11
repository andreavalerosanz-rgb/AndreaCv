import React, { useState } from 'react';
import { 
  GraduationCap, Code, Briefcase, User, ChevronLeft 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; 
import { useLanguage } from '../LanguageContext';
import SidebarContent from './SidebarContent';

const CVSection = ({ onFlip }) => {
  const [activeTab, setActiveTab] = useState('experience');
  const { content, language, toggleLanguage } = useLanguage();
  const cv = content.cv;

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    },
    exit: { opacity: 0 }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  const TabButton = ({ tab, icon, label }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`relative flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap
        ${activeTab === tab
          ? 'text-orange-600 dark:text-orange-500'
          : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
      }`}
    >
      {icon}
      <span>{label}</span>
      {activeTab === tab && (
        <motion.div 
          layoutId="activeTab"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600 dark:bg-orange-500"
        />
      )}
    </button>
  );

  return (
    <div className="flex flex-col h-full w-full bg-white dark:bg-zinc-950 rounded-sm shadow-sm overflow-hidden border border-zinc-200 dark:border-zinc-800">
      
      {/* Header */}
      <div className="bg-zinc-900 text-white p-4 shrink-0 flex justify-between items-center z-20 border-b border-zinc-800">
        {/* Left Side: Back Btn & Name */}
        <div className="flex items-center gap-3">
            <button onClick={onFlip} className="lg:hidden p-2 hover:bg-white/10 rounded-sm transition-colors">
                <ChevronLeft className="w-5 h-5" />
            </button>
            <div>
                <h1 className="text-lg font-bold tracking-wide">Andrea Valero</h1>
                <p className="text-orange-500 text-xs font-mono uppercase">Fullstack_Dev</p>
            </div>
        </div>

        {/* Right Side: Language Switcher & Flip Button */}
        <div className="flex items-center gap-4">
          
          {/* Language Switcher (Integrated into Header) */}
          <div className="flex bg-zinc-800 rounded-sm overflow-hidden border border-zinc-700">
            {['en', 'es', 'ca'].map((lang) => (
              <button
                key={lang}
                onClick={(e) => { e.stopPropagation(); toggleLanguage(lang); }}
                className={`px-2 py-1 text-[10px] font-mono font-bold uppercase transition-colors ${
                  language === lang 
                  ? 'bg-orange-600 text-white' 
                  : 'text-zinc-400 hover:bg-zinc-700 hover:text-white'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <button 
            onClick={onFlip}
            className="hidden lg:block bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-sm p-2 transition-all hover:text-orange-500"
          >
            <User className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        
        {/* Desktop Sidebar */}
        <div className="hidden md:block w-72 bg-zinc-50 dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 p-6 overflow-y-auto custom-scrollbar">
            <SidebarContent cv={cv} />
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col h-full min-w-0 bg-white dark:bg-zinc-950">
          
          {/* Tab Navigation */}
          <div className="flex border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shrink-0 overflow-x-auto hide-scrollbar px-2 md:px-6">
            <div className="md:hidden">
                <TabButton tab="contact" icon={<User className="w-4 h-4"/>} label={cv.tabs.contact} />
            </div>
            <TabButton tab="experience" icon={<Briefcase className="w-4 h-4"/>} label={cv.tabs.experience} />
            <TabButton tab="education" icon={<GraduationCap className="w-4 h-4"/>} label={cv.tabs.education} />
            <TabButton tab="skills" icon={<Code className="w-4 h-4"/>} label={cv.tabs.skills} />
          </div>

          {/* Tab Content with Animation */}
          <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar relative">
            
            <AnimatePresence mode="wait">
              
              {/* Mobile Bio */}
              {activeTab === 'contact' && (
                  <motion.div 
                    key="contact"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="md:hidden"
                  >
                      <SidebarContent cv={cv} />
                  </motion.div>
              )}

              {/* Experience */}
              {activeTab === 'experience' && (
                <motion.div 
                  key="experience"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-10 max-w-3xl"
                >
                  {cv.experience.map((exp, index) => (
                    <motion.div key={index} variants={itemVariants} className="relative pl-8 border-l border-zinc-200 dark:border-zinc-800">
                      <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-orange-600 ring-4 ring-white dark:ring-zinc-950"></div>
                      <div>
                          <span className="text-xs font-mono text-zinc-500 mb-1 block">{exp.period}</span>
                          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">{exp.position}</h3>
                          <div className="flex flex-wrap items-center text-sm text-orange-600 dark:text-orange-500 font-medium mb-3">
                             {exp.company} <span className="mx-2 text-zinc-300">•</span> {exp.location}
                          </div>
                          <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed mb-4">{exp.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <span key={i} className="text-xs font-mono bg-orange-50 dark:bg-zinc-900 border border-orange-100 dark:border-zinc-700 text-orange-800 dark:text-orange-400 px-2 py-1 rounded-sm">
                                {tech}
                              </span>
                            ))}
                          </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Education */}
              {activeTab === 'education' && (
                 <motion.div 
                   key="education"
                   variants={containerVariants}
                   initial="hidden"
                   animate="visible"
                   exit="exit"
                   className="grid gap-6 max-w-3xl"
                 >
                   {cv.education.map((edu, index) => (
                     <motion.div variants={itemVariants} key={index} className="flex flex-col sm:flex-row gap-4 p-5 rounded-sm border border-zinc-200 dark:border-zinc-800 hover:border-orange-200 dark:hover:border-orange-900 transition-colors bg-zinc-50 dark:bg-zinc-900/50">
                       <div className="p-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-sm h-fit w-fit">
                          <GraduationCap className="w-6 h-6 text-orange-600" />
                       </div>
                       <div>
                         <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{edu.title}</h3>
                         <p className="text-zinc-600 dark:text-zinc-400 text-sm font-medium">{edu.institution}</p>
                         <span className="inline-block mt-2 text-xs font-mono bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-2 py-1 rounded-sm">
                           {edu.year}
                         </span>
                       </div>
                     </motion.div>
                   ))}
                 </motion.div>
              )}

              {/* Skills */}
              {activeTab === 'skills' && (
                <motion.div 
                  key="skills"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl"
                >
                  {cv.technologies.map((tech, index) => (
                    <motion.div variants={itemVariants} key={index} className="bg-zinc-50 dark:bg-zinc-900/50 p-5 rounded-sm border border-zinc-200 dark:border-zinc-800">
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-bold text-zinc-900 dark:text-white">{tech.name}</span>
                        <span className="text-xs font-mono text-orange-600">{tech.level}%</span>
                      </div>
                      <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-1.5">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${tech.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="bg-orange-600 h-1.5 rounded-full" 
                        />
                      </div>
                      <p className="text-xs text-zinc-400 mt-3 text-right uppercase tracking-wider">{tech.category}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVSection;