document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!validateForm()) return;

    let name = document.getElementById("fullname").value;
  });
});

function validateForm() {
  let isValid = true;

  let nameInput = document.getElementById("fullname").value.trim();
  let emailInput = document.getElementById("email").value.trim();
  let phoneInput = document.getElementById("telephone").value.trim();
  let messageInput = document.getElementById("message").value.trim();

  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let phoneError = document.getElementById("phoneError");
  let messageError = document.getElementById("messageError");

  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  messageError.textContent = "";

  if (nameInput === "") {
    nameError.textContent = "Please enter your name";
    isValid = false;
  }
  if (emailInput === "") {
    emailError.textContent = "Please enter your email";
    isValid = false;
  }
  if (phoneInput === "") {
    phoneError.textContent = "Please enter your phone number";
    isValid = false;
  }
  if (messageInput === "") {
    messageError.textContent = "Please enter your message";
    isValid = false;
  }
  return isValid;
}
