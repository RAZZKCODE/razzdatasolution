import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#technology', label: 'Technology' },
  { href: '#projects', label: 'Projects' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border shadow-[0_4px_30px_rgba(0,0,0,0.4)]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="brand-mark">R</span>
            <span className="font-sans text-lg font-bold tracking-tight text-white">
              Razz<span className="text-primary">Data</span>Solution
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted hover:text-foreground transition-colors text-sm uppercase tracking-widest font-mono relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg bg-primary text-background font-bold hover:bg-primary/90 transition-all font-mono text-sm shadow-[0_0_15px_rgba(0,229,255,0.25)] hover:shadow-[0_0_25px_rgba(0,229,255,0.4)]"
            >
              Start a Project <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-4 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-muted hover:text-primary transition-colors font-mono text-sm uppercase tracking-widest border-b border-border/50 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block text-center px-5 py-3 rounded-lg bg-primary text-background font-bold font-mono text-sm"
          >
            Start a Project
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
