'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

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
  const router = useRouter();
  const pathname = usePathname();
  
  // Page sequence for swipe navigation (now using anchors)
  const pageSequence = ['#home', '#features', '#how-it-works', '#download'];
  
  // Touch event handlers for swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const [swipeOffset, setSwipeOffset] = useState(0);
  
  // Minimum swipe distance
  const minSwipeDistance = 50;
  
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setSwipeOffset(0);
  };
  
  const onTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;
    
    const currentTouch = e.targetTouches[0].clientX;
    const diff = currentTouch - touchStart;
    
    // Limit the swipe offset to prevent over-swiping
    const maxOffset = 100;
    const limitedOffset = Math.max(-maxOffset, Math.min(maxOffset, diff * 0.5));
    
    setSwipeOffset(limitedOffset);
    setTouchEnd(currentTouch);
  };
  
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setSwipeOffset(0);
      return;
    }
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    const currentIndex = pageSequence.indexOf(pathname);
    
    setIsNavigating(true);
    
    if (isLeftSwipe && currentIndex < pageSequence.length - 1) {
      // Swipe left - go to next page
      setSwipeOffset(-200); // Animate out to the left
      setTimeout(() => {
        router.push(pageSequence[currentIndex + 1]);
        setSwipeOffset(0);
        setIsNavigating(false);
      }, 200);
    } else if (isRightSwipe && currentIndex > 0) {
      // Swipe right - go to previous page
      setSwipeOffset(200); // Animate out to the right
      setTimeout(() => {
        router.push(pageSequence[currentIndex - 1]);
        setSwipeOffset(0);
        setIsNavigating(false);
      }, 200);
    } else {
      // Reset if swipe wasn't sufficient
      setSwipeOffset(0);
      setIsNavigating(false);
    }
  };

  return (
    <div 
      className={`min-h-screen ${
        theme === 'light' ? 'bg-white text-primary' : 'bg-gray-900 text-white'
      }`} 
      style={{
        touchAction: 'manipulation',
        WebkitUserSelect: 'none',
        userSelect: 'none',
        WebkitTouchCallout: 'none',
        WebkitTextSizeAdjust: '100%',
        overflow: 'hidden auto'
      }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <header className={`w-full border-b sticky top-0 z-50 backdrop-blur-md ${
        theme === 'light' ? 'border-border-neutral bg-white/80' : 'border-gray-700 bg-gray-900/80'
      }`}>
        {/* Mobile: Two-row layout */}
        <div className="md:hidden">
          {/* Top row: Logo and brand */}
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <Image src="/whatsdate logo no bkgd.png" alt="WhatsDate Logo" width={32} height={32} className="h-8 w-8 object-contain" />
              <span className="text-xl font-semibold text-primary">WhatsDate</span>
            </div>
            {/* Theme toggle button for mobile */}
            <button 
              onClick={toggleTheme}
              className={`px-3 py-2 rounded-lg transition-all ${
                theme === 'light' ? 'bg-light-gray hover:bg-medium-gray text-primary' : 'bg-gray-700 hover:bg-gray-600 text-white'
              }`}
            >
              {theme === 'light' ? '☾' : '☀'}
            </button>
          </div>
          {/* Bottom row: Navigation */}
          <div className={`flex items-center justify-center px-6 py-3 gap-8 border-t ${
            theme === 'light' ? 'border-border-neutral' : 'border-gray-700'
          }`}>
            <a 
              href="#home" 
              className="text-lg font-medium transition-colors text-secondary hover:text-primary"
            >
              Home
            </a>
            <a 
              href="#how-it-works" 
              className="text-lg font-medium transition-colors text-secondary hover:text-primary"
            >
              How it Works
            </a>
            <a 
              href="#download" 
              className="text-lg font-semibold transition-colors text-primary hover:text-accent"
            >
              Download
            </a>
          </div>
        </div>
        
        {/* Desktop: Single row layout */}
        <div className="hidden md:flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image src="/whatsdate logo no bkgd.png" alt="WhatsDate Logo" width={40} height={40} className="h-10 w-10 object-contain" />
            <span className="text-2xl font-semibold text-primary">WhatsDate</span>
          </div>
          <nav className="flex gap-8 text-lg font-medium">
            <a 
              href="#home" 
              className="transition-colors text-secondary hover:text-primary"
            >
              Home
            </a>
            <a 
              href="#how-it-works" 
              className="transition-colors text-secondary hover:text-primary"
            >
              How it Works
            </a>
            <a 
              href="#download" 
              className={`px-6 py-2 rounded-full font-semibold transition-all hover:scale-105 ${
                theme === 'light' 
                  ? 'bg-black text-white hover:bg-gray-800' 
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              Download Beta
            </a>
          </nav>
          {/* Theme toggle button */}
          <button 
            onClick={toggleTheme}
            className={`ml-6 px-3 py-2 rounded-lg transition-all ${
              theme === 'light' ? 'bg-light-gray hover:bg-medium-gray text-primary' : 'bg-gray-700 hover:bg-gray-600 text-white'
            }`}
          >
            {theme === 'light' ? '☾' : '☀'}
          </button>
        </div>
      </header>
      <main 
        className="flex flex-col items-center w-full flex-1"
        style={{
          transform: `translateX(${swipeOffset}px)`,
          transition: isNavigating ? 'transform 0.2s ease-out' : 'transform 0.1s ease-out',
          opacity: isNavigating ? 0.7 : 1
        }}
      >
        {children}
      </main>
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