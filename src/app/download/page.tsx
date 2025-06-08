"use client";
import { motion } from "framer-motion";
import { FaWindows, FaApple, FaLinux, FaDownload, FaQuestionCircle } from "react-icons/fa";

export default function DownloadPage() {
  return (
    <div className="w-full flex flex-col items-center py-16 px-4">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-extrabold mb-6 text-wa-green drop-shadow-wa-glow text-center">
        Download <span className="text-white">WhatsDate Beta</span>
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="text-lg md:text-xl text-neutral-300 max-w-2xl mb-8 text-center">
        Try WhatsDate for free! Available for Windows (macOS coming soon). Your feedback helps us build the future of AI-powered dating.
      </motion.p>
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        <motion.a whileHover={{ scale: 1.08, boxShadow: '0 0 16px #25D366' }} href="#" className="flex items-center gap-3 px-8 py-4 rounded-full bg-wa-green text-white text-xl font-bold shadow-wa transition-all hover:scale-105 hover:shadow-wa-glow">
          <FaWindows size={28} /> Download for Windows
        </motion.a>
        <motion.a whileHover={{ scale: 1.08, boxShadow: '0 0 16px #25D366' }} href="#" className="flex items-center gap-3 px-8 py-4 rounded-full bg-neutral-800 text-white text-xl font-bold shadow-wa transition-all opacity-60 cursor-not-allowed">
          <FaApple size={28} /> Coming Soon (macOS)
        </motion.a>
        <motion.a whileHover={{ scale: 1.08, boxShadow: '0 0 16px #25D366' }} href="#" className="flex items-center gap-3 px-8 py-4 rounded-full bg-neutral-800 text-white text-xl font-bold shadow-wa transition-all opacity-60 cursor-not-allowed">
          <FaLinux size={28} /> Coming Soon (Linux)
        </motion.a>
      </div>
      <div className="w-full max-w-2xl bg-neutral-900/80 rounded-2xl p-6 shadow-lg border border-neutral-800 mb-10">
        <h2 className="text-2xl font-bold text-wa-green mb-4 flex items-center gap-2"><FaDownload /> Installation Instructions</h2>
        <ol className="list-decimal list-inside text-neutral-200 space-y-2 text-lg">
          <li>Click the <span className="text-wa-green font-bold">Download for Windows</span> button above.</li>
          <li>Run the downloaded <span className="font-mono">.exe</span> file.</li>
          <li>Follow the on-screen prompts to complete installation.</li>
          <li>Open WhatsDate and scan the QR code with your WhatsApp app.</li>
        </ol>
      </div>
      <div className="w-full max-w-2xl bg-neutral-900/80 rounded-2xl p-6 shadow-lg border border-neutral-800 mb-10">
        <h2 className="text-2xl font-bold text-wa-green mb-4">System Requirements</h2>
        <ul className="list-disc list-inside text-neutral-200 space-y-1 text-lg">
          <li>Windows 10 or later (64-bit)</li>
          <li>Active WhatsApp account</li>
          <li>Internet connection</li>
          <li>~200MB free disk space</li>
        </ul>
      </div>
      <div className="w-full max-w-2xl bg-neutral-900/80 rounded-2xl p-6 shadow-lg border border-neutral-800 mb-10">
        <h2 className="text-2xl font-bold text-wa-green mb-4 flex items-center gap-2"><FaQuestionCircle /> FAQ & Help</h2>
        <ul className="text-neutral-200 space-y-4 text-lg">
          <li><span className="font-bold text-wa-green">Q:</span> Is WhatsDate safe to use?<br /><span className="ml-6">A: Yes! All your chats stay on your device. No OpenAI API key needed.</span></li>
          <li><span className="font-bold text-wa-green">Q:</span> How do I get my WhatsApp ID?<br /><span className="ml-6">A: The app will show your ID after you scan the QR code and log in.</span></li>
          <li><span className="font-bold text-wa-green">Q:</span> Can I turn off auto-reply?<br /><span className="ml-6">A: Yes! You can enable/disable auto-reply for each contact or globally in the app settings.</span></li>
          <li><span className="font-bold text-wa-green">Q:</span> Where do I send feedback?<br /><span className="ml-6">A: Please use the feedback form in the app or email us (details in the app footer).</span></li>
        </ul>
      </div>
      <div className="w-full max-w-2xl text-center text-neutral-400 text-md mt-4">
        <span>WhatsDate Beta is free for a limited time. Your feedback helps us improve – thank you for being an early adopter! 💖</span>
      </div>
    </div>
  );
} 