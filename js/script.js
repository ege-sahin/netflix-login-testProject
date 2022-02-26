let inputFocused = {
  email: false,
  password: false,
};

let inputFilled = {
  email: false,
  password: false,
};

let users = [
  ["johndoe@mail.com", "123456789"],
  ["janedoe@mail.com", "987654321"],
  ["michaeljackson@gmail.com", "Mich@el12345"],
  ["testuser@test.com", "TeSt-123-UsEr"],
  ["netflix@clone.com", "asd123qwe"],
];

const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const inputOnFocus = (val) => {
  inputFocused[val.name] = true;
};

const inputOnBlur = () => {
  if (inputFocused.email) {
    if (!validateEmail(emailInput.value) && !validatePhone(emailInput.value)) {
      emailError.style.display = "block";
      emailInput.style.borderBottom = "2px solid #e87c03";
      inputFilled.email = false;
    } else {
      emailError.style.display = "none";
      emailInput.style.borderBottom = "none";
      inputFilled.email = true;
    }
  }
  if (inputFocused.password) {
    if (
      !(passwordInput.value.length >= 4 && passwordInput.value.length <= 60)
    ) {
      passwordError.style.display = "block";
      passwordInput.style.borderBottom = "2px solid #e87c03";
      inputFilled.password = false;
    } else {
      passwordError.style.display = "none";
      passwordInput.style.borderBottom = "none";
      inputFilled.password = true;
    }
  }
};

const validateEmail = (email) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

const validatePhone = (phone) => {
  const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return regex.test(String(phone).toLowerCase());
};

document
  .querySelector("#signin-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    wrongEmail.style.display = "none";
    wrongPassword.style.display = "none";
    wrongFacebook.style.display = "none";
    if (inputFilled.email && inputFilled.password) {
      for (let i = 0; i < users.length; i++) {
        if (users[i][0] == emailInput.value) {
          if (users[i][1] == passwordInput.value) {
            document.location.href = "successful.html";
            return;
          } else {
            wrongPassword.style.display = "block";
            return;
          }
        }
      }
      wrongEmail.style.display = "block";
    }
  });

document
  .querySelector("#facebook-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    wrongEmail.style.display = "none";
    wrongPassword.style.display = "none";
    wrongFacebook.style.display = "none";
    FB.login(function (response) {
      if (response.status === "connected") {
        document.location.href = "successful.html";
      } else {
        wrongFacebook.style.display = "block";
      }
    });
  });
