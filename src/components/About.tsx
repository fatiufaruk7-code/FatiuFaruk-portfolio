import React from 'react';
import { Code2, GraduationCap, Palette, Lightbulb, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { aboutCards, aboutWorkspaceImage } from '../data/portfolioData.ts';
import { scrollToSection } from '../utils/navigation.ts';
import { ScrollReveal } from './ScrollReveal.tsx';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code2 className="w-5 h-5" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" />;
      case 'Palette':
        return <Palette className="w-5 h-5" />;
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5" />;
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  const keyPillars = [
    "Fast, responsive websites that look great on any screen",
    "Clean, modern design tailored to your brand identity",
    "Reliable frontend development with React, HTML5 & CSS3",
    "Clear communication, transparent timelines & reliable delivery"
  ];

  return (
    <section className="section bg-[#0A1719]" id="about">
      <div className="container">
        <ScrollReveal direction="up" distance={20}>
          <div className="section-title">
            <p>GET TO KNOW ME</p>
            <h2>
              ABOUT <span>CLARITY CREATIVE</span>
            </h2>
            <p className="section-subtitle-text">
              Passionate about building modern, responsive, and user-friendly websites.
            </p>
          </div>
        </ScrollReveal>

        <div className="about-grid items-start">
          {/* Left: Client-focused Biography and Philosophy */}
          <ScrollReveal direction="up" delay={150} distance={24} className="h-full">
            <div className="about-content">
              <h3>
                Helping businesses, organizations, and individuals establish a strong digital presence.
              </h3>
              <p>
                At Clarity Creative, every website is built with intention. I design and develop clean, fast, and responsive digital experiences that not only look modern, but also communicate clearly and drive real engagement.
              </p>
              <p>
                Combining a rigorous Computer Science background with modern frontend tools, I create websites that load swiftly, work seamlessly on smartphones and desktops alike, and provide visitors with an intuitive, memorable journey.
              </p>

              <div className="space-y-3 mb-8">
                {keyPillars.map((pillar, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-[#F4FFFF] transition-transform duration-200 hover:translate-x-1">
                    <CheckCircle2 className="w-4 h-4 text-[#16C7C2] flex-shrink-0" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>

              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="btn btn-primary inline-flex group"
              >
                <span>LET&apos;S WORK TOGETHER</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </ScrollReveal>

          {/* Right: Studio Workspace Image Showcase & Core Competencies Grid */}
          <div className="space-y-6">
            <ScrollReveal direction="up" delay={160} distance={24}>
              <div className="relative rounded-2xl overflow-hidden border border-[#193438] group bg-[#0D1C1F] shadow-xl hover:border-[#16C7C2]/50 transition-all duration-300">
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={aboutWorkspaceImage}
                    alt="Clarity Creative development studio workspace"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1719] via-[#0A1719]/40 to-transparent" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#0A1719]/90 border border-[#16C7C2]/40 text-[#16C7C2] shadow-sm backdrop-blur-md">
                      <Sparkles className="w-3.5 h-3.5 text-[#16C7C2]" />
                      CREATIVE STUDIO
                    </span>
                  </div>

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-3 sm:right-4 z-10">
                    <p className="text-xs sm:text-sm font-bold text-[#F4FFFF]">
                      Where clean architecture meets purposeful visual design.
                    </p>
                    <p className="text-[11px] text-[#8FA5A5] mt-0.5">
                      Fast, responsive & custom-engineered solutions for clients worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Core Competencies Grid with Staggered Reveal */}
            <div className="about-cards-grid">
              {aboutCards.map((card, index) => (
                <ScrollReveal 
                  key={index} 
                  direction="up" 
                  delay={200 + index * 80} 
                  distance={20}
                >
                  <div className="about-card group" id={`about-card-${index}`}>
                    <div className="about-card-icon group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(22,199,194,0.4)] transition-all duration-300">
                      {getIcon(card.icon)}
                    </div>
                    <h4>{card.title}</h4>
                    <p>{card.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
