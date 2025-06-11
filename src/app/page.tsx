'use client';
import { FaRobot, FaLock, FaMagic, FaWhatsapp, FaRegSmile } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from './theme-provider';

export default function Home() {
  const { theme } = useTheme();
  
  return (
    <div className="w-full flex flex-col items-center" style={{touchAction: 'auto'}}>
      {/* Hero Section - Beta Emphasis */}
      <section className={`w-full flex flex-col items-center justify-center min-h-[70vh] py-16 px-4 text-center relative overflow-hidden ${
        theme === 'light' 
          ? 'bg-gradient-to-b from-wa-bg-light via-wa-green-light to-wa-bg-light' 
          : 'bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950'
      }`}>
        <div className="flex flex-col items-center mb-4">
          <span className={`inline-block bg-wa-green font-bold px-4 py-1 rounded-full text-lg shadow-wa mb-2 animate-pulse ${
            theme === 'light' ? 'text-black' : 'text-white'
          }`}>🚀 BETA LAUNCH</span>
          <span className="inline-block bg-wa-light text-wa-dark font-semibold px-3 py-1 rounded-full text-md shadow border border-wa-green mb-2">!! 1000 Autoreply Messages FREE for Early Testers !!</span>
        </div>
        {/* Desktop heading: single row */}
        <h1 className={`hidden md:flex text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight drop-shadow-wa-glow items-center justify-center gap-4 ${
          theme === 'light' ? 'text-black' : 'text-white'
        }`}>
          Meet
          <Image src="/whatsdate logo no bkgd.png" alt="WhatsDate Logo" width={64} height={64} className="inline-block h-16 w-16 object-contain mx-2" />
          <span className="text-wa-green">WhatsDate</span>
        </h1>
        
        {/* Mobile heading: two rows */}
        <div className="md:hidden flex flex-col items-center justify-center mb-6">
          <div className={`flex items-center justify-center gap-4 text-5xl font-extrabold tracking-tight leading-tight drop-shadow-wa-glow ${
            theme === 'light' ? 'text-black' : 'text-white'
          }`}>
            Meet
            <Image src="/whatsdate logo no bkgd.png" alt="WhatsDate Logo" width={64} height={64} className="inline-block h-16 w-16 object-contain mx-2" />
          </div>
          <div className="text-5xl font-extrabold tracking-tight leading-tight text-wa-green drop-shadow-wa-glow">
            WhatsDate
          </div>
        </div>
        
        {/* Subtitle */}
        <p className={`text-2xl md:text-3xl font-bold mb-8 text-center ${
          theme === 'light' ? 'text-black' : 'text-white'
        }`}>
          Powerful AI chatbot designed for modern dating
        </p>
        <p className={`text-xl md:text-2xl max-w-2xl mb-8 ${
          theme === 'light' ? 'text-neutral-800' : 'text-neutral-300'
        }`}>
          <strong className="text-wa-green">🎉 LIMITED TIME BETA:</strong> Get <span className="font-bold text-wa-green">1000 FREE AI responses</span> when you join our exclusive beta program. Never run out of things to say again!
        </p>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-4">
          <Link href="/download">
            <button className={`px-8 py-4 rounded-full bg-wa-green text-xl font-bold shadow-wa transition-all hover:scale-105 hover:shadow-wa-glow ${
              theme === 'light' ? 'text-black' : 'text-white'
            }`}>
              🎁 Claim 1000 FREE Credits
            </button>
          </Link>
          <span className="text-wa-green font-bold animate-pulse">⏰ Beta spots are limited!</span>
        </div>
        {/* Visual/Mockup or Video Placeholder */}
        <div className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-lg border-4 border-wa-green mb-8">
          <video autoPlay loop muted playsInline className={`w-full h-64 object-cover ${
            theme === 'light' ? 'bg-wa-green-light' : 'bg-black'
          }`}>
            <source src="/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex flex-row gap-8 justify-center mt-4">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-extrabold text-wa-green">1000</span>
            <span className={`font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}>FREE Credits</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-extrabold text-wa-green">BETA</span>
            <span className={`font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}>Early Access</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-extrabold text-wa-green">€0$</span>
            <span className={`font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}>No Cost</span>
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
          <div key={f.title} className={`rounded-2xl p-6 shadow-lg border hover:scale-105 hover:shadow-wa-glow transition-all ${
            theme === 'light' 
              ? 'bg-wa-green-light border-wa-green' 
              : 'bg-neutral-900/80 border-neutral-800'
          }`}>
            {f.icon}
            <h3 className={`mt-4 text-xl font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}>{f.title}</h3>
            <p className={`mt-2 ${theme === 'light' ? 'text-neutral-800' : 'text-neutral-300'}`}>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* How it Works Section */}
      <section className="w-full max-w-4xl py-16 px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-wa-green drop-shadow-wa-glow">How It Works</h2>
        <ol className="space-y-6 text-left w-full max-w-2xl mx-auto">
          {[
            'Download WhatsDate Beta and install on your PC.',
            'Open the app and scan the QR code with WhatsApp.',
            'Enable auto-reply and customize your AI prompt.',
            'Chat as usual – WhatsDate handles the rest!',
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className={`w-8 h-8 flex items-center justify-center rounded-full bg-wa-green font-bold text-lg shadow-wa-glow ${
                theme === 'light' ? 'text-black' : 'text-white'
              }`}>{i + 1}</span>
              <span className={`text-lg md:text-xl ${theme === 'light' ? 'text-black' : 'text-white'}`}>{step}</span>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
