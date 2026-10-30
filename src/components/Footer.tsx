import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#0C0C0C] border-t border-white/10 px-6 md:px-10 py-12 md:py-16 text-[#D7E2EA] select-none">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* VIREX Featured App Callout */}
        <div className="w-full p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950/40 via-[#14141A] to-purple-950/30 border border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex flex-col text-center sm:text-left gap-1">
            <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">Featured Platform</span>
            <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">Join Our App VIREX</h4>
            <p className="text-xs sm:text-sm text-[#D7E2EA]/70 max-w-lg">
              Explore interactive 3D simulations, cutting-edge spatial concepts, and procedural web environments in VIREX.
            </p>
          </div>
          <a
            href="https://ai.studio/apps/550f42e4-67d0-4a6d-a502"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold uppercase tracking-wider text-xs transition-all shadow-lg shadow-blue-600/30 shrink-0 cursor-pointer active:scale-95"
          >
            <span>Join VIREX</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4 border-t border-white/5">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <span className="font-black uppercase tracking-tight text-xl text-white">
              Ismail
            </span>
            <p className="text-xs uppercase tracking-wider text-[#D7E2EA]/60">
              3D Creator & Visual Designer · Available for 2026 Commissions
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-medium uppercase tracking-wider text-[#D7E2EA]/80">
            <button
              onClick={() => scrollTo('about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollTo('projects')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={onOpenContact}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
            <a
              href="https://ai.studio/apps/550f42e4-67d0-4a6d-a502"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>VIREX App</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Back to top */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-medium uppercase tracking-wider text-[#D7E2EA] transition-colors cursor-pointer"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
