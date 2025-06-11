'use client';
import { FaEnvelope, FaGithub } from 'react-icons/fa';
import { useTheme } from '../app/theme-provider';

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={`w-full py-12 px-4 border-t ${
      theme === 'light' 
        ? 'bg-white border-wa-green/20' 
        : 'bg-neutral-950 border-neutral-800'
    }`}>
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className={`bahnschrift-heading text-xl font-semibold mb-4 ${
              theme === 'light' ? 'text-black' : 'text-white'
            }`}>
              WhatsDate
            </h3>
            <p className={`text-sm ${
              theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
            }`}>
              The smartest AI dating assistant. Get perfect conversation starters and never run out of things to say.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className={`bahnschrift-heading font-semibold mb-4 text-wa-green`}>Product</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`text-sm hover:text-wa-green transition-colors ${
                    theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
                  }`}
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`text-sm hover:text-wa-green transition-colors ${
                    theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
                  }`}
                >
                  Download
                </button>
              </li>
              <li>
                <a 
                  href="mailto:whatsdate.info@gmail.com?subject=WhatsDate%20Beta%20Free%20Credit%20Request"
                  className={`text-sm hover:text-wa-green transition-colors ${
                    theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
                  }`}
                >
                  Free Credits
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className={`bahnschrift-heading font-semibold mb-4 text-wa-green`}>Support</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:whatsdate.info@gmail.com"
                  className={`text-sm hover:text-wa-green transition-colors ${
                    theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
                  }`}
                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/WhatsDate/WhatsDate/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm hover:text-wa-green transition-colors ${
                    theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
                  }`}
                >
                  Releases
                </a>
              </li>
              <li>
                <a 
                  href="mailto:whatsdate.info@gmail.com?subject=WhatsDate%20Feedback"
                  className={`text-sm hover:text-wa-green transition-colors ${
                    theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
                  }`}
                >
                  Feedback
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className={`bahnschrift-heading font-semibold mb-4 text-wa-green`}>Connect</h4>
            <div className="flex gap-3">
              <a 
                href="mailto:whatsdate.info@gmail.com"
                className={`p-2 rounded-full transition-all hover:scale-110 ${
                  theme === 'light' 
                    ? 'bg-wa-green-light hover:bg-wa-green text-black' 
                    : 'bg-neutral-800 hover:bg-neutral-700 text-white'
                }`}
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
              <a 
                href="https://github.com/WhatsDate/WhatsDate"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all hover:scale-110 ${
                  theme === 'light' 
                    ? 'bg-wa-green-light hover:bg-wa-green text-black' 
                    : 'bg-neutral-800 hover:bg-neutral-700 text-white'
                }`}
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
            </div>
            <p className={`text-sm mt-4 ${
              theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
            }`}>
              Follow us @whatsdate.dating
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 ${
          theme === 'light' ? 'border-wa-green/20' : 'border-neutral-800'
        }`}>
          <div className="flex gap-6 text-sm">
            <span className={theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'}>
              Privacy
            </span>
            <span className={theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'}>
              Terms
            </span>
            <span className={theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'}>
              Beta
            </span>
          </div>
          
          <p className={`text-sm ${
            theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
          }`}>
            WhatsDate Ltd 2025 · All rights reserved.
          </p>
        </div>

        {/* Beta Notice */}
        <div className={`mt-6 p-4 rounded-2xl text-center ${
          theme === 'light' ? 'bg-wa-green-light' : 'bg-neutral-900'
        }`}>
          <p className={`text-sm ${
            theme === 'light' ? 'text-neutral-700' : 'text-neutral-300'
          }`}>
            💖 WhatsDate Beta is free for a limited time. Your feedback helps us improve – thank you for being an early adopter!
          </p>
        </div>
      </div>
    </footer>
  );
} 