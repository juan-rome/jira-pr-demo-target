import { test } from "node:test";
import assert from "node:assert/strict";
import { getCounterState, CHARACTER_LIMIT, NEAR_LIMIT_THRESHOLD } from "./counter.js";

test("counts characters correctly", () => {
  const state = getCounterState("hello");
  assert.equal(state.count, 5);
  assert.equal(state.remaining, CHARACTER_LIMIT - 5);
});

test("is not near the limit well before the threshold", () => {
  const state = getCounterState("a".repeat(400));
  assert.equal(state.isNearLimit, false);
});

test("becomes near-limit exactly at the threshold (480/500)", () => {
  const justBefore = getCounterState("a".repeat(CHARACTER_LIMIT - NEAR_LIMIT_THRESHOLD - 1));
  const atThreshold = getCounterState("a".repeat(CHARACTER_LIMIT - NEAR_LIMIT_THRESHOLD));
  assert.equal(justBefore.isNearLimit, false);
  assert.equal(atThreshold.isNearLimit, true);
});

test("remaining hits zero at exactly the limit", () => {
  const state = getCounterState("a".repeat(CHARACTER_LIMIT));
  assert.equal(state.remaining, 0);
  assert.equal(state.isNearLimit, true);
});

test("remaining goes negative past the limit (hard stop is enforced separately, in the DOM)", () => {
  const state = getCounterState("a".repeat(CHARACTER_LIMIT + 10));
  assert.equal(state.remaining, -10);
});
