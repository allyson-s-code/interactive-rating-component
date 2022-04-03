const ratingState = document.querySelector(".rating-state-container");
const ratingButtons = document.querySelectorAll(".rating-button");
const thankYouState = document.querySelector(".thankyou-state-container");
const submitButton = document.querySelector(".submit-button");

ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.value;
    console.log(value);
  });
});

submitButton.addEventListener("click", function () {
  ratingState.classList.add(".hide");
  thankYouState.classList.remove(".hide");
});
