"use client";
import { motion } from "framer-motion";
import { FaWindows, FaApple, FaLinux, FaDownload, FaQuestionCircle, FaGithub } from "react-icons/fa";
import { MdEmail, MdFileDownload } from "react-icons/md";
import { FaGift, FaLock, FaRegCommentDots } from "react-icons/fa";
import { useTheme } from '../theme-provider';

export default function DownloadPage() {
  const { theme } = useTheme();
  
  return (
    <div className="w-full flex flex-col items-center py-20 px-6">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-title text-primary text-center mb-6">
        Download WhatsDate Beta
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="text-paragraph text-secondary max-w-3xl mb-12 text-center">
        Get early access to WhatsDate and start having better conversations today. Currently available for Windows, with macOS and Linux support coming soon.
      </motion.p>
      {/* Download Buttons */}
      <div className="flex flex-col md:flex-row gap-6 mb-16 max-w-4xl w-full">
        <motion.a 
          whileHover={{ scale: 1.05 }} 
          href="https://github.com/WhatsDate/WhatsDate/releases/tag/v.0.0.1" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`flex items-center justify-center gap-4 px-8 py-4 rounded-full text-xl font-semibold transition-all ${
            theme === 'light' ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-100'
          }`}
        >
          <FaWindows size={24} /> Download for Windows
        </motion.a>
        
        <motion.button 
          className={`flex items-center justify-center gap-4 px-8 py-4 rounded-full text-xl font-semibold opacity-50 cursor-not-allowed ${
            theme === 'light' ? 'bg-light-gray text-secondary' : 'bg-gray-700 text-gray-400'
          }`}
          disabled
        >
          <FaApple size={24} /> Coming Soon (macOS)
        </motion.button>
        
        <motion.button 
          className={`flex items-center justify-center gap-4 px-8 py-4 rounded-full text-xl font-semibold opacity-50 cursor-not-allowed ${
            theme === 'light' ? 'bg-light-gray text-secondary' : 'bg-gray-700 text-gray-400'
          }`}
          disabled
        >
          <FaLinux size={24} /> Coming Soon (Linux)
        </motion.button>
      </div>

      {/* GitHub Link */}
      <div className="mb-16">
        <motion.a 
          whileHover={{ scale: 1.05 }} 
          href="https://github.com/WhatsDate/WhatsDate/releases/tag/v0.0.1-beta" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`inline-flex items-center gap-3 px-6 py-3 rounded-full text-lg font-medium border transition-all ${
            theme === 'light' ? 'border-border-neutral text-secondary hover:text-primary' : 'border-gray-600 text-gray-300 hover:text-white'
          }`}
        >
          <FaGithub size={20} /> View on GitHub
        </motion.a>
      </div>
      <div className={`w-full max-w-2xl rounded-2xl p-6 shadow-lg border mb-10 ${
        theme === 'light' ? 'bg-wa-green-light border-wa-green' : 'bg-neutral-900/80 border-neutral-800'
      }`}>
        <h2 className="text-2xl font-bold text-wa-green mb-4 flex items-center gap-2"><FaDownload /> Installation Instructions</h2>
        <div className="flex flex-col gap-4">
          {/* Step 01 */}
          <div className="flex items-center gap-4 text-sm">
            <span className="text-xl font-extrabold text-wa-green drop-shadow-wa-glow">01</span>
            <MdFileDownload size={28} className={`text-[#00e676] rounded-md p-1 shadow ${
              theme === 'light' ? 'bg-wa-green-light' : 'bg-black'
            }`} />
            <div>
              <span className={`font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}>Download & Install</span>
              <div className={theme === 'light' ? 'text-neutral-800' : 'text-neutral-300'}>Download WhatsDate for your platform and install it in seconds. No complex setup required.</div>
            </div>
          </div>
          {/* Step 02 */}
          <div className="flex items-center gap-4 text-sm">
            <span className="text-xl font-extrabold text-wa-green drop-shadow-wa-glow">02</span>
            <FaGift size={28} className={`text-[#ffb300] rounded-md p-1 shadow ${
              theme === 'light' ? 'bg-wa-green-light' : 'bg-black'
            }`} />
            <div>
              <span className={`font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}>Ask for your free credit via email</span>
              <div className={theme === 'light' ? 'text-neutral-800' : 'text-neutral-300'}>Claim your 1000 FREE credits for WhatsDate activation. </div>
              <a href="mailto:whatsdate.info@gmail.com?subject=WhatsDate%20Beta%20Free%20Credit%20Request&body=Hi%2C%20I%20would%20like%20to%20claim%20my%201000%20free%20credits%20for%20WhatsDate%20Beta!" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1 px-3 py-1 mt-1 rounded-full bg-wa-green text-xs font-bold shadow-wa transition-all hover:scale-105 hover:shadow-wa-glow ${
                theme === 'light' ? 'text-black' : 'text-white'
              }`}>
                <MdEmail size={16} /> Claim Free Credits
              </a>
            </div>
          </div>
          {/* Step 03 */}
          <div className="flex items-center gap-4 text-sm">
            <span className="text-xl font-extrabold text-wa-green drop-shadow-wa-glow">03</span>
            <FaLock size={28} className={`text-[#ffd600] rounded-md p-1 shadow ${
              theme === 'light' ? 'bg-wa-green-light' : 'bg-black'
            }`} />
            <div>
              <span className={`font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}>Connect WhatsApp</span>
              <div className={theme === 'light' ? 'text-neutral-800' : 'text-neutral-300'}>Scan the QR code to connect your WhatsApp account. Your data stays private and secure in your pc.</div>
            </div>
          </div>
          {/* Step 04 */}
          <div className="flex items-center gap-4 text-sm">
            <span className="text-xl font-extrabold text-wa-green drop-shadow-wa-glow">04</span>
            <FaRegCommentDots size={28} className={`rounded-md p-1 shadow ${
              theme === 'light' ? 'text-black bg-wa-green-light' : 'text-white bg-black'
            }`} />
            <div>
              <span className={`font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}>Start Chatting</span>
              <div className={theme === 'light' ? 'text-neutral-800' : 'text-neutral-300'}>Enable AI assistance and watch as perfect responses are generated automatically for your conversations.</div>
            </div>
          </div>
        </div>
      </div>
      <div className={`w-full max-w-2xl rounded-2xl p-6 shadow-lg border mb-10 ${
        theme === 'light' ? 'bg-wa-green-light border-wa-green' : 'bg-neutral-900/80 border-neutral-800'
      }`}>
        <h2 className="text-2xl font-bold text-wa-green mb-4">System Requirements</h2>
        <ul className={`list-disc list-inside space-y-1 text-lg ${
          theme === 'light' ? 'text-neutral-800' : 'text-neutral-200'
        }`}>
          <li>Windows 10 or later (64-bit)</li>
          <li>Active WhatsApp account</li>
          <li>Internet connection</li>
          <li>~200MB free disk space</li>
        </ul>
      </div>
      <div className={`w-full max-w-2xl rounded-2xl p-6 shadow-lg border mb-10 ${
        theme === 'light' ? 'bg-wa-green-light border-wa-green' : 'bg-neutral-900/80 border-neutral-800'
      }`}>
        <h2 className="text-2xl font-bold text-wa-green mb-4 flex items-center gap-2"><FaQuestionCircle /> FAQ & Help</h2>
        <ul className={`space-y-4 text-lg ${
          theme === 'light' ? 'text-neutral-800' : 'text-neutral-200'
        }`}>
          <li><span className="font-bold text-wa-green">Q:</span> Is WhatsDate safe to use?<br /><span className="ml-6">A: Yes! All your chats stay on your device. No OpenAI API key needed.</span></li>
          <li><span className="font-bold text-wa-green">Q:</span> How do I get my WhatsApp ID?<br /><span className="ml-6">A: The app will show your ID after you scan the QR code and log in.</span></li>
          <li><span className="font-bold text-wa-green">Q:</span> Can I turn off auto-reply?<br /><span className="ml-6">A: Yes! You can enable/disable auto-reply for each contact or globally in the app settings.</span></li>
          <li><span className="font-bold text-wa-green">Q:</span> Where do I send feedback?<br /><span className="ml-6">You can send an email to: <a href="mailto:whatsdate.info@gmail.com?subject=WhatsDate%20Feedback&body=Hi!%2C%20I%20would%20like%20to%20give%20you%20my%20feedback%20about%20your%20WhatsDate%20app.">
          whatsdate.info@gmail.com</a> </span></li>
        </ul>
      </div>
      <div className={`w-full max-w-2xl text-center text-md mt-4 ${
        theme === 'light' ? 'text-neutral-800' : 'text-neutral-400'
      }`}>
        <span>WhatsDate Beta is free for a limited time. Your feedback helps us improve – thank you for being an early adopter! 💖</span>
      </div>
      {/* Contact Email */}
      <div className="w-full flex justify-center mt-6">
        <a href="mailto:whatsdate.info@gmail.com" className="flex items-center gap-2 text-wa-green font-semibold text-lg hover:underline">
          <MdEmail size={22} /> whatsdate.info@gmail.com
        </a>
      </div>
    </div>
  );
} 