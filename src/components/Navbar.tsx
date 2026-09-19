import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  MessageCircle, 
  Home, 
  User, 
  Layers, 
  Briefcase, 
  CreditCard, 
  Mail,
  Sparkles
} from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton.tsx';
import { ThemeToggle } from './ThemeToggle.tsx';
import { useTheme } from '../context/ThemeContext.tsx';
import { scrollToSection } from '../utils/navigation.ts';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const { isDark } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Calculate scroll progress percentage
      const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (winHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / winHeight) * 100));
        setScrollProgress(progress);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'HOME', href: '#home', id: 'home', icon: Home },
    { label: 'ABOUT', href: '#about', id: 'about', icon: User },
    { label: 'SERVICES', href: '#services', id: 'services', icon: Layers },
    { label: 'PROJECTS', href: '#projects', id: 'projects', icon: Briefcase },
    { label: 'PRICING', href: '#pricing', id: 'pricing', icon: CreditCard },
    { label: 'CONTACT', href: '#contact', id: 'contact', icon: Mail },
  ];

  const handleNavClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    scrollToSection(targetId);
  };

  const handleMobileNavClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setTimeout(() => {
      scrollToSection(targetId);
    }, 60);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? isDark
              ? 'bg-[#061012]/92 backdrop-blur-xl border-b border-[#193438] shadow-[0_12px_32px_rgba(0,0,0,0.6),0_2px_12px_rgba(22,199,194,0.08)] py-2 sm:py-2.5' 
              : 'bg-[#F5F9FA]/92 backdrop-blur-xl border-b border-[#D1E2E5] shadow-[0_8px_24px_rgba(6,21,23,0.06),0_2px_10px_rgba(13,148,136,0.06)] py-2 sm:py-2.5'
            : isDark
              ? 'bg-[#061012]/60 backdrop-blur-md border-b border-[#193438]/60 py-3 sm:py-4'
              : 'bg-[#F5F9FA]/75 backdrop-blur-md border-b border-[#D1E2E5]/70 py-3 sm:py-4'
        }`} 
        id="main-header"
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <nav className="flex items-center justify-between gap-3 sm:gap-6 relative" aria-label="Main Navigation">
            {/* Clarity Creative Logo with Live Status */}
            <div className="flex items-center gap-3 shrink-0 min-w-0">
              <a 
                href="#home" 
                onClick={(e) => handleNavClick(e, 'home')}
                className="group flex items-center gap-2.5 transition-transform duration-200 hover:scale-[1.02] focus:outline-none" 
                aria-label="Clarity Creative Homepage"
              >
                {/* Brand Badge */}
                <span className={`relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl border font-black text-sm tracking-wider transition-all shrink-0 ${
                  isDark
                    ? 'bg-gradient-to-br from-[#0D1C1F] to-[#061012] border-[#16C7C2] text-[#F4FFFF] shadow-[0_0_15px_rgba(22,199,194,0.35)] group-hover:border-[#62E7E1] group-hover:shadow-[0_0_20px_rgba(22,199,194,0.55)]'
                    : 'bg-white border-[#0D9488] text-[#061517] shadow-sm group-hover:shadow-md'
                }`}>
                  <span className={isDark ? 'text-[#16C7C2]' : 'text-[#0D9488]'}>C</span>
                  <span className={`text-[10px] -mt-2 -ml-0.5 font-mono ${isDark ? 'text-[#62E7E1]' : 'text-[#0891B2]'}`}>2</span>
                  <span className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border-2 ${
                    isDark ? 'bg-[#16C7C2] border-[#061012]' : 'bg-[#0D9488] border-white'
                  }`} />
                </span>

                <div className="flex flex-col min-w-0">
                  <span className={`text-base sm:text-lg font-black tracking-tight leading-tight whitespace-nowrap ${
                    isDark ? 'text-[#F4FFFF]' : 'text-[#061517]'
                  }`}>
                    CLARITY <span className="bg-gradient-to-r from-[#16C7C2] to-[#62E7E1] bg-clip-text text-transparent">CREATIVE</span>
                  </span>
                  <span className={`hidden sm:inline-block text-[10px] font-mono tracking-widest uppercase ${
                    isDark ? 'text-[#8FA5A5]' : 'text-[#466064]'
                  }`}>
                    Digital Studio
                  </span>
                </div>
              </a>

              {/* Live Studio Availability Pill (Desktop Only) */}
              <div className={`hidden xl:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-medium ${
                isDark 
                  ? 'bg-[#0A1719] border-[#193438] text-[#8FA5A5]' 
                  : 'bg-white border-[#D1E2E5] text-[#466064] shadow-xs'
              }`}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
                </span>
                <span className={isDark ? 'text-[#F4FFFF]/90' : 'text-[#061517]'}>Available for projects</span>
              </div>
            </div>

            {/* Desktop Navigation Floating Pill Dock */}
            <ul className={`hidden lg:flex items-center gap-1 p-1 rounded-full border backdrop-blur-md ${
              isDark 
                ? 'bg-[#0A1719]/80 border-[#193438] shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)]' 
                : 'bg-white/90 border-[#D1E2E5] shadow-xs'
            }`}>
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all duration-200 ${
                        isActive
                          ? isDark
                            ? 'bg-[#16C7C2]/15 text-[#F4FFFF] border border-[#16C7C2]/40 shadow-[0_0_12px_rgba(22,199,194,0.25)]'
                            : 'bg-[#0D9488]/12 text-[#0D9488] border border-[#0D9488]/30 shadow-xs'
                          : isDark
                            ? 'text-[#8FA5A5] hover:text-[#F4FFFF] hover:bg-[#16C7C2]/10 border border-transparent'
                            : 'text-[#466064] hover:text-[#061517] hover:bg-[#0D9488]/08 border border-transparent'
                      }`}
                    >
                      {isActive && (
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          isDark ? 'bg-[#16C7C2] shadow-[0_0_6px_#16C7C2]' : 'bg-[#0D9488]'
                        }`} />
                      )}
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Desktop Right Action Controls */}
            <div className="hidden lg:flex items-center gap-2.5 shrink-0">
              {/* Light / Dark Mode Theme Toggle */}
              <ThemeToggle variant="nav" />

              <PWAInstallButton variant="nav" />

              {/* Quick WhatsApp Direct Icon Button */}
              <a
                href="https://wa.me/2348137941486"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all hover:scale-105 cursor-pointer ${
                  isDark
                    ? 'bg-[#0A1719] border-[#193438] hover:border-[#22C55E]/60 text-[#8FA5A5] hover:text-[#22C55E] hover:shadow-[0_0_14px_rgba(34,197,94,0.3)]'
                    : 'bg-white border-[#D1E2E5] hover:border-[#22C55E]/60 text-[#466064] hover:text-[#22C55E] shadow-xs'
                }`}
                title="Direct WhatsApp Chat"
                aria-label="Direct WhatsApp Chat with Clarity Creative"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              {/* Primary Call To Action */}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-[#16C7C2] to-[#62E7E1] text-[#061012] shadow-md shadow-[#16C7C2]/30 hover:shadow-[0_0_20px_rgba(22,199,194,0.5)] transition-all duration-300 hover:scale-[1.03] active:scale-98 whitespace-nowrap cursor-pointer"
                id="nav-cta-btn"
              >
                <span>LET&apos;S TALK</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Header Right Controls: Theme Toggle & Menu Toggle Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle variant="mobile-header" />

              <button
                type="button"
                className={`relative flex items-center justify-center w-10 h-10 rounded-xl border transition-all duration-200 cursor-pointer ${
                  mobileMenuOpen 
                    ? isDark
                      ? 'border-[#16C7C2] text-[#16C7C2] bg-[#16C7C2]/10 shadow-[0_0_12px_rgba(22,199,194,0.3)]' 
                      : 'border-[#0D9488] text-[#0D9488] bg-[#0D9488]/10 shadow-xs'
                    : isDark
                      ? 'border-[#193438] bg-[#0A1719] text-[#F4FFFF] hover:border-[#16C7C2]/60 hover:text-[#16C7C2]'
                      : 'border-[#D1E2E5] bg-white text-[#061517] hover:border-[#0D9488]/60 hover:text-[#0D9488] shadow-xs'
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-controls="mobile-nav-panel"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 transition-transform duration-200 rotate-90" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </nav>
        </div>

        {/* Dynamic Scroll Progress Bar */}
        <div 
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#16C7C2] via-[#62E7E1] to-[#16C7C2] transition-all duration-75 ease-out"
          style={{ 
            width: `${scrollProgress}%`,
            opacity: isScrolled ? 1 : 0
          }}
          aria-hidden="true"
        />

        {/* Mobile Full-Width Dropdown Navigation Panel */}
        <div
          id="mobile-nav-panel"
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen 
              ? isDark
                ? 'max-h-[85vh] opacity-100 border-b border-[#193438] bg-[#0A1719]/98 backdrop-blur-2xl shadow-2xl' 
                : 'max-h-[85vh] opacity-100 border-b border-[#D1E2E5] bg-[#F5F9FA]/98 backdrop-blur-2xl shadow-xl'
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
          aria-hidden={!mobileMenuOpen}
        >
          <div className="container mx-auto px-4 sm:px-6 py-5 max-w-7xl">
            {/* Status Header */}
            <div className={`flex items-center justify-between pb-3 mb-3 border-b ${
              isDark ? 'border-[#193438]' : 'border-[#D1E2E5]'
            }`}>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
                </span>
                <span className={`text-xs font-semibold ${isDark ? 'text-[#F4FFFF]' : 'text-[#061517]'}`}>
                  Open for projects
                </span>
              </div>
              <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${
                isDark 
                  ? 'text-[#16C7C2] bg-[#16C7C2]/10 border-[#16C7C2]/20' 
                  : 'text-[#0D9488] bg-[#0D9488]/10 border-[#0D9488]/25'
              }`}>
                KWARA &bull; REMOTE
              </span>
            </div>

            {/* Navigation Links Grid */}
            <div className="flex flex-col gap-1.5 mb-5">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleMobileNavClick(e, item.id)}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-xl transition-all duration-200 ${
                      isActive 
                        ? isDark
                          ? 'bg-[#16C7C2]/15 border border-[#16C7C2]/40 text-[#F4FFFF] shadow-[0_0_15px_rgba(22,199,194,0.15)]' 
                          : 'bg-[#0D9488]/12 border border-[#0D9488]/35 text-[#061517] shadow-xs'
                        : isDark
                          ? 'text-[#8FA5A5] hover:text-[#F4FFFF] hover:bg-[#0D1C1F] border border-transparent'
                          : 'text-[#466064] hover:text-[#061517] hover:bg-white border border-transparent'
                    }`}
                    style={{ animationDelay: `${index * 30}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        isActive 
                          ? isDark 
                            ? 'bg-[#16C7C2]/20 text-[#16C7C2]' 
                            : 'bg-[#0D9488]/15 text-[#0D9488]'
                          : isDark 
                            ? 'bg-[#0D1C1F] text-[#8FA5A5]' 
                            : 'bg-white text-[#466064] shadow-xs'
                      }`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-sm tracking-wider">{item.label}</span>
                    </div>

                    {isActive ? (
                      <span className={`w-2 h-2 rounded-full ${
                        isDark ? 'bg-[#16C7C2] shadow-[0_0_10px_#16C7C2]' : 'bg-[#0D9488]'
                      }`} />
                    ) : (
                      <ArrowRight className={`w-4 h-4 ${isDark ? 'text-[#8FA5A5]/40' : 'text-[#466064]/40'}`} />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className={`pt-4 border-t flex flex-col gap-2.5 ${
              isDark ? 'border-[#193438]' : 'border-[#D1E2E5]'
            }`}>
              {/* Drawer Theme Switcher Button */}
              <ThemeToggle variant="mobile-drawer" />

              <PWAInstallButton variant="mobile" />

              <a
                href="#contact"
                onClick={(e) => handleMobileNavClick(e, 'contact')}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-xs font-bold text-[#061012] bg-gradient-to-r from-[#16C7C2] to-[#62E7E1] shadow-md shadow-[#16C7C2]/25 hover:shadow-[0_0_20px_rgba(22,199,194,0.4)] transition-all text-center min-h-[46px]"
                id="mobile-menu-cta-btn"
              >
                <Sparkles className="w-4 h-4" />
                <span>START A PROJECT</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/2348137941486"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-xs font-bold text-[#22C55E] bg-[#22C55E]/10 hover:bg-[#22C55E]/20 border border-[#22C55E]/30 transition-all text-center min-h-[46px]"
                id="mobile-menu-whatsapp-btn"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CHAT ON WHATSAPP DIRECT</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Dimmed backdrop overlay when mobile menu is open */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

