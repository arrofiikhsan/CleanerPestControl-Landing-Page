

welcomeMessage();

function welcomeMessage() {
    // Prompt the user for their name
    let userResponse = prompt("What is your name?");

    // If userResponse is null or empty, set a default name
    if (userResponse === null || userResponse.trim() === "") {
        userResponse = "Guest";
    }

    // Display the welcome message in the element with id "welcome-speech"
    document.getElementById("welcome-speech").innerText = `Welcome, ${userResponse}! Siapkah Kamu Membasmi Hama Bersama Kami? `;
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    
   
    event.preventDefault();

  
    const typedName = document.getElementById('name').value;
    const typedMessage = document.getElementById('message').value;
    const typedEmail = document.getElementById('email').value;

    document.getElementById('displayFullname').textContent = typedName;
    document.getElementById('displayMessage').textContent = typedMessage;
    document.getElementById('displayMessage').textContent = typedEmail;


    document.getElementById('inputContainer').style.display = 'none';
    document.getElementById('outputContainer').style.display = 'block';
});