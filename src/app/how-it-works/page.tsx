"use client";
import { motion } from "framer-motion";
import { MdEmail, MdFileDownload } from "react-icons/md";
import { FaGift, FaLock, FaRegCommentDots } from "react-icons/fa";

const steps = [
  {
    number: "01",
    title: "Download & Install",
    desc: "Download WhatsDate for your platform and install it in seconds. No complex setup required.",
    icon: <MdFileDownload size={40} className="text-[#00e676] bg-black rounded-md p-1 shadow" />
  },
  {
    number: "02",
    title: "Ask for your free credit via email",
    desc: "Claim your 1000 FREE credits for WhatsDate activation. Just click the button below to send us an email and we'll activate your beta credits!",
    icon: <FaGift size={40} className="text-[#ffb300] bg-black rounded-md p-1 shadow" />,
    emailButton: true
  },
  {
    number: "03",
    title: "Connect WhatsApp",
    desc: "Scan the QR code to connect your WhatsApp account. Your data stays private and secure in your pc.",
    icon: <FaLock size={40} className="text-[#ffd600] bg-black rounded-md p-1 shadow" />
  },
  {
    number: "04",
    title: "Start Chatting",
    desc: "Enable AI assistance and watch as perfect responses are generated automatically for your conversations.",
    icon: <FaRegCommentDots size={40} className="text-white bg-black rounded-md p-1 shadow" />
  },
];

export default function HowItWorks() {
  return (
    <div className="w-full flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-8 text-wa-green text-center">
        How It Works
      </h1>
      <p className="text-xl text-neutral-300 max-w-3xl text-center mb-12">
        Get started with WhatsDate in just 4 simple steps. It's that easy!
      </p>

      <div className="w-full max-w-4xl space-y-8">
        {steps.map((step, i) => (
          <div key={step.number} className="flex flex-col md:flex-row items-center gap-8 bg-neutral-900/80 rounded-2xl p-8 border border-neutral-800">
            <div className="flex-shrink-0">
              <span className="text-4xl font-extrabold text-wa-green">{step.number}</span>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-lg text-neutral-300 leading-relaxed">{step.desc}</p>
            </div>
            <div className="text-6xl">{step.icon}</div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <a href="/download" className="px-8 py-4 rounded-full bg-wa-green text-white text-xl font-bold shadow-wa transition-all hover:scale-105">
          Download WhatsDate Beta
        </a>
      </div>
    </div>
  );
} 