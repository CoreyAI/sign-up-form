// Declares and initializes form variable whenever a completed form is submitted.
const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevents form submission from going through prior to validation.
  validation();
});

// Validates the form inputs and submits the form if all validations pass.
// Note: Only password check is currently set up. Function is scalable for
//       additional validation checks.
function validation() {
  let valid = false;
  valid = passwordCheck();

  if (valid) {
    form.submit();
  }
}

// Compares both password inputs to ensure that they match.
function passwordCheck() {
  const pass1 = form.elements["password"].value;
  const pass2 = form.elements["password-confirm"].value;
  if (pass1 === pass2) {
    return true;
  } else {
    passwordFalse();
    return false;
  }
}

// Provides user with error feedback for mis-matched passwords.
function passwordFalse() {
  form.elements["password"].style.border = "2px solid red";
  form.elements["password-confirm"].style.border = "2px solid red";
  form.querySelector("label[for=password] > .error").innerHTML = "* Passwords do not match";
}