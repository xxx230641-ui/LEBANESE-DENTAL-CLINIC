import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Globe, Menu, X } from 'lucide-react';
import type { Language } from '../data/clinicConfig';
import type { SiteContent } from '../data/translations';
import { ClinicLogo } from './ClinicLogo';

interface NavbarProps {
  lang: Language;
  content: SiteContent;
  onToggleLanguage: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, content, onToggleLanguage }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const DirectionalChevron = lang === 'ar' ? ChevronLeft : ChevronRight;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: content.nav.about },
    { href: '#services', label: content.nav.treatments },
    { href: '#why-us', label: content.nav.whyUs },
    { href: '#reviews', label: content.nav.reviews },
    { href: '#contact', label: content.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-200 ${
        scrolled || mobileOpen
          ? 'bg-[#222220]/95 backdrop-blur-md border-b border-white/10 shadow-sm'
          : 'bg-gradient-to-b from-black/55 via-black/25 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4 lg:gap-8">
        {/* Zone 1: Gold Tooth Logo + Clinic Wordmark */}
        <a
          href="#home"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9BA4A] rounded-md py-1"
        >
          <ClinicLogo name={content.brand.name} />
        </a>

        {/* Zone 2: Clean Single-Line Nav Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#F9F6EE]/90"
        >
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 py-1 hover:text-[#E9BA4A] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9BA4A] rounded-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Language Switcher + Pill Gold CTA + Mobile Menu */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={onToggleLanguage}
            aria-label={lang === 'en' ? 'Switch to Arabic' : 'Switch to English'}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium text-[#F9F6EE] bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9BA4A]"
          >
            <Globe className="w-3.5 h-3.5 text-[#E9BA4A]" aria-hidden="true" />
            <span>{content.switchLangLabel}</span>
          </button>

          <a
            href="#appointment"
            className="hidden sm:inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs sm:text-sm font-medium text-[#252525] bg-[#E9BA4A] hover:bg-[#DDA935] rounded-full transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E9BA4A]"
          >
            <span>{content.nav.bookBtn}</span>
            <DirectionalChevron className="w-3.5 h-3.5" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? content.nav.closeMenuAria : content.nav.openMenuAria}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-[#F9F6EE] hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9BA4A]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#222220] border-t border-white/10 px-4 sm:px-6 py-4"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-base font-medium text-[#F9F6EE] hover:text-[#E9BA4A] hover:bg-white/5 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-white/10">
              <a
                href="#appointment"
                onClick={() => setMobileOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-[#252525] bg-[#E9BA4A] hover:bg-[#DDA935] rounded-full transition-colors"
              >
                <span>{content.nav.bookBtn}</span>
                <DirectionalChevron className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
