//your JS code here. If required.
function handleSubmit(event) {
  event.preventDefault(); 

  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const rememberCheckbox = document.getElementById("remember");

  const username = usernameInput.value;
  const password = passwordInput.value;
  const rememberMe = rememberCheckbox.checked;

  
  if (rememberMe) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  alert("Logged in as " + username);
}

function handleExistingLogin() {
  const savedUsername = localStorage.getItem("username");

  alert("Logged in as " + savedUsername);
}

const loginForm = document.getElementById("login-form");
const existingUserBtn = document.getElementById("existing");

loginForm.addEventListener("submit", handleSubmit);
existingUserBtn.addEventListener("click", handleExistingLogin);