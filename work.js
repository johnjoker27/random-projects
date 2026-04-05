function toggleForms() {
  document.getElementById("loginForm").classList.toggle("hidden");
  document.getElementById("signupForm").classList.toggle("hidden");
}

// SIGNUP
function signup() {
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const error = document.getElementById("signupError");

  error.textContent = "";

  if (!username || !password) {
    error.textContent = "All fields are required.";
    return;
  }

  if (password.length < 6) {
    error.textContent = "Password must be at least 6 characters.";
    return;
  }

  if (password !== confirmPassword) {
    error.textContent = "Passwords do not match.";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || {};

  if (users[username]) {
    error.textContent = "User already exists.";
    return;
  }

  users[username] = password;
  localStorage.setItem("users", JSON.stringify(users));

  alert("Account created successfully!");
  toggleForms();
}

// LOGIN
function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;
  const error = document.getElementById("loginError");

  error.textContent = "";

  let users = JSON.parse(localStorage.getItem("users")) || {};
  const storedPassword = users[username];

  if (!storedPassword) {
    error.textContent = "User not found.";
    return;
  }

  if (storedPassword !== password) {
    error.textContent = "Incorrect password.";
    return;
  }

  // Save logged-in user
  localStorage.setItem("loggedInUser", username);

  // Remember user
  if (document.getElementById("rememberMe").checked) {
    localStorage.setItem("rememberUser", username);
  }

  // Redirect
  window.location.href = "dashboard1.html";
}

// AUTO-FILL remembered username
window.onload = function () {
  const remembered = localStorage.getItem("rememberUser");
  if (remembered) {
    document.getElementById("loginUsername").value = remembered;
  }
};