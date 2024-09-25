function sendMail(event) {
    // Prevent default form submission
    if (event) event.preventDefault();

    // Get values from the form and sanitize them
    const name = sanitizeInput(document.getElementById("name").value);
    const email = sanitizeInput(document.getElementById("email").value);
    const subject = sanitizeInput(document.getElementById("subject").value);
    const message = sanitizeInput(document.getElementById("message").value);

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email format');
        return;
    }

    // Setting parameters
    let params = {
        name: name,
        email: email,
        subject: subject,
        message: message,
    };

    // Show loading indicator (optional)
    document.getElementById("submit-button").disabled = true; 
    document.getElementById("submit-button").innerText = "Sending...";

    // Initializing emailjs to send values
    emailjs.send("service_axqyuur", "template_w87e97k", params)
        .then(function(response) {
            alert("Email Sent Successfully!!");
            // Reset the form
            document.getElementById("contact-form").reset();
        }, function(error) {
            alert("Failed to send email. Please try again.");
            console.error("EmailJS Error:", error);
        })
        .finally(() => {
            document.getElementById("submit-button").disabled = false;
            document.getElementById("submit-button").innerText = "Submit";
        });
}

// Sanitize function to remove harmful characters
function sanitizeInput(input) {
    return input.replace(/[\r\n]/g, '').trim();
}
