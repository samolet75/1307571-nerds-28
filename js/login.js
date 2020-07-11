var loginLink = document.querySelector(".button-mail");
var loginPopup = document.querySelector(".modal-login");
var loginClose = loginPopup.querySelector(".modal-close");
var loginForm = loginPopup.querySelector(".login-form");
var loginLogin = loginPopup.querySelector(".login-icon-name");
var loginPassword = loginPopup.querySelector(".login-icon-mail");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

loginLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("modal-show");
  loginLogin.focus();
});

loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
});

loginForm.addEventListener("submit", function (evt) {
  if (!loginLogin.value || !loginPassword.value) {
  evt.preventDefault();
} else {
  localStorage.setItem("login", loginLogin.value);
}
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (loginPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      loginPopup.classList.remove("modal-show");
    }
  }
});

