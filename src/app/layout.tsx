import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import Image from 'next/image';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WhatsDate – AI Dating Assistant",
  description: "AI-powered WhatsApp auto-reply app. Download the free beta!",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
  viewportFit: 'cover'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 text-white`} style={{
        touchAction: 'manipulation',
        WebkitUserSelect: 'none',
        userSelect: 'none',
        WebkitTouchCallout: 'none',
        WebkitTextSizeAdjust: '100%',
        overflow: 'hidden auto'
      }}>
        <header className="w-full border-b border-neutral-800 bg-neutral-950/80 sticky top-0 z-50 backdrop-blur-md">
          {/* Mobile: Two-row layout */}
          <div className="md:hidden">
            {/* Top row: Logo and brand */}
            <div className="flex items-center justify-center px-6 py-3">
              <div className="flex items-center gap-3">
                <Image src="/whatsdate logo no bkgd.png" alt="WhatsDate Logo" width={40} height={40} className="h-10 w-10 object-contain" />
                <span className="text-2xl font-extrabold tracking-tight text-wa-green drop-shadow-wa-glow">WhatsDate</span>
              </div>
            </div>
            {/* Bottom row: Navigation */}
            <div className="flex items-center justify-center px-2 py-2 gap-2 border-t border-neutral-800/50">
              <Link href="/" className="hover:text-wa-green transition-colors text-sm font-semibold underline underline-offset-2">Home</Link>
              <Link href="/features" className="hover:text-wa-green transition-colors text-sm font-semibold underline underline-offset-2">Features</Link>
              <Link href="/how-it-works" className="hover:text-wa-green transition-colors text-sm font-semibold underline underline-offset-2">How It Works</Link>
              <Link href="/download" className="hover:text-wa-green transition-colors font-bold text-sm underline underline-offset-2">Download</Link>
            </div>
          </div>
          
          {/* Desktop: Single row layout */}
          <div className="hidden md:flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <Image src="/whatsdate logo no bkgd.png" alt="WhatsDate Logo" width={40} height={40} className="h-10 w-10 object-contain" />
              <span className="text-2xl font-extrabold tracking-tight text-wa-green drop-shadow-wa-glow">WhatsDate</span>
            </div>
            <nav className="flex gap-6 text-lg font-semibold">
              <Link href="/" className="hover:text-wa-green transition-colors">Home</Link>
              <Link href="/features" className="hover:text-wa-green transition-colors">Features</Link>
              <Link href="/how-it-works" className="hover:text-wa-green transition-colors">How it Works</Link>
              <Link href="/download" className="hover:text-wa-green transition-colors font-bold underline underline-offset-4">Download Beta</Link>
            </nav>
            {/* Theme toggle placeholder */}
            <button className="ml-6 px-3 py-1 rounded-full bg-neutral-800 text-wa-green font-bold shadow-wa hover:bg-neutral-700 transition-all">☾</button>
          </div>
        </header>
        <main className="flex flex-col items-center w-full flex-1">{children}</main>
        <footer className="w-full text-center py-6 text-neutral-400 text-sm border-t border-neutral-800 bg-neutral-950/80 mt-12">
          &copy; {new Date().getFullYear()} WhatsDate. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
