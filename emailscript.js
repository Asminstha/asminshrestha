function sendMail(){
    // Setting parameters
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

    // Initializing emailjs to send values
    emailjs.send("service_axqyuur", "template_w87e97k", parms)
        .then(function(response) {
            alert("Email Sent Successfully!!");
        }, function(error) {
            alert("Failed to send email. Please try again.");
            console.error("EmailJS Error:", error);
        });
}
