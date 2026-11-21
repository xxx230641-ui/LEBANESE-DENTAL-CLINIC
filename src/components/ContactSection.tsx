import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, MapPin, Navigation } from 'lucide-react';
import { CLINIC_INFO, INITIAL_OPENING_HOURS, type Language } from '../data/clinicConfig';
import type { SiteContent } from '../data/translations';

interface ContactSectionProps {
  lang: Language;
  content: SiteContent['contact'];
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang, content }) => {
  const [viewMode, setViewMode] = useState<'map' | 'card'>('map');
  const [iframeFailed, setIframeFailed] = useState(false);
  const DirectionalChevron = lang === 'ar' ? ChevronLeft : ChevronRight;

  const embedUrl = `https://maps.google.com/maps?q=${CLINIC_INFO.coordinates.lat},${CLINIC_INFO.coordinates.lng}&hl=${lang}&z=16&output=embed`;

  return (
    <section id="contact" className="bg-[#F9F6EE] py-20 sm:py-28 border-t border-[#252525]/8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Hairline Info List matching Luminara "Come say hello" */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <p className="text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-[#252525]/60 mb-3">
                {content.kicker}
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-normal text-[#252525] mb-10">
                {content.heading}
              </h2>

              <dl className="divide-y divide-[#252525]/12 border-y border-[#252525]/12 text-sm">
                {/* Address */}
                <div className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4">
                  <dt className="sm:col-span-4 text-[11px] font-medium tracking-[0.16em] uppercase text-[#252525]/55 pt-0.5">
                    {content.addressLabel}
                  </dt>
                  <dd className="sm:col-span-8 text-[#252525] font-medium">
                    <p>{CLINIC_INFO.nameEn} · {CLINIC_INFO.nameAr}</p>
                    <p className="mt-0.5 text-[#252525]/80">{content.addressValue}</p>
                  </dd>
                </div>

                {/* Telephone */}
                <div className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4">
                  <dt className="sm:col-span-4 text-[11px] font-medium tracking-[0.16em] uppercase text-[#252525]/55 pt-0.5">
                    {content.phoneLabel}
                  </dt>
                  <dd className="sm:col-span-8">
                    <a
                      href={CLINIC_INFO.phoneHref}
                      dir="ltr"
                      className="inline-block font-medium text-[#252525] hover:text-[#9A7420] transition-colors tabular-nums"
                    >
                      {CLINIC_INFO.phoneDisplay}
                    </a>
                  </dd>
                </div>

                {/* WhatsApp */}
                <div className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4">
                  <dt className="sm:col-span-4 text-[11px] font-medium tracking-[0.16em] uppercase text-[#252525]/55 pt-0.5">
                    {content.whatsappLabel}
                  </dt>
                  <dd className="sm:col-span-8">
                    <a
                      href={CLINIC_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium text-[#252525] hover:text-[#9A7420] transition-colors"
                    >
                      <span>{content.whatsappAction}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#C89624]" aria-hidden="true" />
                    </a>
                  </dd>
                </div>

                {/* Opening Hours */}
                <div className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4">
                  <dt className="sm:col-span-4 text-[11px] font-medium tracking-[0.16em] uppercase text-[#252525]/55 pt-0.5">
                    {content.hoursLabel}
                  </dt>
                  <dd className="sm:col-span-8 space-y-1.5 text-[#252525]/85">
                    {INITIAL_OPENING_HOURS.map((entry) => (
                      <div key={entry.id} className="flex flex-wrap justify-between gap-x-4 text-xs sm:text-sm">
                        <span className="font-medium text-[#252525]">
                          {lang === 'ar' ? entry.dayAr : entry.dayEn}
                        </span>
                        <span className={`tabular-nums ${entry.isNoteOnly ? 'text-[#9A7420]' : ''}`}>
                          {lang === 'ar' ? entry.hoursAr : entry.hoursEn}
                        </span>
                      </div>
                    ))}
                    <p className="pt-2 text-xs text-[#252525]/55 leading-relaxed">
                      {content.hoursDisclaimer}
                    </p>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-[#252525] bg-[#E9BA4A] hover:bg-[#DDA935] rounded-full transition-colors whitespace-nowrap"
              >
                <span>{content.bookBtn}</span>
                <DirectionalChevron className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={CLINIC_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#252525] border border-[#252525]/25 hover:bg-[#EFEBE1] rounded-full transition-colors whitespace-nowrap"
              >
                <span>{content.directionsAction}</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Rounded-2xl Google Map + Location Card Toggle */}
          <div className="lg:col-span-6 flex flex-col bg-[#EFEBE1] rounded-2xl border border-[#252525]/10 overflow-hidden min-h-[420px]">
            <div className="px-5 py-3.5 border-b border-[#252525]/10 flex flex-wrap items-center justify-between gap-3 bg-[#F4EFE4]">
              <div className="inline-flex items-center p-1 rounded-full bg-[#E5DEC9]/70">
                <button
                  type="button"
                  onClick={() => setViewMode('map')}
                  className={`px-3.5 py-1 text-xs font-medium rounded-full transition-colors ${
                    viewMode === 'map' && !iframeFailed
                      ? 'bg-[#252525] text-[#F9F6EE]'
                      : 'text-[#252525]/70 hover:text-[#252525]'
                  }`}
                >
                  {content.toggleViewMap}
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('card')}
                  className={`px-3.5 py-1 text-xs font-medium rounded-full transition-colors ${
                    viewMode === 'card' || iframeFailed
                      ? 'bg-[#252525] text-[#F9F6EE]'
                      : 'text-[#252525]/70 hover:text-[#252525]'
                  }`}
                >
                  {content.toggleViewCard}
                </button>
              </div>

              <a
                href={CLINIC_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#252525] hover:text-[#9A7420]"
              >
                <span>{content.directionsAction}</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>

            <div className="relative flex-1 min-h-[380px]">
              {viewMode === 'map' && !iframeFailed ? (
                <iframe
                  title={content.mapTitle}
                  src={embedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  onError={() => setIframeFailed(true)}
                  className="w-full h-full min-h-[400px] border-0"
                />
              ) : (
                <div className="w-full h-full min-h-[400px] p-8 flex flex-col items-center justify-center text-center bg-ivory-marble">
                  <div className="w-14 h-14 rounded-full bg-[#252525] text-[#E9BA4A] flex items-center justify-center mb-5 shadow-sm">
                    <MapPin className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-3xl font-normal text-[#252525]">
                    {lang === 'ar' ? CLINIC_INFO.nameAr : CLINIC_INFO.nameEn}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#9A7420]">
                    {content.mapFallbackHeading}
                  </p>
                  <p className="mt-3 text-sm text-[#252525]/75 max-w-sm leading-relaxed">
                    {content.mapFallbackDesc}
                  </p>
                  <p className="mt-4 text-xs text-[#252525]/60 tabular-nums" dir="ltr">
                    {content.coordinatesLabel}: {CLINIC_INFO.coordinates.lat},{' '}
                    {CLINIC_INFO.coordinates.lng}
                  </p>
                  <a
                    href={CLINIC_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#252525] bg-[#E9BA4A] hover:bg-[#DDA935] rounded-full transition-colors"
                  >
                    <Navigation className="w-4 h-4" aria-hidden="true" />
                    <span>{content.directionsAction}</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
