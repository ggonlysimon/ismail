import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles } from 'lucide-react';

export interface ProjectData {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  tools: string[];
  client: string;
  year: string;
  liveUrl?: string;
  images: {
    col1Top: string;
    col1Bottom: string;
    col2: string;
  };
}

interface ProjectPreviewModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectPreviewModal: React.FC<ProjectPreviewModalProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-lg"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 30 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full max-w-5xl bg-[#121214] border border-[#27272A] rounded-3xl p-5 sm:p-8 md:p-10 text-[#D7E2EA] shadow-2xl z-10 max-h-[92vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="sticky top-0 float-right z-20 p-2.5 rounded-full bg-[#1C1C20] hover:bg-white/20 text-[#D7E2EA] transition-colors cursor-pointer"
            aria-label="Close project preview"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="clear-both pt-1">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#BBCCD7]">
              <span className="font-bold text-[#B600A8]">Project {project.number}</span>
              <span>·</span>
              <span>{project.category}</span>
              <span>·</span>
              <span>{project.year}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mt-2">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-[#D7E2EA]/80 mt-2 max-w-2xl leading-relaxed">
              {project.description}
            </p>

            {/* Tools & Details */}
            <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-white/10 text-xs">
              <span className="text-[#D7E2EA]/60 uppercase tracking-wider font-medium">Tools & Pipeline:</span>
              {project.tools.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* High-Resolution Media Showcase */}
          <div className="mt-8 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#BBCCD7] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
              Render Artifacts & Visual Case Study
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-7 space-y-4">
                <div className="relative rounded-2xl overflow-hidden bg-black/40 border border-white/10">
                  <img
                    src={project.images.col1Top}
                    alt={`${project.title} detail view 1`}
                    className="w-full h-auto object-cover max-h-[360px]"
                    loading="lazy"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden bg-black/40 border border-white/10">
                  <img
                    src={project.images.col1Bottom}
                    alt={`${project.title} detail view 2`}
                    className="w-full h-auto object-cover max-h-[360px]"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="relative rounded-2xl overflow-hidden bg-black/40 border border-white/10 h-full">
                  <img
                    src={project.images.col2}
                    alt={`${project.title} primary visual showcase`}
                    className="w-full h-full object-cover min-h-[320px] max-h-[736px]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-[#D7E2EA]/60">
              Client: <span className="text-white font-medium">{project.client}</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={project.images.col2}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-xs font-medium uppercase tracking-wider text-white transition-colors cursor-pointer"
              >
                <span>View Full Size</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-white/90 transition-colors cursor-pointer"
              >
                Close Showcase
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectPreviewModal;
