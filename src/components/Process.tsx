import React from 'react';
import { Compass, PenTool, Code, Rocket } from 'lucide-react';
import { processSteps } from '../data/portfolioData.ts';
import { ScrollReveal } from './ScrollReveal.tsx';

export const Process: React.FC = () => {
  const getStepIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Compass className="w-5 h-5" />;
      case '02':
        return <PenTool className="w-5 h-5" />;
      case '03':
        return <Code className="w-5 h-5" />;
      case '04':
        return <Rocket className="w-5 h-5" />;
      default:
        return <Compass className="w-5 h-5" />;
    }
  };

  return (
    <section className="section" id="process">
      <div className="container">
        <ScrollReveal direction="up" distance={20}>
          <div className="section-title">
            <p>WORKFLOW</p>
            <h2>
              DEVELOPMENT <span>PROCESS</span>
            </h2>
            <p className="section-subtitle-text">
              A transparent 4-stage process designed to bring your digital vision to life smoothly and efficiently.
            </p>
          </div>
        </ScrollReveal>

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <ScrollReveal
              key={step.number}
              direction="up"
              delay={100 + index * 90}
              distance={24}
              className="h-full"
            >
              <div 
                className="process-card group h-full flex flex-col justify-start hover:-translate-y-1.5 transition-all duration-300" 
                id={`process-step-${step.number}`}
              >
                <span className="process-num group-hover:text-[#16C7C2] transition-colors">{step.number}</span>

                <div className="process-icon-box group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(22,199,194,0.35)] transition-all duration-300">
                  {getStepIcon(step.number)}
                </div>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
