const form = document.getElementById("form");
const input_el = document.getElementById("email");

form.addEventListener("submit", (e) => {
  const email = input_el.value.trim();
  if (!email) {
    showAlert("danger", "Plase enter an email!");
  } else {
    if (ValidateEmail(email)) {
      showAlert("success", "Successfully done!");
      input_el.value="";
    } else {
      showAlert("danger", "Email format is unvalid.");
    }
  }
  e.preventDefault();
});

function ValidateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }

  return false;
}

function showAlert(type, message) {
  const alert = document.createElement("div");
  alert.className = "alert " + type;
  alert.textContent = message;

  form.appendChild(alert);

  setTimeout(() => {
    alert.remove();
  }, 1500);
}
