// src/utils/uid.js
export function getOrCreateUserId(storageKey = 'tarot_user_id') {
  try {
    const existing = localStorage.getItem(storageKey);
    if (existing) return existing;

    let newId;
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
      newId = crypto.randomUUID();
    } else {
      // Fallback simple uuid-ish
      newId = 'uid-' + Math.random().toString(36).slice(2) + Date.now().toString(36);
    }
    localStorage.setItem(storageKey, newId);
    return newId;
  } catch (e) {
    // If localStorage fails, generate a volatile id (will change per reload)
    return 'volatile-' + Math.random().toString(36).slice(2);
  }
}
