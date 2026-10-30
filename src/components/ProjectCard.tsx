import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LiveProjectButton from './LiveProjectButton';
import { ProjectData } from './ProjectPreviewModal';

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
  onSelectProject: (p: ProjectData) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  onSelectProject,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="relative h-[85vh] min-h-[680px] sm:min-h-[760px] flex items-start justify-center"
      style={{
        // Give enough scroll clearance for each card
        marginBottom: index === totalCards - 1 ? '0' : '4vh',
      }}
    >
      <motion.div
        style={{
          scale,
          top: `calc(5rem + ${index * 28}px)`,
        }}
        className="sticky w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 shadow-2xl flex flex-col justify-between gap-6"
      >
        {/* Top Row: Number, category label, project name, and "Live Project" ghost button */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D7E2EA]/15 pb-4 sm:pb-6">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            {/* Number */}
            <span
              className="font-black text-[#D7E2EA] leading-none select-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              {project.number}
            </span>

            {/* Category + Title */}
            <div className="flex flex-col">
              <span className="font-light uppercase tracking-widest text-xs sm:text-sm text-[#D7E2EA]/60">
                {project.category}
              </span>
              <h3 className="font-bold uppercase text-lg sm:text-2xl md:text-3xl lg:text-4xl text-[#D7E2EA] tracking-tight leading-tight">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Ghost button */}
          <LiveProjectButton onClick={() => onSelectProject(project)} />
        </div>

        {/* Bottom Row: Two-column image grid */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-3 sm:gap-4 md:gap-5 w-full items-stretch">
          {/* Left Column (40% width -> 4 cols out of 10) */}
          <div className="md:col-span-4 flex flex-col gap-3 sm:gap-4 md:gap-5">
            {/* Left Top Image */}
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#18181B] border border-white/5 cursor-pointer group"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
              onClick={() => onSelectProject(project)}
            >
              <img
                src={project.images.col1Top}
                alt={`${project.title} detail artifact`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Left Bottom Image */}
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#18181B] border border-white/5 cursor-pointer group"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
              onClick={() => onSelectProject(project)}
            >
              <img
                src={project.images.col1Bottom}
                alt={`${project.title} secondary artifact`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column (60% width -> 6 cols out of 10): 1 tall image */}
          <div
            className="md:col-span-6 w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#18181B] border border-white/5 cursor-pointer group h-[300px] sm:h-[400px] md:h-full min-h-[300px] md:min-h-0"
            onClick={() => onSelectProject(project)}
          >
            <img
              src={project.images.col2}
              alt={`${project.title} hero showcase`}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
