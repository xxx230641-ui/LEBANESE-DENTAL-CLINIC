import React, { useState } from 'react';
import { AlertCircle, CalendarCheck, ExternalLink, Info, MessageCircle } from 'lucide-react';
import { CLINIC_INFO, type Language } from '../data/clinicConfig';
import type { ServiceItem, SiteContent } from '../data/translations';
import {
  buildWhatsAppBookingUrl,
  formatWhatsAppMessage,
  getLocalIsoDate,
  validateAppointmentForm,
  type AppointmentFormData,
  type AppointmentValidationErrors,
} from '../utils/appointment';

interface AppointmentSectionProps {
  lang: Language;
  content: SiteContent['appointment'];
  services: ServiceItem[];
  selectedServiceId: string;
  onServiceChange: (serviceId: string) => void;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  lang,
  content,
  services,
  selectedServiceId,
  onServiceChange,
}) => {
  const [formFields, setFormFields] = useState<Omit<AppointmentFormData, 'serviceId'>>({
    fullName: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const [errors, setErrors] = useState<AppointmentValidationErrors>({});
  const [submittedData, setSubmittedData] = useState<AppointmentFormData | null>(null);

  const formData: AppointmentFormData = {
    ...formFields,
    serviceId: selectedServiceId,
  };

  const serviceOptions = [
    ...services.map((s) => ({ id: s.id, label: s.title })),
    { id: 'general-inquiry', label: content.otherServiceLabel },
  ];

  const handleFieldChange = (field: keyof AppointmentFormData, value: string) => {
    if (field === 'serviceId') {
      onServiceChange(value);
    } else {
      setFormFields((prev) => ({ ...prev, [field]: value }));
    }
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const buildBookingOutput = (data: AppointmentFormData) => {
    const matchedService =
      serviceOptions.find((item) => item.id === data.serviceId)?.label ?? data.serviceId;
    const matchedTime =
      content.timeSlots.find((slot) => slot.id === data.preferredTime)?.label ??
      data.preferredTime;

    return {
      previewMessage: formatWhatsAppMessage(data, matchedService, matchedTime, lang),
      whatsappUrl: buildWhatsAppBookingUrl(
        CLINIC_INFO.whatsappDigits,
        data,
        matchedService,
        matchedTime,
        lang,
      ),
    };
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validation = validateAppointmentForm(formData, lang);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setSubmittedData(null);
      return;
    }

    const { whatsappUrl } = buildBookingOutput(formData);
    setErrors({});
    setSubmittedData(formData);

    const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const prepared = submittedData ? buildBookingOutput(submittedData) : null;
  const todayIso = getLocalIsoDate();

  return (
    <section id="appointment" className="bg-[#F9F6EE] pb-20 sm:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EFEBE1] rounded-2xl p-7 sm:p-11 lg:p-14 border border-[#252525]/8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Copy Column */}
            <div className="lg:col-span-5">
              <p className="text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-[#252525]/60 mb-3">
                {content.kicker}
              </p>

              <h2 className="font-display text-3xl sm:text-5xl font-normal text-[#252525] leading-[1.12] text-balance">
                {content.heading}
              </h2>

              <p className="mt-4 text-sm sm:text-base text-[#252525]/75 leading-relaxed">
                {content.subheading}
              </p>

              <div className="mt-7 p-4 sm:p-5 rounded-xl bg-[#F9F6EE] border border-[#252525]/10 flex items-start gap-3">
                <Info className="w-5 h-5 text-[#C89624] shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-xs sm:text-sm text-[#252525]/80 leading-relaxed">
                  {content.confirmationDisclaimer}
                </p>
              </div>
            </div>

            {/* Right Form / Confirmation-Pending Column */}
            <div className="lg:col-span-7">
              {prepared ? (
                <div
                  className="bg-[#F9F6EE] rounded-2xl border border-[#252525]/10 p-6 sm:p-8 space-y-6"
                  role="status"
                  aria-live="polite"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-11 h-11 rounded-full bg-[#252525] text-[#E9BA4A] flex items-center justify-center shrink-0">
                      <CalendarCheck className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#252525]">
                        {content.preparedHeading}
                      </h3>
                      <p className="mt-1.5 text-sm text-[#252525]/75 leading-relaxed">
                        {content.preparedDescription}
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-[#252525]/10 p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#252525]/55 mb-2.5">
                      {content.preparedPreviewLabel}
                    </p>
                    <pre dir="auto" className="whitespace-pre-wrap font-sans text-sm text-[#252525] leading-relaxed">
                      {prepared.previewMessage}
                    </pre>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <a
                      href={prepared.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-[#252525] bg-[#E9BA4A] hover:bg-[#DDA935] rounded-full transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" aria-hidden="true" />
                      <span>{content.openWhatsappBtn}</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmittedData(null)}
                      className="px-6 py-3.5 text-sm font-medium text-[#252525] bg-white border border-[#252525]/18 hover:bg-[#EFEBE1] rounded-full transition-colors"
                    >
                      {content.editRequestBtn}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="appointment-full-name"
                        className="block text-xs font-semibold tracking-wide text-[#252525]/80 mb-1.5"
                      >
                        {content.fullNameLabel} <span className="text-[#9A7420]">*</span>
                      </label>
                      <input
                        id="appointment-full-name"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        value={formData.fullName}
                        onChange={(e) => handleFieldChange('fullName', e.target.value)}
                        placeholder={content.fullNamePlaceholder}
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={errors.fullName ? 'error-full-name' : undefined}
                        className={`w-full rounded-xl bg-[#F9F6EE] px-4 py-3 text-sm text-[#252525] placeholder:text-[#252525]/45 border transition-colors focus:outline-none focus:ring-2 focus:ring-[#E9BA4A] ${
                          errors.fullName ? 'border-red-700' : 'border-[#252525]/15'
                        }`}
                      />
                      {errors.fullName && (
                        <p id="error-full-name" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="appointment-phone"
                        className="block text-xs font-semibold tracking-wide text-[#252525]/80 mb-1.5"
                      >
                        {content.phoneLabel} <span className="text-[#9A7420]">*</span>
                      </label>
                      <input
                        id="appointment-phone"
                        name="phone"
                        type="tel"
                        dir="ltr"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={(e) => handleFieldChange('phone', e.target.value)}
                        placeholder={content.phonePlaceholder}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'error-phone' : undefined}
                        className={`w-full rounded-xl bg-[#F9F6EE] px-4 py-3 text-sm text-[#252525] placeholder:text-[#252525]/45 border transition-colors focus:outline-none focus:ring-2 focus:ring-[#E9BA4A] tabular-nums ${
                          errors.phone ? 'border-red-700' : 'border-[#252525]/15'
                        }`}
                      />
                      {errors.phone && (
                        <p id="error-phone" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Preferred Date */}
                    <div>
                      <label
                        htmlFor="appointment-date"
                        className="block text-xs font-semibold tracking-wide text-[#252525]/80 mb-1.5"
                      >
                        {content.dateLabel} <span className="text-[#9A7420]">*</span>
                      </label>
                      <input
                        id="appointment-date"
                        name="preferredDate"
                        type="date"
                        dir="ltr"
                        min={todayIso}
                        value={formData.preferredDate}
                        onChange={(e) => handleFieldChange('preferredDate', e.target.value)}
                        aria-invalid={Boolean(errors.preferredDate)}
                        aria-describedby={errors.preferredDate ? 'error-date' : undefined}
                        className={`w-full rounded-xl bg-[#F9F6EE] px-4 py-3 text-sm text-[#252525] border transition-colors focus:outline-none focus:ring-2 focus:ring-[#E9BA4A] tabular-nums ${
                          errors.preferredDate ? 'border-red-700' : 'border-[#252525]/15'
                        }`}
                      />
                      {errors.preferredDate && (
                        <p id="error-date" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.preferredDate}</span>
                        </p>
                      )}
                    </div>

                    {/* Preferred Time */}
                    <div>
                      <label
                        htmlFor="appointment-time"
                        className="block text-xs font-semibold tracking-wide text-[#252525]/80 mb-1.5"
                      >
                        {content.timeLabel} <span className="text-[#9A7420]">*</span>
                      </label>
                      <select
                        id="appointment-time"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={(e) => handleFieldChange('preferredTime', e.target.value)}
                        aria-invalid={Boolean(errors.preferredTime)}
                        aria-describedby={errors.preferredTime ? 'error-time' : undefined}
                        className={`w-full rounded-xl bg-[#F9F6EE] px-4 py-3 text-sm text-[#252525] border transition-colors focus:outline-none focus:ring-2 focus:ring-[#E9BA4A] ${
                          errors.preferredTime ? 'border-red-700' : 'border-[#252525]/15'
                        }`}
                      >
                        <option value="">{content.timePlaceholder}</option>
                        {content.timeSlots.map((slot) => (
                          <option key={slot.id} value={slot.id}>
                            {slot.label}
                          </option>
                        ))}
                      </select>
                      {errors.preferredTime && (
                        <p id="error-time" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.preferredTime}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Dental Service */}
                  <div>
                    <label
                      htmlFor="appointment-service"
                      className="block text-xs font-semibold tracking-wide text-[#252525]/80 mb-1.5"
                    >
                      {content.serviceLabel} <span className="text-[#9A7420]">*</span>
                    </label>
                    <select
                      id="appointment-service"
                      name="serviceId"
                      value={formData.serviceId}
                      onChange={(e) => handleFieldChange('serviceId', e.target.value)}
                      aria-invalid={Boolean(errors.serviceId)}
                      aria-describedby={errors.serviceId ? 'error-service' : undefined}
                      className={`w-full rounded-xl bg-[#F9F6EE] px-4 py-3 text-sm text-[#252525] border transition-colors focus:outline-none focus:ring-2 focus:ring-[#E9BA4A] ${
                        errors.serviceId ? 'border-red-700' : 'border-[#252525]/15'
                      }`}
                    >
                      <option value="">{content.servicePlaceholder}</option>
                      {serviceOptions.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors.serviceId && (
                      <p id="error-service" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.serviceId}</span>
                      </p>
                    )}
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label
                      htmlFor="appointment-message"
                      className="block text-xs font-semibold tracking-wide text-[#252525]/80 mb-1.5"
                    >
                      {content.messageLabel}
                    </label>
                    <textarea
                      id="appointment-message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => handleFieldChange('message', e.target.value)}
                      placeholder={content.messagePlaceholder}
                      className="w-full rounded-xl bg-[#F9F6EE] px-4 py-3 text-sm text-[#252525] placeholder:text-[#252525]/45 border border-[#252525]/15 transition-colors focus:outline-none focus:ring-2 focus:ring-[#E9BA4A]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm font-medium text-[#252525] bg-[#E9BA4A] hover:bg-[#DDA935] rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E9BA4A]"
                    >
                      <MessageCircle className="w-4 h-4" aria-hidden="true" />
                      <span>{content.submitBtn}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
