/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import ProjectPreviewModal, { ProjectData } from './components/ProjectPreviewModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <div
      className="min-h-screen w-full bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit'] selection:bg-[#7621B0] selection:text-white"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. Hero Section (Hero portrait picture removed per user command) */}
      <HeroSection
        onOpenContact={() => setIsContactOpen(true)}
        showPortrait={false}
      />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection onOpenContact={() => setIsContactOpen(true)} />

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Projects Section */}
      <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />

      {/* 6. Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Interactive Contact Inquiries Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Interactive Project Lightbox & Case Study Modal */}
      <ProjectPreviewModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
