const ratingState = document.querySelector(".rating-state-container");
const ratingButtons = document.querySelectorAll(".rating-button");
const thankYouState = document.querySelector(".thankyou-state-container");
const submitButton = document.querySelector(".submit-button");
const userRating = document.querySelector(".survey-result-text .rating");

//click event and obtain value of rating
for (const button of ratingButtons) {
  button.addEventListener("click", function () {
    const value = button.value;
    //console.log(value);
    button.classList.add("button.active");
    userRating.innerText = `${value}`;
  });
}

//function to update the survey result text in thank you state

//submit user rating value and update survey result span and show thank you state
submitButton.addEventListener("click", function () {
  ratingState.classList.add("hide");
  thankYouState.classList.remove("hide");
});

//ratingButtons.forEach((button) => {
//button.addEventListener("click", () => {
//const value = button.value;
//console.log(value);
//});
//});
