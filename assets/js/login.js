// Start Log In
let switchCtn = document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch__circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let allButtons = document.querySelectorAll(".submit");
let form__input = document.querySelectorAll(".form__input");
let aler = document.getElementById("root");
let aler2 = document.getElementById("root2");

function submitFormsignup() {
  let username = document.getElementById("name").value;
  let pass = document.getElementById("password").value;
  let email = document.getElementById("email").value;
  if (username.length == 0 || pass.length == 0 || email.length == 0) {
    aler.innerHTML = `<div class="alert alert-danger w-100 mt-3 text-center" role="alert">
  fill out the missing data
</div>`;
  }
}

function submitFormsignin() {
  let email = document.getElementById("email2").value;
  let pass = document.getElementById("password2").value;
  if (email.length == 0 || pass.length == 0) {
    aler2.innerHTML = `<div class="alert alert-danger w-100 mt-3 text-center" role="alert">
  fill out the missing data
</div>`;
  }
}

form__input.forEach((item) => {
  item.addEventListener("keydown", () => {
    aler.innerHTML = "";
    aler2.innerHTML = "";
  });
});

let getButtons = (e) => e.preventDefault();

let changeForm = (e) => {
  switchCtn.classList.add("is-gx");
  setTimeout(function () {
    switchCtn.classList.remove("is-gx");
  }, 1500);

  switchCtn.classList.toggle("is-txr");
  switchCircle[0].classList.toggle("is-txr");
  switchCircle[1].classList.toggle("is-txr");

  switchC1.classList.toggle("is-hidden");
  switchC2.classList.toggle("is-hidden");
  aContainer.classList.toggle("is-txl");
  bContainer.classList.toggle("is-txl");
  bContainer.classList.toggle("is-z200");
};

let mainF = (e) => {
  for (var i = 0; i < allButtons.length; i++)
    allButtons[i].addEventListener("click", getButtons);
  for (var i = 0; i < switchBtn.length; i++)
    switchBtn[i].addEventListener("click", changeForm);
};

window.addEventListener("load", mainF);
// End Log In
