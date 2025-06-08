import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from 'next/font/google';
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "WhatsDate – AI Dating Assistant",
  description: "AI-powered WhatsApp auto-reply app. Download the free beta!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Theme toggle state (dark/light)
  // This is a placeholder; will be replaced with a client component for interactivity
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-screen bg-neutral-950 text-white ${geistSans.variable} ${geistMono.variable} ${inter.className} transition-colors duration-500`}>
        <header className="w-full flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/80 sticky top-0 z-50 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-extrabold tracking-tight text-wa-green drop-shadow-wa-glow">💬 WhatsDate</span>
          </div>
          <nav className="flex gap-6 text-lg font-semibold">
            <Link href="/" className="hover:text-wa-green transition-colors">Home</Link>
            <Link href="/features" className="hover:text-wa-green transition-colors">Features</Link>
            <Link href="/how-it-works" className="hover:text-wa-green transition-colors">How it Works</Link>
            <Link href="/download" className="hover:text-wa-green transition-colors font-bold underline underline-offset-4">Download Beta</Link>
          </nav>
          {/* Theme toggle placeholder */}
          <button className="ml-6 px-3 py-1 rounded-full bg-neutral-800 text-wa-green font-bold shadow-wa hover:bg-neutral-700 transition-all">☾</button>
        </header>
        <main className="flex flex-col items-center w-full flex-1">{children}</main>
        <footer className="w-full text-center py-6 text-neutral-400 text-sm border-t border-neutral-800 bg-neutral-950/80 mt-12">
          &copy; {new Date().getFullYear()} WhatsDate. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
