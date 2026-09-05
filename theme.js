// Pure logic for the dark-mode toggle — kept separate from the DOM/localStorage
// wiring (script.js) so it's testable without a DOM.

export function nextTheme(current) {
  return current === "dark" ? "light" : "dark";
}
