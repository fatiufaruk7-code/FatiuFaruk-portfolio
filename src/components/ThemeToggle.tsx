import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';

interface ThemeToggleProps {
  variant?: 'nav' | 'mobile-header' | 'mobile-drawer';
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  variant = 'nav',
  className = '' 
}) => {
  const { theme, toggleTheme, isDark } = useTheme();

  if (variant === 'mobile-drawer') {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={`flex items-center justify-between w-full px-3.5 py-3 rounded-xl border transition-all duration-200 cursor-pointer ${
          isDark
            ? 'bg-[#0D1C1F] border-[#193438] text-[#F4FFFF] hover:border-[#16C7C2]/50 hover:bg-[#112428]'
            : 'bg-white border-[#D1E2E5] text-[#061517] hover:border-[#0D9488]/50 hover:bg-[#F0F7F8] shadow-sm'
        } ${className}`}
        aria-label={`Switch to ${isDark ? 'light' : 'midnight dark'} theme`}
      >
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-300 ${
            isDark 
              ? 'bg-[#16C7C2]/15 text-[#16C7C2]' 
              : 'bg-[#0D9488]/15 text-[#0D9488]'
          }`}>
            {isDark ? (
              <Sun className="w-4 h-4 transition-transform duration-300 rotate-0 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 transition-transform duration-300 -rotate-12" />
            )}
          </div>
          <div className="text-left">
            <span className="font-bold text-sm tracking-wide block">
              {isDark ? 'Light Mode' : 'Midnight Dark'}
            </span>
            <span className="text-[11px] opacity-70 block font-normal">
              {isDark ? 'Switch to bright clean look' : 'Switch to signature dark canvas'}
            </span>
          </div>
        </div>

        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border uppercase tracking-wider ${
          isDark
            ? 'text-[#16C7C2] bg-[#16C7C2]/10 border-[#16C7C2]/25'
            : 'text-[#0D9488] bg-[#0D9488]/10 border-[#0D9488]/25'
        }`}>
          {theme}
        </span>
      </button>
    );
  }

  // Desktop or Mobile header icon button
  const isNav = variant === 'nav';
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center transition-all duration-300 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16C7C2] ${
        isNav
          ? 'w-9 h-9 rounded-full border'
          : 'w-10 h-10 rounded-xl border'
      } ${
        isDark
          ? 'bg-[#0A1719] border-[#193438] text-[#8FA5A5] hover:text-[#16C7C2] hover:border-[#16C7C2]/60 hover:shadow-[0_0_15px_rgba(22,199,194,0.25)]'
          : 'bg-white border-[#D1E2E5] text-[#466064] hover:text-[#0D9488] hover:border-[#0D9488]/60 hover:shadow-[0_0_15px_rgba(13,148,136,0.2)] shadow-sm'
      } ${className}`}
      title={isDark ? 'Switch to Light Theme' : 'Switch to Midnight Dark Theme'}
      aria-label={isDark ? 'Switch to Light Theme' : 'Switch to Midnight Dark Theme'}
      id="theme-toggle-btn"
    >
      <span className="relative flex items-center justify-center w-full h-full">
        <Sun
          className={`w-4 h-4 transition-all duration-300 absolute ${
            isDark
              ? 'opacity-100 rotate-0 scale-100 text-[#16C7C2]'
              : 'opacity-0 -rotate-90 scale-0'
          }`}
        />
        <Moon
          className={`w-4 h-4 transition-all duration-300 absolute ${
            isDark
              ? 'opacity-0 rotate-90 scale-0'
              : 'opacity-100 rotate-0 scale-100 text-[#0D9488]'
          }`}
        />
      </span>
    </button>
  );
};
