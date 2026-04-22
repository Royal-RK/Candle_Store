let email = document.querySelector(".eml");
let pss = document.querySelector(".pas");
let emailEre = document.querySelector("#EmailError");
let pasErr = document.querySelector("#pasError");

let emailCheck = email.addEventListener("keyup", () => {
  let data = email.value;
  if (data.length < 1) {
    emailEre.innerHTML = "Required field";
  } else if (data.length <= 2) {
    emailEre.innerHTML = "Minimum 3 Characters";
  } else if (!data.includes("@")) {
    emailEre.innerHTML = "email must contain @";
  } else {
    emailEre.innerHTML = "";
  }
});
let passCheck = pss.addEventListener("keyup", () => {
  let Data = pss.value;
  if (Data.length < 1) {
    pasErr.innerHTML = "Required field";
  } else if (Data.length < 5) {
    pasErr.innerHTML = "Minimum 5 characters";
  } else if (!/[A-Z]/.test(Data)) {
    pasErr.innerHTML = "Add at least 1 uppercase letter";
  } else if (!/[a-z]/.test(Data)) {
    pasErr.innerHTML = "Add at least 1 lowercase letter";
  } else if (!/[0-9]/.test(Data)) {
    pasErr.innerHTML = "Add at least 1 number";
  } else if (Data.length > 8) {
    pasErr.innerHTML = "Maximum 8 characters";
  } else {
    pasErr.innerHTML = "";
  }
});
