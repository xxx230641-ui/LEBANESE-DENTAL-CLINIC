import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CLINIC_IMAGES, type Language } from '../data/clinicConfig';
import type { SiteContent } from '../data/translations';

interface HeroSectionProps {
  lang: Language;
  brand: SiteContent['brand'];
  content: SiteContent['hero'];
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang, brand, content }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const DirectionalChevron = lang === 'ar' ? ChevronLeft : ChevronRight;

  return (
    <section
      id="home"
      className="relative min-h-[88vh] sm:min-h-[94vh] flex items-center justify-center overflow-hidden bg-[#222220] pt-24 pb-16 sm:pt-28 sm:pb-20"
    >
      {/* Full-Bleed Architectural Background Photo */}
      {!imgFailed && (
        <img
          src={CLINIC_IMAGES.heroLounge}
          alt={content.imageAlt}
          referrerPolicy="no-referrer"
          onError={() => setImgFailed(true)}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      )}

      {/* Warm Charcoal Contrast Scrim matching Luminara Hero */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-[#1a1814]/70 via-[#1d1b17]/58 to-[#161512]/72"
      />

      {/* Centered Editorial Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Centered Gold Metallic Brand Lockup */}
        <div className="mb-7 sm:mb-8 flex flex-col items-center">
          <span className="font-display text-xl sm:text-2xl md:text-[1.75rem] font-semibold tracking-[0.22em] text-[#E9BA4A] uppercase">
            {brand.emblemTop}
          </span>
          <div className="mt-1 flex items-center gap-3 w-full justify-center">
            <span className="h-px w-8 sm:w-12 bg-[#E9BA4A]/80" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.26em] text-[#E9BA4A] uppercase whitespace-nowrap">
              {brand.emblemBottom}
            </span>
            <span className="h-px w-8 sm:w-12 bg-[#E9BA4A]/80" aria-hidden="true" />
          </div>
        </div>

        {/* Large Centered Editorial Serif Headline */}
        <h1 className="font-display text-[2.6rem] sm:text-6xl lg:text-[4.65rem] font-normal text-[#F9F6EE] leading-[1.06] tracking-tight text-balance max-w-3xl">
          {content.headline}
        </h1>

        <p className="mt-5 sm:mt-6 text-sm sm:text-base lg:text-lg text-[#F9F6EE]/90 max-w-2xl leading-relaxed">
          {content.supporting}
        </p>

        {/* Centered Dual Rounded-Full CTAs */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          <a
            href="#appointment"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-[#252525] bg-[#E9BA4A] hover:bg-[#DDA935] rounded-full transition-colors duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E9BA4A]"
          >
            <span>{content.primaryCta}</span>
            <DirectionalChevron className="w-4 h-4" aria-hidden="true" />
          </a>

          <a
            href="tel:+96896700335"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-[#F9F6EE] border border-[#F9F6EE]/65 hover:bg-white/10 rounded-full transition-colors duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9BA4A]"
          >
            <span>{content.secondaryCta}</span>
            <DirectionalChevron className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
