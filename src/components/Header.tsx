'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../app/theme-provider';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all ${
      theme === 'light' 
        ? 'bg-white/90 backdrop-blur-md border-b border-wa-green/20' 
        : 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 hover:scale-105 transition-transform"
        >
          <Image 
            src="/whatsdate logo no bkgd.png" 
            alt="WhatsDate Logo" 
            width={40} 
            height={40} 
            className="h-10 w-10 object-contain" 
          />
          <span className={`bahnschrift-heading text-2xl font-semibold ${
            theme === 'light' ? 'text-black' : 'text-white'
          }`}>
            WhatsDate
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className={`bahnschrift-heading font-semibold hover:text-wa-green transition-colors ${
              theme === 'light' ? 'text-black' : 'text-white'
            }`}
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection('features')}
            className={`bahnschrift-heading font-semibold hover:text-wa-green transition-colors ${
              theme === 'light' ? 'text-black' : 'text-white'
            }`}
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('download')}
            className={`bahnschrift-heading font-semibold hover:text-wa-green transition-colors ${
              theme === 'light' ? 'text-black' : 'text-white'
            }`}
          >
            Download
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className={`bahnschrift-heading font-semibold hover:text-wa-green transition-colors ${
              theme === 'light' ? 'text-black' : 'text-white'
            }`}
          >
            Reviews
          </button>
        </nav>

        {/* Right Side - Theme Toggle + Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all hover:scale-110 ${
              theme === 'light' 
                ? 'bg-wa-green-light hover:bg-wa-green text-black' 
                : 'bg-neutral-800 hover:bg-neutral-700 text-white'
            }`}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-full ${
              theme === 'light' ? 'text-black' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={`md:hidden mt-4 p-4 rounded-2xl mx-4 ${
          theme === 'light' ? 'bg-wa-green-light' : 'bg-neutral-900'
        }`}>
          <nav className="flex flex-col gap-4">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className={`bahnschrift-heading text-left font-semibold py-2 hover:text-wa-green transition-colors ${
                theme === 'light' ? 'text-black' : 'text-white'
              }`}
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className={`bahnschrift-heading text-left font-semibold py-2 hover:text-wa-green transition-colors ${
                theme === 'light' ? 'text-black' : 'text-white'
              }`}
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('download')}
              className={`bahnschrift-heading text-left font-semibold py-2 hover:text-wa-green transition-colors ${
                theme === 'light' ? 'text-black' : 'text-white'
              }`}
            >
              Download
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className={`bahnschrift-heading text-left font-semibold py-2 hover:text-wa-green transition-colors ${
                theme === 'light' ? 'text-black' : 'text-white'
              }`}
            >
              Reviews
            </button>
          </nav>
        </div>
      )}
    </header>
  );
} 