var loginLink = document.querySelector(".login-link");
var loginPopup = document.querySelector(".modal-login");
loginLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    loginPopup.classList.add("modal-show");
  });