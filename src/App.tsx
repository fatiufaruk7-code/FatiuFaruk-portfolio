/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader.tsx';
import { CustomCursor } from './components/CustomCursor.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { TechMarquee } from './components/TechMarquee.tsx';
import { About } from './components/About.tsx';
import { WhyChooseUs } from './components/WhyChooseUs.tsx';
import { Services } from './components/Services.tsx';
import { Skills } from './components/Skills.tsx';
import { Projects } from './components/Projects.tsx';
import { Pricing } from './components/Pricing.tsx';
import { Process } from './components/Process.tsx';
import { Contact } from './components/Contact.tsx';
import { SectionCTABlock } from './components/SectionCTABlock.tsx';
import { Footer } from './components/Footer.tsx';
import { PWAInstallBanner } from './components/PWAInstallBanner.tsx';
import { OfflineIndicator } from './components/OfflineIndicator.tsx';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Active navigation section observer
    const handleSectionScroll = () => {
      // Bottom of page detection -> highlight contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 70) {
        setActiveSection('contact');
        return;
      }

      // Top of page detection -> highlight home
      if (window.scrollY < 120) {
        setActiveSection('home');
        return;
      }

      // Check section bounding boxes with 140px header offset
      const sections = ['contact', 'process', 'pricing', 'projects', 'skills', 'services', 'about', 'home'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom > 140) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleSectionScroll, { passive: true });
    handleSectionScroll();

    return () => {
      window.removeEventListener('scroll', handleSectionScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-[#16C7C2]/30 selection:text-[#F4FFFF] overflow-x-hidden bg-[#061012] w-full max-w-full">
      {/* Custom Sleek Cursor for desktop pointer devices */}
      <CustomCursor />

      {/* Fullscreen Initial Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Modern Ambient Mesh Gradients strictly bounded */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="mesh-1" />
        <div className="mesh-2" />
        <div className="mesh-3" />
      </div>

      <OfflineIndicator />
      <Navbar activeSection={activeSection} />

      <main className="relative z-10">
        <Hero />
        <TechMarquee />
        <About />
        <WhyChooseUs />
        <Services />
        <SectionCTABlock
          badge="HAVE AN IDEA?"
          title="Ready to turn your idea into a fast, modern website?"
          description="Let's build a clear, custom solution that gives your business or brand the attention it deserves."
          buttonText="START A PROJECT"
          variant="subtle"
        />
        <Skills />
        <Projects />
        <Pricing />
        <Process />
        <SectionCTABlock
          badge="COLLABORATION READY"
          title="Need a transparent, reliable web developer for your next launch?"
          description="Direct communication, clear milestones, and modern execution from day one."
          buttonText="GET A QUOTE"
          variant="glow"
        />
        <Contact />
      </main>

      <Footer />
      <PWAInstallBanner />
    </div>
  );
}
