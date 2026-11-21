import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CLINIC_IMAGES, type Language } from '../data/clinicConfig';
import type { SiteContent } from '../data/translations';

interface VisitStepsAndGallerySectionProps {
  lang: Language;
  visitSteps: SiteContent['visitSteps'];
  gallery: SiteContent['gallery'];
  clinicBanner: SiteContent['clinicBanner'];
}

export const VisitStepsAndGallerySection: React.FC<VisitStepsAndGallerySectionProps> = ({
  lang,
  visitSteps,
  gallery,
  clinicBanner,
}) => {
  const [stepsImgFailed, setStepsImgFailed] = useState(false);
  const [bannerImgFailed, setBannerImgFailed] = useState(false);
  const DirectionalChevron = lang === 'ar' ? ChevronLeft : ChevronRight;

  const galleryPhotos = [
    { src: CLINIC_IMAGES.naturalSmile, alt: gallery.captions[0] },
    { src: CLINIC_IMAGES.heroLounge, alt: gallery.captions[1] },
    { src: CLINIC_IMAGES.patientMirror, alt: gallery.captions[2] },
    { src: CLINIC_IMAGES.hygieneTray, alt: gallery.captions[3] },
    { src: CLINIC_IMAGES.practiceInterior, alt: gallery.captions[4] },
  ];

  return (
    <>
      {/* 3-Step Photo Feature Card on Ivory Canvas */}
      <section className="bg-[#F9F6EE] pb-20 sm:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden bg-[#2A2926] text-[#F9F6EE] p-8 sm:p-14 lg:p-16">
            {!stepsImgFailed && (
              <img
                src={CLINIC_IMAGES.gentleCare}
                alt={visitSteps.imageAlt}
                referrerPolicy="no-referrer"
                onError={() => setStepsImgFailed(true)}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            )}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-b from-black/62 via-black/58 to-black/75"
            />

            <div className="relative z-10">
              <div className="max-w-xl mx-auto text-center mb-12 sm:mb-16">
                <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#F9F6EE]/80 mb-3">
                  {visitSteps.kicker}
                </p>
                <h2 className="font-display text-3xl sm:text-5xl font-normal text-[#F9F6EE] leading-[1.12] text-balance">
                  {visitSteps.heading}
                </h2>
              </div>

              <div className="pt-8 border-t border-white/20 grid grid-cols-1 md:grid-cols-3 gap-8">
                {visitSteps.steps.map((step) => (
                  <div key={step.number}>
                    <div className="w-10 h-10 rounded-full bg-[#E9BA4A] text-[#252525] font-display text-lg font-semibold flex items-center justify-center tabular-nums mb-5">
                      {step.number}
                    </div>
                    <h3 className="font-display text-2xl font-normal text-[#F9F6EE]">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-[#F9F6EE]/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Charcoal Smile & Clinic Gallery Mosaic */}
      <section className="bg-dark-marble text-[#F9F6EE] py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#F9F6EE]/65 mb-3">
              {gallery.kicker}
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-normal text-[#F9F6EE] text-balance">
              {gallery.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
            {/* Tall Left Photo */}
            <div className="md:col-span-4 aspect-[3/4] md:aspect-auto md:min-h-[430px] rounded-2xl overflow-hidden bg-[#2E2D2A]">
              <img
                src={galleryPhotos[0].src}
                alt={galleryPhotos[0].alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Right 2x2 Photo Grid */}
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {galleryPhotos.slice(1).map((photo) => (
                <div
                  key={photo.src}
                  className="aspect-[16/10] sm:aspect-auto sm:min-h-[205px] rounded-2xl overflow-hidden bg-[#2E2D2A]"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full-Bleed Architectural Clinic Banner */}
      <section className="relative py-20 sm:py-24 bg-[#222220] text-[#F9F6EE] overflow-hidden">
        {!bannerImgFailed && (
          <img
            src={CLINIC_IMAGES.heroLounge}
            alt={clinicBanner.imageAlt}
            referrerPolicy="no-referrer"
            onError={() => setBannerImgFailed(true)}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        )}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/45"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#F9F6EE]/80 mb-3">
              {clinicBanner.kicker}
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-normal text-[#F9F6EE] leading-[1.12] text-balance">
              {clinicBanner.heading}
            </h2>
          </div>

          <a
            href="#appointment"
            className="self-start md:self-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-[#252525] bg-[#E9BA4A] hover:bg-[#DDA935] rounded-full transition-colors whitespace-nowrap shrink-0"
          >
            <span>{clinicBanner.ctaLabel}</span>
            <DirectionalChevron className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
};
