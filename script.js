
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

   
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    
    if (name && email && message) {
       
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
        
        modal.querySelector('.close-btn').addEventListener('click', function() {
            modal.remove();
        });
        
       
        this.reset();
    } else {
        alert("Please fill out all fields.");
    }
});
