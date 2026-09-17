/**
 * Navigation and smooth scrolling utilities for Clarity Creative
 */

export const scrollToSection = (
  targetId: string,
  options?: { offset?: number; callback?: () => void }
) => {
  const cleanId = targetId.replace(/^#/, '');

  if (cleanId === 'home' || cleanId === 'top' || !cleanId) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    if (window.location.hash && window.location.hash !== '#home') {
      window.history.pushState(null, '', '#home');
    }
    options?.callback?.();
    return;
  }

  const element = document.getElementById(cleanId);
  if (element) {
    const headerOffset = options?.offset ?? 75;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: 'smooth',
    });

    window.history.pushState(null, '', `#${cleanId}`);
    options?.callback?.();
  }
};

export const triggerContactWithContext = (projectType: string, note?: string) => {
  window.dispatchEvent(
    new CustomEvent('clarity:select-service', {
      detail: { projectType, note },
    })
  );
  scrollToSection('contact');
};
