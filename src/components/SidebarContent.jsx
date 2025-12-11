import React from 'react';
import { Mail, Phone, Globe, Award, User, Languages } from 'lucide-react';

const SidebarContent = ({ cv }) => {
  return (
    <div className="space-y-8">
      {/* Contact Info */}
      <div>
        <h3 className="font-bold text-zinc-900 dark:text-white mb-4 flex items-center uppercase text-xs tracking-wider">
          <User className="w-4 h-4 mr-2 text-orange-600" />
          {cv.headers.contact}
        </h3>
        <div className="space-y-4 text-sm">
          <div className="flex items-start text-zinc-600 dark:text-zinc-400 group">
            <Phone className="w-4 h-4 mr-3 mt-0.5 text-zinc-400 group-hover:text-orange-500 transition-colors" />
            +34 622 497 744
          </div>
          <div className="flex items-start text-zinc-600 dark:text-zinc-400 group">
            <Mail className="w-4 h-4 mr-3 mt-0.5 text-zinc-400 group-hover:text-orange-500 transition-colors" />
            andrea.valero.sanz@gmail.com
          </div>
          <div className="flex items-start text-zinc-600 dark:text-zinc-400 group">
            <Globe className="w-4 h-4 mr-3 mt-0.5 text-zinc-400 group-hover:text-orange-500 transition-colors" />
            andreawaqt
          </div>
        </div>
      </div>

      {/* Languages */}
      <div>
        <h3 className="font-bold text-zinc-900 dark:text-white mb-4 flex items-center uppercase text-xs tracking-wider">
          <Languages className="w-4 h-4 mr-2 text-orange-600" />
          {cv.headers.languages}
        </h3>
        <div className="space-y-3">
          {cv.languages.map((lang, index) => (
            <div key={index} className="flex justify-between items-center text-sm">
              <span className="text-zinc-600 dark:text-zinc-300">{lang.language}</span>
              <span className="text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2 py-0.5 rounded-sm border border-zinc-200 dark:border-zinc-700">
                {lang.level}
              </span>
            </div>
          ))}
        </div>
      </div>
      
       {/* Quick Skills */}
       <div>
          <h3 className="font-bold text-zinc-900 dark:text-white mb-4 flex items-center uppercase text-xs tracking-wider">
            <Award className="w-4 h-4 mr-2 text-orange-600" />
            {cv.headers.skills}
          </h3>
          <div className="flex flex-wrap gap-2">
            {["React", "Node", "AWS", "Agile", "TypeScript"].map((s, i) => (
              <span key={i} className="text-xs font-medium border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2 py-1 rounded-sm hover:border-orange-300 transition-colors cursor-default">
                {s}
              </span>
            ))}
          </div>
        </div>
    </div>
  );
};

export default SidebarContent;