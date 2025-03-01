function registerUser(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ name, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");
    window.location.href = "login.html";
}

function loginUser(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let validUser = users.find(user => user.name === name && user.password === password);

    if (validUser) {
        localStorage.setItem("loggedInUser", name);
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password!");
    }
}