import React, { useState } from 'react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { CLINIC_IMAGES, CLINIC_INFO, type Language } from '../data/clinicConfig';
import type { SiteContent } from '../data/translations';

interface ManifestoAndFeaturedSectionProps {
  lang: Language;
  manifesto: SiteContent['manifesto'];
  featured: SiteContent['featuredVisit'];
  onSelectServiceForBooking: (serviceId: string) => void;
}

export const ManifestoAndFeaturedSection: React.FC<ManifestoAndFeaturedSectionProps> = ({
  lang,
  manifesto,
  featured,
  onSelectServiceForBooking,
}) => {
  const [leftImgFailed, setLeftImgFailed] = useState(false);
  const [rightImgFailed, setRightImgFailed] = useState(false);
  const DirectionalChevron = lang === 'ar' ? ChevronLeft : ChevronRight;

  return (
    <>
      {/* Section 2: "The Difference" Editorial Manifesto */}
      <section className="bg-[#F9F6EE] py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-[#252525]/60 mb-5">
            {manifesto.kicker}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.85rem] font-normal text-[#252525] leading-[1.22] text-balance">
            {manifesto.statement}
          </h2>
        </div>
      </section>

      {/* Section 3: "Book your appointment today" on Warm Ivory Marble */}
      <section className="bg-ivory-marble py-16 sm:py-24 border-t border-[#252525]/8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-5xl font-normal text-[#252525] text-center mb-12 sm:mb-14 text-balance">
            {featured.heading}
          </h2>

          {/* Dark Charcoal Featured Card */}
          <div className="bg-[#292826] text-[#F9F6EE] rounded-2xl p-7 sm:p-11 lg:p-12 shadow-[0_24px_50px_-28px_rgba(0,0,0,0.45)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-5">
                <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#F9F6EE]/70">
                  {featured.darkCard.kicker}
                </p>
                <div className="mt-3 flex items-baseline gap-3">
                  <span className="font-display text-5xl sm:text-6xl font-normal text-[#E9BA4A] tabular-nums">
                    {featured.darkCard.metricTitle}
                  </span>
                  <span className="text-sm text-[#F9F6EE]/70 tabular-nums">
                    {featured.darkCard.metricSub}
                  </span>
                </div>
                <p className="mt-4 text-sm sm:text-base text-[#F9F6EE]/80 leading-relaxed">
                  {featured.darkCard.description}
                </p>
              </div>

              <div className="lg:col-span-7">
                <p className="text-xs font-medium tracking-wide text-[#F9F6EE]/65 mb-4">
                  {featured.darkCard.includesLabel}
                </p>
                <ul className="space-y-3">
                  {featured.darkCard.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-sm sm:text-base text-[#F9F6EE]/90"
                    >
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-[#E9BA4A] text-[#252525] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[2.75]" aria-hidden="true" />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-9 pt-6 border-t border-white/10 flex justify-center">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-medium text-[#F9F6EE] border border-[#F9F6EE]/45 hover:bg-white/10 rounded-full transition-colors whitespace-nowrap"
              >
                <span>{featured.darkCard.ctaLabel}</span>
                <DirectionalChevron className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Two Split Photo-Overlay Cards */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Photo Card */}
            <div className="relative min-h-[300px] sm:min-h-[340px] rounded-2xl overflow-hidden bg-[#2C2A27] flex flex-col items-center justify-center text-center p-8">
              {!leftImgFailed && (
                <img
                  src={CLINIC_IMAGES.naturalSmile}
                  alt={featured.leftCard.title}
                  referrerPolicy="no-referrer"
                  onError={() => setLeftImgFailed(true)}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              )}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/55 to-black/45"
              />
              <div className="relative z-10 max-w-xs flex flex-col items-center">
                <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#F9F6EE]/85">
                  {featured.leftCard.kicker}
                </p>
                <h3 className="mt-2 font-display text-3xl sm:text-4xl font-normal text-[#E9BA4A]">
                  {featured.leftCard.title}
                </h3>
                <p className="mt-3 text-sm text-[#F9F6EE]/85 leading-relaxed">
                  {featured.leftCard.description}
                </p>
                <button
                  type="button"
                  onClick={() => onSelectServiceForBooking(featured.leftCard.serviceId)}
                  className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-[#F9F6EE] border border-[#F9F6EE]/65 hover:bg-white/15 rounded-full transition-colors whitespace-nowrap"
                >
                  <span>{featured.leftCard.ctaLabel}</span>
                  <DirectionalChevron className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Right Photo Card */}
            <div className="relative min-h-[300px] sm:min-h-[340px] rounded-2xl overflow-hidden bg-[#2C2A27] flex flex-col items-center justify-center text-center p-8">
              {!rightImgFailed && (
                <img
                  src={CLINIC_IMAGES.hygieneTray}
                  alt={featured.rightCard.title}
                  referrerPolicy="no-referrer"
                  onError={() => setRightImgFailed(true)}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              )}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/55 to-black/45"
              />
              <div className="relative z-10 max-w-xs flex flex-col items-center">
                <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#F9F6EE]/85">
                  {featured.rightCard.kicker}
                </p>
                <h3 className="mt-2 font-display text-3xl sm:text-4xl font-normal text-[#E9BA4A]">
                  {featured.rightCard.title}
                </h3>
                <p className="mt-3 text-sm text-[#F9F6EE]/85 leading-relaxed">
                  {featured.rightCard.description}
                </p>
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-[#F9F6EE] border border-[#F9F6EE]/65 hover:bg-white/15 rounded-full transition-colors whitespace-nowrap"
                >
                  <span>{featured.rightCard.ctaLabel}</span>
                  <DirectionalChevron className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
