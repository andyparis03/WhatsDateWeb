'use client';
import { motion } from 'framer-motion';
import { FaRobot, FaLock, FaMagic, FaWhatsapp, FaRegSmile } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section - Beta Emphasis */}
      <section className="w-full flex flex-col items-center justify-center min-h-[70vh] py-16 px-4 text-center bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 relative overflow-hidden">
        <div className="flex flex-col items-center mb-4">
          <span className="inline-block bg-wa-green text-white font-bold px-4 py-1 rounded-full text-lg shadow-wa mb-2 animate-pulse">🚀 BETA LAUNCH</span>
          <span className="inline-block bg-wa-light text-wa-dark font-semibold px-3 py-1 rounded-full text-md shadow border border-wa-green mb-2">100 FREE CREDITS for Early Testers!</span>
        </div>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight text-white drop-shadow-wa-glow">
          Meet <span className="text-wa-green">WhatsDate</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="text-xl md:text-2xl text-neutral-300 max-w-2xl mb-8">
          <strong className="text-wa-green">🎉 LIMITED TIME BETA:</strong> Get <span className="font-bold text-wa-green">100 FREE AI responses</span> when you join our exclusive beta program. Never run out of things to say again!
        </motion.p>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-4">
          <Link href="/download">
            <motion.button whileHover={{ scale: 1.08, boxShadow: '0 0 16px #25D366' }} className="px-8 py-4 rounded-full bg-wa-green text-white text-xl font-bold shadow-wa transition-all hover:scale-105 hover:shadow-wa-glow">
              🎁 Claim 100 FREE Credits
            </motion.button>
          </Link>
          <span className="text-wa-green font-bold animate-pulse">⏰ Beta spots are limited!</span>
        </div>
        {/* Visual/Mockup or Video Placeholder */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-lg border-4 border-wa-green mb-8">
          <video autoPlay loop muted playsInline className="w-full h-64 object-cover bg-black">
            <source src="/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
        <div className="flex flex-row gap-8 justify-center mt-4">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-extrabold text-wa-green">100</span>
            <span className="text-white font-semibold">FREE Credits</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-extrabold text-wa-green">BETA</span>
            <span className="text-white font-semibold">Early Access</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-extrabold text-wa-green">$0</span>
            <span className="text-white font-semibold">No Cost</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-5xl py-16 px-4 grid md:grid-cols-3 gap-10 text-center">
        {[
          {
            icon: <FaRobot size={48} className="mx-auto text-wa-green animate-bounce" />,
            title: 'AI Auto-Reply',
            desc: 'Smart, context-aware replies to your WhatsApp messages.'
          },
          {
            icon: <FaLock size={48} className="mx-auto text-wa-green animate-pulse" />,
            title: 'Privacy Focused',
            desc: 'Your chats stay on your device. No OpenAI key needed.'
          },
          {
            icon: <FaMagic size={48} className="mx-auto text-wa-green animate-spin-slow" />,
            title: 'Custom Prompts',
            desc: "Tweak the AI's vibe and personality anytime."
          },
          {
            icon: <FaWhatsapp size={48} className="mx-auto text-wa-green animate-bounce" />,
            title: 'WhatsApp Native',
            desc: 'Works directly with WhatsApp Web. Easy QR login.'
          },
          {
            icon: <FaRegSmile size={48} className="mx-auto text-wa-green animate-pulse" />,
            title: 'Emoji Reactions',
            desc: 'React with emojis to trigger instant AI replies.'
          },
          {
            icon: <FaRobot size={48} className="mx-auto text-wa-green animate-bounce" />,
            title: 'Human Timing',
            desc: 'Replies are timed to feel natural, not bot-like.'
          },
        ].map((f, i) => (
          <motion.div key={f.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} className="bg-neutral-900/80 rounded-2xl p-6 shadow-lg border border-neutral-800 hover:scale-105 hover:shadow-wa-glow transition-all">
            {f.icon}
            <h3 className="mt-4 text-xl font-bold text-white">{f.title}</h3>
            <p className="text-neutral-300 mt-2">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* How it Works Section */}
      <section className="w-full max-w-4xl py-16 px-4 flex flex-col items-center">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-extrabold mb-6 text-wa-green drop-shadow-wa-glow">How It Works</motion.h2>
        <motion.ol initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }} className="space-y-6 text-left w-full max-w-2xl mx-auto">
          {[
            'Download WhatsDate Beta and install on your PC.',
            'Open the app and scan the QR code with WhatsApp.',
            'Enable auto-reply and customize your AI prompt.',
            'Chat as usual – WhatsDate handles the rest!',
          ].map((step, i) => (
            <motion.li key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: i * 0.15 }} className="flex items-start gap-4">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-wa-green text-white font-bold text-lg shadow-wa-glow">{i + 1}</span>
              <span className="text-lg md:text-xl text-white">{step}</span>
            </motion.li>
          ))}
        </motion.ol>
      </section>
    </div>
  );
}
