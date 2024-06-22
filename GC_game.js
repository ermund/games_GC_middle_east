function generateTransactionNumber() {
    // Generate a unique transaction number (in this case, a random number)
    let transactionNumber = Math.floor(Math.random() * 1000000);
    
    // Get current date
    let currentDate = new Date().toISOString().slice(0, 10); // Format: YYYY-MM-DD
    
    // Construct transaction ID with date
    let transactionID = transactionNumber + '-' + currentDate;
    
    // Set the generated transaction ID to the input field
    document.getElementById('transactionID').value = transactionID;
}

function validateFormAndSubmit() {
    let form = document.getElementById('gc-userForm');
    let isValid = form.checkValidity();
    
    if (!isValid) {
        // Find all invalid fields and alert the user
        let invalidFields = form.querySelectorAll(':invalid');
        let message = "Please fill out all required fields:";
        
        invalidFields.forEach(function(field) {
            let label = document.querySelector('label[for="' + field.id + '"]');
            let labelText = label ? label.innerText : field.id;
            message += "\n- " + labelText;
        });
        
        alert(message);
    } else {
        // If form is valid, generate transaction number
        generateTransactionNumber();
        
        // Optional: Submit the form programmatically
        // form.submit(); // Uncomment this line if you want to submit the form programmatically
    }
}

document.getElementById('Submitbtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    validateFormAndSubmit();
});