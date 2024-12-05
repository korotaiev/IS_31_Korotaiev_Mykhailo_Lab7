let loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let loginFormElements = this.elements;
  let userEmail = loginFormElements.email.value.trim();
  let userPassword = loginFormElements.password.value.trim();

  if (userEmail === "" || userPassword === "") {
    alert("All form fields must be filled in");
  } else {
    let logedUser = {
      email: userEmail,
      password: userPassword,
    };
    console.log(logedUser);
    this.reset();
  }
});
