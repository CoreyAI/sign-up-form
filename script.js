const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  console.log("button pressed");
  validation();
});

function validation() {
  let valid = false;
  valid = passwordCheck();

  if (valid) {
    form.submit();
  }
}

function passwordCheck() {
  const pass1 = form.elements["password"].value;
  const pass2 = form.elements["password-confirm"].value;
  if (pass1 === pass2) {
    return true;
  } else {
    form.elements["password"].style.border = "2px solid red";
    form.elements["password-confirm"].style.border = "2px solid red";
    return false;
  }
}

