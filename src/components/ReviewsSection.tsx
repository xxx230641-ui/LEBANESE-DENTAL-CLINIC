import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { CLINIC_IMAGES, CLINIC_INFO, type Language } from '../data/clinicConfig';
import type { SiteContent } from '../data/translations';

interface ReviewsSectionProps {
  lang: Language;
  content: SiteContent['reviews'];
  emergency: SiteContent['emergency'];
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  lang,
  content,
  emergency,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [portraitFailed, setPortraitFailed] = useState(false);
  const [emergencyFailed, setEmergencyFailed] = useState(false);

  const DirectionalChevron = lang === 'ar' ? ChevronLeft : ChevronRight;
  const PrevIcon = lang === 'ar' ? ChevronRight : ChevronLeft;
  const NextIcon = lang === 'ar' ? ChevronLeft : ChevronRight;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? content.themes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === content.themes.length - 1 ? 0 : prev + 1));
  };

  // Order cards starting from activeIndex so carousel buttons cycle visible cards cleanly
  const orderedThemes = [
    content.themes[activeIndex],
    content.themes[(activeIndex + 1) % content.themes.length],
    content.themes[(activeIndex + 2) % content.themes.length],
  ];

  return (
    <>
      {/* "What our patients say" Split Testimonial + 5.0 Google Photo Card */}
      <section id="reviews" className="bg-[#F9F6EE] py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Review Themes Carousel Column */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
                <div>
                  <p className="text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-[#252525]/60 mb-3">
                    {content.kicker}
                  </p>
                  <h2 className="font-display text-3xl sm:text-5xl font-normal text-[#252525] text-balance">
                    {content.headline}
                  </h2>
                </div>

                {/* Circular Prev / Next Gold Controls */}
                <div className="flex items-center gap-2.5 shrink-0">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label={content.prevAria}
                    className="w-10 h-10 rounded-full bg-[#EFEBE1] hover:bg-[#E9BA4A]/35 text-[#252525] flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9BA4A]"
                  >
                    <PrevIcon className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label={content.nextAria}
                    className="w-10 h-10 rounded-full bg-[#E9BA4A] hover:bg-[#DDA935] text-[#252525] flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9BA4A]"
                  >
                    <NextIcon className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* 2-Card Visible Row on Warm Sand */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
                {orderedThemes.slice(0, 2).map((theme) => (
                  <article
                    key={theme.id}
                    className="bg-[#EFEBE1] rounded-2xl p-7 sm:p-8 flex flex-col justify-between border border-[#252525]/6"
                  >
                    <div>
                      <span
                        aria-hidden="true"
                        className="font-display text-6xl leading-none text-[#E9BA4A] block -mb-2"
                      >
                        &ldquo;
                      </span>
                      <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#252525]/55 mb-2">
                        {theme.themeLabel}
                      </p>
                      <h3 className="font-display text-2xl font-normal text-[#252525] mb-3">
                        {theme.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#252525]/78 leading-relaxed">
                        {theme.summary}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#252525]/8 flex items-center gap-1">
                      {[0, 1, 2, 3, 4].map((idx) => (
                        <Star
                          key={idx}
                          className="w-3.5 h-3.5 fill-[#E9BA4A] text-[#E9BA4A]"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </article>
                ))}
              </div>

              <p className="mt-4 text-xs text-[#252525]/60 leading-relaxed">
                {content.themeNote}
              </p>
            </div>

            {/* Right Tall Google Rating Photo Card */}
            <div className="lg:col-span-4 flex">
              <div className="relative w-full min-h-[380px] lg:min-h-[460px] rounded-2xl overflow-hidden bg-[#2C2A27] flex flex-col justify-end p-7 text-center text-[#F9F6EE]">
                {!portraitFailed && (
                  <img
                    src={CLINIC_IMAGES.smileGold}
                    alt={content.photoAlt}
                    referrerPolicy="no-referrer"
                    onError={() => setPortraitFailed(true)}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                )}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/25 to-transparent"
                />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="font-display text-5xl font-normal text-[#F9F6EE] tabular-nums leading-none">
                    {content.ratingScore}
                  </div>
                  <div className="mt-2.5 flex items-center justify-center gap-1" aria-label="5.0 Stars">
                    {[0, 1, 2, 3, 4].map((idx) => (
                      <Star
                        key={idx}
                        className="w-4 h-4 fill-[#E9BA4A] text-[#E9BA4A]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mt-2.5 text-sm text-[#F9F6EE]/90 leading-snug">
                    {content.ratingBasis}
                  </p>
                  <a
                    href={CLINIC_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-[#252525] bg-[#F9F6EE] hover:bg-[#E9BA4A] rounded-full transition-colors whitespace-nowrap"
                  >
                    <span>{content.discoverBtn}</span>
                    <DirectionalChevron className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergencies Centered Rounded Photo Banner */}
      <section className="bg-[#F9F6EE] pb-20 sm:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden bg-[#292826] text-[#F9F6EE] py-16 sm:py-20 px-6 sm:px-12 text-center">
            {!emergencyFailed && (
              <img
                src={CLINIC_IMAGES.gentleCare}
                alt={emergency.imageAlt}
                referrerPolicy="no-referrer"
                onError={() => setEmergencyFailed(true)}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            )}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-b from-black/62 via-black/58 to-black/72"
            />

            <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#F9F6EE]/80 mb-3">
                {emergency.kicker}
              </p>
              <h2 className="font-display text-3xl sm:text-5xl font-normal text-[#F9F6EE] leading-[1.12] text-balance">
                {emergency.heading}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#F9F6EE]/85 leading-relaxed">
                {emergency.description}
              </p>
              <a
                href={CLINIC_INFO.phoneHref}
                className="mt-8 inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-medium text-[#F9F6EE] border border-[#F9F6EE]/65 hover:bg-white/15 rounded-full transition-colors whitespace-nowrap"
              >
                <span>{emergency.ctaLabel}</span>
                <DirectionalChevron className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
