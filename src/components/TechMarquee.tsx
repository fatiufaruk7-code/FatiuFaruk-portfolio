import React from 'react';
import { marqueeTechList } from '../data/portfolioData.ts';

export const TechMarquee: React.FC = () => {
  // Duplicate list to achieve seamless infinite loop
  const duplicatedList = [...marqueeTechList, ...marqueeTechList, ...marqueeTechList];

  return (
    <div className="w-full max-w-full py-5 overflow-hidden relative border-y border-[#193438] bg-[#0A1719]/80 backdrop-blur-md" id="tech-marquee">
      {/* Gradient masks for soft fade at left and right edges */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#061012] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#061012] to-transparent z-10 pointer-events-none" />

      <div className="marquee-track flex items-center gap-3 sm:gap-5 whitespace-nowrap hover:[animation-play-state:paused]">
        {duplicatedList.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-[#0D1C1F] border border-[#193438] hover:border-[#16C7C2]/50 hover:bg-[#0A1719] transition-colors shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#16C7C2] to-[#62E7E1]" />
            <span className="text-xs sm:text-sm font-bold text-[#F4FFFF] tracking-wide">
              {tech.name}
            </span>
            <span className="text-[10px] font-mono text-[#16C7C2] bg-[#16C7C2]/10 px-1.5 py-0.5 rounded border border-[#16C7C2]/20">
              {tech.symbol}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
