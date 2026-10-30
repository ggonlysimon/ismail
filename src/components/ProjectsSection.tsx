import React from 'react';
import FadeIn from './FadeIn';
import ProjectCard from './ProjectCard';
import { ProjectData } from './ProjectPreviewModal';

const projectsList: ProjectData[] = [
  {
    id: 'project-01',
    number: '01',
    title: 'Nextlevel Studio',
    category: 'Client',
    tagline: 'Futuristic spatial branding & real-time environmental experience',
    description:
      'Complete 3D spatial branding and interactive web design for Nextlevel Studio. Sculpted procedural lighting setups, photorealistic metallic assets, and fluid motion transitions.',
    tools: ['Blender 4.2', 'Octane Render', 'Substance Painter', 'Three.js'],
    client: 'Nextlevel Studios Ltd.',
    year: '2026',
    images: {
      col1Top:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      col1Bottom:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      col2:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    },
  },
  {
    id: 'project-02',
    number: '02',
    title: 'Aura Brand Identity',
    category: 'Personal',
    tagline: 'Sculptural chrome typography & organic volumetric physics',
    description:
      'Personal visual exploration focused on iridescent textures, fluid liquid chrome physics, and oversized dimensional typography set in dark cosmic space.',
    tools: ['Cinema 4D', 'Redshift', 'Houdini', 'After Effects'],
    client: 'Self-Initiated Concept',
    year: '2026',
    images: {
      col1Top:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      col1Bottom:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      col2:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    },
  },
  {
    id: 'project-03',
    number: '03',
    title: 'Solaris Digital',
    category: 'Client',
    tagline: 'High-performance solar technology hardware visualizations',
    description:
      'Hard-surface industrial 3D product visualization for Solaris Digital solar systems. Created precision cross-sections, cinematic lighting sequences, and product showreels.',
    tools: ['Unreal Engine 5', 'Blender', 'Fusion 360', 'DaVinci Resolve'],
    client: 'Solaris Energy Group',
    year: '2026',
    images: {
      col1Top:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      col1Bottom:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      col2:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    },
  },
];

interface ProjectsSectionProps {
  onSelectProject: (p: ProjectData) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  return (
    <section
      id="projects"
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-4 sm:px-6 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading: "Project" (singular) */}
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-16 sm:mb-20 md:mb-28">
            <h2
              className="hero-heading font-black uppercase text-center leading-none tracking-tight select-none"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              Project
            </h2>
          </div>
        </FadeIn>

        {/* 3 Sticky-Stacking Project Cards */}
        <div className="relative">
          {projectsList.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={projectsList.length}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
