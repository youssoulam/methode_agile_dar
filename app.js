// app.js

const form = document.getElementById("loginForm");
const errorBox = document.getElementById("errorBox");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = form.email.value.trim();
  const password = form.password.value.trim();

  // simple validations
  if (!email || !email.includes("@")) {
    showError("Veuillez entrer un email valide.");
    return;
  }

  if (password.length < 6) {
    showError("Le mot de passe doit contenir au moins 6 caractères.");
    return;
  }

  // If ok → simulate login OK
  errorBox.classList.add("hidden");

  alert("Connexion réussie (simulation) ✔️");
});

function showError(msg) {
  errorBox.textContent = msg;
  errorBox.classList.remove("hidden");
}
