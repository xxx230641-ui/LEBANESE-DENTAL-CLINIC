import React from 'react';
import { Eye, Feather, Heart, Home, MessageSquare } from 'lucide-react';
import type { SiteContent } from '../data/translations';

interface WhyChooseSectionProps {
  content: SiteContent['whyUs'];
}

const iconMap = {
  heart: Heart,
  feather: Feather,
  message: MessageSquare,
  eye: Eye,
  home: Home,
};

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ content }) => {
  return (
    <section id="why-us" className="bg-[#F9F6EE] py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-[#252525]/60 mb-3">
            {content.kicker}
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-normal text-[#252525] text-balance">
            {content.heading}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#252525]/72 leading-relaxed">
            {content.subheading}
          </p>
        </div>

        {/* Warm Sand Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {content.items.map((item) => {
            const Icon = iconMap[item.iconKey];
            return (
              <div
                key={item.id}
                className="bg-[#EFEBE1] rounded-2xl p-6 flex flex-col justify-between min-h-[210px] border border-[#252525]/6"
              >
                <div className="text-[#E9BA4A] mb-6">
                  <Icon className="w-6 h-6 fill-[#E9BA4A]/20" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-normal text-[#252525] leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#252525]/72 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Signature Subtle Gold Progress Accent Line */}
        <div className="mt-8 h-[2px] w-full bg-[#E3DDD0] rounded-full overflow-hidden" aria-hidden="true">
          <div className="h-full w-3/4 bg-[#E9BA4A] rounded-full" />
        </div>
      </div>
    </section>
  );
};
