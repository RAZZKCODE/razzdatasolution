import React from 'react';

const icons = [
  "Python", "Node.js", "React", "n8n", "Selenium", "Playwright", "Django", "MongoDB", "PostgreSQL", "Google Apps Script"
];

const TechMarquee = () => {
  return (
    <div className="w-full bg-[#0A192F] py-8 border-y border-white/10 overflow-hidden flex relative">
      <div className="absolute left-0 w-20 h-full bg-gradient-to-r from-[#040B16] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 w-20 h-full bg-gradient-to-l from-[#040B16] to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Render twice for continuous loop */}
        {[...icons, ...icons].map((tech, index) => (
          <div key={index} className="mx-8 flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
             <div className="w-2 h-2 rounded-full bg-primary"></div>
             <span className="text-xl font-mono text-white font-bold tracking-wider">{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
