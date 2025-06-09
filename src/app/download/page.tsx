"use client";
import { motion } from "framer-motion";
import { FaWindows, FaApple, FaLinux, FaDownload, FaQuestionCircle, FaGithub } from "react-icons/fa";
import { MdEmail, MdFileDownload } from "react-icons/md";
import { FaGift, FaLock, FaRegCommentDots } from "react-icons/fa";

export default function DownloadPage() {
  return (
    <div className="w-full flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-wa-green text-center">
        Download WhatsDate Beta
      </h1>
      <p className="text-xl text-neutral-300 max-w-2xl text-center mb-8">
        Try WhatsDate for free! Available for Windows (macOS coming soon). Your feedback helps us build the future of AI-powered dating.
      </p>
      
      <div className="flex flex-col gap-6 w-full max-w-md mb-12">
        <a href="https://github.com/andyparis03/WhatsDate/releases/latest/download/WhatsDate.exe" className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-wa-green text-white text-xl font-bold shadow-wa transition-all hover:scale-105">
          <span className="text-2xl">🪟</span>
          Download for Windows
        </a>
        
        <div className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-neutral-800 text-neutral-400 text-xl font-bold cursor-not-allowed">
          <span className="text-2xl">🍎</span>
          Coming Soon (macOS)
        </div>
        
        <a href="https://github.com/andyparis03/WhatsDate" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 border-wa-green text-wa-green text-xl font-bold transition-all hover:scale-105">
          <span className="text-2xl">⭐</span>
          View on GitHub
        </a>
      </div>

      <div className="w-full max-w-3xl bg-neutral-900/80 rounded-2xl p-8 border border-neutral-800">
        <h2 className="text-2xl font-bold text-wa-green mb-6 text-center">Installation Instructions</h2>
        <div className="grid gap-6">
          <div className="flex items-start gap-4">
            <span className="text-xl font-extrabold text-wa-green">01</span>
            <div>
              <h3 className="font-bold text-white mb-2">Download & Install</h3>
              <p className="text-neutral-300">Click the Windows download button above to get the installer.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <span className="text-xl font-extrabold text-wa-green">02</span>
            <div>
              <h3 className="font-bold text-white mb-2">Launch WhatsDate</h3>
              <p className="text-neutral-300">Open the app after installation completes.</p>
            </div>
          </div>
          
          <a href="https://github.com/andyparis03/WhatsDate/releases/latest/download/WhatsDate.exe" className="flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-wa-green text-white font-bold shadow-wa transition-all hover:scale-105">
            <span className="text-xl">📥</span>
            Download WhatsDate Beta
          </a>
          
          <div className="flex items-start gap-4">
            <span className="text-xl font-extrabold text-wa-green">03</span>
            <div>
              <h3 className="font-bold text-white mb-2">Connect WhatsApp</h3>
              <p className="text-neutral-300">Scan the QR code with your WhatsApp mobile app.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <span className="text-xl font-extrabold text-wa-green">04</span>
            <div>
              <h3 className="font-bold text-white mb-2">Start Auto-Replying</h3>
              <p className="text-neutral-300">Enable auto-reply mode and customize your AI prompt. You're ready to go!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-neutral-400 mb-4">
          Need help? Contact us at{" "}
          <a href="mailto:support@whatsdate.ve" className="text-wa-green hover:underline">
            support@whatsdate.ve
          </a>
        </p>
      </div>
    </div>
  );
} 