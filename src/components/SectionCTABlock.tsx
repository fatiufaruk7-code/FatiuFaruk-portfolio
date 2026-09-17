import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { scrollToSection } from '../utils/navigation.ts';
import { ScrollReveal } from './ScrollReveal.tsx';

interface SectionCTABlockProps {
  title: string;
  description: string;
  buttonText?: string;
  badge?: string;
  variant?: 'subtle' | 'glow';
}

export const SectionCTABlock: React.FC<SectionCTABlockProps> = ({
  title,
  description,
  buttonText = "START A PROJECT",
  badge = "LET'S COLLABORATE",
  variant = 'subtle'
}) => {
  return (
    <div className="container py-8">
      <ScrollReveal direction="up" distance={20}>
        <div 
          className={`relative rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border overflow-hidden transition-all duration-300 ${
            variant === 'glow'
              ? 'bg-gradient-to-r from-[#0D1C1F] via-[#0A1E22] to-[#0D1C1F] border-[#16C7C2]/30 shadow-[0_10px_35px_rgba(22,199,194,0.15)]'
              : 'bg-[#0D1C1F]/90 backdrop-blur-sm border-[#193438] hover:border-[#16C7C2]/40'
          }`}
        >
          {/* Ambient accent light */}
          <div 
            className="absolute -right-20 -top-20 w-48 h-48 bg-[#16C7C2]/10 rounded-full blur-2xl pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="relative z-10 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-widest text-[#16C7C2] uppercase px-2.5 py-0.5 rounded-full bg-[#16C7C2]/10 border border-[#16C7C2]/20 mb-2.5">
              <Sparkles className="w-3 h-3 text-[#16C7C2]" />
              <span>{badge}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#F4FFFF] tracking-tight">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-[#8FA5A5] mt-1 max-w-xl">
              {description}
            </p>
          </div>

          <div className="relative z-10 w-full sm:w-auto shrink-0">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="btn btn-primary w-full sm:w-auto justify-center text-xs font-bold py-2.5 px-5 group min-h-[44px]"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};
