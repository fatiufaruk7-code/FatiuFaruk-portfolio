import React, { useState, useEffect } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    // Safety fallback: maximum 2.2s loading time to guarantee it never freezes
    const safetyTimeout = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 500);
    }, 2200);

    // Smooth progress counter targeting ~1.5 - 1.7 seconds
    const intervalTime = 20;
    const increment = 1.4;
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment + Math.random() * 0.9;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => {
      clearInterval(timer);
      clearTimeout(safetyTimeout);
    };
  }, [onComplete]);

  useEffect(() => {
    if (progress >= 100) {
      // Trigger smooth exit transition after reaching 100%
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
      }, 150);

      const completeTimer = setTimeout(() => {
        onComplete();
      }, 700);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [progress, onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(onComplete, 250);
  };

  return (
    <div
      id="website-preloader"
      role="status"
      aria-live="polite"
      aria-label="Loading Clarity Creative website"
      className={`fixed inset-0 z-[99999] overflow-hidden flex flex-col items-center justify-center bg-[#061012] text-white select-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isExiting
          ? 'opacity-0 pointer-events-none -translate-y-8 filter blur-sm scale-[0.98]'
          : 'opacity-100 translate-y-0 scale-100'
      }`}
    >
      {/* Ambient background glow blobs */}
      <div 
        className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-tr from-[#16C7C2]/15 via-[#62E7E1]/10 to-transparent blur-3xl pointer-events-none animate-pulse"
        style={{ animationDuration: '3s' }}
        aria-hidden="true"
      />
      <div 
        className="absolute w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-gradient-to-bl from-[#62E7E1]/10 via-[#16C7C2]/10 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Floating subtle ambient particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-[#16C7C2] animate-ping" style={{ animationDuration: '2.5s' }} />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-[#62E7E1] animate-ping" style={{ animationDuration: '3.2s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-[#16C7C2] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 rounded-full bg-[#62E7E1] animate-pulse" />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-sm px-4 sm:px-6 text-center">
        {/* Animated Clarity Creative Logo with subtle scale + glow */}
        <div className="relative mb-5 sm:mb-6">
          {/* Breathing aura glow */}
          <div 
            className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-[#16C7C2] via-[#62E7E1] to-[#16C7C2] opacity-35 blur-xl animate-pulse"
            style={{ animationDuration: '2s' }}
            aria-hidden="true"
          />

          {/* Logo container with subtle float/breathing */}
          <div className="relative w-18 h-18 sm:w-22 sm:h-22 rounded-2xl bg-[#0D1C1F]/95 border border-[#16C7C2]/60 p-2 sm:p-2.5 shadow-[0_0_35px_rgba(22,199,194,0.35)] flex items-center justify-center backdrop-blur-xl animate-[pulse_3s_ease-in-out_infinite]">
            <svg 
              viewBox="0 0 100 100" 
              className="w-full h-full transform transition-transform duration-500 hover:scale-105"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="loaderGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#16C7C2" />
                  <stop offset="100%" stopColor="#62E7E1" />
                </linearGradient>
                <linearGradient id="loaderGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#62E7E1" />
                  <stop offset="100%" stopColor="#16C7C2" />
                </linearGradient>
              </defs>

              {/* Geometric orbital accent ring */}
              <circle 
                cx="50" 
                cy="50" 
                r="44" 
                stroke="url(#loaderGrad1)" 
                strokeWidth="1.5" 
                strokeDasharray="4 6" 
                opacity="0.45" 
              />
              
              {/* Outer C Arc */}
              <path 
                d="M 68 28 C 42 16 18 34 20 60 C 22 84 46 90 70 76" 
                stroke="url(#loaderGrad1)" 
                strokeWidth="7" 
                strokeLinecap="round" 
              />

              {/* Inner C / Squared Mark */}
              <path 
                d="M 60 40 C 44 32 34 46 36 60 C 38 72 50 74 62 66" 
                stroke="url(#loaderGrad2)" 
                strokeWidth="5.5" 
                strokeLinecap="round" 
              />

              {/* Geometric precision accent dot with pulse */}
              <circle cx="75" cy="24" r="4.5" fill="#62E7E1" className="animate-pulse" />
            </svg>
          </div>
        </div>

        {/* Brand Name with letter-spacing reveal */}
        <h1 
          className="text-xl sm:text-3xl font-extrabold text-[#F4FFFF] mb-2 flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap transition-all duration-1000 ease-out"
          style={{
            letterSpacing: `${0.04 + (progress / 100) * 0.08}em`,
          }}
        >
          <span>CLARITY</span>
          <span className="bg-gradient-to-r from-[#16C7C2] via-[#62E7E1] to-[#16C7C2] bg-clip-text text-transparent">
            CREATIVE
          </span>
        </h1>

        {/* Subtitle / Tagline */}
        <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.25em] text-[#8FA5A5] uppercase mb-6 sm:mb-8 opacity-90 transition-opacity duration-700">
          Modern Websites. Clear Solutions.
        </p>

        {/* Thin Animated Loading Progress Bar */}
        <div className="w-full max-w-[240px] sm:max-w-xs relative">
          <div className="h-1 w-full bg-[#193438] rounded-full overflow-hidden p-0 relative border border-white/5">
            <div 
              className="h-full bg-gradient-to-r from-[#16C7C2] via-[#62E7E1] to-[#16C7C2] rounded-full transition-all duration-100 ease-out shadow-[0_0_14px_rgba(22,199,194,0.8)] relative"
              style={{ width: `${Math.min(100, Math.floor(progress))}%` }}
            >
              {/* Shimmer light beam moving across progress bar */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-full animate-[shimmer_1.2s_infinite]"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Progress Percentage & Status */}
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#8FA5A5] mt-2.5">
            <span className="tracking-wider text-[#8FA5A5]">INITIALIZING</span>
            <span className="font-bold text-[#16C7C2]">{Math.min(100, Math.floor(progress))}%</span>
          </div>
        </div>

        {/* Skip button for instant access / accessibility */}
        <button
          type="button"
          onClick={handleSkip}
          className="mt-7 text-[11px] uppercase tracking-widest text-[#8FA5A5] hover:text-[#F4FFFF] transition-colors cursor-pointer py-1 px-3 rounded-full hover:bg-white/5"
        >
          Skip Intro
        </button>
      </div>
    </div>
  );
};
