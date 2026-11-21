import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import type { SiteContent } from '../data/translations';

interface FaqSectionProps {
  content: SiteContent['faq'];
}

export const FaqSection: React.FC<FaqSectionProps> = ({ content }) => {
  const [openId, setOpenId] = useState<string | null>(content.items[0]?.id ?? null);

  return (
    <section className="bg-silk-cream py-20 sm:py-28 border-t border-[#252525]/8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Sticky Header Column */}
          <div className="lg:col-span-4">
            <p className="text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-[#252525]/60 mb-3">
              {content.kicker}
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-normal text-[#252525] leading-[1.12] text-balance">
              {content.heading}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#252525]/72 leading-relaxed">
              {content.subheading}
            </p>
          </div>

          {/* Right Hairline Accordion */}
          <div className="lg:col-span-8 divide-y divide-[#252525]/12 border-b border-[#252525]/12">
            {content.items.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="py-5 sm:py-6">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="w-full flex items-center justify-between gap-4 text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9BA4A] rounded-md py-1"
                  >
                    <h3 className="font-display text-2xl sm:text-[1.7rem] font-normal text-[#252525] leading-snug">
                      {item.question}
                    </h3>
                    <span className="text-[#C89624] shrink-0">
                      {isOpen ? (
                        <Minus className="w-5 h-5" aria-hidden="true" />
                      ) : (
                        <Plus className="w-5 h-5" aria-hidden="true" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="mt-3 text-sm sm:text-base text-[#252525]/78 leading-relaxed max-w-2xl">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
