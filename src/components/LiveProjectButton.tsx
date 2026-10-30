import React from 'react';
import { motion } from 'framer-motion';

interface LiveProjectButtonProps {
  onClick?: () => void;
  className?: string;
  label?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  onClick,
  className = '',
  label = 'Live Project',
}) => {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest cursor-pointer select-none transition-colors duration-200 px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 shrink-0 ${className}`}
    >
      <span>{label}</span>
    </motion.button>
  );
};

export default LiveProjectButton;
