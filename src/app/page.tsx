'use client';
import { FaRobot, FaLock, FaMagic, FaWhatsapp, FaRegSmile, FaWindows, FaApple, FaLinux, FaDownload, FaQuestionCircle, FaGithub, FaUser, FaStar, FaNewspaper, FaEnvelope } from 'react-icons/fa';
import { MdEmail, MdFileDownload } from "react-icons/md";
import { FaGift, FaRegCommentDots } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from './theme-provider';
import { motion } from 'framer-motion';

export default function Home() {
  const { theme } = useTheme();
  
  return (
    <div className="w-full flex flex-col items-center" style={{touchAction: 'auto'}}>
      {/* Hero Section - Inspired by Thursday */}
      <section className={`w-full flex flex-col items-center justify-center min-h-screen py-20 px-4 text-center relative overflow-hidden ${
        theme === 'light' 
          ? 'bg-gradient-to-b from-wa-bg-light via-wa-green-light to-wa-bg-light' 
          : 'bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950'
      }`}>
        <div className="flex flex-col items-center mb-8">
          <span className={`inline-block bg-wa-green font-bold px-6 py-2 rounded-full text-lg shadow-wa mb-4 animate-pulse ${
            theme === 'light' ? 'text-black' : 'text-white'
          }`}>🚀 BETA LAUNCH</span>
        </div>
        
        {/* Hero Text - Meet WhatsDate */}
        <div className="flex flex-col items-center mb-8">
          {/* First Line: Meet (logo) WhatsDate - Desktop */}
          <div className="hidden md:flex items-center justify-center gap-4 mb-4">
            <span className={`bahnschrift-heading font-semibold ${
              theme === 'light' ? 'text-black' : 'text-white'
            }`} style={{ fontSize: '56px', lineHeight: '1.1' }}>
              Meet
            </span>
            <Image src="/whatsdate logo no bkgd.png" alt="WhatsDate Logo" width={64} height={64} className="h-16 w-16 object-contain mx-2" />
            <span className="bahnschrift-heading font-semibold text-wa-green" style={{ fontSize: '56px', lineHeight: '1.1' }}>
              WhatsDate
            </span>
          </div>
          
          {/* First Line: Meet (logo) WhatsDate - Mobile */}
          <div className="md:hidden flex flex-col items-center justify-center gap-2 mb-4">
            <div className="flex items-center justify-center gap-2">
              <span className={`bahnschrift-heading font-semibold ${
                theme === 'light' ? 'text-black' : 'text-white'
              }`} style={{ fontSize: '40px', lineHeight: '1.1' }}>
                Meet
              </span>
              <Image src="/whatsdate logo no bkgd.png" alt="WhatsDate Logo" width={48} height={48} className="h-12 w-12 object-contain mx-1" />
            </div>
            <span className="bahnschrift-heading font-semibold text-wa-green" style={{ fontSize: '40px', lineHeight: '1.1' }}>
              WhatsDate
            </span>
          </div>
          
          {/* Second Line: Subtitle */}
          <p className={`bahnschrift-heading font-semibold text-center max-w-4xl px-4 ${
            theme === 'light' ? 'text-black' : 'text-white'
          }`} style={{ fontSize: 'clamp(24px, 5vw, 32px)', lineHeight: '1.2' }}>
            The smartest AI chatbot designed for modern dating
          </p>
        </div>

        {/* Value Proposition */}
        <p className={`text-2xl md:text-3xl font-bold mb-12 max-w-4xl ${
          theme === 'light' ? 'text-black' : 'text-white'
        }`}>
          Because 2025 is about authentic conversations...not awkward small talk.
        </p>

        {/* Beta Stats */}
        <div className="flex flex-row gap-8 justify-center mb-12">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-black text-wa-green">1000</span>
            <span className={`font-bold text-lg ${theme === 'light' ? 'text-black' : 'text-white'}`}>FREE CREDITS</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-black text-wa-green">BETA</span>
            <span className={`font-bold text-lg ${theme === 'light' ? 'text-black' : 'text-white'}`}>EARLY ACCESS</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-black text-wa-green">€0</span>
            <span className={`font-bold text-lg ${theme === 'light' ? 'text-black' : 'text-white'}`}>NO COST</span>
          </div>
        </div>

        {/* CTA Button */}
        <motion.a 
          href="#download" 
          whileHover={{ scale: 1.05 }}
          className={`px-12 py-6 rounded-full bg-wa-green text-2xl font-black shadow-wa transition-all hover:shadow-wa-glow mb-8 ${
            theme === 'light' ? 'text-black' : 'text-white'
          }`}
        >
          🎁 CLAIM 1000 FREE CREDITS
        </motion.a>

        {/* Demo Video */}
        <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border-4 border-wa-green">
          <video autoPlay loop muted playsInline className={`w-full h-80 object-cover ${
            theme === 'light' ? 'bg-wa-green-light' : 'bg-black'
          }`}>
            <source src="/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="flex items-center gap-4 mt-8">
          <span className={`text-lg font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}>
            Follow us @whatsdate.dating
          </span>
        </div>
      </section>

      {/* How It Works Section - Thursday style */}
      <section id="how-it-works" className={`w-full py-20 px-4 ${
        theme === 'light' ? 'bg-white' : 'bg-neutral-950'
      }`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className={`bahnschrift-heading text-5xl md:text-6xl font-semibold mb-4 ${
            theme === 'light' ? 'text-black' : 'text-white'
          }`}>
            HOW IT WORKS
          </h2>
          <p className={`text-2xl mb-16 ${
            theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
          }`}>
            Get perfect replies in 4 simple steps...
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Download & Install",
                desc: "Download WhatsDate for your platform and install it in seconds.",
                icon: <MdFileDownload size={48} className="text-[#00e676]" />
              },
              {
                number: "02", 
                title: "Get Free Credits",
                desc: "Email us to claim your 1000 FREE beta credits instantly.",
                icon: <FaGift size={48} className="text-[#ffb300]" />
              },
              {
                number: "03",
                title: "Connect WhatsApp", 
                desc: "Scan QR code to connect. Your data stays private on your device.",
                icon: <FaLock size={48} className="text-[#ffd600]" />
              },
              {
                number: "04",
                title: "Start Chatting",
                desc: "Enable AI assistance and get perfect responses automatically.",
                icon: <FaRegCommentDots size={48} className="text-wa-green" />
              }
            ].map((step) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl text-center ${
                  theme === 'light' ? 'bg-wa-green-light' : 'bg-neutral-900'
                }`}
              >
                <div className="text-wa-green text-4xl font-black mb-4">{step.number}</div>
                <div className="mb-4">{step.icon}</div>
                <h3 className={`text-xl font-bold mb-2 ${
                  theme === 'light' ? 'text-black' : 'text-white'
                }`}>{step.title}</h3>
                <p className={`${
                  theme === 'light' ? 'text-neutral-700' : 'text-neutral-300'
                }`}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Showcase - Thursday style */}
      <section id="features" className={`w-full py-20 px-4 ${
        theme === 'light' ? 'bg-wa-green-light' : 'bg-neutral-900'
      }`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`bahnschrift-heading text-5xl md:text-6xl font-semibold mb-16 text-center ${
            theme === 'light' ? 'text-black' : 'text-white'
          }`}>
            FEATURES
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaRobot size={48} className="text-wa-green" />,
                title: 'AI Auto-Reply',
                desc: 'Smart, context-aware replies to your WhatsApp messages that feel completely natural.'
              },
              {
                icon: <FaLock size={48} className="text-wa-green" />,
                title: 'Privacy Focused',
                desc: 'Your chats stay on your device. No OpenAI key needed. Complete privacy guaranteed.'
              },
              {
                icon: <FaMagic size={48} className="text-wa-green" />,
                title: 'Custom Prompts',
                desc: "Tweak the AI's personality and response style to match your dating approach."
              },
              {
                icon: <FaWhatsapp size={48} className="text-wa-green" />,
                title: 'WhatsApp Native',
                desc: 'Works directly with WhatsApp Web. Simple QR code login, no complexity.'
              },
              {
                icon: <FaRegSmile size={48} className="text-wa-green" />,
                title: 'Emoji Reactions',
                desc: 'React with emojis to trigger instant AI replies. Smart and intuitive.'
              },
              {
                icon: <FaRobot size={48} className="text-wa-green" />,
                title: 'Human Timing',
                desc: 'Replies are timed perfectly to feel natural, never bot-like or rushed.'
              },
            ].map((feature, i) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-2xl text-center hover:scale-105 transition-all ${
                  theme === 'light' ? 'bg-white' : 'bg-neutral-800'
                }`}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className={`text-xl font-bold mb-4 ${
                  theme === 'light' ? 'text-black' : 'text-white'
                }`}>{feature.title}</h3>
                <p className={`${
                  theme === 'light' ? 'text-neutral-700' : 'text-neutral-300'
                }`}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className={`w-full py-20 px-4 ${
        theme === 'light' ? 'bg-white' : 'bg-neutral-950'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`bahnschrift-heading text-5xl md:text-6xl font-semibold mb-8 ${
            theme === 'light' ? 'text-black' : 'text-white'
          }`}>
            DOWNLOAD THE APP
          </h2>
          <p className={`text-2xl mb-12 ${
            theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
          }`}>
            Available for Windows. macOS and Linux coming soon.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
            <motion.a 
              whileHover={{ scale: 1.05 }} 
              href="https://github.com/WhatsDate/WhatsDate/releases/download/v0.0.1-beta/WhatsDate-0.0.1.Setup.exe" 
          target="_blank"
          rel="noopener noreferrer"
              className={`flex items-center gap-3 px-8 py-4 rounded-full bg-wa-green text-xl font-bold shadow-wa transition-all ${
                theme === 'light' ? 'text-black' : 'text-white'
              }`}
            >
              <FaWindows size={28} /> Download for Windows
            </motion.a>
            
            <motion.a 
              href="#" 
              className={`flex items-center gap-3 px-8 py-4 rounded-full text-xl font-bold opacity-60 cursor-not-allowed ${
                theme === 'light' ? 'bg-neutral-200 text-neutral-600' : 'bg-neutral-800 text-neutral-400'
              }`}
            >
              <FaApple size={28} /> Coming Soon (macOS)
            </motion.a>
            
            <motion.a 
              href="#" 
              className={`flex items-center gap-3 px-8 py-4 rounded-full text-xl font-bold opacity-60 cursor-not-allowed ${
                theme === 'light' ? 'bg-neutral-200 text-neutral-600' : 'bg-neutral-800 text-neutral-400'
              }`}
            >
              <FaLinux size={28} /> Coming Soon (Linux)
            </motion.a>
          </div>

          <div className="flex justify-center mb-12">
            <motion.a 
              whileHover={{ scale: 1.05 }} 
              href="https://github.com/WhatsDate/WhatsDate/releases/tag/v0.0.1-beta" 
          target="_blank"
          rel="noopener noreferrer"
              className={`flex items-center gap-3 px-8 py-4 rounded-full text-xl font-bold border border-wa-green ${
                theme === 'light' ? 'bg-wa-green-light text-black' : 'bg-neutral-900 text-white'
              }`}
            >
              <FaGithub size={28} /> View on GitHub
            </motion.a>
          </div>

          {/* Email CTA */}
          <div className={`p-8 rounded-2xl mb-12 ${
            theme === 'light' ? 'bg-wa-green-light' : 'bg-neutral-900'
          }`}>
            <h3 className={`text-2xl font-bold mb-4 ${
              theme === 'light' ? 'text-black' : 'text-white'
            }`}>
              Claim Your 1000 FREE Credits
            </h3>
            <p className={`text-lg mb-6 ${
              theme === 'light' ? 'text-neutral-700' : 'text-neutral-300'
            }`}>
              Email us to activate your beta credits and start using WhatsDate for free!
            </p>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="mailto:whatsdate.info@gmail.com?subject=WhatsDate%20Beta%20Free%20Credit%20Request&body=Hi%2C%20I%20would%20like%20to%20claim%20my%201000%20free%20credits%20for%20WhatsDate%20Beta!" 
          target="_blank"
          rel="noopener noreferrer"
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-full bg-wa-green text-xl font-bold shadow-wa transition-all ${
                theme === 'light' ? 'text-black' : 'text-white'
              }`}
            >
              <MdEmail size={24} /> Email for Free Credits
            </motion.a>
          </div>

          {/* System Requirements */}
          <div className={`p-8 rounded-2xl text-left ${
            theme === 'light' ? 'bg-neutral-50' : 'bg-neutral-800'
          }`}>
            <h3 className={`text-2xl font-bold mb-4 text-wa-green`}>System Requirements</h3>
            <ul className={`list-disc list-inside space-y-2 text-lg ${
              theme === 'light' ? 'text-neutral-700' : 'text-neutral-300'
            }`}>
              <li>Windows 10 or later (64-bit)</li>
              <li>Active WhatsApp account</li>
              <li>Internet connection</li>
              <li>~200MB free disk space</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={`w-full py-20 px-4 ${
        theme === 'light' ? 'bg-wa-green-light' : 'bg-neutral-900'
      }`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`bahnschrift-heading text-5xl md:text-6xl font-semibold mb-16 text-center ${
            theme === 'light' ? 'text-black' : 'text-white'
          }`}>
            WHAT THEY SAY ABOUT US
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Thank you WhatsDate",
                content: "I met my girlfriend using WhatsDate's perfect conversation starters. The AI knew exactly what to say when I was nervous!",
                name: "Alex Chen, 26",
                rating: 5
              },
              {
                quote: "Never running out of words again",
                content: "As someone who's naturally shy, WhatsDate gives me the confidence to keep conversations flowing naturally. It's like having a dating coach in my pocket.",
                name: "Sarah Johnson, 24", 
                rating: 5
              },
              {
                quote: "Game changer for dating",
                content: "The AI responses are so natural that my matches never know I'm getting help. It's helped me go from awkward texts to meaningful conversations.",
                name: "Marcus Williams, 29",
                rating: 5
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`p-8 rounded-2xl ${
                  theme === 'light' ? 'bg-white' : 'bg-neutral-800'
                }`}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-wa-green text-xl" />
                  ))}
                </div>
                <h4 className={`text-xl font-bold mb-4 text-wa-green`}>
                  "{testimonial.quote}"
                </h4>
                <p className={`text-lg mb-4 ${
                  theme === 'light' ? 'text-neutral-700' : 'text-neutral-300'
                }`}>
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-wa-green rounded-full flex items-center justify-center">
                    <FaUser className={theme === 'light' ? 'text-black' : 'text-white'} />
                  </div>
                  <span className={`font-semibold ${
                    theme === 'light' ? 'text-black' : 'text-white'
                  }`}>
                    {testimonial.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className={`w-full py-20 px-4 ${
        theme === 'light' ? 'bg-white' : 'bg-neutral-950'
      }`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`bahnschrift-heading text-5xl md:text-6xl font-semibold mb-4 text-center ${
            theme === 'light' ? 'text-black' : 'text-white'
          }`}>
            WHATSDATE NEWS
          </h2>
          <p className={`text-2xl mb-16 text-center ${
            theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
          }`}>
            Latest updates about WhatsDate and AI dating technology.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "WhatsDate Beta Launch",
                excerpt: "We're excited to announce the beta launch of WhatsDate with 1000 free credits for early adopters.",
                category: "Launch",
                date: "January 2025"
              },
              {
                title: "Privacy-First AI Dating",
                excerpt: "How WhatsDate keeps your conversations private while providing intelligent dating assistance.",
                category: "Privacy", 
                date: "January 2025"
              },
              {
                title: "macOS Version Coming Soon",
                excerpt: "We're working hard to bring WhatsDate to macOS users. Beta testing starts next month.",
                category: "Updates",
                date: "Coming Soon"
              }
            ].map((article, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-2xl cursor-pointer hover:scale-105 transition-all ${
                  theme === 'light' ? 'bg-wa-green-light' : 'bg-neutral-900'
                }`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <FaNewspaper className="text-wa-green" />
                  <span className="text-wa-green font-semibold text-sm">{article.category}</span>
                  <span className={`text-sm ${
                    theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
                  }`}>
                    • {article.date}
                  </span>
                </div>
                <h3 className={`text-xl font-bold mb-3 ${
                  theme === 'light' ? 'text-black' : 'text-white'
                }`}>
                  {article.title}
                </h3>
                <p className={`${
                  theme === 'light' ? 'text-neutral-700' : 'text-neutral-300'
                }`}>
                  {article.excerpt}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`w-full py-20 px-4 ${
        theme === 'light' ? 'bg-wa-green-light' : 'bg-neutral-900'
      }`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`bahnschrift-heading text-5xl md:text-6xl font-semibold mb-16 text-center ${
            theme === 'light' ? 'text-black' : 'text-white'
          }`}>
            F.A.Q
          </h2>
          
          <div className="space-y-8">
            {[
              {
                question: "What is WhatsDate?",
                answer: "WhatsDate is an AI-powered dating assistant that helps you craft perfect responses in your WhatsApp conversations. It works directly with WhatsApp and keeps all your data private on your device."
              },
              {
                question: "Is WhatsDate safe to use?",
                answer: "Yes! All your chats stay on your device. We don't store your conversations, and you don't need to provide an OpenAI API key. Your privacy is our top priority."
              },
              {
                question: "How do I get my free credits?",
                answer: "Simply email us at whatsdate.info@gmail.com with the subject 'Free Credits Request' and we'll activate 1000 free credits for your beta account instantly."
              },
              {
                question: "Can I turn off auto-reply?",
                answer: "Absolutely! You can enable/disable auto-reply for individual contacts or globally in the app settings. You have complete control over when the AI assists you."
              },
              {
                question: "What platforms do you support?",
                answer: "Currently WhatsDate is available for Windows 10+. We're actively working on macOS and Linux versions, which will be available soon."
              },
              {
                question: "How natural are the AI responses?",
                answer: "Our AI is trained to generate responses that feel completely natural and match your conversation style. The timing is also optimized to feel human, not bot-like."
              }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-2xl ${
                  theme === 'light' ? 'bg-white' : 'bg-neutral-800'
                }`}
              >
                <h4 className={`text-xl font-bold mb-3 text-wa-green flex items-center gap-2`}>
                  <FaQuestionCircle size={20} />
                  {faq.question}
                </h4>
                <p className={`text-lg leading-relaxed ${
                  theme === 'light' ? 'text-neutral-700' : 'text-neutral-300'
                }`}>
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Newsletter Section */}
      <section className={`w-full py-20 px-4 ${
        theme === 'light' ? 'bg-white' : 'bg-neutral-950'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`bahnschrift-heading text-4xl md:text-5xl font-semibold mb-8 ${
            theme === 'light' ? 'text-black' : 'text-white'
          }`}>
            GET BETTER AT DATING
          </h2>
          <p className={`text-xl mb-12 ${
            theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
          }`}>
            Stay updated with dating tips, AI insights, and WhatsDate updates.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="mailto:whatsdate.info@gmail.com" 
              className={`flex items-center gap-3 px-8 py-4 rounded-full bg-wa-green text-xl font-bold shadow-wa transition-all ${
                theme === 'light' ? 'text-black' : 'text-white'
              }`}
            >
              <FaEnvelope size={24} /> Contact Us
            </motion.a>
            
            <p className={`text-sm ${
              theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
            }`}>
              Follow us @whatsdate.dating for updates
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
