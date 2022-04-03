const ratingState = document.querySelector(".rating-state-container");
const ratingButtons = document.querySelectorAll(".rating-button");
const thankYouState = document.querySelector(".thankyou-state-container");
const submitButton = document.querySelector(".submit-button");
const userRating = document.querySelector(".survey-result-text .rating");

//click event and obtain value of rating and update survey result text in thank you state
for (const button of ratingButtons) {
  button.addEventListener("click", function () {
    const value = button.value;
    button.classList.add("button.active");
    userRating.innerText = `${value}`;
  });
}

//submit user rating value and show thank you state
submitButton.addEventListener("click", function () {
  ratingState.classList.add("hide");
  thankYouState.classList.remove("hide");
});
