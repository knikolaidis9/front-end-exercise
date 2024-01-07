
// add event listener to check if we get a valid email address
document.addEventListener("DOMContentLoaded", function () {
  var submitBtn = document.getElementById("submitBtn");
  var emailInput = document.getElementById("email");
  var errorMessage = document.querySelector(".error-message");

  submitBtn.addEventListener("click", function () {
    // email validation regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      errorMessage.textContent = "Please enter a valid email address.";
      errorMessage.style.display = "block";
    } else {
      errorMessage.style.display = "none";
      // succefully subcribed
      alert("Thank you for subscribing!");
    }
  });
});

// copy paste disabled

document.addEventListener("copy", (e) => {
  e.preventDefault();
});

document.addEventListener("paste", (e) => {
  e.preventDefault();
});

// right click off

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
