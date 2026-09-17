import React, { useState } from 'react';
import { 
  Code2, 
  Palette, 
  FileCode, 
  Atom, 
  Smartphone, 
  GitBranch, 
  Layers, 
  Rocket, 
  Server 
} from 'lucide-react';
import { skillsData } from '../data/portfolioData.ts';
import { ScrollReveal } from './ScrollReveal.tsx';

export const Skills: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'tools' | 'backend'>('all');

  const getSkillIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#16C7C2]" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#62E7E1]" />;
      case 'FileCode':
        return <FileCode className="w-5 h-5 text-[#16C7C2]" />;
      case 'Atom':
        return <Atom className="w-5 h-5 text-[#62E7E1]" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-[#16C7C2]" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-[#62E7E1]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#16C7C2]" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-[#F4FFFF]" />;
      case 'Server':
        return <Server className="w-5 h-5 text-[#62E7E1]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#16C7C2]" />;
    }
  };

  const filteredSkills = filter === 'all' 
    ? skillsData 
    : skillsData.filter((s) => s.category === filter);

  return (
    <section className="section bg-[#061012]" id="skills">
      <div className="container">
        <ScrollReveal direction="up" distance={20}>
          <div className="section-title">
            <p>TECHNICAL PROFICIENCY</p>
            <h2>
              CORE <span>TECH STACK</span>
            </h2>
            <p className="section-subtitle-text">
              Modern technologies and development tools I leverage to engineer responsive, robust web solutions.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Chips */}
        <ScrollReveal direction="up" delay={120} distance={15}>
          <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
            {(['all', 'frontend', 'tools', 'backend'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  filter === tab
                    ? 'bg-gradient-to-r from-[#16C7C2] to-[#62E7E1] text-[#061012] shadow-lg shadow-[#16C7C2]/20'
                    : 'bg-[#0D1C1F] text-[#8FA5A5] hover:text-[#F4FFFF] border border-[#193438] hover:border-[#16C7C2]/50'
                }`}
              >
                {tab === 'all' ? 'All Technologies' : tab}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, index) => (
            <ScrollReveal
              key={skill.id}
              direction="up"
              delay={140 + index * 60}
              distance={22}
              className="h-full"
            >
              <div
                className="p-5 rounded-2xl bg-[#0D1C1F] border border-[#193438] hover:border-[#16C7C2]/50 transition-all duration-300 hover:bg-[#112428] hover:-translate-y-1 group h-full flex flex-col justify-between"
                id={`skill-${skill.id}`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#0A1719] border border-[#193438] flex items-center justify-center group-hover:scale-108 transition-transform duration-300">
                        {getSkillIcon(skill.lucideIconName)}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-[#F4FFFF] group-hover:text-[#62E7E1] transition-colors">
                          {skill.name}
                        </h3>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#8FA5A5]">
                          {skill.category}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#16C7C2]">
                      {skill.level}%
                    </span>
                  </div>

                  <p className="text-xs text-[#8FA5A5] leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-[#0A1719] rounded-full overflow-hidden border border-[#193438] mt-auto">
                  <div
                    className="h-full bg-gradient-to-r from-[#16C7C2] to-[#62E7E1] rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
