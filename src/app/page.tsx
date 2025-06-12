'use client';
import { FaWindows, FaApple, FaLinux, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Image from 'next/image';
import { useTheme } from './theme-provider';

export default function Home() {
  const { theme } = useTheme();
  
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <section id="home" className={`w-full flex flex-col items-center justify-center min-h-[90vh] py-20 px-6 text-center relative ${
        theme === 'light' ? 'bg-white' : 'bg-gray-900'
      }`}>
        {/* Main Title */}
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-primary flex items-center justify-center gap-2 md:gap-4 mb-4 text-4xl md:text-title font-semibold">
            Meet
            <Image src="/whatsdate logo no bkgd.png" alt="WhatsDate Logo" width={80} height={80} className="inline-block h-12 w-12 md:h-20 md:w-20 object-contain" />
            WhatsDate
          </h1>
          <p className="text-subtitle text-secondary max-w-3xl">
            The smartest AI chatbot designed for modern dating
          </p>
        </div>

        {/* Key Message */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-paragraph text-primary mb-6">
            Because 2025 is about authentic conversations... not awkward small talk.
          </p>
          <p className="text-paragraph text-secondary">
            WhatsDate uses advanced AI to help you maintain meaningful conversations with your matches, 
            so you can focus on building real connections instead of struggling with what to say next.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mb-16">
          <a href="#download">
            <button className={`px-12 py-4 text-xl font-semibold rounded-full transition-all hover:scale-105 ${
              theme === 'light' 
                ? 'bg-black text-white hover:bg-gray-800' 
                : 'bg-white text-black hover:bg-gray-100'
            }`}>
              Try WhatsDate Beta
            </button>
          </a>
        </div>

        {/* Hero Image/Video */}
        <div className="w-full max-w-4xl">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-light-gray">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src="/demo.mp4" type="video/mp4" />
              <div className="w-full h-full bg-light-gray flex items-center justify-center">
                <span className="text-secondary">Demo Video Placeholder</span>
              </div>
            </video>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={`w-full py-20 px-6 ${theme === 'light' ? 'bg-light-gray' : 'bg-gray-800'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-title text-primary mb-4">Why WhatsDate Works</h2>
            <p className="text-paragraph text-secondary max-w-3xl mx-auto">
              Advanced AI technology designed specifically for dating conversations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'AI Auto-Reply',
                desc: 'Smart, context-aware responses that feel natural and engaging',
                image: '/ai-brain-chat.png',
                alt: 'AI brain with chat bubbles'
              },
              {
                title: 'Privacy First',
                desc: 'Your conversations stay private. No external API keys required',
                image: '/privacy-shield.png',
                alt: 'Privacy shield protecting messages'
              },
              {
                title: 'WhatsApp Native',
                desc: 'Works seamlessly with your existing WhatsApp conversations',
                image: '/whatsapp-integration.png',
                alt: 'WhatsApp integration mockup'
              }
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="aspect-square rounded-2xl mb-6 overflow-hidden">
                  <Image 
                    src={feature.image} 
                    alt={feature.alt} 
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-subtitle text-primary mb-3">{feature.title}</h3>
                <p className="text-paragraph text-secondary">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="w-full py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-title text-primary mb-6">
                Focus On The Connection, Not The Conversation
              </h2>
              <p className="text-paragraph text-secondary mb-8">
                Stop overthinking every message. WhatsDate handles the small talk 
                so you can focus on building genuine connections with people you actually like.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-paragraph text-secondary">Natural conversation flow</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-paragraph text-secondary">Personalized responses</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-paragraph text-secondary">Human-like timing</span>
                </div>
              </div>
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <Image 
                src="/lifestyle-couple.png" 
                alt="Couple connecting and using WhatsDate" 
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className={`w-full py-20 px-6 ${theme === 'light' ? 'bg-light-gray' : 'bg-gray-800'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-title text-primary mb-4">Get Started In Minutes</h2>
          <p className="text-paragraph text-secondary mb-16 max-w-2xl mx-auto">
            Simple setup process that gets you connected and conversing naturally
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Download',
                desc: 'Get WhatsDate for your device'
              },
              {
                step: '02', 
                title: 'Connect',
                desc: 'Scan QR code with WhatsApp'
              },
              {
                step: '03',
                title: 'Customize',
                desc: 'Set your conversation style'
              },
              {
                step: '04',
                title: 'Chat',
                desc: 'Let AI handle the responses'
              }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl ${
                  theme === 'light' ? 'bg-black' : 'bg-white text-black'
                }`}>
                  {item.step}
                </div>
                <h3 className="text-subtitle text-primary mb-2">{item.title}</h3>
                <p className="text-paragraph text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="w-full py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-title text-primary mb-6">
            Download WhatsDate Beta
          </h2>
          <p className="text-paragraph text-secondary mb-12 max-w-2xl mx-auto">
            Get early access to WhatsDate and start having better conversations today. 
            Currently available for Windows, with macOS and Linux support coming soon.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col md:flex-row gap-6 mb-12 justify-center">
            <a 
              href="https://github.com/WhatsDate/WhatsDate/releases/tag/v.0.0.1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`flex items-center justify-center gap-4 px-8 py-4 rounded-full text-xl font-semibold transition-all hover:scale-105 ${
                theme === 'light' ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              <FaWindows size={24} /> Download for Windows
            </a>
            
            <button 
              className={`flex items-center justify-center gap-4 px-8 py-4 rounded-full text-xl font-semibold opacity-50 cursor-not-allowed ${
                theme === 'light' ? 'bg-light-gray text-secondary' : 'bg-gray-700 text-gray-400'
              }`}
              disabled
            >
              <FaApple size={24} /> Coming Soon (macOS)
            </button>
          </div>

          {/* GitHub Link */}
          <div className="mb-16">
            <a 
              href="https://github.com/WhatsDate/WhatsDate/releases/tag/v0.0.1-beta" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`inline-flex items-center gap-3 px-6 py-3 rounded-full text-lg font-medium border transition-all hover:scale-105 ${
                theme === 'light' ? 'border-border-neutral text-secondary hover:text-primary' : 'border-gray-600 text-gray-300 hover:text-white'
              }`}
            >
              <FaGithub size={20} /> View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Installation Steps Section */}
      <section className={`w-full py-20 px-6 ${theme === 'light' ? 'bg-light-gray' : 'bg-gray-800'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-title text-primary text-center mb-8">Installation Steps</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                step: '01',
                title: 'Download & Install',
                desc: 'Download WhatsDate for your platform and install it in seconds. No complex setup required.'
              },
              {
                step: '02',
                title: 'Claim Free Credits',
                desc: 'Email us to claim your 1000 FREE credits for WhatsDate activation.',
                hasEmail: true
              },
              {
                step: '03',
                title: 'Connect WhatsApp',
                desc: 'Scan the QR code to connect your WhatsApp account. Your data stays private and secure.'
              },
              {
                step: '04',
                title: 'Start Chatting',
                desc: 'Enable AI assistance and watch as perfect responses are generated automatically.'
              }
            ].map((item, i) => (
              <div key={i} className="text-left">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                    theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'
                  }`}>
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-subtitle text-primary mb-2">{item.title}</h4>
                    <p className="text-paragraph text-secondary mb-3">{item.desc}</p>
                    {item.hasEmail && (
                      <a 
                        href="mailto:whatsdate.info@gmail.com?subject=WhatsDate%20Beta%20Free%20Credit%20Request&body=Hi%2C%20I%20would%20like%20to%20claim%20my%201000%20free%20credits%20for%20WhatsDate%20Beta!" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 ${
                          theme === 'light' ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-100'
                        }`}
                      >
                        <MdEmail size={16} /> Claim Free Credits
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements Section */}
      <section className="w-full py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-title text-primary mb-6">System Requirements</h2>
          <ul className="text-paragraph text-secondary space-y-2 max-w-md mx-auto text-left">
            <li>• Windows 10 or later (64-bit)</li>
            <li>• Active WhatsApp account</li>
            <li>• Internet connection</li>
            <li>• ~200MB free disk space</li>
          </ul>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`w-full py-20 px-6 ${theme === 'light' ? 'bg-primary' : 'bg-black'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className={`text-title mb-16 ${theme === 'light' ? 'text-white' : 'text-white'}`}>
            What They Say About Us
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                rating: 5,
                quote: "Thank you WhatsDate",
                testimonial: "I met my girlfriend using WhatsDate's perfect conversation starters. The AI knew exactly what to say when I was nervous!",
                name: "Alex Chen, 26",
                color: "text-green-400"
              },
              {
                rating: 5,
                quote: "Never running out of words again",
                testimonial: "As someone who's naturally shy, WhatsDate gives me the confidence to keep conversations flowing naturally. It's like having a dating coach in my pocket.",
                name: "Sarah Johnson, 24",
                color: "text-green-400"
              },
              {
                rating: 5,
                quote: "Game changer for dating",
                testimonial: "The AI responses are so natural that my matches never know I'm getting help. It's helped me go from awkward texts to meaningful conversations.",
                name: "Marcus Williams, 29",
                color: "text-green-400"
              }
            ].map((testimonial, i) => (
              <div key={i} className={`rounded-2xl p-8 ${theme === 'light' ? 'bg-gray-800' : 'bg-gray-800'} text-left`}>
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <svg key={starIndex} className="w-5 h-5 text-green-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <h3 className={`text-subtitle mb-4 ${testimonial.color}`}>
                  "{testimonial.quote}"
                </h3>

                {/* Testimonial Text */}
                <p className="text-paragraph text-gray-300 mb-6">
                  {testimonial.testimonial}
                </p>

                {/* User Profile */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-paragraph text-white font-medium">
                    {testimonial.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className={`w-full py-20 px-6 ${theme === 'light' ? 'bg-light-gray' : 'bg-gray-800'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-title text-primary mb-4">WhatsDate News</h2>
          <p className="text-paragraph text-secondary mb-16">
            Latest updates about WhatsDate and AI dating technology.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                tag: "Launch",
                date: "January 2025",
                title: "WhatsDate Beta Launch",
                description: "We're excited to announce the beta launch of WhatsDate with 1000 free credits for early adopters.",
                tagColor: "bg-green-400"
              },
              {
                tag: "Privacy",
                date: "January 2025",
                title: "Privacy-First AI Dating",
                description: "How WhatsDate keeps your conversations private while providing intelligent dating assistance.",
                tagColor: "bg-green-400"
              },
              {
                tag: "Updates",
                date: "Coming Soon",
                title: "macOS Version Coming Soon",
                description: "We're working hard to bring WhatsDate to macOS users. Beta testing starts next month.",
                tagColor: "bg-green-400"
              }
            ].map((news, i) => (
              <div key={i} className={`rounded-2xl p-6 text-left ${
                theme === 'light' ? 'bg-white' : 'bg-gray-700'
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${news.tagColor}`}>
                    {news.tag}
                  </span>
                  <span className="text-sm text-secondary">• {news.date}</span>
                </div>
                <h3 className="text-subtitle text-primary mb-3">{news.title}</h3>
                <p className="text-paragraph text-secondary">{news.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-title text-primary text-center mb-16">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
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
              <details key={i} className={`rounded-lg p-6 ${
                theme === 'light' ? 'bg-light-gray' : 'bg-gray-800'
              }`}>
                <summary className="cursor-pointer text-subtitle text-primary flex items-center gap-3">
                  <span className="text-green-400">●</span>
                  {faq.question}
                </summary>
                <div className="mt-4 pl-6">
                  <p className="text-paragraph text-secondary">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={`w-full py-20 px-6 ${theme === 'light' ? 'bg-primary' : 'bg-black'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-title mb-4 ${theme === 'light' ? 'text-white' : 'text-white'}`}>
            Get Better At Dating
          </h2>
          <p className={`text-paragraph mb-12 ${theme === 'light' ? 'text-gray-300' : 'text-gray-300'}`}>
            Stay updated with dating tips, AI insights, and WhatsDate updates.
          </p>
          
          <div className="max-w-md mx-auto">
            <a 
              href="mailto:whatsdate.info@gmail.com?subject=WhatsDate%20Updates%20Subscription&body=Hi%2C%20I%20would%20like%20to%20receive%20WhatsDate%20updates%20and%20dating%20tips!" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xl font-semibold transition-all hover:scale-105 bg-green-400 text-white hover:bg-green-500"
            >
              ✉ Contact Us
            </a>
            <p className={`text-sm mt-4 ${theme === 'light' ? 'text-gray-400' : 'text-gray-400'}`}>
              Follow us @whatsdate.dating for updates
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`w-full py-16 px-6 ${theme === 'light' ? 'bg-gray-900' : 'bg-gray-900'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">WhatsDate</h3>
              <p className="text-paragraph text-gray-400">
                The smartest AI dating assistant. Get perfect conversation starters and never run out of things to say.
              </p>
            </div>

            {/* Product Column */}
            <div>
              <h4 className="text-xl font-semibold text-green-400 mb-6">Product</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#features" className="text-paragraph text-gray-400 hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#download" className="text-paragraph text-gray-400 hover:text-white transition-colors">
                    Download
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:whatsdate.info@gmail.com?subject=WhatsDate%20Beta%20Free%20Credit%20Request&body=Hi%2C%20I%20would%20like%20to%20claim%20my%201000%20free%20credits%20for%20WhatsDate%20Beta!" 
                    className="text-paragraph text-gray-400 hover:text-white transition-colors"
                  >
                    Free Credits
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h4 className="text-xl font-semibold text-green-400 mb-6">Support</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="mailto:whatsdate.info@gmail.com" 
                    className="text-paragraph text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/WhatsDate/WhatsDate/releases" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-paragraph text-gray-400 hover:text-white transition-colors"
                  >
                    Releases
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:whatsdate.info@gmail.com?subject=WhatsDate%20Feedback" 
                    className="text-paragraph text-gray-400 hover:text-white transition-colors"
                  >
                    Feedback
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect Column */}
            <div>
              <h4 className="text-xl font-semibold text-green-400 mb-6">Connect</h4>
              <div className="flex gap-4 mb-4">
                <a 
                  href="mailto:whatsdate.info@gmail.com" 
                  className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com/WhatsDate/WhatsDate" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors"
                >
                  <FaGithub className="w-6 h-6 text-white" />
                </a>
              </div>
              <p className="text-paragraph text-gray-400">
                Follow us @whatsdate.dating
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
