import { getCounterState, CHARACTER_LIMIT } from "./counter.js";

const form = document.getElementById("feedback-form");
const textarea = document.getElementById("message");
const counter = document.getElementById("char-counter");

function updateCounter() {
  const { remaining, isNearLimit } = getCounterState(textarea.value, CHARACTER_LIMIT);
  counter.textContent = `${remaining} characters remaining`;
  counter.classList.toggle("near-limit", isNearLimit);
}

textarea.addEventListener("input", updateCounter);
updateCounter();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Thanks for your feedback!");
  form.reset();
  updateCounter();
});
