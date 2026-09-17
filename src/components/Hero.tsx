import React, { useState } from 'react';
import { ArrowRight, Sparkles, Copy, Check, Terminal, ExternalLink } from 'lucide-react';
import { personalInfo, codeSnippetString } from '../data/portfolioData.ts';
import { scrollToSection } from '../utils/navigation.ts';
import { HeroAtmosphere } from './HeroAtmosphere.tsx';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippetString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const techBadges = ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'GitHub'];

  return (
    <section className="hero-section relative overflow-hidden" id="home">
      {/* Dynamic Digital Atmosphere Background */}
      <HeroAtmosphere />

      {/* Background ambient lighting */}
      <div className="mesh-1" aria-hidden="true" />
      <div className="mesh-2" aria-hidden="true" />

      <div className="container relative z-10">
        <div className="hero-grid">
          {/* Left Column: Headline & Value Proposition with Staggered Entrance */}
          <div className="hero-text-content">
            {/* Small Label with Status Dot */}
            <div 
              className="status-badge hero-anim-item" 
              id="hero-badge"
              style={{ animationDelay: '180ms' }}
            >
              <span className="status-dot shrink-0" />
              <span className="break-words leading-tight">{personalInfo.supportingTitle}</span>
            </div>

            {/* Main Headline with Smooth Line Reveal */}
            <h1 className="hero-title">
              <span className="block pb-1">
                <span 
                  className="hero-anim-item inline-block max-w-full"
                  style={{ animationDelay: '320ms' }}
                >
                  BUILDING MODERN WEBSITES
                </span>
              </span>
              <span className="block pb-1">
                <span 
                  className="hero-anim-item inline-block max-w-full bg-gradient-to-r from-[#16C7C2] via-[#62E7E1] to-[#16C7C2] bg-clip-text text-transparent"
                  style={{ animationDelay: '460ms' }}
                >
                  THAT GET YOU NOTICED.
                </span>
              </span>
            </h1>

            {/* Supporting Tagline / Subtitle */}
            <div className="max-w-full">
              <p 
                className="hero-subtitle hero-anim-item"
                style={{ animationDelay: '600ms' }}
              >
                {personalInfo.shortDescription}
              </p>
            </div>

            {/* CTA Buttons with Stagger */}
            <div className="hero-cta">
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="btn btn-primary hero-anim-item" 
                id="hero-cta-contact"
                style={{ animationDelay: '740ms' }}
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a 
                href="#projects" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
                className="btn btn-secondary hero-anim-item" 
                id="hero-cta-projects"
                style={{ animationDelay: '840ms' }}
              >
                <span>VIEW MY WORK</span>
                <ExternalLink className="w-4 h-4 text-[#16C7C2] transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Technology Badges Appearing Afterward */}
            <div className="hero-tech-badges">
              <span 
                className="hero-tech-label hero-anim-item"
                style={{ animationDelay: '940ms' }}
              >
                CORE STACK:
              </span>
              <div className="hero-tech-list">
                {techBadges.map((tech, index) => (
                  <span 
                    key={tech} 
                    className="hero-tech-pill hero-anim-badge"
                    style={{ animationDelay: `${1020 + index * 70}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual - Futuristic Code Terminal Card */}
          <div className="hero-visual w-full min-w-0 max-w-full overflow-hidden">
            <div 
              className="hero-card hero-anim-terminal" 
              id="hero-code-terminal"
              style={{ animationDelay: '480ms' }}
            >
              <div className="card-header">
                <div className="window-dots">
                  <span className="window-dot dot-red" />
                  <span className="window-dot dot-yellow" />
                  <span className="window-dot dot-green" />
                </div>
                <span className="file-name">clarity-creative.ts</span>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="p-1.5 rounded-md hover:bg-white/10 text-[#8FA5A5] hover:text-white transition-colors cursor-pointer"
                  title="Copy code snippet"
                  aria-label="Copy code snippet"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="code-area">
                <pre className="text-xs sm:text-sm leading-relaxed overflow-x-auto text-[#F4FFFF] max-w-full">
                  <code>
                    <span className="syntax-p">const</span> <span className="syntax-b">developer</span> = &#123;{'\n'}
                    {'  '}brand: <span className="text-[#62E7E1]">&quot;Clarity Creative&quot;</span>,{'\n'}
                    {'  '}role: <span className="text-[#62E7E1]">&quot;Web Developer • Digital Creative&quot;</span>,{'\n'}
                    {'  '}tagline: <span className="text-[#62E7E1]">&quot;Modern Websites. Clear Solutions.&quot;</span>,{'\n'}
                    {'  '}stack: [<span className="text-[#16C7C2]">&quot;HTML&quot;</span>, <span className="text-[#16C7C2]">&quot;CSS&quot;</span>, <span className="text-[#16C7C2]">&quot;JavaScript&quot;</span>, <span className="text-[#16C7C2]">&quot;React&quot;</span>, <span className="text-[#16C7C2]">&quot;Git&quot;</span>, <span className="text-[#16C7C2]">&quot;GitHub&quot;</span>],{'\n'}
                    {'  '}status: <span className="text-[#16C7C2]">&quot;Available for projects&quot;</span>{'\n'}
                    &#125;;{'\n\n'}
                    <span className="syntax-p">function</span> <span className="syntax-y">craftWebsite</span>(project) &#123;{'\n'}
                    {'  '}<span className="syntax-p">return</span> &#123;{'\n'}
                    {'    '}performance: <span className="text-[#62E7E1]">&quot;Fast, Responsive &amp; Mobile-First&quot;</span>,{'\n'}
                    {'    '}design: <span className="text-[#16C7C2]">&quot;Modern, Clean &amp; Engaging&quot;</span>,{'\n'}
                    {'    '}solution: <span className="text-[#62E7E1]">&quot;Clear Solutions That Get You Noticed&quot;</span>{'\n'}
                    {'  '}&#125;;{'\n'}
                    &#125;;
                  </code>
                </pre>
              </div>

              {/* Terminal footer status */}
              <div className="px-5 py-3 bg-[#0A1719] border-t border-[#193438] flex items-center justify-between text-[11px] text-[#8FA5A5]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#16C7C2]" />
                  <span>TypeScript 5.0 • Ready</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#16C7C2]">
                  <Sparkles className="w-3 h-3" />
                  <span>All tests passing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
