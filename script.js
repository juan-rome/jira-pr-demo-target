const form = document.getElementById("feedback-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Thanks for your feedback!");
  form.reset();
});
