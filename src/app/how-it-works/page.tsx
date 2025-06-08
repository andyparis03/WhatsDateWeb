"use client";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Download & Install",
    desc: "Download WhatsDate for your platform and install it in seconds. No complex setup required.",
    icon: "📱"
  },
  {
    number: "02",
    title: "Connect WhatsApp",
    desc: "Scan the QR code to connect your WhatsApp account. Your data stays private and secure.",
    icon: "🔒"
  },
  {
    number: "03",
    title: "Start Chatting",
    desc: "Enable AI assistance and watch as perfect responses are generated automatically for your conversations.",
    icon: "💬"
  },
];

export default function HowItWorksPage() {
  return (
    <div className="w-full flex flex-col items-center py-16 px-4">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-extrabold mb-8 text-wa-green drop-shadow-wa-glow text-center">
        How It Works
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="text-lg md:text-xl text-neutral-300 max-w-2xl mb-12 text-center">
        Get started in just 3 simple steps. WhatsDate Beta is designed for instant setup and maximum privacy.
      </motion.p>
      <div className="flex flex-col gap-12 w-full max-w-3xl">
        {steps.map((step, i) => (
          <motion.div key={step.number} initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.7 }} className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-neutral-900/80 rounded-2xl p-8 shadow-lg border border-neutral-800">
            <div className="flex flex-col items-center justify-center md:items-start md:w-32">
              <span className="text-4xl font-extrabold text-wa-green drop-shadow-wa-glow">{step.number}</span>
              <span className="text-5xl mt-2">{step.icon}</span>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-neutral-300 text-lg">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 