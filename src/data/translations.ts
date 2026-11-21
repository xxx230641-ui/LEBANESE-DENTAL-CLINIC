import type { Language } from './clinicConfig';

export interface ServiceItem {
  id: string;
  number: string;
  chapterId: 'maintenance' | 'repair' | 'transformation';
  title: string;
  description: string;
  overview: string;
  consultationNote: string;
}

export interface ServiceChapter {
  id: 'maintenance' | 'repair' | 'transformation';
  number: string;
  title: string;
  description: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconKey: 'heart' | 'feather' | 'message' | 'eye' | 'home';
}

export interface ReviewThemeItem {
  id: string;
  themeLabel: string;
  title: string;
  summary: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TimeSlotOption {
  id: string;
  label: string;
}

export interface SiteContent {
  switchLangLabel: string;
  brand: {
    name: string;
    emblemTop: string;
    emblemBottom: string;
    subtitle: string;
  };
  nav: {
    about: string;
    treatments: string;
    whyUs: string;
    reviews: string;
    contact: string;
    bookBtn: string;
    openMenuAria: string;
    closeMenuAria: string;
  };
  hero: {
    headline: string;
    supporting: string;
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
  };
  manifesto: {
    kicker: string;
    statement: string;
  };
  featuredVisit: {
    heading: string;
    darkCard: {
      kicker: string;
      metricTitle: string;
      metricSub: string;
      description: string;
      includesLabel: string;
      bullets: string[];
      ctaLabel: string;
    };
    leftCard: {
      kicker: string;
      title: string;
      description: string;
      ctaLabel: string;
      serviceId: string;
    };
    rightCard: {
      kicker: string;
      title: string;
      description: string;
      ctaLabel: string;
    };
  };
  about: {
    kicker: string;
    heading: string;
    paragraph1: string;
    paragraph2: string;
    ctaLabel: string;
    imageAlt: string;
  };
  services: {
    kicker: string;
    heading: string;
    subheading: string;
    exploreCta: string;
    learnMore: string;
    closeDetail: string;
    requestForService: string;
    availabilityNote: string;
    imageAlt: string;
    chapters: ServiceChapter[];
    items: ServiceItem[];
  };
  whyUs: {
    kicker: string;
    heading: string;
    subheading: string;
    items: WhyChooseItem[];
  };
  visitSteps: {
    kicker: string;
    heading: string;
    imageAlt: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  gallery: {
    kicker: string;
    heading: string;
    captions: string[];
  };
  clinicBanner: {
    kicker: string;
    heading: string;
    ctaLabel: string;
    imageAlt: string;
  };
  reviews: {
    kicker: string;
    headline: string;
    prevAria: string;
    nextAria: string;
    ratingScore: string;
    ratingBasis: string;
    themeNote: string;
    discoverBtn: string;
    photoAlt: string;
    themes: ReviewThemeItem[];
  };
  emergency: {
    kicker: string;
    heading: string;
    description: string;
    ctaLabel: string;
    imageAlt: string;
  };
  contact: {
    kicker: string;
    heading: string;
    addressLabel: string;
    addressValue: string;
    phoneLabel: string;
    whatsappLabel: string;
    whatsappAction: string;
    hoursLabel: string;
    hoursDisclaimer: string;
    bookBtn: string;
    directionsAction: string;
    mapTitle: string;
    mapFallbackHeading: string;
    mapFallbackDesc: string;
    coordinatesLabel: string;
    toggleViewMap: string;
    toggleViewCard: string;
  };
  appointment: {
    kicker: string;
    heading: string;
    subheading: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    dateLabel: string;
    timeLabel: string;
    timePlaceholder: string;
    serviceLabel: string;
    servicePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    confirmationDisclaimer: string;
    preparedHeading: string;
    preparedDescription: string;
    preparedPreviewLabel: string;
    openWhatsappBtn: string;
    editRequestBtn: string;
    timeSlots: TimeSlotOption[];
    otherServiceLabel: string;
  };
  faq: {
    kicker: string;
    heading: string;
    subheading: string;
    items: FaqItem[];
  };
  footer: {
    clinicHeading: string;
    visitHeading: string;
    hoursHeading: string;
    hoursSummary1: string;
    hoursSummary2: string;
    hoursSummary3: string;
    mapsLinkLabel: string;
    whatsappLabel: string;
    copyright: string;
    secondaryLine: string;
  };
}

export const TRANSLATIONS: Record<Language, SiteContent> = {
  en: {
    switchLangLabel: 'العربية',
    brand: {
      name: 'Lebanese Dental Clinic',
      emblemTop: 'LEBANESE',
      emblemBottom: 'DENTAL CLINIC',
      subtitle: 'المركز اللبناني للأسنان',
    },
    nav: {
      about: 'About',
      treatments: 'Treatments',
      whyUs: 'Why Us',
      reviews: 'Reviews',
      contact: 'Contact',
      bookBtn: 'Book an appointment',
      openMenuAria: 'Open navigation menu',
      closeMenuAria: 'Close navigation menu',
    },
    hero: {
      headline: 'A Healthier Smile Starts With Exceptional Care.',
      supporting:
        'Experience thoughtful dental care in a welcoming environment, where your comfort, confidence, and smile matter.',
      primaryCta: 'Book an appointment',
      secondaryCta: 'Call us today',
      imageAlt: 'Warm luxury dental clinic reception lounge with curved oak paneling and travertine stone',
    },
    manifesto: {
      kicker: 'THE DIFFERENCE',
      statement:
        'We measure care in attention, not appointments. Clear communication, gentle treatment, and a welcoming atmosphere in Muscat — so your dental care feels thoughtful and your visit feels calm.',
    },
    featuredVisit: {
      heading: 'Book your appointment today',
      darkCard: {
        kicker: 'PATIENT-CENTERED CARE · MUSCAT',
        metricTitle: '5.0 / 5.0',
        metricSub: '~90 Google Reviews',
        description:
          'Attentive dental consultations and essential care on 18th November Street, guided by transparency and patient comfort.',
        includesLabel: 'What shapes every visit:',
        bullets: [
          'Clear explanations before any dental procedure begins',
          'Gentle approach tailored to anxious and first-time patients',
          'Attention to detail across preventive and restorative care',
          'Welcoming, serene clinic atmosphere for individuals and families',
          'Direct scheduling confirmation via phone or WhatsApp',
        ],
        ctaLabel: 'Request an appointment',
      },
      leftCard: {
        kicker: 'TAILORED ESTHETICS',
        title: 'Cosmetic Dentistry',
        description:
          'Thoughtful smile-enhancing care designed around natural proportions and healthy tooth structure.',
        ctaLabel: 'Explore treatments',
        serviceId: 'cosmetic-dentistry',
      },
      rightCard: {
        kicker: 'DIRECT CLINIC ACCESS',
        title: 'WhatsApp Scheduling',
        description:
          'Send your preferred date and treatment inquiry directly to our reception team in Muscat.',
        ctaLabel: 'Message on WhatsApp',
      },
    },
    about: {
      kicker: 'THE PRACTICE',
      heading: 'Your comfort comes first.',
      paragraph1:
        'At Lebanese Dental Clinic, we believe that every patient deserves attentive, thoughtful, and comfortable dental care. Our focus is on helping patients feel confident throughout their dental journey through clear communication, careful attention, and a welcoming experience.',
      paragraph2:
        'Conveniently located on 18th November Street in Muscat, our clinic welcomes individuals and families seeking unhurried consultations, respectful guidance, and gentle care at every step.',
      ctaLabel: 'Arrange a visit',
      imageAlt: 'Serene boutique dental clinic interior with travertine stone, warm oak cabinetry, and sheer curtains',
    },
    services: {
      kicker: 'DENTAL CARE',
      heading: 'Three chapters, one standard.',
      subheading:
        'From preventive maintenance to restorative and cosmetic care, every treatment is discussed clearly before we begin.',
      exploreCta: 'Request a consultation',
      learnMore: 'Details & inquiry',
      closeDetail: 'Close',
      requestForService: 'Request this service',
      availabilityNote:
        'Clinical suitability, exact treatment steps, and appointment availability are confirmed directly with the clinic during your consultation.',
      imageAlt: 'Smiling patient sitting comfortably in a cream dental chair looking in a hand mirror',
      chapters: [
        {
          id: 'maintenance',
          number: '01',
          title: 'Smile maintenance',
          description: 'Preventive and essential care focused on keeping teeth and gums healthy.',
        },
        {
          id: 'repair',
          number: '02',
          title: 'Smile repair',
          description: 'Restorative care and tooth replacement planned around comfort and function.',
        },
        {
          id: 'transformation',
          number: '03',
          title: 'Smile enhancement & urgent care',
          description: 'Aesthetic dental options and prompt support when urgent concerns arise.',
        },
      ],
      items: [
        {
          id: 'general-dentistry',
          number: '01',
          chapterId: 'maintenance',
          title: 'General Dentistry',
          description: 'Essential dental care focused on maintaining oral health.',
          overview:
            'Routine dental assessments and ongoing oral health guidance designed to protect teeth and gums over the long term.',
          consultationNote:
            'Ideal for periodic check-ups, new patient assessments, and discussing everyday dental questions.',
        },
        {
          id: 'teeth-cleaning',
          number: '02',
          chapterId: 'maintenance',
          title: 'Teeth Cleaning',
          description: 'Professional cleaning to help maintain healthy teeth and gums.',
          overview:
            'Gentle plaque and tartar removal paired with supportive daily hygiene guidance for lasting gum wellness.',
          consultationNote:
            'Recommended periodically as part of preventive oral care. Contact us to arrange a cleaning visit.',
        },
        {
          id: 'dental-implants',
          number: '03',
          chapterId: 'repair',
          title: 'Dental Implants',
          description: 'Advanced tooth replacement solutions designed to restore function and confidence.',
          overview:
            'Structured evaluation and restorative planning for replacing missing teeth to support comfortable chewing and a natural appearance.',
          consultationNote:
            'An in-clinic examination is arranged first to confirm suitability and individual treatment options.',
        },
        {
          id: 'dental-fillings',
          number: '04',
          chapterId: 'repair',
          title: 'Dental Fillings',
          description: 'Restorative care to repair teeth affected by cavities.',
          overview:
            'Careful treatment of decay and restoration of tooth form to help protect against sensitivity or further wear.',
          consultationNote:
            'Reach out if you experience tooth sensitivity, minor chipping, or suspect a cavity.',
        },
        {
          id: 'wisdom-tooth-extraction',
          number: '05',
          chapterId: 'repair',
          title: 'Wisdom Tooth Extraction',
          description: 'Dental assessment and extraction when clinically necessary.',
          overview:
            'Careful evaluation of wisdom tooth positioning and comfort-focused extraction when clinically indicated.',
          consultationNote:
            'A clinical assessment is scheduled first to determine whether extraction or monitoring is recommended.',
        },
        {
          id: 'cosmetic-dentistry',
          number: '06',
          chapterId: 'transformation',
          title: 'Cosmetic Dentistry',
          description: 'Dental treatments focused on enhancing the appearance of your smile.',
          overview:
            'Aesthetic dental options tailored around natural proportions, tooth harmony, and healthy enamel.',
          consultationNote:
            'Your dentist will discuss your smile goals and review appropriate options after an oral exam.',
        },
        {
          id: 'emergency-dental-care',
          number: '07',
          chapterId: 'transformation',
          title: 'Emergency Dental Care',
          description: 'Contact the clinic for assistance with urgent dental concerns.',
          overview:
            'Direct phone and WhatsApp assistance to guide you promptly if you experience sudden toothache, swelling, or urgent dental discomfort.',
          consultationNote:
            'For urgent concerns, calling +968 9670 0335 directly is the fastest way to reach our reception desk.',
        },
      ],
    },
    whyUs: {
      kicker: 'WHY CHOOSE US',
      heading: 'Care that makes you feel confident.',
      subheading:
        'A thoughtful visit is calm, personal, and never rushed. We make time for your questions and shape every visit around your comfort.',
      items: [
        {
          id: 'patient-comfort',
          title: 'Patient Comfort',
          description: 'A welcoming and reassuring dental experience.',
          iconKey: 'heart',
        },
        {
          id: 'gentle-approach',
          title: 'Gentle Approach',
          description: 'Patient feedback frequently highlights gentle treatment.',
          iconKey: 'feather',
        },
        {
          id: 'clear-communication',
          title: 'Clear Communication',
          description: 'Helping patients understand their dental care.',
          iconKey: 'message',
        },
        {
          id: 'attention-detail',
          title: 'Attention to Detail',
          description: 'Careful and attentive treatment.',
          iconKey: 'eye',
        },
        {
          id: 'welcoming-environment',
          title: 'Welcoming Environment',
          description: 'A comfortable experience for patients and families.',
          iconKey: 'home',
        },
      ],
    },
    visitSteps: {
      kicker: 'ARRANGING YOUR VISIT',
      heading: 'Clear communication from your first message.',
      imageAlt: 'Gentle dentist adjusting treatment light over a calm patient in a warm oak suite',
      steps: [
        {
          number: '01',
          title: 'Share your dental goal',
          description:
            'Tell us whether you need a routine check-up, cleaning, implant consultation, or have an urgent concern.',
        },
        {
          number: '02',
          title: 'Confirm a convenient time',
          description:
            'Send your preferred day via WhatsApp or call +968 9670 0335 and our clinic confirms availability directly.',
        },
        {
          number: '03',
          title: 'Arrive to calm, unhurried care',
          description:
            'Every option and next step is explained clearly in person before any treatment begins.',
        },
      ],
    },
    gallery: {
      kicker: 'CLINIC ATMOSPHERE & CARE',
      heading: 'Designed around natural smiles and quiet comfort.',
      captions: [
        'Confident natural smile care',
        'Warm welcoming lounge',
        'Comfort-focused consultations',
        'Hygienic preventive care',
        'Serene studio atmosphere',
      ],
    },
    clinicBanner: {
      kicker: 'THE CLINIC · MUSCAT',
      heading: 'A calm, seamless experience from arrival to every detail',
      ctaLabel: 'Book an appointment',
      imageAlt: 'Warm luxury dental clinic reception lounge in Muscat',
    },
    reviews: {
      kicker: 'IN THEIR WORDS',
      headline: 'Trusted by patients. Appreciated for our care.',
      prevAria: 'Previous review theme',
      nextAria: 'Next review theme',
      ratingScore: '5.0',
      ratingBasis: 'Rated 5.0 across ~90 Google Maps reviews',
      themeNote:
        'Recurring themes observed in public Google Maps reviews (no fabricated patient names or quotes).',
      discoverBtn: 'Read More Google Reviews',
      photoAlt: 'Warm close-up portrait of a healthy natural smile',
      themes: [
        {
          id: 'theme-1',
          themeLabel: 'Google Review Theme · 01',
          title: 'Gentle & Reassuring Approach',
          summary:
            'Patients consistently highlight gentle handling, calm reassurance, and a relaxed pace that puts anxious visitors at ease.',
        },
        {
          id: 'theme-2',
          themeLabel: 'Google Review Theme · 02',
          title: 'Clear & Attentive Communication',
          summary:
            'Reviews frequently note that care options and treatment steps are explained thoroughly, with time taken to answer every question.',
        },
        {
          id: 'theme-3',
          themeLabel: 'Google Review Theme · 03',
          title: 'Welcoming Clinic Atmosphere',
          summary:
            'Visitors commend the spotless setting, warm hospitality, and comfortable experience for both individual and family appointments.',
        },
      ],
    },
    emergency: {
      kicker: 'EMERGENCIES',
      heading: 'Need urgent dental care? Call us first.',
      description:
        'Reach out directly by phone or WhatsApp if you are experiencing acute tooth pain or an urgent dental concern so our team can advise you promptly.',
      ctaLabel: 'Call us today',
      imageAlt: 'Attentive dentist caring for a patient in a calm warm treatment room',
    },
    contact: {
      kicker: 'VISIT',
      heading: 'Come say hello',
      addressLabel: 'Address',
      addressValue: '18th November Street, Muscat, Oman.',
      phoneLabel: 'Telephone',
      whatsappLabel: 'WhatsApp',
      whatsappAction: 'Message +968 9670 0335',
      hoursLabel: 'Hours',
      hoursDisclaimer:
        'Directory-listed initial hours. Please call or WhatsApp to confirm before visiting, especially on Fridays and holidays.',
      bookBtn: 'Book an appointment',
      directionsAction: 'Open in Google Maps',
      mapTitle: 'Lebanese Dental Clinic Map — 18th November Street, Muscat',
      mapFallbackHeading: '18th November Street, Muscat',
      mapFallbackDesc: 'Use the verified Google Maps pin to get directions directly to the clinic.',
      coordinatesLabel: 'Coordinates',
      toggleViewMap: 'Map View',
      toggleViewCard: 'Location Card',
    },
    appointment: {
      kicker: 'APPOINTMENT REQUEST',
      heading: 'Request your visit via WhatsApp.',
      subheading:
        'Fill in your preferred details below. Submitting prepares a direct WhatsApp message to Lebanese Dental Clinic so our reception team can confirm your time.',
      fullNameLabel: 'Full Name',
      fullNamePlaceholder: 'Enter your full name',
      phoneLabel: 'Phone Number',
      phonePlaceholder: '+968 9XXX XXXX',
      dateLabel: 'Preferred Date',
      timeLabel: 'Preferred Time',
      timePlaceholder: 'Select preferred time window',
      serviceLabel: 'Dental Service',
      servicePlaceholder: 'Select a dental service',
      messageLabel: 'Additional Message',
      messagePlaceholder: 'Share any questions or notes for your visit (optional)',
      submitBtn: 'Prepare WhatsApp Request',
      confirmationDisclaimer:
        'This form prepares a WhatsApp message to the clinic. Your appointment is not officially booked until the clinic confirms availability with you.',
      preparedHeading: 'WhatsApp Request Prepared — Pending Clinic Confirmation',
      preparedDescription:
        'Your appointment request details are ready below. Please send the message in WhatsApp so the clinic can review and confirm your visit.',
      preparedPreviewLabel: 'Prepared WhatsApp Message',
      openWhatsappBtn: 'Open WhatsApp Chat',
      editRequestBtn: 'Edit Details',
      timeSlots: [
        { id: 'morning', label: 'Morning (9:00 AM – 1:00 PM)' },
        { id: 'thursday-midday', label: 'Thursday (9:00 AM – 2:00 PM)' },
        { id: 'evening', label: 'Afternoon / Evening (4:00 PM – 8:00 PM)' },
        { id: 'flexible', label: 'Flexible — Next Available Time' },
      ],
      otherServiceLabel: 'General Consultation / Other Inquiry',
    },
    faq: {
      kicker: 'FAQ',
      heading: 'Asked and answered.',
      subheading:
        'Helpful answers before you reach out — so arranging your first visit in Muscat feels effortless.',
      items: [
        {
          id: 'faq-book',
          question: 'How do I request an appointment?',
          answer:
            'You can call us directly on +968 9670 0335, message us on WhatsApp, or use the Appointment Request form on this page. Our reception team will reply directly to confirm an available time.',
        },
        {
          id: 'faq-hours',
          question: 'What are the clinic opening hours?',
          answer:
            'Directory listings show Sunday to Wednesday and Saturday from 9:00 AM – 1:00 PM and 4:00 PM – 8:00 PM, and Thursday from 9:00 AM – 2:00 PM. For Fridays or public holidays, please contact the clinic to confirm.',
        },
        {
          id: 'faq-location',
          question: 'Where is Lebanese Dental Clinic located?',
          answer:
            'We are located on 18th November Street in Muscat, Sultanate of Oman. You can open exact turn-by-turn directions anytime via our Google Maps link.',
        },
        {
          id: 'faq-languages',
          question: 'Can I communicate in Arabic or English?',
          answer:
            'Yes, you can reach out and request your appointment in either Arabic or English. Use the language switcher at the top of the website to browse in your preferred language.',
        },
        {
          id: 'faq-emergency',
          question: 'What should I do if I have urgent tooth pain?',
          answer:
            'Please call the clinic directly at +968 9670 0335 or message us on WhatsApp as early as possible so our team can advise you on available urgent care options.',
        },
      ],
    },
    footer: {
      clinicHeading: 'Our Clinic',
      visitHeading: 'Visit Us',
      hoursHeading: 'Hours',
      hoursSummary1: 'Sun – Wed & Sat: 9:00 AM – 1:00 PM / 4:00 PM – 8:00 PM',
      hoursSummary2: 'Thursday: 9:00 AM – 2:00 PM',
      hoursSummary3: 'Friday: Contact the clinic to confirm',
      mapsLinkLabel: 'Open Google Maps',
      whatsappLabel: 'WhatsApp Chat',
      copyright: '© 2026 Lebanese Dental Clinic. All Rights Reserved.',
      secondaryLine: 'المركز اللبناني للأسنان · Muscat, Oman',
    },
  },
  ar: {
    switchLangLabel: 'English',
    brand: {
      name: 'المركز اللبناني للأسنان',
      emblemTop: 'المركز اللبناني',
      emblemBottom: 'للأسنان',
      subtitle: 'Lebanese Dental Clinic',
    },
    nav: {
      about: 'عن المركز',
      treatments: 'الخدمات',
      whyUs: 'لماذا نحن',
      reviews: 'آراء المرضى',
      contact: 'تواصل معنا',
      bookBtn: 'احجز موعداً',
      openMenuAria: 'فتح قائمة التنقل',
      closeMenuAria: 'إغلاق قائمة التنقل',
    },
    hero: {
      headline: 'ابتسامة أكثر صحة تبدأ بعناية استثنائية.',
      supporting:
        'اختبر رعاية أسنان مدروسة في بيئة مريحة ومرحبة، حيث راحتك وثقتك وابتسامتك هي الأهم.',
      primaryCta: 'احجز موعداً',
      secondaryCta: 'اتصل بنا اليوم',
      imageAlt: 'صالة استقبال فاخرة لعيادة الأسنان بإضاءة دافئة وتصميم من الخشب والرخام الكريمي',
    },
    manifesto: {
      kicker: 'الفارق الحقيقي',
      statement:
        'نقيس الرعاية بمقدار الاهتمام لا بعدد المواعيد. تواصل واضح، وعلاج لطيف، وأجواء مريحة في مسقط — لتكون تجربتك السنية هادئة ومطمئنة من اللحظة الأولى.',
    },
    featuredVisit: {
      heading: 'رتّب زيارتك اليوم',
      darkCard: {
        kicker: 'رعاية تركز على المريض · مسقط',
        metricTitle: '5.0 / 5.0',
        metricSub: 'نحو 90 مراجعة على جوجل',
        description:
          'استشارات سنية دقيقة وعناية شاملة في شارع 18 نوفمبر بمسقط، مبنية على الشفافية وراحة المريض.',
        includesLabel: 'ما يميّز كل زيارة:',
        bullets: [
          'شرح واضح لخيارات الرعاية قبل البدء بأي إجراء',
          'تعامل لطيف يراعي راحة المرضى والزوار الجدد',
          'اهتمام بالتفاصيل في الرعاية الوقائية والترميمية',
          'بيئة هادئة وملائمة للأفراد والعائلات',
          'تنسيق مباشر وسريع عبر الهاتف أو الواتساب',
        ],
        ctaLabel: 'اطلب موعداً الآن',
      },
      leftCard: {
        kicker: 'عناية جمالية مدروسة',
        title: 'طب الأسنان التجميلي',
        description:
          'خيارات تجميلية تهدف إلى تحسين مظهر الابتسامة مع الحفاظ على التناسق الطبيعي وصحة الأسنان.',
        ctaLabel: 'استكشف الخدمات',
        serviceId: 'cosmetic-dentistry',
      },
      rightCard: {
        kicker: 'تواصل مباشر مع الاستقبال',
        title: 'التنسيق عبر واتساب',
        description:
          'أرسل التاريخ المفضل واستفسارك مباشرة إلى فريق الاستقبال في المركز لتأكيد الموعد.',
        ctaLabel: 'راسلنا على واتساب',
      },
    },
    about: {
      kicker: 'عن المركز',
      heading: 'راحتك تأتي أولاً.',
      paragraph1:
        'في المركز اللبناني للأسنان، نؤمن بأن كل مريض يستحق رعاية أسنان دقيقة ومدروسة ومريحة. ينصب تركيزنا على مساعدة المرضى على الشعور بالثقة طوال رحلتهم العلاجية عبر التواصل الواضح والاهتمام الدقيق وتجربة استقبال مرحبة.',
      paragraph2:
        'نستقبلكم في موقعنا بشارع 18 نوفمبر في مسقط لتقديم استشارات متأنية وإرشادات واضحة ورعاية لطيفة تضع راحتكم في المقدمة.',
      ctaLabel: 'رتّب زيارتك',
      imageAlt: 'تصميم داخلي هادئ للمركز الطبي بالرخام الكريمي والخشب الدافئ والإضاءة الطبيعية',
    },
    services: {
      kicker: 'خدمات الأسنان',
      heading: 'رعاية متكاملة بمعيار واحد من الدقة.',
      subheading:
        'من العناية الوقائية إلى الحلول الترميمية والتجميلية، نوضح لك كل خطوة قبل البدء بالعلاج.',
      exploreCta: 'اطلب استشارة',
      learnMore: 'التفاصيل والطلب',
      closeDetail: 'إغلاق',
      requestForService: 'اطلب هذه الخدمة',
      availabilityNote:
        'يتم تأكيد ملاءمة الإجراء وخطوات العلاج وتوفر الموعد مباشرة مع فريق المركز خلال الاستشارة.',
      imageAlt: 'مريض يبتسم بارتياح في كرسي الأسنان وهو ينظر إلى ابتسامته في المرآة',
      chapters: [
        {
          id: 'maintenance',
          number: '01',
          title: 'الحفاظ على صحة الابتسامة',
          description: 'رعاية وقائية وأساسية للحفاظ على صحة الأسنان واللثة.',
        },
        {
          id: 'repair',
          number: '02',
          title: 'إصلاح وتعويض الأسنان',
          description: 'رعاية ترميمية وتعويضية مصممة لاستعادة الوظيفة والراحة.',
        },
        {
          id: 'transformation',
          number: '03',
          title: 'تحسين الابتسامة والحالات الطارئة',
          description: 'علاجات تجميلية مدروسة ومساعدة سريعة للحالات السنية العاجلة.',
        },
      ],
      items: [
        {
          id: 'general-dentistry',
          number: '01',
          chapterId: 'maintenance',
          title: 'طب الأسنان العام',
          description: 'رعاية أسنان أساسية تركز على الحفاظ على صحة الفم والأسنان.',
          overview:
            'فحوصات دورية وتقييم شامل لصحة الفم واللثة مع إرشادات عملية للحفاظ على سلامة الأسنان على المدى الطويل.',
          consultationNote:
            'مناسب للفحوصات الدورية واستشارات المرضى الجدد ومناقشة أي استفسار يخص صحة الفم.',
        },
        {
          id: 'teeth-cleaning',
          number: '02',
          chapterId: 'maintenance',
          title: 'تنظيف الأسنان',
          description: 'تنظيف احترافي للمساعدة في الحفاظ على صحة الأسنان واللثة.',
          overview:
            'إزالة لطيفة ودقيقة للترسبات الجيرية مع نصائح للعناية اليومية لدعم صحة اللثة.',
          consultationNote:
            'يُنصح به بشكل دوري ضمن الوقاية السنية. تواصل معنا لحجز موعد تنظيف.',
        },
        {
          id: 'dental-implants',
          number: '03',
          chapterId: 'repair',
          title: 'زراعة الأسنان',
          description: 'حلول متقدمة لتعويض الأسنان المفقودة واستعادة الوظيفة والثقة.',
          overview:
            'تقييم سريري وتخطيط ترميمي لتعويض الأسنان المفقودة بما يدعم المضغ المريح والمظهر الطبيعي.',
          consultationNote:
            'يُلزم إجراء فحص مباشر في المركز لتحديد مدى ملاءمة الحالة وخطة العلاج.',
        },
        {
          id: 'dental-fillings',
          number: '04',
          chapterId: 'repair',
          title: 'حشوات الأسنان',
          description: 'رعاية ترميمية لإصلاح الأسنان المتأثرة بالتسوس.',
          overview:
            'معالجة التسوس وترميم السن بدقة لحمايته من الحساسية أو التلف المتزايد.',
          consultationNote:
            'تواصل معنا عند الشعور بحساسية في الأسنان أو ملاحظة تسوس أو تآكل بسيط.',
        },
        {
          id: 'wisdom-tooth-extraction',
          number: '05',
          chapterId: 'repair',
          title: 'خلع ضرس العقل',
          description: 'تقييم سريري وخلع ضرس العقل عند الحاجة الطبية لذلك.',
          overview:
            'تقييم دقيق لوضع ضرس العقل وتنفيذ الخلع بأسلوب يراعي راحة المريض عند وجود ضرورة سريرية.',
          consultationNote:
            'يتم الفحص أولاً لتحديد ما إذا كان الخلع مطلوباً أو يكفي المتابعة.',
        },
        {
          id: 'cosmetic-dentistry',
          number: '06',
          chapterId: 'transformation',
          title: 'طب الأسنان التجميلي',
          description: 'علاجات سنية تركز على تحسين مظهر وجمال ابتسامتك.',
          overview:
            'خيارات تجميلية مصممة بعناية لتعزيز انسجام الابتسامة والحفاظ على المظهر الطبيعي.',
          consultationNote:
            'يناقش الطبيب أهدافك التجميلية ويقترح الخيارات المناسبة بعد فحص الأسنان.',
        },
        {
          id: 'emergency-dental-care',
          number: '07',
          chapterId: 'transformation',
          title: 'رعاية الحالات السنية الطارئة',
          description: 'تواصل مع المركز للحصول على المساعدة في الحالات السنية العاجلة.',
          overview:
            'تواصل مباشر عبر الهاتف أو الواتساب للحصول على الإرشاد السريع عند حدوث ألم مفاجئ أو طارئ سني.',
          consultationNote:
            'في الحالات العاجلة، يُفضّل الاتصال مباشرة على ‎+968 9670 0335 للتنسيق السريع.',
        },
      ],
    },
    whyUs: {
      kicker: 'لماذا تختارنا',
      heading: 'رعاية تمنحك الشعور بالثقة والاطمئنان.',
      subheading:
        'الزيارة المدروسة تكون هادئة وواضحة وبلا استعجال. نمنحك الوقت الكافي للأسئلة ونصمم تجربتك حول راحتك.',
      items: [
        {
          id: 'patient-comfort',
          title: 'راحة المريض',
          description: 'تجربة علاجية مريحة ومطمئنة في كل زيارة.',
          iconKey: 'heart',
        },
        {
          id: 'gentle-approach',
          title: 'تعامل لطيف',
          description: 'تشيد آراء المرضى باستمرار باللطف والرفق أثناء العلاج.',
          iconKey: 'feather',
        },
        {
          id: 'clear-communication',
          title: 'تواصل واضح',
          description: 'مساعدة المرضى على فهم خطوات رعايتهم السنية بوضوح.',
          iconKey: 'message',
        },
        {
          id: 'attention-detail',
          title: 'الاهتمام بالتفاصيل',
          description: 'عناية دقيقة ومتابعة متأنية لكل حالة.',
          iconKey: 'eye',
        },
        {
          id: 'welcoming-environment',
          title: 'بيئة مرحبة',
          description: 'تجربة مريحة وملائمة للأفراد والعائلات.',
          iconKey: 'home',
        },
      ],
    },
    visitSteps: {
      kicker: 'تنسيق زيارتك',
      heading: 'تواصل واضح من رسالتك الأولى.',
      imageAlt: 'طبيب يضبط إضاءة العلاج بعناية لمريض مسترخٍ في غرفة علاج دافئة',
      steps: [
        {
          number: '01',
          title: 'شاركنا هدف زيارتك',
          description:
            'أخبرنا إن كنت تبحث عن فحص عام أو تنظيف أو استشارة زراعة أسنان أو لديك حالة طارئة.',
        },
        {
          number: '02',
          title: 'تأكيد الوقت المناسب',
          description:
            'أرسل اليوم المفضل عبر الواتساب أو اتصل على ‎+968 9670 0335 ليؤكد لك الفريق التوفر مباشرة.',
        },
        {
          number: '03',
          title: 'استقبال هادئ ورعاية متأنية',
          description:
            'يتم شرح كافة الخيارات والخطوات بوضوح تام قبل البدء بأي علاج.',
        },
      ],
    },
    gallery: {
      kicker: 'أجواء المركز والعناية',
      heading: 'مصمم لابتسامات طبيعية وراحة هادئة.',
      captions: [
        'ابتسامة طبيعية صحية',
        'صالة استقبال دافئة ومرحبة',
        'استشارات تركز على راحة المريض',
        'أدوات عناية ونظافة دقيقة',
        'بيئة علاجية هادئة',
      ],
    },
    clinicBanner: {
      kicker: 'المركز · مسقط',
      heading: 'تجربة هادئة ومتكاملة منذ لحظة وصولك وحتى أدق التفاصيل',
      ctaLabel: 'احجز موعداً',
      imageAlt: 'صالة استقبال المركز اللبناني للأسنان في مسقط',
    },
    reviews: {
      kicker: 'آراء المرضى',
      headline: 'محل ثقة المرضى. وتقدير لعنايتنا.',
      prevAria: 'محور المراجعة السابق',
      nextAria: 'محور المراجعة التالي',
      ratingScore: '5.0',
      ratingBasis: 'تقييم 5.0 عبر نحو 90 مراجعة على خرائط جوجل',
      themeNote:
        'ملخص لأبرز المحاور المتكررة في تقييمات خرائط جوجل المنشورة دون اختلاق أسماء أو شهادات وهمية.',
      discoverBtn: 'اقرأ المزيد من تقييمات جوجل',
      photoAlt: 'صورة مقربة دافئة لابتسامة طبيعية صحية',
      themes: [
        {
          id: 'theme-1',
          themeLabel: 'محور تقييمات جوجل · 01',
          title: 'أسلوب لطيف وتجربة مطمئنة',
          summary:
            'يشير المرضى باستمرار إلى التعامل الهادئ واللطيف الذي يخفف القلق ويجعل الزيارة مريحة من بدايتها حتى نهايتها.',
        },
        {
          id: 'theme-2',
          themeLabel: 'محور تقييمات جوجل · 02',
          title: 'شرح واضح واستماع متأنٍ',
          summary:
            'تبرز الملاحظات توضيح خيارات العلاج وخطواته بشفافية مع تخصيص الوقت الكافي للإجابة عن كل سؤال.',
        },
        {
          id: 'theme-3',
          themeLabel: 'محور تقييمات جوجل · 03',
          title: 'أجواء نظيفة واستقبال دافئ',
          summary:
            'يقدّر الزوار مستوى النظافة العالي والترحيب المحترم وملاءمة المركز لمواعيد الأفراد والعائلات.',
        },
      ],
    },
    emergency: {
      kicker: 'الحالات الطارئة',
      heading: 'هل تحتاج رعاية سنية عاجلة؟ اتصل بنا أولاً.',
      description:
        'تواصل معنا مباشرة عبر الهاتف أو الواتساب إذا كنت تعاني من ألم حاد أو حالة طارئة ليتم توجيهك ومساعدتك في أقرب وقت.',
      ctaLabel: 'اتصل بنا اليوم',
      imageAlt: 'رعاية لطيفة لمريض في غرفة علاج هادئة',
    },
    contact: {
      kicker: 'الموقع',
      heading: 'تفضل بزيارتنا',
      addressLabel: 'العنوان',
      addressValue: 'شارع 18 نوفمبر، مسقط، عُمان.',
      phoneLabel: 'الهاتف',
      whatsappLabel: 'واتساب',
      whatsappAction: 'راسلنا على ‎+968 9670 0335',
      hoursLabel: 'ساعات العمل',
      hoursDisclaimer:
        'الساعات المدرجة وفق بيانات الدليل المتاحة حالياً. يرجى الاتصال أو المراسلة عبر واتساب للتأكيد، خاصة أيام الجمعة والعطل.',
      bookBtn: 'احجز موعداً',
      directionsAction: 'افتح في خرائط جوجل',
      mapTitle: 'خريطة المركز اللبناني للأسنان — شارع 18 نوفمبر، مسقط',
      mapFallbackHeading: 'شارع 18 نوفمبر، مسقط',
      mapFallbackDesc: 'استخدم رابط خرائط جوجل المعتمد للوصول المباشر إلى موقع المركز.',
      coordinatesLabel: 'الإحداثيات',
      toggleViewMap: 'عرض الخريطة',
      toggleViewCard: 'بطاقة الموقع',
    },
    appointment: {
      kicker: 'طلب موعد',
      heading: 'اطلب موعدك عبر الواتساب.',
      subheading:
        'أدخل تفاصيل موعدك المفضل أدناه. عند الإرسال سيتم تجهيز رسالة واتساب مباشرة لفريق الاستقبال بالمركز اللبناني للأسنان لتأكيد الموعد.',
      fullNameLabel: 'الاسم الكامل',
      fullNamePlaceholder: 'أدخل اسمك الكامل',
      phoneLabel: 'رقم الهاتف',
      phonePlaceholder: '+968 9XXX XXXX',
      dateLabel: 'التاريخ المفضل',
      timeLabel: 'الوقت المفضل',
      timePlaceholder: 'اختر الفترة المناسبة',
      serviceLabel: 'الخدمة المطلوبة',
      servicePlaceholder: 'اختر خدمة الأسنان',
      messageLabel: 'رسالة إضافية',
      messagePlaceholder: 'أضف أي سؤال أو ملاحظة إضافية (اختياري)',
      submitBtn: 'تجهيز طلب الواتساب',
      confirmationDisclaimer:
        'الإرسال يجهز رسالة واتساب للمركز. لا يُعد الموعد مؤكداً رسمياً إلا بعد تواصل فريق المركز معك وتأكيد التوفر.',
      preparedHeading: 'تم تجهيز طلب الواتساب — بانتظار تأكيد المركز',
      preparedDescription:
        'تفاصيل طلبك جاهزة أدناه. يرجى إرسال الرسالة عبر الواتساب ليتمكن المركز من مراجعة التوفر وتأكيد موعدك.',
      preparedPreviewLabel: 'نص رسالة الواتساب الجاهزة',
      openWhatsappBtn: 'افتح محادثة واتساب',
      editRequestBtn: 'تعديل التفاصيل',
      timeSlots: [
        { id: 'morning', label: 'الفترة الصباحية (9:00 ص – 1:00 م)' },
        { id: 'thursday-midday', label: 'الخميس (9:00 ص – 2:00 م)' },
        { id: 'evening', label: 'الفترة المسائية (4:00 م – 8:00 م)' },
        { id: 'flexible', label: 'مرن — أقرب وقت متاح' },
      ],
      otherServiceLabel: 'استشارة عامة / استفسار آخر',
    },
    faq: {
      kicker: 'الأسئلة الشائعة',
      heading: 'أسئلة وإجابات واضحة.',
      subheading:
        'إجابات مفيدة قبل تواصلك معنا — لتكون خطوة تنسيق زيارتك في مسقط سهلة وواضحة.',
      items: [
        {
          id: 'faq-book',
          question: 'كيف يمكنني طلب موعد في المركز؟',
          answer:
            'يمكنك الاتصال مباشرة على ‎+968 9670 0335، أو مراسلتنا عبر الواتساب، أو تعبئة نموذج طلب الموعد في هذه الصفحة، وسيقوم فريق الاستقبال بالرد عليك لتأكيد الموعد المتاح.',
        },
        {
          id: 'faq-hours',
          question: 'ما هي ساعات العمل المتاحة؟',
          answer:
            'تشير بيانات الدليل إلى العمل من الأحد إلى الأربعاء والسبت من 9:00 صباحاً حتى 1:00 ظهراً ومن 4:00 عصراً حتى 8:00 مساءً، والخميس من 9:00 صباحاً حتى 2:00 ظهراً. أما يوم الجمعة والعطل الرسمية فيرجى التواصل للتأكيد.',
        },
        {
          id: 'faq-location',
          question: 'أين يقع المركز اللبناني للأسنان؟',
          answer:
            'يقع المركز في شارع 18 نوفمبر، مسقط، سلطنة عُمان. يمكنك فتح الاتجاهات الدقيقة مباشرة عبر رابط خرائط جوجل الموجود في قسم التواصل.',
        },
        {
          id: 'faq-languages',
          question: 'هل يتوفر التواصل باللغتين العربية والإنجليزية؟',
          answer:
            'نعم، يمكنك التصفح وطلب موعدك باللغة العربية أو الإنجليزية بكل سهولة من خلال زر تبديل اللغة في أعلى الصفحة.',
        },
        {
          id: 'faq-emergency',
          question: 'ماذا أفعل في حال وجود ألم أسنان مفاجئ أو طارئ؟',
          answer:
            'يرجى الاتصال مباشرة على رقم المركز ‎+968 9670 0335 أو مراسلتنا عبر واتساب في أقرب وقت لتقديم الإرشاد السريع وتنسيق المساعدة.',
        },
      ],
    },
    footer: {
      clinicHeading: 'المركز',
      visitHeading: 'زورونا',
      hoursHeading: 'ساعات العمل',
      hoursSummary1: 'الأحد – الأربعاء والسبت: 9:00 ص – 1:00 م / 4:00 م – 8:00 م',
      hoursSummary2: 'الخميس: 9:00 ص – 2:00 م',
      hoursSummary3: 'الجمعة: يرجى التواصل مع المركز للتأكيد',
      mapsLinkLabel: 'فتح خرائط جوجل',
      whatsappLabel: 'محادثة واتساب',
      copyright: '© 2026 المركز اللبناني للأسنان. جميع الحقوق محفوظة.',
      secondaryLine: 'Lebanese Dental Clinic · مسقط، عُمان',
    },
  },
};
