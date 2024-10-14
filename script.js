// Full-fledged JavaScript for handling form submission and animations
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Basic validation
    if (name && email && message) {
        // Create a modal to confirm message submission
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <h2>Thank You, ${name}!</h2>
                <p>Your message has been sent.</p>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Close modal event
        modal.querySelector('.close-btn').addEventListener('click', function() {
            modal.remove();
        });
        
        // Reset the form fields
        this.reset();
    } else {
        alert("Please fill out all fields.");
    }
});
