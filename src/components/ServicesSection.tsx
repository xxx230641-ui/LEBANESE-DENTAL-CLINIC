import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Minus, Plus, X } from 'lucide-react';
import { CLINIC_IMAGES, type Language } from '../data/clinicConfig';
import type { ServiceItem, SiteContent } from '../data/translations';

interface ServicesSectionProps {
  lang: Language;
  content: SiteContent['services'];
  onSelectServiceForBooking: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  lang,
  content,
  onSelectServiceForBooking,
}) => {
  const [openChapter, setOpenChapter] = useState<'maintenance' | 'repair' | 'transformation' | null>(
    'maintenance',
  );
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);
  const [imgFailed, setImgFailed] = useState(false);
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const DirectionalChevron = lang === 'ar' ? ChevronLeft : ChevronRight;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (activeService && !dialog.open) {
      dialog.showModal();
    } else if (!activeService && dialog.open) {
      dialog.close();
    }
  }, [activeService]);

  const handleRequestFromDialog = (serviceId: string) => {
    if (dialogRef.current?.open) {
      dialogRef.current.close();
    }
    setActiveService(null);
    onSelectServiceForBooking(serviceId);
  };

  return (
    <section id="services" className="bg-dark-marble text-[#F9F6EE] py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row matching "Three chapters, one file." */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/12">
          <div className="max-w-xl">
            <p className="text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-[#F9F6EE]/65 mb-3">
              {content.kicker}
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-normal text-[#F9F6EE] leading-[1.1] text-balance">
              {content.heading}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#F9F6EE]/75 leading-relaxed">
              {content.subheading}
            </p>
          </div>

          <a
            href="#appointment"
            className="self-start md:self-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-[#252525] bg-[#E9BA4A] hover:bg-[#DDA935] rounded-full transition-colors whitespace-nowrap shrink-0"
          >
            <span>{content.exploreCta}</span>
            <DirectionalChevron className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        {/* Two-Column Interactive Chapters + Framed Right Photo */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Expandable Chapters with All 7 Services */}
          <div className="lg:col-span-7 divide-y divide-white/12 border-b border-white/12">
            {content.chapters.map((chapter) => {
              const isOpen = openChapter === chapter.id;
              const chapterServices = content.items.filter(
                (item) => item.chapterId === chapter.id,
              );

              return (
                <div key={chapter.id} className="py-6 sm:py-7">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenChapter((prev) => (prev === chapter.id ? null : chapter.id))}
                    className="w-full flex items-center justify-between gap-4 text-start group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9BA4A] rounded-lg py-1"
                  >
                    <div className="flex items-baseline gap-5">
                      <span className="text-xs font-medium text-[#F9F6EE]/50 tabular-nums">
                        {chapter.number}
                      </span>
                      <h3
                        className={`font-display text-2xl sm:text-3xl font-normal transition-colors ${
                          isOpen ? 'text-[#F9F6EE]' : 'text-[#F9F6EE]/65 group-hover:text-[#F9F6EE]'
                        }`}
                      >
                        {chapter.title}
                      </h3>
                    </div>

                    <span className="text-[#E9BA4A] shrink-0">
                      {isOpen ? (
                        <Minus className="w-5 h-5" aria-hidden="true" />
                      ) : (
                        <Plus className="w-5 h-5" aria-hidden="true" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-4 ps-9 sm:ps-10 space-y-5">
                      <p className="text-sm text-[#F9F6EE]/70 leading-relaxed">
                        {chapter.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {chapterServices.map((service) => (
                          <div
                            key={service.id}
                            className="rounded-xl bg-white/5 border border-white/10 p-4 flex flex-col justify-between gap-3 hover:border-[#E9BA4A]/50 transition-colors"
                          >
                            <div>
                              <h4 className="font-display text-xl font-normal text-[#F9F6EE]">
                                {service.title}
                              </h4>
                              <p className="mt-1.5 text-xs sm:text-sm text-[#F9F6EE]/70 leading-relaxed">
                                {service.description}
                              </p>
                            </div>

                            <button
                              type="button"
                              onClick={() => setActiveService(service)}
                              className="self-start inline-flex items-center gap-1.5 text-xs font-medium text-[#E9BA4A] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9BA4A] rounded-sm"
                            >
                              <span>{content.learnMore}</span>
                              <DirectionalChevron className="w-3.5 h-3.5" aria-hidden="true" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Framed Patient Care Photography */}
          <div className="lg:col-span-5">
            <div className="aspect-[4/4.3] w-full rounded-2xl overflow-hidden bg-[#2E2D2A] border border-white/10">
              {!imgFailed ? (
                <img
                  src={CLINIC_IMAGES.patientMirror}
                  alt={content.imageAlt}
                  referrerPolicy="no-referrer"
                  onError={() => setImgFailed(true)}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center p-8">
                  <span className="font-display text-2xl text-[#E9BA4A]">{content.heading}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Accessible Native Dialog for Service Details */}
      <dialog
        ref={dialogRef}
        onClose={() => setActiveService(null)}
        onClick={(e) => {
          if (e.target === dialogRef.current) {
            setActiveService(null);
          }
        }}
        aria-labelledby="service-dialog-title"
        className="m-auto w-[calc(100%-2rem)] max-w-lg rounded-2xl bg-[#F9F6EE] p-0 text-[#252525] shadow-2xl border border-[#252525]/12 backdrop:bg-black/65 backdrop:backdrop-blur-xs"
      >
        {activeService && (
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-semibold tracking-[0.16em] uppercase text-[#9A7420] tabular-nums">
                  {activeService.number} · {content.kicker}
                </span>
                <h3
                  id="service-dialog-title"
                  className="mt-1.5 font-display text-3xl font-normal text-[#252525]"
                >
                  {activeService.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveService(null)}
                aria-label={content.closeDetail}
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#252525]/65 hover:text-[#252525] hover:bg-[#EFEBE1] transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="mt-4 text-base text-[#252525]/85 leading-relaxed">
              {activeService.overview}
            </p>

            <div className="mt-5 p-4 rounded-xl bg-[#EFEBE1] border border-[#252525]/8">
              <p className="text-sm text-[#252525]/85 leading-relaxed">
                {activeService.consultationNote}
              </p>
            </div>

            <p className="mt-4 text-xs text-[#252525]/65 leading-relaxed">
              {content.availabilityNote}
            </p>

            <div className="mt-6 pt-5 border-t border-[#252525]/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setActiveService(null)}
                className="px-5 py-2.5 text-sm font-medium text-[#252525]/70 hover:text-[#252525] rounded-full hover:bg-[#EFEBE1] transition-colors"
              >
                {content.closeDetail}
              </button>
              <button
                type="button"
                onClick={() => handleRequestFromDialog(activeService.id)}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-[#252525] bg-[#E9BA4A] hover:bg-[#DDA935] rounded-full transition-colors"
              >
                <span>{content.requestForService}</span>
                <DirectionalChevron className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
};
