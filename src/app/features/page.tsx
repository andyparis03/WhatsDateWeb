"use client";
import { motion } from "framer-motion";
import { FaRobot, FaLock, FaMagic, FaBolt, FaLayerGroup, FaHeart } from "react-icons/fa";

const features = [
  {
    icon: <FaRobot size={40} className="text-wa-green" />,
    title: "Smart Auto-Reply",
    desc: "AI analyzes conversation context and generates natural, engaging responses that match your personality."
  },
  {
    icon: <FaLock size={40} className="text-wa-green" />,
    title: "Privacy Focused",
    desc: "Your conversations stay private. No data is stored on external servers - everything runs locally on your device."
  },
  {
    icon: <FaMagic size={40} className="text-wa-green" />,
    title: "Customizable Prompts",
    desc: "Tailor AI responses to match your dating style. From casual to flirty, the AI adapts to your preferences."
  },
  {
    icon: <FaBolt size={40} className="text-wa-green" />,
    title: "Lightning Fast",
    desc: "Get instant responses powered by advanced AI. Never leave someone waiting while you think of what to say."
  },
  {
    icon: <FaLayerGroup size={40} className="text-wa-green" />,
    title: "Multiple Platforms",
    desc: "Works seamlessly with WhatsApp Web. More platforms coming soon including Telegram and Instagram."
  },
  {
    icon: <FaHeart size={40} className="text-wa-green" />,
    title: "Relationship Builder",
    desc: "AI learns from successful conversations to help build stronger connections and meaningful relationships."
  },
];

export default function FeaturesPage() {
  return (
    <div className="w-full flex flex-col items-center py-16 px-4">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-extrabold mb-8 text-wa-green drop-shadow-wa-glow text-center">
        Why Choose WhatsDate?
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="text-lg md:text-xl text-neutral-300 max-w-2xl mb-12 text-center">
        Powerful AI chatbot designed for modern dating. Experience the future of conversations with WhatsDate Beta.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {features.map((f, i) => (
          <motion.div key={f.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} className="bg-neutral-900/80 rounded-2xl p-8 shadow-lg border border-neutral-800 hover:scale-105 hover:shadow-wa-glow transition-all flex flex-col items-center text-center">
            {f.icon}
            <h3 className="mt-4 text-xl font-bold text-white">{f.title}</h3>
            <p className="text-neutral-300 mt-2">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 