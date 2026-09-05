import { nextTheme } from "./theme.js";

const form = document.getElementById("feedback-form");
const themeToggle = document.getElementById("theme-toggle");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
}

applyTheme(localStorage.getItem("theme") || "light");

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const theme = nextTheme(current);
  localStorage.setItem("theme", theme);
  applyTheme(theme);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Thanks for your feedback!");
  form.reset();
});
