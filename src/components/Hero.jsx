import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data';

const texts = ['Automating workflows...', 'Scraping data...', 'Building SaaS...'];

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[textIndex];
    let typeSpeed = isDeleting ? 40 : 100;
    let timer;

    if (!isDeleting && currentText === fullText) {
      // Pause at the end before deleting
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && currentText === '') {
      // Switch to next text and stop deleting
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    } else {
      // Typing or Deleting
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + (isDeleting ? -1 : 1)));
      }, typeSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex]);

  return (
    <section className="relative min-h-screen flex text-left items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Headline */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-sm mb-6">
            Hi, I'm {PORTFOLIO_DATA.identity.name}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-sans tracking-tight mb-6 leading-tight">
            {PORTFOLIO_DATA.identity.motto.split(' Automated')[0]} <br/>
            <span className="text-gradient">Automated Simplicity.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-8">
            {PORTFOLIO_DATA.identity.bio}
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="px-8 py-3 bg-primary text-[#040B16] font-bold rounded-md hover:bg-[#00E5FF]/80 transition-all shadow-[0_0_20px_rgba(0,229,255,0.4)]">
              {PORTFOLIO_DATA.cta.primary}
            </a>
            <a href="#projects" className="px-8 py-3 border border-white/10 hover:border-white/50 text-white font-medium rounded-md transition-all">
              {PORTFOLIO_DATA.cta.secondary}
            </a>
          </div>
        </motion.div>

        {/* Right Side: Terminal */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="w-full"
        >
          <div className="glass-card rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-[#0A192F] px-4 py-3 flex items-center gap-2 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-4 font-mono text-xs text-gray-400">raaz@dashboard ~ </div>
            </div>
            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm md:text-base h-64 flex flex-col justify-start">
              <div className="mb-4">
                <span className="text-primary">❯</span> <span className="text-white">npm start</span>
              </div>
              <div className="mb-2 text-green-400">
                [+] System Initialized
              </div>
              <div className="mb-2 text-accent">
                [+] Establishing remote connections... OK
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-primary mr-2">❯</span> 
                <span className="text-white">{currentText}</span>
                <span className="w-2 h-5 bg-primary ml-1 animate-pulse inline-block"></span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
