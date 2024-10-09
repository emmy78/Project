document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Simple validation
    if (password !== confirmPassword) {
        document.getElementById("result").innerHTML = "Passwords do not match.";
        return;
    }

    // Here you can add code to send the data to a server, for now, we will just display a message
    document.getElementById("result").innerHTML = `Registration successful! Welcome, ${name}.`;
    
    // Optionally, reset the form
    document.getElementById("registrationForm").reset();
});
