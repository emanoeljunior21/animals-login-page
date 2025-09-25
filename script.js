const passwordField = document.getElementById("pass");
const togglePassword = document.createElement("span");
togglePassword.classList.add("show-password");
togglePassword.textContent = "👁️";
passwordField.parentNode.appendChild(togglePassword);

togglePassword.addEventListener("click", () => {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    togglePassword.textContent = "🙈";
  } else {
    passwordField.type = "password";
    togglePassword.textContent = "👁️";
  }
});

const loginButton = document.querySelector(".input-enviar");
loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  if (user === "" || pass === "") {
    alert("Por favor, preencha todos os campos!");
  } else {
    alert(`Bem-vindo(a), ${user}!`);
  }
});
