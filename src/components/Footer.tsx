import React from 'react';
import { MapPin, MessageCircle, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicConfig';
import type { SiteContent } from '../data/translations';
import { ClinicLogo } from './ClinicLogo';

interface FooterProps {
  content: SiteContent;
}

export const Footer: React.FC<FooterProps> = ({ content }) => {
  const clinicLinks = [
    { href: '#about', label: content.nav.about },
    { href: '#services', label: content.nav.treatments },
    { href: '#why-us', label: content.nav.whyUs },
    { href: '#reviews', label: content.nav.reviews },
    { href: '#appointment', label: content.nav.bookBtn },
  ];

  return (
    <footer className="bg-[#222220] text-[#F9F6EE] pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/12">
          {/* Brand Emblem & Quick Gold Action Circles */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#home" className="inline-block">
              <ClinicLogo name={content.brand.name} size="md" />
            </a>
            <p className="text-sm text-[#E9BA4A]">{content.brand.subtitle}</p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={content.footer.whatsappLabel}
                className="w-10 h-10 rounded-full bg-[#E9BA4A] hover:bg-[#DDA935] text-[#252525] flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={CLINIC_INFO.phoneHref}
                aria-label={CLINIC_INFO.phoneDisplay}
                className="w-10 h-10 rounded-full bg-[#E9BA4A] hover:bg-[#DDA935] text-[#252525] flex items-center justify-center transition-colors"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={CLINIC_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={content.footer.mapsLinkLabel}
                className="w-10 h-10 rounded-full bg-[#E9BA4A] hover:bg-[#DDA935] text-[#252525] flex items-center justify-center transition-colors"
              >
                <MapPin className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 1: Our Clinic + Hours */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h3 className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#F9F6EE]/55 mb-4">
                {content.footer.clinicHeading}
              </h3>
              <ul className="space-y-2.5 text-sm text-[#F9F6EE]/85">
                {clinicLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:text-[#E9BA4A] transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#F9F6EE]/55 mb-3">
                {content.footer.hoursHeading}
              </h3>
              <div className="space-y-1.5 text-xs sm:text-sm text-[#F9F6EE]/78 tabular-nums">
                <p>{content.footer.hoursSummary1}</p>
                <p>{content.footer.hoursSummary2}</p>
                <p className="text-[#E9BA4A]">{content.footer.hoursSummary3}</p>
              </div>
            </div>
          </div>

          {/* Column 2: Visit Us */}
          <div className="lg:col-span-4">
            <h3 className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#F9F6EE]/55 mb-4">
              {content.footer.visitHeading}
            </h3>
            <ul className="space-y-3 text-sm text-[#F9F6EE]/85">
              <li>
                <a
                  href={CLINIC_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E9BA4A] transition-colors"
                >
                  {content.contact.addressValue}
                </a>
              </li>
              <li>
                <a
                  href={CLINIC_INFO.phoneHref}
                  dir="ltr"
                  className="inline-block hover:text-[#E9BA4A] transition-colors tabular-nums"
                >
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E9BA4A] transition-colors"
                >
                  {content.footer.whatsappLabel}
                </a>
              </li>
              <li>
                <a
                  href={CLINIC_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E9BA4A] hover:underline"
                >
                  {content.footer.mapsLinkLabel}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F9F6EE]/55">
          <p>{content.footer.copyright}</p>
          <p dir="ltr">{content.footer.secondaryLine}</p>
        </div>
      </div>
    </footer>
  );
};
