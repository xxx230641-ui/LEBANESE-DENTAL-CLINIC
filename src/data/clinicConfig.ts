export type Language = 'en' | 'ar';

export interface OpeningHourEntry {
  id: string;
  dayEn: string;
  dayAr: string;
  hoursEn: string;
  hoursAr: string;
  isNoteOnly?: boolean;
}

export const CLINIC_INFO = {
  nameEn: 'Lebanese Dental Clinic',
  nameAr: 'المركز اللبناني للأسنان',
  addressEn: '18th November Street, Muscat, Sultanate of Oman',
  addressAr: 'شارع 18 نوفمبر، مسقط، سلطنة عُمان',
  shortAddressEn: '18th November Street, Muscat, Oman.',
  shortAddressAr: 'شارع 18 نوفمبر، مسقط، عُمان.',
  phoneDisplay: '+968 9670 0335',
  phoneHref: 'tel:+96896700335',
  whatsappDigits: '96896700335',
  whatsappUrl: 'https://wa.me/96896700335',
  mapsUrl: 'https://maps.google.com/?cid=7180180139432876359',
  coordinates: {
    lat: 23.598229,
    lng: 58.39416,
  },
  googleRating: '5.0',
  approximateReviewCount: 90,
} as const;

export const CLINIC_IMAGES = {
  heroLounge: '/src/assets/images/luminara_hero_lounge_1795253593440.jpg',
  practiceInterior: '/src/assets/images/luminara_practice_interior_1795253594905.jpg',
  patientMirror: '/src/assets/images/luminara_patient_mirror_1795253594761.jpg',
  gentleCare: '/src/assets/images/luminara_gentle_care_1795253593650.jpg',
  smileGold: '/src/assets/images/luminara_smile_gold_1795253594339.jpg',
  naturalSmile: '/src/assets/images/healthy_natural_smile_1795202586994.jpg',
  hygieneTray: '/src/assets/images/dental_hygiene_care_1795202585754.jpg',
} as const;

/**
 * Editable initial opening hours based on currently available directory listings.
 * Update entries below before publishing if clinic hours change.
 */
export const INITIAL_OPENING_HOURS: OpeningHourEntry[] = [
  {
    id: 'sunday',
    dayEn: 'Sunday',
    dayAr: 'الأحد',
    hoursEn: '9:00 AM – 1:00 PM / 4:00 PM – 8:00 PM',
    hoursAr: '9:00 ص – 1:00 م / 4:00 م – 8:00 م',
  },
  {
    id: 'monday',
    dayEn: 'Monday',
    dayAr: 'الإثنين',
    hoursEn: '9:00 AM – 1:00 PM / 4:00 PM – 8:00 PM',
    hoursAr: '9:00 ص – 1:00 م / 4:00 م – 8:00 م',
  },
  {
    id: 'tuesday',
    dayEn: 'Tuesday',
    dayAr: 'الثلاثاء',
    hoursEn: '9:00 AM – 1:00 PM / 4:00 PM – 8:00 PM',
    hoursAr: '9:00 ص – 1:00 م / 4:00 م – 8:00 م',
  },
  {
    id: 'wednesday',
    dayEn: 'Wednesday',
    dayAr: 'الأربعاء',
    hoursEn: '9:00 AM – 1:00 PM / 4:00 PM – 8:00 PM',
    hoursAr: '9:00 ص – 1:00 م / 4:00 م – 8:00 م',
  },
  {
    id: 'thursday',
    dayEn: 'Thursday',
    dayAr: 'الخميس',
    hoursEn: '9:00 AM – 2:00 PM',
    hoursAr: '9:00 ص – 2:00 م',
  },
  {
    id: 'friday',
    dayEn: 'Friday',
    dayAr: 'الجمعة',
    hoursEn: 'Contact the clinic to confirm',
    hoursAr: 'يرجى التواصل مع المركز للتأكيد',
    isNoteOnly: true,
  },
  {
    id: 'saturday',
    dayEn: 'Saturday',
    dayAr: 'السبت',
    hoursEn: '9:00 AM – 1:00 PM / 4:00 PM – 8:00 PM',
    hoursAr: '9:00 ص – 1:00 م / 4:00 م – 8:00 م',
  },
];
