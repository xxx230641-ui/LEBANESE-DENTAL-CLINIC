import { useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { AppointmentSection } from './components/AppointmentSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { ManifestoAndFeaturedSection } from './components/ManifestoAndFeaturedSection';
import { Navbar } from './components/Navbar';
import { ReviewsSection } from './components/ReviewsSection';
import { ServicesSection } from './components/ServicesSection';
import { VisitStepsAndGallerySection } from './components/VisitStepsAndGallerySection';
import { WhyChooseSection } from './components/WhyChooseSection';
import type { Language } from './data/clinicConfig';
import { TRANSLATIONS } from './data/translations';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');

  const content = TRANSLATIONS[lang];

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const handleToggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const handleSelectServiceForBooking = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    const target = document.getElementById('appointment');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F6EE] text-[#252525]">
      <Navbar
        lang={lang}
        content={content}
        onToggleLanguage={handleToggleLanguage}
      />

      <main className="flex-1">
        <HeroSection
          lang={lang}
          brand={content.brand}
          content={content.hero}
        />

        <ManifestoAndFeaturedSection
          lang={lang}
          manifesto={content.manifesto}
          featured={content.featuredVisit}
          onSelectServiceForBooking={handleSelectServiceForBooking}
        />

        <AboutSection
          lang={lang}
          content={content.about}
        />

        <ServicesSection
          lang={lang}
          content={content.services}
          onSelectServiceForBooking={handleSelectServiceForBooking}
        />

        <WhyChooseSection content={content.whyUs} />

        <VisitStepsAndGallerySection
          lang={lang}
          visitSteps={content.visitSteps}
          gallery={content.gallery}
          clinicBanner={content.clinicBanner}
        />

        <ReviewsSection
          lang={lang}
          content={content.reviews}
          emergency={content.emergency}
        />

        <ContactSection
          lang={lang}
          content={content.contact}
        />

        <AppointmentSection
          lang={lang}
          content={content.appointment}
          services={content.services.items}
          selectedServiceId={selectedServiceId}
          onServiceChange={setSelectedServiceId}
        />

        <FaqSection content={content.faq} />
      </main>

      <Footer content={content} />
    </div>
  );
}
