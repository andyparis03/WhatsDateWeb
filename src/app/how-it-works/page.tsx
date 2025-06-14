"use client";
import { motion } from "framer-motion";
import { MdEmail, MdFileDownload } from "react-icons/md";
import { FaGift, FaLock, FaRegCommentDots } from "react-icons/fa";
import { useTheme } from '../theme-provider';

const steps = [
  {
    number: "01",
    title: "Download & Install",
    desc: "Download WhatsDate for your platform and install it in seconds. No complex setup required.",
    icon: (theme: 'light' | 'dark') => <MdFileDownload size={40} className={`text-[#00e676] rounded-md p-1 shadow ${
      theme === 'light' ? 'bg-wa-green-light' : 'bg-black'
    }`} />
  },
  {
    number: "02",
    title: "Ask for your free credit via email",
    desc: "Claim your 1000 FREE credits for WhatsDate activation. Just click the button below to send us an email and we'll activate your beta credits!",
    icon: (theme: 'light' | 'dark') => <FaGift size={40} className={`text-[#ffb300] rounded-md p-1 shadow ${
      theme === 'light' ? 'bg-wa-green-light' : 'bg-black'
    }`} />,
    emailButton: true
  },
  {
    number: "03",
    title: "Connect WhatsApp",
    desc: "Scan the QR code to connect your WhatsApp account. Your data stays private and secure in your pc.",
    icon: (theme: 'light' | 'dark') => <FaLock size={40} className={`text-[#ffd600] rounded-md p-1 shadow ${
      theme === 'light' ? 'bg-wa-green-light' : 'bg-black'
    }`} />
  },
  {
    number: "04",
    title: "Start Chatting",
    desc: "Enable AI assistance and watch as perfect responses are generated automatically for your conversations.",
    icon: (theme: 'light' | 'dark') => <FaRegCommentDots size={40} className={`rounded-md p-1 shadow ${
      theme === 'light' ? 'text-black bg-wa-green-light' : 'text-white bg-black'
    }`} />
  },
];

export default function HowItWorksPage() {
  const { theme } = useTheme();
  
  return (
    <div className="w-full flex flex-col items-center py-16 px-4">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-extrabold mb-8 text-wa-green drop-shadow-wa-glow text-center">
        How It Works
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className={`text-lg md:text-xl max-w-2xl mb-12 text-center ${
        theme === 'light' ? 'text-neutral-800' : 'text-neutral-300'
      }`}>
        Get started in just 4 simple steps. WhatsDate Beta is designed for instant setup and maximum privacy.
      </motion.p>
      <div className="flex flex-col gap-12 w-full max-w-3xl">
        {steps.map((step, i) => (
          <motion.div key={step.number} initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.7 }} className={`flex flex-col md:flex-row items-center md:items-start gap-6 rounded-2xl p-8 shadow-lg border ${
            theme === 'light' 
              ? 'bg-wa-green-light border-wa-green' 
              : 'bg-neutral-900/80 border-neutral-800'
          }`}>
            <div className="flex flex-col items-center justify-center md:items-start md:w-32">
              <span className="text-4xl font-extrabold text-wa-green drop-shadow-wa-glow">{step.number}</span>
              <span className="mt-2">{step.icon(theme)}</span>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className={`text-2xl font-bold mb-2 ${theme === 'light' ? 'text-black' : 'text-white'}`}>{step.title}</h3>
              <p className={`text-lg mb-4 ${theme === 'light' ? 'text-neutral-800' : 'text-neutral-300'}`}>{step.desc}</p>
              {step.emailButton && (
                <a href="mailto:whatsdate.info@gmail.com?subject=WhatsDate%20Beta%20Free%20Credit%20Request&body=Hi%2C%20I%20would%20like%20to%20claim%20my%20100%20free%20credits%20for%20WhatsDate%20Beta!" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-wa-green text-lg font-bold shadow-wa transition-all hover:scale-105 hover:shadow-wa-glow ${
                  theme === 'light' ? 'text-black' : 'text-white'
                }`}>
                  <MdEmail size={24} /> Claim Free Credits
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 