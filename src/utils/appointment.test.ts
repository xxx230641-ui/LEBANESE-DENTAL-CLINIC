import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildWhatsAppBookingUrl,
  formatWhatsAppMessage,
  getLocalIsoDate,
  isValidPhoneNumber,
  validateAppointmentForm,
  type AppointmentFormData,
} from './appointment';

const validPayload: AppointmentFormData = {
  fullName: 'Layla Al-Harthi',
  phone: '+968 9123 4567',
  preferredDate: '2026-12-01',
  preferredTime: 'morning',
  serviceId: 'dental-implants',
  message: 'Initial consultation inquiry',
};

test('isValidPhoneNumber accepts valid Oman and international numbers and rejects short values', () => {
  assert.equal(isValidPhoneNumber('+968 9670 0335'), true);
  assert.equal(isValidPhoneNumber('91234567'), true);
  assert.equal(isValidPhoneNumber('12345'), false);
  assert.equal(isValidPhoneNumber('abc'), false);
});

test('getLocalIsoDate formats local calendar date as YYYY-MM-DD', () => {
  const sample = new Date(2026, 10, 5, 1, 30, 0);
  assert.equal(getLocalIsoDate(sample), '2026-11-05');
});

test('validateAppointmentForm returns errors for missing fields in English and Arabic', () => {
  const empty: AppointmentFormData = {
    fullName: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    serviceId: '',
    message: '',
  };

  const enResult = validateAppointmentForm(empty, 'en');
  assert.equal(enResult.isValid, false);
  assert.ok(enResult.errors.fullName);
  assert.ok(enResult.errors.phone);
  assert.ok(enResult.errors.preferredDate);
  assert.ok(enResult.errors.preferredTime);
  assert.ok(enResult.errors.serviceId);

  const arResult = validateAppointmentForm({ ...empty, phone: '123' }, 'ar');
  assert.equal(arResult.isValid, false);
  assert.match(arResult.errors.phone ?? '', /8 إلى 15/);
});

test('validateAppointmentForm passes with complete valid inputs', () => {
  const res = validateAppointmentForm(validPayload, 'en');
  assert.equal(res.isValid, true);
  assert.deepEqual(res.errors, {});
});

test('formatWhatsAppMessage includes all fields and notes clinic confirmation requirement', () => {
  const enMsg = formatWhatsAppMessage(
    validPayload,
    'Dental Implants',
    'Morning (9:00 AM – 1:00 PM)',
    'en',
  );
  assert.match(enMsg, /Layla Al-Harthi/);
  assert.match(enMsg, /\+96891234567/);
  assert.match(enMsg, /Dental Implants/);
  assert.match(enMsg, /2026-12-01/);
  assert.match(enMsg, /subject to clinic confirmation/i);
  assert.match(enMsg, /Initial consultation inquiry/);

  const arMsg = formatWhatsAppMessage(
    validPayload,
    'زراعة الأسنان',
    'الفترة الصباحية (9:00 ص – 1:00 م)',
    'ar',
  );
  assert.match(arMsg, /المركز اللبناني للأسنان/);
  assert.match(arMsg, /بانتظار تأكيد المركز/);
  assert.match(arMsg, /زراعة الأسنان/);
});

test('buildWhatsAppBookingUrl produces properly encoded wa.me URL', () => {
  const url = buildWhatsAppBookingUrl(
    '96896700335',
    validPayload,
    'Dental Implants',
    'Morning (9:00 AM – 1:00 PM)',
    'en',
  );
  assert.ok(url.startsWith('https://wa.me/96896700335?text='));
  const decoded = decodeURIComponent(url.split('?text=')[1]);
  assert.match(decoded, /Layla Al-Harthi/);
});
