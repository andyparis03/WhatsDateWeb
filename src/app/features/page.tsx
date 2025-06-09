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

export default function Features() {
  return (
    <div className="w-full flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-8 text-wa-green text-center">
        Features
      </h1>
      <p className="text-xl text-neutral-300 max-w-3xl text-center mb-12">
        Discover what makes WhatsDate the smartest AI dating assistant for WhatsApp.
      </p>

      <div className="w-full max-w-6xl grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <div key={feature.title} className="bg-neutral-900/80 rounded-2xl p-8 shadow-lg border border-neutral-800 hover:scale-105 transition-all flex flex-col items-center text-center">
            <div className="text-wa-green text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-neutral-300 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 