import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ContactButton from './ContactButton';

interface HeroSectionProps {
  onOpenContact: () => void;
  showPortrait?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenContact,
  showPortrait = false, // Removed picture as explicitly requested ("Remove the picture")
}) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[620px] w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* 1. Small White Navbar with Blue Pressed State */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full flex flex-col items-center gap-3 px-4 pt-4 sm:pt-6 z-30"
      >
        <div className="w-fit max-w-[94vw] bg-white text-[#0C0C0C] rounded-full p-1.5 sm:p-2 flex items-center gap-1 sm:gap-1.5 shadow-[0_10px_35px_rgba(255,255,255,0.12)] border border-white">
          <button
            onClick={() => {
              setActiveItem('about');
              scrollTo('about');
            }}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-150 cursor-pointer active:scale-95 active:bg-blue-600 active:text-white ${
              activeItem === 'about'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-[#0C0C0C] hover:bg-black/5 hover:text-blue-600'
            }`}
          >
            About
          </button>
          <button
            onClick={() => {
              setActiveItem('price');
              scrollTo('services');
            }}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-150 cursor-pointer active:scale-95 active:bg-blue-600 active:text-white ${
              activeItem === 'price'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-[#0C0C0C] hover:bg-black/5 hover:text-blue-600'
            }`}
          >
            Price
          </button>
          <button
            onClick={() => {
              setActiveItem('projects');
              scrollTo('projects');
            }}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-150 cursor-pointer active:scale-95 active:bg-blue-600 active:text-white ${
              activeItem === 'projects'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-[#0C0C0C] hover:bg-black/5 hover:text-blue-600'
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => {
              setActiveItem('contact');
              onOpenContact();
            }}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-150 cursor-pointer active:scale-95 active:bg-blue-600 active:text-white ${
              activeItem === 'contact'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-[#0C0C0C] hover:bg-black/5 hover:text-blue-600'
            }`}
          >
            Contact
          </button>

          {/* Join our app VIREX in Navbar */}
          <a
            href="https://ai.studio/apps/550f42e4-67d0-4a6d-a502"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setActiveItem('virex')}
            className={`inline-flex items-center gap-1 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer active:scale-95 active:bg-blue-600 active:text-white ${
              activeItem === 'virex'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white'
            }`}
          >
            <span>VIREX</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Join our app VIREX Announcement Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <a
            href="https://ai.studio/apps/550f42e4-67d0-4a6d-a502"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 transition-all text-xs text-[#D7E2EA] hover:text-white cursor-pointer"
          >
            <span className="font-semibold text-blue-400">Join our app</span>
            <span className="font-black uppercase tracking-wider text-white">VIREX</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </motion.nav>

      {/* 2. Hero Heading */}
      <div className="w-full overflow-hidden flex items-center justify-center my-auto z-10 px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full text-center"
        >
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[12vw] sm:text-[13vw] md:text-[14.5vw] lg:text-[15.5vw] mt-6 sm:mt-4 md:-mt-5 select-none pointer-events-none">
            hi, i am ismail
          </h1>
        </motion.div>
      </div>

      {/* Optional Hero Portrait (User requested: "Remove the picture", so default false) */}
      {showPortrait && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none"
        >
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
            alt="Jack 3D Creator"
            className="w-full h-auto object-contain pointer-events-auto"
          />
        </motion.div>
      )}

      {/* 3. Bottom Bar */}
      <div className="w-full flex items-end justify-between px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20">
        {/* Left paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          a 3d creator driven by crafting striking and unforgettable projects
        </motion.p>

        {/* Right Contact Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ContactButton onClick={onOpenContact} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
