import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import Services from './components/Services';
import TradingSnippet from './components/TradingSnippet';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <section id="about" className="py-24 border-b border-border/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
            <div><span className="section-tag">About the company</span><h2 className="display-title">Technology built around <span className="text-gradient">real-world problems.</span></h2></div>
            <div><p className="text-xl text-foreground/80 leading-relaxed">RazzDataSolution combines software engineering, automation, and data technologies to create practical digital products.</p><p className="mt-6 text-muted leading-relaxed">From a first workflow map to a dependable production system, we focus on problem solving, scalability, performance, clean UX, reliable backend systems, and useful information from raw data.</p><div className="mt-8 flex flex-wrap gap-3">{['Problem solving', 'Automation', 'Scalability', 'Performance', 'Clean UX'].map((item) => <span key={item} className="data-pill">{item}</span>)}</div></div>
          </div>
        </section>
        <Services />
        <TradingSnippet />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
