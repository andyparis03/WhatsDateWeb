'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Theme Context
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

function LayoutContent({ children }: { children: ReactNode }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen ${
      theme === 'light' ? 'bg-wa-bg-light text-wa-dark' : 'bg-neutral-950 text-white'
    }`} style={{
      touchAction: 'manipulation',
      WebkitUserSelect: 'none',
      userSelect: 'none',
      WebkitTouchCallout: 'none',
      WebkitTextSizeAdjust: '100%',
      overflow: 'hidden auto'
    }}>
      <header className={`w-full border-b sticky top-0 z-50 backdrop-blur-md ${
        theme === 'light' ? 'border-wa-green bg-wa-green-light' : 'border-neutral-800 bg-neutral-950/80'
      }`}>
        {/* Mobile: Two-row layout */}
        <div className="md:hidden">
          {/* Top row: Logo and brand */}
          <div className="flex items-center justify-between px-6 py-3">
            <div className="flex items-center gap-3">
              <Image src="/whatsdate logo no bkgd.png" alt="WhatsDate Logo" width={40} height={40} className="h-10 w-10 object-contain" />
              <span className="text-2xl font-extrabold tracking-tight text-wa-green drop-shadow-wa-glow">WhatsDate</span>
            </div>
            {/* Theme toggle button for mobile */}
            <button 
              onClick={toggleTheme}
              className={`px-3 py-1 rounded-full text-wa-green font-bold shadow-wa transition-all ${
                theme === 'light' ? 'bg-wa-bg-accent hover:bg-wa-bg-light' : 'bg-neutral-800 hover:bg-neutral-700'
              }`}
            >
              {theme === 'light' ? '☾' : '☀'}
            </button>
          </div>
          {/* Bottom row: Navigation */}
          <div className={`flex items-center justify-center px-2 py-2 gap-2 border-t ${
            theme === 'light' ? 'border-wa-green/50' : 'border-neutral-800/50'
          }`}>
            <Link href="/" className="hover:text-wa-green transition-colors text-sm font-semibold underline underline-offset-2">Home</Link>
            <Link href="/features" className="hover:text-wa-green transition-colors text-sm font-semibold underline underline-offset-2">Features</Link>
            <Link href="/how-it-works" className="hover:text-wa-green transition-colors text-sm font-semibold underline underline-offset-2">How It Works</Link>
            <Link href="/download" className="hover:text-wa-green transition-colors font-bold text-sm underline underline-offset-2">Download</Link>
          </div>
        </div>
        
        {/* Desktop: Single row layout */}
        <div className="hidden md:flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image src="/whatsdate logo no bkgd.png" alt="WhatsDate Logo" width={40} height={40} className="h-10 w-10 object-contain" />
            <span className="text-2xl font-extrabold tracking-tight text-wa-green drop-shadow-wa-glow">WhatsDate</span>
          </div>
          <nav className="flex gap-6 text-lg font-semibold">
            <Link href="/" className="hover:text-wa-green transition-colors">Home</Link>
            <Link href="/features" className="hover:text-wa-green transition-colors">Features</Link>
            <Link href="/how-it-works" className="hover:text-wa-green transition-colors">How it Works</Link>
            <Link href="/download" className="hover:text-wa-green transition-colors font-bold underline underline-offset-4">Download Beta</Link>
          </nav>
          {/* Theme toggle button */}
          <button 
            onClick={toggleTheme}
            className={`ml-6 px-3 py-1 rounded-full text-wa-green font-bold shadow-wa transition-all ${
              theme === 'light' ? 'bg-wa-bg-accent hover:bg-wa-bg-light' : 'bg-neutral-800 hover:bg-neutral-700'
            }`}
          >
            {theme === 'light' ? '☾' : '☀'}
          </button>
        </div>
      </header>
      <main className="flex flex-col items-center w-full flex-1">{children}</main>
      <footer className={`w-full text-center py-6 text-sm border-t mt-12 ${
        theme === 'light' ? 'text-neutral-800 border-wa-green bg-wa-bg-accent/80' : 'text-neutral-400 border-neutral-800 bg-neutral-950/80'
      }`}>
        &copy; {new Date().getFullYear()} WhatsDate. All rights reserved.
      </footer>
    </div>
  );
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem('whatsdate-theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('whatsdate-theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LayoutContent>{children}</LayoutContent>
    </ThemeContext.Provider>
  );
} 