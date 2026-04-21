import React from 'react';
import { Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data';

const Footer = () => {
  return (
    <footer className="bg-[#040B16] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-2">
            <Terminal className="text-primary w-6 h-6" />
            <span className="font-mono text-lg font-bold tracking-tighter text-white">
              Razz<span className="text-primary">Data</span>Solution
            </span>
          </div>
          <p className="text-gray-400 text-sm font-mono">
            {PORTFOLIO_DATA.identity.motto}
          </p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-primary transition-colors font-mono text-sm">GitHub</a>
          <a href="#" className="text-gray-400 hover:text-primary transition-colors font-mono text-sm">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-primary transition-colors font-mono text-sm">Twitter</a>
        </div>
      </div>
      <div className="mt-12 text-center text-gray-600 text-xs font-mono">
        &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.identity.company}. All rights reserved. Built by {PORTFOLIO_DATA.identity.name}.
      </div>
    </footer>
  );
};

export default Footer;
