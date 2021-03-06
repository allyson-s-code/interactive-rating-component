const ratingState = document.querySelector(".rating-state-container");
const ratingButtons = document.querySelectorAll(".rating-button");
const thankYouState = document.querySelector(".thankyou-state-container");
const submitButton = document.querySelector(".submit-button");
const userRating = document.querySelector(".survey-result-text .rating");

//click event and obtain value of rating and update survey result text in thank you state
for (const button of ratingButtons) {
  button.addEventListener("click", function (e) {
    e.preventDefault;
    const value = button.value;
    userRating.innerText = `${value}`;
    submitButton.disabled = false;
  });
}

//prevent user from submitting without rating
submitButton.disabled = true;

//submit user rating value and show thank you state
//prevent default page reloading
submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  ratingState.classList.add("hide");
  thankYouState.classList.remove("hide");
});
