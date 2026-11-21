import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CLINIC_IMAGES, type Language } from '../data/clinicConfig';
import type { SiteContent } from '../data/translations';

interface AboutSectionProps {
  lang: Language;
  content: SiteContent['about'];
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang, content }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const DirectionalChevron = lang === 'ar' ? ChevronLeft : ChevronRight;

  return (
    <section id="about" className="bg-[#F9F6EE] py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Portrait / Architectural Clinic Interior */}
          <div className="lg:col-span-5">
            <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#EFEBE1] border border-[#252525]/8">
              {!imgFailed ? (
                <img
                  src={CLINIC_IMAGES.practiceInterior}
                  alt={content.imageAlt}
                  referrerPolicy="no-referrer"
                  onError={() => setImgFailed(true)}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center p-8 bg-[#EFEBE1]">
                  <span className="font-display text-2xl text-[#252525]">{content.heading}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Editorial Practice Story */}
          <div className="lg:col-span-7">
            <p className="text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-[#252525]/60 mb-4">
              {content.kicker}
            </p>

            <h2 className="font-display text-3xl sm:text-5xl font-normal text-[#252525] leading-[1.12] text-balance">
              {content.heading}
            </h2>

            <p className="mt-6 text-base text-[#252525]/78 leading-relaxed max-w-xl">
              {content.paragraph1}
            </p>

            <p className="mt-4 text-base text-[#252525]/75 leading-relaxed max-w-xl">
              {content.paragraph2}
            </p>

            <div className="mt-9">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-[#252525] bg-[#E9BA4A] hover:bg-[#DDA935] rounded-full transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E9BA4A]"
              >
                <span>{content.ctaLabel}</span>
                <DirectionalChevron className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
