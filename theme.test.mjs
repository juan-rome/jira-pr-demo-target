import { test } from "node:test";
import assert from "node:assert/strict";
import { nextTheme } from "./theme.js";

test("toggles from light to dark", () => {
  assert.equal(nextTheme("light"), "dark");
});

test("toggles from dark to light", () => {
  assert.equal(nextTheme("dark"), "light");
});

test("treats an unset/unknown theme as light, toggling to dark", () => {
  assert.equal(nextTheme(undefined), "dark");
  assert.equal(nextTheme(""), "dark");
});
