import React from 'react';
import { 
  Briefcase, 
  User, 
  Target, 
  GraduationCap, 
  ShoppingBag, 
  RefreshCw, 
  Rocket, 
  Code,
  ArrowUpRight 
} from 'lucide-react';
import { servicesData } from '../data/portfolioData.ts';
import { triggerContactWithContext } from '../utils/navigation.ts';
import { ScrollReveal } from './ScrollReveal.tsx';

export const Services: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#16C7C2]" />;
      case 'User':
        return <User className="w-6 h-6 text-[#62E7E1]" />;
      case 'Target':
        return <Target className="w-6 h-6 text-[#16C7C2]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#62E7E1]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-[#16C7C2]" />;
      case 'RefreshCw':
        return <RefreshCw className="w-6 h-6 text-[#62E7E1]" />;
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-[#16C7C2]" />;
      default:
        return <Code className="w-6 h-6 text-[#16C7C2]" />;
    }
  };

  return (
    <section className="section" id="services">
      <div className="container">
        <ScrollReveal direction="up" distance={20}>
          <div className="section-title">
            <p>SERVICES &amp; CAPABILITIES</p>
            <h2>
              WHAT I <span>CAN BUILD</span>
            </h2>
            <p className="section-subtitle-text">
              Practical, modern, and reliable web solutions tailored to your unique requirements.
            </p>
          </div>
        </ScrollReveal>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <ScrollReveal
              key={service.id}
              direction="up"
              delay={100 + index * 70}
              distance={24}
              className="h-full"
            >
              <div 
                className="service-card group h-full flex flex-col justify-between" 
                id={`service-${service.id}`}
              >
                <div>
                  <div className="service-icon-box group-hover:scale-108 group-hover:shadow-[0_0_20px_rgba(22,199,194,0.35)] transition-all duration-300">
                    {getServiceIcon(service.iconName)}
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <button
                  type="button"
                  onClick={() => triggerContactWithContext(service.title, `Hi, I am interested in discussing a project for "${service.title}".`)}
                  className="w-full mt-6 pt-4 border-t border-[#193438] flex items-center justify-between text-xs font-bold text-[#16C7C2] group-hover:text-[#F4FFFF] transition-colors cursor-pointer bg-transparent text-left"
                  aria-label={`Inquire about ${service.title}`}
                >
                  <span>Inquire About This</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 text-[#16C7C2] group-hover:text-[#62E7E1]" />
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
