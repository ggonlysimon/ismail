import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Char: React.FC<CharProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block whitespace-pre">
      <span className="opacity-0 select-none" aria-hidden="true">
        {char === ' ' ? '\u00A0' : char}
      </span>
      <motion.span
        style={{ opacity }}
        className="absolute inset-0 select-text"
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split('');
  const total = characters.length;

  return (
    <p
      ref={containerRef}
      className={`relative ${className}`}
      aria-label={text}
    >
      {characters.map((char, index) => {
        // Calculate each character's responsive scroll window
        const start = index / total;
        const end = Math.min(1, start + (1 / total) * 1.5);
        return (
          <Char
            key={index}
            char={char}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
};

export default AnimatedText;
