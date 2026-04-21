import React from 'react';
import { Terminal } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-[#040B16]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Terminal className="text-primary w-8 h-8" />
            <span className="font-mono text-xl font-bold tracking-tighter text-white">
              Razz<span className="text-primary">Data</span>Solution
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className="hover:text-primary transition-colors text-sm uppercase tracking-widest font-mono">Services</a>
              <a href="#projects" className="hover:text-primary transition-colors text-sm uppercase tracking-widest font-mono">Projects</a>
              <a href="#contact" className="px-5 py-2 rounded-md bg-primary/10 text-primary border border-primary/50 hover:bg-primary/20 transition-all font-mono text-sm uppercase tracking-widest">Let's Talk</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
