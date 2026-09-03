// Pure logic for the feedback textarea's character counter — kept
// separate from DOM wiring (script.js) so it's testable without a DOM.

export const CHARACTER_LIMIT = 500;
export const NEAR_LIMIT_THRESHOLD = 20;

/**
 * @param {string} text
 * @param {number} limit
 * @returns {{ count: number, remaining: number, isNearLimit: boolean }}
 */
export function getCounterState(text, limit = CHARACTER_LIMIT) {
  const count = text.length;
  const remaining = limit - count;
  return {
    count,
    remaining,
    isNearLimit: remaining <= NEAR_LIMIT_THRESHOLD,
  };
}
