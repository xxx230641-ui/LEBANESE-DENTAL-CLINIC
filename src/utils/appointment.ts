import type { Language } from '../data/clinicConfig';

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  serviceId: string;
  message: string;
}

export type AppointmentValidationErrors = Partial<Record<keyof AppointmentFormData, string>>;

export function normalizePhoneDigits(phone: string): string {
  return phone.replace(/[^\d+]/g, '').trim();
}

export function isValidPhoneNumber(phone: string): boolean {
  const digitsOnly = phone.replace(/\D/g, '');
  return digitsOnly.length >= 8 && digitsOnly.length <= 15;
}

export function validateAppointmentForm(
  data: AppointmentFormData,
  lang: Language,
): { isValid: boolean; errors: AppointmentValidationErrors } {
  const errors: AppointmentValidationErrors = {};
  const isAr = lang === 'ar';

  if (data.fullName.trim().length < 2) {
    errors.fullName = isAr
      ? 'يرجى إدخال الاسم الكامل (حرفان على الأقل).'
      : 'Please enter your full name (at least 2 characters).';
  }

  if (!data.phone.trim()) {
    errors.phone = isAr
      ? 'يرجى إدخال رقم الهاتف للتواصل.'
      : 'Please enter a contact phone number.';
  } else if (!isValidPhoneNumber(data.phone)) {
    errors.phone = isAr
      ? 'يرجى إدخال رقم هاتف صحيح (8 إلى 15 رقماً).'
      : 'Please enter a valid phone number (8 to 15 digits).';
  }

  if (!data.preferredDate.trim()) {
    errors.preferredDate = isAr
      ? 'يرجى اختيار التاريخ المفضل.'
      : 'Please select a preferred date.';
  }

  if (!data.preferredTime.trim()) {
    errors.preferredTime = isAr
      ? 'يرجى اختيار الوقت المفضل.'
      : 'Please select a preferred time.';
  }

  if (!data.serviceId.trim()) {
    errors.serviceId = isAr
      ? 'يرجى اختيار الخدمة المطلوبة.'
      : 'Please select a dental service.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function formatWhatsAppMessage(
  data: AppointmentFormData,
  serviceLabel: string,
  timeLabel: string,
  lang: Language,
): string {
  const cleanName = data.fullName.trim();
  const cleanPhone = normalizePhoneDigits(data.phone) || data.phone.trim();
  const cleanDate = data.preferredDate.trim();
  const cleanNotes = data.message.trim();

  if (lang === 'ar') {
    const lines = [
      'السلام عليكم، المركز اللبناني للأسنان.',
      'أود طلب موعد جديد بالتفاصيل التالية (بانتظار تأكيد المركز):',
      '',
      `الاسم الكامل: ${cleanName}`,
      `رقم الهاتف: ${cleanPhone}`,
      `الخدمة المطلوبة: ${serviceLabel}`,
      `التاريخ المفضل: ${cleanDate}`,
      `الوقت المفضل: ${timeLabel}`,
    ];

    if (cleanNotes) {
      lines.push(`ملاحظات إضافية: ${cleanNotes}`);
    }

    return lines.join('\n');
  }

  const lines = [
    'Hello Lebanese Dental Clinic,',
    'I would like to request an appointment with the following details (subject to clinic confirmation):',
    '',
    `Full Name: ${cleanName}`,
    `Phone Number: ${cleanPhone}`,
    `Dental Service: ${serviceLabel}`,
    `Preferred Date: ${cleanDate}`,
    `Preferred Time: ${timeLabel}`,
  ];

  if (cleanNotes) {
    lines.push(`Additional Message: ${cleanNotes}`);
  }

  return lines.join('\n');
}

export function buildWhatsAppBookingUrl(
  clinicWhatsappDigits: string,
  data: AppointmentFormData,
  serviceLabel: string,
  timeLabel: string,
  lang: Language,
): string {
  const message = formatWhatsAppMessage(data, serviceLabel, timeLabel, lang);
  const cleanDigits = clinicWhatsappDigits.replace(/\D/g, '');
  return `https://wa.me/${cleanDigits}?text=${encodeURIComponent(message)}`;
}
