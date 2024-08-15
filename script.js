document.addEventListener("DOMContentLoaded", function () {
  const ratingState = document.querySelector(".rating-state");
  const thankYouState = document.querySelector(".thankyou-state");
  const submitBtn = document.querySelector(".submit-btn");
  const ratingBtns = document.querySelectorAll(".rating-btn");
  const selectedRating = document.getElementById("selectedRating");

  let userRating = null;

  ratingBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove 'selected' class from all buttons
      ratingBtns.forEach((btn) => btn.classList.remove("selected"));
      // Add 'selected' class to the clicked button
      btn.classList.add("selected");
      // Set the userRating to the value of the clicked button
      userRating = btn.value;
    });
  });

  submitBtn.addEventListener("click", () => {
    if (userRating) {
      // Update the selectedRating text
      selectedRating.textContent = userRating;
      // Hide the rating state
      ratingState.style.display = "none";
      // Show the thank you state
      thankYouState.style.display = "block";
    } else {
      alert("Please select a rating before submitting.");
    }
  });
});
