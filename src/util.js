import { normalizePhoneNumber as canonicalNormalizePhoneNumber } from './shared/utils/phone.js';

export function normalizePhoneNumber(raw) {
  return canonicalNormalizePhoneNumber(raw);
}
