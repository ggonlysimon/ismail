import React, { useRef, useState, useEffect } from 'react';

const row1Gifs = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
];

const row2Gifs = [
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

// Tripled lists for seamless scrolling
const tripledRow1 = [...row1Gifs, ...row1Gifs, ...row1Gifs];
const tripledRow2 = [...row2Gifs, ...row2Gifs, ...row2Gifs];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const sectionTop = sectionRef.current.offsetTop;
            const currentOffset =
              (window.scrollY - sectionTop + window.innerHeight) * 0.3;
            setScrollOffset(currentOffset);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden select-none"
    >
      <div className="flex flex-col gap-3 w-full">
        {/* Row 1: moves RIGHT on scroll: translateX(offset - 200) */}
        <div className="overflow-hidden w-full">
          <div
            className="flex gap-3 will-change-transform"
            style={{
              transform: `translateX(${scrollOffset - 200}px)`,
              willChange: 'transform',
            }}
          >
            {tripledRow1.map((url, idx) => (
              <div
                key={`row1-${idx}`}
                className="w-[420px] h-[270px] min-w-[420px] rounded-2xl overflow-hidden bg-[#18181B] border border-white/5 shrink-0 shadow-lg"
              >
                <img
                  src={url}
                  alt={`Motion work showcase ${idx + 1}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    // Fallback to stylized dark frame if network blocks gif
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.classList.add(
                        'flex',
                        'items-center',
                        'justify-center',
                        'bg-gradient-to-br',
                        'from-[#141416]',
                        'to-[#222228]'
                      );
                      const label = document.createElement('span');
                      label.className =
                        'text-xs font-mono uppercase tracking-widest text-[#BBCCD7]/60';
                      label.innerText = `3D Reel #${(idx % 11) + 1}`;
                      target.parentElement.appendChild(label);
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: moves LEFT on scroll: translateX(-(offset - 200)) */}
        <div className="overflow-hidden w-full">
          <div
            className="flex gap-3 will-change-transform"
            style={{
              transform: `translateX(-${scrollOffset - 200}px)`,
              willChange: 'transform',
            }}
          >
            {tripledRow2.map((url, idx) => (
              <div
                key={`row2-${idx}`}
                className="w-[420px] h-[270px] min-w-[420px] rounded-2xl overflow-hidden bg-[#18181B] border border-white/5 shrink-0 shadow-lg"
              >
                <img
                  src={url}
                  alt={`Motion concept showcase ${idx + 1}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.classList.add(
                        'flex',
                        'items-center',
                        'justify-center',
                        'bg-gradient-to-br',
                        'from-[#18181A]',
                        'to-[#26262E]'
                      );
                      const label = document.createElement('span');
                      label.className =
                        'text-xs font-mono uppercase tracking-widest text-[#BBCCD7]/60';
                      label.innerText = `Motion Concept #${(idx % 10) + 1}`;
                      target.parentElement.appendChild(label);
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
