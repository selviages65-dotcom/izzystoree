const ownerUsername = "izzystore";
const ownerPassword = "izzy1";
let credentials = {};

function login() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const loginMessage = document.getElementById("login-message");

    if (usernameInput === ownerUsername && passwordInput === ownerPassword) {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("owner-panel").style.display = "block";
        loginMessage.textContent = "";
    } else if (credentials[usernameInput] === passwordInput) {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("user-panel").style.display = "block";
        loginMessage.textContent = "";
    } else {
        loginMessage.textContent = "Invalid credentials.";
    }
}

function createCredentials() {
    const newUsername = document.getElementById("new-username").value;
    const newPassword = document.getElementById("new-password").value;
    const credentialsMessage = document.getElementById("credentials-message");

    if (newUsername && newPassword) {
        credentials[newUsername] = newPassword;
        credentialsMessage.textContent = "Credentials created successfully.";
    } else {
        credentialsMessage.textContent = "Please enter both username and password.";
    }
}

function sendAction(action) {
    const targetNumber = document.getElementById("target-number").value;
    const actionMessage = document.getElementById("action-message");

    if (targetNumber) {
        actionMessage.textContent = `Sending ${action} to ${targetNumber}...`;
        // Simulate sending action
        setTimeout(() => {
            actionMessage.textContent = `${action} sent to ${targetNumber}!`;
        }, 2000);
    } else {
        actionMessage.textContent = "Please enter a target number.";
    }
}