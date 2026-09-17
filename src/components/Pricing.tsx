import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { pricingPackagesData } from '../data/portfolioData.ts';
import { triggerContactWithContext } from '../utils/navigation.ts';
import { ScrollReveal } from './ScrollReveal.tsx';

export const Pricing: React.FC = () => {
  const handleSelectPackage = (pkgName: string, price: string) => {
    let projectCategory = 'Business Website';
    if (pkgName.toLowerCase().includes('starter')) projectCategory = 'Personal Portfolio';
    else if (pkgName.toLowerCase().includes('custom')) projectCategory = 'Custom Project';
    
    triggerContactWithContext(
      projectCategory,
      `Hello, I would like to get started with the ${pkgName} package (${price}).`
    );
  };

  return (
    <section className="section bg-[#0A1719]" id="pricing">
      <div className="container">
        <ScrollReveal direction="up" distance={20}>
          <div className="section-title">
            <p>TRANSPARENT VALUE</p>
            <h2>
              SIMPLE OPTIONS. <span>CUSTOM SOLUTIONS.</span>
            </h2>
            <p className="section-subtitle-text">
              Clear rates with zero hidden surprises. Choose an option below or request a custom quote for your specific needs.
            </p>
          </div>
        </ScrollReveal>

        <div className="pricing-grid">
          {pricingPackagesData.map((pkg, index) => (
            <ScrollReveal
              key={pkg.id}
              direction="up"
              delay={100 + index * 100}
              distance={24}
              className="h-full"
            >
              <div
                className={`pricing-card group h-full flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 ${
                  pkg.popular ? 'featured-card relative shadow-[0_0_30px_rgba(22,199,194,0.25)]' : ''
                }`}
                id={`pricing-${pkg.id}`}
              >
                {pkg.popular && (
                  <span className="pricing-badge animate-pulse" style={{ animationDuration: '3s' }}>
                    RECOMMENDED
                  </span>
                )}

                <div>
                  <div className="pricing-header">
                    <h3 className="pricing-name">{pkg.name}</h3>
                    <div className="pricing-price">{pkg.price}</div>
                    <p className="pricing-best-for">{pkg.bestFor}</p>
                  </div>

                  <ul className="pricing-features">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="pricing-feature">
                        <Check className="feature-check w-4 h-4 text-[#16C7C2] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSelectPackage(pkg.name, pkg.price);
                  }}
                  className={`btn ${pkg.popular ? 'btn-primary' : 'btn-secondary'} w-full mt-6 cursor-pointer group/btn`}
                  id={`choose-plan-${pkg.id}`}
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Note */}
        <ScrollReveal direction="up" delay={200} distance={15}>
          <div className="mt-12 text-center text-xs text-[#8FA5A5]">
            <p>
              Have special requirements, complex API integrations or tight deadlines?{' '}
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  triggerContactWithContext('Custom Project', 'Hello, I have custom project requirements and would like to request a tailored quote.');
                }}
                className="text-[#16C7C2] hover:underline font-bold cursor-pointer"
              >
                Contact me directly for a custom quote.
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
