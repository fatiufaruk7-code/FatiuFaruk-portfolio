import React, { useEffect, useState, useRef } from 'react';

export const HeroAtmosphere: React.FC = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number; color: string }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate particles once on client
    const colors = ['#16C7C2', '#62E7E1', '#0D9488', '#2DD4BF'];
    const p = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 1,
      duration: Math.random() * 14 + 16, // 16s - 30s slow float
      delay: Math.random() * 5,
      color: colors[i % colors.length],
    }));
    setParticles(p);

    // Mouse parallax for desktop
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;

    if (prefersReducedMotion || isTouch) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      // Max 14px subtle parallax
      targetX = ((e.clientX - centerX) / centerX) * 14;
      targetY = ((e.clientY - centerY) / centerY) * 14;
    };

    const updateParallax = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      setOffset({ x: currentX, y: currentY });
      animId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animId = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0" 
      aria-hidden="true"
    >
      {/* Slow-moving gradient blobs with parallax */}
      <div 
        className="absolute -top-16 sm:-top-32 -left-16 sm:-left-32 w-[320px] sm:w-[550px] h-[320px] sm:h-[550px] rounded-full bg-gradient-to-tr from-[#16C7C2]/15 via-[#62E7E1]/08 to-transparent blur-[60px] sm:blur-[110px] will-change-transform animate-[blob-float-1_26s_ease-in-out_infinite]"
        style={{
          transform: `translate3d(${offset.x * 1.2}px, ${offset.y * 1.2}px, 0)`,
        }}
      />
      <div 
        className="absolute top-1/4 -right-16 sm:-right-24 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-gradient-to-bl from-[#62E7E1]/12 via-[#16C7C2]/08 to-transparent blur-[60px] sm:blur-[120px] will-change-transform animate-[blob-float-2_28s_ease-in-out_infinite]"
        style={{
          transform: `translate3d(${-offset.x * 1.1}px, ${-offset.y * 1.1}px, 0)`,
        }}
      />
      <div 
        className="absolute bottom-[-50px] sm:bottom-[-100px] left-1/4 sm:left-1/3 w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] rounded-full bg-gradient-to-t from-[#16C7C2]/06 via-[#0D1C1F]/50 to-transparent blur-[60px] sm:blur-[130px] will-change-transform animate-[blob-float-3_30s_ease-in-out_infinite]"
        style={{
          transform: `translate3d(${offset.x * 0.7}px, ${offset.y * 0.7}px, 0)`,
        }}
      />

      {/* Subtle Digital Grid / Lines */}
      <div 
        className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#16C7C2_1px,transparent_1px),linear-gradient(to_bottom,#16C7C2_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] will-change-transform"
        style={{
          transform: `translate3d(${offset.x * 0.4}px, ${offset.y * 0.4}px, 0)`,
        }}
      />

      {/* Floating Glowing Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full opacity-20 will-change-transform animate-float-particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* Tiny Occasional Light Pulses */}
      <div 
        className="absolute top-[22%] left-[18%] w-1.5 h-1.5 rounded-full bg-[#16C7C2] opacity-35 animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]" 
      />
      <div 
        className="absolute top-[65%] right-[22%] w-1.5 h-1.5 rounded-full bg-[#62E7E1] opacity-30 animate-[pulse_5s_cubic-bezier(0.4,0,0.6,1)_infinite_1.5s]" 
      />
      <div 
        className="absolute bottom-[28%] left-[45%] w-1 h-1 rounded-full bg-[#16C7C2] opacity-25 animate-[pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite_2.5s]" 
      />
    </div>
  );
};
